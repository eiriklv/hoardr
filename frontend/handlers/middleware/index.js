exports = module.exports = function (services) {
    return {
        isLoggedIn: require('./is-logged-in')(),
        isLoggedInAPI: require('./is-logged-in-api')(services),
        isVerified: require('./is-verified')(),
        enableCORS: require('./enable-cors')()
    };
};