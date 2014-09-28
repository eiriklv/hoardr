exports = module.exports = function (models) {
    return function (userId, id, callback) {
        if (id) {
            models.Article.findById(id, function (err, article) {
                callback(err, article);
            });
        } else {
            models.User
            .findById(userId)
            .select('articles')
            .populate({
                path: 'articles',
                select: '_id url title description image createdAt',
                model: 'Article',
                options: {
                    sort: '-createdAt'
                }
            })
            .exec(function (err, articles) {
                if (err) return callback(err);
                callback(err, articles);
            });
        }
    };
};
