exports = module.exports = function (app, express, handlers, config) {
    require('./global/enable-cors')(app, handlers.middleware);
    require('./global/keep-alive')(app, express, '/keepalive');
    require('./app')(app, express, handlers.middleware, handlers.app, '/');
    require('./auth')(app, express, handlers.middleware, handlers.auth, '/auth');
    require('./api')(app, express, handlers.middleware, handlers.api, config.get('client.api.path'));
};