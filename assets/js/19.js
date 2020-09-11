! function(e, n, t) {
    function i(e, n) { return typeof e === n }

    function o() { var e, n, t, o, a, r, d; for (var c in l)
            if (l.hasOwnProperty(c)) { if (e = [], n = l[c], n.name && (e.push(n.name.toLowerCase()), n.options && n.options.aliases && n.options.aliases.length))
                    for (t = 0; t < n.options.aliases.length; t++) e.push(n.options.aliases[t].toLowerCase()); for (o = i(n.fn, "function") ? n.fn() : n.fn, a = 0; a < e.length; a++) r = e[a], d = r.split("."), 1 === d.length ? A[d[0]] = o : (!A[d[0]] || A[d[0]] instanceof Boolean || (A[d[0]] = new Boolean(A[d[0]])), A[d[0]][d[1]] = o), s.push((o ? "" : "no-") + d.join("-")) } }

    function a(e) { var n = u.className,
            t = A._config.classPrefix || ""; if (p && (n = n.baseVal), A._config.enableJSClass) { var i = new RegExp("(^|\\s)" + t + "no-js(\\s|$)");
            n = n.replace(i, "$1" + t + "js$2") }
        A._config.enableClasses && (n += " " + t + e.join(" " + t), p ? u.className.baseVal = n : u.className = n) }

    function r(e, n) { if ("object" == typeof e)
            for (var t in e) c(e, t) && r(t, e[t]);
        else { e = e.toLowerCase(); var i = e.split("."),
                o = A[i[0]]; if (2 == i.length && (o = o[i[1]]), void 0 !== o) return A;
            n = "function" == typeof n ? n() : n, 1 == i.length ? A[i[0]] = n : (!A[i[0]] || A[i[0]] instanceof Boolean || (A[i[0]] = new Boolean(A[i[0]])), A[i[0]][i[1]] = n), a([(n && 0 != n ? "" : "no-") + i.join("-")]), A._trigger(e, n) } return A } var s = [],
        l = [],
        d = { _version: "3.6.0", _config: { classPrefix: "", enableClasses: !0, enableJSClass: !0, usePrefixes: !0 }, _q: [], on: function(e, n) { var t = this;
                setTimeout(function() { n(t[e]) }, 0) }, addTest: function(e, n, t) { l.push({ name: e, fn: n, options: t }) }, addAsyncTest: function(e) { l.push({ name: null, fn: e }) } },
        A = function() {};
    A.prototype = d, A = new A; var c, u = n.documentElement,
        p = "svg" === u.nodeName.toLowerCase();! function() { var e = {}.hasOwnProperty;
        c = i(e, "undefined") || i(e.call, "undefined") ? function(e, n) { return n in e && i(e.constructor.prototype[n], "undefined") } : function(n, t) { return e.call(n, t) } }(), d._l = {}, d.on = function(e, n) { this._l[e] || (this._l[e] = []), this._l[e].push(n), A.hasOwnProperty(e) && setTimeout(function() { A._trigger(e, A[e]) }, 0) }, d._trigger = function(e, n) { if (this._l[e]) { var t = this._l[e];
            setTimeout(function() { var e; for (e = 0; e < t.length; e++)(0, t[e])(n) }, 0), delete this._l[e] } }, A._q.push(function() { d.addTest = r }), A.addAsyncTest(function() { var e = new Image;
        e.onerror = function() { r("webpalpha", !1, { aliases: ["webp-alpha"] }) }, e.onload = function() { r("webpalpha", 1 == e.width, { aliases: ["webp-alpha"] }) }, e.src = "data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA==" }), A.addAsyncTest(function() { var e = new Image;
        e.onerror = function() { r("webpanimation", !1, { aliases: ["webp-animation"] }) }, e.onload = function() { r("webpanimation", 1 == e.width, { aliases: ["webp-animation"] }) }, e.src = "data:image/webp;base64,UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA" }), A.addAsyncTest(function() { var e = new Image;
        e.onerror = function() { r("webplossless", !1, { aliases: ["webp-lossless"] }) }, e.onload = function() { r("webplossless", 1 == e.width, { aliases: ["webp-lossless"] }) }, e.src = "data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA=" }), A.addAsyncTest(function() {
        function e(e, n, t) {
            function i(n) { var i = !(!n || "load" !== n.type) && 1 == o.width,
                    a = "webp" === e;
                r(e, a && i ? new Boolean(i) : i), t && t(n) } var o = new Image;
            o.onerror = i, o.onload = i, o.src = n } var n = [{ uri: "data:image/webp;base64,UklGRiQAAABXRUJQVlA4IBgAAAAwAQCdASoBAAEAAwA0JaQAA3AA/vuUAAA=", name: "webp" }, { uri: "data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA==", name: "webp.alpha" }, { uri: "data:image/webp;base64,UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA", name: "webp.animation" }, { uri: "data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA=", name: "webp.lossless" }],
            t = n.shift();
        e(t.name, t.uri, function(t) { if (t && "load" === t.type)
                for (var i = 0; i < n.length; i++) e(n[i].name, n[i].uri) }) }), o(), a(s), delete d.addTest, delete d.addAsyncTest; for (var h = 0; h < A._q.length; h++) A._q[h]();
    e.Modernizr = A }(window, document), document.documentElement.className += "ontouchstart" in document.documentElement ? " touch" : " no-touch", this.Robo = function() { var e, n = function(e) { return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") },
        t = function(e, n, t) { var i = new Date;
            i.setTime(i.getTime() + 24 * t * 60 * 60 * 1e3); var o = "expires=" + i.toUTCString();
            document.cookie = e + "=" + n + ";" + o + ";path=/" },
        i = function(e) { for (var n = e + "=", t = decodeURIComponent(document.cookie), i = t.split(";"), o = 0; o < i.length; o++) { for (var a = i[o];
                    " " == a.charAt(0);) a = a.substring(1); if (0 == a.indexOf(n)) return a.substring(n.length, a.length) } return "" },
        o = function(e) { var n = {},
                t = decodeURIComponent(window.location.href.slice(window.location.href.indexOf("?") + 1)),
                i = t.split("&"); return i.forEach(function(e, t) { var i = e.split("=", 2);
                n[i[0]] = i[1] }), e && e in n ? n[e] : n },
        a = function() { var e = window.navigator.userAgent,
                n = e.indexOf("MSIE "); if (n > 0) return parseInt(e.substring(n + 5, e.indexOf(".", n)), 10); var t = e.indexOf("Trident/"); if (t > 0) { var i = e.indexOf("rv:"); return parseInt(e.substring(i + 3, e.indexOf(".", i)), 10) } var o = e.indexOf("Edge/"); return o > 0 && parseInt(e.substring(o + 5, e.indexOf(".", o)), 10) },
        r = { init: function() { this.browser = this.searchString(this.dataBrowser) || "An unknown browser", this.version = this.searchVersion(navigator.userAgent) || this.searchVersion(navigator.appVersion) || "an unknown version", this.OS = this.searchString(this.dataOS) || "an unknown OS" }, searchString: function(e) { for (var n = 0; n < e.length; n++) { var t = e[n].string,
                        i = e[n].prop; if (this.versionSearchString = e[n].versionSearch || e[n].identity, t) { if (-1 != t.indexOf(e[n].subString)) return e[n].identity } else if (i) return e[n].identity } }, searchVersion: function(e) { var n = e.indexOf(this.versionSearchString); if (-1 != n) return parseFloat(e.substring(n + this.versionSearchString.length + 1)) }, dataBrowser: [{ string: navigator.userAgent, subString: "Chrome", identity: "Chrome" }, { string: navigator.userAgent, subString: "OmniWeb", versionSearch: "OmniWeb/", identity: "OmniWeb" }, { string: navigator.vendor, subString: "Apple", identity: "Safari", versionSearch: "Version" }, { prop: window.opera, identity: "Opera", versionSearch: "Version" }, { string: navigator.vendor, subString: "iCab", identity: "iCab" }, { string: navigator.vendor, subString: "KDE", identity: "Konqueror" }, { string: navigator.userAgent, subString: "Firefox", identity: "Firefox" }, { string: navigator.vendor, subString: "Camino", identity: "Camino" }, { string: navigator.userAgent, subString: "Netscape", identity: "Netscape" }, { string: navigator.userAgent, subString: "MSIE", identity: "Explorer", versionSearch: "MSIE" }, { string: navigator.userAgent, subString: "Gecko", identity: "Mozilla", versionSearch: "rv" }, { string: navigator.userAgent, subString: "Mozilla", identity: "Netscape", versionSearch: "Mozilla" }], dataOS: [{ string: navigator.platform, subString: "Win", identity: "Windows" }, { string: navigator.platform, subString: "Mac", identity: "Mac" }, { string: navigator.userAgent, subString: "iPhone", identity: "iPhone/iPod" }, { string: navigator.userAgent, subString: "iPad", identity: "Mac" }, { string: navigator.platform, subString: "Linux", identity: "Linux" }] },
        s = { Android: function() { return navigator.userAgent.match(/Android/i) }, BlackBerry: function() { return navigator.userAgent.match(/BlackBerry/i) }, iOS: function() { return navigator.userAgent.match(/iPhone|iPad|iPod/i) }, Opera: function() { return navigator.userAgent.match(/Opera Mini/i) }, Windows: function() { return navigator.userAgent.match(/IEMobile/i) }, any: function() { return s.Android() || s.BlackBerry() || s.iOS() || s.Opera() || s.Windows() } },
        l = function() { var e = $("*[role='btn-going-top']");
            e.on("click", function() { $("html, body").animate({ scrollTop: 0 }, "slow") }), $(window).scroll(function(e) { var n = $(document).scrollTop();
                0 == $("#fullpage").length && (n > $(window).height() / 2 ? $("*[role='btn-going-top']").addClass("active") : $("*[role='btn-going-top']").removeClass("active")) }), $(".modal").on("show.bs.modal", function() { console.log("do something when the modal is shown"), $("body").css("overflow", "hidden"), $("body").hasClass("iosBugFixCaret") && (document.body.style.height = "100%", document.body.style.width = "100%", document.body.style.position = "fixed") }), $(".modal").on("hide.bs.modal", function() { $("body").css("overflow", "visible"), $("body").hasClass("iosBugFixCaret") && (document.body.style.height = "auto", document.body.style.width = "auto", document.body.style.position = "relative") }), $("#videoModal").on("shown.bs.modal", function(e) { var n = $(this).attr("data-video-src");
                console.log("in modal video_src", n), $("iframe", $(this)).attr("src", n + "?rel=0&amp;showinfo=0&amp;modestbranding=1&amp;autoplay=1") }), $("#videoModal").on("hide.bs.modal", function(e) { $(this).attr("data-video-src", ""), $("iframe", $(this)).attr("src", "") }), $(".video-play").on("click", function(e) { var n = $(this).attr("data-video-src");
                $("#videoModal").attr("data-video-src", n) }), $("[role='video-play']").on("click", function(e) { var n = $(this).attr("data-video-src");
                $("#videoModal").attr("data-video-src", n) }), $('input[data-comma="true"]').on("keyup", function() { var e = $(this),
                    t = e.val().replace(/,/g, "");
                e.val(n(t)) }) },
        d = function() { $("a.btn").append('<div class="c-ripple js-ripple"><span class="c-ripple__circle"></span></div>'); var e = $(".js-ripple");
            e.on("mouseenter.ui.ripple", function(e) { var n = $(this),
                    t = n.parent().offset(),
                    i = n.find(".c-ripple__circle"),
                    o = e.pageX - t.left,
                    a = e.pageY - t.top;
                i.css({ top: a + "px", left: o + "px" }), n.addClass("is-active") }), e.on("animationend webkitAnimationEnd oanimationend MSAnimationEnd", function(e) { $(this).removeClass("is-active") }), $(".custom-control-input").bind("click", function(e) { var n = $(this).parent().find(".custom-control-input-ripple-container");
                n.append("<span class='ripple active'></span>"), setTimeout(function() { n.empty() }, 800) }) },
        A = function() { r.init(), 1 == o("browserhint") && $(".browser-hint-wrap").show(); var e = a();!1 === e ? ($("html").addClass(r.browser), $("html").addClass(r.dataOS[0].string)) : e >= 11 ? ($("html").addClass("ie edge edge" + e), $("html").addClass("no-clippath")) : ($(".browser-hint-wrap").show(), $("html").addClass("ie ie" + e), $("html").addClass("no-clippath")), $(".browser-hint-close").bind("click", function(e) { var n = $(this).attr("data-target");
                $("#" + n).fadeOut() }), s.any() && $("html").addClass("is-mobile") },
        c = function() { $("body");
            $(".navbar-toggler").bind("click", function() { "true" == $(this).attr("aria-expanded") ? ($("#hamburger").removeClass("open"), $("#navbarSupportedContent").removeClass("show"), $(this).attr("aria-expanded", "false"), $("#fakewrap").remove()) : ($("#hamburger").addClass("open"), $("#navbarSupportedContent").addClass("show"), $("#navbarSupportedContent").css("overflow-y", "auto"), $(this).attr("aria-expanded", "true"), $("fakewrap").remove(), $("<div id='fakewrap' style='top:0px;bottom:0px;left:0px;right:0px;width:100vw;height:100vh;background-color:#000;opacity:.5;position: fixed;z-index: 500;'></div>").insertBefore($(".navbar"))) }), $("#navbarSupportedContent").on("hide.bs.collapse", function(e) { return console.log("hide.bs.collapse"), e.preventDefault(), !1 }), $("#navbarSupportedContent").on("hidden.bs.collapse", function(e) { return console.log("hidden.bs.collapse"), e.preventDefault(), !1 }), $("#navbarSupportedContent").on("show.bs.collapse", function(e) { return $(window).scrollTop(), console.log("show.bs.collapse"), e.preventDefault(), !1 }), $("#navbarSupportedContent").on("shown.bs.collapse", function(e) { return console.log("shown.bs.collapse"), e.preventDefault(), !1 }) },
        u = function() { return !1 },
        p = function() { var e = $("*[role='btn-going-top']");
            e.on("click", function() { $("html, body").animate({ scrollTop: 0 }, "slow") }) },
        h = function() { var e = $("#navbarSupportedContent li.dropdown");
            e.hover(function() { $(this).find(".dropdown-menu").addClass("show") }, function() { $(this).find(".dropdown-menu").removeClass("show") }) },
        g = function(n) { if (null == n) n = 0; var t = parseInt($(".alert").length) + n;
            t < 0 && (t = 0, clearTimeout(e)); var i = $('*[role="system-alert-group"]'),
                o = i.outerHeight(),
                a = 1e3;
            0 == t && (o = 0, a = 500), 0 == o && i.animate({ top: -i.outerHeight() }, a, function() { f() }), 0 == t ? ($(".header").animate({ top: 0 }, a, function() {}), $(".mb_header").animate({ top: 0 }, a, function() {})) : ($(".header").animate({ top: i.outerHeight() }, a, function() {}), $(".mb_header").animate({ top: i.outerHeight() }, a, function() {})), o = 0 == t ? $("main#landing").length > 0 ? 0 : $(".header").height() : $("main#landing").length > 0 ? i.outerHeight() : i.outerHeight() + +$(".header").height(), 0 == t ? $("#navbarSupportedContent").animate({ top: $(".navbar").height() }, a, function() {}) : $("#navbarSupportedContent").animate({ top: i.outerHeight() + $(".navbar").height() }, a, function() {}) },
        f = function() { $('*[role="system-alert-group"]').remove() },
        v = function() { var n, t = $(".alert").length,
                i = $('*[role="system-alert-group"]'),
                o = $(".alert.active").index(),
                a = parseInt(i.attr("data-speed")); if (o < 0) n = 0, $(".alert").eq(n).removeClass("d-none").addClass("active"), $(".alert").eq(n).css("top", 0), i.css("height", $(".alert").eq(n).outerHeight()), i.css("top", -i.outerHeight());
            else { var r = $(".alert.active");
                $(".alert-group").css("height", r.outerHeight()), r.animate({ top: r.outerHeight() }, 1e3, function() { r.removeClass("active") }), n = o + 1, n == t && (n = 0), $(".alert").eq(n).removeClass("d-none").addClass("active"), $(".alert").eq(n).css("top", -$(".alert").eq(n).outerHeight()), $(".alert").eq(n).animate({ top: 0 }, 1e3);
                i = $('*[role="system-alert-group"]');
                i.css("height", $(".alert").eq(n).outerHeight()) }
            g(), $(".alert").length > 1 && (e = setTimeout(v, a)) },
        m = function() { $('*[role="system-alert-group"]');
            $(".alert").each(function(e) { var n = $(this).attr("data-id");
                i("robo-msg-" + n);
                $(this).css("position", "absolute"), $(this).addClass("d-none") }), $(".alert-close").bind("click", function(e) { var n = $(this).parents(".alert"),
                    i = n.attr("data-id");
                t("robo-msg-" + i, 1, 30), g(-10) }), $(window).resize(function() { g() }), v() },
        b = function() { $("html").addClass("no-clippath"), $(window).width(), $(window).height(), $("html").addClass("w-" + $(window).width()), $("html").addClass("h-" + $(window).height()), A(), p(), l(), d(), c(), u(), m(), $(window).width() > 1024 && h(); var e = navigator.userAgent,
                n = /iPad|iPhone|iPod/.test(e),
                t = /OS 11_0|OS 11_1|OS 11_2/.test(e);
            n && t && $("body").addClass("iosBugFixCaret") };
    $(function() { b() }) };
var robo = new Robo;