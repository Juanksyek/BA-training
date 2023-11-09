const express = require("express");
const mysql = require("mysql2");
const ejs = require("ejs"); //
const app = express();

const db = mysql.createConnection({
  host: "localhost",
  user: "tu_usuario_mysql",
  password: "tu_contraseña_mysql",
  database: "blog_db",
});

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  db.query("SELECT * FROM posts", (err, results) => {
    if (err) throw err;
    res.render("index", { posts: results });
  });
});

app.post("/create", (req, res) => {
  const { title, content } = req.body;
  db.query(
    "INSERT INTO posts (title, content) VALUES (?, ?)",
    [title, content],
    (err, results) => {
      if (err) throw err;
      res.redirect("/");
    }
  );
});
