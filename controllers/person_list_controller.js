const sequelize = require('../config/webconfig')['development'];
const {Sequelize, DataTypes } = require('sequelize');
const model = require('../models/person_list_model')(sequelize, DataTypes);

async function getAllPerson (){
    return await model.findAll();
}

async function getPersonInCity (data){
    return await model.findAll({
        where:{
            City : data
        }
    });
}

module.exports = {
    getAllPerson,
    getPersonInCity,
}