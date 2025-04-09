const { Router } = require ("express")
const {getLivros} = require("../controladores/livros");

const router = Router()

router.get("/", getLivros)

router.post("/",(req, res) =>{
    res.send('voce fez uma requisicao do tipo postman')

})

router.patch ("/",(req, res) =>{
    res.send('voce fez uma requisicao do tipo patch')

})


router.delete("/",(req, res) =>{
    res.send('voce fez uma requisicao do tipo delete')

})

module.exports = router

