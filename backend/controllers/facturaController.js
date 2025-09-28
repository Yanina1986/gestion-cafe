import db from "../db.js";

export const crearFactura = async (req, res) => {
  try {
    const { cliente, numeroFactura, totalARS, totalUSD, items } = req.body;

    const [result] = await db.query(
      "INSERT INTO facturas (cliente, numero_factura, total_ars, total_usd) VALUES (?, ?, ?, ?)",
      [cliente, numeroFactura, totalARS, totalUSD]
    );

    const facturaId = result.insertId;

    for (const item of items) {
      await db.query(
        "INSERT INTO detalle_factura (factura_id, producto_id, cantidad, precio_unitario) VALUES (?, ?, ?, ?)",
        [facturaId, item.producto_id, item.cantidad, item.precio_unitario]
      );
    }

    res.json({ message: "Factura creada con éxito", facturaId });
  } catch (error) {
    console.error("❌ Error en crearFactura:", error);
    res.status(500).json({ error: "Error guardando la factura", detalle: error.message });
  }
};


