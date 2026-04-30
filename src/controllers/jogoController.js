const jogoModel = require("../models/jogoModel");


function listarJogos(req, res){
    jogoModel.listarJogos((erro, resultado) => {
        //se a requisição for igual a erro retorna resposta de erro
        if(erro){
            return res.status(500).json({
                mensagem: "erro ao listar jogos"
            });
        }
        //se não retorna o resultado como resposta
        return res.json(resultado);
    })
}

function cadastrarJogo(req, res){
    //requere as informaçoes do que vier do body
    const jogo = req.body;

    jogoModel.cadastrarJogo(jogo, (erro, resultado) => {
        if (erro){
            console.log(erro)

            return res.status(500).json({
                mensagem: "erro ao cadastrar o jogo"
            });

            res.status(201).json({
                mensagem: "jogo cadastrado"
            })
        }
    })
}

function excluirJogo(req, res){
    const id = req.params.id;

    jogoModel.excluirJogo(id, (erro, callback) => {
        if (erro){
            console.log(erro);

            return res.status(500).json({
                mensagem: "erro ao excluir jogo"
            });

        if(resultado.affectedRows === 0){
            return res.status(404).json({
                mensagem: "jogo não encontrado"
            });
        }
        res.json({
            mensagem: "jogo excluido com sucesso"
        })
        }
    })
}

function editarJogo(req, res){
    const id = req.params.id;
    const jogo = req.body;

    jogoModel.editarJogo(id, jogo, (erro, resultado) => {
        if(erro){
            res.status(500).json({
                mensagem: "erro ao editar jogo"
            })
        }

        if(resultado.affectedRows === 0){
            res.status(404).json({
                mensagem: "jogo nao encontrado"
            })
        }

        res.status(201).json({
            mensagem: "jogo editado com sucesso"
        })
    })
}


module.exports = {
    listarJogos,
    cadastrarJogo,
    excluirJogo,
    editarJogo
}