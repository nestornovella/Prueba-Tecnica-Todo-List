require('dotenv').config()
const path = require('path')
const fs = require('fs')
const { Sequelize } = require('sequelize')
const sequelize = new Sequelize(process.env.SQL_CONNECT,{
    logging:false,
    protocol:'postgres',
    dialect:'postgres',
    native:false
})


fs.readdirSync(path.join(__dirname, "src", "models"))
.filter(e => e.indexOf('.')!= 0 && e.slice(-3)=== '.js')
.forEach(e=> require(path.join(__dirname, "src", "models", e))(sequelize))





console.log(sequelize.models)
module.exports = {
    ...sequelize.models,
    connect: sequelize,

}