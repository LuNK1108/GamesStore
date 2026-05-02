const bibliotecaModel = require("../models/bibliotecaModel")

function inserirJogo(req, res){
    const biblioteca = req.body;

    bibliotecaModel.inserirJogo(biblioteca, (erro, resultado) => {
        if(erro){
            return res.status(500).json({
                status: false,
                mensagem: "erro ao inserir jogo a biblioteca"
            })
        }
        return res.status(201).json({
            status: true,
            mensagem: "succeso ao inserir jogo a bilbioteca"
        })
    })
}

function listarJogos(req, res){
    const id_cliente = req.params.id_cliente;
    bibliotecaModel.listarJogos(id_cliente, (erro, resposta) => {
        if(erro){
            return res.status(500).json({
                status: false,
                mensagem: "erro ao listar"
            })
        }
        return res.json(resposta)
    })
}

function excluirJogo(req, res){
    const id_jogo = req.params.id_jogo;
    bibliotecaModel.excluirJogo(id_jogo, (erro, resultado) => {
        if(erro){return res.status(500).json({status: false, mensagem: "erro ao excluir"})}
        return res.json({status: true, mensagem: "sucesso ao excluir"})
    })
}

module.exports = {
    inserirJogo,
    listarJogos,
    excluirJogo
}