exports = module.exports = function (models, helpers, ipc) {
    return {
        article: require('./article')(models, helpers, ipc)
    };
};