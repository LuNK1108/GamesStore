const mysql = require("mysql2");

//conecta ao banco gamestore
const conexao = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "gamestore"
});

conexao.connect((erro) => {
    //se erro retorna mensagem
    if (erro){console.log("Erro ao conectar ao banco de dados", erro)
        return;
    }
    //se não, conectado
    console.log("conectado ao banco gamestore");
});

//exporta conexao, permite usar em outros arquivos
module.exports = conexao;
