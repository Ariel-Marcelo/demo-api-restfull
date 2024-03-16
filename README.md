# DemoSpringBoot

### Prerequisitos
- Maven 3.8 o superiores 
- Java 17 tener configurado el JAVA_HOME
- Base de Datos Oracle

### Pasos para levantar en localshot:8080
En la base de datos Oracle crear la tabla usuarios con la siguiente sentencia SQL 
CREATE TABLE usuario (
    id VARCHAR(36) PRIMARY KEY,
    nombre VARCHAR(255),
    correo VARCHAR(255),
    password VARCHAR(255),
    fecha_creacion TIMESTAMP
);

1. Ingresar a application.properties en DemoSpringBoot  src\main\resources\application.properties
2. Congigurar el archivo application properties con el usuario y contraseña de la base de datos oracle
- spring.datasource.username=system
- spring.datasource.password=sprung-prelude-detergent
3. Si la base de datos Oracle esta corriendo en un puerto diferente al 1521 entonces modificar el:
- spring.datasource.url=jdbc:oracle:thin:@localhost:1521:xe

Situarse dentro del a carpeta DemoSpring y ejecutar el comando: 
- mvn clean package
- mvn spring-boot:run


# Demo Angular

### Prerequisitos
- Node Version >= 18.0.0 
- Angualr CLI

### Pasos para levantar en localhost:4200
Situarse en la carpeta DemoAngual y ejecutar el comando 
- npm install 
- npm run start
