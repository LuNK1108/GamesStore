const express = require("express");
const clienteController = require("../controllers/clienteController");
const router = express.Router();

router.post("/cliente/login", clienteController.loginCliente)

//rota inserir usario
router.post("/cliente/inserir", clienteController.inserirCliente)

module.exports = router;
