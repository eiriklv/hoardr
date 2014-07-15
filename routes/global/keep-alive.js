exports = module.exports = function (app, express, path) {
    var router = express();

    router.route(path)
        .all(function (req, res) {
            res.send(200);
        });

    app.use(router);
};