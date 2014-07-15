var debug = require('debug')('hoardr:socketio:session-global');
var util = require('util');

exports = module.exports = function (ioSession, ipc) {
    ioSession.on('connection', function (err, socket, session) {
        if (err) return debug(util.inspect(err));

        var updateEvent = 'update:' + session.passport.user;

        function publishUpdate (data) {
            socket.emit('update', data);
        }

        debug('session socket connected with');
        debug(util.inspect(session));

        ipc.on(updateEvent, publishUpdate);

        socket.on('message', function (data) {
            debug('got message via session socket: ' + data);
        });

        socket.on('disconnect', function () {
            ipc.removeListener(updateEvent, publishUpdate);
            debug('session socket disconnected');
        });
    });
};