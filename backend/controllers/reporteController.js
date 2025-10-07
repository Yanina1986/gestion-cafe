import db from "../db.js";



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



const obtenerProductosMasVendidos = (req, res) => {
  const sql = `
    SELECT producto, SUM(cantidad) AS total_vendido
    FROM factura_detalle
    GROUP BY producto_id
    ORDER BY total_vendido DESC
    LIMIT 10
  `;

  db.query(sql, (err, results) => {
    if (err) {
      console.error('Error en consulta SQL:', err);
      return res.status(500).json({ error: err });
    }
    res.json(results);
  });
};




export const exportarFacturasCSV = (req, res) => {
  const sql = `
    SELECT f.id, f.cliente, f.numero_factura, f.total_ars, f.total_usd, f.fecha,
           df.producto, df.cantidad, df.precio_unitario, df.total
    FROM facturas f
    LEFT JOIN detalle_factura df ON f.id = df.factura_id
    ORDER BY f.fecha DESC
  `;
  db.query(sql, (err, results) => {
    if (err) return res.status(500).json({ error: err });

    try {
      const parser = new Parser();
      const csv = parser.parse(results);

      res.header("Content-Type", "text/csv");
      res.attachment("facturas.csv");
      return res.send(csv);
    } catch (csvError) {
      res.status(500).json({ error: "Error generando CSV" });
    }
  });
};
