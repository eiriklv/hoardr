exports = module.exports = function (templates, api, io) {
    var socket = io.connect();

    function bindToEvent(options) {
        var parent = $(options.element);
        parent.on(options.eventType, options.elementType, function(event) {
            event.preventDefault();

            console.log('click');

            var element = $(event.target);
            var action = element.attr('data-action');

            if (options.handlers[action]) options.handlers[action](element, parent, options.templates);
        });
    }

    // bind event handlers to the button panel
    bindToEvent({
        element: '#main',
        eventType: 'click',
        elementType: '.close',
        templates: templates,
        handlers: {
            delete: function(target, parent, templates) {
                alertify.confirm('Are you sure you want to delete the article?', function (e) {
                    if (e) {
                        api.article.remove({
                            url: target.parent().attr('data-url')
                        }, function (err, result) {
                            if (err) return alertify.error('Could not delete article: ' + err);
                            target.parent().remove();
                            alertify.success('Article deleted');
                        });
                    }
                });
            }
        }
    });

    function updateList () {
        api.article.get(null, function (err, data) {
            if (err) return alertify.error(err);

            $('#main').empty().append(templates.article.list(data.articles));
        });
    }

    function addUrl () {
        // get input value
        var inputField = $('#add-field');
        var inputValue = inputField.val();

        // send add event if input is present
        if(inputValue !== '') {
            api.article.create({ url: inputValue}, function (err, body) {
                console.log('body: ' + body);
            });
        }

        // reset input field
        inputField.val('');
    }

    // bind onclick event to add button
    $('#add-button').click(function () {
        addUrl();
    });

    // process input when pressing enter in add field
    $("#add-field").keyup(function (e) {
        if (e.keyCode == 13) addUrl();
        e.preventDefault();
    });

    // handle socket.io connection
    socket.on('connect', function () {
        console.log('connected to socket.io');
    });

    // initialize procedure to ensure that connection is established
    socket.on('init', function (data) {
        console.log('socket.io initialized..');
        socket.emit('init', 'response: ' + data);
    });

    // update the article list when the update event is emitted
    socket.on('update', function (data) {
        alertify.success('\'' + data.article.title + '\'' + ' - was updated in your storage');
        updateList();
    });

    socket.on('disconnect', function () {
        console.log('socket disconnected');
    });

    updateList();
};