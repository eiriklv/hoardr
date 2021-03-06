exports = module.exports = function (services, config) {
    return {
        landing: require('./landing')(),
        feed: require('./feed')(),
        bookmarklet: require('./bookmarklet')(config),
        fetchbookmarklet: require('./fetchbookmarklet')(config),
        article: require('./article')(services),
        profile: require('./profile')(services),
        common: require('./common')(services)
    };
};
