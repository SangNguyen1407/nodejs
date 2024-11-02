const db = require('../models');
const model = db.person_list_model;

async function getAllPerson (){
    return await model.findAll();
}

exports.getAllPerson = getAllPerson;