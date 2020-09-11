// For license information, see `/welcome/Content/js/Adobe/launch-5af4009d782a.js`.
window._satellite = window._satellite || {}, window._satellite.container = {
    buildInfo: { minified: !0, buildDate: "2020-07-23T13:13:30Z", environment: "production", turbineBuildDate: "2020-06-23T16:22:36Z", turbineVersion: "26.0.2" },
    dataElements: { "00. Site Effectiveness : Device Type": { storageDuration: "pageview", modulePath: "core/src/lib/dataElements/javascriptVariable.js", settings: { path: "digitalData.page.deviceType" } }, "01. GBI Purchase : Deduction Method": { modulePath: "core/src/lib/dataElements/javascriptVariable.js", settings: { path: "digitalData.click.robo_txnType" } }, "01. GBI Subscription : Question 02": { cleanText: !0, modulePath: "core/src/lib/dataElements/javascriptVariable.js", settings: { path: "digitalData.click.robo_quiz2" } }, "01. GBI Purchase : Modify ": { modulePath: "core/src/lib/dataElements/javascriptVariable.js", settings: { path: "digitalData.click.robo_adjustment" } }, "01. GBI Subscription : Currency": { modulePath: "core/src/lib/dataElements/javascriptVariable.js", settings: { path: "digitalData.click.robo_currency" } }, "01. GBI Purchase : Adjust Fluctuations": { modulePath: "core/src/lib/dataElements/javascriptVariable.js", settings: { path: "digitalData.click.robo_adjViolation" } }, "00. Site Effectiveness : Page Name": { storageDuration: "pageview", modulePath: "core/src/lib/dataElements/pageInfo.js", settings: { attribute: "title" } }, "00. Site Effectiveness : Page URL": { storageDuration: "pageview", modulePath: "core/src/lib/dataElements/pageInfo.js", settings: { attribute: "url" } }, "01. GBI Subscription : Question 03": { cleanText: !0, modulePath: "core/src/lib/dataElements/javascriptVariable.js", settings: { path: "digitalData.click.robo_quizFinish" } }, "00. Site Effectiveness : Referring URL": { storageDuration: "pageview", modulePath: "core/src/lib/dataElements/pageInfo.js", settings: { attribute: "referrer" } }, "02. Investment Portfolio Overview : Redemption Type": { modulePath: "core/src/lib/dataElements/javascriptVariable.js", settings: { path: "digitalData.click.redeemType" } }, "01. GBI Purchase : Input Information Page : Investment Group Review": { modulePath: "core/src/lib/dataElements/javascriptVariable.js", settings: { path: "digitalData.click.robo_strategy" } }, "02. Investment Portfolio Overview : Investment Group Type": { modulePath: "core/src/lib/dataElements/javascriptVariable.js", settings: { path: "digitalData.click.investType" } }, "00. Site Effectiveness : ECID": { storageDuration: "pageview", modulePath: "adobe-mcid/src/lib/dataElements/ecid.js", settings: {} }, "02. Investment Portfolio Overview : Investment Theme": { modulePath: "core/src/lib/dataElements/javascriptVariable.js", settings: { path: "digitalData.click.ThemeName" } } },
    extensions: {
        core: { displayName: "Core", modules: { "core/src/lib/dataElements/javascriptVariable.js": { name: "javascript-variable", displayName: "JavaScript Variable", script: function(e, t, n) { "use strict"; var r = n("../helpers/getObjectProperty.js");
                        e.exports = function(e) { return r(window, e.path) } } }, "core/src/lib/dataElements/pageInfo.js": { name: "page-info", displayName: "Page Info", script: function(e, t, n) { "use strict"; var r = n("@adobe/reactor-document");
                        e.exports = function(e) { switch (e.attribute) {
                                case "url":
                                    return r.location.href;
                                case "hostname":
                                    return r.location.hostname;
                                case "pathname":
                                    return r.location.pathname;
                                case "protocol":
                                    return r.location.protocol;
                                case "referrer":
                                    return r.referrer;
                                case "title":
                                    return r.title } } } }, "core/src/lib/events/directCall.js": { name: "direct-call", displayName: "Direct Call", script: function(e, t, n, a) { "use strict"; var o = {};
                        window._satellite = window._satellite || {}, window._satellite.track = function(e, t) { e = e.trim(); var n = o[e]; if (n) { var r = { identifier: e, detail: t };
                                n.forEach(function(e) { e(r) }); var i = ['Rules using the direct call event type with identifier "' + e + '" have been triggered' + (t ? " with additional detail:" : ".")];
                                t && i.push(t), a.logger.log.apply(a.logger, i) } else a.logger.log('"' + e + '" does not match any direct call identifiers.') }, e.exports = function(e, t) { var n = o[e.identifier];
                            n || (n = o[e.identifier] = []), n.push(t) } } }, "core/src/lib/events/click.js": { name: "click", displayName: "Click", script: function(e, t, n) { "use strict"; var a = n("@adobe/reactor-window"),
                            o = n("./helpers/createBubbly")(),
                            s = new(n("./helpers/weakMap")),
                            c = function(e) { for (; e;) { var t = e.tagName; if (t && "a" === t.toLowerCase()) { var n = e.getAttribute("href"),
                                            r = e.getAttribute("target"); return n && (!r || "_self" === r || "_top" === r && a.top === a || r === a.name) ? e : void 0 }
                                    e = e.parentNode } };
                        document.addEventListener("click", o.evaluateEvent, !0), e.exports = function(r, i) { o.addListener(r, function(e) { var t = e.nativeEvent; if (!t.s_fe) { if (r.anchorDelay && !s.has(t)) { var n = c(t.target);
                                        n && (t.preventDefault(), setTimeout(function() { a.location = n.href }, r.anchorDelay)), s.set(t, !0) }
                                    i(e) } }) }, e.exports.__reset = o.__reset } }, "core/src/lib/actions/customCode.js": { name: "custom-code", displayName: "Custom Code", script: function(e, t, n, r) { "use strict"; var i, a, o, s = n("@adobe/reactor-document"),
                            c = n("./helpers/decorateCode"),
                            l = n("./helpers/loadCodeSequentially"),
                            u = n("../../../node_modules/postscribe/dist/postscribe"),
                            d = r.getExtensionSettings(),
                            f = (i = function(e) { u(s.body, e, { beforeWriteToken: function(e) { return d.cspNonce && "script" === e.tagName && (e.attrs.nonce = d.cspNonce), e }, error: function(e) { r.logger.error(e.msg) } }) }, a = [], o = function() { if (s.body)
                                    for (; a.length;) i(a.shift());
                                else setTimeout(o, 20) }, function(e) { a.push(e), o() }),
                            p = function() { if (s.currentScript) return s.currentScript.async; for (var e = s.querySelectorAll("script"), t = 0; t < e.length; t++) { var n = e[t]; if (/(launch|satelliteLib)-[^\/]+.js(\?.*)?$/.test(n.src)) return n.async } return !0 }();
                        e.exports = function(e, t) { var n = { settings: e, event: t },
                                r = n.settings.source; if (r) return n.settings.isExternal ? l(r).then(function(e) { e && f(c(n, e)) }) : void(p || "loading" !== s.readyState ? f(c(n, r)) : s.write ? s.write(c(n, r)) : f(c(n, r))) } } }, "core/src/lib/events/domReady.js": { name: "dom-ready", displayName: "DOM Ready", script: function(e, t, n) { "use strict"; var r = n("./helpers/pageLifecycleEvents");
                        e.exports = function(e, t) { r.registerDomReadyTrigger(t) } } }, "core/src/lib/helpers/getObjectProperty.js": { script: function(e) { "use strict";
                        e.exports = function(e, t) { for (var n = t.split("."), r = e, i = 0, a = n.length; i < a; i++) { if (null == r) return undefined;
                                r = r[n[i]] } return r } } }, "core/src/lib/events/helpers/createBubbly.js": { script: function(e, t, n) { "use strict"; var r = n("./weakMap"),
                            p = n("./matchesProperties"),
                            g = n("./matchesSelector");
                        e.exports = function() { var d = [],
                                f = new r,
                                e = { addListener: function(e, t) { d.push({ settings: e, callback: t }) }, evaluateEvent: function(t, e) { if (d.length && !f.has(t)) { for (var n = t.target, r = !1; n;) { for (var i = !1, a = !1, o = 0; o < d.length; o++) { var s = d[o],
                                                        c = s.settings.elementSelector,
                                                        l = s.settings.elementProperties; if ((!1 !== s.settings.bubbleFireIfChildFired || !r) && (n === t.target || !1 !== s.settings.bubbleFireIfParent) && (n === t.target || c || l && Object.keys(l).length) && (!c || g(n, c)) && (!l || p(n, l))) { var u = {};
                                                        e ? Object.keys(t).forEach(function(e) { u[e] = t[e] }) : u.nativeEvent = t, u.element = n, u.target = t.target, !1 !== s.callback(u) && (a = !0, s.settings.bubbleStop && (i = !0)) } } if (i) break;
                                                a && (r = !0), n = n.parentNode }
                                            f.set(t, !0) } }, __reset: function() { d = [] } }; return e } } }, "core/src/lib/events/helpers/weakMap.js": { script: function(e, t, n) { "use strict"; var r = n("@adobe/reactor-window").WeakMap; if (void 0 === r) { var i = Object.defineProperty,
                                a = Date.now() % 1e9;
                            (r = function() { this.name = "__st" + (1e9 * Math.random() >>> 0) + a++ + "__" }).prototype = { set: function(e, t) { var n = e[this.name]; return n && n[0] === e ? n[1] = t : i(e, this.name, { value: [e, t], writable: !0 }), this }, get: function(e) { var t; return (t = e[this.name]) && t[0] === e ? t[1] : undefined }, "delete": function(e) { var t = e[this.name]; return !(!t || t[0] !== e || (t[0] = t[1] = undefined, 0)) }, has: function(e) { var t = e[this.name]; return !!t && t[0] === e } } }
                        e.exports = r } }, "core/src/lib/events/helpers/matchesProperties.js": { script: function(e, t, n) { "use strict"; var i = n("./../../helpers/textMatch"),
                            a = function(e, t) { return "@text" === t || "innerText" === t ? e.textContent || e.innerText : t in e ? e[t] : e.getAttribute ? e.getAttribute(t) : void 0 };
                        e.exports = function(r, e) { return !e || e.every(function(e) { var t = a(r, e.name),
                                    n = e.valueIsRegex ? new RegExp(e.value, "i") : e.value; return i(t, n) }) } } }, "core/src/lib/events/helpers/matchesSelector.js": { script: function(e, t, n, i) { "use strict";
                        e.exports = function(e, t) { var n = e.matches || e.msMatchesSelector; if (n) try { return n.call(e, t) } catch (r) { return i.logger.warn("Matching element failed. " + t + " is not a valid selector."), !1 }
                            return !1 } } }, "core/src/lib/helpers/textMatch.js": { script: function(e) { "use strict";
                        e.exports = function(e, t) { if (null == t) throw new Error("Illegal Argument: Pattern is not present"); return null != e && ("string" == typeof t ? e === t : t instanceof RegExp && t.test(e)) } } }, "core/src/lib/actions/helpers/decorateCode.js": { script: function(e, t, n, r) { "use strict"; var i = 0,
                            a = function(e) { return e.settings.isExternal },
                            o = function(e, t) { return "<script>\n" + t + "\n</script>" },
                            s = function(t, e) { var n = "__runScript" + ++i; return _satellite[n] = function(e) { e.call(t.event.element, t.event, t.event.target), delete _satellite[n] }, '<script>_satellite["' + n + '"](function(event, target) {\n' + e + "\n});</script>" },
                            c = { javascript: function(e, t) { return e.settings.global ? o(e, t) : s(e, t) }, html: function(e, t) { return a(e) ? r.replaceTokens(t, e.event) : t } };
                        e.exports = function(e, t) { return c[e.settings.language](e, t) } } }, "core/src/lib/actions/helpers/loadCodeSequentially.js": { script: function(e, t, n) { "use strict"; var r = n("@adobe/reactor-promise"),
                            i = n("./getSourceByUrl"),
                            a = r.resolve();
                        e.exports = function(t) { var e = new r(function(n) { var e = i(t);
                                r.all([e, a]).then(function(e) { var t = e[0];
                                    n(t) }) }); return a = e } } }, "core/node_modules/postscribe/dist/postscribe.js": { script: function(n, r) {! function i(e, t) { "object" == typeof r && "object" == typeof n ? n.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof r ? r.postscribe = t() : e.postscribe = t() }(this, function() { return function(n) {
                                function r(e) { if (i[e]) return i[e].exports; var t = i[e] = { exports: {}, id: e, loaded: !1 }; return n[e].call(t.exports, t, t.exports, r), t.loaded = !0, t.exports } var i = {}; return r.m = n, r.c = i, r.p = "", r(0) }([function(e, t, n) { "use strict";

                                function r(e) { return e && e.__esModule ? e : { "default": e } } var i = r(n(1));
                                e.exports = i["default"] }, function(e, t, n) { "use strict";

                                function r(e) { if (e && e.__esModule) return e; var t = {}; if (null != e)
                                        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]); return t["default"] = e, t }

                                function i(e) { return e && e.__esModule ? e : { "default": e } }

                                function l() {}

                                function u() { var e = c.shift(); if (e) { var t = o.last(e);
                                        t.afterDequeue(), e.stream = a.apply(undefined, e), t.afterStreamStart() } }

                                function a(e, t, r) {
                                    function i(e) { e = r.beforeWrite(e), m.write(e), r.afterWrite(e) }(m = new p["default"](e, r)).id = g++, m.name = r.name || m.id, d.streams[m.name] = m; var n = e.ownerDocument,
                                        a = { close: n.close, open: n.open, write: n.write, writeln: n.writeln };
                                    f(n, { close: l, open: l, write: function s() { for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n]; return i(t.join("")) }, writeln: function c() { for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n]; return i(t.join("") + "\n") } }); var o = m.win.onerror || l; return m.win.onerror = function(e, t, n) { r.error({ msg: e + " - " + t + ": " + n }), o.apply(m.win, [e, t, n]) }, m.write(t, function() { f(n, a), m.win.onerror = o, r.done(), m = null, u() }), m }

                                function d(e, t, n) { if (o.isFunction(n)) n = { done: n };
                                    else if ("clear" === n) return c = [], m = null, void(g = 0);
                                    n = o.defaults(n, s); var r = [e = /^#/.test(e) ? window.document.getElementById(e.substr(1)) : e.jquery ? e[0] : e, t, n]; return e.postscribe = { cancel: function i() { r.stream ? r.stream.abort() : r[1] = l } }, n.beforeEnqueue(r), c.push(r), m || u(), e.postscribe }
                                t.__esModule = !0; var f = Object.assign || function(e) { for (var t = 1; t < arguments.length; t++) { var n = arguments[t]; for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]) } return e };
                                t["default"] = d; var p = i(n(2)),
                                    o = r(n(4)),
                                    s = { afterAsync: l, afterDequeue: l, afterStreamStart: l, afterWrite: l, autoFix: !0, beforeEnqueue: l, beforeWriteToken: function h(e) { return e }, beforeWrite: function b(e) { return e }, done: l, error: function v(e) { throw new Error(e.msg) }, releaseAsync: !1 },
                                    g = 0,
                                    c = [],
                                    m = null;
                                f(d, { streams: {}, queue: c, WriteStream: p["default"] }) }, function(e, t, n) { "use strict";

                                function r(e) { if (e && e.__esModule) return e; var t = {}; if (null != e)
                                        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]); return t["default"] = e, t }

                                function i(e) { return e && e.__esModule ? e : { "default": e } }

                                function y(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }

                                function I(e, t) { var n = P + t,
                                        r = e.getAttribute(n); return k.existy(r) ? String(r) : r }

                                function _(e, t, n) { var r = 2 < arguments.length && n !== undefined ? arguments[2] : null,
                                        i = P + t;
                                    k.existy(r) && "" !== r ? e.setAttribute(i, r) : e.removeAttribute(i) }
                                t.__esModule = !0; var S = Object.assign || function(e) { for (var t = 1; t < arguments.length; t++) { var n = arguments[t]; for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]) } return e },
                                    C = i(n(3)),
                                    k = r(n(4)),
                                    O = !1,
                                    P = "data-ps-",
                                    A = "ps-style",
                                    D = "ps-script",
                                    a = function() {
                                        function r(e, t) { var n = 1 < arguments.length && t !== undefined ? arguments[1] : {};
                                            y(this, r), this.root = e, this.options = n, this.doc = e.ownerDocument, this.win = this.doc.defaultView || this.doc.parentWindow, this.parser = new C["default"]("", { autoFix: n.autoFix }), this.actuals = [e], this.proxyHistory = "", this.proxyRoot = this.doc.createElement(e.nodeName), this.scriptStack = [], this.writeQueue = [], _(this.proxyRoot, "proxyof", 0) } return r.prototype.write = function n() { var e; for ((e = this.writeQueue).push.apply(e, arguments); !this.deferredRemote && this.writeQueue.length;) { var t = this.writeQueue.shift();
                                                k.isFunction(t) ? this._callFunction(t) : this._writeImpl(t) } }, r.prototype._callFunction = function i(e) { var t = { type: "function", value: e.name || e.toString() };
                                            this._onScriptStart(t), e.call(this.win, this.doc), this._onScriptDone(t) }, r.prototype._writeImpl = function a(e) { this.parser.append(e); for (var t = void 0, n = void 0, r = void 0, i = [];
                                                (t = this.parser.readToken()) && !(n = k.isScript(t)) && !(r = k.isStyle(t));)(t = this.options.beforeWriteToken(t)) && i.push(t);
                                            0 < i.length && this._writeStaticTokens(i), n && this._handleScriptToken(t), r && this._handleStyleToken(t) }, r.prototype._writeStaticTokens = function o(e) { var t = this._buildChunk(e); return t.actual ? (t.html = this.proxyHistory + t.actual, this.proxyHistory += t.proxy, this.proxyRoot.innerHTML = t.html, O && (t.proxyInnerHTML = this.proxyRoot.innerHTML), this._walkChunk(), O && (t.actualInnerHTML = this.root.innerHTML), t) : null }, r.prototype._buildChunk = function u(e) { for (var t = this.actuals.length, n = [], r = [], i = [], a = e.length, o = 0; o < a; o++) { var s = e[o],
                                                    c = s.toString(); if (n.push(c), s.attrs) { if (!/^noscript$/i.test(s.tagName)) { var l = t++;
                                                        r.push(c.replace(/(\/?>)/, " " + P + "id=" + l + " $1")), s.attrs.id !== D && s.attrs.id !== A && i.push("atomicTag" === s.type ? "" : "<" + s.tagName + " " + P + "proxyof=" + l + (s.unary ? " />" : ">")) } } else r.push(c), i.push("endTag" === s.type ? c : "") } return { tokens: e, raw: n.join(""), actual: r.join(""), proxy: i.join("") } }, r.prototype._walkChunk = function s() { for (var e = void 0, t = [this.proxyRoot]; k.existy(e = t.shift());) { var n = 1 === e.nodeType; if (!n || !I(e, "proxyof")) { n && _(this.actuals[I(e, "id")] = e, "id"); var r = e.parentNode && I(e.parentNode, "proxyof");
                                                    r && this.actuals[r].appendChild(e) }
                                                t.unshift.apply(t, k.toArray(e.childNodes)) } }, r.prototype._handleScriptToken = function c(e) { var t = this,
                                                n = this.parser.clear();
                                            n && this.writeQueue.unshift(n), e.src = e.attrs.src || e.attrs.SRC, (e = this.options.beforeWriteToken(e)) && (e.src && this.scriptStack.length ? this.deferredRemote = e : this._onScriptStart(e), this._writeScriptToken(e, function() { t._onScriptDone(e) })) }, r.prototype._handleStyleToken = function l(e) { var t = this.parser.clear();
                                            t && this.writeQueue.unshift(t), e.type = e.attrs.type || e.attrs.TYPE || "text/css", (e = this.options.beforeWriteToken(e)) && this._writeStyleToken(e), t && this.write() }, r.prototype._writeStyleToken = function d(e) { var t = this._buildStyle(e);
                                            this._insertCursor(t, A), e.content && (t.styleSheet && !t.sheet ? t.styleSheet.cssText = e.content : t.appendChild(this.doc.createTextNode(e.content))) }, r.prototype._buildStyle = function t(e) { var n = this.doc.createElement(e.tagName); return n.setAttribute("type", e.type), k.eachKey(e.attrs, function(e, t) { n.setAttribute(e, t) }), n }, r.prototype._insertCursor = function f(e, t) { this._writeImpl('<span id="' + t + '"/>'); var n = this.doc.getElementById(t);
                                            n && n.parentNode.replaceChild(e, n) }, r.prototype._onScriptStart = function p(e) { e.outerWrites = this.writeQueue, this.writeQueue = [], this.scriptStack.unshift(e) }, r.prototype._onScriptDone = function g(e) { e === this.scriptStack[0] ? (this.scriptStack.shift(), this.write.apply(this, e.outerWrites), !this.scriptStack.length && this.deferredRemote && (this._onScriptStart(this.deferredRemote), this.deferredRemote = null)) : this.options.error({ msg: "Bad script nesting or script finished twice" }) }, r.prototype._writeScriptToken = function m(e, t) { var n = this._buildScript(e),
                                                r = this._shouldRelease(n),
                                                i = this.options.afterAsync;
                                            e.src && (n.src = e.src, this._scriptLoadHandler(n, r ? i : function() { t(), i() })); try { this._insertCursor(n, D), n.src && !r || t() } catch (a) { this.options.error(a), t() } }, r.prototype._buildScript = function h(e) { var n = this.doc.createElement(e.tagName); return k.eachKey(e.attrs, function(e, t) { n.setAttribute(e, t) }), e.content && (n.text = e.content), n }, r.prototype._scriptLoadHandler = function b(t, n) {
                                            function r() { t = t.onload = t.onreadystatechange = t.onerror = null }

                                            function i() { r(), null != n && n(), n = null }

                                            function a(e) { r(), o(e), null != n && n(), n = null }

                                            function e(e, t) { var n = e["on" + t];
                                                null != n && (e["_on" + t] = n) } var o = this.options.error;
                                            e(t, "load"), e(t, "error"), S(t, { onload: function s() { if (t._onload) try { t._onload.apply(this, Array.prototype.slice.call(arguments, 0)) } catch (e) { a({ msg: "onload handler failed " + e + " @ " + t.src }) }
                                                    i() }, onerror: function c() { if (t._onerror) try { t._onerror.apply(this, Array.prototype.slice.call(arguments, 0)) } catch (e) { return void a({ msg: "onerror handler failed " + e + " @ " + t.src }) }
                                                    a({ msg: "remote script failed " + t.src }) }, onreadystatechange: function l() { /^(loaded|complete)$/.test(t.readyState) && i() } }) }, r.prototype._shouldRelease = function v(e) { return !/^script$/i.test(e.nodeName) || !!(this.options.releaseAsync && e.src && e.hasAttribute("async")) }, r }();
                                t["default"] = a }, function(n) {! function r(e, t) { n.exports = t() }(0, function() { return function(n) {
                                        function r(e) { if (i[e]) return i[e].exports; var t = i[e] = { exports: {}, id: e, loaded: !1 }; return n[e].call(t.exports, t, t.exports, r), t.loaded = !0, t.exports } var i = {}; return r.m = n, r.c = i, r.p = "", r(0) }([function(e, t, n) { "use strict";

                                        function r(e) { return e && e.__esModule ? e : { "default": e } } var i = r(n(1));
                                        e.exports = i["default"] }, function(e, t, n) { "use strict";

                                        function r(e) { return e && e.__esModule ? e : { "default": e } }

                                        function i(e) { if (e && e.__esModule) return e; var t = {}; if (null != e)
                                                for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]); return t["default"] = e, t }

                                        function u(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }
                                        t.__esModule = !0; var d = i(n(2)),
                                            f = i(n(3)),
                                            p = r(n(6)),
                                            a = n(5),
                                            g = { comment: /^<!--/, endTag: /^<\//, atomicTag: /^<\s*(script|style|noscript|iframe|textarea)[\s\/>]/i, startTag: /^</, chars: /^[^<]/ },
                                            o = function() {
                                                function c(e, t) { var n = this,
                                                        r = 0 < arguments.length && e !== undefined ? arguments[0] : "",
                                                        i = 1 < arguments.length && t !== undefined ? arguments[1] : {};
                                                    u(this, c), this.stream = r; var a = !1,
                                                        o = {}; for (var s in d) d.hasOwnProperty(s) && (i.autoFix && (o[s + "Fix"] = !0), a = a || o[s + "Fix"]);
                                                    a ? (this._readToken = (0, p["default"])(this, o, function() { return n._readTokenImpl() }), this._peekToken = (0, p["default"])(this, o, function() { return n._peekTokenImpl() })) : (this._readToken = this._readTokenImpl, this._peekToken = this._peekTokenImpl) } return c.prototype.append = function t(e) { this.stream += e }, c.prototype.prepend = function n(e) { this.stream = e + this.stream }, c.prototype._readTokenImpl = function r() { var e = this._peekTokenImpl(); if (e) return this.stream = this.stream.slice(e.length), e }, c.prototype._peekTokenImpl = function i() { for (var e in g)
                                                        if (g.hasOwnProperty(e) && g[e].test(this.stream)) { var t = f[e](this.stream); if (t) return "startTag" === t.type && /script|style/i.test(t.tagName) ? null : (t.text = this.stream.substr(0, t.length), t) } }, c.prototype.peekToken = function e() { return this._peekToken() }, c.prototype.readToken = function a() { return this._readToken() }, c.prototype.readTokens = function o(e) { for (var t = void 0; t = this.readToken();)
                                                        if (e[t.type] && !1 === e[t.type](t)) return }, c.prototype.clear = function s() { var e = this.stream; return this.stream = "", e }, c.prototype.rest = function l() { return this.stream }, c }(); for (var s in (t["default"] = o).tokenToString = function(e) { return e.toString() }, o.escapeAttributes = function(e) { var t = {}; for (var n in e) e.hasOwnProperty(n) && (t[n] = (0, a.escapeQuotes)(e[n], null)); return t }, o.supports = d) d.hasOwnProperty(s) && (o.browserHasFlaw = o.browserHasFlaw || !d[s] && s) }, function(e, t) { "use strict"; var n = !(t.__esModule = !0),
                                            r = !1,
                                            i = window.document.createElement("div"); try { var a = "<P><I></P></I>";
                                            i.innerHTML = a, t.tagSoup = n = i.innerHTML !== a } catch (o) { t.tagSoup = n = !1 } try { i.innerHTML = "<P><i><P></P></i></P>", t.selfClose = r = 2 === i.childNodes.length } catch (o) { t.selfClose = r = !1 }
                                        i = null, t.tagSoup = n, t.selfClose = r }, function(e, t, n) { "use strict";

                                        function r(e) { var t = e.indexOf("-->"); if (0 <= t) return new u.CommentToken(e.substr(4, t - 1), t + 3) }

                                        function i(e) { var t = e.indexOf("<"); return new u.CharsToken(0 <= t ? t : e.length) }

                                        function a(e) { var o, s, c; if (-1 !== e.indexOf(">")) { var t = e.match(d.startTag); if (t) { var n = (o = {}, s = {}, c = t[2], t[2].replace(d.attr, function(e, t, n, r, i, a) { n || r || i || a ? arguments[5] ? (o[arguments[5]] = "", s[arguments[5]] = !0) : o[t] = arguments[2] || arguments[3] || arguments[4] || d.fillAttr.test(t) && t || "" : o[t] = "", c = c.replace(e, "") }), { v: new u.StartTagToken(t[1], t[0].length, o, s, !!t[3], c.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "")) }); if ("object" === (void 0 === n ? "undefined" : l(n))) return n.v } } }

                                        function o(e) { var t = a(e); if (t) { var n = e.slice(t.length); if (n.match(new RegExp("</\\s*" + t.tagName + "\\s*>", "i"))) { var r = n.match(new RegExp("([\\s\\S]*?)</\\s*" + t.tagName + "\\s*>", "i")); if (r) return new u.AtomicTagToken(t.tagName, r[0].length + t.length, t.attrs, t.booleanAttrs, r[1]) } } }

                                        function s(e) { var t = e.match(d.endTag); if (t) return new u.EndTagToken(t[1], t[0].length) }
                                        t.__esModule = !0; var l = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) { return typeof e } : function(e) { return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e };
                                        t.comment = r, t.chars = i, t.startTag = a, t.atomicTag = o, t.endTag = s; var u = n(4),
                                            d = { startTag: /^<([\-A-Za-z0-9_]+)((?:\s+[\w\-]+(?:\s*=?\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)>/, endTag: /^<\/([\-A-Za-z0-9_]+)[^>]*>/, attr: /(?:([\-A-Za-z0-9_]+)\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|([^>\s]+)))|(?:([\-A-Za-z0-9_]+)(\s|$)+)/g, fillAttr: /^(checked|compact|declare|defer|disabled|ismap|multiple|nohref|noresize|noshade|nowrap|readonly|selected)$/i } }, function(e, t, n) { "use strict";

                                        function s(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }
                                        t.__esModule = !0, t.EndTagToken = t.AtomicTagToken = t.StartTagToken = t.TagToken = t.CharsToken = t.CommentToken = t.Token = undefined; var c = n(5),
                                            r = t.Token = function r(e, t) { s(this, r), this.type = e, this.length = t, this.text = "" },
                                            i = (t.CommentToken = function() {
                                                function n(e, t) { s(this, n), this.type = "comment", this.length = t || (e ? e.length : 0), this.text = "", this.content = e } return n.prototype.toString = function e() { return "<!--" + this.content }, n }(), t.CharsToken = function() {
                                                function t(e) { s(this, t), this.type = "chars", this.length = e, this.text = "" } return t.prototype.toString = function e() { return this.text }, t }(), t.TagToken = function() {
                                                function a(e, t, n, r, i) { s(this, a), this.type = e, this.length = n, this.text = "", this.tagName = t, this.attrs = r, this.booleanAttrs = i, this.unary = !1, this.html5Unary = !1 } return a.formatTag = function o(e, t) { var n = 1 < arguments.length && t !== undefined ? arguments[1] : null,
                                                        r = "<" + e.tagName; for (var i in e.attrs)
                                                        if (e.attrs.hasOwnProperty(i)) { r += " " + i; var a = e.attrs[i]; "undefined" != typeof e.booleanAttrs && "undefined" != typeof e.booleanAttrs[i] || (r += '="' + (0, c.escapeQuotes)(a) + '"') }
                                                    return e.rest && (r += " " + e.rest), e.unary && !e.html5Unary ? r += "/>" : r += ">", n !== undefined && null !== n && (r += n + "</" + e.tagName + ">"), r }, a }());
                                        t.StartTagToken = function() {
                                            function o(e, t, n, r, i, a) { s(this, o), this.type = "startTag", this.length = t, this.text = "", this.tagName = e, this.attrs = n, this.booleanAttrs = r, this.html5Unary = !1, this.unary = i, this.rest = a } return o.prototype.toString = function e() { return i.formatTag(this) }, o }(), t.AtomicTagToken = function() {
                                            function a(e, t, n, r, i) { s(this, a), this.type = "atomicTag", this.length = t, this.text = "", this.tagName = e, this.attrs = n, this.booleanAttrs = r, this.unary = !1, this.html5Unary = !1, this.content = i } return a.prototype.toString = function e() { return i.formatTag(this, this.content) }, a }(), t.EndTagToken = function() {
                                            function n(e, t) { s(this, n), this.type = "endTag", this.length = t, this.text = "", this.tagName = e } return n.prototype.toString = function e() { return "</" + this.tagName + ">" }, n }() }, function(e, t) { "use strict";

                                        function n(e, t) { var n = 1 < arguments.length && t !== undefined ? arguments[1] : ""; return e ? e.replace(/([^"]*)"/g, function(e, t) { return /\\/.test(t) ? t + '"' : t + '\\"' }) : n }
                                        t.__esModule = !0, t.escapeQuotes = n }, function(e, t) { "use strict";

                                        function l(e) { return e && "startTag" === e.type && (e.unary = r.test(e.tagName) || e.unary, e.html5Unary = !/\/>$/.test(e.text)), e }

                                        function u(e, t) { var n = e.stream,
                                                r = l(t()); return e.stream = n, r }

                                        function d(e, t) { var n = t.pop();
                                            e.prepend("</" + n.tagName + ">") }

                                        function f() { var e = []; return e.last = function() { return this[this.length - 1] }, e.lastTagNameEq = function(e) { var t = this.last(); return t && t.tagName && t.tagName.toUpperCase() === e.toUpperCase() }, e.containsTagName = function(e) { for (var t, n = 0; t = this[n]; n++)
                                                    if (t.tagName === e) return !0;
                                                return !1 }, e }

                                        function n(n, r, t) {
                                            function i() { var e = u(n, t);
                                                e && o[e.type] && o[e.type](e) } var a = f(),
                                                o = { startTag: function s(e) { var t = e.tagName; "TR" === t.toUpperCase() && a.lastTagNameEq("TABLE") ? (n.prepend("<TBODY>"), i()) : r.selfCloseFix && p.test(t) && a.containsTagName(t) ? a.lastTagNameEq(t) ? d(n, a) : (n.prepend("</" + e.tagName + ">"), i()) : e.unary || a.push(e) }, endTag: function c(e) { a.last() ? r.tagSoupFix && !a.lastTagNameEq(e.tagName) ? d(n, a) : a.pop() : r.tagSoupFix && (t(), i()) } }; return function e() { return i(), l(t()) } }
                                        t.__esModule = !0, t["default"] = n; var r = /^(AREA|BASE|BASEFONT|BR|COL|FRAME|HR|IMG|INPUT|ISINDEX|LINK|META|PARAM|EMBED)$/i,
                                            p = /^(COLGROUP|DD|DT|LI|OPTIONS|P|TD|TFOOT|TH|THEAD|TR)$/i }]) }) }, function(e, t) { "use strict";

                                function r(e) { return null != e }

                                function n(e) { return "function" == typeof e }

                                function i(e, t, n) { var r = void 0,
                                        i = e && e.length || 0; for (r = 0; r < i; r++) t.call(n, e[r], r) }

                                function a(e, t, n) { for (var r in e) e.hasOwnProperty(r) && t.call(n, r, e[r]) }

                                function o(n, e) { return n = n || {}, a(e, function(e, t) { r(n[e]) || (n[e] = t) }), n }

                                function s(e) { try { return Array.prototype.slice.call(e) } catch (r) { var t = (n = [], i(e, function(e) { n.push(e) }), { v: n }); if ("object" === (void 0 === t ? "undefined" : f(t))) return t.v } var n }

                                function c(e) { return e[e.length - 1] }

                                function l(e, t) { return !(!e || "startTag" !== e.type && "atomicTag" !== e.type || !("tagName" in e) || !~e.tagName.toLowerCase().indexOf(t)) }

                                function u(e) { return l(e, "script") }

                                function d(e) { return l(e, "style") }
                                t.__esModule = !0; var f = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) { return typeof e } : function(e) { return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e };
                                t.existy = r, t.isFunction = n, t.each = i, t.eachKey = a, t.defaults = o, t.toArray = s, t.last = c, t.isTag = l, t.isScript = u, t.isStyle = d }]) }) } }, "core/src/lib/actions/helpers/getSourceByUrl.js": { script: function(e, t, n) { "use strict"; var r = n("@adobe/reactor-load-script"),
                            i = n("@adobe/reactor-promise"),
                            a = {},
                            o = {},
                            s = function(e) { return o[e] || (o[e] = r(e)), o[e] };
                        _satellite.__registerScript = function(e, t) { a[e] = t }, e.exports = function(t) { return a[t] ? i.resolve(a[t]) : new i(function(e) { s(t).then(function() { e(a[t]) }, function() { e() }) }) } } }, "core/src/lib/events/helpers/pageLifecycleEvents.js": { script: function(e, t, n) { "use strict"; var r = n("@adobe/reactor-window"),
                            i = n("@adobe/reactor-document"),
                            a = -1 !== r.navigator.appVersion.indexOf("MSIE 10"),
                            o = "WINDOW_LOADED",
                            s = "DOM_READY",
                            c = "PAGE_BOTTOM",
                            l = [c, s, o],
                            u = function(e, t) { return { element: e, target: e, nativeEvent: t } },
                            d = {};
                        l.forEach(function(e) { d[e] = [] }); var f = function(e, t) { l.slice(0, g(e) + 1).forEach(function(e) { m(t, e) }) },
                            p = function() { return "complete" === i.readyState ? o : "interactive" === i.readyState ? a ? null : s : void 0 },
                            g = function(e) { return l.indexOf(e) },
                            m = function(t, e) { d[e].forEach(function(e) { h(t, e) }), d[e] = [] },
                            h = function(e, t) { var n = t.trigger,
                                    r = t.syntheticEventFn;
                                n(r ? r(e) : null) };
                        r._satellite = r._satellite || {}, r._satellite.pageBottom = f.bind(null, c), i.addEventListener("DOMContentLoaded", f.bind(null, s), !0), r.addEventListener("load", f.bind(null, o), !0), r.setTimeout(function() { var e = p();
                            e && f(e) }, 0), e.exports = { registerLibraryLoadedTrigger: function(e) { e() }, registerPageBottomTrigger: function(e) { d[c].push({ trigger: e }) }, registerDomReadyTrigger: function(e) { d[s].push({ trigger: e, syntheticEventFn: u.bind(null, i) }) }, registerWindowLoadedTrigger: function(e) { d[o].push({ trigger: e, syntheticEventFn: u.bind(null, r) }) } } } } }, hostedLibFilesBaseUrl: "/welcome/Content/js/Adobe/cc42f584a971/EP205185a6537e4aacbdc36b05eb266113/" },
        "adobe-analytics": {
            displayName: "Adobe Analytics",
            modules: {
                "adobe-analytics/src/lib/actions/clearVariables.js": { name: "clear-variables", displayName: "Clear Variables", script: function(e, t, n, r) { "use strict"; var i = n("../sharedModules/getTracker");
                        e.exports = function() { return i().then(function(e) { e.clearVars && (r.logger.info("Clear variables."), e.clearVars()) }, function(e) { r.logger.error("Cannot clear variables: " + e) }) } } },
                "adobe-analytics/src/lib/actions/sendBeacon.js": { name: "send-beacon", displayName: "Send Beacon", script: function(e, t, n, i) { "use strict"; var r = n("../sharedModules/getTracker"),
                            a = function(e) { return e && e.nodeName && "a" === e.nodeName.toLowerCase() },
                            o = function(e) { return a(e) ? e.innerHTML : "link clicked" },
                            s = function(e, t, n) { if ("page" === t.type) i.logger.info("Firing page view beacon."), e.t();
                                else { var r = { linkType: t.linkType || "o", linkName: t.linkName || o(n) };
                                    i.logger.info("Firing link track beacon using the values: " + JSON.stringify(r) + "."), e.tl(a(n) ? n : "true", r.linkType, r.linkName) } };
                        e.exports = function(t, n) { return r().then(function(e) { s(e, t, n.element) }, function(e) { i.logger.error("Cannot send beacon: " + e) }) } } },
                "adobe-analytics/src/lib/actions/setVariables.js": { name: "set-variables", displayName: "Set Variables", script: function(e, t, n, r) { "use strict"; var i = n("../sharedModules/getTracker"),
                            a = n("../helpers/applyTrackerVariables");
                        e.exports = function(t, n) { return i().then(function(e) { r.logger.info("Set variables on the tracker."), a(e, t.trackerProperties), t.customSetup && t.customSetup.source && t.customSetup.source.call(n.element, n, e) }, function(e) { r.logger.error("Cannot set variables: " + e) }) } } },
                "adobe-analytics/src/lib/sharedModules/getTracker.js": { script: function(e, t, n, o) { "use strict"; var r, i = n("@adobe/reactor-cookie"),
                            a = n("@adobe/reactor-promise"),
                            s = n("@adobe/reactor-window"),
                            c = n("../helpers/augmenters"),
                            l = n("@adobe/reactor-load-script"),
                            u = n("../helpers/applyTrackerVariables"),
                            d = n("../helpers/loadLibrary"),
                            f = n("../helpers/generateVersion")(o.buildInfo.turbineBuildDate),
                            p = "beforeSettings",
                            g = o.getSharedModule("adobe-mcid", "mcid-instance"),
                            m = function(e) { return !e || "true" === i.get(e) },
                            h = function(r) { return a.all(c.map(function(e) { var t; try { t = e(r) } catch (n) { setTimeout(function() { throw n }) } return a.resolve(t) })).then(function() { return r }) },
                            b = function(e) { return g && (o.logger.info("Setting MCID instance on the tracker."), e.visitor = g), e },
                            v = function(e) { return o.logger.info('Setting version on tracker: "' + f + '".'), "undefined" != typeof e.tagContainerMarker ? e.tagContainerMarker = f : "string" == typeof e.version && e.version.substring(e.version.length - 5) !== "-" + f && (e.version += "-" + f), e },
                            y = function(e, t, n) { return t.loadPhase === p && t.source && (o.logger.info("Calling custom script before settings."), t.source.call(s, n)), u(n, e || {}), t.loadPhase !== p && t.source && (o.logger.info("Calling custom script after settings."), t.source.call(s, n)), n },
                            I = function(e, t) { var n = e.moduleProperties; if (n && n.audienceManager && n.audienceManager.config && s._satellite && s._satellite.company && s._satellite.company.orgId) { var r = { namespace: s._satellite.company.orgId };
                                    n.audienceManager.config.visitorService = r; var i = "AppMeasurement_Module_AudienceManagement.js",
                                        a = o.getHostedLibFileUrl(i); return l(a).then(function() { return t.loadModule("AudienceManagement"), o.logger.info("Initializing AudienceManagement module"), t.AudienceManagement.setup(n.audienceManager.config), t }) } return t },
                            _ = (r = o.getExtensionSettings(), m(r.trackingCookieName) ? d(r).then(h).then(b).then(v).then(y.bind(null, r.trackerProperties, r.customSetup || {})).then(I.bind(null, r)) : a.reject("EU compliance was not acknowledged by the user."));
                        e.exports = function() { return _ } }, name: "get-tracker", shared: !0 },
                "adobe-analytics/src/lib/sharedModules/augmentTracker.js": { name: "augment-tracker", shared: !0, script: function(e, t, n) { "use strict"; var r = n("../helpers/augmenters");
                        e.exports = function(e) { r.push(e) } } },
                "adobe-analytics/src/lib/helpers/augmenters.js": { script: function(e) { "use strict";
                        e.exports = [] } },
                "adobe-analytics/src/lib/helpers/applyTrackerVariables.js": {
                    script: function(e, t, n, o) {
                        "use strict";
                        var i = n("@adobe/reactor-query-string"),
                            a = n("@adobe/reactor-window"),
                            s = /eVar([0-9]+)/,
                            c = /prop([0-9]+)/,
                            l = new RegExp("^(eVar[0-9]+)|(prop[0-9]+)|(hier[0-9]+)|campaign|purchaseID|channel|server|state|zip|pageType$"),
                            u = function(e, t, n) {
                                return n.indexOf(e) === t
                            },
                            d = function(e, t, n) { var r = Object.keys(t).filter(l.test.bind(l)); return n && r.push("events"), (r = r.concat((e.linkTrackVars || "").split(","))).filter(function(e, t) { return "None" !== e && e && u(e, t, r) }).join(",") },
                            f = function(e, t) { var n = t.map(function(e) { return e.name }); return (n = n.concat((e.linkTrackEvents || "").split(","))).filter(function(e, t) { return "None" !== e && u(e, t, n) }).join(",") },
                            r = function(e, t, n) { e[t] = n[t].join(",") },
                            p = function(i, e, t) { var a = t.dynamicVariablePrefix || "D=";
                                t[e].forEach(function(e) { var t; if ("value" === e.type) t = e.value;
                                    else { var n = s.exec(e.value); if (n) t = a + "v" + n[1];
                                        else { var r = c.exec(e.value);
                                            r && (t = a + "c" + r[1]) } }
                                    i[e.name] = t }) },
                            g = { linkDownloadFileTypes: r, linkExternalFilters: r, linkInternalFilters: r, hierarchies: function(t, e, n) { n[e].forEach(function(e) { t[e.name] = e.sections.join(e.delimiter) }) }, props: p, eVars: p, campaign: function(e, t, n) { if ("queryParam" === n[t].type) { var r = i.parse(a.location.search);
                                        e[t] = r[n[t].value] } else e[t] = n[t].value }, events: function(e, t, n) { var r = n[t].map(function(e) { var t = e.name; return e.id && (t = [t, e.id].join(":")), e.value && (t = [t, e.value].join("=")), t });
                                    e[t] = r.join(",") } };
                        e.exports = function(t, r) { var i = {};
                            r = r || {}, Object.keys(r).forEach(function(e) { var t = g[e],
                                    n = r[e];
                                t ? t(i, e, r) : i[e] = n }), i.events && t.events && 0 < t.events.length && (i.events = t.events + "," + i.events); var e = r && r.events && 0 < r.events.length,
                                n = d(t, i, e);
                            n && (i.linkTrackVars = n); var a = f(t, r.events || []);
                            a && (i.linkTrackEvents = a), o.logger.info('Applying the following properties on tracker: "' + JSON.stringify(i) + '".'), Object.keys(i).forEach(function(e) { t[e] = i[e] }) }
                    }
                },
                "adobe-analytics/src/lib/helpers/loadLibrary.js": { script: function(e, t, n, a) { "use strict"; var r = n("@adobe/reactor-load-script"),
                            o = n("@adobe/reactor-window"),
                            s = n("@adobe/reactor-promise"),
                            i = { MANAGED: "managed", PREINSTALLED: "preinstalled", REMOTE: "remote", CUSTOM: "custom" },
                            c = function(e) { return a.logger.info("Loading AppMeasurement script from: " + e + "."), r(e) },
                            l = function(e) { var t = e.production; return e[a.buildInfo.environment] && (t = e[a.buildInfo.environment]), t.join(",") },
                            u = function(e, t) { if (!o.s_gi) throw new Error("Unable to create AppMeasurement tracker, `s_gi` function not found." + o.AppMeasurement);
                                a.logger.info('Creating AppMeasurement tracker with these report suites: "' + t + '"'); var n = o.s_gi(t); return e.libraryCode.scopeTrackerGlobally && (a.logger.info("Setting the tracker as window.s"), o.s = n), n },
                            d = function(e) { var t = l(e.libraryCode.accounts); return c(a.getHostedLibFileUrl("AppMeasurement.js")).then(u.bind(null, e, t)) },
                            f = function(e, t) { if (e.libraryCode.accounts)
                                    if (t.sa) { var n = l(e.libraryCode.accounts);
                                        a.logger.info('Setting the following report suites on the tracker: "' + n + '"'), t.sa(n) } else a.logger.warn("Cannot set report suites on tracker. `sa` method not available.");
                                return t },
                            p = function(i) { return a.logger.info('Waiting for the tracker to become accessible at: "' + i + '".'), new s(function(e, t) { var n = 1,
                                        r = setInterval(function() { o[i] && (a.logger.info('Found tracker located at: "' + i + '".'), e(o[i]), clearInterval(r)), 10 <= n && (clearInterval(r), t(new Error('Bailing out. Cannot find the global variable name: "' + i + '".'))), n++ }, 1e3) }) },
                            g = function(e) { return p(e.libraryCode.trackerVariableName).then(f.bind(null, e)) },
                            m = function(e) { if (o[e]) return a.logger.info('Found tracker located at: "' + e + '".'), o[e]; throw new Error('Cannot find the global variable name: "' + e + '".') },
                            h = function(e, t) { return c(e).then(m.bind(null, t.libraryCode.trackerVariableName)).then(f.bind(null, t)) };
                        e.exports = function(e) { var t, n; switch (e.libraryCode.type) {
                                case i.MANAGED:
                                    n = d(e); break;
                                case i.PREINSTALLED:
                                    n = g(e); break;
                                case i.CUSTOM:
                                    t = e.libraryCode.source, n = h(t, e); break;
                                case i.REMOTE:
                                    t = "https:" === o.location.protocol ? e.libraryCode.httpsUrl : e.libraryCode.httpUrl, n = h(t, e); break;
                                default:
                                    throw new Error("Cannot load library. Type not supported.") } return n } } },
                "adobe-analytics/src/lib/helpers/generateVersion.js": { script: function(e) { "use strict"; var t = 8,
                            n = function(e) { return e.getUTCDate().toString(36) },
                            r = function(e) { return e.substr(e.length - 1) },
                            i = function(e) { return Math.floor(e.getUTCHours() / t) },
                            a = function(e) { var t = (e.getUTCMonth() + 1 + 12 * i(e)).toString(36); return r(t) },
                            o = function(e) { return (e.getUTCFullYear() - 2010).toString(36) };
                        e.exports = function(e) { var t = new Date(e); if (isNaN(t)) throw new Error("Invalid date provided"); return ("L" + o(t) + a(t) + n(t)).toUpperCase() } } }
            },
            settings: { orgId: "B877A5DB584931AC0A495EAA@AdobeOrg", customSetup: { source: function(e) { e.usePlugins = !0, e.doPlugins = function(e) { var t = o("Asia/Shanghai"),
                                n = t.split("|")[3].split("=")[1],
                                r = t.split("|")[4].split("=")[1],
                                i = r.split(":")[0] + " " + r.split(" ")[1],
                                a = "";
                            a = -1 != n.indexOf("Monday") || -1 != n.indexOf("Tuesday") || -1 != n.indexOf("Wednesday") || -1 != n.indexOf("Thursday") || -1 != n.indexOf("Friday") ? "Weekday" : -1 != n.indexOf("Saturday") || -1 != n.indexOf("Sunday") ? "Weekend" : "None", e.prop38 = i, e.prop39 = n, e.prop40 = a }; var o = function(e) { return e = document.documentMode ? void 0 : e || "Etc/GMT", e = (new Date).toLocaleDateString("en-US", { timeZone: e, minute: "numeric", hour: "numeric", weekday: "long", day: "numeric", year: "numeric", month: "long" }), "year=" + (e = /([a-zA-Z]+).*?([a-zA-Z]+).*?([0-9]+).*?([0-9]+)(.*?)([0-9])(.*)/.exec(e))[4] + " | month=" + e[2] + " | date=" + e[3] + " | day=" + e[1] + " | time=" + (e[6] + e[7]) } } }, libraryCode: { type: "managed", accounts: { staging: ["cathayunitedbankbankdev"], production: ["cathayunitedbankbank"], development: ["cathayunitedbankbankdev"] }, scopeTrackerGlobally: !1 }, trackerProperties: { charSet: "UTF-8", currencyCode: "TWD", trackingServer: "cathayunitedbank.sc.omtrdc.net", trackInlineStats: !0, trackDownloadLinks: !0, trackExternalLinks: !0, trackingServerSecure: "cathayunitedbank.sc.omtrdc.net", linkDownloadFileTypes: ["doc", "docx", "eps", "jpg", "png", "svg", "xls", "ppt", "pptx", "pdf", "xlsx", "tab", "csv", "zip", "txt", "vsd", "vxd", "xml", "js", "css", "rar", "exe", "wma", "mov", "avi", "wmv", "mp3", "wav", "m4v"] } },
            hostedLibFilesBaseUrl: "/welcome/Content/js/Adobe/cc42f584a971/EP308220a2a4c4403f97fc1960100db40f/"
        },
        "adobe-mcid": {
            displayName: "Experience Cloud ID Service",
            modules: {
                "adobe-mcid/src/lib/dataElements/ecid.js": { name: "ecid", displayName: "ECID", script: function(e, t, n) { "use strict"; var r;
                        n("../sharedModules/mcidInstance").getMarketingCloudVisitorID(function(e) { r = e }, !0), e.exports = function() { return r } } },
                "adobe-mcid/src/lib/sharedModules/mcidInstance.js": { script: function(e, t, n, g) { "use strict"; var r = n("@adobe/reactor-document"),
                            i = n("../codeLibrary/VisitorAPI"),
                            m = n("../../view/utils/timeUnits"),
                            h = function(e) { return e.reduce(function(e, t) { var n = /^(true|false)$/i.test(t.value) ? JSON.parse(t.value) : t.value; return e[t.name] = n, e }, {}) },
                            a = function(e) { var t = g.getExtensionSettings(); if ("string" != typeof t.orgId) throw new TypeError("Org ID is not a string."); var n = h(t.variables || []),
                                    r = t.doesOptInApply;
                                r && ("boolean" == typeof r ? n.doesOptInApply = r : t.optInCallback && (n.doesOptInApply = t.optInCallback)); var i = t.isOptInStorageEnabled;
                                i && (n.isOptInStorageEnabled = i); var a = t.optInCookieDomain;
                                a && (n.optInCookieDomain = a); var o = t.optInStorageExpiry; if (o) { var s = t.timeUnit; if (s && m[s]) { var c = o * m[s];
                                        n.optInStorageExpiry = c } } else !0 === i && (n.optInStorageExpiry = 33696e3); var l = t.previousPermissions;
                                l && (n.previousPermissions = l); var u = t.preOptInApprovals; if (u) n.preOptInApprovals = u;
                                else { var d = t.preOptInApprovalInput;
                                    d && (n.preOptInApprovals = d) } var f = t.isIabContext;
                                f && (n.isIabContext = f); var p = e.getInstance(t.orgId, n); return g.logger.info('Created instance using orgId: "' + t.orgId + '"'), g.logger.info("Set variables: " + JSON.stringify(n)), p.getMarketingCloudVisitorID(function(e) { g.logger.info("Obtained Marketing Cloud Visitor Id: " + e) }, !0), p },
                            o = function(t) { return (g.getExtensionSettings().pathExclusions || []).some(function(e) { return e.valueIsRegex ? new RegExp(e.value, "i").test(t) : e.value === t }) },
                            s = null;
                        _satellite.getVisitorId = function() { return s }, o(r.location.pathname) ? g.logger.warn("MCID library not loaded. One of the path exclusions matches the current path.") : s = a(i), e.exports = s }, name: "mcid-instance", shared: !0 },
                "adobe-mcid/src/lib/codeLibrary/VisitorAPI.js": {
                    script: function(e) {
                        e.exports = (function() {
                            "use strict";

                            function R(e) { return (R = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) { return typeof e } : function(e) { return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e })(e) }

                            function e(e, t, n) { return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e }

                            function t() { return { callbacks: {}, add: function(e, t) { this.callbacks[e] = this.callbacks[e] || []; var n = this.callbacks[e].push(t) - 1,
                                            r = this; return function() { r.callbacks[e].splice(n, 1) } }, execute: function(e, t) { if (this.callbacks[e]) { t = (t = void 0 === t ? [] : t) instanceof Array ? t : [t]; try { for (; this.callbacks[e].length;) { var n = this.callbacks[e].shift(); "function" == typeof n ? n.apply(null, t) : n instanceof Array && n[1].apply(n[0], t) }
                                                delete this.callbacks[e] } catch (e) {} } }, executeAll: function(n, e) {
                                        (e || n && !B.isObjectEmpty(n)) && Object.keys(this.callbacks).forEach(function(e) { var t = void 0 !== n[e] ? n[e] : "";
                                            this.execute(e, t) }, this) }, hasCallbacks: function() { return Boolean(Object.keys(this.callbacks).length) } } }

                            function l(e, t, n) { var r = null == e ? void 0 : e[t]; return void 0 === r ? n : r }

                            function i(e) { for (var t = /^\d+$/, n = 0, r = e.length; n < r; n++)
                                    if (!t.test(e[n])) return !1;
                                return !0 }

                            function a(e, t) { for (; e.length < t.length;) e.push("0"); for (; t.length < e.length;) t.push("0") }

                            function o(e, t) { for (var n = 0; n < e.length; n++) { var r = parseInt(e[n], 10),
                                        i = parseInt(t[n], 10); if (i < r) return 1; if (r < i) return -1 } return 0 }

                            function n(e, t) { if (e === t) return 0; var n = e.toString().split("."),
                                    r = t.toString().split("."); return i(n.concat(r)) ? (a(n, r), o(n, r)) : NaN }

                            function s(e) { return e === Object(e) && 0 === Object.keys(e).length }

                            function c(e) { return "function" == typeof e || e instanceof Array && e.length }

                            function r(e, t) { var n = 0 < arguments.length && void 0 !== e ? arguments[0] : "",
                                    r = 1 < arguments.length && void 0 !== t ? arguments[1] : function() { return !0 };
                                this.log = ue("log", n, r), this.warn = ue("warn", n, r), this.error = ue("error", n, r) }

                            function j(e, t) { var n = 0 < arguments.length && void 0 !== e ? arguments[0] : {},
                                    r = n.isEnabled,
                                    i = n.cookieName,
                                    a = (1 < arguments.length && void 0 !== t ? arguments[1] : {}).cookies; return r && i && a ? { remove: function() { a.remove(i) }, get: function() { var e = a.get(i),
                                            t = {}; try { t = JSON.parse(e) } catch (e) { t = {} } return t }, set: function(e, t) { t = t || {}, a.set(i, JSON.stringify(e), { domain: t.optInCookieDomain || "", cookieLifetime: t.optInStorageExpiry || 3419e4, expires: !0 }) } } : { get: Ce, set: Ce, remove: Ce } }

                            function u(e) { this.name = this.constructor.name, this.message = e, "function" == typeof Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error(e).stack }

                            function d(e, t) {
                                function n(e, t) { var n = pe(e); return n.length ? n.every(function(e) { return !!t[e] }) : ge(t) }

                                function r() { M(E), w(ne.COMPLETE), S(_.status, _.permissions), I.set(_.permissions, { optInCookieDomain: u, optInStorageExpiry: d }), C.execute(Te) }

                                function i(n) { return function(e, t) { if (!me(e)) throw new Error("[OptIn] Invalid category(-ies). Please use the `OptIn.Categories` enum."); return w(ne.CHANGED), Object.assign(E, he(pe(e), n)), t || r(), _ } } var a = 0 < arguments.length && void 0 !== e ? arguments[0] : {},
                                    o = a.doesOptInApply,
                                    s = a.previousPermissions,
                                    c = a.preOptInApprovals,
                                    l = a.isOptInStorageEnabled,
                                    u = a.optInCookieDomain,
                                    d = a.optInStorageExpiry,
                                    f = a.isIabContext,
                                    p = (1 < arguments.length && void 0 !== t ? arguments[1] : {}).cookies,
                                    g = ke(s);
                                Oe(g, "Invalid `previousPermissions`!"), Oe(c, "Invalid `preOptInApprovals`!"); var m, h, b, v, y, I = j({ isEnabled: !!l, cookieName: "adobeujs-optin" }, { cookies: p }),
                                    _ = this,
                                    S = te(_),
                                    C = se(),
                                    k = ye(g),
                                    O = ye(c),
                                    P = I.get(),
                                    A = {},
                                    D = (y = P, Ie(k) || y && Ie(y) ? ne.COMPLETE : ne.PENDING),
                                    T = (m = O, h = k, b = P, v = he(oe, !o), o ? Object.assign({}, v, m, h, b) : v),
                                    E = be(T),
                                    w = function(e) { return D = e },
                                    M = function(e) { return T = e };
                                _.deny = i(!1), _.approve = i(!0), _.denyAll = _.deny.bind(_, oe), _.approveAll = _.approve.bind(_, oe), _.isApproved = function(e) { return n(e, _.permissions) }, _.isPreApproved = function(e) { return n(e, O) }, _.fetchPermissions = function(e, t) { var n = 1 < arguments.length && void 0 !== t && arguments[1],
                                        r = n ? _.on(ne.COMPLETE, e) : Ce; return !o || o && _.isComplete || c ? e(_.permissions) : n || C.add(Te, function() { return e(_.permissions) }), r }, _.complete = function() { _.status === ne.CHANGED && r() }, _.registerPlugin = function(e) { if (!e || !e.name || "function" != typeof e.onRegister) throw new Error(Ee);
                                    A[e.name] || (A[e.name] = e).onRegister.call(e, _) }, _.execute = De(A), Object.defineProperties(_, { permissions: { get: function() { return T } }, status: { get: function() { return D } }, Categories: { get: function() { return re } }, doesOptInApply: { get: function() { return !!o } }, isPending: { get: function() { return _.status === ne.PENDING } }, isComplete: { get: function() { return _.status === ne.COMPLETE } }, __plugins: { get: function() { return Object.keys(A) } }, isIabContext: { get: function() { return f } } }) }

                            function f(e, t) {
                                function n() { i = null, e.call(e, new u("The call took longer than you wanted!")) }

                                function r() { i && (clearTimeout(i), e.apply(e, arguments)) } if (void 0 === t) return e; var i = setTimeout(n, t); return r }

                            function p() { if (window.__cmp) return window.__cmp; var e = window; if (e !== window.top) { for (var a; !a;) { e = e.parent; try { e.frames.__cmpLocator && (a = e) } catch (e) {} if (e === window.top) break } if (a) { var o = {}; return window.__cmp = function(e, t, n) { var r = Math.random() + "",
                                                i = { __cmpCall: { command: e, parameter: t, callId: r } };
                                            o[r] = n, a.postMessage(i, "*") }, window.addEventListener("message", function(e) { var t = e.data; if ("string" == typeof t) try { t = JSON.parse(e.data) } catch (e) {}
                                            if (t.__cmpReturn) { var n = t.__cmpReturn;
                                                o[n.callId] && (o[n.callId](n.returnValue, n.success), delete o[n.callId]) } }, !1), window.__cmp }
                                    de.error("__cmp not found") } else de.error("__cmp not found") }

                            function g() { var t = this;
                                t.name = "iabPlugin", t.version = "0.0.1"; var s = se(),
                                    c = { allConsentData: null },
                                    l = function(e, t) { var n = 1 < arguments.length && void 0 !== t ? arguments[1] : {}; return c[e] = n };
                                t.fetchConsentData = function(e) { var t = f(e.callback, e.timeout);
                                    r({ callback: t }) }, t.isApproved = function(e) { var a = e.callback,
                                        o = e.category,
                                        t = e.timeout; if (c.allConsentData) return a(null, d(o, c.allConsentData.vendorConsents, c.allConsentData.purposeConsents)); var n = f(function(e, t) { var n = 1 < arguments.length && void 0 !== t ? arguments[1] : {},
                                            r = n.vendorConsents,
                                            i = n.purposeConsents;
                                        a(e, d(o, r, i)) }, t);
                                    r({ category: o, callback: n }) }, t.onRegister = function(o) { var s = Object.keys(ie),
                                        e = function(e, t) { var n = 1 < arguments.length && void 0 !== t ? arguments[1] : {},
                                                r = n.purposeConsents,
                                                i = n.gdprApplies,
                                                a = n.vendorConsents;!e && i && a && r && (s.forEach(function(e) { var t = d(e, a, r);
                                                o[t ? "approve" : "deny"](e, !0) }), o.complete()) };
                                    t.fetchConsentData({ callback: e }) }; var r = function(e) { var t = e.callback; if (c.allConsentData) return t(null, c.allConsentData);
                                        s.add("FETCH_CONSENT_DATA", t); var o = {};
                                        n(function(e, t) { var n = 0 < arguments.length && void 0 !== e ? arguments[0] : {},
                                                r = n.purposeConsents,
                                                i = n.gdprApplies,
                                                a = n.vendorConsents;
                                            (1 < arguments.length ? t : void 0) && l("allConsentData", o = { purposeConsents: r, gdprApplies: i, vendorConsents: a }), u(function(e, t) { var n = 0 < arguments.length && void 0 !== e ? arguments[0] : {};
                                                (1 < arguments.length ? t : void 0) && (o.consentString = n.consentData, l("allConsentData", o)), s.execute("FETCH_CONSENT_DATA", [null, c.allConsentData]) }) }) },
                                    u = function(e) { var t = p();
                                        t && t("getConsentData", null, e) },
                                    n = function(e) { var t = Ae(ie),
                                            n = p();
                                        n && n("getVendorConsents", t, e) },
                                    d = function(e, t, n) { var r = 1 < arguments.length && void 0 !== t ? arguments[1] : {},
                                            i = 2 < arguments.length && void 0 !== n ? arguments[2] : {}; return !!r[ie[e]] && ae[e].every(function(e) { return i[e] }) } }
                            var N = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
                            Object.assign = Object.assign || function(e) { for (var t, n, r = 1; r < arguments.length; ++r)
                                    for (t in n = arguments[r]) Object.prototype.hasOwnProperty.call(n, t) && (e[t] = n[t]); return e };
                            var m, h, b, v, V = { MESSAGES: { HANDSHAKE: "HANDSHAKE", GETSTATE: "GETSTATE", PARENTSTATE: "PARENTSTATE" }, STATE_KEYS_MAP: { MCMID: "MCMID", MCAID: "MCAID", MCAAMB: "MCAAMB", MCAAMLH: "MCAAMLH", MCOPTOUT: "MCOPTOUT", CUSTOMERIDS: "CUSTOMERIDS" }, ASYNC_API_MAP: { MCMID: "getMarketingCloudVisitorID", MCAID: "getAnalyticsVisitorID", MCAAMB: "getAudienceManagerBlob", MCAAMLH: "getAudienceManagerLocationHint", MCOPTOUT: "isOptedOut", ALLFIELDS: "getVisitorValues" }, SYNC_API_MAP: { CUSTOMERIDS: "getCustomerIDs" }, ALL_APIS: { MCMID: "getMarketingCloudVisitorID", MCAAMB: "getAudienceManagerBlob", MCAAMLH: "getAudienceManagerLocationHint", MCOPTOUT: "isOptedOut", MCAID: "getAnalyticsVisitorID", CUSTOMERIDS: "getCustomerIDs", ALLFIELDS: "getVisitorValues" }, FIELDGROUP_TO_FIELD: { MC: "MCMID", A: "MCAID", AAM: "MCAAMB" }, FIELDS: { MCMID: "MCMID", MCOPTOUT: "MCOPTOUT", MCAID: "MCAID", MCAAMLH: "MCAAMLH", MCAAMB: "MCAAMB" }, AUTH_STATE: { UNKNOWN: 0, AUTHENTICATED: 1, LOGGED_OUT: 2 }, OPT_OUT: { GLOBAL: "global" } },
                                y = V.STATE_KEYS_MAP,
                                I = function(a) {
                                    function r() {}

                                    function i(n, r) { var i = this; return function() { var e = a(0, n),
                                                t = {}; return t[n] = e, i.setStateAndPublish(t), r(e), e } }
                                    this.getMarketingCloudVisitorID = function(e) { e = e || r; var t = this.findField(y.MCMID, e),
                                            n = i.call(this, y.MCMID, e); return void 0 !== t ? t : n() }, this.getVisitorValues = function(t) { this.getMarketingCloudVisitorID(function(e) { t({ MCMID: e }) }) } },
                                _ = V.MESSAGES,
                                S = V.ASYNC_API_MAP,
                                C = V.SYNC_API_MAP,
                                k = function() {
                                    function i() {}

                                    function a(e, t) { var n = this; return function() { return n.callbackRegistry.add(e, t), n.messageParent(_.GETSTATE), "" } }

                                    function e(r) { this[S[r]] = function(e) { e = e || i; var t = this.findField(r, e),
                                                n = a.call(this, r, e); return void 0 !== t ? t : n() } }

                                    function t(e) { this[C[e]] = function() { return this.findField(e, i) || {} } }
                                    Object.keys(S).forEach(e, this), Object.keys(C).forEach(t, this) },
                                O = V.ASYNC_API_MAP,
                                P = function() { Object.keys(O).forEach(function(t) { this[O[t]] = function(e) { this.callbackRegistry.add(t, e) } }, this) },
                                B = (function(e, t) { t.isObjectEmpty = function(e) { return e === Object(e) && 0 === Object.keys(e).length }, t.isValueEmpty = function(e) { return "" === e || t.isObjectEmpty(e) }; var n = function() { var e = navigator.appName,
                                            t = navigator.userAgent; return "Microsoft Internet Explorer" === e || 0 <= t.indexOf("MSIE ") || 0 <= t.indexOf("Trident/") && 0 <= t.indexOf("Windows NT 6") };
                                    t.getIeVersion = function() { return document.documentMode ? document.documentMode : n() ? 7 : null }, t.encodeAndBuildRequest = function(e, t) { return e.map(encodeURIComponent).join(t) }, t.isObject = function(e) { return null !== e && "object" === R(e) && !1 === Array.isArray(e) }, t.defineGlobalNamespace = function() { return window.adobe = t.isObject(window.adobe) ? window.adobe : {}, window.adobe }, t.pluck = function(n, e) { return e.reduce(function(e, t) { return n[t] && (e[t] = n[t]), e }, Object.create(null)) }, t.parseOptOut = function(e, t, n) { t || (t = n, e.d_optout && e.d_optout instanceof Array && (t = e.d_optout.join(","))); var r = parseInt(e.d_ottl, 10); return isNaN(r) && (r = 7200), { optOut: t, d_ottl: r } }, t.normalizeBoolean = function(e) { var t = e; return "true" === e ? t = !0 : "false" === e && (t = !1), t } }(v = { exports: {} }, v.exports), v.exports),
                                A = (B.isObjectEmpty, B.isValueEmpty, B.getIeVersion, B.encodeAndBuildRequest, B.isObject, B.defineGlobalNamespace, B.pluck, B.parseOptOut, B.normalizeBoolean, t),
                                D = V.MESSAGES,
                                T = { 0: "prefix", 1: "orgID", 2: "state" },
                                U = function(a, o) { this.parse = function(e) { try { var n = {}; return e.data.split("|").forEach(function(e, t) { void 0 !== e && (n[T[t]] = 2 !== t ? e : JSON.parse(e)) }), n } catch (e) {} }, this.isInvalid = function(e) { var t = this.parse(e); if (!t || Object.keys(t).length < 2) return !0; var n = a !== t.orgID,
                                            r = !o || e.origin !== o,
                                            i = -1 === Object.keys(D).indexOf(t.prefix); return n || r || i }, this.send = function(e, t, n) { var r = t + "|" + a;
                                        n && n === Object(n) && (r += "|" + JSON.stringify(n)); try { e.postMessage(r, o) } catch (a) {} } },
                                E = V.MESSAGES,
                                w = function(e, t, n, r) {
                                    function i(e) { Object.assign(p, e) }

                                    function a(e) { Object.assign(p.state, e), Object.assign(p.state.ALLFIELDS, e), p.callbackRegistry.executeAll(p.state) }

                                    function o(e) { if (!h.isInvalid(e)) { m = !1; var t = h.parse(e);
                                            p.setStateAndPublish(t.state) } }

                                    function s(e) {!m && g && (m = !0, h.send(r, e)) }

                                    function c() { i(new I(n._generateID)), p.getMarketingCloudVisitorID(), p.callbackRegistry.executeAll(p.state, !0), N.removeEventListener("message", l) }

                                    function l(e) { if (!h.isInvalid(e)) { var t = h.parse(e);
                                            m = !1, N.clearTimeout(p._handshakeTimeout), N.removeEventListener("message", l), i(new k(p)), N.addEventListener("message", o), p.setStateAndPublish(t.state), p.callbackRegistry.hasCallbacks() && s(E.GETSTATE) } }

                                    function u() { g && postMessage ? (N.addEventListener("message", l), s(E.HANDSHAKE), p._handshakeTimeout = setTimeout(c, 250)) : c() }

                                    function d() { N.s_c_in || (N.s_c_il = [], N.s_c_in = 0), p._c = "Visitor", p._il = N.s_c_il, p._in = N.s_c_in, p._il[p._in] = p, N.s_c_in++ }

                                    function f() {
                                        function e(e) { 0 !== e.indexOf("_") && "function" == typeof n[e] && (p[e] = function() {}) }
                                        Object.keys(n).forEach(e), p.getSupplementalDataID = n.getSupplementalDataID, p.isAllowed = function() { return !0 } } var p = this,
                                        g = t.whitelistParentDomain;
                                    p.state = { ALLFIELDS: {} }, p.version = n.version, p.marketingCloudOrgID = e, p.cookieDomain = n.cookieDomain || ""; var m = !(p._instanceType = "child"),
                                        h = new U(e, g);
                                    p.callbackRegistry = A(), p.init = function() { d(), f(), i(new P(p)), u() }, p.findField = function(e, t) { if (void 0 !== p.state[e]) return t(p.state[e]), p.state[e] }, p.messageParent = s, p.setStateAndPublish = a },
                                M = V.MESSAGES,
                                x = V.ALL_APIS,
                                L = V.ASYNC_API_MAP,
                                F = V.FIELDGROUP_TO_FIELD,
                                H = function(i, r) {
                                    function a() { var r = {}; return Object.keys(x).forEach(function(e) { var t = x[e],
                                                n = i[t]();
                                            B.isValueEmpty(n) || (r[e] = n) }), r }

                                    function o() { var n = []; return i._loading && Object.keys(i._loading).forEach(function(e) { if (i._loading[e]) { var t = F[e];
                                                n.push(t) } }), n.length ? n : null }

                                    function t(n) { return function r() { var e = o(); if (e) { var t = L[e[0]];
                                                i[t](r, !0) } else n() } }

                                    function n(e, t) { var n = a();
                                        r.send(e, t, n) }

                                    function s(e) { l(e), n(e, M.HANDSHAKE) }

                                    function c(e) { t(function() { n(e, M.PARENTSTATE) })() }

                                    function l(t) {
                                        function e(e) { n.call(i, e), r.send(t, M.PARENTSTATE, { CUSTOMERIDS: i.getCustomerIDs() }) } var n = i.setCustomerIDs;
                                        i.setCustomerIDs = e } return function(e) { r.isInvalid(e) || (r.parse(e).prefix === M.HANDSHAKE ? s : c)(e.source) } },
                                G = function(r, n) {
                                    function i(t) { return function(e) { a[t] = e, ++o === s && n(a) } } var a = {},
                                        o = 0,
                                        s = Object.keys(r).length;
                                    Object.keys(r).forEach(function(e) { var t = r[e]; if (t.fn) { var n = t.args || [];
                                            n.unshift(i(e)), t.fn.apply(t.context || null, n) } }) },
                                q = { get: function(e) { e = encodeURIComponent(e); var t = (";" + document.cookie).split(" ").join(";"),
                                            n = t.indexOf(";" + e + "="),
                                            r = n < 0 ? n : t.indexOf(";", n + 1); return n < 0 ? "" : decodeURIComponent(t.substring(n + 2 + e.length, r < 0 ? t.length : r)) }, set: function(e, t, n) { var r = l(n, "cookieLifetime"),
                                            i = l(n, "expires"),
                                            a = l(n, "domain"),
                                            o = l(n, "secure") ? "Secure" : ""; if (i && "SESSION" !== r && "NONE" !== r) { var s = "" !== t ? parseInt(r || 0, 10) : -60; if (s)(i = new Date).setTime(i.getTime() + 1e3 * s);
                                            else if (1 === i) { var c = (i = new Date).getYear();
                                                i.setYear(c + 2 + (c < 1900 ? 1900 : 0)) } } else i = 0; return e && "NONE" !== r ? (document.cookie = encodeURIComponent(e) + "=" + encodeURIComponent(t) + "; path=/;" + (i ? " expires=" + i.toGMTString() + ";" : "") + (a ? " domain=" + a + ";" : "") + o, this.get(e) === t) : 0 }, remove: function(e, t) { var n = l(t, "domain");
                                        n = n ? " domain=" + n + ";" : "", document.cookie = encodeURIComponent(e) + "=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;" + n } },
                                W = function(e) { var t;!e && N.location && (e = N.location.hostname); var n, r = (t = e).split("."); for (n = r.length - 2; 0 <= n; n--)
                                        if (t = r.slice(n).join("."), q.set("test", "cookie", { domain: t })) return q.remove("test", { domain: t }), t;
                                    return "" },
                                Y = { compare: n, isLessThan: function(e, t) { return n(e, t) < 0 }, areVersionsDifferent: function(e, t) { return 0 !== n(e, t) }, isGreaterThan: function(e, t) { return 0 < n(e, t) }, isEqual: function(e, t) { return 0 === n(e, t) } },
                                J = !!N.postMessage,
                                z = { postMessage: function(e, t, n) { var r = 1;
                                        t && (J ? n.postMessage(e, t.replace(/([^:]+:\/\/[^\/]+).*/, "$1")) : t && (n.location = t.replace(/#.*$/, "") + "#" + +new Date + r++ + "&" + e)) }, receiveMessage: function(t, n) { var e; try { J && (t && (e = function(e) { if ("string" == typeof n && e.origin !== n || "[object Function]" === Object.prototype.toString.call(n) && !1 === n(e.origin)) return !1;
                                                t(e) }), N.addEventListener ? N[t ? "addEventListener" : "removeEventListener"]("message", e) : N[t ? "attachEvent" : "detachEvent"]("onmessage", e)) } catch (t) {} } },
                                $ = function(e) { var t, n, r = "0123456789",
                                        i = "",
                                        a = "",
                                        o = 8,
                                        s = 10,
                                        c = 10; if (1 == e) { for (r += "ABCDEF", t = 0; t < 16; t++) n = Math.floor(Math.random() * o), i += r.substring(n, n + 1), n = Math.floor(Math.random() * o), a += r.substring(n, n + 1), o = 16; return i + "-" + a } for (t = 0; t < 19; t++) n = Math.floor(Math.random() * s), i += r.substring(n, n + 1), 0 === t && 9 == n ? s = 3 : (1 == t || 2 == t) && 10 != s && n < 2 ? s = 10 : 2 < t && (s = 10), n = Math.floor(Math.random() * c), a += r.substring(n, n + 1), 0 === t && 9 == n ? c = 3 : (1 == t || 2 == t) && 10 != c && n < 2 ? c = 10 : 2 < t && (c = 10); return i + a },
                                Q = function(r) { return { corsMetadata: (e = "none", t = !0, "undefined" != typeof XMLHttpRequest && XMLHttpRequest === Object(XMLHttpRequest) && ("withCredentials" in new XMLHttpRequest ? e = "XMLHttpRequest" : "undefined" != typeof XDomainRequest && XDomainRequest === Object(XDomainRequest) && (t = !1), 0 < Object.prototype.toString.call(N.HTMLElement).indexOf("Constructor") && (t = !1)), { corsType: e, corsCookiesEnabled: t }), getCORSInstance: function() { return "none" === this.corsMetadata.corsType ? null : new N[this.corsMetadata.corsType] }, fireCORS: function(a, e) {
                                            function t(e) { var t; try { if ((t = JSON.parse(e)) !== Object(t)) return void o.handleCORSError(a, null, "Response is not JSON") } catch (e) { return void o.handleCORSError(a, e, "Error parsing response as JSON") } try { for (var n = a.callback, r = N, i = 0; i < n.length; i++) r = r[n[i]];
                                                    r(t) } catch (e) { o.handleCORSError(a, e, "Error forming callback function") } } var o = this;
                                            e && (a.loadErrorHandler = e); try { var n = this.getCORSInstance();
                                                n.open("get", a.corsUrl + "&ts=" + (new Date).getTime(), !0), "XMLHttpRequest" === this.corsMetadata.corsType && (n.withCredentials = !0, n.timeout = r.loadTimeout, n.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), n.onreadystatechange = function() { 4 === this.readyState && 200 === this.status && t(this.responseText) }), n.onerror = function(e) { o.handleCORSError(a, e, "onerror") }, n.ontimeout = function(e) { o.handleCORSError(a, e, "ontimeout") }, n.send(), r._log.requests.push(a.corsUrl) } catch (r) { this.handleCORSError(a, r, "try-catch") } }, handleCORSError: function(e, t, n) { r.CORSErrors.push({ corsData: e, error: t, description: n }), e.loadErrorHandler && ("ontimeout" === n ? e.loadErrorHandler(!0) : e.loadErrorHandler(!1)) } }; var e, t },
                                K = { POST_MESSAGE_ENABLED: !!N.postMessage, DAYS_BETWEEN_SYNC_ID_CALLS: 1, MILLIS_PER_DAY: 864e5, ADOBE_MC: "adobe_mc", ADOBE_MC_SDID: "adobe_mc_sdid", VALID_VISITOR_ID_REGEX: /^[0-9a-fA-F\-]+$/, ADOBE_MC_TTL_IN_MIN: 5, VERSION_REGEX: /vVersion\|((\d+\.)?(\d+\.)?(\*|\d+))(?=$|\|)/, FIRST_PARTY_SERVER_COOKIE: "s_ecid" },
                                X = function(g, t) {
                                    var i = N.document;
                                    return {
                                        THROTTLE_START: 3e4,
                                        MAX_SYNCS_LENGTH: 649,
                                        throttleTimerSet: !1,
                                        id: null,
                                        onPagePixels: [],
                                        iframeHost: null,
                                        getIframeHost: function(e) { if ("string" == typeof e) { var t = e.split("/"); return t[0] + "//" + t[2] } },
                                        subdomain: null,
                                        url: null,
                                        getUrl: function() { var e, t = "http://fast.",
                                                n = "?d_nsid=" + g.idSyncContainerID + "#" + encodeURIComponent(i.location.origin); return this.subdomain || (this.subdomain = "nosubdomainreturned"), g.loadSSL && (t = g.idSyncSSLUseAkamai ? "https://fast." : "https://"), e = t + this.subdomain + ".demdex.net/dest5.html" + n, this.iframeHost = this.getIframeHost(e), this.id = "destination_publishing_iframe_" + this.subdomain + "_" + g.idSyncContainerID, e },
                                        checkDPIframeSrc: function() { var e = "?d_nsid=" + g.idSyncContainerID + "#" + encodeURIComponent(i.location.href); "string" == typeof g.dpIframeSrc && g.dpIframeSrc.length && (this.id = "destination_publishing_iframe_" + (g._subdomain || this.subdomain || (new Date).getTime()) + "_" + g.idSyncContainerID, this.iframeHost = this.getIframeHost(g.dpIframeSrc), this.url = g.dpIframeSrc + e) },
                                        idCallNotProcesssed: null,
                                        doAttachIframe: !1,
                                        startedAttachingIframe: !1,
                                        iframeHasLoaded: null,
                                        iframeIdChanged: null,
                                        newIframeCreated: null,
                                        originalIframeHasLoadedAlready: null,
                                        iframeLoadedCallbacks: [],
                                        regionChanged: !1,
                                        timesRegionChanged: 0,
                                        sendingMessages: !1,
                                        messages: [],
                                        messagesPosted: [],
                                        messagesReceived: [],
                                        messageSendingInterval: K.POST_MESSAGE_ENABLED ? null : 100,
                                        onPageDestinationsFired: [],
                                        jsonForComparison: [],
                                        jsonDuplicates: [],
                                        jsonWaiting: [],
                                        jsonProcessed: [],
                                        canSetThirdPartyCookies: !0,
                                        receivedThirdPartyCookiesNotification: !1,
                                        readyToAttachIframePreliminary: function() { return !(g.idSyncDisableSyncs || g.disableIdSyncs || g.idSyncDisable3rdPartySyncing || g.disableThirdPartyCookies || g.disableThirdPartyCalls) },
                                        readyToAttachIframe: function() { return this.readyToAttachIframePreliminary() && (this.doAttachIframe || g._doAttachIframe) && (this.subdomain && "nosubdomainreturned" !== this.subdomain || g._subdomain) && this.url && !this.startedAttachingIframe },
                                        attachIframe: function() {
                                            function e() {
                                                (r = i.createElement("iframe")).sandbox = "allow-scripts allow-same-origin", r.title = "Adobe ID Syncing iFrame", r.id = n.id, r.name = n.id + "_name", r.style.cssText = "display: none; width: 0; height: 0;", r.src = n.url, n.newIframeCreated = !0, t(), i.body.appendChild(r) }

                                            function t(e) { r.addEventListener("load", function() { r.className = "aamIframeLoaded", n.iframeHasLoaded = !0, n.fireIframeLoadedCallbacks(e), n.requestToProcess() }) }
                                            this.startedAttachingIframe = !0; var n = this,
                                                r = i.getElementById(this.id);
                                            r ? "IFRAME" !== r.nodeName ? (this.id += "_2", this.iframeIdChanged = !0, e()) : (this.newIframeCreated = !1, "aamIframeLoaded" !== r.className ? (this.originalIframeHasLoadedAlready = !1, t("The destination publishing iframe already exists from a different library, but hadn't loaded yet.")) : (this.originalIframeHasLoadedAlready = !0, this.iframeHasLoaded = !0, this.iframe = r, this.fireIframeLoadedCallbacks("The destination publishing iframe already exists from a different library, and had loaded alresady."), this.requestToProcess())) : e(), this.iframe = r },
                                        fireIframeLoadedCallbacks: function(t) { this.iframeLoadedCallbacks.forEach(function(e) { "function" == typeof e && e({ message: t || "The destination publishing iframe was attached and loaded successfully." }) }), this.iframeLoadedCallbacks = [] },
                                        requestToProcess: function(e) {
                                            function t() { r.jsonForComparison.push(e), r.jsonWaiting.push(e), r.processSyncOnPage(e) } var n, r = this; if (e === Object(e) && e.ibs)
                                                if (n = JSON.stringify(e.ibs || []), this.jsonForComparison.length) { var i, a, o, s = !1; for (i = 0, a = this.jsonForComparison.length; i < a; i++)
                                                        if (o = this.jsonForComparison[i], n === JSON.stringify(o.ibs || [])) { s = !0; break }
                                                    s ? this.jsonDuplicates.push(e) : t() } else t();
                                            if ((this.receivedThirdPartyCookiesNotification || !K.POST_MESSAGE_ENABLED || this.iframeHasLoaded) && this.jsonWaiting.length) { var c = this.jsonWaiting.shift();
                                                this.process(c), this.requestToProcess() }
                                            g.idSyncDisableSyncs || g.disableIdSyncs || !this.iframeHasLoaded || !this.messages.length || this.sendingMessages || (this.throttleTimerSet || (this.throttleTimerSet = !0, setTimeout(function() { r.messageSendingInterval = K.POST_MESSAGE_ENABLED ? null : 150 }, this.THROTTLE_START)), this.sendingMessages = !0, this.sendMessages()) },
                                        getRegionAndCheckIfChanged: function(e, t) { var n = g._getField("MCAAMLH"),
                                                r = e.d_region || e.dcs_region; return n ? r && (g._setFieldExpire("MCAAMLH", t), g._setField("MCAAMLH", r), parseInt(n, 10) !== r && (this.regionChanged = !0, this.timesRegionChanged++, g._setField("MCSYNCSOP", ""), g._setField("MCSYNCS", ""), n = r)) : (n = r) && (g._setFieldExpire("MCAAMLH", t), g._setField("MCAAMLH", n)), n || (n = ""), n },
                                        processSyncOnPage: function(e) { var t, n, r, i; if ((t = e.ibs) && t instanceof Array && (n = t.length))
                                                for (r = 0; r < n; r++)(i = t[r]).syncOnPage && this.checkFirstPartyCookie(i, "", "syncOnPage") },
                                        process: function(e) { var t, n, r, i, a, o = encodeURIComponent,
                                                s = !1; if ((t = e.ibs) && t instanceof Array && (n = t.length))
                                                for (s = !0, r = 0; r < n; r++) i = t[r], a = [o("ibs"), o(i.id || ""), o(i.tag || ""), B.encodeAndBuildRequest(i.url || [], ","), o(i.ttl || ""), "", "", i.fireURLSync ? "true" : "false"], i.syncOnPage || (this.canSetThirdPartyCookies ? this.addMessage(a.join("|")) : i.fireURLSync && this.checkFirstPartyCookie(i, a.join("|")));
                                            s && this.jsonProcessed.push(e) },
                                        checkFirstPartyCookie: function(e, t, n) { var r = "syncOnPage" === n,
                                                i = r ? "MCSYNCSOP" : "MCSYNCS";
                                            g._readVisitor(); var a, o, s = g._getField(i),
                                                c = !1,
                                                l = !1,
                                                u = Math.ceil((new Date).getTime() / K.MILLIS_PER_DAY);
                                            s ? (a = s.split("*"), c = (o = this.pruneSyncData(a, e.id, u)).dataPresent, l = o.dataValid, c && l || this.fireSync(r, e, t, a, i, u)) : (a = [], this.fireSync(r, e, t, a, i, u)) },
                                        pruneSyncData: function(e, t, n) { var r, i, a, o = !1,
                                                s = !1; for (i = 0; i < e.length; i++) r = e[i], a = parseInt(r.split("-")[1], 10), r.match("^" + t + "-") ? (o = !0, n < a ? s = !0 : (e.splice(i, 1), i--)) : a <= n && (e.splice(i, 1), i--); return { dataPresent: o, dataValid: s } },
                                        manageSyncsSize: function(e) { if (e.join("*").length > this.MAX_SYNCS_LENGTH)
                                                for (e.sort(function(e, t) { return parseInt(e.split("-")[1], 10) - parseInt(t.split("-")[1], 10) }); e.join("*").length > this.MAX_SYNCS_LENGTH;) e.shift() },
                                        fireSync: function(e, t, n, r, u, i) { var d = this; if (e) { if ("img" === t.tag) { var a, o, s, c, l = t.url,
                                                        f = g.loadSSL ? "https:" : "http:"; for (a = 0, o = l.length; a < o; a++) { s = l[a], c = /^\/\//.test(s); var p = new Image;
                                                        p.addEventListener("load", function(o, s, c, l) { return function() { d.onPagePixels[o] = null, g._readVisitor(); var e, t, n, r, i = g._getField(u),
                                                                    a = []; if (i)
                                                                    for (t = 0, n = (e = i.split("*")).length; t < n; t++)(r = e[t]).match("^" + s.id + "-") || a.push(r);
                                                                d.setSyncTrackingData(a, s, c, l) } }(this.onPagePixels.length, t, u, i)), p.src = (c ? f : "") + s, this.onPagePixels.push(p) } } } else this.addMessage(n), this.setSyncTrackingData(r, t, u, i) },
                                        addMessage: function(e) { var t = encodeURIComponent(g._enableErrorReporting ? "---destpub-debug---" : "---destpub---");
                                            this.messages.push((K.POST_MESSAGE_ENABLED ? "" : t) + e) },
                                        setSyncTrackingData: function(e, t, n, r) { e.push(t.id + "-" + (r + Math.ceil(t.ttl / 60 / 24))), this.manageSyncsSize(e), g._setField(n, e.join("*")) },
                                        sendMessages: function() {
                                            var e, t = this,
                                                n = "",
                                                r = encodeURIComponent;
                                            this.regionChanged && (n = r("---destpub-clear-dextp---"), this.regionChanged = !1), this.messages.length ? K.POST_MESSAGE_ENABLED ? (e = n + r(
                                                "---destpub-combined---") + this.messages.join("%01"), this.postMessage(e), this.messages = [], this.sendingMessages = !1) : (e = this.messages.shift(), this.postMessage(n + e), setTimeout(function() { t.sendMessages() }, this.messageSendingInterval)) : this.sendingMessages = !1
                                        },
                                        postMessage: function(e) { z.postMessage(e, this.url, this.iframe.contentWindow), this.messagesPosted.push(e) },
                                        receiveMessage: function(e) { var t, n = /^---destpub-to-parent---/; "string" == typeof e && n.test(e) && ("canSetThirdPartyCookies" === (t = e.replace(n, "").split("|"))[0] && (this.canSetThirdPartyCookies = "true" === t[1], this.receivedThirdPartyCookiesNotification = !0, this.requestToProcess()), this.messagesReceived.push(e)) },
                                        processIDCallData: function(e) {
                                            (null == this.url || e.subdomain && "nosubdomainreturned" === this.subdomain) && ("string" == typeof g._subdomain && g._subdomain.length ? this.subdomain = g._subdomain : this.subdomain = e.subdomain || "", this.url = this.getUrl()), e.ibs instanceof Array && e.ibs.length && (this.doAttachIframe = !0), this.readyToAttachIframe() && (g.idSyncAttachIframeOnWindowLoad ? (t.windowLoaded || "complete" === i.readyState || "loaded" === i.readyState) && this.attachIframe() : this.attachIframeASAP()), "function" == typeof g.idSyncIDCallResult ? g.idSyncIDCallResult(e) : this.requestToProcess(e), "function" == typeof g.idSyncAfterIDCallResult && g.idSyncAfterIDCallResult(e) },
                                        canMakeSyncIDCall: function(e, t) { return g._forceSyncIDCall || !e || t - e > K.DAYS_BETWEEN_SYNC_ID_CALLS },
                                        attachIframeASAP: function() {
                                            function e() { t.startedAttachingIframe || (i.body ? t.attachIframe() : setTimeout(e, 30)) } var t = this;
                                            e() }
                                    }
                                },
                                Z = { audienceManagerServer: {}, audienceManagerServerSecure: {}, cookieDomain: {}, cookieLifetime: {}, cookieName: {}, doesOptInApply: {}, disableThirdPartyCalls: {}, discardTrackingServerECID: {}, idSyncAfterIDCallResult: {}, idSyncAttachIframeOnWindowLoad: {}, idSyncContainerID: {}, idSyncDisable3rdPartySyncing: {}, disableThirdPartyCookies: {}, idSyncDisableSyncs: {}, disableIdSyncs: {}, idSyncIDCallResult: {}, idSyncSSLUseAkamai: {}, isCoopSafe: {}, isIabContext: {}, isOptInStorageEnabled: {}, loadSSL: {}, loadTimeout: {}, marketingCloudServer: {}, marketingCloudServerSecure: {}, optInCookieDomain: {}, optInStorageExpiry: {}, overwriteCrossDomainMCIDAndAID: {}, preOptInApprovals: {}, previousPermissions: {}, resetBeforeVersion: {}, sdidParamExpiry: {}, serverState: {}, sessionCookieName: {}, secureCookie: {}, takeTimeoutMetrics: {}, trackingServer: {}, trackingServerSecure: {}, whitelistIframeDomains: {}, whitelistParentDomain: {} },
                                ee = { getConfigNames: function() { return Object.keys(Z) }, getConfigs: function() { return Z }, normalizeConfig: function(e) { return "function" != typeof e ? e : e() } },
                                te = function(e) { var i = {}; return e.on = function(e, t, n) { if (!t || "function" != typeof t) throw new Error("[ON] Callback should be a function.");
                                        i.hasOwnProperty(e) || (i[e] = []); var r = i[e].push({ callback: t, context: n }) - 1; return function() { i[e].splice(r, 1), i[e].length || delete i[e] } }, e.off = function(e, t) { i.hasOwnProperty(e) && (i[e] = i[e].filter(function(e) { if (e.callback !== t) return e })) }, e.publish = function(e) { if (i.hasOwnProperty(e)) { var t = [].slice.call(arguments, 1);
                                            i[e].slice(0).forEach(function(e) { e.callback.apply(e.context, t) }) } }, e.publish },
                                ne = { PENDING: "pending", CHANGED: "changed", COMPLETE: "complete" },
                                re = { AAM: "aam", ADCLOUD: "adcloud", ANALYTICS: "aa", CAMPAIGN: "campaign", ECID: "ecid", LIVEFYRE: "livefyre", TARGET: "target", MEDIA_ANALYTICS: "mediaaa" },
                                ie = (e(m = {}, re.AAM, 565), e(m, re.ECID, 565), m),
                                ae = (e(h = {}, re.AAM, [1, 2, 5]), e(h, re.ECID, [1, 2, 5]), h),
                                oe = (b = re, Object.keys(b).map(function(e) { return b[e] })),
                                se = function() { var r = {}; return r.callbacks = Object.create(null), r.add = function(e, t) { if (!c(t)) throw new Error("[callbackRegistryFactory] Make sure callback is a function or an array of functions.");
                                        r.callbacks[e] = r.callbacks[e] || []; var n = r.callbacks[e].push(t) - 1; return function() { r.callbacks[e].splice(n, 1) } }, r.execute = function(e, t) { if (r.callbacks[e]) { t = (t = void 0 === t ? [] : t) instanceof Array ? t : [t]; try { for (; r.callbacks[e].length;) { var n = r.callbacks[e].shift(); "function" == typeof n ? n.apply(null, t) : n instanceof Array && n[1].apply(n[0], t) }
                                                delete r.callbacks[e] } catch (r) {} } }, r.executeAll = function(n, e) {
                                        (e || n && !s(n)) && Object.keys(r.callbacks).forEach(function(e) { var t = void 0 !== n[e] ? n[e] : "";
                                            r.execute(e, t) }, r) }, r.hasCallbacks = function() { return Boolean(Object.keys(r.callbacks).length) }, r },
                                ce = function() {},
                                le = function(e) { var t = window.console; return !!t && "function" == typeof t[e] },
                                ue = function(r, i, e) { return e() ? function() { if (le(r)) { for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                                            console[r].apply(console, [i].concat(t)) } } : ce },
                                de = new r("[ADOBE OPT-IN]"),
                                fe = function(e, t) { return R(e) === t },
                                pe = function(e, t) { return e instanceof Array ? e : fe(e, "string") ? [e] : t || [] },
                                ge = function(t) { var e = Object.keys(t); return !!e.length && e.every(function(e) { return !0 === t[e] }) },
                                me = function(e) { return !(!e || ve(e)) && pe(e).every(function(e) { return -1 < oe.indexOf(e) }) },
                                he = function(e, n) { return e.reduce(function(e, t) { return e[t] = n, e }, {}) },
                                be = function(e) { return JSON.parse(JSON.stringify(e)) },
                                ve = function(e) { return "[object Array]" === Object.prototype.toString.call(e) && !e.length },
                                ye = function(e) { if (Se(e)) return e; try { return JSON.parse(e) } catch (e) { return {} } },
                                Ie = function(e) { return void 0 === e || (Se(e) ? me(Object.keys(e)) : _e(e)) },
                                _e = function(e) { try { var t = JSON.parse(e); return !!e && fe(e, "string") && me(Object.keys(t)) } catch (e) { return !1 } },
                                Se = function(e) { return null !== e && fe(e, "object") && !1 === Array.isArray(e) },
                                Ce = function() {},
                                ke = function(e) { return fe(e, "function") ? e() : e },
                                Oe = function(e, t) { Ie(e) || de.error("".concat(t)) },
                                Pe = function(t) { return Object.keys(t).map(function(e) { return t[e] }) },
                                Ae = function(e) { return Pe(e).filter(function(e, t, n) { return n.indexOf(e) === t }) },
                                De = function(d) { return function(e) { var t = 0 < arguments.length && void 0 !== e ? arguments[0] : {},
                                            n = t.command,
                                            r = t.params,
                                            i = void 0 === r ? {} : r,
                                            a = t.callback,
                                            o = void 0 === a ? Ce : a; if (!n || -1 === n.indexOf(".")) throw new Error("[OptIn.execute] Please provide a valid command."); try { var s = n.split("."),
                                                c = d[s[0]],
                                                l = s[1]; if (!c || "function" != typeof c[l]) throw new Error("Make sure the plugin and API name exist."); var u = Object.assign(i, { callback: o });
                                            c[l].call(c, u) } catch (d) { de.error("[execute] Something went wrong: " + d.message) } } };
                            u.prototype = Object.create(Error.prototype), u.prototype.constructor = u;
                            var Te = "fetchPermissions",
                                Ee = "[OptIn#registerPlugin] Plugin is invalid.";
                            d.Categories = re, d.TimeoutError = u;
                            var we = Object.freeze({ OptIn: d, IabPlugin: g }),
                                Me = function(d, f) { d.publishDestinations = function(e, t, n) { var r = t,
                                            i = n; try { i = "function" == typeof i ? i : e.callback } catch (d) { i = function() {} } var a = f; if (a.readyToAttachIframePreliminary()) { if ("string" == typeof e) { if (!e.length) return void i({ error: "subdomain is not a populated string." }); if (!(r instanceof Array && r.length)) return void i({ error: "messages is not a populated array." }); var o = !1; if (r.forEach(function(e) { "string" == typeof e && e.length && (a.addMessage(e), o = !0) }), !o) return void i({ error: "None of the messages are populated strings." }) } else { if (!B.isObject(e)) return void i({ error: "Invalid parameters passed." }); var s = e; if ("string" != typeof(e = s.subdomain) || !e.length) return void i({ error: "config.subdomain is not a populated string." }); var c = s.urlDestinations; if (!(c instanceof Array && c.length)) return void i({ error: "config.urlDestinations is not a populated array." }); var l = [];
                                                c.forEach(function(e) { B.isObject(e) && (e.hideReferrer ? e.message && a.addMessage(e.message) : l.push(e)) }),
                                                    function u() { l.length && setTimeout(function() { var e = new Image,
                                                                t = l.shift();
                                                            e.src = t.url, a.onPageDestinationsFired.push(t), u() }, 100) }() }
                                            a.iframe ? (i({ message: "The destination publishing iframe is already attached and loaded." }), a.requestToProcess()) : !d.subdomain && d._getField("MCMID") ? (a.subdomain = e, a.doAttachIframe = !0, a.url = a.getUrl(), a.readyToAttachIframe() ? (a.iframeLoadedCallbacks.push(function(e) { i({ message: "Attempted to attach and load the destination publishing iframe through this API call. Result: " + (e.message || "no result") }) }), a.attachIframe()) : i({ error: "Encountered a problem in attempting to attach and load the destination publishing iframe through this API call." })) : a.iframeLoadedCallbacks.push(function(e) { i({ message: "Attempted to attach and load the destination publishing iframe through normal Visitor API processing. Result: " + (e.message || "no result") }) }) } else i({ error: "The destination publishing iframe is disabled in the Visitor library." }) } },
                                je = function R(e) {
                                    function t(e, t) { return e >>> t | e << 32 - t } for (var n, r, i = Math.pow, a = i(2, 32), o = "", s = [], c = 8 * e.length, l = R.h = R.h || [], u = R.k = R.k || [], d = u.length, f = {}, p = 2; d < 64; p++)
                                        if (!f[p]) { for (n = 0; n < 313; n += p) f[n] = p;
                                            l[d] = i(p, .5) * a | 0, u[d++] = i(p, 1 / 3) * a | 0 }
                                    for (e += "\x80"; e.length % 64 - 56;) e += "\0"; for (n = 0; n < e.length; n++) { if ((r = e.charCodeAt(n)) >> 8) return;
                                        s[n >> 2] |= r << (3 - n) % 4 * 8 } for (s[s.length] = c / a | 0, s[s.length] = c, r = 0; r < s.length;) { var g = s.slice(r, r += 16),
                                            m = l; for (l = l.slice(0, 8), n = 0; n < 64; n++) { var h = g[n - 15],
                                                b = g[n - 2],
                                                v = l[0],
                                                y = l[4],
                                                I = l[7] + (t(y, 6) ^ t(y, 11) ^ t(y, 25)) + (y & l[5] ^ ~y & l[6]) + u[n] + (g[n] = n < 16 ? g[n] : g[n - 16] + (t(h, 7) ^ t(h, 18) ^ h >>> 3) + g[n - 7] + (t(b, 17) ^ t(b, 19) ^ b >>> 10) | 0);
                                            (l = [I + ((t(v, 2) ^ t(v, 13) ^ t(v, 22)) + (v & l[1] ^ v & l[2] ^ l[1] & l[2])) | 0].concat(l))[4] = l[4] + I | 0 } for (n = 0; n < 8; n++) l[n] = l[n] + m[n] | 0 } for (n = 0; n < 8; n++)
                                        for (r = 3; r + 1; r--) { var _ = l[n] >> 8 * r & 255;
                                            o += (_ < 16 ? 0 : "") + _.toString(16) }
                                    return o },
                                xe = function(e, t) { return "SHA-256" !== t && "SHA256" !== t && "sha256" !== t && "sha-256" !== t || (e = je(e)), e },
                                Le = function(e) { return String(e).trim().toLowerCase() },
                                Fe = we.OptIn;
                            B.defineGlobalNamespace(), window.adobe.OptInCategories = Fe.Categories;
                            var Re = function(r, n, e) {
                                function t(e) { var r = e; return function(e) { var t = e || y.location.href; try { var n = g._extractParamFromUri(t, r); if (n) return j.parsePipeDelimetedKeyValues(n) } catch (e) {} } }

                                function i(e) {
                                    function t(e, t, n) { e && e.match(K.VALID_VISITOR_ID_REGEX) && (n === S && (v = !0), t(e)) }
                                    t(e[S], g.setMarketingCloudVisitorID, S), g._setFieldExpire(A, -1), t(e[O], g.setAnalyticsVisitorID) }

                                function a(e) { e = e || {}, g._supplementalDataIDCurrent = e.supplementalDataIDCurrent || "", g._supplementalDataIDCurrentConsumed = e.supplementalDataIDCurrentConsumed || {}, g._supplementalDataIDLast = e.supplementalDataIDLast || "", g._supplementalDataIDLastConsumed = e.supplementalDataIDLastConsumed || {} }

                                function o(e) {
                                    function i(e, t, n) { return (n = n ? n += "|" : n) + (e + "=") + encodeURIComponent(t) }

                                    function t(e, t) { var n = t[0],
                                            r = t[1]; return null != r && r !== D && (e = i(n, r, e)), e } var n, r = e.reduce(t, ""); return (n = (n = r) ? n += "|" : n) + "TS=" + j.getTimestampInSeconds() }

                                function s(e) { var t = e.minutesToLive,
                                        n = ""; return (g.idSyncDisableSyncs || g.disableIdSyncs) && (n = n || "Error: id syncs have been disabled"), "string" == typeof e.dpid && e.dpid.length || (n = n || "Error: config.dpid is empty"), "string" == typeof e.url && e.url.length || (n = n || "Error: config.url is empty"), void 0 === t ? t = 20160 : (t = parseInt(t, 10), (isNaN(t) || t <= 0) && (n = n || "Error: config.minutesToLive needs to be a positive number")), { error: n, ttl: t } }

                                function c() { return !(!g.configs.doesOptInApply || m.optIn.isComplete && d()) }

                                function d() { return g.configs.doesOptInApply && g.configs.isIabContext ? m.optIn.isApproved(m.optIn.Categories.ECID) && b : m.optIn.isApproved(m.optIn.Categories.ECID) }

                                function l() {
                                    [
                                        ["getMarketingCloudVisitorID"],
                                        ["setCustomerIDs", void 0],
                                        ["getAnalyticsVisitorID"],
                                        ["getAudienceManagerLocationHint"],
                                        ["getLocationHint"],
                                        ["getAudienceManagerBlob"]
                                    ].forEach(function(e) { var t = e[0],
                                            n = 2 === e.length ? e[1] : "",
                                            r = g[t];
                                        g[t] = function(e) { return d() && g.isAllowed() ? r.apply(g, arguments) : ("function" == typeof e && g._callCallback(e, [n]), n) } }) }

                                function u(e, t) { if (b = !0, e) throw new Error("[IAB plugin] : " + e);
                                    t.gdprApplies && (h = t.consentString), g.init(), p() }

                                function f() { m.optIn.isComplete && (m.optIn.isApproved(m.optIn.Categories.ECID) ? g.configs.isIabContext ? m.optIn.execute({ command: "iabPlugin.fetchConsentData", callback: u }) : (g.init(), p()) : (l(), p())) }

                                function p() { m.optIn.off("complete", f) }
                                if (!e || e.split("").reverse().join("") !== r) throw new Error("Please use `Visitor.getInstance` to instantiate Visitor.");
                                var g = this,
                                    m = window.adobe,
                                    h = "",
                                    b = !1,
                                    v = !1;
                                g.version = "4.6.0";
                                var y = N,
                                    I = y.Visitor;
                                I.version = g.version, I.AuthState = V.AUTH_STATE, I.OptOut = V.OPT_OUT, y.s_c_in || (y.s_c_il = [], y.s_c_in = 0), g._c = "Visitor", g._il = y.s_c_il, g._in = y.s_c_in, g._il[g._in] = g, y.s_c_in++, g._instanceType = "regular", g._log = { requests: [] }, g.marketingCloudOrgID = r, g.cookieName = "AMCV_" + r, g.sessionCookieName = "AMCVS_" + r, g.cookieDomain = W(), g.loadSSL = !0, g.loadTimeout = 3e4, g.CORSErrors = [], g.marketingCloudServer = g.audienceManagerServer = "dpm.demdex.net", g.sdidParamExpiry = 30;
                                var _ = null,
                                    S = "MCMID",
                                    C = "MCIDTS",
                                    k = "A",
                                    O = "MCAID",
                                    P = "AAM",
                                    A = "MCAAMB",
                                    D = "NONE",
                                    T = function(e) { return !Object.prototype[e] },
                                    E = Q(g);
                                g.FIELDS = V.FIELDS, g.cookieRead = function(e) { return q.get(e) }, g.cookieWrite = function(e, t, n) { var r = g.cookieLifetime ? ("" + g.cookieLifetime).toUpperCase() : "",
                                        i = !1; return g.configs && g.configs.secureCookie && "https:" === location.protocol && (i = !0), q.set(e, "" + t, { expires: n, domain: g.cookieDomain, cookieLifetime: r, secure: i }) }, g.resetState = function(e) { e ? g._mergeServerState(e) : a() }, g._isAllowedDone = !1, g._isAllowedFlag = !1, g.isAllowed = function() { return g._isAllowedDone || (g._isAllowedDone = !0, (g.cookieRead(g.cookieName) || g.cookieWrite(g.cookieName, "T", 1)) && (g._isAllowedFlag = !0)), "T" === g.cookieRead(g.cookieName) && g._helpers.removeCookie(g.cookieName), g._isAllowedFlag }, g.setMarketingCloudVisitorID = function(e) { g._setMarketingCloudFields(e) }, g._use1stPartyMarketingCloudServer = !1, g.getMarketingCloudVisitorID = function(e, t) { g.marketingCloudServer && g.marketingCloudServer.indexOf(".demdex.net") < 0 && (g._use1stPartyMarketingCloudServer = !0); var n = g._getAudienceManagerURLData("_setMarketingCloudFields"),
                                        r = n.url; return g._getRemoteField(S, r, e, t, n) };
                                var w = function(t, e) { var n = {};
                                    g.getMarketingCloudVisitorID(function() { e.forEach(function(e) { n[e] = g._getField(e, !0) }), -1 !== e.indexOf("MCOPTOUT") ? g.isOptedOut(function(e) { n.MCOPTOUT = e, t(n) }, null, !0) : t(n) }, !0) };
                                g.getVisitorValues = function(e, t) { var n = { MCMID: { fn: g.getMarketingCloudVisitorID, args: [!0], context: g }, MCOPTOUT: { fn: g.isOptedOut, args: [void 0, !0], context: g }, MCAID: { fn: g.getAnalyticsVisitorID, args: [!0], context: g }, MCAAMLH: { fn: g.getAudienceManagerLocationHint, args: [!0], context: g }, MCAAMB: { fn: g.getAudienceManagerBlob, args: [!0], context: g } },
                                        r = t && t.length ? B.pluck(n, t) : n;
                                    t && -1 === t.indexOf("MCAID") ? w(e, t) : G(r, e) }, g._currentCustomerIDs = {}, g._customerIDsHashChanged = !1, g._newCustomerIDsHash = "", g.setCustomerIDs = function(e, t) {
                                    function n() { g._customerIDsHashChanged = !1 } if (!g.isOptedOut() && e) { if (!B.isObject(e) || B.isObjectEmpty(e)) return !1; var r, i, a; for (r in g._readVisitor(), e)
                                            if (T(r) && (t = (i = e[r]).hasOwnProperty("hashType") ? i.hashType : t, i))
                                                if ("object" === R(i)) { var o = {}; if (i.id) { if (t) { if (!(a = xe(Le(i.id), t))) return;
                                                            i.id = a, o.hashType = t }
                                                        o.id = i.id }
                                                    null != i.authState && (o.authState = i.authState), g._currentCustomerIDs[r] = o } else if (t) { if (!(a = xe(Le(i), t))) return;
                                            g._currentCustomerIDs[r] = { id: a, hashType: t } } else g._currentCustomerIDs[r] = { id: i }; var s = g.getCustomerIDs(),
                                            c = g._getField("MCCIDH"),
                                            l = ""; for (r in c || (c = 0), s) T(r) && (l += (l ? "|" : "") + r + "|" + ((i = s[r]).id ? i.id : "") + (i.authState ? i.authState : ""));
                                        g._newCustomerIDsHash = String(g._hash(l)), g._newCustomerIDsHash !== c && (g._customerIDsHashChanged = !0, g._mapCustomerIDs(n)) } }, g.getCustomerIDs = function() { g._readVisitor(); var e, t, n = {}; for (e in g._currentCustomerIDs) T(e) && (t = g._currentCustomerIDs[e]).id && (n[e] || (n[e] = {}), n[e].id = t.id, null != t.authState ? n[e].authState = t.authState : n[e].authState = I.AuthState.UNKNOWN, t.hashType && (n[e].hashType = t.hashType)); return n }, g.setAnalyticsVisitorID = function(e) { g._setAnalyticsFields(e) }, g.getAnalyticsVisitorID = function(e, t, n) { if (!j.isTrackingServerPopulated() && !n) return g._callCallback(e, [""]), ""; var r = ""; if (n || (r = g.getMarketingCloudVisitorID(function() { g.getAnalyticsVisitorID(e, !0) })), r || n) { var i = n ? g.marketingCloudServer : g.trackingServer,
                                            a = "";
                                        g.loadSSL && (n ? g.marketingCloudServerSecure && (i = g.marketingCloudServerSecure) : g.trackingServerSecure && (i = g.trackingServerSecure)); var o = {}; if (i) { var s = "http" + (g.loadSSL ? "s" : "") + "://" + i + "/id",
                                                c = "d_visid_ver=" + g.version + "&mcorgid=" + encodeURIComponent(g.marketingCloudOrgID) + (r ? "&mid=" + encodeURIComponent(r) : "") + (g.idSyncDisable3rdPartySyncing || g.disableThirdPartyCookies ? "&d_coppa=true" : ""),
                                                l = ["s_c_il", g._in, "_set" + (n ? "MarketingCloud" : "Analytics") + "Fields"];
                                            a = s + "?" + c + "&callback=s_c_il%5B" + g._in + "%5D._set" + (n ? "MarketingCloud" : "Analytics") + "Fields", o.corsUrl = s + "?" + c, o.callback = l } return o.url = a, g._getRemoteField(n ? S : O, a, e, t, o) } return "" }, g.getAudienceManagerLocationHint = function(e, t) { if (g.getMarketingCloudVisitorID(function() { g.getAudienceManagerLocationHint(e, !0) })) { var n = g._getField(O); if (!n && j.isTrackingServerPopulated() && (n = g.getAnalyticsVisitorID(function() { g.getAudienceManagerLocationHint(e, !0) })), n || !j.isTrackingServerPopulated()) { var r = g._getAudienceManagerURLData(),
                                                i = r.url; return g._getRemoteField("MCAAMLH", i, e, t, r) } } return "" }, g.getLocationHint = g.getAudienceManagerLocationHint, g.getAudienceManagerBlob = function(e, t) { if (g.getMarketingCloudVisitorID(function() { g.getAudienceManagerBlob(e, !0) })) { var n = g._getField(O); if (!n && j.isTrackingServerPopulated() && (n = g.getAnalyticsVisitorID(function() { g.getAudienceManagerBlob(e, !0) })), n || !j.isTrackingServerPopulated()) { var r = g._getAudienceManagerURLData(),
                                                i = r.url; return g._customerIDsHashChanged && g._setFieldExpire(A, -1), g._getRemoteField(A, i, e, t, r) } } return "" }, g._supplementalDataIDCurrent = "", g._supplementalDataIDCurrentConsumed = {}, g._supplementalDataIDLast = "", g._supplementalDataIDLastConsumed = {};
                                var M = !(g.getSupplementalDataID = function(e, t) { g._supplementalDataIDCurrent || t || (g._supplementalDataIDCurrent = g._generateID(1)); var n = g._supplementalDataIDCurrent; return g._supplementalDataIDLast && !g._supplementalDataIDLastConsumed[e] ? (n = g._supplementalDataIDLast, g._supplementalDataIDLastConsumed[e] = !0) : n && (g._supplementalDataIDCurrentConsumed[e] && (g._supplementalDataIDLast = g._supplementalDataIDCurrent, g._supplementalDataIDLastConsumed = g._supplementalDataIDCurrentConsumed, g._supplementalDataIDCurrent = n = t ? "" : g._generateID(1), g._supplementalDataIDCurrentConsumed = {}), n && (g._supplementalDataIDCurrentConsumed[e] = !0)), n });
                                g._liberatedOptOut = null, g.getOptOut = function(e, t) { var n = g._getAudienceManagerURLData("_setMarketingCloudFields"),
                                        r = n.url; if (d()) return g._getRemoteField("MCOPTOUT", r, e, t, n); if (g._registerCallback("liberatedOptOut", e), null !== g._liberatedOptOut) return g._callAllCallbacks("liberatedOptOut", [g._liberatedOptOut]), M = !1, g._liberatedOptOut; if (M) return null;
                                    M = !0; var i = "liberatedGetOptOut"; return n.corsUrl = n.corsUrl.replace(/dpm\.demdex\.net\/id\?/, "dpm.demdex.net/optOutStatus?"), n.callback = [i], N[i] = function(e) { if (e === Object(e)) { var t, n, r = B.parseOptOut(e, t, D);
                                            t = r.optOut, n = 1e3 * r.d_ottl, g._liberatedOptOut = t, setTimeout(function() { g._liberatedOptOut = null }, n) }
                                        g._callAllCallbacks("liberatedOptOut", [t]), M = !1 }, E.fireCORS(n), null }, g.isOptedOut = function(n, r, e) { r || (r = I.OptOut.GLOBAL); var t = g.getOptOut(function(e) { var t = e === I.OptOut.GLOBAL || 0 <= e.indexOf(r);
                                        g._callCallback(n, [t]) }, e); return t ? t === I.OptOut.GLOBAL || 0 <= t.indexOf(r) : null }, g._fields = null, g._fieldsExpired = null, g._hash = function(e) { var t, n = 0; if (e)
                                        for (t = 0; t < e.length; t++) n = (n << 5) - n + e.charCodeAt(t), n &= n; return n }, g._generateID = $, g._generateLocalMID = function() { var e = g._generateID(0); return F.isClientSideMarketingCloudVisitorID = !0, e }, g._callbackList = null, g._callCallback = function(e, t) { try { "function" == typeof e ? e.apply(y, t) : e[1].apply(e[0], t) } catch (e) {} }, g._registerCallback = function(e, t) { t && (null == g._callbackList && (g._callbackList = {}), null == g._callbackList[e] && (g._callbackList[e] = []), g._callbackList[e].push(t)) }, g._callAllCallbacks = function(e, t) { if (null != g._callbackList) { var n = g._callbackList[e]; if (n)
                                            for (; 0 < n.length;) g._callCallback(n.shift(), t) } }, g._addQuerystringParam = function(e, t, n, r) { var i = encodeURIComponent(t) + "=" + encodeURIComponent(n),
                                        a = j.parseHash(e),
                                        o = j.hashlessUrl(e); if (-1 === o.indexOf("?")) return o + "?" + i + a; var s = o.split("?"),
                                        c = s[0] + "?",
                                        l = s[1]; return c + j.addQueryParamAtLocation(l, i, r) + a }, g._extractParamFromUri = function(e, t) { var n = new RegExp("[\\?&#]" + t + "=([^&#]*)").exec(e); if (n && n.length) return decodeURIComponent(n[1]) }, g._parseAdobeMcFromUrl = t(K.ADOBE_MC), g._parseAdobeMcSdidFromUrl = t(K.ADOBE_MC_SDID), g._attemptToPopulateSdidFromUrl = function(e) { var t = g._parseAdobeMcSdidFromUrl(e),
                                        n = 1e9;
                                    t && t.TS && (n = j.getTimestampInSeconds() - t.TS), t && t.SDID && t.MCORGID === r && n < g.sdidParamExpiry && (g._supplementalDataIDCurrent = t.SDID, g._supplementalDataIDCurrentConsumed.SDID_URL_PARAM = !0) }, g._attemptToPopulateIdsFromUrl = function() { var e = g._parseAdobeMcFromUrl(); if (e && e.TS) { var t = j.getTimestampInSeconds() - e.TS; if (Math.floor(t / 60) > K.ADOBE_MC_TTL_IN_MIN || e.MCORGID !== r) return;
                                        i(e) } }, g._mergeServerState = function(e) { if (e) try { if (r = e, (e = j.isObject(r) ? r : JSON.parse(r))[g.marketingCloudOrgID]) { var t = e[g.marketingCloudOrgID];
                                            n = t.customerIDs, j.isObject(n) && g.setCustomerIDs(n), a(t.sdid) } } catch (e) { throw new Error("`serverState` has an invalid format.") }
                                    var n, r }, g._timeout = null, g._loadData = function(e, t, n, r) { t = g._addQuerystringParam(t, "d_fieldgroup", e, 1), r.url = g._addQuerystringParam(r.url, "d_fieldgroup", e, 1), r.corsUrl = g._addQuerystringParam(r.corsUrl, "d_fieldgroup", e, 1), F.fieldGroupObj[e] = !0, r === Object(r) && r.corsUrl && "XMLHttpRequest" === E.corsMetadata.corsType && E.fireCORS(r, n, e) }, g._clearTimeout = function(e) { null != g._timeout && g._timeout[e] && (clearTimeout(g._timeout[e]), g._timeout[e] = 0) }, g._settingsDigest = 0, g._getSettingsDigest = function() { if (!g._settingsDigest) { var e = g.version;
                                        g.audienceManagerServer && (e += "|" + g.audienceManagerServer), g.audienceManagerServerSecure && (e += "|" + g.audienceManagerServerSecure), g._settingsDigest = g._hash(e) } return g._settingsDigest }, g._readVisitorDone = !1, g._readVisitor = function() { if (!g._readVisitorDone) { g._readVisitorDone = !0; var e, t, n, r, i, a, o = g._getSettingsDigest(),
                                            s = !1,
                                            c = g.cookieRead(g.cookieName),
                                            l = new Date; if (c || v || g.discardTrackingServerECID || (c = g.cookieRead(K.FIRST_PARTY_SERVER_COOKIE)), null == g._fields && (g._fields = {}), c && "T" !== c)
                                            for ((c = c.split("|"))[0].match(/^[\-0-9]+$/) && (parseInt(c[0], 10) !== o && (s = !0), c.shift()), c.length % 2 == 1 && c.pop(), e = 0; e < c.length; e += 2) n = (t = c[e].split("-"))[0], r = c[e + 1], 1 < t.length ? (i = parseInt(t[1], 10), a = 0 < t[1].indexOf("s")) : (i = 0, a = !1), s && ("MCCIDH" === n && (r = ""), 0 < i && (i = l.getTime() / 1e3 - 60)), n && r && (g._setField(n, r, 1), 0 < i && (g._fields["expire" + n] = i + (a ? "s" : ""), (l.getTime() >= 1e3 * i || a && !g.cookieRead(g.sessionCookieName)) && (g._fieldsExpired || (g._fieldsExpired = {}), g._fieldsExpired[n] = !0)));!g._getField(O) && j.isTrackingServerPopulated() && (c = g.cookieRead("s_vi")) && 1 < (c = c.split("|")).length && 0 <= c[0].indexOf("v1") && (0 <= (e = (r = c[1]).indexOf("[")) && (r = r.substring(0, e)), r && r.match(K.VALID_VISITOR_ID_REGEX) && g._setField(O, r)) } }, g._appendVersionTo = function(e) { var t = "vVersion|" + g.version,
                                        n = e ? g._getCookieVersion(e) : null; return n ? Y.areVersionsDifferent(n, g.version) && (e = e.replace(K.VERSION_REGEX, t)) : e += (e ? "|" : "") + t, e }, g._writeVisitor = function() { var e, t, n = g._getSettingsDigest(); for (e in g._fields) T(e) && g._fields[e] && "expire" !== e.substring(0, 6) && (t = g._fields[e], n += (n ? "|" : "") + e + (g._fields["expire" + e] ? "-" + g._fields["expire" + e] : "") + "|" + t);
                                    n = g._appendVersionTo(n), g.cookieWrite(g.cookieName, n, 1) }, g._getField = function(e, t) { return null == g._fields || !t && g._fieldsExpired && g._fieldsExpired[e] ? null : g._fields[e] }, g._setField = function(e, t, n) { null == g._fields && (g._fields = {}), g._fields[e] = t, n || g._writeVisitor() }, g._getFieldList = function(e, t) { var n = g._getField(e, t); return n ? n.split("*") : null }, g._setFieldList = function(e, t, n) { g._setField(e, t ? t.join("*") : "", n) }, g._getFieldMap = function(e, t) { var n = g._getFieldList(e, t); if (n) { var r, i = {}; for (r = 0; r < n.length; r += 2) i[n[r]] = n[r + 1]; return i } return null }, g._setFieldMap = function(e, t, n) { var r, i = null; if (t)
                                        for (r in i = [], t) T(r) && (i.push(r), i.push(t[r]));
                                    g._setFieldList(e, i, n) }, g._setFieldExpire = function(e, t, n) { var r = new Date;
                                    r.setTime(r.getTime() + 1e3 * t), null == g._fields && (g._fields = {}), g._fields["expire" + e] = Math.floor(r.getTime() / 1e3) + (n ? "s" : ""), t < 0 ? (g._fieldsExpired || (g._fieldsExpired = {}), g._fieldsExpired[e] = !0) : g._fieldsExpired && (g._fieldsExpired[e] = !1), n && (g.cookieRead(g.sessionCookieName) || g.cookieWrite(g.sessionCookieName, "1")) }, g._findVisitorID = function(e) { return e && ("object" === R(e) && (e = e.d_mid ? e.d_mid : e.visitorID ? e.visitorID : e.id ? e.id : e.uuid ? e.uuid : "" + e), e && "NOTARGET" === (e = e.toUpperCase()) && (e = D), e && (e === D || e.match(K.VALID_VISITOR_ID_REGEX)) || (e = "")), e }, g._setFields = function(e, t) { if (g._clearTimeout(e), null != g._loading && (g._loading[e] = !1), F.fieldGroupObj[e] && F.setState(e, !1), "MC" === e) {!0 !== F.isClientSideMarketingCloudVisitorID && (F.isClientSideMarketingCloudVisitorID = !1); var n = g._getField(S); if (!n || g.overwriteCrossDomainMCIDAndAID) { if (!(n = "object" === R(t) && t.mid ? t.mid : g._findVisitorID(t))) { if (g._use1stPartyMarketingCloudServer && !g.tried1stPartyMarketingCloudServer) return g.tried1stPartyMarketingCloudServer = !0, void g.getAnalyticsVisitorID(null, !1, !0);
                                                n = g._generateLocalMID() }
                                            g._setField(S, n) }
                                        n && n !== D || (n = ""), "object" === R(t) && ((t.d_region || t.dcs_region || t.d_blob || t.blob) && g._setFields(P, t), g._use1stPartyMarketingCloudServer && t.mid && g._setFields(k, { id: t.id })), g._callAllCallbacks(S, [n]) } if (e === P && "object" === R(t)) { var r = 604800;
                                        null != t.id_sync_ttl && t.id_sync_ttl && (r = parseInt(t.id_sync_ttl, 10)); var i = x.getRegionAndCheckIfChanged(t, r);
                                        g._callAllCallbacks("MCAAMLH", [i]); var a = g._getField(A);
                                        (t.d_blob || t.blob) && ((a = t.d_blob) || (a = t.blob), g._setFieldExpire(A, r), g._setField(A, a)), a || (a = ""), g._callAllCallbacks(A, [a]), !t.error_msg && g._newCustomerIDsHash && g._setField("MCCIDH", g._newCustomerIDsHash) } if (e === k) { var o = g._getField(O);
                                        o && !g.overwriteCrossDomainMCIDAndAID || ((o = g._findVisitorID(t)) ? o !== D && g._setFieldExpire(A, -1) : o = D, g._setField(O, o)), o && o !== D || (o = ""), g._callAllCallbacks(O, [o]) } if (g.idSyncDisableSyncs || g.disableIdSyncs) x.idCallNotProcesssed = !0;
                                    else { x.idCallNotProcesssed = !1; var s = {};
                                        s.ibs = t.ibs, s.subdomain = t.subdomain, x.processIDCallData(s) } if (t === Object(t)) { var c, l;
                                        d() && g.isAllowed() && (c = g._getField("MCOPTOUT")); var u = B.parseOptOut(t, c, D);
                                        c = u.optOut, l = u.d_ottl, g._setFieldExpire("MCOPTOUT", l, !0), g._setField("MCOPTOUT", c), g._callAllCallbacks("MCOPTOUT", [c]) } }, g._loading = null, g._getRemoteField = function(n, e, t, r, i) { var a, o = "",
                                        s = j.isFirstPartyAnalyticsVisitorIDCall(n),
                                        c = { MCAAMLH: !0, MCAAMB: !0 }; if (d() && g.isAllowed())
                                        if (g._readVisitor(), !(!(o = g._getField(n, !0 === c[n])) || g._fieldsExpired && g._fieldsExpired[n]) || g.disableThirdPartyCalls && !s) o || (n === S ? (g._registerCallback(n, t), o = g._generateLocalMID(), g.setMarketingCloudVisitorID(o)) : n === O ? (g._registerCallback(n, t), o = "", g.setAnalyticsVisitorID(o)) : r = !(o = ""));
                                        else if (n === S || "MCOPTOUT" === n ? a = "MC" : "MCAAMLH" === n || n === A ? a = P : n === O && (a = k), a) return !e || null != g._loading && g._loading[a] || (null == g._loading && (g._loading = {}), g._loading[a] = !0, g._loadData(a, e, function(e) { if (!g._getField(n)) { e && F.setState(a, !0); var t = "";
                                            n === S ? t = g._generateLocalMID() : a === P && (t = { error_msg: "timeout" }), g._setFields(a, t) } }, i)), g._registerCallback(n, t), o || (e || g._setFields(a, { id: D }), ""); return n !== S && n !== O || o !== D || (r = !(o = "")), t && r && g._callCallback(t, [o]), o }, g._setMarketingCloudFields = function(e) { g._readVisitor(), g._setFields("MC", e) }, g._mapCustomerIDs = function(e) { g.getAudienceManagerBlob(e, !0) }, g._setAnalyticsFields = function(e) { g._readVisitor(), g._setFields(k, e) }, g._setAudienceManagerFields = function(e) { g._readVisitor(), g._setFields(P, e) }, g._getAudienceManagerURLData = function(e) { var t = g.audienceManagerServer,
                                        n = "",
                                        r = g._getField(S),
                                        i = g._getField(A, !0),
                                        a = g._getField(O),
                                        o = a && a !== D ? "&d_cid_ic=AVID%01" + encodeURIComponent(a) : ""; if (g.loadSSL && g.audienceManagerServerSecure && (t = g.audienceManagerServerSecure), t) { var s, c, l = g.getCustomerIDs(); if (l)
                                            for (s in l) T(s) && (c = l[s], o += "&d_cid_ic=" + encodeURIComponent(s) + "%01" + encodeURIComponent(c.id ? c.id : "") + (c.authState ? "%01" + c.authState : ""));
                                        e || (e = "_setAudienceManagerFields"); var u = "http" + (g.loadSSL ? "s" : "") + "://" + t + "/id",
                                            d = "d_visid_ver=" + g.version + (h && -1 !== u.indexOf("demdex.net") ? "&gdpr=1&gdpr_force=1&gdpr_consent=" + h : "") + "&d_rtbd=json&d_ver=2" + (!r && g._use1stPartyMarketingCloudServer ? "&d_verify=1" : "") + "&d_orgid=" + encodeURIComponent(g.marketingCloudOrgID) + "&d_nsid=" + (g.idSyncContainerID || 0) + (r ? "&d_mid=" + encodeURIComponent(r) : "") + (g.idSyncDisable3rdPartySyncing || g.disableThirdPartyCookies ? "&d_coppa=true" : "") + (!0 === _ ? "&d_coop_safe=1" : !1 === _ ? "&d_coop_unsafe=1" : "") + (i ? "&d_blob=" + encodeURIComponent(i) : "") + o,
                                            f = ["s_c_il", g._in, e]; return { url: n = u + "?" + d + "&d_cb=s_c_il%5B" + g._in + "%5D." + e, corsUrl: u + "?" + d, callback: f } } return { url: n } }, g.appendVisitorIDsTo = function(e) { try { var t = [
                                            [S, g._getField(S)],
                                            [O, g._getField(O)],
                                            ["MCORGID", g.marketingCloudOrgID]
                                        ]; return g._addQuerystringParam(e, K.ADOBE_MC, o(t)) } catch (t) { return e } }, g.appendSupplementalDataIDTo = function(e, t) { if (!(t = t || g.getSupplementalDataID(j.generateRandomString(), !0))) return e; try { var n = o([
                                            ["SDID", t],
                                            ["MCORGID", g.marketingCloudOrgID]
                                        ]); return g._addQuerystringParam(e, K.ADOBE_MC_SDID, n) } catch (t) { return e } };
                                var j = { parseHash: function(e) { var t = e.indexOf("#"); return 0 < t ? e.substr(t) : "" }, hashlessUrl: function(e) { var t = e.indexOf("#"); return 0 < t ? e.substr(0, t) : e }, addQueryParamAtLocation: function(e, t, n) { var r = e.split("&"); return n = null != n ? n : r.length, r.splice(n, 0, t), r.join("&") }, isFirstPartyAnalyticsVisitorIDCall: function(e, t, n) { return e === O && (t || (t = g.trackingServer), n || (n = g.trackingServerSecure), !("string" != typeof(r = g.loadSSL ? n : t) || !r.length) && r.indexOf("2o7.net") < 0 && r.indexOf("omtrdc.net") < 0); var r }, isObject: function(e) { return Boolean(e && e === Object(e)) }, removeCookie: function(e) { q.remove(e, { domain: g.cookieDomain }) }, isTrackingServerPopulated: function() { return !!g.trackingServer || !!g.trackingServerSecure }, getTimestampInSeconds: function() { return Math.round((new Date).getTime() / 1e3) }, parsePipeDelimetedKeyValues: function(e) { return e.split("|").reduce(function(e, t) { var n = t.split("="); return e[n[0]] = decodeURIComponent(n[1]), e }, {}) }, generateRandomString: function(e) { e = e || 5; for (var t = "", n = "abcdefghijklmnopqrstuvwxyz0123456789"; e--;) t += n[Math.floor(Math.random() * n.length)]; return t }, normalizeBoolean: function(e) { return "true" === e || "false" !== e && e }, parseBoolean: function(e) { return "true" === e || "false" !== e && null }, replaceMethodsWithFunction: function(e, t) { for (var n in e) e.hasOwnProperty(n) && "function" == typeof e[n] && (e[n] = t); return e } };
                                g._helpers = j;
                                var x = X(g, I);
                                g._destinationPublishing = x, g.timeoutMetricsLog = [];
                                var L, F = { isClientSideMarketingCloudVisitorID: null, MCIDCallTimedOut: null, AnalyticsIDCallTimedOut: null, AAMIDCallTimedOut: null, fieldGroupObj: {}, setState: function(e, t) { switch (e) {
                                            case "MC":
                                                !1 === t ? !0 !== this.MCIDCallTimedOut && (this.MCIDCallTimedOut = !1) : this.MCIDCallTimedOut = t; break;
                                            case k:
                                                !1 === t ? !0 !== this.AnalyticsIDCallTimedOut && (this.AnalyticsIDCallTimedOut = !1) : this.AnalyticsIDCallTimedOut = t; break;
                                            case P:
                                                !1 === t ? !0 !== this.AAMIDCallTimedOut && (this.AAMIDCallTimedOut = !1) : this.AAMIDCallTimedOut = t } } };
                                g.isClientSideMarketingCloudVisitorID = function() { return F.isClientSideMarketingCloudVisitorID }, g.MCIDCallTimedOut = function() { return F.MCIDCallTimedOut }, g.AnalyticsIDCallTimedOut = function() { return F.AnalyticsIDCallTimedOut }, g.AAMIDCallTimedOut = function() { return F.AAMIDCallTimedOut }, g.idSyncGetOnPageSyncInfo = function() { return g._readVisitor(), g._getField("MCSYNCSOP") }, g.idSyncByURL = function(e) { if (!g.isOptedOut()) { var t = s(e || {}); if (t.error) return t.error; var n, r, i = e.url,
                                                a = encodeURIComponent,
                                                o = x; return i = i.replace(/^https:/, "").replace(/^http:/, ""), n = B.encodeAndBuildRequest(["", e.dpid, e.dpuuid || ""], ","), r = ["ibs", a(e.dpid), "img", a(i), t.ttl, "", n], o.addMessage(r.join("|")), o.requestToProcess(), "Successfully queued" } }, g.idSyncByDataSource = function(e) { if (!g.isOptedOut()) return e === Object(e) && "string" == typeof e.dpuuid && e.dpuuid.length ? (e.url = "//dpm.demdex.net/ibs:dpid=" + e.dpid + "&dpuuid=" + e.dpuuid, g.idSyncByURL(e)) : "Error: config or config.dpuuid is empty" }, Me(g, x), g._getCookieVersion = function(e) { e = e || g.cookieRead(g.cookieName); var t = K.VERSION_REGEX.exec(e); return t && 1 < t.length ? t[1] : null }, g._resetAmcvCookie = function(e) { var t = g._getCookieVersion();
                                        t && !Y.isLessThan(t, e) || j.removeCookie(g.cookieName) }, g.setAsCoopSafe = function() { _ = !0 }, g.setAsCoopUnsafe = function() { _ = !1 },
                                    function() { if (g.configs = Object.create(null), j.isObject(n))
                                            for (var e in n) T(e) && (g[e] = n[e], g.configs[e] = n[e]) }(), l(), g.init = function() {
                                        c() && (m.optIn.fetchPermissions(f, !0), !m.optIn.isApproved(m.optIn.Categories.ECID)) || L || (L = !0, function() { if (j.isObject(n)) { g.idSyncContainerID = g.idSyncContainerID || 0, _ = "boolean" == typeof g.isCoopSafe ? g.isCoopSafe : j.parseBoolean(g.isCoopSafe), g.resetBeforeVersion && g._resetAmcvCookie(g.resetBeforeVersion), g._attemptToPopulateIdsFromUrl(), g._attemptToPopulateSdidFromUrl(), g._readVisitor(); var e = g._getField(C),
                                                    t = Math.ceil((new Date).getTime() / K.MILLIS_PER_DAY);
                                                g.idSyncDisableSyncs || g.disableIdSyncs || !x.canMakeSyncIDCall(e, t) || (g._setFieldExpire(A, -1), g._setField(C, t)), g.getMarketingCloudVisitorID(), g.getAudienceManagerLocationHint(), g.getAudienceManagerBlob(), g._mergeServerState(g.serverState) } else g._attemptToPopulateIdsFromUrl(), g._attemptToPopulateSdidFromUrl() }(), function() {
                                            if (!g.idSyncDisableSyncs && !g.disableIdSyncs) {
                                                x.checkDPIframeSrc();
                                                var e = function() { var e = x;
                                                    e.readyToAttachIframe() && e.attachIframe() };
                                                y.addEventListener("load", function() { I.windowLoaded = !0, e() });
                                                try {
                                                    z.receiveMessage(function(e) {
                                                        x.receiveMessage(
                                                            e.data)
                                                    }, x.iframeHost)
                                                } catch (e) {}
                                            }
                                        }(), g.whitelistIframeDomains && K.POST_MESSAGE_ENABLED && (g.whitelistIframeDomains = g.whitelistIframeDomains instanceof Array ? g.whitelistIframeDomains : [g.whitelistIframeDomains], g.whitelistIframeDomains.forEach(function(e) { var t = new U(r, e),
                                                n = H(g, t);
                                            z.receiveMessage(n, e) })))
                                    }
                            };
                            Re.config = ee;
                            var Ne = N.Visitor = Re,
                                Ve = function(i) { if (B.isObject(i)) return Object.keys(i).filter(function(e) { return "" !== i[e] }).reduce(function(e, t) { var n = ee.normalizeConfig(i[t]),
                                            r = B.normalizeBoolean(n); return e[t] = r, e }, Object.create(null)) },
                                Be = we.OptIn,
                                Ue = we.IabPlugin;
                            Ne.getInstance = function(r, e) { if (!r) throw new Error("Visitor requires Adobe Marketing Cloud Org ID.");
                                    r.indexOf("@") < 0 && (r += "@AdobeOrg"); var t = function() { var e = N.s_c_il; if (e)
                                            for (var t = 0; t < e.length; t++) { var n = e[t]; if (n && "Visitor" === n._c && n.marketingCloudOrgID === r) return n } }(); if (t) return t; var i, n = Ve(e);
                                    i = n || {}, N.adobe.optIn = N.adobe.optIn || function() { var e = B.pluck(i, ["doesOptInApply", "previousPermissions", "preOptInApprovals", "isOptInStorageEnabled", "optInStorageExpiry", "isIabContext"]),
                                            t = i.optInCookieDomain || i.cookieDomain;
                                        t = (t = t || W()) === window.location.hostname ? "" : t, e.optInCookieDomain = t; var n = new Be(e, { cookies: q }); if (e.isIabContext && e.doesOptInApply) { var r = new Ue(window.__cmp);
                                            n.registerPlugin(r) } return n }(); var a = r.split("").reverse().join(""),
                                        o = new Ne(r, null, a);
                                    B.isObject(n) && n.cookieDomain && (o.cookieDomain = n.cookieDomain), N.s_c_il.splice(--N.s_c_in, 1); var s = B.getIeVersion(); if ("number" == typeof s && s < 10) return o._helpers.replaceMethodsWithFunction(o, function() {}); var c, l = function() { try { return N.self !== N.parent } catch (r) { return !0 } }() && ((c = o).cookieWrite("TEST_AMCV_COOKIE", "T", 1), "T" !== c.cookieRead("TEST_AMCV_COOKIE") || (c._helpers.removeCookie("TEST_AMCV_COOKIE"), 0)) && N.parent ? new w(r, n, o, N.parent) : new Ne(r, n, a); return o = null, l.init(), l },
                                function() {
                                    function e() { Ne.windowLoaded = !0 }
                                    N.addEventListener ? N.addEventListener("load", e) : N.attachEvent && N.attachEvent("onload", e), Ne.codeLoadEnd = (new Date).getTime() }()
                        }(), Visitor)
                    }
                },
                "adobe-mcid/src/view/utils/timeUnits.js": { script: function(e) { var t = { Hours: 3600, Days: 86400, Weeks: 604800, Months: 2592e3, Years: 31536e3 };
                        e.exports = t } }
            },
            settings: { orgId: "B877A5DB584931AC0A495EAA@AdobeOrg", variables: [{ name: "trackingServer", value: "cathayunitedbank.sc.omtrdc.net" }, { name: "trackingServerSecure", value: "cathayunitedbank.sc.omtrdc.net" }] },
            hostedLibFilesBaseUrl: "/welcome/Content/js/Adobe/cc42f584a971/EP203271ba588b432ab7e7431531d96152/"
        }
    },
    company: { orgId: "B877A5DB584931AC0A495EAA@AdobeOrg" },
    property: { name: "ROBO", settings: { domains: ["cathayrobo.com"], undefinedVarsReturnEmpty: !1, ruleComponentSequencingEnabled: !1 } },
    rules: [{ id: "RL0120ced76e11438c8de23e897827e442", name: "02. Invest Portfolio Overview : step 11", events: [{ modulePath: "core/src/lib/events/directCall.js", settings: { identifier: "invest-position-view" }, ruleOrder: 50 }], conditions: [], actions: [{ modulePath: "adobe-analytics/src/lib/actions/setVariables.js", settings: { customSetup: { source: function(e, t) { t.linkTrackVars = "eVar171,eVar172,events", t.linkTrackEvents = "event515", t.events = "event515", t.eVar171 = e.detail.investType, t.eVar172 = e.detail.themeName } }, trackerProperties: {} } }, { modulePath: "adobe-analytics/src/lib/actions/sendBeacon.js", settings: { type: "link", linkName: "Invest Portfolio Overview : Step 11", linkType: "o" } }, { modulePath: "adobe-analytics/src/lib/actions/clearVariables.js", settings: {} }] }, { id: "RL060706acf11f436bb1258e8df7c3c754", name: "02. Invest Portfolio Overview : step 05", events: [{ modulePath: "core/src/lib/events/click.js", settings: { elementSelector: "[aaid=rebalance-after-chart]", bubbleFireIfParent: !0, bubbleFireIfChildFired: !0 }, ruleOrder: 50 }], conditions: [], actions: [{ modulePath: "adobe-analytics/src/lib/actions/setVariables.js", settings: { trackerProperties: { events: [{ name: "event510" }] } } }, { modulePath: "adobe-analytics/src/lib/actions/sendBeacon.js", settings: { type: "link", linkName: "Invest Portfolio Overview : Step 05", linkType: "o" } }, { modulePath: "adobe-analytics/src/lib/actions/clearVariables.js", settings: {} }] }, { id: "RL07c570c9116a4a038ca4551b3c251942", name: "02. Invest Portfolio Overview : step 22", events: [{ modulePath: "core/src/lib/events/click.js", settings: { elementSelector: "[aaid=paid-fee]", bubbleFireIfParent: !0, bubbleFireIfChildFired: !0 }, ruleOrder: 50 }], conditions: [], actions: [{ modulePath: "adobe-analytics/src/lib/actions/setVariables.js", settings: { trackerProperties: { events: [{ name: "event526" }] } } }, { modulePath: "adobe-analytics/src/lib/actions/sendBeacon.js", settings: { type: "link", linkName: "Invest Portfolio Overview : Step 22", linkType: "o" } }, { modulePath: "adobe-analytics/src/lib/actions/clearVariables.js", settings: {} }] }, { id: "RL082d555498cb48c58123264deffe1a0a", name: "02. Invest Portfolio Overview : step 09", events: [{ modulePath: "core/src/lib/events/click.js", settings: { elementSelector: "[aaid=rebalance-submit]", bubbleFireIfParent: !0, bubbleFireIfChildFired: !0 }, ruleOrder: 50 }], conditions: [], actions: [{ modulePath: "adobe-analytics/src/lib/actions/setVariables.js", settings: { trackerProperties: { events: [{ name: "event514" }] } } }, { modulePath: "adobe-analytics/src/lib/actions/sendBeacon.js", settings: { type: "link", linkName: "Invest Portfolio Overview : Step 09", linkType: "o" } }, { modulePath: "adobe-analytics/src/lib/actions/clearVariables.js", settings: {} }] }, { id: "RL163cb863b89b49e2b23f28c7467dc4b3", name: "02. Invest Portfolio Overview : step 08", events: [{ modulePath: "core/src/lib/events/click.js", settings: { elementSelector: "[aaid=rebalance-adjust-detail]", bubbleFireIfParent: !0, bubbleFireIfChildFired: !0 }, ruleOrder: 50 }], conditions: [], actions: [{ modulePath: "adobe-analytics/src/lib/actions/setVariables.js", settings: { trackerProperties: { events: [{ name: "event513" }] } } }, { modulePath: "adobe-analytics/src/lib/actions/sendBeacon.js", settings: { type: "link", linkName: "Invest Portfolio Overview : Step 08", linkType: "o" } }, { modulePath: "adobe-analytics/src/lib/actions/clearVariables.js", settings: {} }] }, { id: "RL16da3125d631440aa3da182501c9ae6e", name: "01. Goal Based Investment : Step 08", events: [{ modulePath: "core/src/lib/events/click.js", settings: { elementSelector: "[aaid=invest-confirm]", bubbleFireIfParent: !0, bubbleFireIfChildFired: !0 }, ruleOrder: 50 }], conditions: [], actions: [{ modulePath: "adobe-analytics/src/lib/actions/setVariables.js", settings: { trackerProperties: { events: [{ name: "event505" }] } } }, { modulePath: "adobe-analytics/src/lib/actions/sendBeacon.js", settings: { type: "link", linkName: "Goal Based Investment : Step 08", linkType: "o" } }, { modulePath: "adobe-analytics/src/lib/actions/clearVariables.js", settings: {} }] }, { id: "RL1d0265d4ace146b4b263e43daaadf44c", name: "02. Invest Portfolio Overview : step 06", events: [{ modulePath: "core/src/lib/events/click.js", settings: { elementSelector: "[aaid=rebalance-next]", bubbleFireIfParent: !0, bubbleFireIfChildFired: !0 }, ruleOrder: 50 }], conditions: [], actions: [{ modulePath: "adobe-analytics/src/lib/actions/setVariables.js", settings: { trackerProperties: { events: [{ name: "event511" }] } } }, { modulePath: "adobe-analytics/src/lib/actions/sendBeacon.js", settings: { type: "link", linkName: "02. Invest Portfolio Overview : Step 06", linkType: "o" } }, { modulePath: "adobe-analytics/src/lib/actions/clearVariables.js", settings: {} }] }, { id: "RL233c3ae3fdc246c4b926cd33a5e40a5f", name: "02. Invest Portfolio Overview : step 21", events: [{ modulePath: "core/src/lib/events/click.js", settings: { elementSelector: "[aaid=pay-redeem-submit]", bubbleFireIfParent: !0, bubbleFireIfChildFired: !0 }, ruleOrder: 50 }], conditions: [], actions: [{ modulePath: "adobe-analytics/src/lib/actions/setVariables.js", settings: { trackerProperties: { eVars: [{ name: "eVar173", type: "value", value: "%02. Investment Portfolio Overview : Redemption Type%" }], events: [{ name: "event525" }] } } }, { modulePath: "adobe-analytics/src/lib/actions/sendBeacon.js", settings: { type: "link", linkName: "Invest Portfolio Overview : Step 21", linkType: "o" } }, { modulePath: "adobe-analytics/src/lib/actions/clearVariables.js", settings: {} }] }, { id: "RL2c2aed34962a4692aa79fa55deb5d9f1", name: "01. Goal Based Investment : Step 06", events: [{ modulePath: "core/src/lib/events/click.js", settings: { elementSelector: "[aaid=info-input-change-date]", bubbleFireIfParent: !0, bubbleFireIfChildFired: !0 }, ruleOrder: 50 }], conditions: [], actions: [{ modulePath: "adobe-analytics/src/lib/actions/setVariables.js", settings: { trackerProperties: { events: [{ name: "event503" }] } } }, { modulePath: "adobe-analytics/src/lib/actions/sendBeacon.js", settings: { type: "link", linkName: "Goal Based Investment : Step 06", linkType: "o" } }, { modulePath: "adobe-analytics/src/lib/actions/clearVariables.js", settings: {} }] }, { id: "RL2d9763f1cf224a8d867afc11916a3b41", name: "02. Invest Portfolio Overview : step 19", events: [{ modulePath: "core/src/lib/events/click.js", settings: { elementSelector: "[aaid=pay-strategy-submit]", bubbleFireIfParent: !0, bubbleFireIfChildFired: !0 }, ruleOrder: 50 }], conditions: [], actions: [{ modulePath: "adobe-analytics/src/lib/actions/setVariables.js", settings: { trackerProperties: { events: [{ name: "event523" }] } } }, { modulePath: "adobe-analytics/src/lib/actions/sendBeacon.js", settings: { type: "link", linkName: "Invest Portfolio Overview : Step 19", linkType: "o" } }, { modulePath: "adobe-analytics/src/lib/actions/clearVariables.js", settings: {} }] }, { id: "RL449cf18ecddf4cfd8b5cdfa7be62b0e1", name: "02. Invest Portfolio Overview : step 02", events: [{ modulePath: "core/src/lib/events/click.js", settings: { elementSelector: "[aaid=invest-manage-adjust]", bubbleFireIfParent: !0, bubbleFireIfChildFired: !0 }, ruleOrder: 50 }], conditions: [], actions: [{ modulePath: "adobe-analytics/src/lib/actions/setVariables.js", settings: { trackerProperties: { eVars: [{ name: "eVar170", type: "value", value: "\u9700\u8abf\u6574" }], events: [{ name: "event507" }] } } }, { modulePath: "adobe-analytics/src/lib/actions/sendBeacon.js", settings: { type: "link", linkName: "Invest Portfolio Overview : Step 02", linkType: "o" } }, { modulePath: "adobe-analytics/src/lib/actions/clearVariables.js", settings: {} }] }, { id: "RL4e466fc3def44b24b4a0a727480c7d4a", name: "02. Invest Portfolio Overview : step 13", events: [{ modulePath: "core/src/lib/events/click.js", settings: { elementSelector: "[aaid=pay-account-submit]", bubbleFireIfParent: !0, bubbleFireIfChildFired: !0 }, ruleOrder: 50 }], conditions: [], actions: [{ modulePath: "adobe-analytics/src/lib/actions/setVariables.js", settings: { trackerProperties: { events: [{ name: "event517" }] } } }, { modulePath: "adobe-analytics/src/lib/actions/sendBeacon.js", settings: { type: "link", linkName: "Invest Portfolio Overview : Step 13", linkType: "o" } }, { modulePath: "adobe-analytics/src/lib/actions/clearVariables.js", settings: {} }] }, { id: "RL5c0c7fd655dc48a285785225adc2f755", name: "02. Invest Portfolio Overview : step 15", events: [{ modulePath: "core/src/lib/events/click.js", settings: { elementSelector: "[aaid=pay-date-submit]", bubbleFireIfParent: !0, bubbleFireIfChildFired: !0 }, ruleOrder: 50 }], conditions: [], actions: [{ modulePath: "adobe-analytics/src/lib/actions/setVariables.js", settings: { trackerProperties: { events: [{ name: "event519" }] } } }, { modulePath: "adobe-analytics/src/lib/actions/sendBeacon.js", settings: { type: "link", linkName: "Invest Portfolio Overview : Step 15", linkType: "o" } }, { modulePath: "adobe-analytics/src/lib/actions/clearVariables.js", settings: {} }] }, { id: "RL6417912ef2224e7cb9d8b39976dd9829", name: "02. Invest Portfolio Overview : step 10", events: [{ modulePath: "core/src/lib/events/click.js", settings: { elementSelector: "[aaid=invest-manage]", bubbleFireIfParent: !0, bubbleFireIfChildFired: !0 }, ruleOrder: 50 }], conditions: [], actions: [{ modulePath: "adobe-analytics/src/lib/actions/setVariables.js", settings: { trackerProperties: { eVars: [{ name: "eVar170", type: "value", value: "\u6295\u8cc7\u4e2d" }], events: [{ name: "event507" }] } } }, { modulePath: "adobe-analytics/src/lib/actions/sendBeacon.js", settings: { type: "link", linkName: "Invest Portfolio Overview : Step 10", linkType: "o" } }, { modulePath: "adobe-analytics/src/lib/actions/clearVariables.js", settings: {} }] }, { id: "RL68d7ad4f338a42579f63d31b5ccd5794", name: "01. Goal Based Investment : Step 05", events: [{ modulePath: "core/src/lib/events/click.js", settings: { elementSelector: "[aaid=info-input-next-step]", bubbleFireIfParent: !0, bubbleFireIfChildFired: !0 }, ruleOrder: 50 }], conditions: [], actions: [{ modulePath: "adobe-analytics/src/lib/actions/setVariables.js", settings: { trackerProperties: { eVars: [{ name: "eVar166", type: "value", value: "%01. GBI Purchase : Input Information Page : Investment Group Review%" }, { name: "eVar167", type: "value", value: "%01. GBI Purchase : Modify %" }], events: [{ name: "event502" }] } } }, { modulePath: "adobe-analytics/src/lib/actions/sendBeacon.js", settings: { type: "link", linkName: "Goal Based Investment : Step 05", linkType: "o" } }, { modulePath: "adobe-analytics/src/lib/actions/clearVariables.js", settings: {} }] }, { id: "RL709f7160df324d05a5723da7d300890a", name: "01. Goal Based Investment : Step 07", events: [{ modulePath: "core/src/lib/events/click.js", settings: { elementSelector: "[aaid=invest-setting]", bubbleFireIfParent: !0, bubbleFireIfChildFired: !0 }, ruleOrder: 50 }], conditions: [], actions: [{ modulePath: "adobe-analytics/src/lib/actions/setVariables.js", settings: { trackerProperties: { events: [{ name: "event504" }] } } }, { modulePath: "adobe-analytics/src/lib/actions/sendBeacon.js", settings: { type: "link", linkName: "Goal Based Investment : Step 07", linkType: "o" } }, { modulePath: "adobe-analytics/src/lib/actions/clearVariables.js", settings: {} }] }, { id: "RL7bb9557a125847248c79c55b912b9048", name: "00. Site Effectiveness : Every PageView (SPA Direct Call) ", events: [{ modulePath: "core/src/lib/events/directCall.js", settings: { identifier: "every-page-view" }, ruleOrder: 50 }], conditions: [], actions: [{ modulePath: "core/src/lib/actions/customCode.js", settings: { source: "/welcome/Content/js/Adobe/cc42f584a971/RCf326fcb281f7486e86225e4b27e2d388-source.min.js", language: "javascript", isExternal: !0 } }] }, { id: "RL81bac21c17a9400780d02c3e9689c7f6", name: "00. Site Effectiveness : Every PageView (Dom Ready)", events: [{ modulePath: "core/src/lib/events/domReady.js", settings: {}, ruleOrder: 100 }], conditions: [], actions: [{ modulePath: "adobe-analytics/src/lib/actions/setVariables.js", settings: { customSetup: { source: function(e, t) { window.is404Page ? t.pageType = "Error Page" : t.pageType = "Normal Page" } }, trackerProperties: { eVars: [{ name: "eVar190", type: "value", value: "%00. Site Effectiveness : Page URL%" }, { name: "eVar191", type: "value", value: "%00. Site Effectiveness : Referring URL%" }], props: [{ name: "prop36", type: "value", value: "%00. Site Effectiveness : Page URL%" }, { name: "prop37", type: "value", value: "%00. Site Effectiveness : Referring URL%" }, { name: "prop42", type: "value", value: "%00. Site Effectiveness : ECID%" }, { name: "prop43", type: "value", value: "ROBO" }, { name: "prop44", type: "value", value: "%00. Site Effectiveness : Device Type%" }], events: [{ name: "event258" }, { name: "event528" }], pageURL: "%00. Site Effectiveness : Page URL%", pageName: "%00. Site Effectiveness : Page Name%" } } }, { modulePath: "adobe-analytics/src/lib/actions/sendBeacon.js", settings: { type: "page" } }, { modulePath: "adobe-analytics/src/lib/actions/clearVariables.js", settings: {} }] }, { id: "RL81f2f32d461540b2a2af89d87ff90fd2", name: "02. Invest Portfolio Overview : step 01", events: [{ modulePath: "core/src/lib/events/click.js", settings: { elementSelector: "[aaid=invest-adjust]", bubbleFireIfParent: !0, bubbleFireIfChildFired: !0 }, ruleOrder: 50 }], conditions: [], actions: [{ modulePath: "adobe-analytics/src/lib/actions/setVariables.js", settings: { trackerProperties: { eVars: [{ name: "eVar170", type: "value", value: "\u9700\u8abf\u6574" }], events: [{ name: "event506" }] } } }, { modulePath: "adobe-analytics/src/lib/actions/sendBeacon.js", settings: { type: "link", linkName: "Invest Portfolio Overview : Step 01", linkType: "o" } }, { modulePath: "adobe-analytics/src/lib/actions/clearVariables.js", settings: {} }] }, { id: "RL9b2ac04413ab4d88b04f8bde1a87bedb", name: "01. Goal Based Investment : Step 02", events: [{ modulePath: "core/src/lib/events/click.js", settings: { elementSelector: "[aaid=quiz-2]", bubbleFireIfParent: !0, bubbleFireIfChildFired: !0 }, ruleOrder: 50 }], conditions: [], actions: [{ modulePath: "adobe-analytics/src/lib/actions/setVariables.js", settings: { trackerProperties: { eVars: [{ name: "eVar162", type: "value", value: "%01. GBI Subscription : Question 02%" }] } } }, { modulePath: "adobe-analytics/src/lib/actions/sendBeacon.js", settings: { type: "link", linkName: "Goal Based Investment : Step 02", linkType: "o" } }, { modulePath: "adobe-analytics/src/lib/actions/clearVariables.js", settings: {} }] }, { id: "RL9b5532ac191d49b39984c8b4e593b42f", name: "02. Invest Portfolio Overview : step 04", events: [{ modulePath: "core/src/lib/events/click.js", settings: { elementSelector: "[aaid=rebalance-before-chart]", bubbleFireIfParent: !0, bubbleFireIfChildFired: !0 }, ruleOrder: 50 }], conditions: [], actions: [{ modulePath: "adobe-analytics/src/lib/actions/setVariables.js", settings: { trackerProperties: { events: [{ name: "event509" }] } } }, { modulePath: "adobe-analytics/src/lib/actions/sendBeacon.js", settings: { type: "link", linkName: "Invest Portfolio Overview : Step 04", linkType: "o" } }, { modulePath: "adobe-analytics/src/lib/actions/clearVariables.js", settings: {} }] }, { id: "RL9e42630f9efd43b6abd07f2ab18fd5be", name: "02. Invest Portfolio Overview : step 20", events: [{ modulePath: "core/src/lib/events/click.js", settings: { elementSelector: "[aaid=pay-redeem-click]", bubbleFireIfParent: !0, bubbleFireIfChildFired: !0 }, ruleOrder: 50 }], conditions: [], actions: [{ modulePath: "adobe-analytics/src/lib/actions/setVariables.js", settings: { trackerProperties: { events: [{ name: "event524" }] } } }, { modulePath: "adobe-analytics/src/lib/actions/sendBeacon.js", settings: { type: "link", linkName: "Invest Portfolio Overview : Step 20", linkType: "o" } }, { modulePath: "adobe-analytics/src/lib/actions/clearVariables.js", settings: {} }] }, { id: "RLba2f65e68c87480a85cb42756af3a733", name: "02. Invest Portfolio Overview : step 16", events: [{ modulePath: "core/src/lib/events/click.js", settings: { elementSelector: "[aaid=pay-pause-click]", bubbleFireIfParent: !0, bubbleFireIfChildFired: !0 }, ruleOrder: 50 }], conditions: [], actions: [{ modulePath: "adobe-analytics/src/lib/actions/setVariables.js", settings: { trackerProperties: { events: [{ name: "event520" }] } } }, { modulePath: "adobe-analytics/src/lib/actions/sendBeacon.js", settings: { type: "link", linkName: "Invest Portfolio Overview : Step 16", linkType: "o" } }, { modulePath: "adobe-analytics/src/lib/actions/clearVariables.js", settings: {} }] }, { id: "RLbf8ac392423143b2b01998474171247f", name: "01. Goal Based Investment : Step 04", events: [{ modulePath: "core/src/lib/events/click.js", settings: { elementSelector: "[aaid=setting-next-step]", bubbleFireIfParent: !0, bubbleFireIfChildFired: !0 }, ruleOrder: 50 }], conditions: [], actions: [{ modulePath: "adobe-analytics/src/lib/actions/setVariables.js", settings: { trackerProperties: { eVars: [{ name: "eVar164", type: "value", value: "%01. GBI Purchase : Deduction Method%" }, { name: "eVar165", type: "value", value: "%01. GBI Purchase : Adjust Fluctuations%" }, { name: "eVar169", type: "value", value: "%01. GBI Subscription : Currency%" }], events: [{ name: "event501" }] } } }, { modulePath: "adobe-analytics/src/lib/actions/sendBeacon.js", settings: { type: "link", linkName: "Goal Based Investment : Step 04", linkType: "o" } }, { modulePath: "adobe-analytics/src/lib/actions/clearVariables.js", settings: {} }] }, { id: "RLc6d176372b44450eb5930d4b86532ccb", name: "02. Invest Portfolio Overview : step 23", events: [{ modulePath: "core/src/lib/events/click.js", settings: { elementSelector: "[aaid=paid-record]", bubbleFireIfParent: !0, bubbleFireIfChildFired: !0 }, ruleOrder: 50 }], conditions: [], actions: [{ modulePath: "adobe-analytics/src/lib/actions/setVariables.js", settings: { trackerProperties: { events: [{ name: "event527" }] } } }, { modulePath: "adobe-analytics/src/lib/actions/sendBeacon.js", settings: { type: "link", linkName: "Invest Portfolio Overview : Step 23", linkType: "o" } }, { modulePath: "adobe-analytics/src/lib/actions/clearVariables.js", settings: {} }] }, { id: "RLd977f75c51b34e17b6bc4b4769c32ee0", name: "01. Goal Based Investment : Step 03", events: [{ modulePath: "core/src/lib/events/click.js", settings: { elementSelector: "[aaid=quiz-fin]", bubbleFireIfParent: !0, bubbleFireIfChildFired: !0 }, ruleOrder: 50 }], conditions: [], actions: [{ modulePath: "adobe-analytics/src/lib/actions/setVariables.js", settings: { customSetup: { source: function() { digitalData.click.robo_quizFinish } }, trackerProperties: { eVars: [{ name: "eVar163", type: "value", value: "%01. GBI Subscription : Question 03%" }] } } }, { modulePath: "adobe-analytics/src/lib/actions/sendBeacon.js", settings: { type: "link", linkName: "Goal Based Investment : Step 03", linkType: "o" } }, { modulePath: "adobe-analytics/src/lib/actions/clearVariables.js", settings: {} }] }, { id: "RLe3ca350a7a97438b924514fec39ee5e4", name: "02. Invest Portfolio Overview : step 07", events: [{ modulePath: "core/src/lib/events/click.js", settings: { elementSelector: "[aaid=rebalance-strategy-detail]", bubbleFireIfParent: !0, bubbleFireIfChildFired: !0 }, ruleOrder: 50 }], conditions: [], actions: [{ modulePath: "adobe-analytics/src/lib/actions/setVariables.js", settings: { trackerProperties: { events: [{ name: "event512" }] } } }, { modulePath: "adobe-analytics/src/lib/actions/sendBeacon.js", settings: { type: "link", linkName: "Invest Portfolio Overview : Step 07", linkType: "o" } }, { modulePath: "adobe-analytics/src/lib/actions/clearVariables.js", settings: {} }] }, { id: "RLeb8cf733bf854f79814cbb3694bab852", name: "02. Invest Portfolio Overview : step 17", events: [{ modulePath: "core/src/lib/events/click.js", settings: { elementSelector: "[aaid=pay-pause-submit]", bubbleFireIfParent: !0, bubbleFireIfChildFired: !0 }, ruleOrder: 50 }], conditions: [], actions: [{ modulePath: "adobe-analytics/src/lib/actions/setVariables.js", settings: { trackerProperties: { events: [{ name: "event521" }] } } }, { modulePath: "adobe-analytics/src/lib/actions/sendBeacon.js", settings: { type: "link", linkName: "Invest Portfolio Overview : Step 17", linkType: "o" } }, { modulePath: "adobe-analytics/src/lib/actions/clearVariables.js", settings: {} }] }, { id: "RLefc652fdb5814e0a9d31caa6f0befe22", name: "02. Invest Portfolio Overview : step 18", events: [{ modulePath: "core/src/lib/events/click.js", settings: { elementSelector: "[aaid=pay-strategy-adjust]", bubbleFireIfParent: !0, bubbleFireIfChildFired: !0 }, ruleOrder: 50 }], conditions: [], actions: [{ modulePath: "adobe-analytics/src/lib/actions/setVariables.js", settings: { trackerProperties: { events: [{ name: "event522" }] } } }, { modulePath: "adobe-analytics/src/lib/actions/sendBeacon.js", settings: { type: "link", linkName: "Invest Portfolio Overview : Step 18", linkType: "o" } }, { modulePath: "adobe-analytics/src/lib/actions/clearVariables.js", settings: {} }] }, { id: "RLf12adbc1bb9f4babbdfd46925616e6db", name: "02. Invest Portfolio Overview : step 14", events: [{ modulePath: "core/src/lib/events/click.js", settings: { elementSelector: "[aaid=pay-date]", bubbleFireIfParent: !0, bubbleFireIfChildFired: !0 }, ruleOrder: 50 }], conditions: [], actions: [{ modulePath: "adobe-analytics/src/lib/actions/setVariables.js", settings: { trackerProperties: { events: [{ name: "event518" }] } } }, { modulePath: "adobe-analytics/src/lib/actions/sendBeacon.js", settings: { type: "link", linkName: "Invest Portfolio Overview : Step 14", linkType: "o" } }, { modulePath: "adobe-analytics/src/lib/actions/clearVariables.js", settings: {} }] }, { id: "RLf1bce586b1d04b1ea714215fb6a745d3", name: "02. Invest Portfolio Overview : step 12", events: [{ modulePath: "core/src/lib/events/click.js", settings: { elementSelector: "[aaid=pay-account-adjust]", bubbleFireIfParent: !0, bubbleFireIfChildFired: !0 }, ruleOrder: 50 }], conditions: [], actions: [{ modulePath: "adobe-analytics/src/lib/actions/setVariables.js", settings: { trackerProperties: { events: [{ name: "event516" }] } } }, { modulePath: "adobe-analytics/src/lib/actions/sendBeacon.js", settings: { type: "link", linkName: "Invest Portfolio Overview : Step 12", linkType: "o" } }, { modulePath: "adobe-analytics/src/lib/actions/clearVariables.js", settings: {} }] }, { id: "RLfcc6b01e8fb741849e10477b6b212ae1", name: "01. Goal Based Investment : Step 01", events: [], conditions: [], actions: [{ modulePath: "adobe-analytics/src/lib/actions/clearVariables.js", settings: {} }] }, { id: "RLffcf2431bac9424898ec9b2dcc09cbeb", name: "02. Invest Portfolio Overview : step 03", events: [{ modulePath: "core/src/lib/events/click.js", settings: { elementSelector: "[aaid=rebalance-view]", bubbleFireIfParent: !0, bubbleFireIfChildFired: !0 }, ruleOrder: 50 }], conditions: [], actions: [{ modulePath: "adobe-analytics/src/lib/actions/setVariables.js", settings: { trackerProperties: { events: [{ name: "event508" }] } } }, { modulePath: "adobe-analytics/src/lib/actions/sendBeacon.js", settings: { type: "link", linkName: "Invest Portfolio Overview : Step 03", linkType: "o" } }, { modulePath: "adobe-analytics/src/lib/actions/clearVariables.js", settings: {} }] }]
};
var _satellite = function() {
    "use strict";

    function e(e, t) { return e(t = { exports: {} }, t.exports), t.exports }

    function t(t) { var n = this.constructor; return this.then(function(e) { return n.resolve(t()).then(function() { return e }) }, function(e) { return n.resolve(t()).then(function() { return n.reject(e) }) }) }

    function l(e) { return Boolean(e && "undefined" != typeof e.length) }

    function r() {}

    function i(e, t) { return function() { e.apply(t, arguments) } }

    function a(e) { if (!(this instanceof a)) throw new TypeError("Promises must be constructed via new"); if ("function" != typeof e) throw new TypeError("not a function");
        this._state = 0, this._handled = !1, this._value = undefined, this._deferreds = [], f(e, this) }

    function o(r, i) { for (; 3 === r._state;) r = r._value;
        0 !== r._state ? (r._handled = !0, a._immediateFn(function() { var e = 1 === r._state ? i.onFulfilled : i.onRejected; if (null !== e) { var t; try { t = e(r._value) } catch (n) { return void c(i.promise, n) }
                s(i.promise, t) } else(1 === r._state ? s : c)(i.promise, r._value) })) : r._deferreds.push(i) }

    function s(e, t) { try { if (t === e) throw new TypeError("A promise cannot be resolved with itself."); if (t && ("object" == typeof t || "function" == typeof t)) { var n = t.then; if (t instanceof a) return e._state = 3, e._value = t, void u(e); if ("function" == typeof n) return void f(i(n, t), e) }
            e._state = 1, e._value = t, u(e) } catch (r) { c(e, r) } }

    function c(e, t) { e._state = 2, e._value = t, u(e) }

    function u(e) { 2 === e._state && 0 === e._deferreds.length && a._immediateFn(function() { e._handled || a._unhandledRejectionFn(e._value) }); for (var t = 0, n = e._deferreds.length; t < n; t++) o(e, e._deferreds[t]);
        e._deferreds = null }

    function d(e, t, n) { this.onFulfilled = "function" == typeof e ? e : null, this.onRejected = "function" == typeof t ? t : null, this.promise = n }

    function f(e, t) { var n = !1; try { e(function(e) { n || (n = !0, s(t, e)) }, function(e) { n || (n = !0, c(t, e)) }) } catch (r) { if (n) return;
            n = !0, c(t, r) } }

    function p(e) { if (null === e || e === undefined) throw new TypeError("Object.assign cannot be called with null or undefined"); return Object(e) }

    function n() { try { if (!Object.assign) return !1; var e = new String("abc"); if (e[5] = "de", "5" === Object.getOwnPropertyNames(e)[0]) return !1; for (var t = {}, n = 0; n < 10; n++) t["_" + String.fromCharCode(n)] = n; if ("0123456789" !== Object.getOwnPropertyNames(t).map(function(e) { return t[e] }).join("")) return !1; var r = {}; return "abcdefghijklmnopqrst".split("").forEach(function(e) { r[e] = e }), "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, r)).join("") } catch (i) { return !1 } }

    function m(e, t) { return Object.prototype.hasOwnProperty.call(e, t) }
    if (window.atob) {
        var g = function(e) { var n = []; return e.forEach(function(t) { t.events && t.events.forEach(function(e) { n.push({ rule: t, event: e }) }) }), n.sort(function(e, t) { return e.event.ruleOrder - t.event.ruleOrder }) },
            h = "debug",
            b = function(t, e) { var n = function() { return "true" === t.getItem(h) },
                    r = function(e) { t.setItem(h, e) },
                    i = [],
                    a = function(e) { i.push(e) }; return e.outputEnabled = n(), { onDebugChanged: a, getDebugEnabled: n, setDebugEnabled: function(t) { n() !== t && (r(t), e.outputEnabled = t, i.forEach(function(e) { e(t) })) } } },
            v = "Module did not export a function.",
            y = function(a, o) { return function(e, t, n) { n = n || []; var r = a.getModuleExports(e.modulePath); if ("function" != typeof r) throw new Error(v); var i = o(e.settings || {}, t); return r.bind(null, i).apply(null, n) } },
            I = function(e) { return "string" == typeof e ? e.replace(/\s+/g, " ").trim() : e },
            _ = { LOG: "log", INFO: "info", DEBUG: "debug", WARN: "warn", ERROR: "error" },
            S = "\ud83d\ude80",
            C = 10 === parseInt((/msie (\d+)/.exec(navigator.userAgent.toLowerCase()) || [])[1]) ? "[Launch]" : S,
            k = !1,
            O = function(e) { if (k && window.console) { var t = Array.prototype.slice.call(arguments, 1);
                    t.unshift(C), e !== _.DEBUG || window.console[e] || (e = _.INFO), window.console[e].apply(window.console, t) } },
            P = O.bind(null, _.LOG),
            A = O.bind(null, _.INFO),
            D = O.bind(null, _.DEBUG),
            T = O.bind(null, _.WARN),
            E = O.bind(null, _.ERROR),
            w = { log: P, info: A, debug: D, warn: T, error: E, get outputEnabled() { return k }, set outputEnabled(e) { k = e }, createPrefixedLogger: function(e) { var t = "[" + e + "]"; return { log: P.bind(null, t), info: A.bind(null, t), debug: D.bind(null, t), warn: T.bind(null, t), error: E.bind(null, t) } } },
            M = e(function(r) {! function(e) { if (r.exports = e(), !!0) { var t = window.Cookies,
                            n = window.Cookies = e();
                        n.noConflict = function() { return window.Cookies = t, n } } }(function() {
                    function c() { for (var e = 0, t = {}; e < arguments.length; e++) { var n = arguments[e]; for (var r in n) t[r] = n[r] } return t }

                    function u(e) { return e.replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent) }

                    function e(l) {
                        function s() {}

                        function n(e, t, n) { if ("undefined" != typeof document) { "number" == typeof(n = c({ path: "/" }, s.defaults, n)).expires && (n.expires = new Date(1 * new Date + 864e5 * n.expires)), n.expires = n.expires ? n.expires.toUTCString() : ""; try { var r = JSON.stringify(t); /^[\{\[]/.test(r) && (t = r) } catch (o) {}
                                t = l.write ? l.write(t, e) : encodeURIComponent(String(t)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent), e = encodeURIComponent(String(e)).replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent).replace(/[\(\)]/g, escape); var i = ""; for (var a in n) n[a] && (i += "; " + a, !0 !== n[a] && (i += "=" + n[a].split(";")[0])); return document.cookie = e + "=" + t + i } }

                        function t(e, t) { if ("undefined" != typeof document) { for (var n = {}, r = document.cookie ? document.cookie.split("; ") : [], i = 0; i < r.length; i++) { var a = r[i].split("="),
                                        o = a.slice(1).join("=");
                                    t || '"' !== o.charAt(0) || (o = o.slice(1, -1)); try { var s = u(a[0]); if (o = (l.read || l)(o, s) || u(o), t) try { o = JSON.parse(o) } catch (c) {}
                                        if (n[s] = o, e === s) break } catch (c) {} } return e ? n[e] : n } } return s.set = n, s.get = function(e) { return t(e, !1) }, s.getJSON = function(e) { return t(e, !0) }, s.remove = function(e, t) { n(e, "", c(t, { expires: -1 })) }, s.defaults = {}, s.withConverter = e, s } return e(function() {}) }) }),
            j = { get: M.get, set: M.set, remove: M.remove },
            x = window,
            L = "com.adobe.reactor.",
            F = function(r, e) { var i = L + (e || ""); return { getItem: function(e) { try { return x[r].getItem(i + e) } catch (t) { return null } }, setItem: function(e, t) { try { return x[r].setItem(i + e, t), !0 } catch (n) { return !1 } } } },
            R = "_sdsat_",
            N = "dataElements.",
            V = "dataElementCookiesMigrated",
            B = F("localStorage"),
            U = F("sessionStorage", N),
            H = F("localStorage", N),
            G = { PAGEVIEW: "pageview", SESSION: "session", VISITOR: "visitor" },
            q = {},
            W = function(e) { var t; try { t = JSON.stringify(e) } catch (n) {} return t },
            Y = function(e, t, n) { var r; switch (t) {
                    case G.PAGEVIEW:
                        return void(q[e] = n);
                    case G.SESSION:
                        return void((r = W(n)) && U.setItem(e, r));
                    case G.VISITOR:
                        return void((r = W(n)) && H.setItem(e, r)) } },
            J = function(e, t) { var n = j.get(R + e);
                n !== undefined && Y(e, t, n) },
            z = { setValue: Y, getValue: function(e, t) { var n; switch (t) {
                        case G.PAGEVIEW:
                            return q.hasOwnProperty(e) ? q[e] : null;
                        case G.SESSION:
                            return null === (n = U.getItem(e)) ? n : JSON.parse(n);
                        case G.VISITOR:
                            return null === (n = H.getItem(e)) ? n : JSON.parse(n) } }, migrateCookieData: function(t) { B.getItem(V) || (Object.keys(t).forEach(function(e) { J(e, t[e].storageDuration) }), B.setItem(V, !0)) } },
            $ = function(e, t, n, r) { return "Failed to execute data element module " + e.modulePath + " for data element " + t + ". " + n + (r ? "\n" + r : "") },
            Q = function(e) { return e !== undefined && null !== e },
            K = function(s, c, l, u) { return function(e, t) { var n = c(e); if (!n) return u ? "" : null; var r, i = n.storageDuration; try { r = s.getModuleExports(n.modulePath) } catch (o) { return void w.error($(n, e, o.message, o.stack)) } if ("function" == typeof r) { var a; try { a = r(l(n.settings, t), t) } catch (o) { return void w.error($(n, e, o.message, o.stack)) } return i && (Q(a) ? z.setValue(e, i, a) : a = z.getValue(e, i)), Q(a) || (a = n.defaultValue || ""), "string" == typeof a && (n.cleanText && (a = I(a)), n.forceLowerCase && (a = a.toLowerCase())), a }
                    w.error($(n, e, "Module did not export a function.")) } },
            X = { text: function(e) { return e.textContent }, cleanText: function(e) { return I(e.textContent) } },
            Z = function(e, t, n) { for (var r, i = e, a = 0, o = t.length; a < o; a++) { if (null == i) return undefined; var s = t[a]; if (n && "@" === s.charAt(0)) { var c = s.slice(1);
                        i = X[c](i) } else if (i.getAttribute && (r = s.match(/^getAttribute\((.+)\)$/))) { var l = r[1];
                        i = i.getAttribute(l) } else i = i[s] } return i },
            ee = function(a, o, s) { return function(e, t) { var n; if (o(e)) n = s(e, t);
                    else { var r = e.split("."),
                            i = r.shift(); "this" === i ? t && (n = Z(t.element, r, !0)) : "event" === i ? t && (n = Z(t, r)) : "target" === i ? t && (n = Z(t.target, r)) : n = Z(a[i], r) } return n } },
            te = function(n, r) { return function(e) { var t = e.split(".")[0]; return Boolean(r(e) || "this" === t || "event" === t || "target" === t || n.hasOwnProperty(t)) } },
            ne = function(e, t, n) { var r = { exports: {} }; return e.call(r.exports, r, r.exports, t, n), r.exports },
            re = function() {
                var o = {},
                    n = function(e) { var t = o[e]; if (!t) throw new Error("Module " + e + " not found."); return t },
                    e = function() { Object.keys(o).forEach(function(e) { try { r(e) } catch (n) { var t = "Error initializing module " + e + ". " + n.message + (n.stack ? "\n" + n.stack : "");
                                w.error(t) } }) },
                    r = function(e) { var t = n(e); return t.hasOwnProperty("exports") || (t.exports = ne(t.definition.script, t.require, t.turbine)), t.exports };
                return {
                    registerModule: function(e, t, n, r, i) { var a = { definition: t, extensionName: n, require: r, turbine: i };
                        a.require = r, o[e] = a },
                    hydrateCache: e,
                    getModuleExports: r,
                    getModuleDefinition: function(e) { return n(e).definition },
                    getModuleExtensionName: function(e) { return n(e).extensionName }
                }
            },
            ie = !1,
            ae = function(r) { return function(t, n) { var e = r._monitors;
                    e && (ie || (w.warn("The _satellite._monitors API may change at any time and should only be used for debugging."), ie = !0), e.forEach(function(e) { e[t] && e[t](n) })) } },
            oe = function(i, a, o) { var n, r, s, c, l = [],
                    u = function(e, t, n) { if (!i(t)) return e;
                        l.push(t); var r = a(t, n); return l.pop(), null == r && o ? "" : r }; return n = function(e, n) { var t = /^%([^%]+)%$/.exec(e); return t ? u(e, t[1], n) : e.replace(/%(.+?)%/g, function(e, t) { return u(e, t, n) }) }, r = function(e, t) { for (var n = {}, r = Object.keys(e), i = 0; i < r.length; i++) { var a = r[i],
                                o = e[a];
                            n[a] = c(o, t) } return n }, s = function(e, t) { for (var n = [], r = 0, i = e.length; r < i; r++) n.push(c(e[r], t)); return n }, c = function(e, t) { return "string" == typeof e ? n(e, t) : Array.isArray(e) ? s(e, t) : "object" == typeof e && null !== e ? r(e, t) : e },
                    function(e, t) { return 10 < l.length ? (w.error("Data element circular reference detected: " + l.join(" -> ")), e) : c(e, t) } },
            se = function(i) { return function(e, t) { if ("string" == typeof e) i[arguments[0]] = t;
                    else if (arguments[0]) { var n = arguments[0]; for (var r in n) i[r] = n[r] } } },
            ce = setTimeout;
        a.prototype["catch"] = function(e) { return this.then(null, e) }, a.prototype.then = function(e, t) { var n = new this.constructor(r); return o(this, new d(e, t, n)), n }, a.prototype["finally"] = t, a.all = function(t) { return new a(function(i, a) {
                function o(t, e) { try { if (e && ("object" == typeof e || "function" == typeof e)) { var n = e.then; if ("function" == typeof n) return void n.call(e, function(e) { o(t, e) }, a) }
                        s[t] = e, 0 == --c && i(s) } catch (r) { a(r) } } if (!l(t)) return a(new TypeError("Promise.all accepts an array")); var s = Array.prototype.slice.call(t); if (0 === s.length) return i([]); for (var c = s.length, e = 0; e < s.length; e++) o(e, s[e]) }) }, a.resolve = function(t) { return t && "object" == typeof t && t.constructor === a ? t : new a(function(e) { e(t) }) }, a.reject = function(n) { return new a(function(e, t) { t(n) }) }, a.race = function(i) { return new a(function(e, t) { if (!l(i)) return t(new TypeError("Promise.race accepts an array")); for (var n = 0, r = i.length; n < r; n++) a.resolve(i[n]).then(e, t) }) }, a._immediateFn = "function" == typeof setImmediate && function(e) { setImmediate(e) } || function(e) { ce(e, 0) }, a._unhandledRejectionFn = function Ot(e) { "undefined" != typeof console && console && console.warn("Possible Unhandled Promise Rejection:", e) };
        var le = window.Promise || a["default"] || a,
            ue = function(l, n, r) { return function(s, t, c, e) { return e.then(function() { var a, o = s.delayNext; return new le(function(e, t) { var n = l(s, c, [c]); if (!o) return e(); var r = s.timeout,
                                i = new le(function(e, t) { a = setTimeout(function() { t(new Error("A timeout occurred because the action took longer than " + r / 1e3 + " seconds to complete. ")) }, r) });
                            le.race([n, i]).then(e, t) })["catch"](function(e) { return clearTimeout(a), e = n(e), r(s, t, e), le.reject(e) }).then(function() { clearTimeout(a) }) }) } },
            de = function(c, n, r, i, l) { return function(o, t, s, e) { return e.then(function() { var a; return new le(function(e, t) { var n = c(o, s, [s]),
                                r = o.timeout,
                                i = new le(function(e, t) { a = setTimeout(function() { t(new Error("A timeout occurred because the condition took longer than " + r / 1e3 + " seconds to complete. ")) }, r) });
                            le.race([n, i]).then(e, t) })["catch"](function(e) { return clearTimeout(a), e = n(e), i(o, t, e), le.reject(e) }).then(function(e) { if (clearTimeout(a), !r(o, e)) return l(o, t), le.reject() }) }) } },
            fe = le.resolve(),
            pe = function(r, i, e) { return function(t, n) { return t.conditions && t.conditions.forEach(function(e) { fe = r(e, t, n, fe) }), t.actions && t.actions.forEach(function(e) { fe = i(e, t, n, fe) }), fe = (fe = fe.then(function() { e(t) }))["catch"](function() {}) } },
            ge = function(e) { return Boolean(e && "object" == typeof e && "function" == typeof e.then) },
            me = function(o, s, c, l) { return function(e, t) { var n; if (e.conditions)
                        for (var r = 0; r < e.conditions.length; r++) { n = e.conditions[r]; try { var i = o(n, t, [t]); if (ge(i)) throw new Error("Rule component sequencing must be enabled on the property for this condition to function properly."); if (!s(n, i)) return c(n, e), !1 } catch (a) { return l(n, e, a), !1 } }
                    return !0 } },
            he = function(n, r) { return function(e, t) { n(e, t) && r(e, t) } },
            be = function(n) { return function(e) { var t = n.getModuleDefinition(e.modulePath); return t && t.displayName || e.modulePath } },
            ve = function(i) { return function(e) { var t = e.rule,
                        n = e.event,
                        r = i.getModuleDefinition(n.modulePath).name; return { $type: i.getModuleExtensionName(n.modulePath) + "." + r, $rule: { id: t.id, name: t.name } } } },
            ye = function(s, c, l, u, d, f) { return function(n, e) { var r = e.rule,
                        t = e.event;
                    t.settings = t.settings || {}; try { var i = d(e);
                        c(t, null, [function a(e) { var t = l(i, e);
                            n(function() { s(t, r) }) }]) } catch (o) { f.error(u(t, r, o)) } } },
            Ie = function(i, a, o, s) { return function(e, t, n) { var r = a(e);
                    o.error(i(r, t.name, n)), s("ruleActionFailed", { rule: t, action: e }) } },
            _e = function(i, a, o, s) { return function(e, t, n) { var r = a(e);
                    o.error(i(r, t.name, n)), s("ruleConditionFailed", { rule: t, condition: e }) } },
            Se = function(r, i, a) { return function(e, t) { var n = r(e);
                    i.log('Condition "' + n + '" for rule "' + t.name + '" was not met.'), a("ruleConditionFailed", { rule: t, condition: e }) } },
            Ce = function(t, n) { return function(e) { t.log('Rule "' + e.name + '" fired.'), n("ruleCompleted", { rule: e }) } },
            ke = function(a, o, s) { return function(e, t) { var n; if (e.actions)
                        for (var r = 0; r < e.actions.length; r++) { n = e.actions[r]; try { a(n, t, [t]) } catch (i) { return void o(n, e, i) } }
                    s(e) } },
            Oe = function(n, r, i, a) { return function(e, t) { a("ruleTriggered", { rule: t }), n ? i(t, e) : r(t, e) } },
            Pe = function(e, t, n) { return 'Failed to execute "' + e + '" for "' + t + '" rule. ' + n.message + (n.stack ? "\n" + n.stack : "") },
            Ae = function(e, t) { return t && !e.negate || !t && e.negate },
            De = [],
            Te = !1,
            Ee = function(e) { Te ? e() : De.push(e) },
            we = function(e, t, n) { e(t).forEach(function(e) { n(Ee, e) }), Te = !0, De.forEach(function(e) { e() }), De = [] },
            Me = function(e) { if (e || (e = new Error("The extension triggered an error, but no error information was provided.")), !(e instanceof Error)) { var t = "object" == typeof e ? JSON.stringify(e) : String(e);
                    e = new Error(t) } return e },
            je = Object.getOwnPropertySymbols,
            xe = Object.prototype.hasOwnProperty,
            Le = Object.prototype.propertyIsEnumerable,
            Fe = n() ? Object.assign : function(e) { for (var t, n, r = p(e), i = 1; i < arguments.length; i++) { for (var a in t = Object(arguments[i])) xe.call(t, a) && (r[a] = t[a]); if (je) { n = je(t); for (var o = 0; o < n.length; o++) Le.call(t, n[o]) && (r[n[o]] = t[n[o]]) } } return r },
            Re = function(e, t) { return Fe(t = t || {}, e), t.hasOwnProperty("type") || Object.defineProperty(t, "type", { get: function() { return w.warn("Accessing event.type in Adobe Launch has been deprecated and will be removed soon. Please use event.$type instead."), t.$type } }), t },
            Ne = function(c, l) { return function(e, t) { var n = c[e]; if (n) { var r = n.modules; if (r)
                            for (var i = Object.keys(r), a = 0; a < i.length; a++) { var o = i[a],
                                    s = r[o]; if (s.shared && s.name === t) return l.getModuleExports(o) } } } },
            Ve = function(e, t) { return function() { return t ? e(t) : {} } },
            Be = function(n, r) { return function(e) { if (r) { var t = e.split(".");
                        t.splice(t.length - 1 || 1, 0, "min"), e = t.join(".") } return n + e } },
            Ue = ".js",
            He = function(e) { return e.substr(0, e.lastIndexOf("/")) },
            Ge = function(e, t) { return -1 !== e.indexOf(t, e.length - t.length) },
            qe = function(e, t) { Ge(t, Ue) || (t += Ue); var n = t.split("/"),
                    r = He(e).split("/"); return n.forEach(function(e) { e && "." !== e && (".." === e ? r.length && r.pop() : r.push(e)) }), r.join("/") },
            We = document,
            Ye = function(n, r) { return new le(function(e, t) { r.onload = function() { e(r) }, r.onerror = function() { t(new Error("Failed to load script " + n)) } }) },
            Je = function(e) { var t = document.createElement("script");
                t.src = e, t.async = !0; var n = Ye(e, t); return document.getElementsByTagName("head")[0].appendChild(t), n },
            ze = function(e, t, n, r) { t = t || "&", n = n || "="; var i = {}; if ("string" != typeof e || 0 === e.length) return i; var a = /\+/g;
                e = e.split(t); var o = 1e3;
                r && "number" == typeof r.maxKeys && (o = r.maxKeys); var s = e.length;
                0 < o && o < s && (s = o); for (var c = 0; c < s; ++c) { var l, u, d, f, p = e[c].replace(a, "%20"),
                        g = p.indexOf(n);
                    0 <= g ? (l = p.substr(0, g), u = p.substr(g + 1)) : (l = p, u = ""), d = decodeURIComponent(l), f = decodeURIComponent(u), m(i, d) ? Array.isArray(i[d]) ? i[d].push(f) : i[d] = [i[d], f] : i[d] = f } return i },
            $e = function(e) { switch (typeof e) {
                    case "string":
                        return e;
                    case "boolean":
                        return e ? "true" : "false";
                    case "number":
                        return isFinite(e) ? e : "";
                    default:
                        return "" } },
            Qe = function(n, r, i, e) { return r = r || "&", i = i || "=", null === n && (n = undefined), "object" == typeof n ? Object.keys(n).map(function(e) { var t = encodeURIComponent($e(e)) + i; return Array.isArray(n[e]) ? n[e].map(function(e) { return t + encodeURIComponent($e(e)) }).join(r) : t + encodeURIComponent($e(n[e])) }).join(r) : e ? encodeURIComponent($e(e)) + i + encodeURIComponent($e(n)) : "" },
            Ke = e(function(e, t) { t.decode = t.parse = ze, t.encode = t.stringify = Qe }),
            Xe = (Ke.decode, Ke.parse, Ke.encode, Ke.stringify, "@adobe/reactor-"),
            Ze = { cookie: j, document: We, "load-script": Je, "object-assign": Fe, promise: le, "query-string": { parse: function(e) { return "string" == typeof e && (e = e.trim().replace(/^[?#&]/, "")), Ke.parse(e) }, stringify: function(e) { return Ke.stringify(e) } }, window: x },
            et = function(r) { return function(e) { if (0 === e.indexOf(Xe)) { var t = e.substr(Xe.length),
                            n = Ze[t]; if (n) return n } if (0 === e.indexOf("./") || 0 === e.indexOf("../")) return r(e); throw new Error('Cannot resolve module "' + e + '".') } },
            tt = function(e, o, s, c, l) { var u = e.extensions,
                    d = e.buildInfo,
                    f = e.property.settings; if (u) { var p = Ne(u, o);
                    Object.keys(u).forEach(function(r) { var i = u[r],
                            e = Ve(c, i.settings); if (i.modules) { var t = w.createPrefixedLogger(i.displayName),
                                n = Be(i.hostedLibFilesBaseUrl, d.minified),
                                a = { buildInfo: d, getDataElementValue: l, getExtensionSettings: e, getHostedLibFileUrl: n, getSharedModule: p, logger: t, propertySettings: f, replaceTokens: c, onDebugChanged: s.onDebugChanged, get debugEnabled() { return s.getDebugEnabled() } };
                            Object.keys(i.modules).forEach(function(n) { var e = i.modules[n],
                                    t = et(function(e) { var t = qe(n, e); return o.getModuleExports(t) });
                                o.registerModule(n, e, r, t, a) }) } }), o.hydrateCache() } return o },
            nt = function(e, t, n, r, i) { var a = w.createPrefixedLogger("Custom Script");
                e.track = function(e) { w.log('"' + e + '" does not match any direct call identifiers.') }, e.getVisitorId = function() { return null }, e.property = { name: t.property.name }, e.company = t.company, e.buildInfo = t.buildInfo, e.logger = a, e.notify = function(e, t) { switch (w.warn("_satellite.notify is deprecated. Please use the `_satellite.logger` API."), t) {
                        case 3:
                            a.info(e); break;
                        case 4:
                            a.warn(e); break;
                        case 5:
                            a.error(e); break;
                        default:
                            a.log(e) } }, e.getVar = r, e.setVar = i, e.setCookie = function(e, t, n) { var r = "",
                        i = {};
                    n && (r = ", { expires: " + n + " }", i.expires = n); var a = '_satellite.setCookie is deprecated. Please use _satellite.cookie.set("' + e + '", "' + t + '"' + r + ").";
                    w.warn(a), j.set(e, t, i) }, e.readCookie = function(e) { return w.warn('_satellite.readCookie is deprecated. Please use _satellite.cookie.get("' + e + '").'), j.get(e) }, e.removeCookie = function(e) { w.warn('_satellite.removeCookie is deprecated. Please use _satellite.cookie.remove("' + e + '").'), j.remove(e) }, e.cookie = j, e.pageBottom = function() {}, e.setDebug = n; var o = !1;
                Object.defineProperty(e, "_container", { get: function() { return o || (w.warn("_satellite._container may change at any time and should only be used for debugging."), o = !0), t } }) },
            rt = window._satellite;
        if (rt && !window.__satelliteLoaded) { window.__satelliteLoaded = !0; var it = rt.container;
            delete rt.container; var at = it.property.settings.undefinedVarsReturnEmpty,
                ot = it.property.settings.ruleComponentSequencingEnabled,
                st = it.dataElements || {};
            z.migrateCookieData(st); var ct, lt = function(e) { return st[e] },
                ut = re(),
                dt = K(ut, lt, function() { return ct.apply(null, arguments) }, at),
                ft = {},
                pt = se(ft),
                gt = te(ft, lt),
                mt = ee(ft, lt, dt);
            ct = oe(gt, mt, at); var ht = b(F("localStorage"), w);
            nt(rt, it, ht.setDebugEnabled, mt, pt), tt(it, ut, ht, ct, dt); var bt = ae(rt),
                vt = y(ut, ct),
                yt = be(ut),
                It = Se(yt, w, bt),
                _t = _e(Pe, yt, w, bt),
                St = Ie(Pe, yt, w, bt),
                Ct = Ce(w, bt),
                kt = ye(Oe(ot, he(me(vt, Ae, It, _t), ke(vt, St, Ct)), pe(de(vt, Me, Ae, _t, It), ue(vt, Me, St), Ct), bt), vt, Re, Pe, ve(ut), w);
            we(g, it.rules || [], kt) }
        return rt
    }
    console.warn("Adobe Launch is unsupported in IE 9 and below.")
}();