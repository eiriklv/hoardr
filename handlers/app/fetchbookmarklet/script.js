// Bookmarklet remote script template (not in use for the application)

(function (e, a, g, h, f, c, b, d) {
    function savePage ($, L) {
        $.ajax({
            type: 'POST',
            url: 'domain/api/article',
            data: {
                id: 'userId',
                accessToken: 'accessToken',
                url: document.URL
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

    function getWantedNode (a) {
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

    function loadjQuery (e, a, g, h, f, c, b, d) {
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