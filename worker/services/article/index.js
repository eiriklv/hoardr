exports = module.exports = function (models, helpers, ipc) {
    return {
        add: require('./add')(models, helpers, ipc)
    };
};