exports = module.exports = function (resource) {
    return function (req, res) {

        var userId;
        if (req.user) {
            userId = req.user._id;
        } else {
            userId = req.body.id;
        }

        resource.create(userId, req.body, function (err, result) {
            if (err) return res.status(400).send(err);
            res.status(201).send(result);
        });
    };
};
