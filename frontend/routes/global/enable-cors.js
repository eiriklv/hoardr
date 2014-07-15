exports = module.exports = function (app, middleware) {
    app.use(middleware.enableCORS);
};