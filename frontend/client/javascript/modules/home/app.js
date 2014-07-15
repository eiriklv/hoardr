exports = module.exports = function (templates, api) {
    api.article.get(null, function (err, data) {
        if (err) return alertify.error(err);

        $('#main').append(templates.article.list(data.articles));
    });
};