const db = require("../db.js");
const Parser = require('json2csv').Parser;


exports.obtenerVentasPorDia = (req, res) => {
  const { fromDate, toDate } = req.query;
  //Si mandamos fechas, filtramos por ese rango, si no, traemos todo
  if (fromDate && toDate) {
    const sql = `
      SELECT DATE(fecha) as dia, SUM(total_ars) as total_ars, SUM(total_usd) as total_usd
      FROM facturas
      WHERE DATE(fecha) BETWEEN ? AND ?
      GROUP BY DATE(fecha)
      ORDER BY DATE(fecha) DESC
    `;
    db.query(sql, [fromDate, toDate], (err, results) => {
      if (err) return res.status(500).json({ error: err });
      return res.json(results);
    });
  } else {
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
  }
  return;
};



exports.obtenerProductosMasVendidos = (req, res) => {
  const sql = `
    SELECT producto_id, SUM(cantidad) AS total_vendido
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




exports.exportarFacturasCSV = (req, res) => {
  const sql = `
    SELECT f.id, f.cliente, f.numero_factura, f.total_ars, f.total_usd, f.fecha,
           df.producto_id, df.cantidad, df.precio, df.cantidad * df.precio AS total
    FROM facturas f
    LEFT JOIN factura_detalle df ON f.id = df.factura_id
    ORDER BY f.fecha DESC
  `;
  db.query(sql, (err, results) => {
    if (err) return res.status(500).json({ error: err });

    try {
        // 🛑 ASUMIENDO que 'results' podría ser un solo objeto o null
        let dataToParse = results;

        // Si dataToParse es truthy pero no es un array, lo convertimos
        if (dataToParse && !Array.isArray(dataToParse)) {
            dataToParse = [dataToParse];
        }

        // Si dataToParse es null, undefined, o array vacío, json2csv lo maneja bien,
        // pero evitemos errores si queremos asegurar un array vacío
        if (!dataToParse) {
            dataToParse = [];
        }

        const parser = new Parser();
        const csv = parser.parse(dataToParse); // Usar la variable sanitizada

        res.header("Content-Type", "text/csv");
        res.attachment("facturas.csv");
        return res.send(csv);

    } catch (csvError) {
        // Es buena práctica loguear el error para ver la causa real
        console.error("Error al generar CSV:", csvError);
        res.status(500).json({ error: "Error generando CSV" });
    }
  });
};
