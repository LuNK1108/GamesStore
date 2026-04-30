const express = require("express");
const jogoController = require("../controllers/jogoController");

const router = express.Router();

//cria uma rota get que mostrar os jogos
router.get("/jogos", jogoController.listarJogos);
//cria uma rota post que insere o jogos
router.post("/jogos", jogoController.cadastrarJogo);
//cria uma rota delete que delete um jogo pelo id
router.delete("/jogos/:id", jogoController.excluirJogo);
//cria uma rota put que editar um jogo pelo id
router.put("/jogos/:id", jogoController.editarJogo)

module.exports = router;