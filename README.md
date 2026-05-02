#  GameStore

Sistema de loja de jogos desenvolvido com foco em **backend utilizando Node.js**, permitindo gerenciamento de jogos, clientes e biblioteca de jogos.

---

## Tecnologias Utilizadas

### Backend

* Node.js
* Express
* MySQL
* CORS

### Frontend

* HTML
* CSS
* JavaScript (Fetch API)

---

## Funcionalidades

### Jogos

* Listar jogos
* Cadastrar jogos
* Editar jogos
* Excluir jogos
* Visualizar página individual do jogo

### Clientes

* Cadastro de cliente
* Login de cliente

### Biblioteca

* Adicionar jogo à biblioteca do cliente
* Listar jogos da biblioteca do cliente
  
### avaliação]
* Criar avaliação (nota + comentário)
* Listar avaliações por jogo
* Exibir dados do usuário (JOIN com cliente)
---
## Banco de Dados

### Tabela `jogos`

* id_jogo (PK)
* titulo
* descricao
* preco
* categoria
* imagem_url

### Tabela `cliente`

* id_cliente (PK)
* nome
* email
* senha

### Tabela `biblioteca`

* id_biblioteca (PK)
* id_cliente (FK)
* id_jogo (FK)
* data_adicao

### Tabela `avaliacao`

* id_avaliacao (PK)
* id_jogo (FK)
* id_usuario (FK)
* nota
* comentario
* data_avaliacao
---

## Como Executar

### 1. Clonar o repositório

```bash
git clone https://github.com/LuNK1108/GamesStore.git
```

---

### 2. Instalar dependências

```bash
npm install
```

---

### 3. Configurar banco de dados

Crie um banco chamado:

```
gamestore
```

E configure a conexão no arquivo:

```
src/database/conexao.js
```

---

### 4. Rodar o servidor

```bash
npm run dev
```

Servidor disponível em:

```
http://localhost:3000
```

---

### 5. Rodar o frontend

* Abrir arquivos HTML pelo navegador
  ou
* Utilizar XAMPP (htdocs) ou Live Server

---

## 💡 Melhorias Futuras

* Autenticação com JWT
* Sistema de carrinho de compras
* Interface mais moderna (React)
* Upload de imagens

---

## Autor

Desenvolvido por **Lucas Oliveira**
📧 Contato: [Lucs.os1108@gmail.com](mailto:Lucs.os1108@gmail.com)
🔗 GitHub: https://github.com/LuNK1108

---

## Objetivo do Projeto

Este projeto foi desenvolvido com o objetivo de praticar conceitos de:

* API REST
* Integração frontend/backend
* Manipulação de banco de dados
* Estruturação de projetos Node.js

---

## Status

Em desenvolvimento
