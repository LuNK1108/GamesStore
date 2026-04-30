function carregarJogos() {
    fetch("http://localhost:3000/jogos")
        .then(res => res.json())
        .then(jogos => {
            const lista = document.getElementById("lista_jogos");
            lista.innerHTML = "";

            jogos.forEach(jogo => {
                lista.innerHTML += `
                    <div class="card">
                        <h2>${jogo.titulo}</h2>
                        <p>${jogo.descricao}</p>
                        <p>R$ ${jogo.preco}</p>
                        <button onclick="inserirJogo(${jogo.id_jogo})">Comprar</button>
                `;
            });
        });
}

carregarJogos();


/*infor do usuario logado
const usuario = JSON.parse(localStorage.getItem("usuario"));
console.log(usuario);
*/