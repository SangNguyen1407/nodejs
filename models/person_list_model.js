const sequelize = require('../config/webconfig')['development'];

module.exports = (sequelize, DataTypes) =>{
    const Person = sequelize.define(
        "table_persons", 
        {
            PersonID : {
                type : DataTypes.STRING,
                primaryKey: true,
                allowNull: false,
            },
            FirstName : DataTypes.STRING,
            LastName : DataTypes.STRING,
            Address : DataTypes.STRING,
            City : DataTypes.STRING,
        },
        {
            timestamps: false,
            createdAt: false,
            updatedAt: false,
        }
    );

    return Person;
}