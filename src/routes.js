const express = require("express")
const router = express.Router()
const controller_pesquisa = require('./controllers/pesquisas-controller')
const controller_token = require('./controllers/verifyMyToken-controller')
const controller_verificar_login = require('./controllers/verificarLogin-controller')
const controller_cadastrarpesquisa = require('./controllers/cadastrarpesquisa')
const controller_cadastrarquestoes = require('./controllers/cadastrarquestoes')





//Routes
    router.get('/pesquisas', controller_pesquisa.get);

    //verification login
    router.post('/verificarlogin', controller_verificar_login.post)

    //verificar token
    router.post('/verificartoken', controller_token.post)

    //cadastrar pesquisa
    router.post('/cadastrarpesquisa', controller_cadastrarpesquisa.post)

    //cadastrar questoes
    router.post('/cadastrarquestoes', controller_cadastrarquestoes.post)



//Routes

module.exports = router