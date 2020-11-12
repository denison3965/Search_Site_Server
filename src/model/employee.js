const db = require('./db')


const Employee = db.sequelize.define('employees',{

    email:{
        type:db.Sequelize.STRING
    },
    senha:{
        type:db.Sequelize.STRING
    },
    id_company:{
        type:db.Sequelize.INTEGER
    },
    id_employee:{
        type:db.Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    }
    
}
     
 )


module.exports = Employee
