this.CFHFrame = function() { var s = function(t) { return unescape(encodeURIComponent(t)) },
        c = function(t, e, i) { var a = "",
                h = 0; for (bytePos = 0; bytePos < e; h++) ch = t.charCodeAt(h), bytePos += ch < 128 ? 1 : s(t[h]).length; for (end = h + i - 1, n = h; h <= end; n++) { if (ch = t.charCodeAt(n), end -= ch < 128 ? 1 : s(t[n]).length, null == t[n]) return a;
                a += t[n] } return a },
        t = function(t) { var e = $('meta[property="og:url"]').attr("content"),
                i = ($('meta[property="og:image"]').attr("content"), $('meta[property="og:title"]').attr("content")),
                a = $('meta[property="og:description"]').attr("content"); switch (t) {
                case "fb":
                    window.open("http://www.facebook.com/share.php?u=" + e); break;
                case "line":
                    window.open("http://line.naver.jp/R/msg/text/?" + e); break;
                case "mail":
                    window.open("mailto:?Subject=" + i + "&amp;body=" + a + "%0A" + e) } },
        e = function() { var h = $(window).width();
            $(window).height();
            0 < $(".cfh-news-list .cfh-article-shortcut").length && $(".cfh-news-list .cfh-article-shortcut").each(function() { var t, e = $(this).attr("data-content"),
                    i = !0,
                    a = 1; if (40 < $(this).prev().height() && (a = 2), 70 < $(this).prev().height() && (a = 3), 0 <= h && h < 320) t = 10;
                else if (h < 375 && 320 <= h) switch (a) {
                    case 2:
                        t = 50; break;
                    case 3:
                        t = 40; break;
                    default:
                        t = 80 } else if (h < 414 && 375 <= h) switch (a) {
                    case 2:
                    case 3:
                        t = 60; break;
                    default:
                        t = 120 } else if (h < 768 && 414 <= h) switch (a) {
                    case 2:
                        t = 80; break;
                    case 3:
                        t = 60; break;
                    default:
                        t = 140 } else if (h < 991 && 768 <= h) switch (a) {
                    case 2:
                        t = 150; break;
                    case 3:
                        t = 100; break;
                    default:
                        t = 200 } else if (h < 1024 && 991 <= h) switch (a) {
                    case 2:
                        t = 150; break;
                    case 3:
                        t = 100; break;
                    default:
                        t = 200 } else if (h < 1280 && 1024 <= h) switch (a) {
                        case 2:
                            t = 200; break;
                        case 3:
                            t = 150; break;
                        default:
                            t = 400 } else if (1280 <= h) switch (a) {
                        case 2:
                            t = 200; break;
                        case 3:
                            t = 150; break;
                        default:
                            t = 400 }
                    t >= s(e).length && (i = !1), e = c(e, 0, t), i && (e += "..."), $(this).text(e) }), 0 < $(".one-half-grid .cfh-article-shortcut").length && $(".one-half-grid .cfh-article-shortcut").each(function() { var t, e = $(this).attr("data-content"),
                    i = !0,
                    a = 1;
                40 < $(this).prev().height() && (a = 2), 0 <= h && h < 320 ? t = 200 : h < 375 && 320 <= h ? t = 100 : h < 414 && 375 <= h ? t = 160 : h < 768 && 414 <= h ? t = 140 : h < 991 && 768 <= h ? t = 1 == a ? 200 : 150 : h < 1024 && 991 <= h ? t = 50 : h < 1280 && 1024 <= h ? t = 50 : 1280 <= h && (t = 100), t >= s(e).length && (i = !1), e = c(e, 0, t), i && (e += "..."), $(this).text(e) }), 0 < $(".full-grid .cfh-article-shortcut").length && $(".full-grid .cfh-article-shortcut").each(function() { var t, e = $(this).attr("data-content"),
                    i = !0;
                0 <= h && h < 320 ? t = 200 : h < 375 && 320 <= h ? t = 100 : h < 414 && 375 <= h ? t = 160 : h < 768 && 414 <= h ? t = 140 : h < 991 && 768 <= h ? t = 200 : h < 1024 && 991 <= h ? t = 50 : h < 1280 && 1024 <= h ? t = 300 : 1280 <= h && (t = 300), t >= s(e).length && (i = !1), e = c(e, 0, t), i && (e += "..."), $(this).text(e) }) },
        i = function() { $("*[role='bg-img-holder']").each(function() { $this = $(this), $this.find($("*[class='img-fluid']")).attr("role", "bg-img-source"); var t = $this.find($("*[role='bg-img-source']")),
                        e = $this.find($("*[role='bg-img-display']")),
                        i = "url(" + t.attr("src") + ")";
                    e.parent().css("background-image", i) }),
                function() { var e = $(".cfh-article-wrap .cfh-slick-single"); if (0 < e.length) { e.on("beforeChange", function(t, e, i, a) { var h = $(this).height(),
                                n = Math.round($(".slick-slide", $(this)).eq(a).height());
                            h < n && $(this).height(n) }), e.on("afterChange", function(t, e, i) { $(this).height(); var a = Math.round($(".slick-slide", $(this)).eq(i).height());
                            $(this).height(a) }), e.on("init", function() { var t = Math.round($(".slick-slide", $(this)).eq(0).height());
                            $(this).height(t) }); var t = !0;
                        e.hasClass("cfh-slick-disable-drag") && (t = !1), t = !1, e.slick({ dots: !0, arrows: !0, fade: !1, infinite: !1, draggable: t, touchMove: t, swipe: t }); var i = $(".cfh-slick-single .img-fluid").eq(0);
                        0 < i.length && $(i).load(function() { var t = Math.round($(".slick-slide", e).eq(0).height());
                            e.height(t) }) } }(), $('[data-id="js-share"]').on("click", function() { $(this).closest(".shareBox").toggleClass("on"), $(this).find(".icon").toggleClass("open"), $(this).next(".shareBox__list").toggleClass("on") }), $(".shareBox__button.fb").on("click", function() { t("fb") }), $(".shareBox__button.line").on("click", function() { t("line") }), $(".shareBox__button.mail").on("click", function() { t("mail") }),
                function() { if (0 == $(".cfh-article-shortcut").length) return;
                    $(".cfh-article-shortcut").css("height", "auto"), $(".cfh-article-shortcut").each(function() { $(this).attr("data-content", $(this).text()) }) }(), 0 < $(".cfh-slick-tab").length && $.each($(".cfh-slick-tab"), function() { var h = $(this).find(".cfh-slick-nav > li "),
                        t = $(this).attr("data-target"),
                        i = $(".cfh-slick-for[role='" + t + "']");
                    h.click(function(t) { if (t.preventDefault(), $(this).hasClass("active")) return !1;
                        h.removeClass("active"); var e = $(this).index();
                        i.slick("slickGoTo", e), $(this).addClass("active") }), i.on("beforeChange", function(t, e, i, a) { var h = $(this).height(),
                            n = Math.round($(".slick-slide", $(this)).eq(a).height()); return h < n && $(this).height(n), !1 }), i.on("afterChange", function(t, e, i) { h.removeClass("active").unbind("hover").eq(i).addClass("active"), $(this).height(); var a = Math.round($(".slick-slide", $(this)).eq(i).height()); return $(this).height(a), !1 }), i.slick({ slidesToShow: 1, slidesToScroll: 1, arrows: !1, infinite: !1, draggable: !1, touchMove: !1 }), i.height(Math.round($(".slick-current", i).height())) }), e(), $(window).bind("resize", function() { e() }) };
    $(function() { i() }) };
var cfhFrame = new CFHFrame;