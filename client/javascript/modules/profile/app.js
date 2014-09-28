exports = module.exports = function(templates, api) {
    var bindToEvent = require('../common/bind-to-event');

    // bind event handlers to the button panel
    bindToEvent({
        element: '#button-panel',
        eventType: 'click',
        elementType: '.btn',
        templates: templates,
        handlers: {
            update: function(target, parent, templates) {
                api.profile.get(function(err, user) {
                    if (err) return console.log(err);

                    var renderedData = templates.profile.modal.edit({
                        user: user
                    });
                    $('#action-modal').empty().append(renderedData).modal();
                });
            },
            delete: function(target, parent, templates) {
                alertify.prompt('Are you sure you want to delete your account? Type \'12345678\' to confirm', function(e, str) {
                    if (e && (str === '12345678')) window.location = '/auth/local/unlink';
                }, '');
            }
        }
    });

    // bind event handlers to the action modal / update form
    bindToEvent({
        element: '#action-modal',
        eventType: 'click',
        elementType: '.btn',
        templates: templates,
        handlers: {
            update: function(target, parent, templates) {
                target.empty().append(templates.common.loader());

                var body = $('form', parent).serializeObject();

                api.profile.update(body, function(err, user) {
                    if (err) {
                        alertify.error(err);
                        target.empty().append('Update Profile');
                        return;
                    }

                    parent.modal('hide');
                    alertify.success('Profile updated!');
                    console.log(user);
                });
            }
        }
    });

};
