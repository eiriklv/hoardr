exports = module.exports = function (models, helpers, ipc) {
    return {
        profile: require('./profile')(models, helpers),
        article: require('./article')(models, helpers, ipc)
    };
};