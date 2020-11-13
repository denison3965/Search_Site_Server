const db = require('./db')

const Questions = db.sequelize.define('question',{

    id_question:{
        type:db.Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    title:{
        type:db.Sequelize.STRING,notNull:true
    },
    number:{
        type:db.Sequelize.INTEGER, 
    correct:{
        type:db.Sequelize.ENUM('a','b','c','d')
        
    }},
    a:{
        type:db.Sequelize.STRING
    },
    b:{
        type:db.Sequelize.STRING
    },
    c:{
        type:db.Sequelize.STRING
    },
    d:{
        type:db.Sequelize.STRING
    },
    feedback:{
        type:db.Sequelize.STRING
    },
    id_researche:{
        type:db.Sequelize.INTEGER,
        foreignKey: true
    }
})

module.exports = Questions