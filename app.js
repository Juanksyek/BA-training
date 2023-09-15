const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({extended: true }));

app.use(express.static("Recursos"));


//Abrir index cuando se ejecuta el servidor
//Esta parte del codigo siempre debe quedar hasta arriba :)
app.get("/", function(req, res) {
    res.sendFile(__dirname + "/index.html");
});

//------------Aqui van los links y vistas------------//

//Regresar al index estando en cualquier opcion
app.get("/regresar", function(req, res){
    res.sendFile(__dirname + "/index.html");
});

//Abrir la opcion iniciar sesion en el menu
app.get("/Guzman/Inicio-Sesion.html", function(req, res) {
    res.sendFile(__dirname + "/Guzman/Inicio-Sesion.html");
});

//Abrir la opcion registrarse estando en iniciar sesion
app.get("/Guzman/Registrarse.html", function(req, res){
    res.sendFile(__dirname + "/Guzman/Registrarse.html");
});










//Abrir servidor en el puerto 3000(para efecto local) y process PORT(para subir a produccion)
//Esta parte del codigo siempre debe quedar hasta abajo :)
app.listen(process.env.PORT || 3000, function () {
    console.log("Server is running at port 3000");
});