module.exports = {  
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