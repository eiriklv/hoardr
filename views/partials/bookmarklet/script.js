// This is the template for script.html (not in use for the application)

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

    function loadRemoteScript (e, a, g, h, f, c, b, d) {
        c = a.createElement('script');
        c.type = 'application/javascript';
        c.src = 'http://localhost:3000/javascript/test.js';
        c.onload = c.onreadystatechange = function() {
            if (!b && (!(d = this.readyState) || d == 'loaded' || d == 'complete')) {
                f(c).remove();
            }
        };
        c.onerror = function () {
            alert('Hoardr.in: Sorry, the bookmarklet does not work on this page because of security policies!\n We will now take you to your Hoardr.in account.');
            var currentLocation = window.location;
            window.location = 'http://localhost:3000/feed?url=' + encodeURIComponent(currentLocation);
        };

        getWantedNode(a).appendChild(c);
    }

    loadRemoteScript(e, a, g, h, f, c, b, d);

})(window, document);
