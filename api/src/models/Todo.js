const { DataTypes, UUIDV4 } = require('sequelize')


module.exports = (sequelizeInstance)=>{

    sequelizeInstance.define('Todo', {
        id:{
            type: DataTypes.UUID,
            allowNull:false,
            defaultValue: UUIDV4,
            primaryKey:true
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
            type:DataTypes.ENUM('nueva', 'en proceso', 'finalizada')
        }
    }, {timestamps:false})


}