//insere um jogo dentro da biblioteca do cliente
function inserirJogo(id_jogo){
    const usuario = JSON.parse(localStorage.getItem("usuario"));
    const id_cliente = usuario.id_cliente
    
    fetch("http://localhost:3000/biblioteca/inserir", {
        method: "POST",
        headers: {
        "Content-Type": "application/json"
        },
        body: JSON.stringify({
            id_jogo: id_jogo,
            id_cliente: id_cliente
        })
    })
    .then(res => res.json())
    .then(dados => {
        if(dados.status === true){
            alert("jogo adicionado a biblioteca")
            window.location.reload()
        } else {
            alert("erro ao adicionar jogo")
            window.location.reload()
        }
    })
}

function excluirJogo(id_jogo){
    fetch(`http://localhost:3000/biblioteca/excluir/${id_jogo}`)
        .then(res => res.json())
        .then(dados => {
            if(dados.status === true){alert(dados.mensagem), window.location.reload()}
            else{dados.mensagem}
        })
}

function carregarJogos(){
    const usuario = JSON.parse(localStorage.getItem("usuario"));
    const id_cliente = usuario.id_cliente
    fetch(`http://localhost:3000/biblioteca/listar/${id_cliente}`)
    .then(res => res.json())
    .then(dados => {
        console.log(dados);

        const lista = document.getElementById("lista-biblioteca");
        lista.innerHTML = "";

        dados.forEach(dado => {
            lista.innerHTML += `
                <div class="card">
                    <h2>${dado.titulo}</h2>
                    <p>${dado.descricao}</p>
                    <p>${dado.categoria}</p>
                    <button onclick="excluirJogo(${dado.id_jogo})">Remover</button>
                    <button onclick="carregarAvaliacao(${dado.id_jogo})">avaliar</button>
                    <button onclick="buscarJogo(${dado.id_jogo})">ver</button>
                </div>
            `;
        });
    });
}

carregarJogos()