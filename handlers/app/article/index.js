exports = module.exports = function (services) {
    return function (req, res, next) {
        services.article.get(req.user._id, req.params.id, function (err, article) {
            if (err) return next();

            res.render('article', {
                title: 'Article',
                icon: 'fa-magic',
                user: req.user,
                article: article
            });
        });
    };
};
