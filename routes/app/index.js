exports = module.exports = function (app, express, middleware, handlers, path) {
    app.use(path, require('./landing')(express, middleware, handlers, '/'));
    app.use(path, require('./home')(express, middleware, handlers, '/home'));
    app.use(path, require('./bookmarklet')(express, middleware, handlers, '/bookmarklet'));
    app.use(path, require('./fetchbookmarklet')(express, middleware, handlers, '/fetchbookmarklet/:userId/:accessToken'));
    app.use(path, require('./article')(express, middleware, handlers, '/article/:id'));
    app.use(path, require('./logout')(express, middleware, handlers, '/logout'));
    app.use(path, require('./profile')(express, middleware, handlers, '/profile'));
};
