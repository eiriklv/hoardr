exports = module.exports = function (models, helpers, ipc, rpc) {
    return {
        get: require('./get')(models, helpers, ipc, rpc),
        remove: require('./remove')(models, helpers, ipc, rpc),
        create: require('./create')(models, helpers, ipc, rpc)
    };
};