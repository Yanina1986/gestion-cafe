import db from "../db.js";

export const getFacturas = (req, res) => {
  db.query("SELECT * FROM facturas", (err, results) => {
    if (err) {
      return res.status(500).json({ error: err });
    }
    res.json(results);
  });
};


export const getVentasPorDia = (req, res) => {
  const sql = `
    SELECT DATE(fecha) as dia, SUM(total) as total
    FROM facturas
    GROUP BY DATE(fecha)
    ORDER BY dia ASC;
  `;
  db.query(sql, (err, results) => {
    if (err) {
      return res.status(500).json({ error: err });
    }
    res.json(results);
  });
};

export const getProductosMasVendidos = (req, res) => {
  const sql = `
    SELECT p.nombre, SUM(df.cantidad) as cantidad
    FROM detalle_factura df
    JOIN productos p ON df.producto_id = p.id
    GROUP BY p.nombre
    ORDER BY cantidad DESC
    LIMIT 5;
  `;
  db.query(sql, (err, results) => {
    if (err) {
      return res.status(500).json({ error: err });
    }
    res.json(results);
  });
};
