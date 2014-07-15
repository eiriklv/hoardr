exports = module.exports = function (app, express, middleware, handlers, path) {
    app.use(path, require('./article')(express, middleware, handlers, '/article'));
    app.use(path, require('./profile')(express, middleware, handlers, '/profile'));
};