const express = require("express");
const bodyParser = require("body-parser");
const mysql = require("mysql2");
const app = express();
const path = require("path");
const multer = require('multer');// Dot para manipular multimedias

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('uploads'));

app.use(express.static("Recursos"));

//multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
    cb(null, path.join(__dirname, 'uploads')); // Ruta donde se guardarán los archivos
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname); // Usa el nombre original del archivo
  }
});


const upload = multer({ storage });

// Configuración de la conexión a la base de datos
/*
const db = mysql.createConnection({
    host: '127.0.0.1',  // La dirección del servidor 
    port: 3306,
    user: 'root',  // Nombre de usuario de la base de datos ()
    password: '',  // Contraseña de la base de datos
    database: 'bat_db'  // El nombre de tu base de datos
});

// Conectar a la base de datos
db.connect((err) => {
if (err) {
    console.error('Error al conectar a la base de datos:', err);
    throw err;
}
console.log('Conexión exitosa a la base de datos');
});


module.exports.db = db;
*/

//Modulo para renderizar las vistas con ejs
const db = mysql.createConnection({
  host: "127.0.0.1",
  port: 3306,
  user: "root",
  password: "",
  database: "blog_db",
});

db.connect((err) => {
  if (err) {
    console.error("Error al conectar a la base de datos:", err);
    throw err;
  }
  console.log("Conexión exitosa a la base de datos");
});

//Modulo de proceso CRUD del blog
app.set("views", path.join(__dirname, "Views"));
app.set("view engine", "ejs");

app.get("/index", function (req, res) {
  db.query("SELECT * FROM posts ORDER BY created_at DESC", (err, results) => {
    if (err) throw err;
    res.render("index", { posts: results });
  });
});

//Modulo para editar un post
app.get("/edit/:id", (req, res) => {
  const postId = req.params.id;

  db.query("SELECT * FROM posts WHERE id = ?", [postId], (err, results) => {
    if (err) throw err;
    res.render("edit", { post: results[0] });
  });
});

// Ruta de actualización
app.post("/update/:id", upload.single('image'), (req, res) => {
  const postId = req.params.id;
  const { title, content } = req.body;
  const existingImagePath = req.body.existingImage;  // Obtén la ruta de la imagen existente

  console.log(req.file);  // Verifica si hay un archivo cargado
  console.log(existingImagePath); // Verifica la ruta de la imagen existente

  // Verifica si hay una nueva imagen cargada
  if (req.file) {
    const imagePath = req.file.filename;

    db.query(
      "UPDATE posts SET title = ?, content = ?, image_path = ? WHERE id = ?",
      [title, content, imagePath, postId],
      (err, results) => {
        if (err) throw err;
        res.redirect("/index");
      }
    );
  } else {
    // No hay una nueva imagen cargada, actualiza solo el título y el contenido
    db.query(
      "UPDATE posts SET title = ?, content = ?, image_path = ? WHERE id = ?",
      [title, content, existingImagePath, postId],
      (err, results) => {
        if (err) throw err;
        res.redirect("/index");
      }
    );
  }
});


//Para poder consultar los post, se hace una consulta mediante una API
app.get("/api/posts", function (req, res) {
  db.query("SELECT * FROM posts ORDER BY created_at DESC", (err, results) => {
    if (err) throw err;
    res.json({ posts: results });
  });
});

//Modulo para crear el post
app.post("/create", upload.single('image'), (req, res) => {
  const { title, content } = req.body;
  const image = req.file ? req.file.filename : null;

  db.query(
    "INSERT INTO posts (title, content, image_path) VALUES (?, ?, ?)",
    [title, content, image],
    (err, results) => {
      if (err) throw err;
      res.redirect("/index");
    }
  );
});

//Eliminar Post
app.get("/delete/:id", function (req, res) {
    const postId = req.params.id;
    db.query("DELETE FROM posts WHERE id = ?", [postId], (err, results) => {
      if (err) throw err;
      res.redirect("/index");
    });
  });
  

//Abrir index cuando se ejecuta el servidor
//Esta parte del codigo siempre debe quedar hasta arriba :)
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

//------------Aqui van los links y vistas------------//

//Regresar al index estando en cualquier opcion
app.get("/inicio", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

//Abrir la opcion iniciar sesion en el menu
app.get("/Guzman/Inicio-Sesion.html", function (req, res) {
  res.sendFile(__dirname + "/Guzman/Inicio-Sesion.html");
});

//Abrir la opcion registrarse estando en iniciar sesion
app.get("/Usuario-Recepcionista/Registrar-Alumnos.html", function (req, res) {
  res.sendFile(__dirname + "/Usuario-Recepcionista/Registrar-Alumnos.html");
});
// Controlador de registrar alumnos
const controladorRegistrarAlumnos = require("./controlador-Registrar-Alumnos");

// Ruta del controlador de registro bajo la raíz '/'
app.use("/", controladorRegistrarAlumnos);

//Vista admin prueba
app.get("/Usuario-Admin/Inicio-Admin.html", function (req, res) {
  res.sendFile(__dirname + "/Usuario-Admin/Inicio-Admin.html");
});

//Vista recepcionista prueba
app.get(
  "/Usuario-Recepcionista/Inicio-Recepcionista.html",
  function (req, res) {
    res.sendFile(
      __dirname + "/Usuario-Recepcionista/Inicio-Recepcionista.html"
    );
  }
);

//Vista Registrar-Cuenta
app.get("/Usuario-Cobranza/Registrar-Cuenta.html", function (req, res) {
  res.sendFile(__dirname + "/Usuario-Cobranza/Registrar-Cuenta.html");
});

// Vista Registrar-Cuenta HTML
app.get("/Usuario-Recepcionista/Registrar-Personal.html", function (req, res) {
  res.sendFile(__dirname + "/Usuario-Recepcionista/Registrar-Personal.html");
});

// Importar el controlador para registrar personal
// Importar el controlador de registro desde su nueva ubicación en "controladores"
const controladorRegistrarPersonal = require("./controlador-Registrar-Personal");

// Usar las rutas del controlador de registro
app.use("/", controladorRegistrarPersonal);

//Abrir servidor en el puerto 3000(para efecto local) y process PORT(para subir a produccion)
//Esta parte del codigo siempre debe quedar hasta abajo :)
app.listen(process.env.PORT || 3000, function () {
  console.log("Server is running at port 3000");
});
