import express from "express";
import { listarFacturas, crearFactura } from "../controllers/facturaController.js";

const router = express.Router();

// Crear factura
router.post("/", crearFactura);

// Listar facturas
router.get("/", listarFacturas);

export default router;
