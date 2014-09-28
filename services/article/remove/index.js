var async = require('async');

exports = module.exports = function (models) {
    return function (userId, body, callback) {
        async.waterfall([
            function findUser(callback) {
                models.User.findById(userId, function (err, user) {
                    callback(err, user)
                });
            },
            function pullArticleFromUser(user, callback) {
                if (!user) return callback('user does not exist');
                if (!body._id) return callback('no url supplied for removal');

                user.articles.pull(body._id);

                user.save(function (err, product) {
                    callback(err, product);
                });
            },
            function removeArticleFromCollection(user, callback) {
                models.Article.findByIdAndRemove(body._id, function (err, article) {
                    callback(err, {
                        article: article,
                        user: user
                    });
                });
            }
        ], function(err, result) {
            callback(err, result);
        });
    };
};
