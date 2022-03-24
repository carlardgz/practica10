var express = require("express"); //importamos dependencia
var app = express(); //declaramos una App de Express

var port = process.env.port || 3000; /*setteamos el puerto
para que escuche el servidor*/

//primera ruta (está al nivel de la raíz /), Hello World!
app.get("/", function (req, res) {
  res.send("<html><head></head><body><h1>Hello World!</h1></body></html>");
});

app.listen(port); //levantar el server y ponerlo a la escucha

//segunda ruta /api, regresa un objeto JSON
app.get("/api", function (req, res) {
  res.json({ firstname: "Carla", lastname: "Rodríguez" });
});

//tercera ruta, recibe un parámetro
app.get("/person/:id", function (req, res) {
  res.send(
    "<html><head></head><body><h1>Person: " +
      req.params.id +
      "</h1></body></html>"
  );
});
