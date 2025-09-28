const express = require("express");
const router = express.Router();
const db = require("../db");

// Obtener todas las facturas
router.get('/', (req, res) => {
  db.query('SELECT * FROM facturas', (err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results);
  });
});

// Obtener una factura con su detalle
router.get('/:id', (req, res) => {
  const id = req.params.id;

  // Traer cabecera
  db.query('SELECT * FROM facturas WHERE id = ?', [id], (err, facturaResult) => {
    if (err) return res.status(500).json({ error: err });
    if (facturaResult.length === 0) return res.status(404).json({ error: 'Factura no encontrada' });

    const factura = facturaResult[0];

    // Traer detalle
    db.query('SELECT * FROM detalle_factura WHERE factura_id = ?', [id], (err, detalleResult) => {
      if (err) return res.status(500).json({ error: err });

      factura.items = detalleResult;
      res.json(factura);
    });
  });
});

// Crear una factura con detalle
router.post('/', (req, res) => {
  const { cliente, numeroFactura, totalARS, totalUSD, items } = req.body;

  const sqlCabecera =
    'INSERT INTO facturas (cliente, numero_factura, total_ars, total_usd) VALUES (?, ?, ?, ?)';
  db.query(sqlCabecera, [cliente, numeroFactura, totalARS, totalUSD], (err, result) => {
    if (err) return res.status(500).json({ error: err });

    const facturaId = result.insertId;

    if (items && items.length > 0) {
      const sqlDetalle =
        'INSERT INTO detalle_factura (factura_id, producto, cantidad, precio_unitario, total) VALUES ?';
      const values = items.map((item) => [
        facturaId,
        item.producto,
        item.cantidad,
        item.precio_unitario,
        item.total,
      ]);

      db.query(sqlDetalle, [values], (err) => {
        if (err) return res.status(500).json({ error: err });
        res.status(201).json({ id: facturaId });
      });
    } else {
      res.status(201).json({ id: facturaId });
    }
  });
});

// Actualizar una factura (solo cabecera en este ejemplo)
router.put('/:id', (req, res) => {
  const { cliente, numeroFactura, totalARS, totalUSD } = req.body;
  const sql =
    'UPDATE facturas SET cliente = ?, numero_factura = ?, total_ars = ?, total_usd = ? WHERE id = ?';
  db.query(sql, [cliente, numeroFactura, totalARS, totalUSD, req.params.id], (err) => {
    if (err) return res.status(500).json({ error: err });
    res.sendStatus(204);
  });
});

// Eliminar una factura (y su detalle)
router.delete('/:id', (req, res) => {
  const id = req.params.id;

  db.query('DELETE FROM detalle_factura WHERE factura_id = ?', [id], (err) => {
    if (err) return res.status(500).json({ error: err });

    db.query('DELETE FROM facturas WHERE id = ?', [id], (err) => {
      if (err) return res.status(500).json({ error: err });
      res.sendStatus(204);
    });
  });
});

module.exports = router;
