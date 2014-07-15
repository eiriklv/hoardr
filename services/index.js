exports = module.exports = function (models, helpers, ipc, rpc) {
    return {
        profile: require('./profile')(models, helpers),
        article: require('./article')(models, helpers, ipc, rpc)
    };
};