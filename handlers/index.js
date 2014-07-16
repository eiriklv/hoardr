exports = module.exports = function (passport, services, config) {
    return {
        app: require('./app')(services, config),
        auth: require('./auth')(services, passport),
        api: require('./api')(services),
        middleware: require('./middleware')(services)
    };
};