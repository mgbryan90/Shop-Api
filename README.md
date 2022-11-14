# Construido con

```terminal
Node.js - JavaScript environment
Express - The web framework used
Heroku - Cloud Application Platform for deploy
MySQL - Relational database
```

## Bsale Store RESTful API con Node.js and Express

```text
Este proyecto consiste en construir una tienda en línea, donde el usuario inicialmente puede ver todos los productos y también puede filtrar los productos por categoría.

Se solicita construir por separado Backend (API REST) ​​y Frontend (aplicación que lo consume).

La API REST se desarrolló con Node.js y Express. La API REST se conecta y realiza consultas SQL a una base de datos MySQL implementada en AWS RDS. Esta base de datos tiene dos tablas: productos y categorías. Para solicitar los datos, la API REST se desarrolló con los siguientes puntos finales que puede ver en la documentación de la API.
```

## API Documentacion

```terminal
Podrá ver la documentación
API Documentation
```

## Pasos a seguir para la creacion de la API

```terminal
npm init -y
npm install dotenv (para manejar variables de entorno) express promise-mysql mysql(manejar las conecciones de la BD, hacer consultas)
npm install @babel/cli @babel/core @babel/node @babel/preset-env morgan (para ver en consola las peticiones) nodemon (para ver los cambios automaticamente sin parar el servidor)
```

## En packages.json cambiar

```comando
 "test": "echo \"Error: no test specified\" && exit 1" 
 -- Para usar babel y convertir mi codigo a JS estandar y luego iniciar mi servidor con express
 "babel-node": "babel-node --presets=@babel/preset-env",
 "dev": "nodemon --exec npm run babel-node src/index.js"
```

## Para acceder a la BD crear un archivo .env y poner sus datos por ejemplo

```datos
● Host= localhost
● Usuario= test1
● Contraseña= test123456
● Nombre db= test_db
```

## Correr en consola el siguiente comando para levantar el servidor

```terminal
   npm run start
```
