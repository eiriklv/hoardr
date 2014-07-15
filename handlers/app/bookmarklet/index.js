exports = module.exports = function () {
    return function (req, res) {
        res.render('bookmarklet', {
            title: 'Bookmarklet',
            icon: 'fa-magic',
            user: req.user
        });
    };
};