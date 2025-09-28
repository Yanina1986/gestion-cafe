import db from "../db.js";

// Crear factura con detalle
// facturaController.js
export const crearFactura = async (req, res) => {
  try {
    const { totalARS, totalUSD, items } = req.body;

    // Insertar cabecera sin cliente ni número
    const [result] = await db.query(
      "INSERT INTO facturas (total_ars, total_usd) VALUES (?, ?)",
      [totalARS, totalUSD]
    );

    const facturaId = result.insertId;

    // Insertar detalle
    for (const item of items) {
      await db.query(
        "INSERT INTO detalle_factura (factura_id, producto, cantidad, precio_unitario, total) VALUES (?, ?, ?, ?, ?)",
        [facturaId, item.producto, item.cantidad, item.precio, item.total]
      );
    }

    res.json({ message: "Factura creada con éxito", facturaId });
  } catch (error) {
    console.error("❌ Error en crearFactura:", error);
    res.status(500).json({ error: "Error guardando la factura", detalle: error.message });
  }
};
