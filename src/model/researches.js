const db = require('./db') 

const Researches = db.sequelize.define('researches',{

    id_researche:{
        type:db.Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    description:{
        type:db.Sequelize.STRING
    },
    actor:{
        type:db.Sequelize.STRING
    },
    theme:{
        type:db.Sequelize.STRING
    },
    id_employee:{
        type:db.Sequelize.INTEGER,
        foreignKey: true
    }
})

module.exports = Researches