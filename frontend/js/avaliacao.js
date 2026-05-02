function avaliar(id){
    const id_jogo = id;
    const usuario = JSON.parse(localStorage.getItem("usuario"));
    const id_cliente = usuario.id_cliente
    const nota = document.getElementById("nota").value;
    const comentario = document.getElementById("comentario").value;
    fetch("http://localhost:3000/avaliar", {
        method: "POST",
         headers: {
        "Content-Type": "application/json"
        },
        body: JSON.stringify({
            id_jogo: id_jogo,
            id_cliente: id_cliente,
            nota: nota,
            comentario: comentario
        })
    })
    .then(res => res.json())
    .then(dados => {
        if(dados.status === true){alert(dados.mensagem), window.location.reload()}
        else{alert(dados.mensagem)}
    })
}


function carregarAvaliacao(id_jogo) {
    const container = document.getElementById("avaliacao");

    container.innerHTML = `
        <div class="card-avaliacao">
            <h2>Deixe sua avaliação</h2>
            <label>Nota (1 a 5):</label>
            <input type="number" id="nota" min="1" max="5" placeholder="Ex: 5">
            <label>Comentário:</label>
            <textarea id="comentario" placeholder="Escreva seu comentário..."></textarea>
            <button onclick="avaliar(${id_jogo})">Enviar Avaliação</button>
        </div>
    `;
}

function mostrarAvaliacao(){
    const jogo = JSON.parse(localStorage.getItem("jogo"));
    const id_jogo = jogo.id_jogo
    fetch(`http://localhost:3000/mostrar/avaliacao/${id_jogo}`)
        .then(res => res.json())
        .then(dados => {
            const container = document.getElementById("lista-avaliacoes");

            container.innerHTML = "";

            dados.forEach(avaliacao => {
            container.innerHTML += `
            <div class="card-avaliacao">
                <h3>${avaliacao.nome}</h3>

                <p><strong>Nota:</strong> ${avaliacao.nota} </p>

                <p>${avaliacao.comentario || "Sem comentário"}</p>

                <small>${new Date(avaliacao.data_avaliacao).toLocaleDateString()}</small>
            </div>
        `;
            });
        })
}

mostrarAvaliacao()

/*
.card-avaliacao {
    background: #16202d;
    padding: 20px;
    border-radius: 8px;
    margin-top: 20px;
}

.card-avaliacao input,
.card-avaliacao textarea {
    width: 100%;
    margin: 10px 0;
    padding: 10px;
    border-radius: 4px;
    border: none;
}
*/