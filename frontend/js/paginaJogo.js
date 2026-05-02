function carregarJogo() {
    const container = document.getElementById("container-jogo");
    const background = document.getElementById("background");

    const jogoSalvo = localStorage.getItem("jogo");

    if (!jogoSalvo) {
        container.innerHTML = `
            <div class="mensagem-erro">
                <h1>Nenhum jogo encontrado</h1>
                <a href="./index.html">
                    <button>Voltar para loja</button>
                </a>
            </div>
        `;
        return;
    }

    const jogo = JSON.parse(jogoSalvo);

    console.log("jogo carregado:", jogo);

    background.style.backgroundImage = `url('${jogo.imagem_url}')`;

    container.innerHTML = `
        <section class="pagina-jogo">
            <a href="/" class="voltar">Voltar para loja</a>

            <div class="card-jogo">
                <div class="imagem-area">
                    <img src="${jogo.imagem_url}" alt="${jogo.titulo}">
                </div>

                <div class="info-area">
                    <span class="categoria">${jogo.categoria}</span>

                    <h1>${jogo.titulo}</h1>

                    <p class="descricao">${jogo.descricao}</p>

                    <div class="compra-area">
                        <span class="preco">R$ ${jogo.preco}</span>
                        <button onclick="comprar(${jogo.id_jogo})">Comprar</button>
                    </div>
                </div>
            </div>
        </section>
    `;
}

function comprar(id_jogo) {
    alert("Compra do jogo ID: " + id_jogo);
}

carregarJogo();