exports = module.exports = function(templates, api, io) {
    var socket = io.connect();
    var bindToEvent = require('../common/bind-to-event');
    var deviceWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    var masonryInit = false;
    var container = $('#main');
    var masonryOptions = deviceWidth >= 768 ? {} : { transitionDuration: 0 };

    container.masonry(masonryOptions);

    function bindToEvents() {
        // bind event handlers to the button panel
        bindToEvent({
            element: '#main',
            eventType: 'click',
            elementType: '.close',
            templates: templates,
            handlers: {
                delete: function(target, parent, templates) {
                    alertify.confirm('Are you sure you want to delete the article?', function(e) {
                        if (e) {
                            api.article.remove({
                                _id: target.parent().attr('data-id')
                            }, function(err, result) {
                                if (err) return alertify.error('Could not delete article: ' + err);
                            });
                        }
                    });
                }
            }
        });
    }

    function deleteItem(element) {
        container.masonry('remove', element);
        element.remove();
        container.masonry('layout');
        alertify.success('Article deleted');
    }

    function updateList() {
        api.article.get(null, function(err, data) {
            if (err) return alertify.error(err);

            // append items
            data.articles.forEach(function(article) {
                var renderedElement = $(templates.article.item(article));
                container.append(renderedElement);
                container.masonry('appended', renderedElement);
            });

            // layout items
            container.masonry('layout');

            // re-layout when all images are loaded
            imagesLoaded(container, function() {
                container.masonry('layout');
            });
        });
    }

    function appendItem(article) {
        var existing = $('#article_' + article._id);
        var renderedElement = $(templates.article.item(article));

        if (existing && existing.length > 0) {
            container.masonry('remove', existing);
            existing.replaceWith(renderedElement);
            container.masonry('prepended', renderedElement);
            container.masonry('layout');
        } else {
            container.prepend(renderedElement);
            container.masonry('prepended', renderedElement);
        }

        // re-layout when all images are loaded
        imagesLoaded(container, function() {
            container.masonry('layout');
        });

        alertify.success('\'' + article.title + '\'' + ' - was updated in your storage');
    }

    function addUrl() {
        // get input value
        var inputField = $('#add-field');
        var inputValue = inputField.val();

        // send add event if input is present
        if (inputValue !== '') {
            api.article.create({
                url: inputValue
            }, function(err, body) {
                console.log('body: ' + body);
            });
        }

        // reset input field
        inputField.val('');
    }

    function handleSockets() {
        // handle socket.io connection
        socket.on('connect', function() {
            console.log('connected to socket.io');
        });

        // initialize procedure to ensure that connection is established
        socket.on('init', function(data) {
            console.log('socket.io initialized..');
            socket.emit('init', 'response: ' + data);
        });

        // update the article list when the update event is emitted
        socket.on('update', function(data) {
            if (data.action == 'add') {
                appendItem(data.article);
            }

            if (data.action == 'remove') {
                var element = $('#article_' + data.article._id)
                if (element) deleteItem(element);
            }
        });

        socket.on('disconnect', function() {
            console.log('socket disconnected');
        });
    }

    function handleEvents() {
        // bind onclick event to add button
        $('#add-button').click(function() {
            addUrl();
        });

        // process input when pressing enter in add field
        $("#add-field").keyup(function(e) {
            if (e.keyCode == 13) addUrl();
            e.preventDefault();
        });
    }

    // init all the things
    bindToEvents();
    handleSockets();
    handleEvents();
    updateList();
};
