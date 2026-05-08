# Guion de Presentacion - RedNorte

Duracion sugerida: 15 minutos.

## 1. Apertura y contexto (1 minuto)

Buenos dias. Somos el equipo RedNorte y continuamos el caso de la evaluacion anterior. Nuestro objetivo fue construir una solucion fullstack para gestion hospitalaria, separando frontend, Backend For Frontend y microservicios, y aplicando patrones de diseno, arquetipos Maven y una estrategia de branching documentada.

## 2. Arquitectura general (2 minutos)

La solucion se divide en cuatro bloques. Primero, un frontend React empaquetado como proyecto NPM. Segundo, un BFF en Spring Boot que entrega al frontend una API simplificada. Tercero, dos microservicios: `ms-pacientes`, responsable de pacientes, y `ms-citas`, responsable de citas. Cuarto, un arquetipo Maven que sirve como base para generar nuevos backends con estructura coherente.

El frontend no llama directamente a los microservicios. Llama al BFF, y el BFF consulta pacientes y citas. Esto reduce acoplamiento y deja una API pensada para la pantalla.

## 3. Demo tecnica (3 minutos)

Para la demo, levantamos:

- `ms-pacientes` en `8081`.
- `ms-citas` en `8082`.
- `bff-rednorte` en `8085`.
- `frontend` en `5173`.

Mostramos primero `GET /bff/pacientes`, que devuelve pacientes desde el microservicio de pacientes. Luego seleccionamos un paciente en el frontend y se consume `GET /bff/paciente-citas/{id}`, donde el BFF combina datos del paciente con sus citas.

## 4. Patrones de diseno aplicados (3 minutos)

En frontend aplicamos Facade/Service en `usePatientApi.jsx`, porque centraliza las llamadas HTTP y evita que los componentes conozcan detalles del backend. Tambien usamos Container/Presentational: `App.jsx` maneja estado y logica, mientras `PatientList` y `PatientDetail` se enfocan en mostrar informacion.

En backend usamos Repository en los microservicios para separar acceso a datos. Usamos DTO/Adapter en el BFF para no exponer directamente entidades internas. En `ms-citas` usamos Factory Method mediante `CitaFactory`, que crea citas segun tipo y asigna prioridad. El BFF tambien funciona como Facade arquitectonica porque simplifica varias llamadas en un solo endpoint para el frontend.

## 5. Arquetipos y arquitectura (2 minutos)

El arquetipo Maven permite mantener una estructura repetible para nuevos servicios backend: `pom.xml`, clase principal, recursos y paquetes base. Esto ayuda a que el equipo no cree servicios con estilos distintos y facilita escalabilidad.

La arquitectura con microservicios separa responsabilidades: pacientes y citas pueden evolucionar de forma independiente. El BFF permite adaptar la respuesta a la necesidad del frontend sin cambiar los microservicios.

## 6. Branching y trabajo colaborativo (1 minuto)

Documentamos una estrategia Git Flow simplificada: `main` como rama estable, ramas feature para frontend, BFF, microservicios y documentacion. La idea es trabajar con commits pequenos, pull requests, revision y pruebas antes de integrar.

Si nos preguntan por conflictos, explicamos que se resuelven en la rama feature, se valida con `git diff`, se corren pruebas y luego se integra a `main`.

## 7. Pruebas y calidad (2 minutos)

Validamos el frontend con Vitest y build de Vite. En backend probamos el BFF con MockMvc, incluyendo lista de pacientes y detalle paciente-citas. En `ms-citas` probamos el Factory Method y en ambos microservicios validamos carga de contexto Spring.

Resultados: frontend test OK, frontend build OK, BFF 3 tests OK, pacientes 1 test OK, citas 3 tests OK.

## 8. Cierre (1 minuto)

En conclusion, la solucion cumple con la pauta porque tiene frontend NPM, BFF, dos microservicios, arquetipo Maven, patrones de diseno justificados, documentacion y pruebas. La decision clave fue usar el BFF como punto unico para el frontend, porque mejora mantenibilidad, reduce acoplamiento y prepara el sistema para crecer.

## Preguntas esperables y respuestas cortas

- Por que BFF: porque adapta los datos al frontend y evita que la UI conozca multiples servicios.
- Por que microservicios: porque separan responsabilidades y permiten escalar pacientes y citas de forma independiente.
- Que patrones usamos: Facade/Service, Container/Presentational, Repository, DTO/Adapter y Factory Method.
- Donde esta Factory Method: en `ms-citas/src/main/java/.../factory/CitaFactory.java`.
- Como se prueba el BFF: con MockMvc, simulando Feign clients y validando JSON.
- Que falta antes de entregar: reemplazar enlaces de GitHub reales y exportar docs a PDF si la pauta lo pide.
