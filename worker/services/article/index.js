exports = module.exports = function (models, helpers, ipc) {
    return {
        update: require('./add')(models, helpers, ipc)
    };
};