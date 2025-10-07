const express = require('express');
const router = express.Router();
const db = require('../db');
const facturaController = require('../controllers/facturaController');
//import {obtenerPorId, listarTodas, agregar, editar, eliminar } from "../controllers/facturaController.js";



//module.exports = router;
router.get("/:id", facturaController.obtenerPorId);
router.get("/", facturaController.listarTodas);
router.post("/", facturaController.agregar);
router.put("/:id", facturaController.editar);
router.delete("/:id", facturaController.eliminar);
/*router.get("/reporte/ventas-por-dia", facturaController.obtenerVentasPorDia);
router.get("reporte/productos-mas-vendidos", facturaController.ObtenerProductosMasVendidos);
router.get("/reporte/exportar", facturaController.exportarFacturas);*/

module.exports = router;
