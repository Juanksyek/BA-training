const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({extended: true }));

app.use(express.static("Recursos"));

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/index.html");
});

app.get("/Guzman/Inicio-Sesion.html", function(req, res) {
    res.sendFile(__dirname + "/Guzman/Inicio-Sesion.html");
});

app.listen(process.env.PORT || 3000, function () {
    console.log("Server is running at port 3000");
});