exports = module.exports = function (models, helpers, ipc) {
    return {
        update: require('./update')(models, helpers, ipc)
    };
};