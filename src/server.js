const express = require("express");
const cors = require("cors");
const jogoRoutes = require("./routes/jogoRoutes")
const clienteRoutes = require("./routes/clienteRoutes")
const bibliotecaRoutes = require("./routes/bibliotecaRoutes")

const app = express();

app.use(cors());
app.use(express.json());

app.use(jogoRoutes);
app.use(clienteRoutes);
app.use(bibliotecaRoutes);


app.get("/", (req, res) => {
    res.send("API da GameStore rodando");
});

app.listen(3000, () => {
    console.log("Servidor rodando em http://localhost:3000/jogos");
});