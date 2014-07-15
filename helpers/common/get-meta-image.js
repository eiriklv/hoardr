var url = require('url');

exports = module.exports = function () {
    return function ($, link) {
        var meta = $('meta');
        var keys = Object.keys(meta);

        var ogImage;

        keys.forEach(function (key) {
            if (meta[key].attribs && meta[key].attribs.property && meta[key].attribs.property === 'og:image') {
                ogImage = meta[key].attribs.content;
            }
        });

        if (ogImage) ogImage = fixRelativePath(ogImage, link);

        return ogImage;
    };
};

function fixRelativePath (link, source) {
    var pat = /^https?:\/\//i;
    return !pat.test(link) ? url.resolve(source, link) : link;
}