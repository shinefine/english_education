window._wpemojiSettings = {
};
!function (a, b, c) {
    function d(a) {
        var c = b.createElement("canvas"), d = c.getContext && c.getContext("2d");
        return d && d.fillText ? (d.textBaseline = "top", d.font = "600 32px Arial", "flag" === a ? (d.fillText(String.fromCharCode(55356, 56812, 55356, 56807), 0, 0), c.toDataURL().length > 3e3) : (d.fillText(String.fromCharCode(55357, 56835), 0, 0), 0 !== d.getImageData(16, 16, 1, 1).data[0])) : !1
    }

    function e(a) {
        var c = b.createElement("script");
        c.src = a, c.type = "text/javascript", b.getElementsByTagName("head")[0].appendChild(c)
    }

    var f, g;
    c.supports = {simple: d("simple"), flag: d("flag")}, c.DOMReady = !1, c.readyCallback = function () {
        c.DOMReady = !0
    }, c.supports.simple && c.supports.flag || (g = function () {
        c.readyCallback()
    }, b.addEventListener ? (b.addEventListener("DOMContentLoaded", g, !1), a.addEventListener("load", g, !1)) : (a.attachEvent("onload", g), b.attachEvent("onreadystatechange", function () {
        "complete" === b.readyState && c.readyCallback()
    })), f = c.source || {}, f.concatemoji ? e(f.concatemoji) : f.wpemoji && f.twemoji && (e(f.twemoji), e(f.wpemoji)))
}(window, document, window._wpemojiSettings);
/*! jQuery v1.11.2 | (c) 2005, 2014 jQuery Foundation, Inc. | jquery.org/license */
!function (a, b) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, !0) : function (a) {
        if (!a.document)throw new Error("jQuery requires a window with a document");
        return b(a)
    } : b(a)
}("undefined" != typeof window ? window : this, function (a, b) {
    var c = [], d = c.slice, e = c.concat, f = c.push, g = c.indexOf, h = {}, i = h.toString, j = h.hasOwnProperty, k = {}, l = "1.11.2", m = function (a, b) {
        return new m.fn.init(a, b)
    }, n = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, o = /^-ms-/, p = /-([\da-z])/gi, q = function (a, b) {
        return b.toUpperCase()
    };
    m.fn = m.prototype = {jquery: l, constructor: m, selector: "", length: 0, toArray: function () {
        return d.call(this)
    }, get: function (a) {
        return null != a ? 0 > a ? this[a + this.length] : this[a] : d.call(this)
    }, pushStack: function (a) {
        var b = m.merge(this.constructor(), a);
        return b.prevObject = this, b.context = this.context, b
    }, each: function (a, b) {
        return m.each(this, a, b)
    }, map: function (a) {
        return this.pushStack(m.map(this, function (b, c) {
            return a.call(b, c, b)
        }))
    }, slice: function () {
        return this.pushStack(d.apply(this, arguments))
    }, first: function () {
        return this.eq(0)
    }, last: function () {
        return this.eq(-1)
    }, eq: function (a) {
        var b = this.length, c = +a + (0 > a ? b : 0);
        return this.pushStack(c >= 0 && b > c ? [this[c]] : [])
    }, end: function () {
        return this.prevObject || this.constructor(null)
    }, push: f, sort: c.sort, splice: c.splice}, m.extend = m.fn.extend = function () {
        var a, b, c, d, e, f, g = arguments[0] || {}, h = 1, i = arguments.length, j = !1;
        for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == typeof g || m.isFunction(g) || (g = {}), h === i && (g = this, h--); i > h; h++)if (null != (e = arguments[h]))for (d in e)a = g[d], c = e[d], g !== c && (j && c && (m.isPlainObject(c) || (b = m.isArray(c))) ? (b ? (b = !1, f = a && m.isArray(a) ? a : []) : f = a && m.isPlainObject(a) ? a : {}, g[d] = m.extend(j, f, c)) : void 0 !== c && (g[d] = c));
        return g
    }, m.extend({expando: "jQuery" + (l + Math.random()).replace(/\D/g, ""), isReady: !0, error: function (a) {
        throw new Error(a)
    }, noop: function () {
    }, isFunction: function (a) {
        return"function" === m.type(a)
    }, isArray: Array.isArray || function (a) {
        return"array" === m.type(a)
    }, isWindow: function (a) {
        return null != a && a == a.window
    }, isNumeric: function (a) {
        return!m.isArray(a) && a - parseFloat(a) + 1 >= 0
    }, isEmptyObject: function (a) {
        var b;
        for (b in a)return!1;
        return!0
    }, isPlainObject: function (a) {
        var b;
        if (!a || "object" !== m.type(a) || a.nodeType || m.isWindow(a))return!1;
        try {
            if (a.constructor && !j.call(a, "constructor") && !j.call(a.constructor.prototype, "isPrototypeOf"))return!1
        } catch (c) {
            return!1
        }
        if (k.ownLast)for (b in a)return j.call(a, b);
        for (b in a);
        return void 0 === b || j.call(a, b)
    }, type: function (a) {
        return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? h[i.call(a)] || "object" : typeof a
    }, globalEval: function (b) {
        b && m.trim(b) && (a.execScript || function (b) {
            a.eval.call(a, b)
        })(b)
    }, camelCase: function (a) {
        return a.replace(o, "ms-").replace(p, q)
    }, nodeName: function (a, b) {
        return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
    }, each: function (a, b, c) {
        var d, e = 0, f = a.length, g = r(a);
        if (c) {
            if (g) {
                for (; f > e; e++)if (d = b.apply(a[e], c), d === !1)break
            } else for (e in a)if (d = b.apply(a[e], c), d === !1)break
        } else if (g) {
            for (; f > e; e++)if (d = b.call(a[e], e, a[e]), d === !1)break
        } else for (e in a)if (d = b.call(a[e], e, a[e]), d === !1)break;
        return a
    }, trim: function (a) {
        return null == a ? "" : (a + "").replace(n, "")
    }, makeArray: function (a, b) {
        var c = b || [];
        return null != a && (r(Object(a)) ? m.merge(c, "string" == typeof a ? [a] : a) : f.call(c, a)), c
    }, inArray: function (a, b, c) {
        var d;
        if (b) {
            if (g)return g.call(b, a, c);
            for (d = b.length, c = c ? 0 > c ? Math.max(0, d + c) : c : 0; d > c; c++)if (c in b && b[c] === a)return c
        }
        return-1
    }, merge: function (a, b) {
        var c = +b.length, d = 0, e = a.length;
        while (c > d)a[e++] = b[d++];
        if (c !== c)while (void 0 !== b[d])a[e++] = b[d++];
        return a.length = e, a
    }, grep: function (a, b, c) {
        for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++)d = !b(a[f], f), d !== h && e.push(a[f]);
        return e
    }, map: function (a, b, c) {
        var d, f = 0, g = a.length, h = r(a), i = [];
        if (h)for (; g > f; f++)d = b(a[f], f, c), null != d && i.push(d); else for (f in a)d = b(a[f], f, c), null != d && i.push(d);
        return e.apply([], i)
    }, guid: 1, proxy: function (a, b) {
        var c, e, f;
        return"string" == typeof b && (f = a[b], b = a, a = f), m.isFunction(a) ? (c = d.call(arguments, 2), e = function () {
            return a.apply(b || this, c.concat(d.call(arguments)))
        }, e.guid = a.guid = a.guid || m.guid++, e) : void 0
    }, now: function () {
        return+new Date
    }, support: k}), m.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (a, b) {
        h["[object " + b + "]"] = b.toLowerCase()
    });
    function r(a) {
        var b = a.length, c = m.type(a);
        return"function" === c || m.isWindow(a) ? !1 : 1 === a.nodeType && b ? !0 : "array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a
    }

    var s = function (a) {
        var b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u = "sizzle" + 1 * new Date, v = a.document, w = 0, x = 0, y = hb(), z = hb(), A = hb(), B = function (a, b) {
            return a === b && (l = !0), 0
        }, C = 1 << 31, D = {}.hasOwnProperty, E = [], F = E.pop, G = E.push, H = E.push, I = E.slice, J = function (a, b) {
            for (var c = 0, d = a.length; d > c; c++)if (a[c] === b)return c;
            return-1
        }, K = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", L = "[\\x20\\t\\r\\n\\f]", M = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", N = M.replace("w", "w#"), O = "\\[" + L + "*(" + M + ")(?:" + L + "*([*^$|!~]?=)" + L + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + N + "))|)" + L + "*\\]", P = ":(" + M + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + O + ")*)|.*)\\)|)", Q = new RegExp(L + "+", "g"), R = new RegExp("^" + L + "+|((?:^|[^\\\\])(?:\\\\.)*)" + L + "+$", "g"), S = new RegExp("^" + L + "*," + L + "*"), T = new RegExp("^" + L + "*([>+~]|" + L + ")" + L + "*"), U = new RegExp("=" + L + "*([^\\]'\"]*?)" + L + "*\\]", "g"), V = new RegExp(P), W = new RegExp("^" + N + "$"), X = {ID: new RegExp("^#(" + M + ")"), CLASS: new RegExp("^\\.(" + M + ")"), TAG: new RegExp("^(" + M.replace("w", "w*") + ")"), ATTR: new RegExp("^" + O), PSEUDO: new RegExp("^" + P), CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + L + "*(even|odd|(([+-]|)(\\d*)n|)" + L + "*(?:([+-]|)" + L + "*(\\d+)|))" + L + "*\\)|)", "i"), bool: new RegExp("^(?:" + K + ")$", "i"), needsContext: new RegExp("^" + L + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + L + "*((?:-\\d)?\\d*)" + L + "*\\)|)(?=[^-]|$)", "i")}, Y = /^(?:input|select|textarea|button)$/i, Z = /^h\d$/i, $ = /^[^{]+\{\s*\[native \w/, _ = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, ab = /[+~]/, bb = /'|\\/g, cb = new RegExp("\\\\([\\da-f]{1,6}" + L + "?|(" + L + ")|.)", "ig"), db = function (a, b, c) {
            var d = "0x" + b - 65536;
            return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320)
        }, eb = function () {
            m()
        };
        try {
            H.apply(E = I.call(v.childNodes), v.childNodes), E[v.childNodes.length].nodeType
        } catch (fb) {
            H = {apply: E.length ? function (a, b) {
                G.apply(a, I.call(b))
            } : function (a, b) {
                var c = a.length, d = 0;
                while (a[c++] = b[d++]);
                a.length = c - 1
            }}
        }
        function gb(a, b, d, e) {
            var f, h, j, k, l, o, r, s, w, x;
            if ((b ? b.ownerDocument || b : v) !== n && m(b), b = b || n, d = d || [], k = b.nodeType, "string" != typeof a || !a || 1 !== k && 9 !== k && 11 !== k)return d;
            if (!e && p) {
                if (11 !== k && (f = _.exec(a)))if (j = f[1]) {
                    if (9 === k) {
                        if (h = b.getElementById(j), !h || !h.parentNode)return d;
                        if (h.id === j)return d.push(h), d
                    } else if (b.ownerDocument && (h = b.ownerDocument.getElementById(j)) && t(b, h) && h.id === j)return d.push(h), d
                } else {
                    if (f[2])return H.apply(d, b.getElementsByTagName(a)), d;
                    if ((j = f[3]) && c.getElementsByClassName)return H.apply(d, b.getElementsByClassName(j)), d
                }
                if (c.qsa && (!q || !q.test(a))) {
                    if (s = r = u, w = b, x = 1 !== k && a, 1 === k && "object" !== b.nodeName.toLowerCase()) {
                        o = g(a), (r = b.getAttribute("id")) ? s = r.replace(bb, "\\$&") : b.setAttribute("id", s), s = "[id='" + s + "'] ", l = o.length;
                        while (l--)o[l] = s + rb(o[l]);
                        w = ab.test(a) && pb(b.parentNode) || b, x = o.join(",")
                    }
                    if (x)try {
                        return H.apply(d, w.querySelectorAll(x)), d
                    } catch (y) {
                    } finally {
                        r || b.removeAttribute("id")
                    }
                }
            }
            return i(a.replace(R, "$1"), b, d, e)
        }

        function hb() {
            var a = [];

            function b(c, e) {
                return a.push(c + " ") > d.cacheLength && delete b[a.shift()], b[c + " "] = e
            }

            return b
        }

        function ib(a) {
            return a[u] = !0, a
        }

        function jb(a) {
            var b = n.createElement("div");
            try {
                return!!a(b)
            } catch (c) {
                return!1
            } finally {
                b.parentNode && b.parentNode.removeChild(b), b = null
            }
        }

        function kb(a, b) {
            var c = a.split("|"), e = a.length;
            while (e--)d.attrHandle[c[e]] = b
        }

        function lb(a, b) {
            var c = b && a, d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || C) - (~a.sourceIndex || C);
            if (d)return d;
            if (c)while (c = c.nextSibling)if (c === b)return-1;
            return a ? 1 : -1
        }

        function mb(a) {
            return function (b) {
                var c = b.nodeName.toLowerCase();
                return"input" === c && b.type === a
            }
        }

        function nb(a) {
            return function (b) {
                var c = b.nodeName.toLowerCase();
                return("input" === c || "button" === c) && b.type === a
            }
        }

        function ob(a) {
            return ib(function (b) {
                return b = +b, ib(function (c, d) {
                    var e, f = a([], c.length, b), g = f.length;
                    while (g--)c[e = f[g]] && (c[e] = !(d[e] = c[e]))
                })
            })
        }

        function pb(a) {
            return a && "undefined" != typeof a.getElementsByTagName && a
        }

        c = gb.support = {}, f = gb.isXML = function (a) {
            var b = a && (a.ownerDocument || a).documentElement;
            return b ? "HTML" !== b.nodeName : !1
        }, m = gb.setDocument = function (a) {
            var b, e, g = a ? a.ownerDocument || a : v;
            return g !== n && 9 === g.nodeType && g.documentElement ? (n = g, o = g.documentElement, e = g.defaultView, e && e !== e.top && (e.addEventListener ? e.addEventListener("unload", eb, !1) : e.attachEvent && e.attachEvent("onunload", eb)), p = !f(g), c.attributes = jb(function (a) {
                return a.className = "i", !a.getAttribute("className")
            }), c.getElementsByTagName = jb(function (a) {
                return a.appendChild(g.createComment("")), !a.getElementsByTagName("*").length
            }), c.getElementsByClassName = $.test(g.getElementsByClassName), c.getById = jb(function (a) {
                return o.appendChild(a).id = u, !g.getElementsByName || !g.getElementsByName(u).length
            }), c.getById ? (d.find.ID = function (a, b) {
                if ("undefined" != typeof b.getElementById && p) {
                    var c = b.getElementById(a);
                    return c && c.parentNode ? [c] : []
                }
            }, d.filter.ID = function (a) {
                var b = a.replace(cb, db);
                return function (a) {
                    return a.getAttribute("id") === b
                }
            }) : (delete d.find.ID, d.filter.ID = function (a) {
                var b = a.replace(cb, db);
                return function (a) {
                    var c = "undefined" != typeof a.getAttributeNode && a.getAttributeNode("id");
                    return c && c.value === b
                }
            }), d.find.TAG = c.getElementsByTagName ? function (a, b) {
                return"undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName(a) : c.qsa ? b.querySelectorAll(a) : void 0
            } : function (a, b) {
                var c, d = [], e = 0, f = b.getElementsByTagName(a);
                if ("*" === a) {
                    while (c = f[e++])1 === c.nodeType && d.push(c);
                    return d
                }
                return f
            }, d.find.CLASS = c.getElementsByClassName && function (a, b) {
                return p ? b.getElementsByClassName(a) : void 0
            }, r = [], q = [], (c.qsa = $.test(g.querySelectorAll)) && (jb(function (a) {
                o.appendChild(a).innerHTML = "<a id='" + u + "'></a><select id='" + u + "-\f]' msallowcapture=''><option selected=''></option></select>", a.querySelectorAll("[msallowcapture^='']").length && q.push("[*^$]=" + L + "*(?:''|\"\")"), a.querySelectorAll("[selected]").length || q.push("\\[" + L + "*(?:value|" + K + ")"), a.querySelectorAll("[id~=" + u + "-]").length || q.push("~="), a.querySelectorAll(":checked").length || q.push(":checked"), a.querySelectorAll("a#" + u + "+*").length || q.push(".#.+[+~]")
            }), jb(function (a) {
                var b = g.createElement("input");
                b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && q.push("name" + L + "*[*^$|!~]?="), a.querySelectorAll(":enabled").length || q.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), q.push(",.*:")
            })), (c.matchesSelector = $.test(s = o.matches || o.webkitMatchesSelector || o.mozMatchesSelector || o.oMatchesSelector || o.msMatchesSelector)) && jb(function (a) {
                c.disconnectedMatch = s.call(a, "div"), s.call(a, "[s!='']:x"), r.push("!=", P)
            }), q = q.length && new RegExp(q.join("|")), r = r.length && new RegExp(r.join("|")), b = $.test(o.compareDocumentPosition), t = b || $.test(o.contains) ? function (a, b) {
                var c = 9 === a.nodeType ? a.documentElement : a, d = b && b.parentNode;
                return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)))
            } : function (a, b) {
                if (b)while (b = b.parentNode)if (b === a)return!0;
                return!1
            }, B = b ? function (a, b) {
                if (a === b)return l = !0, 0;
                var d = !a.compareDocumentPosition - !b.compareDocumentPosition;
                return d ? d : (d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & d || !c.sortDetached && b.compareDocumentPosition(a) === d ? a === g || a.ownerDocument === v && t(v, a) ? -1 : b === g || b.ownerDocument === v && t(v, b) ? 1 : k ? J(k, a) - J(k, b) : 0 : 4 & d ? -1 : 1)
            } : function (a, b) {
                if (a === b)return l = !0, 0;
                var c, d = 0, e = a.parentNode, f = b.parentNode, h = [a], i = [b];
                if (!e || !f)return a === g ? -1 : b === g ? 1 : e ? -1 : f ? 1 : k ? J(k, a) - J(k, b) : 0;
                if (e === f)return lb(a, b);
                c = a;
                while (c = c.parentNode)h.unshift(c);
                c = b;
                while (c = c.parentNode)i.unshift(c);
                while (h[d] === i[d])d++;
                return d ? lb(h[d], i[d]) : h[d] === v ? -1 : i[d] === v ? 1 : 0
            }, g) : n
        }, gb.matches = function (a, b) {
            return gb(a, null, null, b)
        }, gb.matchesSelector = function (a, b) {
            if ((a.ownerDocument || a) !== n && m(a), b = b.replace(U, "='$1']"), !(!c.matchesSelector || !p || r && r.test(b) || q && q.test(b)))try {
                var d = s.call(a, b);
                if (d || c.disconnectedMatch || a.document && 11 !== a.document.nodeType)return d
            } catch (e) {
            }
            return gb(b, n, null, [a]).length > 0
        }, gb.contains = function (a, b) {
            return(a.ownerDocument || a) !== n && m(a), t(a, b)
        }, gb.attr = function (a, b) {
            (a.ownerDocument || a) !== n && m(a);
            var e = d.attrHandle[b.toLowerCase()], f = e && D.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !p) : void 0;
            return void 0 !== f ? f : c.attributes || !p ? a.getAttribute(b) : (f = a.getAttributeNode(b)) && f.specified ? f.value : null
        }, gb.error = function (a) {
            throw new Error("Syntax error, unrecognized expression: " + a)
        }, gb.uniqueSort = function (a) {
            var b, d = [], e = 0, f = 0;
            if (l = !c.detectDuplicates, k = !c.sortStable && a.slice(0), a.sort(B), l) {
                while (b = a[f++])b === a[f] && (e = d.push(f));
                while (e--)a.splice(d[e], 1)
            }
            return k = null, a
        }, e = gb.getText = function (a) {
            var b, c = "", d = 0, f = a.nodeType;
            if (f) {
                if (1 === f || 9 === f || 11 === f) {
                    if ("string" == typeof a.textContent)return a.textContent;
                    for (a = a.firstChild; a; a = a.nextSibling)c += e(a)
                } else if (3 === f || 4 === f)return a.nodeValue
            } else while (b = a[d++])c += e(b);
            return c
        }, d = gb.selectors = {cacheLength: 50, createPseudo: ib, match: X, attrHandle: {}, find: {}, relative: {">": {dir: "parentNode", first: !0}, " ": {dir: "parentNode"}, "+": {dir: "previousSibling", first: !0}, "~": {dir: "previousSibling"}}, preFilter: {ATTR: function (a) {
            return a[1] = a[1].replace(cb, db), a[3] = (a[3] || a[4] || a[5] || "").replace(cb, db), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4)
        }, CHILD: function (a) {
            return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || gb.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && gb.error(a[0]), a
        }, PSEUDO: function (a) {
            var b, c = !a[6] && a[2];
            return X.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && V.test(c) && (b = g(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3))
        }}, filter: {TAG: function (a) {
            var b = a.replace(cb, db).toLowerCase();
            return"*" === a ? function () {
                return!0
            } : function (a) {
                return a.nodeName && a.nodeName.toLowerCase() === b
            }
        }, CLASS: function (a) {
            var b = y[a + " "];
            return b || (b = new RegExp("(^|" + L + ")" + a + "(" + L + "|$)")) && y(a, function (a) {
                return b.test("string" == typeof a.className && a.className || "undefined" != typeof a.getAttribute && a.getAttribute("class") || "")
            })
        }, ATTR: function (a, b, c) {
            return function (d) {
                var e = gb.attr(d, a);
                return null == e ? "!=" === b : b ? (e += "", "=" === b ? e === c : "!=" === b ? e !== c : "^=" === b ? c && 0 === e.indexOf(c) : "*=" === b ? c && e.indexOf(c) > -1 : "$=" === b ? c && e.slice(-c.length) === c : "~=" === b ? (" " + e.replace(Q, " ") + " ").indexOf(c) > -1 : "|=" === b ? e === c || e.slice(0, c.length + 1) === c + "-" : !1) : !0
            }
        }, CHILD: function (a, b, c, d, e) {
            var f = "nth" !== a.slice(0, 3), g = "last" !== a.slice(-4), h = "of-type" === b;
            return 1 === d && 0 === e ? function (a) {
                return!!a.parentNode
            } : function (b, c, i) {
                var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling", q = b.parentNode, r = h && b.nodeName.toLowerCase(), s = !i && !h;
                if (q) {
                    if (f) {
                        while (p) {
                            l = b;
                            while (l = l[p])if (h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType)return!1;
                            o = p = "only" === a && !o && "nextSibling"
                        }
                        return!0
                    }
                    if (o = [g ? q.firstChild : q.lastChild], g && s) {
                        k = q[u] || (q[u] = {}), j = k[a] || [], n = j[0] === w && j[1], m = j[0] === w && j[2], l = n && q.childNodes[n];
                        while (l = ++n && l && l[p] || (m = n = 0) || o.pop())if (1 === l.nodeType && ++m && l === b) {
                            k[a] = [w, n, m];
                            break
                        }
                    } else if (s && (j = (b[u] || (b[u] = {}))[a]) && j[0] === w)m = j[1]; else while (l = ++n && l && l[p] || (m = n = 0) || o.pop())if ((h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType) && ++m && (s && ((l[u] || (l[u] = {}))[a] = [w, m]), l === b))break;
                    return m -= e, m === d || m % d === 0 && m / d >= 0
                }
            }
        }, PSEUDO: function (a, b) {
            var c, e = d.pseudos[a] || d.setFilters[a.toLowerCase()] || gb.error("unsupported pseudo: " + a);
            return e[u] ? e(b) : e.length > 1 ? (c = [a, a, "", b], d.setFilters.hasOwnProperty(a.toLowerCase()) ? ib(function (a, c) {
                var d, f = e(a, b), g = f.length;
                while (g--)d = J(a, f[g]), a[d] = !(c[d] = f[g])
            }) : function (a) {
                return e(a, 0, c)
            }) : e
        }}, pseudos: {not: ib(function (a) {
            var b = [], c = [], d = h(a.replace(R, "$1"));
            return d[u] ? ib(function (a, b, c, e) {
                var f, g = d(a, null, e, []), h = a.length;
                while (h--)(f = g[h]) && (a[h] = !(b[h] = f))
            }) : function (a, e, f) {
                return b[0] = a, d(b, null, f, c), b[0] = null, !c.pop()
            }
        }), has: ib(function (a) {
            return function (b) {
                return gb(a, b).length > 0
            }
        }), contains: ib(function (a) {
            return a = a.replace(cb, db), function (b) {
                return(b.textContent || b.innerText || e(b)).indexOf(a) > -1
            }
        }), lang: ib(function (a) {
            return W.test(a || "") || gb.error("unsupported lang: " + a), a = a.replace(cb, db).toLowerCase(), function (b) {
                var c;
                do if (c = p ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang"))return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-"); while ((b = b.parentNode) && 1 === b.nodeType);
                return!1
            }
        }), target: function (b) {
            var c = a.location && a.location.hash;
            return c && c.slice(1) === b.id
        }, root: function (a) {
            return a === o
        }, focus: function (a) {
            return a === n.activeElement && (!n.hasFocus || n.hasFocus()) && !!(a.type || a.href || ~a.tabIndex)
        }, enabled: function (a) {
            return a.disabled === !1
        }, disabled: function (a) {
            return a.disabled === !0
        }, checked: function (a) {
            var b = a.nodeName.toLowerCase();
            return"input" === b && !!a.checked || "option" === b && !!a.selected
        }, selected: function (a) {
            return a.parentNode && a.parentNode.selectedIndex, a.selected === !0
        }, empty: function (a) {
            for (a = a.firstChild; a; a = a.nextSibling)if (a.nodeType < 6)return!1;
            return!0
        }, parent: function (a) {
            return!d.pseudos.empty(a)
        }, header: function (a) {
            return Z.test(a.nodeName)
        }, input: function (a) {
            return Y.test(a.nodeName)
        }, button: function (a) {
            var b = a.nodeName.toLowerCase();
            return"input" === b && "button" === a.type || "button" === b
        }, text: function (a) {
            var b;
            return"input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase())
        }, first: ob(function () {
            return[0]
        }), last: ob(function (a, b) {
            return[b - 1]
        }), eq: ob(function (a, b, c) {
            return[0 > c ? c + b : c]
        }), even: ob(function (a, b) {
            for (var c = 0; b > c; c += 2)a.push(c);
            return a
        }), odd: ob(function (a, b) {
            for (var c = 1; b > c; c += 2)a.push(c);
            return a
        }), lt: ob(function (a, b, c) {
            for (var d = 0 > c ? c + b : c; --d >= 0;)a.push(d);
            return a
        }), gt: ob(function (a, b, c) {
            for (var d = 0 > c ? c + b : c; ++d < b;)a.push(d);
            return a
        })}}, d.pseudos.nth = d.pseudos.eq;
        for (b in{radio: !0, checkbox: !0, file: !0, password: !0, image: !0})d.pseudos[b] = mb(b);
        for (b in{submit: !0, reset: !0})d.pseudos[b] = nb(b);
        function qb() {
        }

        qb.prototype = d.filters = d.pseudos, d.setFilters = new qb, g = gb.tokenize = function (a, b) {
            var c, e, f, g, h, i, j, k = z[a + " "];
            if (k)return b ? 0 : k.slice(0);
            h = a, i = [], j = d.preFilter;
            while (h) {
                (!c || (e = S.exec(h))) && (e && (h = h.slice(e[0].length) || h), i.push(f = [])), c = !1, (e = T.exec(h)) && (c = e.shift(), f.push({value: c, type: e[0].replace(R, " ")}), h = h.slice(c.length));
                for (g in d.filter)!(e = X[g].exec(h)) || j[g] && !(e = j[g](e)) || (c = e.shift(), f.push({value: c, type: g, matches: e}), h = h.slice(c.length));
                if (!c)break
            }
            return b ? h.length : h ? gb.error(a) : z(a, i).slice(0)
        };
        function rb(a) {
            for (var b = 0, c = a.length, d = ""; c > b; b++)d += a[b].value;
            return d
        }

        function sb(a, b, c) {
            var d = b.dir, e = c && "parentNode" === d, f = x++;
            return b.first ? function (b, c, f) {
                while (b = b[d])if (1 === b.nodeType || e)return a(b, c, f)
            } : function (b, c, g) {
                var h, i, j = [w, f];
                if (g) {
                    while (b = b[d])if ((1 === b.nodeType || e) && a(b, c, g))return!0
                } else while (b = b[d])if (1 === b.nodeType || e) {
                    if (i = b[u] || (b[u] = {}), (h = i[d]) && h[0] === w && h[1] === f)return j[2] = h[2];
                    if (i[d] = j, j[2] = a(b, c, g))return!0
                }
            }
        }

        function tb(a) {
            return a.length > 1 ? function (b, c, d) {
                var e = a.length;
                while (e--)if (!a[e](b, c, d))return!1;
                return!0
            } : a[0]
        }

        function ub(a, b, c) {
            for (var d = 0, e = b.length; e > d; d++)gb(a, b[d], c);
            return c
        }

        function vb(a, b, c, d, e) {
            for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++)(f = a[h]) && (!c || c(f, d, e)) && (g.push(f), j && b.push(h));
            return g
        }

        function wb(a, b, c, d, e, f) {
            return d && !d[u] && (d = wb(d)), e && !e[u] && (e = wb(e, f)), ib(function (f, g, h, i) {
                var j, k, l, m = [], n = [], o = g.length, p = f || ub(b || "*", h.nodeType ? [h] : h, []), q = !a || !f && b ? p : vb(p, m, a, h, i), r = c ? e || (f ? a : o || d) ? [] : g : q;
                if (c && c(q, r, h, i), d) {
                    j = vb(r, n), d(j, [], h, i), k = j.length;
                    while (k--)(l = j[k]) && (r[n[k]] = !(q[n[k]] = l))
                }
                if (f) {
                    if (e || a) {
                        if (e) {
                            j = [], k = r.length;
                            while (k--)(l = r[k]) && j.push(q[k] = l);
                            e(null, r = [], j, i)
                        }
                        k = r.length;
                        while (k--)(l = r[k]) && (j = e ? J(f, l) : m[k]) > -1 && (f[j] = !(g[j] = l))
                    }
                } else r = vb(r === g ? r.splice(o, r.length) : r), e ? e(null, g, r, i) : H.apply(g, r)
            })
        }

        function xb(a) {
            for (var b, c, e, f = a.length, g = d.relative[a[0].type], h = g || d.relative[" "], i = g ? 1 : 0, k = sb(function (a) {
                return a === b
            }, h, !0), l = sb(function (a) {
                return J(b, a) > -1
            }, h, !0), m = [function (a, c, d) {
                var e = !g && (d || c !== j) || ((b = c).nodeType ? k(a, c, d) : l(a, c, d));
                return b = null, e
            }]; f > i; i++)if (c = d.relative[a[i].type])m = [sb(tb(m), c)]; else {
                if (c = d.filter[a[i].type].apply(null, a[i].matches), c[u]) {
                    for (e = ++i; f > e; e++)if (d.relative[a[e].type])break;
                    return wb(i > 1 && tb(m), i > 1 && rb(a.slice(0, i - 1).concat({value: " " === a[i - 2].type ? "*" : ""})).replace(R, "$1"), c, e > i && xb(a.slice(i, e)), f > e && xb(a = a.slice(e)), f > e && rb(a))
                }
                m.push(c)
            }
            return tb(m)
        }

        function yb(a, b) {
            var c = b.length > 0, e = a.length > 0, f = function (f, g, h, i, k) {
                var l, m, o, p = 0, q = "0", r = f && [], s = [], t = j, u = f || e && d.find.TAG("*", k), v = w += null == t ? 1 : Math.random() || .1, x = u.length;
                for (k && (j = g !== n && g); q !== x && null != (l = u[q]); q++) {
                    if (e && l) {
                        m = 0;
                        while (o = a[m++])if (o(l, g, h)) {
                            i.push(l);
                            break
                        }
                        k && (w = v)
                    }
                    c && ((l = !o && l) && p--, f && r.push(l))
                }
                if (p += q, c && q !== p) {
                    m = 0;
                    while (o = b[m++])o(r, s, g, h);
                    if (f) {
                        if (p > 0)while (q--)r[q] || s[q] || (s[q] = F.call(i));
                        s = vb(s)
                    }
                    H.apply(i, s), k && !f && s.length > 0 && p + b.length > 1 && gb.uniqueSort(i)
                }
                return k && (w = v, j = t), r
            };
            return c ? ib(f) : f
        }

        return h = gb.compile = function (a, b) {
            var c, d = [], e = [], f = A[a + " "];
            if (!f) {
                b || (b = g(a)), c = b.length;
                while (c--)f = xb(b[c]), f[u] ? d.push(f) : e.push(f);
                f = A(a, yb(e, d)), f.selector = a
            }
            return f
        }, i = gb.select = function (a, b, e, f) {
            var i, j, k, l, m, n = "function" == typeof a && a, o = !f && g(a = n.selector || a);
            if (e = e || [], 1 === o.length) {
                if (j = o[0] = o[0].slice(0), j.length > 2 && "ID" === (k = j[0]).type && c.getById && 9 === b.nodeType && p && d.relative[j[1].type]) {
                    if (b = (d.find.ID(k.matches[0].replace(cb, db), b) || [])[0], !b)return e;
                    n && (b = b.parentNode), a = a.slice(j.shift().value.length)
                }
                i = X.needsContext.test(a) ? 0 : j.length;
                while (i--) {
                    if (k = j[i], d.relative[l = k.type])break;
                    if ((m = d.find[l]) && (f = m(k.matches[0].replace(cb, db), ab.test(j[0].type) && pb(b.parentNode) || b))) {
                        if (j.splice(i, 1), a = f.length && rb(j), !a)return H.apply(e, f), e;
                        break
                    }
                }
            }
            return(n || h(a, o))(f, b, !p, e, ab.test(a) && pb(b.parentNode) || b), e
        }, c.sortStable = u.split("").sort(B).join("") === u, c.detectDuplicates = !!l, m(), c.sortDetached = jb(function (a) {
            return 1 & a.compareDocumentPosition(n.createElement("div"))
        }), jb(function (a) {
            return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href")
        }) || kb("type|href|height|width", function (a, b, c) {
            return c ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2)
        }), c.attributes && jb(function (a) {
            return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value")
        }) || kb("value", function (a, b, c) {
            return c || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue
        }), jb(function (a) {
            return null == a.getAttribute("disabled")
        }) || kb(K, function (a, b, c) {
            var d;
            return c ? void 0 : a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null
        }), gb
    }(a);
    m.find = s, m.expr = s.selectors, m.expr[":"] = m.expr.pseudos, m.unique = s.uniqueSort, m.text = s.getText, m.isXMLDoc = s.isXML, m.contains = s.contains;
    var t = m.expr.match.needsContext, u = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, v = /^.[^:#\[\.,]*$/;

    function w(a, b, c) {
        if (m.isFunction(b))return m.grep(a, function (a, d) {
            return!!b.call(a, d, a) !== c
        });
        if (b.nodeType)return m.grep(a, function (a) {
            return a === b !== c
        });
        if ("string" == typeof b) {
            if (v.test(b))return m.filter(b, a, c);
            b = m.filter(b, a)
        }
        return m.grep(a, function (a) {
            return m.inArray(a, b) >= 0 !== c
        })
    }

    m.filter = function (a, b, c) {
        var d = b[0];
        return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? m.find.matchesSelector(d, a) ? [d] : [] : m.find.matches(a, m.grep(b, function (a) {
            return 1 === a.nodeType
        }))
    }, m.fn.extend({find: function (a) {
        var b, c = [], d = this, e = d.length;
        if ("string" != typeof a)return this.pushStack(m(a).filter(function () {
            for (b = 0; e > b; b++)if (m.contains(d[b], this))return!0
        }));
        for (b = 0; e > b; b++)m.find(a, d[b], c);
        return c = this.pushStack(e > 1 ? m.unique(c) : c), c.selector = this.selector ? this.selector + " " + a : a, c
    }, filter: function (a) {
        return this.pushStack(w(this, a || [], !1))
    }, not: function (a) {
        return this.pushStack(w(this, a || [], !0))
    }, is: function (a) {
        return!!w(this, "string" == typeof a && t.test(a) ? m(a) : a || [], !1).length
    }});
    var x, y = a.document, z = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, A = m.fn.init = function (a, b) {
        var c, d;
        if (!a)return this;
        if ("string" == typeof a) {
            if (c = "<" === a.charAt(0) && ">" === a.charAt(a.length - 1) && a.length >= 3 ? [null, a, null] : z.exec(a), !c || !c[1] && b)return!b || b.jquery ? (b || x).find(a) : this.constructor(b).find(a);
            if (c[1]) {
                if (b = b instanceof m ? b[0] : b, m.merge(this, m.parseHTML(c[1], b && b.nodeType ? b.ownerDocument || b : y, !0)), u.test(c[1]) && m.isPlainObject(b))for (c in b)m.isFunction(this[c]) ? this[c](b[c]) : this.attr(c, b[c]);
                return this
            }
            if (d = y.getElementById(c[2]), d && d.parentNode) {
                if (d.id !== c[2])return x.find(a);
                this.length = 1, this[0] = d
            }
            return this.context = y, this.selector = a, this
        }
        return a.nodeType ? (this.context = this[0] = a, this.length = 1, this) : m.isFunction(a) ? "undefined" != typeof x.ready ? x.ready(a) : a(m) : (void 0 !== a.selector && (this.selector = a.selector, this.context = a.context), m.makeArray(a, this))
    };
    A.prototype = m.fn, x = m(y);
    var B = /^(?:parents|prev(?:Until|All))/, C = {children: !0, contents: !0, next: !0, prev: !0};
    m.extend({dir: function (a, b, c) {
        var d = [], e = a[b];
        while (e && 9 !== e.nodeType && (void 0 === c || 1 !== e.nodeType || !m(e).is(c)))1 === e.nodeType && d.push(e), e = e[b];
        return d
    }, sibling: function (a, b) {
        for (var c = []; a; a = a.nextSibling)1 === a.nodeType && a !== b && c.push(a);
        return c
    }}), m.fn.extend({has: function (a) {
        var b, c = m(a, this), d = c.length;
        return this.filter(function () {
            for (b = 0; d > b; b++)if (m.contains(this, c[b]))return!0
        })
    }, closest: function (a, b) {
        for (var c, d = 0, e = this.length, f = [], g = t.test(a) || "string" != typeof a ? m(a, b || this.context) : 0; e > d; d++)for (c = this[d]; c && c !== b; c = c.parentNode)if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && m.find.matchesSelector(c, a))) {
            f.push(c);
            break
        }
        return this.pushStack(f.length > 1 ? m.unique(f) : f)
    }, index: function (a) {
        return a ? "string" == typeof a ? m.inArray(this[0], m(a)) : m.inArray(a.jquery ? a[0] : a, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
    }, add: function (a, b) {
        return this.pushStack(m.unique(m.merge(this.get(), m(a, b))))
    }, addBack: function (a) {
        return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
    }});
    function D(a, b) {
        do a = a[b]; while (a && 1 !== a.nodeType);
        return a
    }

    m.each({parent: function (a) {
        var b = a.parentNode;
        return b && 11 !== b.nodeType ? b : null
    }, parents: function (a) {
        return m.dir(a, "parentNode")
    }, parentsUntil: function (a, b, c) {
        return m.dir(a, "parentNode", c)
    }, next: function (a) {
        return D(a, "nextSibling")
    }, prev: function (a) {
        return D(a, "previousSibling")
    }, nextAll: function (a) {
        return m.dir(a, "nextSibling")
    }, prevAll: function (a) {
        return m.dir(a, "previousSibling")
    }, nextUntil: function (a, b, c) {
        return m.dir(a, "nextSibling", c)
    }, prevUntil: function (a, b, c) {
        return m.dir(a, "previousSibling", c)
    }, siblings: function (a) {
        return m.sibling((a.parentNode || {}).firstChild, a)
    }, children: function (a) {
        return m.sibling(a.firstChild)
    }, contents: function (a) {
        return m.nodeName(a, "iframe") ? a.contentDocument || a.contentWindow.document : m.merge([], a.childNodes)
    }}, function (a, b) {
        m.fn[a] = function (c, d) {
            var e = m.map(this, b, c);
            return"Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = m.filter(d, e)), this.length > 1 && (C[a] || (e = m.unique(e)), B.test(a) && (e = e.reverse())), this.pushStack(e)
        }
    });
    var E = /\S+/g, F = {};

    function G(a) {
        var b = F[a] = {};
        return m.each(a.match(E) || [], function (a, c) {
            b[c] = !0
        }), b
    }

    m.Callbacks = function (a) {
        a = "string" == typeof a ? F[a] || G(a) : m.extend({}, a);
        var b, c, d, e, f, g, h = [], i = !a.once && [], j = function (l) {
            for (c = a.memory && l, d = !0, f = g || 0, g = 0, e = h.length, b = !0; h && e > f; f++)if (h[f].apply(l[0], l[1]) === !1 && a.stopOnFalse) {
                c = !1;
                break
            }
            b = !1, h && (i ? i.length && j(i.shift()) : c ? h = [] : k.disable())
        }, k = {add: function () {
            if (h) {
                var d = h.length;
                !function f(b) {
                    m.each(b, function (b, c) {
                        var d = m.type(c);
                        "function" === d ? a.unique && k.has(c) || h.push(c) : c && c.length && "string" !== d && f(c)
                    })
                }(arguments), b ? e = h.length : c && (g = d, j(c))
            }
            return this
        }, remove: function () {
            return h && m.each(arguments, function (a, c) {
                var d;
                while ((d = m.inArray(c, h, d)) > -1)h.splice(d, 1), b && (e >= d && e--, f >= d && f--)
            }), this
        }, has: function (a) {
            return a ? m.inArray(a, h) > -1 : !(!h || !h.length)
        }, empty: function () {
            return h = [], e = 0, this
        }, disable: function () {
            return h = i = c = void 0, this
        }, disabled: function () {
            return!h
        }, lock: function () {
            return i = void 0, c || k.disable(), this
        }, locked: function () {
            return!i
        }, fireWith: function (a, c) {
            return!h || d && !i || (c = c || [], c = [a, c.slice ? c.slice() : c], b ? i.push(c) : j(c)), this
        }, fire: function () {
            return k.fireWith(this, arguments), this
        }, fired: function () {
            return!!d
        }};
        return k
    }, m.extend({Deferred: function (a) {
        var b = [
            ["resolve", "done", m.Callbacks("once memory"), "resolved"],
            ["reject", "fail", m.Callbacks("once memory"), "rejected"],
            ["notify", "progress", m.Callbacks("memory")]
        ], c = "pending", d = {state: function () {
            return c
        }, always: function () {
            return e.done(arguments).fail(arguments), this
        }, then: function () {
            var a = arguments;
            return m.Deferred(function (c) {
                m.each(b, function (b, f) {
                    var g = m.isFunction(a[b]) && a[b];
                    e[f[1]](function () {
                        var a = g && g.apply(this, arguments);
                        a && m.isFunction(a.promise) ? a.promise().done(c.resolve).fail(c.reject).progress(c.notify) : c[f[0] + "With"](this === d ? c.promise() : this, g ? [a] : arguments)
                    })
                }), a = null
            }).promise()
        }, promise: function (a) {
            return null != a ? m.extend(a, d) : d
        }}, e = {};
        return d.pipe = d.then, m.each(b, function (a, f) {
            var g = f[2], h = f[3];
            d[f[1]] = g.add, h && g.add(function () {
                c = h
            }, b[1 ^ a][2].disable, b[2][2].lock), e[f[0]] = function () {
                return e[f[0] + "With"](this === e ? d : this, arguments), this
            }, e[f[0] + "With"] = g.fireWith
        }), d.promise(e), a && a.call(e, e), e
    }, when: function (a) {
        var b = 0, c = d.call(arguments), e = c.length, f = 1 !== e || a && m.isFunction(a.promise) ? e : 0, g = 1 === f ? a : m.Deferred(), h = function (a, b, c) {
            return function (e) {
                b[a] = this, c[a] = arguments.length > 1 ? d.call(arguments) : e, c === i ? g.notifyWith(b, c) : --f || g.resolveWith(b, c)
            }
        }, i, j, k;
        if (e > 1)for (i = new Array(e), j = new Array(e), k = new Array(e); e > b; b++)c[b] && m.isFunction(c[b].promise) ? c[b].promise().done(h(b, k, c)).fail(g.reject).progress(h(b, j, i)) : --f;
        return f || g.resolveWith(k, c), g.promise()
    }});
    var H;
    m.fn.ready = function (a) {
        return m.ready.promise().done(a), this
    }, m.extend({isReady: !1, readyWait: 1, holdReady: function (a) {
        a ? m.readyWait++ : m.ready(!0)
    }, ready: function (a) {
        if (a === !0 ? !--m.readyWait : !m.isReady) {
            if (!y.body)return setTimeout(m.ready);
            m.isReady = !0, a !== !0 && --m.readyWait > 0 || (H.resolveWith(y, [m]), m.fn.triggerHandler && (m(y).triggerHandler("ready"), m(y).off("ready")))
        }
    }});
    function I() {
        y.addEventListener ? (y.removeEventListener("DOMContentLoaded", J, !1), a.removeEventListener("load", J, !1)) : (y.detachEvent("onreadystatechange", J), a.detachEvent("onload", J))
    }

    function J() {
        (y.addEventListener || "load" === event.type || "complete" === y.readyState) && (I(), m.ready())
    }

    m.ready.promise = function (b) {
        if (!H)if (H = m.Deferred(), "complete" === y.readyState)setTimeout(m.ready); else if (y.addEventListener)y.addEventListener("DOMContentLoaded", J, !1), a.addEventListener("load", J, !1); else {
            y.attachEvent("onreadystatechange", J), a.attachEvent("onload", J);
            var c = !1;
            try {
                c = null == a.frameElement && y.documentElement
            } catch (d) {
            }
            c && c.doScroll && !function e() {
                if (!m.isReady) {
                    try {
                        c.doScroll("left")
                    } catch (a) {
                        return setTimeout(e, 50)
                    }
                    I(), m.ready()
                }
            }()
        }
        return H.promise(b)
    };
    var K = "undefined", L;
    for (L in m(k))break;
    k.ownLast = "0" !== L, k.inlineBlockNeedsLayout = !1, m(function () {
        var a, b, c, d;
        c = y.getElementsByTagName("body")[0], c && c.style && (b = y.createElement("div"), d = y.createElement("div"), d.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", c.appendChild(d).appendChild(b), typeof b.style.zoom !== K && (b.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", k.inlineBlockNeedsLayout = a = 3 === b.offsetWidth, a && (c.style.zoom = 1)), c.removeChild(d))
    }), function () {
        var a = y.createElement("div");
        if (null == k.deleteExpando) {
            k.deleteExpando = !0;
            try {
                delete a.test
            } catch (b) {
                k.deleteExpando = !1
            }
        }
        a = null
    }(), m.acceptData = function (a) {
        var b = m.noData[(a.nodeName + " ").toLowerCase()], c = +a.nodeType || 1;
        return 1 !== c && 9 !== c ? !1 : !b || b !== !0 && a.getAttribute("classid") === b
    };
    var M = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, N = /([A-Z])/g;

    function O(a, b, c) {
        if (void 0 === c && 1 === a.nodeType) {
            var d = "data-" + b.replace(N, "-$1").toLowerCase();
            if (c = a.getAttribute(d), "string" == typeof c) {
                try {
                    c = "true" === c ? !0 : "false" === c ? !1 : "null" === c ? null : +c + "" === c ? +c : M.test(c) ? m.parseJSON(c) : c
                } catch (e) {
                }
                m.data(a, b, c)
            } else c = void 0
        }
        return c
    }

    function P(a) {
        var b;
        for (b in a)if (("data" !== b || !m.isEmptyObject(a[b])) && "toJSON" !== b)return!1;
        return!0
    }

    function Q(a, b, d, e) {
        if (m.acceptData(a)) {
            var f, g, h = m.expando, i = a.nodeType, j = i ? m.cache : a, k = i ? a[h] : a[h] && h;
            if (k && j[k] && (e || j[k].data) || void 0 !== d || "string" != typeof b)return k || (k = i ? a[h] = c.pop() || m.guid++ : h), j[k] || (j[k] = i ? {} : {toJSON: m.noop}), ("object" == typeof b || "function" == typeof b) && (e ? j[k] = m.extend(j[k], b) : j[k].data = m.extend(j[k].data, b)), g = j[k], e || (g.data || (g.data = {}), g = g.data), void 0 !== d && (g[m.camelCase(b)] = d), "string" == typeof b ? (f = g[b], null == f && (f = g[m.camelCase(b)])) : f = g, f
        }
    }

    function R(a, b, c) {
        if (m.acceptData(a)) {
            var d, e, f = a.nodeType, g = f ? m.cache : a, h = f ? a[m.expando] : m.expando;
            if (g[h]) {
                if (b && (d = c ? g[h] : g[h].data)) {
                    m.isArray(b) ? b = b.concat(m.map(b, m.camelCase)) : b in d ? b = [b] : (b = m.camelCase(b), b = b in d ? [b] : b.split(" ")), e = b.length;
                    while (e--)delete d[b[e]];
                    if (c ? !P(d) : !m.isEmptyObject(d))return
                }
                (c || (delete g[h].data, P(g[h]))) && (f ? m.cleanData([a], !0) : k.deleteExpando || g != g.window ? delete g[h] : g[h] = null)
            }
        }
    }

    m.extend({cache: {}, noData: {"applet ": !0, "embed ": !0, "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"}, hasData: function (a) {
        return a = a.nodeType ? m.cache[a[m.expando]] : a[m.expando], !!a && !P(a)
    }, data: function (a, b, c) {
        return Q(a, b, c)
    }, removeData: function (a, b) {
        return R(a, b)
    }, _data: function (a, b, c) {
        return Q(a, b, c, !0)
    }, _removeData: function (a, b) {
        return R(a, b, !0)
    }}), m.fn.extend({data: function (a, b) {
        var c, d, e, f = this[0], g = f && f.attributes;
        if (void 0 === a) {
            if (this.length && (e = m.data(f), 1 === f.nodeType && !m._data(f, "parsedAttrs"))) {
                c = g.length;
                while (c--)g[c] && (d = g[c].name, 0 === d.indexOf("data-") && (d = m.camelCase(d.slice(5)), O(f, d, e[d])));
                m._data(f, "parsedAttrs", !0)
            }
            return e
        }
        return"object" == typeof a ? this.each(function () {
            m.data(this, a)
        }) : arguments.length > 1 ? this.each(function () {
            m.data(this, a, b)
        }) : f ? O(f, a, m.data(f, a)) : void 0
    }, removeData: function (a) {
        return this.each(function () {
            m.removeData(this, a)
        })
    }}), m.extend({queue: function (a, b, c) {
        var d;
        return a ? (b = (b || "fx") + "queue", d = m._data(a, b), c && (!d || m.isArray(c) ? d = m._data(a, b, m.makeArray(c)) : d.push(c)), d || []) : void 0
    }, dequeue: function (a, b) {
        b = b || "fx";
        var c = m.queue(a, b), d = c.length, e = c.shift(), f = m._queueHooks(a, b), g = function () {
            m.dequeue(a, b)
        };
        "inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire()
    }, _queueHooks: function (a, b) {
        var c = b + "queueHooks";
        return m._data(a, c) || m._data(a, c, {empty: m.Callbacks("once memory").add(function () {
            m._removeData(a, b + "queue"), m._removeData(a, c)
        })})
    }}), m.fn.extend({queue: function (a, b) {
        var c = 2;
        return"string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? m.queue(this[0], a) : void 0 === b ? this : this.each(function () {
            var c = m.queue(this, a, b);
            m._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && m.dequeue(this, a)
        })
    }, dequeue: function (a) {
        return this.each(function () {
            m.dequeue(this, a)
        })
    }, clearQueue: function (a) {
        return this.queue(a || "fx", [])
    }, promise: function (a, b) {
        var c, d = 1, e = m.Deferred(), f = this, g = this.length, h = function () {
            --d || e.resolveWith(f, [f])
        };
        "string" != typeof a && (b = a, a = void 0), a = a || "fx";
        while (g--)c = m._data(f[g], a + "queueHooks"), c && c.empty && (d++, c.empty.add(h));
        return h(), e.promise(b)
    }});
    var S = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, T = ["Top", "Right", "Bottom", "Left"], U = function (a, b) {
        return a = b || a, "none" === m.css(a, "display") || !m.contains(a.ownerDocument, a)
    }, V = m.access = function (a, b, c, d, e, f, g) {
        var h = 0, i = a.length, j = null == c;
        if ("object" === m.type(c)) {
            e = !0;
            for (h in c)m.access(a, b, h, c[h], !0, f, g)
        } else if (void 0 !== d && (e = !0, m.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), b = null) : (j = b, b = function (a, b, c) {
            return j.call(m(a), c)
        })), b))for (; i > h; h++)b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
        return e ? a : j ? b.call(a) : i ? b(a[0], c) : f
    }, W = /^(?:checkbox|radio)$/i;
    !function () {
        var a = y.createElement("input"), b = y.createElement("div"), c = y.createDocumentFragment();
        if (b.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", k.leadingWhitespace = 3 === b.firstChild.nodeType, k.tbody = !b.getElementsByTagName("tbody").length, k.htmlSerialize = !!b.getElementsByTagName("link").length, k.html5Clone = "<:nav></:nav>" !== y.createElement("nav").cloneNode(!0).outerHTML, a.type = "checkbox", a.checked = !0, c.appendChild(a), k.appendChecked = a.checked, b.innerHTML = "<textarea>x</textarea>", k.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue, c.appendChild(b), b.innerHTML = "<input type='radio' checked='checked' name='t'/>", k.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked, k.noCloneEvent = !0, b.attachEvent && (b.attachEvent("onclick", function () {
            k.noCloneEvent = !1
        }), b.cloneNode(!0).click()), null == k.deleteExpando) {
            k.deleteExpando = !0;
            try {
                delete b.test
            } catch (d) {
                k.deleteExpando = !1
            }
        }
    }(), function () {
        var b, c, d = y.createElement("div");
        for (b in{submit: !0, change: !0, focusin: !0})c = "on" + b, (k[b + "Bubbles"] = c in a) || (d.setAttribute(c, "t"), k[b + "Bubbles"] = d.attributes[c].expando === !1);
        d = null
    }();
    var X = /^(?:input|select|textarea)$/i, Y = /^key/, Z = /^(?:mouse|pointer|contextmenu)|click/, $ = /^(?:focusinfocus|focusoutblur)$/, _ = /^([^.]*)(?:\.(.+)|)$/;

    function ab() {
        return!0
    }

    function bb() {
        return!1
    }

    function cb() {
        try {
            return y.activeElement
        } catch (a) {
        }
    }

    m.event = {global: {}, add: function (a, b, c, d, e) {
        var f, g, h, i, j, k, l, n, o, p, q, r = m._data(a);
        if (r) {
            c.handler && (i = c, c = i.handler, e = i.selector), c.guid || (c.guid = m.guid++), (g = r.events) || (g = r.events = {}), (k = r.handle) || (k = r.handle = function (a) {
                return typeof m === K || a && m.event.triggered === a.type ? void 0 : m.event.dispatch.apply(k.elem, arguments)
            }, k.elem = a), b = (b || "").match(E) || [""], h = b.length;
            while (h--)f = _.exec(b[h]) || [], o = q = f[1], p = (f[2] || "").split(".").sort(), o && (j = m.event.special[o] || {}, o = (e ? j.delegateType : j.bindType) || o, j = m.event.special[o] || {}, l = m.extend({type: o, origType: q, data: d, handler: c, guid: c.guid, selector: e, needsContext: e && m.expr.match.needsContext.test(e), namespace: p.join(".")}, i), (n = g[o]) || (n = g[o] = [], n.delegateCount = 0, j.setup && j.setup.call(a, d, p, k) !== !1 || (a.addEventListener ? a.addEventListener(o, k, !1) : a.attachEvent && a.attachEvent("on" + o, k))), j.add && (j.add.call(a, l), l.handler.guid || (l.handler.guid = c.guid)), e ? n.splice(n.delegateCount++, 0, l) : n.push(l), m.event.global[o] = !0);
            a = null
        }
    }, remove: function (a, b, c, d, e) {
        var f, g, h, i, j, k, l, n, o, p, q, r = m.hasData(a) && m._data(a);
        if (r && (k = r.events)) {
            b = (b || "").match(E) || [""], j = b.length;
            while (j--)if (h = _.exec(b[j]) || [], o = q = h[1], p = (h[2] || "").split(".").sort(), o) {
                l = m.event.special[o] || {}, o = (d ? l.delegateType : l.bindType) || o, n = k[o] || [], h = h[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), i = f = n.length;
                while (f--)g = n[f], !e && q !== g.origType || c && c.guid !== g.guid || h && !h.test(g.namespace) || d && d !== g.selector && ("**" !== d || !g.selector) || (n.splice(f, 1), g.selector && n.delegateCount--, l.remove && l.remove.call(a, g));
                i && !n.length && (l.teardown && l.teardown.call(a, p, r.handle) !== !1 || m.removeEvent(a, o, r.handle), delete k[o])
            } else for (o in k)m.event.remove(a, o + b[j], c, d, !0);
            m.isEmptyObject(k) && (delete r.handle, m._removeData(a, "events"))
        }
    }, trigger: function (b, c, d, e) {
        var f, g, h, i, k, l, n, o = [d || y], p = j.call(b, "type") ? b.type : b, q = j.call(b, "namespace") ? b.namespace.split(".") : [];
        if (h = l = d = d || y, 3 !== d.nodeType && 8 !== d.nodeType && !$.test(p + m.event.triggered) && (p.indexOf(".") >= 0 && (q = p.split("."), p = q.shift(), q.sort()), g = p.indexOf(":") < 0 && "on" + p, b = b[m.expando] ? b : new m.Event(p, "object" == typeof b && b), b.isTrigger = e ? 2 : 3, b.namespace = q.join("."), b.namespace_re = b.namespace ? new RegExp("(^|\\.)" + q.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target || (b.target = d), c = null == c ? [b] : m.makeArray(c, [b]), k = m.event.special[p] || {}, e || !k.trigger || k.trigger.apply(d, c) !== !1)) {
            if (!e && !k.noBubble && !m.isWindow(d)) {
                for (i = k.delegateType || p, $.test(i + p) || (h = h.parentNode); h; h = h.parentNode)o.push(h), l = h;
                l === (d.ownerDocument || y) && o.push(l.defaultView || l.parentWindow || a)
            }
            n = 0;
            while ((h = o[n++]) && !b.isPropagationStopped())b.type = n > 1 ? i : k.bindType || p, f = (m._data(h, "events") || {})[b.type] && m._data(h, "handle"), f && f.apply(h, c), f = g && h[g], f && f.apply && m.acceptData(h) && (b.result = f.apply(h, c), b.result === !1 && b.preventDefault());
            if (b.type = p, !e && !b.isDefaultPrevented() && (!k._default || k._default.apply(o.pop(), c) === !1) && m.acceptData(d) && g && d[p] && !m.isWindow(d)) {
                l = d[g], l && (d[g] = null), m.event.triggered = p;
                try {
                    d[p]()
                } catch (r) {
                }
                m.event.triggered = void 0, l && (d[g] = l)
            }
            return b.result
        }
    }, dispatch: function (a) {
        a = m.event.fix(a);
        var b, c, e, f, g, h = [], i = d.call(arguments), j = (m._data(this, "events") || {})[a.type] || [], k = m.event.special[a.type] || {};
        if (i[0] = a, a.delegateTarget = this, !k.preDispatch || k.preDispatch.call(this, a) !== !1) {
            h = m.event.handlers.call(this, a, j), b = 0;
            while ((f = h[b++]) && !a.isPropagationStopped()) {
                a.currentTarget = f.elem, g = 0;
                while ((e = f.handlers[g++]) && !a.isImmediatePropagationStopped())(!a.namespace_re || a.namespace_re.test(e.namespace)) && (a.handleObj = e, a.data = e.data, c = ((m.event.special[e.origType] || {}).handle || e.handler).apply(f.elem, i), void 0 !== c && (a.result = c) === !1 && (a.preventDefault(), a.stopPropagation()))
            }
            return k.postDispatch && k.postDispatch.call(this, a), a.result
        }
    }, handlers: function (a, b) {
        var c, d, e, f, g = [], h = b.delegateCount, i = a.target;
        if (h && i.nodeType && (!a.button || "click" !== a.type))for (; i != this; i = i.parentNode || this)if (1 === i.nodeType && (i.disabled !== !0 || "click" !== a.type)) {
            for (e = [], f = 0; h > f; f++)d = b[f], c = d.selector + " ", void 0 === e[c] && (e[c] = d.needsContext ? m(c, this).index(i) >= 0 : m.find(c, this, null, [i]).length), e[c] && e.push(d);
            e.length && g.push({elem: i, handlers: e})
        }
        return h < b.length && g.push({elem: this, handlers: b.slice(h)}), g
    }, fix: function (a) {
        if (a[m.expando])return a;
        var b, c, d, e = a.type, f = a, g = this.fixHooks[e];
        g || (this.fixHooks[e] = g = Z.test(e) ? this.mouseHooks : Y.test(e) ? this.keyHooks : {}), d = g.props ? this.props.concat(g.props) : this.props, a = new m.Event(f), b = d.length;
        while (b--)c = d[b], a[c] = f[c];
        return a.target || (a.target = f.srcElement || y), 3 === a.target.nodeType && (a.target = a.target.parentNode), a.metaKey = !!a.metaKey, g.filter ? g.filter(a, f) : a
    }, props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "), fixHooks: {}, keyHooks: {props: "char charCode key keyCode".split(" "), filter: function (a, b) {
        return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), a
    }}, mouseHooks: {props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "), filter: function (a, b) {
        var c, d, e, f = b.button, g = b.fromElement;
        return null == a.pageX && null != b.clientX && (d = a.target.ownerDocument || y, e = d.documentElement, c = d.body, a.pageX = b.clientX + (e && e.scrollLeft || c && c.scrollLeft || 0) - (e && e.clientLeft || c && c.clientLeft || 0), a.pageY = b.clientY + (e && e.scrollTop || c && c.scrollTop || 0) - (e && e.clientTop || c && c.clientTop || 0)), !a.relatedTarget && g && (a.relatedTarget = g === a.target ? b.toElement : g), a.which || void 0 === f || (a.which = 1 & f ? 1 : 2 & f ? 3 : 4 & f ? 2 : 0), a
    }}, special: {load: {noBubble: !0}, focus: {trigger: function () {
        if (this !== cb() && this.focus)try {
            return this.focus(), !1
        } catch (a) {
        }
    }, delegateType: "focusin"}, blur: {trigger: function () {
        return this === cb() && this.blur ? (this.blur(), !1) : void 0
    }, delegateType: "focusout"}, click: {trigger: function () {
        return m.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0
    }, _default: function (a) {
        return m.nodeName(a.target, "a")
    }}, beforeunload: {postDispatch: function (a) {
        void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result)
    }}}, simulate: function (a, b, c, d) {
        var e = m.extend(new m.Event, c, {type: a, isSimulated: !0, originalEvent: {}});
        d ? m.event.trigger(e, null, b) : m.event.dispatch.call(b, e), e.isDefaultPrevented() && c.preventDefault()
    }}, m.removeEvent = y.removeEventListener ? function (a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c, !1)
    } : function (a, b, c) {
        var d = "on" + b;
        a.detachEvent && (typeof a[d] === K && (a[d] = null), a.detachEvent(d, c))
    }, m.Event = function (a, b) {
        return this instanceof m.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? ab : bb) : this.type = a, b && m.extend(this, b), this.timeStamp = a && a.timeStamp || m.now(), void(this[m.expando] = !0)) : new m.Event(a, b)
    }, m.Event.prototype = {isDefaultPrevented: bb, isPropagationStopped: bb, isImmediatePropagationStopped: bb, preventDefault: function () {
        var a = this.originalEvent;
        this.isDefaultPrevented = ab, a && (a.preventDefault ? a.preventDefault() : a.returnValue = !1)
    }, stopPropagation: function () {
        var a = this.originalEvent;
        this.isPropagationStopped = ab, a && (a.stopPropagation && a.stopPropagation(), a.cancelBubble = !0)
    }, stopImmediatePropagation: function () {
        var a = this.originalEvent;
        this.isImmediatePropagationStopped = ab, a && a.stopImmediatePropagation && a.stopImmediatePropagation(), this.stopPropagation()
    }}, m.each({mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout"}, function (a, b) {
        m.event.special[a] = {delegateType: b, bindType: b, handle: function (a) {
            var c, d = this, e = a.relatedTarget, f = a.handleObj;
            return(!e || e !== d && !m.contains(d, e)) && (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c
        }}
    }), k.submitBubbles || (m.event.special.submit = {setup: function () {
        return m.nodeName(this, "form") ? !1 : void m.event.add(this, "click._submit keypress._submit", function (a) {
            var b = a.target, c = m.nodeName(b, "input") || m.nodeName(b, "button") ? b.form : void 0;
            c && !m._data(c, "submitBubbles") && (m.event.add(c, "submit._submit", function (a) {
                a._submit_bubble = !0
            }), m._data(c, "submitBubbles", !0))
        })
    }, postDispatch: function (a) {
        a._submit_bubble && (delete a._submit_bubble, this.parentNode && !a.isTrigger && m.event.simulate("submit", this.parentNode, a, !0))
    }, teardown: function () {
        return m.nodeName(this, "form") ? !1 : void m.event.remove(this, "._submit")
    }}), k.changeBubbles || (m.event.special.change = {setup: function () {
        return X.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (m.event.add(this, "propertychange._change", function (a) {
            "checked" === a.originalEvent.propertyName && (this._just_changed = !0)
        }), m.event.add(this, "click._change", function (a) {
            this._just_changed && !a.isTrigger && (this._just_changed = !1), m.event.simulate("change", this, a, !0)
        })), !1) : void m.event.add(this, "beforeactivate._change", function (a) {
            var b = a.target;
            X.test(b.nodeName) && !m._data(b, "changeBubbles") && (m.event.add(b, "change._change", function (a) {
                !this.parentNode || a.isSimulated || a.isTrigger || m.event.simulate("change", this.parentNode, a, !0)
            }), m._data(b, "changeBubbles", !0))
        })
    }, handle: function (a) {
        var b = a.target;
        return this !== b || a.isSimulated || a.isTrigger || "radio" !== b.type && "checkbox" !== b.type ? a.handleObj.handler.apply(this, arguments) : void 0
    }, teardown: function () {
        return m.event.remove(this, "._change"), !X.test(this.nodeName)
    }}), k.focusinBubbles || m.each({focus: "focusin", blur: "focusout"}, function (a, b) {
        var c = function (a) {
            m.event.simulate(b, a.target, m.event.fix(a), !0)
        };
        m.event.special[b] = {setup: function () {
            var d = this.ownerDocument || this, e = m._data(d, b);
            e || d.addEventListener(a, c, !0), m._data(d, b, (e || 0) + 1)
        }, teardown: function () {
            var d = this.ownerDocument || this, e = m._data(d, b) - 1;
            e ? m._data(d, b, e) : (d.removeEventListener(a, c, !0), m._removeData(d, b))
        }}
    }), m.fn.extend({on: function (a, b, c, d, e) {
        var f, g;
        if ("object" == typeof a) {
            "string" != typeof b && (c = c || b, b = void 0);
            for (f in a)this.on(f, b, c, a[f], e);
            return this
        }
        if (null == c && null == d ? (d = b, c = b = void 0) : null == d && ("string" == typeof b ? (d = c, c = void 0) : (d = c, c = b, b = void 0)), d === !1)d = bb; else if (!d)return this;
        return 1 === e && (g = d, d = function (a) {
            return m().off(a), g.apply(this, arguments)
        }, d.guid = g.guid || (g.guid = m.guid++)), this.each(function () {
            m.event.add(this, a, d, c, b)
        })
    }, one: function (a, b, c, d) {
        return this.on(a, b, c, d, 1)
    }, off: function (a, b, c) {
        var d, e;
        if (a && a.preventDefault && a.handleObj)return d = a.handleObj, m(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this;
        if ("object" == typeof a) {
            for (e in a)this.off(e, b, a[e]);
            return this
        }
        return(b === !1 || "function" == typeof b) && (c = b, b = void 0), c === !1 && (c = bb), this.each(function () {
            m.event.remove(this, a, c, b)
        })
    }, trigger: function (a, b) {
        return this.each(function () {
            m.event.trigger(a, b, this)
        })
    }, triggerHandler: function (a, b) {
        var c = this[0];
        return c ? m.event.trigger(a, b, c, !0) : void 0
    }});
    function db(a) {
        var b = eb.split("|"), c = a.createDocumentFragment();
        if (c.createElement)while (b.length)c.createElement(b.pop());
        return c
    }

    var eb = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video", fb = / jQuery\d+="(?:null|\d+)"/g, gb = new RegExp("<(?:" + eb + ")[\\s/>]", "i"), hb = /^\s+/, ib = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, jb = /<([\w:]+)/, kb = /<tbody/i, lb = /<|&#?\w+;/, mb = /<(?:script|style|link)/i, nb = /checked\s*(?:[^=]|=\s*.checked.)/i, ob = /^$|\/(?:java|ecma)script/i, pb = /^true\/(.*)/, qb = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, rb = {option: [1, "<select multiple='multiple'>", "</select>"], legend: [1, "<fieldset>", "</fieldset>"], area: [1, "<map>", "</map>"], param: [1, "<object>", "</object>"], thead: [1, "<table>", "</table>"], tr: [2, "<table><tbody>", "</tbody></table>"], col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: k.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]}, sb = db(y), tb = sb.appendChild(y.createElement("div"));
    rb.optgroup = rb.option, rb.tbody = rb.tfoot = rb.colgroup = rb.caption = rb.thead, rb.th = rb.td;
    function ub(a, b) {
        var c, d, e = 0, f = typeof a.getElementsByTagName !== K ? a.getElementsByTagName(b || "*") : typeof a.querySelectorAll !== K ? a.querySelectorAll(b || "*") : void 0;
        if (!f)for (f = [], c = a.childNodes || a; null != (d = c[e]); e++)!b || m.nodeName(d, b) ? f.push(d) : m.merge(f, ub(d, b));
        return void 0 === b || b && m.nodeName(a, b) ? m.merge([a], f) : f
    }

    function vb(a) {
        W.test(a.type) && (a.defaultChecked = a.checked)
    }

    function wb(a, b) {
        return m.nodeName(a, "table") && m.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a
    }

    function xb(a) {
        return a.type = (null !== m.find.attr(a, "type")) + "/" + a.type, a
    }

    function yb(a) {
        var b = pb.exec(a.type);
        return b ? a.type = b[1] : a.removeAttribute("type"), a
    }

    function zb(a, b) {
        for (var c, d = 0; null != (c = a[d]); d++)m._data(c, "globalEval", !b || m._data(b[d], "globalEval"))
    }

    function Ab(a, b) {
        if (1 === b.nodeType && m.hasData(a)) {
            var c, d, e, f = m._data(a), g = m._data(b, f), h = f.events;
            if (h) {
                delete g.handle, g.events = {};
                for (c in h)for (d = 0, e = h[c].length; e > d; d++)m.event.add(b, c, h[c][d])
            }
            g.data && (g.data = m.extend({}, g.data))
        }
    }

    function Bb(a, b) {
        var c, d, e;
        if (1 === b.nodeType) {
            if (c = b.nodeName.toLowerCase(), !k.noCloneEvent && b[m.expando]) {
                e = m._data(b);
                for (d in e.events)m.removeEvent(b, d, e.handle);
                b.removeAttribute(m.expando)
            }
            "script" === c && b.text !== a.text ? (xb(b).text = a.text, yb(b)) : "object" === c ? (b.parentNode && (b.outerHTML = a.outerHTML), k.html5Clone && a.innerHTML && !m.trim(b.innerHTML) && (b.innerHTML = a.innerHTML)) : "input" === c && W.test(a.type) ? (b.defaultChecked = b.checked = a.checked, b.value !== a.value && (b.value = a.value)) : "option" === c ? b.defaultSelected = b.selected = a.defaultSelected : ("input" === c || "textarea" === c) && (b.defaultValue = a.defaultValue)
        }
    }

    m.extend({clone: function (a, b, c) {
        var d, e, f, g, h, i = m.contains(a.ownerDocument, a);
        if (k.html5Clone || m.isXMLDoc(a) || !gb.test("<" + a.nodeName + ">") ? f = a.cloneNode(!0) : (tb.innerHTML = a.outerHTML, tb.removeChild(f = tb.firstChild)), !(k.noCloneEvent && k.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || m.isXMLDoc(a)))for (d = ub(f), h = ub(a), g = 0; null != (e = h[g]); ++g)d[g] && Bb(e, d[g]);
        if (b)if (c)for (h = h || ub(a), d = d || ub(f), g = 0; null != (e = h[g]); g++)Ab(e, d[g]); else Ab(a, f);
        return d = ub(f, "script"), d.length > 0 && zb(d, !i && ub(a, "script")), d = h = e = null, f
    }, buildFragment: function (a, b, c, d) {
        for (var e, f, g, h, i, j, l, n = a.length, o = db(b), p = [], q = 0; n > q; q++)if (f = a[q], f || 0 === f)if ("object" === m.type(f))m.merge(p, f.nodeType ? [f] : f); else if (lb.test(f)) {
            h = h || o.appendChild(b.createElement("div")), i = (jb.exec(f) || ["", ""])[1].toLowerCase(), l = rb[i] || rb._default, h.innerHTML = l[1] + f.replace(ib, "<$1></$2>") + l[2], e = l[0];
            while (e--)h = h.lastChild;
            if (!k.leadingWhitespace && hb.test(f) && p.push(b.createTextNode(hb.exec(f)[0])), !k.tbody) {
                f = "table" !== i || kb.test(f) ? "<table>" !== l[1] || kb.test(f) ? 0 : h : h.firstChild, e = f && f.childNodes.length;
                while (e--)m.nodeName(j = f.childNodes[e], "tbody") && !j.childNodes.length && f.removeChild(j)
            }
            m.merge(p, h.childNodes), h.textContent = "";
            while (h.firstChild)h.removeChild(h.firstChild);
            h = o.lastChild
        } else p.push(b.createTextNode(f));
        h && o.removeChild(h), k.appendChecked || m.grep(ub(p, "input"), vb), q = 0;
        while (f = p[q++])if ((!d || -1 === m.inArray(f, d)) && (g = m.contains(f.ownerDocument, f), h = ub(o.appendChild(f), "script"), g && zb(h), c)) {
            e = 0;
            while (f = h[e++])ob.test(f.type || "") && c.push(f)
        }
        return h = null, o
    }, cleanData: function (a, b) {
        for (var d, e, f, g, h = 0, i = m.expando, j = m.cache, l = k.deleteExpando, n = m.event.special; null != (d = a[h]); h++)if ((b || m.acceptData(d)) && (f = d[i], g = f && j[f])) {
            if (g.events)for (e in g.events)n[e] ? m.event.remove(d, e) : m.removeEvent(d, e, g.handle);
            j[f] && (delete j[f], l ? delete d[i] : typeof d.removeAttribute !== K ? d.removeAttribute(i) : d[i] = null, c.push(f))
        }
    }}), m.fn.extend({text: function (a) {
        return V(this, function (a) {
            return void 0 === a ? m.text(this) : this.empty().append((this[0] && this[0].ownerDocument || y).createTextNode(a))
        }, null, a, arguments.length)
    }, append: function () {
        return this.domManip(arguments, function (a) {
            if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                var b = wb(this, a);
                b.appendChild(a)
            }
        })
    }, prepend: function () {
        return this.domManip(arguments, function (a) {
            if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                var b = wb(this, a);
                b.insertBefore(a, b.firstChild)
            }
        })
    }, before: function () {
        return this.domManip(arguments, function (a) {
            this.parentNode && this.parentNode.insertBefore(a, this)
        })
    }, after: function () {
        return this.domManip(arguments, function (a) {
            this.parentNode && this.parentNode.insertBefore(a, this.nextSibling)
        })
    }, remove: function (a, b) {
        for (var c, d = a ? m.filter(a, this) : this, e = 0; null != (c = d[e]); e++)b || 1 !== c.nodeType || m.cleanData(ub(c)), c.parentNode && (b && m.contains(c.ownerDocument, c) && zb(ub(c, "script")), c.parentNode.removeChild(c));
        return this
    }, empty: function () {
        for (var a, b = 0; null != (a = this[b]); b++) {
            1 === a.nodeType && m.cleanData(ub(a, !1));
            while (a.firstChild)a.removeChild(a.firstChild);
            a.options && m.nodeName(a, "select") && (a.options.length = 0)
        }
        return this
    }, clone: function (a, b) {
        return a = null == a ? !1 : a, b = null == b ? a : b, this.map(function () {
            return m.clone(this, a, b)
        })
    }, html: function (a) {
        return V(this, function (a) {
            var b = this[0] || {}, c = 0, d = this.length;
            if (void 0 === a)return 1 === b.nodeType ? b.innerHTML.replace(fb, "") : void 0;
            if (!("string" != typeof a || mb.test(a) || !k.htmlSerialize && gb.test(a) || !k.leadingWhitespace && hb.test(a) || rb[(jb.exec(a) || ["", ""])[1].toLowerCase()])) {
                a = a.replace(ib, "<$1></$2>");
                try {
                    for (; d > c; c++)b = this[c] || {}, 1 === b.nodeType && (m.cleanData(ub(b, !1)), b.innerHTML = a);
                    b = 0
                } catch (e) {
                }
            }
            b && this.empty().append(a)
        }, null, a, arguments.length)
    }, replaceWith: function () {
        var a = arguments[0];
        return this.domManip(arguments, function (b) {
            a = this.parentNode, m.cleanData(ub(this)), a && a.replaceChild(b, this)
        }), a && (a.length || a.nodeType) ? this : this.remove()
    }, detach: function (a) {
        return this.remove(a, !0)
    }, domManip: function (a, b) {
        a = e.apply([], a);
        var c, d, f, g, h, i, j = 0, l = this.length, n = this, o = l - 1, p = a[0], q = m.isFunction(p);
        if (q || l > 1 && "string" == typeof p && !k.checkClone && nb.test(p))return this.each(function (c) {
            var d = n.eq(c);
            q && (a[0] = p.call(this, c, d.html())), d.domManip(a, b)
        });
        if (l && (i = m.buildFragment(a, this[0].ownerDocument, !1, this), c = i.firstChild, 1 === i.childNodes.length && (i = c), c)) {
            for (g = m.map(ub(i, "script"), xb), f = g.length; l > j; j++)d = i, j !== o && (d = m.clone(d, !0, !0), f && m.merge(g, ub(d, "script"))), b.call(this[j], d, j);
            if (f)for (h = g[g.length - 1].ownerDocument, m.map(g, yb), j = 0; f > j; j++)d = g[j], ob.test(d.type || "") && !m._data(d, "globalEval") && m.contains(h, d) && (d.src ? m._evalUrl && m._evalUrl(d.src) : m.globalEval((d.text || d.textContent || d.innerHTML || "").replace(qb, "")));
            i = c = null
        }
        return this
    }}), m.each({appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith"}, function (a, b) {
        m.fn[a] = function (a) {
            for (var c, d = 0, e = [], g = m(a), h = g.length - 1; h >= d; d++)c = d === h ? this : this.clone(!0), m(g[d])[b](c), f.apply(e, c.get());
            return this.pushStack(e)
        }
    });
    var Cb, Db = {};

    function Eb(b, c) {
        var d, e = m(c.createElement(b)).appendTo(c.body), f = a.getDefaultComputedStyle && (d = a.getDefaultComputedStyle(e[0])) ? d.display : m.css(e[0], "display");
        return e.detach(), f
    }

    function Fb(a) {
        var b = y, c = Db[a];
        return c || (c = Eb(a, b), "none" !== c && c || (Cb = (Cb || m("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement), b = (Cb[0].contentWindow || Cb[0].contentDocument).document, b.write(), b.close(), c = Eb(a, b), Cb.detach()), Db[a] = c), c
    }

    !function () {
        var a;
        k.shrinkWrapBlocks = function () {
            if (null != a)return a;
            a = !1;
            var b, c, d;
            return c = y.getElementsByTagName("body")[0], c && c.style ? (b = y.createElement("div"), d = y.createElement("div"), d.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", c.appendChild(d).appendChild(b), typeof b.style.zoom !== K && (b.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", b.appendChild(y.createElement("div")).style.width = "5px", a = 3 !== b.offsetWidth), c.removeChild(d), a) : void 0
        }
    }();
    var Gb = /^margin/, Hb = new RegExp("^(" + S + ")(?!px)[a-z%]+$", "i"), Ib, Jb, Kb = /^(top|right|bottom|left)$/;
    a.getComputedStyle ? (Ib = function (b) {
        return b.ownerDocument.defaultView.opener ? b.ownerDocument.defaultView.getComputedStyle(b, null) : a.getComputedStyle(b, null)
    }, Jb = function (a, b, c) {
        var d, e, f, g, h = a.style;
        return c = c || Ib(a), g = c ? c.getPropertyValue(b) || c[b] : void 0, c && ("" !== g || m.contains(a.ownerDocument, a) || (g = m.style(a, b)), Hb.test(g) && Gb.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f)), void 0 === g ? g : g + ""
    }) : y.documentElement.currentStyle && (Ib = function (a) {
        return a.currentStyle
    }, Jb = function (a, b, c) {
        var d, e, f, g, h = a.style;
        return c = c || Ib(a), g = c ? c[b] : void 0, null == g && h && h[b] && (g = h[b]), Hb.test(g) && !Kb.test(b) && (d = h.left, e = a.runtimeStyle, f = e && e.left, f && (e.left = a.currentStyle.left), h.left = "fontSize" === b ? "1em" : g, g = h.pixelLeft + "px", h.left = d, f && (e.left = f)), void 0 === g ? g : g + "" || "auto"
    });
    function Lb(a, b) {
        return{get: function () {
            var c = a();
            if (null != c)return c ? void delete this.get : (this.get = b).apply(this, arguments)
        }}
    }

    !function () {
        var b, c, d, e, f, g, h;
        if (b = y.createElement("div"), b.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", d = b.getElementsByTagName("a")[0], c = d && d.style) {
            c.cssText = "float:left;opacity:.5", k.opacity = "0.5" === c.opacity, k.cssFloat = !!c.cssFloat, b.style.backgroundClip = "content-box", b.cloneNode(!0).style.backgroundClip = "", k.clearCloneStyle = "content-box" === b.style.backgroundClip, k.boxSizing = "" === c.boxSizing || "" === c.MozBoxSizing || "" === c.WebkitBoxSizing, m.extend(k, {reliableHiddenOffsets: function () {
                return null == g && i(), g
            }, boxSizingReliable: function () {
                return null == f && i(), f
            }, pixelPosition: function () {
                return null == e && i(), e
            }, reliableMarginRight: function () {
                return null == h && i(), h
            }});
            function i() {
                var b, c, d, i;
                c = y.getElementsByTagName("body")[0], c && c.style && (b = y.createElement("div"), d = y.createElement("div"), d.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", c.appendChild(d).appendChild(b), b.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", e = f = !1, h = !0, a.getComputedStyle && (e = "1%" !== (a.getComputedStyle(b, null) || {}).top, f = "4px" === (a.getComputedStyle(b, null) || {width: "4px"}).width, i = b.appendChild(y.createElement("div")), i.style.cssText = b.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", i.style.marginRight = i.style.width = "0", b.style.width = "1px", h = !parseFloat((a.getComputedStyle(i, null) || {}).marginRight), b.removeChild(i)), b.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", i = b.getElementsByTagName("td"), i[0].style.cssText = "margin:0;border:0;padding:0;display:none", g = 0 === i[0].offsetHeight, g && (i[0].style.display = "", i[1].style.display = "none", g = 0 === i[0].offsetHeight), c.removeChild(d))
            }
        }
    }(), m.swap = function (a, b, c, d) {
        var e, f, g = {};
        for (f in b)g[f] = a.style[f], a.style[f] = b[f];
        e = c.apply(a, d || []);
        for (f in b)a.style[f] = g[f];
        return e
    };
    var Mb = /alpha\([^)]*\)/i, Nb = /opacity\s*=\s*([^)]*)/, Ob = /^(none|table(?!-c[ea]).+)/, Pb = new RegExp("^(" + S + ")(.*)$", "i"), Qb = new RegExp("^([+-])=(" + S + ")", "i"), Rb = {position: "absolute", visibility: "hidden", display: "block"}, Sb = {letterSpacing: "0", fontWeight: "400"}, Tb = ["Webkit", "O", "Moz", "ms"];

    function Ub(a, b) {
        if (b in a)return b;
        var c = b.charAt(0).toUpperCase() + b.slice(1), d = b, e = Tb.length;
        while (e--)if (b = Tb[e] + c, b in a)return b;
        return d
    }

    function Vb(a, b) {
        for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++)d = a[g], d.style && (f[g] = m._data(d, "olddisplay"), c = d.style.display, b ? (f[g] || "none" !== c || (d.style.display = ""), "" === d.style.display && U(d) && (f[g] = m._data(d, "olddisplay", Fb(d.nodeName)))) : (e = U(d), (c && "none" !== c || !e) && m._data(d, "olddisplay", e ? c : m.css(d, "display"))));
        for (g = 0; h > g; g++)d = a[g], d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "" : "none"));
        return a
    }

    function Wb(a, b, c) {
        var d = Pb.exec(b);
        return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b
    }

    function Xb(a, b, c, d, e) {
        for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; 4 > f; f += 2)"margin" === c && (g += m.css(a, c + T[f], !0, e)), d ? ("content" === c && (g -= m.css(a, "padding" + T[f], !0, e)), "margin" !== c && (g -= m.css(a, "border" + T[f] + "Width", !0, e))) : (g += m.css(a, "padding" + T[f], !0, e), "padding" !== c && (g += m.css(a, "border" + T[f] + "Width", !0, e)));
        return g
    }

    function Yb(a, b, c) {
        var d = !0, e = "width" === b ? a.offsetWidth : a.offsetHeight, f = Ib(a), g = k.boxSizing && "border-box" === m.css(a, "boxSizing", !1, f);
        if (0 >= e || null == e) {
            if (e = Jb(a, b, f), (0 > e || null == e) && (e = a.style[b]), Hb.test(e))return e;
            d = g && (k.boxSizingReliable() || e === a.style[b]), e = parseFloat(e) || 0
        }
        return e + Xb(a, b, c || (g ? "border" : "content"), d, f) + "px"
    }

    m.extend({cssHooks: {opacity: {get: function (a, b) {
        if (b) {
            var c = Jb(a, "opacity");
            return"" === c ? "1" : c
        }
    }}}, cssNumber: {columnCount: !0, fillOpacity: !0, flexGrow: !0, flexShrink: !0, fontWeight: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0}, cssProps: {"float": k.cssFloat ? "cssFloat" : "styleFloat"}, style: function (a, b, c, d) {
        if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
            var e, f, g, h = m.camelCase(b), i = a.style;
            if (b = m.cssProps[h] || (m.cssProps[h] = Ub(i, h)), g = m.cssHooks[b] || m.cssHooks[h], void 0 === c)return g && "get"in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b];
            if (f = typeof c, "string" === f && (e = Qb.exec(c)) && (c = (e[1] + 1) * e[2] + parseFloat(m.css(a, b)), f = "number"), null != c && c === c && ("number" !== f || m.cssNumber[h] || (c += "px"), k.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"), !(g && "set"in g && void 0 === (c = g.set(a, c, d)))))try {
                i[b] = c
            } catch (j) {
            }
        }
    }, css: function (a, b, c, d) {
        var e, f, g, h = m.camelCase(b);
        return b = m.cssProps[h] || (m.cssProps[h] = Ub(a.style, h)), g = m.cssHooks[b] || m.cssHooks[h], g && "get"in g && (f = g.get(a, !0, c)), void 0 === f && (f = Jb(a, b, d)), "normal" === f && b in Sb && (f = Sb[b]), "" === c || c ? (e = parseFloat(f), c === !0 || m.isNumeric(e) ? e || 0 : f) : f
    }}), m.each(["height", "width"], function (a, b) {
        m.cssHooks[b] = {get: function (a, c, d) {
            return c ? Ob.test(m.css(a, "display")) && 0 === a.offsetWidth ? m.swap(a, Rb, function () {
                return Yb(a, b, d)
            }) : Yb(a, b, d) : void 0
        }, set: function (a, c, d) {
            var e = d && Ib(a);
            return Wb(a, c, d ? Xb(a, b, d, k.boxSizing && "border-box" === m.css(a, "boxSizing", !1, e), e) : 0)
        }}
    }), k.opacity || (m.cssHooks.opacity = {get: function (a, b) {
        return Nb.test((b && a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : b ? "1" : ""
    }, set: function (a, b) {
        var c = a.style, d = a.currentStyle, e = m.isNumeric(b) ? "alpha(opacity=" + 100 * b + ")" : "", f = d && d.filter || c.filter || "";
        c.zoom = 1, (b >= 1 || "" === b) && "" === m.trim(f.replace(Mb, "")) && c.removeAttribute && (c.removeAttribute("filter"), "" === b || d && !d.filter) || (c.filter = Mb.test(f) ? f.replace(Mb, e) : f + " " + e)
    }}), m.cssHooks.marginRight = Lb(k.reliableMarginRight, function (a, b) {
        return b ? m.swap(a, {display: "inline-block"}, Jb, [a, "marginRight"]) : void 0
    }), m.each({margin: "", padding: "", border: "Width"}, function (a, b) {
        m.cssHooks[a + b] = {expand: function (c) {
            for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; 4 > d; d++)e[a + T[d] + b] = f[d] || f[d - 2] || f[0];
            return e
        }}, Gb.test(a) || (m.cssHooks[a + b].set = Wb)
    }), m.fn.extend({css: function (a, b) {
        return V(this, function (a, b, c) {
            var d, e, f = {}, g = 0;
            if (m.isArray(b)) {
                for (d = Ib(a), e = b.length; e > g; g++)f[b[g]] = m.css(a, b[g], !1, d);
                return f
            }
            return void 0 !== c ? m.style(a, b, c) : m.css(a, b)
        }, a, b, arguments.length > 1)
    }, show: function () {
        return Vb(this, !0)
    }, hide: function () {
        return Vb(this)
    }, toggle: function (a) {
        return"boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function () {
            U(this) ? m(this).show() : m(this).hide()
        })
    }});
    function Zb(a, b, c, d, e) {
        return new Zb.prototype.init(a, b, c, d, e)
    }

    m.Tween = Zb, Zb.prototype = {constructor: Zb, init: function (a, b, c, d, e, f) {
        this.elem = a, this.prop = c, this.easing = e || "swing", this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (m.cssNumber[c] ? "" : "px")
    }, cur: function () {
        var a = Zb.propHooks[this.prop];
        return a && a.get ? a.get(this) : Zb.propHooks._default.get(this)
    }, run: function (a) {
        var b, c = Zb.propHooks[this.prop];
        return this.pos = b = this.options.duration ? m.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : Zb.propHooks._default.set(this), this
    }}, Zb.prototype.init.prototype = Zb.prototype, Zb.propHooks = {_default: {get: function (a) {
        var b;
        return null == a.elem[a.prop] || a.elem.style && null != a.elem.style[a.prop] ? (b = m.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0) : a.elem[a.prop]
    }, set: function (a) {
        m.fx.step[a.prop] ? m.fx.step[a.prop](a) : a.elem.style && (null != a.elem.style[m.cssProps[a.prop]] || m.cssHooks[a.prop]) ? m.style(a.elem, a.prop, a.now + a.unit) : a.elem[a.prop] = a.now
    }}}, Zb.propHooks.scrollTop = Zb.propHooks.scrollLeft = {set: function (a) {
        a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
    }}, m.easing = {linear: function (a) {
        return a
    }, swing: function (a) {
        return.5 - Math.cos(a * Math.PI) / 2
    }}, m.fx = Zb.prototype.init, m.fx.step = {};
    var $b, _b, ac = /^(?:toggle|show|hide)$/, bc = new RegExp("^(?:([+-])=|)(" + S + ")([a-z%]*)$", "i"), cc = /queueHooks$/, dc = [ic], ec = {"*": [function (a, b) {
        var c = this.createTween(a, b), d = c.cur(), e = bc.exec(b), f = e && e[3] || (m.cssNumber[a] ? "" : "px"), g = (m.cssNumber[a] || "px" !== f && +d) && bc.exec(m.css(c.elem, a)), h = 1, i = 20;
        if (g && g[3] !== f) {
            f = f || g[3], e = e || [], g = +d || 1;
            do h = h || ".5", g /= h, m.style(c.elem, a, g + f); while (h !== (h = c.cur() / d) && 1 !== h && --i)
        }
        return e && (g = c.start = +g || +d || 0, c.unit = f, c.end = e[1] ? g + (e[1] + 1) * e[2] : +e[2]), c
    }]};

    function fc() {
        return setTimeout(function () {
            $b = void 0
        }), $b = m.now()
    }

    function gc(a, b) {
        var c, d = {height: a}, e = 0;
        for (b = b ? 1 : 0; 4 > e; e += 2 - b)c = T[e], d["margin" + c] = d["padding" + c] = a;
        return b && (d.opacity = d.width = a), d
    }

    function hc(a, b, c) {
        for (var d, e = (ec[b] || []).concat(ec["*"]), f = 0, g = e.length; g > f; f++)if (d = e[f].call(c, b, a))return d
    }

    function ic(a, b, c) {
        var d, e, f, g, h, i, j, l, n = this, o = {}, p = a.style, q = a.nodeType && U(a), r = m._data(a, "fxshow");
        c.queue || (h = m._queueHooks(a, "fx"), null == h.unqueued && (h.unqueued = 0, i = h.empty.fire, h.empty.fire = function () {
            h.unqueued || i()
        }), h.unqueued++, n.always(function () {
            n.always(function () {
                h.unqueued--, m.queue(a, "fx").length || h.empty.fire()
            })
        })), 1 === a.nodeType && ("height"in b || "width"in b) && (c.overflow = [p.overflow, p.overflowX, p.overflowY], j = m.css(a, "display"), l = "none" === j ? m._data(a, "olddisplay") || Fb(a.nodeName) : j, "inline" === l && "none" === m.css(a, "float") && (k.inlineBlockNeedsLayout && "inline" !== Fb(a.nodeName) ? p.zoom = 1 : p.display = "inline-block")), c.overflow && (p.overflow = "hidden", k.shrinkWrapBlocks() || n.always(function () {
            p.overflow = c.overflow[0], p.overflowX = c.overflow[1], p.overflowY = c.overflow[2]
        }));
        for (d in b)if (e = b[d], ac.exec(e)) {
            if (delete b[d], f = f || "toggle" === e, e === (q ? "hide" : "show")) {
                if ("show" !== e || !r || void 0 === r[d])continue;
                q = !0
            }
            o[d] = r && r[d] || m.style(a, d)
        } else j = void 0;
        if (m.isEmptyObject(o))"inline" === ("none" === j ? Fb(a.nodeName) : j) && (p.display = j); else {
            r ? "hidden"in r && (q = r.hidden) : r = m._data(a, "fxshow", {}), f && (r.hidden = !q), q ? m(a).show() : n.done(function () {
                m(a).hide()
            }), n.done(function () {
                var b;
                m._removeData(a, "fxshow");
                for (b in o)m.style(a, b, o[b])
            });
            for (d in o)g = hc(q ? r[d] : 0, d, n), d in r || (r[d] = g.start, q && (g.end = g.start, g.start = "width" === d || "height" === d ? 1 : 0))
        }
    }

    function jc(a, b) {
        var c, d, e, f, g;
        for (c in a)if (d = m.camelCase(c), e = b[d], f = a[c], m.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = m.cssHooks[d], g && "expand"in g) {
            f = g.expand(f), delete a[d];
            for (c in f)c in a || (a[c] = f[c], b[c] = e)
        } else b[d] = e
    }

    function kc(a, b, c) {
        var d, e, f = 0, g = dc.length, h = m.Deferred().always(function () {
            delete i.elem
        }), i = function () {
            if (e)return!1;
            for (var b = $b || fc(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++)j.tweens[g].run(f);
            return h.notifyWith(a, [j, f, c]), 1 > f && i ? c : (h.resolveWith(a, [j]), !1)
        }, j = h.promise({elem: a, props: m.extend({}, b), opts: m.extend(!0, {specialEasing: {}}, c), originalProperties: b, originalOptions: c, startTime: $b || fc(), duration: c.duration, tweens: [], createTween: function (b, c) {
            var d = m.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
            return j.tweens.push(d), d
        }, stop: function (b) {
            var c = 0, d = b ? j.tweens.length : 0;
            if (e)return this;
            for (e = !0; d > c; c++)j.tweens[c].run(1);
            return b ? h.resolveWith(a, [j, b]) : h.rejectWith(a, [j, b]), this
        }}), k = j.props;
        for (jc(k, j.opts.specialEasing); g > f; f++)if (d = dc[f].call(j, a, k, j.opts))return d;
        return m.map(k, hc, j), m.isFunction(j.opts.start) && j.opts.start.call(a, j), m.fx.timer(m.extend(i, {elem: a, anim: j, queue: j.opts.queue})), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always)
    }

    m.Animation = m.extend(kc, {tweener: function (a, b) {
        m.isFunction(a) ? (b = a, a = ["*"]) : a = a.split(" ");
        for (var c, d = 0, e = a.length; e > d; d++)c = a[d], ec[c] = ec[c] || [], ec[c].unshift(b)
    }, prefilter: function (a, b) {
        b ? dc.unshift(a) : dc.push(a)
    }}), m.speed = function (a, b, c) {
        var d = a && "object" == typeof a ? m.extend({}, a) : {complete: c || !c && b || m.isFunction(a) && a, duration: a, easing: c && b || b && !m.isFunction(b) && b};
        return d.duration = m.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in m.fx.speeds ? m.fx.speeds[d.duration] : m.fx.speeds._default, (null == d.queue || d.queue === !0) && (d.queue = "fx"), d.old = d.complete, d.complete = function () {
            m.isFunction(d.old) && d.old.call(this), d.queue && m.dequeue(this, d.queue)
        }, d
    }, m.fn.extend({fadeTo: function (a, b, c, d) {
        return this.filter(U).css("opacity", 0).show().end().animate({opacity: b}, a, c, d)
    }, animate: function (a, b, c, d) {
        var e = m.isEmptyObject(a), f = m.speed(b, c, d), g = function () {
            var b = kc(this, m.extend({}, a), f);
            (e || m._data(this, "finish")) && b.stop(!0)
        };
        return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g)
    }, stop: function (a, b, c) {
        var d = function (a) {
            var b = a.stop;
            delete a.stop, b(c)
        };
        return"string" != typeof a && (c = b, b = a, a = void 0), b && a !== !1 && this.queue(a || "fx", []), this.each(function () {
            var b = !0, e = null != a && a + "queueHooks", f = m.timers, g = m._data(this);
            if (e)g[e] && g[e].stop && d(g[e]); else for (e in g)g[e] && g[e].stop && cc.test(e) && d(g[e]);
            for (e = f.length; e--;)f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), b = !1, f.splice(e, 1));
            (b || !c) && m.dequeue(this, a)
        })
    }, finish: function (a) {
        return a !== !1 && (a = a || "fx"), this.each(function () {
            var b, c = m._data(this), d = c[a + "queue"], e = c[a + "queueHooks"], f = m.timers, g = d ? d.length : 0;
            for (c.finish = !0, m.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--;)f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1));
            for (b = 0; g > b; b++)d[b] && d[b].finish && d[b].finish.call(this);
            delete c.finish
        })
    }}), m.each(["toggle", "show", "hide"], function (a, b) {
        var c = m.fn[b];
        m.fn[b] = function (a, d, e) {
            return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(gc(b, !0), a, d, e)
        }
    }), m.each({slideDown: gc("show"), slideUp: gc("hide"), slideToggle: gc("toggle"), fadeIn: {opacity: "show"}, fadeOut: {opacity: "hide"}, fadeToggle: {opacity: "toggle"}}, function (a, b) {
        m.fn[a] = function (a, c, d) {
            return this.animate(b, a, c, d)
        }
    }), m.timers = [], m.fx.tick = function () {
        var a, b = m.timers, c = 0;
        for ($b = m.now(); c < b.length; c++)a = b[c], a() || b[c] !== a || b.splice(c--, 1);
        b.length || m.fx.stop(), $b = void 0
    }, m.fx.timer = function (a) {
        m.timers.push(a), a() ? m.fx.start() : m.timers.pop()
    }, m.fx.interval = 13, m.fx.start = function () {
        _b || (_b = setInterval(m.fx.tick, m.fx.interval))
    }, m.fx.stop = function () {
        clearInterval(_b), _b = null
    }, m.fx.speeds = {slow: 600, fast: 200, _default: 400}, m.fn.delay = function (a, b) {
        return a = m.fx ? m.fx.speeds[a] || a : a, b = b || "fx", this.queue(b, function (b, c) {
            var d = setTimeout(b, a);
            c.stop = function () {
                clearTimeout(d)
            }
        })
    }, function () {
        var a, b, c, d, e;
        b = y.createElement("div"), b.setAttribute("className", "t"), b.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", d = b.getElementsByTagName("a")[0], c = y.createElement("select"), e = c.appendChild(y.createElement("option")), a = b.getElementsByTagName("input")[0], d.style.cssText = "top:1px", k.getSetAttribute = "t" !== b.className, k.style = /top/.test(d.getAttribute("style")), k.hrefNormalized = "/a" === d.getAttribute("href"), k.checkOn = !!a.value, k.optSelected = e.selected, k.enctype = !!y.createElement("form").enctype, c.disabled = !0, k.optDisabled = !e.disabled, a = y.createElement("input"), a.setAttribute("value", ""), k.input = "" === a.getAttribute("value"), a.value = "t", a.setAttribute("type", "radio"), k.radioValue = "t" === a.value
    }();
    var lc = /\r/g;
    m.fn.extend({val: function (a) {
        var b, c, d, e = this[0];
        {
            if (arguments.length)return d = m.isFunction(a), this.each(function (c) {
                var e;
                1 === this.nodeType && (e = d ? a.call(this, c, m(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : m.isArray(e) && (e = m.map(e, function (a) {
                    return null == a ? "" : a + ""
                })), b = m.valHooks[this.type] || m.valHooks[this.nodeName.toLowerCase()], b && "set"in b && void 0 !== b.set(this, e, "value") || (this.value = e))
            });
            if (e)return b = m.valHooks[e.type] || m.valHooks[e.nodeName.toLowerCase()], b && "get"in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, "string" == typeof c ? c.replace(lc, "") : null == c ? "" : c)
        }
    }}), m.extend({valHooks: {option: {get: function (a) {
        var b = m.find.attr(a, "value");
        return null != b ? b : m.trim(m.text(a))
    }}, select: {get: function (a) {
        for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || 0 > e, g = f ? null : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++)if (c = d[i], !(!c.selected && i !== e || (k.optDisabled ? c.disabled : null !== c.getAttribute("disabled")) || c.parentNode.disabled && m.nodeName(c.parentNode, "optgroup"))) {
            if (b = m(c).val(), f)return b;
            g.push(b)
        }
        return g
    }, set: function (a, b) {
        var c, d, e = a.options, f = m.makeArray(b), g = e.length;
        while (g--)if (d = e[g], m.inArray(m.valHooks.option.get(d), f) >= 0)try {
            d.selected = c = !0
        } catch (h) {
            d.scrollHeight
        } else d.selected = !1;
        return c || (a.selectedIndex = -1), e
    }}}}), m.each(["radio", "checkbox"], function () {
        m.valHooks[this] = {set: function (a, b) {
            return m.isArray(b) ? a.checked = m.inArray(m(a).val(), b) >= 0 : void 0
        }}, k.checkOn || (m.valHooks[this].get = function (a) {
            return null === a.getAttribute("value") ? "on" : a.value
        })
    });
    var mc, nc, oc = m.expr.attrHandle, pc = /^(?:checked|selected)$/i, qc = k.getSetAttribute, rc = k.input;
    m.fn.extend({attr: function (a, b) {
        return V(this, m.attr, a, b, arguments.length > 1)
    }, removeAttr: function (a) {
        return this.each(function () {
            m.removeAttr(this, a)
        })
    }}), m.extend({attr: function (a, b, c) {
        var d, e, f = a.nodeType;
        if (a && 3 !== f && 8 !== f && 2 !== f)return typeof a.getAttribute === K ? m.prop(a, b, c) : (1 === f && m.isXMLDoc(a) || (b = b.toLowerCase(), d = m.attrHooks[b] || (m.expr.match.bool.test(b) ? nc : mc)), void 0 === c ? d && "get"in d && null !== (e = d.get(a, b)) ? e : (e = m.find.attr(a, b), null == e ? void 0 : e) : null !== c ? d && "set"in d && void 0 !== (e = d.set(a, c, b)) ? e : (a.setAttribute(b, c + ""), c) : void m.removeAttr(a, b))
    }, removeAttr: function (a, b) {
        var c, d, e = 0, f = b && b.match(E);
        if (f && 1 === a.nodeType)while (c = f[e++])d = m.propFix[c] || c, m.expr.match.bool.test(c) ? rc && qc || !pc.test(c) ? a[d] = !1 : a[m.camelCase("default-" + c)] = a[d] = !1 : m.attr(a, c, ""), a.removeAttribute(qc ? c : d)
    }, attrHooks: {type: {set: function (a, b) {
        if (!k.radioValue && "radio" === b && m.nodeName(a, "input")) {
            var c = a.value;
            return a.setAttribute("type", b), c && (a.value = c), b
        }
    }}}}), nc = {set: function (a, b, c) {
        return b === !1 ? m.removeAttr(a, c) : rc && qc || !pc.test(c) ? a.setAttribute(!qc && m.propFix[c] || c, c) : a[m.camelCase("default-" + c)] = a[c] = !0, c
    }}, m.each(m.expr.match.bool.source.match(/\w+/g), function (a, b) {
        var c = oc[b] || m.find.attr;
        oc[b] = rc && qc || !pc.test(b) ? function (a, b, d) {
            var e, f;
            return d || (f = oc[b], oc[b] = e, e = null != c(a, b, d) ? b.toLowerCase() : null, oc[b] = f), e
        } : function (a, b, c) {
            return c ? void 0 : a[m.camelCase("default-" + b)] ? b.toLowerCase() : null
        }
    }), rc && qc || (m.attrHooks.value = {set: function (a, b, c) {
        return m.nodeName(a, "input") ? void(a.defaultValue = b) : mc && mc.set(a, b, c)
    }}), qc || (mc = {set: function (a, b, c) {
        var d = a.getAttributeNode(c);
        return d || a.setAttributeNode(d = a.ownerDocument.createAttribute(c)), d.value = b += "", "value" === c || b === a.getAttribute(c) ? b : void 0
    }}, oc.id = oc.name = oc.coords = function (a, b, c) {
        var d;
        return c ? void 0 : (d = a.getAttributeNode(b)) && "" !== d.value ? d.value : null
    }, m.valHooks.button = {get: function (a, b) {
        var c = a.getAttributeNode(b);
        return c && c.specified ? c.value : void 0
    }, set: mc.set}, m.attrHooks.contenteditable = {set: function (a, b, c) {
        mc.set(a, "" === b ? !1 : b, c)
    }}, m.each(["width", "height"], function (a, b) {
        m.attrHooks[b] = {set: function (a, c) {
            return"" === c ? (a.setAttribute(b, "auto"), c) : void 0
        }}
    })), k.style || (m.attrHooks.style = {get: function (a) {
        return a.style.cssText || void 0
    }, set: function (a, b) {
        return a.style.cssText = b + ""
    }});
    var sc = /^(?:input|select|textarea|button|object)$/i, tc = /^(?:a|area)$/i;
    m.fn.extend({prop: function (a, b) {
        return V(this, m.prop, a, b, arguments.length > 1)
    }, removeProp: function (a) {
        return a = m.propFix[a] || a, this.each(function () {
            try {
                this[a] = void 0, delete this[a]
            } catch (b) {
            }
        })
    }}), m.extend({propFix: {"for": "htmlFor", "class": "className"}, prop: function (a, b, c) {
        var d, e, f, g = a.nodeType;
        if (a && 3 !== g && 8 !== g && 2 !== g)return f = 1 !== g || !m.isXMLDoc(a), f && (b = m.propFix[b] || b, e = m.propHooks[b]), void 0 !== c ? e && "set"in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get"in e && null !== (d = e.get(a, b)) ? d : a[b]
    }, propHooks: {tabIndex: {get: function (a) {
        var b = m.find.attr(a, "tabindex");
        return b ? parseInt(b, 10) : sc.test(a.nodeName) || tc.test(a.nodeName) && a.href ? 0 : -1
    }}}}), k.hrefNormalized || m.each(["href", "src"], function (a, b) {
        m.propHooks[b] = {get: function (a) {
            return a.getAttribute(b, 4)
        }}
    }), k.optSelected || (m.propHooks.selected = {get: function (a) {
        var b = a.parentNode;
        return b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex), null
    }}), m.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
        m.propFix[this.toLowerCase()] = this
    }), k.enctype || (m.propFix.enctype = "encoding");
    var uc = /[\t\r\n\f]/g;
    m.fn.extend({addClass: function (a) {
        var b, c, d, e, f, g, h = 0, i = this.length, j = "string" == typeof a && a;
        if (m.isFunction(a))return this.each(function (b) {
            m(this).addClass(a.call(this, b, this.className))
        });
        if (j)for (b = (a || "").match(E) || []; i > h; h++)if (c = this[h], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(uc, " ") : " ")) {
            f = 0;
            while (e = b[f++])d.indexOf(" " + e + " ") < 0 && (d += e + " ");
            g = m.trim(d), c.className !== g && (c.className = g)
        }
        return this
    }, removeClass: function (a) {
        var b, c, d, e, f, g, h = 0, i = this.length, j = 0 === arguments.length || "string" == typeof a && a;
        if (m.isFunction(a))return this.each(function (b) {
            m(this).removeClass(a.call(this, b, this.className))
        });
        if (j)for (b = (a || "").match(E) || []; i > h; h++)if (c = this[h], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(uc, " ") : "")) {
            f = 0;
            while (e = b[f++])while (d.indexOf(" " + e + " ") >= 0)d = d.replace(" " + e + " ", " ");
            g = a ? m.trim(d) : "", c.className !== g && (c.className = g)
        }
        return this
    }, toggleClass: function (a, b) {
        var c = typeof a;
        return"boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : this.each(m.isFunction(a) ? function (c) {
            m(this).toggleClass(a.call(this, c, this.className, b), b)
        } : function () {
            if ("string" === c) {
                var b, d = 0, e = m(this), f = a.match(E) || [];
                while (b = f[d++])e.hasClass(b) ? e.removeClass(b) : e.addClass(b)
            } else(c === K || "boolean" === c) && (this.className && m._data(this, "__className__", this.className), this.className = this.className || a === !1 ? "" : m._data(this, "__className__") || "")
        })
    }, hasClass: function (a) {
        for (var b = " " + a + " ", c = 0, d = this.length; d > c; c++)if (1 === this[c].nodeType && (" " + this[c].className + " ").replace(uc, " ").indexOf(b) >= 0)return!0;
        return!1
    }}), m.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (a, b) {
        m.fn[b] = function (a, c) {
            return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
        }
    }), m.fn.extend({hover: function (a, b) {
        return this.mouseenter(a).mouseleave(b || a)
    }, bind: function (a, b, c) {
        return this.on(a, null, b, c)
    }, unbind: function (a, b) {
        return this.off(a, null, b)
    }, delegate: function (a, b, c, d) {
        return this.on(b, a, c, d)
    }, undelegate: function (a, b, c) {
        return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c)
    }});
    var vc = m.now(), wc = /\?/, xc = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
    m.parseJSON = function (b) {
        if (a.JSON && a.JSON.parse)return a.JSON.parse(b + "");
        var c, d = null, e = m.trim(b + "");
        return e && !m.trim(e.replace(xc, function (a, b, e, f) {
            return c && b && (d = 0), 0 === d ? a : (c = e || b, d += !f - !e, "")
        })) ? Function("return " + e)() : m.error("Invalid JSON: " + b)
    }, m.parseXML = function (b) {
        var c, d;
        if (!b || "string" != typeof b)return null;
        try {
            a.DOMParser ? (d = new DOMParser, c = d.parseFromString(b, "text/xml")) : (c = new ActiveXObject("Microsoft.XMLDOM"), c.async = "false", c.loadXML(b))
        } catch (e) {
            c = void 0
        }
        return c && c.documentElement && !c.getElementsByTagName("parsererror").length || m.error("Invalid XML: " + b), c
    };
    var yc, zc, Ac = /#.*$/, Bc = /([?&])_=[^&]*/, Cc = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm, Dc = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, Ec = /^(?:GET|HEAD)$/, Fc = /^\/\//, Gc = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/, Hc = {}, Ic = {}, Jc = "*/".concat("*");
    try {
        zc = location.href
    } catch (Kc) {
        zc = y.createElement("a"), zc.href = "", zc = zc.href
    }
    yc = Gc.exec(zc.toLowerCase()) || [];
    function Lc(a) {
        return function (b, c) {
            "string" != typeof b && (c = b, b = "*");
            var d, e = 0, f = b.toLowerCase().match(E) || [];
            if (m.isFunction(c))while (d = f[e++])"+" === d.charAt(0) ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c)
        }
    }

    function Mc(a, b, c, d) {
        var e = {}, f = a === Ic;

        function g(h) {
            var i;
            return e[h] = !0, m.each(a[h] || [], function (a, h) {
                var j = h(b, c, d);
                return"string" != typeof j || f || e[j] ? f ? !(i = j) : void 0 : (b.dataTypes.unshift(j), g(j), !1)
            }), i
        }

        return g(b.dataTypes[0]) || !e["*"] && g("*")
    }

    function Nc(a, b) {
        var c, d, e = m.ajaxSettings.flatOptions || {};
        for (d in b)void 0 !== b[d] && ((e[d] ? a : c || (c = {}))[d] = b[d]);
        return c && m.extend(!0, a, c), a
    }

    function Oc(a, b, c) {
        var d, e, f, g, h = a.contents, i = a.dataTypes;
        while ("*" === i[0])i.shift(), void 0 === e && (e = a.mimeType || b.getResponseHeader("Content-Type"));
        if (e)for (g in h)if (h[g] && h[g].test(e)) {
            i.unshift(g);
            break
        }
        if (i[0]in c)f = i[0]; else {
            for (g in c) {
                if (!i[0] || a.converters[g + " " + i[0]]) {
                    f = g;
                    break
                }
                d || (d = g)
            }
            f = f || d
        }
        return f ? (f !== i[0] && i.unshift(f), c[f]) : void 0
    }

    function Pc(a, b, c, d) {
        var e, f, g, h, i, j = {}, k = a.dataTypes.slice();
        if (k[1])for (g in a.converters)j[g.toLowerCase()] = a.converters[g];
        f = k.shift();
        while (f)if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift())if ("*" === f)f = i; else if ("*" !== i && i !== f) {
            if (g = j[i + " " + f] || j["* " + f], !g)for (e in j)if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
                g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1]));
                break
            }
            if (g !== !0)if (g && a["throws"])b = g(b); else try {
                b = g(b)
            } catch (l) {
                return{state: "parsererror", error: g ? l : "No conversion from " + i + " to " + f}
            }
        }
        return{state: "success", data: b}
    }

    m.extend({active: 0, lastModified: {}, etag: {}, ajaxSettings: {url: zc, type: "GET", isLocal: Dc.test(yc[1]), global: !0, processData: !0, async: !0, contentType: "application/x-www-form-urlencoded; charset=UTF-8", accepts: {"*": Jc, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript"}, contents: {xml: /xml/, html: /html/, json: /json/}, responseFields: {xml: "responseXML", text: "responseText", json: "responseJSON"}, converters: {"* text": String, "text html": !0, "text json": m.parseJSON, "text xml": m.parseXML}, flatOptions: {url: !0, context: !0}}, ajaxSetup: function (a, b) {
        return b ? Nc(Nc(a, m.ajaxSettings), b) : Nc(m.ajaxSettings, a)
    }, ajaxPrefilter: Lc(Hc), ajaxTransport: Lc(Ic), ajax: function (a, b) {
        "object" == typeof a && (b = a, a = void 0), b = b || {};
        var c, d, e, f, g, h, i, j, k = m.ajaxSetup({}, b), l = k.context || k, n = k.context && (l.nodeType || l.jquery) ? m(l) : m.event, o = m.Deferred(), p = m.Callbacks("once memory"), q = k.statusCode || {}, r = {}, s = {}, t = 0, u = "canceled", v = {readyState: 0, getResponseHeader: function (a) {
            var b;
            if (2 === t) {
                if (!j) {
                    j = {};
                    while (b = Cc.exec(f))j[b[1].toLowerCase()] = b[2]
                }
                b = j[a.toLowerCase()]
            }
            return null == b ? null : b
        }, getAllResponseHeaders: function () {
            return 2 === t ? f : null
        }, setRequestHeader: function (a, b) {
            var c = a.toLowerCase();
            return t || (a = s[c] = s[c] || a, r[a] = b), this
        }, overrideMimeType: function (a) {
            return t || (k.mimeType = a), this
        }, statusCode: function (a) {
            var b;
            if (a)if (2 > t)for (b in a)q[b] = [q[b], a[b]]; else v.always(a[v.status]);
            return this
        }, abort: function (a) {
            var b = a || u;
            return i && i.abort(b), x(0, b), this
        }};
        if (o.promise(v).complete = p.add, v.success = v.done, v.error = v.fail, k.url = ((a || k.url || zc) + "").replace(Ac, "").replace(Fc, yc[1] + "//"), k.type = b.method || b.type || k.method || k.type, k.dataTypes = m.trim(k.dataType || "*").toLowerCase().match(E) || [""], null == k.crossDomain && (c = Gc.exec(k.url.toLowerCase()), k.crossDomain = !(!c || c[1] === yc[1] && c[2] === yc[2] && (c[3] || ("http:" === c[1] ? "80" : "443")) === (yc[3] || ("http:" === yc[1] ? "80" : "443")))), k.data && k.processData && "string" != typeof k.data && (k.data = m.param(k.data, k.traditional)), Mc(Hc, k, b, v), 2 === t)return v;
        h = m.event && k.global, h && 0 === m.active++ && m.event.trigger("ajaxStart"), k.type = k.type.toUpperCase(), k.hasContent = !Ec.test(k.type), e = k.url, k.hasContent || (k.data && (e = k.url += (wc.test(e) ? "&" : "?") + k.data, delete k.data), k.cache === !1 && (k.url = Bc.test(e) ? e.replace(Bc, "$1_=" + vc++) : e + (wc.test(e) ? "&" : "?") + "_=" + vc++)), k.ifModified && (m.lastModified[e] && v.setRequestHeader("If-Modified-Since", m.lastModified[e]), m.etag[e] && v.setRequestHeader("If-None-Match", m.etag[e])), (k.data && k.hasContent && k.contentType !== !1 || b.contentType) && v.setRequestHeader("Content-Type", k.contentType), v.setRequestHeader("Accept", k.dataTypes[0] && k.accepts[k.dataTypes[0]] ? k.accepts[k.dataTypes[0]] + ("*" !== k.dataTypes[0] ? ", " + Jc + "; q=0.01" : "") : k.accepts["*"]);
        for (d in k.headers)v.setRequestHeader(d, k.headers[d]);
        if (k.beforeSend && (k.beforeSend.call(l, v, k) === !1 || 2 === t))return v.abort();
        u = "abort";
        for (d in{success: 1, error: 1, complete: 1})v[d](k[d]);
        if (i = Mc(Ic, k, b, v)) {
            v.readyState = 1, h && n.trigger("ajaxSend", [v, k]), k.async && k.timeout > 0 && (g = setTimeout(function () {
                v.abort("timeout")
            }, k.timeout));
            try {
                t = 1, i.send(r, x)
            } catch (w) {
                if (!(2 > t))throw w;
                x(-1, w)
            }
        } else x(-1, "No Transport");
        function x(a, b, c, d) {
            var j, r, s, u, w, x = b;
            2 !== t && (t = 2, g && clearTimeout(g), i = void 0, f = d || "", v.readyState = a > 0 ? 4 : 0, j = a >= 200 && 300 > a || 304 === a, c && (u = Oc(k, v, c)), u = Pc(k, u, v, j), j ? (k.ifModified && (w = v.getResponseHeader("Last-Modified"), w && (m.lastModified[e] = w), w = v.getResponseHeader("etag"), w && (m.etag[e] = w)), 204 === a || "HEAD" === k.type ? x = "nocontent" : 304 === a ? x = "notmodified" : (x = u.state, r = u.data, s = u.error, j = !s)) : (s = x, (a || !x) && (x = "error", 0 > a && (a = 0))), v.status = a, v.statusText = (b || x) + "", j ? o.resolveWith(l, [r, x, v]) : o.rejectWith(l, [v, x, s]), v.statusCode(q), q = void 0, h && n.trigger(j ? "ajaxSuccess" : "ajaxError", [v, k, j ? r : s]), p.fireWith(l, [v, x]), h && (n.trigger("ajaxComplete", [v, k]), --m.active || m.event.trigger("ajaxStop")))
        }

        return v
    }, getJSON: function (a, b, c) {
        return m.get(a, b, c, "json")
    }, getScript: function (a, b) {
        return m.get(a, void 0, b, "script")
    }}), m.each(["get", "post"], function (a, b) {
        m[b] = function (a, c, d, e) {
            return m.isFunction(c) && (e = e || d, d = c, c = void 0), m.ajax({url: a, type: b, dataType: e, data: c, success: d})
        }
    }), m._evalUrl = function (a) {
        return m.ajax({url: a, type: "GET", dataType: "script", async: !1, global: !1, "throws": !0})
    }, m.fn.extend({wrapAll: function (a) {
        if (m.isFunction(a))return this.each(function (b) {
            m(this).wrapAll(a.call(this, b))
        });
        if (this[0]) {
            var b = m(a, this[0].ownerDocument).eq(0).clone(!0);
            this[0].parentNode && b.insertBefore(this[0]), b.map(function () {
                var a = this;
                while (a.firstChild && 1 === a.firstChild.nodeType)a = a.firstChild;
                return a
            }).append(this)
        }
        return this
    }, wrapInner: function (a) {
        return this.each(m.isFunction(a) ? function (b) {
            m(this).wrapInner(a.call(this, b))
        } : function () {
            var b = m(this), c = b.contents();
            c.length ? c.wrapAll(a) : b.append(a)
        })
    }, wrap: function (a) {
        var b = m.isFunction(a);
        return this.each(function (c) {
            m(this).wrapAll(b ? a.call(this, c) : a)
        })
    }, unwrap: function () {
        return this.parent().each(function () {
            m.nodeName(this, "body") || m(this).replaceWith(this.childNodes)
        }).end()
    }}), m.expr.filters.hidden = function (a) {
        return a.offsetWidth <= 0 && a.offsetHeight <= 0 || !k.reliableHiddenOffsets() && "none" === (a.style && a.style.display || m.css(a, "display"))
    }, m.expr.filters.visible = function (a) {
        return!m.expr.filters.hidden(a)
    };
    var Qc = /%20/g, Rc = /\[\]$/, Sc = /\r?\n/g, Tc = /^(?:submit|button|image|reset|file)$/i, Uc = /^(?:input|select|textarea|keygen)/i;

    function Vc(a, b, c, d) {
        var e;
        if (m.isArray(b))m.each(b, function (b, e) {
            c || Rc.test(a) ? d(a, e) : Vc(a + "[" + ("object" == typeof e ? b : "") + "]", e, c, d)
        }); else if (c || "object" !== m.type(b))d(a, b); else for (e in b)Vc(a + "[" + e + "]", b[e], c, d)
    }

    m.param = function (a, b) {
        var c, d = [], e = function (a, b) {
            b = m.isFunction(b) ? b() : null == b ? "" : b, d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
        };
        if (void 0 === b && (b = m.ajaxSettings && m.ajaxSettings.traditional), m.isArray(a) || a.jquery && !m.isPlainObject(a))m.each(a, function () {
            e(this.name, this.value)
        }); else for (c in a)Vc(c, a[c], b, e);
        return d.join("&").replace(Qc, "+")
    }, m.fn.extend({serialize: function () {
        return m.param(this.serializeArray())
    }, serializeArray: function () {
        return this.map(function () {
            var a = m.prop(this, "elements");
            return a ? m.makeArray(a) : this
        }).filter(function () {
            var a = this.type;
            return this.name && !m(this).is(":disabled") && Uc.test(this.nodeName) && !Tc.test(a) && (this.checked || !W.test(a))
        }).map(function (a, b) {
            var c = m(this).val();
            return null == c ? null : m.isArray(c) ? m.map(c, function (a) {
                return{name: b.name, value: a.replace(Sc, "\r\n")}
            }) : {name: b.name, value: c.replace(Sc, "\r\n")}
        }).get()
    }}), m.ajaxSettings.xhr = void 0 !== a.ActiveXObject ? function () {
        return!this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && Zc() || $c()
    } : Zc;
    var Wc = 0, Xc = {}, Yc = m.ajaxSettings.xhr();
    a.attachEvent && a.attachEvent("onunload", function () {
        for (var a in Xc)Xc[a](void 0, !0)
    }), k.cors = !!Yc && "withCredentials"in Yc, Yc = k.ajax = !!Yc, Yc && m.ajaxTransport(function (a) {
        if (!a.crossDomain || k.cors) {
            var b;
            return{send: function (c, d) {
                var e, f = a.xhr(), g = ++Wc;
                if (f.open(a.type, a.url, a.async, a.username, a.password), a.xhrFields)for (e in a.xhrFields)f[e] = a.xhrFields[e];
                a.mimeType && f.overrideMimeType && f.overrideMimeType(a.mimeType), a.crossDomain || c["X-Requested-With"] || (c["X-Requested-With"] = "XMLHttpRequest");
                for (e in c)void 0 !== c[e] && f.setRequestHeader(e, c[e] + "");
                f.send(a.hasContent && a.data || null), b = function (c, e) {
                    var h, i, j;
                    if (b && (e || 4 === f.readyState))if (delete Xc[g], b = void 0, f.onreadystatechange = m.noop, e)4 !== f.readyState && f.abort(); else {
                        j = {}, h = f.status, "string" == typeof f.responseText && (j.text = f.responseText);
                        try {
                            i = f.statusText
                        } catch (k) {
                            i = ""
                        }
                        h || !a.isLocal || a.crossDomain ? 1223 === h && (h = 204) : h = j.text ? 200 : 404
                    }
                    j && d(h, i, j, f.getAllResponseHeaders())
                }, a.async ? 4 === f.readyState ? setTimeout(b) : f.onreadystatechange = Xc[g] = b : b()
            }, abort: function () {
                b && b(void 0, !0)
            }}
        }
    });
    function Zc() {
        try {
            return new a.XMLHttpRequest
        } catch (b) {
        }
    }

    function $c() {
        try {
            return new a.ActiveXObject("Microsoft.XMLHTTP")
        } catch (b) {
        }
    }

    m.ajaxSetup({accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"}, contents: {script: /(?:java|ecma)script/}, converters: {"text script": function (a) {
        return m.globalEval(a), a
    }}}), m.ajaxPrefilter("script", function (a) {
        void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET", a.global = !1)
    }), m.ajaxTransport("script", function (a) {
        if (a.crossDomain) {
            var b, c = y.head || m("head")[0] || y.documentElement;
            return{send: function (d, e) {
                b = y.createElement("script"), b.async = !0, a.scriptCharset && (b.charset = a.scriptCharset), b.src = a.url, b.onload = b.onreadystatechange = function (a, c) {
                    (c || !b.readyState || /loaded|complete/.test(b.readyState)) && (b.onload = b.onreadystatechange = null, b.parentNode && b.parentNode.removeChild(b), b = null, c || e(200, "success"))
                }, c.insertBefore(b, c.firstChild)
            }, abort: function () {
                b && b.onload(void 0, !0)
            }}
        }
    });
    var _c = [], ad = /(=)\?(?=&|$)|\?\?/;
    m.ajaxSetup({jsonp: "callback", jsonpCallback: function () {
        var a = _c.pop() || m.expando + "_" + vc++;
        return this[a] = !0, a
    }}), m.ajaxPrefilter("json jsonp", function (b, c, d) {
        var e, f, g, h = b.jsonp !== !1 && (ad.test(b.url) ? "url" : "string" == typeof b.data && !(b.contentType || "").indexOf("application/x-www-form-urlencoded") && ad.test(b.data) && "data");
        return h || "jsonp" === b.dataTypes[0] ? (e = b.jsonpCallback = m.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, h ? b[h] = b[h].replace(ad, "$1" + e) : b.jsonp !== !1 && (b.url += (wc.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), b.converters["script json"] = function () {
            return g || m.error(e + " was not called"), g[0]
        }, b.dataTypes[0] = "json", f = a[e], a[e] = function () {
            g = arguments
        }, d.always(function () {
            a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, _c.push(e)), g && m.isFunction(f) && f(g[0]), g = f = void 0
        }), "script") : void 0
    }), m.parseHTML = function (a, b, c) {
        if (!a || "string" != typeof a)return null;
        "boolean" == typeof b && (c = b, b = !1), b = b || y;
        var d = u.exec(a), e = !c && [];
        return d ? [b.createElement(d[1])] : (d = m.buildFragment([a], b, e), e && e.length && m(e).remove(), m.merge([], d.childNodes))
    };
    var bd = m.fn.load;
    m.fn.load = function (a, b, c) {
        if ("string" != typeof a && bd)return bd.apply(this, arguments);
        var d, e, f, g = this, h = a.indexOf(" ");
        return h >= 0 && (d = m.trim(a.slice(h, a.length)), a = a.slice(0, h)), m.isFunction(b) ? (c = b, b = void 0) : b && "object" == typeof b && (f = "POST"), g.length > 0 && m.ajax({url: a, type: f, dataType: "html", data: b}).done(function (a) {
            e = arguments, g.html(d ? m("<div>").append(m.parseHTML(a)).find(d) : a)
        }).complete(c && function (a, b) {
            g.each(c, e || [a.responseText, b, a])
        }), this
    }, m.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (a, b) {
        m.fn[b] = function (a) {
            return this.on(b, a)
        }
    }), m.expr.filters.animated = function (a) {
        return m.grep(m.timers, function (b) {
            return a === b.elem
        }).length
    };
    var cd = a.document.documentElement;

    function dd(a) {
        return m.isWindow(a) ? a : 9 === a.nodeType ? a.defaultView || a.parentWindow : !1
    }

    m.offset = {setOffset: function (a, b, c) {
        var d, e, f, g, h, i, j, k = m.css(a, "position"), l = m(a), n = {};
        "static" === k && (a.style.position = "relative"), h = l.offset(), f = m.css(a, "top"), i = m.css(a, "left"), j = ("absolute" === k || "fixed" === k) && m.inArray("auto", [f, i]) > -1, j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), m.isFunction(b) && (b = b.call(a, c, h)), null != b.top && (n.top = b.top - h.top + g), null != b.left && (n.left = b.left - h.left + e), "using"in b ? b.using.call(a, n) : l.css(n)
    }}, m.fn.extend({offset: function (a) {
        if (arguments.length)return void 0 === a ? this : this.each(function (b) {
            m.offset.setOffset(this, a, b)
        });
        var b, c, d = {top: 0, left: 0}, e = this[0], f = e && e.ownerDocument;
        if (f)return b = f.documentElement, m.contains(b, e) ? (typeof e.getBoundingClientRect !== K && (d = e.getBoundingClientRect()), c = dd(f), {top: d.top + (c.pageYOffset || b.scrollTop) - (b.clientTop || 0), left: d.left + (c.pageXOffset || b.scrollLeft) - (b.clientLeft || 0)}) : d
    }, position: function () {
        if (this[0]) {
            var a, b, c = {top: 0, left: 0}, d = this[0];
            return"fixed" === m.css(d, "position") ? b = d.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), m.nodeName(a[0], "html") || (c = a.offset()), c.top += m.css(a[0], "borderTopWidth", !0), c.left += m.css(a[0], "borderLeftWidth", !0)), {top: b.top - c.top - m.css(d, "marginTop", !0), left: b.left - c.left - m.css(d, "marginLeft", !0)}
        }
    }, offsetParent: function () {
        return this.map(function () {
            var a = this.offsetParent || cd;
            while (a && !m.nodeName(a, "html") && "static" === m.css(a, "position"))a = a.offsetParent;
            return a || cd
        })
    }}), m.each({scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, function (a, b) {
        var c = /Y/.test(b);
        m.fn[a] = function (d) {
            return V(this, function (a, d, e) {
                var f = dd(a);
                return void 0 === e ? f ? b in f ? f[b] : f.document.documentElement[d] : a[d] : void(f ? f.scrollTo(c ? m(f).scrollLeft() : e, c ? e : m(f).scrollTop()) : a[d] = e)
            }, a, d, arguments.length, null)
        }
    }), m.each(["top", "left"], function (a, b) {
        m.cssHooks[b] = Lb(k.pixelPosition, function (a, c) {
            return c ? (c = Jb(a, b), Hb.test(c) ? m(a).position()[b] + "px" : c) : void 0
        })
    }), m.each({Height: "height", Width: "width"}, function (a, b) {
        m.each({padding: "inner" + a, content: b, "": "outer" + a}, function (c, d) {
            m.fn[d] = function (d, e) {
                var f = arguments.length && (c || "boolean" != typeof d), g = c || (d === !0 || e === !0 ? "margin" : "border");
                return V(this, function (b, c, d) {
                    var e;
                    return m.isWindow(b) ? b.document.documentElement["client" + a] : 9 === b.nodeType ? (e = b.documentElement, Math.max(b.body["scroll" + a], e["scroll" + a], b.body["offset" + a], e["offset" + a], e["client" + a])) : void 0 === d ? m.css(b, c, g) : m.style(b, c, d, g)
                }, b, f ? d : void 0, f, null)
            }
        })
    }), m.fn.size = function () {
        return this.length
    }, m.fn.andSelf = m.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function () {
        return m
    });
    var ed = a.jQuery, fd = a.$;
    return m.noConflict = function (b) {
        return a.$ === m && (a.$ = fd), b && a.jQuery === m && (a.jQuery = ed), m
    }, typeof b === K && (a.jQuery = a.$ = m), m
});
jQuery.noConflict();
/*! jQuery Migrate v1.2.1 | (c) 2005, 2013 jQuery Foundation, Inc. and other contributors | jquery.org/license */
jQuery.migrateMute === void 0 && (jQuery.migrateMute = !0), function (e, t, n) {
    function r(n) {
        var r = t.console;
        i[n] || (i[n] = !0, e.migrateWarnings.push(n), r && r.warn && !e.migrateMute && (r.warn("JQMIGRATE: " + n), e.migrateTrace && r.trace && r.trace()))
    }

    function a(t, a, i, o) {
        if (Object.defineProperty)try {
            return Object.defineProperty(t, a, {configurable: !0, enumerable: !0, get: function () {
                return r(o), i
            }, set: function (e) {
                r(o), i = e
            }}), n
        } catch (s) {
        }
        e._definePropertyBroken = !0, t[a] = i
    }

    var i = {};
    e.migrateWarnings = [], !e.migrateMute && t.console && t.console.log && t.console.log("JQMIGRATE: Logging is active"), e.migrateTrace === n && (e.migrateTrace = !0), e.migrateReset = function () {
        i = {}, e.migrateWarnings.length = 0
    }, "BackCompat" === document.compatMode && r("jQuery is not compatible with Quirks Mode");
    var o = e("<input/>", {size: 1}).attr("size") && e.attrFn, s = e.attr, u = e.attrHooks.value && e.attrHooks.value.get || function () {
        return null
    }, c = e.attrHooks.value && e.attrHooks.value.set || function () {
        return n
    }, l = /^(?:input|button)$/i, d = /^[238]$/, p = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i, f = /^(?:checked|selected)$/i;
    a(e, "attrFn", o || {}, "jQuery.attrFn is deprecated"), e.attr = function (t, a, i, u) {
        var c = a.toLowerCase(), g = t && t.nodeType;
        return u && (4 > s.length && r("jQuery.fn.attr( props, pass ) is deprecated"), t && !d.test(g) && (o ? a in o : e.isFunction(e.fn[a]))) ? e(t)[a](i) : ("type" === a && i !== n && l.test(t.nodeName) && t.parentNode && r("Can't change the 'type' of an input or button in IE 6/7/8"), !e.attrHooks[c] && p.test(c) && (e.attrHooks[c] = {get: function (t, r) {
            var a, i = e.prop(t, r);
            return i === !0 || "boolean" != typeof i && (a = t.getAttributeNode(r)) && a.nodeValue !== !1 ? r.toLowerCase() : n
        }, set: function (t, n, r) {
            var a;
            return n === !1 ? e.removeAttr(t, r) : (a = e.propFix[r] || r, a in t && (t[a] = !0), t.setAttribute(r, r.toLowerCase())), r
        }}, f.test(c) && r("jQuery.fn.attr('" + c + "') may use property instead of attribute")), s.call(e, t, a, i))
    }, e.attrHooks.value = {get: function (e, t) {
        var n = (e.nodeName || "").toLowerCase();
        return"button" === n ? u.apply(this, arguments) : ("input" !== n && "option" !== n && r("jQuery.fn.attr('value') no longer gets properties"), t in e ? e.value : null)
    }, set: function (e, t) {
        var a = (e.nodeName || "").toLowerCase();
        return"button" === a ? c.apply(this, arguments) : ("input" !== a && "option" !== a && r("jQuery.fn.attr('value', val) no longer sets properties"), e.value = t, n)
    }};
    var g, h, v = e.fn.init, m = e.parseJSON, y = /^([^<]*)(<[\w\W]+>)([^>]*)$/;
    e.fn.init = function (t, n, a) {
        var i;
        return t && "string" == typeof t && !e.isPlainObject(n) && (i = y.exec(e.trim(t))) && i[0] && ("<" !== t.charAt(0) && r("$(html) HTML strings must start with '<' character"), i[3] && r("$(html) HTML text after last tag is ignored"), "#" === i[0].charAt(0) && (r("HTML string cannot start with a '#' character"), e.error("JQMIGRATE: Invalid selector string (XSS)")), n && n.context && (n = n.context), e.parseHTML) ? v.call(this, e.parseHTML(i[2], n, !0), n, a) : v.apply(this, arguments)
    }, e.fn.init.prototype = e.fn, e.parseJSON = function (e) {
        return e || null === e ? m.apply(this, arguments) : (r("jQuery.parseJSON requires a valid JSON string"), null)
    }, e.uaMatch = function (e) {
        e = e.toLowerCase();
        var t = /(chrome)[ \/]([\w.]+)/.exec(e) || /(webkit)[ \/]([\w.]+)/.exec(e) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e) || /(msie) ([\w.]+)/.exec(e) || 0 > e.indexOf("compatible") && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e) || [];
        return{browser: t[1] || "", version: t[2] || "0"}
    }, e.browser || (g = e.uaMatch(navigator.userAgent), h = {}, g.browser && (h[g.browser] = !0, h.version = g.version), h.chrome ? h.webkit = !0 : h.webkit && (h.safari = !0), e.browser = h), a(e, "browser", e.browser, "jQuery.browser is deprecated"), e.sub = function () {
        function t(e, n) {
            return new t.fn.init(e, n)
        }

        e.extend(!0, t, this), t.superclass = this, t.fn = t.prototype = this(), t.fn.constructor = t, t.sub = this.sub, t.fn.init = function (r, a) {
            return a && a instanceof e && !(a instanceof t) && (a = t(a)), e.fn.init.call(this, r, a, n)
        }, t.fn.init.prototype = t.fn;
        var n = t(document);
        return r("jQuery.sub() is deprecated"), t
    }, e.ajaxSetup({converters: {"text json": e.parseJSON}});
    var b = e.fn.data;
    e.fn.data = function (t) {
        var a, i, o = this[0];
        return!o || "events" !== t || 1 !== arguments.length || (a = e.data(o, t), i = e._data(o, t), a !== n && a !== i || i === n) ? b.apply(this, arguments) : (r("Use of jQuery.fn.data('events') is deprecated"), i)
    };
    var j = /\/(java|ecma)script/i, w = e.fn.andSelf || e.fn.addBack;
    e.fn.andSelf = function () {
        return r("jQuery.fn.andSelf() replaced by jQuery.fn.addBack()"), w.apply(this, arguments)
    }, e.clean || (e.clean = function (t, a, i, o) {
        a = a || document, a = !a.nodeType && a[0] || a, a = a.ownerDocument || a, r("jQuery.clean() is deprecated");
        var s, u, c, l, d = [];
        if (e.merge(d, e.buildFragment(t, a).childNodes), i)for (c = function (e) {
            return!e.type || j.test(e.type) ? o ? o.push(e.parentNode ? e.parentNode.removeChild(e) : e) : i.appendChild(e) : n
        }, s = 0; null != (u = d[s]); s++)e.nodeName(u, "script") && c(u) || (i.appendChild(u), u.getElementsByTagName !== n && (l = e.grep(e.merge([], u.getElementsByTagName("script")), c), d.splice.apply(d, [s + 1, 0].concat(l)), s += l.length));
        return d
    });
    var Q = e.event.add, x = e.event.remove, k = e.event.trigger, N = e.fn.toggle, T = e.fn.live, M = e.fn.die, S = "ajaxStart|ajaxStop|ajaxSend|ajaxComplete|ajaxError|ajaxSuccess", C = RegExp("\\b(?:" + S + ")\\b"), H = /(?:^|\s)hover(\.\S+|)\b/, A = function (t) {
        return"string" != typeof t || e.event.special.hover ? t : (H.test(t) && r("'hover' pseudo-event is deprecated, use 'mouseenter mouseleave'"), t && t.replace(H, "mouseenter$1 mouseleave$1"))
    };
    e.event.props && "attrChange" !== e.event.props[0] && e.event.props.unshift("attrChange", "attrName", "relatedNode", "srcElement"), e.event.dispatch && a(e.event, "handle", e.event.dispatch, "jQuery.event.handle is undocumented and deprecated"), e.event.add = function (e, t, n, a, i) {
        e !== document && C.test(t) && r("AJAX events should be attached to document: " + t), Q.call(this, e, A(t || ""), n, a, i)
    }, e.event.remove = function (e, t, n, r, a) {
        x.call(this, e, A(t) || "", n, r, a)
    }, e.fn.error = function () {
        var e = Array.prototype.slice.call(arguments, 0);
        return r("jQuery.fn.error() is deprecated"), e.splice(0, 0, "error"), arguments.length ? this.bind.apply(this, e) : (this.triggerHandler.apply(this, e), this)
    }, e.fn.toggle = function (t, n) {
        if (!e.isFunction(t) || !e.isFunction(n))return N.apply(this, arguments);
        r("jQuery.fn.toggle(handler, handler...) is deprecated");
        var a = arguments, i = t.guid || e.guid++, o = 0, s = function (n) {
            var r = (e._data(this, "lastToggle" + t.guid) || 0) % o;
            return e._data(this, "lastToggle" + t.guid, r + 1), n.preventDefault(), a[r].apply(this, arguments) || !1
        };
        for (s.guid = i; a.length > o;)a[o++].guid = i;
        return this.click(s)
    }, e.fn.live = function (t, n, a) {
        return r("jQuery.fn.live() is deprecated"), T ? T.apply(this, arguments) : (e(this.context).on(t, this.selector, n, a), this)
    }, e.fn.die = function (t, n) {
        return r("jQuery.fn.die() is deprecated"), M ? M.apply(this, arguments) : (e(this.context).off(t, this.selector || "**", n), this)
    }, e.event.trigger = function (e, t, n, a) {
        return n || C.test(e) || r("Global events are undocumented and deprecated"), k.call(this, e, t, n || document, a)
    }, e.each(S.split("|"), function (t, n) {
        e.event.special[n] = {setup: function () {
            var t = this;
            return t !== document && (e.event.add(document, n + "." + e.guid, function () {
                e.event.trigger(n, null, t, !0)
            }), e._data(this, n, e.guid++)), !1
        }, teardown: function () {
            return this !== document && e.event.remove(document, n + "." + e._data(this, n)), !1
        }}
    })
}(jQuery, window);
(function ($) {
    'use strict';
    function Dm3Tabs(el, options) {
        this.speed = options.speed;
        this.animating = false;
        this.container = $(el);
        this.wrapper = this.container.parent();
        this.tabsContainers = this.container.children('.dm3-tab');
        this.tabsNav = null;
        this.type = 'horizontal';
        this.afterTabChange = options.afterTabChange;
        this.autoscroll = options.autoscroll;
        this.ascTimeout = null;
        this.preloadImages(10);
    }

    Dm3Tabs.prototype.init = function () {
        if (this.wrapper.hasClass('dm3-tabs-vertical')) {
            this.type = 'vertical';
        }
        this.setupNav();
        if (this.tabsNav.length < 2) {
            this.wrapper.addClass('dm3-tabs-single');
            return;
        }
        this.setupAutoscroll();
        var that = this;
        if (this.type === 'vertical') {
            var tabsNavHeight = this.tabsNav.eq(0).parent().height();
            var containerBorderWidth = parseInt(this.container.css('borderWidth'), 10);
            this.container.css('min-height', (tabsNavHeight - (containerBorderWidth * 2)) + 'px');
        }
        this.tabsContainers.each(function (i) {
            var tab = $(this);
            var tabCSS = {position: 'absolute', left: 0, width: '100%'};
            if (i !== that.getCurrentTab()) {
                tabCSS.display = 'none';
                tabCSS.opacity = 0;
            } else {
                tabCSS.display = 'block';
                tabCSS.opacity = 1;
            }
            tab.css(tabCSS);
        });
        var containerHeight = this.tabsContainers.eq(this.getCurrentTab()).outerHeight(true);
        this.container.css({height: containerHeight + 'px'});
        $(window).resize(function () {
            if (that.animating) {
                return;
            }
            that.container.css({height: that.tabsContainers.eq(that.getCurrentTab()).outerHeight(true) + 'px'});
        });
    };
    Dm3Tabs.prototype.preloadImages = function (numTries) {
        var loaded = false, images = this.container.find('img'), that, img;
        if (images.length) {
            for (var i = 0; i < images.length; ++i) {
                img = images.eq(i).get(0);
                if (img.complete || img.readyState === 4 || img.readyState === 'complete') {
                    loaded = true;
                    break;
                }
            }
        } else {
            loaded = true;
        }
        if (loaded || numTries <= 0) {
            this.init();
        } else {
            that = this;
            setTimeout(function () {
                that.preloadImages(--numTries);
            }, 300);
        }
    };
    Dm3Tabs.prototype.getCurrentTab = function () {
        return this.tabsNav.filter('.active').index();
    };
    Dm3Tabs.prototype.getNextTab = function () {
        var next = this.getCurrentTab() + 1;
        if (next >= this.tabsContainers.length) {
            next = 0;
        }
        return next;
    };
    Dm3Tabs.prototype.setupNav = function () {
        var that = this;
        if (this.container.data('navid')) {
            this.tabsNav = $('#' + this.container.data('navid')).children('li');
        } else {
            this.tabsNav = this.wrapper.find('> ul > li');
        }
        this.tabsNav.eq(0).addClass('active');
        this.tabsNav.find('a').on('click', function (e) {
            e.preventDefault();
            that.changeTab($(this).parent().index());
        });
    };
    Dm3Tabs.prototype.setupAutoscroll = function () {
        var that = this;
        var autoscroll = parseInt(this.wrapper.data('autoscroll'), 10);
        if (!isNaN(autoscroll))this.autoscroll = autoscroll;
        if (this.autoscroll) {
            this.wrapper.hover(function () {
                clearTimeout(that.ascTimeout);
            }, function () {
                if (that.autoscroll)that.startAutoscroll();
            });
            that.startAutoscroll();
        }
    };
    Dm3Tabs.prototype.startAutoscroll = function () {
        var that = this;
        if (this.ascTimeout) {
            clearTimeout(this.ascTimeout);
            this.ascTimeout = null;
        }
        this.ascTimeout = setTimeout(function () {
            that.changeTab(that.getNextTab());
        }, this.autoscroll * 1000);
    };
    Dm3Tabs.prototype.changeTab = function (idx) {
        if (this.animating || idx === this.getCurrentTab()) {
            return;
        }
        this.animating = true;
        var nextTab = this.tabsContainers.eq(idx);
        var currentTab = this.tabsContainers.eq(this.getCurrentTab());
        var that = this;
        var containerHeight = nextTab.outerHeight(true);
        this.tabsNav.filter('.active').removeClass('active');
        this.tabsNav.eq(idx).addClass('active');
        currentTab.stop().animate({opacity: 0}, {duration: this.speed, complete: function () {
            $(this).css({display: 'none'});
        }});
        nextTab.stop().css('display', 'block').animate({opacity: 1}, {duration: this.speed, complete: function () {
            if (that.afterTabChange) {
                that.afterTabChange(that.tabsContainers.eq(that.getCurrentTab()));
            }
        }});
        this.container.stop().animate({height: containerHeight + 'px'}, {duration: this.speed, complete: function () {
            that.animating = false;
            if (that.autoscroll)that.startAutoscroll();
        }});
    };
    $.fn.dm3Tabs = function (options) {
        options = $.extend({speed: 300, afterTabChange: null, autoscroll: 0}, options);
        return this.each(function () {
            var dm3Tabs = new Dm3Tabs(this, options);
        });
    };
}(jQuery));
(function ($) {
    'use strict';
    function Dm3Collapse(el, options) {
        var that = this;
        this.el = $(el);
        this.options = options;
        this.container = this.el.parent();
        this.transitioning = false;
        this.el.parent().find('.dm3-collapse-trigger > a').on('click', function (e) {
            e.preventDefault();
            if (that.el.hasClass('dm3-in')) {
                that.hide();
            } else {
                that.show();
            }
        });
        if (this.el.hasClass('dm3-in')) {
            this.el.parent().addClass('dm3-collapse-open');
            this.el.removeClass('dm3-collapse');
            this.el.height(this.el.find('> .dm3-collapse-inner').outerHeight());
            setTimeout(function () {
                that.el.addClass('dm3-collapse');
            }, 0);
        }
    }

    Dm3Collapse.prototype.transitionEnd = function () {
        var el = document.createElement('dm3collapse');
        var transition_end = null;
        var trans_event_names = {'WebkitTransition': 'webkitTransitionEnd', 'MozTransition': 'transitionend', 'OTransition': 'oTransitionEnd otransitionend', 'transition': 'transitionend'};
        var name;
        for (name in trans_event_names) {
            if (el.style[name] !== undefined) {
                transition_end = trans_event_names[name];
                break;
            }
        }
        return transition_end;
    }();
    Dm3Collapse.prototype.getActives = function () {
        var actives = null;
        var parent = this.container.parent();
        if (parent.length && parent.hasClass('dm3-accordion')) {
            actives = parent.find('> .dm3-collapse-item > .dm3-in');
        }
        return actives;
    };
    Dm3Collapse.prototype.reset = function (height) {
        height = (height === null) ? 'auto' : height;
        this.el.removeClass('dm3-collapse');
        this.el.height(height)[0].innerWidth;
        this.el.addClass('dm3-collapse');
    };
    Dm3Collapse.prototype.show = function () {
        if (this.transitioning) {
            return;
        }
        var that = this;
        var actives = this.getActives();
        var actives_data;
        if (actives) {
            actives_data = actives.data('dm3Collapse');
            if (actives_data && actives_data.transitioning) {
                return;
            }
            actives.dm3Collapse('hide');
        }
        this.transitioning = true;
        this.el.parent().addClass('dm3-collapse-open');
        var height = this.el.find('> .dm3-collapse-inner').outerHeight();
        var complete = function () {
            that.reset();
            that.transitioning = false;
        };
        this.el.addClass('dm3-in');
        this.el.height(0);
        if (this.transitionEnd) {
            this.el.one(this.transitionEnd, complete);
        } else {
            complete();
        }
        this.el.height(height);
    };
    Dm3Collapse.prototype.hide = function () {
        if (this.transitioning) {
            return;
        }
        this.transitioning = true;
        this.el.parent().removeClass('dm3-collapse-open');
        var that = this;
        var height = this.el.find('> .dm3-collapse-inner').outerHeight();
        var complete = function () {
            that.transitioning = false;
        };
        this.reset(height);
        this.el.removeClass('dm3-in');
        if (this.transitionEnd) {
            this.el.one(this.transitionEnd, complete);
        } else {
            complete();
        }
        this.el.height(0);
    };
    $.fn.dm3Collapse = function (input) {
        var options = $.extend({}, typeof input === 'object' && input);
        return this.each(function () {
            var $this = $(this);
            var dm3_collapse = $this.data('dm3Collapse');
            if (!dm3_collapse) {
                $this.data('dm3Collapse', (dm3_collapse = new Dm3Collapse(this, options)));
            }
            if (typeof input === 'string' && typeof dm3_collapse[input] === 'function') {
                dm3_collapse[input]();
            }
        });
    };
}(jQuery));
var dm3_shortcodes_init = (function ($) {
    'use strict';
    var dm3GoogleMap = function (el) {
        var map = $(el);
        map.css({height: map.data('height') + 'px'});
        var latLng = new google.maps.LatLng(map.data('latitude'), map.data('longitude'));
        var google_map = new google.maps.Map(map.get(0), {zoom: parseInt(map.data('zoom'), 10), scrollwheel: false, mapTypeControl: true, mapTypeId: google.maps.MapTypeId.ROADMAP, mapTypeControlOptions: {style: google.maps.MapTypeControlStyle.DROPDOWN_MENU}, navigationControl: true, navigationControlOptions: {style: google.maps.NavigationControlStyle.SMALL}, center: latLng});
        new google.maps.Marker({position: latLng, map: google_map});
    };
    return function (context) {
        if (context == undefined) {
            context = null;
        }
        $('.dm3-tabs', context).dm3Tabs();
        $('.dm3-collapse', context).dm3Collapse();
        $('.dm3-alert', context).each(function () {
            var div_alert = $(this);
            var btn_close = $('<a class="dm3-alert-close" href="#">&times;</a>');
            btn_close.on('click', function (e) {
                e.preventDefault();
                $(this).parent().hide();
            });
            div_alert.append(btn_close);
        });
        $('.dm3-google-map').each(function () {
            dm3GoogleMap(this);
        });
    };
}(jQuery));
(function ($) {
    'use strict';
    $(document).ready(function () {
        dm3_shortcodes_init();
    });
}(jQuery));
/*! Picturefill - v2.2.0-beta - 2014-11-19
 * http://scottjehl.github.io/picturefill
 * Copyright (c) 2014 https://github.com/scottjehl/picturefill/blob/master/Authors.txt; Licensed MIT */
window.matchMedia || (window.matchMedia = function () {
    "use strict";
    var a = window.styleMedia || window.media;
    if (!a) {
        var b = document.createElement("style"), c = document.getElementsByTagName("script")[0], d = null;
        b.type = "text/css", b.id = "matchmediajs-test", c.parentNode.insertBefore(b, c), d = "getComputedStyle"in window && window.getComputedStyle(b, null) || b.currentStyle, a = {matchMedium: function (a) {
            var c = "@media " + a + "{ #matchmediajs-test { width: 1px; } }";
            return b.styleSheet ? b.styleSheet.cssText = c : b.textContent = c, "1px" === d.width
        }}
    }
    return function (b) {
        return{matches: a.matchMedium(b || "all"), media: b || "all"}
    }
}()), function (a, b, c) {
    "use strict";
    function d(a) {
        var b, c, d, e, g, h = a || {};
        b = h.elements || f.getAllElements();
        for (var i = 0, j = b.length; j > i; i++)if (c = b[i], d = c.parentNode, e = void 0, g = void 0, "IMG" === c.nodeName.toUpperCase() && (c[f.ns] || (c[f.ns] = {}), h.reevaluate || !c[f.ns].evaluated)) {
            if ("PICTURE" === d.nodeName.toUpperCase()) {
                if (f.removeVideoShim(d), e = f.getMatch(c, d), e === !1)continue
            } else e = void 0;
            ("PICTURE" === d.nodeName.toUpperCase() || c.srcset && !f.srcsetSupported || !f.sizesSupported && c.srcset && c.srcset.indexOf("w") > -1) && f.dodgeSrcset(c), e ? (g = f.processSourceSet(e), f.applyBestCandidate(g, c)) : (g = f.processSourceSet(c), (void 0 === c.srcset || c[f.ns].srcset) && f.applyBestCandidate(g, c)), c[f.ns].evaluated = !0
        }
    }

    function e() {
        function c() {
            var b;
            a._picturefillWorking || (a._picturefillWorking = !0, a.clearTimeout(b), b = a.setTimeout(function () {
                d({reevaluate: !0}), a._picturefillWorking = !1
            }, 60))
        }

        d();
        var e = setInterval(function () {
            return d(), /^loaded|^i|^c/.test(b.readyState) ? void clearInterval(e) : void 0
        }, 250);
        a.addEventListener ? a.addEventListener("resize", c, !1) : a.attachEvent && a.attachEvent("onresize", c)
    }

    if (a.HTMLPictureElement)return void(a.picturefill = function () {
    });
    b.createElement("picture");
    var f = {};
    f.ns = "picturefill", function () {
        f.srcsetSupported = "srcset"in c, f.sizesSupported = "sizes"in c
    }(), f.trim = function (a) {
        return a.trim ? a.trim() : a.replace(/^\s+|\s+$/g, "")
    }, f.endsWith = function (a, b) {
        return a.endsWith ? a.endsWith(b) : -1 !== a.indexOf(b, a.length - b.length)
    }, f.restrictsMixedContent = function () {
        return"https:" === a.location.protocol
    }, f.matchesMedia = function (b) {
        return a.matchMedia && a.matchMedia(b).matches
    }, f.getDpr = function () {
        return a.devicePixelRatio || 1
    }, f.getWidthFromLength = function (a) {
        a = a && a.indexOf("%") > -1 == !1 && (parseFloat(a) > 0 || a.indexOf("calc(") > -1) ? a : "100vw", a = a.replace("vw", "%"), f.lengthEl || (f.lengthEl = b.createElement("div"), f.lengthEl.style.cssText = "border:0;display:block;font-size:1em;left:0;margin:0;padding:0;position:absolute;visibility:hidden"), f.lengthEl.style.width = a, b.body.appendChild(f.lengthEl), f.lengthEl.className = "helper-from-picturefill-js", f.lengthEl.offsetWidth <= 0 && (f.lengthEl.style.width = b.documentElement.offsetWidth + "px");
        var c = f.lengthEl.offsetWidth;
        return b.body.removeChild(f.lengthEl), c
    }, f.types = {}, f.types["image/jpeg"] = !0, f.types["image/gif"] = !0, f.types["image/png"] = !0, f.types["image/svg+xml"] = b.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image", "1.1"), f.types["image/webp"] = function () {
        var a = "image/webp";
        c.onerror = function () {
            f.types[a] = !1, d()
        }, c.onload = function () {
            f.types[a] = 1 === c.width, d()
        }, c.src = "data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA="
    }, f.verifyTypeSupport = function (a) {
        var b = a.getAttribute("type");
        return null === b || "" === b ? !0 : "function" == typeof f.types[b] ? (f.types[b](), "pending") : f.types[b]
    }, f.parseSize = function (a) {
        var b = /(\([^)]+\))?\s*(.+)/g.exec(a);
        return{media: b && b[1], length: b && b[2]}
    }, f.findWidthFromSourceSize = function (a) {
        for (var b, c = f.trim(a).split(/\s*,\s*/), d = 0, e = c.length; e > d; d++) {
            var g = c[d], h = f.parseSize(g), i = h.length, j = h.media;
            if (i && (!j || f.matchesMedia(j))) {
                b = i;
                break
            }
        }
        return f.getWidthFromLength(b)
    }, f.parseSrcset = function (a) {
        for (var b = []; "" !== a;) {
            a = a.replace(/^\s+/g, "");
            var c, d = a.search(/\s/g), e = null;
            if (-1 !== d) {
                c = a.slice(0, d);
                var f = c.slice(-1);
                if (("," === f || "" === c) && (c = c.replace(/,+$/, ""), e = ""), a = a.slice(d + 1), null === e) {
                    var g = a.indexOf(",");
                    -1 !== g ? (e = a.slice(0, g), a = a.slice(g + 1)) : (e = a, a = "")
                }
            } else c = a, a = "";
            (c || e) && b.push({url: c, descriptor: e})
        }
        return b
    }, f.parseDescriptor = function (a, b) {
        var c, d = b || "100vw", e = a && a.replace(/(^\s+|\s+$)/g, ""), g = f.findWidthFromSourceSize(d);
        if (e)for (var h = e.split(" "), i = h.length - 1; i >= 0; i--) {
            var j = h[i], k = j && j.slice(j.length - 1);
            if ("h" !== k && "w" !== k || f.sizesSupported) {
                if ("x" === k) {
                    var l = j && parseFloat(j, 10);
                    c = l && !isNaN(l) ? l : 1
                }
            } else c = parseFloat(parseInt(j, 10) / g)
        }
        return c || 1
    }, f.getCandidatesFromSourceSet = function (a, b) {
        for (var c = f.parseSrcset(a), d = [], e = 0, g = c.length; g > e; e++) {
            var h = c[e];
            d.push({url: h.url, resolution: f.parseDescriptor(h.descriptor, b)})
        }
        return d
    }, f.dodgeSrcset = function (a) {
        a.srcset && (a[f.ns].srcset = a.srcset, a.removeAttribute("srcset"))
    }, f.processSourceSet = function (a) {
        var b = a.getAttribute("srcset"), c = a.getAttribute("sizes"), d = [];
        return"IMG" === a.nodeName.toUpperCase() && a[f.ns] && a[f.ns].srcset && (b = a[f.ns].srcset), b && (d = f.getCandidatesFromSourceSet(b, c)), d
    }, f.applyBestCandidate = function (a, b) {
        var c, d, e;
        a.sort(f.ascendingSort), d = a.length, e = a[d - 1];
        for (var g = 0; d > g; g++)if (c = a[g], c.resolution >= f.getDpr()) {
            e = c;
            break
        }
        if (e && !f.endsWith(b.src, e.url))if (f.restrictsMixedContent() && "http:" === e.url.substr(0, "http:".length).toLowerCase())void 0 !== typeof console && console.warn("Blocked mixed content image " + e.url); else {
            b.src = e.url, b.currentSrc = b.src;
            var h = b.style || {}, i = "webkitBackfaceVisibility"in h, j = h.zoom;
            i && (h.zoom = ".999", i = b.offsetWidth, h.zoom = j)
        }
    }, f.ascendingSort = function (a, b) {
        return a.resolution - b.resolution
    }, f.removeVideoShim = function (a) {
        var b = a.getElementsByTagName("video");
        if (b.length) {
            for (var c = b[0], d = c.getElementsByTagName("source"); d.length;)a.insertBefore(d[0], c);
            c.parentNode.removeChild(c)
        }
    }, f.getAllElements = function () {
        for (var a = [], c = b.getElementsByTagName("img"), d = 0, e = c.length; e > d; d++) {
            var g = c[d];
            ("PICTURE" === g.parentNode.nodeName.toUpperCase() || null !== g.getAttribute("srcset") || g[f.ns] && null !== g[f.ns].srcset) && a.push(g)
        }
        return a
    }, f.getMatch = function (a, b) {
        for (var c, d = b.childNodes, e = 0, g = d.length; g > e; e++) {
            var h = d[e];
            if (1 === h.nodeType) {
                if (h === a)return c;
                if ("SOURCE" === h.nodeName.toUpperCase()) {
                    null !== h.getAttribute("src") && void 0 !== typeof console && console.warn("The `src` attribute is invalid on `picture` `source` element; instead, use `srcset`.");
                    var i = h.getAttribute("media");
                    if (h.getAttribute("srcset") && (!i || f.matchesMedia(i))) {
                        var j = f.verifyTypeSupport(h);
                        if (j === !0) {
                            c = h;
                            break
                        }
                        if ("pending" === j)return!1
                    }
                }
            }
        }
        return c
    }, e(), d._ = f, "object" == typeof module && "object" == typeof module.exports ? module.exports = d : "function" == typeof define && define.amd ? define(function () {
        return d
    }) : "object" == typeof a && (a.picturefill = d)
}(this, this.document, new this.Image);
;
window.Modernizr = function (a, b, c) {
    function z(a) {
        j.cssText = a
    }

    function A(a, b) {
        return z(m.join(a + ";") + (b || ""))
    }

    function B(a, b) {
        return typeof a === b
    }

    function C(a, b) {
        return!!~("" + a).indexOf(b)
    }

    function D(a, b) {
        for (var d in a) {
            var e = a[d];
            if (!C(e, "-") && j[e] !== c)return b == "pfx" ? e : !0
        }
        return!1
    }

    function E(a, b, d) {
        for (var e in a) {
            var f = b[a[e]];
            if (f !== c)return d === !1 ? a[e] : B(f, "function") ? f.bind(d || b) : f
        }
        return!1
    }

    function F(a, b, c) {
        var d = a.charAt(0).toUpperCase() + a.slice(1), e = (a + " " + o.join(d + " ") + d).split(" ");
        return B(b, "string") || B(b, "undefined") ? D(e, b) : (e = (a + " " + p.join(d + " ") + d).split(" "), E(e, b, c))
    }

    var d = "2.8.3", e = {}, f = !0, g = b.documentElement, h = "modernizr", i = b.createElement(h), j = i.style, k, l = {}.toString, m = " -webkit- -moz- -o- -ms- ".split(" "), n = "Webkit Moz O ms", o = n.split(" "), p = n.toLowerCase().split(" "), q = {}, r = {}, s = {}, t = [], u = t.slice, v, w = function (a, c, d, e) {
        var f, i, j, k, l = b.createElement("div"), m = b.body, n = m || b.createElement("body");
        if (parseInt(d, 10))while (d--)j = b.createElement("div"), j.id = e ? e[d] : h + (d + 1), l.appendChild(j);
        return f = ["&#173;", '<style id="s', h, '">', a, "</style>"].join(""), l.id = h, (m ? l : n).innerHTML += f, n.appendChild(l), m || (n.style.background = "", n.style.overflow = "hidden", k = g.style.overflow, g.style.overflow = "hidden", g.appendChild(n)), i = c(l, a), m ? l.parentNode.removeChild(l) : (n.parentNode.removeChild(n), g.style.overflow = k), !!i
    }, x = {}.hasOwnProperty, y;
    !B(x, "undefined") && !B(x.call, "undefined") ? y = function (a, b) {
        return x.call(a, b)
    } : y = function (a, b) {
        return b in a && B(a.constructor.prototype[b], "undefined")
    }, Function.prototype.bind || (Function.prototype.bind = function (b) {
        var c = this;
        if (typeof c != "function")throw new TypeError;
        var d = u.call(arguments, 1), e = function () {
            if (this instanceof e) {
                var a = function () {
                };
                a.prototype = c.prototype;
                var f = new a, g = c.apply(f, d.concat(u.call(arguments)));
                return Object(g) === g ? g : f
            }
            return c.apply(b, d.concat(u.call(arguments)))
        };
        return e
    }), q.touch = function () {
        var c;
        return"ontouchstart"in a || a.DocumentTouch && b instanceof DocumentTouch ? c = !0 : w(["@media (", m.join("touch-enabled),("), h, ")", "{#modernizr{top:9px;position:absolute}}"].join(""), function (a) {
            c = a.offsetTop === 9
        }), c
    }, q.cssanimations = function () {
        return F("animationName")
    }, q.csstransforms = function () {
        return!!F("transform")
    }, q.csstransitions = function () {
        return F("transition")
    };
    for (var G in q)y(q, G) && (v = G.toLowerCase(), e[v] = q[G](), t.push((e[v] ? "" : "no-") + v));
    return e.addTest = function (a, b) {
        if (typeof a == "object")for (var d in a)y(a, d) && e.addTest(d, a[d]); else {
            a = a.toLowerCase();
            if (e[a] !== c)return e;
            b = typeof b == "function" ? b() : b, typeof f != "undefined" && f && (g.className += " " + (b ? "" : "no-") + a), e[a] = b
        }
        return e
    }, z(""), i = k = null, e._version = d, e._prefixes = m, e._domPrefixes = p, e._cssomPrefixes = o, e.testProp = function (a) {
        return D([a])
    }, e.testAllProps = F, e.testStyles = w, e.prefixed = function (a, b, c) {
        return b ? F(a, b, c) : F(a, "pfx")
    }, g.className = g.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + (f ? " js " + t.join(" ") : ""), e
}(this, this.document);
/*!
 * jQuery Validation Plugin v1.13.1
 *
 * http://jqueryvalidation.org/
 *
 * Copyright (c) 2014 Jörn Zaefferer
 * Released under the MIT license
 */
(function (factory) {
    if (typeof define === "function" && define.amd) {
        define(["jquery"], factory);
    } else {
        factory(jQuery);
    }
}(function ($) {
    $.extend($.fn, {validate: function (options) {
        if (!this.length) {
            if (options && options.debug && window.console) {
                console.warn("Nothing selected, can't validate, returning nothing.");
            }
            return;
        }
        var validator = $.data(this[0], "validator");
        if (validator) {
            return validator;
        }
        this.attr("novalidate", "novalidate");
        validator = new $.validator(options, this[0]);
        $.data(this[0], "validator", validator);
        if (validator.settings.onsubmit) {
            this.validateDelegate(":submit", "click", function (event) {
                if (validator.settings.submitHandler) {
                    validator.submitButton = event.target;
                }
                if ($(event.target).hasClass("cancel")) {
                    validator.cancelSubmit = true;
                }
                if ($(event.target).attr("formnovalidate") !== undefined) {
                    validator.cancelSubmit = true;
                }
            });
            this.submit(function (event) {
                if (validator.settings.debug) {
                    event.preventDefault();
                }
                function handle() {
                    var hidden, result;
                    if (validator.settings.submitHandler) {
                        if (validator.submitButton) {
                            hidden = $("<input type='hidden'/>").attr("name", validator.submitButton.name).val($(validator.submitButton).val()).appendTo(validator.currentForm);
                        }
                        result = validator.settings.submitHandler.call(validator, validator.currentForm, event);
                        if (validator.submitButton) {
                            hidden.remove();
                        }
                        if (result !== undefined) {
                            return result;
                        }
                        return false;
                    }
                    return true;
                }

                if (validator.cancelSubmit) {
                    validator.cancelSubmit = false;
                    return handle();
                }
                if (validator.form()) {
                    if (validator.pendingRequest) {
                        validator.formSubmitted = true;
                        return false;
                    }
                    return handle();
                } else {
                    validator.focusInvalid();
                    return false;
                }
            });
        }
        return validator;
    }, valid: function () {
        var valid, validator;
        if ($(this[0]).is("form")) {
            valid = this.validate().form();
        } else {
            valid = true;
            validator = $(this[0].form).validate();
            this.each(function () {
                valid = validator.element(this) && valid;
            });
        }
        return valid;
    }, removeAttrs: function (attributes) {
        var result = {}, $element = this;
        $.each(attributes.split(/\s/), function (index, value) {
            result[value] = $element.attr(value);
            $element.removeAttr(value);
        });
        return result;
    }, rules: function (command, argument) {
        var element = this[0], settings, staticRules, existingRules, data, param, filtered;
        if (command) {
            settings = $.data(element.form, "validator").settings;
            staticRules = settings.rules;
            existingRules = $.validator.staticRules(element);
            switch (command) {
                case"add":
                    $.extend(existingRules, $.validator.normalizeRule(argument));
                    delete existingRules.messages;
                    staticRules[element.name] = existingRules;
                    if (argument.messages) {
                        settings.messages[element.name] = $.extend(settings.messages[element.name], argument.messages);
                    }
                    break;
                case"remove":
                    if (!argument) {
                        delete staticRules[element.name];
                        return existingRules;
                    }
                    filtered = {};
                    $.each(argument.split(/\s/), function (index, method) {
                        filtered[method] = existingRules[method];
                        delete existingRules[method];
                        if (method === "required") {
                            $(element).removeAttr("aria-required");
                        }
                    });
                    return filtered;
            }
        }
        data = $.validator.normalizeRules($.extend({}, $.validator.classRules(element), $.validator.attributeRules(element), $.validator.dataRules(element), $.validator.staticRules(element)), element);
        if (data.required) {
            param = data.required;
            delete data.required;
            data = $.extend({required: param}, data);
            $(element).attr("aria-required", "true");
        }
        if (data.remote) {
            param = data.remote;
            delete data.remote;
            data = $.extend(data, {remote: param});
        }
        return data;
    }});
    $.extend($.expr[":"], {blank: function (a) {
        return!$.trim("" + $(a).val());
    }, filled: function (a) {
        return!!$.trim("" + $(a).val());
    }, unchecked: function (a) {
        return!$(a).prop("checked");
    }});
    $.validator = function (options, form) {
        this.settings = $.extend(true, {}, $.validator.defaults, options);
        this.currentForm = form;
        this.init();
    };
    $.validator.format = function (source, params) {
        if (arguments.length === 1) {
            return function () {
                var args = $.makeArray(arguments);
                args.unshift(source);
                return $.validator.format.apply(this, args);
            };
        }
        if (arguments.length > 2 && params.constructor !== Array) {
            params = $.makeArray(arguments).slice(1);
        }
        if (params.constructor !== Array) {
            params = [params];
        }
        $.each(params, function (i, n) {
            source = source.replace(new RegExp("\\{" + i + "\\}", "g"), function () {
                return n;
            });
        });
        return source;
    };
    $.extend($.validator, {defaults: {messages: {}, groups: {}, rules: {}, errorClass: "error", validClass: "valid", errorElement: "label", focusCleanup: false, focusInvalid: true, errorContainer: $([]), errorLabelContainer: $([]), onsubmit: true, ignore: ":hidden", ignoreTitle: false, onfocusin: function (element) {
        this.lastActive = element;
        if (this.settings.focusCleanup) {
            if (this.settings.unhighlight) {
                this.settings.unhighlight.call(this, element, this.settings.errorClass, this.settings.validClass);
            }
            this.hideThese(this.errorsFor(element));
        }
    }, onfocusout: function (element) {
        if (!this.checkable(element) && (element.name in this.submitted || !this.optional(element))) {
            this.element(element);
        }
    }, onkeyup: function (element, event) {
        if (event.which === 9 && this.elementValue(element) === "") {
            return;
        } else if (element.name in this.submitted || element === this.lastElement) {
            this.element(element);
        }
    }, onclick: function (element) {
        if (element.name in this.submitted) {
            this.element(element);
        } else if (element.parentNode.name in this.submitted) {
            this.element(element.parentNode);
        }
    }, highlight: function (element, errorClass, validClass) {
        if (element.type === "radio") {
            this.findByName(element.name).addClass(errorClass).removeClass(validClass);
        } else {
            $(element).addClass(errorClass).removeClass(validClass);
        }
    }, unhighlight: function (element, errorClass, validClass) {
        if (element.type === "radio") {
            this.findByName(element.name).removeClass(errorClass).addClass(validClass);
        } else {
            $(element).removeClass(errorClass).addClass(validClass);
        }
    }}, setDefaults: function (settings) {
        $.extend($.validator.defaults, settings);
    }, messages: {required: "This field is required.", remote: "Please fix this field.", email: "Please enter a valid email address.", url: "Please enter a valid URL.", date: "Please enter a valid date.", dateISO: "Please enter a valid date ( ISO ).", number: "Please enter a valid number.", digits: "Please enter only digits.", creditcard: "Please enter a valid credit card number.", equalTo: "Please enter the same value again.", maxlength: $.validator.format("Please enter no more than {0} characters."), minlength: $.validator.format("Please enter at least {0} characters."), rangelength: $.validator.format("Please enter a value between {0} and {1} characters long."), range: $.validator.format("Please enter a value between {0} and {1}."), max: $.validator.format("Please enter a value less than or equal to {0}."), min: $.validator.format("Please enter a value greater than or equal to {0}.")}, autoCreateRanges: false, prototype: {init: function () {
        this.labelContainer = $(this.settings.errorLabelContainer);
        this.errorContext = this.labelContainer.length && this.labelContainer || $(this.currentForm);
        this.containers = $(this.settings.errorContainer).add(this.settings.errorLabelContainer);
        this.submitted = {};
        this.valueCache = {};
        this.pendingRequest = 0;
        this.pending = {};
        this.invalid = {};
        this.reset();
        var groups = (this.groups = {}), rules;
        $.each(this.settings.groups, function (key, value) {
            if (typeof value === "string") {
                value = value.split(/\s/);
            }
            $.each(value, function (index, name) {
                groups[name] = key;
            });
        });
        rules = this.settings.rules;
        $.each(rules, function (key, value) {
            rules[key] = $.validator.normalizeRule(value);
        });
        function delegate(event) {
            var validator = $.data(this[0].form, "validator"), eventType = "on" + event.type.replace(/^validate/, ""), settings = validator.settings;
            if (settings[eventType] && !this.is(settings.ignore)) {
                settings[eventType].call(validator, this[0], event);
            }
        }

        $(this.currentForm).validateDelegate(":text, [type='password'], [type='file'], select, textarea, " + "[type='number'], [type='search'] ,[type='tel'], [type='url'], " + "[type='email'], [type='datetime'], [type='date'], [type='month'], " + "[type='week'], [type='time'], [type='datetime-local'], " + "[type='range'], [type='color'], [type='radio'], [type='checkbox']", "focusin focusout keyup", delegate).validateDelegate("select, option, [type='radio'], [type='checkbox']", "click", delegate);
        if (this.settings.invalidHandler) {
            $(this.currentForm).bind("invalid-form.validate", this.settings.invalidHandler);
        }
        $(this.currentForm).find("[required], [data-rule-required], .required").attr("aria-required", "true");
    }, form: function () {
        this.checkForm();
        $.extend(this.submitted, this.errorMap);
        this.invalid = $.extend({}, this.errorMap);
        if (!this.valid()) {
            $(this.currentForm).triggerHandler("invalid-form", [this]);
        }
        this.showErrors();
        return this.valid();
    }, checkForm: function () {
        this.prepareForm();
        for (var i = 0, elements = (this.currentElements = this.elements()); elements[i]; i++) {
            this.check(elements[i]);
        }
        return this.valid();
    }, element: function (element) {
        var cleanElement = this.clean(element), checkElement = this.validationTargetFor(cleanElement), result = true;
        this.lastElement = checkElement;
        if (checkElement === undefined) {
            delete this.invalid[cleanElement.name];
        } else {
            this.prepareElement(checkElement);
            this.currentElements = $(checkElement);
            result = this.check(checkElement) !== false;
            if (result) {
                delete this.invalid[checkElement.name];
            } else {
                this.invalid[checkElement.name] = true;
            }
        }
        $(element).attr("aria-invalid", !result);
        if (!this.numberOfInvalids()) {
            this.toHide = this.toHide.add(this.containers);
        }
        this.showErrors();
        return result;
    }, showErrors: function (errors) {
        if (errors) {
            $.extend(this.errorMap, errors);
            this.errorList = [];
            for (var name in errors) {
                this.errorList.push({message: errors[name], element: this.findByName(name)[0]});
            }
            this.successList = $.grep(this.successList, function (element) {
                return!(element.name in errors);
            });
        }
        if (this.settings.showErrors) {
            this.settings.showErrors.call(this, this.errorMap, this.errorList);
        } else {
            this.defaultShowErrors();
        }
    }, resetForm: function () {
        if ($.fn.resetForm) {
            $(this.currentForm).resetForm();
        }
        this.submitted = {};
        this.lastElement = null;
        this.prepareForm();
        this.hideErrors();
        this.elements().removeClass(this.settings.errorClass).removeData("previousValue").removeAttr("aria-invalid");
    }, numberOfInvalids: function () {
        return this.objectLength(this.invalid);
    }, objectLength: function (obj) {
        var count = 0, i;
        for (i in obj) {
            count++;
        }
        return count;
    }, hideErrors: function () {
        this.hideThese(this.toHide);
    }, hideThese: function (errors) {
        errors.not(this.containers).text("");
        this.addWrapper(errors).hide();
    }, valid: function () {
        return this.size() === 0;
    }, size: function () {
        return this.errorList.length;
    }, focusInvalid: function () {
        if (this.settings.focusInvalid) {
            try {
                $(this.findLastActive() || this.errorList.length && this.errorList[0].element || []).filter(":visible").focus().trigger("focusin");
            } catch (e) {
            }
        }
    }, findLastActive: function () {
        var lastActive = this.lastActive;
        return lastActive && $.grep(this.errorList, function (n) {
            return n.element.name === lastActive.name;
        }).length === 1 && lastActive;
    }, elements: function () {
        var validator = this, rulesCache = {};
        return $(this.currentForm).find("input, select, textarea").not(":submit, :reset, :image, [disabled], [readonly]").not(this.settings.ignore).filter(function () {
            if (!this.name && validator.settings.debug && window.console) {
                console.error("%o has no name assigned", this);
            }
            if (this.name in rulesCache || !validator.objectLength($(this).rules())) {
                return false;
            }
            rulesCache[this.name] = true;
            return true;
        });
    }, clean: function (selector) {
        return $(selector)[0];
    }, errors: function () {
        var errorClass = this.settings.errorClass.split(" ").join(".");
        return $(this.settings.errorElement + "." + errorClass, this.errorContext);
    }, reset: function () {
        this.successList = [];
        this.errorList = [];
        this.errorMap = {};
        this.toShow = $([]);
        this.toHide = $([]);
        this.currentElements = $([]);
    }, prepareForm: function () {
        this.reset();
        this.toHide = this.errors().add(this.containers);
    }, prepareElement: function (element) {
        this.reset();
        this.toHide = this.errorsFor(element);
    }, elementValue: function (element) {
        var val, $element = $(element), type = element.type;
        if (type === "radio" || type === "checkbox") {
            return $("input[name='" + element.name + "']:checked").val();
        } else if (type === "number" && typeof element.validity !== "undefined") {
            return element.validity.badInput ? false : $element.val();
        }
        val = $element.val();
        if (typeof val === "string") {
            return val.replace(/\r/g, "");
        }
        return val;
    }, check: function (element) {
        element = this.validationTargetFor(this.clean(element));
        var rules = $(element).rules(), rulesCount = $.map(rules, function (n, i) {
            return i;
        }).length, dependencyMismatch = false, val = this.elementValue(element), result, method, rule;
        for (method in rules) {
            rule = {method: method, parameters: rules[method]};
            try {
                result = $.validator.methods[method].call(this, val, element, rule.parameters);
                if (result === "dependency-mismatch" && rulesCount === 1) {
                    dependencyMismatch = true;
                    continue;
                }
                dependencyMismatch = false;
                if (result === "pending") {
                    this.toHide = this.toHide.not(this.errorsFor(element));
                    return;
                }
                if (!result) {
                    this.formatAndAdd(element, rule);
                    return false;
                }
            } catch (e) {
                if (this.settings.debug && window.console) {
                    console.log("Exception occurred when checking element " + element.id + ", check the '" + rule.method + "' method.", e);
                }
                throw e;
            }
        }
        if (dependencyMismatch) {
            return;
        }
        if (this.objectLength(rules)) {
            this.successList.push(element);
        }
        return true;
    }, customDataMessage: function (element, method) {
        return $(element).data("msg" + method.charAt(0).toUpperCase() +
            method.substring(1).toLowerCase()) || $(element).data("msg");
    }, customMessage: function (name, method) {
        var m = this.settings.messages[name];
        return m && (m.constructor === String ? m : m[method]);
    }, findDefined: function () {
        for (var i = 0; i < arguments.length; i++) {
            if (arguments[i] !== undefined) {
                return arguments[i];
            }
        }
        return undefined;
    }, defaultMessage: function (element, method) {
        return this.findDefined(this.customMessage(element.name, method), this.customDataMessage(element, method), !this.settings.ignoreTitle && element.title || undefined, $.validator.messages[method], "<strong>Warning: No message defined for " + element.name + "</strong>");
    }, formatAndAdd: function (element, rule) {
        var message = this.defaultMessage(element, rule.method), theregex = /\$?\{(\d+)\}/g;
        if (typeof message === "function") {
            message = message.call(this, rule.parameters, element);
        } else if (theregex.test(message)) {
            message = $.validator.format(message.replace(theregex, "{$1}"), rule.parameters);
        }
        this.errorList.push({message: message, element: element, method: rule.method});
        this.errorMap[element.name] = message;
        this.submitted[element.name] = message;
    }, addWrapper: function (toToggle) {
        if (this.settings.wrapper) {
            toToggle = toToggle.add(toToggle.parent(this.settings.wrapper));
        }
        return toToggle;
    }, defaultShowErrors: function () {
        var i, elements, error;
        for (i = 0; this.errorList[i]; i++) {
            error = this.errorList[i];
            if (this.settings.highlight) {
                this.settings.highlight.call(this, error.element, this.settings.errorClass, this.settings.validClass);
            }
            this.showLabel(error.element, error.message);
        }
        if (this.errorList.length) {
            this.toShow = this.toShow.add(this.containers);
        }
        if (this.settings.success) {
            for (i = 0; this.successList[i]; i++) {
                this.showLabel(this.successList[i]);
            }
        }
        if (this.settings.unhighlight) {
            for (i = 0, elements = this.validElements(); elements[i]; i++) {
                this.settings.unhighlight.call(this, elements[i], this.settings.errorClass, this.settings.validClass);
            }
        }
        this.toHide = this.toHide.not(this.toShow);
        this.hideErrors();
        this.addWrapper(this.toShow).show();
    }, validElements: function () {
        return this.currentElements.not(this.invalidElements());
    }, invalidElements: function () {
        return $(this.errorList).map(function () {
            return this.element;
        });
    }, showLabel: function (element, message) {
        var place, group, errorID, error = this.errorsFor(element), elementID = this.idOrName(element), describedBy = $(element).attr("aria-describedby");
        if (error.length) {
            error.removeClass(this.settings.validClass).addClass(this.settings.errorClass);
            error.html(message);
        } else {
            error = $("<" + this.settings.errorElement + ">").attr("id", elementID + "-error").addClass(this.settings.errorClass).html(message || "");
            place = error;
            if (this.settings.wrapper) {
                place = error.hide().show().wrap("<" + this.settings.wrapper + "/>").parent();
            }
            if (this.labelContainer.length) {
                this.labelContainer.append(place);
            } else if (this.settings.errorPlacement) {
                this.settings.errorPlacement(place, $(element));
            } else {
                place.insertAfter(element);
            }
            if (error.is("label")) {
                error.attr("for", elementID);
            } else if (error.parents("label[for='" + elementID + "']").length === 0) {
                errorID = error.attr("id").replace(/(:|\.|\[|\])/g, "\\$1");
                if (!describedBy) {
                    describedBy = errorID;
                } else if (!describedBy.match(new RegExp("\\b" + errorID + "\\b"))) {
                    describedBy += " " + errorID;
                }
                $(element).attr("aria-describedby", describedBy);
                group = this.groups[element.name];
                if (group) {
                    $.each(this.groups, function (name, testgroup) {
                        if (testgroup === group) {
                            $("[name='" + name + "']", this.currentForm).attr("aria-describedby", error.attr("id"));
                        }
                    });
                }
            }
        }
        if (!message && this.settings.success) {
            error.text("");
            if (typeof this.settings.success === "string") {
                error.addClass(this.settings.success);
            } else {
                this.settings.success(error, element);
            }
        }
        this.toShow = this.toShow.add(error);
    }, errorsFor: function (element) {
        var name = this.idOrName(element), describer = $(element).attr("aria-describedby"), selector = "label[for='" + name + "'], label[for='" + name + "'] *";
        if (describer) {
            selector = selector + ", #" + describer.replace(/\s+/g, ", #");
        }
        return this.errors().filter(selector);
    }, idOrName: function (element) {
        return this.groups[element.name] || (this.checkable(element) ? element.name : element.id || element.name);
    }, validationTargetFor: function (element) {
        if (this.checkable(element)) {
            element = this.findByName(element.name);
        }
        return $(element).not(this.settings.ignore)[0];
    }, checkable: function (element) {
        return(/radio|checkbox/i).test(element.type);
    }, findByName: function (name) {
        return $(this.currentForm).find("[name='" + name + "']");
    }, getLength: function (value, element) {
        switch (element.nodeName.toLowerCase()) {
            case"select":
                return $("option:selected", element).length;
            case"input":
                if (this.checkable(element)) {
                    return this.findByName(element.name).filter(":checked").length;
                }
        }
        return value.length;
    }, depend: function (param, element) {
        return this.dependTypes[typeof param] ? this.dependTypes[typeof param](param, element) : true;
    }, dependTypes: {"boolean": function (param) {
        return param;
    }, "string": function (param, element) {
        return!!$(param, element.form).length;
    }, "function": function (param, element) {
        return param(element);
    }}, optional: function (element) {
        var val = this.elementValue(element);
        return!$.validator.methods.required.call(this, val, element) && "dependency-mismatch";
    }, startRequest: function (element) {
        if (!this.pending[element.name]) {
            this.pendingRequest++;
            this.pending[element.name] = true;
        }
    }, stopRequest: function (element, valid) {
        this.pendingRequest--;
        if (this.pendingRequest < 0) {
            this.pendingRequest = 0;
        }
        delete this.pending[element.name];
        if (valid && this.pendingRequest === 0 && this.formSubmitted && this.form()) {
            $(this.currentForm).submit();
            this.formSubmitted = false;
        } else if (!valid && this.pendingRequest === 0 && this.formSubmitted) {
            $(this.currentForm).triggerHandler("invalid-form", [this]);
            this.formSubmitted = false;
        }
    }, previousValue: function (element) {
        return $.data(element, "previousValue") || $.data(element, "previousValue", {old: null, valid: true, message: this.defaultMessage(element, "remote")});
    }}, classRuleSettings: {required: {required: true}, email: {email: true}, url: {url: true}, date: {date: true}, dateISO: {dateISO: true}, number: {number: true}, digits: {digits: true}, creditcard: {creditcard: true}}, addClassRules: function (className, rules) {
        if (className.constructor === String) {
            this.classRuleSettings[className] = rules;
        } else {
            $.extend(this.classRuleSettings, className);
        }
    }, classRules: function (element) {
        var rules = {}, classes = $(element).attr("class");
        if (classes) {
            $.each(classes.split(" "), function () {
                if (this in $.validator.classRuleSettings) {
                    $.extend(rules, $.validator.classRuleSettings[this]);
                }
            });
        }
        return rules;
    }, attributeRules: function (element) {
        var rules = {}, $element = $(element), type = element.getAttribute("type"), method, value;
        for (method in $.validator.methods) {
            if (method === "required") {
                value = element.getAttribute(method);
                if (value === "") {
                    value = true;
                }
                value = !!value;
            } else {
                value = $element.attr(method);
            }
            if (/min|max/.test(method) && (type === null || /number|range|text/.test(type))) {
                value = Number(value);
            }
            if (value || value === 0) {
                rules[method] = value;
            } else if (type === method && type !== "range") {
                rules[method] = true;
            }
        }
        if (rules.maxlength && /-1|2147483647|524288/.test(rules.maxlength)) {
            delete rules.maxlength;
        }
        return rules;
    }, dataRules: function (element) {
        var method, value, rules = {}, $element = $(element);
        for (method in $.validator.methods) {
            value = $element.data("rule" + method.charAt(0).toUpperCase() + method.substring(1).toLowerCase());
            if (value !== undefined) {
                rules[method] = value;
            }
        }
        return rules;
    }, staticRules: function (element) {
        var rules = {}, validator = $.data(element.form, "validator");
        if (validator.settings.rules) {
            rules = $.validator.normalizeRule(validator.settings.rules[element.name]) || {};
        }
        return rules;
    }, normalizeRules: function (rules, element) {
        $.each(rules, function (prop, val) {
            if (val === false) {
                delete rules[prop];
                return;
            }
            if (val.param || val.depends) {
                var keepRule = true;
                switch (typeof val.depends) {
                    case"string":
                        keepRule = !!$(val.depends, element.form).length;
                        break;
                    case"function":
                        keepRule = val.depends.call(element, element);
                        break;
                }
                if (keepRule) {
                    rules[prop] = val.param !== undefined ? val.param : true;
                } else {
                    delete rules[prop];
                }
            }
        });
        $.each(rules, function (rule, parameter) {
            rules[rule] = $.isFunction(parameter) ? parameter(element) : parameter;
        });
        $.each(["minlength", "maxlength"], function () {
            if (rules[this]) {
                rules[this] = Number(rules[this]);
            }
        });
        $.each(["rangelength", "range"], function () {
            var parts;
            if (rules[this]) {
                if ($.isArray(rules[this])) {
                    rules[this] = [Number(rules[this][0]), Number(rules[this][1])];
                } else if (typeof rules[this] === "string") {
                    parts = rules[this].replace(/[\[\]]/g, "").split(/[\s,]+/);
                    rules[this] = [Number(parts[0]), Number(parts[1])];
                }
            }
        });
        if ($.validator.autoCreateRanges) {
            if (rules.min != null && rules.max != null) {
                rules.range = [rules.min, rules.max];
                delete rules.min;
                delete rules.max;
            }
            if (rules.minlength != null && rules.maxlength != null) {
                rules.rangelength = [rules.minlength, rules.maxlength];
                delete rules.minlength;
                delete rules.maxlength;
            }
        }
        return rules;
    }, normalizeRule: function (data) {
        if (typeof data === "string") {
            var transformed = {};
            $.each(data.split(/\s/), function () {
                transformed[this] = true;
            });
            data = transformed;
        }
        return data;
    }, addMethod: function (name, method, message) {
        $.validator.methods[name] = method;
        $.validator.messages[name] = message !== undefined ? message : $.validator.messages[name];
        if (method.length < 3) {
            $.validator.addClassRules(name, $.validator.normalizeRule(name));
        }
    }, methods: {required: function (value, element, param) {
        if (!this.depend(param, element)) {
            return"dependency-mismatch";
        }
        if (element.nodeName.toLowerCase() === "select") {
            var val = $(element).val();
            return val && val.length > 0;
        }
        if (this.checkable(element)) {
            return this.getLength(value, element) > 0;
        }
        return $.trim(value).length > 0;
    }, email: function (value, element) {
        return this.optional(element) || /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(value);
    }, url: function (value, element) {
        return this.optional(element) || /^(https?|s?ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(value);
    }, date: function (value, element) {
        return this.optional(element) || !/Invalid|NaN/.test(new Date(value).toString());
    }, dateISO: function (value, element) {
        return this.optional(element) || /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(value);
    }, number: function (value, element) {
        return this.optional(element) || /^-?(?:\d+|\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(value);
    }, digits: function (value, element) {
        return this.optional(element) || /^\d+$/.test(value);
    }, creditcard: function (value, element) {
        if (this.optional(element)) {
            return"dependency-mismatch";
        }
        if (/[^0-9 \-]+/.test(value)) {
            return false;
        }
        var nCheck = 0, nDigit = 0, bEven = false, n, cDigit;
        value = value.replace(/\D/g, "");
        if (value.length < 13 || value.length > 19) {
            return false;
        }
        for (n = value.length - 1; n >= 0; n--) {
            cDigit = value.charAt(n);
            nDigit = parseInt(cDigit, 10);
            if (bEven) {
                if ((nDigit *= 2) > 9) {
                    nDigit -= 9;
                }
            }
            nCheck += nDigit;
            bEven = !bEven;
        }
        return(nCheck % 10) === 0;
    }, minlength: function (value, element, param) {
        var length = $.isArray(value) ? value.length : this.getLength(value, element);
        return this.optional(element) || length >= param;
    }, maxlength: function (value, element, param) {
        var length = $.isArray(value) ? value.length : this.getLength(value, element);
        return this.optional(element) || length <= param;
    }, rangelength: function (value, element, param) {
        var length = $.isArray(value) ? value.length : this.getLength(value, element);
        return this.optional(element) || (length >= param[0] && length <= param[1]);
    }, min: function (value, element, param) {
        return this.optional(element) || value >= param;
    }, max: function (value, element, param) {
        return this.optional(element) || value <= param;
    }, range: function (value, element, param) {
        return this.optional(element) || (value >= param[0] && value <= param[1]);
    }, equalTo: function (value, element, param) {
        var target = $(param);
        if (this.settings.onfocusout) {
            target.unbind(".validate-equalTo").bind("blur.validate-equalTo", function () {
                $(element).valid();
            });
        }
        return value === target.val();
    }, remote: function (value, element, param) {
        if (this.optional(element)) {
            return"dependency-mismatch";
        }
        var previous = this.previousValue(element), validator, data;
        if (!this.settings.messages[element.name]) {
            this.settings.messages[element.name] = {};
        }
        previous.originalMessage = this.settings.messages[element.name].remote;
        this.settings.messages[element.name].remote = previous.message;
        param = typeof param === "string" && {url: param} || param;
        if (previous.old === value) {
            return previous.valid;
        }
        previous.old = value;
        validator = this;
        this.startRequest(element);
        data = {};
        data[element.name] = value;
        $.ajax($.extend(true, {url: param, mode: "abort", port: "validate" + element.name, dataType: "json", data: data, context: validator.currentForm, success: function (response) {
            var valid = response === true || response === "true", errors, message, submitted;
            validator.settings.messages[element.name].remote = previous.originalMessage;
            if (valid) {
                submitted = validator.formSubmitted;
                validator.prepareElement(element);
                validator.formSubmitted = submitted;
                validator.successList.push(element);
                delete validator.invalid[element.name];
                validator.showErrors();
            } else {
                errors = {};
                message = response || validator.defaultMessage(element, "remote");
                errors[element.name] = previous.message = $.isFunction(message) ? message(value) : message;
                validator.invalid[element.name] = true;
                validator.showErrors(errors);
            }
            previous.valid = valid;
            validator.stopRequest(element, valid);
        }}, param));
        return"pending";
    }}});
    $.format = function deprecated() {
        throw"$.format has been deprecated. Please use $.validator.format instead.";
    };
    var pendingRequests = {}, ajax;
    if ($.ajaxPrefilter) {
        $.ajaxPrefilter(function (settings, _, xhr) {
            var port = settings.port;
            if (settings.mode === "abort") {
                if (pendingRequests[port]) {
                    pendingRequests[port].abort();
                }
                pendingRequests[port] = xhr;
            }
        });
    } else {
        ajax = $.ajax;
        $.ajax = function (settings) {
            var mode = ("mode"in settings ? settings : $.ajaxSettings).mode, port = ("port"in settings ? settings : $.ajaxSettings).port;
            if (mode === "abort") {
                if (pendingRequests[port]) {
                    pendingRequests[port].abort();
                }
                pendingRequests[port] = ajax.apply(this, arguments);
                return pendingRequests[port];
            }
            return ajax.apply(this, arguments);
        };
    }
    $.extend($.fn, {validateDelegate: function (delegate, type, handler) {
        return this.bind(type, function (event) {
            var target = $(event.target);
            if (target.is(delegate)) {
                return handler.apply(target, arguments);
            }
        });
    }});
}));
/*!
 * jQuery Form Plugin
 * version: 3.51.0-2014.06.20
 * Requires jQuery v1.5 or later
 * Copyright (c) 2014 M. Alsup
 * Examples and documentation at: http://malsup.com/jquery/form/
 * Project repository: https://github.com/malsup/form
 * Dual licensed under the MIT and GPL licenses.
 * https://github.com/malsup/form#copyright-and-license
 */
!function (e) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], e) : e("undefined" != typeof jQuery ? jQuery : window.Zepto)
}(function (e) {
    "use strict";
    function t(t) {
        var r = t.data;
        t.isDefaultPrevented() || (t.preventDefault(), e(t.target).ajaxSubmit(r))
    }

    function r(t) {
        var r = t.target, a = e(r);
        if (!a.is("[type=submit],[type=image]")) {
            var n = a.closest("[type=submit]");
            if (0 === n.length)return;
            r = n[0]
        }
        var i = this;
        if (i.clk = r, "image" == r.type)if (void 0 !== t.offsetX)i.clk_x = t.offsetX, i.clk_y = t.offsetY; else if ("function" == typeof e.fn.offset) {
            var o = a.offset();
            i.clk_x = t.pageX - o.left, i.clk_y = t.pageY - o.top
        } else i.clk_x = t.pageX - r.offsetLeft, i.clk_y = t.pageY - r.offsetTop;
        setTimeout(function () {
            i.clk = i.clk_x = i.clk_y = null
        }, 100)
    }

    function a() {
        if (e.fn.ajaxSubmit.debug) {
            var t = "[jquery.form] " + Array.prototype.join.call(arguments, "");
            window.console && window.console.log ? window.console.log(t) : window.opera && window.opera.postError && window.opera.postError(t)
        }
    }

    var n = {};
    n.fileapi = void 0 !== e("<input type='file'/>").get(0).files, n.formdata = void 0 !== window.FormData;
    var i = !!e.fn.prop;
    e.fn.attr2 = function () {
        if (!i)return this.attr.apply(this, arguments);
        var e = this.prop.apply(this, arguments);
        return e && e.jquery || "string" == typeof e ? e : this.attr.apply(this, arguments)
    }, e.fn.ajaxSubmit = function (t) {
        function r(r) {
            var a, n, i = e.param(r, t.traditional).split("&"), o = i.length, s = [];
            for (a = 0; o > a; a++)i[a] = i[a].replace(/\+/g, " "), n = i[a].split("="), s.push([decodeURIComponent(n[0]), decodeURIComponent(n[1])]);
            return s
        }

        function o(a) {
            for (var n = new FormData, i = 0; i < a.length; i++)n.append(a[i].name, a[i].value);
            if (t.extraData) {
                var o = r(t.extraData);
                for (i = 0; i < o.length; i++)o[i] && n.append(o[i][0], o[i][1])
            }
            t.data = null;
            var s = e.extend(!0, {}, e.ajaxSettings, t, {contentType: !1, processData: !1, cache: !1, type: u || "POST"});
            t.uploadProgress && (s.xhr = function () {
                var r = e.ajaxSettings.xhr();
                return r.upload && r.upload.addEventListener("progress", function (e) {
                    var r = 0, a = e.loaded || e.position, n = e.total;
                    e.lengthComputable && (r = Math.ceil(a / n * 100)), t.uploadProgress(e, a, n, r)
                }, !1), r
            }), s.data = null;
            var c = s.beforeSend;
            return s.beforeSend = function (e, r) {
                r.data = t.formData ? t.formData : n, c && c.call(this, e, r)
            }, e.ajax(s)
        }

        function s(r) {
            function n(e) {
                var t = null;
                try {
                    e.contentWindow && (t = e.contentWindow.document)
                } catch (r) {
                    a("cannot get iframe.contentWindow document: " + r)
                }
                if (t)return t;
                try {
                    t = e.contentDocument ? e.contentDocument : e.document
                } catch (r) {
                    a("cannot get iframe.contentDocument: " + r), t = e.document
                }
                return t
            }

            function o() {
                function t() {
                    try {
                        var e = n(g).readyState;
                        a("state = " + e), e && "uninitialized" == e.toLowerCase() && setTimeout(t, 50)
                    } catch (r) {
                        a("Server abort: ", r, " (", r.name, ")"), s(k), j && clearTimeout(j), j = void 0
                    }
                }

                var r = f.attr2("target"), i = f.attr2("action"), o = "multipart/form-data", c = f.attr("enctype") || f.attr("encoding") || o;
                w.setAttribute("target", p), (!u || /post/i.test(u)) && w.setAttribute("method", "POST"), i != m.url && w.setAttribute("action", m.url), m.skipEncodingOverride || u && !/post/i.test(u) || f.attr({encoding: "multipart/form-data", enctype: "multipart/form-data"}), m.timeout && (j = setTimeout(function () {
                    T = !0, s(D)
                }, m.timeout));
                var l = [];
                try {
                    if (m.extraData)for (var d in m.extraData)m.extraData.hasOwnProperty(d) && l.push(e.isPlainObject(m.extraData[d]) && m.extraData[d].hasOwnProperty("name") && m.extraData[d].hasOwnProperty("value") ? e('<input type="hidden" name="' + m.extraData[d].name + '">').val(m.extraData[d].value).appendTo(w)[0] : e('<input type="hidden" name="' + d + '">').val(m.extraData[d]).appendTo(w)[0]);
                    m.iframeTarget || v.appendTo("body"), g.attachEvent ? g.attachEvent("onload", s) : g.addEventListener("load", s, !1), setTimeout(t, 15);
                    try {
                        w.submit()
                    } catch (h) {
                        var x = document.createElement("form").submit;
                        x.apply(w)
                    }
                } finally {
                    w.setAttribute("action", i), w.setAttribute("enctype", c), r ? w.setAttribute("target", r) : f.removeAttr("target"), e(l).remove()
                }
            }

            function s(t) {
                if (!x.aborted && !F) {
                    if (M = n(g), M || (a("cannot access response document"), t = k), t === D && x)return x.abort("timeout"), void S.reject(x, "timeout");
                    if (t == k && x)return x.abort("server abort"), void S.reject(x, "error", "server abort");
                    if (M && M.location.href != m.iframeSrc || T) {
                        g.detachEvent ? g.detachEvent("onload", s) : g.removeEventListener("load", s, !1);
                        var r, i = "success";
                        try {
                            if (T)throw"timeout";
                            var o = "xml" == m.dataType || M.XMLDocument || e.isXMLDoc(M);
                            if (a("isXml=" + o), !o && window.opera && (null === M.body || !M.body.innerHTML) && --O)return a("requeing onLoad callback, DOM not available"), void setTimeout(s, 250);
                            var u = M.body ? M.body : M.documentElement;
                            x.responseText = u ? u.innerHTML : null, x.responseXML = M.XMLDocument ? M.XMLDocument : M, o && (m.dataType = "xml"), x.getResponseHeader = function (e) {
                                var t = {"content-type": m.dataType};
                                return t[e.toLowerCase()]
                            }, u && (x.status = Number(u.getAttribute("status")) || x.status, x.statusText = u.getAttribute("statusText") || x.statusText);
                            var c = (m.dataType || "").toLowerCase(), l = /(json|script|text)/.test(c);
                            if (l || m.textarea) {
                                var f = M.getElementsByTagName("textarea")[0];
                                if (f)x.responseText = f.value, x.status = Number(f.getAttribute("status")) || x.status, x.statusText = f.getAttribute("statusText") || x.statusText; else if (l) {
                                    var p = M.getElementsByTagName("pre")[0], h = M.getElementsByTagName("body")[0];
                                    p ? x.responseText = p.textContent ? p.textContent : p.innerText : h && (x.responseText = h.textContent ? h.textContent : h.innerText)
                                }
                            } else"xml" == c && !x.responseXML && x.responseText && (x.responseXML = X(x.responseText));
                            try {
                                E = _(x, c, m)
                            } catch (y) {
                                i = "parsererror", x.error = r = y || i
                            }
                        } catch (y) {
                            a("error caught: ", y), i = "error", x.error = r = y || i
                        }
                        x.aborted && (a("upload aborted"), i = null), x.status && (i = x.status >= 200 && x.status < 300 || 304 === x.status ? "success" : "error"), "success" === i ? (m.success && m.success.call(m.context, E, "success", x), S.resolve(x.responseText, "success", x), d && e.event.trigger("ajaxSuccess", [x, m])) : i && (void 0 === r && (r = x.statusText), m.error && m.error.call(m.context, x, i, r), S.reject(x, "error", r), d && e.event.trigger("ajaxError", [x, m, r])), d && e.event.trigger("ajaxComplete", [x, m]), d && !--e.active && e.event.trigger("ajaxStop"), m.complete && m.complete.call(m.context, x, i), F = !0, m.timeout && clearTimeout(j), setTimeout(function () {
                            m.iframeTarget ? v.attr("src", m.iframeSrc) : v.remove(), x.responseXML = null
                        }, 100)
                    }
                }
            }

            var c, l, m, d, p, v, g, x, y, b, T, j, w = f[0], S = e.Deferred();
            if (S.abort = function (e) {
                x.abort(e)
            }, r)for (l = 0; l < h.length; l++)c = e(h[l]), i ? c.prop("disabled", !1) : c.removeAttr("disabled");
            if (m = e.extend(!0, {}, e.ajaxSettings, t), m.context = m.context || m, p = "jqFormIO" + (new Date).getTime(), m.iframeTarget ? (v = e(m.iframeTarget), b = v.attr2("name"), b ? p = b : v.attr2("name", p)) : (v = e('<iframe name="' + p + '" src="' + m.iframeSrc + '" />'), v.css({position: "absolute", top: "-1000px", left: "-1000px"})), g = v[0], x = {aborted: 0, responseText: null, responseXML: null, status: 0, statusText: "n/a", getAllResponseHeaders: function () {
            }, getResponseHeader: function () {
            }, setRequestHeader: function () {
            }, abort: function (t) {
                var r = "timeout" === t ? "timeout" : "aborted";
                a("aborting upload... " + r), this.aborted = 1;
                try {
                    g.contentWindow.document.execCommand && g.contentWindow.document.execCommand("Stop")
                } catch (n) {
                }
                v.attr("src", m.iframeSrc), x.error = r, m.error && m.error.call(m.context, x, r, t), d && e.event.trigger("ajaxError", [x, m, r]), m.complete && m.complete.call(m.context, x, r)
            }}, d = m.global, d && 0 === e.active++ && e.event.trigger("ajaxStart"), d && e.event.trigger("ajaxSend", [x, m]), m.beforeSend && m.beforeSend.call(m.context, x, m) === !1)return m.global && e.active--, S.reject(), S;
            if (x.aborted)return S.reject(), S;
            y = w.clk, y && (b = y.name, b && !y.disabled && (m.extraData = m.extraData || {}, m.extraData[b] = y.value, "image" == y.type && (m.extraData[b + ".x"] = w.clk_x, m.extraData[b + ".y"] = w.clk_y)));
            var D = 1, k = 2, A = e("meta[name=csrf-token]").attr("content"), L = e("meta[name=csrf-param]").attr("content");
            L && A && (m.extraData = m.extraData || {}, m.extraData[L] = A), m.forceSync ? o() : setTimeout(o, 10);
            var E, M, F, O = 50, X = e.parseXML || function (e, t) {
                return window.ActiveXObject ? (t = new ActiveXObject("Microsoft.XMLDOM"), t.async = "false", t.loadXML(e)) : t = (new DOMParser).parseFromString(e, "text/xml"), t && t.documentElement && "parsererror" != t.documentElement.nodeName ? t : null
            }, C = e.parseJSON || function (e) {
                return window.eval("(" + e + ")")
            }, _ = function (t, r, a) {
                var n = t.getResponseHeader("content-type") || "", i = "xml" === r || !r && n.indexOf("xml") >= 0, o = i ? t.responseXML : t.responseText;
                return i && "parsererror" === o.documentElement.nodeName && e.error && e.error("parsererror"), a && a.dataFilter && (o = a.dataFilter(o, r)), "string" == typeof o && ("json" === r || !r && n.indexOf("json") >= 0 ? o = C(o) : ("script" === r || !r && n.indexOf("javascript") >= 0) && e.globalEval(o)), o
            };
            return S
        }

        if (!this.length)return a("ajaxSubmit: skipping submit process - no element selected"), this;
        var u, c, l, f = this;
        "function" == typeof t ? t = {success: t} : void 0 === t && (t = {}), u = t.type || this.attr2("method"), c = t.url || this.attr2("action"), l = "string" == typeof c ? e.trim(c) : "", l = l || window.location.href || "", l && (l = (l.match(/^([^#]+)/) || [])[1]), t = e.extend(!0, {url: l, success: e.ajaxSettings.success, type: u || e.ajaxSettings.type, iframeSrc: /^https/i.test(window.location.href || "") ? "javascript:false" : "about:blank"}, t);
        var m = {};
        if (this.trigger("form-pre-serialize", [this, t, m]), m.veto)return a("ajaxSubmit: submit vetoed via form-pre-serialize trigger"), this;
        if (t.beforeSerialize && t.beforeSerialize(this, t) === !1)return a("ajaxSubmit: submit aborted via beforeSerialize callback"), this;
        var d = t.traditional;
        void 0 === d && (d = e.ajaxSettings.traditional);
        var p, h = [], v = this.formToArray(t.semantic, h);
        if (t.data && (t.extraData = t.data, p = e.param(t.data, d)), t.beforeSubmit && t.beforeSubmit(v, this, t) === !1)return a("ajaxSubmit: submit aborted via beforeSubmit callback"), this;
        if (this.trigger("form-submit-validate", [v, this, t, m]), m.veto)return a("ajaxSubmit: submit vetoed via form-submit-validate trigger"), this;
        var g = e.param(v, d);
        p && (g = g ? g + "&" + p : p), "GET" == t.type.toUpperCase() ? (t.url += (t.url.indexOf("?") >= 0 ? "&" : "?") + g, t.data = null) : t.data = g;
        var x = [];
        if (t.resetForm && x.push(function () {
            f.resetForm()
        }), t.clearForm && x.push(function () {
            f.clearForm(t.includeHidden)
        }), !t.dataType && t.target) {
            var y = t.success || function () {
            };
            x.push(function (r) {
                var a = t.replaceTarget ? "replaceWith" : "html";
                e(t.target)[a](r).each(y, arguments)
            })
        } else t.success && x.push(t.success);
        if (t.success = function (e, r, a) {
            for (var n = t.context || this, i = 0, o = x.length; o > i; i++)x[i].apply(n, [e, r, a || f, f])
        }, t.error) {
            var b = t.error;
            t.error = function (e, r, a) {
                var n = t.context || this;
                b.apply(n, [e, r, a, f])
            }
        }
        if (t.complete) {
            var T = t.complete;
            t.complete = function (e, r) {
                var a = t.context || this;
                T.apply(a, [e, r, f])
            }
        }
        var j = e("input[type=file]:enabled", this).filter(function () {
            return"" !== e(this).val()
        }), w = j.length > 0, S = "multipart/form-data", D = f.attr("enctype") == S || f.attr("encoding") == S, k = n.fileapi && n.formdata;
        a("fileAPI :" + k);
        var A, L = (w || D) && !k;
        t.iframe !== !1 && (t.iframe || L) ? t.closeKeepAlive ? e.get(t.closeKeepAlive, function () {
            A = s(v)
        }) : A = s(v) : A = (w || D) && k ? o(v) : e.ajax(t), f.removeData("jqxhr").data("jqxhr", A);
        for (var E = 0; E < h.length; E++)h[E] = null;
        return this.trigger("form-submit-notify", [this, t]), this
    }, e.fn.ajaxForm = function (n) {
        if (n = n || {}, n.delegation = n.delegation && e.isFunction(e.fn.on), !n.delegation && 0 === this.length) {
            var i = {s: this.selector, c: this.context};
            return!e.isReady && i.s ? (a("DOM not ready, queuing ajaxForm"), e(function () {
                e(i.s, i.c).ajaxForm(n)
            }), this) : (a("terminating; zero elements found by selector" + (e.isReady ? "" : " (DOM not ready)")), this)
        }
        return n.delegation ? (e(document).off("submit.form-plugin", this.selector, t).off("click.form-plugin", this.selector, r).on("submit.form-plugin", this.selector, n, t).on("click.form-plugin", this.selector, n, r), this) : this.ajaxFormUnbind().bind("submit.form-plugin", n, t).bind("click.form-plugin", n, r)
    }, e.fn.ajaxFormUnbind = function () {
        return this.unbind("submit.form-plugin click.form-plugin")
    }, e.fn.formToArray = function (t, r) {
        var a = [];
        if (0 === this.length)return a;
        var i, o = this[0], s = this.attr("id"), u = t ? o.getElementsByTagName("*") : o.elements;
        if (u && !/MSIE [678]/.test(navigator.userAgent) && (u = e(u).get()), s && (i = e(':input[form="' + s + '"]').get(), i.length && (u = (u || []).concat(i))), !u || !u.length)return a;
        var c, l, f, m, d, p, h;
        for (c = 0, p = u.length; p > c; c++)if (d = u[c], f = d.name, f && !d.disabled)if (t && o.clk && "image" == d.type)o.clk == d && (a.push({name: f, value: e(d).val(), type: d.type}), a.push({name: f + ".x", value: o.clk_x}, {name: f + ".y", value: o.clk_y})); else if (m = e.fieldValue(d, !0), m && m.constructor == Array)for (r && r.push(d), l = 0, h = m.length; h > l; l++)a.push({name: f, value: m[l]}); else if (n.fileapi && "file" == d.type) {
            r && r.push(d);
            var v = d.files;
            if (v.length)for (l = 0; l < v.length; l++)a.push({name: f, value: v[l], type: d.type}); else a.push({name: f, value: "", type: d.type})
        } else null !== m && "undefined" != typeof m && (r && r.push(d), a.push({name: f, value: m, type: d.type, required: d.required}));
        if (!t && o.clk) {
            var g = e(o.clk), x = g[0];
            f = x.name, f && !x.disabled && "image" == x.type && (a.push({name: f, value: g.val()}), a.push({name: f + ".x", value: o.clk_x}, {name: f + ".y", value: o.clk_y}))
        }
        return a
    }, e.fn.formSerialize = function (t) {
        return e.param(this.formToArray(t))
    }, e.fn.fieldSerialize = function (t) {
        var r = [];
        return this.each(function () {
            var a = this.name;
            if (a) {
                var n = e.fieldValue(this, t);
                if (n && n.constructor == Array)for (var i = 0, o = n.length; o > i; i++)r.push({name: a, value: n[i]}); else null !== n && "undefined" != typeof n && r.push({name: this.name, value: n})
            }
        }), e.param(r)
    }, e.fn.fieldValue = function (t) {
        for (var r = [], a = 0, n = this.length; n > a; a++) {
            var i = this[a], o = e.fieldValue(i, t);
            null === o || "undefined" == typeof o || o.constructor == Array && !o.length || (o.constructor == Array ? e.merge(r, o) : r.push(o))
        }
        return r
    }, e.fieldValue = function (t, r) {
        var a = t.name, n = t.type, i = t.tagName.toLowerCase();
        if (void 0 === r && (r = !0), r && (!a || t.disabled || "reset" == n || "button" == n || ("checkbox" == n || "radio" == n) && !t.checked || ("submit" == n || "image" == n) && t.form && t.form.clk != t || "select" == i && -1 == t.selectedIndex))return null;
        if ("select" == i) {
            var o = t.selectedIndex;
            if (0 > o)return null;
            for (var s = [], u = t.options, c = "select-one" == n, l = c ? o + 1 : u.length, f = c ? o : 0; l > f; f++) {
                var m = u[f];
                if (m.selected) {
                    var d = m.value;
                    if (d || (d = m.attributes && m.attributes.value && !m.attributes.value.specified ? m.text : m.value), c)return d;
                    s.push(d)
                }
            }
            return s
        }
        return e(t).val()
    }, e.fn.clearForm = function (t) {
        return this.each(function () {
            e("input,select,textarea", this).clearFields(t)
        })
    }, e.fn.clearFields = e.fn.clearInputs = function (t) {
        var r = /^(?:color|date|datetime|email|month|number|password|range|search|tel|text|time|url|week)$/i;
        return this.each(function () {
            var a = this.type, n = this.tagName.toLowerCase();
            r.test(a) || "textarea" == n ? this.value = "" : "checkbox" == a || "radio" == a ? this.checked = !1 : "select" == n ? this.selectedIndex = -1 : "file" == a ? /MSIE/.test(navigator.userAgent) ? e(this).replaceWith(e(this).clone(!0)) : e(this).val("") : t && (t === !0 && /hidden/.test(a) || "string" == typeof t && e(this).is(t)) && (this.value = "")
        })
    }, e.fn.resetForm = function () {
        return this.each(function () {
            ("function" == typeof this.reset || "object" == typeof this.reset && !this.reset.nodeType) && this.reset()
        })
    }, e.fn.enable = function (e) {
        return void 0 === e && (e = !0), this.each(function () {
            this.disabled = !e
        })
    }, e.fn.selected = function (t) {
        return void 0 === t && (t = !0), this.each(function () {
            var r = this.type;
            if ("checkbox" == r || "radio" == r)this.checked = t; else if ("option" == this.tagName.toLowerCase()) {
                var a = e(this).parent("select");
                t && a[0] && "select-one" == a[0].type && a.find("option").selected(!1), this.selected = t
            }
        })
    }, e.fn.ajaxSubmit.debug = !1
});
var _wpcf7 = {"loaderUrl": "http:\/\/educator.incrediblebytes.com\/wp-content\/plugins\/contact-form-7\/images\/ajax-loader.gif", "sending": "Sending ..."};
(function ($) {
    if (typeof _wpcf7 == 'undefined' || _wpcf7 === null)
        _wpcf7 = {};
    _wpcf7 = $.extend({cached: 0}, _wpcf7);
    $(function () {
        _wpcf7.supportHtml5 = $.wpcf7SupportHtml5();
        $('div.wpcf7 > form').wpcf7InitForm();
    });
    $.fn.wpcf7InitForm = function () {
        this.ajaxForm({beforeSubmit: function (arr, $form, options) {
            $form.wpcf7ClearResponseOutput();
            $form.find('[aria-invalid]').attr('aria-invalid', 'false');
            $form.find('img.ajax-loader').css({visibility: 'visible'});
            return true;
        }, beforeSerialize: function ($form, options) {
            $form.find('[placeholder].placeheld').each(function (i, n) {
                $(n).val('');
            });
            return true;
        }, data: {'_wpcf7_is_ajax_call': 1}, dataType: 'json', success: $.wpcf7AjaxSuccess, error: function (xhr, status, error, $form) {
            var e = $('<div class="ajax-error"></div>').text(error.message);
            $form.after(e);
        }});
        if (_wpcf7.cached)
            this.wpcf7OnloadRefill();
        this.wpcf7ToggleSubmit();
        this.find('.wpcf7-submit').wpcf7AjaxLoader();
        this.find('.wpcf7-acceptance').click(function () {
            $(this).closest('form').wpcf7ToggleSubmit();
        });
        this.find('.wpcf7-exclusive-checkbox').wpcf7ExclusiveCheckbox();
        this.find('.wpcf7-list-item.has-free-text').wpcf7ToggleCheckboxFreetext();
        this.find('[placeholder]').wpcf7Placeholder();
        if (_wpcf7.jqueryUi && !_wpcf7.supportHtml5.date) {
            this.find('input.wpcf7-date[type="date"]').each(function () {
                $(this).datepicker({dateFormat: 'yy-mm-dd', minDate: new Date($(this).attr('min')), maxDate: new Date($(this).attr('max'))});
            });
        }
        if (_wpcf7.jqueryUi && !_wpcf7.supportHtml5.number) {
            this.find('input.wpcf7-number[type="number"]').each(function () {
                $(this).spinner({min: $(this).attr('min'), max: $(this).attr('max'), step: $(this).attr('step')});
            });
        }
        this.find('.wpcf7-character-count').wpcf7CharacterCount();
        this.find('.wpcf7-validates-as-url').change(function () {
            $(this).wpcf7NormalizeUrl();
        });
    };
    $.wpcf7AjaxSuccess = function (data, status, xhr, $form) {
        if (!$.isPlainObject(data) || $.isEmptyObject(data))
            return;
        var $responseOutput = $form.find('div.wpcf7-response-output');
        $form.wpcf7ClearResponseOutput();
        $form.find('.wpcf7-form-control').removeClass('wpcf7-not-valid');
        $form.removeClass('invalid spam sent failed');
        if (data.captcha)
            $form.wpcf7RefillCaptcha(data.captcha);
        if (data.quiz)
            $form.wpcf7RefillQuiz(data.quiz);
        if (data.invalids) {
            $.each(data.invalids, function (i, n) {
                $form.find(n.into).wpcf7NotValidTip(n.message);
                $form.find(n.into).find('.wpcf7-form-control').addClass('wpcf7-not-valid');
                $form.find(n.into).find('[aria-invalid]').attr('aria-invalid', 'true');
            });
            $responseOutput.addClass('wpcf7-validation-errors');
            $form.addClass('invalid');
            $(data.into).trigger('invalid.wpcf7');
        } else if (1 == data.spam) {
            $responseOutput.addClass('wpcf7-spam-blocked');
            $form.addClass('spam');
            $(data.into).trigger('spam.wpcf7');
        } else if (1 == data.mailSent) {
            $responseOutput.addClass('wpcf7-mail-sent-ok');
            $form.addClass('sent');
            if (data.onSentOk)
                $.each(data.onSentOk, function (i, n) {
                    eval(n)
                });
            $(data.into).trigger('mailsent.wpcf7');
        } else {
            $responseOutput.addClass('wpcf7-mail-sent-ng');
            $form.addClass('failed');
            $(data.into).trigger('mailfailed.wpcf7');
        }
        if (data.onSubmit)
            $.each(data.onSubmit, function (i, n) {
                eval(n)
            });
        $(data.into).trigger('submit.wpcf7');
        if (1 == data.mailSent)
            $form.resetForm();
        $form.find('[placeholder].placeheld').each(function (i, n) {
            $(n).val($(n).attr('placeholder'));
        });
        $responseOutput.append(data.message).slideDown('fast');
        $responseOutput.attr('role', 'alert');
        $.wpcf7UpdateScreenReaderResponse($form, data);
    };
    $.fn.wpcf7ExclusiveCheckbox = function () {
        return this.find('input:checkbox').click(function () {
            var name = $(this).attr('name');
            $(this).closest('form').find('input:checkbox[name="' + name + '"]').not(this).prop('checked', false);
        });
    };
    $.fn.wpcf7Placeholder = function () {
        if (_wpcf7.supportHtml5.placeholder)
            return this;
        return this.each(function () {
            $(this).val($(this).attr('placeholder'));
            $(this).addClass('placeheld');
            $(this).focus(function () {
                if ($(this).hasClass('placeheld'))
                    $(this).val('').removeClass('placeheld');
            });
            $(this).blur(function () {
                if ('' == $(this).val()) {
                    $(this).val($(this).attr('placeholder'));
                    $(this).addClass('placeheld');
                }
            });
        });
    };
    $.fn.wpcf7AjaxLoader = function () {
        return this.each(function () {
            var loader = $('<img class="ajax-loader" />').attr({src: _wpcf7.loaderUrl, alt: _wpcf7.sending}).css('visibility', 'hidden');
            $(this).after(loader);
        });
    };
    $.fn.wpcf7ToggleSubmit = function () {
        return this.each(function () {
            var form = $(this);
            if (this.tagName.toLowerCase() != 'form')
                form = $(this).find('form').first();
            if (form.hasClass('wpcf7-acceptance-as-validation'))
                return;
            var submit = form.find('input:submit');
            if (!submit.length)return;
            var acceptances = form.find('input:checkbox.wpcf7-acceptance');
            if (!acceptances.length)return;
            submit.removeAttr('disabled');
            acceptances.each(function (i, n) {
                n = $(n);
                if (n.hasClass('wpcf7-invert') && n.is(':checked') || !n.hasClass('wpcf7-invert') && !n.is(':checked'))
                    submit.attr('disabled', 'disabled');
            });
        });
    };
    $.fn.wpcf7ToggleCheckboxFreetext = function () {
        return this.each(function () {
            var $wrap = $(this).closest('.wpcf7-form-control');
            if ($(this).find(':checkbox, :radio').is(':checked')) {
                $(this).find(':input.wpcf7-free-text').prop('disabled', false);
            } else {
                $(this).find(':input.wpcf7-free-text').prop('disabled', true);
            }
            $wrap.find(':checkbox, :radio').change(function () {
                var $cb = $('.has-free-text', $wrap).find(':checkbox, :radio');
                var $freetext = $(':input.wpcf7-free-text', $wrap);
                if ($cb.is(':checked')) {
                    $freetext.prop('disabled', false).focus();
                } else {
                    $freetext.prop('disabled', true);
                }
            });
        });
    };
    $.fn.wpcf7CharacterCount = function () {
        return this.each(function () {
            var $count = $(this);
            var name = $count.attr('data-target-name');
            var down = $count.hasClass('down');
            var starting = parseInt($count.attr('data-starting-value'), 10);
            var maximum = parseInt($count.attr('data-maximum-value'), 10);
            var minimum = parseInt($count.attr('data-minimum-value'), 10);
            var updateCount = function ($target) {
                var length = $target.val().length;
                var count = down ? starting - length : length;
                $count.attr('data-current-value', count);
                $count.text(count);
                if (maximum && maximum < length) {
                    $count.addClass('too-long');
                } else {
                    $count.removeClass('too-long');
                }
                if (minimum && length < minimum) {
                    $count.addClass('too-short');
                } else {
                    $count.removeClass('too-short');
                }
            };
            $count.closest('form').find(':input[name="' + name + '"]').each(function () {
                updateCount($(this));
                $(this).keyup(function () {
                    updateCount($(this));
                });
            });
        });
    };
    $.fn.wpcf7NormalizeUrl = function () {
        return this.each(function () {
            var val = $.trim($(this).val());
            if (val && !val.match(/^[a-z][a-z0-9.+-]*:/i)) {
                val = val.replace(/^\/+/, '');
                val = 'http://' + val;
            }
            $(this).val(val);
        });
    };
    $.fn.wpcf7NotValidTip = function (message) {
        return this.each(function () {
            var $into = $(this);
            $into.find('span.wpcf7-not-valid-tip').remove();
            $into.append('<span role="alert" class="wpcf7-not-valid-tip">' + message + '</span>');
            if ($into.is('.use-floating-validation-tip *')) {
                $('.wpcf7-not-valid-tip', $into).mouseover(function () {
                    $(this).wpcf7FadeOut();
                });
                $(':input', $into).focus(function () {
                    $('.wpcf7-not-valid-tip', $into).not(':hidden').wpcf7FadeOut();
                });
            }
        });
    };
    $.fn.wpcf7FadeOut = function () {
        return this.each(function () {
            $(this).animate({opacity: 0}, 'fast', function () {
                $(this).css({'z-index': -100});
            });
        });
    };
    $.fn.wpcf7OnloadRefill = function () {
        return this.each(function () {
            var url = $(this).attr('action');
            if (0 < url.indexOf('#'))
                url = url.substr(0, url.indexOf('#'));
            var id = $(this).find('input[name="_wpcf7"]').val();
            var unitTag = $(this).find('input[name="_wpcf7_unit_tag"]').val();
            $.getJSON(url, {_wpcf7_is_ajax_call: 1, _wpcf7: id, _wpcf7_request_ver: $.now()}, function (data) {
                if (data && data.captcha)
                    $('#' + unitTag).wpcf7RefillCaptcha(data.captcha);
                if (data && data.quiz)
                    $('#' + unitTag).wpcf7RefillQuiz(data.quiz);
            });
        });
    };
    $.fn.wpcf7RefillCaptcha = function (captcha) {
        return this.each(function () {
            var form = $(this);
            $.each(captcha, function (i, n) {
                form.find(':input[name="' + i + '"]').clearFields();
                form.find('img.wpcf7-captcha-' + i).attr('src', n);
                var match = /([0-9]+)\.(png|gif|jpeg)$/.exec(n);
                form.find('input:hidden[name="_wpcf7_captcha_challenge_' + i + '"]').attr('value', match[1]);
            });
        });
    };
    $.fn.wpcf7RefillQuiz = function (quiz) {
        return this.each(function () {
            var form = $(this);
            $.each(quiz, function (i, n) {
                form.find(':input[name="' + i + '"]').clearFields();
                form.find(':input[name="' + i + '"]').siblings('span.wpcf7-quiz-label').text(n[0]);
                form.find('input:hidden[name="_wpcf7_quiz_answer_' + i + '"]').attr('value', n[1]);
            });
        });
    };
    $.fn.wpcf7ClearResponseOutput = function () {
        return this.each(function () {
            $(this).find('div.wpcf7-response-output').hide().empty().removeClass('wpcf7-mail-sent-ok wpcf7-mail-sent-ng wpcf7-validation-errors wpcf7-spam-blocked').removeAttr('role');
            $(this).find('span.wpcf7-not-valid-tip').remove();
            $(this).find('img.ajax-loader').css({visibility: 'hidden'});
        });
    };
    $.wpcf7UpdateScreenReaderResponse = function ($form, data) {
        $('.wpcf7 .screen-reader-response').html('').attr('role', '');
        if (data.message) {
            var $response = $form.siblings('.screen-reader-response').first();
            $response.append(data.message);
            if (data.invalids) {
                var $invalids = $('<ul></ul>');
                $.each(data.invalids, function (i, n) {
                    if (n.idref) {
                        var $li = $('<li></li>').append($('<a></a>').attr('href', '#' + n.idref).append(n.message));
                    } else {
                        var $li = $('<li></li>').append(n.message);
                    }
                    $invalids.append($li);
                });
                $response.append($invalids);
            }
            $response.attr('role', 'alert').focus();
        }
    };
    $.wpcf7SupportHtml5 = function () {
        var features = {};
        var input = document.createElement('input');
        features.placeholder = 'placeholder'in input;
        var inputTypes = ['email', 'url', 'tel', 'number', 'range', 'date'];
        $.each(inputTypes, function (index, value) {
            input.setAttribute('type', value);
            features[value] = input.type !== 'text';
        });
        return features;
    };
})(jQuery);
/*! Magnific Popup - v0.9.9 - 2013-12-27
 * http://dimsemenov.com/plugins/magnific-popup/
 * Copyright (c) 2013 Dmitry Semenov; */
;
(function ($) {
    var CLOSE_EVENT = 'Close', BEFORE_CLOSE_EVENT = 'BeforeClose', AFTER_CLOSE_EVENT = 'AfterClose', BEFORE_APPEND_EVENT = 'BeforeAppend', MARKUP_PARSE_EVENT = 'MarkupParse', OPEN_EVENT = 'Open', CHANGE_EVENT = 'Change', NS = 'mfp', EVENT_NS = '.' + NS, READY_CLASS = 'mfp-ready', REMOVING_CLASS = 'mfp-removing', PREVENT_CLOSE_CLASS = 'mfp-prevent-close';
    var mfp, MagnificPopup = function () {
    }, _isJQ = !!(window.jQuery), _prevStatus, _window = $(window), _body, _document, _prevContentType, _wrapClasses, _currPopupType;
    var _mfpOn = function (name, f) {
        mfp.ev.on(NS + name + EVENT_NS, f);
    }, _getEl = function (className, appendTo, html, raw) {
        var el = document.createElement('div');
        el.className = 'mfp-' + className;
        if (html) {
            el.innerHTML = html;
        }
        if (!raw) {
            el = $(el);
            if (appendTo) {
                el.appendTo(appendTo);
            }
        } else if (appendTo) {
            appendTo.appendChild(el);
        }
        return el;
    }, _mfpTrigger = function (e, data) {
        mfp.ev.triggerHandler(NS + e, data);
        if (mfp.st.callbacks) {
            e = e.charAt(0).toLowerCase() + e.slice(1);
            if (mfp.st.callbacks[e]) {
                mfp.st.callbacks[e].apply(mfp, $.isArray(data) ? data : [data]);
            }
        }
    }, _getCloseBtn = function (type) {
        if (type !== _currPopupType || !mfp.currTemplate.closeBtn) {
            mfp.currTemplate.closeBtn = $(mfp.st.closeMarkup.replace('%title%', mfp.st.tClose));
            _currPopupType = type;
        }
        return mfp.currTemplate.closeBtn;
    }, _checkInstance = function () {
        if (!$.magnificPopup.instance) {
            mfp = new MagnificPopup();
            mfp.init();
            $.magnificPopup.instance = mfp;
        }
    }, supportsTransitions = function () {
        var s = document.createElement('p').style, v = ['ms', 'O', 'Moz', 'Webkit'];
        if (s['transition'] !== undefined) {
            return true;
        }
        while (v.length) {
            if (v.pop() + 'Transition'in s) {
                return true;
            }
        }
        return false;
    };
    MagnificPopup.prototype = {constructor: MagnificPopup, init: function () {
        var appVersion = navigator.appVersion;
        mfp.isIE7 = appVersion.indexOf("MSIE 7.") !== -1;
        mfp.isIE8 = appVersion.indexOf("MSIE 8.") !== -1;
        mfp.isLowIE = mfp.isIE7 || mfp.isIE8;
        mfp.isAndroid = (/android/gi).test(appVersion);
        mfp.isIOS = (/iphone|ipad|ipod/gi).test(appVersion);
        mfp.supportsTransition = supportsTransitions();
        mfp.probablyMobile = (mfp.isAndroid || mfp.isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent));
        _document = $(document);
        mfp.popupsCache = {};
    }, open: function (data) {
        if (!_body) {
            _body = $(document.body);
        }
        var i;
        if (data.isObj === false) {
            mfp.items = data.items.toArray();
            mfp.index = 0;
            var items = data.items, item;
            for (i = 0; i < items.length; i++) {
                item = items[i];
                if (item.parsed) {
                    item = item.el[0];
                }
                if (item === data.el[0]) {
                    mfp.index = i;
                    break;
                }
            }
        } else {
            mfp.items = $.isArray(data.items) ? data.items : [data.items];
            mfp.index = data.index || 0;
        }
        if (mfp.isOpen) {
            mfp.updateItemHTML();
            return;
        }
        mfp.types = [];
        _wrapClasses = '';
        if (data.mainEl && data.mainEl.length) {
            mfp.ev = data.mainEl.eq(0);
        } else {
            mfp.ev = _document;
        }
        if (data.key) {
            if (!mfp.popupsCache[data.key]) {
                mfp.popupsCache[data.key] = {};
            }
            mfp.currTemplate = mfp.popupsCache[data.key];
        } else {
            mfp.currTemplate = {};
        }
        mfp.st = $.extend(true, {}, $.magnificPopup.defaults, data);
        mfp.fixedContentPos = mfp.st.fixedContentPos === 'auto' ? !mfp.probablyMobile : mfp.st.fixedContentPos;
        if (mfp.st.modal) {
            mfp.st.closeOnContentClick = false;
            mfp.st.closeOnBgClick = false;
            mfp.st.showCloseBtn = false;
            mfp.st.enableEscapeKey = false;
        }
        if (!mfp.bgOverlay) {
            mfp.bgOverlay = _getEl('bg').on('click' + EVENT_NS, function () {
                mfp.close();
            });
            mfp.wrap = _getEl('wrap').attr('tabindex', -1).on('click' + EVENT_NS, function (e) {
                if (mfp._checkIfClose(e.target)) {
                    mfp.close();
                }
            });
            mfp.container = _getEl('container', mfp.wrap);
        }
        mfp.contentContainer = _getEl('content');
        if (mfp.st.preloader) {
            mfp.preloader = _getEl('preloader', mfp.container, mfp.st.tLoading);
        }
        var modules = $.magnificPopup.modules;
        for (i = 0; i < modules.length; i++) {
            var n = modules[i];
            n = n.charAt(0).toUpperCase() + n.slice(1);
            mfp['init' + n].call(mfp);
        }
        _mfpTrigger('BeforeOpen');
        if (mfp.st.showCloseBtn) {
            if (!mfp.st.closeBtnInside) {
                mfp.wrap.append(_getCloseBtn());
            } else {
                _mfpOn(MARKUP_PARSE_EVENT, function (e, template, values, item) {
                    values.close_replaceWith = _getCloseBtn(item.type);
                });
                _wrapClasses += ' mfp-close-btn-in';
            }
        }
        if (mfp.st.alignTop) {
            _wrapClasses += ' mfp-align-top';
        }
        if (mfp.fixedContentPos) {
            mfp.wrap.css({overflow: mfp.st.overflowY, overflowX: 'hidden', overflowY: mfp.st.overflowY});
        } else {
            mfp.wrap.css({top: _window.scrollTop(), position: 'absolute'});
        }
        if (mfp.st.fixedBgPos === false || (mfp.st.fixedBgPos === 'auto' && !mfp.fixedContentPos)) {
            mfp.bgOverlay.css({height: _document.height(), position: 'absolute'});
        }
        if (mfp.st.enableEscapeKey) {
            _document.on('keyup' + EVENT_NS, function (e) {
                if (e.keyCode === 27) {
                    mfp.close();
                }
            });
        }
        _window.on('resize' + EVENT_NS, function () {
            mfp.updateSize();
        });
        if (!mfp.st.closeOnContentClick) {
            _wrapClasses += ' mfp-auto-cursor';
        }
        if (_wrapClasses)
            mfp.wrap.addClass(_wrapClasses);
        var windowHeight = mfp.wH = _window.height();
        var windowStyles = {};
        if (mfp.fixedContentPos) {
            if (mfp._hasScrollBar(windowHeight)) {
                var s = mfp._getScrollbarSize();
                if (s) {
                    windowStyles.marginRight = s;
                }
            }
        }
        if (mfp.fixedContentPos) {
            if (!mfp.isIE7) {
                windowStyles.overflow = 'hidden';
            } else {
                $('body, html').css('overflow', 'hidden');
            }
        }
        var classesToadd = mfp.st.mainClass;
        if (mfp.isIE7) {
            classesToadd += ' mfp-ie7';
        }
        if (classesToadd) {
            mfp._addClassToMFP(classesToadd);
        }
        mfp.updateItemHTML();
        _mfpTrigger('BuildControls');
        $('html').css(windowStyles);
        mfp.bgOverlay.add(mfp.wrap).prependTo(mfp.st.prependTo || _body);
        mfp._lastFocusedEl = document.activeElement;
        setTimeout(function () {
            if (mfp.content) {
                mfp._addClassToMFP(READY_CLASS);
                mfp._setFocus();
            } else {
                mfp.bgOverlay.addClass(READY_CLASS);
            }
            _document.on('focusin' + EVENT_NS, mfp._onFocusIn);
        }, 16);
        mfp.isOpen = true;
        mfp.updateSize(windowHeight);
        _mfpTrigger(OPEN_EVENT);
        return data;
    }, close: function () {
        if (!mfp.isOpen)return;
        _mfpTrigger(BEFORE_CLOSE_EVENT);
        mfp.isOpen = false;
        if (mfp.st.removalDelay && !mfp.isLowIE && mfp.supportsTransition) {
            mfp._addClassToMFP(REMOVING_CLASS);
            setTimeout(function () {
                mfp._close();
            }, mfp.st.removalDelay);
        } else {
            mfp._close();
        }
    }, _close: function () {
        _mfpTrigger(CLOSE_EVENT);
        var classesToRemove = REMOVING_CLASS + ' ' + READY_CLASS + ' ';
        mfp.bgOverlay.detach();
        mfp.wrap.detach();
        mfp.container.empty();
        if (mfp.st.mainClass) {
            classesToRemove += mfp.st.mainClass + ' ';
        }
        mfp._removeClassFromMFP(classesToRemove);
        if (mfp.fixedContentPos) {
            var windowStyles = {marginRight: ''};
            if (mfp.isIE7) {
                $('body, html').css('overflow', '');
            } else {
                windowStyles.overflow = '';
            }
            $('html').css(windowStyles);
        }
        _document.off('keyup' + EVENT_NS + ' focusin' + EVENT_NS);
        mfp.ev.off(EVENT_NS);
        mfp.wrap.attr('class', 'mfp-wrap').removeAttr('style');
        mfp.bgOverlay.attr('class', 'mfp-bg');
        mfp.container.attr('class', 'mfp-container');
        if (mfp.st.showCloseBtn && (!mfp.st.closeBtnInside || mfp.currTemplate[mfp.currItem.type] === true)) {
            if (mfp.currTemplate.closeBtn)
                mfp.currTemplate.closeBtn.detach();
        }
        if (mfp._lastFocusedEl) {
            $(mfp._lastFocusedEl).focus();
        }
        mfp.currItem = null;
        mfp.content = null;
        mfp.currTemplate = null;
        mfp.prevHeight = 0;
        _mfpTrigger(AFTER_CLOSE_EVENT);
    }, updateSize: function (winHeight) {
        if (mfp.isIOS) {
            var zoomLevel = document.documentElement.clientWidth / window.innerWidth;
            var height = window.innerHeight * zoomLevel;
            mfp.wrap.css('height', height);
            mfp.wH = height;
        } else {
            mfp.wH = winHeight || _window.height();
        }
        if (!mfp.fixedContentPos) {
            mfp.wrap.css('height', mfp.wH);
        }
        _mfpTrigger('Resize');
    }, updateItemHTML: function () {
        var item = mfp.items[mfp.index];
        mfp.contentContainer.detach();
        if (mfp.content)
            mfp.content.detach();
        if (!item.parsed) {
            item = mfp.parseEl(mfp.index);
        }
        var type = item.type;
        _mfpTrigger('BeforeChange', [mfp.currItem ? mfp.currItem.type : '', type]);
        mfp.currItem = item;
        if (!mfp.currTemplate[type]) {
            var markup = mfp.st[type] ? mfp.st[type].markup : false;
            _mfpTrigger('FirstMarkupParse', markup);
            if (markup) {
                mfp.currTemplate[type] = $(markup);
            } else {
                mfp.currTemplate[type] = true;
            }
        }
        if (_prevContentType && _prevContentType !== item.type) {
            mfp.container.removeClass('mfp-' + _prevContentType + '-holder');
        }
        var newContent = mfp['get' + type.charAt(0).toUpperCase() + type.slice(1)](item, mfp.currTemplate[type]);
        mfp.appendContent(newContent, type);
        item.preloaded = true;
        _mfpTrigger(CHANGE_EVENT, item);
        _prevContentType = item.type;
        mfp.container.prepend(mfp.contentContainer);
        _mfpTrigger('AfterChange');
    }, appendContent: function (newContent, type) {
        mfp.content = newContent;
        if (newContent) {
            if (mfp.st.showCloseBtn && mfp.st.closeBtnInside && mfp.currTemplate[type] === true) {
                if (!mfp.content.find('.mfp-close').length) {
                    mfp.content.append(_getCloseBtn());
                }
            } else {
                mfp.content = newContent;
            }
        } else {
            mfp.content = '';
        }
        _mfpTrigger(BEFORE_APPEND_EVENT);
        mfp.container.addClass('mfp-' + type + '-holder');
        mfp.contentContainer.append(mfp.content);
    }, parseEl: function (index) {
        var item = mfp.items[index], type;
        if (item.tagName) {
            item = {el: $(item)};
        } else {
            type = item.type;
            item = {data: item, src: item.src};
        }
        if (item.el) {
            var types = mfp.types;
            for (var i = 0; i < types.length; i++) {
                if (item.el.hasClass('mfp-' + types[i])) {
                    type = types[i];
                    break;
                }
            }
            item.src = item.el.attr('data-mfp-src');
            if (!item.src) {
                item.src = item.el.attr('href');
            }
        }
        item.type = type || mfp.st.type || 'inline';
        item.index = index;
        item.parsed = true;
        mfp.items[index] = item;
        _mfpTrigger('ElementParse', item);
        return mfp.items[index];
    }, addGroup: function (el, options) {
        var eHandler = function (e) {
            e.mfpEl = this;
            mfp._openClick(e, el, options);
        };
        if (!options) {
            options = {};
        }
        var eName = 'click.magnificPopup';
        options.mainEl = el;
        if (options.items) {
            options.isObj = true;
            el.off(eName).on(eName, eHandler);
        } else {
            options.isObj = false;
            if (options.delegate) {
                el.off(eName).on(eName, options.delegate, eHandler);
            } else {
                options.items = el;
                el.off(eName).on(eName, eHandler);
            }
        }
    }, _openClick: function (e, el, options) {
        var midClick = options.midClick !== undefined ? options.midClick : $.magnificPopup.defaults.midClick;
        if (!midClick && (e.which === 2 || e.ctrlKey || e.metaKey)) {
            return;
        }
        var disableOn = options.disableOn !== undefined ? options.disableOn : $.magnificPopup.defaults.disableOn;
        if (disableOn) {
            if ($.isFunction(disableOn)) {
                if (!disableOn.call(mfp)) {
                    return true;
                }
            } else {
                if (_window.width() < disableOn) {
                    return true;
                }
            }
        }
        if (e.type) {
            e.preventDefault();
            if (mfp.isOpen) {
                e.stopPropagation();
            }
        }
        options.el = $(e.mfpEl);
        if (options.delegate) {
            options.items = el.find(options.delegate);
        }
        mfp.open(options);
    }, updateStatus: function (status, text) {
        if (mfp.preloader) {
            if (_prevStatus !== status) {
                mfp.container.removeClass('mfp-s-' + _prevStatus);
            }
            if (!text && status === 'loading') {
                text = mfp.st.tLoading;
            }
            var data = {status: status, text: text};
            _mfpTrigger('UpdateStatus', data);
            status = data.status;
            text = data.text;
            mfp.preloader.html(text);
            mfp.preloader.find('a').on('click', function (e) {
                e.stopImmediatePropagation();
            });
            mfp.container.addClass('mfp-s-' + status);
            _prevStatus = status;
        }
    }, _checkIfClose: function (target) {
        if ($(target).hasClass(PREVENT_CLOSE_CLASS)) {
            return;
        }
        var closeOnContent = mfp.st.closeOnContentClick;
        var closeOnBg = mfp.st.closeOnBgClick;
        if (closeOnContent && closeOnBg) {
            return true;
        } else {
            if (!mfp.content || $(target).hasClass('mfp-close') || (mfp.preloader && target === mfp.preloader[0])) {
                return true;
            }
            if ((target !== mfp.content[0] && !$.contains(mfp.content[0], target))) {
                if (closeOnBg) {
                    if ($.contains(document, target)) {
                        return true;
                    }
                }
            } else if (closeOnContent) {
                return true;
            }
        }
        return false;
    }, _addClassToMFP: function (cName) {
        mfp.bgOverlay.addClass(cName);
        mfp.wrap.addClass(cName);
    }, _removeClassFromMFP: function (cName) {
        this.bgOverlay.removeClass(cName);
        mfp.wrap.removeClass(cName);
    }, _hasScrollBar: function (winHeight) {
        return((mfp.isIE7 ? _document.height() : document.body.scrollHeight) > (winHeight || _window.height()));
    }, _setFocus: function () {
        (mfp.st.focus ? mfp.content.find(mfp.st.focus).eq(0) : mfp.wrap).focus();
    }, _onFocusIn: function (e) {
        if (e.target !== mfp.wrap[0] && !$.contains(mfp.wrap[0], e.target)) {
            mfp._setFocus();
            return false;
        }
    }, _parseMarkup: function (template, values, item) {
        var arr;
        if (item.data) {
            values = $.extend(item.data, values);
        }
        _mfpTrigger(MARKUP_PARSE_EVENT, [template, values, item]);
        $.each(values, function (key, value) {
            if (value === undefined || value === false) {
                return true;
            }
            arr = key.split('_');
            if (arr.length > 1) {
                var el = template.find(EVENT_NS + '-' + arr[0]);
                if (el.length > 0) {
                    var attr = arr[1];
                    if (attr === 'replaceWith') {
                        if (el[0] !== value[0]) {
                            el.replaceWith(value);
                        }
                    } else if (attr === 'img') {
                        if (el.is('img')) {
                            el.attr('src', value);
                        } else {
                            el.replaceWith('<img src="' + value + '" class="' + el.attr('class') + '" />');
                        }
                    } else {
                        el.attr(arr[1], value);
                    }
                }
            } else {
                template.find(EVENT_NS + '-' + key).html(value);
            }
        });
    }, _getScrollbarSize: function () {
        if (mfp.scrollbarSize === undefined) {
            var scrollDiv = document.createElement("div");
            scrollDiv.id = "mfp-sbm";
            scrollDiv.style.cssText = 'width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;';
            document.body.appendChild(scrollDiv);
            mfp.scrollbarSize = scrollDiv.offsetWidth - scrollDiv.clientWidth;
            document.body.removeChild(scrollDiv);
        }
        return mfp.scrollbarSize;
    }};
    $.magnificPopup = {instance: null, proto: MagnificPopup.prototype, modules: [], open: function (options, index) {
        _checkInstance();
        if (!options) {
            options = {};
        } else {
            options = $.extend(true, {}, options);
        }
        options.isObj = true;
        options.index = index || 0;
        return this.instance.open(options);
    }, close: function () {
        return $.magnificPopup.instance && $.magnificPopup.instance.close();
    }, registerModule: function (name, module) {
        if (module.options) {
            $.magnificPopup.defaults[name] = module.options;
        }
        $.extend(this.proto, module.proto);
        this.modules.push(name);
    }, defaults: {disableOn: 0, key: null, midClick: false, mainClass: '', preloader: true, focus: '', closeOnContentClick: false, closeOnBgClick: true, closeBtnInside: true, showCloseBtn: true, enableEscapeKey: true, modal: false, alignTop: false, removalDelay: 0, prependTo: null, fixedContentPos: 'auto', fixedBgPos: 'auto', overflowY: 'auto', closeMarkup: '<button title="%title%" type="button" class="mfp-close">&times;</button>', tClose: 'Close (Esc)', tLoading: 'Loading...'}};
    $.fn.magnificPopup = function (options) {
        _checkInstance();
        var jqEl = $(this);
        if (typeof options === "string") {
            if (options === 'open') {
                var items, itemOpts = _isJQ ? jqEl.data('magnificPopup') : jqEl[0].magnificPopup, index = parseInt(arguments[1], 10) || 0;
                if (itemOpts.items) {
                    items = itemOpts.items[index];
                } else {
                    items = jqEl;
                    if (itemOpts.delegate) {
                        items = items.find(itemOpts.delegate);
                    }
                    items = items.eq(index);
                }
                mfp._openClick({mfpEl: items}, jqEl, itemOpts);
            } else {
                if (mfp.isOpen)
                    mfp[options].apply(mfp, Array.prototype.slice.call(arguments, 1));
            }
        } else {
            options = $.extend(true, {}, options);
            if (_isJQ) {
                jqEl.data('magnificPopup', options);
            } else {
                jqEl[0].magnificPopup = options;
            }
            mfp.addGroup(jqEl, options);
        }
        return jqEl;
    };
    var INLINE_NS = 'inline', _hiddenClass, _inlinePlaceholder, _lastInlineElement, _putInlineElementsBack = function () {
        if (_lastInlineElement) {
            _inlinePlaceholder.after(_lastInlineElement.addClass(_hiddenClass)).detach();
            _lastInlineElement = null;
        }
    };
    $.magnificPopup.registerModule(INLINE_NS, {options: {hiddenClass: 'hide', markup: '', tNotFound: 'Content not found'}, proto: {initInline: function () {
        mfp.types.push(INLINE_NS);
        _mfpOn(CLOSE_EVENT + '.' + INLINE_NS, function () {
            _putInlineElementsBack();
        });
    }, getInline: function (item, template) {
        _putInlineElementsBack();
        if (item.src) {
            var inlineSt = mfp.st.inline, el = $(item.src);
            if (el.length) {
                var parent = el[0].parentNode;
                if (parent && parent.tagName) {
                    if (!_inlinePlaceholder) {
                        _hiddenClass = inlineSt.hiddenClass;
                        _inlinePlaceholder = _getEl(_hiddenClass);
                        _hiddenClass = 'mfp-' + _hiddenClass;
                    }
                    _lastInlineElement = el.after(_inlinePlaceholder).detach().removeClass(_hiddenClass);
                }
                mfp.updateStatus('ready');
            } else {
                mfp.updateStatus('error', inlineSt.tNotFound);
                el = $('<div>');
            }
            item.inlineElement = el;
            return el;
        }
        mfp.updateStatus('ready');
        mfp._parseMarkup(template, {}, item);
        return template;
    }}});
    var AJAX_NS = 'ajax', _ajaxCur, _removeAjaxCursor = function () {
        if (_ajaxCur) {
            _body.removeClass(_ajaxCur);
        }
    }, _destroyAjaxRequest = function () {
        _removeAjaxCursor();
        if (mfp.req) {
            mfp.req.abort();
        }
    };
    $.magnificPopup.registerModule(AJAX_NS, {options: {settings: null, cursor: 'mfp-ajax-cur', tError: '<a href="%url%">The content</a> could not be loaded.'}, proto: {initAjax: function () {
        mfp.types.push(AJAX_NS);
        _ajaxCur = mfp.st.ajax.cursor;
        _mfpOn(CLOSE_EVENT + '.' + AJAX_NS, _destroyAjaxRequest);
        _mfpOn('BeforeChange.' + AJAX_NS, _destroyAjaxRequest);
    }, getAjax: function (item) {
        if (_ajaxCur)
            _body.addClass(_ajaxCur);
        mfp.updateStatus('loading');
        var opts = $.extend({url: item.src, success: function (data, textStatus, jqXHR) {
            var temp = {data: data, xhr: jqXHR};
            _mfpTrigger('ParseAjax', temp);
            mfp.appendContent($(temp.data), AJAX_NS);
            item.finished = true;
            _removeAjaxCursor();
            mfp._setFocus();
            setTimeout(function () {
                mfp.wrap.addClass(READY_CLASS);
            }, 16);
            mfp.updateStatus('ready');
            _mfpTrigger('AjaxContentAdded');
        }, error: function () {
            _removeAjaxCursor();
            item.finished = item.loadError = true;
            mfp.updateStatus('error', mfp.st.ajax.tError.replace('%url%', item.src));
        }}, mfp.st.ajax.settings);
        mfp.req = $.ajax(opts);
        return'';
    }}});
    var _imgInterval, _getTitle = function (item) {
        if (item.data && item.data.title !== undefined)
            return item.data.title;
        var src = mfp.st.image.titleSrc;
        if (src) {
            if ($.isFunction(src)) {
                return src.call(mfp, item);
            } else if (item.el) {
                return item.el.attr(src) || '';
            }
        }
        return'';
    };
    $.magnificPopup.registerModule('image', {options: {markup: '<div class="mfp-figure">' + '<div class="mfp-close"></div>' + '<figure>' + '<div class="mfp-img"></div>' + '<figcaption>' + '<div class="mfp-bottom-bar">' + '<div class="mfp-title"></div>' + '<div class="mfp-counter"></div>' + '</div>' + '</figcaption>' + '</figure>' + '</div>', cursor: 'mfp-zoom-out-cur', titleSrc: 'title', verticalFit: true, tError: '<a href="%url%">The image</a> could not be loaded.'}, proto: {initImage: function () {
        var imgSt = mfp.st.image, ns = '.image';
        mfp.types.push('image');
        _mfpOn(OPEN_EVENT + ns, function () {
            if (mfp.currItem.type === 'image' && imgSt.cursor) {
                _body.addClass(imgSt.cursor);
            }
        });
        _mfpOn(CLOSE_EVENT + ns, function () {
            if (imgSt.cursor) {
                _body.removeClass(imgSt.cursor);
            }
            _window.off('resize' + EVENT_NS);
        });
        _mfpOn('Resize' + ns, mfp.resizeImage);
        if (mfp.isLowIE) {
            _mfpOn('AfterChange', mfp.resizeImage);
        }
    }, resizeImage: function () {
        var item = mfp.currItem;
        if (!item || !item.img)return;
        if (mfp.st.image.verticalFit) {
            var decr = 0;
            if (mfp.isLowIE) {
                decr = parseInt(item.img.css('padding-top'), 10) + parseInt(item.img.css('padding-bottom'), 10);
            }
            item.img.css('max-height', mfp.wH - decr);
        }
    }, _onImageHasSize: function (item) {
        if (item.img) {
            item.hasSize = true;
            if (_imgInterval) {
                clearInterval(_imgInterval);
            }
            item.isCheckingImgSize = false;
            _mfpTrigger('ImageHasSize', item);
            if (item.imgHidden) {
                if (mfp.content)
                    mfp.content.removeClass('mfp-loading');
                item.imgHidden = false;
            }
        }
    }, findImageSize: function (item) {
        var counter = 0, img = item.img[0], mfpSetInterval = function (delay) {
            if (_imgInterval) {
                clearInterval(_imgInterval);
            }
            _imgInterval = setInterval(function () {
                if (img.naturalWidth > 0) {
                    mfp._onImageHasSize(item);
                    return;
                }
                if (counter > 200) {
                    clearInterval(_imgInterval);
                }
                counter++;
                if (counter === 3) {
                    mfpSetInterval(10);
                } else if (counter === 40) {
                    mfpSetInterval(50);
                } else if (counter === 100) {
                    mfpSetInterval(500);
                }
            }, delay);
        };
        mfpSetInterval(1);
    }, getImage: function (item, template) {
        var guard = 0, onLoadComplete = function () {
            if (item) {
                if (item.img[0].complete) {
                    item.img.off('.mfploader');
                    if (item === mfp.currItem) {
                        mfp._onImageHasSize(item);
                        mfp.updateStatus('ready');
                    }
                    item.hasSize = true;
                    item.loaded = true;
                    _mfpTrigger('ImageLoadComplete');
                }
                else {
                    guard++;
                    if (guard < 200) {
                        setTimeout(onLoadComplete, 100);
                    } else {
                        onLoadError();
                    }
                }
            }
        }, onLoadError = function () {
            if (item) {
                item.img.off('.mfploader');
                if (item === mfp.currItem) {
                    mfp._onImageHasSize(item);
                    mfp.updateStatus('error', imgSt.tError.replace('%url%', item.src));
                }
                item.hasSize = true;
                item.loaded = true;
                item.loadError = true;
            }
        }, imgSt = mfp.st.image;
        var el = template.find('.mfp-img');
        if (el.length) {
            var img = document.createElement('img');
            img.className = 'mfp-img';
            item.img = $(img).on('load.mfploader', onLoadComplete).on('error.mfploader', onLoadError);
            img.src = item.src;
            if (el.is('img')) {
                item.img = item.img.clone();
            }
            img = item.img[0];
            if (img.naturalWidth > 0) {
                item.hasSize = true;
            } else if (!img.width) {
                item.hasSize = false;
            }
        }
        mfp._parseMarkup(template, {title: _getTitle(item), img_replaceWith: item.img}, item);
        mfp.resizeImage();
        if (item.hasSize) {
            if (_imgInterval)clearInterval(_imgInterval);
            if (item.loadError) {
                template.addClass('mfp-loading');
                mfp.updateStatus('error', imgSt.tError.replace('%url%', item.src));
            } else {
                template.removeClass('mfp-loading');
                mfp.updateStatus('ready');
            }
            return template;
        }
        mfp.updateStatus('loading');
        item.loading = true;
        if (!item.hasSize) {
            item.imgHidden = true;
            template.addClass('mfp-loading');
            mfp.findImageSize(item);
        }
        return template;
    }}});
    var hasMozTransform, getHasMozTransform = function () {
        if (hasMozTransform === undefined) {
            hasMozTransform = document.createElement('p').style.MozTransform !== undefined;
        }
        return hasMozTransform;
    };
    $.magnificPopup.registerModule('zoom', {options: {enabled: false, easing: 'ease-in-out', duration: 300, opener: function (element) {
        return element.is('img') ? element : element.find('img');
    }}, proto: {initZoom: function () {
        var zoomSt = mfp.st.zoom, ns = '.zoom', image;
        if (!zoomSt.enabled || !mfp.supportsTransition) {
            return;
        }
        var duration = zoomSt.duration, getElToAnimate = function (image) {
            var newImg = image.clone().removeAttr('style').removeAttr('class').addClass('mfp-animated-image'), transition = 'all ' + (zoomSt.duration / 1000) + 's ' + zoomSt.easing, cssObj = {position: 'fixed', zIndex: 9999, left: 0, top: 0, '-webkit-backface-visibility': 'hidden'}, t = 'transition';
            cssObj['-webkit-' + t] = cssObj['-moz-' + t] = cssObj['-o-' + t] = cssObj[t] = transition;
            newImg.css(cssObj);
            return newImg;
        }, showMainContent = function () {
            mfp.content.css('visibility', 'visible');
        }, openTimeout, animatedImg;
        _mfpOn('BuildControls' + ns, function () {
            if (mfp._allowZoom()) {
                clearTimeout(openTimeout);
                mfp.content.css('visibility', 'hidden');
                image = mfp._getItemToZoom();
                if (!image) {
                    showMainContent();
                    return;
                }
                animatedImg = getElToAnimate(image);
                animatedImg.css(mfp._getOffset());
                mfp.wrap.append(animatedImg);
                openTimeout = setTimeout(function () {
                    animatedImg.css(mfp._getOffset(true));
                    openTimeout = setTimeout(function () {
                        showMainContent();
                        setTimeout(function () {
                            animatedImg.remove();
                            image = animatedImg = null;
                            _mfpTrigger('ZoomAnimationEnded');
                        }, 16);
                    }, duration);
                }, 16);
            }
        });
        _mfpOn(BEFORE_CLOSE_EVENT + ns, function () {
            if (mfp._allowZoom()) {
                clearTimeout(openTimeout);
                mfp.st.removalDelay = duration;
                if (!image) {
                    image = mfp._getItemToZoom();
                    if (!image) {
                        return;
                    }
                    animatedImg = getElToAnimate(image);
                }
                animatedImg.css(mfp._getOffset(true));
                mfp.wrap.append(animatedImg);
                mfp.content.css('visibility', 'hidden');
                setTimeout(function () {
                    animatedImg.css(mfp._getOffset());
                }, 16);
            }
        });
        _mfpOn(CLOSE_EVENT + ns, function () {
            if (mfp._allowZoom()) {
                showMainContent();
                if (animatedImg) {
                    animatedImg.remove();
                }
                image = null;
            }
        });
    }, _allowZoom: function () {
        return mfp.currItem.type === 'image';
    }, _getItemToZoom: function () {
        if (mfp.currItem.hasSize) {
            return mfp.currItem.img;
        } else {
            return false;
        }
    }, _getOffset: function (isLarge) {
        var el;
        if (isLarge) {
            el = mfp.currItem.img;
        } else {
            el = mfp.st.zoom.opener(mfp.currItem.el || mfp.currItem);
        }
        var offset = el.offset();
        var paddingTop = parseInt(el.css('padding-top'), 10);
        var paddingBottom = parseInt(el.css('padding-bottom'), 10);
        offset.top -= ($(window).scrollTop() - paddingTop);
        var obj = {width: el.width(), height: (_isJQ ? el.innerHeight() : el[0].offsetHeight) - paddingBottom - paddingTop};
        if (getHasMozTransform()) {
            obj['-moz-transform'] = obj['transform'] = 'translate(' + offset.left + 'px,' + offset.top + 'px)';
        } else {
            obj.left = offset.left;
            obj.top = offset.top;
        }
        return obj;
    }}});
    var IFRAME_NS = 'iframe', _emptyPage = '//about:blank', _fixIframeBugs = function (isShowing) {
        if (mfp.currTemplate[IFRAME_NS]) {
            var el = mfp.currTemplate[IFRAME_NS].find('iframe');
            if (el.length) {
                if (!isShowing) {
                    el[0].src = _emptyPage;
                }
                if (mfp.isIE8) {
                    el.css('display', isShowing ? 'block' : 'none');
                }
            }
        }
    };
    $.magnificPopup.registerModule(IFRAME_NS, {options: {markup: '<div class="mfp-iframe-scaler">' + '<div class="mfp-close"></div>' + '<iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe>' + '</div>', srcAction: 'iframe_src', patterns: {youtube: {index: 'youtube.com', id: 'v=', src: '//www.youtube.com/embed/%id%?autoplay=1'}, vimeo: {index: 'vimeo.com/', id: '/', src: '//player.vimeo.com/video/%id%?autoplay=1'}, gmaps: {index: '//maps.google.', src: '%id%&output=embed'}}}, proto: {initIframe: function () {
        mfp.types.push(IFRAME_NS);
        _mfpOn('BeforeChange', function (e, prevType, newType) {
            if (prevType !== newType) {
                if (prevType === IFRAME_NS) {
                    _fixIframeBugs();
                } else if (newType === IFRAME_NS) {
                    _fixIframeBugs(true);
                }
            }
        });
        _mfpOn(CLOSE_EVENT + '.' + IFRAME_NS, function () {
            _fixIframeBugs();
        });
    }, getIframe: function (item, template) {
        var embedSrc = item.src;
        var iframeSt = mfp.st.iframe;
        $.each(iframeSt.patterns, function () {
            if (embedSrc.indexOf(this.index) > -1) {
                if (this.id) {
                    if (typeof this.id === 'string') {
                        embedSrc = embedSrc.substr(embedSrc.lastIndexOf(this.id) + this.id.length, embedSrc.length);
                    } else {
                        embedSrc = this.id.call(this, embedSrc);
                    }
                }
                embedSrc = this.src.replace('%id%', embedSrc);
                return false;
            }
        });
        var dataObj = {};
        if (iframeSt.srcAction) {
            dataObj[iframeSt.srcAction] = embedSrc;
        }
        mfp._parseMarkup(template, dataObj, item);
        mfp.updateStatus('ready');
        return template;
    }}});
    var _getLoopedId = function (index) {
        var numSlides = mfp.items.length;
        if (index > numSlides - 1) {
            return index - numSlides;
        } else if (index < 0) {
            return numSlides + index;
        }
        return index;
    }, _replaceCurrTotal = function (text, curr, total) {
        return text.replace(/%curr%/gi, curr + 1).replace(/%total%/gi, total);
    };
    $.magnificPopup.registerModule('gallery', {options: {enabled: false, arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>', preload: [0, 2], navigateByImgClick: true, arrows: true, tPrev: 'Previous (Left arrow key)', tNext: 'Next (Right arrow key)', tCounter: '%curr% of %total%'}, proto: {initGallery: function () {
        var gSt = mfp.st.gallery, ns = '.mfp-gallery', supportsFastClick = Boolean($.fn.mfpFastClick);
        mfp.direction = true;
        if (!gSt || !gSt.enabled)return false;
        _wrapClasses += ' mfp-gallery';
        _mfpOn(OPEN_EVENT + ns, function () {
            if (gSt.navigateByImgClick) {
                mfp.wrap.on('click' + ns, '.mfp-img', function () {
                    if (mfp.items.length > 1) {
                        mfp.next();
                        return false;
                    }
                });
            }
            _document.on('keydown' + ns, function (e) {
                if (e.keyCode === 37) {
                    mfp.prev();
                } else if (e.keyCode === 39) {
                    mfp.next();
                }
            });
        });
        _mfpOn('UpdateStatus' + ns, function (e, data) {
            if (data.text) {
                data.text = _replaceCurrTotal(data.text, mfp.currItem.index, mfp.items.length);
            }
        });
        _mfpOn(MARKUP_PARSE_EVENT + ns, function (e, element, values, item) {
            var l = mfp.items.length;
            values.counter = l > 1 ? _replaceCurrTotal(gSt.tCounter, item.index, l) : '';
        });
        _mfpOn('BuildControls' + ns, function () {
            if (mfp.items.length > 1 && gSt.arrows && !mfp.arrowLeft) {
                var markup = gSt.arrowMarkup, arrowLeft = mfp.arrowLeft = $(markup.replace(/%title%/gi, gSt.tPrev).replace(/%dir%/gi, 'left')).addClass(PREVENT_CLOSE_CLASS), arrowRight = mfp.arrowRight = $(markup.replace(/%title%/gi, gSt.tNext).replace(/%dir%/gi, 'right')).addClass(PREVENT_CLOSE_CLASS);
                var eName = supportsFastClick ? 'mfpFastClick' : 'click';
                arrowLeft[eName](function () {
                    mfp.prev();
                });
                arrowRight[eName](function () {
                    mfp.next();
                });
                if (mfp.isIE7) {
                    _getEl('b', arrowLeft[0], false, true);
                    _getEl('a', arrowLeft[0], false, true);
                    _getEl('b', arrowRight[0], false, true);
                    _getEl('a', arrowRight[0], false, true);
                }
                mfp.container.append(arrowLeft.add(arrowRight));
            }
        });
        _mfpOn(CHANGE_EVENT + ns, function () {
            if (mfp._preloadTimeout)clearTimeout(mfp._preloadTimeout);
            mfp._preloadTimeout = setTimeout(function () {
                mfp.preloadNearbyImages();
                mfp._preloadTimeout = null;
            }, 16);
        });
        _mfpOn(CLOSE_EVENT + ns, function () {
            _document.off(ns);
            mfp.wrap.off('click' + ns);
            if (mfp.arrowLeft && supportsFastClick) {
                mfp.arrowLeft.add(mfp.arrowRight).destroyMfpFastClick();
            }
            mfp.arrowRight = mfp.arrowLeft = null;
        });
    }, next: function () {
        mfp.direction = true;
        mfp.index = _getLoopedId(mfp.index + 1);
        mfp.updateItemHTML();
    }, prev: function () {
        mfp.direction = false;
        mfp.index = _getLoopedId(mfp.index - 1);
        mfp.updateItemHTML();
    }, goTo: function (newIndex) {
        mfp.direction = (newIndex >= mfp.index);
        mfp.index = newIndex;
        mfp.updateItemHTML();
    }, preloadNearbyImages: function () {
        var p = mfp.st.gallery.preload, preloadBefore = Math.min(p[0], mfp.items.length), preloadAfter = Math.min(p[1], mfp.items.length), i;
        for (i = 1; i <= (mfp.direction ? preloadAfter : preloadBefore); i++) {
            mfp._preloadItem(mfp.index + i);
        }
        for (i = 1; i <= (mfp.direction ? preloadBefore : preloadAfter); i++) {
            mfp._preloadItem(mfp.index - i);
        }
    }, _preloadItem: function (index) {
        index = _getLoopedId(index);
        if (mfp.items[index].preloaded) {
            return;
        }
        var item = mfp.items[index];
        if (!item.parsed) {
            item = mfp.parseEl(index);
        }
        _mfpTrigger('LazyLoad', item);
        if (item.type === 'image') {
            item.img = $('<img class="mfp-img" />').on('load.mfploader', function () {
                item.hasSize = true;
            }).on('error.mfploader', function () {
                item.hasSize = true;
                item.loadError = true;
                _mfpTrigger('LazyLoadError', item);
            }).attr('src', item.src);
        }
        item.preloaded = true;
    }}});
    var RETINA_NS = 'retina';
    $.magnificPopup.registerModule(RETINA_NS, {options: {replaceSrc: function (item) {
        return item.src.replace(/\.\w+$/, function (m) {
            return'@2x' + m;
        });
    }, ratio: 1}, proto: {initRetina: function () {
        if (window.devicePixelRatio > 1) {
            var st = mfp.st.retina, ratio = st.ratio;
            ratio = !isNaN(ratio) ? ratio : ratio();
            if (ratio > 1) {
                _mfpOn('ImageHasSize' + '.' + RETINA_NS, function (e, item) {
                    item.img.css({'max-width': item.img[0].naturalWidth / ratio, 'width': '100%'});
                });
                _mfpOn('ElementParse' + '.' + RETINA_NS, function (e, item) {
                    item.src = st.replaceSrc(item, ratio);
                });
            }
        }
    }}});
    (function () {
        var ghostClickDelay = 1000, supportsTouch = 'ontouchstart'in window, unbindTouchMove = function () {
            _window.off('touchmove' + ns + ' touchend' + ns);
        }, eName = 'mfpFastClick', ns = '.' + eName;
        $.fn.mfpFastClick = function (callback) {
            return $(this).each(function () {
                var elem = $(this), lock;
                if (supportsTouch) {
                    var timeout, startX, startY, pointerMoved, point, numPointers;
                    elem.on('touchstart' + ns, function (e) {
                        pointerMoved = false;
                        numPointers = 1;
                        point = e.originalEvent ? e.originalEvent.touches[0] : e.touches[0];
                        startX = point.clientX;
                        startY = point.clientY;
                        _window.on('touchmove' + ns, function (e) {
                            point = e.originalEvent ? e.originalEvent.touches : e.touches;
                            numPointers = point.length;
                            point = point[0];
                            if (Math.abs(point.clientX - startX) > 10 || Math.abs(point.clientY - startY) > 10) {
                                pointerMoved = true;
                                unbindTouchMove();
                            }
                        }).on('touchend' + ns, function (e) {
                            unbindTouchMove();
                            if (pointerMoved || numPointers > 1) {
                                return;
                            }
                            lock = true;
                            e.preventDefault();
                            clearTimeout(timeout);
                            timeout = setTimeout(function () {
                                lock = false;
                            }, ghostClickDelay);
                            callback();
                        });
                    });
                }
                elem.on('click' + ns, function () {
                    if (!lock) {
                        callback();
                    }
                });
            });
        };
        $.fn.destroyMfpFastClick = function () {
            $(this).off('touchstart' + ns + ' click' + ns);
            if (supportsTouch)_window.off('touchmove' + ns + ' touchend' + ns);
        };
    })();
    _checkInstance();
})(window.jQuery || window.Zepto);
if (typeof Object.create !== "function") {
    Object.create = function (obj) {
        function F() {
        }

        F.prototype = obj;
        return new F();
    };
}
(function ($, window, document) {
    var Carousel = {init: function (options, el) {
        var base = this;
        base.$elem = $(el);
        base.options = $.extend({}, $.fn.owlCarousel.options, base.$elem.data(), options);
        base.userOptions = options;
        base.loadContent();
    }, loadContent: function () {
        var base = this, url;

        function getData(data) {
            var i, content = "";
            if (typeof base.options.jsonSuccess === "function") {
                base.options.jsonSuccess.apply(this, [data]);
            } else {
                for (i in data.owl) {
                    if (data.owl.hasOwnProperty(i)) {
                        content += data.owl[i].item;
                    }
                }
                base.$elem.html(content);
            }
            base.logIn();
        }

        if (typeof base.options.beforeInit === "function") {
            base.options.beforeInit.apply(this, [base.$elem]);
        }
        if (typeof base.options.jsonPath === "string") {
            url = base.options.jsonPath;
            $.getJSON(url, getData);
        } else {
            base.logIn();
        }
    }, logIn: function () {
        var base = this;
        base.$elem.data("owl-originalStyles", base.$elem.attr("style"));
        base.$elem.data("owl-originalClasses", base.$elem.attr("class"));
        base.$elem.css({opacity: 0});
        base.orignalItems = base.options.items;
        base.checkBrowser();
        base.wrapperWidth = 0;
        base.checkVisible = null;
        base.setVars();
    }, setVars: function () {
        var base = this;
        if (base.$elem.children().length === 0) {
            return false;
        }
        base.baseClass();
        base.eventTypes();
        base.$userItems = base.$elem.children();
        base.itemsAmount = base.$userItems.length;
        base.wrapItems();
        base.$owlItems = base.$elem.find(".owl-item");
        base.$owlWrapper = base.$elem.find(".owl-wrapper");
        base.playDirection = "next";
        base.prevItem = 0;
        base.prevArr = [0];
        base.currentItem = 0;
        base.customEvents();
        base.onStartup();
    }, onStartup: function () {
        var base = this;
        base.updateItems();
        base.calculateAll();
        base.buildControls();
        base.updateControls();
        base.response();
        base.moveEvents();
        base.stopOnHover();
        base.owlStatus();
        if (base.options.transitionStyle !== false) {
            base.transitionTypes(base.options.transitionStyle);
        }
        if (base.options.autoPlay === true) {
            base.options.autoPlay = 5000;
        }
        base.play();
        base.$elem.find(".owl-wrapper").css("display", "block");
        if (!base.$elem.is(":visible")) {
            base.watchVisibility();
        } else {
            base.$elem.css("opacity", 1);
        }
        base.onstartup = false;
        base.eachMoveUpdate();
        if (typeof base.options.afterInit === "function") {
            base.options.afterInit.apply(this, [base.$elem]);
        }
    }, eachMoveUpdate: function () {
        var base = this;
        if (base.options.lazyLoad === true) {
            base.lazyLoad();
        }
        if (base.options.autoHeight === true) {
            base.autoHeight();
        }
        base.onVisibleItems();
        if (typeof base.options.afterAction === "function") {
            base.options.afterAction.apply(this, [base.$elem]);
        }
    }, updateVars: function () {
        var base = this;
        if (typeof base.options.beforeUpdate === "function") {
            base.options.beforeUpdate.apply(this, [base.$elem]);
        }
        base.watchVisibility();
        base.updateItems();
        base.calculateAll();
        base.updatePosition();
        base.updateControls();
        base.eachMoveUpdate();
        if (typeof base.options.afterUpdate === "function") {
            base.options.afterUpdate.apply(this, [base.$elem]);
        }
    }, reload: function () {
        var base = this;
        window.setTimeout(function () {
            base.updateVars();
        }, 0);
    }, watchVisibility: function () {
        var base = this;
        if (base.$elem.is(":visible") === false) {
            base.$elem.css({opacity: 0});
            window.clearInterval(base.autoPlayInterval);
            window.clearInterval(base.checkVisible);
        } else {
            return false;
        }
        base.checkVisible = window.setInterval(function () {
            if (base.$elem.is(":visible")) {
                base.reload();
                base.$elem.animate({opacity: 1}, 200);
                window.clearInterval(base.checkVisible);
            }
        }, 500);
    }, wrapItems: function () {
        var base = this;
        base.$userItems.wrapAll("<div class=\"owl-wrapper\">").wrap("<div class=\"owl-item\"></div>");
        base.$elem.find(".owl-wrapper").wrap("<div class=\"owl-wrapper-outer\">");
        base.wrapperOuter = base.$elem.find(".owl-wrapper-outer");
        base.$elem.css("display", "block");
    }, baseClass: function () {
        var base = this, hasBaseClass = base.$elem.hasClass(base.options.baseClass), hasThemeClass = base.$elem.hasClass(base.options.theme);
        if (!hasBaseClass) {
            base.$elem.addClass(base.options.baseClass);
        }
        if (!hasThemeClass) {
            base.$elem.addClass(base.options.theme);
        }
    }, updateItems: function () {
        var base = this, width, i;
        if (base.options.responsive === false) {
            return false;
        }
        if (base.options.singleItem === true) {
            base.options.items = base.orignalItems = 1;
            base.options.itemsCustom = false;
            base.options.itemsDesktop = false;
            base.options.itemsDesktopSmall = false;
            base.options.itemsTablet = false;
            base.options.itemsTabletSmall = false;
            base.options.itemsMobile = false;
            return false;
        }
        width = $(base.options.responsiveBaseWidth).width();
        if (width > (base.options.itemsDesktop[0] || base.orignalItems)) {
            base.options.items = base.orignalItems;
        }
        if (base.options.itemsCustom !== false) {
            base.options.itemsCustom.sort(function (a, b) {
                return a[0] - b[0];
            });
            for (i = 0; i < base.options.itemsCustom.length; i += 1) {
                if (base.options.itemsCustom[i][0] <= width) {
                    base.options.items = base.options.itemsCustom[i][1];
                }
            }
        } else {
            if (width <= base.options.itemsDesktop[0] && base.options.itemsDesktop !== false) {
                base.options.items = base.options.itemsDesktop[1];
            }
            if (width <= base.options.itemsDesktopSmall[0] && base.options.itemsDesktopSmall !== false) {
                base.options.items = base.options.itemsDesktopSmall[1];
            }
            if (width <= base.options.itemsTablet[0] && base.options.itemsTablet !== false) {
                base.options.items = base.options.itemsTablet[1];
            }
            if (width <= base.options.itemsTabletSmall[0] && base.options.itemsTabletSmall !== false) {
                base.options.items = base.options.itemsTabletSmall[1];
            }
            if (width <= base.options.itemsMobile[0] && base.options.itemsMobile !== false) {
                base.options.items = base.options.itemsMobile[1];
            }
        }
        if (base.options.items > base.itemsAmount && base.options.itemsScaleUp === true) {
            base.options.items = base.itemsAmount;
        }
    }, response: function () {
        var base = this, smallDelay, lastWindowWidth;
        if (base.options.responsive !== true) {
            return false;
        }
        lastWindowWidth = $(window).width();
        base.resizer = function () {
            if ($(window).width() !== lastWindowWidth) {
                if (base.options.autoPlay !== false) {
                    window.clearInterval(base.autoPlayInterval);
                }
                window.clearTimeout(smallDelay);
                smallDelay = window.setTimeout(function () {
                    lastWindowWidth = $(window).width();
                    base.updateVars();
                }, base.options.responsiveRefreshRate);
            }
        };
        $(window).resize(base.resizer);
    }, updatePosition: function () {
        var base = this;
        base.jumpTo(base.currentItem);
        if (base.options.autoPlay !== false) {
            base.checkAp();
        }
    }, appendItemsSizes: function () {
        var base = this, roundPages = 0, lastItem = base.itemsAmount - base.options.items;
        base.$owlItems.each(function (index) {
            var $this = $(this);
            $this.css({"width": base.itemWidth}).data("owl-item", Number(index));
            if (index % base.options.items === 0 || index === lastItem) {
                if (!(index > lastItem)) {
                    roundPages += 1;
                }
            }
            $this.data("owl-roundPages", roundPages);
        });
    }, appendWrapperSizes: function () {
        var base = this, width = base.$owlItems.length * base.itemWidth;
        base.$owlWrapper.css({"width": width * 2, "left": 0});
        base.appendItemsSizes();
    }, calculateAll: function () {
        var base = this;
        base.calculateWidth();
        base.appendWrapperSizes();
        base.loops();
        base.max();
    }, calculateWidth: function () {
        var base = this;
        base.itemWidth = Math.round(base.$elem.width() / base.options.items);
    }, max: function () {
        var base = this, maximum = ((base.itemsAmount * base.itemWidth) - base.options.items * base.itemWidth) * -1;
        if (base.options.items > base.itemsAmount) {
            base.maximumItem = 0;
            maximum = 0;
            base.maximumPixels = 0;
        } else {
            base.maximumItem = base.itemsAmount - base.options.items;
            base.maximumPixels = maximum;
        }
        return maximum;
    }, min: function () {
        return 0;
    }, loops: function () {
        var base = this, prev = 0, elWidth = 0, i, item, roundPageNum;
        base.positionsInArray = [0];
        base.pagesInArray = [];
        for (i = 0; i < base.itemsAmount; i += 1) {
            elWidth += base.itemWidth;
            base.positionsInArray.push(-elWidth);
            if (base.options.scrollPerPage === true) {
                item = $(base.$owlItems[i]);
                roundPageNum = item.data("owl-roundPages");
                if (roundPageNum !== prev) {
                    base.pagesInArray[prev] = base.positionsInArray[i];
                    prev = roundPageNum;
                }
            }
        }
    }, buildControls: function () {
        var base = this;
        if (base.options.navigation === true || base.options.pagination === true) {
            base.owlControls = $("<div class=\"owl-controls\"/>").toggleClass("clickable", !base.browser.isTouch).appendTo(base.$elem);
        }
        if (base.options.pagination === true) {
            base.buildPagination();
        }
        if (base.options.navigation === true) {
            base.buildButtons();
        }
    }, buildButtons: function () {
        var base = this, buttonsWrapper = $("<div class=\"owl-buttons\"/>");
        base.owlControls.append(buttonsWrapper);
        base.buttonPrev = $("<div/>", {"class": "owl-prev", "html": base.options.navigationText[0] || ""});
        base.buttonNext = $("<div/>", {"class": "owl-next", "html": base.options.navigationText[1] || ""});
        buttonsWrapper.append(base.buttonPrev).append(base.buttonNext);
        buttonsWrapper.on("touchstart.owlControls mousedown.owlControls", "div[class^=\"owl\"]", function (event) {
            event.preventDefault();
        });
        buttonsWrapper.on("touchend.owlControls mouseup.owlControls", "div[class^=\"owl\"]", function (event) {
            event.preventDefault();
            if ($(this).hasClass("owl-next")) {
                base.next();
            } else {
                base.prev();
            }
        });
    }, buildPagination: function () {
        var base = this;
        base.paginationWrapper = $("<div class=\"owl-pagination\"/>");
        base.owlControls.append(base.paginationWrapper);
        base.paginationWrapper.on("touchend.owlControls mouseup.owlControls", ".owl-page", function (event) {
            event.preventDefault();
            if (Number($(this).data("owl-page")) !== base.currentItem) {
                base.goTo(Number($(this).data("owl-page")), true);
            }
        });
    }, updatePagination: function () {
        var base = this, counter, lastPage, lastItem, i, paginationButton, paginationButtonInner;
        if (base.options.pagination === false) {
            return false;
        }
        base.paginationWrapper.html("");
        counter = 0;
        lastPage = base.itemsAmount - base.itemsAmount % base.options.items;
        for (i = 0; i < base.itemsAmount; i += 1) {
            if (i % base.options.items === 0) {
                counter += 1;
                if (lastPage === i) {
                    lastItem = base.itemsAmount - base.options.items;
                }
                paginationButton = $("<div/>", {"class": "owl-page"});
                paginationButtonInner = $("<span></span>", {"text": base.options.paginationNumbers === true ? counter : "", "class": base.options.paginationNumbers === true ? "owl-numbers" : ""});
                paginationButton.append(paginationButtonInner);
                paginationButton.data("owl-page", lastPage === i ? lastItem : i);
                paginationButton.data("owl-roundPages", counter);
                base.paginationWrapper.append(paginationButton);
            }
        }
        base.checkPagination();
    }, checkPagination: function () {
        var base = this;
        if (base.options.pagination === false) {
            return false;
        }
        base.paginationWrapper.find(".owl-page").each(function () {
            if ($(this).data("owl-roundPages") === $(base.$owlItems[base.currentItem]).data("owl-roundPages")) {
                base.paginationWrapper.find(".owl-page").removeClass("active");
                $(this).addClass("active");
            }
        });
    }, checkNavigation: function () {
        var base = this;
        if (base.options.navigation === false) {
            return false;
        }
        if (base.options.rewindNav === false) {
            if (base.currentItem === 0 && base.maximumItem === 0) {
                base.buttonPrev.addClass("disabled");
                base.buttonNext.addClass("disabled");
            } else if (base.currentItem === 0 && base.maximumItem !== 0) {
                base.buttonPrev.addClass("disabled");
                base.buttonNext.removeClass("disabled");
            } else if (base.currentItem === base.maximumItem) {
                base.buttonPrev.removeClass("disabled");
                base.buttonNext.addClass("disabled");
            } else if (base.currentItem !== 0 && base.currentItem !== base.maximumItem) {
                base.buttonPrev.removeClass("disabled");
                base.buttonNext.removeClass("disabled");
            }
        }
    }, updateControls: function () {
        var base = this;
        base.updatePagination();
        base.checkNavigation();
        if (base.owlControls) {
            if (base.options.items >= base.itemsAmount) {
                base.owlControls.hide();
            } else {
                base.owlControls.show();
            }
        }
    }, destroyControls: function () {
        var base = this;
        if (base.owlControls) {
            base.owlControls.remove();
        }
    }, next: function (speed) {
        var base = this;
        if (base.isTransition) {
            return false;
        }
        base.currentItem += base.options.scrollPerPage === true ? base.options.items : 1;
        if (base.currentItem > base.maximumItem + (base.options.scrollPerPage === true ? (base.options.items - 1) : 0)) {
            if (base.options.rewindNav === true) {
                base.currentItem = 0;
                speed = "rewind";
            } else {
                base.currentItem = base.maximumItem;
                return false;
            }
        }
        base.goTo(base.currentItem, speed);
    }, prev: function (speed) {
        var base = this;
        if (base.isTransition) {
            return false;
        }
        if (base.options.scrollPerPage === true && base.currentItem > 0 && base.currentItem < base.options.items) {
            base.currentItem = 0;
        } else {
            base.currentItem -= base.options.scrollPerPage === true ? base.options.items : 1;
        }
        if (base.currentItem < 0) {
            if (base.options.rewindNav === true) {
                base.currentItem = base.maximumItem;
                speed = "rewind";
            } else {
                base.currentItem = 0;
                return false;
            }
        }
        base.goTo(base.currentItem, speed);
    }, goTo: function (position, speed, drag) {
        var base = this, goToPixel;
        if (base.isTransition) {
            return false;
        }
        if (typeof base.options.beforeMove === "function") {
            base.options.beforeMove.apply(this, [base.$elem]);
        }
        if (position >= base.maximumItem) {
            position = base.maximumItem;
        } else if (position <= 0) {
            position = 0;
        }
        base.currentItem = base.owl.currentItem = position;
        if (base.options.transitionStyle !== false && drag !== "drag" && base.options.items === 1 && base.browser.support3d === true) {
            base.swapSpeed(0);
            if (base.browser.support3d === true) {
                base.transition3d(base.positionsInArray[position]);
            } else {
                base.css2slide(base.positionsInArray[position], 1);
            }
            base.afterGo();
            base.singleItemTransition();
            return false;
        }
        goToPixel = base.positionsInArray[position];
        if (base.browser.support3d === true) {
            base.isCss3Finish = false;
            if (speed === true) {
                base.swapSpeed("paginationSpeed");
                window.setTimeout(function () {
                    base.isCss3Finish = true;
                }, base.options.paginationSpeed);
            } else if (speed === "rewind") {
                base.swapSpeed(base.options.rewindSpeed);
                window.setTimeout(function () {
                    base.isCss3Finish = true;
                }, base.options.rewindSpeed);
            } else {
                base.swapSpeed("slideSpeed");
                window.setTimeout(function () {
                    base.isCss3Finish = true;
                }, base.options.slideSpeed);
            }
            base.transition3d(goToPixel);
        } else {
            if (speed === true) {
                base.css2slide(goToPixel, base.options.paginationSpeed);
            } else if (speed === "rewind") {
                base.css2slide(goToPixel, base.options.rewindSpeed);
            } else {
                base.css2slide(goToPixel, base.options.slideSpeed);
            }
        }
        base.afterGo();
    }, jumpTo: function (position) {
        var base = this;
        if (typeof base.options.beforeMove === "function") {
            base.options.beforeMove.apply(this, [base.$elem]);
        }
        if (position >= base.maximumItem || position === -1) {
            position = base.maximumItem;
        } else if (position <= 0) {
            position = 0;
        }
        base.swapSpeed(0);
        if (base.browser.support3d === true) {
            base.transition3d(base.positionsInArray[position]);
        } else {
            base.css2slide(base.positionsInArray[position], 1);
        }
        base.currentItem = base.owl.currentItem = position;
        base.afterGo();
    }, afterGo: function () {
        var base = this;
        base.prevArr.push(base.currentItem);
        base.prevItem = base.owl.prevItem = base.prevArr[base.prevArr.length - 2];
        base.prevArr.shift(0);
        if (base.prevItem !== base.currentItem) {
            base.checkPagination();
            base.checkNavigation();
            base.eachMoveUpdate();
            if (base.options.autoPlay !== false) {
                base.checkAp();
            }
        }
        if (typeof base.options.afterMove === "function" && base.prevItem !== base.currentItem) {
            base.options.afterMove.apply(this, [base.$elem]);
        }
    }, stop: function () {
        var base = this;
        base.apStatus = "stop";
        window.clearInterval(base.autoPlayInterval);
    }, checkAp: function () {
        var base = this;
        if (base.apStatus !== "stop") {
            base.play();
        }
    }, play: function () {
        var base = this;
        base.apStatus = "play";
        if (base.options.autoPlay === false) {
            return false;
        }
        window.clearInterval(base.autoPlayInterval);
        base.autoPlayInterval = window.setInterval(function () {
            base.next(true);
        }, base.options.autoPlay);
    }, swapSpeed: function (action) {
        var base = this;
        if (action === "slideSpeed") {
            base.$owlWrapper.css(base.addCssSpeed(base.options.slideSpeed));
        } else if (action === "paginationSpeed") {
            base.$owlWrapper.css(base.addCssSpeed(base.options.paginationSpeed));
        } else if (typeof action !== "string") {
            base.$owlWrapper.css(base.addCssSpeed(action));
        }
    }, addCssSpeed: function (speed) {
        return{"-webkit-transition": "all " + speed + "ms ease", "-moz-transition": "all " + speed + "ms ease", "-o-transition": "all " + speed + "ms ease", "transition": "all " + speed + "ms ease"};
    }, removeTransition: function () {
        return{"-webkit-transition": "", "-moz-transition": "", "-o-transition": "", "transition": ""};
    }, doTranslate: function (pixels) {
        return{"-webkit-transform": "translate3d(" + pixels + "px, 0px, 0px)", "-moz-transform": "translate3d(" + pixels + "px, 0px, 0px)", "-o-transform": "translate3d(" + pixels + "px, 0px, 0px)", "-ms-transform": "translate3d(" + pixels + "px, 0px, 0px)", "transform": "translate3d(" + pixels + "px, 0px,0px)"};
    }, transition3d: function (value) {
        var base = this;
        base.$owlWrapper.css(base.doTranslate(value));
    }, css2move: function (value) {
        var base = this;
        base.$owlWrapper.css({"left": value});
    }, css2slide: function (value, speed) {
        var base = this;
        base.isCssFinish = false;
        base.$owlWrapper.stop(true, true).animate({"left": value}, {duration: speed || base.options.slideSpeed, complete: function () {
            base.isCssFinish = true;
        }});
    }, checkBrowser: function () {
        var base = this, translate3D = "translate3d(0px, 0px, 0px)", tempElem = document.createElement("div"), regex, asSupport, support3d, isTouch;
        tempElem.style.cssText = "  -moz-transform:" + translate3D + "; -ms-transform:" + translate3D + "; -o-transform:" + translate3D + "; -webkit-transform:" + translate3D + "; transform:" + translate3D;
        regex = /translate3d\(0px, 0px, 0px\)/g;
        asSupport = tempElem.style.cssText.match(regex);
        support3d = (asSupport !== null && asSupport.length === 1);
        isTouch = "ontouchstart"in window || window.navigator.msMaxTouchPoints;
        base.browser = {"support3d": support3d, "isTouch": isTouch};
    }, moveEvents: function () {
        var base = this;
        if (base.options.mouseDrag !== false || base.options.touchDrag !== false) {
            base.gestures();
            base.disabledEvents();
        }
    }, eventTypes: function () {
        var base = this, types = ["s", "e", "x"];
        base.ev_types = {};
        if (base.options.mouseDrag === true && base.options.touchDrag === true) {
            types = ["touchstart.owl mousedown.owl", "touchmove.owl mousemove.owl", "touchend.owl touchcancel.owl mouseup.owl"];
        } else if (base.options.mouseDrag === false && base.options.touchDrag === true) {
            types = ["touchstart.owl", "touchmove.owl", "touchend.owl touchcancel.owl"];
        } else if (base.options.mouseDrag === true && base.options.touchDrag === false) {
            types = ["mousedown.owl", "mousemove.owl", "mouseup.owl"];
        }
        base.ev_types.start = types[0];
        base.ev_types.move = types[1];
        base.ev_types.end = types[2];
    }, disabledEvents: function () {
        var base = this;
        base.$elem.on("dragstart.owl", function (event) {
            event.preventDefault();
        });
        base.$elem.on("mousedown.disableTextSelect", function (e) {
            return $(e.target).is('input, textarea, select, option');
        });
    }, gestures: function () {
        var base = this, locals = {offsetX: 0, offsetY: 0, baseElWidth: 0, relativePos: 0, position: null, minSwipe: null, maxSwipe: null, sliding: null, dargging: null, targetElement: null};
        base.isCssFinish = true;
        function getTouches(event) {
            if (event.touches !== undefined) {
                return{x: event.touches[0].pageX, y: event.touches[0].pageY};
            }
            if (event.touches === undefined) {
                if (event.pageX !== undefined) {
                    return{x: event.pageX, y: event.pageY};
                }
                if (event.pageX === undefined) {
                    return{x: event.clientX, y: event.clientY};
                }
            }
        }

        function swapEvents(type) {
            if (type === "on") {
                $(document).on(base.ev_types.move, dragMove);
                $(document).on(base.ev_types.end, dragEnd);
            } else if (type === "off") {
                $(document).off(base.ev_types.move);
                $(document).off(base.ev_types.end);
            }
        }

        function dragStart(event) {
            var ev = event.originalEvent || event || window.event, position;
            if (ev.which === 3) {
                return false;
            }
            if (base.itemsAmount <= base.options.items) {
                return;
            }
            if (base.isCssFinish === false && !base.options.dragBeforeAnimFinish) {
                return false;
            }
            if (base.isCss3Finish === false && !base.options.dragBeforeAnimFinish) {
                return false;
            }
            if (base.options.autoPlay !== false) {
                window.clearInterval(base.autoPlayInterval);
            }
            if (base.browser.isTouch !== true && !base.$owlWrapper.hasClass("grabbing")) {
                base.$owlWrapper.addClass("grabbing");
            }
            base.newPosX = 0;
            base.newRelativeX = 0;
            $(this).css(base.removeTransition());
            position = $(this).position();
            locals.relativePos = position.left;
            locals.offsetX = getTouches(ev).x - position.left;
            locals.offsetY = getTouches(ev).y - position.top;
            swapEvents("on");
            locals.sliding = false;
            locals.targetElement = ev.target || ev.srcElement;
        }

        function dragMove(event) {
            var ev = event.originalEvent || event || window.event, minSwipe, maxSwipe;
            base.newPosX = getTouches(ev).x - locals.offsetX;
            base.newPosY = getTouches(ev).y - locals.offsetY;
            base.newRelativeX = base.newPosX - locals.relativePos;
            if (typeof base.options.startDragging === "function" && locals.dragging !== true && base.newRelativeX !== 0) {
                locals.dragging = true;
                base.options.startDragging.apply(base, [base.$elem]);
            }
            if ((base.newRelativeX > 8 || base.newRelativeX < -8) && (base.browser.isTouch === true)) {
                if (ev.preventDefault !== undefined) {
                    ev.preventDefault();
                } else {
                    ev.returnValue = false;
                }
                locals.sliding = true;
            }
            if ((base.newPosY > 10 || base.newPosY < -10) && locals.sliding === false) {
                $(document).off("touchmove.owl");
            }
            minSwipe = function () {
                return base.newRelativeX / 5;
            };
            maxSwipe = function () {
                return base.maximumPixels + base.newRelativeX / 5;
            };
            base.newPosX = Math.max(Math.min(base.newPosX, minSwipe()), maxSwipe());
            if (base.browser.support3d === true) {
                base.transition3d(base.newPosX);
            } else {
                base.css2move(base.newPosX);
            }
        }

        function dragEnd(event) {
            var ev = event.originalEvent || event || window.event, newPosition, handlers, owlStopEvent;
            ev.target = ev.target || ev.srcElement;
            locals.dragging = false;
            if (base.browser.isTouch !== true) {
                base.$owlWrapper.removeClass("grabbing");
            }
            if (base.newRelativeX < 0) {
                base.dragDirection = base.owl.dragDirection = "left";
            } else {
                base.dragDirection = base.owl.dragDirection = "right";
            }
            if (base.newRelativeX !== 0) {
                newPosition = base.getNewPosition();
                base.goTo(newPosition, false, "drag");
                if (locals.targetElement === ev.target && base.browser.isTouch !== true) {
                    $(ev.target).on("click.disable", function (ev) {
                        ev.stopImmediatePropagation();
                        ev.stopPropagation();
                        ev.preventDefault();
                        $(ev.target).off("click.disable");
                    });
                    handlers = $._data(ev.target, "events").click;
                    owlStopEvent = handlers.pop();
                    handlers.splice(0, 0, owlStopEvent);
                }
            }
            swapEvents("off");
        }

        base.$elem.on(base.ev_types.start, ".owl-wrapper", dragStart);
    }, getNewPosition: function () {
        var base = this, newPosition = base.closestItem();
        if (newPosition > base.maximumItem) {
            base.currentItem = base.maximumItem;
            newPosition = base.maximumItem;
        } else if (base.newPosX >= 0) {
            newPosition = 0;
            base.currentItem = 0;
        }
        return newPosition;
    }, closestItem: function () {
        var base = this, array = base.options.scrollPerPage === true ? base.pagesInArray : base.positionsInArray, goal = base.newPosX, closest = null;
        $.each(array, function (i, v) {
            if (goal - (base.itemWidth / 20) > array[i + 1] && goal - (base.itemWidth / 20) < v && base.moveDirection() === "left") {
                closest = v;
                if (base.options.scrollPerPage === true) {
                    base.currentItem = $.inArray(closest, base.positionsInArray);
                } else {
                    base.currentItem = i;
                }
            } else if (goal + (base.itemWidth / 20) < v && goal + (base.itemWidth / 20) > (array[i + 1] || array[i] - base.itemWidth) && base.moveDirection() === "right") {
                if (base.options.scrollPerPage === true) {
                    closest = array[i + 1] || array[array.length - 1];
                    base.currentItem = $.inArray(closest, base.positionsInArray);
                } else {
                    closest = array[i + 1];
                    base.currentItem = i + 1;
                }
            }
        });
        return base.currentItem;
    }, moveDirection: function () {
        var base = this, direction;
        if (base.newRelativeX < 0) {
            direction = "right";
            base.playDirection = "next";
        } else {
            direction = "left";
            base.playDirection = "prev";
        }
        return direction;
    }, customEvents: function () {
        var base = this;
        base.$elem.on("owl.next", function () {
            base.next();
        });
        base.$elem.on("owl.prev", function () {
            base.prev();
        });
        base.$elem.on("owl.play", function (event, speed) {
            base.options.autoPlay = speed;
            base.play();
            base.hoverStatus = "play";
        });
        base.$elem.on("owl.stop", function () {
            base.stop();
            base.hoverStatus = "stop";
        });
        base.$elem.on("owl.goTo", function (event, item) {
            base.goTo(item);
        });
        base.$elem.on("owl.jumpTo", function (event, item) {
            base.jumpTo(item);
        });
    }, stopOnHover: function () {
        var base = this;
        if (base.options.stopOnHover === true && base.browser.isTouch !== true && base.options.autoPlay !== false) {
            base.$elem.on("mouseover", function () {
                base.stop();
            });
            base.$elem.on("mouseout", function () {
                if (base.hoverStatus !== "stop") {
                    base.play();
                }
            });
        }
    }, lazyLoad: function () {
        var base = this, i, $item, itemNumber, $lazyImg, follow;
        if (base.options.lazyLoad === false) {
            return false;
        }
        for (i = 0; i < base.itemsAmount; i += 1) {
            $item = $(base.$owlItems[i]);
            if ($item.data("owl-loaded") === "loaded") {
                continue;
            }
            itemNumber = $item.data("owl-item");
            $lazyImg = $item.find(".lazyOwl");
            if (typeof $lazyImg.data("src") !== "string") {
                $item.data("owl-loaded", "loaded");
                continue;
            }
            if ($item.data("owl-loaded") === undefined) {
                $lazyImg.hide();
                $item.addClass("loading").data("owl-loaded", "checked");
            }
            if (base.options.lazyFollow === true) {
                follow = itemNumber >= base.currentItem;
            } else {
                follow = true;
            }
            if (follow && itemNumber < base.currentItem + base.options.items && $lazyImg.length) {
                base.lazyPreload($item, $lazyImg);
            }
        }
    }, lazyPreload: function ($item, $lazyImg) {
        var base = this, iterations = 0, isBackgroundImg;
        if ($lazyImg.prop("tagName") === "DIV") {
            $lazyImg.css("background-image", "url(" + $lazyImg.data("src") + ")");
            isBackgroundImg = true;
        } else {
            $lazyImg[0].src = $lazyImg.data("src");
        }
        function showImage() {
            $item.data("owl-loaded", "loaded").removeClass("loading");
            $lazyImg.removeAttr("data-src");
            if (base.options.lazyEffect === "fade") {
                $lazyImg.fadeIn(400);
            } else {
                $lazyImg.show();
            }
            if (typeof base.options.afterLazyLoad === "function") {
                base.options.afterLazyLoad.apply(this, [base.$elem]);
            }
        }

        function checkLazyImage() {
            iterations += 1;
            if (base.completeImg($lazyImg.get(0)) || isBackgroundImg === true) {
                showImage();
            } else if (iterations <= 100) {
                window.setTimeout(checkLazyImage, 100);
            } else {
                showImage();
            }
        }

        checkLazyImage();
    }, autoHeight: function () {
        var base = this, $currentimg = $(base.$owlItems[base.currentItem]).find("img"), iterations;

        function addHeight() {
            var $currentItem = $(base.$owlItems[base.currentItem]).height();
            base.wrapperOuter.css("height", $currentItem + "px");
            if (!base.wrapperOuter.hasClass("autoHeight")) {
                window.setTimeout(function () {
                    base.wrapperOuter.addClass("autoHeight");
                }, 0);
            }
        }

        function checkImage() {
            iterations += 1;
            if (base.completeImg($currentimg.get(0))) {
                addHeight();
            } else if (iterations <= 100) {
                window.setTimeout(checkImage, 100);
            } else {
                base.wrapperOuter.css("height", "");
            }
        }

        if ($currentimg.get(0) !== undefined) {
            iterations = 0;
            checkImage();
        } else {
            addHeight();
        }
    }, completeImg: function (img) {
        var naturalWidthType;
        if (!img.complete) {
            return false;
        }
        naturalWidthType = typeof img.naturalWidth;
        if (naturalWidthType !== "undefined" && img.naturalWidth === 0) {
            return false;
        }
        return true;
    }, onVisibleItems: function () {
        var base = this, i;
        if (base.options.addClassActive === true) {
            base.$owlItems.removeClass("active");
        }
        base.visibleItems = [];
        for (i = base.currentItem; i < base.currentItem + base.options.items; i += 1) {
            base.visibleItems.push(i);
            if (base.options.addClassActive === true) {
                $(base.$owlItems[i]).addClass("active");
            }
        }
        base.owl.visibleItems = base.visibleItems;
    }, transitionTypes: function (className) {
        var base = this;
        base.outClass = "owl-" + className + "-out";
        base.inClass = "owl-" + className + "-in";
    }, singleItemTransition: function () {
        var base = this, outClass = base.outClass, inClass = base.inClass, $currentItem = base.$owlItems.eq(base.currentItem), $prevItem = base.$owlItems.eq(base.prevItem), prevPos = Math.abs(base.positionsInArray[base.currentItem]) + base.positionsInArray[base.prevItem], origin = Math.abs(base.positionsInArray[base.currentItem]) + base.itemWidth / 2, animEnd = 'webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend';
        base.isTransition = true;
        base.$owlWrapper.addClass('owl-origin').css({"-webkit-transform-origin": origin + "px", "-moz-perspective-origin": origin + "px", "perspective-origin": origin + "px"});
        function transStyles(prevPos) {
            return{"position": "relative", "left": prevPos + "px"};
        }

        $prevItem.css(transStyles(prevPos, 10)).addClass(outClass).on(animEnd, function () {
            base.endPrev = true;
            $prevItem.off(animEnd);
            base.clearTransStyle($prevItem, outClass);
        });
        $currentItem.addClass(inClass).on(animEnd, function () {
            base.endCurrent = true;
            $currentItem.off(animEnd);
            base.clearTransStyle($currentItem, inClass);
        });
    }, clearTransStyle: function (item, classToRemove) {
        var base = this;
        item.css({"position": "", "left": ""}).removeClass(classToRemove);
        if (base.endPrev && base.endCurrent) {
            base.$owlWrapper.removeClass('owl-origin');
            base.endPrev = false;
            base.endCurrent = false;
            base.isTransition = false;
        }
    }, owlStatus: function () {
        var base = this;
        base.owl = {"userOptions": base.userOptions, "baseElement": base.$elem, "userItems": base.$userItems, "owlItems": base.$owlItems, "currentItem": base.currentItem, "prevItem": base.prevItem, "visibleItems": base.visibleItems, "isTouch": base.browser.isTouch, "browser": base.browser, "dragDirection": base.dragDirection};
    }, clearEvents: function () {
        var base = this;
        base.$elem.off(".owl owl mousedown.disableTextSelect");
        $(document).off(".owl owl");
        $(window).off("resize", base.resizer);
    }, unWrap: function () {
        var base = this;
        if (base.$elem.children().length !== 0) {
            base.$owlWrapper.unwrap();
            base.$userItems.unwrap().unwrap();
            if (base.owlControls) {
                base.owlControls.remove();
            }
        }
        base.clearEvents();
        base.$elem.attr("style", base.$elem.data("owl-originalStyles") || "").attr("class", base.$elem.data("owl-originalClasses"));
    }, destroy: function () {
        var base = this;
        base.stop();
        window.clearInterval(base.checkVisible);
        base.unWrap();
        base.$elem.removeData();
    }, reinit: function (newOptions) {
        var base = this, options = $.extend({}, base.userOptions, newOptions);
        base.unWrap();
        base.init(options, base.$elem);
    }, addItem: function (htmlString, targetPosition) {
        var base = this, position;
        if (!htmlString) {
            return false;
        }
        if (base.$elem.children().length === 0) {
            base.$elem.append(htmlString);
            base.setVars();
            return false;
        }
        base.unWrap();
        if (targetPosition === undefined || targetPosition === -1) {
            position = -1;
        } else {
            position = targetPosition;
        }
        if (position >= base.$userItems.length || position === -1) {
            base.$userItems.eq(-1).after(htmlString);
        } else {
            base.$userItems.eq(position).before(htmlString);
        }
        base.setVars();
    }, removeItem: function (targetPosition) {
        var base = this, position;
        if (base.$elem.children().length === 0) {
            return false;
        }
        if (targetPosition === undefined || targetPosition === -1) {
            position = -1;
        } else {
            position = targetPosition;
        }
        base.unWrap();
        base.$userItems.eq(position).remove();
        base.setVars();
    }};
    $.fn.owlCarousel = function (options) {
        return this.each(function () {
            if ($(this).data("owl-init") === true) {
                return false;
            }
            $(this).data("owl-init", true);
            var carousel = Object.create(Carousel);
            carousel.init(options, this);
            $.data(this, "owlCarousel", carousel);
        });
    };
    $.fn.owlCarousel.options = {items: 5, itemsCustom: false, itemsDesktop: [1199, 4], itemsDesktopSmall: [979, 3], itemsTablet: [768, 2], itemsTabletSmall: false, itemsMobile: [479, 1], singleItem: false, itemsScaleUp: false, slideSpeed: 200, paginationSpeed: 800, rewindSpeed: 1000, autoPlay: false, stopOnHover: false, navigation: false, navigationText: ["prev", "next"], rewindNav: true, scrollPerPage: false, pagination: true, paginationNumbers: false, responsive: true, responsiveRefreshRate: 200, responsiveBaseWidth: window, baseClass: "owl-carousel", theme: "owl-theme", lazyLoad: false, lazyFollow: true, lazyEffect: "fade", autoHeight: false, jsonPath: false, jsonSuccess: false, dragBeforeAnimFinish: true, mouseDrag: true, touchDrag: true, addClassActive: false, transitionStyle: false, beforeUpdate: false, afterUpdate: false, beforeInit: false, afterInit: false, beforeMove: false, afterMove: false, afterAction: false, startDragging: false, afterLazyLoad: false};
}(jQuery, window, document));
;
(function ($) {
    $.flexslider = function (el, options) {
        var slider = $(el);
        slider.vars = $.extend({}, $.flexslider.defaults, options);
        var namespace = slider.vars.namespace, msGesture = window.navigator && window.navigator.msPointerEnabled && window.MSGesture, touch = (("ontouchstart"in window) || msGesture || window.DocumentTouch && document instanceof DocumentTouch) && slider.vars.touch, eventType = "click touchend MSPointerUp keyup", watchedEvent = "", watchedEventClearTimer, vertical = slider.vars.direction === "vertical", reverse = slider.vars.reverse, carousel = (slider.vars.itemWidth > 0), fade = slider.vars.animation === "fade", asNav = slider.vars.asNavFor !== "", methods = {}, focused = true;
        $.data(el, "flexslider", slider);
        methods = {init: function () {
            slider.animating = false;
            slider.currentSlide = parseInt((slider.vars.startAt ? slider.vars.startAt : 0), 10);
            if (isNaN(slider.currentSlide))slider.currentSlide = 0;
            slider.animatingTo = slider.currentSlide;
            slider.atEnd = (slider.currentSlide === 0 || slider.currentSlide === slider.last);
            slider.containerSelector = slider.vars.selector.substr(0, slider.vars.selector.search(' '));
            slider.slides = $(slider.vars.selector, slider);
            slider.container = $(slider.containerSelector, slider);
            slider.count = slider.slides.length;
            slider.syncExists = $(slider.vars.sync).length > 0;
            if (slider.vars.animation === "slide")slider.vars.animation = "swing";
            slider.prop = (vertical) ? "top" : "marginLeft";
            slider.args = {};
            slider.manualPause = false;
            slider.stopped = false;
            slider.started = false;
            slider.startTimeout = null;
            slider.transitions = !slider.vars.video && !fade && slider.vars.useCSS && (function () {
                var obj = document.createElement('div'), props = ['perspectiveProperty', 'WebkitPerspective', 'MozPerspective', 'OPerspective', 'msPerspective'];
                for (var i in props) {
                    if (obj.style[props[i]] !== undefined) {
                        slider.pfx = props[i].replace('Perspective', '').toLowerCase();
                        slider.prop = "-" + slider.pfx + "-transform";
                        return true;
                    }
                }
                return false;
            }());
            slider.ensureAnimationEnd = '';
            if (slider.vars.controlsContainer !== "")slider.controlsContainer = $(slider.vars.controlsContainer).length > 0 && $(slider.vars.controlsContainer);
            if (slider.vars.manualControls !== "")slider.manualControls = $(slider.vars.manualControls).length > 0 && $(slider.vars.manualControls);
            if (slider.vars.randomize) {
                slider.slides.sort(function () {
                    return(Math.round(Math.random()) - 0.5);
                });
                slider.container.empty().append(slider.slides);
            }
            slider.doMath();
            slider.setup("init");
            if (slider.vars.controlNav)methods.controlNav.setup();
            if (slider.vars.directionNav)methods.directionNav.setup();
            if (slider.vars.keyboard && ($(slider.containerSelector).length === 1 || slider.vars.multipleKeyboard)) {
                $(document).bind('keyup', function (event) {
                    var keycode = event.keyCode;
                    if (!slider.animating && (keycode === 39 || keycode === 37)) {
                        var target = (keycode === 39) ? slider.getTarget('next') : (keycode === 37) ? slider.getTarget('prev') : false;
                        slider.flexAnimate(target, slider.vars.pauseOnAction);
                    }
                });
            }
            if (slider.vars.mousewheel) {
                slider.bind('mousewheel', function (event, delta, deltaX, deltaY) {
                    event.preventDefault();
                    var target = (delta < 0) ? slider.getTarget('next') : slider.getTarget('prev');
                    slider.flexAnimate(target, slider.vars.pauseOnAction);
                });
            }
            if (slider.vars.pausePlay)methods.pausePlay.setup();
            if (slider.vars.slideshow && slider.vars.pauseInvisible)methods.pauseInvisible.init();
            if (slider.vars.slideshow) {
                if (slider.vars.pauseOnHover) {
                    slider.hover(function () {
                        if (!slider.manualPlay && !slider.manualPause)slider.pause();
                    }, function () {
                        if (!slider.manualPause && !slider.manualPlay && !slider.stopped)slider.play();
                    });
                }
                if (!slider.vars.pauseInvisible || !methods.pauseInvisible.isHidden()) {
                    (slider.vars.initDelay > 0) ? slider.startTimeout = setTimeout(slider.play, slider.vars.initDelay) : slider.play();
                }
            }
            if (asNav)methods.asNav.setup();
            if (touch && slider.vars.touch)methods.touch();
            if (!fade || (fade && slider.vars.smoothHeight))$(window).bind("resize orientationchange focus", methods.resize);
            slider.find("img").attr("draggable", "false");
            setTimeout(function () {
                slider.vars.start(slider);
            }, 200);
        }, asNav: {setup: function () {
            slider.asNav = true;
            slider.animatingTo = Math.floor(slider.currentSlide / slider.move);
            slider.currentItem = slider.currentSlide;
            slider.slides.removeClass(namespace + "active-slide").eq(slider.currentItem).addClass(namespace + "active-slide");
            if (!msGesture) {
                slider.slides.on(eventType, function (e) {
                    e.preventDefault();
                    var $slide = $(this), target = $slide.index();
                    var posFromLeft = $slide.offset().left - $(slider).scrollLeft();
                    if (posFromLeft <= 0 && $slide.hasClass(namespace + 'active-slide')) {
                        slider.flexAnimate(slider.getTarget("prev"), true);
                    } else if (!$(slider.vars.asNavFor).data('flexslider').animating && !$slide.hasClass(namespace + "active-slide")) {
                        slider.direction = (slider.currentItem < target) ? "next" : "prev";
                        slider.flexAnimate(target, slider.vars.pauseOnAction, false, true, true);
                    }
                });
            } else {
                el._slider = slider;
                slider.slides.each(function () {
                    var that = this;
                    that._gesture = new MSGesture();
                    that._gesture.target = that;
                    that.addEventListener("MSPointerDown", function (e) {
                        e.preventDefault();
                        if (e.currentTarget._gesture)
                            e.currentTarget._gesture.addPointer(e.pointerId);
                    }, false);
                    that.addEventListener("MSGestureTap", function (e) {
                        e.preventDefault();
                        var $slide = $(this), target = $slide.index();
                        if (!$(slider.vars.asNavFor).data('flexslider').animating && !$slide.hasClass('active')) {
                            slider.direction = (slider.currentItem < target) ? "next" : "prev";
                            slider.flexAnimate(target, slider.vars.pauseOnAction, false, true, true);
                        }
                    });
                });
            }
        }}, controlNav: {setup: function () {
            if (!slider.manualControls) {
                methods.controlNav.setupPaging();
            } else {
                methods.controlNav.setupManual();
            }
        }, setupPaging: function () {
            var type = (slider.vars.controlNav === "thumbnails") ? 'control-thumbs' : 'control-paging', j = 1, item, slide;
            slider.controlNavScaffold = $('<ol class="' + namespace + 'control-nav ' + namespace + type + '"></ol>');
            if (slider.pagingCount > 1) {
                for (var i = 0; i < slider.pagingCount; i++) {
                    slide = slider.slides.eq(i);
                    item = (slider.vars.controlNav === "thumbnails") ? '<img src="' + slide.attr('data-thumb') + '"/>' : '<a>' + j + '</a>';
                    if ('thumbnails' === slider.vars.controlNav && true === slider.vars.thumbCaptions) {
                        var captn = slide.attr('data-thumbcaption');
                        if ('' != captn && undefined != captn)item += '<span class="' + namespace + 'caption">' + captn + '</span>';
                    }
                    slider.controlNavScaffold.append('<li>' + item + '</li>');
                    j++;
                }
            }
            (slider.controlsContainer) ? $(slider.controlsContainer).append(slider.controlNavScaffold) : slider.append(slider.controlNavScaffold);
            methods.controlNav.set();
            methods.controlNav.active();
            slider.controlNavScaffold.delegate('a, img', eventType, function (event) {
                event.preventDefault();
                if (watchedEvent === "" || watchedEvent === event.type) {
                    var $this = $(this), target = slider.controlNav.index($this);
                    if (!$this.hasClass(namespace + 'active')) {
                        slider.direction = (target > slider.currentSlide) ? "next" : "prev";
                        slider.flexAnimate(target, slider.vars.pauseOnAction);
                    }
                }
                if (watchedEvent === "") {
                    watchedEvent = event.type;
                }
                methods.setToClearWatchedEvent();
            });
        }, setupManual: function () {
            slider.controlNav = slider.manualControls;
            methods.controlNav.active();
            slider.controlNav.bind(eventType, function (event) {
                event.preventDefault();
                if (watchedEvent === "" || watchedEvent === event.type) {
                    var $this = $(this), target = slider.controlNav.index($this);
                    if (!$this.hasClass(namespace + 'active')) {
                        (target > slider.currentSlide) ? slider.direction = "next" : slider.direction = "prev";
                        slider.flexAnimate(target, slider.vars.pauseOnAction);
                    }
                }
                if (watchedEvent === "") {
                    watchedEvent = event.type;
                }
                methods.setToClearWatchedEvent();
            });
        }, set: function () {
            var selector = (slider.vars.controlNav === "thumbnails") ? 'img' : 'a';
            slider.controlNav = $('.' + namespace + 'control-nav li ' + selector, (slider.controlsContainer) ? slider.controlsContainer : slider);
        }, active: function () {
            slider.controlNav.removeClass(namespace + "active").eq(slider.animatingTo).addClass(namespace + "active");
        }, update: function (action, pos) {
            if (slider.pagingCount > 1 && action === "add") {
                slider.controlNavScaffold.append($('<li><a>' + slider.count + '</a></li>'));
            } else if (slider.pagingCount === 1) {
                slider.controlNavScaffold.find('li').remove();
            } else {
                slider.controlNav.eq(pos).closest('li').remove();
            }
            methods.controlNav.set();
            (slider.pagingCount > 1 && slider.pagingCount !== slider.controlNav.length) ? slider.update(pos, action) : methods.controlNav.active();
        }}, directionNav: {setup: function () {
            var directionNavScaffold = $('<ul class="' + namespace + 'direction-nav"><li><a class="' + namespace + 'prev" href="#">' + slider.vars.prevText + '</a></li><li><a class="' + namespace + 'next" href="#">' + slider.vars.nextText + '</a></li></ul>');
            if (slider.controlsContainer) {
                $(slider.controlsContainer).append(directionNavScaffold);
                slider.directionNav = $('.' + namespace + 'direction-nav li a', slider.controlsContainer);
            } else {
                slider.append(directionNavScaffold);
                slider.directionNav = $('.' + namespace + 'direction-nav li a', slider);
            }
            methods.directionNav.update();
            slider.directionNav.bind(eventType, function (event) {
                event.preventDefault();
                var target;
                if (watchedEvent === "" || watchedEvent === event.type) {
                    target = ($(this).hasClass(namespace + 'next')) ? slider.getTarget('next') : slider.getTarget('prev');
                    slider.flexAnimate(target, slider.vars.pauseOnAction);
                }
                if (watchedEvent === "") {
                    watchedEvent = event.type;
                }
                methods.setToClearWatchedEvent();
            });
        }, update: function () {
            var disabledClass = namespace + 'disabled';
            if (slider.pagingCount === 1) {
                slider.directionNav.addClass(disabledClass).attr('tabindex', '-1');
            } else if (!slider.vars.animationLoop) {
                if (slider.animatingTo === 0) {
                    slider.directionNav.removeClass(disabledClass).filter('.' + namespace + "prev").addClass(disabledClass).attr('tabindex', '-1');
                } else if (slider.animatingTo === slider.last) {
                    slider.directionNav.removeClass(disabledClass).filter('.' + namespace + "next").addClass(disabledClass).attr('tabindex', '-1');
                } else {
                    slider.directionNav.removeClass(disabledClass).removeAttr('tabindex');
                }
            } else {
                slider.directionNav.removeClass(disabledClass).removeAttr('tabindex');
            }
        }}, pausePlay: {setup: function () {
            var pausePlayScaffold = $('<div class="' + namespace + 'pauseplay"><a></a></div>');
            if (slider.controlsContainer) {
                slider.controlsContainer.append(pausePlayScaffold);
                slider.pausePlay = $('.' + namespace + 'pauseplay a', slider.controlsContainer);
            } else {
                slider.append(pausePlayScaffold);
                slider.pausePlay = $('.' + namespace + 'pauseplay a', slider);
            }
            methods.pausePlay.update((slider.vars.slideshow) ? namespace + 'pause' : namespace + 'play');
            slider.pausePlay.bind(eventType, function (event) {
                event.preventDefault();
                if (watchedEvent === "" || watchedEvent === event.type) {
                    if ($(this).hasClass(namespace + 'pause')) {
                        slider.manualPause = true;
                        slider.manualPlay = false;
                        slider.pause();
                    } else {
                        slider.manualPause = false;
                        slider.manualPlay = true;
                        slider.play();
                    }
                }
                if (watchedEvent === "") {
                    watchedEvent = event.type;
                }
                methods.setToClearWatchedEvent();
            });
        }, update: function (state) {
            (state === "play") ? slider.pausePlay.removeClass(namespace + 'pause').addClass(namespace + 'play').html(slider.vars.playText) : slider.pausePlay.removeClass(namespace + 'play').addClass(namespace + 'pause').html(slider.vars.pauseText);
        }}, touch: function () {
            var startX, startY, offset, cwidth, dx, startT, scrolling = false, localX = 0, localY = 0, accDx = 0;
            if (!msGesture) {
                el.addEventListener('touchstart', onTouchStart, false);
                function onTouchStart(e) {
                    if (slider.animating) {
                        e.preventDefault();
                    } else if ((window.navigator.msPointerEnabled) || e.touches.length === 1) {
                        slider.pause();
                        cwidth = (vertical) ? slider.h : slider.w;
                        startT = Number(new Date());
                        localX = e.touches[0].pageX;
                        localY = e.touches[0].pageY;
                        offset = (carousel && reverse && slider.animatingTo === slider.last) ? 0 : (carousel && reverse) ? slider.limit - (((slider.itemW + slider.vars.itemMargin) * slider.move) * slider.animatingTo) : (carousel && slider.currentSlide === slider.last) ? slider.limit : (carousel) ? ((slider.itemW + slider.vars.itemMargin) * slider.move) * slider.currentSlide : (reverse) ? (slider.last - slider.currentSlide + slider.cloneOffset) * cwidth : (slider.currentSlide + slider.cloneOffset) * cwidth;
                        startX = (vertical) ? localY : localX;
                        startY = (vertical) ? localX : localY;
                        el.addEventListener('touchmove', onTouchMove, false);
                        el.addEventListener('touchend', onTouchEnd, false);
                    }
                }

                function onTouchMove(e) {
                    localX = e.touches[0].pageX;
                    localY = e.touches[0].pageY;
                    dx = (vertical) ? startX - localY : startX - localX;
                    scrolling = (vertical) ? (Math.abs(dx) < Math.abs(localX - startY)) : (Math.abs(dx) < Math.abs(localY - startY));
                    var fxms = 500;
                    if (!scrolling || Number(new Date()) - startT > fxms) {
                        e.preventDefault();
                        if (!fade && slider.transitions) {
                            if (!slider.vars.animationLoop) {
                                dx = dx / ((slider.currentSlide === 0 && dx < 0 || slider.currentSlide === slider.last && dx > 0) ? (Math.abs(dx) / cwidth + 2) : 1);
                            }
                            slider.setProps(offset + dx, "setTouch");
                        }
                    }
                }

                function onTouchEnd(e) {
                    el.removeEventListener('touchmove', onTouchMove, false);
                    if (slider.animatingTo === slider.currentSlide && !scrolling && !(dx === null)) {
                        var updateDx = (reverse) ? -dx : dx, target = (updateDx > 0) ? slider.getTarget('next') : slider.getTarget('prev');
                        if (slider.canAdvance(target) && (Number(new Date()) - startT < 550 && Math.abs(updateDx) > 50 || Math.abs(updateDx) > cwidth / 2)) {
                            slider.flexAnimate(target, slider.vars.pauseOnAction);
                        } else {
                            if (!fade)slider.flexAnimate(slider.currentSlide, slider.vars.pauseOnAction, true);
                        }
                    }
                    el.removeEventListener('touchend', onTouchEnd, false);
                    startX = null;
                    startY = null;
                    dx = null;
                    offset = null;
                }
            } else {
                el.style.msTouchAction = "none";
                el._gesture = new MSGesture();
                el._gesture.target = el;
                el.addEventListener("MSPointerDown", onMSPointerDown, false);
                el._slider = slider;
                el.addEventListener("MSGestureChange", onMSGestureChange, false);
                el.addEventListener("MSGestureEnd", onMSGestureEnd, false);
                function onMSPointerDown(e) {
                    e.stopPropagation();
                    if (slider.animating) {
                        e.preventDefault();
                    } else {
                        slider.pause();
                        el._gesture.addPointer(e.pointerId);
                        accDx = 0;
                        cwidth = (vertical) ? slider.h : slider.w;
                        startT = Number(new Date());
                        offset = (carousel && reverse && slider.animatingTo === slider.last) ? 0 : (carousel && reverse) ? slider.limit - (((slider.itemW + slider.vars.itemMargin) * slider.move) * slider.animatingTo) : (carousel && slider.currentSlide === slider.last) ? slider.limit : (carousel) ? ((slider.itemW + slider.vars.itemMargin) * slider.move) * slider.currentSlide : (reverse) ? (slider.last - slider.currentSlide + slider.cloneOffset) * cwidth : (slider.currentSlide + slider.cloneOffset) * cwidth;
                    }
                }

                function onMSGestureChange(e) {
                    e.stopPropagation();
                    var slider = e.target._slider;
                    if (!slider) {
                        return;
                    }
                    var transX = -e.translationX, transY = -e.translationY;
                    accDx = accDx + ((vertical) ? transY : transX);
                    dx = accDx;
                    scrolling = (vertical) ? (Math.abs(accDx) < Math.abs(-transX)) : (Math.abs(accDx) < Math.abs(-transY));
                    if (e.detail === e.MSGESTURE_FLAG_INERTIA) {
                        setImmediate(function () {
                            el._gesture.stop();
                        });
                        return;
                    }
                    if (!scrolling || Number(new Date()) - startT > 500) {
                        e.preventDefault();
                        if (!fade && slider.transitions) {
                            if (!slider.vars.animationLoop) {
                                dx = accDx / ((slider.currentSlide === 0 && accDx < 0 || slider.currentSlide === slider.last && accDx > 0) ? (Math.abs(accDx) / cwidth + 2) : 1);
                            }
                            slider.setProps(offset + dx, "setTouch");
                        }
                    }
                }

                function onMSGestureEnd(e) {
                    e.stopPropagation();
                    var slider = e.target._slider;
                    if (!slider) {
                        return;
                    }
                    if (slider.animatingTo === slider.currentSlide && !scrolling && !(dx === null)) {
                        var updateDx = (reverse) ? -dx : dx, target = (updateDx > 0) ? slider.getTarget('next') : slider.getTarget('prev');
                        if (slider.canAdvance(target) && (Number(new Date()) - startT < 550 && Math.abs(updateDx) > 50 || Math.abs(updateDx) > cwidth / 2)) {
                            slider.flexAnimate(target, slider.vars.pauseOnAction);
                        } else {
                            if (!fade)slider.flexAnimate(slider.currentSlide, slider.vars.pauseOnAction, true);
                        }
                    }
                    startX = null;
                    startY = null;
                    dx = null;
                    offset = null;
                    accDx = 0;
                }
            }
        }, resize: function () {
            if (!slider.animating && slider.is(':visible')) {
                if (!carousel)slider.doMath();
                if (fade) {
                    methods.smoothHeight();
                } else if (carousel) {
                    slider.slides.width(slider.computedW);
                    slider.update(slider.pagingCount);
                    slider.setProps();
                }
                else if (vertical) {
                    slider.viewport.height(slider.h);
                    slider.setProps(slider.h, "setTotal");
                } else {
                    if (slider.vars.smoothHeight)methods.smoothHeight();
                    slider.newSlides.width(slider.computedW);
                    slider.setProps(slider.computedW, "setTotal");
                }
            }
        }, smoothHeight: function (dur) {
            if (!vertical || fade) {
                var $obj = (fade) ? slider : slider.viewport;
                (dur) ? $obj.animate({"height": slider.slides.eq(slider.animatingTo).height()}, dur) : $obj.height(slider.slides.eq(slider.animatingTo).height());
            }
        }, sync: function (action) {
            var $obj = $(slider.vars.sync).data("flexslider"), target = slider.animatingTo;
            switch (action) {
                case"animate":
                    $obj.flexAnimate(target, slider.vars.pauseOnAction, false, true);
                    break;
                case"play":
                    if (!$obj.playing && !$obj.asNav) {
                        $obj.play();
                    }
                    break;
                case"pause":
                    $obj.pause();
                    break;
            }
        }, uniqueID: function ($clone) {
            $clone.filter('[id]').add($clone.find('[id]')).each(function () {
                var $this = $(this);
                $this.attr('id', $this.attr('id') + '_clone');
            });
            return $clone;
        }, pauseInvisible: {visProp: null, init: function () {
            var prefixes = ['webkit', 'moz', 'ms', 'o'];
            if ('hidden'in document)return'hidden';
            for (var i = 0; i < prefixes.length; i++) {
                if ((prefixes[i] + 'Hidden')in document)
                    methods.pauseInvisible.visProp = prefixes[i] + 'Hidden';
            }
            if (methods.pauseInvisible.visProp) {
                var evtname = methods.pauseInvisible.visProp.replace(/[H|h]idden/, '') + 'visibilitychange';
                document.addEventListener(evtname, function () {
                    if (methods.pauseInvisible.isHidden()) {
                        if (slider.startTimeout)clearTimeout(slider.startTimeout); else slider.pause();
                    }
                    else {
                        if (slider.started)slider.play(); else(slider.vars.initDelay > 0) ? setTimeout(slider.play, slider.vars.initDelay) : slider.play();
                    }
                });
            }
        }, isHidden: function () {
            return document[methods.pauseInvisible.visProp] || false;
        }}, setToClearWatchedEvent: function () {
            clearTimeout(watchedEventClearTimer);
            watchedEventClearTimer = setTimeout(function () {
                watchedEvent = "";
            }, 3000);
        }};
        slider.flexAnimate = function (target, pause, override, withSync, fromNav) {
            if (!slider.vars.animationLoop && target !== slider.currentSlide) {
                slider.direction = (target > slider.currentSlide) ? "next" : "prev";
            }
            if (asNav && slider.pagingCount === 1)slider.direction = (slider.currentItem < target) ? "next" : "prev";
            if (!slider.animating && (slider.canAdvance(target, fromNav) || override) && slider.is(":visible")) {
                if (asNav && withSync) {
                    var master = $(slider.vars.asNavFor).data('flexslider');
                    slider.atEnd = target === 0 || target === slider.count - 1;
                    master.flexAnimate(target, true, false, true, fromNav);
                    slider.direction = (slider.currentItem < target) ? "next" : "prev";
                    master.direction = slider.direction;
                    if (Math.ceil((target + 1) / slider.visible) - 1 !== slider.currentSlide && target !== 0) {
                        slider.currentItem = target;
                        slider.slides.removeClass(namespace + "active-slide").eq(target).addClass(namespace + "active-slide");
                        target = Math.floor(target / slider.visible);
                    } else {
                        slider.currentItem = target;
                        slider.slides.removeClass(namespace + "active-slide").eq(target).addClass(namespace + "active-slide");
                        return false;
                    }
                }
                slider.animating = true;
                slider.animatingTo = target;
                if (pause)slider.pause();
                slider.vars.before(slider);
                if (slider.syncExists && !fromNav)methods.sync("animate");
                if (slider.vars.controlNav)methods.controlNav.active();
                if (!carousel)slider.slides.removeClass(namespace + 'active-slide').eq(target).addClass(namespace + 'active-slide');
                slider.atEnd = target === 0 || target === slider.last;
                if (slider.vars.directionNav)methods.directionNav.update();
                if (target === slider.last) {
                    slider.vars.end(slider);
                    if (!slider.vars.animationLoop)slider.pause();
                }
                if (!fade) {
                    var dimension = (vertical) ? slider.slides.filter(':first').height() : slider.computedW, margin, slideString, calcNext;
                    if (carousel) {
                        margin = slider.vars.itemMargin;
                        calcNext = ((slider.itemW + margin) * slider.move) * slider.animatingTo;
                        slideString = (calcNext > slider.limit && slider.visible !== 1) ? slider.limit : calcNext;
                    } else if (slider.currentSlide === 0 && target === slider.count - 1 && slider.vars.animationLoop && slider.direction !== "next") {
                        slideString = (reverse) ? (slider.count + slider.cloneOffset) * dimension : 0;
                    } else if (slider.currentSlide === slider.last && target === 0 && slider.vars.animationLoop && slider.direction !== "prev") {
                        slideString = (reverse) ? 0 : (slider.count + 1) * dimension;
                    } else {
                        slideString = (reverse) ? ((slider.count - 1) - target + slider.cloneOffset) * dimension : (target + slider.cloneOffset) * dimension;
                    }
                    slider.setProps(slideString, "", slider.vars.animationSpeed);
                    if (slider.transitions) {
                        if (!slider.vars.animationLoop || !slider.atEnd) {
                            slider.animating = false;
                            slider.currentSlide = slider.animatingTo;
                        }
                        slider.container.unbind("webkitTransitionEnd transitionend");
                        slider.container.bind("webkitTransitionEnd transitionend", function () {
                            clearTimeout(slider.ensureAnimationEnd);
                            slider.wrapup(dimension);
                        });
                        clearTimeout(slider.ensureAnimationEnd);
                        slider.ensureAnimationEnd = setTimeout(function () {
                            slider.wrapup(dimension);
                        }, slider.vars.animationSpeed + 100);
                    } else {
                        slider.container.animate(slider.args, slider.vars.animationSpeed, slider.vars.easing, function () {
                            slider.wrapup(dimension);
                        });
                    }
                } else {
                    if (!touch) {
                        slider.slides.eq(slider.currentSlide).css({"zIndex": 1}).animate({"opacity": 0}, slider.vars.animationSpeed, slider.vars.easing);
                        slider.slides.eq(target).css({"zIndex": 2}).animate({"opacity": 1}, slider.vars.animationSpeed, slider.vars.easing, slider.wrapup);
                    } else {
                        slider.slides.eq(slider.currentSlide).css({"opacity": 0, "zIndex": 1});
                        slider.slides.eq(target).css({"opacity": 1, "zIndex": 2});
                        slider.wrapup(dimension);
                    }
                }
                if (slider.vars.smoothHeight)methods.smoothHeight(slider.vars.animationSpeed);
            }
        };
        slider.wrapup = function (dimension) {
            if (!fade && !carousel) {
                if (slider.currentSlide === 0 && slider.animatingTo === slider.last && slider.vars.animationLoop) {
                    slider.setProps(dimension, "jumpEnd");
                } else if (slider.currentSlide === slider.last && slider.animatingTo === 0 && slider.vars.animationLoop) {
                    slider.setProps(dimension, "jumpStart");
                }
            }
            slider.animating = false;
            slider.currentSlide = slider.animatingTo;
            slider.vars.after(slider);
        };
        slider.animateSlides = function () {
            if (!slider.animating && focused)slider.flexAnimate(slider.getTarget("next"));
        };
        slider.pause = function () {
            clearInterval(slider.animatedSlides);
            slider.animatedSlides = null;
            slider.playing = false;
            if (slider.vars.pausePlay)methods.pausePlay.update("play");
            if (slider.syncExists)methods.sync("pause");
        };
        slider.play = function () {
            if (slider.playing)clearInterval(slider.animatedSlides);
            slider.animatedSlides = slider.animatedSlides || setInterval(slider.animateSlides, slider.vars.slideshowSpeed);
            slider.started = slider.playing = true;
            if (slider.vars.pausePlay)methods.pausePlay.update("pause");
            if (slider.syncExists)methods.sync("play");
        };
        slider.stop = function () {
            slider.pause();
            slider.stopped = true;
        };
        slider.canAdvance = function (target, fromNav) {
            var last = (asNav) ? slider.pagingCount - 1 : slider.last;
            return(fromNav) ? true : (asNav && slider.currentItem === slider.count - 1 && target === 0 && slider.direction === "prev") ? true : (asNav && slider.currentItem === 0 && target === slider.pagingCount - 1 && slider.direction !== "next") ? false : (target === slider.currentSlide && !asNav) ? false : (slider.vars.animationLoop) ? true : (slider.atEnd && slider.currentSlide === 0 && target === last && slider.direction !== "next") ? false : (slider.atEnd && slider.currentSlide === last && target === 0 && slider.direction === "next") ? false : true;
        };
        slider.getTarget = function (dir) {
            slider.direction = dir;
            if (dir === "next") {
                return(slider.currentSlide === slider.last) ? 0 : slider.currentSlide + 1;
            } else {
                return(slider.currentSlide === 0) ? slider.last : slider.currentSlide - 1;
            }
        };
        slider.setProps = function (pos, special, dur) {
            var target = (function () {
                var posCheck = (pos) ? pos : ((slider.itemW + slider.vars.itemMargin) * slider.move) * slider.animatingTo, posCalc = (function () {
                    if (carousel) {
                        return(special === "setTouch") ? pos : (reverse && slider.animatingTo === slider.last) ? 0 : (reverse) ? slider.limit - (((slider.itemW + slider.vars.itemMargin) * slider.move) * slider.animatingTo) : (slider.animatingTo === slider.last) ? slider.limit : posCheck;
                    } else {
                        switch (special) {
                            case"setTotal":
                                return(reverse) ? ((slider.count - 1) - slider.currentSlide + slider.cloneOffset) * pos : (slider.currentSlide + slider.cloneOffset) * pos;
                            case"setTouch":
                                return(reverse) ? pos : pos;
                            case"jumpEnd":
                                return(reverse) ? pos : slider.count * pos;
                            case"jumpStart":
                                return(reverse) ? slider.count * pos : pos;
                            default:
                                return pos;
                        }
                    }
                }());
                return(posCalc * -1) + "px";
            }());
            if (slider.transitions) {
                target = (vertical) ? "translate3d(0," + target + ",0)" : "translate3d(" + target + ",0,0)";
                dur = (dur !== undefined) ? (dur / 1000) + "s" : "0s";
                slider.container.css("-" + slider.pfx + "-transition-duration", dur);
                slider.container.css("transition-duration", dur);
            }
            slider.args[slider.prop] = target;
            if (slider.transitions || dur === undefined)slider.container.css(slider.args);
            slider.container.css('transform', target);
        };
        slider.setup = function (type) {
            if (!fade) {
                var sliderOffset, arr;
                if (type === "init") {
                    slider.viewport = $('<div class="' + namespace + 'viewport"></div>').css({"overflow": "hidden", "position": "relative"}).appendTo(slider).append(slider.container);
                    slider.cloneCount = 0;
                    slider.cloneOffset = 0;
                    if (reverse) {
                        arr = $.makeArray(slider.slides).reverse();
                        slider.slides = $(arr);
                        slider.container.empty().append(slider.slides);
                    }
                }
                if (slider.vars.animationLoop && !carousel) {
                    slider.cloneCount = 2;
                    slider.cloneOffset = 1;
                    if (type !== "init")slider.container.find('.clone').remove();
                    slider.container.append(methods.uniqueID(slider.slides.first().clone().addClass('clone')).attr('aria-hidden', 'true')).prepend(methods.uniqueID(slider.slides.last().clone().addClass('clone')).attr('aria-hidden', 'true'));
                }
                slider.newSlides = $(slider.vars.selector, slider);
                sliderOffset = (reverse) ? slider.count - 1 - slider.currentSlide + slider.cloneOffset : slider.currentSlide + slider.cloneOffset;
                if (vertical && !carousel) {
                    slider.container.height((slider.count + slider.cloneCount) * 200 + "%").css("position", "absolute").width("100%");
                    setTimeout(function () {
                        slider.newSlides.css({"display": "block"});
                        slider.doMath();
                        slider.viewport.height(slider.h);
                        slider.setProps(sliderOffset * slider.h, "init");
                    }, (type === "init") ? 100 : 0);
                } else {
                    slider.container.width((slider.count + slider.cloneCount) * 200 + "%");
                    slider.setProps(sliderOffset * slider.computedW, "init");
                    setTimeout(function () {
                        slider.doMath();
                        slider.newSlides.css({"width": slider.computedW, "float": "left", "display": "block"});
                        if (slider.vars.smoothHeight)methods.smoothHeight();
                    }, (type === "init") ? 100 : 0);
                }
            } else {
                slider.slides.css({"width": "100%", "float": "left", "marginRight": "-100%", "position": "relative"});
                if (type === "init") {
                    if (!touch) {
                        if (slider.vars.fadeFirstSlide == false) {
                            slider.slides.css({"opacity": 0, "display": "block", "zIndex": 1}).eq(slider.currentSlide).css({"zIndex": 2}).css({"opacity": 1});
                        } else {
                            slider.slides.css({"opacity": 0, "display": "block", "zIndex": 1}).eq(slider.currentSlide).css({"zIndex": 2}).animate({"opacity": 1}, slider.vars.animationSpeed, slider.vars.easing);
                        }
                    } else {
                        slider.slides.css({"opacity": 0, "display": "block", "webkitTransition": "opacity " + slider.vars.animationSpeed / 1000 + "s ease", "zIndex": 1}).eq(slider.currentSlide).css({"opacity": 1, "zIndex": 2});
                    }
                }
                if (slider.vars.smoothHeight)methods.smoothHeight();
            }
            if (!carousel)slider.slides.removeClass(namespace + "active-slide").eq(slider.currentSlide).addClass(namespace + "active-slide");
            slider.vars.init(slider);
        };
        slider.doMath = function () {
            var slide = slider.slides.first(), slideMargin = parseInt(slide.css('marginRight'), 10) || slider.vars.itemMargin, minItems = slider.vars.minItems, maxItems = slider.vars.maxItems;
            slider.w = (slider.viewport === undefined) ? slider.width() : slider.viewport.width();
            slider.h = slide.height();
            slider.boxPadding = slide.outerWidth() - slide.width();
            if (carousel) {
                slider.itemT = slider.vars.itemWidth + slideMargin;
                slider.minW = (minItems) ? minItems * slider.itemT : slider.w;
                slider.maxW = (maxItems) ? (maxItems * slider.itemT) - slideMargin : slider.w;
                slider.itemW = (slider.minW > slider.w) ? (slider.w - (slideMargin * (minItems - 1))) / minItems : (slider.maxW < slider.w) ? (slider.w - (slideMargin * (maxItems - 1))) / maxItems : (slider.vars.itemWidth > slider.w) ? slider.w : slider.vars.itemWidth;
                slider.visible = Math.floor(slider.w / (slider.itemW));
                slider.move = (slider.vars.move > 0 && slider.vars.move < slider.visible) ? slider.vars.move : slider.visible;
                slider.pagingCount = Math.ceil(((slider.count - slider.visible) / slider.move) + 1);
                slider.last = slider.pagingCount - 1;
                slider.limit = (slider.pagingCount === 1) ? 0 : (slider.vars.itemWidth > slider.w) ? (slider.itemW * (slider.count - 1)) + (slideMargin * (slider.count - 1)) : ((slider.itemW + slideMargin) * slider.count) - slider.w - slideMargin;
            } else {
                slider.itemW = slider.w;
                slider.pagingCount = slider.count;
                slider.last = slider.count - 1;
            }
            slider.computedW = slider.itemW - slider.boxPadding;
        };
        slider.update = function (pos, action) {
            slider.doMath();
            if (!carousel) {
                if (pos < slider.currentSlide) {
                    slider.currentSlide += 1;
                } else if (pos <= slider.currentSlide && pos !== 0) {
                    slider.currentSlide -= 1;
                }
                slider.animatingTo = slider.currentSlide;
            }
            if (slider.vars.controlNav && !slider.manualControls) {
                if ((action === "add" && !carousel) || slider.pagingCount > slider.controlNav.length) {
                    methods.controlNav.update("add");
                } else if ((action === "remove" && !carousel) || slider.pagingCount < slider.controlNav.length) {
                    if (carousel && slider.currentSlide > slider.last) {
                        slider.currentSlide -= 1;
                        slider.animatingTo -= 1;
                    }
                    methods.controlNav.update("remove", slider.last);
                }
            }
            if (slider.vars.directionNav)methods.directionNav.update();
        };
        slider.addSlide = function (obj, pos) {
            var $obj = $(obj);
            slider.count += 1;
            slider.last = slider.count - 1;
            if (vertical && reverse) {
                (pos !== undefined) ? slider.slides.eq(slider.count - pos).after($obj) : slider.container.prepend($obj);
            } else {
                (pos !== undefined) ? slider.slides.eq(pos).before($obj) : slider.container.append($obj);
            }
            slider.update(pos, "add");
            slider.slides = $(slider.vars.selector + ':not(.clone)', slider);
            slider.setup();
            slider.vars.added(slider);
        };
        slider.removeSlide = function (obj) {
            var pos = (isNaN(obj)) ? slider.slides.index($(obj)) : obj;
            slider.count -= 1;
            slider.last = slider.count - 1;
            if (isNaN(obj)) {
                $(obj, slider.slides).remove();
            } else {
                (vertical && reverse) ? slider.slides.eq(slider.last).remove() : slider.slides.eq(obj).remove();
            }
            slider.doMath();
            slider.update(pos, "remove");
            slider.slides = $(slider.vars.selector + ':not(.clone)', slider);
            slider.setup();
            slider.vars.removed(slider);
        };
        methods.init();
    };
    $(window).blur(function (e) {
        focused = false;
    }).focus(function (e) {
        focused = true;
    });
    $.flexslider.defaults = {namespace: "flex-", selector: ".slides > li", animation: "fade", easing: "swing", direction: "horizontal", reverse: false, animationLoop: true, smoothHeight: false, startAt: 0, slideshow: true, slideshowSpeed: 7000, animationSpeed: 600, initDelay: 0, randomize: false, fadeFirstSlide: true, thumbCaptions: false, pauseOnAction: true, pauseOnHover: false, pauseInvisible: true, useCSS: true, touch: true, video: false, controlNav: true, directionNav: true, prevText: "Previous", nextText: "Next", keyboard: true, multipleKeyboard: false, mousewheel: false, pausePlay: false, pauseText: "Pause", playText: "Play", controlsContainer: "", manualControls: "", sync: "", asNavFor: "", itemWidth: 0, itemMargin: 0, minItems: 1, maxItems: 0, move: 0, allowOneSlide: true, start: function () {
    }, before: function () {
    }, after: function () {
    }, end: function () {
    }, added: function () {
    }, removed: function () {
    }, init: function () {
    }};
    $.fn.flexslider = function (options) {
        if (options === undefined)options = {};
        if (typeof options === "object") {
            return this.each(function () {
                var $this = $(this), selector = (options.selector) ? options.selector : ".slides > li", $slides = $this.find(selector);
                if (($slides.length === 1 && options.allowOneSlide === true) || $slides.length === 0) {
                    $slides.fadeIn(400);
                    if (options.start)options.start($this);
                } else if ($this.data('flexslider') === undefined) {
                    new $.flexslider(this, options);
                }
            });
        } else {
            var $slider = $(this).data('flexslider');
            switch (options) {
                case"play":
                    $slider.play();
                    break;
                case"pause":
                    $slider.pause();
                    break;
                case"stop":
                    $slider.stop();
                    break;
                case"next":
                    $slider.flexAnimate($slider.getTarget("next"), true);
                    break;
                case"prev":
                case"previous":
                    $slider.flexAnimate($slider.getTarget("prev"), true);
                    break;
                default:
                    if (typeof options === "number")$slider.flexAnimate(options, true);
            }
        }
    };
})(jQuery);
window.IBEducator || (window.IBEducator = {});
(function () {
    'use strict';
    var lastTime = 0;
    var vendors = ['ms', 'moz', 'webkit', 'o'];
    for (var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
        window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame'];
        window.cancelAnimationFrame = window[vendors[x] + 'CancelAnimationFrame'] || window[vendors[x] + 'CancelRequestAnimationFrame'];
    }
    if (!window.requestAnimationFrame)
        window.requestAnimationFrame = function (callback, element) {
            var currTime = new Date().getTime();
            var timeToCall = Math.max(0, 16 - (currTime - lastTime));
            var id = window.setTimeout(function () {
                callback(currTime + timeToCall);
            }, timeToCall);
            lastTime = currTime + timeToCall;
            return id;
        };
    if (!window.cancelAnimationFrame)
        window.cancelAnimationFrame = function (id) {
            clearTimeout(id);
        };
}());
(function ($) {
    'use strict';
    function CustomRadio(radios) {
        this.radios = radios;
        this.init();
    }

    CustomRadio.prototype = {init: function () {
        var that = this;
        this.radios.each(function (i, radio) {
            var customRadio = $('<button class="custom-radio"></button>');
            if (radio.checked) {
                customRadio.addClass('checked');
            }
            customRadio.insertBefore(radio);
            customRadio.on('click', function (e) {
                e.preventDefault();
                that.onRadioClick(this);
            });
        });
    }, onRadioClick: function (radio) {
        var jRadio = $(radio);
        this.radios.each(function (i, radio) {
            $(radio).prev('button').removeClass('checked');
        });
        if (!jRadio.hasClass('checked')) {
            jRadio.addClass('checked');
            jRadio.next('input[type="radio"]').attr('checked', 'checked');
        } else {
            jRadio.removeClass('checked');
            jRadio.next('input[type="radio"]').removeAttr('checked');
        }
    }};
    IBEducator.customRadio = function (radios) {
        return new CustomRadio(radios);
    };
    function ToggleLesson(el) {
        this.el = $(el);
        this.init();
    }

    ToggleLesson.prototype = {init: function () {
        this.excerpt = this.el.find('.excerpt');
        if (!this.excerpt.length) {
            return;
        }
        this.addHandle();
    }, addHandle: function () {
        var that = this;
        this.handle = $('<span class="handle"></span>');
        this.handle.appendTo(this.el.find('h1'));
        this.handle.on('click', function (e) {
            e.preventDefault();
            that.toggle();
        });
    }, toggle: function () {
        if (this.el.hasClass('open')) {
            this.el.removeClass('open');
        } else {
            this.el.addClass('open');
        }
    }};
    IBEducator.toggleLesson = function (el) {
        return new ToggleLesson(el);
    };
    IBEducator.transitionEnd = function () {
        var names = {WebkitTransition: 'webkitTransitionEnd', MozTransition: 'transitionend', transition: 'transitionend'};
        return names[Modernizr.prefixed('transition')];
    };
    function delayEvent(func, threshold) {
        var timeout;
        threshold = threshold || 100;
        return function () {
            var obj = this, args = arguments;
            if (timeout)clearTimeout(timeout);
            timeout = setTimeout(function () {
                func.apply(obj, args);
                timeout = null;
            }, threshold);
        };
    }

    jQuery.fn['smartresize'] = function (fn) {
        return fn ? this.on('resize', delayEvent(fn)) : this.trigger('smartresize');
    };
})(jQuery);
var eduThemeObj = {"disableLightbox": "0"};
window.IBEducator || (window.IBEducator = {});
(function ($) {
    'use strict';
    var isTouch = Modernizr.touch;

    function initFWSlider() {
        var showCaption = function (caption) {
            if (!caption.length)return;
            if (Modernizr.cssanimations) {
                caption.addClass('in');
            } else {
                caption.stop().css({display: 'block', opacity: 0}).animate({opacity: 1}, {duration: 300});
            }
        };
        var hideCaption = function (caption) {
            if (!caption.length)return;
            if (Modernizr.cssanimations) {
                caption.removeClass('in');
            } else {
                caption.stop().animate({opacity: 0}, {duration: 300, complete: function () {
                    $(this).css('display', 'none');
                }});
            }
        };
        var sliders = $('.fw-slider'), slider, sliderArgs, autoScroll;
        if (sliders.length) {
            sliderArgs = {animation: 'fade', animationSpeed: 600, prevText: '', nextText: '', start: function (slider) {
                if (captions.length) {
                    resizeCaptions();
                }
                showCaption(slider.slides.eq(slider.currentSlide).find('> .slide-caption'));
            }, before: function (slider) {
                hideCaption(slider.slides.eq(slider.currentSlide).find('> .slide-caption'));
            }, after: function (slider) {
                showCaption(slider.slides.eq(slider.currentSlide).find('> .slide-caption'));
            }};
            for (var i = 0; i < sliders.length; ++i) {
                slider = sliders.eq(i);
                autoScroll = parseInt(slider.data('autoscroll'), 10);
                if (!isNaN(autoScroll) && autoScroll) {
                    sliderArgs.slideshow = true;
                    sliderArgs.slideshowSpeed = autoScroll * 1000;
                } else {
                    sliderArgs.slideshow = false;
                }
                slider.flexslider(sliderArgs);
            }
            var captions = $('div.slide-caption');
            var resizeCaptions = function () {
                var caption, flexslider;
                for (var i = 0; i < captions.length; ++i) {
                    caption = captions.eq(i);
                    flexslider = caption.closest('.flexslider');
                    caption.css({top: (flexslider.height() - caption.height()) * .5});
                }
            };
            if (captions.length) {
                resizeCaptions();
                $(window).smartresize(resizeCaptions);
                if (!Modernizr.cssanimations) {
                    captions.css('display', 'none');
                }
            }
        }
    }

    function initFlexslider() {
        var sliders = $('.flexslider:not(.fw-slider)'), slider, sliderArgs, autoScroll;
        if (sliders.length) {
            sliderArgs = {animation: 'fade', animationSpeed: 600, prevText: '', nextText: '', };
            for (var i = 0; i < sliders.length; ++i) {
                slider = sliders.eq(i);
                autoScroll = parseInt(slider.data('autoscroll'), 10);
                if (!isNaN(autoScroll) && autoScroll) {
                    sliderArgs.slideshow = true;
                    sliderArgs.slideshowSpeed = autoScroll * 1000;
                } else {
                    sliderArgs.slideshow = false;
                }
                slider.flexslider(sliderArgs);
            }
        }
    }

    function initMainNav() {
        var open = function (li, selector) {
            var nav = li.find(selector);
            nav.stop().css({display: 'block', opacity: 0}).animate({opacity: 1}, {duration: 200});
        };
        var close = function (li, selector) {
            var nav = li.find(selector);
            nav.stop().animate({opacity: 0}, {duration: 200, complete: function () {
                this.style.display = 'none';
            }});
        };
        $('#main-nav > .menu a').on('click', function (e) {
            var href = this.getAttribute('href');
            if (href === '' || href === '#') {
                e.preventDefault();
            }
        });
        $('#main-nav > .menu li.menu-item-has-children').each(function () {
            var jThis = $(this);
            jThis.hover(function () {
                open($(this), '> .sub-menu');
            }, function () {
                close($(this), '> .sub-menu');
            });
        });
        $('#user-nav').hover(function () {
            open($(this), '> .menu');
        }, function () {
            close($(this), '> .menu');
        });
    }

    function initMobileNav() {
        var menu = $('<div id="mobile-nav">');
        var inner = $('<div>');
        var body = $('body');
        var close = function () {
            if (Modernizr.csstransitions && Modernizr.csstransforms) {
                menu.one(IBEducator.transitionEnd(), function () {
                    this.style.display = 'none';
                    body.css({overflow: 'auto', width: 'auto'});
                });
                pageOverlay.one(IBEducator.transitionEnd(), function () {
                    this.style.display = 'none';
                });
                menu.removeClass('open');
                pageOverlay.removeClass('open');
            } else {
                menu.removeClass('open');
                pageOverlay.removeClass('open');
                menu.css({display: 'none', 'marginLeft': 0});
                pageOverlay.css('display', 'none');
                body.css({overflow: 'auto', width: 'auto'});
            }
        };
        var userNav = $('#user-nav').clone();
        if (userNav.length) {
            userNav.removeAttr('id').addClass('user-nav');
            inner.append(userNav);
        }
        var mobileNav = $('#main-nav > ul').clone();
        mobileNav.find('li.menu-item-has-children').each(function () {
            var trigger = $(this).find('> a');
            trigger.append('<span class="submenu-trigger"></span>');
            trigger.on('click', function (e) {
                e.preventDefault();
                $(this).parent().toggleClass('open');
            });
        });
        inner.append(mobileNav.removeAttr('id'));
        var authNav = $('#auth-nav').clone();
        if (authNav.length) {
            authNav.removeAttr('id').addClass('auth-nav');
            authNav.find('a.button').removeClass('button');
            inner.append(authNav);
        }
        inner.append($('#header-search > form').clone());
        var closeButton = $('<a id="close-mobile-nav" href="#">&times;</a>');
        closeButton.on('click', function (e) {
            e.preventDefault();
            close();
        });
        inner.append(closeButton);
        menu.append(inner);
        body.append(menu);
        var pageOverlay = $('<div id="page-overlay"></div>');
        pageOverlay.on('click', function (e) {
            e.preventDefault();
            close();
        });
        body.append(pageOverlay);
        var menuTrigger = $('<a id="mobile-nav-trigger" href="#"><span class="bar-1"></span><span class="bar-2"></span><span class="bar-3"></span></a>');
        menuTrigger.on('click', function (e) {
            e.preventDefault();
            var bodyWidth = body.width();
            body.css({overflow: 'hidden', width: bodyWidth + 'px'});
            pageOverlay.css('display', 'block').get(0).offsetWidth;
            pageOverlay.addClass('open');
            menu.css({display: 'block'}).get(0).offsetWidth;
            menu.addClass('open');
            if (!Modernizr.csstransforms) {
                menu.css('marginLeft', '-' + menu.outerWidth() + 'px');
            }
        });
        $('#header-container > .container').append(menuTrigger);
    }

    function initCoursesCarousel() {
        $('div.courses-carousel, div.posts-carousel').owlCarousel({items: 3, itemsCustom: [
            [0, 1],
            [640, 2],
            [960, 3]
        ], pagination: true});
    }

    function initLecturersCarousel() {
        $('div.lecturers-carousel').owlCarousel({itemsCustom: [
            [0, 1],
            [640, 2],
            [960, 3]
        ], pagination: true});
    }

    function headerSearch() {
        var container = $('#header-search');
        container.find('> button').on('click', function (e) {
            e.preventDefault();
            var container = $(this).parent();
            var form = container.find('> form');
            if (container.hasClass('open')) {
                $('#main-nav').fadeIn(200);
                container.removeClass('open');
                form.fadeOut(200);
            } else {
                $('#main-nav').fadeOut(200);
                container.addClass('open');
                form.fadeIn(200);
                form.find('input[type="text"]').focus();
            }
        });
    }

    function initShareLinksMenu() {
        var open = function (menu) {
            menu.stop().css({display: 'block', opacity: 0}).animate({opacity: 1}, {duration: 200});
        };
        var close = function (menu) {
            menu.stop().animate({opacity: 0}, {duration: 200, complete: function () {
                $(this).css('display', 'none');
            }});
        };
        if (isTouch) {
            $('.share-links-menu > a').on('click', function (e) {
                e.preventDefault();
                var menu = $(this).parent().find('> ul');
                if (menu.is(':visible')) {
                    close(menu);
                } else {
                    open(menu);
                }
            });
        } else {
            $('.share-links-menu').hover(function () {
                open($(this).find('> ul'));
            }, function () {
                close($(this).find('> ul'));
            });
        }
    }

    var IBFixedHeader = {ticking: false, lastScrollY: 0, init: function () {
        this.header = $('#page-header');
        if (!this.header.hasClass('fixed-header')) {
            return;
        }
        this.inner = $('#page-header-inner');
        this.initHeight = 94;
        this.fixedHeight = 60;
        this.lineHeightItems = $('#main-nav > .menu > li > a, #auth-nav .auth-nav-login, #auth-nav .auth-nav-register, #user-nav .user-menu-name, #main-logo > a');
        this.heightItems = $('#page-header-inner, #header-search > button');
        this.win = $(window);
        this.minTop = 0;
        this.initTop = 0;
        this.toolbarHeight = 0;
        this.logo = $('#main-logo img');
        this.logoMaxHeight = parseInt(this.logo.css('max-height'), 10);
        var body = $('body');
        if (body.hasClass('has-toolbar')) {
            this.initTop += 45;
            this.toolbarHeight = 45;
        }
        if (body.hasClass('admin-bar')) {
            this.initTop += 32;
            this.minTop = 32;
        }
        this.win.on('scroll', function () {
            IBFixedHeader.onScroll();
        });
        this.win.smartresize(function () {
            IBFixedHeader.onResize();
        });
        this.lastScrollY = this.win.scrollTop();
        IBFixedHeader.onResize();
    }, onScroll: function () {
        this.lastScrollY = this.win.scrollTop();
        if (!this.ticking) {
            requestAnimationFrame(function () {
                IBFixedHeader.update();
            });
            this.ticking = true;
        }
    }, update: function () {
        this.ticking = false;
        if (window.innerWidth < 980) {
            return;
        }
        var scrollY = this.lastScrollY, innerTop = 0, newHeight = 0;
        innerTop = this.initTop - scrollY;
        if (innerTop < this.minTop)innerTop = this.minTop;
        this.inner.css('top', innerTop + 'px');
        newHeight = this.initHeight - scrollY + this.toolbarHeight;
        if (newHeight < this.fixedHeight) {
            newHeight = this.fixedHeight;
        } else if (newHeight > this.initHeight) {
            newHeight = this.initHeight;
        }
        if (this.logoMaxHeight > 50) {
            var logoMaxHeight = this.logoMaxHeight - scrollY + this.toolbarHeight;
            if (logoMaxHeight < 50)logoMaxHeight = 50; else if (logoMaxHeight > this.logoMaxHeight)logoMaxHeight = this.logoMaxHeight;
            this.logo.css('maxHeight', logoMaxHeight + 'px');
        }
        this.lineHeightItems.css('lineHeight', newHeight + 'px');
        this.heightItems.css('height', newHeight + 'px');
    }, onResize: function () {
        if (window.innerWidth < 980) {
            this.inner.attr('style', '');
            this.lineHeightItems.attr('style', '');
            this.heightItems.attr('style', '');
        } else {
            this.update();
        }
    }};

    function initDropDowns() {
        var open = function (container) {
            var menu = container.find('> ul');
            container.addClass('open');
            menu.stop().css({display: 'block', opacity: 0}).animate({opacity: 1}, {duration: 200})
        };
        var close = function (container) {
            var menu = container.find('> ul');
            container.removeClass('open');
            menu.stop().animate({opacity: 0}, {duration: 200, complete: function () {
                $(this).css({display: 'none'});
            }})
        };
        if (isTouch) {
            $('.drop-down > a').on('click', function (e) {
                e.preventDefault();
                var container = $(this).parent();
                if (container.hasClass('open')) {
                    close(container);
                } else {
                    open(container);
                }
            });
        } else {
            $('.drop-down').hover(function () {
                open($(this));
            }, function () {
                close($(this));
            });
        }
    }

    if ($.validator) {
        $.validator.addMethod('wpusername', function (value, element) {
            return /^[a-z0-9_\-.*@ ]+$/i.test(value);
        });
        $('#loginform').validate({errorPlacement: function () {
        }, rules: {log: {required: true, wpusername: true}, pwd: 'required', }});
        $('#registerform').validate({errorPlacement: function () {
        }, rules: {user_login: 'wpusername'}});
    }
    initMainNav();
    initMobileNav();
    IBFixedHeader.init();
    $(document).on('ready', function () {
        headerSearch();
        initShareLinksMenu();
        initFlexslider();
        if (eduThemeObj.disableLightbox === "0") {
            $('.gallery').each(function () {
                $(this).magnificPopup({type: 'image', image: {titleSrc: function (item) {
                    return item.el.find('> img').attr('alt');
                }}, delegate: 'a', gallery: {enabled: true}});
            });
            $('a').each(function (i) {
                var dataRel = this.getAttribute('data-rel');
                var forPrettyPhoto = dataRel && dataRel.indexOf('prettyPhoto') !== -1 && jQuery.prettyPhoto;
                if (!/\.(jpg|jpeg|png)$/i.test(this.href) || forPrettyPhoto) {
                    return;
                }
                if (this.parentNode.className.indexOf('gallery-icon') !== -1)return;
                $(this).magnificPopup({type: 'image'});
            });
        }
        initDropDowns();
        $('article.lesson-compact').each(function () {
            IBEducator.toggleLesson(this);
        });
        var paymentRadios = IBEducator.customRadio($('ul.ib-edu-payment-method input[type="radio"]'));
        $('.ib-edu-answers').each(function (i, answer) {
            var customRadios = IBEducator.customRadio($('input[type="radio"]', answer));
        });
        $('#back-to-top').on('click', function (e) {
            e.preventDefault();
            $('html, body').stop().animate({scrollTop: 0}, {duration: 600});
        });
    });
    $(window).on('load', function () {
        initFWSlider();
        initCoursesCarousel();
        initLecturersCarousel();
    });
})(jQuery);