var debug = require('debug')('hoardr:socketio:session-global');
var util = require('util');

exports = module.exports = function(socket, ipc) {
    var session = socket.handshake.session;
    var updateEvent = 'update:' + session.passport.user;

    function publishUpdate(data) {
        socket.emit('update', data);
    }

    debug('session socket connected with');
    debug(util.inspect(session));

    ipc.on(updateEvent, publishUpdate);

    socket.on('message', function(data) {
        debug('got message via session socket: ' + data);
    });

    socket.on('disconnect', function() {
        ipc.removeListener(updateEvent, publishUpdate);
        debug('session socket disconnected');
    });
};
