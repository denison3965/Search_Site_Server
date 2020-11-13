const Question = require('../model/questions ')

exports.post = (req, res,) => {
    Question.create({
        id_question: req.body.id_question,
        title: req.body.title,
        number: req.body.number,
        correct:req.body.correct,
        a: req.body.a,
        b: req.body.b,
        c: req.body.c,
        d: req.body.d,
        feedback: req.body.feedback,
        id_researche: req.body.id_researche
    }).then(function () {
        res.send("Questao criada com sucesso")
    }).catch(function (err){
        res.send("Houve um erro ao cadastrar questao" + err)
    })
}