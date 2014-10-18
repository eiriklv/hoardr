exports = module.exports = function (app, express, path) {
    var router = express();

    router.route(path)
        .all(function (req, res) {
            res.status(200).send();
        });

    app.use(router);
};
