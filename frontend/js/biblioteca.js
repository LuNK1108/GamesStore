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