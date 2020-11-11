const express = require("express")
const router = express.Router()
const controller_pesquisa = require('./controllers/pesquisas-controller')


//Default Route
    router.get('/pesquisas', controller_pesquisa.get);

//Routes

module.exports = router