const Employee = require('../model/employee')
const bodyParser = require('body-parser');
require('dotenv').config()
const jwt = require('jsonwebtoken')

exports.post = (req, res) => {
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
                    res.send("Senha invalida ou username invalido")
                }
            })
        }
        else{
            res.send("Senha invalida ou username invalido")
        }
    }).catch((err) => console.log(err))
}