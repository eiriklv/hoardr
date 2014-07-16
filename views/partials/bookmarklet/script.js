(function (e, a, g, h, f, c, b, d) {
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
        if (!(f = e.jQuery) || g > f.fn.jquery || h(f)) {
            c = a.createElement('script');
            c.type = 'application/javascript';
            c.src = '//ajax.googleapis.com/ajax/libs/jquery/' + g + '/jquery.min.js';
            c.onload = c.onreadystatechange = function() {
                if (!b && (!(d = this.readyState) || d == 'loaded' || d == 'complete')) {
                    loadRemoteScript((f = e.jQuery).noConflict(1), b = 1);
                    f(c).remove();
                }
            };

            getWantedNode(a).appendChild(c);
        }
    }

    function loadRemoteScript (e, a, g, h, f, c, b, d) {
        c = a.createElement('script');
        c.type = 'application/javascript';
        c.src = 'http://localhost:3000/javascript/test.js';
        c.onload = c.onreadystatechange = function() {
            if (!b && (!(d = this.readyState) || d == 'loaded' || d == 'complete')) {
                alert('remote script loaded!');
            }
        };

        getWantedNode(a).appendChild(c);
    }

    loadjQuery(e, a, g, h, f, c, b, d);

})(window, document, '1.11.0');