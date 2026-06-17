const jwt = require('jsonwebtoken');
const JWT_SECRET = process.env.JWT_SECRET || 'ClaveSecretaPorDefecto';

module.exports = (req, res, next) => {
  // Buscamos el token en los headers de la petición HTTP
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1]; // Formato esperado: "Bearer TOKEN"

  if (!token) {
    return res.status(401).json({ error: "Acceso denegado. No se proporcionó un token." });
  }

  try {
    // Verificamos si el token es real y no ha expirado
    const verificado = jwt.verify(token, JWT_SECRET);
    req.usuario = verificado; // Guardamos los datos del usuario en la petición
    next(); // Validado correctamente, lo dejamos continuar a la ruta
  } catch (error) {
    res.status(403).json({ error: "Token inválido o expirado." });
  }
};