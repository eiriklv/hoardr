exports = module.exports = function (services) {
    return {
        article: require('./article')(services.article),
        profile: require('./profile')(services.profile)
    };
};