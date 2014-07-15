exports = module.exports = function (express, middleware, handlers, path) {
    var router = express();

    router.route(path)
        .all(middleware.isLoggedInAPI)
        .all(middleware.isVerified)
        .get(handlers.article.get)
        .post(handlers.article.create)
        .delete(handlers.article.remove);

    return router;
};