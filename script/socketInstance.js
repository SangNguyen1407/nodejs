const socket_io = require('socket.io');
const person_list_controller = require('../controllers/person_list_controller');

module.exports = {
    //Initialize the socket server
    initialize: function(httpServer) {
        // create io for http server 
        let io = socket_io(httpServer);

        // receive data from client 
        io.on('connection', function(socket) {
            // show socket.id
            console.log('New client connected with id = ', socket.id);
            // error
            socket.on('disconnect', function(reason) {
                console.log('A client disconnected with id = ', socket.id, " reason ==> ", reason);
            });

            socket.on('sendData', async function(reason) {
                let result = await person_list_controller.getAllPerson();
                console.log("test............" + JSON.stringify(result));
                socket.emit('sendData', JSON.stringify(result));
            });
        });

        return  io;

    }
}

/* https://stackoverflow.com/questions/61608574/how-to-use-socket-io-instance-on-multiple-files-in-express-js-app
 */