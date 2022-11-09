import app from "./app";

//Constante para iniciar  mi funcion principal
const main = () => {
  app.listen(app.get("port")); // De app obtenemos el puerto "port"
  console.log(`Server on port ${app.get("port")}`);
};

main();
