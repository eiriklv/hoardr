// Bookmarklet remote script template (not in use for the application)

(function(e, a, g, h, f, c, b, d) {
    function getMetaProperty($, wantedProperty) {
        var meta = $('meta');
        var keys = Object.keys(meta);

        var metaProperty;

        keys.forEach(function (key) {
            if (meta[key].attributes && meta[key].attributes.property && meta[key].attributes.property.value === wantedProperty) {
                metaProperty = meta[key].content;
            }
        });

        return metaProperty || '';
    }

    function savePage($, L) {
        $.ajax({
            type: 'POST',
            url: 'secure_domain/api/article',
            data: {
                id: 'userId',
                accessToken: 'accessToken',
                url: document.URL,
                title: prompt('Enter the custom title you want to use for this post (optional)', getMetaProperty($, 'og:title')),
                description: prompt('Enter the custom description you want to use for this post (optional)', getMetaProperty($, 'og:description')),
                isPublic: confirm('Do you want this post to be in your public feed?')
            },
            success: function(response) {
                console.log(response);
                alert('Hoardr.in: page successfully saved!');
            },
            error: function(xhr, text, err) {
                console.log(err);
                alert('could not save page - error: ' + err);
            }
        });
    }

    function getWantedNode(a) {
        var nodes = a.documentElement.childNodes;
        var wantedNode;
        for (var i = 0; i < nodes.length; i++) {
            if (nodes[i].nodeType == 1) {
                wantedNode = nodes[i];
                break;
            }
        }
        return wantedNode;
    }

    function loadjQuery(e, a, g, h, f, c, b, d) {
        if (!(f = e.jQuery) || g > f.fn.jquery || true) {
            c = a.createElement('script');
            c.type = 'application/javascript';
            c.src = '//ajax.googleapis.com/ajax/libs/jquery/' + g + '/jquery.min.js';
            c.onload = c.onreadystatechange = function() {
                if (!b && (!(d = this.readyState) || d == 'loaded' || d == 'complete')) {
                    savePage((f = e.jQuery).noConflict(1), b = 1);
                    f(c).remove();
                }
            };

            getWantedNode(a).appendChild(c);
        }
    }

    loadjQuery(e, a, g, h, f, c, b, d);
})(window, document, '1.11.0');
