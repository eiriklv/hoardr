exports = module.exports = function () {
    return function (context) {
        return decodeURIComponent(decodeURIComponent(context));
    };
};
