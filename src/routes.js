const express = require("express")
const router = express.Router()
const controller_pesquisa = require('./controllers/pesquisas-controller')


//Routes
    router.get('/pesquisas', controller_pesquisa.get);

//Routes

module.exports = router