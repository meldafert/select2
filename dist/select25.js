/**
 * Copyright 2019 Igor Vaynberg and Select2 contributors
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated
 * documentation files (the "Software"), to deal in the Software without restriction, including without limitation the
 * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit
 * persons to whom the Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the
 * Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE
 * WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
 * COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
 * OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 *
 * Bundle of select2
 * Generated: 2019-06-27
 * Version: 5.0.0-snapshot
 * Dependencies:
 *
 * tslib -- 1.9.3
 *
 * preact -- 10.0.0-beta.3
 */

!(function(e, t) {
    'object' == typeof exports && 'undefined' != typeof module
        ? t(exports)
        : 'function' == typeof define && define.amd
        ? define(['exports'], t)
        : t(((e = e || self).select25 = {}));
})(this, function(e) {
    'use strict';
    var o = function(e, t) {
        return (o =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
                function(e, t) {
                    e.__proto__ = t;
                }) ||
            function(e, t) {
                for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
            })(e, t);
    };
    function t(e, t) {
        function n() {
            this.constructor = e;
        }
        o(e, t), (e.prototype = null === t ? Object.create(t) : ((n.prototype = t.prototype), new n()));
    }
    var C = function() {
        return (C =
            Object.assign ||
            function(e) {
                for (var t, n = 1, o = arguments.length; n < o; n++)
                    for (var r in (t = arguments[n])) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                return e;
            }).apply(this, arguments);
    };
    function h(s, a, i, l) {
        return new (i || (i = Promise))(function(e, t) {
            function n(e) {
                try {
                    r(l.next(e));
                } catch (e) {
                    t(e);
                }
            }
            function o(e) {
                try {
                    r(l.throw(e));
                } catch (e) {
                    t(e);
                }
            }
            function r(t) {
                t.done
                    ? e(t.value)
                    : new i(function(e) {
                          e(t.value);
                      }).then(n, o);
            }
            r((l = l.apply(s, a || [])).next());
        });
    }
    function v(n, o) {
        var r,
            s,
            a,
            e,
            i = {
                label: 0,
                sent: function() {
                    if (1 & a[0]) throw a[1];
                    return a[1];
                },
                trys: [],
                ops: []
            };
        return (
            (e = { next: t(0), throw: t(1), return: t(2) }),
            'function' == typeof Symbol &&
                (e[Symbol.iterator] = function() {
                    return this;
                }),
            e
        );
        function t(t) {
            return function(e) {
                return (function(t) {
                    if (r) throw new TypeError('Generator is already executing.');
                    for (; i; )
                        try {
                            if (
                                ((r = 1),
                                s &&
                                    (a =
                                        2 & t[0]
                                            ? s.return
                                            : t[0]
                                            ? s.throw || ((a = s.return) && a.call(s), 0)
                                            : s.next) &&
                                    !(a = a.call(s, t[1])).done)
                            )
                                return a;
                            switch (((s = 0), a && (t = [2 & t[0], a.value]), t[0])) {
                                case 0:
                                case 1:
                                    a = t;
                                    break;
                                case 4:
                                    return i.label++, { value: t[1], done: !1 };
                                case 5:
                                    i.label++, (s = t[1]), (t = [0]);
                                    continue;
                                case 7:
                                    (t = i.ops.pop()), i.trys.pop();
                                    continue;
                                default:
                                    if (
                                        !(a = 0 < (a = i.trys).length && a[a.length - 1]) &&
                                        (6 === t[0] || 2 === t[0])
                                    ) {
                                        i = 0;
                                        continue;
                                    }
                                    if (3 === t[0] && (!a || (t[1] > a[0] && t[1] < a[3]))) {
                                        i.label = t[1];
                                        break;
                                    }
                                    if (6 === t[0] && i.label < a[1]) {
                                        (i.label = a[1]), (a = t);
                                        break;
                                    }
                                    if (a && i.label < a[2]) {
                                        (i.label = a[2]), i.ops.push(t);
                                        break;
                                    }
                                    a[2] && i.ops.pop(), i.trys.pop();
                                    continue;
                            }
                            t = o.call(n, i);
                        } catch (e) {
                            (t = [6, e]), (s = 0);
                        } finally {
                            r = a = 0;
                        }
                    if (5 & t[0]) throw t[1];
                    return { value: t[0] ? t[1] : void 0, done: !0 };
                })([t, e]);
            };
        }
    }
    var b,
        n,
        r,
        u,
        c,
        w = {},
        R = [],
        p = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|^--/i;
    function S(e, t) {
        for (var n in t) e[n] = t[n];
        return e;
    }
    function _(e) {
        var t = e.parentNode;
        t && t.removeChild(e);
    }
    function D(e, t, n) {
        var o,
            r,
            s,
            a,
            i = arguments;
        if (((t = S({}, t)), 3 < arguments.length)) for (n = [n], o = 3; o < arguments.length; o++) n.push(i[o]);
        if ((null != n && (t.children = n), null != e && null != e.defaultProps))
            for (r in e.defaultProps) void 0 === t[r] && (t[r] = e.defaultProps[r]);
        return (a = t.key), null != (s = t.ref) && delete t.ref, null != a && delete t.key, l(e, t, a, s);
    }
    function l(e, t, n, o) {
        var r = {
            type: e,
            props: t,
            key: n,
            ref: o,
            __k: null,
            __p: null,
            __b: 0,
            __e: null,
            l: null,
            __c: null,
            constructor: void 0
        };
        return b.vnode && b.vnode(r), r;
    }
    function k(e) {
        return e.children;
    }
    function M(e) {
        if (null == e || 'boolean' == typeof e) return null;
        if ('string' == typeof e || 'number' == typeof e) return l(null, e, null, null);
        if (null == e.__e && null == e.__c) return e;
        var t = l(e.type, e.props, e.key, null);
        return (t.__e = e.__e), t;
    }
    function x(e, t) {
        (this.props = e), (this.context = t);
    }
    function s(e) {
        !e.__d && (e.__d = !0) && 1 === n.push(e) && (b.debounceRendering || r)(a);
    }
    function a() {
        var e;
        for (
            n.sort(function(e, t) {
                return t.__v.__b - e.__v.__b;
            });
            (e = n.pop());

        )
            e.__d && e.forceUpdate(!1);
    }
    function I(e, t, n, o, r, s, a, i) {
        var l,
            u,
            c,
            p,
            d,
            f,
            h,
            v,
            m = t.__k || E(t.props.children, (t.__k = []), M, !0),
            g = (n && n.__k) || R,
            y = g.length;
        if (i == w)
            if ((i = null) != s) i = s[0];
            else for (u = 0; !i && u < y; u++) i = g[u] && g[u].__e;
        for (u = 0; u < m.length; u++)
            if (null != (l = m[u] = M(m[u]))) {
                if (
                    ((l.__p = t),
                    (l.__b = t.__b + 1),
                    null === (p = g[u]) || (p && l.key == p.key && l.type === p.type))
                )
                    g[u] = void 0;
                else
                    for (c = 0; c < y; c++) {
                        if ((p = g[c]) && l.key == p.key && l.type === p.type) {
                            g[c] = void 0;
                            break;
                        }
                        p = null;
                    }
                if (
                    ((d = P(e, l, (p = p || w), o, r, s, a, null, i)),
                    (c = l.ref) && p.ref != c && (v || (v = [])).push(c, l.__c || d),
                    null != d)
                ) {
                    if ((null == h && (h = d), null != l.l)) (d = l.l), (l.l = null);
                    else if (s == p || d != i || null == d.parentNode)
                        e: if (null == i || i.parentNode !== e) e.appendChild(d);
                        else {
                            for (f = i, c = 0; (f = f.nextSibling) && c < y; c += 2) if (f == d) break e;
                            e.insertBefore(d, i);
                        }
                    (i = d.nextSibling), 'function' == typeof t.type && (t.l = d);
                }
            }
        if (((t.__e = h), null != s && 'function' != typeof t.type)) for (u = s.length; u--; ) null != s[u] && _(s[u]);
        for (u = y; u--; ) null != g[u] && F(g[u], t);
        if (v) for (u = 0; u < v.length; u++) A(v[u], v[++u], t);
    }
    function E(e, t, n, o) {
        if ((null == t && (t = []), null == e || 'boolean' == typeof e)) o && t.push(null);
        else if (Array.isArray(e)) for (var r = 0; r < e.length; r++) E(e[r], t, n, o);
        else t.push(n ? n(e) : e);
        return t;
    }
    function L(e, t, n, o, r) {
        var s, a, i, l;
        if ('style' === (t = r ? ('className' === t ? 'class' : t) : 'class' === t ? 'className' : t))
            for (a in (s = S(S({}, o), n)))
                (n || w)[a] !== (o || w)[a] &&
                    e.style.setProperty(
                        '-' === a[0] && '-' === a[1] ? a : a.replace(u, '-$&'),
                        n && a in n ? ('number' == typeof s[a] && !1 === p.test(a) ? s[a] + 'px' : s[a]) : ''
                    );
        else if ('o' === t[0] && 'n' === t[1])
            (i = t !== (t = t.replace(/Capture$/, ''))),
                (t = ((l = t.toLowerCase()) in e ? l : t).slice(2)),
                n ? (o || e.addEventListener(t, d, i), ((e.u || (e.u = {}))[t] = n)) : e.removeEventListener(t, d, i);
        else if ('list' !== t && 'tagName' !== t && !r && t in e)
            if (e.length && 'value' == t) for (t = e.length; t--; ) e.options[t].selected = e.options[t].value == n;
            else e[t] = null == n ? '' : n;
        else
            'function' != typeof n &&
                'dangerouslySetInnerHTML' !== t &&
                (t !== (t = t.replace(/^xlink:?/, ''))
                    ? null == n || !1 === n
                        ? e.removeAttributeNS(c, t.toLowerCase())
                        : e.setAttributeNS(c, t.toLowerCase(), n)
                    : null == n || !1 === n
                    ? e.removeAttribute(t)
                    : e.setAttribute(t, n));
    }
    function d(e) {
        return this.u[e.type](b.event ? b.event(e) : e);
    }
    function P(e, t, n, o, r, s, a, i, l) {
        var u,
            c,
            p,
            d,
            f,
            h,
            v,
            m,
            g,
            y,
            _ = t.type;
        if (void 0 !== t.constructor) return null;
        (u = b.__b) && u(t);
        try {
            e: if ('function' == typeof _) {
                if (
                    ((m = t.props),
                    (g = (u = _.contextType) && o[u.__c]),
                    (y = u ? (g ? g.props.value : u.__p) : o),
                    n.__c
                        ? (v = (c = t.__c = n.__c).__p = c.__E)
                        : (_.prototype && _.prototype.render
                              ? (t.__c = c = new _(m, y))
                              : ((t.__c = c = new x(m, y)), (c.constructor = _), (c.render = O)),
                          g && g.sub(c),
                          (c.props = m),
                          c.state || (c.state = {}),
                          (c.context = y),
                          (c.__n = o),
                          (p = c.__d = !0),
                          (c.__h = [])),
                    null == c.__s && (c.__s = c.state),
                    null != _.getDerivedStateFromProps &&
                        S(c.__s == c.state ? (c.__s = S({}, c.__s)) : c.__s, _.getDerivedStateFromProps(m, c.__s)),
                    p)
                )
                    null == _.getDerivedStateFromProps && null != c.componentWillMount && c.componentWillMount(),
                        null != c.componentDidMount && a.push(c);
                else {
                    if (
                        (null == _.getDerivedStateFromProps &&
                            null == i &&
                            null != c.componentWillReceiveProps &&
                            c.componentWillReceiveProps(m, y),
                        !i && null != c.shouldComponentUpdate && !1 === c.shouldComponentUpdate(m, c.__s, y))
                    ) {
                        (c.props = m), (c.state = c.__s), (c.__d = !1), ((c.__v = t).__e = n.__e), (t.__k = n.__k);
                        break e;
                    }
                    null != c.componentWillUpdate && c.componentWillUpdate(m, c.__s, y);
                }
                (d = c.props),
                    (f = c.state),
                    (c.context = y),
                    (c.props = m),
                    (c.state = c.__s),
                    (u = b.__r) && u(t),
                    (c.__d = !1),
                    (c.__v = t),
                    (c.__P = e);
                try {
                    E(
                        null != (u = c.render(c.props, c.state, c.context)) && u.type == k && null == u.key
                            ? u.props.children
                            : u,
                        (t.__k = []),
                        M,
                        !0
                    );
                } catch (e) {
                    if ((u = b.__E) && u(e, t, n)) break e;
                    throw e;
                }
                for (
                    null != c.getChildContext && (o = S(S({}, o), c.getChildContext())),
                        p || null == c.getSnapshotBeforeUpdate || (h = c.getSnapshotBeforeUpdate(d, f)),
                        I(e, t, n, o, r, s, a, l),
                        c.base = t.__e;
                    (u = c.__h.pop());

                )
                    u.call(c);
                p || null == d || null == c.componentDidUpdate || c.componentDidUpdate(d, f, h),
                    v && (c.__E = c.__p = null);
            } else
                t.__e = (function(e, t, n, o, r, s, a) {
                    var i,
                        l,
                        u,
                        c,
                        p = n.props,
                        d = t.props;
                    if (((r = 'svg' === t.type || r), null == e && null != s))
                        for (i = 0; i < s.length; i++)
                            if (null != (l = s[i]) && (null === t.type ? 3 === l.nodeType : l.localName === t.type)) {
                                (e = l), (s[i] = null);
                                break;
                            }
                    if (null == e) {
                        if (null === t.type) return document.createTextNode(d);
                        (e = r
                            ? document.createElementNS('http://www.w3.org/2000/svg', t.type)
                            : document.createElement(t.type)),
                            (s = null);
                    }
                    return (
                        null === t.type
                            ? p !== d && (e.data = d)
                            : t !== n &&
                              (null != s && (s = R.slice.call(e.childNodes)),
                              (u = (p = n.props || w).dangerouslySetInnerHTML),
                              ((c = d.dangerouslySetInnerHTML) || u) &&
                                  null == s &&
                                  ((c && u && c.__html == u.__html) || (e.innerHTML = (c && c.__html) || '')),
                              d.multiple && (e.multiple = d.multiple),
                              I(e, t, n, o, 'foreignObject' !== t.type && r, s, a, w),
                              (function(e, t, n, o) {
                                  var r,
                                      s,
                                      a = Object.keys(t).sort();
                                  for (r = 0; r < a.length; r++)
                                      'children' === (s = a[r]) ||
                                          'key' === s ||
                                          (n && ('value' === s || 'checked' === s ? e : n)[s] === t[s]) ||
                                          L(e, s, t[s], n[s], o);
                                  for (r in n) 'children' === r || 'key' === r || r in t || L(e, r, null, n[r], o);
                              })(e, d, p, r)),
                        e
                    );
                })(n.__e, t, n, o, r, s, a);
            (u = b.diffed) && u(t);
        } catch (e) {
            T(e, t.__p);
        }
        return t.__e;
    }
    function i(e, t) {
        for (var n; (n = e.pop()); )
            try {
                n.componentDidMount();
            } catch (e) {
                T(e, n.__v.__p);
            }
        b.__c && b.__c(t);
    }
    function A(e, t, n) {
        try {
            'function' == typeof e ? e(t) : (e.current = t);
        } catch (e) {
            T(e, n);
        }
    }
    function F(e, t, n) {
        var o, r, s;
        if (
            (b.unmount && b.unmount(e),
            (o = e.ref) && A(o, null, t),
            n || 'function' == typeof e.type || (n = null != (r = e.__e)),
            (e.__e = e.l = null),
            null != (o = e.__c))
        ) {
            if (o.componentWillUnmount)
                try {
                    o.componentWillUnmount();
                } catch (e) {
                    T(e, t);
                }
            o.base = o.__P = null;
        }
        if ((o = e.__k)) for (s = 0; s < o.length; s++) o[s] && F(o[s], t, n);
        null != r && _(r);
    }
    function O(e, t, n) {
        return this.constructor(e, n);
    }
    function T(t, e) {
        var n;
        for (b.__e && b.__e(t, e); e; e = e.__p)
            if ((n = e.__c) && !n.__p)
                try {
                    if (n.constructor && null != n.constructor.getDerivedStateFromError)
                        n.setState(n.constructor.getDerivedStateFromError(t));
                    else {
                        if (null == n.componentDidCatch) continue;
                        n.componentDidCatch(t);
                    }
                    return s((n.__E = n));
                } catch (e) {
                    t = e;
                }
        throw t;
    }
    function f(e, t, n) {
        var o, r;
        b.__p && b.__p(e, t),
            (o = t.__k),
            (e = D(k, null, [e])),
            (r = []),
            P(
                t,
                n ? e : (t.__k = e),
                o || w,
                w,
                void 0 !== t.ownerSVGElement,
                n ? [n] : o ? null : R.slice.call(t.childNodes),
                r,
                !1,
                n || w
            ),
            i(r, e);
    }
    function m() {
        if (!document.getElementById('s25-live')) {
            var e = document.createElement('div');
            e.setAttribute('id', 's25-live'),
                e.setAttribute('class', 's25-offscreen s25-live'),
                document.body.appendChild(e);
            var t = document.createElement('div');
            t.setAttribute('id', 's25-live-assertive'),
                t.setAttribute('role', 'log'),
                t.setAttribute('aria-live', 'assertive'),
                t.setAttribute('aria-relevant', 'additions'),
                e.appendChild(t);
            var n = document.createElement('div');
            n.setAttribute('id', 's25-live-polite'),
                n.setAttribute('role', 'log'),
                n.setAttribute('aria-live', 'polite'),
                n.setAttribute('aria-relevant', 'additions'),
                e.appendChild(n);
        }
    }
    function g(e) {
        !(function(e, t) {
            var n = document.createElement('div');
            n.appendChild(document.createTextNode(e)), t.appendChild(n);
            var o = document.getElementById('s25-live-assertive');
            for (; o.firstChild && o.firstChild !== n; ) o.removeChild(o.firstChild);
            o = document.getElementById('s25-live-polite');
            for (; o.firstChild && o.firstChild !== n; ) o.removeChild(o.firstChild);
        })(e, document.getElementById('s25-live-polite'));
    }
    (b = {}),
        (x.prototype.setState = function(e, t) {
            var n = (this.__s !== this.state && this.__s) || (this.__s = S({}, this.state));
            ('function' == typeof e && !(e = e(n, this.props))) || S(n, e),
                null != e && this.__v && (t && this.__h.push(t), s(this));
        }),
        (x.prototype.forceUpdate = function(e) {
            var t,
                n,
                o,
                r = this.__v,
                s = this.__v.__e,
                a = this.__P;
            a &&
                ((t = !1 !== e),
                (n = []),
                (o = P(
                    a,
                    r,
                    S({}, r),
                    this.__n,
                    void 0 !== a.ownerSVGElement,
                    null,
                    n,
                    t,
                    null == s
                        ? (function e(t, n) {
                              if (null == n) return t.__p ? e(t.__p, t.__p.__k.indexOf(t) + 1) : null;
                              for (var o; n < t.__k.length; n++)
                                  if (null != (o = t.__k[n])) return 'function' != typeof o.type ? o.__e : e(o, 0);
                              return 'function' == typeof t.type ? e(t) : null;
                          })(r)
                        : s
                )),
                i(n, r),
                o != s &&
                    (function e(t) {
                        var n, o;
                        if (null != (t = t.__p) && null != t.__c) {
                            for (t.__e = t.__c.base = null, n = 0; n < t.__k.length; n++)
                                if (null != (o = t.__k[n]) && null != o.__e) {
                                    t.__e = t.__c.base = o.__e;
                                    break;
                                }
                            return e(t);
                        }
                    })(r)),
                e && e();
        }),
        (x.prototype.render = k),
        (n = []),
        (r = 'function' == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout),
        (u = /[A-Z]/g),
        (c = 'http://www.w3.org/1999/xlink');
    var y = new Map();
    function V(e) {
        var t = y.get('en_us');
        if (!e) return t;
        if ('string' != typeof e) return e;
        var n = y.get(e);
        return n || t;
    }
    function N(e) {
        for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
        for (var o = 1; o < arguments.length; o++)
            for (var r in arguments[o])
                arguments[o].hasOwnProperty(r) &&
                    ('object' == typeof e[r] && 'object' == typeof arguments[o][r]
                        ? N(e[r], arguments[o][r])
                        : (e[r] = arguments[o][r]));
        return e;
    }
    y.set('en_us', {
        noSearchResults: function() {
            return 'No results available';
        },
        searchResultsLoading: function() {
            return 'Loading...';
        },
        removeButtonTitle: function() {
            return 'Remove selected values';
        },
        clearButtonTitle: function() {
            return 'Clear selection';
        },
        valueAdded: function(e) {
            return e + ' added';
        },
        minimumCharactersMessage: function(e, t) {
            var n = t - e;
            return 'Please enter ' + n + ' more character' + (1 < n ? 's' : '');
        },
        multiSelectInstructions: function() {
            return "Items can be removed from this list box by selecting them and activating 'Remove selected values' button. Items can be added by selecting them in the adjacent combobox.";
        }
    });
    var U,
        B,
        j = function(t, e) {
            if (!e.length) return t;
            var n = e.shift();
            return (
                void 0 === n ||
                    (H(t) &&
                        H(n) &&
                        Object.keys(n).forEach(function(e) {
                            H(n[e]) ? (t[e] || (t[e] = {}), j(t[e], [n[e]])) : (t[e] = n[e]);
                        })),
                j(t, e)
            );
        },
        H = function(e) {
            return (
                (function(e) {
                    return null !== e && 'object' == typeof e;
                })(e) && !Array.isArray(e)
            );
        };
    function q() {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        for (var n = [], o = {}.hasOwnProperty, r = 0, s = e; r < s.length; r++) {
            var a = s[r];
            if ('string' == typeof a) n.push(a);
            else if ('object' == typeof a) for (var i in a) o.call(a, i) && a[i] && n.push(i);
        }
        return n.join(' ');
    }
    ((B = U || (U = {})).ArrowDown = 'ArrowDown'),
        (B.ArrowUp = 'ArrowUp'),
        (B.ArrowLeft = 'ArrowLeft'),
        (B.ArrowRight = 'ArrowRight'),
        (B.Space = ' '),
        (B.Enter = 'Enter'),
        (B.Tab = 'Tab'),
        (B.Home = 'Home'),
        (B.End = 'End'),
        (B.PageUp = 'PageUp'),
        (B.PageDown = 'PageDown'),
        (B.Backspace = 'Backspace'),
        (B.Delete = 'Delete'),
        (B.Clear = 'Clear'),
        (B.Escape = 'Escape'),
        (B.Down = 'Down'),
        (B.Up = 'Up'),
        (B.Spacebar = 'Spacebar'),
        (B.Left = 'Left'),
        (B.Right = 'Right');
    var K,
        W = ((K = 0),
        function() {
            return 's25-' + K++;
        });
    function z(e) {
        return e();
    }
    function X(e) {
        return D('div', { dangerouslySetInnerHTML: { __html: e.markup } }, ' ');
    }
    var Y,
        G = { allowDuplicates: !1, minimumCharacters: 0, quiet: 50, tabIndex: 0 },
        $ = (t(J, (Y = x)),
        Object.defineProperty(J.prototype, 'dictionary', {
            get: function() {
                var e = this.props.dictionary;
                return e ? ('string' == typeof e ? V(e) : e) : V();
            },
            enumerable: !0,
            configurable: !0
        }),
        (J.prototype.updateState = function(e, t) {
            var n = j(this.state, Array.isArray(e) ? e : [e]);
            this.setState(n, t);
        }),
        (J.prototype.loadMore = function() {
            var e = this,
                t = this.state,
                n = t.loading,
                o = t.search,
                r = t.results.page,
                s = this.dictionary,
                a = this.props.query,
                i = this;
            if (!n) {
                var l = W(),
                    u = r + 1;
                this.updateState({ loading: !0, results: { token: l } }, function() {
                    return h(e, void 0, void 0, function() {
                        var t, n;
                        return v(this, function(e) {
                            switch (e.label) {
                                case 0:
                                    return e.trys.push([0, 2, , 3]), [4, a(o, u, l)];
                                case 1:
                                    return (
                                        (t = e.sent()),
                                        (n = i.state.results),
                                        t.token !== n.token
                                            ? [2]
                                            : (t.values && 0 < t.values.length
                                                  ? i.updateState({
                                                        loading: !1,
                                                        results: {
                                                            page: u,
                                                            results: n.results.concat(t.values),
                                                            showLoadMoreResults: t.more
                                                        }
                                                    })
                                                  : (g(s.noSearchResults()),
                                                    i.updateState({
                                                        loading: !1,
                                                        results: { showLoadMoreResults: !1 }
                                                    })),
                                              [3, 3])
                                    );
                                case 2:
                                    return e.sent(), i.updateState({ loading: !1 }), [3, 3];
                                case 3:
                                    return [2];
                            }
                        });
                    });
                });
            }
        }),
        (J.prototype.handleResultNavigationKeyDown = function(e) {
            switch (e.key) {
                case U.ArrowUp:
                case U.Up:
                    return this.selectPreviousSearchResult(), e.preventDefault(), !0;
                case U.ArrowDown:
                case U.Down:
                    return this.selectNextSearchResult(), e.preventDefault(), !0;
            }
            return !1;
        }),
        (J.prototype.selectNextSearchResult = function() {
            var e = this.state.results,
                t = e.active,
                n = e.results;
            n && t < n.length - 1 && this.updateState({ results: { active: t + 1 } });
        }),
        (J.prototype.selectPreviousSearchResult = function() {
            var e = this.state.results.active;
            0 < e && this.updateState({ results: { active: e - 1 } });
        }),
        (J.prototype.getSelectedSearchResult = function() {
            var e = this.state.results;
            return e.results[e.active];
        }),
        (J.prototype.selectSearchResult = function(e) {
            this.state.results.active !== e && this.updateState({ results: { active: e } });
        }),
        (J.prototype.hasSearchResults = function() {
            var e = this.state.results.results;
            return e && 0 < e.length;
        }),
        J);
    function J(e) {
        var f = Y.call(this, e) || this;
        return (
            (f.getItemId = function(e) {
                return e.id;
            }),
            (f.getItemLabel = function(e) {
                return e.text;
            }),
            (f.renderValue = function(e) {
                return f.renderItem(e, 'valueContent');
            }),
            (f.renderResult = function(e) {
                return f.renderItem(e, 'resultContent');
            }),
            (f.renderItem = function(e, t) {
                var n = f.props[t];
                if (n) {
                    if ('function' != typeof n) return D(X, { markup: e[n] });
                    var o = n(e, D);
                    return 'string' == typeof o ? D(X, { markup: o }) : o;
                }
                return D(X, { markup: f.getItemLabel(e) });
            }),
            (f.search = function(r, s, e, t) {
                var a = f.dictionary,
                    n = f.props,
                    o = n.minimumCharacters,
                    i = n.allowDuplicates,
                    l = n.quiet,
                    u = n.query,
                    c = (f.state.results, r.length >= o),
                    p = c ? W() : void 0,
                    d = f;
                f.updateState(
                    [
                        e,
                        {
                            loading: c,
                            results: {
                                active: -1,
                                page: 0,
                                results: void 0,
                                showLoadMoreResults: !1,
                                showMinimumCharactersError: !c,
                                showNoSearchResultsFound: !1,
                                token: p
                            },
                            search: r
                        }
                    ],
                    function() {
                        if ((t && t(), c)) {
                            var e = function() {
                                return h(f, void 0, void 0, function() {
                                    var t, n, o;
                                    return v(this, function(e) {
                                        switch (e.label) {
                                            case 0:
                                                return e.trys.push([0, 2, , 3]), [4, u(r, 0, p)];
                                            case 1:
                                                return (t = e.sent()).token !== d.state.results.token
                                                    ? [2]
                                                    : ((n = t.values || []),
                                                      !i &&
                                                          0 < n.length &&
                                                          0 < s.length &&
                                                          ((o = new Set()),
                                                          s.forEach(function(e) {
                                                              return o.add(d.getItemId(e));
                                                          }),
                                                          (n = n.filter(function(e) {
                                                              return !o.has(d.getItemId(e));
                                                          }))),
                                                      n.length < 1 && g(a.noSearchResults()),
                                                      d.updateState({
                                                          loading: !1,
                                                          results: {
                                                              active: 0 < n.length ? 0 : -1,
                                                              page: 0,
                                                              results: n,
                                                              showLoadMoreResults: t.more,
                                                              showNoSearchResultsFound: n.length < 1
                                                          }
                                                      }),
                                                      [3, 3]);
                                            case 2:
                                                return e.sent(), d.updateState({ loading: !1 }), [3, 3];
                                            case 3:
                                                return [2];
                                        }
                                    });
                                });
                            };
                            l && 0 < l
                                ? (d.searchTimeout && window.clearTimeout(d.searchTimeout),
                                  (d.searchTimeout = window.setTimeout(e, l)))
                                : e();
                        } else g(a.minimumCharactersMessage(r.length, o));
                    }
                );
            }),
            (f.searchTimeout = void 0),
            (f.namespace = W()),
            (f.state = {
                focused: !1,
                loading: !1,
                open: !1,
                results: {
                    active: -1,
                    page: 0,
                    results: void 0,
                    token: null,
                    showLoadMoreResults: !1,
                    showMinimumCharactersError: !1,
                    showNoSearchResultsFound: !1
                },
                search: ''
            }),
            f
        );
    }
    var Z,
        Q = (t(ee, (Z = x)),
        (ee.prototype.getChildContext = function() {
            return this.props.context;
        }),
        (ee.prototype.render = function() {
            return this.props.children;
        }),
        ee);
    function ee() {
        return (null !== Z && Z.apply(this, arguments)) || this;
    }
    function te(e) {
        var t = e.vnode,
            n = e.container;
        return f(D(Q, { context: this.context }, t), n), null;
    }
    var ne,
        oe = (t(re, (ne = x)),
        (re.prototype.componentWillMount = function() {
            (this.container = document.createElement('div')),
                this.props.class && (this.container.className = this.props.class),
                (this.container.tabIndex = -1),
                this.props.onClick && this.container.addEventListener('click', this.props.onClick),
                this.props.onMouseDown && this.container.addEventListener('mousedown', this.props.onMouseDown),
                this.props.onFocusOut && this.container.addEventListener('focusout', this.props.onFocusOut),
                document.body.appendChild(this.container);
        }),
        (re.prototype.componentDidMount = function() {
            var n = this;
            (this.props.dropdownRef.current = this.container),
                (this.scrollParents = (function(e) {
                    var t = window.getComputedStyle(e).position;
                    if ('fixed' === t) return [e];
                    for (var n = [], o = e.parentElement; o && 1 === o.nodeType; ) {
                        var r = window.getComputedStyle(o);
                        /(overlay|scroll|auto)/.test(r.overflow + ' ' + r.overflowX + ' ' + r.overflowY) &&
                            ('absolute' !== t || 0 <= ['relative', 'fixed', 'absolute'].indexOf(r.position || '')) &&
                            n.push(o),
                            (o = o.parentElement);
                    }
                    return (
                        e.ownerDocument && n.push(e.ownerDocument.body),
                        e.ownerDocument !== document &&
                            e.ownerDocument &&
                            e.ownerDocument.defaultView &&
                            n.push(e.ownerDocument.defaultView),
                        n.push(window),
                        n
                    );
                })(this.props.controlRef.current)),
                this.scrollParents.forEach(function(t) {
                    ['resize', 'scroll', 'touchmove'].forEach(function(e) {
                        t.addEventListener(e, n.throttledPosition);
                    });
                }),
                this.position();
        }),
        (re.prototype.componentWillUnmount = function() {
            var n = this;
            this.scrollParents &&
                (this.scrollParents.forEach(function(t) {
                    ['resize', 'scroll', 'touchmove'].forEach(function(e) {
                        t.removeEventListener(e, n.throttledPosition);
                    });
                }),
                delete this.scrollParents,
                (this.scrollParents = void 0)),
                (this.props.dropdownRef.current = void 0),
                this.container.parentElement.removeChild(this.container);
        }),
        (re.prototype.componentDidUpdate = function() {
            this.position();
        }),
        (re.prototype.render = function() {
            return (function(e, t) {
                return D(te, { vnode: e, container: t });
            })(D(k, null, this.props.children), this.container);
        }),
        (re.prototype.position = function() {
            var e = this.props.controlRef.current.getBoundingClientRect(),
                t =
                    'top: ' +
                    (e.top + e.height + window.pageYOffset) +
                    'px;\n            left: ' +
                    (e.left + window.pageXOffset) +
                    'px;\n            width: ' +
                    e.width +
                    'px;';
            this.container.setAttribute('style', t);
        }),
        re);
    function re(e) {
        var t = ne.call(this, e) || this;
        return (
            (t.throttledPosition = (function(e, t) {
                var n;
                return function() {
                    n =
                        void 0 !== n
                            ? void window.clearTimeout(n)
                            : window.setTimeout(function() {
                                  t(), (n = void 0);
                              }, e);
                };
            })(50, t.position.bind(t))),
            t
        );
    }
    function se(e) {
        var t = e.height,
            n = e.width;
        return D(
            'svg',
            { height: t, width: n, viewBox: '0 0 ' + n + ' ' + t, tabIndex: -1, focusable: 'false' },
            D('path', {
                d:
                    'M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z'
            })
        );
    }
    se.displayName = 'Toggle';
    function ae(e) {
        var t = e.width,
            n = e.height;
        return D(
            'svg',
            { height: n, width: t, viewBox: '0 0 ' + t + ' ' + n, tabIndex: -1, focusable: 'false' },
            D('path', {
                d:
                    'M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z'
            })
        );
    }
    var ie, le;
    (ae.displayName = 'Remove'),
        ((le = ie || (ie = {})).control = 's25-control'),
        (le.content = 's25-content'),
        (le.single = 's25-single'),
        (le.multi = 's25-multi'),
        (le.body = 's25-body'),
        (le.focused = 's25-focused'),
        (le.active = 's25-active'),
        (le.live = 's25-live'),
        (le.multiValues = 's25-multi-values'),
        (le.value = 's25-value'),
        (le.item = 's25-item'),
        (le.selected = 's25-selected'),
        (le.toggle = 's25-toggle'),
        (le.remove = 's25-remove'),
        (le.open = 's25-open'),
        (le.label = 's25-label'),
        (le.search = 's25-search'),
        (le.offscreen = 's25-offscreen'),
        (le.searchContainer = 's25-search-container'),
        (le.dropdown = 's25-dropdown'),
        (le.searchResults = 's25-search-results'),
        (le.options = 's25-options'),
        (le.noSearchResults = 's25-no-search-results'),
        (le.searchResultsMessage = 's25-search-results-message'),
        (le.searchResultsLoading = 's25-search-results-loading'),
        (le.searchResultsMinimumError = 's25-search-results-minimum-error'),
        (le.hiddenAccessible = 's25-hidden-accessible'),
        (le.hidden = 's25-hidden'),
        (le.placeholder = 's25-placeholder'),
        (le.scroll = 's25-scroll');
    var ue,
        ce = (t(pe, (ue = x)),
        (pe.prototype.getResultDomId = function(e) {
            return this.props.namespace + e;
        }),
        (pe.prototype.render = function(i) {
            var l = this,
                e = i.dictionary,
                t = i.minimumCharacters,
                u = i.showLoadMoreResults,
                c = i.results,
                n = this.props.search;
            return D(
                'div',
                { class: ie.body },
                D(
                    'div',
                    { ref: this.container, onScroll: this.onScroll, class: ie.searchResults, 'aria-busy': i.loading },
                    i.loading &&
                        D(
                            'div',
                            { class: q(ie.searchResultsLoading, ie.searchResultsMessage) },
                            e.searchResultsLoading()
                        ),
                    i.showNoSearchResultsFound &&
                        D('div', { class: q(ie.noSearchResults, ie.searchResultsMessage) }, e.noSearchResults()),
                    i.showMinimumCharactersError &&
                        D(
                            'div',
                            { class: q(ie.searchResultsMinimumError, ie.searchResultsMessage) },
                            e.minimumCharactersMessage(n.length, t)
                        ),
                    c &&
                        0 < c.length &&
                        D(
                            'div',
                            {
                                class: ie.options,
                                role: 'listbox',
                                id: i.listboxDomId,
                                'aria-activedescendant': 0 <= i.active ? this.getResultDomId(i.active) : void 0
                            },
                            c.map(function(e, t) {
                                var n,
                                    o = i.itemLabel(e),
                                    r = i.renderItem(e),
                                    s = i.active === t,
                                    a = q(ie.item, (((n = {})[ie.active] = s), n));
                                return D(
                                    'div',
                                    {
                                        id: l.getResultDomId(t),
                                        class: a,
                                        role: 'option',
                                        onClick: l.onResultClicked(e),
                                        onMouseMove: l.onMouseMove(t),
                                        'aria-posinset': t + 1,
                                        'aria-setsize': u ? c.length + 1 : c,
                                        'aria-selected': s,
                                        'aria-label': o
                                    },
                                    D('div', { class: ie.content }, r)
                                );
                            })
                        ),
                    i.showLoadMoreResults &&
                        D(
                            'div',
                            { ref: this.loadMore, class: q(ie.searchResultsMinimumError, ie.searchResultsMessage) },
                            e.searchResultsLoading()
                        )
                )
            );
        }),
        (pe.prototype.componentDidUpdate = function(e) {
            var t = this.props,
                n = t.active,
                o = t.results,
                r = t.showLoadMoreResults;
            if (n !== e.active)
                if (0 <= n && o && 0 < o.length && n === o.length - 1 && r) {
                    var s = this.container.current,
                        a = this.loadMore.current;
                    s.scrollTop = a.offsetTop + a.offsetHeight - s.clientHeight;
                } else if (0 <= n) {
                    var i = this.getResultDomId(n);
                    if (null != (a = document.getElementById(i))) {
                        var l = (s = this.container.current).getBoundingClientRect(),
                            u = a.getBoundingClientRect();
                        if (u.top < l.top && u.bottom <= l.bottom) {
                            var c = l.top - u.top;
                            s.scrollTop = s.scrollTop - c;
                        }
                        u.top >= l.top &&
                            u.bottom > l.bottom &&
                            ((c = u.bottom - l.bottom), (s.scrollTop = s.scrollTop + c));
                    }
                }
        }),
        pe);
    function pe(e) {
        var n = ue.call(this, e) || this;
        return (
            (n.onResultClicked = function(t) {
                return function(e) {
                    n.props.onResultClicked(t, e);
                };
            }),
            (n.onMouseMove = function(t) {
                return function(e) {
                    (n.lastMouseClientX === e.clientX && n.lastMouseClientY === e.clientY) ||
                        ((n.lastMouseClientX = e.clientX), (n.lastMouseClientY = e.clientY), n.props.onMouseMove(t, e));
                };
            }),
            (n.onScroll = function() {
                if (n.props.showLoadMoreResults) {
                    var e = n.loadMore.current;
                    'hidden' !==
                        (function(e, t) {
                            var n = e.getBoundingClientRect(),
                                o = t.getBoundingClientRect();
                            return o.bottom < n.top
                                ? 'hidden'
                                : o.top > n.bottom
                                ? 'hidden'
                                : o.top < n.top && o.bottom <= n.bottom
                                ? 'partial-top'
                                : o.top >= n.top && o.bottom > n.bottom
                                ? 'partial-bottom'
                                : 'visible';
                        })(n.container.current, e) && n.props.onLoadMore();
                }
            }),
            (n.container = {}),
            (n.loadMore = {}),
            n
        );
    }
    var de,
        fe = N({}, G, { values: [] }),
        he = (t(ve, (de = $)),
        (ve.prototype.componentWillMount = function() {
            m();
        }),
        (ve.prototype.render = function(e, t) {
            var n,
                o,
                u = this,
                r = e.values,
                s = e.tabIndex,
                a = e.minimumCharacters,
                i = e.valuesLabel,
                l = e.comboboxLabel,
                c = t.open,
                p = t.loading,
                d = t.focused,
                f = t.search,
                h = t.values,
                v = h.active,
                m = h.selected,
                g = t.results,
                y = this.dictionary,
                _ = q(ie.control, ie.multi, (((n = {})[ie.open] = c), n), (((o = {})[ie.focused] = d), o));
            e.containerClass && 0 < e.containerClass.length && (_ += ' ' + e.containerClass);
            var b = this.namespace + '-instructions',
                w = this.namespace + '-results',
                R = this.namespace + '-res-';
            return D(
                k,
                null,
                D(
                    'div',
                    {
                        class: _,
                        ref: this.containerRef,
                        onFocusCapture: this.onFocusIn,
                        onBlurCapture: this.onFocusOut,
                        tabIndex: -1,
                        onMouseDown: this.focusSearchAndStopPropagation
                    },
                    D(
                        'div',
                        { class: q(ie.body), ref: this.bodyRef, onClick: this.onBodyClick },
                        D(
                            'div',
                            { id: b, class: q(ie.offscreen), style: { display: 'none' } },
                            y.multiSelectInstructions()
                        ),
                        z(function() {
                            var e = 0 <= v ? u.namespace + '-vl-' + v : void 0;
                            return r && 0 < r.length
                                ? D(
                                      'div',
                                      {
                                          ref: u.valuesRef,
                                          class: q(ie.multiValues),
                                          tabIndex: s,
                                          role: 'listbox',
                                          'aria-orientation': 'vertical',
                                          'aria-multiselectable': 'true',
                                          'aria-activedescendant': e,
                                          'aria-label': i,
                                          'aria-describedby': b,
                                          onFocus: u.onValuesFocus,
                                          onBlur: u.onValuesBlur,
                                          onKeyDown: u.onValuesKeyDown
                                      },
                                      r.map(function(e, t) {
                                          var n,
                                              o = m[t],
                                              r = v === t,
                                              s = q(ie.item, (((n = {})[ie.selected] = o), (n[ie.active] = r), n)),
                                              a = u.namespace + '-vl-' + t,
                                              i = u.getItemLabel(e),
                                              l = u.renderValue(e);
                                          return D(
                                              'div',
                                              {
                                                  id: a,
                                                  class: s,
                                                  role: 'option',
                                                  'aria-selected': o,
                                                  'aria-label': i,
                                                  onMouseDown: function(e) {
                                                      return e.stopPropagation();
                                                  },
                                                  onClick: u.onValueClick(t)
                                              },
                                              D('div', { class: ie.content }, l)
                                          );
                                      })
                                  )
                                : null;
                        }),
                        z(function() {
                            var e,
                                t = !m.find(function(e) {
                                    return !0 === e;
                                });
                            return D(
                                'button',
                                {
                                    className: q(ie.remove, (((e = {})[ie.offscreen] = r.length < 1), e)),
                                    onClick: u.onRemoveSelectedClick,
                                    onFocus: u.onRemoveSelectedFocus,
                                    disabled: t,
                                    'aria-disabled': t,
                                    title: y.removeButtonTitle()
                                },
                                D('span', null, D(ae, { width: 20, height: 20 }))
                            );
                        }),
                        D('label', { htmlFor: void 0, className: ie.offscreen }, l),
                        D('input', {
                            type: 'text',
                            ref: this.searchRef,
                            value: f,
                            class: q(ie.search),
                            role: 'combobox',
                            'aria-label': e.comboboxLabel,
                            'aria-autocomplete': 'list',
                            'aria-haspopup': 'true',
                            'aria-owns': w,
                            'aria-controls': w,
                            'aria-expanded': c ? 'true' : 'false',
                            'aria-activedescendant': 0 <= g.active ? R + g.active : void 0,
                            'aria-busy': p,
                            onInput: this.onSearchInput,
                            onKeyDown: this.onSearchKeyDown,
                            onFocus: this.onSearchFocus
                        }),
                        D(
                            'div',
                            { className: q(ie.toggle), 'aria-hidden': !0, tabIndex: -1, onClick: this.onToggleClick },
                            D(se, { height: 20, width: 20 })
                        )
                    )
                ),
                c &&
                    D(
                        oe,
                        {
                            class: q(ie.dropdown, ie.multi),
                            onClick: this.onDropdownClick,
                            controlRef: this.containerRef,
                            dropdownRef: this.dropdownRef
                        },
                        D(
                            ce,
                            C(
                                {
                                    namespace: R,
                                    minimumCharacters: a,
                                    dictionary: this.dictionary,
                                    itemLabel: this.getItemLabel,
                                    renderItem: this.renderResult,
                                    listboxDomId: w,
                                    search: f
                                },
                                this.state.results,
                                {
                                    loading: p,
                                    onResultClicked: this.onResultClicked,
                                    onMouseMove: this.onResultMouseMove,
                                    onLoadMore: this.onLoadMoreResults
                                }
                            )
                        )
                    )
            );
        }),
        (ve.prototype.componentDidMount = function() {
            var e = this.props.containerStyle;
            e && 0 < e.length && this.containerRef.current.setAttribute('style', e);
        }),
        (ve.prototype.closeIfOpen = function() {
            this.state.open && this.close();
        }),
        (ve.defaultProps = fe),
        ve);
    function ve(e) {
        var a = de.call(this, e) || this;
        (a.onLoadMoreResults = function() {
            a.loadMore();
        }),
            (a.focusSearchAndStopPropagation = function(e) {
                a.searchRef.current.focus(), e.preventDefault(), e.stopPropagation();
            }),
            (a.onToggleClick = function(e) {
                a.state.open ? a.close() : a.search(a.state.search, a.props.values, { open: !0 }),
                    a.searchRef.current.focus(),
                    e.preventDefault(),
                    e.stopPropagation();
            }),
            (a.onBodyClick = function(e) {
                e.target === a.bodyRef.current && a.searchRef.current.focus();
            }),
            (a.onFocusIn = function() {
                a.updateState({ focused: !0 });
            }),
            (a.onFocusOut = function(e) {
                var t = e.relatedTarget,
                    n = a.containerRef.current,
                    o = a.dropdownRef.current,
                    r = n.contains(t) || (o && (o === t || o.contains(t)));
                a.updateState({ focused: r }), r || a.closeIfOpen();
            }),
            (a.onSearchFocus = function() {
                var e = a.props.openOnFocus;
                !a.state.open && e && a.search(a.searchRef.current.value, a.props.values, { open: !0 });
            }),
            (a.onResultMouseMove = function(e) {
                a.selectSearchResult(e);
            }),
            (a.selectActiveResult = function() {
                a.selectResult(a.getSelectedSearchResult());
            }),
            (a.selectResult = function(e) {
                var t = a.props,
                    n = t.values,
                    o = t.onChange,
                    r = n.slice();
                r.push(e), a.close();
                var s = a.getItemLabel(e);
                g(a.dictionary.valueAdded(s)), o(r);
            }),
            (a.toggleValue = function(e) {
                var t = a.state.values.selected.slice();
                (t[e] = !t[e]), a.updateState({ values: { selected: t, active: e } });
            }),
            (a.onRemoveSelectedFocus = function() {
                a.closeIfOpen();
            }),
            (a.onRemoveSelectedClick = function() {
                var n = a.state.values.selected,
                    e = a.props,
                    t = e.values,
                    o = e.onChange,
                    r = t.slice().filter(function(e, t) {
                        return !n[t];
                    });
                a.updateState({
                    values: {
                        selected: r.map(function() {
                            return !1;
                        })
                    }
                }),
                    o(r),
                    a.searchRef.current.focus();
            }),
            (a.onSearchInput = function(e) {
                var t = e.target.value;
                a.search(t, a.props.values, { open: !0 });
            }),
            (a.onSearchKeyDown = function(e) {
                if (!a.handleResultNavigationKeyDown(e)) {
                    var t = a.state.open;
                    if (t && a.hasSearchResults)
                        switch (e.key) {
                            case U.Enter:
                                a.selectActiveResult(), e.preventDefault();
                                break;
                            case U.Escape:
                                t && a.close(), e.preventDefault();
                        }
                }
            }),
            (a.onValueClick = function(t) {
                return function(e) {
                    a.toggleValue(t), e.preventDefault(), e.stopPropagation();
                };
            }),
            (a.onValuesFocus = function() {
                var e = a.state.values,
                    t = e.active,
                    n = e.selected,
                    o = a.props.values;
                if (t < 0 && 0 < o.length) {
                    for (var r = 0, s = 0; s < n.length; s++)
                        if (n[s]) {
                            r = s;
                            break;
                        }
                    a.updateState({ values: { active: r } });
                }
                a.closeIfOpen();
            }),
            (a.close = function() {
                a.updateState({ open: !1, results: { results: void 0 }, search: '' });
            }),
            (a.onValuesBlur = function() {
                a.updateState({ values: { active: -1 } });
            }),
            (a.onValuesKeyDown = function(e) {
                var t = a.state.values.active,
                    n = a.props.values;
                switch (e.key) {
                    case U.ArrowLeft:
                    case U.ArrowUp:
                    case U.Up:
                    case U.Left:
                        0 < t && a.updateState({ values: { active: t - 1 } }), e.preventDefault();
                        break;
                    case U.ArrowRight:
                    case U.Right:
                    case U.ArrowDown:
                    case U.Down:
                        t < n.length - 1 && a.updateState({ values: { active: t + 1 } }), e.preventDefault();
                        break;
                    case U.PageDown:
                    case U.PageUp:
                        e.preventDefault();
                        break;
                    case U.Home:
                        a.updateState({ values: { active: 0 } }), e.preventDefault();
                        break;
                    case U.End:
                        a.updateState({ values: { active: n.length - 1 } }), e.preventDefault();
                        break;
                    case U.Space:
                    case U.Spacebar:
                        a.toggleValue(t), e.preventDefault();
                }
            }),
            (a.onDropdownClick = function(e) {
                e.preventDefault(), e.stopPropagation(), a.searchRef.current.focus();
            }),
            (a.onResultClicked = function(e, t) {
                a.selectResult(e), a.searchRef.current.focus(), t.preventDefault(), t.stopPropagation();
            });
        var t = e.values;
        return (
            (a.valuesRef = {}),
            (a.searchRef = {}),
            (a.bodyRef = {}),
            (a.containerRef = {}),
            (a.dropdownRef = {}),
            (a.state = N(a.state, {
                values: {
                    active: -1,
                    selected: t.map(function() {
                        return !1;
                    })
                }
            })),
            a
        );
    }
    var me,
        ge = N({}, G, { allowClear: !1 }),
        ye = (t(_e, (me = $)),
        (_e.prototype.componentWillMount = function() {
            m();
        }),
        (_e.prototype.render = function(e, t) {
            var n,
                o,
                r = this,
                s = e.minimumCharacters,
                a = e.tabIndex,
                i = e.label,
                l = e.allowClear,
                u = e.placeholder,
                c = t.value,
                p = t.open,
                d = t.loading,
                f = t.focused,
                h = t.search,
                v = t.results,
                m = q(ie.control, ie.single, (((n = {})[ie.open] = p), n), (((o = {})[ie.focused] = f), o));
            e.containerClass && 0 < e.containerClass.length && (m += ' ' + e.containerClass);
            var g = this.namespace + '-results',
                y = this.namespace + '-val',
                _ = this.namespace + '-res-',
                b = this.dictionary,
                w = !c && u && 0 < u.length,
                R = this.namespace + '-placeholder';
            return D(
                k,
                null,
                D(
                    'div',
                    {
                        class: m,
                        ref: this.containerRef,
                        onFocusCapture: this.onFocusIn,
                        onBlurCapture: this.onFocusOut,
                        tabIndex: -1,
                        onMouseDown: this.onContainerMouseDown
                    },
                    D(
                        'div',
                        { class: q(ie.body), ref: this.bodyRef },
                        D(
                            'div',
                            {
                                'aria-label': i,
                                role: 'listbox',
                                'aria-activedescendant': y,
                                'aria-expanded': 'false',
                                class: q(ie.value),
                                tabIndex: a,
                                ref: this.valueRef,
                                onKeyDown: this.onValueKeyDown,
                                'aria-describedby': w ? R : void 0
                            },
                            c &&
                                D(
                                    'div',
                                    {
                                        class: ie.item,
                                        role: 'option',
                                        'aria-selected': 'true',
                                        'aria-label': this.getItemLabel(c),
                                        'aria-setsize': -1,
                                        'aria-posinset': -1,
                                        id: y
                                    },
                                    D('div', { class: ie.content }, this.renderValue(c))
                                ),
                            w && D('div', { class: q(ie.placeholder), id: R }, u)
                        ),
                        z(function() {
                            var e,
                                t = !c;
                            return D(
                                'button',
                                {
                                    class: q(ie.remove, (((e = {})[ie.offscreen] = !l), e)),
                                    onClick: r.onClearClick,
                                    onFocus: r.onClearFocus,
                                    onMouseDown: r.onClearMouseDown,
                                    disabled: t,
                                    'aria-disabled': t,
                                    title: b.clearButtonTitle()
                                },
                                D('span', null, D(ae, { width: 20, height: 20 }))
                            );
                        }),
                        D('div', { className: ie.toggle, 'aria-hidden': !0 }, D(se, { height: 20, width: 20 }))
                    )
                ),
                p &&
                    D(
                        oe,
                        {
                            class: q(ie.dropdown, ie.single),
                            onMouseDown: this.onDropdownMouseDown,
                            controlRef: this.containerRef,
                            dropdownRef: this.dropdownRef,
                            onFocusOut: this.onFocusOut
                        },
                        D(
                            'div',
                            null,
                            D('input', {
                                type: 'text',
                                ref: this.searchRef,
                                value: h,
                                class: q(ie.search),
                                role: 'combobox',
                                'aria-autocomplete': 'list',
                                'aria-haspopup': 'true',
                                'aria-owns': g,
                                'aria-controls': g,
                                'aria-expanded': p ? 'true' : 'false',
                                'aria-activedescendant': 0 <= v.active ? _ + v.active : void 0,
                                'aria-busy': d,
                                onInput: this.onSearchInput,
                                onKeyDown: this.onSearchKeyDown,
                                onFocus: this.onSearchFocus
                            }),
                            D(
                                ce,
                                C(
                                    {
                                        namespace: _,
                                        minimumCharacters: s,
                                        dictionary: this.dictionary,
                                        itemLabel: this.getItemLabel,
                                        renderItem: this.renderResult,
                                        listboxDomId: g,
                                        search: h
                                    },
                                    this.state.results,
                                    {
                                        loading: d,
                                        onResultClicked: this.onResultClicked,
                                        onMouseMove: this.onResultMouseMove,
                                        onLoadMore: this.onLoadMoreResults
                                    }
                                )
                            )
                        )
                    )
            );
        }),
        (_e.prototype.componentDidMount = function() {
            var e = this.props.containerStyle;
            e && 0 < e.length && this.containerRef.current.setAttribute('style', e);
        }),
        (_e.prototype.closeIfOpen = function() {
            this.state.open && this.close();
        }),
        (_e.prototype.getValueAsArray = function() {
            return this.state.value ? [this.state.value] : [];
        }),
        (_e.prototype.open = function(e) {
            var t = this;
            void 0 === e && (e = ''),
                this.search(e, this.getValueAsArray(), { open: !0 }, function() {
                    t.searchRef.current.focus();
                });
        }),
        (_e.defaultProps = ge),
        _e);
    function _e(e) {
        var a = me.call(this, e) || this;
        return (
            (a.onLoadMoreResults = function() {
                a.loadMore();
            }),
            (a.onFocusIn = function() {
                a.updateState({ focused: !0 });
                var e = a.props.openOnFocus;
                !a.state.open && e && a.searchRef.current !== document.activeElement && a.open();
            }),
            (a.onFocusOut = function(e) {
                var t = e.relatedTarget,
                    n = a.containerRef.current,
                    o = a.dropdownRef.current,
                    r = a.searchRef.current,
                    s = n.contains(t) || (o && (o === t || o.contains(t))) || t === r;
                a.state.focused !== s && a.updateState({ focused: s }), s || a.closeIfOpen();
            }),
            (a.close = function(e) {
                a.valueRef.current.focus(), a.updateState([e, { open: !1, results: { results: null }, search: '' }]);
            }),
            (a.onContainerMouseDown = function(e) {
                e.stopPropagation(), e.preventDefault(), a.state.open ? a.close() : a.open();
            }),
            (a.onSearchFocus = function() {
                a.updateState({ focused: !0 });
            }),
            (a.onSearchInput = function(e) {
                var t = e.target.value;
                a.search(t, a.getValueAsArray());
            }),
            (a.onClearFocus = function() {
                a.closeIfOpen();
            }),
            (a.onClearClick = function(e) {
                a.selectResult(void 0), e.preventDefault(), e.stopPropagation();
            }),
            (a.onClearMouseDown = function(e) {
                e.stopPropagation(), e.preventDefault();
            }),
            (a.onSearchKeyDown = function(e) {
                if (!a.handleResultNavigationKeyDown(e) && (a.state.open && a.hasSearchResults))
                    switch (e.key) {
                        case U.Enter:
                            a.selectActiveResult(), e.preventDefault(), e.stopPropagation();
                            break;
                        case U.Escape:
                            a.close(), e.preventDefault(), e.stopPropagation();
                            break;
                        case U.Tab:
                            a.close(), e.preventDefault(), e.stopPropagation();
                    }
            }),
            (a.selectActiveResult = function() {
                0 <= a.state.results.active && a.selectResult(a.getSelectedSearchResult());
            }),
            (a.selectResult = function(e) {
                var t = a.props.onChange;
                a.close({ value: e }), t(e);
            }),
            (a.onValueKeyDown = function(e) {
                switch (e.key) {
                    case U.Space:
                    case U.ArrowDown:
                    case U.Down:
                        return a.open(), e.preventDefault(), void e.stopPropagation();
                }
                1 === e.key.length && a.open();
            }),
            (a.onDropdownMouseDown = function(e) {
                a.searchRef.current.focus(), e.preventDefault(), e.stopPropagation();
            }),
            (a.onResultMouseMove = function(e) {
                a.selectSearchResult(e);
            }),
            (a.onResultClicked = function(e, t) {
                a.selectResult(e), t.preventDefault(), t.stopPropagation();
            }),
            (a.searchRef = {}),
            (a.bodyRef = {}),
            (a.containerRef = {}),
            (a.dropdownRef = {}),
            (a.valueRef = {}),
            (a.state = N(a.state, { value: a.props.value })),
            a
        );
    }
    var be,
        we = ((Re.prototype.get = function(e) {
            return this.store.get(e);
        }),
        (Re.prototype.set = function(e, t) {
            this.store.set(e, t);
        }),
        (Re.getStore = function(e) {
            var t = Re.stores.get(e);
            return t || ((t = new Re()), Re.stores.set(e, t)), t;
        }),
        (Re.hasStore = function(e) {
            return Re.stores.has(e);
        }),
        (Re.removeStore = function(e) {
            Re.stores.delete(e);
        }),
        (Re.stores = new WeakMap()),
        Re);
    function Re() {
        this.store = new Map();
    }
    var Ce = {
        allowClear: !((be || (be = {})).targetElement = 'te'),
        dictionary: 'en_us',
        hiddenValue: function(e) {
            return e
                ? Array.isArray(e)
                    ? 0 < e.length
                        ? e
                              .map(function(e) {
                                  return e.id;
                              })
                              .join(',')
                        : ''
                    : e.id
                : '';
        },
        minimumCharacters: 0,
        multiple: !1,
        openOnFocus: !1
    };
    function Se(e, t) {
        var n = document.createEvent('HTMLEvents');
        n.initEvent('change', !1, !0), (n[t] = t), e.dispatchEvent(n);
    }
    var De,
        ke = (t(Me, (De = x)),
        (Me.prototype.componentDidUpdate = function() {
            this.setHiddenValue(this.state.values);
        }),
        (Me.prototype.componentDidMount = function() {
            this.setHiddenValue(this.state.values);
        }),
        (Me.prototype.render = function() {
            var e = this.props.options;
            return D(he, {
                containerClass: e.containerClass,
                containerStyle: e.containerStyle,
                valuesLabel: e.valuesLabel,
                comboboxLabel: e.comboboxLabel,
                valueContent: e.valueContent,
                resultContent: e.resultContent,
                query: e.query,
                quiet: e.quiet,
                minimumCharacters: e.minimumCharacters,
                openOnFocus: e.openOnFocus,
                dictionary: e.dictionary,
                tabIndex: e.tabIndex,
                allowDuplicates: e.allowDuplicates,
                values: this.state.values,
                onChange: this.onChange
            });
        }),
        (Me.prototype.setHiddenValue = function(e) {
            var t = this.props,
                n = t.element,
                o = t.options;
            n.value = o.hiddenValue(e, o);
        }),
        Me);
    function Me(e) {
        var t = De.call(this, e) || this;
        return (
            (t.onChange = function(e) {
                t.setState({ values: e }), t.setHiddenValue(e), Se(t.props.element, e);
            }),
            (t.state = { values: e.options.values }),
            t
        );
    }
    var xe,
        Ie = (t(Ee, (xe = x)),
        (Ee.prototype.componentDidMount = function() {
            this.setHiddenValue(this.state.value);
        }),
        (Ee.prototype.componentDidUpdate = function() {
            this.setHiddenValue(this.state.value);
        }),
        (Ee.prototype.render = function() {
            var e = this.props.options;
            return D(ye, {
                label: e.label,
                comboboxLabel: e.comboboxLabel,
                containerClass: e.containerClass,
                containerStyle: e.containerStyle,
                allowClear: e.allowClear,
                placeholder: e.placeholder,
                valueContent: e.valueContent,
                resultContent: e.resultContent,
                query: e.query,
                quiet: e.quiet,
                minimumCharacters: e.minimumCharacters,
                openOnFocus: e.openOnFocus,
                dictionary: e.dictionary,
                tabIndex: e.tabIndex,
                allowDuplicates: e.allowDuplicates,
                value: this.state.value,
                onChange: this.onChange
            });
        }),
        (Ee.prototype.setHiddenValue = function(e) {
            var t = this.props,
                n = t.element,
                o = t.options;
            n.value = o.hiddenValue(e, o);
        }),
        Ee);
    function Ee(e) {
        var t = xe.call(this, e) || this;
        return (
            (t.onChange = function(e) {
                t.setState({ value: e }), t.setHiddenValue(e), Se(t.props.element, e);
            }),
            (t.state = { value: e.options.value }),
            t
        );
    }
    var Le = {
        create: function(e, t) {
            var n = we.getStore(e);
            if (
                ((t = N({}, Ce, t)).query ||
                    (t.ajax
                        ? (t.query = (function(u) {
                              return (
                                  (u = N({}, u, {
                                      params: function(e, t) {
                                          return { term: e, page: t };
                                      },
                                      process: function(e) {
                                          var t = JSON.parse(e);
                                          return { more: t.more, values: t.values };
                                      }
                                  })),
                                  function(a, i, l) {
                                      return new Promise(function(t, n) {
                                          var o = u.url,
                                              e = u.params(a, i);
                                          if (e) {
                                              var r = 0 <= o.indexOf('?') ? '&' : '?';
                                              Object.entries(e).forEach(function(e) {
                                                  var t = e[0],
                                                      n = e[1];
                                                  (o += r),
                                                      (r = '&'),
                                                      (o += encodeURIComponent(t) + '=' + encodeURIComponent(n));
                                              });
                                          }
                                          var s = new XMLHttpRequest();
                                          s.open('GET', o, !0),
                                              (s.onload = function() {
                                                  if (200 <= s.status && s.status < 400) {
                                                      var e = u.process(s.responseText);
                                                      t({ values: e.values, more: e.more, token: l });
                                                  } else n();
                                              }),
                                              (s.onerror = n),
                                              s.send();
                                      });
                                  }
                              );
                          })(t.ajax))
                        : t.data &&
                          (t.query = (function(s) {
                              return function(n, o, r) {
                                  return new Promise(function(e) {
                                      var t = s({ term: n, page: o, selected: [] });
                                      e({ values: t.values, more: t.more, token: r });
                                  });
                              };
                          })(t.data))),
                !t.tabIndex && e.tabIndex && (t.tabIndex = e.tabIndex),
                e.getAttribute('data-s25-container-style'))
            ) {
                var o = t.containerStyle || '';
                0 < o.length && (o += ';'), (o += e.getAttribute('data-s25-container-style')), (t.containerStyle = o);
            }
            if (e.getAttribute('data-s25-container-class')) {
                var r = t.containerClass || '';
                0 < r.length && (r += ' '), (r += e.getAttribute('data-s25-container-class')), (t.containerClass = r);
            }
            var s = e.parentElement,
                a = document.createElement('div');
            s.insertBefore(a, e),
                n.set(be.targetElement, a),
                t.multiple ? f(D(ke, { element: e, options: t }), s, a) : f(D(Ie, { element: e, options: t }), s, a);
        },
        destroy: function(e) {
            if (we.hasStore(e)) {
                var t = we.getStore(e).get(be.targetElement),
                    n = e.parentElement;
                f(null, n, t), n.removeChild(t), we.removeStore(e);
            }
        }
    };
    (window.select25 = Le), (e.select25 = Le), Object.defineProperty(e, '__esModule', { value: !0 });
});
//# sourceMappingURL=select25.js.map
