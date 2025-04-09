const express = require('express')
const routerLivros = require("./rotas/livro")

const app = express ()

app.use('/livro', routerLivros)

const port = 8000

app.listen(port, () => {
    console.log(`Escutando a porta ${port}`)

})