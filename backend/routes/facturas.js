import express from "express";
import {
  getFacturas,
  getVentasPorDia,
  getProductosMasVendidos
} from "../controllers/facturaController.js";

const router = express.Router();

//  Rutas de facturas
router.get("/", getFacturas);
router.get("/reportes/ventas-dia", getVentasPorDia);
router.get("/reportes/productos-top", getProductosMasVendidos);

export default router;
