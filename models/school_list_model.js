const sequelize = require('../config/webconfig')['development'];
const {Sequelize, DataTypes } = require('sequelize');

module.exports = (sequelize, DataTypes) =>{
    const School = sequelize.define(
        "school_db", 
        {
            school_id : {
                type : DataTypes.STRING,
                primaryKey: true,
                allowNull: false,
            },
            school_name : DataTypes.STRING,
            address : DataTypes.STRING,
        }
    );
    return School;
};