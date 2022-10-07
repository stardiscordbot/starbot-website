const express = require("express");
const routers = require("./routers/index.js");
const app = express();

app.use(express.static('./views'));

app.use("/", routers);

app.listen(2101, () => {
    console.log("[SERVER] - Servidor iniciado com Sucesso!");
});