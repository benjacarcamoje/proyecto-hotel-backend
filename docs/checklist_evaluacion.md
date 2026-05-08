# Checklist de Evaluacion Parcial 2

## Encargo grupal

- Frontend NPM: cumple. Existe `frontend/package.json`, estructura `src/`, componentes React, README, scripts `dev`, `build` y `test`.
- Backend For Frontend: cumple. Existe `bff-rednorte`, expone `/bff/pacientes` y `/bff/paciente-citas/{id}`, integra `ms-pacientes` y `ms-citas` con OpenFeign.
- Microservicios: cumple. Existen `ms-pacientes` en puerto `8081` y `ms-citas` en puerto `8082`.
- Arquetipo Maven: cumple. Existe `maven-archetypes/backend-archetype` con `pom.xml`, metadatos y README.
- Patrones de diseno: cumple. Se evidencian Facade/Service y Container/Presentational en frontend; Repository, DTO/Adapter, Factory Method y BFF como Facade en backend.
- Patrones arquitectonicos: cumple. Arquitectura BFF + microservicios, con separacion por responsabilidad.
- Pruebas unitarias: cumple base. Frontend, BFF y microservicios tienen pruebas ejecutables. Conviene mencionar que la cobertura es inicial, no exhaustiva.
- Branching: documentado en `docs/plan_branching.md`. Falta reemplazar la recomendacion por evidencia real si el docente exige historial de ramas, merges o conflictos desde GitHub.
- Repositorios: documentado en `docs/repositorios.txt`. Falta reemplazar `tu-usuario` por URLs reales antes de entregar.

## Validacion tecnica realizada

- `npm.cmd test`: 1 test frontend OK.
- `npm.cmd run build`: build frontend OK.
- `bff-rednorte`: 3 tests OK.
- `ms-pacientes`: 1 test OK.
- `ms-citas`: 3 tests OK.
- BFF validado en vivo en `http://127.0.0.1:8085/bff/pacientes`.
- Endpoint agregado validado en `http://127.0.0.1:8085/bff/paciente-citas/1`.

## Riesgos antes de entregar

- Actualizar enlaces reales de GitHub en `docs/repositorios.txt`.
- Exportar `analisis_patrones_arquetipos.md` y `plan_branching.md` a PDF si la pauta lo exige en PDF.
- Verificar que el ZIP/RAR no incluya `node_modules`, `target` ni archivos pesados innecesarios.
- Si se defiende branching, mostrar capturas o historial real de ramas, commits, merges y resolucion de conflictos.
