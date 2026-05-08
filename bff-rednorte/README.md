# BFF RedNorte

Este es el microservicio BFF (Backend For Frontend) para el proyecto RedNorte, un sistema de gestión hospitalaria. Este servicio orquesta las llamadas a los microservicios `ms-pacientes` y `ms-citas`, proporcionando una interfaz unificada para el frontend.

## Estructura del Proyecto

El proyecto está organizado de la siguiente manera:

```
bff-rednorte
├── src
│   ├── main
│   │   ├── java
│   │   │   └── cl
│   │   │       └── duoc
│   │   │           └── rednorte
│   │   │               ├── BffRednorteApplication.java
│   │   │               ├── controller
│   │   │               │   └── PacienteCitaController.java
│   │   │               ├── dto
│   │   │               │   ├── PacienteDTO.java
│   │   │               │   └── CitaDTO.java
│   │   │               ├── mapper
│   │   │               │   ├── PacienteMapper.java
│   │   │               │   └── CitaMapper.java
│   │   │               └── feign
│   │   │                   ├── PacienteClient.java
│   │   │                   └── CitaClient.java
│   │   └── resources
│   │       └── application.properties
│   └── test
│       └── java
│           └── cl
│               └── duoc
│                   └── rednorte
│                       └── controller
│                           └── PacienteCitaControllerTest.java
├── pom.xml
└── README.md
```

## Requisitos

- **Java 17** y **Spring Boot 3**.
- Uso de **OpenFeign** para la comunicación con los microservicios.
- Implementación de **DTOs** y **Mappers** para la transferencia de datos.

## Instrucciones de Configuración

1. Clona el repositorio en tu máquina local.
2. Navega a la carpeta del proyecto.
3. Ejecuta el comando `mvn clean install` para compilar el proyecto y descargar las dependencias.
4. Configura las propiedades en `src/main/resources/application.properties` según sea necesario.
5. Inicia la aplicación ejecutando `BffRednorteApplication.java`.

## Uso

El BFF proporciona endpoints que combinan la información de pacientes y citas. Asegúrate de consultar la documentación de los endpoints en el controlador `PacienteCitaController.java` para más detalles sobre cómo interactuar con el servicio.

## Contribuciones

Las contribuciones son bienvenidas. Si deseas contribuir, por favor abre un issue o un pull request en el repositorio.