exports = module.exports = function (models, helpers, ipc) {
    return {
        get: require('./get')(models, helpers, ipc),
        remove: require('./remove')(models, helpers, ipc),
        create: require('./create')(models, helpers, ipc)
    };
};