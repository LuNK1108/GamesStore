import {useEffect, useState} from "react";

function App(){
  const [jogos, setJogos] = useState([]);

  //executa algo quando a tela carrega
  useEffect(() => {
      fetch("http://localhost:3000/jogos")
        .then(resposta => resposta.json())
        .then(dados => {
          setJogos(dados);
        })
        .catch(erro => {
           console.log(erro)
        });
  })
  return (
    <div>
      <h1>GameStore</h1>

      <div>
        {jogos.map((jogo) => (
          <div key={jogo.id_jogo}>
            <h2>{jogo.titulo}</h2>
            <p>{jogo.descricao}</p>
            <p>Categoria: {jogo.categoria}</p>
            <p>Preço: R$ {jogo.preco}</p>

            <button>Comprar</button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App;