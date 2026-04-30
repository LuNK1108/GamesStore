const conexao = require("../database/conexao")

function inserirJogo(biblioteca, callback){
    const sql = "INSERT INTO biblioteca (id_cliente, id_jogo) VALUES (?, ?)";
    const valores = [
        biblioteca.id_cliente,
        biblioteca.id_jogo
    ]

    conexao.query(sql, valores, callback)
}

module.exports = {
    inserirJogo
}