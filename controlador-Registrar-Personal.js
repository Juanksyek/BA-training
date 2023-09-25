const express = require('express');
const router = express.Router();
//const db = require('./app.js'); 
const { db } = require('./app.js')

console.log('Entra');
// Ruta para mostrar el formulario de registro
router.get('/registrarPersonal', (req, res) => {
    console.log('Se fue');
    res.sendFile(__dirname + '/Usuario-Recepcionista/Inicio-Recepcionista.html');

});

// Ruta para procesar el formulario de registro
router.post('/registrarPersonal', (req, res) => {
    console.log('Entra aquí');
    // Obtener datos del formulario de registro desde req.body
    const nombreUsuario = req.body.username;
    const contrasena = req.body.contrasena;
    const tipoUsuario = req.body.tipoUsuario;
    const nombrePersonal = req.body.nombre;
    const telefonoPersonal = req.body.tel;
    const sede = '1';

    // insertar datos en la tabla Usuario
    const sqlUsuario = 'INSERT INTO Usuario (NombreUsuario, Contraseña, TipoUsuario, ID_Sede) VALUES (?, ?, ?, ?)';
    const valuesUsuario = [nombreUsuario, contrasena, tipoUsuario, sede];

    db.query(sqlUsuario, valuesUsuario, (errUsuario, resultUsuario) => {
        if (errUsuario) {
            console.error('Error al registrar usuario:', errUsuario);
            res.render('formulario_registro', { error: 'Error al registrar usuario' });
        } else {
            // El usuario se registró exitosamente
            console.log('Usuario registrado exitosamente');
            // Obtener el ID de usuario recién insertado
            const idUsuarioInsertado = resultUsuario.insertId;
            console.log('ID de usuario insertado:', idUsuarioInsertado);

            // Inserción en la tabla "Personal"
            const sqlPersonal = 'INSERT INTO Personal (Nombre, Teléfono, ID_Usuario) VALUES (?, ?, ?)';
            const valuesPersonal = [nombrePersonal, telefonoPersonal, idUsuarioInsertado];

            db.query(sqlPersonal, valuesPersonal, (errPersonal, resultPersonal) => {
                if (errPersonal) {
                    console.error('Error al registrar personal:', errPersonal);
                    res.render('formulario_registro', { error: 'Error al registrar personal' });
                } else {
                    console.log('Personal registrado exitosamente');
                    // Tanto el usuario como el personal se registraron exitosamente
                    res.redirect('/Registrar-Cuenta');
                }
            });
        }
    });
});

module.exports = router;
