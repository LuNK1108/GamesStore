const conexao = require("../database/conexao")

function inserirJogo(biblioteca, callback){
    const sql = "INSERT INTO biblioteca (id_cliente, id_jogo) VALUES (?, ?)";
    const valores = [
        biblioteca.id_cliente,
        biblioteca.id_jogo
    ]

    conexao.query(sql, valores, callback)
}

function listarJogos(id ,callback){
     const sql = `
        SELECT jogos.*
        FROM biblioteca
        INNER JOIN jogos ON biblioteca.id_jogo = jogos.id_jogo
        WHERE biblioteca.id_cliente = ?
    `;
    const id_cliente = id
    conexao.query(sql, [id], callback)
}

function excluirJogo(id, callback){
    const sql = "DELETE FROM biblioteca WHERE id_jogo = ?";
    conexao.query(sql, [id], callback)
}
module.exports = {
    inserirJogo,
    listarJogos,
    excluirJogo
}