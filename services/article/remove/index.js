exports = module.exports = function (models) {
    return function (userId, body, callback) {
        models.User.findById(userId, function (err, user) {
            if (err) return callback(err);
            if (!user) return callback('user does not exist');
            if (!body.url) return callback('no url supplied for removal');

            user.articles.pull(body.url);

            user.save(function (err, product) {
                if (err) return callback(err);
                callback(null, { url: body.url });
            });
        });
    };
};