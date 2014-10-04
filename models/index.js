exports = module.exports = function (mongoose, validators) {
    return {
        User: require('./user')('User', mongoose, validators),
        VerificationToken: require('./verification-token')('Verificationtoken', mongoose, validators),
        Article: require('./article')('Article', mongoose, validators),
        Collection: require('./collection')('Collection', mongoose, validators)
    };
};
