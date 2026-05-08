# Arquetipo Maven Backend RedNorte

Este arquetipo sirve como plantilla base para generar nuevos microservicios backend del proyecto RedNorte.

## Uso
1. Navega a la carpeta del arquetipo:
```bash
cd maven-archetypes/backend-archetype
```
2. Instala el arquetipo localmente:
```bash
mvn install
```
3. Genera un proyecto a partir del arquetipo:
```bash
mvn archetype:generate -DarchetypeGroupId=com.rednorte.archetypes \
  -DarchetypeArtifactId=backend-archetype \
  -DarchetypeVersion=1.0.0 \
  -DgroupId=com.rednorte.servicio \
  -DartifactId=servicio-ejemplo \
  -Dversion=0.0.1-SNAPSHOT \
  -DinteractiveMode=false
```

## Estructura generada
- `pom.xml`
- `src/main/java/.../Application.java`
- `src/main/resources/application.properties`

## Justificación
El arquetipo ofrece una estructura consistente para nuevos microservicios, promoviendo la coherencia, escalabilidad y reutilización.
