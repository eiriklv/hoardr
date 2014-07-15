exports = module.exports = function () {
    // mock of profile service (should be sinon stub?)
    var profileMock = function profile (err, user) {
        return {
            update: function (req, callback) {
                callback(err, user);
            }
        };
    };

    // mock of article service (should be sinon stub?)
    var articleMock = function article (err) {
        return {
            create: function (body, callback) {
                callback(err, body);
            },
            edit: function (body, callback) {
                callback(err, body);
            },
            get: function (body, callback) {
                callback(err, body);
            },
            remove: function (body, callback) {
                callback(err, body);
            }
        };
    };

    // tests subjects
    var services = {};
    services.profile = {
        success: require('../../../handlers/api/profile')(profileMock(null, { fullname: 'John Doe' })),
        error: require('../../../handlers/api/profile')(profileMock('error'))
    };
    services.article = {
        success: require('../../../handlers/api/article')(articleMock()),
        error: require('../../../handlers/api/article')(articleMock('error'))
    };

    // tests
    describe('Handlers', function(){
        require('./profile')(services.profile);
        require('./article')(services.article);
    });
};