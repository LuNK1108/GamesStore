const express = require("express");
const bibliotecaController = require("../controllers/bibliotecaController");
const router = express.Router();

router.post("/biblioteca/inserir", bibliotecaController.inserirJogo)

module.exports = router