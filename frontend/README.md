# RedNorte Frontend

Este es el componente frontend del proyecto RedNorte, construido con React y Vite.

## Requisitos
- Node.js 18+ o superior
- npm o yarn instalado
- Backend BFF disponible en `http://localhost:8080`

## Instalación
```bash
cd frontend
npm install
```

## Ejecución en desarrollo
```bash
npm run dev
```

Abre el navegador en `http://localhost:5173`.

## Pruebas unitarias
```bash
npm run test
```

## Estructura
- `src/` contiene los componentes y lógica principal.
- `public/` puede contener recursos estáticos.
- `package.json` define dependencias y scripts.

## Conexión con Backend
El frontend usa la API de BFF en `http://localhost:8080/bff`.
Asegúrate de iniciar primero los microservicios `ms-pacientes`, `ms-citas` y `bff-rednorte`.
