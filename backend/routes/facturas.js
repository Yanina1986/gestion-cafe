const express = require("express");
const router = express.Router();
const db = require("../db");
const facturaController = require("../controllers/facturaController");

router.get("/:id", facturaController.obtenerPorId);
router.get("/", facturaController.listarTodas);
router.post("/", facturaController.agregar);
router.put("/:id", facturaController.editar);
router.delete("/:id", facturaController.eliminar);
module.exports = router;
