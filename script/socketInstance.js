const socket_io = require('socket.io');

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
        });

        return  io;

    }
}

/* https://stackoverflow.com/questions/61608574/how-to-use-socket-io-instance-on-multiple-files-in-express-js-app
 */