exports = module.exports = function () {
    return function (id) {
        var objectIdRegex = new RegExp("^[0-9a-fA-F]{24}$");
        return objectIdRegex.test(id);
    };
};