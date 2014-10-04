exports = module.exports = function () {
    return function (req, res) {
        res.render('feed', {
            title: 'Feed',
            icon: 'fa-magic',
            user: req.user, // get the user out of session and pass to template
            url: req.query.url
        });
    };
};
