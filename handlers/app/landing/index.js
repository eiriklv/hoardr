exports = module.exports = function () {
    return function (req, res) {
        if (req.user) return res.redirect('/feed');
        res.render('landing');
    };
};
