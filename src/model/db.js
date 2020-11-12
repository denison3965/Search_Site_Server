//importing sequelize
const Sequelize = require('sequelize')
//connection to the mysql databases
//importing a new sequelize object to perform the connection
//passing parameters to the constructor the name of the database that I will use, along with username and password
const sequelize = new Sequelize('search', 'deni','123123',{
    host: "localhost",
    dialect: 'mysql',
    define :{
        // don't add the timestamp attributes (updatedAt, createdAt)
        timestamps: false
    } 
})

//checking whether the database has completed or not
sequelize.authenticate().then(()=>{
    console.log("Successfully connected")
}).catch((err)=>{
    console.log("error connecting:" + err)
})

//exporting the sequelize and the object that was used to perform the connection
module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}