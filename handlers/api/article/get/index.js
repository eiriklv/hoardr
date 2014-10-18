exports = module.exports = function (resource) {
    return function (req, res) {

        var userId;
        if (req.user) {
            userId = req.user._id;
        } else {
            userId = req.body.id;
        }

        resource.get(userId, req.query.url, function (err, result) {
            if (err) return res.status(400).send(err);
            res.status(200).send(result);
        });
    };
};
