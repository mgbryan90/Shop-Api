# Construido con

```terminal
Node.js - JavaScript environment
Express - The web framework used
Imsomnia
MySQL - Relational database
```

## Pasos a seguir para la creacion de la API

```terminal
npm init -y
npm install dotenv (para manejar variables de entorno) express promise-mysql mysql(manejar las conecciones de la BD, hacer consultas)
npm install @babel/cli @babel/core @babel/node @babel/preset-env morgan (para ver en consola las peticiones) nodemon (para ver los cambios automaticamente sin parar el servidor)
```

## Para que babel detecte para poder convertir mi codigo de JS

```babel
{
  "presets": ["@babel/presets-env"]
}
```

## En packages.json cambiar

```comando
 "test": "echo \"Error: no test specified\" && exit 1" 
 -- Para usar babel y convertir mi codigo a JS estandar y luego iniciar mi servidor con express
 "babel-node": "babel-node --presets=@babel/preset-env",
 "start": "nodemon --exec npm run babel-node src/index.js"
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
