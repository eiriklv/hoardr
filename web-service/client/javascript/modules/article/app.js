exports = module.exports = function (templates, api, io) {
    $('#content img').each(function () {
        $(this).removeAttr('height').removeAttr('width').css('width', '100%');
    });
};