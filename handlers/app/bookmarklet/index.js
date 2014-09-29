exports = module.exports = function (config) {
    return function (req, res) {
        res.render('bookmarklet', {
            title: 'Bookmarklet',
            icon: 'fa-magic',
            user: req.user,
            domain: config.get('env') === 'production' ? config.get('secure_domain') : config.get('domain')
        });
    };
};
