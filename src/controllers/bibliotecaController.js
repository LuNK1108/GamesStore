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

module.exports = {
    inserirJogo
}