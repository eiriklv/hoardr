exports = module.exports = function () {
    return function (context) {
        return encodeURIComponent(context);
    };
};