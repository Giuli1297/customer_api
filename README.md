# Una simple API de Clientes

## Descripcion

Buscamos implementar una API para operacion CRUD sobre un modelo de clientes.

### Dependencias

* node.js

### Librerias utilizadas

* Sequelize
* Express (Framework)
* sqlite3
* swagger-jsdoc
* swagger-ui-express
* morgan

### Instalacion

* Clonar el repositorio a su maquina y situarse en la rama main
* Instalar los requemientos de package.json
```
npm install
```

### Ejecutar el programa
Una vez situado en la carpera 'src' ejecutar
```
node index.js
```
* Acceder al 127.0.0.1:3000/api-docs desde un navegador para observar la documentacion.
* Abrir con postman el archivo 'Customer  API.postman_collection.json' para probar los distintos end-points desde esta aplicacion.
* Para ejecutar las pruebas automaticas correr 
```
npm test
```
