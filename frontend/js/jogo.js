function buscarJogo(id){
    const id_jogo = id
    fetch(`http://localhost:3000/busca/jogo/${id_jogo}`)
        .then(res => res.json())
        .then(dados => {
            if(dados.status === true){ 
                console.log("dados:", dados);
                console.log("resultado:", dados.resultado);

                localStorage.setItem("jogo", JSON.stringify(dados.resultado[0]));

                const jogo = JSON.parse(localStorage.getItem("jogo"));
                console.log("jogo salvo:", jogo);

                window.location.href = "/paginaJogo";
            }
        })
}

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
                        <button onclick="buscarJogo(${jogo.id_jogo})">Ver</button>
                `;
            });
        });
}


carregarJogos();


/*infor do usuario logado
const usuario = JSON.parse(localStorage.getItem("usuario"));
console.log(usuario);
*/