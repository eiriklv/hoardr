var PKT_D = "getpocket.com";
var PKT_STATUS = "3";
try {
    if (ISRIL_TEST) {}
} catch (e) {
    ISRIL_TEST = false
}
var PKT_BM_OVERLAY = function(e) {
    this.inited = false;
    this.saveTagsCallback = e.saveTagsCallback
};
PKT_BM_OVERLAY.prototype = {
    create: function() {
        var e = document.getElementById("PKT_BM_STYLE");
        if (e) e.parentNode.removeChild(e);
        var t = document.getElementById("PKT_BM_OVERLAY");
        if (t) t.parentNode.removeChild(t);
        var n = window.innerWidth / screen.availWidth;
        if (n < 1) n = 1;
        var r = window.navigator.userAgent;
        this.isMobile = r.match(/iPad/i) || r.match(/iPhone/i);
        this.isFirefox = r.match(/firefox/i) != null;
        var i = (this.isMobile ? 60 : 80) * n;
        var s = (this.isMobile ? 18 : 20) * n;
        var o = this.isMobile ? i * .95 : i;
        var u = this.isMobile ? "normal" : "bold";
        var a = 6 * n;
        var f = 17 * n;
        var l = 80 * n;
        var c = 30 * n;
        var h = 30 * n;
        var p = 1 * n;
        if (p < 1) p = 1;
        var d = 19 * n;
        var v = 25 * n;
        var m = 15 * n;
        this.shadowHeight = 20;
        var g = "           #PKT_BM_OVERLAY         {               visibility:hidden;              position:fixed;             top:0px;                left:0px;               width:100%;             height:" + i + "px;             -webkit-box-shadow:0px 0px " + this.shadowHeight + "px rgba(0,0,0,0.4);             -moz-box-shadow:0px 0px " + this.shadowHeight + "px rgba(0,0,0,0.4);                -o-box-shadow:0px 0px " + this.shadowHeight + "px rgba(0,0,0,0.4);              box-shadow:0px 0px " + this.shadowHeight + "px rgba(0,0,0,0.4);             z-index:2147483647;             background: rgb(239,239,239);               background: -moz-linear-gradient(top, rgba(239,239,239,0.98) 0%, rgba(253,253,253,0.98) 100%);              background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,rgba(239,239,239,0.98)), color-stop(100%,rgba(253,253,253,0.98)));                background: -webkit-linear-gradient(top, rgba(239,239,239,0.98) 0%,rgba(253,253,253,0.98) 100%);                background: -o-linear-gradient(top, rgba(239,239,239,0.98) 0%,rgba(253,253,253,0.98) 100%);             background: -ms-linear-gradient(top, rgba(239,239,239,0.98) 0%,rgba(253,253,253,0.98) 100%);                background: linear-gradient(top, rgba(239,239,239,0.98) 0%,rgba(253,253,253,0.98) 100%);                filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#efefef', endColorstr='#fdfdfd',GradientType=0 );                border-bottom:1px solid white;              font-size:" + s + "px !important;               font-family:HelveticaNeue,Helvetica,Arial !important;               line-height:" + o + "px !important;             text-align: left;               color: #4b4b4b !important;              -webkit-transform:translate3d(0px,0px,0px);         }           #PKT_BM_OVERLAY { visibility: hidden; }         #PKT_BM_OVERLAY.PKT_VISIBLE { visibility: visible; }            #PKT_BM_OVERLAY.PKT_VISIBLE .PKT_BM_BTN.PKT_VISIBLE { visibility: visible; }                        #PKT_BM_RAINBOWDASH         {               width: 100%;                height: 6%;         }                       #PKT_BM_RAINBOWDASH div         {               float: left;                width: 25%;             height: 100%;           }                       #PKT_BM_OVERLAY_LOGO            {               display: block;             width: 200px;               height: 100%;               text-indent: -789em;                float: left;                background: url(https://" + PKT_D + "/i/v3/pocket_logo.png) left center no-repeat;          }           .PKT_mobile #PKT_BM_OVERLAY_LOGO            {               display: none;          }           .PKT_desktop #PKT_BM_OVERLAY_LABEL          {               position: absolute;             top: 0px;               left: 0px;              text-align:center;              width: 100%;                padding: 0px;               font-weight: " + u + ";         }                       #PKT_BM_OVERLAY_WRAPPER         {               padding-left:7%;                padding-right: 7%;              height: 100%;           }                       .PKT_BM_BTN         {               float: right;               margin-top: 22px;               margin-left: 20px;              width: " + l + "px;             height: " + c + "px;                line-height: " + h + "px;               visibility:hidden;              border:" + p + "px solid #a4a4a4;               text-shadow: 0px " + p + "px 0px rgba(255, 255, 255, 0.7);              -webkit-box-shadow: 0px " + p + "px 0px white;              -moz-box-shadow: 0px " + p + "px 0px white;             -o-box-shadow: 0px " + p + "px 0px white;               box-shadow: 0px " + p + "px 0px white;              -webkit-border-radius: " + a + "px;             -moz-border-radius: " + a + "px;                -o-border-radius: " + a + "px;              border-radius: " + a + "px;             text-align:center !important;               font-size:0.7em !important;             color:black !important;             font-weight:bold !important;                background: rgb(250,213,64);                background: -moz-linear-gradient(top, rgba(250,213,64,1) 0%, rgba(251,182,74,1) 100%);              background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,rgba(250,213,64,1)), color-stop(100%,rgba(251,182,74,1)));                background: -webkit-linear-gradient(top, rgba(250,213,64,1) 0%,rgba(251,182,74,1) 100%);                background: -o-linear-gradient(top, rgba(250,213,64,1) 0%,rgba(251,182,74,1) 100%);             background: -ms-linear-gradient(top, rgba(250,213,64,1) 0%,rgba(251,182,74,1) 100%);                background: linear-gradient(top, rgba(250,213,64,1) 0%,rgba(251,182,74,1) 100%);                filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#fad540', endColorstr='#fbb64a',GradientType=0 );                text-decoration: none !important;               -moz-transform:translate3d(0px,0px,0px);                -o-transform:translate3d(0px,0px,0px);              -webkit-transform:translate3d(0px,0px,0px);             -ms-transform:translate3d(0px,0px,0px);             transform:translate3d(0px,0px,0px);         }           .PKT_BM_BTN:hover           {               background: rgb(251,182,74);                background: -moz-linear-gradient(top, rgba(251,182,74,1) 0%, rgba(250,213,64,1) 100%);              background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,rgba(251,182,74,1)), color-stop(100%,rgba(250,213,64,1)));                background: -webkit-linear-gradient(top, rgba(251,182,74,1) 0%,rgba(250,213,64,1) 100%);                background: -o-linear-gradient(top, rgba(251,182,74,1) 0%,rgba(250,213,64,1) 100%);             background: -ms-linear-gradient(top, rgba(251,182,74,1) 0%,rgba(250,213,64,1) 100%);                background: linear-gradient(top, rgba(251,182,74,1) 0%,rgba(250,213,64,1) 100%);                filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#fbb64a', endColorstr='#fad540',GradientType=0 );            }           .PKT_BM_BTN.gray            {               background: #f9f9f9;                background: -moz-linear-gradient(top, #f9f9f9 0%, #ebecec 100%);                background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#f9f9f9), color-stop(100%,#ebecec));              background: -webkit-linear-gradient(top, #f9f9f9 0%,#ebecec 100%);              background: -o-linear-gradient(top, #f9f9f9 0%,#ebecec 100%);               background: -ms-linear-gradient(top, #f9f9f9 0%,#ebecec 100%);              background: linear-gradient(top, #f9f9f9 0%,#ebecec 100%);              filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#f9f9f9', endColorstr='#ebecec',GradientType=0 );            }           .PKT_BM_BTN.gray:hover          {               background: #ebecec;                background: -moz-linear-gradient(top, #ebecec 0%, #f9f9f9 100%);                background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#ebecec), color-stop(100%,#f9f9f9));              background: -webkit-linear-gradient(top, #ebecec 0%,#f9f9f9 100%);              background: -o-linear-gradient(top, #ebecec 0%,#f9f9f9 100%);               background: -ms-linear-gradient(top, #ebecec 0%,#f9f9f9 100%);              background: linear-gradient(top, #ebecec 0%,#f9f9f9 100%);              filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ebecec', endColorstr='#f9f9f9',GradientType=0 );            }           .PKT_BM_BTN.green           {               background: #81dbd6;                background: -moz-linear-gradient(top, #81dbd6 0%, #74c5c1 100%);                background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#81dbd6), color-stop(100%,#74c5c1));              background: -webkit-linear-gradient(top, #81dbd6 0%,#74c5c1 100%);              background: -o-linear-gradient(top, #81dbd6 0%,#74c5c1 100%);               background: -ms-linear-gradient(top, #81dbd6 0%,#74c5c1 100%);              background: linear-gradient(top, #81dbd6 0%,#74c5c1 100%);              filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#81dbd6', endColorstr='#74c5c1',GradientType=0 );            }           .PKT_BM_BTN.green:hover         {               background: #74c5c1;                background: -moz-linear-gradient(bottom, #81dbd6 0%, #74c5c1 100%);             background: -webkit-gradient(linear, left bottom, left bottom, color-stop(0%,#81dbd6), color-stop(100%,#74c5c1));               background: -webkit-linear-gradient(bottom, #81dbd6 0%,#74c5c1 100%);               background: -o-linear-gradient(bottom, #81dbd6 0%,#74c5c1 100%);                background: -ms-linear-gradient(bottom, #81dbd6 0%,#74c5c1 100%);               background: linear-gradient(bottom, #81dbd6 0%,#74c5c1 100%);               filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#74c5c1', endColorstr='#81dbd6',GradientType=0 );            }           .PKT_BM_BTN div         {               display: block;         }           #PKT_FORM           {               height: 100%;               display: block !important;              visibility: visible !important;             margin: 0px !important;             padding: 0px !important;            }           .PKT_mobile #PKT_FORM{              position: absolute;             top: 0px;               right: 0.5em;               width: 86%;         }           .PKT_mobile #PKT_BM_BTN{                margin-top: " + f + "px !important;         }           .PKT_mobile #PKT_BM_VL_BTN{             display: none;          }           #PKT_BM_OVERLAY_INPUT           {               display: none;          }           .PKT_SHOW_INPUT #PKT_BM_OVERLAY_INPUT           {               position: absolute !important;              display: block !important;              top: " + d + "px !important;                left: 0% !important;                width: 57%;             height: " + v + "px !important;             border: " + p + "px solid #c9c9c9 !important;               margin: 0px !important;             padding: 0px 0px 0px 5px !important;                font-size: " + m + "px !important;              color: #666666 !important;              background: white !important;                               /* overrides */             font-family: Arial !important;              -webkit-box-shadow: none !important;                -moz-box-shadow: none !important;               box-shadow: none !important;                -webkit-border-radius: 0px !important;              -moz-border-radius: 0px !important;             border-radius: 0px !important;          }           .PKT_desktop #PKT_BM_OVERLAY_INPUT          {               float: right;               margin-top: 24px !important;                position: static !important;                width: 300px;           }           .PKT_SHOW_INPUT #PKT_BM_OVERLAY_LABEL           {               display: none;          }           ";
        if (this.browserPrefix() == "O") {
            g += "                    .PKT_desktop #PKT_BM_OVERLAY_LABEL                  {                       z-index: 18000;                 }                   #PKT_BM_OVERLAY_WRAPPER                 {                       position: relative;                 }                   #PKT_FORM                   {                       position: absolute;                     right: 7%;                      z-index: 20000;                 }               "
        }
        var y = '           <div id="PKT_BM_OVERLAY">               <div id="PKT_BM_RAINBOWDASH">                   <div style="background-color: #83EDB8;"></div>                  <div style="background-color: #50BCB6;"></div>                  <div style="background-color: #EE4256;"></div>                  <div style="background-color: #FCB64B;"></div>              </div>              <div id="PKT_BM_OVERLAY_WRAPPER" class="PKT_' + (this.isMobile ? "mobile" : "desktop") + '">                    <a id="PKT_BM_OVERLAY_LOGO" href="https://' + PKT_D + '" target="_blank">Pocket</a>                 <div id="PKT_BM_OVERLAY_LABEL"></div>                   <form id="PKT_FORM">                        <a id="PKT_BM_VL_BTN" class="PKT_BM_BTN" target="_blank" href=""></a>                       <a id="PKT_BM_BTN" class="PKT_BM_BTN" target="_blank" href=""></a>                      <input type="text" id="PKT_BM_OVERLAY_INPUT" /><input type="submit" value="Submit" name="submit" style="position:absolute !important;left:-789em !important;"/>                 </form>             </div>          </div>          ';
        var b = document.createElement("div");
        b.innerHTML = '<style id="PKT_BM_STYLE">' + g + "</style>" + y;
        document.body.appendChild(b);
        try {
            if (document.location.host.match("twitter.")) document.getElementsByClassName("topbar")[0].style.position = "absolute"
        } catch (w) {}
        var E = this;
        if (!this.isMobile && window.addEventListener) {
            this.windowResizeHandler = {
                handleEvent: function(e) {
                    E.updateVisibleElements()
                }
            };
            window.addEventListener("resize", this.windowResizeHandler)
        }
        this.updateVisibleElements()
    },
    updateVisibleElements: function() {
        if (this.isMobile) return;
        var e = window.innerWidth;
        var t = this.isTagsEditorOpen();
        var n = document.getElementById("PKT_BM_OVERLAY_LOGO");
        n.style.display = e < 850 && t ? "none" : "block";
        if (t) {
            var r = document.getElementById("PKT_BM_OVERLAY_INPUT");
            var i = 650;
            var s = 850;
            if (e <= i) {
                var o = document.getElementById("PKT_BM_BTN");
                var u = o.offsetWidth + parseInt(document.defaultView.getComputedStyle(o, null).marginLeft);
                var a = e * .85 - u - 5;
                if (this.isFirefox) {
                    a = a - 20
                }
                r.style.width = a + "px"
            } else if (e > i && e <= s) {
                var o = document.getElementById("PKT_BM_BTN");
                var u = o.offsetWidth + parseInt(document.defaultView.getComputedStyle(o, null).marginLeft);
                var f = document.getElementById("PKT_BM_VL_BTN");
                var l = f.offsetWidth + parseInt(document.defaultView.getComputedStyle(f, null).marginLeft);
                var a = e * .8 - u - l - 5;
                r.style.width = ""
            } else {
                r.style.width = ""
            }
        }
        var f = document.getElementById("PKT_BM_VL_BTN");
        f.style.display = e < i && t ? "none" : "block"
    },
    displayMessage: function(e) {
        this.toggleClass(document.getElementById("PKT_BM_OVERLAY_WRAPPER"), "PKT_SHOW_INPUT", false);
        document.getElementById("PKT_BM_OVERLAY_LABEL").innerHTML = e;
        if (!this.showed) {
            var t = this;
            setTimeout(function() {
                t.show()
            }, 30)
        }
    },
    showButton: function(e, t, n, r) {
        var i = document.getElementById("PKT_BM_BTN");
        this.toggleClass(i, "PKT_VISIBLE", !!e);
        if (e) {
            i.innerHTML = e;
            if (!t) i.removeAttribute("href");
            else i.href = t; if (n) {
                i.onclick = function() {
                    n()
                }
            }
            this.toggleClass(i, "gray", r)
        }
    },
    showViewListButton: function(e, t, n) {
        if (this.isMobile) return;
        var r = document.getElementById("PKT_BM_VL_BTN");
        this.toggleClass(r, "PKT_VISIBLE", !!e);
        var i = document.getElementById("PKT_BM_BTN");
        if (e) {
            r.innerHTML = e;
            i.style.right = "13%";
            if (!t) r.removeAttribute("href");
            else r.href = t; if (n) {
                r.onclick = function() {
                    n()
                }
            }
            this.toggleClass(r, "green", true)
        } else {
            if (i.style.removeProperty) {
                i.style.removeProperty("right")
            } else {
                i.style.removeAttribute("right")
            }
        }
    },
    getReadyToHide: function() {
        var e = this;
        clearTimeout(this.hideTO);
        this.hideTO = setTimeout(function() {
            e.hide()
        }, 3e3)
    },
    cancelPendingHide: function() {
        clearTimeout(this.hideTO);
        this.hideTO = undefined
    },
    show: function() {
        this.hidesOnClick = false;
        if (this.showed) this.cancelPendingHide();
        if (this.isMobile) {
            var e = window.pageYOffset || document.documentElement.scrollTop;
            var t = window.pageXOffset || document.documentElement.scrollLeft;
            window.scrollTo(t, e)
        }
        var n = document.getElementById("PKT_BM_OVERLAY");
        n.style[this.browserPrefix() + "Transform"] = "translate3d(0px," + (0 - n.offsetHeight - this.shadowHeight) + "px,0px)";
        this.toggleClass(n, "PKT_VISIBLE", true);
        var r = this;
        n.onclick = function() {
            if (r.hidesOnClick) r.hide()
        };
        setTimeout(function() {
            var e = r.browserPrefix();
            n.style[e + "Transition"] = "-" + e + "-transform 0.3s ease-out";
            n.style[e + "Transform"] = "translate3d(0px,0px,0px)"
        }, 100);
        this.showed = true
    },
    hide: function() {
        var e = document.getElementById("PKT_BM_OVERLAY");
        e.style[this.browserPrefix() + "Transform"] = "translate3d(0px," + (0 - e.offsetHeight - this.shadowHeight) + "px,0px)";
        var t = this;
        setTimeout(function() {
            t.toggleClass(e, "PKT_VISIBLE", false);
            e.parentNode.removeChild(e);
            t.bm.th = function() {};
            t.bm = function() {};
            t = function() {}
        }, 300);
        if (this.windowResizeHandler && window.removeEventListener) {
            window.removeEventListener("resize", this.windowResizeHandler)
        }
    },
    wasSaved: function() {
        var e = this;
        this.displayMessage("Page Saved!");
        this.showButton("Add Tags", null, function() {
            e.openTagsEditor()
        }, true);
        this.showViewListButton("View List", "http://" + PKT_D + "/a/?src=bookmarklet");
        this.getReadyToHide();
        this.updateVisibleElements()
    },
    isTagsEditorOpen: function() {
        return this.isShowingTagsEditor === true
    },
    openTagsEditor: function() {
        this.isShowingTagsEditor = true;
        this.cancelPendingHide();
        var e = this;
        var t = this.isMobile ? "Add tags (tag1, tag2)" : "Add Tags (separated by commas)";
        this.showTextField(t);
        var n = function() {
            if (e.textField.value.length > 0) e.showButton("Save", null, function() {
                e.saveTags()
            });
            else e.showButton("Close", null, function() {
                e.hide()
            }, true)
        };
        n();
        var r = document.getElementById("PKT_FORM");
        r.onsubmit = function() {
            e.saveTags();
            return false
        };
        this.textField.onkeyup = n;
        this.updateVisibleElements()
    },
    saveTags: function() {
        this.isShowingTagsEditor = true;
        var e = [];
        var t = {};
        var n;
        var r = this.trim(document.getElementById("PKT_BM_OVERLAY_INPUT").value);
        if (r && r.length) {
            var i = r.split(",");
            for (var s = 0; s < i.length; s++) {
                n = this.trim(i[s]).toLowerCase();
                if (n.length && !t[n]) {
                    e.push(n);
                    t[n] = n
                }
            }
        }
        if (!e || !e.length) {
            alert("Please enter at least one tag");
            return
        }
        this.updateVisibleElements();
        this.saveTagsCallback(e)
    },
    showTextField: function(e) {
        this.toggleClass(document.getElementById("PKT_BM_OVERLAY_WRAPPER"), "PKT_SHOW_INPUT", true);
        this.textField = document.getElementById("PKT_BM_OVERLAY_INPUT");
        this.textField.placeholder = e;
        this.updateVisibleElements()
    },
    toggleClass: function(e, t, n) {
        if (!e) return;
        if (n && !e.className.match(t)) e.className += " " + t;
        else if (!n && e.className.match(t)) e.className = e.className.replace(t, "")
    },
    browserPrefix: function() {
        if (this._prefix) return this._prefix;
        var e = document.createElement("div");
        var t = ["Webkit", "Moz", "MS", "O"];
        for (var n in t) {
            if (e.style[t[n] + "Transition"] !== undefined) {
                this._prefix = t[n];
                return this._prefix
            }
        }
    },
    trim: function(e) {
        var e = e.replace(/^\s\s*/, ""),
            t = /\s/,
            n = e.length;
        while (t.test(e.charAt(--n)));
        return e.slice(0, n + 1)
    }
};
var PKT_BM = function() {};
PKT_BM.prototype = {
    init: function() {
        if (this.inited) return;
        var e = this;
        this.overlay = new PKT_BM_OVERLAY({
            saveTagsCallback: function(t) {
                e.saveTags(t)
            }
        });
        this.overlay.bm = this;
        this.inited = true
    },
    save: function() {
        var e = this;
        this.overlay.create();
        if (ISRIL_TEST) {
            this.overlay.displayMessage("Test successful!");
            this.overlay.getReadyToHide()
        } else {
            if (PKT_STATUS == 1) this.overlay.wasSaved();
            else if (PKT_STATUS == 2) this.promptLogin();
            else if (PKT_STATUS >= 3) this.promptError(PKT_STATUS)
        }
    },
    promptLogin: function() {
        this.overlay.hidesOnClick = true;
        this.overlay.displayMessage("Please login.");
        this.overlay.showButton("Login", this.overlay.isMobile ? "http://" + PKT_D + "/bl/login/?url=http://" + PKT_D + "/bloggedin" : "http://" + PKT_D + "/l")
    },
    promptError: function(e) {
        if (e == 3) {
            this.overlay.displayMessage("Error saving")
        } else if (e == 4) {
            this.overlay.displayMessage("Could not save")
        } else {
            this.overlay.displayMessage("Error saving")
        }
        this.overlay.showButton("Get Help", "http://help.getpocket.com/customer/portal/articles/480486-bookmarklet-error---wrong-account");
        this.overlay.showViewListButton("View List", "http://" + PKT_D + "/a/?r=bookmarklet")
    },
    saveTags: function(e) {
        var t = this;
        this.overlay.displayMessage("Saving Tags&#8230;");
        this.overlay.showButton(false);
        this.overlay.showViewListButton(false);
        this.sendRequest({
            u: document.location.href,
            tags: e.toJSON ? e.toJSON() : JSON.stringify(e),
            th: this.th
        }, function() {
            t.overlay.displayMessage("Tags Saved!");
            t.overlay.showViewListButton("View List", "http://" + PKT_D + "/a/?r=bookmarklet");
            t.overlay.getReadyToHide()
        });
        this.th = function() {}
    },
    sendRequest: function(e, t) {
        var n = function() {
            if (s.checkImage() && t) t()
        };
        var r = "";
        if (e) {
            for (var i in e) {
                r += "&" + i + "=" + encodeURIComponent(e[i])
            }
        }
        this.img = new Image;
        this.img.onload = n;
        this.img.src = "https://" + PKT_D + "/v2/r.gif?v=4" + "&rand=" + Math.random() + r;
        document.body.appendChild(this.img);
        var s = this;
        this.imageInt = setInterval(n, 250)
    },
    checkImage: function() {
        if (this.img && this.img.complete) {
            clearInterval(this.imageInt);
            this.complete = true;
            var e = this.img.width;
            var t = e == 1;
            if (!t) {
                if (e == 2) this.promptLogin();
                else if (e == 3) this.promptError()
            }
            this.img.style.display = "none";
            return t
        }
    }
};
setTimeout(function() {
    var e = new PKT_BM;
    e.th = "";
    e.init();
    e.save()
}, 1)