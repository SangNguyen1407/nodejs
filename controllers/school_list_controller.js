const sequelize = require('../config/webconfig')['development'];
const {Sequelize, DataTypes } = require('sequelize');
const model = require('../models/school_list_model');

async function getAllSchool (){
    return await model.findAll();
}

exports.getAllSchool = getAllSchool;