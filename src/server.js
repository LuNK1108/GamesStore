const express = require("express");
const path = require("path");
const cors = require("cors");
const jogoRoutes = require("./routes/jogoRoutes")
const clienteRoutes = require("./routes/clienteRoutes")
const bibliotecaRoutes = require("./routes/bibliotecaRoutes")
const avaliacaoRoutes = require("./routes/avaliacaoRoutes")

const app = express();

app.use(cors());
app.use(express.json());

app.use(jogoRoutes);
app.use(clienteRoutes);
app.use(bibliotecaRoutes);
app.use(avaliacaoRoutes)


app.use(express.static(path.join(__dirname, "../frontend")));


//rotas das paginas
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend/views/index.html"));
});

app.get("/paginaLogin", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend/views/login.html"));
});

app.get("/paginaBiblioteca", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend/views/biblioteca.html"));
});

app.get("/paginaJogo", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend/views/paginaJogo.html"));
});

app.listen(3000, () => {
    console.log("Servidor rodando em http://localhost:3000/");
});