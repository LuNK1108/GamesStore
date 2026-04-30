//importa conexao do banco
const conexao = require("../database/conexao")

//retorna um select de todos os jogos dentro da tabela do banco
function listarJogos(callback){
    //o codigo sql executado dentro da var sql
    const sql = "SELECT * FROM jogos";
    //executa o sql
    conexao.query(sql, callback);
}

//insere uma jogo na tebala do banco
function cadastrarJogo(jogo, callback){
    const sql = "INSERT INTO jogos (titulo, descricao, preco, categoria, imagem_url) VALUES (?,?,?,?,?)";

    //valores que vao ser inseridos na tabela
    const valores = [
        jogo.titulo,
        jogo.descricao,
        jogo.preco,
        jogo.categoria,
        jogo.imagem_url
    ];

    //executa o codigo
    conexao.query(sql, valores, callback);
}

//deleta um jogo da tabela
function excluirJogo(id, callback){
    const sql = "DELETE FROM jogos WHERE id_jogo = ?";
    conexao.query(sql, [id], callback);
}

//editar o jogo no banco de dados
function editarJogo(id, jogo, callback){
    sql = "UPDATE jogos SET titulo = ?, descricao = ?, preco = ?, categoria = ?, imagem_url = ? WHERE id_jogo = ?";

    const valores = [
        jogo.titulo,
        jogo.descricao,
        jogo.preco,
        jogo.categoria,
        jogo.imagem_url,
        id
    ]

    conexao.query(sql, valores, callback)
}

//exporta a funcão
module.exports = {
    listarJogos,
    cadastrarJogo,
    excluirJogo,
    editarJogo
};