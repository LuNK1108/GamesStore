const avaliacaoModel = require("../models/avaliacaoModel")

function avaliar(req, res){
    const avaliacao = req.body;
    avaliacaoModel.avaliar(avaliacao, (erro, resultado) => {
        if(erro){return res.status(500).json({status: false, mensagem: "erro ao avaliar"})}
        return res.status(201).json({status: true, mensagem: "sucesso ao avaliar"})
    })
}

function mostrarAvaliacao(req, res){
    const id_jogo = req.params.id_jogo
    avaliacaoModel.mostrarAvaliacao(id_jogo, (erro, resultado) => {
        if(erro){return res.status(500)}
        return res.json(resultado)
    })
}

module.exports = {
    avaliar,
    mostrarAvaliacao
}