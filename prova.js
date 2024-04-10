const express = require("express")
const prova = express()
const PORTA = 3000

const id = [
    {
        "id": 1,
        "descricao": "Camiseta",
        "preco": 29.99,
        "cores": ["preto", "branco", "cinza"]
        },
        {
        "id": 2,
        "descricao": "Calça Jeans",
        "preco": 79.99,
        "cores": ["azul claro", "azul escuro"]
        },
        {
        "id": 3,
        "descricao": "Tênis Esportivo",
        "preco": 149.99,
        "cores": ["preto", "branco", "cinza", "azul"]
        },
        {
        "id": 4,
        "descricao": "Jaqueta de Couro",
        "preco": 99.99,
        "cores": ["preto", "marrom"]
        }       
]

prova.get("/", function(req, res){
    res.json(id);
})

prova.get("/:id", function(req, res){
    const id = parseInt(req,params.id);
    const dado = id.find(dado => dado.id === id);
    res.json(dado);
})

prova.post("/", function(req, res){
})

prova.put("/:id", (req, res) => {
})

prova.delete("/:id", (req, res) => {
})

prova.listen(PORTA,()=>{
    console.log("Servidor executando na porta "+PORTA)
})