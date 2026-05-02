const express = require("express");
const bibliotecaController = require("../controllers/bibliotecaController");
const router = express.Router();

router.post("/biblioteca/inserir", bibliotecaController.inserirJogo)
router.get("/biblioteca/listar/:id_cliente", bibliotecaController.listarJogos)
router.get("/biblioteca/excluir/:id_jogo", bibliotecaController.excluirJogo)
module.exports = router