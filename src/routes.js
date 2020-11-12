const express = require("express")
const router = express.Router()
const controller_pesquisa = require('./controllers/pesquisas-controller')

const Employee = require('./model/employee')
const bodyParser = require('body-parser');
require('dotenv').config()
const jwt = require('jsonwebtoken')




//Routes
    router.get('/pesquisas', controller_pesquisa.get);

    //verification
    router.post('/verificar',(req, res) => {
        Employee.findOne({where: {email: req.body.email}}).then((employee) => {
            if (employee) {
                Employee.findOne({where: {senha: req.body.senha}}).then((senha) => {
                    if (senha) {

                        var token = jwt.sign({ID : employee.id_employee}, process.env.SECRET,{
                            expiresIn: 300
                        })
                        
                        res.send(token)

                        //Althenticantion success, and ready to token
                        
                    }
                    else{
                        res.send("Senha errada")
                    }
                })
            }
            else{
                res.send("Email errado")
            }
        }).catch((err) => console.log(err))
    })

//Routes

module.exports = router