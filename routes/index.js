/* Controllers */
const usuarioController = require('../controllers/usuario');
module.exports = (app) => {
   app.get('/api', (req, res) => res.status(200).send ({
        message: 'No puedes acceder a la API web',
   }));
   app.post('/api/usuario/create/username/:username/status/:status', usuarioController.create);
   app.get('/api/usuario/list', usuarioController.list);
   app.get('/api/usuario/find/username/:username', usuarioController.find);
};