const express = require("express");
const avaliacaoController = require("../controllers/avaliacaoController")
const router = express.Router();

router.post("/avaliar", avaliacaoController.avaliar)

router.get("/mostrar/avaliacao/:id_jogo", avaliacaoController.mostrarAvaliacao)

module.exports = router