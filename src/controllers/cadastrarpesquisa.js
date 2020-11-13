const Researches = require('../model/researches')

exports.post = (req, res,) => {
    Researches.create({
        id_researche:req.body.id_researche,
        description:req.body.description,
        actor:req.body.actor,
        theme:req.body.theme,
        id_employee:req.body.id_employee
    }).then(function (){
        res.send("Pesquisa cadastrada com sucesso!!")
    }).catch(function (err){
        res.send("Houve um erro ao cadastrar pesquisa :(" + err)
    })
}