# Plan de Branching

## Estrategia de ramas
Se recomienda usar una estrategia tipo **Git Flow simplificado**:

- `main`: rama estable de producción.
- `feature/frontend-react`: desarrollo del frontend React.
- `feature/backend-bff`: integración del BFF y corrección de endpoints.
- `feature/backend-services`: mejoras en `ms-pacientes` y `ms-citas`.
- `docs`: documentación y entregables.

## Flujo de trabajo
1. Crear una rama de funcionalidad a partir de `main`.
2. Hacer commits pequeños y claros.
3. Enviar un Pull Request o merge request para revisión.
4. Integrar en `main` cuando se apruebe y pase las pruebas.

## Gestión de conflictos
- Resolver conflictos localmente en la rama de feature.
- Revisar cambios en `git diff` antes de hacer merge.
- Verificar que las pruebas unitarias siguen pasando después del merge.

## Ejemplos de ramas
- `feature/frontend-react`: nueva UI y pruebas unitarias del frontend.
- `feature/bff-integration`: endpoints de agregación en `bff-rednorte`.
- `feature/microservicios-apirest`: endpoints y repositorios de los microservicios.

## Buenas prácticas
- Usar mensajes de commit descriptivos.
- No mezclar correcciones documentales con cambios de funcionalidad en una misma rama.
- Mantener `main` siempre en estado desplegable.
