exports = module.exports = function (models, helpers, ipc) {
    return function (userId, body, callback) {
        if (!body.url) return callback('no url supplied for storage');
        ipc.emit('add', { id: userId, url: body.url });
        callback(null, { url: body.url });
    };
};