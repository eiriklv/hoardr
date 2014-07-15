exports = module.exports = function (resource) {
    return {
        get: require('./get')(resource),
        remove: require('./remove')(resource),
        create: require('./create')(resource)
    };
};