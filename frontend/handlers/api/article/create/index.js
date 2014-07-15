exports = module.exports = function (resource) {
    return function (req, res) {

        var userId;
        if (req.user) {
            userId = req.user._id;
        } else {
            userId = req.body.id;
        }

        resource.create(userId, req.body, function (err, result) {
            if (err) return res.send(400, err);
            res.send(201, result);
        });
    };
};