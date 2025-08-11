const express = require('express');
const router = express.Router();
const db = require('../db');
const productoController = require('../controllers/productoController');


router.get('/', productoController.listar);
router.get('/:id', productoController.obtenerPorId);
router.post('/', productoController.agregar);
router.put('/:id', productoController.editar);
router.delete('/:id', productoController.eliminar);

module.exports = router;

router.get('/', (req, res) => {
  db.query('SELECT * FROM productos', (err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results);
  });
});

// Obtener un solo producto
router.get('/:id', (req, res) => {
  const id = req.params.id;
  db.query('SELECT * FROM productos WHERE id = ?', [id], (err, result) => {
    if (err) return res.status(500).send('Error al obtener producto');
    res.json(result[0]);
  });
});

// Crear un producto
router.post('/', (req, res) => {
  const { nombre, descripcion, precio, categoria, imagen } = req.body;
  const sql = 'INSERT INTO productos (nombre, descripcion, precio, categoria, imagen) VALUES (?, ?, ?, ?, ?)';
  db.query(sql, [nombre, descripcion, precio, categoria, imagen], (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.status(201).json({ id: result.insertId });
  });
});

// Actualizar un producto
router.put('/:id', (req, res) => {
  const { nombre, descripcion, precio, categoria, imagen } = req.body;
  const sql = 'UPDATE productos SET nombre = ?, descripcion = ?, precio = ?, categoria = ?, imagen = ? WHERE id = ?';
  db.query(sql, [nombre, descripcion, precio, categoria, imagen, req.params.id], (err) => {
    if (err) return res.status(500).json({ error: err });
    res.sendStatus(204);
  });
});

// Eliminar un producto
router.delete('/:id', (req, res) => {
  db.query('DELETE FROM productos WHERE id = ?', [req.params.id], (err) => {
    if (err) return res.status(500).json({ error: err });
    res.sendStatus(204);
  });
});

module.exports = router;
