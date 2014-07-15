exports = module.exports = function (services, passport) {
    return {
        facebook: require('./facebook')(passport),
        google: require('./google')(passport),
        local: require('./local')(services, passport)
    };
};