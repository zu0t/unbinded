function gt(u) {
    if (u === void 0)
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return u
}
function Li(u, t) {
    u.prototype = Object.create(t.prototype),
    u.prototype.constructor = u,
    u.__proto__ = t
}
/*!
 * GSAP 3.12.2
 * https://greensock.com
 *
 * @license Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
var it = {
    autoSleep: 120,
    force3D: "auto",
    nullTargetWarn: 1,
    units: {
        lineHeight: ""
    }
}, Kt = {
    duration: .5,
    overwrite: !1,
    delay: 0
}, ii, W, z, at = 1e8, D = 1 / at, Ue = Math.PI * 2, Lr = Ue / 4, Ir = 0, Ii = Math.sqrt, Br = Math.cos, Nr = Math.sin, X = function(t) {
    return typeof t == "string"
}, L = function(t) {
    return typeof t == "function"
}, xt = function(t) {
    return typeof t == "number"
}, ri = function(t) {
    return typeof t > "u"
}, pt = function(t) {
    return typeof t == "object"
}, Q = function(t) {
    return t !== !1
}, ni = function() {
    return typeof window < "u"
}, me = function(t) {
    return L(t) || X(t)
}, Bi = typeof ArrayBuffer == "function" && ArrayBuffer.isView || function() {}
, $ = Array.isArray, Ye = /(?:-?\.?\d|\.)+/gi, Ni = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g, qt = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g, Ae = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi, Vi = /[+-]=-?[.\d]+/, Ui = /[^,'"\[\]\s]+/gi, Vr = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i, R, st, Xe, si, rt = {}, ve = {}, Yi, Xi = function(t) {
    return (ve = Ut(t, rt)) && J
}, ai = function(t, e) {
    return console.warn("Invalid property", t, "set to", e, "Missing plugin? gsap.registerPlugin()")
}, Te = function(t, e) {
    return !e && console.warn(t)
}, qi = function(t, e) {
    return t && (rt[t] = e) && ve && (ve[t] = e) || rt
}, oe = function() {
    return 0
}, Ur = {
    suppressEvents: !0,
    isStart: !0,
    kill: !1
}, ge = {
    suppressEvents: !0,
    kill: !1
}, Yr = {
    suppressEvents: !0
}, oi = {}, St = [], qe = {}, Gi, tt = {}, Re = {}, vi = 30, ye = [], ui = "", fi = function(t) {
    var e = t[0], i, r;
    if (pt(e) || L(e) || (t = [t]),
    !(i = (e._gsap || {}).harness)) {
        for (r = ye.length; r-- && !ye[r].targetTest(e); )
            ;
        i = ye[r]
    }
    for (r = t.length; r--; )
        t[r] && (t[r]._gsap || (t[r]._gsap = new pr(t[r],i))) || t.splice(r, 1);
    return t
}, It = function(t) {
    return t._gsap || fi(ot(t))[0]._gsap
}, Wi = function(t, e, i) {
    return (i = t[e]) && L(i) ? t[e]() : ri(i) && t.getAttribute && t.getAttribute(e) || i
}, Z = function(t, e) {
    return (t = t.split(",")).forEach(e) || t
}, I = function(t) {
    return Math.round(t * 1e5) / 1e5 || 0
}, q = function(t) {
    return Math.round(t * 1e7) / 1e7 || 0
}, Wt = function(t, e) {
    var i = e.charAt(0)
      , r = parseFloat(e.substr(2));
    return t = parseFloat(t),
    i === "+" ? t + r : i === "-" ? t - r : i === "*" ? t * r : t / r
}, Xr = function(t, e) {
    for (var i = e.length, r = 0; t.indexOf(e[r]) < 0 && ++r < i; )
        ;
    return r < i
}, be = function() {
    var t = St.length, e = St.slice(0), i, r;
    for (qe = {},
    St.length = 0,
    i = 0; i < t; i++)
        r = e[i],
        r && r._lazy && (r.render(r._lazy[0], r._lazy[1], !0)._lazy = 0)
}, $i = function(t, e, i, r) {
    St.length && !W && be(),
    t.render(e, i, r || W && e < 0 && (t._initted || t._startAt)),
    St.length && !W && be()
}, ji = function(t) {
    var e = parseFloat(t);
    return (e || e === 0) && (t + "").match(Ui).length < 2 ? e : X(t) ? t.trim() : t
}, Ki = function(t) {
    return t
}, ft = function(t, e) {
    for (var i in e)
        i in t || (t[i] = e[i]);
    return t
}, qr = function(t) {
    return function(e, i) {
        for (var r in i)
            r in e || r === "duration" && t || r === "ease" || (e[r] = i[r])
    }
}, Ut = function(t, e) {
    for (var i in e)
        t[i] = e[i];
    return t
}, Ti = function u(t, e) {
    for (var i in e)
        i !== "__proto__" && i !== "constructor" && i !== "prototype" && (t[i] = pt(e[i]) ? u(t[i] || (t[i] = {}), e[i]) : e[i]);
    return t
}, we = function(t, e) {
    var i = {}, r;
    for (r in t)
        r in e || (i[r] = t[r]);
    return i
}, ne = function(t) {
    var e = t.parent || R
      , i = t.keyframes ? qr($(t.keyframes)) : ft;
    if (Q(t.inherit))
        for (; e; )
            i(t, e.vars.defaults),
            e = e.parent || e._dp;
    return t
}, Gr = function(t, e) {
    for (var i = t.length, r = i === e.length; r && i-- && t[i] === e[i]; )
        ;
    return i < 0
}, Qi = function(t, e, i, r, n) {
    i === void 0 && (i = "_first"),
    r === void 0 && (r = "_last");
    var s = t[r], a;
    if (n)
        for (a = e[n]; s && s[n] > a; )
            s = s._prev;
    return s ? (e._next = s._next,
    s._next = e) : (e._next = t[i],
    t[i] = e),
    e._next ? e._next._prev = e : t[r] = e,
    e._prev = s,
    e.parent = e._dp = t,
    e
}, Ce = function(t, e, i, r) {
    i === void 0 && (i = "_first"),
    r === void 0 && (r = "_last");
    var n = e._prev
      , s = e._next;
    n ? n._next = s : t[i] === e && (t[i] = s),
    s ? s._prev = n : t[r] === e && (t[r] = n),
    e._next = e._prev = e.parent = null
}, Ot = function(t, e) {
    t.parent && (!e || t.parent.autoRemoveChildren) && t.parent.remove && t.parent.remove(t),
    t._act = 0
}, Bt = function(t, e) {
    if (t && (!e || e._end > t._dur || e._start < 0))
        for (var i = t; i; )
            i._dirty = 1,
            i = i.parent;
    return t
}, Wr = function(t) {
    for (var e = t.parent; e && e.parent; )
        e._dirty = 1,
        e.totalDuration(),
        e = e.parent;
    return t
}, Ge = function(t, e, i, r) {
    return t._startAt && (W ? t._startAt.revert(ge) : t.vars.immediateRender && !t.vars.autoRevert || t._startAt.render(e, !0, r))
}, $r = function u(t) {
    return !t || t._ts && u(t.parent)
}, bi = function(t) {
    return t._repeat ? Qt(t._tTime, t = t.duration() + t._rDelay) * t : 0
}, Qt = function(t, e) {
    var i = Math.floor(t /= e);
    return t && i === t ? i - 1 : i
}, Se = function(t, e) {
    return (t - e._start) * e._ts + (e._ts >= 0 ? 0 : e._dirty ? e.totalDuration() : e._tDur)
}, Me = function(t) {
    return t._end = q(t._start + (t._tDur / Math.abs(t._ts || t._rts || D) || 0))
}, De = function(t, e) {
    var i = t._dp;
    return i && i.smoothChildTiming && t._ts && (t._start = q(i._time - (t._ts > 0 ? e / t._ts : ((t._dirty ? t.totalDuration() : t._tDur) - e) / -t._ts)),
    Me(t),
    i._dirty || Bt(i, t)),
    t
}, Zi = function(t, e) {
    var i;
    if ((e._time || !e._dur && e._initted || e._start < t._time && (e._dur || !e.add)) && (i = Se(t.rawTime(), e),
    (!e._dur || de(0, e.totalDuration(), i) - e._tTime > D) && e.render(i, !0)),
    Bt(t, e)._dp && t._initted && t._time >= t._dur && t._ts) {
        if (t._dur < t.duration())
            for (i = t; i._dp; )
                i.rawTime() >= 0 && i.totalTime(i._tTime),
                i = i._dp;
        t._zTime = -D
    }
}, lt = function(t, e, i, r) {
    return e.parent && Ot(e),
    e._start = q((xt(i) ? i : i || t !== R ? nt(t, i, e) : t._time) + e._delay),
    e._end = q(e._start + (e.totalDuration() / Math.abs(e.timeScale()) || 0)),
    Qi(t, e, "_first", "_last", t._sort ? "_start" : 0),
    We(e) || (t._recent = e),
    r || Zi(t, e),
    t._ts < 0 && De(t, t._tTime),
    t
}, Hi = function(t, e) {
    return (rt.ScrollTrigger || ai("scrollTrigger", e)) && rt.ScrollTrigger.create(e, t)
}, Ji = function(t, e, i, r, n) {
    if (_i(t, e, n),
    !t._initted)
        return 1;
    if (!i && t._pt && !W && (t._dur && t.vars.lazy !== !1 || !t._dur && t.vars.lazy) && Gi !== et.frame)
        return St.push(t),
        t._lazy = [n, r],
        1
}, jr = function u(t) {
    var e = t.parent;
    return e && e._ts && e._initted && !e._lock && (e.rawTime() < 0 || u(e))
}, We = function(t) {
    var e = t.data;
    return e === "isFromStart" || e === "isStart"
}, Kr = function(t, e, i, r) {
    var n = t.ratio, s = e < 0 || !e && (!t._start && jr(t) && !(!t._initted && We(t)) || (t._ts < 0 || t._dp._ts < 0) && !We(t)) ? 0 : 1, a = t._rDelay, o = 0, f, h, l;
    if (a && t._repeat && (o = de(0, t._tDur, e),
    h = Qt(o, a),
    t._yoyo && h & 1 && (s = 1 - s),
    h !== Qt(t._tTime, a) && (n = 1 - s,
    t.vars.repeatRefresh && t._initted && t.invalidate())),
    s !== n || W || r || t._zTime === D || !e && t._zTime) {
        if (!t._initted && Ji(t, e, r, i, o))
            return;
        for (l = t._zTime,
        t._zTime = e || (i ? D : 0),
        i || (i = e && !l),
        t.ratio = s,
        t._from && (s = 1 - s),
        t._time = 0,
        t._tTime = o,
        f = t._pt; f; )
            f.r(s, f.d),
            f = f._next;
        e < 0 && Ge(t, e, i, !0),
        t._onUpdate && !i && ut(t, "onUpdate"),
        o && t._repeat && !i && t.parent && ut(t, "onRepeat"),
        (e >= t._tDur || e < 0) && t.ratio === s && (s && Ot(t, 1),
        !i && !W && (ut(t, s ? "onComplete" : "onReverseComplete", !0),
        t._prom && t._prom()))
    } else
        t._zTime || (t._zTime = e)
}, Qr = function(t, e, i) {
    var r;
    if (i > e)
        for (r = t._first; r && r._start <= i; ) {
            if (r.data === "isPause" && r._start > e)
                return r;
            r = r._next
        }
    else
        for (r = t._last; r && r._start >= i; ) {
            if (r.data === "isPause" && r._start < e)
                return r;
            r = r._prev
        }
}, Zt = function(t, e, i, r) {
    var n = t._repeat
      , s = q(e) || 0
      , a = t._tTime / t._tDur;
    return a && !r && (t._time *= s / t._dur),
    t._dur = s,
    t._tDur = n ? n < 0 ? 1e10 : q(s * (n + 1) + t._rDelay * n) : s,
    a > 0 && !r && De(t, t._tTime = t._tDur * a),
    t.parent && Me(t),
    i || Bt(t.parent, t),
    t
}, wi = function(t) {
    return t instanceof K ? Bt(t) : Zt(t, t._dur)
}, Zr = {
    _start: 0,
    endTime: oe,
    totalDuration: oe
}, nt = function u(t, e, i) {
    var r = t.labels, n = t._recent || Zr, s = t.duration() >= at ? n.endTime(!1) : t._dur, a, o, f;
    return X(e) && (isNaN(e) || e in r) ? (o = e.charAt(0),
    f = e.substr(-1) === "%",
    a = e.indexOf("="),
    o === "<" || o === ">" ? (a >= 0 && (e = e.replace(/=/, "")),
    (o === "<" ? n._start : n.endTime(n._repeat >= 0)) + (parseFloat(e.substr(1)) || 0) * (f ? (a < 0 ? n : i).totalDuration() / 100 : 1)) : a < 0 ? (e in r || (r[e] = s),
    r[e]) : (o = parseFloat(e.charAt(a - 1) + e.substr(a + 1)),
    f && i && (o = o / 100 * ($(i) ? i[0] : i).totalDuration()),
    a > 1 ? u(t, e.substr(0, a - 1), i) + o : s + o)) : e == null ? s : +e
}, se = function(t, e, i) {
    var r = xt(e[1]), n = (r ? 2 : 1) + (t < 2 ? 0 : 1), s = e[n], a, o;
    if (r && (s.duration = e[1]),
    s.parent = i,
    t) {
        for (a = s,
        o = i; o && !("immediateRender"in a); )
            a = o.vars.defaults || {},
            o = Q(o.vars.inherit) && o.parent;
        s.immediateRender = Q(a.immediateRender),
        t < 2 ? s.runBackwards = 1 : s.startAt = e[n - 1]
    }
    return new U(e[0],s,e[n + 1])
}, Ct = function(t, e) {
    return t || t === 0 ? e(t) : e
}, de = function(t, e, i) {
    return i < t ? t : i > e ? e : i
}, G = function(t, e) {
    return !X(t) || !(e = Vr.exec(t)) ? "" : e[1]
}, Hr = function(t, e, i) {
    return Ct(i, function(r) {
        return de(t, e, r)
    })
}, $e = [].slice, tr = function(t, e) {
    return t && pt(t) && "length"in t && (!e && !t.length || t.length - 1 in t && pt(t[0])) && !t.nodeType && t !== st
}, Jr = function(t, e, i) {
    return i === void 0 && (i = []),
    t.forEach(function(r) {
        var n;
        return X(r) && !e || tr(r, 1) ? (n = i).push.apply(n, ot(r)) : i.push(r)
    }) || i
}, ot = function(t, e, i) {
    return z && !e && z.selector ? z.selector(t) : X(t) && !i && (Xe || !Ht()) ? $e.call((e || si).querySelectorAll(t), 0) : $(t) ? Jr(t, i) : tr(t) ? $e.call(t, 0) : t ? [t] : []
}, je = function(t) {
    return t = ot(t)[0] || Te("Invalid scope") || {},
    function(e) {
        var i = t.current || t.nativeElement || t;
        return ot(e, i.querySelectorAll ? i : i === t ? Te("Invalid scope") || si.createElement("div") : t)
    }
}, er = function(t) {
    return t.sort(function() {
        return .5 - Math.random()
    })
}, ir = function(t) {
    if (L(t))
        return t;
    var e = pt(t) ? t : {
        each: t
    }
      , i = Nt(e.ease)
      , r = e.from || 0
      , n = parseFloat(e.base) || 0
      , s = {}
      , a = r > 0 && r < 1
      , o = isNaN(r) || a
      , f = e.axis
      , h = r
      , l = r;
    return X(r) ? h = l = {
        center: .5,
        edges: .5,
        end: 1
    }[r] || 0 : !a && o && (h = r[0],
    l = r[1]),
    function(c, d, p) {
        var _ = (p || e).length, m = s[_], g, y, v, T, x, P, S, w, b;
        if (!m) {
            if (b = e.grid === "auto" ? 0 : (e.grid || [1, at])[1],
            !b) {
                for (S = -at; S < (S = p[b++].getBoundingClientRect().left) && b < _; )
                    ;
                b--
            }
            for (m = s[_] = [],
            g = o ? Math.min(b, _) * h - .5 : r % b,
            y = b === at ? 0 : o ? _ * l / b - .5 : r / b | 0,
            S = 0,
            w = at,
            P = 0; P < _; P++)
                v = P % b - g,
                T = y - (P / b | 0),
                m[P] = x = f ? Math.abs(f === "y" ? T : v) : Ii(v * v + T * T),
                x > S && (S = x),
                x < w && (w = x);
            r === "random" && er(m),
            m.max = S - w,
            m.min = w,
            m.v = _ = (parseFloat(e.amount) || parseFloat(e.each) * (b > _ ? _ - 1 : f ? f === "y" ? _ / b : b : Math.max(b, _ / b)) || 0) * (r === "edges" ? -1 : 1),
            m.b = _ < 0 ? n - _ : n,
            m.u = G(e.amount || e.each) || 0,
            i = i && _ < 0 ? lr(i) : i
        }
        return _ = (m[c] - m.min) / m.max || 0,
        q(m.b + (i ? i(_) : _) * m.v) + m.u
    }
}, Ke = function(t) {
    var e = Math.pow(10, ((t + "").split(".")[1] || "").length);
    return function(i) {
        var r = q(Math.round(parseFloat(i) / t) * t * e);
        return (r - r % 1) / e + (xt(i) ? 0 : G(i))
    }
}, rr = function(t, e) {
    var i = $(t), r, n;
    return !i && pt(t) && (r = i = t.radius || at,
    t.values ? (t = ot(t.values),
    (n = !xt(t[0])) && (r *= r)) : t = Ke(t.increment)),
    Ct(e, i ? L(t) ? function(s) {
        return n = t(s),
        Math.abs(n - s) <= r ? n : s
    }
    : function(s) {
        for (var a = parseFloat(n ? s.x : s), o = parseFloat(n ? s.y : 0), f = at, h = 0, l = t.length, c, d; l--; )
            n ? (c = t[l].x - a,
            d = t[l].y - o,
            c = c * c + d * d) : c = Math.abs(t[l] - a),
            c < f && (f = c,
            h = l);
        return h = !r || f <= r ? t[h] : s,
        n || h === s || xt(s) ? h : h + G(s)
    }
    : Ke(t))
}, nr = function(t, e, i, r) {
    return Ct($(t) ? !e : i === !0 ? !!(i = 0) : !r, function() {
        return $(t) ? t[~~(Math.random() * t.length)] : (i = i || 1e-5) && (r = i < 1 ? Math.pow(10, (i + "").length - 2) : 1) && Math.floor(Math.round((t - i / 2 + Math.random() * (e - t + i * .99)) / i) * i * r) / r
    })
}, tn = function() {
    for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++)
        e[i] = arguments[i];
    return function(r) {
        return e.reduce(function(n, s) {
            return s(n)
        }, r)
    }
}, en = function(t, e) {
    return function(i) {
        return t(parseFloat(i)) + (e || G(i))
    }
}, rn = function(t, e, i) {
    return ar(t, e, 0, 1, i)
}, sr = function(t, e, i) {
    return Ct(i, function(r) {
        return t[~~e(r)]
    })
}, nn = function u(t, e, i) {
    var r = e - t;
    return $(t) ? sr(t, u(0, t.length), e) : Ct(i, function(n) {
        return (r + (n - t) % r) % r + t
    })
}, sn = function u(t, e, i) {
    var r = e - t
      , n = r * 2;
    return $(t) ? sr(t, u(0, t.length - 1), e) : Ct(i, function(s) {
        return s = (n + (s - t) % n) % n || 0,
        t + (s > r ? n - s : s)
    })
}, ue = function(t) {
    for (var e = 0, i = "", r, n, s, a; ~(r = t.indexOf("random(", e)); )
        s = t.indexOf(")", r),
        a = t.charAt(r + 7) === "[",
        n = t.substr(r + 7, s - r - 7).match(a ? Ui : Ye),
        i += t.substr(e, r - e) + nr(a ? n : +n[0], a ? 0 : +n[1], +n[2] || 1e-5),
        e = s + 1;
    return i + t.substr(e, t.length - e)
}, ar = function(t, e, i, r, n) {
    var s = e - t
      , a = r - i;
    return Ct(n, function(o) {
        return i + ((o - t) / s * a || 0)
    })
}, an = function u(t, e, i, r) {
    var n = isNaN(t + e) ? 0 : function(d) {
        return (1 - d) * t + d * e
    }
    ;
    if (!n) {
        var s = X(t), a = {}, o, f, h, l, c;
        if (i === !0 && (r = 1) && (i = null),
        s)
            t = {
                p: t
            },
            e = {
                p: e
            };
        else if ($(t) && !$(e)) {
            for (h = [],
            l = t.length,
            c = l - 2,
            f = 1; f < l; f++)
                h.push(u(t[f - 1], t[f]));
            l--,
            n = function(p) {
                p *= l;
                var _ = Math.min(c, ~~p);
                return h[_](p - _)
            }
            ,
            i = e
        } else
            r || (t = Ut($(t) ? [] : {}, t));
        if (!h) {
            for (o in e)
                hi.call(a, t, o, "get", e[o]);
            n = function(p) {
                return di(p, a) || (s ? t.p : t)
            }
        }
    }
    return Ct(i, n)
}, Si = function(t, e, i) {
    var r = t.labels, n = at, s, a, o;
    for (s in r)
        a = r[s] - e,
        a < 0 == !!i && a && n > (a = Math.abs(a)) && (o = s,
        n = a);
    return o
}, ut = function(t, e, i) {
    var r = t.vars, n = r[e], s = z, a = t._ctx, o, f, h;
    if (n)
        return o = r[e + "Params"],
        f = r.callbackScope || t,
        i && St.length && be(),
        a && (z = a),
        h = o ? n.apply(f, o) : n.call(f),
        z = s,
        h
}, ie = function(t) {
    return Ot(t),
    t.scrollTrigger && t.scrollTrigger.kill(!!W),
    t.progress() < 1 && ut(t, "onInterrupt"),
    t
}, Gt, or = [], ur = function(t) {
    if (ni() && t) {
        t = !t.name && t.default || t;
        var e = t.name
          , i = L(t)
          , r = e && !i && t.init ? function() {
            this._props = []
        }
        : t
          , n = {
            init: oe,
            render: di,
            add: hi,
            kill: bn,
            modifier: Tn,
            rawVars: 0
        }
          , s = {
            targetTest: 0,
            get: 0,
            getSetter: ci,
            aliases: {},
            register: 0
        };
        if (Ht(),
        t !== r) {
            if (tt[e])
                return;
            ft(r, ft(we(t, n), s)),
            Ut(r.prototype, Ut(n, we(t, s))),
            tt[r.prop = e] = r,
            t.targetTest && (ye.push(r),
            oi[e] = 1),
            e = (e === "css" ? "CSS" : e.charAt(0).toUpperCase() + e.substr(1)) + "Plugin"
        }
        qi(e, r),
        t.register && t.register(J, r, H)
    } else
        t && or.push(t)
}, M = 255, re = {
    aqua: [0, M, M],
    lime: [0, M, 0],
    silver: [192, 192, 192],
    black: [0, 0, 0],
    maroon: [128, 0, 0],
    teal: [0, 128, 128],
    blue: [0, 0, M],
    navy: [0, 0, 128],
    white: [M, M, M],
    olive: [128, 128, 0],
    yellow: [M, M, 0],
    orange: [M, 165, 0],
    gray: [128, 128, 128],
    purple: [128, 0, 128],
    green: [0, 128, 0],
    red: [M, 0, 0],
    pink: [M, 192, 203],
    cyan: [0, M, M],
    transparent: [M, M, M, 0]
}, Ee = function(t, e, i) {
    return t += t < 0 ? 1 : t > 1 ? -1 : 0,
    (t * 6 < 1 ? e + (i - e) * t * 6 : t < .5 ? i : t * 3 < 2 ? e + (i - e) * (2 / 3 - t) * 6 : e) * M + .5 | 0
}, fr = function(t, e, i) {
    var r = t ? xt(t) ? [t >> 16, t >> 8 & M, t & M] : 0 : re.black, n, s, a, o, f, h, l, c, d, p;
    if (!r) {
        if (t.substr(-1) === "," && (t = t.substr(0, t.length - 1)),
        re[t])
            r = re[t];
        else if (t.charAt(0) === "#") {
            if (t.length < 6 && (n = t.charAt(1),
            s = t.charAt(2),
            a = t.charAt(3),
            t = "#" + n + n + s + s + a + a + (t.length === 5 ? t.charAt(4) + t.charAt(4) : "")),
            t.length === 9)
                return r = parseInt(t.substr(1, 6), 16),
                [r >> 16, r >> 8 & M, r & M, parseInt(t.substr(7), 16) / 255];
            t = parseInt(t.substr(1), 16),
            r = [t >> 16, t >> 8 & M, t & M]
        } else if (t.substr(0, 3) === "hsl") {
            if (r = p = t.match(Ye),
            !e)
                o = +r[0] % 360 / 360,
                f = +r[1] / 100,
                h = +r[2] / 100,
                s = h <= .5 ? h * (f + 1) : h + f - h * f,
                n = h * 2 - s,
                r.length > 3 && (r[3] *= 1),
                r[0] = Ee(o + 1 / 3, n, s),
                r[1] = Ee(o, n, s),
                r[2] = Ee(o - 1 / 3, n, s);
            else if (~t.indexOf("="))
                return r = t.match(Ni),
                i && r.length < 4 && (r[3] = 1),
                r
        } else
            r = t.match(Ye) || re.transparent;
        r = r.map(Number)
    }
    return e && !p && (n = r[0] / M,
    s = r[1] / M,
    a = r[2] / M,
    l = Math.max(n, s, a),
    c = Math.min(n, s, a),
    h = (l + c) / 2,
    l === c ? o = f = 0 : (d = l - c,
    f = h > .5 ? d / (2 - l - c) : d / (l + c),
    o = l === n ? (s - a) / d + (s < a ? 6 : 0) : l === s ? (a - n) / d + 2 : (n - s) / d + 4,
    o *= 60),
    r[0] = ~~(o + .5),
    r[1] = ~~(f * 100 + .5),
    r[2] = ~~(h * 100 + .5)),
    i && r.length < 4 && (r[3] = 1),
    r
}, hr = function(t) {
    var e = []
      , i = []
      , r = -1;
    return t.split(Pt).forEach(function(n) {
        var s = n.match(qt) || [];
        e.push.apply(e, s),
        i.push(r += s.length + 1)
    }),
    e.c = i,
    e
}, Pi = function(t, e, i) {
    var r = "", n = (t + r).match(Pt), s = e ? "hsla(" : "rgba(", a = 0, o, f, h, l;
    if (!n)
        return t;
    if (n = n.map(function(c) {
        return (c = fr(c, e, 1)) && s + (e ? c[0] + "," + c[1] + "%," + c[2] + "%," + c[3] : c.join(",")) + ")"
    }),
    i && (h = hr(t),
    o = i.c,
    o.join(r) !== h.c.join(r)))
        for (f = t.replace(Pt, "1").split(qt),
        l = f.length - 1; a < l; a++)
            r += f[a] + (~o.indexOf(a) ? n.shift() || s + "0,0,0,0)" : (h.length ? h : n.length ? n : i).shift());
    if (!f)
        for (f = t.split(Pt),
        l = f.length - 1; a < l; a++)
            r += f[a] + n[a];
    return r + f[l]
}, Pt = function() {
    var u = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b", t;
    for (t in re)
        u += "|" + t + "\\b";
    return new RegExp(u + ")","gi")
}(), on = /hsl[a]?\(/, _r = function(t) {
    var e = t.join(" "), i;
    if (Pt.lastIndex = 0,
    Pt.test(e))
        return i = on.test(e),
        t[1] = Pi(t[1], i),
        t[0] = Pi(t[0], i, hr(t[1])),
        !0
}, fe, et = function() {
    var u = Date.now, t = 500, e = 33, i = u(), r = i, n = 1e3 / 240, s = n, a = [], o, f, h, l, c, d, p = function _(m) {
        var g = u() - r, y = m === !0, v, T, x, P;
        if (g > t && (i += g - e),
        r += g,
        x = r - i,
        v = x - s,
        (v > 0 || y) && (P = ++l.frame,
        c = x - l.time * 1e3,
        l.time = x = x / 1e3,
        s += v + (v >= n ? 4 : n - v),
        T = 1),
        y || (o = f(_)),
        T)
            for (d = 0; d < a.length; d++)
                a[d](x, c, P, m)
    };
    return l = {
        time: 0,
        frame: 0,
        tick: function() {
            p(!0)
        },
        deltaRatio: function(m) {
            return c / (1e3 / (m || 60))
        },
        wake: function() {
            Yi && (!Xe && ni() && (st = Xe = window,
            si = st.document || {},
            rt.gsap = J,
            (st.gsapVersions || (st.gsapVersions = [])).push(J.version),
            Xi(ve || st.GreenSockGlobals || !st.gsap && st || {}),
            h = st.requestAnimationFrame,
            or.forEach(ur)),
            o && l.sleep(),
            f = h || function(m) {
                return setTimeout(m, s - l.time * 1e3 + 1 | 0)
            }
            ,
            fe = 1,
            p(2))
        },
        sleep: function() {
            (h ? st.cancelAnimationFrame : clearTimeout)(o),
            fe = 0,
            f = oe
        },
        lagSmoothing: function(m, g) {
            t = m || 1 / 0,
            e = Math.min(g || 33, t)
        },
        fps: function(m) {
            n = 1e3 / (m || 240),
            s = l.time * 1e3 + n
        },
        add: function(m, g, y) {
            var v = g ? function(T, x, P, S) {
                m(T, x, P, S),
                l.remove(v)
            }
            : m;
            return l.remove(m),
            a[y ? "unshift" : "push"](v),
            Ht(),
            v
        },
        remove: function(m, g) {
            ~(g = a.indexOf(m)) && a.splice(g, 1) && d >= g && d--
        },
        _listeners: a
    },
    l
}(), Ht = function() {
    return !fe && et.wake()
}, O = {}, un = /^[\d.\-M][\d.\-,\s]/, fn = /["']/g, hn = function(t) {
    for (var e = {}, i = t.substr(1, t.length - 3).split(":"), r = i[0], n = 1, s = i.length, a, o, f; n < s; n++)
        o = i[n],
        a = n !== s - 1 ? o.lastIndexOf(",") : o.length,
        f = o.substr(0, a),
        e[r] = isNaN(f) ? f.replace(fn, "").trim() : +f,
        r = o.substr(a + 1).trim();
    return e
}, _n = function(t) {
    var e = t.indexOf("(") + 1
      , i = t.indexOf(")")
      , r = t.indexOf("(", e);
    return t.substring(e, ~r && r < i ? t.indexOf(")", i + 1) : i)
}, ln = function(t) {
    var e = (t + "").split("(")
      , i = O[e[0]];
    return i && e.length > 1 && i.config ? i.config.apply(null, ~t.indexOf("{") ? [hn(e[1])] : _n(t).split(",").map(ji)) : O._CE && un.test(t) ? O._CE("", t) : i
}, lr = function(t) {
    return function(e) {
        return 1 - t(1 - e)
    }
}, cr = function u(t, e) {
    for (var i = t._first, r; i; )
        i instanceof K ? u(i, e) : i.vars.yoyoEase && (!i._yoyo || !i._repeat) && i._yoyo !== e && (i.timeline ? u(i.timeline, e) : (r = i._ease,
        i._ease = i._yEase,
        i._yEase = r,
        i._yoyo = e)),
        i = i._next
}, Nt = function(t, e) {
    return t && (L(t) ? t : O[t] || ln(t)) || e
}, Yt = function(t, e, i, r) {
    i === void 0 && (i = function(o) {
        return 1 - e(1 - o)
    }
    ),
    r === void 0 && (r = function(o) {
        return o < .5 ? e(o * 2) / 2 : 1 - e((1 - o) * 2) / 2
    }
    );
    var n = {
        easeIn: e,
        easeOut: i,
        easeInOut: r
    }, s;
    return Z(t, function(a) {
        O[a] = rt[a] = n,
        O[s = a.toLowerCase()] = i;
        for (var o in n)
            O[s + (o === "easeIn" ? ".in" : o === "easeOut" ? ".out" : ".inOut")] = O[a + "." + o] = n[o]
    }),
    n
}, dr = function(t) {
    return function(e) {
        return e < .5 ? (1 - t(1 - e * 2)) / 2 : .5 + t((e - .5) * 2) / 2
    }
}, Fe = function u(t, e, i) {
    var r = e >= 1 ? e : 1
      , n = (i || (t ? .3 : .45)) / (e < 1 ? e : 1)
      , s = n / Ue * (Math.asin(1 / r) || 0)
      , a = function(h) {
        return h === 1 ? 1 : r * Math.pow(2, -10 * h) * Nr((h - s) * n) + 1
    }
      , o = t === "out" ? a : t === "in" ? function(f) {
        return 1 - a(1 - f)
    }
    : dr(a);
    return n = Ue / n,
    o.config = function(f, h) {
        return u(t, f, h)
    }
    ,
    o
}, ze = function u(t, e) {
    e === void 0 && (e = 1.70158);
    var i = function(s) {
        return s ? --s * s * ((e + 1) * s + e) + 1 : 0
    }
      , r = t === "out" ? i : t === "in" ? function(n) {
        return 1 - i(1 - n)
    }
    : dr(i);
    return r.config = function(n) {
        return u(t, n)
    }
    ,
    r
};
Z("Linear,Quad,Cubic,Quart,Quint,Strong", function(u, t) {
    var e = t < 5 ? t + 1 : t;
    Yt(u + ",Power" + (e - 1), t ? function(i) {
        return Math.pow(i, e)
    }
    : function(i) {
        return i
    }
    , function(i) {
        return 1 - Math.pow(1 - i, e)
    }, function(i) {
        return i < .5 ? Math.pow(i * 2, e) / 2 : 1 - Math.pow((1 - i) * 2, e) / 2
    })
});
O.Linear.easeNone = O.none = O.Linear.easeIn;
Yt("Elastic", Fe("in"), Fe("out"), Fe());
(function(u, t) {
    var e = 1 / t
      , i = 2 * e
      , r = 2.5 * e
      , n = function(a) {
        return a < e ? u * a * a : a < i ? u * Math.pow(a - 1.5 / t, 2) + .75 : a < r ? u * (a -= 2.25 / t) * a + .9375 : u * Math.pow(a - 2.625 / t, 2) + .984375
    };
    Yt("Bounce", function(s) {
        return 1 - n(1 - s)
    }, n)
}
)(7.5625, 2.75);
Yt("Expo", function(u) {
    return u ? Math.pow(2, 10 * (u - 1)) : 0
});
Yt("Circ", function(u) {
    return -(Ii(1 - u * u) - 1)
});
Yt("Sine", function(u) {
    return u === 1 ? 1 : -Br(u * Lr) + 1
});
Yt("Back", ze("in"), ze("out"), ze());
O.SteppedEase = O.steps = rt.SteppedEase = {
    config: function(t, e) {
        t === void 0 && (t = 1);
        var i = 1 / t
          , r = t + (e ? 0 : 1)
          , n = e ? 1 : 0
          , s = 1 - D;
        return function(a) {
            return ((r * de(0, s, a) | 0) + n) * i
        }
    }
};
Kt.ease = O["quad.out"];
Z("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function(u) {
    return ui += u + "," + u + "Params,"
});
var pr = function(t, e) {
    this.id = Ir++,
    t._gsap = this,
    this.target = t,
    this.harness = e,
    this.get = e ? e.get : Wi,
    this.set = e ? e.getSetter : ci
}
  , he = function() {
    function u(e) {
        this.vars = e,
        this._delay = +e.delay || 0,
        (this._repeat = e.repeat === 1 / 0 ? -2 : e.repeat || 0) && (this._rDelay = e.repeatDelay || 0,
        this._yoyo = !!e.yoyo || !!e.yoyoEase),
        this._ts = 1,
        Zt(this, +e.duration, 1, 1),
        this.data = e.data,
        z && (this._ctx = z,
        z.data.push(this)),
        fe || et.wake()
    }
    var t = u.prototype;
    return t.delay = function(i) {
        return i || i === 0 ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + i - this._delay),
        this._delay = i,
        this) : this._delay
    }
    ,
    t.duration = function(i) {
        return arguments.length ? this.totalDuration(this._repeat > 0 ? i + (i + this._rDelay) * this._repeat : i) : this.totalDuration() && this._dur
    }
    ,
    t.totalDuration = function(i) {
        return arguments.length ? (this._dirty = 0,
        Zt(this, this._repeat < 0 ? i : (i - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur
    }
    ,
    t.totalTime = function(i, r) {
        if (Ht(),
        !arguments.length)
            return this._tTime;
        var n = this._dp;
        if (n && n.smoothChildTiming && this._ts) {
            for (De(this, i),
            !n._dp || n.parent || Zi(n, this); n && n.parent; )
                n.parent._time !== n._start + (n._ts >= 0 ? n._tTime / n._ts : (n.totalDuration() - n._tTime) / -n._ts) && n.totalTime(n._tTime, !0),
                n = n.parent;
            !this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && i < this._tDur || this._ts < 0 && i > 0 || !this._tDur && !i) && lt(this._dp, this, this._start - this._delay)
        }
        return (this._tTime !== i || !this._dur && !r || this._initted && Math.abs(this._zTime) === D || !i && !this._initted && (this.add || this._ptLookup)) && (this._ts || (this._pTime = i),
        $i(this, i, r)),
        this
    }
    ,
    t.time = function(i, r) {
        return arguments.length ? this.totalTime(Math.min(this.totalDuration(), i + bi(this)) % (this._dur + this._rDelay) || (i ? this._dur : 0), r) : this._time
    }
    ,
    t.totalProgress = function(i, r) {
        return arguments.length ? this.totalTime(this.totalDuration() * i, r) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.ratio
    }
    ,
    t.progress = function(i, r) {
        return arguments.length ? this.totalTime(this.duration() * (this._yoyo && !(this.iteration() & 1) ? 1 - i : i) + bi(this), r) : this.duration() ? Math.min(1, this._time / this._dur) : this.ratio
    }
    ,
    t.iteration = function(i, r) {
        var n = this.duration() + this._rDelay;
        return arguments.length ? this.totalTime(this._time + (i - 1) * n, r) : this._repeat ? Qt(this._tTime, n) + 1 : 1
    }
    ,
    t.timeScale = function(i) {
        if (!arguments.length)
            return this._rts === -D ? 0 : this._rts;
        if (this._rts === i)
            return this;
        var r = this.parent && this._ts ? Se(this.parent._time, this) : this._tTime;
        return this._rts = +i || 0,
        this._ts = this._ps || i === -D ? 0 : this._rts,
        this.totalTime(de(-Math.abs(this._delay), this._tDur, r), !0),
        Me(this),
        Wr(this)
    }
    ,
    t.paused = function(i) {
        return arguments.length ? (this._ps !== i && (this._ps = i,
        i ? (this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()),
        this._ts = this._act = 0) : (Ht(),
        this._ts = this._rts,
        this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, this.progress() === 1 && Math.abs(this._zTime) !== D && (this._tTime -= D)))),
        this) : this._ps
    }
    ,
    t.startTime = function(i) {
        if (arguments.length) {
            this._start = i;
            var r = this.parent || this._dp;
            return r && (r._sort || !this.parent) && lt(r, this, i - this._delay),
            this
        }
        return this._start
    }
    ,
    t.endTime = function(i) {
        return this._start + (Q(i) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1)
    }
    ,
    t.rawTime = function(i) {
        var r = this.parent || this._dp;
        return r ? i && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : this._ts ? Se(r.rawTime(i), this) : this._tTime : this._tTime
    }
    ,
    t.revert = function(i) {
        i === void 0 && (i = Yr);
        var r = W;
        return W = i,
        (this._initted || this._startAt) && (this.timeline && this.timeline.revert(i),
        this.totalTime(-.01, i.suppressEvents)),
        this.data !== "nested" && i.kill !== !1 && this.kill(),
        W = r,
        this
    }
    ,
    t.globalTime = function(i) {
        for (var r = this, n = arguments.length ? i : r.rawTime(); r; )
            n = r._start + n / (r._ts || 1),
            r = r._dp;
        return !this.parent && this._sat ? this._sat.vars.immediateRender ? -1 / 0 : this._sat.globalTime(i) : n
    }
    ,
    t.repeat = function(i) {
        return arguments.length ? (this._repeat = i === 1 / 0 ? -2 : i,
        wi(this)) : this._repeat === -2 ? 1 / 0 : this._repeat
    }
    ,
    t.repeatDelay = function(i) {
        if (arguments.length) {
            var r = this._time;
            return this._rDelay = i,
            wi(this),
            r ? this.time(r) : this
        }
        return this._rDelay
    }
    ,
    t.yoyo = function(i) {
        return arguments.length ? (this._yoyo = i,
        this) : this._yoyo
    }
    ,
    t.seek = function(i, r) {
        return this.totalTime(nt(this, i), Q(r))
    }
    ,
    t.restart = function(i, r) {
        return this.play().totalTime(i ? -this._delay : 0, Q(r))
    }
    ,
    t.play = function(i, r) {
        return i != null && this.seek(i, r),
        this.reversed(!1).paused(!1)
    }
    ,
    t.reverse = function(i, r) {
        return i != null && this.seek(i || this.totalDuration(), r),
        this.reversed(!0).paused(!1)
    }
    ,
    t.pause = function(i, r) {
        return i != null && this.seek(i, r),
        this.paused(!0)
    }
    ,
    t.resume = function() {
        return this.paused(!1)
    }
    ,
    t.reversed = function(i) {
        return arguments.length ? (!!i !== this.reversed() && this.timeScale(-this._rts || (i ? -D : 0)),
        this) : this._rts < 0
    }
    ,
    t.invalidate = function() {
        return this._initted = this._act = 0,
        this._zTime = -D,
        this
    }
    ,
    t.isActive = function() {
        var i = this.parent || this._dp, r = this._start, n;
        return !!(!i || this._ts && this._initted && i.isActive() && (n = i.rawTime(!0)) >= r && n < this.endTime(!0) - D)
    }
    ,
    t.eventCallback = function(i, r, n) {
        var s = this.vars;
        return arguments.length > 1 ? (r ? (s[i] = r,
        n && (s[i + "Params"] = n),
        i === "onUpdate" && (this._onUpdate = r)) : delete s[i],
        this) : s[i]
    }
    ,
    t.then = function(i) {
        var r = this;
        return new Promise(function(n) {
            var s = L(i) ? i : Ki
              , a = function() {
                var f = r.then;
                r.then = null,
                L(s) && (s = s(r)) && (s.then || s === r) && (r.then = f),
                n(s),
                r.then = f
            };
            r._initted && r.totalProgress() === 1 && r._ts >= 0 || !r._tTime && r._ts < 0 ? a() : r._prom = a
        }
        )
    }
    ,
    t.kill = function() {
        ie(this)
    }
    ,
    u
}();
ft(he.prototype, {
    _time: 0,
    _start: 0,
    _end: 0,
    _tTime: 0,
    _tDur: 0,
    _dirty: 0,
    _repeat: 0,
    _yoyo: !1,
    parent: null,
    _initted: !1,
    _rDelay: 0,
    _ts: 1,
    _dp: 0,
    ratio: 0,
    _zTime: -D,
    _prom: 0,
    _ps: !1,
    _rts: 1
});
var K = function(u) {
    Li(t, u);
    function t(i, r) {
        var n;
        return i === void 0 && (i = {}),
        n = u.call(this, i) || this,
        n.labels = {},
        n.smoothChildTiming = !!i.smoothChildTiming,
        n.autoRemoveChildren = !!i.autoRemoveChildren,
        n._sort = Q(i.sortChildren),
        R && lt(i.parent || R, gt(n), r),
        i.reversed && n.reverse(),
        i.paused && n.paused(!0),
        i.scrollTrigger && Hi(gt(n), i.scrollTrigger),
        n
    }
    var e = t.prototype;
    return e.to = function(r, n, s) {
        return se(0, arguments, this),
        this
    }
    ,
    e.from = function(r, n, s) {
        return se(1, arguments, this),
        this
    }
    ,
    e.fromTo = function(r, n, s, a) {
        return se(2, arguments, this),
        this
    }
    ,
    e.set = function(r, n, s) {
        return n.duration = 0,
        n.parent = this,
        ne(n).repeatDelay || (n.repeat = 0),
        n.immediateRender = !!n.immediateRender,
        new U(r,n,nt(this, s),1),
        this
    }
    ,
    e.call = function(r, n, s) {
        return lt(this, U.delayedCall(0, r, n), s)
    }
    ,
    e.staggerTo = function(r, n, s, a, o, f, h) {
        return s.duration = n,
        s.stagger = s.stagger || a,
        s.onComplete = f,
        s.onCompleteParams = h,
        s.parent = this,
        new U(r,s,nt(this, o)),
        this
    }
    ,
    e.staggerFrom = function(r, n, s, a, o, f, h) {
        return s.runBackwards = 1,
        ne(s).immediateRender = Q(s.immediateRender),
        this.staggerTo(r, n, s, a, o, f, h)
    }
    ,
    e.staggerFromTo = function(r, n, s, a, o, f, h, l) {
        return a.startAt = s,
        ne(a).immediateRender = Q(a.immediateRender),
        this.staggerTo(r, n, a, o, f, h, l)
    }
    ,
    e.render = function(r, n, s) {
        var a = this._time, o = this._dirty ? this.totalDuration() : this._tDur, f = this._dur, h = r <= 0 ? 0 : q(r), l = this._zTime < 0 != r < 0 && (this._initted || !f), c, d, p, _, m, g, y, v, T, x, P, S;
        if (this !== R && h > o && r >= 0 && (h = o),
        h !== this._tTime || s || l) {
            if (a !== this._time && f && (h += this._time - a,
            r += this._time - a),
            c = h,
            T = this._start,
            v = this._ts,
            g = !v,
            l && (f || (a = this._zTime),
            (r || !n) && (this._zTime = r)),
            this._repeat) {
                if (P = this._yoyo,
                m = f + this._rDelay,
                this._repeat < -1 && r < 0)
                    return this.totalTime(m * 100 + r, n, s);
                if (c = q(h % m),
                h === o ? (_ = this._repeat,
                c = f) : (_ = ~~(h / m),
                _ && _ === h / m && (c = f,
                _--),
                c > f && (c = f)),
                x = Qt(this._tTime, m),
                !a && this._tTime && x !== _ && this._tTime - x * m - this._dur <= 0 && (x = _),
                P && _ & 1 && (c = f - c,
                S = 1),
                _ !== x && !this._lock) {
                    var w = P && x & 1
                      , b = w === (P && _ & 1);
                    if (_ < x && (w = !w),
                    a = w ? 0 : h % f ? f : h,
                    this._lock = 1,
                    this.render(a || (S ? 0 : q(_ * m)), n, !f)._lock = 0,
                    this._tTime = h,
                    !n && this.parent && ut(this, "onRepeat"),
                    this.vars.repeatRefresh && !S && (this.invalidate()._lock = 1),
                    a && a !== this._time || g !== !this._ts || this.vars.onRepeat && !this.parent && !this._act)
                        return this;
                    if (f = this._dur,
                    o = this._tDur,
                    b && (this._lock = 2,
                    a = w ? f : -1e-4,
                    this.render(a, !0),
                    this.vars.repeatRefresh && !S && this.invalidate()),
                    this._lock = 0,
                    !this._ts && !g)
                        return this;
                    cr(this, S)
                }
            }
            if (this._hasPause && !this._forcing && this._lock < 2 && (y = Qr(this, q(a), q(c)),
            y && (h -= c - (c = y._start))),
            this._tTime = h,
            this._time = c,
            this._act = !v,
            this._initted || (this._onUpdate = this.vars.onUpdate,
            this._initted = 1,
            this._zTime = r,
            a = 0),
            !a && c && !n && !_ && (ut(this, "onStart"),
            this._tTime !== h))
                return this;
            if (c >= a && r >= 0)
                for (d = this._first; d; ) {
                    if (p = d._next,
                    (d._act || c >= d._start) && d._ts && y !== d) {
                        if (d.parent !== this)
                            return this.render(r, n, s);
                        if (d.render(d._ts > 0 ? (c - d._start) * d._ts : (d._dirty ? d.totalDuration() : d._tDur) + (c - d._start) * d._ts, n, s),
                        c !== this._time || !this._ts && !g) {
                            y = 0,
                            p && (h += this._zTime = -D);
                            break
                        }
                    }
                    d = p
                }
            else {
                d = this._last;
                for (var k = r < 0 ? r : c; d; ) {
                    if (p = d._prev,
                    (d._act || k <= d._end) && d._ts && y !== d) {
                        if (d.parent !== this)
                            return this.render(r, n, s);
                        if (d.render(d._ts > 0 ? (k - d._start) * d._ts : (d._dirty ? d.totalDuration() : d._tDur) + (k - d._start) * d._ts, n, s || W && (d._initted || d._startAt)),
                        c !== this._time || !this._ts && !g) {
                            y = 0,
                            p && (h += this._zTime = k ? -D : D);
                            break
                        }
                    }
                    d = p
                }
            }
            if (y && !n && (this.pause(),
            y.render(c >= a ? 0 : -D)._zTime = c >= a ? 1 : -1,
            this._ts))
                return this._start = T,
                Me(this),
                this.render(r, n, s);
            this._onUpdate && !n && ut(this, "onUpdate", !0),
            (h === o && this._tTime >= this.totalDuration() || !h && a) && (T === this._start || Math.abs(v) !== Math.abs(this._ts)) && (this._lock || ((r || !f) && (h === o && this._ts > 0 || !h && this._ts < 0) && Ot(this, 1),
            !n && !(r < 0 && !a) && (h || a || !o) && (ut(this, h === o && r >= 0 ? "onComplete" : "onReverseComplete", !0),
            this._prom && !(h < o && this.timeScale() > 0) && this._prom())))
        }
        return this
    }
    ,
    e.add = function(r, n) {
        var s = this;
        if (xt(n) || (n = nt(this, n, r)),
        !(r instanceof he)) {
            if ($(r))
                return r.forEach(function(a) {
                    return s.add(a, n)
                }),
                this;
            if (X(r))
                return this.addLabel(r, n);
            if (L(r))
                r = U.delayedCall(0, r);
            else
                return this
        }
        return this !== r ? lt(this, r, n) : this
    }
    ,
    e.getChildren = function(r, n, s, a) {
        r === void 0 && (r = !0),
        n === void 0 && (n = !0),
        s === void 0 && (s = !0),
        a === void 0 && (a = -at);
        for (var o = [], f = this._first; f; )
            f._start >= a && (f instanceof U ? n && o.push(f) : (s && o.push(f),
            r && o.push.apply(o, f.getChildren(!0, n, s)))),
            f = f._next;
        return o
    }
    ,
    e.getById = function(r) {
        for (var n = this.getChildren(1, 1, 1), s = n.length; s--; )
            if (n[s].vars.id === r)
                return n[s]
    }
    ,
    e.remove = function(r) {
        return X(r) ? this.removeLabel(r) : L(r) ? this.killTweensOf(r) : (Ce(this, r),
        r === this._recent && (this._recent = this._last),
        Bt(this))
    }
    ,
    e.totalTime = function(r, n) {
        return arguments.length ? (this._forcing = 1,
        !this._dp && this._ts && (this._start = q(et.time - (this._ts > 0 ? r / this._ts : (this.totalDuration() - r) / -this._ts))),
        u.prototype.totalTime.call(this, r, n),
        this._forcing = 0,
        this) : this._tTime
    }
    ,
    e.addLabel = function(r, n) {
        return this.labels[r] = nt(this, n),
        this
    }
    ,
    e.removeLabel = function(r) {
        return delete this.labels[r],
        this
    }
    ,
    e.addPause = function(r, n, s) {
        var a = U.delayedCall(0, n || oe, s);
        return a.data = "isPause",
        this._hasPause = 1,
        lt(this, a, nt(this, r))
    }
    ,
    e.removePause = function(r) {
        var n = this._first;
        for (r = nt(this, r); n; )
            n._start === r && n.data === "isPause" && Ot(n),
            n = n._next
    }
    ,
    e.killTweensOf = function(r, n, s) {
        for (var a = this.getTweensOf(r, s), o = a.length; o--; )
            Tt !== a[o] && a[o].kill(r, n);
        return this
    }
    ,
    e.getTweensOf = function(r, n) {
        for (var s = [], a = ot(r), o = this._first, f = xt(n), h; o; )
            o instanceof U ? Xr(o._targets, a) && (f ? (!Tt || o._initted && o._ts) && o.globalTime(0) <= n && o.globalTime(o.totalDuration()) > n : !n || o.isActive()) && s.push(o) : (h = o.getTweensOf(a, n)).length && s.push.apply(s, h),
            o = o._next;
        return s
    }
    ,
    e.tweenTo = function(r, n) {
        n = n || {};
        var s = this, a = nt(s, r), o = n, f = o.startAt, h = o.onStart, l = o.onStartParams, c = o.immediateRender, d, p = U.to(s, ft({
            ease: n.ease || "none",
            lazy: !1,
            immediateRender: !1,
            time: a,
            overwrite: "auto",
            duration: n.duration || Math.abs((a - (f && "time"in f ? f.time : s._time)) / s.timeScale()) || D,
            onStart: function() {
                if (s.pause(),
                !d) {
                    var m = n.duration || Math.abs((a - (f && "time"in f ? f.time : s._time)) / s.timeScale());
                    p._dur !== m && Zt(p, m, 0, 1).render(p._time, !0, !0),
                    d = 1
                }
                h && h.apply(p, l || [])
            }
        }, n));
        return c ? p.render(0) : p
    }
    ,
    e.tweenFromTo = function(r, n, s) {
        return this.tweenTo(n, ft({
            startAt: {
                time: nt(this, r)
            }
        }, s))
    }
    ,
    e.recent = function() {
        return this._recent
    }
    ,
    e.nextLabel = function(r) {
        return r === void 0 && (r = this._time),
        Si(this, nt(this, r))
    }
    ,
    e.previousLabel = function(r) {
        return r === void 0 && (r = this._time),
        Si(this, nt(this, r), 1)
    }
    ,
    e.currentLabel = function(r) {
        return arguments.length ? this.seek(r, !0) : this.previousLabel(this._time + D)
    }
    ,
    e.shiftChildren = function(r, n, s) {
        s === void 0 && (s = 0);
        for (var a = this._first, o = this.labels, f; a; )
            a._start >= s && (a._start += r,
            a._end += r),
            a = a._next;
        if (n)
            for (f in o)
                o[f] >= s && (o[f] += r);
        return Bt(this)
    }
    ,
    e.invalidate = function(r) {
        var n = this._first;
        for (this._lock = 0; n; )
            n.invalidate(r),
            n = n._next;
        return u.prototype.invalidate.call(this, r)
    }
    ,
    e.clear = function(r) {
        r === void 0 && (r = !0);
        for (var n = this._first, s; n; )
            s = n._next,
            this.remove(n),
            n = s;
        return this._dp && (this._time = this._tTime = this._pTime = 0),
        r && (this.labels = {}),
        Bt(this)
    }
    ,
    e.totalDuration = function(r) {
        var n = 0, s = this, a = s._last, o = at, f, h, l;
        if (arguments.length)
            return s.timeScale((s._repeat < 0 ? s.duration() : s.totalDuration()) / (s.reversed() ? -r : r));
        if (s._dirty) {
            for (l = s.parent; a; )
                f = a._prev,
                a._dirty && a.totalDuration(),
                h = a._start,
                h > o && s._sort && a._ts && !s._lock ? (s._lock = 1,
                lt(s, a, h - a._delay, 1)._lock = 0) : o = h,
                h < 0 && a._ts && (n -= h,
                (!l && !s._dp || l && l.smoothChildTiming) && (s._start += h / s._ts,
                s._time -= h,
                s._tTime -= h),
                s.shiftChildren(-h, !1, -1 / 0),
                o = 0),
                a._end > n && a._ts && (n = a._end),
                a = f;
            Zt(s, s === R && s._time > n ? s._time : n, 1, 1),
            s._dirty = 0
        }
        return s._tDur
    }
    ,
    t.updateRoot = function(r) {
        if (R._ts && ($i(R, Se(r, R)),
        Gi = et.frame),
        et.frame >= vi) {
            vi += it.autoSleep || 120;
            var n = R._first;
            if ((!n || !n._ts) && it.autoSleep && et._listeners.length < 2) {
                for (; n && !n._ts; )
                    n = n._next;
                n || et.sleep()
            }
        }
    }
    ,
    t
}(he);
ft(K.prototype, {
    _lock: 0,
    _hasPause: 0,
    _forcing: 0
});
var cn = function(t, e, i, r, n, s, a) {
    var o = new H(this._pt,t,e,0,1,Tr,null,n), f = 0, h = 0, l, c, d, p, _, m, g, y;
    for (o.b = i,
    o.e = r,
    i += "",
    r += "",
    (g = ~r.indexOf("random(")) && (r = ue(r)),
    s && (y = [i, r],
    s(y, t, e),
    i = y[0],
    r = y[1]),
    c = i.match(Ae) || []; l = Ae.exec(r); )
        p = l[0],
        _ = r.substring(f, l.index),
        d ? d = (d + 1) % 5 : _.substr(-5) === "rgba(" && (d = 1),
        p !== c[h++] && (m = parseFloat(c[h - 1]) || 0,
        o._pt = {
            _next: o._pt,
            p: _ || h === 1 ? _ : ",",
            s: m,
            c: p.charAt(1) === "=" ? Wt(m, p) - m : parseFloat(p) - m,
            m: d && d < 4 ? Math.round : 0
        },
        f = Ae.lastIndex);
    return o.c = f < r.length ? r.substring(f, r.length) : "",
    o.fp = a,
    (Vi.test(r) || g) && (o.e = 0),
    this._pt = o,
    o
}, hi = function(t, e, i, r, n, s, a, o, f, h) {
    L(r) && (r = r(n || 0, t, s));
    var l = t[e], c = i !== "get" ? i : L(l) ? f ? t[e.indexOf("set") || !L(t["get" + e.substr(3)]) ? e : "get" + e.substr(3)](f) : t[e]() : l, d = L(l) ? f ? yn : xr : li, p;
    if (X(r) && (~r.indexOf("random(") && (r = ue(r)),
    r.charAt(1) === "=" && (p = Wt(c, r) + (G(c) || 0),
    (p || p === 0) && (r = p))),
    !h || c !== r || Qe)
        return !isNaN(c * r) && r !== "" ? (p = new H(this._pt,t,e,+c || 0,r - (c || 0),typeof l == "boolean" ? vn : vr,0,d),
        f && (p.fp = f),
        a && p.modifier(a, this, t),
        this._pt = p) : (!l && !(e in t) && ai(e, r),
        cn.call(this, t, e, c, r, d, o || it.stringFilter, f))
}, dn = function(t, e, i, r, n) {
    if (L(t) && (t = ae(t, n, e, i, r)),
    !pt(t) || t.style && t.nodeType || $(t) || Bi(t))
        return X(t) ? ae(t, n, e, i, r) : t;
    var s = {}, a;
    for (a in t)
        s[a] = ae(t[a], n, e, i, r);
    return s
}, mr = function(t, e, i, r, n, s) {
    var a, o, f, h;
    if (tt[t] && (a = new tt[t]).init(n, a.rawVars ? e[t] : dn(e[t], r, n, s, i), i, r, s) !== !1 && (i._pt = o = new H(i._pt,n,t,0,1,a.render,a,0,a.priority),
    i !== Gt))
        for (f = i._ptLookup[i._targets.indexOf(n)],
        h = a._props.length; h--; )
            f[a._props[h]] = o;
    return a
}, Tt, Qe, _i = function u(t, e, i) {
    var r = t.vars, n = r.ease, s = r.startAt, a = r.immediateRender, o = r.lazy, f = r.onUpdate, h = r.onUpdateParams, l = r.callbackScope, c = r.runBackwards, d = r.yoyoEase, p = r.keyframes, _ = r.autoRevert, m = t._dur, g = t._startAt, y = t._targets, v = t.parent, T = v && v.data === "nested" ? v.vars.targets : y, x = t._overwrite === "auto" && !ii, P = t.timeline, S, w, b, k, C, F, B, N, A, Y, V, j, Mt;
    if (P && (!p || !n) && (n = "none"),
    t._ease = Nt(n, Kt.ease),
    t._yEase = d ? lr(Nt(d === !0 ? n : d, Kt.ease)) : 0,
    d && t._yoyo && !t._repeat && (d = t._yEase,
    t._yEase = t._ease,
    t._ease = d),
    t._from = !P && !!r.runBackwards,
    !P || p && !r.stagger) {
        if (N = y[0] ? It(y[0]).harness : 0,
        j = N && r[N.prop],
        S = we(r, oi),
        g && (g._zTime < 0 && g.progress(1),
        e < 0 && c && a && !_ ? g.render(-1, !0) : g.revert(c && m ? ge : Ur),
        g._lazy = 0),
        s) {
            if (Ot(t._startAt = U.set(y, ft({
                data: "isStart",
                overwrite: !1,
                parent: v,
                immediateRender: !0,
                lazy: !g && Q(o),
                startAt: null,
                delay: 0,
                onUpdate: f,
                onUpdateParams: h,
                callbackScope: l,
                stagger: 0
            }, s))),
            t._startAt._dp = 0,
            t._startAt._sat = t,
            e < 0 && (W || !a && !_) && t._startAt.revert(ge),
            a && m && e <= 0 && i <= 0) {
                e && (t._zTime = e);
                return
            }
        } else if (c && m && !g) {
            if (e && (a = !1),
            b = ft({
                overwrite: !1,
                data: "isFromStart",
                lazy: a && !g && Q(o),
                immediateRender: a,
                stagger: 0,
                parent: v
            }, S),
            j && (b[N.prop] = j),
            Ot(t._startAt = U.set(y, b)),
            t._startAt._dp = 0,
            t._startAt._sat = t,
            e < 0 && (W ? t._startAt.revert(ge) : t._startAt.render(-1, !0)),
            t._zTime = e,
            !a)
                u(t._startAt, D, D);
            else if (!e)
                return
        }
        for (t._pt = t._ptCache = 0,
        o = m && Q(o) || o && !m,
        w = 0; w < y.length; w++) {
            if (C = y[w],
            B = C._gsap || fi(y)[w]._gsap,
            t._ptLookup[w] = Y = {},
            qe[B.id] && St.length && be(),
            V = T === y ? w : T.indexOf(C),
            N && (A = new N).init(C, j || S, t, V, T) !== !1 && (t._pt = k = new H(t._pt,C,A.name,0,1,A.render,A,0,A.priority),
            A._props.forEach(function(Dt) {
                Y[Dt] = k
            }),
            A.priority && (F = 1)),
            !N || j)
                for (b in S)
                    tt[b] && (A = mr(b, S, t, V, C, T)) ? A.priority && (F = 1) : Y[b] = k = hi.call(t, C, b, "get", S[b], V, T, 0, r.stringFilter);
            t._op && t._op[w] && t.kill(C, t._op[w]),
            x && t._pt && (Tt = t,
            R.killTweensOf(C, Y, t.globalTime(e)),
            Mt = !t.parent,
            Tt = 0),
            t._pt && o && (qe[B.id] = 1)
        }
        F && br(t),
        t._onInit && t._onInit(t)
    }
    t._onUpdate = f,
    t._initted = (!t._op || t._pt) && !Mt,
    p && e <= 0 && P.render(at, !0, !0)
}, pn = function(t, e, i, r, n, s, a) {
    var o = (t._pt && t._ptCache || (t._ptCache = {}))[e], f, h, l, c;
    if (!o)
        for (o = t._ptCache[e] = [],
        l = t._ptLookup,
        c = t._targets.length; c--; ) {
            if (f = l[c][e],
            f && f.d && f.d._pt)
                for (f = f.d._pt; f && f.p !== e && f.fp !== e; )
                    f = f._next;
            if (!f)
                return Qe = 1,
                t.vars[e] = "+=0",
                _i(t, a),
                Qe = 0,
                1;
            o.push(f)
        }
    for (c = o.length; c--; )
        h = o[c],
        f = h._pt || h,
        f.s = (r || r === 0) && !n ? r : f.s + (r || 0) + s * f.c,
        f.c = i - f.s,
        h.e && (h.e = I(i) + G(h.e)),
        h.b && (h.b = f.s + G(h.b))
}, mn = function(t, e) {
    var i = t[0] ? It(t[0]).harness : 0, r = i && i.aliases, n, s, a, o;
    if (!r)
        return e;
    n = Ut({}, e);
    for (s in r)
        if (s in n)
            for (o = r[s].split(","),
            a = o.length; a--; )
                n[o[a]] = n[s];
    return n
}, gn = function(t, e, i, r) {
    var n = e.ease || r || "power1.inOut", s, a;
    if ($(e))
        a = i[t] || (i[t] = []),
        e.forEach(function(o, f) {
            return a.push({
                t: f / (e.length - 1) * 100,
                v: o,
                e: n
            })
        });
    else
        for (s in e)
            a = i[s] || (i[s] = []),
            s === "ease" || a.push({
                t: parseFloat(t),
                v: e[s],
                e: n
            })
}, ae = function(t, e, i, r, n) {
    return L(t) ? t.call(e, i, r, n) : X(t) && ~t.indexOf("random(") ? ue(t) : t
}, gr = ui + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert", yr = {};
Z(gr + ",id,stagger,delay,duration,paused,scrollTrigger", function(u) {
    return yr[u] = 1
});
var U = function(u) {
    Li(t, u);
    function t(i, r, n, s) {
        var a;
        typeof r == "number" && (n.duration = r,
        r = n,
        n = null),
        a = u.call(this, s ? r : ne(r)) || this;
        var o = a.vars, f = o.duration, h = o.delay, l = o.immediateRender, c = o.stagger, d = o.overwrite, p = o.keyframes, _ = o.defaults, m = o.scrollTrigger, g = o.yoyoEase, y = r.parent || R, v = ($(i) || Bi(i) ? xt(i[0]) : "length"in r) ? [i] : ot(i), T, x, P, S, w, b, k, C;
        if (a._targets = v.length ? fi(v) : Te("GSAP target " + i + " not found. https://greensock.com", !it.nullTargetWarn) || [],
        a._ptLookup = [],
        a._overwrite = d,
        p || c || me(f) || me(h)) {
            if (r = a.vars,
            T = a.timeline = new K({
                data: "nested",
                defaults: _ || {},
                targets: y && y.data === "nested" ? y.vars.targets : v
            }),
            T.kill(),
            T.parent = T._dp = gt(a),
            T._start = 0,
            c || me(f) || me(h)) {
                if (S = v.length,
                k = c && ir(c),
                pt(c))
                    for (w in c)
                        ~gr.indexOf(w) && (C || (C = {}),
                        C[w] = c[w]);
                for (x = 0; x < S; x++)
                    P = we(r, yr),
                    P.stagger = 0,
                    g && (P.yoyoEase = g),
                    C && Ut(P, C),
                    b = v[x],
                    P.duration = +ae(f, gt(a), x, b, v),
                    P.delay = (+ae(h, gt(a), x, b, v) || 0) - a._delay,
                    !c && S === 1 && P.delay && (a._delay = h = P.delay,
                    a._start += h,
                    P.delay = 0),
                    T.to(b, P, k ? k(x, b, v) : 0),
                    T._ease = O.none;
                T.duration() ? f = h = 0 : a.timeline = 0
            } else if (p) {
                ne(ft(T.vars.defaults, {
                    ease: "none"
                })),
                T._ease = Nt(p.ease || r.ease || "none");
                var F = 0, B, N, A;
                if ($(p))
                    p.forEach(function(Y) {
                        return T.to(v, Y, ">")
                    }),
                    T.duration();
                else {
                    P = {};
                    for (w in p)
                        w === "ease" || w === "easeEach" || gn(w, p[w], P, p.easeEach);
                    for (w in P)
                        for (B = P[w].sort(function(Y, V) {
                            return Y.t - V.t
                        }),
                        F = 0,
                        x = 0; x < B.length; x++)
                            N = B[x],
                            A = {
                                ease: N.e,
                                duration: (N.t - (x ? B[x - 1].t : 0)) / 100 * f
                            },
                            A[w] = N.v,
                            T.to(v, A, F),
                            F += A.duration;
                    T.duration() < f && T.to({}, {
                        duration: f - T.duration()
                    })
                }
            }
            f || a.duration(f = T.duration())
        } else
            a.timeline = 0;
        return d === !0 && !ii && (Tt = gt(a),
        R.killTweensOf(v),
        Tt = 0),
        lt(y, gt(a), n),
        r.reversed && a.reverse(),
        r.paused && a.paused(!0),
        (l || !f && !p && a._start === q(y._time) && Q(l) && $r(gt(a)) && y.data !== "nested") && (a._tTime = -D,
        a.render(Math.max(0, -h) || 0)),
        m && Hi(gt(a), m),
        a
    }
    var e = t.prototype;
    return e.render = function(r, n, s) {
        var a = this._time, o = this._tDur, f = this._dur, h = r < 0, l = r > o - D && !h ? o : r < D ? 0 : r, c, d, p, _, m, g, y, v, T;
        if (!f)
            Kr(this, r, n, s);
        else if (l !== this._tTime || !r || s || !this._initted && this._tTime || this._startAt && this._zTime < 0 !== h) {
            if (c = l,
            v = this.timeline,
            this._repeat) {
                if (_ = f + this._rDelay,
                this._repeat < -1 && h)
                    return this.totalTime(_ * 100 + r, n, s);
                if (c = q(l % _),
                l === o ? (p = this._repeat,
                c = f) : (p = ~~(l / _),
                p && p === l / _ && (c = f,
                p--),
                c > f && (c = f)),
                g = this._yoyo && p & 1,
                g && (T = this._yEase,
                c = f - c),
                m = Qt(this._tTime, _),
                c === a && !s && this._initted)
                    return this._tTime = l,
                    this;
                p !== m && (v && this._yEase && cr(v, g),
                this.vars.repeatRefresh && !g && !this._lock && (this._lock = s = 1,
                this.render(q(_ * p), !0).invalidate()._lock = 0))
            }
            if (!this._initted) {
                if (Ji(this, h ? r : c, s, n, l))
                    return this._tTime = 0,
                    this;
                if (a !== this._time)
                    return this;
                if (f !== this._dur)
                    return this.render(r, n, s)
            }
            if (this._tTime = l,
            this._time = c,
            !this._act && this._ts && (this._act = 1,
            this._lazy = 0),
            this.ratio = y = (T || this._ease)(c / f),
            this._from && (this.ratio = y = 1 - y),
            c && !a && !n && !p && (ut(this, "onStart"),
            this._tTime !== l))
                return this;
            for (d = this._pt; d; )
                d.r(y, d.d),
                d = d._next;
            v && v.render(r < 0 ? r : !c && g ? -D : v._dur * v._ease(c / this._dur), n, s) || this._startAt && (this._zTime = r),
            this._onUpdate && !n && (h && Ge(this, r, n, s),
            ut(this, "onUpdate")),
            this._repeat && p !== m && this.vars.onRepeat && !n && this.parent && ut(this, "onRepeat"),
            (l === this._tDur || !l) && this._tTime === l && (h && !this._onUpdate && Ge(this, r, !0, !0),
            (r || !f) && (l === this._tDur && this._ts > 0 || !l && this._ts < 0) && Ot(this, 1),
            !n && !(h && !a) && (l || a || g) && (ut(this, l === o ? "onComplete" : "onReverseComplete", !0),
            this._prom && !(l < o && this.timeScale() > 0) && this._prom()))
        }
        return this
    }
    ,
    e.targets = function() {
        return this._targets
    }
    ,
    e.invalidate = function(r) {
        return (!r || !this.vars.runBackwards) && (this._startAt = 0),
        this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0,
        this._ptLookup = [],
        this.timeline && this.timeline.invalidate(r),
        u.prototype.invalidate.call(this, r)
    }
    ,
    e.resetTo = function(r, n, s, a) {
        fe || et.wake(),
        this._ts || this.play();
        var o = Math.min(this._dur, (this._dp._time - this._start) * this._ts), f;
        return this._initted || _i(this, o),
        f = this._ease(o / this._dur),
        pn(this, r, n, s, a, f, o) ? this.resetTo(r, n, s, a) : (De(this, 0),
        this.parent || Qi(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0),
        this.render(0))
    }
    ,
    e.kill = function(r, n) {
        if (n === void 0 && (n = "all"),
        !r && (!n || n === "all"))
            return this._lazy = this._pt = 0,
            this.parent ? ie(this) : this;
        if (this.timeline) {
            var s = this.timeline.totalDuration();
            return this.timeline.killTweensOf(r, n, Tt && Tt.vars.overwrite !== !0)._first || ie(this),
            this.parent && s !== this.timeline.totalDuration() && Zt(this, this._dur * this.timeline._tDur / s, 0, 1),
            this
        }
        var a = this._targets, o = r ? ot(r) : a, f = this._ptLookup, h = this._pt, l, c, d, p, _, m, g;
        if ((!n || n === "all") && Gr(a, o))
            return n === "all" && (this._pt = 0),
            ie(this);
        for (l = this._op = this._op || [],
        n !== "all" && (X(n) && (_ = {},
        Z(n, function(y) {
            return _[y] = 1
        }),
        n = _),
        n = mn(a, n)),
        g = a.length; g--; )
            if (~o.indexOf(a[g])) {
                c = f[g],
                n === "all" ? (l[g] = n,
                p = c,
                d = {}) : (d = l[g] = l[g] || {},
                p = n);
                for (_ in p)
                    m = c && c[_],
                    m && ((!("kill"in m.d) || m.d.kill(_) === !0) && Ce(this, m, "_pt"),
                    delete c[_]),
                    d !== "all" && (d[_] = 1)
            }
        return this._initted && !this._pt && h && ie(this),
        this
    }
    ,
    t.to = function(r, n) {
        return new t(r,n,arguments[2])
    }
    ,
    t.from = function(r, n) {
        return se(1, arguments)
    }
    ,
    t.delayedCall = function(r, n, s, a) {
        return new t(n,0,{
            immediateRender: !1,
            lazy: !1,
            overwrite: !1,
            delay: r,
            onComplete: n,
            onReverseComplete: n,
            onCompleteParams: s,
            onReverseCompleteParams: s,
            callbackScope: a
        })
    }
    ,
    t.fromTo = function(r, n, s) {
        return se(2, arguments)
    }
    ,
    t.set = function(r, n) {
        return n.duration = 0,
        n.repeatDelay || (n.repeat = 0),
        new t(r,n)
    }
    ,
    t.killTweensOf = function(r, n, s) {
        return R.killTweensOf(r, n, s)
    }
    ,
    t
}(he);
ft(U.prototype, {
    _targets: [],
    _lazy: 0,
    _startAt: 0,
    _op: 0,
    _onInit: 0
});
Z("staggerTo,staggerFrom,staggerFromTo", function(u) {
    U[u] = function() {
        var t = new K
          , e = $e.call(arguments, 0);
        return e.splice(u === "staggerFromTo" ? 5 : 4, 0, 0),
        t[u].apply(t, e)
    }
});
var li = function(t, e, i) {
    return t[e] = i
}
  , xr = function(t, e, i) {
    return t[e](i)
}
  , yn = function(t, e, i, r) {
    return t[e](r.fp, i)
}
  , xn = function(t, e, i) {
    return t.setAttribute(e, i)
}
  , ci = function(t, e) {
    return L(t[e]) ? xr : ri(t[e]) && t.setAttribute ? xn : li
}
  , vr = function(t, e) {
    return e.set(e.t, e.p, Math.round((e.s + e.c * t) * 1e6) / 1e6, e)
}
  , vn = function(t, e) {
    return e.set(e.t, e.p, !!(e.s + e.c * t), e)
}
  , Tr = function(t, e) {
    var i = e._pt
      , r = "";
    if (!t && e.b)
        r = e.b;
    else if (t === 1 && e.e)
        r = e.e;
    else {
        for (; i; )
            r = i.p + (i.m ? i.m(i.s + i.c * t) : Math.round((i.s + i.c * t) * 1e4) / 1e4) + r,
            i = i._next;
        r += e.c
    }
    e.set(e.t, e.p, r, e)
}
  , di = function(t, e) {
    for (var i = e._pt; i; )
        i.r(t, i.d),
        i = i._next
}
  , Tn = function(t, e, i, r) {
    for (var n = this._pt, s; n; )
        s = n._next,
        n.p === r && n.modifier(t, e, i),
        n = s
}
  , bn = function(t) {
    for (var e = this._pt, i, r; e; )
        r = e._next,
        e.p === t && !e.op || e.op === t ? Ce(this, e, "_pt") : e.dep || (i = 1),
        e = r;
    return !i
}
  , wn = function(t, e, i, r) {
    r.mSet(t, e, r.m.call(r.tween, i, r.mt), r)
}
  , br = function(t) {
    for (var e = t._pt, i, r, n, s; e; ) {
        for (i = e._next,
        r = n; r && r.pr > e.pr; )
            r = r._next;
        (e._prev = r ? r._prev : s) ? e._prev._next = e : n = e,
        (e._next = r) ? r._prev = e : s = e,
        e = i
    }
    t._pt = n
}
  , H = function() {
    function u(e, i, r, n, s, a, o, f, h) {
        this.t = i,
        this.s = n,
        this.c = s,
        this.p = r,
        this.r = a || vr,
        this.d = o || this,
        this.set = f || li,
        this.pr = h || 0,
        this._next = e,
        e && (e._prev = this)
    }
    var t = u.prototype;
    return t.modifier = function(i, r, n) {
        this.mSet = this.mSet || this.set,
        this.set = wn,
        this.m = i,
        this.mt = n,
        this.tween = r
    }
    ,
    u
}();
Z(ui + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", function(u) {
    return oi[u] = 1
});
rt.TweenMax = rt.TweenLite = U;
rt.TimelineLite = rt.TimelineMax = K;
R = new K({
    sortChildren: !1,
    defaults: Kt,
    autoRemoveChildren: !0,
    id: "root",
    smoothChildTiming: !0
});
it.stringFilter = _r;
var Vt = []
  , xe = {}
  , Sn = []
  , Oi = 0
  , Pn = 0
  , Le = function(t) {
    return (xe[t] || Sn).map(function(e) {
        return e()
    })
}
  , Ze = function() {
    var t = Date.now()
      , e = [];
    t - Oi > 2 && (Le("matchMediaInit"),
    Vt.forEach(function(i) {
        var r = i.queries, n = i.conditions, s, a, o, f;
        for (a in r)
            s = st.matchMedia(r[a]).matches,
            s && (o = 1),
            s !== n[a] && (n[a] = s,
            f = 1);
        f && (i.revert(),
        o && e.push(i))
    }),
    Le("matchMediaRevert"),
    e.forEach(function(i) {
        return i.onMatch(i)
    }),
    Oi = t,
    Le("matchMedia"))
}
  , wr = function() {
    function u(e, i) {
        this.selector = i && je(i),
        this.data = [],
        this._r = [],
        this.isReverted = !1,
        this.id = Pn++,
        e && this.add(e)
    }
    var t = u.prototype;
    return t.add = function(i, r, n) {
        L(i) && (n = r,
        r = i,
        i = L);
        var s = this
          , a = function() {
            var f = z, h = s.selector, l;
            return f && f !== s && f.data.push(s),
            n && (s.selector = je(n)),
            z = s,
            l = r.apply(s, arguments),
            L(l) && s._r.push(l),
            z = f,
            s.selector = h,
            s.isReverted = !1,
            l
        };
        return s.last = a,
        i === L ? a(s) : i ? s[i] = a : a
    }
    ,
    t.ignore = function(i) {
        var r = z;
        z = null,
        i(this),
        z = r
    }
    ,
    t.getTweens = function() {
        var i = [];
        return this.data.forEach(function(r) {
            return r instanceof u ? i.push.apply(i, r.getTweens()) : r instanceof U && !(r.parent && r.parent.data === "nested") && i.push(r)
        }),
        i
    }
    ,
    t.clear = function() {
        this._r.length = this.data.length = 0
    }
    ,
    t.kill = function(i, r) {
        var n = this;
        if (i) {
            var s = this.getTweens();
            this.data.forEach(function(o) {
                o.data === "isFlip" && (o.revert(),
                o.getChildren(!0, !0, !1).forEach(function(f) {
                    return s.splice(s.indexOf(f), 1)
                }))
            }),
            s.map(function(o) {
                return {
                    g: o.globalTime(0),
                    t: o
                }
            }).sort(function(o, f) {
                return f.g - o.g || -1 / 0
            }).forEach(function(o) {
                return o.t.revert(i)
            }),
            this.data.forEach(function(o) {
                return !(o instanceof U) && o.revert && o.revert(i)
            }),
            this._r.forEach(function(o) {
                return o(i, n)
            }),
            this.isReverted = !0
        } else
            this.data.forEach(function(o) {
                return o.kill && o.kill()
            });
        if (this.clear(),
        r)
            for (var a = Vt.length; a--; )
                Vt[a].id === this.id && Vt.splice(a, 1)
    }
    ,
    t.revert = function(i) {
        this.kill(i || {})
    }
    ,
    u
}()
  , On = function() {
    function u(e) {
        this.contexts = [],
        this.scope = e
    }
    var t = u.prototype;
    return t.add = function(i, r, n) {
        pt(i) || (i = {
            matches: i
        });
        var s = new wr(0,n || this.scope), a = s.conditions = {}, o, f, h;
        z && !s.selector && (s.selector = z.selector),
        this.contexts.push(s),
        r = s.add("onMatch", r),
        s.queries = i;
        for (f in i)
            f === "all" ? h = 1 : (o = st.matchMedia(i[f]),
            o && (Vt.indexOf(s) < 0 && Vt.push(s),
            (a[f] = o.matches) && (h = 1),
            o.addListener ? o.addListener(Ze) : o.addEventListener("change", Ze)));
        return h && r(s),
        this
    }
    ,
    t.revert = function(i) {
        this.kill(i || {})
    }
    ,
    t.kill = function(i) {
        this.contexts.forEach(function(r) {
            return r.kill(i, !0)
        })
    }
    ,
    u
}()
  , Pe = {
    registerPlugin: function() {
        for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++)
            e[i] = arguments[i];
        e.forEach(function(r) {
            return ur(r)
        })
    },
    timeline: function(t) {
        return new K(t)
    },
    getTweensOf: function(t, e) {
        return R.getTweensOf(t, e)
    },
    getProperty: function(t, e, i, r) {
        X(t) && (t = ot(t)[0]);
        var n = It(t || {}).get
          , s = i ? Ki : ji;
        return i === "native" && (i = ""),
        t && (e ? s((tt[e] && tt[e].get || n)(t, e, i, r)) : function(a, o, f) {
            return s((tt[a] && tt[a].get || n)(t, a, o, f))
        }
        )
    },
    quickSetter: function(t, e, i) {
        if (t = ot(t),
        t.length > 1) {
            var r = t.map(function(h) {
                return J.quickSetter(h, e, i)
            })
              , n = r.length;
            return function(h) {
                for (var l = n; l--; )
                    r[l](h)
            }
        }
        t = t[0] || {};
        var s = tt[e]
          , a = It(t)
          , o = a.harness && (a.harness.aliases || {})[e] || e
          , f = s ? function(h) {
            var l = new s;
            Gt._pt = 0,
            l.init(t, i ? h + i : h, Gt, 0, [t]),
            l.render(1, l),
            Gt._pt && di(1, Gt)
        }
        : a.set(t, o);
        return s ? f : function(h) {
            return f(t, o, i ? h + i : h, a, 1)
        }
    },
    quickTo: function(t, e, i) {
        var r, n = J.to(t, Ut((r = {},
        r[e] = "+=0.1",
        r.paused = !0,
        r), i || {})), s = function(o, f, h) {
            return n.resetTo(e, o, f, h)
        };
        return s.tween = n,
        s
    },
    isTweening: function(t) {
        return R.getTweensOf(t, !0).length > 0
    },
    defaults: function(t) {
        return t && t.ease && (t.ease = Nt(t.ease, Kt.ease)),
        Ti(Kt, t || {})
    },
    config: function(t) {
        return Ti(it, t || {})
    },
    registerEffect: function(t) {
        var e = t.name
          , i = t.effect
          , r = t.plugins
          , n = t.defaults
          , s = t.extendTimeline;
        (r || "").split(",").forEach(function(a) {
            return a && !tt[a] && !rt[a] && Te(e + " effect requires " + a + " plugin.")
        }),
        Re[e] = function(a, o, f) {
            return i(ot(a), ft(o || {}, n), f)
        }
        ,
        s && (K.prototype[e] = function(a, o, f) {
            return this.add(Re[e](a, pt(o) ? o : (f = o) && {}, this), f)
        }
        )
    },
    registerEase: function(t, e) {
        O[t] = Nt(e)
    },
    parseEase: function(t, e) {
        return arguments.length ? Nt(t, e) : O
    },
    getById: function(t) {
        return R.getById(t)
    },
    exportRoot: function(t, e) {
        t === void 0 && (t = {});
        var i = new K(t), r, n;
        for (i.smoothChildTiming = Q(t.smoothChildTiming),
        R.remove(i),
        i._dp = 0,
        i._time = i._tTime = R._time,
        r = R._first; r; )
            n = r._next,
            (e || !(!r._dur && r instanceof U && r.vars.onComplete === r._targets[0])) && lt(i, r, r._start - r._delay),
            r = n;
        return lt(R, i, 0),
        i
    },
    context: function(t, e) {
        return t ? new wr(t,e) : z
    },
    matchMedia: function(t) {
        return new On(t)
    },
    matchMediaRefresh: function() {
        return Vt.forEach(function(t) {
            var e = t.conditions, i, r;
            for (r in e)
                e[r] && (e[r] = !1,
                i = 1);
            i && t.revert()
        }) || Ze()
    },
    addEventListener: function(t, e) {
        var i = xe[t] || (xe[t] = []);
        ~i.indexOf(e) || i.push(e)
    },
    removeEventListener: function(t, e) {
        var i = xe[t]
          , r = i && i.indexOf(e);
        r >= 0 && i.splice(r, 1)
    },
    utils: {
        wrap: nn,
        wrapYoyo: sn,
        distribute: ir,
        random: nr,
        snap: rr,
        normalize: rn,
        getUnit: G,
        clamp: Hr,
        splitColor: fr,
        toArray: ot,
        selector: je,
        mapRange: ar,
        pipe: tn,
        unitize: en,
        interpolate: an,
        shuffle: er
    },
    install: Xi,
    effects: Re,
    ticker: et,
    updateRoot: K.updateRoot,
    plugins: tt,
    globalTimeline: R,
    core: {
        PropTween: H,
        globals: qi,
        Tween: U,
        Timeline: K,
        Animation: he,
        getCache: It,
        _removeLinkedListItem: Ce,
        reverting: function() {
            return W
        },
        context: function(t) {
            return t && z && (z.data.push(t),
            t._ctx = z),
            z
        },
        suppressOverwrites: function(t) {
            return ii = t
        }
    }
};
Z("to,from,fromTo,delayedCall,set,killTweensOf", function(u) {
    return Pe[u] = U[u]
});
et.add(K.updateRoot);
Gt = Pe.to({}, {
    duration: 0
});
var kn = function(t, e) {
    for (var i = t._pt; i && i.p !== e && i.op !== e && i.fp !== e; )
        i = i._next;
    return i
}
  , Cn = function(t, e) {
    var i = t._targets, r, n, s;
    for (r in e)
        for (n = i.length; n--; )
            s = t._ptLookup[n][r],
            s && (s = s.d) && (s._pt && (s = kn(s, r)),
            s && s.modifier && s.modifier(e[r], t, i[n], r))
}
  , Ie = function(t, e) {
    return {
        name: t,
        rawVars: 1,
        init: function(r, n, s) {
            s._onInit = function(a) {
                var o, f;
                if (X(n) && (o = {},
                Z(n, function(h) {
                    return o[h] = 1
                }),
                n = o),
                e) {
                    o = {};
                    for (f in n)
                        o[f] = e(n[f]);
                    n = o
                }
                Cn(a, n)
            }
        }
    }
}
  , J = Pe.registerPlugin({
    name: "attr",
    init: function(t, e, i, r, n) {
        var s, a, o;
        this.tween = i;
        for (s in e)
            o = t.getAttribute(s) || "",
            a = this.add(t, "setAttribute", (o || 0) + "", e[s], r, n, 0, 0, s),
            a.op = s,
            a.b = o,
            this._props.push(s)
    },
    render: function(t, e) {
        for (var i = e._pt; i; )
            W ? i.set(i.t, i.p, i.b, i) : i.r(t, i.d),
            i = i._next
    }
}, {
    name: "endArray",
    init: function(t, e) {
        for (var i = e.length; i--; )
            this.add(t, i, t[i] || 0, e[i], 0, 0, 0, 0, 0, 1)
    }
}, Ie("roundProps", Ke), Ie("modifiers"), Ie("snap", rr)) || Pe;
U.version = K.version = J.version = "3.12.2";
Yi = 1;
ni() && Ht();
O.Power0;
O.Power1;
O.Power2;
O.Power3;
O.Power4;
O.Linear;
O.Quad;
O.Cubic;
O.Quart;
O.Quint;
O.Strong;
O.Elastic;
O.Back;
O.SteppedEase;
O.Bounce;
O.Sine;
O.Expo;
O.Circ;
/*!
 * CSSPlugin 3.12.2
 * https://greensock.com
 *
 * Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
var ki, bt, $t, pi, Lt, Ci, mi, Mn = function() {
    return typeof window < "u"
}, vt = {}, zt = 180 / Math.PI, jt = Math.PI / 180, Xt = Math.atan2, Mi = 1e8, gi = /([A-Z])/g, Dn = /(left|right|width|margin|padding|x)/i, An = /[\s,\(]\S/, ct = {
    autoAlpha: "opacity,visibility",
    scale: "scaleX,scaleY",
    alpha: "opacity"
}, He = function(t, e) {
    return e.set(e.t, e.p, Math.round((e.s + e.c * t) * 1e4) / 1e4 + e.u, e)
}, Rn = function(t, e) {
    return e.set(e.t, e.p, t === 1 ? e.e : Math.round((e.s + e.c * t) * 1e4) / 1e4 + e.u, e)
}, En = function(t, e) {
    return e.set(e.t, e.p, t ? Math.round((e.s + e.c * t) * 1e4) / 1e4 + e.u : e.b, e)
}, Fn = function(t, e) {
    var i = e.s + e.c * t;
    e.set(e.t, e.p, ~~(i + (i < 0 ? -.5 : .5)) + e.u, e)
}, Sr = function(t, e) {
    return e.set(e.t, e.p, t ? e.e : e.b, e)
}, Pr = function(t, e) {
    return e.set(e.t, e.p, t !== 1 ? e.b : e.e, e)
}, zn = function(t, e, i) {
    return t.style[e] = i
}, Ln = function(t, e, i) {
    return t.style.setProperty(e, i)
}, In = function(t, e, i) {
    return t._gsap[e] = i
}, Bn = function(t, e, i) {
    return t._gsap.scaleX = t._gsap.scaleY = i
}, Nn = function(t, e, i, r, n) {
    var s = t._gsap;
    s.scaleX = s.scaleY = i,
    s.renderTransform(n, s)
}, Vn = function(t, e, i, r, n) {
    var s = t._gsap;
    s[e] = i,
    s.renderTransform(n, s)
}, E = "transform", ht = E + "Origin", Un = function u(t, e) {
    var i = this
      , r = this.target
      , n = r.style;
    if (t in vt && n) {
        if (this.tfm = this.tfm || {},
        t !== "transform")
            t = ct[t] || t,
            ~t.indexOf(",") ? t.split(",").forEach(function(s) {
                return i.tfm[s] = yt(r, s)
            }) : this.tfm[t] = r._gsap.x ? r._gsap[t] : yt(r, t);
        else
            return ct.transform.split(",").forEach(function(s) {
                return u.call(i, s, e)
            });
        if (this.props.indexOf(E) >= 0)
            return;
        r._gsap.svg && (this.svgo = r.getAttribute("data-svg-origin"),
        this.props.push(ht, e, "")),
        t = E
    }
    (n || e) && this.props.push(t, e, n[t])
}, Or = function(t) {
    t.translate && (t.removeProperty("translate"),
    t.removeProperty("scale"),
    t.removeProperty("rotate"))
}, Yn = function() {
    var t = this.props, e = this.target, i = e.style, r = e._gsap, n, s;
    for (n = 0; n < t.length; n += 3)
        t[n + 1] ? e[t[n]] = t[n + 2] : t[n + 2] ? i[t[n]] = t[n + 2] : i.removeProperty(t[n].substr(0, 2) === "--" ? t[n] : t[n].replace(gi, "-$1").toLowerCase());
    if (this.tfm) {
        for (s in this.tfm)
            r[s] = this.tfm[s];
        r.svg && (r.renderTransform(),
        e.setAttribute("data-svg-origin", this.svgo || "")),
        n = mi(),
        (!n || !n.isStart) && !i[E] && (Or(i),
        r.uncache = 1)
    }
}, kr = function(t, e) {
    var i = {
        target: t,
        props: [],
        revert: Yn,
        save: Un
    };
    return t._gsap || J.core.getCache(t),
    e && e.split(",").forEach(function(r) {
        return i.save(r)
    }),
    i
}, Cr, Je = function(t, e) {
    var i = bt.createElementNS ? bt.createElementNS((e || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), t) : bt.createElement(t);
    return i.style ? i : bt.createElement(t)
}, dt = function u(t, e, i) {
    var r = getComputedStyle(t);
    return r[e] || r.getPropertyValue(e.replace(gi, "-$1").toLowerCase()) || r.getPropertyValue(e) || !i && u(t, Jt(e) || e, 1) || ""
}, Di = "O,Moz,ms,Ms,Webkit".split(","), Jt = function(t, e, i) {
    var r = e || Lt
      , n = r.style
      , s = 5;
    if (t in n && !i)
        return t;
    for (t = t.charAt(0).toUpperCase() + t.substr(1); s-- && !(Di[s] + t in n); )
        ;
    return s < 0 ? null : (s === 3 ? "ms" : s >= 0 ? Di[s] : "") + t
}, ti = function() {
    Mn() && window.document && (ki = window,
    bt = ki.document,
    $t = bt.documentElement,
    Lt = Je("div") || {
        style: {}
    },
    Je("div"),
    E = Jt(E),
    ht = E + "Origin",
    Lt.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0",
    Cr = !!Jt("perspective"),
    mi = J.core.reverting,
    pi = 1)
}, Be = function u(t) {
    var e = Je("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"), i = this.parentNode, r = this.nextSibling, n = this.style.cssText, s;
    if ($t.appendChild(e),
    e.appendChild(this),
    this.style.display = "block",
    t)
        try {
            s = this.getBBox(),
            this._gsapBBox = this.getBBox,
            this.getBBox = u
        } catch {}
    else
        this._gsapBBox && (s = this._gsapBBox());
    return i && (r ? i.insertBefore(this, r) : i.appendChild(this)),
    $t.removeChild(e),
    this.style.cssText = n,
    s
}, Ai = function(t, e) {
    for (var i = e.length; i--; )
        if (t.hasAttribute(e[i]))
            return t.getAttribute(e[i])
}, Mr = function(t) {
    var e;
    try {
        e = t.getBBox()
    } catch {
        e = Be.call(t, !0)
    }
    return e && (e.width || e.height) || t.getBBox === Be || (e = Be.call(t, !0)),
    e && !e.width && !e.x && !e.y ? {
        x: +Ai(t, ["x", "cx", "x1"]) || 0,
        y: +Ai(t, ["y", "cy", "y1"]) || 0,
        width: 0,
        height: 0
    } : e
}, Dr = function(t) {
    return !!(t.getCTM && (!t.parentNode || t.ownerSVGElement) && Mr(t))
}, _e = function(t, e) {
    if (e) {
        var i = t.style;
        e in vt && e !== ht && (e = E),
        i.removeProperty ? ((e.substr(0, 2) === "ms" || e.substr(0, 6) === "webkit") && (e = "-" + e),
        i.removeProperty(e.replace(gi, "-$1").toLowerCase())) : i.removeAttribute(e)
    }
}, wt = function(t, e, i, r, n, s) {
    var a = new H(t._pt,e,i,0,1,s ? Pr : Sr);
    return t._pt = a,
    a.b = r,
    a.e = n,
    t._props.push(i),
    a
}, Ri = {
    deg: 1,
    rad: 1,
    turn: 1
}, Xn = {
    grid: 1,
    flex: 1
}, kt = function u(t, e, i, r) {
    var n = parseFloat(i) || 0, s = (i + "").trim().substr((n + "").length) || "px", a = Lt.style, o = Dn.test(e), f = t.tagName.toLowerCase() === "svg", h = (f ? "client" : "offset") + (o ? "Width" : "Height"), l = 100, c = r === "px", d = r === "%", p, _, m, g;
    return r === s || !n || Ri[r] || Ri[s] ? n : (s !== "px" && !c && (n = u(t, e, i, "px")),
    g = t.getCTM && Dr(t),
    (d || s === "%") && (vt[e] || ~e.indexOf("adius")) ? (p = g ? t.getBBox()[o ? "width" : "height"] : t[h],
    I(d ? n / p * l : n / 100 * p)) : (a[o ? "width" : "height"] = l + (c ? s : r),
    _ = ~e.indexOf("adius") || r === "em" && t.appendChild && !f ? t : t.parentNode,
    g && (_ = (t.ownerSVGElement || {}).parentNode),
    (!_ || _ === bt || !_.appendChild) && (_ = bt.body),
    m = _._gsap,
    m && d && m.width && o && m.time === et.time && !m.uncache ? I(n / m.width * l) : ((d || s === "%") && !Xn[dt(_, "display")] && (a.position = dt(t, "position")),
    _ === t && (a.position = "static"),
    _.appendChild(Lt),
    p = Lt[h],
    _.removeChild(Lt),
    a.position = "absolute",
    o && d && (m = It(_),
    m.time = et.time,
    m.width = _[h]),
    I(c ? p * n / l : p && n ? l / p * n : 0))))
}, yt = function(t, e, i, r) {
    var n;
    return pi || ti(),
    e in ct && e !== "transform" && (e = ct[e],
    ~e.indexOf(",") && (e = e.split(",")[0])),
    vt[e] && e !== "transform" ? (n = ce(t, r),
    n = e !== "transformOrigin" ? n[e] : n.svg ? n.origin : ke(dt(t, ht)) + " " + n.zOrigin + "px") : (n = t.style[e],
    (!n || n === "auto" || r || ~(n + "").indexOf("calc(")) && (n = Oe[e] && Oe[e](t, e, i) || dt(t, e) || Wi(t, e) || (e === "opacity" ? 1 : 0))),
    i && !~(n + "").trim().indexOf(" ") ? kt(t, e, n, i) + i : n
}, qn = function(t, e, i, r) {
    if (!i || i === "none") {
        var n = Jt(e, t, 1)
          , s = n && dt(t, n, 1);
        s && s !== i ? (e = n,
        i = s) : e === "borderColor" && (i = dt(t, "borderTopColor"))
    }
    var a = new H(this._pt,t.style,e,0,1,Tr), o = 0, f = 0, h, l, c, d, p, _, m, g, y, v, T, x;
    if (a.b = i,
    a.e = r,
    i += "",
    r += "",
    r === "auto" && (t.style[e] = r,
    r = dt(t, e) || r,
    t.style[e] = i),
    h = [i, r],
    _r(h),
    i = h[0],
    r = h[1],
    c = i.match(qt) || [],
    x = r.match(qt) || [],
    x.length) {
        for (; l = qt.exec(r); )
            m = l[0],
            y = r.substring(o, l.index),
            p ? p = (p + 1) % 5 : (y.substr(-5) === "rgba(" || y.substr(-5) === "hsla(") && (p = 1),
            m !== (_ = c[f++] || "") && (d = parseFloat(_) || 0,
            T = _.substr((d + "").length),
            m.charAt(1) === "=" && (m = Wt(d, m) + T),
            g = parseFloat(m),
            v = m.substr((g + "").length),
            o = qt.lastIndex - v.length,
            v || (v = v || it.units[e] || T,
            o === r.length && (r += v,
            a.e += v)),
            T !== v && (d = kt(t, e, _, v) || 0),
            a._pt = {
                _next: a._pt,
                p: y || f === 1 ? y : ",",
                s: d,
                c: g - d,
                m: p && p < 4 || e === "zIndex" ? Math.round : 0
            });
        a.c = o < r.length ? r.substring(o, r.length) : ""
    } else
        a.r = e === "display" && r === "none" ? Pr : Sr;
    return Vi.test(r) && (a.e = 0),
    this._pt = a,
    a
}, Ei = {
    top: "0%",
    bottom: "100%",
    left: "0%",
    right: "100%",
    center: "50%"
}, Gn = function(t) {
    var e = t.split(" ")
      , i = e[0]
      , r = e[1] || "50%";
    return (i === "top" || i === "bottom" || r === "left" || r === "right") && (t = i,
    i = r,
    r = t),
    e[0] = Ei[i] || i,
    e[1] = Ei[r] || r,
    e.join(" ")
}, Wn = function(t, e) {
    if (e.tween && e.tween._time === e.tween._dur) {
        var i = e.t, r = i.style, n = e.u, s = i._gsap, a, o, f;
        if (n === "all" || n === !0)
            r.cssText = "",
            o = 1;
        else
            for (n = n.split(","),
            f = n.length; --f > -1; )
                a = n[f],
                vt[a] && (o = 1,
                a = a === "transformOrigin" ? ht : E),
                _e(i, a);
        o && (_e(i, E),
        s && (s.svg && i.removeAttribute("transform"),
        ce(i, 1),
        s.uncache = 1,
        Or(r)))
    }
}, Oe = {
    clearProps: function(t, e, i, r, n) {
        if (n.data !== "isFromStart") {
            var s = t._pt = new H(t._pt,e,i,0,0,Wn);
            return s.u = r,
            s.pr = -10,
            s.tween = n,
            t._props.push(i),
            1
        }
    }
}, le = [1, 0, 0, 1, 0, 0], Ar = {}, Rr = function(t) {
    return t === "matrix(1, 0, 0, 1, 0, 0)" || t === "none" || !t
}, Fi = function(t) {
    var e = dt(t, E);
    return Rr(e) ? le : e.substr(7).match(Ni).map(I)
}, yi = function(t, e) {
    var i = t._gsap || It(t), r = t.style, n = Fi(t), s, a, o, f;
    return i.svg && t.getAttribute("transform") ? (o = t.transform.baseVal.consolidate().matrix,
    n = [o.a, o.b, o.c, o.d, o.e, o.f],
    n.join(",") === "1,0,0,1,0,0" ? le : n) : (n === le && !t.offsetParent && t !== $t && !i.svg && (o = r.display,
    r.display = "block",
    s = t.parentNode,
    (!s || !t.offsetParent) && (f = 1,
    a = t.nextElementSibling,
    $t.appendChild(t)),
    n = Fi(t),
    o ? r.display = o : _e(t, "display"),
    f && (a ? s.insertBefore(t, a) : s ? s.appendChild(t) : $t.removeChild(t))),
    e && n.length > 6 ? [n[0], n[1], n[4], n[5], n[12], n[13]] : n)
}, ei = function(t, e, i, r, n, s) {
    var a = t._gsap, o = n || yi(t, !0), f = a.xOrigin || 0, h = a.yOrigin || 0, l = a.xOffset || 0, c = a.yOffset || 0, d = o[0], p = o[1], _ = o[2], m = o[3], g = o[4], y = o[5], v = e.split(" "), T = parseFloat(v[0]) || 0, x = parseFloat(v[1]) || 0, P, S, w, b;
    i ? o !== le && (S = d * m - p * _) && (w = T * (m / S) + x * (-_ / S) + (_ * y - m * g) / S,
    b = T * (-p / S) + x * (d / S) - (d * y - p * g) / S,
    T = w,
    x = b) : (P = Mr(t),
    T = P.x + (~v[0].indexOf("%") ? T / 100 * P.width : T),
    x = P.y + (~(v[1] || v[0]).indexOf("%") ? x / 100 * P.height : x)),
    r || r !== !1 && a.smooth ? (g = T - f,
    y = x - h,
    a.xOffset = l + (g * d + y * _) - g,
    a.yOffset = c + (g * p + y * m) - y) : a.xOffset = a.yOffset = 0,
    a.xOrigin = T,
    a.yOrigin = x,
    a.smooth = !!r,
    a.origin = e,
    a.originIsAbsolute = !!i,
    t.style[ht] = "0px 0px",
    s && (wt(s, a, "xOrigin", f, T),
    wt(s, a, "yOrigin", h, x),
    wt(s, a, "xOffset", l, a.xOffset),
    wt(s, a, "yOffset", c, a.yOffset)),
    t.setAttribute("data-svg-origin", T + " " + x)
}, ce = function(t, e) {
    var i = t._gsap || new pr(t);
    if ("x"in i && !e && !i.uncache)
        return i;
    var r = t.style, n = i.scaleX < 0, s = "px", a = "deg", o = getComputedStyle(t), f = dt(t, ht) || "0", h, l, c, d, p, _, m, g, y, v, T, x, P, S, w, b, k, C, F, B, N, A, Y, V, j, Mt, Dt, te, At, xi, mt, Rt;
    return h = l = c = _ = m = g = y = v = T = 0,
    d = p = 1,
    i.svg = !!(t.getCTM && Dr(t)),
    o.translate && ((o.translate !== "none" || o.scale !== "none" || o.rotate !== "none") && (r[E] = (o.translate !== "none" ? "translate3d(" + (o.translate + " 0 0").split(" ").slice(0, 3).join(", ") + ") " : "") + (o.rotate !== "none" ? "rotate(" + o.rotate + ") " : "") + (o.scale !== "none" ? "scale(" + o.scale.split(" ").join(",") + ") " : "") + (o[E] !== "none" ? o[E] : "")),
    r.scale = r.rotate = r.translate = "none"),
    S = yi(t, i.svg),
    i.svg && (i.uncache ? (j = t.getBBox(),
    f = i.xOrigin - j.x + "px " + (i.yOrigin - j.y) + "px",
    V = "") : V = !e && t.getAttribute("data-svg-origin"),
    ei(t, V || f, !!V || i.originIsAbsolute, i.smooth !== !1, S)),
    x = i.xOrigin || 0,
    P = i.yOrigin || 0,
    S !== le && (C = S[0],
    F = S[1],
    B = S[2],
    N = S[3],
    h = A = S[4],
    l = Y = S[5],
    S.length === 6 ? (d = Math.sqrt(C * C + F * F),
    p = Math.sqrt(N * N + B * B),
    _ = C || F ? Xt(F, C) * zt : 0,
    y = B || N ? Xt(B, N) * zt + _ : 0,
    y && (p *= Math.abs(Math.cos(y * jt))),
    i.svg && (h -= x - (x * C + P * B),
    l -= P - (x * F + P * N))) : (Rt = S[6],
    xi = S[7],
    Dt = S[8],
    te = S[9],
    At = S[10],
    mt = S[11],
    h = S[12],
    l = S[13],
    c = S[14],
    w = Xt(Rt, At),
    m = w * zt,
    w && (b = Math.cos(-w),
    k = Math.sin(-w),
    V = A * b + Dt * k,
    j = Y * b + te * k,
    Mt = Rt * b + At * k,
    Dt = A * -k + Dt * b,
    te = Y * -k + te * b,
    At = Rt * -k + At * b,
    mt = xi * -k + mt * b,
    A = V,
    Y = j,
    Rt = Mt),
    w = Xt(-B, At),
    g = w * zt,
    w && (b = Math.cos(-w),
    k = Math.sin(-w),
    V = C * b - Dt * k,
    j = F * b - te * k,
    Mt = B * b - At * k,
    mt = N * k + mt * b,
    C = V,
    F = j,
    B = Mt),
    w = Xt(F, C),
    _ = w * zt,
    w && (b = Math.cos(w),
    k = Math.sin(w),
    V = C * b + F * k,
    j = A * b + Y * k,
    F = F * b - C * k,
    Y = Y * b - A * k,
    C = V,
    A = j),
    m && Math.abs(m) + Math.abs(_) > 359.9 && (m = _ = 0,
    g = 180 - g),
    d = I(Math.sqrt(C * C + F * F + B * B)),
    p = I(Math.sqrt(Y * Y + Rt * Rt)),
    w = Xt(A, Y),
    y = Math.abs(w) > 2e-4 ? w * zt : 0,
    T = mt ? 1 / (mt < 0 ? -mt : mt) : 0),
    i.svg && (V = t.getAttribute("transform"),
    i.forceCSS = t.setAttribute("transform", "") || !Rr(dt(t, E)),
    V && t.setAttribute("transform", V))),
    Math.abs(y) > 90 && Math.abs(y) < 270 && (n ? (d *= -1,
    y += _ <= 0 ? 180 : -180,
    _ += _ <= 0 ? 180 : -180) : (p *= -1,
    y += y <= 0 ? 180 : -180)),
    e = e || i.uncache,
    i.x = h - ((i.xPercent = h && (!e && i.xPercent || (Math.round(t.offsetWidth / 2) === Math.round(-h) ? -50 : 0))) ? t.offsetWidth * i.xPercent / 100 : 0) + s,
    i.y = l - ((i.yPercent = l && (!e && i.yPercent || (Math.round(t.offsetHeight / 2) === Math.round(-l) ? -50 : 0))) ? t.offsetHeight * i.yPercent / 100 : 0) + s,
    i.z = c + s,
    i.scaleX = I(d),
    i.scaleY = I(p),
    i.rotation = I(_) + a,
    i.rotationX = I(m) + a,
    i.rotationY = I(g) + a,
    i.skewX = y + a,
    i.skewY = v + a,
    i.transformPerspective = T + s,
    (i.zOrigin = parseFloat(f.split(" ")[2]) || 0) && (r[ht] = ke(f)),
    i.xOffset = i.yOffset = 0,
    i.force3D = it.force3D,
    i.renderTransform = i.svg ? jn : Cr ? Er : $n,
    i.uncache = 0,
    i
}, ke = function(t) {
    return (t = t.split(" "))[0] + " " + t[1]
}, Ne = function(t, e, i) {
    var r = G(e);
    return I(parseFloat(e) + parseFloat(kt(t, "x", i + "px", r))) + r
}, $n = function(t, e) {
    e.z = "0px",
    e.rotationY = e.rotationX = "0deg",
    e.force3D = 0,
    Er(t, e)
}, Et = "0deg", ee = "0px", Ft = ") ", Er = function(t, e) {
    var i = e || this
      , r = i.xPercent
      , n = i.yPercent
      , s = i.x
      , a = i.y
      , o = i.z
      , f = i.rotation
      , h = i.rotationY
      , l = i.rotationX
      , c = i.skewX
      , d = i.skewY
      , p = i.scaleX
      , _ = i.scaleY
      , m = i.transformPerspective
      , g = i.force3D
      , y = i.target
      , v = i.zOrigin
      , T = ""
      , x = g === "auto" && t && t !== 1 || g === !0;
    if (v && (l !== Et || h !== Et)) {
        var P = parseFloat(h) * jt, S = Math.sin(P), w = Math.cos(P), b;
        P = parseFloat(l) * jt,
        b = Math.cos(P),
        s = Ne(y, s, S * b * -v),
        a = Ne(y, a, -Math.sin(P) * -v),
        o = Ne(y, o, w * b * -v + v)
    }
    m !== ee && (T += "perspective(" + m + Ft),
    (r || n) && (T += "translate(" + r + "%, " + n + "%) "),
    (x || s !== ee || a !== ee || o !== ee) && (T += o !== ee || x ? "translate3d(" + s + ", " + a + ", " + o + ") " : "translate(" + s + ", " + a + Ft),
    f !== Et && (T += "rotate(" + f + Ft),
    h !== Et && (T += "rotateY(" + h + Ft),
    l !== Et && (T += "rotateX(" + l + Ft),
    (c !== Et || d !== Et) && (T += "skew(" + c + ", " + d + Ft),
    (p !== 1 || _ !== 1) && (T += "scale(" + p + ", " + _ + Ft),
    y.style[E] = T || "translate(0, 0)"
}, jn = function(t, e) {
    var i = e || this, r = i.xPercent, n = i.yPercent, s = i.x, a = i.y, o = i.rotation, f = i.skewX, h = i.skewY, l = i.scaleX, c = i.scaleY, d = i.target, p = i.xOrigin, _ = i.yOrigin, m = i.xOffset, g = i.yOffset, y = i.forceCSS, v = parseFloat(s), T = parseFloat(a), x, P, S, w, b;
    o = parseFloat(o),
    f = parseFloat(f),
    h = parseFloat(h),
    h && (h = parseFloat(h),
    f += h,
    o += h),
    o || f ? (o *= jt,
    f *= jt,
    x = Math.cos(o) * l,
    P = Math.sin(o) * l,
    S = Math.sin(o - f) * -c,
    w = Math.cos(o - f) * c,
    f && (h *= jt,
    b = Math.tan(f - h),
    b = Math.sqrt(1 + b * b),
    S *= b,
    w *= b,
    h && (b = Math.tan(h),
    b = Math.sqrt(1 + b * b),
    x *= b,
    P *= b)),
    x = I(x),
    P = I(P),
    S = I(S),
    w = I(w)) : (x = l,
    w = c,
    P = S = 0),
    (v && !~(s + "").indexOf("px") || T && !~(a + "").indexOf("px")) && (v = kt(d, "x", s, "px"),
    T = kt(d, "y", a, "px")),
    (p || _ || m || g) && (v = I(v + p - (p * x + _ * S) + m),
    T = I(T + _ - (p * P + _ * w) + g)),
    (r || n) && (b = d.getBBox(),
    v = I(v + r / 100 * b.width),
    T = I(T + n / 100 * b.height)),
    b = "matrix(" + x + "," + P + "," + S + "," + w + "," + v + "," + T + ")",
    d.setAttribute("transform", b),
    y && (d.style[E] = b)
}, Kn = function(t, e, i, r, n) {
    var s = 360, a = X(n), o = parseFloat(n) * (a && ~n.indexOf("rad") ? zt : 1), f = o - r, h = r + f + "deg", l, c;
    return a && (l = n.split("_")[1],
    l === "short" && (f %= s,
    f !== f % (s / 2) && (f += f < 0 ? s : -s)),
    l === "cw" && f < 0 ? f = (f + s * Mi) % s - ~~(f / s) * s : l === "ccw" && f > 0 && (f = (f - s * Mi) % s - ~~(f / s) * s)),
    t._pt = c = new H(t._pt,e,i,r,f,Rn),
    c.e = h,
    c.u = "deg",
    t._props.push(i),
    c
}, zi = function(t, e) {
    for (var i in e)
        t[i] = e[i];
    return t
}, Qn = function(t, e, i) {
    var r = zi({}, i._gsap), n = "perspective,force3D,transformOrigin,svgOrigin", s = i.style, a, o, f, h, l, c, d, p;
    r.svg ? (f = i.getAttribute("transform"),
    i.setAttribute("transform", ""),
    s[E] = e,
    a = ce(i, 1),
    _e(i, E),
    i.setAttribute("transform", f)) : (f = getComputedStyle(i)[E],
    s[E] = e,
    a = ce(i, 1),
    s[E] = f);
    for (o in vt)
        f = r[o],
        h = a[o],
        f !== h && n.indexOf(o) < 0 && (d = G(f),
        p = G(h),
        l = d !== p ? kt(i, o, f, p) : parseFloat(f),
        c = parseFloat(h),
        t._pt = new H(t._pt,a,o,l,c - l,He),
        t._pt.u = p || 0,
        t._props.push(o));
    zi(a, r)
};
Z("padding,margin,Width,Radius", function(u, t) {
    var e = "Top"
      , i = "Right"
      , r = "Bottom"
      , n = "Left"
      , s = (t < 3 ? [e, i, r, n] : [e + n, e + i, r + i, r + n]).map(function(a) {
        return t < 2 ? u + a : "border" + a + u
    });
    Oe[t > 1 ? "border" + u : u] = function(a, o, f, h, l) {
        var c, d;
        if (arguments.length < 4)
            return c = s.map(function(p) {
                return yt(a, p, f)
            }),
            d = c.join(" "),
            d.split(c[0]).length === 5 ? c[0] : d;
        c = (h + "").split(" "),
        d = {},
        s.forEach(function(p, _) {
            return d[p] = c[_] = c[_] || c[(_ - 1) / 2 | 0]
        }),
        a.init(o, d, l)
    }
});
var Fr = {
    name: "css",
    register: ti,
    targetTest: function(t) {
        return t.style && t.nodeType
    },
    init: function(t, e, i, r, n) {
        var s = this._props, a = t.style, o = i.vars.startAt, f, h, l, c, d, p, _, m, g, y, v, T, x, P, S, w;
        pi || ti(),
        this.styles = this.styles || kr(t),
        w = this.styles.props,
        this.tween = i;
        for (_ in e)
            if (_ !== "autoRound" && (h = e[_],
            !(tt[_] && mr(_, e, i, r, t, n)))) {
                if (d = typeof h,
                p = Oe[_],
                d === "function" && (h = h.call(i, r, t, n),
                d = typeof h),
                d === "string" && ~h.indexOf("random(") && (h = ue(h)),
                p)
                    p(this, t, _, h, i) && (S = 1);
                else if (_.substr(0, 2) === "--")
                    f = (getComputedStyle(t).getPropertyValue(_) + "").trim(),
                    h += "",
                    Pt.lastIndex = 0,
                    Pt.test(f) || (m = G(f),
                    g = G(h)),
                    g ? m !== g && (f = kt(t, _, f, g) + g) : m && (h += m),
                    this.add(a, "setProperty", f, h, r, n, 0, 0, _),
                    s.push(_),
                    w.push(_, 0, a[_]);
                else if (d !== "undefined") {
                    if (o && _ in o ? (f = typeof o[_] == "function" ? o[_].call(i, r, t, n) : o[_],
                    X(f) && ~f.indexOf("random(") && (f = ue(f)),
                    G(f + "") || (f += it.units[_] || G(yt(t, _)) || ""),
                    (f + "").charAt(1) === "=" && (f = yt(t, _))) : f = yt(t, _),
                    c = parseFloat(f),
                    y = d === "string" && h.charAt(1) === "=" && h.substr(0, 2),
                    y && (h = h.substr(2)),
                    l = parseFloat(h),
                    _ in ct && (_ === "autoAlpha" && (c === 1 && yt(t, "visibility") === "hidden" && l && (c = 0),
                    w.push("visibility", 0, a.visibility),
                    wt(this, a, "visibility", c ? "inherit" : "hidden", l ? "inherit" : "hidden", !l)),
                    _ !== "scale" && _ !== "transform" && (_ = ct[_],
                    ~_.indexOf(",") && (_ = _.split(",")[0]))),
                    v = _ in vt,
                    v) {
                        if (this.styles.save(_),
                        T || (x = t._gsap,
                        x.renderTransform && !e.parseTransform || ce(t, e.parseTransform),
                        P = e.smoothOrigin !== !1 && x.smooth,
                        T = this._pt = new H(this._pt,a,E,0,1,x.renderTransform,x,0,-1),
                        T.dep = 1),
                        _ === "scale")
                            this._pt = new H(this._pt,x,"scaleY",x.scaleY,(y ? Wt(x.scaleY, y + l) : l) - x.scaleY || 0,He),
                            this._pt.u = 0,
                            s.push("scaleY", _),
                            _ += "X";
                        else if (_ === "transformOrigin") {
                            w.push(ht, 0, a[ht]),
                            h = Gn(h),
                            x.svg ? ei(t, h, 0, P, 0, this) : (g = parseFloat(h.split(" ")[2]) || 0,
                            g !== x.zOrigin && wt(this, x, "zOrigin", x.zOrigin, g),
                            wt(this, a, _, ke(f), ke(h)));
                            continue
                        } else if (_ === "svgOrigin") {
                            ei(t, h, 1, P, 0, this);
                            continue
                        } else if (_ in Ar) {
                            Kn(this, x, _, c, y ? Wt(c, y + h) : h);
                            continue
                        } else if (_ === "smoothOrigin") {
                            wt(this, x, "smooth", x.smooth, h);
                            continue
                        } else if (_ === "force3D") {
                            x[_] = h;
                            continue
                        } else if (_ === "transform") {
                            Qn(this, h, t);
                            continue
                        }
                    } else
                        _ in a || (_ = Jt(_) || _);
                    if (v || (l || l === 0) && (c || c === 0) && !An.test(h) && _ in a)
                        m = (f + "").substr((c + "").length),
                        l || (l = 0),
                        g = G(h) || (_ in it.units ? it.units[_] : m),
                        m !== g && (c = kt(t, _, f, g)),
                        this._pt = new H(this._pt,v ? x : a,_,c,(y ? Wt(c, y + l) : l) - c,!v && (g === "px" || _ === "zIndex") && e.autoRound !== !1 ? Fn : He),
                        this._pt.u = g || 0,
                        m !== g && g !== "%" && (this._pt.b = f,
                        this._pt.r = En);
                    else if (_ in a)
                        qn.call(this, t, _, f, y ? y + h : h);
                    else if (_ in t)
                        this.add(t, _, f || t[_], y ? y + h : h, r, n);
                    else if (_ !== "parseTransform") {
                        ai(_, h);
                        continue
                    }
                    v || (_ in a ? w.push(_, 0, a[_]) : w.push(_, 1, f || t[_])),
                    s.push(_)
                }
            }
        S && br(this)
    },
    render: function(t, e) {
        if (e.tween._time || !mi())
            for (var i = e._pt; i; )
                i.r(t, i.d),
                i = i._next;
        else
            e.styles.revert()
    },
    get: yt,
    aliases: ct,
    getSetter: function(t, e, i) {
        var r = ct[e];
        return r && r.indexOf(",") < 0 && (e = r),
        e in vt && e !== ht && (t._gsap.x || yt(t, "x")) ? i && Ci === i ? e === "scale" ? Bn : In : (Ci = i || {}) && (e === "scale" ? Nn : Vn) : t.style && !ri(t.style[e]) ? zn : ~e.indexOf("-") ? Ln : ci(t, e)
    },
    core: {
        _removeProperty: _e,
        _getMatrix: yi
    }
};
J.utils.checkPrefix = Jt;
J.core.getStyleSaver = kr;
(function(u, t, e, i) {
    var r = Z(u + "," + t + "," + e, function(n) {
        vt[n] = 1
    });
    Z(t, function(n) {
        it.units[n] = "deg",
        Ar[n] = 1
    }),
    ct[r[13]] = u + "," + t,
    Z(i, function(n) {
        var s = n.split(":");
        ct[s[1]] = r[s[0]]
    })
}
)("x,y,z,scale,scaleX,scaleY,xPercent,yPercent", "rotation,rotationX,rotationY,skewX,skewY", "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");
Z("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function(u) {
    it.units[u] = "px"
});
J.registerPlugin(Fr);
var pe = J.registerPlugin(Fr) || J;
pe.core.Tween;
const _t = pe.timeline();
_t.pause();
const Ve = document.querySelector(".container");
addEventListener("load", ()=>{
    if (window.innerWidth <= 768) {
        Ve.style.visibility = "inherit",
        _t.progress(1);
        return
    } else
        Ve && (Ve.style.visibility = "inherit",
        _t.play())
}
);
{
    const u = ".title";
    _t.from(u, {
        rotateX: 360,
        scale: .5,
        opacity: 0,
        stagger: .05
    }),
    _t.to(u, {
        y: 15,
        duration: .5,
        stagger: .05
    }, "<20%"),
    _t.to(u, {
        y: 0,
        duration: .2,
        stagger: .05
    }, "<20%")
}
{
    const u = ".title-javascript"
      , i = {
        color: "rgb(253 224 71)",
        duration: 1,
        textShadow: "rgba(255, 255, 0) 0 0 25px",
        stagger: .05
    }
      , r = {
        color: "white",
        duration: 1,
        textShadow: "0px 0px 0px",
        stagger: .05
    }
      , n = pe.timeline({
        repeat: -1
    });
    n.to(u, i, "<10%"),
    n.to(u, r, "<50%")
}
_t.from(".description", {
    opacity: 0,
    y: 45,
    x: 45,
    scale: 1.2,
    rotateY: "90deg",
    skewX: "35deg"
}, "<90%");
_t.addLabel("description", ">");
_t.from(".js", {
    y: "-=100",
    scale: 0,
    stagger: .1
}, 0);
_t.from(".crown", {
    y: "-=50",
    scale: 1.2,
    duration: .1,
    opacity: 0
}, "description");
_t.to(".js", {
    y: "+=5",
    repeat: 1,
    yoyo: !0,
    duration: .1,
    ease: "none"
});
pe.from(".javascript", {
    rotateZ: "-3deg",
    repeat: -1,
    yoyo: !0,
    ease: "power1.inOut"
});
const zr = pe.timeline({
    repeat: -1,
    repeatDelay: .5
});
zr.to(".guide", {
    y: -6,
    duration: .25,
    stagger: .05
});
zr.to(".guide", {
    y: 0,
    duration: .25,
    stagger: .05
}, "<10%");
