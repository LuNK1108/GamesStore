const conexao = require("../database/conexao")

//inserir uma avaliação
function avaliar(avaliação, callback){
    const sql = "INSERT INTO avaliacao (id_jogo, id_usuario, nota, comentario) VALUES (?,?,?,?)";
    const valores = [
        avaliação.id_jogo,
        avaliação.id_cliente,
        avaliação.nota,
        avaliação.comentario
    ]
    conexao.query(sql, valores, callback)
}

function mostrarAvaliacao(id, callback){
    const sql = `SELECT 
    a.id_avaliacao,
    a.nota,
    a.comentario,
    a.data_avaliacao,
    c.id_cliente,
    c.nome,
    c.email
    FROM avaliacao a
    JOIN cliente c ON a.id_usuario = c.id_cliente
    WHERE a.id_jogo = ?;`
    conexao.query(sql, [id], callback)
}

module.exports = {
    avaliar,
    mostrarAvaliacao
}