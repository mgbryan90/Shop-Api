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

Se solicita construir por separado:
 - Backend (API REST - https://shop-api-rest.herokuapp.com/)
 ​​- Frontend (aplicación que lo consume - https://bsale-shop.vercel.app/).

La API REST se desarrolló con Node.js y Express. La API REST se conecta y realiza consultas SQL a una base de datos MySQL implementada en AWS RDS. Esta base de datos tiene dos tablas: productos y categorías. Para solicitar los datos, la API REST se desarrolló con los siguientes puntos finales que puede ver en la documentación de la API.
```

## Endpoint

### https://shop-api-rest.herokuapp.com/api/product (muestra la lista de productos)

```json
[
	{
		"id": 5,
		"name": "ENERGETICA MR BIG",
		"url_image": "https://dojiw2m9tvv09.cloudfront.net/11132/product/misterbig3308256.jpg",
		"price": 1490,
		"discount": 20,
		"category": 1
	},
	{
		"id": 6,
		"name": "ENERGETICA RED BULL",
		"url_image": "https://dojiw2m9tvv09.cloudfront.net/11132/product/redbull8381.jpg",
		"price": 1490,
		"discount": 0,
		"category": 1
	},
	{
		"id": 7,
		"name": "ENERGETICA SCORE",
		"url_image": "https://dojiw2m9tvv09.cloudfront.net/11132/product/logo7698.png",
		"price": 1290,
		"discount": 0,
		"category": 1
	}
]
```

### https://shop-api-rest.herokuapp.com/api/category (muestra las categorias de los productos)

```json
[
	{
		"id": 1,
		"name": "bebida energetica"
	},
	{
		"id": 2,
		"name": "pisco"
	},
	{
		"id": 3,
		"name": "ron"
	},
	{
		"id": 4,
		"name": "bebida"
	},
	{
		"id": 5,
		"name": "snack"
	},
	{
		"id": 6,
		"name": "cerveza"
	},
	{
		"id": 7,
		"name": "vodka"
	}
]
```

### https://shop-api-rest.herokuapp.com/api/category/7/products (filtra por categoria los productos)

```json
[
	{
		"id": 104,
		"name": "ABSOLUT",
		"url_image": "https://dojiw2m9tvv09.cloudfront.net/11132/product/absolut21381.png",
		"price": 8990,
		"discount": 30,
		"category": 7
	}
]
```

## Pasos a seguir para la creacion de la API

```terminal
npm init -y
npm install dotenv (para manejar variables de entorno) express promise-mysql mysql(manejar las conecciones de la BD, hacer consultas)
npm install nodemon (para ver los cambios automaticamente sin parar el servidor)
```

## En packages.json cambiar

```comando
 Antes:
 "test": "echo \"Error: no test specified\" && exit 1" 
 Cambiar:
 "dev": "nodemon src/index.js",
 "start": "node ./src/index.js"
```

## Para acceder a la BD crear un archivo .env y poner las variables de entorno

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
