exports = module.exports = function (services) {
    return {
        landing: require('./landing')(),
        home: require('./home')(),
        bookmarklet: require('./bookmarklet')(),
        article: require('./article')(services),
        profile: require('./profile')(services),
        common: require('./common')(services)
    };
};