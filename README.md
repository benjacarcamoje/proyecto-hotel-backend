# RedNorte Proyecto Fullstack

Este proyecto contiene:
- `frontend/`: aplicación React que consume el BFF.
- `bff-rednorte/`: Backend For Frontend que integra `ms-pacientes` y `ms-citas`.
- `ms-pacientes/`: microservicio de pacientes.
- `ms-citas/`: microservicio de citas.
- `maven-archetypes/backend-archetype/`: arquetipo Maven base para nuevos microservicios.
- `docs/`: documentación de patrones, branching y repositorios.

## Ejecución del sistema
1. Iniciar `ms-pacientes`:
```bash
cd ms-pacientes
mvn spring-boot:run
```
2. Iniciar `ms-citas`:
```bash
cd ../ms-citas
mvn spring-boot:run
```
3. Iniciar el BFF:
```bash
cd ../bff-rednorte
mvn spring-boot:run
```
4. Iniciar el frontend:
```bash
cd ../frontend
npm install
npm run dev
```

## Puntos clave implementados
- `ms-pacientes` ahora expone `GET /api/pacientes/{id}` y `GET /api/pacientes/rut/{rut}`.
- `ms-citas` ofrece `GET /api/citas/paciente/{pacienteId}` usando Repository y Factory Method.
- `bff-rednorte` agrega `GET /bff/pacientes` y `GET /bff/paciente-citas/{id}`.
- `frontend/` usa React, Vite y pruebas unitarias con Vitest.
- Se incluyeron documentos de patrones, branching y repositorios en `docs/`.

## Documentación adicional
- `docs/analisis_patrones_arquetipos.md`
- `docs/plan_branching.md`
- `docs/repositorios.txt`
- `maven-archetypes/backend-archetype/README.md`
