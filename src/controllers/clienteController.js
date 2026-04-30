const clienteModel = require("../models/clienteModel")

function loginCliente(req, res){

    const cliente = req.body;

    clienteModel.loginCliente(cliente, (erro, resultado) => {
        if(erro){
            return res.status(500).json({
                status: false,
                mensagem: "erro ao logar"
            })
        }
        if (resultado.length === 0) {
            return res.status(401).json({
                status: false,
                mensagem: "email ou senha incorretos"
            });
        }
        res.json({
            status: true,
            mensagem: "login realizado com sucesso",
            cliente: resultado[0]
        });
    })
}

function inserirCliente(req, res){
    const cliente = req.body
    clienteModel.inserirCliente(cliente, (erro, resultado) => {
        if(erro){
            return res.status(500).json({
                status: false,
                mensagem: "erro ao cadastar"
            });
        }
        res.status(201).json({
            status: true,
            mensagem: "usuario cadastrado com sucesso"
        })
    })
}

module.exports = {
    loginCliente,
    inserirCliente
}