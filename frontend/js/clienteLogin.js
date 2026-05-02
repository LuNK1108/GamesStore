
function clienteLogin(){
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;

    fetch("http://localhost:3000/cliente/login",{
        method: "POST",
        headers: {
        "Content-Type": "application/json"
        },
        body: JSON.stringify({
            email: email,
            senha: senha
        })
    })
    .then(res => res.json())
    .then(dados => {
        console.log(dados);

        if (dados.status === true) {
            localStorage.setItem("usuario", JSON.stringify(dados.cliente));
            const usuario = JSON.parse(localStorage.getItem("usuario"));
            console.log(usuario);
            alert("Login realizado com sucesso!");
            window.location.href = "/";
            
        } else {
            alert("Email ou senha incorretos");
        }
    });
}

function cadastrarCliente(){
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("emailCadastro").value;
    const senha = document.getElementById("senhaCadastro").value;

    fetch("http://localhost:3000/cliente/inserir", {
        method: "POST",
        headers: {
        "Content-Type": "application/json"
        },
        body: JSON.stringify({
            nome: nome,
            email: email,
            senha: senha
        })
    })
    .then(res => res.json())
    .then(dados => {
        console.log(dados);

        if (dados.status === true) {
            alert("cadastro realizado com sucesso!");
            window.location.reload()
        } else {
            alert("erro ao cadastrar");
        }
    });
}

function carregarCadastro() {
    const container = document.getElementById("container");

    container.innerHTML = `
        <h2>Cadastro de Cliente</h2>

        <input type="text" id="nome" placeholder="Nome"><br><br>
        <input type="email" id="emailCadastro" placeholder="Email"><br><br>
        <input type="password" id="senhaCadastro" placeholder="Senha"><br><br>

        <button onclick="cadastrarCliente()">Cadastrar</button>
    `;
}
