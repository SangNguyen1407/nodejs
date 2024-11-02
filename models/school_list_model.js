const { Sequelize, DataTypes } = require('sequelize');

module.exports = (Sequelize, DataTypes) => {
    const School = Sequelize.define(
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
}