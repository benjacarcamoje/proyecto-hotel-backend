require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const db = require('./models'); // Carga los modelos de Sequelize de forma automática
const authMiddleware = require('./middlewares/authMiddleware'); // Importa nuestro guardia

const app = express();
app.use(cors());
app.use(express.json());

const JWT_SECRET = process.env.JWT_SECRET || 'ClaveSecretaPorDefecto';

// ====================================================
// HITO 2: REGISTRO DE USUARIOS
// ====================================================
app.post('/auth/register', async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: "El email y la contraseña son obligatorios." });
    }

    const usuarioExiste = await db.Usuario.findOne({ where: { email } });
    if (usuarioExiste) {
      return res.status(400).json({ error: "El correo electrónico ya está registrado." });
    }

    // Encriptamos la contraseña por seguridad con un hash de 10 vueltas
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const nuevoUsuario = await db.Usuario.create({
      email,
      password: hashedPassword
    });

    res.status(201).json({
      mensaje: "Usuario registrado con éxito",
      usuario: { id: nuevoUsuario.id, email: nuevoUsuario.email }
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error en el servidor al registrar usuario." });
  }
});

// ====================================================
// HITO 2: LOGIN Y EMISIÓN DE JWT
// ====================================================
app.post('/auth/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: "Faltan datos por rellenar." });
    }

    const usuario = await db.Usuario.findOne({ where: { email } });
    if (!usuario) {
      return res.status(401).json({ error: "Credenciales incorrectas." });
    }

    // Comparamos la clave ingresada con el hash guardado
    const passwordCorrecto = await bcrypt.compare(password, usuario.password);
    if (!passwordCorrecto) {
      return res.status(401).json({ error: "Credenciales incorrectas." });
    }

    // Generamos el Token JWT firmado con nuestra clave secreta
    const token = jwt.sign(
      { id: usuario.id, email: usuario.email },
      JWT_SECRET,
      { expiresIn: '2h' }
    );

    res.json({
      mensaje: "Inicio de sesión exitoso",
      token: token
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error en el servidor al iniciar sesión." });
  }
});

// ====================================================
// HITO 3: LISTAR HABITACIONES (PÚBLICO)
// ====================================================
app.get('/habitaciones', async (req, res) => {
  try {
    const habitaciones = await db.Habitacion.findAll();
    res.json(habitaciones);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al obtener las habitaciones." });
  }
});

// ====================================================
// HITO 3: CREAR RESERVA (PROTEGIDA CON MIDDLEWARE)
// ====================================================
app.post('/reservas', authMiddleware, async (req, res) => {
  try {
    const { habitacionId, fechaInicio, fechaFin } = req.body;
    
    // Obtenemos el id del usuario de forma segura directo desde el token validado
    const usuarioId = req.usuario.id; 

    const nuevaReserva = await db.Reserva.create({
      usuarioId,
      habitacionId,
      fechaInicio,
      fechaFin
    });

    res.status(201).json({
      mensaje: "¡Reserva creada con éxito para el Hito 3!",
      reserva: nuevaReserva
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al procesar la reserva." });
  }
});

// ====================================================
// CONFIGURACIÓN DE ARRANQUE
// ====================================================
const PORT = process.env.PORT || 3000;
app.listen(PORT, async () => {
  console.log(`\n==================================================`);
  console.log(` Servidor corriendo en http://localhost:${PORT}`);
  console.log(`==================================================`);
  try {
    await db.sequelize.authenticate();
    console.log('  Base de datos conectada con éxito.');
  } catch (e) {
    console.error('  Error al conectar la Base de Datos:', e);
  }
});