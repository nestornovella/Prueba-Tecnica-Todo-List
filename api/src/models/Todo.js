const { DataTypes } = require('sequelize')


module.exports = (sequelizeInstance)=>{

    sequelizeInstance.define('Todo', {
        id:{
            type: DataTypes.INTEGER,
            allowNull:false,
            autoIncrement:true,
            primaryKey:true
        },
        descripcion:{
            type:DataTypes.TEXT,
        },
        nombre:{
            type: DataTypes.STRING,
            allowNull:false,
        },
        prioridad:{
            type: DataTypes.ENUM('alta', 'media', 'baja'),
            defaultNull:false,
            defaultValue:"media"

        },
        estado:{
            type:DataTypes.ENUM('nueva', 'en proceso', 'finalizada'),
            defaultValue: 'nueva'
        }
    }, {timestamps:true})


}