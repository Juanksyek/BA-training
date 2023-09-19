const express = require("express");
const bodyParser = require("body-parser");
const mysql = require('mysql');
const app = express();


// // Configuración de la conexión a la base de datos
// const db = mysql.createConnection({
//     host: '127.0.0.1',  // La dirección del servidor 
//     port: 3306,
//     user: 'root',  // Nombre de usuario de la base de datos ()
//     password: 'Admin',  // Contraseña de la base de datos
//     database: 'bat_db'  // El nombre de tu base de datos
//   });
  
//   // Conectar a la base de datos
//   db.connect((err) => {
//     if (err) {
//       console.error('Error al conectar a la base de datos:', err);
//       throw err;
//     }
//     console.log('Conexión exitosa a la base de datos MySQL');
//   });

app.use(bodyParser.urlencoded({extended: true }));

app.use(express.static("Recursos"));


//Abrir index cuando se ejecuta el servidor
//Esta parte del codigo siempre debe quedar hasta arriba :)
app.get("/", function(req, res) {
    res.sendFile(__dirname + "/index.html");
});

//------------Aqui van los links y vistas------------//

//Regresar al index estando en cualquier opcion
app.get("/inicio", function(req, res){
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

//Vista admin prueba
app.get("/Usuario-Admin/Inicio-Admin.html", function(req, res){
    res.sendFile(__dirname + "/Usuario-Admin/Inicio-Admin.html");
});

//Vista recepcionista prueba
app.get("/Usuario-Recepcionista/Inicio-Recepcionista.html", function (req, res) {
    res.sendFile(__dirname + "/Usuario-Recepcionista/Inicio-Recepcionista.html");
});










//Abrir servidor en el puerto 3000(para efecto local) y process PORT(para subir a produccion)
//Esta parte del codigo siempre debe quedar hasta abajo :)
app.listen(process.env.PORT || 3000, function () {
    console.log("Server is running at port 3000");
});