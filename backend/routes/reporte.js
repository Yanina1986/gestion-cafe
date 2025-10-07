const express = require('express');
const router = express.Router();
const db = require('../db');
const reporteController = require('../controllers/reporteController');
//const { obtenerVentasPorDia, obtenerProductosMasVendidos, exportarFacturasCSV } = require('../controllers/reporteController');


router.get(`/ventas-por-dia`,reporteController.obtenerVentasPorDia);
router.get(`/productos-mas-vendidos`, reporteController.ObtenerProductosMasVendidos);
router.get(`/exportar-facturas-csv`,reporteController.exportarFacturasCSV);
module.exports = router;
