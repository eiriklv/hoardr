exports = module.exports = function () {
    return {
        formatName: require('./format-name')(),
        isValidObjectId: require('./valid-object-id')(),
        getMetaImage: require('./get-meta-image')()
    };
};