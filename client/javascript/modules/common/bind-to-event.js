exports = module.exports = function(options) {
    var parent = $(options.element);
    parent.on(options.eventType, options.elementType, function(event) {
        event.preventDefault();

        console.log('click');

        var element = $(event.target);
        var action = element.attr('data-action');

        if (options.handlers[action]) options.handlers[action](element, parent, options.templates);
    });
};
