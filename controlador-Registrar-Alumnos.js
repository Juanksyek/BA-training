const express = require('express');
const router = express.Router();

// Ruta para mostrar el formulario de registro
router.get('/registrarAlumno', (req, res) => {
    res.sendFile(__dirname + '/Usuario-Recepcionista/Registrar-Alumnos.html');
});

// Ruta para procesar el formulario de registro
router.post('/registrarAlumno', (req, res) => {
    // Obtener datos del formulario Alumnos para crear usuario
    const nombreUsuario = req.body.matricula;
    const contrasena = req.body.contrasena;
    const tipoUsuario = 'Alumno'; 
    const sede = '1';

    // Obtener datos del formulario Alumnos
    const nombre = req.body.nombre;
    const apellidoM = req.body.apellidoM;
    const apellidoP = req.body.apellidoP;
    const matricula = req.body.matricula;
    const edad = req.body.edad;
    const calle = req.body.calle;
    //const numeroC = req.body.numeroC;
    const colonia = req.body.colonia;
    const municipio = req.body.municipio;
    const telefono = req.body.telefono;
    const ocupacion = req.body.ocupacion;
    const correoElectronico = req.body.correoElectronico;
    const idUsuario = req.body.idUsuario; // ID de usuario relacionado

    // insertar datos en la tabla Usuario
    const usuarioSQL = 'INSERT INTO Usuario (NombreUsuario, Contraseña, TipoUsuario, ID_Sede) VALUES (?, ?, ?, ?)';
    const usuarioValues = [nombreUsuario, contrasena, tipoUsuario, sede];

    //const userID;
    // insertar datos en la tabla Alumnos
    const alumnosSQL = 'INSERT INTO Alumnos (Nombre, ApellidoM, ApellidoP, Matricula, Edad, Calle, Colonia, Municipio, Teléfono, Ocupación, CorreoElectrónico, ID_Usuario) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, LAST_INSERT_ID())';
    const alumnosValues = [nombre, apellidoM, apellidoP, matricula, edad, calle, colonia, municipio, telefono, ocupacion, correoElectronico]; //quitar last_insert_ id y poner userID

    db.query(usuarioSQL, usuarioValues, (err, usuarioResult) => {
        if (err) {
            console.error('Error al insertar datos en la tabla Usuario:', err);
            // Se muestra un mensaje de error
            res.status(500).send('Error al registrar usuario');
        } else {
            console.log('Usuario registrado exitosamente');
            // Obten el ID generado para el usuario insertado
            const userID = usuarioResult.insertId;

            // Ejecutar la inserción en la tabla Alumnos, usando el ID del usuario
            db.query(alumnosSQL, alumnosValues, (err, alumnosResult) => {
            if (err) {
                console.error('Error al insertar datos en la tabla Alumnos:', err);
                // Se muestra un mensaje de error
                res.status(500).send('Error al registrar alumno');
            } else {
                console.log('Alumno registrado exitosamente');
                res.redirect('/Inicio-Recepcionista.html'); // Puedes definir esta ruta según tus necesidades
            }
            });
        }
        });
});

module.exports = router;