exports = module.exports = function (app, express, middleware, handlers, path) {
    app.use(path, require('./local')(express, middleware, handlers.local, '/local'));
    app.use(path, require('./facebook')(express, middleware, handlers.facebook, '/facebook'));
    app.use(path, require('./google')(express, middleware, handlers.google, '/google'));
};