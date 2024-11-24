const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require('dotenv').config();

const app = express();

app.use(cors({
  origin: "*",
}));

app.use(express.json());

const dbURI = process.env.MONGO_URI;

mongoose.connect(dbURI)
  .then(() => console.log("Conectado ao Banco!"))
  .catch((erro) => console.log("Erro ao conectar ao banco: ", erro));

const usuarioRotas = require("./src/rotas/usuarioRotas");
app.use("/usuarios", usuarioRotas);



 app.listen(5000, () => {
  console.log("Servidor rodando na porta 5000!");
});

app.get("/", (req, res) => {
  res.send("Hello World");
});