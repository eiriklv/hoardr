var debug = require('debug')('hoardr:socketio:global');
var util = require('util');

exports = module.exports = function(socket, ipc) {
    debug('global socket connected');

    //ipc.on('someevent', someFunction);

    socket.on('disconnect', function() {
        //ipc.removeListener('someevent', someFunction);
        debug('global socket disconnected');
    });
};
