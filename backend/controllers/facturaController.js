import db from "../db.js";

// Obtener todas las facturas
export const listarTodas = (req, res) => {
  db.query('SELECT * FROM facturas', (err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results);
  });
};

// Obtener una factura con su detalle
export const obtenerPorId = (req, res) => {
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
};

// Crear una factura con detalle
export const agregar = (req, res) => {
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
};

// Actualizar una factura (solo cabecera en este ejemplo)
export const editar = (req, res) => {
  const { cliente, numeroFactura, totalARS, totalUSD } = req.body;
  const sql =
    'UPDATE facturas SET cliente = ?, numero_factura = ?, total_ars = ?, total_usd = ? WHERE id = ?';
  db.query(sql, [cliente, numeroFactura, totalARS, totalUSD, req.params.id], (err) => {
    if (err) return res.status(500).json({ error: err });
    res.sendStatus(204);
  });
};

// Eliminar una factura (y su detalle)
export const eliminar = (req, res) => {
  const id = req.params.id;

  db.query('DELETE FROM detalle_factura WHERE factura_id = ?', [id], (err) => {
    if (err) return res.status(500).json({ error: err });

    db.query('DELETE FROM facturas WHERE id = ?', [id], (err) => {
      if (err) return res.status(500).json({ error: err });
      res.sendStatus(204);
    });
  });
};
// Reporte: Ventas por día
export const obtenerVentasPorDia = (req, res) => {
  const sql = `
    SELECT DATE(fecha) as dia, SUM(total_ars) as total_ars, SUM(total_usd) as total_usd
    FROM facturas
    GROUP BY DATE(fecha)
    ORDER BY DATE(fecha) DESC
  `;
  db.query(sql, (err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results);
  });
};

/*export const ObtenerProductosMasVendidos = (req, res) => {
  const sql = `
    SELECT producto, SUM(cantidad) as total_vendido
    FROM detalle_factura
    GROUP BY producto
    ORDER BY total_vendido DESC
    LIMIT 10
  `;
  db.query(sql, (err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results);
  });
};*/
export const exportarFacturas = (req, res) => {
  const sql = `
    SELECT f.id, f.cliente, f.numero_factura, f.total_ars, f.total_usd, f.fecha,
           df.producto, df.cantidad, df.precio_unitario, df.total
    FROM facturas f
    LEFT JOIN detalle_factura df ON f.id = df.factura_id
    ORDER BY f.fecha DESC
  `;
  db.query(sql, (err, results) => {
    if (err) return res.status(500).json({ error: err });

    res.json(results);
  });
};

