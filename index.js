const express = require("express")
const app = express()

app.get("/idade/:nome/:idade", (req, res)=>{
    const {nome, idade} = req.params
    res.status (200).json({
        mensagem:`Nome: ${nome}, Idade: ${idade}`
    })
})

// commit Miguel

app.listen(3020, ()=>{
    console.log("Henrique o servidor esta Ligado")
})