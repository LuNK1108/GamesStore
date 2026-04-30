const conexao = require("../database/conexao")

//login dos clientes
function loginCliente(cliente, callback){
    const sql = "SELECT * FROM cliente WHERE email = ? AND senha = ?";
    const valores = [
        cliente.email,
        cliente.senha
    ]

    conexao.query(sql, valores, callback)
}

//cadastra os clientes
function inserirCliente(cliente, callback){
    const sql = "INSERT INTO cliente (nome, email, senha) VALUES (?,?,?)"
    const valores = [
        cliente.nome,
        cliente.email,
        cliente.senha
    ]

    conexao.query(sql, valores, callback)
}

module.exports = {
    loginCliente,
    inserirCliente
}