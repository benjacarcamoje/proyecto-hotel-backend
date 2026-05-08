# Análisis de Patrones y Arquetipos

## 1. Patrones de diseño aplicados

### Frontend
- **Facade / Service**: Se implementó en `frontend/src/hooks/usePatientApi.jsx` para centralizar las llamadas al backend y mantener los componentes React desacoplados de la lógica de red.
- **Container / Presentational**: El componente `App.jsx` administra el estado y la lógica de negocio, mientras que `PatientList.jsx` y `PatientDetail.jsx` solo se encargan de la presentación.
- **Custom Hook / Hook de servicio**: Se usa un módulo de servicio que actúa como una capa de api, facilitando la reutilización y las pruebas.

### Backend
- **Repository**: El microservicio `ms-pacientes` utiliza `PacienteRepository`, y `ms-citas` ahora usa `CitaRepository` con un método personalizado `findByPacienteId`.
- **DTO / Adapter**: El BFF (`bff-rednorte`) utiliza DTOs (`PacienteDTO` y `CitaDTO`) para adaptar los datos de los microservicios a una respuesta uniforme.
- **Factory Method**: `CitaFactory` en `ms-citas` crea objetos `Cita` según el tipo y prioriza el procesamiento.
- **BFF como Facade de API**: La capa `bff-rednorte` expone un punto único de acceso para el frontend y simplifica la interacción con los microservicios.

## 2. Patrones arquitectónicos
- **BFF (Backend For Frontend)**: Ofrece una vista optimizada para el frontend, mejorando la coherencia y evitando llamadas directas a múltiples microservicios.
- **Microservicios**: `ms-pacientes` y `ms-citas` son servicios independientes con responsabilidades aisladas.
- **Database per Service**: Cada microservicio puede gestionar su propia persistencia sin acoplamientos externos.

## 3. Justificación
- La capa BFF permite escalar el frontend y backend de forma independiente, reduciendo la complejidad de las integraciones directas.
- El patrón Repository mejora la mantenibilidad y facilita pruebas unitarias.
- Los DTOs garantizan que los cambios en los modelos internos no se propaguen directamente al cliente.
- El Factory Method en `ms-citas` organiza la lógica de creación de citas, facilitando futuras extensiones de tipos de cita.

## 4. Aplicación práctica
- `frontend/` contiene la UI React con estructura `src/`, `components/`, `hooks/` y pruebas.
- `bff-rednorte/` centraliza la integración entre el frontend y los servicios de pacientes y citas.
- `ms-pacientes/` y `ms-citas/` son microservicios independientes.
- `maven-archetypes/backend-archetype/` incluye un arquetipo Maven base para nuevos servicios backend.
