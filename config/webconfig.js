const Sequelize = require('sequelize');

module.exports = {  
    development: new Sequelize({
        username: "sa",
        password: "123456",
        database: "persons_db",
        host: "127.0.0.1",
        dialect: "mssql",
        dialectOptions: {
            options: {
                encrypt: false
            }
        }
    }),
    server: '127.0.0.1',  //update me
    authentication: {
        type: 'default',
        options: {
            userName: 'sa', //update me
            password: '123456'  //update me
        }
    },
    options: {
        // If you are on Microsoft Azure, you need encryption:
        encrypt: false,
        database: 'persons_db'  //update me
    },
    ttl : 3000
};  