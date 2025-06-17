const express = require('express');
const router = express.Router();
const productoController = require('../controllers/productoController');

router.get('/', productoController.listar);
router.post('/', productoController.agregar);
router.put('/:id', productoController.editar);
router.delete('/:id', productoController.eliminar);

module.exports = router;
