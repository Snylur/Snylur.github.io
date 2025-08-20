(function() {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload"))
        return;
    for (const r of document.querySelectorAll('link[rel="modulepreload"]'))
        n(r);
    new MutationObserver(r => {
        for (const i of r)
            if (i.type === "childList")
                for (const l of i.addedNodes)
                    l.tagName === "LINK" && l.rel === "modulepreload" && n(l)
    }).observe(document, {
        childList: !0,
        subtree: !0
    });
    function s(r) {
        const i = {};
        return r.integrity && (i.integrity = r.integrity), r.referrerPolicy && (i.referrerPolicy = r.referrerPolicy), r.crossOrigin === "use-credentials" ? i.credentials = "include" : r.crossOrigin === "anonymous" ? i.credentials = "omit" : i.credentials = "same-origin", i
    }
    function n(r) {
        if (r.ep)
            return;
        r.ep = !0;
        const i = s(r);
        fetch(r.href, i)
    }
})(); /**
* @vue/shared v3.5.18
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/

/*! #__NO_SIDE_EFFECTS__ */
function Ns(e) {
    const t = Object.create(null);
    for (const s of e.split(","))
        t[s] = 1;
    return s => s in t
}
const W = {},
    ct = [],
    Fe = () => {},
    Kr = () => !1,
    Qt = e => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && (e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97),
    Ls = e => e.startsWith("onUpdate:"),
    ce = Object.assign,
    Hs = (e, t) => {
        const s = e.indexOf(t);
        s > -1 && e.splice(s, 1)
    },
    Vr = Object.prototype.hasOwnProperty,
    U = (e, t) => Vr.call(e, t),
    P = Array.isArray,
    at = e => es(e) === "[object Map]",
    Dn = e => es(e) === "[object Set]",
    M = e => typeof e == "function",
    Q = e => typeof e == "string",
    Ze = e => typeof e == "symbol",
    X = e => e !== null && typeof e == "object",
    $n = e => (X(e) || M(e)) && M(e.then) && M(e.catch),
    Nn = Object.prototype.toString,
    es = e => Nn.call(e),
    Br = e => es(e).slice(8, -1),
    Ln = e => es(e) === "[object Object]",
    js = e => Q(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e,
    yt = Ns(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),
    ts = e => {
        const t = Object.create(null);
        return s => t[s] || (t[s] = e(s))
    },
    Wr = /-(\w)/g,
    Ye = ts(e => e.replace(Wr, (t, s) => s ? s.toUpperCase() : "")),
    kr = /\B([A-Z])/g,
    Qe = ts(e => e.replace(kr, "-$1").toLowerCase()),
    Hn = ts(e => e.charAt(0).toUpperCase() + e.slice(1)),
    ds = ts(e => e ? `on${Hn(e)}` : ""),
    qe = (e, t) => !Object.is(e, t),
    Vt = (e, ...t) => {
        for (let s = 0; s < e.length; s++)
            e[s](...t)
    },
    Ss = (e, t, s, n=!1) => {
        Object.defineProperty(e, t, {
            configurable: !0,
            enumerable: !1,
            writable: n,
            value: s
        })
    },
    Cs = e => {
        const t = parseFloat(e);
        return isNaN(t) ? e : t
    };
let rn;
const ss = () => rn || (rn = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function ns(e) {
    if (P(e)) {
        const t = {};
        for (let s = 0; s < e.length; s++) {
            const n = e[s],
                r = Q(n) ? Yr(n) : ns(n);
            if (r)
                for (const i in r)
                    t[i] = r[i]
        }
        return t
    } else if (Q(e) || X(e))
        return e
}
const Jr = /;(?![^(]*\))/g,
    Gr = /:([^]+)/,
    qr = /\/\*[^]*?\*\//g;
function Yr(e) {
    const t = {};
    return e.replace(qr, "").split(Jr).forEach(s => {
        if (s) {
            const n = s.split(Gr);
            n.length > 1 && (t[n[0].trim()] = n[1].trim())
        }
    }), t
}
function rs(e) {
    let t = "";
    if (Q(e))
        t = e;
    else if (P(e))
        for (let s = 0; s < e.length; s++) {
            const n = rs(e[s]);
            n && (t += n + " ")
        }
    else if (X(e))
        for (const s in e)
            e[s] && (t += s + " ");
    return t.trim()
}
const zr = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",
    Xr = Ns(zr);
function jn(e) {
    return !!e || e === ""
}
const Un = e => !!(e && e.__v_isRef === !0),
    ke = e => Q(e) ? e : e == null ? "" : P(e) || X(e) && (e.toString === Nn || !M(e.toString)) ? Un(e) ? ke(e.value) : JSON.stringify(e, Kn, 2) : String(e),
    Kn = (e, t) => Un(t) ? Kn(e, t.value) : at(t) ? {
        [`Map(${t.size})`]: [...t.entries()].reduce((s, [n, r], i) => (s[hs(n, i) + " =>"] = r, s), {})
    } : Dn(t) ? {
        [`Set(${t.size})`]: [...t.values()].map(s => hs(s))
    } : Ze(t) ? hs(t) : X(t) && !P(t) && !Ln(t) ? String(t) : t,
    hs = (e, t="") => {
        var s;
        return Ze(e) ? `Symbol(${(s = e.description) != null ? s : t})` : e
    }; /**
* @vue/reactivity v3.5.18
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/



let he;
class Zr {
    constructor(t=!1)
    {
        this.detached = t,
        this._active = !0,
        this._on = 0,
        this.effects = [],
        this.cleanups = [],
        this._isPaused = !1,
        this.parent = he,
        !t && he && (this.index = (he.scopes || (he.scopes = [])).push(this) - 1)
    }
    get active()
    {
        return this._active
    }
    pause()
    {
        if (this._active) {
            this._isPaused = !0;
            let t,
                s;
            if (this.scopes)
                for (t = 0, s = this.scopes.length; t < s; t++)
                    this.scopes[t].pause();
            for (t = 0, s = this.effects.length; t < s; t++)
                this.effects[t].pause()
        }
    }
    resume()
    {
        if (this._active && this._isPaused) {
            this._isPaused = !1;
            let t,
                s;
            if (this.scopes)
                for (t = 0, s = this.scopes.length; t < s; t++)
                    this.scopes[t].resume();
            for (t = 0, s = this.effects.length; t < s; t++)
                this.effects[t].resume()
        }
    }
    run(t)
    {
        if (this._active) {
            const s = he;
            try {
                return he = this, t()
            } finally {
                he = s
            }
        }
    }
    on()
    {
        ++this._on === 1 && (this.prevScope = he, he = this)
    }
    off()
    {
        this._on > 0 && --this._on === 0 && (he = this.prevScope, this.prevScope = void 0)
    }
    stop(t)
    {
        if (this._active) {
            this._active = !1;
            let s,
                n;
            for (s = 0, n = this.effects.length; s < n; s++)
                this.effects[s].stop();
            for (this.effects.length = 0, s = 0, n = this.cleanups.length; s < n; s++)
                this.cleanups[s]();
            if (this.cleanups.length = 0, this.scopes) {
                for (s = 0, n = this.scopes.length; s < n; s++)
                    this.scopes[s].stop(!0);
                this.scopes.length = 0
            }
            if (!this.detached && this.parent && !t) {
                const r = this.parent.scopes.pop();
                r && r !== this && (this.parent.scopes[this.index] = r, r.index = this.index)
            }
            this.parent = void 0
        }
    }
}
function Qr() {
    return he
}
let Y;
const ps = new WeakSet;
class Vn {
    constructor(t)
    {
        this.fn = t,
        this.deps = void 0,
        this.depsTail = void 0,
        this.flags = 5,
        this.next = void 0,
        this.cleanup = void 0,
        this.scheduler = void 0,
        he && he.active && he.effects.push(this)
    }
    pause()
    {
        this.flags |= 64
    }
    resume()
    {
        this.flags & 64 && (this.flags &= -65, ps.has(this) && (ps.delete(this), this.trigger()))
    }
    notify()
    {
        this.flags & 2 && !(this.flags & 32) || this.flags & 8 || Wn(this)
    }
    run()
    {
        if (!(this.flags & 1))
            return this.fn();
        this.flags |= 2,
        ln(this),
        kn(this);
        const t = Y,
            s = we;
        Y = this,
        we = !0;
        try {
            return this.fn()
        } finally {
            Jn(this),
            Y = t,
            we = s,
            this.flags &= -3
        }
    }
    stop()
    {
        if (this.flags & 1) {
            for (let t = this.deps; t; t = t.nextDep)
                Vs(t);
            this.deps = this.depsTail = void 0,
            ln(this),
            this.onStop && this.onStop(),
            this.flags &= -2
        }
    }
    trigger()
    {
        this.flags & 64 ? ps.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty()
    }
    runIfDirty()
    {
        Ts(this) && this.run()
    }
    get dirty()
    {
        return Ts(this)
    }
}
let Bn = 0,
    wt,
    St;
function Wn(e, t=!1) {
    if (e.flags |= 8, t) {
        e.next = St,
        St = e;
        return
    }
    e.next = wt,
    wt = e
}
function Us() {
    Bn++
}
function Ks() {
    if (--Bn > 0)
        return;
    if (St) {
        let t = St;
        for (St = void 0; t;) {
            const s = t.next;
            t.next = void 0,
            t.flags &= -9,
            t = s
        }
    }
    let e;
    for (; wt;) {
        let t = wt;
        for (wt = void 0; t;) {
            const s = t.next;
            if (t.next = void 0, t.flags &= -9, t.flags & 1)
                try {
                    t.trigger()
                } catch (n) {
                    e || (e = n)
                }
            t = s
        }
    }
    if (e)
        throw e
}
function kn(e) {
    for (let t = e.deps; t; t = t.nextDep)
        t.version = -1,
        t.prevActiveLink = t.dep.activeLink,
        t.dep.activeLink = t
}
function Jn(e) {
    let t,
        s = e.depsTail,
        n = s;
    for (; n;) {
        const r = n.prevDep;
        n.version === -1 ? (n === s && (s = r), Vs(n), ei(n)) : t = n,
        n.dep.activeLink = n.prevActiveLink,
        n.prevActiveLink = void 0,
        n = r
    }
    e.deps = t,
    e.depsTail = s
}
function Ts(e) {
    for (let t = e.deps; t; t = t.nextDep)
        if (t.dep.version !== t.version || t.dep.computed && (Gn(t.dep.computed) || t.dep.version !== t.version))
            return !0;
    return !!e._dirty
}
function Gn(e) {
    if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === At) || (e.globalVersion = At, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !Ts(e))))
        return;
    e.flags |= 2;
    const t = e.dep,
        s = Y,
        n = we;
    Y = e,
    we = !0;
    try {
        kn(e);
        const r = e.fn(e._value);
        (t.version === 0 || qe(r, e._value)) && (e.flags |= 128, e._value = r, t.version++)
    } catch (r) {
        throw t.version++, r
    } finally {
        Y = s,
        we = n,
        Jn(e),
        e.flags &= -3
    }
}
function Vs(e, t=!1) {
    const {dep: s, prevSub: n, nextSub: r} = e;
    if (n && (n.nextSub = r, e.prevSub = void 0), r && (r.prevSub = n, e.nextSub = void 0), s.subs === e && (s.subs = n, !n && s.computed)) {
        s.computed.flags &= -5;
        for (let i = s.computed.deps; i; i = i.nextDep)
            Vs(i, !0)
    }
    !t && !--s.sc && s.map && s.map.delete(s.key)
}
function ei(e) {
    const {prevDep: t, nextDep: s} = e;
    t && (t.nextDep = s, e.prevDep = void 0),
    s && (s.prevDep = t, e.nextDep = void 0)
}
let we = !0;
const qn = [];
function Ve() {
    qn.push(we),
    we = !1
}
function Be() {
    const e = qn.pop();
    we = e === void 0 ? !0 : e
}
function ln(e) {
    const {cleanup: t} = e;
    if (e.cleanup = void 0, t) {
        const s = Y;
        Y = void 0;
        try {
            t()
        } finally {
            Y = s
        }
    }
}
let At = 0;
class ti {
    constructor(t, s)
    {
        this.sub = t,
        this.dep = s,
        this.version = s.version,
        this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0
    }
}
class Bs {
    constructor(t)
    {
        this.computed = t,
        this.version = 0,
        this.activeLink = void 0,
        this.subs = void 0,
        this.map = void 0,
        this.key = void 0,
        this.sc = 0,
        this.__v_skip = !0
    }
    track(t)
    {
        if (!Y || !we || Y === this.computed)
            return;
        let s = this.activeLink;
        if (s === void 0 || s.sub !== Y)
            s = this.activeLink = new ti(Y, this),
            Y.deps ? (s.prevDep = Y.depsTail, Y.depsTail.nextDep = s, Y.depsTail = s) : Y.deps = Y.depsTail = s,
            Yn(s);
        else if (s.version === -1 && (s.version = this.version, s.nextDep)) {
            const n = s.nextDep;
            n.prevDep = s.prevDep,
            s.prevDep && (s.prevDep.nextDep = n),
            s.prevDep = Y.depsTail,
            s.nextDep = void 0,
            Y.depsTail.nextDep = s,
            Y.depsTail = s,
            Y.deps === s && (Y.deps = n)
        }
        return s
    }
    trigger(t)
    {
        this.version++,
        At++,
        this.notify(t)
    }
    notify(t)
    {
        Us();
        try {
            for (let s = this.subs; s; s = s.prevSub)
                s.sub.notify() && s.sub.dep.notify()
        } finally {
            Ks()
        }
    }
}
function Yn(e) {
    if (e.dep.sc++, e.sub.flags & 4) {
        const t = e.dep.computed;
        if (t && !e.dep.subs) {
            t.flags |= 20;
            for (let n = t.deps; n; n = n.nextDep)
                Yn(n)
        }
        const s = e.dep.subs;
        s !== e && (e.prevSub = s, s && (s.nextSub = e)),
        e.dep.subs = e
    }
}
const Es = new WeakMap,
    it = Symbol(""),
    Os = Symbol(""),
    It = Symbol("");
function ne(e, t, s) {
    if (we && Y) {
        let n = Es.get(e);
        n || Es.set(e, n = new Map);
        let r = n.get(s);
        r || (n.set(s, r = new Bs), r.map = n, r.key = s),
        r.track()
    }
}
function Ue(e, t, s, n, r, i) {
    const l = Es.get(e);
    if (!l) {
        At++;
        return
    }
    const o = c => {
        c && c.trigger()
    };
    if (Us(), t === "clear")
        l.forEach(o);
    else {
        const c = P(e),
            d = c && js(s);
        if (c && s === "length") {
            const u = Number(n);
            l.forEach((p, C) => {
                (C === "length" || C === It || !Ze(C) && C >= u) && o(p)
            })
        } else
            switch ((s !== void 0 || l.has(void 0)) && o(l.get(s)), d && o(l.get(It)), t) {
            case "add":
                c ? d && o(l.get("length")) : (o(l.get(it)), at(e) && o(l.get(Os)));
                break;
            case "delete":
                c || (o(l.get(it)), at(e) && o(l.get(Os)));
                break;
            case "set":
                at(e) && o(l.get(it));
                break
            }
    }
    Ks()
}
function lt(e) {
    const t = j(e);
    return t === e ? t : (ne(t, "iterate", It), ye(e) ? t : t.map(se))
}
function is(e) {
    return ne(e = j(e), "iterate", It), e
}
const si = {
    __proto__: null,
    [Symbol.iterator]() {
        return gs(this, Symbol.iterator, se)
    },
    concat(...e) {
        return lt(this).concat(...e.map(t => P(t) ? lt(t) : t))
    },
    entries() {
        return gs(this, "entries", e => (e[1] = se(e[1]), e))
    },
    every(e, t) {
        return He(this, "every", e, t, void 0, arguments)
    },
    filter(e, t) {
        return He(this, "filter", e, t, s => s.map(se), arguments)
    },
    find(e, t) {
        return He(this, "find", e, t, se, arguments)
    },
    findIndex(e, t) {
        return He(this, "findIndex", e, t, void 0, arguments)
    },
    findLast(e, t) {
        return He(this, "findLast", e, t, se, arguments)
    },
    findLastIndex(e, t) {
        return He(this, "findLastIndex", e, t, void 0, arguments)
    },
    forEach(e, t) {
        return He(this, "forEach", e, t, void 0, arguments)
    },
    includes(...e) {
        return ms(this, "includes", e)
    },
    indexOf(...e) {
        return ms(this, "indexOf", e)
    },
    join(e) {
        return lt(this).join(e)
    },
    lastIndexOf(...e) {
        return ms(this, "lastIndexOf", e)
    },
    map(e, t) {
        return He(this, "map", e, t, void 0, arguments)
    },
    pop() {
        return _t(this, "pop")
    },
    push(...e) {
        return _t(this, "push", e)
    },
    reduce(e, ...t) {
        return on(this, "reduce", e, t)
    },
    reduceRight(e, ...t) {
        return on(this, "reduceRight", e, t)
    },
    shift() {
        return _t(this, "shift")
    },
    some(e, t) {
        return He(this, "some", e, t, void 0, arguments)
    },
    splice(...e) {
        return _t(this, "splice", e)
    },
    toReversed() {
        return lt(this).toReversed()
    },
    toSorted(e) {
        return lt(this).toSorted(e)
    },
    toSpliced(...e) {
        return lt(this).toSpliced(...e)
    },
    unshift(...e) {
        return _t(this, "unshift", e)
    },
    values() {
        return gs(this, "values", se)
    }
};
function gs(e, t, s) {
    const n = is(e),
        r = n[t]();
    return n !== e && !ye(e) && (r._next = r.next, r.next = () => {
        const i = r._next();
        return i.value && (i.value = s(i.value)), i
    }), r
}
const ni = Array.prototype;
function He(e, t, s, n, r, i) {
    const l = is(e),
        o = l !== e && !ye(e),
        c = l[t];
    if (c !== ni[t]) {
        const p = c.apply(e, i);
        return o ? se(p) : p
    }
    let d = s;
    l !== e && (o ? d = function(p, C) {
        return s.call(this, se(p), C, e)
    } : s.length > 2 && (d = function(p, C) {
        return s.call(this, p, C, e)
    }));
    const u = c.call(l, d, n);
    return o && r ? r(u) : u
}
function on(e, t, s, n) {
    const r = is(e);
    let i = s;
    return r !== e && (ye(e) ? s.length > 3 && (i = function(l, o, c) {
        return s.call(this, l, o, c, e)
    }) : i = function(l, o, c) {
        return s.call(this, l, se(o), c, e)
    }), r[t](i, ...n)
}
function ms(e, t, s) {
    const n = j(e);
    ne(n, "iterate", It);
    const r = n[t](...s);
    return (r === -1 || r === !1) && Gs(s[0]) ? (s[0] = j(s[0]), n[t](...s)) : r
}
function _t(e, t, s=[]) {
    Ve(),
    Us();
    const n = j(e)[t].apply(e, s);
    return Ks(), Be(), n
}
const ri = Ns("__proto__,__v_isRef,__isVue"),
    zn = new Set(Object.getOwnPropertyNames(Symbol).filter(e => e !== "arguments" && e !== "caller").map(e => Symbol[e]).filter(Ze));
function ii(e) {
    Ze(e) || (e = String(e));
    const t = j(this);
    return ne(t, "has", e), t.hasOwnProperty(e)
}
class Xn {
    constructor(t=!1, s=!1)
    {
        this._isReadonly = t,
        this._isShallow = s
    }
    get(t, s, n)
    {
        if (s === "__v_skip")
            return t.__v_skip;
        const r = this._isReadonly,
            i = this._isShallow;
        if (s === "__v_isReactive")
            return !r;
        if (s === "__v_isReadonly")
            return r;
        if (s === "__v_isShallow")
            return i;
        if (s === "__v_raw")
            return n === (r ? i ? gi : tr : i ? er : Qn).get(t) || Object.getPrototypeOf(t) === Object.getPrototypeOf(n) ? t : void 0;
        const l = P(t);
        if (!r) {
            let c;
            if (l && (c = si[s]))
                return c;
            if (s === "hasOwnProperty")
                return ii
        }
        const o = Reflect.get(t, s, re(t) ? t : n);
        return (Ze(s) ? zn.has(s) : ri(s)) || (r || ne(t, "get", s), i) ? o : re(o) ? l && js(s) ? o : o.value : X(o) ? r ? sr(o) : ks(o) : o
    }
}
class Zn extends Xn {
    constructor(t=!1)
    {
        super(!1, t)
    }
    set(t, s, n, r)
    {
        let i = t[s];
        if (!this._isShallow) {
            const c = ze(i);
            if (!ye(n) && !ze(n) && (i = j(i), n = j(n)), !P(t) && re(i) && !re(n))
                return c ? !1 : (i.value = n, !0)
        }
        const l = P(t) && js(s) ? Number(s) < t.length : U(t, s),
            o = Reflect.set(t, s, n, re(t) ? t : r);
        return t === j(r) && (l ? qe(n, i) && Ue(t, "set", s, n) : Ue(t, "add", s, n)), o
    }
    deleteProperty(t, s)
    {
        const n = U(t, s);
        t[s];
        const r = Reflect.deleteProperty(t, s);
        return r && n && Ue(t, "delete", s, void 0), r
    }
    has(t, s)
    {
        const n = Reflect.has(t, s);
        return (!Ze(s) || !zn.has(s)) && ne(t, "has", s), n
    }
    ownKeys(t)
    {
        return ne(t, "iterate", P(t) ? "length" : it), Reflect.ownKeys(t)
    }
}
class li extends Xn {
    constructor(t=!1)
    {
        super(!0, t)
    }
    set(t, s)
    {
        return !0
    }
    deleteProperty(t, s)
    {
        return !0
    }
}
const oi = new Zn,
    fi = new li,
    ci = new Zn(!0);
const As = e => e,
    Lt = e => Reflect.getPrototypeOf(e);
function ai(e, t, s) {
    return function(...n) {
        const r = this.__v_raw,
            i = j(r),
            l = at(i),
            o = e === "entries" || e === Symbol.iterator && l,
            c = e === "keys" && l,
            d = r[e](...n),
            u = s ? As : t ? Gt : se;
        return !t && ne(i, "iterate", c ? Os : it), {
            next() {
                const {value: p, done: C} = d.next();
                return C ? {
                    value: p,
                    done: C
                } : {
                    value: o ? [u(p[0]), u(p[1])] : u(p),
                    done: C
                }
            },
            [Symbol.iterator]() {
                return this
            }
        }
    }
}
function Ht(e) {
    return function(...t) {
        return e === "delete" ? !1 : e === "clear" ? void 0 : this
    }
}
function ui(e, t) {
    const s = {
        get(r) {
            const i = this.__v_raw,
                l = j(i),
                o = j(r);
            e || (qe(r, o) && ne(l, "get", r), ne(l, "get", o));
            const {has: c} = Lt(l),
                d = t ? As : e ? Gt : se;
            if (c.call(l, r))
                return d(i.get(r));
            if (c.call(l, o))
                return d(i.get(o));
            i !== l && i.get(r)
        },
        get size() {
            const r = this.__v_raw;
            return !e && ne(j(r), "iterate", it), Reflect.get(r, "size", r)
        },
        has(r) {
            const i = this.__v_raw,
                l = j(i),
                o = j(r);
            return e || (qe(r, o) && ne(l, "has", r), ne(l, "has", o)), r === o ? i.has(r) : i.has(r) || i.has(o)
        },
        forEach(r, i) {
            const l = this,
                o = l.__v_raw,
                c = j(o),
                d = t ? As : e ? Gt : se;
            return !e && ne(c, "iterate", it), o.forEach((u, p) => r.call(i, d(u), d(p), l))
        }
    };
    return ce(s, e ? {
        add: Ht("add"),
        set: Ht("set"),
        delete: Ht("delete"),
        clear: Ht("clear")
    } : {
        add(r) {
            !t && !ye(r) && !ze(r) && (r = j(r));
            const i = j(this);
            return Lt(i).has.call(i, r) || (i.add(r), Ue(i, "add", r, r)), this
        },
        set(r, i) {
            !t && !ye(i) && !ze(i) && (i = j(i));
            const l = j(this),
                {has: o, get: c} = Lt(l);
            let d = o.call(l, r);
            d || (r = j(r), d = o.call(l, r));
            const u = c.call(l, r);
            return l.set(r, i), d ? qe(i, u) && Ue(l, "set", r, i) : Ue(l, "add", r, i), this
        },
        delete(r) {
            const i = j(this),
                {has: l, get: o} = Lt(i);
            let c = l.call(i, r);
            c || (r = j(r), c = l.call(i, r)),
            o && o.call(i, r);
            const d = i.delete(r);
            return c && Ue(i, "delete", r, void 0), d
        },
        clear() {
            const r = j(this),
                i = r.size !== 0,
                l = r.clear();
            return i && Ue(r, "clear", void 0, void 0), l
        }
    }), ["keys", "values", "entries", Symbol.iterator].forEach(r => {
        s[r] = ai(r, e, t)
    }), s
}
function Ws(e, t) {
    const s = ui(e, t);
    return (n, r, i) => r === "__v_isReactive" ? !e : r === "__v_isReadonly" ? e : r === "__v_raw" ? n : Reflect.get(U(s, r) && r in n ? s : n, r, i)
}
const di = {
        get: Ws(!1, !1)
    },
    hi = {
        get: Ws(!1, !0)
    },
    pi = {
        get: Ws(!0, !1)
    };
const Qn = new WeakMap,
    er = new WeakMap,
    tr = new WeakMap,
    gi = new WeakMap;
function mi(e) {
    switch (e) {
    case "Object":
    case "Array":
        return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
        return 2;
    default:
        return 0
    }
}
function vi(e) {
    return e.__v_skip || !Object.isExtensible(e) ? 0 : mi(Br(e))
}
function ks(e) {
    return ze(e) ? e : Js(e, !1, oi, di, Qn)
}
function _i(e) {
    return Js(e, !1, ci, hi, er)
}
function sr(e) {
    return Js(e, !0, fi, pi, tr)
}
function Js(e, t, s, n, r) {
    if (!X(e) || e.__v_raw && !(t && e.__v_isReactive))
        return e;
    const i = vi(e);
    if (i === 0)
        return e;
    const l = r.get(e);
    if (l)
        return l;
    const o = new Proxy(e, i === 2 ? n : s);
    return r.set(e, o), o
}
function ut(e) {
    return ze(e) ? ut(e.__v_raw) : !!(e && e.__v_isReactive)
}
function ze(e) {
    return !!(e && e.__v_isReadonly)
}
function ye(e) {
    return !!(e && e.__v_isShallow)
}
function Gs(e) {
    return e ? !!e.__v_raw : !1
}
function j(e) {
    const t = e && e.__v_raw;
    return t ? j(t) : e
}
function bi(e) {
    return !U(e, "__v_skip") && Object.isExtensible(e) && Ss(e, "__v_skip", !0), e
}
const se = e => X(e) ? ks(e) : e,
    Gt = e => X(e) ? sr(e) : e;
function re(e) {
    return e ? e.__v_isRef === !0 : !1
}
function ie(e) {
    return xi(e, !1)
}
function xi(e, t) {
    return re(e) ? e : new yi(e, t)
}
class yi {
    constructor(t, s)
    {
        this.dep = new Bs,
        this.__v_isRef = !0,
        this.__v_isShallow = !1,
        this._rawValue = s ? t : j(t),
        this._value = s ? t : se(t),
        this.__v_isShallow = s
    }
    get value()
    {
        return this.dep.track(), this._value
    }
    set value(t)
    {
        const s = this._rawValue,
            n = this.__v_isShallow || ye(t) || ze(t);
        t = n ? t : j(t),
        qe(t, s) && (this._rawValue = t, this._value = n ? t : se(t), this.dep.trigger())
    }
}
function wi(e) {
    return re(e) ? e.value : e
}
const Si = {
    get: (e, t, s) => t === "__v_raw" ? e : wi(Reflect.get(e, t, s)),
    set: (e, t, s, n) => {
        const r = e[t];
        return re(r) && !re(s) ? (r.value = s, !0) : Reflect.set(e, t, s, n)
    }
};
function nr(e) {
    return ut(e) ? e : new Proxy(e, Si)
}
class Ci {
    constructor(t, s, n)
    {
        this.fn = t,
        this.setter = s,
        this._value = void 0,
        this.dep = new Bs(this),
        this.__v_isRef = !0,
        this.deps = void 0,
        this.depsTail = void 0,
        this.flags = 16,
        this.globalVersion = At - 1,
        this.next = void 0,
        this.effect = this,
        this.__v_isReadonly = !s,
        this.isSSR = n
    }
    notify()
    {
        if (this.flags |= 16, !(this.flags & 8) && Y !== this)
            return Wn(this, !0), !0
    }
    get value()
    {
        const t = this.dep.track();
        return Gn(this), t && (t.version = this.dep.version), this._value
    }
    set value(t)
    {
        this.setter && this.setter(t)
    }
}
function Ti(e, t, s=!1) {
    let n,
        r;
    return M(e) ? n = e : (n = e.get, r = e.set), new Ci(n, r, s)
}
const jt = {},
    qt = new WeakMap;
let rt;
function Ei(e, t=!1, s=rt) {
    if (s) {
        let n = qt.get(s);
        n || qt.set(s, n = []),
        n.push(e)
    }
}
function Oi(e, t, s=W) {
    const {immediate: n, deep: r, once: i, scheduler: l, augmentJob: o, call: c} = s,
        d = A => r ? A : ye(A) || r === !1 || r === 0 ? Ke(A, 1) : Ke(A);
    let u,
        p,
        C,
        T,
        D = !1,
        F = !1;
    if (re(e) ? (p = () => e.value, D = ye(e)) : ut(e) ? (p = () => d(e), D = !0) : P(e) ? (F = !0, D = e.some(A => ut(A) || ye(A)), p = () => e.map(A => {
        if (re(A))
            return A.value;
        if (ut(A))
            return d(A);
        if (M(A))
            return c ? c(A, 2) : A()
    })) : M(e) ? t ? p = c ? () => c(e, 2) : e : p = () => {
        if (C) {
            Ve();
            try {
                C()
            } finally {
                Be()
            }
        }
        const A = rt;
        rt = u;
        try {
            return c ? c(e, 3, [T]) : e(T)
        } finally {
            rt = A
        }
    } : p = Fe, t && r) {
        const A = p,
            Z = r === !0 ? 1 / 0 : r;
        p = () => Ke(A(), Z)
    }
    const te = Qr(),
        $ = () => {
            u.stop(),
            te && te.active && Hs(te.effects, u)
        };
    if (i && t) {
        const A = t;
        t = (...Z) => {
            A(...Z),
            $()
        }
    }
    let K = F ? new Array(e.length).fill(jt) : jt;
    const k = A => {
        if (!(!(u.flags & 1) || !u.dirty && !A))
            if (t) {
                const Z = u.run();
                if (r || D || (F ? Z.some((Se, ge) => qe(Se, K[ge])) : qe(Z, K))) {
                    C && C();
                    const Se = rt;
                    rt = u;
                    try {
                        const ge = [Z, K === jt ? void 0 : F && K[0] === jt ? [] : K, T];
                        K = Z,
                        c ? c(t, 3, ge) : t(...ge)
                    } finally {
                        rt = Se
                    }
                }
            } else
                u.run()
    };
    return o && o(k), u = new Vn(p), u.scheduler = l ? () => l(k, !1) : k, T = A => Ei(A, !1, u), C = u.onStop = () => {
        const A = qt.get(u);
        if (A) {
            if (c)
                c(A, 4);
            else
                for (const Z of A)
                    Z();
            qt.delete(u)
        }
    }, t ? n ? k(!0) : K = u.run() : l ? l(k.bind(null, !0), !0) : u.run(), $.pause = u.pause.bind(u), $.resume = u.resume.bind(u), $.stop = $, $
}
function Ke(e, t=1 / 0, s) {
    if (t <= 0 || !X(e) || e.__v_skip || (s = s || new Set, s.has(e)))
        return e;
    if (s.add(e), t--, re(e))
        Ke(e.value, t, s);
    else if (P(e))
        for (let n = 0; n < e.length; n++)
            Ke(e[n], t, s);
    else if (Dn(e) || at(e))
        e.forEach(n => {
            Ke(n, t, s)
        });
    else if (Ln(e)) {
        for (const n in e)
            Ke(e[n], t, s);
        for (const n of Object.getOwnPropertySymbols(e))
            Object.prototype.propertyIsEnumerable.call(e, n) && Ke(e[n], t, s)
    }
    return e
} /**
* @vue/runtime-core v3.5.18
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/



function Ft(e, t, s, n) {
    try {
        return n ? e(...n) : e()
    } catch (r) {
        ls(r, t, s)
    }
}
function $e(e, t, s, n) {
    if (M(e)) {
        const r = Ft(e, t, s, n);
        return r && $n(r) && r.catch(i => {
            ls(i, t, s)
        }), r
    }
    if (P(e)) {
        const r = [];
        for (let i = 0; i < e.length; i++)
            r.push($e(e[i], t, s, n));
        return r
    }
}
function ls(e, t, s, n=!0) {
    const r = t ? t.vnode : null,
        {errorHandler: i, throwUnhandledErrorInProduction: l} = t && t.appContext.config || W;
    if (t) {
        let o = t.parent;
        const c = t.proxy,
            d = `https://vuejs.org/error-reference/#runtime-${s}`;
        for (; o;) {
            const u = o.ec;
            if (u) {
                for (let p = 0; p < u.length; p++)
                    if (u[p](e, c, d) === !1)
                        return
            }
            o = o.parent
        }
        if (i) {
            Ve(),
            Ft(i, null, 10, [e, c, d]),
            Be();
            return
        }
    }
    Ai(e, s, r, n, l)
}
function Ai(e, t, s, n=!0, r=!1) {
    if (r)
        throw e;
    console.error(e)
}
const oe = [];
let Re = -1;
const dt = [];
let Je = null,
    ot = 0;
const rr = Promise.resolve();
let Yt = null;
function Is(e) {
    const t = Yt || rr;
    return e ? t.then(this ? e.bind(this) : e) : t
}
function Ii(e) {
    let t = Re + 1,
        s = oe.length;
    for (; t < s;) {
        const n = t + s >>> 1,
            r = oe[n],
            i = Pt(r);
        i < e || i === e && r.flags & 2 ? t = n + 1 : s = n
    }
    return t
}
function qs(e) {
    if (!(e.flags & 1)) {
        const t = Pt(e),
            s = oe[oe.length - 1];
        !s || !(e.flags & 2) && t >= Pt(s) ? oe.push(e) : oe.splice(Ii(t), 0, e),
        e.flags |= 1,
        ir()
    }
}
function ir() {
    Yt || (Yt = rr.then(or))
}
function Pi(e) {
    P(e) ? dt.push(...e) : Je && e.id === -1 ? Je.splice(ot + 1, 0, e) : e.flags & 1 || (dt.push(e), e.flags |= 1),
    ir()
}
function fn(e, t, s=Re + 1) {
    for (; s < oe.length; s++) {
        const n = oe[s];
        if (n && n.flags & 2) {
            if (e && n.id !== e.uid)
                continue;
            oe.splice(s, 1),
            s--,
            n.flags & 4 && (n.flags &= -2),
            n(),
            n.flags & 4 || (n.flags &= -2)
        }
    }
}
function lr(e) {
    if (dt.length) {
        const t = [...new Set(dt)].sort((s, n) => Pt(s) - Pt(n));
        if (dt.length = 0, Je) {
            Je.push(...t);
            return
        }
        for (Je = t, ot = 0; ot < Je.length; ot++) {
            const s = Je[ot];
            s.flags & 4 && (s.flags &= -2),
            s.flags & 8 || s(),
            s.flags &= -2
        }
        Je = null,
        ot = 0
    }
}
const Pt = e => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function or(e) {
    try {
        for (Re = 0; Re < oe.length; Re++) {
            const t = oe[Re];
            t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), Ft(t, t.i, t.i ? 15 : 14), t.flags & 4 || (t.flags &= -2))
        }
    } finally {
        for (; Re < oe.length; Re++) {
            const t = oe[Re];
            t && (t.flags &= -2)
        }
        Re = -1,
        oe.length = 0,
        lr(),
        Yt = null,
        (oe.length || dt.length) && or()
    }
}
let xe = null,
    fr = null;
function zt(e) {
    const t = xe;
    return xe = e, fr = e && e.type.__scopeId || null, t
}
function Ri(e, t=xe, s) {
    if (!t || e._n)
        return e;
    const n = (...r) => {
        n._d && vn(-1);
        const i = zt(t);
        let l;
        try {
            l = e(...r)
        } finally {
            zt(i),
            n._d && vn(1)
        }
        return l
    };
    return n._n = !0, n._c = !0, n._d = !0, n
}
function Mi(e, t) {
    if (xe === null)
        return e;
    const s = as(xe),
        n = e.dirs || (e.dirs = []);
    for (let r = 0; r < t.length; r++) {
        let [i, l, o, c=W] = t[r];
        i && (M(i) && (i = {
            mounted: i,
            updated: i
        }), i.deep && Ke(l), n.push({
            dir: i,
            instance: s,
            value: l,
            oldValue: void 0,
            arg: o,
            modifiers: c
        }))
    }
    return e
}
function st(e, t, s, n) {
    const r = e.dirs,
        i = t && t.dirs;
    for (let l = 0; l < r.length; l++) {
        const o = r[l];
        i && (o.oldValue = i[l].value);
        let c = o.dir[n];
        c && (Ve(), $e(c, s, 8, [e.el, o, e, t]), Be())
    }
}
const Fi = Symbol("_vte"),
    Di = e => e.__isTeleport;
function Ys(e, t) {
    e.shapeFlag & 6 && e.component ? (e.transition = t, Ys(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t
}
function cr(e) {
    e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0]
}
function Ct(e, t, s, n, r=!1) {
    if (P(e)) {
        e.forEach((D, F) => Ct(D, t && (P(t) ? t[F] : t), s, n, r));
        return
    }
    if (Tt(n) && !r) {
        n.shapeFlag & 512 && n.type.__asyncResolved && n.component.subTree.component && Ct(e, t, s, n.component.subTree);
        return
    }
    const i = n.shapeFlag & 4 ? as(n.component) : n.el,
        l = r ? null : i,
        {i: o, r: c} = e,
        d = t && t.r,
        u = o.refs === W ? o.refs = {} : o.refs,
        p = o.setupState,
        C = j(p),
        T = p === W ? () => !1 : D => U(C, D);
    if (d != null && d !== c && (Q(d) ? (u[d] = null, T(d) && (p[d] = null)) : re(d) && (d.value = null)), M(c))
        Ft(c, o, 12, [l, u]);
    else {
        const D = Q(c),
            F = re(c);
        if (D || F) {
            const te = () => {
                if (e.f) {
                    const $ = D ? T(c) ? p[c] : u[c] : c.value;
                    r ? P($) && Hs($, i) : P($) ? $.includes(i) || $.push(i) : D ? (u[c] = [i], T(c) && (p[c] = u[c])) : (c.value = [i], e.k && (u[e.k] = c.value))
                } else
                    D ? (u[c] = l, T(c) && (p[c] = l)) : F && (c.value = l, e.k && (u[e.k] = l))
            };
            l ? (te.id = -1, ve(te, s)) : te()
        }
    }
}
ss().requestIdleCallback;
ss().cancelIdleCallback;
const Tt = e => !!e.type.__asyncLoader,
    ar = e => e.type.__isKeepAlive;
function $i(e, t) {
    ur(e, "a", t)
}
function Ni(e, t) {
    ur(e, "da", t)
}
function ur(e, t, s=fe) {
    const n = e.__wdc || (e.__wdc = () => {
        let r = s;
        for (; r;) {
            if (r.isDeactivated)
                return;
            r = r.parent
        }
        return e()
    });
    if (os(t, n, s), s) {
        let r = s.parent;
        for (; r && r.parent;)
            ar(r.parent.vnode) && Li(n, t, s, r),
            r = r.parent
    }
}
function Li(e, t, s, n) {
    const r = os(t, e, n, !0);
    hr(() => {
        Hs(n[t], r)
    }, s)
}
function os(e, t, s=fe, n=!1) {
    if (s) {
        const r = s[e] || (s[e] = []),
            i = t.__weh || (t.__weh = (...l) => {
                Ve();
                const o = Dt(s),
                    c = $e(t, s, e, l);
                return o(), Be(), c
            });
        return n ? r.unshift(i) : r.push(i), i
    }
}
const We = e => (t, s=fe) => {
        (!Mt || e === "sp") && os(e, (...n) => t(...n), s)
    },
    Hi = We("bm"),
    dr = We("m"),
    ji = We("bu"),
    Ui = We("u"),
    Ki = We("bum"),
    hr = We("um"),
    Vi = We("sp"),
    Bi = We("rtg"),
    Wi = We("rtc");
function ki(e, t=fe) {
    os("ec", e, t)
}
const Ji = Symbol.for("v-ndc");
function Ut(e, t, s, n) {
    let r;
    const i = s,
        l = P(e);
    if (l || Q(e)) {
        const o = l && ut(e);
        let c = !1,
            d = !1;
        o && (c = !ye(e), d = ze(e), e = is(e)),
        r = new Array(e.length);
        for (let u = 0, p = e.length; u < p; u++)
            r[u] = t(c ? d ? Gt(se(e[u])) : se(e[u]) : e[u], u, void 0, i)
    } else if (typeof e == "number") {
        r = new Array(e);
        for (let o = 0; o < e; o++)
            r[o] = t(o + 1, o, void 0, i)
    } else if (X(e))
        if (e[Symbol.iterator])
            r = Array.from(e, (o, c) => t(o, c, void 0, i));
        else {
            const o = Object.keys(e);
            r = new Array(o.length);
            for (let c = 0, d = o.length; c < d; c++) {
                const u = o[c];
                r[c] = t(e[u], u, c, i)
            }
        }
    else
        r = [];
    return r
}
const Ps = e => e ? Dr(e) ? as(e) : Ps(e.parent) : null,
    Et = ce(Object.create(null), {
        $: e => e,
        $el: e => e.vnode.el,
        $data: e => e.data,
        $props: e => e.props,
        $attrs: e => e.attrs,
        $slots: e => e.slots,
        $refs: e => e.refs,
        $parent: e => Ps(e.parent),
        $root: e => Ps(e.root),
        $host: e => e.ce,
        $emit: e => e.emit,
        $options: e => gr(e),
        $forceUpdate: e => e.f || (e.f = () => {
            qs(e.update)
        }),
        $nextTick: e => e.n || (e.n = Is.bind(e.proxy)),
        $watch: e => pl.bind(e)
    }),
    vs = (e, t) => e !== W && !e.__isScriptSetup && U(e, t),
    Gi = {
        get({_: e}, t) {
            if (t === "__v_skip")
                return !0;
            const {ctx: s, setupState: n, data: r, props: i, accessCache: l, type: o, appContext: c} = e;
            let d;
            if (t[0] !== "$") {
                const T = l[t];
                if (T !== void 0)
                    switch (T) {
                    case 1:
                        return n[t];
                    case 2:
                        return r[t];
                    case 4:
                        return s[t];
                    case 3:
                        return i[t]
                    }
                else {
                    if (vs(n, t))
                        return l[t] = 1, n[t];
                    if (r !== W && U(r, t))
                        return l[t] = 2, r[t];
                    if ((d = e.propsOptions[0]) && U(d, t))
                        return l[t] = 3, i[t];
                    if (s !== W && U(s, t))
                        return l[t] = 4, s[t];
                    Rs && (l[t] = 0)
                }
            }
            const u = Et[t];
            let p,
                C;
            if (u)
                return t === "$attrs" && ne(e.attrs, "get", ""), u(e);
            if ((p = o.__cssModules) && (p = p[t]))
                return p;
            if (s !== W && U(s, t))
                return l[t] = 4, s[t];
            if (C = c.config.globalProperties, U(C, t))
                return C[t]
        },
        set({_: e}, t, s) {
            const {data: n, setupState: r, ctx: i} = e;
            return vs(r, t) ? (r[t] = s, !0) : n !== W && U(n, t) ? (n[t] = s, !0) : U(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (i[t] = s, !0)
        },
        has({_: {data: e, setupState: t, accessCache: s, ctx: n, appContext: r, propsOptions: i}}, l) {
            let o;
            return !!s[l] || e !== W && U(e, l) || vs(t, l) || (o = i[0]) && U(o, l) || U(n, l) || U(Et, l) || U(r.config.globalProperties, l)
        },
        defineProperty(e, t, s) {
            return s.get != null ? e._.accessCache[t] = 0 : U(s, "value") && this.set(e, t, s.value, null), Reflect.defineProperty(e, t, s)
        }
    };
function cn(e) {
    return P(e) ? e.reduce((t, s) => (t[s] = null, t), {}) : e
}
let Rs = !0;
function qi(e) {
    const t = gr(e),
        s = e.proxy,
        n = e.ctx;
    Rs = !1,
    t.beforeCreate && an(t.beforeCreate, e, "bc");
    const {data: r, computed: i, methods: l, watch: o, provide: c, inject: d, created: u, beforeMount: p, mounted: C, beforeUpdate: T, updated: D, activated: F, deactivated: te, beforeDestroy: $, beforeUnmount: K, destroyed: k, unmounted: A, render: Z, renderTracked: Se, renderTriggered: ge, errorCaptured: be, serverPrefetch: Ne, expose: Le, inheritAttrs: N, components: y, directives: H, filters: Ce} = t;
    if (d && Yi(d, n, null), l)
        for (const z in l) {
            const J = l[z];
            M(J) && (n[z] = J.bind(s))
        }
    if (r) {
        const z = r.call(s, s);
        X(z) && (e.data = ks(z))
    }
    if (Rs = !0, i)
        for (const z in i) {
            const J = i[z],
                et = M(J) ? J.bind(s, s) : M(J.get) ? J.get.bind(s, s) : Fe,
                $t = !M(J) && M(J.set) ? J.set.bind(s) : Fe,
                tt = Nr({
                    get: et,
                    set: $t
                });
            Object.defineProperty(n, z, {
                enumerable: !0,
                configurable: !0,
                get: () => tt.value,
                set: Ee => tt.value = Ee
            })
        }
    if (o)
        for (const z in o)
            pr(o[z], n, s, z);
    if (c) {
        const z = M(c) ? c.call(s) : c;
        Reflect.ownKeys(z).forEach(J => {
            tl(J, z[J])
        })
    }
    u && an(u, e, "c");
    function ee(z, J) {
        P(J) ? J.forEach(et => z(et.bind(s))) : J && z(J.bind(s))
    }
    if (ee(Hi, p), ee(dr, C), ee(ji, T), ee(Ui, D), ee($i, F), ee(Ni, te), ee(ki, be), ee(Wi, Se), ee(Bi, ge), ee(Ki, K), ee(hr, A), ee(Vi, Ne), P(Le))
        if (Le.length) {
            const z = e.exposed || (e.exposed = {});
            Le.forEach(J => {
                Object.defineProperty(z, J, {
                    get: () => s[J],
                    set: et => s[J] = et,
                    enumerable: !0
                })
            })
        } else
            e.exposed || (e.exposed = {});
    Z && e.render === Fe && (e.render = Z),
    N != null && (e.inheritAttrs = N),
    y && (e.components = y),
    H && (e.directives = H),
    Ne && cr(e)
}
function Yi(e, t, s=Fe) {
    P(e) && (e = Ms(e));
    for (const n in e) {
        const r = e[n];
        let i;
        X(r) ? "default" in r ? i = Bt(r.from || n, r.default, !0) : i = Bt(r.from || n) : i = Bt(r),
        re(i) ? Object.defineProperty(t, n, {
            enumerable: !0,
            configurable: !0,
            get: () => i.value,
            set: l => i.value = l
        }) : t[n] = i
    }
}
function an(e, t, s) {
    $e(P(e) ? e.map(n => n.bind(t.proxy)) : e.bind(t.proxy), t, s)
}
function pr(e, t, s, n) {
    let r = n.includes(".") ? Ar(s, n) : () => s[n];
    if (Q(e)) {
        const i = t[e];
        M(i) && bs(r, i)
    } else if (M(e))
        bs(r, e.bind(s));
    else if (X(e))
        if (P(e))
            e.forEach(i => pr(i, t, s, n));
        else {
            const i = M(e.handler) ? e.handler.bind(s) : t[e.handler];
            M(i) && bs(r, i, e)
        }
}
function gr(e) {
    const t = e.type,
        {mixins: s, extends: n} = t,
        {mixins: r, optionsCache: i, config: {optionMergeStrategies: l}} = e.appContext,
        o = i.get(t);
    let c;
    return o ? c = o : !r.length && !s && !n ? c = t : (c = {}, r.length && r.forEach(d => Xt(c, d, l, !0)), Xt(c, t, l)), X(t) && i.set(t, c), c
}
function Xt(e, t, s, n=!1) {
    const {mixins: r, extends: i} = t;
    i && Xt(e, i, s, !0),
    r && r.forEach(l => Xt(e, l, s, !0));
    for (const l in t)
        if (!(n && l === "expose")) {
            const o = zi[l] || s && s[l];
            e[l] = o ? o(e[l], t[l]) : t[l]
        }
    return e
}
const zi = {
    data: un,
    props: dn,
    emits: dn,
    methods: xt,
    computed: xt,
    beforeCreate: le,
    created: le,
    beforeMount: le,
    mounted: le,
    beforeUpdate: le,
    updated: le,
    beforeDestroy: le,
    beforeUnmount: le,
    destroyed: le,
    unmounted: le,
    activated: le,
    deactivated: le,
    errorCaptured: le,
    serverPrefetch: le,
    components: xt,
    directives: xt,
    watch: Zi,
    provide: un,
    inject: Xi
};
function un(e, t) {
    return t ? e ? function() {
        return ce(M(e) ? e.call(this, this) : e, M(t) ? t.call(this, this) : t)
    } : t : e
}
function Xi(e, t) {
    return xt(Ms(e), Ms(t))
}
function Ms(e) {
    if (P(e)) {
        const t = {};
        for (let s = 0; s < e.length; s++)
            t[e[s]] = e[s];
        return t
    }
    return e
}
function le(e, t) {
    return e ? [...new Set([].concat(e, t))] : t
}
function xt(e, t) {
    return e ? ce(Object.create(null), e, t) : t
}
function dn(e, t) {
    return e ? P(e) && P(t) ? [...new Set([...e, ...t])] : ce(Object.create(null), cn(e), cn(t ?? {})) : t
}
function Zi(e, t) {
    if (!e)
        return t;
    if (!t)
        return e;
    const s = ce(Object.create(null), e);
    for (const n in t)
        s[n] = le(e[n], t[n]);
    return s
}
function mr() {
    return {
        app: null,
        config: {
            isNativeTag: Kr,
            performance: !1,
            globalProperties: {},
            optionMergeStrategies: {},
            errorHandler: void 0,
            warnHandler: void 0,
            compilerOptions: {}
        },
        mixins: [],
        components: {},
        directives: {},
        provides: Object.create(null),
        optionsCache: new WeakMap,
        propsCache: new WeakMap,
        emitsCache: new WeakMap
    }
}
let Qi = 0;
function el(e, t) {
    return function(n, r=null) {
        M(n) || (n = ce({}, n)),
        r != null && !X(r) && (r = null);
        const i = mr(),
            l = new WeakSet,
            o = [];
        let c = !1;
        const d = i.app = {
            _uid: Qi++,
            _component: n,
            _props: r,
            _container: null,
            _context: i,
            _instance: null,
            version: Hl,
            get config() {
                return i.config
            },
            set config(u) {},
            use(u, ...p) {
                return l.has(u) || (u && M(u.install) ? (l.add(u), u.install(d, ...p)) : M(u) && (l.add(u), u(d, ...p))), d
            },
            mixin(u) {
                return i.mixins.includes(u) || i.mixins.push(u), d
            },
            component(u, p) {
                return p ? (i.components[u] = p, d) : i.components[u]
            },
            directive(u, p) {
                return p ? (i.directives[u] = p, d) : i.directives[u]
            },
            mount(u, p, C) {
                if (!c) {
                    const T = d._ceVNode || De(n, r);
                    return T.appContext = i, C === !0 ? C = "svg" : C === !1 && (C = void 0), e(T, u, C), c = !0, d._container = u, u.__vue_app__ = d, as(T.component)
                }
            },
            onUnmount(u) {
                o.push(u)
            },
            unmount() {
                c && ($e(o, d._instance, 16), e(null, d._container), delete d._container.__vue_app__)
            },
            provide(u, p) {
                return i.provides[u] = p, d
            },
            runWithContext(u) {
                const p = ht;
                ht = d;
                try {
                    return u()
                } finally {
                    ht = p
                }
            }
        };
        return d
    }
}
let ht = null;
function tl(e, t) {
    if (fe) {
        let s = fe.provides;
        const n = fe.parent && fe.parent.provides;
        n === s && (s = fe.provides = Object.create(n)),
        s[e] = t
    }
}
function Bt(e, t, s=!1) {
    const n = Ml();
    if (n || ht) {
        let r = ht ? ht._context.provides : n ? n.parent == null || n.ce ? n.vnode.appContext && n.vnode.appContext.provides : n.parent.provides : void 0;
        if (r && e in r)
            return r[e];
        if (arguments.length > 1)
            return s && M(t) ? t.call(n && n.proxy) : t
    }
}
const vr = {},
    _r = () => Object.create(vr),
    br = e => Object.getPrototypeOf(e) === vr;
function sl(e, t, s, n=!1) {
    const r = {},
        i = _r();
    e.propsDefaults = Object.create(null),
    xr(e, t, r, i);
    for (const l in e.propsOptions[0])
        l in r || (r[l] = void 0);
    s ? e.props = n ? r : _i(r) : e.type.props ? e.props = r : e.props = i,
    e.attrs = i
}
function nl(e, t, s, n) {
    const {props: r, attrs: i, vnode: {patchFlag: l}} = e,
        o = j(r),
        [c] = e.propsOptions;
    let d = !1;
    if ((n || l > 0) && !(l & 16)) {
        if (l & 8) {
            const u = e.vnode.dynamicProps;
            for (let p = 0; p < u.length; p++) {
                let C = u[p];
                if (fs(e.emitsOptions, C))
                    continue;
                const T = t[C];
                if (c)
                    if (U(i, C))
                        T !== i[C] && (i[C] = T, d = !0);
                    else {
                        const D = Ye(C);
                        r[D] = Fs(c, o, D, T, e, !1)
                    }
                else
                    T !== i[C] && (i[C] = T, d = !0)
            }
        }
    } else {
        xr(e, t, r, i) && (d = !0);
        let u;
        for (const p in o)
            (!t || !U(t, p) && ((u = Qe(p)) === p || !U(t, u))) && (c ? s && (s[p] !== void 0 || s[u] !== void 0) && (r[p] = Fs(c, o, p, void 0, e, !0)) : delete r[p]);
        if (i !== o)
            for (const p in i)
                (!t || !U(t, p)) && (delete i[p], d = !0)
    }
    d && Ue(e.attrs, "set", "")
}
function xr(e, t, s, n) {
    const [r, i] = e.propsOptions;
    let l = !1,
        o;
    if (t)
        for (let c in t) {
            if (yt(c))
                continue;
            const d = t[c];
            let u;
            r && U(r, u = Ye(c)) ? !i || !i.includes(u) ? s[u] = d : (o || (o = {}))[u] = d : fs(e.emitsOptions, c) || (!(c in n) || d !== n[c]) && (n[c] = d, l = !0)
        }
    if (i) {
        const c = j(s),
            d = o || W;
        for (let u = 0; u < i.length; u++) {
            const p = i[u];
            s[p] = Fs(r, c, p, d[p], e, !U(d, p))
        }
    }
    return l
}
function Fs(e, t, s, n, r, i) {
    const l = e[s];
    if (l != null) {
        const o = U(l, "default");
        if (o && n === void 0) {
            const c = l.default;
            if (l.type !== Function && !l.skipFactory && M(c)) {
                const {propsDefaults: d} = r;
                if (s in d)
                    n = d[s];
                else {
                    const u = Dt(r);
                    n = d[s] = c.call(null, t),
                    u()
                }
            } else
                n = c;
            r.ce && r.ce._setProp(s, n)
        }
        l[0] && (i && !o ? n = !1 : l[1] && (n === "" || n === Qe(s)) && (n = !0))
    }
    return n
}
const rl = new WeakMap;
function yr(e, t, s=!1) {
    const n = s ? rl : t.propsCache,
        r = n.get(e);
    if (r)
        return r;
    const i = e.props,
        l = {},
        o = [];
    let c = !1;
    if (!M(e)) {
        const u = p => {
            c = !0;
            const [C, T] = yr(p, t, !0);
            ce(l, C),
            T && o.push(...T)
        };
        !s && t.mixins.length && t.mixins.forEach(u),
        e.extends && u(e.extends),
        e.mixins && e.mixins.forEach(u)
    }
    if (!i && !c)
        return X(e) && n.set(e, ct), ct;
    if (P(i))
        for (let u = 0; u < i.length; u++) {
            const p = Ye(i[u]);
            hn(p) && (l[p] = W)
        }
    else if (i)
        for (const u in i) {
            const p = Ye(u);
            if (hn(p)) {
                const C = i[u],
                    T = l[p] = P(C) || M(C) ? {
                        type: C
                    } : ce({}, C),
                    D = T.type;
                let F = !1,
                    te = !0;
                if (P(D))
                    for (let $ = 0; $ < D.length; ++$) {
                        const K = D[$],
                            k = M(K) && K.name;
                        if (k === "Boolean") {
                            F = !0;
                            break
                        } else
                            k === "String" && (te = !1)
                    }
                else
                    F = M(D) && D.name === "Boolean";
                T[0] = F,
                T[1] = te,
                (F || U(T, "default")) && o.push(p)
            }
        }
    const d = [l, o];
    return X(e) && n.set(e, d), d
}
function hn(e) {
    return e[0] !== "$" && !yt(e)
}
const zs = e => e === "_" || e === "__" || e === "_ctx" || e === "$stable",
    Xs = e => P(e) ? e.map(Me) : [Me(e)],
    il = (e, t, s) => {
        if (t._n)
            return t;
        const n = Ri((...r) => Xs(t(...r)), s);
        return n._c = !1, n
    },
    wr = (e, t, s) => {
        const n = e._ctx;
        for (const r in e) {
            if (zs(r))
                continue;
            const i = e[r];
            if (M(i))
                t[r] = il(r, i, n);
            else if (i != null) {
                const l = Xs(i);
                t[r] = () => l
            }
        }
    },
    Sr = (e, t) => {
        const s = Xs(t);
        e.slots.default = () => s
    },
    Cr = (e, t, s) => {
        for (const n in t)
            (s || !zs(n)) && (e[n] = t[n])
    },
    ll = (e, t, s) => {
        const n = e.slots = _r();
        if (e.vnode.shapeFlag & 32) {
            const r = t.__;
            r && Ss(n, "__", r, !0);
            const i = t._;
            i ? (Cr(n, t, s), s && Ss(n, "_", i, !0)) : wr(t, n)
        } else
            t && Sr(e, t)
    },
    ol = (e, t, s) => {
        const {vnode: n, slots: r} = e;
        let i = !0,
            l = W;
        if (n.shapeFlag & 32) {
            const o = t._;
            o ? s && o === 1 ? i = !1 : Cr(r, t, s) : (i = !t.$stable, wr(t, r)),
            l = t
        } else
            t && (Sr(e, t), l = {
                default: 1
            });
        if (i)
            for (const o in r)
                !zs(o) && l[o] == null && delete r[o]
    },
    ve = yl;
function fl(e) {
    return cl(e)
}
function cl(e, t) {
    const s = ss();
    s.__VUE__ = !0;
    const {insert: n, remove: r, patchProp: i, createElement: l, createText: o, createComment: c, setText: d, setElementText: u, parentNode: p, nextSibling: C, setScopeId: T=Fe, insertStaticContent: D} = e,
        F = (f, a, h, v=null, g=null, m=null, w=void 0, x=null, b=!!a.dynamicChildren) => {
            if (f === a)
                return;
            f && !bt(f, a) && (v = Nt(f), Ee(f, g, m, !0), f = null),
            a.patchFlag === -2 && (b = !1, a.dynamicChildren = null);
            const {type: _, ref: O, shapeFlag: S} = a;
            switch (_) {
            case cs:
                te(f, a, h, v);
                break;
            case Xe:
                $(f, a, h, v);
                break;
            case Wt:
                f == null && K(a, h, v, w);
                break;
            case pe:
                y(f, a, h, v, g, m, w, x, b);
                break;
            default:
                S & 1 ? Z(f, a, h, v, g, m, w, x, b) : S & 6 ? H(f, a, h, v, g, m, w, x, b) : (S & 64 || S & 128) && _.process(f, a, h, v, g, m, w, x, b, mt)
            }
            O != null && g ? Ct(O, f && f.ref, m, a || f, !a) : O == null && f && f.ref != null && Ct(f.ref, null, m, f, !0)
        },
        te = (f, a, h, v) => {
            if (f == null)
                n(a.el = o(a.children), h, v);
            else {
                const g = a.el = f.el;
                a.children !== f.children && d(g, a.children)
            }
        },
        $ = (f, a, h, v) => {
            f == null ? n(a.el = c(a.children || ""), h, v) : a.el = f.el
        },
        K = (f, a, h, v) => {
            [f.el, f.anchor] = D(f.children, a, h, v, f.el, f.anchor)
        },
        k = ({el: f, anchor: a}, h, v) => {
            let g;
            for (; f && f !== a;)
                g = C(f),
                n(f, h, v),
                f = g;
            n(a, h, v)
        },
        A = ({el: f, anchor: a}) => {
            let h;
            for (; f && f !== a;)
                h = C(f),
                r(f),
                f = h;
            r(a)
        },
        Z = (f, a, h, v, g, m, w, x, b) => {
            a.type === "svg" ? w = "svg" : a.type === "math" && (w = "mathml"),
            f == null ? Se(a, h, v, g, m, w, x, b) : Ne(f, a, g, m, w, x, b)
        },
        Se = (f, a, h, v, g, m, w, x) => {
            let b,
                _;
            const {props: O, shapeFlag: S, transition: E, dirs: I} = f;
            if (b = f.el = l(f.type, m, O && O.is, O), S & 8 ? u(b, f.children) : S & 16 && be(f.children, b, null, v, g, _s(f, m), w, x), I && st(f, null, v, "created"), ge(b, f, f.scopeId, w, v), O) {
                for (const G in O)
                    G !== "value" && !yt(G) && i(b, G, null, O[G], m, v);
                "value" in O && i(b, "value", null, O.value, m),
                (_ = O.onVnodeBeforeMount) && Pe(_, v, f)
            }
            I && st(f, null, v, "beforeMount");
            const L = al(g, E);
            L && E.beforeEnter(b),
            n(b, a, h),
            ((_ = O && O.onVnodeMounted) || L || I) && ve(() => {
                _ && Pe(_, v, f),
                L && E.enter(b),
                I && st(f, null, v, "mounted")
            }, g)
        },
        ge = (f, a, h, v, g) => {
            if (h && T(f, h), v)
                for (let m = 0; m < v.length; m++)
                    T(f, v[m]);
            if (g) {
                let m = g.subTree;
                if (a === m || Pr(m.type) && (m.ssContent === a || m.ssFallback === a)) {
                    const w = g.vnode;
                    ge(f, w, w.scopeId, w.slotScopeIds, g.parent)
                }
            }
        },
        be = (f, a, h, v, g, m, w, x, b=0) => {
            for (let _ = b; _ < f.length; _++) {
                const O = f[_] = x ? Ge(f[_]) : Me(f[_]);
                F(null, O, a, h, v, g, m, w, x)
            }
        },
        Ne = (f, a, h, v, g, m, w) => {
            const x = a.el = f.el;
            let {patchFlag: b, dynamicChildren: _, dirs: O} = a;
            b |= f.patchFlag & 16;
            const S = f.props || W,
                E = a.props || W;
            let I;
            if (h && nt(h, !1), (I = E.onVnodeBeforeUpdate) && Pe(I, h, a, f), O && st(a, f, h, "beforeUpdate"), h && nt(h, !0), (S.innerHTML && E.innerHTML == null || S.textContent && E.textContent == null) && u(x, ""), _ ? Le(f.dynamicChildren, _, x, h, v, _s(a, g), m) : w || J(f, a, x, null, h, v, _s(a, g), m, !1), b > 0) {
                if (b & 16)
                    N(x, S, E, h, g);
                else if (b & 2 && S.class !== E.class && i(x, "class", null, E.class, g), b & 4 && i(x, "style", S.style, E.style, g), b & 8) {
                    const L = a.dynamicProps;
                    for (let G = 0; G < L.length; G++) {
                        const V = L[G],
                            ae = S[V],
                            ue = E[V];
                        (ue !== ae || V === "value") && i(x, V, ae, ue, g, h)
                    }
                }
                b & 1 && f.children !== a.children && u(x, a.children)
            } else
                !w && _ == null && N(x, S, E, h, g);
            ((I = E.onVnodeUpdated) || O) && ve(() => {
                I && Pe(I, h, a, f),
                O && st(a, f, h, "updated")
            }, v)
        },
        Le = (f, a, h, v, g, m, w) => {
            for (let x = 0; x < a.length; x++) {
                const b = f[x],
                    _ = a[x],
                    O = b.el && (b.type === pe || !bt(b, _) || b.shapeFlag & 198) ? p(b.el) : h;
                F(b, _, O, null, v, g, m, w, !0)
            }
        },
        N = (f, a, h, v, g) => {
            if (a !== h) {
                if (a !== W)
                    for (const m in a)
                        !yt(m) && !(m in h) && i(f, m, a[m], null, g, v);
                for (const m in h) {
                    if (yt(m))
                        continue;
                    const w = h[m],
                        x = a[m];
                    w !== x && m !== "value" && i(f, m, x, w, g, v)
                }
                "value" in h && i(f, "value", a.value, h.value, g)
            }
        },
        y = (f, a, h, v, g, m, w, x, b) => {
            const _ = a.el = f ? f.el : o(""),
                O = a.anchor = f ? f.anchor : o("");
            let {patchFlag: S, dynamicChildren: E, slotScopeIds: I} = a;
            I && (x = x ? x.concat(I) : I),
            f == null ? (n(_, h, v), n(O, h, v), be(a.children || [], h, O, g, m, w, x, b)) : S > 0 && S & 64 && E && f.dynamicChildren ? (Le(f.dynamicChildren, E, h, g, m, w, x), (a.key != null || g && a === g.subTree) && Tr(f, a, !0)) : J(f, a, h, O, g, m, w, x, b)
        },
        H = (f, a, h, v, g, m, w, x, b) => {
            a.slotScopeIds = x,
            f == null ? a.shapeFlag & 512 ? g.ctx.activate(a, h, v, w, b) : Ce(a, h, v, g, m, w, b) : Te(f, a, b)
        },
        Ce = (f, a, h, v, g, m, w) => {
            const x = f.component = Rl(f, v, g);
            if (ar(f) && (x.ctx.renderer = mt), Fl(x, !1, w), x.asyncDep) {
                if (g && g.registerDep(x, ee, w), !f.el) {
                    const b = x.subTree = De(Xe);
                    $(null, b, a, h),
                    f.placeholder = b.el
                }
            } else
                ee(x, f, a, h, g, m, w)
        },
        Te = (f, a, h) => {
            const v = a.component = f.component;
            if (bl(f, a, h))
                if (v.asyncDep && !v.asyncResolved) {
                    z(v, a, h);
                    return
                } else
                    v.next = a,
                    v.update();
            else
                a.el = f.el,
                v.vnode = a
        },
        ee = (f, a, h, v, g, m, w) => {
            const x = () => {
                if (f.isMounted) {
                    let {next: S, bu: E, u: I, parent: L, vnode: G} = f;
                    {
                        const Ae = Er(f);
                        if (Ae) {
                            S && (S.el = G.el, z(f, S, w)),
                            Ae.asyncDep.then(() => {
                                f.isUnmounted || x()
                            });
                            return
                        }
                    }
                    let V = S,
                        ae;
                    nt(f, !1),
                    S ? (S.el = G.el, z(f, S, w)) : S = G,
                    E && Vt(E),
                    (ae = S.props && S.props.onVnodeBeforeUpdate) && Pe(ae, L, S, G),
                    nt(f, !0);
                    const ue = gn(f),
                        Oe = f.subTree;
                    f.subTree = ue,
                    F(Oe, ue, p(Oe.el), Nt(Oe), f, g, m),
                    S.el = ue.el,
                    V === null && xl(f, ue.el),
                    I && ve(I, g),
                    (ae = S.props && S.props.onVnodeUpdated) && ve(() => Pe(ae, L, S, G), g)
                } else {
                    let S;
                    const {el: E, props: I} = a,
                        {bm: L, m: G, parent: V, root: ae, type: ue} = f,
                        Oe = Tt(a);
                    nt(f, !1),
                    L && Vt(L),
                    !Oe && (S = I && I.onVnodeBeforeMount) && Pe(S, V, a),
                    nt(f, !0);
                    {
                        ae.ce && ae.ce._def.shadowRoot !== !1 && ae.ce._injectChildStyle(ue);
                        const Ae = f.subTree = gn(f);
                        F(null, Ae, h, v, f, g, m),
                        a.el = Ae.el
                    }
                    if (G && ve(G, g), !Oe && (S = I && I.onVnodeMounted)) {
                        const Ae = a;
                        ve(() => Pe(S, V, Ae), g)
                    }
                    (a.shapeFlag & 256 || V && Tt(V.vnode) && V.vnode.shapeFlag & 256) && f.a && ve(f.a, g),
                    f.isMounted = !0,
                    a = h = v = null
                }
            };
            f.scope.on();
            const b = f.effect = new Vn(x);
            f.scope.off();
            const _ = f.update = b.run.bind(b),
                O = f.job = b.runIfDirty.bind(b);
            O.i = f,
            O.id = f.uid,
            b.scheduler = () => qs(O),
            nt(f, !0),
            _()
        },
        z = (f, a, h) => {
            a.component = f;
            const v = f.vnode.props;
            f.vnode = a,
            f.next = null,
            nl(f, a.props, v, h),
            ol(f, a.children, h),
            Ve(),
            fn(f),
            Be()
        },
        J = (f, a, h, v, g, m, w, x, b=!1) => {
            const _ = f && f.children,
                O = f ? f.shapeFlag : 0,
                S = a.children,
                {patchFlag: E, shapeFlag: I} = a;
            if (E > 0) {
                if (E & 128) {
                    $t(_, S, h, v, g, m, w, x, b);
                    return
                } else if (E & 256) {
                    et(_, S, h, v, g, m, w, x, b);
                    return
                }
            }
            I & 8 ? (O & 16 && gt(_, g, m), S !== _ && u(h, S)) : O & 16 ? I & 16 ? $t(_, S, h, v, g, m, w, x, b) : gt(_, g, m, !0) : (O & 8 && u(h, ""), I & 16 && be(S, h, v, g, m, w, x, b))
        },
        et = (f, a, h, v, g, m, w, x, b) => {
            f = f || ct,
            a = a || ct;
            const _ = f.length,
                O = a.length,
                S = Math.min(_, O);
            let E;
            for (E = 0; E < S; E++) {
                const I = a[E] = b ? Ge(a[E]) : Me(a[E]);
                F(f[E], I, h, null, g, m, w, x, b)
            }
            _ > O ? gt(f, g, m, !0, !1, S) : be(a, h, v, g, m, w, x, b, S)
        },
        $t = (f, a, h, v, g, m, w, x, b) => {
            let _ = 0;
            const O = a.length;
            let S = f.length - 1,
                E = O - 1;
            for (; _ <= S && _ <= E;) {
                const I = f[_],
                    L = a[_] = b ? Ge(a[_]) : Me(a[_]);
                if (bt(I, L))
                    F(I, L, h, null, g, m, w, x, b);
                else
                    break;
                _++
            }
            for (; _ <= S && _ <= E;) {
                const I = f[S],
                    L = a[E] = b ? Ge(a[E]) : Me(a[E]);
                if (bt(I, L))
                    F(I, L, h, null, g, m, w, x, b);
                else
                    break;
                S--,
                E--
            }
            if (_ > S) {
                if (_ <= E) {
                    const I = E + 1,
                        L = I < O ? a[I].el : v;
                    for (; _ <= E;)
                        F(null, a[_] = b ? Ge(a[_]) : Me(a[_]), h, L, g, m, w, x, b),
                        _++
                }
            } else if (_ > E)
                for (; _ <= S;)
                    Ee(f[_], g, m, !0),
                    _++;
            else {
                const I = _,
                    L = _,
                    G = new Map;
                for (_ = L; _ <= E; _++) {
                    const me = a[_] = b ? Ge(a[_]) : Me(a[_]);
                    me.key != null && G.set(me.key, _)
                }
                let V,
                    ae = 0;
                const ue = E - L + 1;
                let Oe = !1,
                    Ae = 0;
                const vt = new Array(ue);
                for (_ = 0; _ < ue; _++)
                    vt[_] = 0;
                for (_ = I; _ <= S; _++) {
                    const me = f[_];
                    if (ae >= ue) {
                        Ee(me, g, m, !0);
                        continue
                    }
                    let Ie;
                    if (me.key != null)
                        Ie = G.get(me.key);
                    else
                        for (V = L; V <= E; V++)
                            if (vt[V - L] === 0 && bt(me, a[V])) {
                                Ie = V;
                                break
                            }
                    Ie === void 0 ? Ee(me, g, m, !0) : (vt[Ie - L] = _ + 1, Ie >= Ae ? Ae = Ie : Oe = !0, F(me, a[Ie], h, null, g, m, w, x, b), ae++)
                }
                const tn = Oe ? ul(vt) : ct;
                for (V = tn.length - 1, _ = ue - 1; _ >= 0; _--) {
                    const me = L + _,
                        Ie = a[me],
                        sn = a[me + 1],
                        nn = me + 1 < O ? sn.el || sn.placeholder : v;
                    vt[_] === 0 ? F(null, Ie, h, nn, g, m, w, x, b) : Oe && (V < 0 || _ !== tn[V] ? tt(Ie, h, nn, 2) : V--)
                }
            }
        },
        tt = (f, a, h, v, g=null) => {
            const {el: m, type: w, transition: x, children: b, shapeFlag: _} = f;
            if (_ & 6) {
                tt(f.component.subTree, a, h, v);
                return
            }
            if (_ & 128) {
                f.suspense.move(a, h, v);
                return
            }
            if (_ & 64) {
                w.move(f, a, h, mt);
                return
            }
            if (w === pe) {
                n(m, a, h);
                for (let S = 0; S < b.length; S++)
                    tt(b[S], a, h, v);
                n(f.anchor, a, h);
                return
            }
            if (w === Wt) {
                k(f, a, h);
                return
            }
            if (v !== 2 && _ & 1 && x)
                if (v === 0)
                    x.beforeEnter(m),
                    n(m, a, h),
                    ve(() => x.enter(m), g);
                else {
                    const {leave: S, delayLeave: E, afterLeave: I} = x,
                        L = () => {
                            f.ctx.isUnmounted ? r(m) : n(m, a, h)
                        },
                        G = () => {
                            S(m, () => {
                                L(),
                                I && I()
                            })
                        };
                    E ? E(m, L, G) : G()
                }
            else
                n(m, a, h)
        },
        Ee = (f, a, h, v=!1, g=!1) => {
            const {type: m, props: w, ref: x, children: b, dynamicChildren: _, shapeFlag: O, patchFlag: S, dirs: E, cacheIndex: I} = f;
            if (S === -2 && (g = !1), x != null && (Ve(), Ct(x, null, h, f, !0), Be()), I != null && (a.renderCache[I] = void 0), O & 256) {
                a.ctx.deactivate(f);
                return
            }
            const L = O & 1 && E,
                G = !Tt(f);
            let V;
            if (G && (V = w && w.onVnodeBeforeUnmount) && Pe(V, a, f), O & 6)
                Ur(f.component, h, v);
            else {
                if (O & 128) {
                    f.suspense.unmount(h, v);
                    return
                }
                L && st(f, null, a, "beforeUnmount"),
                O & 64 ? f.type.remove(f, a, h, mt, v) : _ && !_.hasOnce && (m !== pe || S > 0 && S & 64) ? gt(_, a, h, !1, !0) : (m === pe && S & 384 || !g && O & 16) && gt(b, a, h),
                v && Qs(f)
            }
            (G && (V = w && w.onVnodeUnmounted) || L) && ve(() => {
                V && Pe(V, a, f),
                L && st(f, null, a, "unmounted")
            }, h)
        },
        Qs = f => {
            const {type: a, el: h, anchor: v, transition: g} = f;
            if (a === pe) {
                jr(h, v);
                return
            }
            if (a === Wt) {
                A(f);
                return
            }
            const m = () => {
                r(h),
                g && !g.persisted && g.afterLeave && g.afterLeave()
            };
            if (f.shapeFlag & 1 && g && !g.persisted) {
                const {leave: w, delayLeave: x} = g,
                    b = () => w(h, m);
                x ? x(f.el, m, b) : b()
            } else
                m()
        },
        jr = (f, a) => {
            let h;
            for (; f !== a;)
                h = C(f),
                r(f),
                f = h;
            r(a)
        },
        Ur = (f, a, h) => {
            const {bum: v, scope: g, job: m, subTree: w, um: x, m: b, a: _, parent: O, slots: {__: S}} = f;
            pn(b),
            pn(_),
            v && Vt(v),
            O && P(S) && S.forEach(E => {
                O.renderCache[E] = void 0
            }),
            g.stop(),
            m && (m.flags |= 8, Ee(w, f, a, h)),
            x && ve(x, a),
            ve(() => {
                f.isUnmounted = !0
            }, a),
            a && a.pendingBranch && !a.isUnmounted && f.asyncDep && !f.asyncResolved && f.suspenseId === a.pendingId && (a.deps--, a.deps === 0 && a.resolve())
        },
        gt = (f, a, h, v=!1, g=!1, m=0) => {
            for (let w = m; w < f.length; w++)
                Ee(f[w], a, h, v, g)
        },
        Nt = f => {
            if (f.shapeFlag & 6)
                return Nt(f.component.subTree);
            if (f.shapeFlag & 128)
                return f.suspense.next();
            const a = C(f.anchor || f.el),
                h = a && a[Fi];
            return h ? C(h) : a
        };
    let us = !1;
    const en = (f, a, h) => {
            f == null ? a._vnode && Ee(a._vnode, null, null, !0) : F(a._vnode || null, f, a, null, null, null, h),
            a._vnode = f,
            us || (us = !0, fn(), lr(), us = !1)
        },
        mt = {
            p: F,
            um: Ee,
            m: tt,
            r: Qs,
            mt: Ce,
            mc: be,
            pc: J,
            pbc: Le,
            n: Nt,
            o: e
        };
    return {
        render: en,
        hydrate: void 0,
        createApp: el(en)
    }
}
function _s({type: e, props: t}, s) {
    return s === "svg" && e === "foreignObject" || s === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : s
}
function nt({effect: e, job: t}, s) {
    s ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5)
}
function al(e, t) {
    return (!e || e && !e.pendingBranch) && t && !t.persisted
}
function Tr(e, t, s=!1) {
    const n = e.children,
        r = t.children;
    if (P(n) && P(r))
        for (let i = 0; i < n.length; i++) {
            const l = n[i];
            let o = r[i];
            o.shapeFlag & 1 && !o.dynamicChildren && ((o.patchFlag <= 0 || o.patchFlag === 32) && (o = r[i] = Ge(r[i]), o.el = l.el), !s && o.patchFlag !== -2 && Tr(l, o)),
            o.type === cs && (o.el = l.el),
            o.type === Xe && !o.el && (o.el = l.el)
        }
}
function ul(e) {
    const t = e.slice(),
        s = [0];
    let n,
        r,
        i,
        l,
        o;
    const c = e.length;
    for (n = 0; n < c; n++) {
        const d = e[n];
        if (d !== 0) {
            if (r = s[s.length - 1], e[r] < d) {
                t[n] = r,
                s.push(n);
                continue
            }
            for (i = 0, l = s.length - 1; i < l;)
                o = i + l >> 1,
                e[s[o]] < d ? i = o + 1 : l = o;
            d < e[s[i]] && (i > 0 && (t[n] = s[i - 1]), s[i] = n)
        }
    }
    for (i = s.length, l = s[i - 1]; i-- > 0;)
        s[i] = l,
        l = t[l];
    return s
}
function Er(e) {
    const t = e.subTree.component;
    if (t)
        return t.asyncDep && !t.asyncResolved ? t : Er(t)
}
function pn(e) {
    if (e)
        for (let t = 0; t < e.length; t++)
            e[t].flags |= 8
}
const dl = Symbol.for("v-scx"),
    hl = () => Bt(dl);
function bs(e, t, s) {
    return Or(e, t, s)
}
function Or(e, t, s=W) {
    const {immediate: n, deep: r, flush: i, once: l} = s,
        o = ce({}, s),
        c = t && n || !t && i !== "post";
    let d;
    if (Mt) {
        if (i === "sync") {
            const T = hl();
            d = T.__watcherHandles || (T.__watcherHandles = [])
        } else if (!c) {
            const T = () => {};
            return T.stop = Fe, T.resume = Fe, T.pause = Fe, T
        }
    }
    const u = fe;
    o.call = (T, D, F) => $e(T, u, D, F);
    let p = !1;
    i === "post" ? o.scheduler = T => {
        ve(T, u && u.suspense)
    } : i !== "sync" && (p = !0, o.scheduler = (T, D) => {
        D ? T() : qs(T)
    }),
    o.augmentJob = T => {
        t && (T.flags |= 4),
        p && (T.flags |= 2, u && (T.id = u.uid, T.i = u))
    };
    const C = Oi(e, t, o);
    return Mt && (d ? d.push(C) : c && C()), C
}
function pl(e, t, s) {
    const n = this.proxy,
        r = Q(e) ? e.includes(".") ? Ar(n, e) : () => n[e] : e.bind(n, n);
    let i;
    M(t) ? i = t : (i = t.handler, s = t);
    const l = Dt(this),
        o = Or(r, i.bind(n), s);
    return l(), o
}
function Ar(e, t) {
    const s = t.split(".");
    return () => {
        let n = e;
        for (let r = 0; r < s.length && n; r++)
            n = n[s[r]];
        return n
    }
}
const gl = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${Ye(t)}Modifiers`] || e[`${Qe(t)}Modifiers`];
function ml(e, t, ...s) {
    if (e.isUnmounted)
        return;
    const n = e.vnode.props || W;
    let r = s;
    const i = t.startsWith("update:"),
        l = i && gl(n, t.slice(7));
    l && (l.trim && (r = s.map(u => Q(u) ? u.trim() : u)), l.number && (r = s.map(Cs)));
    let o,
        c = n[o = ds(t)] || n[o = ds(Ye(t))];
    !c && i && (c = n[o = ds(Qe(t))]),
    c && $e(c, e, 6, r);
    const d = n[o + "Once"];
    if (d) {
        if (!e.emitted)
            e.emitted = {};
        else if (e.emitted[o])
            return;
        e.emitted[o] = !0,
        $e(d, e, 6, r)
    }
}
function Ir(e, t, s=!1) {
    const n = t.emitsCache,
        r = n.get(e);
    if (r !== void 0)
        return r;
    const i = e.emits;
    let l = {},
        o = !1;
    if (!M(e)) {
        const c = d => {
            const u = Ir(d, t, !0);
            u && (o = !0, ce(l, u))
        };
        !s && t.mixins.length && t.mixins.forEach(c),
        e.extends && c(e.extends),
        e.mixins && e.mixins.forEach(c)
    }
    return !i && !o ? (X(e) && n.set(e, null), null) : (P(i) ? i.forEach(c => l[c] = null) : ce(l, i), X(e) && n.set(e, l), l)
}
function fs(e, t) {
    return !e || !Qt(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), U(e, t[0].toLowerCase() + t.slice(1)) || U(e, Qe(t)) || U(e, t))
}
function gn(e) {
    const {type: t, vnode: s, proxy: n, withProxy: r, propsOptions: [i], slots: l, attrs: o, emit: c, render: d, renderCache: u, props: p, data: C, setupState: T, ctx: D, inheritAttrs: F} = e,
        te = zt(e);
    let $,
        K;
    try {
        if (s.shapeFlag & 4) {
            const A = r || n,
                Z = A;
            $ = Me(d.call(Z, A, u, p, T, C, D)),
            K = o
        } else {
            const A = t;
            $ = Me(A.length > 1 ? A(p, {
                attrs: o,
                slots: l,
                emit: c
            }) : A(p, null)),
            K = t.props ? o : vl(o)
        }
    } catch (A) {
        Ot.length = 0,
        ls(A, e, 1),
        $ = De(Xe)
    }
    let k = $;
    if (K && F !== !1) {
        const A = Object.keys(K),
            {shapeFlag: Z} = k;
        A.length && Z & 7 && (i && A.some(Ls) && (K = _l(K, i)), k = pt(k, K, !1, !0))
    }
    return s.dirs && (k = pt(k, null, !1, !0), k.dirs = k.dirs ? k.dirs.concat(s.dirs) : s.dirs), s.transition && Ys(k, s.transition), $ = k, zt(te), $
}
const vl = e => {
        let t;
        for (const s in e)
            (s === "class" || s === "style" || Qt(s)) && ((t || (t = {}))[s] = e[s]);
        return t
    },
    _l = (e, t) => {
        const s = {};
        for (const n in e)
            (!Ls(n) || !(n.slice(9) in t)) && (s[n] = e[n]);
        return s
    };
function bl(e, t, s) {
    const {props: n, children: r, component: i} = e,
        {props: l, children: o, patchFlag: c} = t,
        d = i.emitsOptions;
    if (t.dirs || t.transition)
        return !0;
    if (s && c >= 0) {
        if (c & 1024)
            return !0;
        if (c & 16)
            return n ? mn(n, l, d) : !!l;
        if (c & 8) {
            const u = t.dynamicProps;
            for (let p = 0; p < u.length; p++) {
                const C = u[p];
                if (l[C] !== n[C] && !fs(d, C))
                    return !0
            }
        }
    } else
        return (r || o) && (!o || !o.$stable) ? !0 : n === l ? !1 : n ? l ? mn(n, l, d) : !0 : !!l;
    return !1
}
function mn(e, t, s) {
    const n = Object.keys(t);
    if (n.length !== Object.keys(e).length)
        return !0;
    for (let r = 0; r < n.length; r++) {
        const i = n[r];
        if (t[i] !== e[i] && !fs(s, i))
            return !0
    }
    return !1
}
function xl({vnode: e, parent: t}, s) {
    for (; t;) {
        const n = t.subTree;
        if (n.suspense && n.suspense.activeBranch === e && (n.el = e.el), n === e)
            (e = t.vnode).el = s,
            t = t.parent;
        else
            break
    }
}
const Pr = e => e.__isSuspense;
function yl(e, t) {
    t && t.pendingBranch ? P(e) ? t.effects.push(...e) : t.effects.push(e) : Pi(e)
}
const pe = Symbol.for("v-fgt"),
    cs = Symbol.for("v-txt"),
    Xe = Symbol.for("v-cmt"),
    Wt = Symbol.for("v-stc"),
    Ot = [];
let _e = null;
function B(e=!1) {
    Ot.push(_e = e ? null : [])
}
function wl() {
    Ot.pop(),
    _e = Ot[Ot.length - 1] || null
}
let Rt = 1;
function vn(e, t=!1) {
    Rt += e,
    e < 0 && _e && t && (_e.hasOnce = !0)
}
function Rr(e) {
    return e.dynamicChildren = Rt > 0 ? _e || ct : null, wl(), Rt > 0 && _e && _e.push(e), e
}
function q(e, t, s, n, r, i) {
    return Rr(R(e, t, s, n, r, i, !0))
}
function Sl(e, t, s, n, r) {
    return Rr(De(e, t, s, n, r, !0))
}
function Mr(e) {
    return e ? e.__v_isVNode === !0 : !1
}
function bt(e, t) {
    return e.type === t.type && e.key === t.key
}
const Fr = ({key: e}) => e ?? null,
    kt = ({ref: e, ref_key: t, ref_for: s}) => (typeof e == "number" && (e = "" + e), e != null ? Q(e) || re(e) || M(e) ? {
        i: xe,
        r: e,
        k: t,
        f: !!s
    } : e : null);
function R(e, t=null, s=null, n=0, r=null, i=e === pe ? 0 : 1, l=!1, o=!1) {
    const c = {
        __v_isVNode: !0,
        __v_skip: !0,
        type: e,
        props: t,
        key: t && Fr(t),
        ref: t && kt(t),
        scopeId: fr,
        slotScopeIds: null,
        children: s,
        component: null,
        suspense: null,
        ssContent: null,
        ssFallback: null,
        dirs: null,
        transition: null,
        el: null,
        anchor: null,
        target: null,
        targetStart: null,
        targetAnchor: null,
        staticCount: 0,
        shapeFlag: i,
        patchFlag: n,
        dynamicProps: r,
        dynamicChildren: null,
        appContext: null,
        ctx: xe
    };
    return o ? (Zs(c, s), i & 128 && e.normalize(c)) : s && (c.shapeFlag |= Q(s) ? 8 : 16), Rt > 0 && !l && _e && (c.patchFlag > 0 || i & 6) && c.patchFlag !== 32 && _e.push(c), c
}
const De = Cl;
function Cl(e, t=null, s=null, n=0, r=null, i=!1) {
    if ((!e || e === Ji) && (e = Xe), Mr(e)) {
        const o = pt(e, t, !0);
        return s && Zs(o, s), Rt > 0 && !i && _e && (o.shapeFlag & 6 ? _e[_e.indexOf(e)] = o : _e.push(o)), o.patchFlag = -2, o
    }
    if (Ll(e) && (e = e.__vccOpts), t) {
        t = Tl(t);
        let {class: o, style: c} = t;
        o && !Q(o) && (t.class = rs(o)),
        X(c) && (Gs(c) && !P(c) && (c = ce({}, c)), t.style = ns(c))
    }
    const l = Q(e) ? 1 : Pr(e) ? 128 : Di(e) ? 64 : X(e) ? 4 : M(e) ? 2 : 0;
    return R(e, t, s, n, r, l, i, !0)
}
function Tl(e) {
    return e ? Gs(e) || br(e) ? ce({}, e) : e : null
}
function pt(e, t, s=!1, n=!1) {
    const {props: r, ref: i, patchFlag: l, children: o, transition: c} = e,
        d = t ? Al(r || {}, t) : r,
        u = {
            __v_isVNode: !0,
            __v_skip: !0,
            type: e.type,
            props: d,
            key: d && Fr(d),
            ref: t && t.ref ? s && i ? P(i) ? i.concat(kt(t)) : [i, kt(t)] : kt(t) : i,
            scopeId: e.scopeId,
            slotScopeIds: e.slotScopeIds,
            children: o,
            target: e.target,
            targetStart: e.targetStart,
            targetAnchor: e.targetAnchor,
            staticCount: e.staticCount,
            shapeFlag: e.shapeFlag,
            patchFlag: t && e.type !== pe ? l === -1 ? 16 : l | 16 : l,
            dynamicProps: e.dynamicProps,
            dynamicChildren: e.dynamicChildren,
            appContext: e.appContext,
            dirs: e.dirs,
            transition: c,
            component: e.component,
            suspense: e.suspense,
            ssContent: e.ssContent && pt(e.ssContent),
            ssFallback: e.ssFallback && pt(e.ssFallback),
            placeholder: e.placeholder,
            el: e.el,
            anchor: e.anchor,
            ctx: e.ctx,
            ce: e.ce
        };
    return c && n && Ys(u, c.clone(u)), u
}
function El(e=" ", t=0) {
    return De(cs, null, e, t)
}
function Ol(e, t) {
    const s = De(Wt, null, e);
    return s.staticCount = t, s
}
function de(e="", t=!1) {
    return t ? (B(), Sl(Xe, null, e)) : De(Xe, null, e)
}
function Me(e) {
    return e == null || typeof e == "boolean" ? De(Xe) : P(e) ? De(pe, null, e.slice()) : Mr(e) ? Ge(e) : De(cs, null, String(e))
}
function Ge(e) {
    return e.el === null && e.patchFlag !== -1 || e.memo ? e : pt(e)
}
function Zs(e, t) {
    let s = 0;
    const {shapeFlag: n} = e;
    if (t == null)
        t = null;
    else if (P(t))
        s = 16;
    else if (typeof t == "object")
        if (n & 65) {
            const r = t.default;
            r && (r._c && (r._d = !1), Zs(e, r()), r._c && (r._d = !0));
            return
        } else {
            s = 32;
            const r = t._;
            !r && !br(t) ? t._ctx = xe : r === 3 && xe && (xe.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024))
        }
    else
        M(t) ? (t = {
            default: t,
            _ctx: xe
        }, s = 32) : (t = String(t), n & 64 ? (s = 16, t = [El(t)]) : s = 8);
    e.children = t,
    e.shapeFlag |= s
}
function Al(...e) {
    const t = {};
    for (let s = 0; s < e.length; s++) {
        const n = e[s];
        for (const r in n)
            if (r === "class")
                t.class !== n.class && (t.class = rs([t.class, n.class]));
            else if (r === "style")
                t.style = ns([t.style, n.style]);
            else if (Qt(r)) {
                const i = t[r],
                    l = n[r];
                l && i !== l && !(P(i) && i.includes(l)) && (t[r] = i ? [].concat(i, l) : l)
            } else
                r !== "" && (t[r] = n[r])
    }
    return t
}
function Pe(e, t, s, n=null) {
    $e(e, t, 7, [s, n])
}
const Il = mr();
let Pl = 0;
function Rl(e, t, s) {
    const n = e.type,
        r = (t ? t.appContext : e.appContext) || Il,
        i = {
            uid: Pl++,
            vnode: e,
            type: n,
            parent: t,
            appContext: r,
            root: null,
            next: null,
            subTree: null,
            effect: null,
            update: null,
            job: null,
            scope: new Zr(!0),
            render: null,
            proxy: null,
            exposed: null,
            exposeProxy: null,
            withProxy: null,
            provides: t ? t.provides : Object.create(r.provides),
            ids: t ? t.ids : ["", 0, 0],
            accessCache: null,
            renderCache: [],
            components: null,
            directives: null,
            propsOptions: yr(n, r),
            emitsOptions: Ir(n, r),
            emit: null,
            emitted: null,
            propsDefaults: W,
            inheritAttrs: n.inheritAttrs,
            ctx: W,
            data: W,
            props: W,
            attrs: W,
            slots: W,
            refs: W,
            setupState: W,
            setupContext: null,
            suspense: s,
            suspenseId: s ? s.pendingId : 0,
            asyncDep: null,
            asyncResolved: !1,
            isMounted: !1,
            isUnmounted: !1,
            isDeactivated: !1,
            bc: null,
            c: null,
            bm: null,
            m: null,
            bu: null,
            u: null,
            um: null,
            bum: null,
            da: null,
            a: null,
            rtg: null,
            rtc: null,
            ec: null,
            sp: null
        };
    return i.ctx = {
        _: i
    }, i.root = t ? t.root : i, i.emit = ml.bind(null, i), e.ce && e.ce(i), i
}
let fe = null;
const Ml = () => fe || xe;
let Zt,
    Ds;
{
    const e = ss(),
        t = (s, n) => {
            let r;
            return (r = e[s]) || (r = e[s] = []), r.push(n), i => {
                r.length > 1 ? r.forEach(l => l(i)) : r[0](i)
            }
        };
    Zt = t("__VUE_INSTANCE_SETTERS__", s => fe = s),
    Ds = t("__VUE_SSR_SETTERS__", s => Mt = s)
}
const Dt = e => {
        const t = fe;
        return Zt(e), e.scope.on(), () => {
            e.scope.off(),
            Zt(t)
        }
    },
    _n = () => {
        fe && fe.scope.off(),
        Zt(null)
    };
function Dr(e) {
    return e.vnode.shapeFlag & 4
}
let Mt = !1;
function Fl(e, t=!1, s=!1) {
    t && Ds(t);
    const {props: n, children: r} = e.vnode,
        i = Dr(e);
    sl(e, n, i, t),
    ll(e, r, s || t);
    const l = i ? Dl(e, t) : void 0;
    return t && Ds(!1), l
}
function Dl(e, t) {
    const s = e.type;
    e.accessCache = Object.create(null),
    e.proxy = new Proxy(e.ctx, Gi);
    const {setup: n} = s;
    if (n) {
        Ve();
        const r = e.setupContext = n.length > 1 ? Nl(e) : null,
            i = Dt(e),
            l = Ft(n, e, 0, [e.props, r]),
            o = $n(l);
        if (Be(), i(), (o || e.sp) && !Tt(e) && cr(e), o) {
            if (l.then(_n, _n), t)
                return l.then(c => {
                    bn(e, c)
                }).catch(c => {
                    ls(c, e, 0)
                });
            e.asyncDep = l
        } else
            bn(e, l)
    } else
        $r(e)
}
function bn(e, t, s) {
    M(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : X(t) && (e.setupState = nr(t)),
    $r(e)
}
function $r(e, t, s) {
    const n = e.type;
    e.render || (e.render = n.render || Fe);
    {
        const r = Dt(e);
        Ve();
        try {
            qi(e)
        } finally {
            Be(),
            r()
        }
    }
}
const $l = {
    get(e, t) {
        return ne(e, "get", ""), e[t]
    }
};
function Nl(e) {
    const t = s => {
        e.exposed = s || {}
    };
    return {
        attrs: new Proxy(e.attrs, $l),
        slots: e.slots,
        emit: e.emit,
        expose: t
    }
}
function as(e) {
    return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(nr(bi(e.exposed)), {
        get(t, s) {
            if (s in t)
                return t[s];
            if (s in Et)
                return Et[s](e)
        },
        has(t, s) {
            return s in t || s in Et
        }
    })) : e.proxy
}
function Ll(e) {
    return M(e) && "__vccOpts" in e
}
const Nr = (e, t) => Ti(e, t, Mt),
    Hl = "3.5.18"; /**
* @vue/runtime-dom v3.5.18
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/



let $s;
const xn = typeof window < "u" && window.trustedTypes;
if (xn)
    try {
        $s = xn.createPolicy("vue", {
            createHTML: e => e
        })
    } catch {}
const Lr = $s ? e => $s.createHTML(e) : e => e,
    jl = "http://www.w3.org/2000/svg",
    Ul = "http://www.w3.org/1998/Math/MathML",
    je = typeof document < "u" ? document : null,
    yn = je && je.createElement("template"),
    Kl = {
        insert: (e, t, s) => {
            t.insertBefore(e, s || null)
        },
        remove: e => {
            const t = e.parentNode;
            t && t.removeChild(e)
        },
        createElement: (e, t, s, n) => {
            const r = t === "svg" ? je.createElementNS(jl, e) : t === "mathml" ? je.createElementNS(Ul, e) : s ? je.createElement(e, {
                is: s
            }) : je.createElement(e);
            return e === "select" && n && n.multiple != null && r.setAttribute("multiple", n.multiple), r
        },
        createText: e => je.createTextNode(e),
        createComment: e => je.createComment(e),
        setText: (e, t) => {
            e.nodeValue = t
        },
        setElementText: (e, t) => {
            e.textContent = t
        },
        parentNode: e => e.parentNode,
        nextSibling: e => e.nextSibling,
        querySelector: e => je.querySelector(e),
        setScopeId(e, t) {
            e.setAttribute(t, "")
        },
        insertStaticContent(e, t, s, n, r, i) {
            const l = s ? s.previousSibling : t.lastChild;
            if (r && (r === i || r.nextSibling))
                for (; t.insertBefore(r.cloneNode(!0), s), !(r === i || !(r = r.nextSibling));)
                    ;
            else {
                yn.innerHTML = Lr(n === "svg" ? `<svg>${e}</svg>` : n === "mathml" ? `<math>${e}</math>` : e);
                const o = yn.content;
                if (n === "svg" || n === "mathml") {
                    const c = o.firstChild;
                    for (; c.firstChild;)
                        o.appendChild(c.firstChild);
                    o.removeChild(c)
                }
                t.insertBefore(o, s)
            }
            return [l ? l.nextSibling : t.firstChild, s ? s.previousSibling : t.lastChild]
        }
    },
    Vl = Symbol("_vtc");
function Bl(e, t, s) {
    const n = e[Vl];
    n && (t = (t ? [t, ...n] : [...n]).join(" ")),
    t == null ? e.removeAttribute("class") : s ? e.setAttribute("class", t) : e.className = t
}
const wn = Symbol("_vod"),
    Wl = Symbol("_vsh"),
    kl = Symbol(""),
    Jl = /(^|;)\s*display\s*:/;
function Gl(e, t, s) {
    const n = e.style,
        r = Q(s);
    let i = !1;
    if (s && !r) {
        if (t)
            if (Q(t))
                for (const l of t.split(";")) {
                    const o = l.slice(0, l.indexOf(":")).trim();
                    s[o] == null && Jt(n, o, "")
                }
            else
                for (const l in t)
                    s[l] == null && Jt(n, l, "");
        for (const l in s)
            l === "display" && (i = !0),
            Jt(n, l, s[l])
    } else if (r) {
        if (t !== s) {
            const l = n[kl];
            l && (s += ";" + l),
            n.cssText = s,
            i = Jl.test(s)
        }
    } else
        t && e.removeAttribute("style");
    wn in e && (e[wn] = i ? n.display : "", e[Wl] && (n.display = "none"))
}
const Sn = /\s*!important$/;
function Jt(e, t, s) {
    if (P(s))
        s.forEach(n => Jt(e, t, n));
    else if (s == null && (s = ""), t.startsWith("--"))
        e.setProperty(t, s);
    else {
        const n = ql(e, t);
        Sn.test(s) ? e.setProperty(Qe(n), s.replace(Sn, ""), "important") : e[n] = s
    }
}
const Cn = ["Webkit", "Moz", "ms"],
    xs = {};
function ql(e, t) {
    const s = xs[t];
    if (s)
        return s;
    let n = Ye(t);
    if (n !== "filter" && n in e)
        return xs[t] = n;
    n = Hn(n);
    for (let r = 0; r < Cn.length; r++) {
        const i = Cn[r] + n;
        if (i in e)
            return xs[t] = i
    }
    return t
}
const Tn = "http://www.w3.org/1999/xlink";
function En(e, t, s, n, r, i=Xr(t)) {
    n && t.startsWith("xlink:") ? s == null ? e.removeAttributeNS(Tn, t.slice(6, t.length)) : e.setAttributeNS(Tn, t, s) : s == null || i && !jn(s) ? e.removeAttribute(t) : e.setAttribute(t, i ? "" : Ze(s) ? String(s) : s)
}
function On(e, t, s, n, r) {
    if (t === "innerHTML" || t === "textContent") {
        s != null && (e[t] = t === "innerHTML" ? Lr(s) : s);
        return
    }
    const i = e.tagName;
    if (t === "value" && i !== "PROGRESS" && !i.includes("-")) {
        const o = i === "OPTION" ? e.getAttribute("value") || "" : e.value,
            c = s == null ? e.type === "checkbox" ? "on" : "" : String(s);
        (o !== c || !("_value" in e)) && (e.value = c),
        s == null && e.removeAttribute(t),
        e._value = s;
        return
    }
    let l = !1;
    if (s === "" || s == null) {
        const o = typeof e[t];
        o === "boolean" ? s = jn(s) : s == null && o === "string" ? (s = "", l = !0) : o === "number" && (s = 0, l = !0)
    }
    try {
        e[t] = s
    } catch {}
    l && e.removeAttribute(r || t)
}
function ft(e, t, s, n) {
    e.addEventListener(t, s, n)
}
function Yl(e, t, s, n) {
    e.removeEventListener(t, s, n)
}
const An = Symbol("_vei");
function zl(e, t, s, n, r=null) {
    const i = e[An] || (e[An] = {}),
        l = i[t];
    if (n && l)
        l.value = n;
    else {
        const [o, c] = Xl(t);
        if (n) {
            const d = i[t] = eo(n, r);
            ft(e, o, d, c)
        } else
            l && (Yl(e, o, l, c), i[t] = void 0)
    }
}
const In = /(?:Once|Passive|Capture)$/;
function Xl(e) {
    let t;
    if (In.test(e)) {
        t = {};
        let n;
        for (; n = e.match(In);)
            e = e.slice(0, e.length - n[0].length),
            t[n[0].toLowerCase()] = !0
    }
    return [e[2] === ":" ? e.slice(3) : Qe(e.slice(2)), t]
}
let ys = 0;
const Zl = Promise.resolve(),
    Ql = () => ys || (Zl.then(() => ys = 0), ys = Date.now());
function eo(e, t) {
    const s = n => {
        if (!n._vts)
            n._vts = Date.now();
        else if (n._vts <= s.attached)
            return;
        $e(to(n, s.value), t, 5, [n])
    };
    return s.value = e, s.attached = Ql(), s
}
function to(e, t) {
    if (P(t)) {
        const s = e.stopImmediatePropagation;
        return e.stopImmediatePropagation = () => {
            s.call(e),
            e._stopped = !0
        }, t.map(n => r => !r._stopped && n && n(r))
    } else
        return t
}
const Pn = e => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123,
    so = (e, t, s, n, r, i) => {
        const l = r === "svg";
        t === "class" ? Bl(e, n, l) : t === "style" ? Gl(e, s, n) : Qt(t) ? Ls(t) || zl(e, t, s, n, i) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : no(e, t, n, l)) ? (On(e, t, n), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && En(e, t, n, l, i, t !== "value")) : e._isVueCE && (/[A-Z]/.test(t) || !Q(n)) ? On(e, Ye(t), n, i, t) : (t === "true-value" ? e._trueValue = n : t === "false-value" && (e._falseValue = n), En(e, t, n, l))
    };
function no(e, t, s, n) {
    if (n)
        return !!(t === "innerHTML" || t === "textContent" || t in e && Pn(t) && M(s));
    if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
        return !1;
    if (t === "width" || t === "height") {
        const r = e.tagName;
        if (r === "IMG" || r === "VIDEO" || r === "CANVAS" || r === "SOURCE")
            return !1
    }
    return Pn(t) && Q(s) ? !1 : t in e
}
const Rn = e => {
    const t = e.props["onUpdate:modelValue"] || !1;
    return P(t) ? s => Vt(t, s) : t
};
function ro(e) {
    e.target.composing = !0
}
function Mn(e) {
    const t = e.target;
    t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")))
}
const ws = Symbol("_assign"),
    io = {
        created(e, {modifiers: {lazy: t, trim: s, number: n}}, r) {
            e[ws] = Rn(r);
            const i = n || r.props && r.props.type === "number";
            ft(e, t ? "change" : "input", l => {
                if (l.target.composing)
                    return;
                let o = e.value;
                s && (o = o.trim()),
                i && (o = Cs(o)),
                e[ws](o)
            }),
            s && ft(e, "change", () => {
                e.value = e.value.trim()
            }),
            t || (ft(e, "compositionstart", ro), ft(e, "compositionend", Mn), ft(e, "change", Mn))
        },
        mounted(e, {value: t}) {
            e.value = t ?? ""
        },
        beforeUpdate(e, {value: t, oldValue: s, modifiers: {lazy: n, trim: r, number: i}}, l) {
            if (e[ws] = Rn(l), e.composing)
                return;
            const o = (i || e.type === "number") && !/^0\d/.test(e.value) ? Cs(e.value) : e.value,
                c = t ?? "";
            o !== c && (document.activeElement === e && e.type !== "range" && (n && t === s || r && e.value.trim() === c) || (e.value = c))
        }
    },
    lo = {
        esc: "escape",
        space: " ",
        up: "arrow-up",
        left: "arrow-left",
        right: "arrow-right",
        down: "arrow-down",
        delete: "backspace"
    },
    oo = (e, t) => {
        const s = e._withKeys || (e._withKeys = {}),
            n = t.join(".");
        return s[n] || (s[n] = r => {
                if (!("key" in r))
                    return;
                const i = Qe(r.key);
                if (t.some(l => l === i || lo[l] === i))
                    return e(r)
            })
    },
    fo = ce({
        patchProp: so
    }, Kl);
let Fn;
function co() {
    return Fn || (Fn = fl(fo))
}
const ao = (...e) => {
    const t = co().createApp(...e),
        {mount: s} = t;
    return t.mount = n => {
        const r = ho(n);
        if (!r)
            return;
        const i = t._component;
        !M(i) && !i.render && !i.template && (i.template = r.innerHTML),
        r.nodeType === 1 && (r.textContent = "");
        const l = s(r, !1, uo(r));
        return r instanceof Element && (r.removeAttribute("v-cloak"), r.setAttribute("data-v-app", "")), l
    }, t
};
function uo(e) {
    if (e instanceof SVGElement)
        return "svg";
    if (typeof MathMLElement == "function" && e instanceof MathMLElement)
        return "mathml"
}
function ho(e) {
    return Q(e) ? document.querySelector(e) : e
}
const Kt = [{
    levels: [{
        id: 0,
        gram: "输入解",
        ans: "解|日"
    }],
    next: "all"
}, {
    levels: [{
        id: 1,
        gram: "同心结",
        ans: "心结"
    }, {
        id: 2,
        gram: "反光灯",
        ans: "灯光"
    }, {
        id: 3,
        gram: "非非法",
        ans: "合法"
    }, {
        id: 4,
        gram: "非非师",
        ans: "死|熟"
    }, {
        id: 5,
        gram: "谐麋鹿",
        ans: "迷路"
    }, {
        id: 6,
        gram: "倒宜家",
        ans: "埃及"
    }],
    next: "normal"
}, {
    levels: [{
        id: 7,
        gram: "星星星",
        ans: "三星"
    }, {
        id: 8,
        gram: "心用用",
        ans: "一心二用"
    }, {
        id: 9,
        gram: "狡𠓗窟",
        ans: "狡兔三窟"
    }, {
        id: 10,
        gram: "面面刕",
        ans: "两面三刀"
    }, {
        id: 11,
        gram: "事事工",
        ans: "事倍功半"
    }, {
        id: 12,
        gram: "数数数",
        ans: "数一数二"
    }],
    next: "normal"
}, {
    levels: [{
        id: 13,
        gram: "梅兰竹",
        ans: "菊"
    }, {
        id: 14,
        gram: "北大太",
        ans: "印"
    }, {
        id: 15,
        gram: "西红水",
        ans: "三"
    }, {
        id: 16,
        gram: "东黄南",
        ans: "渤"
    }, {
        id: 17,
        gram: "强引弱",
        ans: "电磁"
    }, {
        id: 18,
        gram: "固液气",
        ans: "等离子"
    }],
    next: "normal"
}, {
    levels: [{
        id: 19,
        gram: "地不熟",
        ans: "人生"
    }, {
        id: 20,
        gram: "海知己",
        ans: "内存"
    }, {
        id: 21,
        gram: "1三秋",
        ans: "落叶|一"
    }, {
        id: 22,
        gram: "门闻吠",
        ans: "柴犬"
    }, {
        id: 23,
        gram: "空白狼",
        ans: "手套"
    }, {
        id: 24,
        gram: "成不恨",
        ans: "钢铁"
    }],
    next: "normal"
}, {
    levels: [{
        id: 25,
        gram: "一顺风",
        ans: "一路顺风",
        extra: "答成语"
    }, {
        id: 26,
        gram: "一风顺",
        ans: "一帆风顺",
        extra: "答成语"
    }, {
        id: 27,
        gram: "为非作",
        ans: "为非作歹",
        extra: "答成语"
    }, {
        id: 28,
        gram: "作非为",
        ans: "胡作非为",
        extra: "答成语"
    }, {
        id: 29,
        gram: "说不二",
        ans: "说一不二",
        extra: "答成语"
    }, {
        id: 30,
        gram: "二不说",
        ans: "二话不说",
        extra: "答成语"
    }],
    next: "normal"
}, {
    levels: [{
        id: 31,
        gram: "椿榎楸",
        ans: "柊"
    }, {
        id: 32,
        gram: "离未罔",
        ans: "两"
    }, {
        id: 33,
        gram: "氭煵㘳",
        ans: "洒"
    }, {
        id: 34,
        gram: "脌昐时",
        ans: "秒"
    }, {
        id: 35,
        gram: "艮同失",
        ans: "易"
    }, {
        id: 36,
        gram: "三三四",
        ans: "五"
    }],
    next: "normal"
}, {
    levels: [{
        id: 37,
        gram: "目田四",
        ans: "园"
    }, {
        id: 38,
        gram: "仱仮仪",
        ans: "估|借"
    }, {
        id: 39,
        gram: "椎冋乂",
        ans: "幻"
    }, {
        id: 40,
        gram: "都本日",
        ans: "京东"
    }, {
        id: 41,
        gram: "阳白反",
        ans: "下巴"
    }, {
        id: 42,
        gram: "略略略",
        ans: "略+"
    }],
    next: "normal"
}, {
    levels: [{
        id: 43,
        gram: "氧化氢",
        ans: "水"
    }, {
        id: 44,
        gram: "千瓦时",
        ans: "度"
    }, {
        id: 45,
        gram: "混凝土",
        ans: "砼"
    }, {
        id: 46,
        gram: "图书馆",
        ans: "圕"
    }, {
        id: 47,
        gram: "狮虎兽",
        ans: "彪"
    }, {
        id: 48,
        gram: "人世佳",
        ans: "飘"
    }],
    next: "normal"
}, {
    levels: [{
        id: 49,
        gram: "㋁行星",
        ans: "火星"
    }, {
        id: 50,
        gram: "㏢科幻",
        ans: "三体"
    }, {
        id: 51,
        gram: "㏩神话",
        ans: "后羿射日"
    }, {
        id: 52,
        gram: "㋉㏩字",
        ans: "朝"
    }, {
        id: 53,
        gram: "㍼㍜字",
        ans: "照"
    }, {
        id: 54,
        gram: "三㍾皮",
        ans: "面包"
    }],
    next: "normal"
}, {
    levels: [{
        id: 55,
        gram: "答哈鿣",
        ans: "哈耶克"
    }, {
        id: 56,
        gram: "㘴填㆟",
        ans: "坐"
    }, {
        id: 57,
        gram: "乮前六",
        ans: "配"
    }, {
        id: 58,
        gram: "䇂㱐冨",
        ans: "弋"
    }, {
        id: 59,
        gram: "㖯㌄㐃",
        ans: "同仁"
    }, {
        id: 60,
        gram: "一㔖㌍",
        ans: "归"
    }],
    next: "normal"
}, {
    levels: [{
        id: 61,
        gram: "交换部",
        ans: "陪"
    }, {
        id: 62,
        gram: "重组贺",
        ans: "勋"
    }, {
        id: 63,
        gram: "组字㫄",
        ans: "回"
    }, {
        id: 64,
        gram: "根包邓",
        ans: "权限"
    }, {
        id: 65,
        gram: "镜像匕",
        ans: "刀"
    }, {
        id: 66,
        gram: "镜像吡",
        ans: "OFF"
    }],
    next: "normal"
}, {
    levels: [{
        id: 67,
        gram: "谈讲谓",
        ans: "说"
    }, {
        id: 68,
        gram: "吃屋安",
        ans: "穿"
    }, {
        id: 69,
        gram: "术米沐",
        ans: "杰|沭"
    }, {
        id: 70,
        gram: "卅井丰",
        ans: "亖"
    }, {
        id: 71,
        gram: "鵞䳘䳗",
        ans: "鵝|鹅"
    }, {
        id: 72,
        gram: "都堵肚",
        ans: "阴"
    }],
    next: "normal"
}, {
    levels: [{
        id: 73,
        gram: "亳增一",
        ans: "毫",
        extra: "一级字"
    }, {
        id: 74,
        gram: "计增一",
        ans: "讯",
        extra: "一级字"
    }, {
        id: 75,
        gram: "卑减二",
        ans: "早",
        extra: "一级字"
    }, {
        id: 76,
        gram: "苗变一",
        ans: "昔",
        extra: "一级字"
    }, {
        id: 77,
        gram: "烦增二",
        ans: "颊",
        extra: "一级字"
    }, {
        id: 78,
        gram: "牢增二",
        ans: "牵",
        extra: "一级字"
    }],
    next: "normal"
}, {
    levels: [{
        id: 79,
        gram: "五立方",
        ans: "125",
        extra: "阿数字"
    }, {
        id: 80,
        gram: "八选二",
        ans: "28",
        extra: "阿数字"
    }, {
        id: 81,
        gram: "今年根",
        ans: "45",
        extra: "阿数字"
    }, {
        id: 82,
        gram: "光年米",
        ans: "9460730472580800",
        extra: "阿数字"
    }, {
        id: 83,
        gram: "棋盘麦",
        ans: "18446744073709551615",
        extra: "阿数字"
    }, {
        id: 84,
        gram: "忙狸五",
        ans: "47176870",
        extra: "阿数字"
    }],
    next: "normal"
}, {
    levels: [{
        id: 85,
        gram: "约三亿",
        ans: "光速",
        extra: "答中文"
    }, {
        id: 86,
        gram: "九点八",
        ans: "重力加速度",
        extra: "答中文"
    }, {
        id: 87,
        gram: "七点九",
        ans: "第一宇宙速度",
        extra: "答中文"
    }, {
        id: 88,
        gram: "六千垓",
        ans: "阿伏伽德罗常[数量]",
        extra: "答中文"
    }, {
        id: 89,
        gram: "己𠃍旧",
        ans: "自然对数的底|自然常数|自然底数|欧拉数",
        extra: "答中文"
    }, {
        id: 90,
        gram: "已通过",
        ans: "已通过",
        extra: "答中文"
    }],
    next: "normal"
}, {
    levels: [{
        id: 91,
        gram: "木又寸",
        ans: "树"
    }, {
        id: 92,
        gram: "日一里",
        ans: "量"
    }, {
        id: 93,
        gram: "石旦寸",
        ans: "碍"
    }, {
        id: 94,
        gram: "丶业又",
        ans: "变"
    }, {
        id: 95,
        gram: "亻卜丬",
        ans: "位"
    }, {
        id: 96,
        gram: "二丬日",
        ans: "临"
    }],
    next: "normal"
}, {
    levels: [{
        id: 97,
        gram: "曌女唐",
        ans: "武则天"
    }, {
        id: 98,
        gram: "诗酒剑",
        ans: "李白"
    }, {
        id: 99,
        gram: "猹文绍",
        ans: "鲁迅"
    }, {
        id: 100,
        gram: "蛋航陆",
        ans: "哥伦布"
    }, {
        id: 101,
        gram: "镜苹矮",
        ans: "白雪公主"
    }, {
        id: 102,
        gram: "三创秋",
        ans: "落[葉叶]子"
    }],
    next: "normal"
}, {
    levels: [{
        id: 103,
        gram: "狈甥娑",
        ans: "狼外婆"
    }, {
        id: 104,
        gram: "厩脊迪",
        ans: "马里奥"
    }, {
        id: 105,
        gram: "贼孤国",
        ans: "乌托邦"
    }, {
        id: 106,
        gram: "兜扣俗",
        ans: "麦克风"
    }, {
        id: 107,
        gram: "镇动驾",
        ans: "冰激凌"
    }, {
        id: 108,
        gram: "超股恤",
        ans: "BAT|bat|Bat"
    }],
    next: "normal"
}, {
    levels: [{
        id: 109,
        gram: "柯南药",
        ans: "APTX4869"
    }, {
        id: 110,
        gram: "宇宙答",
        ans: "42"
    }, {
        id: 111,
        gram: "俊杰歌",
        ans: "编号89757"
    }, {
        id: 112,
        gram: "冉阿让",
        ans: "24601"
    }, {
        id: 113,
        gram: "未找到",
        ans: "404"
    }, {
        id: 114,
        gram: "官方群",
        ans: "488377800"
    }],
    next: "normal"
}, {
    levels: [{
        id: 115,
        gram: "半1围",
        ans: "包",
        extra: "答一字"
    }, {
        id: 116,
        gram: "1横字",
        ans: "〇|一|二|三|亖",
        extra: "答一字"
    }, {
        id: 117,
        gram: "1乘2",
        ans: "[二三四五六七八九]十",
        extra: "答两字"
    }, {
        id: 118,
        gram: "餐21",
        ans: "纸巾",
        extra: "答两字"
    }, {
        id: 119,
        gram: "浙12",
        ans: "江西",
        extra: "答两字"
    }, {
        id: 120,
        gram: "1太2",
        ans: "李白",
        extra: "答两字"
    }],
    next: "normal"
}, {
    levels: [{
        id: 121,
        gram: "五字谜",
        ans: ""
    }, {
        id: 122,
        gram: "亖字谜",
        ans: ""
    }, {
        id: 123,
        gram: "三字谜",
        ans: ""
    }, {
        id: 124,
        gram: "两字谜",
        ans: ""
    }, {
        id: 125,
        gram: "一字谜",
        ans: ""
    }],
    next: "all"
}, {
    levels: [{
        id: 126,
        gram: "解为日",
        ans: "日"
    }],
    next: "all"
}, {
    levels: [{
        id: 127,
        gram: "1字谜",
        ans: "",
        final: 1
    }],
    next: "final"
}];
function po(e, t) {
    return e < t ? e : t
}
function go(e) {
    const t = "零一二三四五六七八九";
    let s = e.toString();
    return s.length === 1 && (s = "00" + s), s.length === 2 && (s = "0" + s), s.split("").map(function(n) {
        return t[parseInt(n)]
    }).join("")
}
function mo(e) {
    const t = e.match(/\d/g);
    return t ? t.length : 0
}
function Hr(e, t) {
    if (!e.gram.includes("1"))
        return e.gram;
    let s = t[e.id];
    e.id === 21 && (s = t[0]);
    let n = e.gram,
        r = mo(n);
    if (s && s.length === r) {
        for (let i = 0; i < r; i++)
            n = n.replace(i + 1, s[i]);
        return n
    } else
        return n.replace(/[1-9]/g, "〇")
}
function vo(e, t, s) {
    let n = t[e.id].toUpperCase();
    if (e.gram.endsWith("字谜")) {
        let r = Hr(e, t)[0];
        return s[n] ? s[n] === r : !1
    }
    return e.id === 21 ? t[0] === "解" ? n === "落叶" : t[0] === "日" ? n === "一" : !1 : new RegExp("^(" + e.ans + ")$", "i").test(n)
}
function _o(e) {
    let t = {},
        s = [],
        n = 0,
        r = 0,
        i = !1;
    for (let c in Kt) {
        n = parseInt(c);
        let d = Kt[c],
            u = [],
            p = 0;
        for (let C in d.levels) {
            let T = d.levels[C],
                D = Hr(T, e),
                F = 0;
            e[T.id] && vo(T, e, t) && (p++, r++, F = 1, t[D] = e[T.id].toUpperCase()),
            u.push({
                i: T.id,
                g: D,
                c: F,
                e: T.extra,
                f: T.final
            })
        }
        if (s.push({
            l: u
        }), d.next === "all") {
            if (p < d.levels.length)
                break
        } else if (d.next === "normal") {
            if (p < 4)
                break
        } else
            d.next === "final" && p >= 1 && (i = !0)
    }
    let l = [];
    for (let c = n + 1; c < po(Kt.length, n + 4); c++)
        l.push(Kt[c].levels.length);
    let o = go(r);
    for (let c = 0; c < s.length; c++)
        for (let d = 0; d < s[c].l.length; d++)
            s[c].l[d].i === 90 && (s[c].l[d].g = o);
    return {
        g: s,
        c: o,
        f: i ? 1 : 0,
        n: l
    }
}
const bo = (e, t) => {
        const s = e.__vccOpts || e;
        for (const [n, r] of t)
            s[n] = r;
        return s
    },
    xo = {
        class: "triddles-container"
    },
    yo = {
        key: 0,
        class: "welcome-page"
    },
    wo = {
        key: 1,
        class: "welcome-page"
    },
    So = {
        key: 2,
        class: "main-page"
    },
    Co = {
        class: "main-header"
    },
    To = ["onClick"],
    Eo = {
        class: "triddle-gram"
    },
    Oo = {
        class: "triddle-answer"
    },
    Ao = {
        key: 0
    },
    Io = {
        key: 1
    },
    Po = {
        key: 1
    },
    Ro = {
        key: 3,
        class: "submit-page"
    },
    Mo = {
        class: "main-header"
    },
    Fo = {
        class: "input-area"
    },
    Do = {
        key: 0,
        class: "submit-result"
    },
    $o = {
        key: 1,
        class: "submit-result"
    },
    No = {
        class: "submit-extra"
    },
    Lo = {
        key: 2
    },
    Ho = {
        class: "switch-buttons"
    },
    jo = {
        key: 4,
        class: "welcome-page"
    },
    Uo = {
        key: 0,
        class: "delete-save-dialog"
    },
    Ko = {
        key: 1,
        class: "loading-overlay"
    },
    Vo = {
        __name: "Triddles",
        setup(e) {
            const t = ie(!1),
                s = ie(0),
                n = ie(!1),
                r = ie([]),
                i = ie([]),
                l = ie(""),
                o = ie(!1),
                c = ie([]),
                d = ie(null),
                u = ie(null),
                p = ie(!1),
                C = ie(0),
                T = Nr(() => {
                    try {
                        const N = localStorage.getItem("triddles_answers");
                        if (!N)
                            return !1;
                        const y = JSON.parse(N);
                        return Array.isArray(y) && y.some(H => H && H.length > 0)
                    } catch {
                        return !1
                    }
                }),
                D = (N, y) => {
                    N?.target?.value !== void 0 && (d.value && d.value.i === y && d.value.c === 1 && (p.value = !0), localStorage.setItem("triddles_answers", JSON.stringify(r.value)))
                },
                F = async () => {
                    for (let N = 0; N < 144; N++)
                        r.value = [];
                    localStorage.removeItem("triddles_answers"),
                    await Ne(),
                    n.value = !1
                },
                te = N => {
                    let y = r.value[N];
                    return y ? y.length <= 5 ? y : y.slice(0, 3) + "..." + y.slice(-1) : ""
                },
                $ = ie(0),
                K = ie(0),
                k = ie(0),
                A = async (N, y, H, Ce=!0) => {
                    Ce && s.value === 1 && (C.value = window.scrollY || document.documentElement.scrollTop),
                    window.scrollTo(0, 0),
                    d.value = N,
                    $.value = y,
                    K.value = H,
                    k.value = i.value[H].l.length,
                    s.value = 3,
                    p.value = !1,
                    await Is(),
                    u.value && u.value.focus()
                },
                Z = async () => {
                    let N = i.value[K.value].l[$.value - 1];
                    N && await A(N, $.value - 1, K.value, !1)
                },
                Se = async () => {
                    await Is(),
                    window.scrollTo(0, C.value)
                },
                ge = async () => {
                    s.value = 1,
                    await Se()
                },
                be = async () => {
                    let N = i.value[K.value].l[$.value + 1];
                    N ? await A(N, $.value + 1, K.value, !1) : await ge()
                },
                Ne = async () => {
                    t.value = !0;
                    let N = _o(r.value);
                    if (i.value = N.g, l.value = N.c, o.value = N.f === 1, c.value = N.n, s.value === 3) {
                        let y=N.g[K.value]?.l[$.value];
                        d ? d.value = y : s.value = 1
                    }
                    t.value = !1
                },
                Le = async () => {
                    d.value.c !== 1 ? await Ne() : p.value ? (await Ne(), p.value = !1) : be()
                };
            return dr(() => {
                try {
                    const N = localStorage.getItem("triddles_answers");
                    N && (r.value = JSON.parse(N))
                } catch (N) {
                    console.error("Failed to load answers from localStorage:", N),
                    r.value = []
                }
                Ne()
            }), (N, y) => (B(), q(pe, null, [R("div", xo, [s.value === 0 ? (B(), q("div", yo, [y[15] || (y[15] = R("h1", null, "三字谜", -1)), R("button", {
                onClick: y[0] || (y[0] = H => s.value = 1)
            }, "解谜题"), T.value ? (B(), q("button", {
                key: 0,
                onClick: y[1] || (y[1] = H => n.value = !0)
            }, "删存档")) : de("", !0), R("button", {
                onClick: y[2] || (y[2] = H => s.value = 2)
            }, "创作者"), y[16] || (y[16] = R("div", {
                class: "main-footer"
            }, [R("span", null, "谜来自"), R("a", {
                href: "https://ccbc16.cipherpuzzles.com",
                target: "_blank"
            }, "西十六")], -1))])) : de("", !0), s.value === 2 ? (B(), q("div", wo, [y[17] || (y[17] = Ol('<h1 class="page-top" data-v-70336fea>镜像者</h1><p class="b" data-v-70336fea>S N Y</p><h2 class="page-top" data-v-60336fea>创作者</h2><p class="b" data-v-60336fea>落葉子</p><h2 data-v-60336fea>协助者</h2><p class="s" title="Welkin25" data-v-60336fea>温停眉</p><p class="s" title="Sevenkplus" data-v-60336fea>七千加</p><p class="s" title="ES8730" data-v-60336fea>邪恶羊</p><p class="s" title="Ted Zyzsdy" data-v-60336fea>铽德魞</p><h2 data-v-60336fea>测试者</h2><p class="s" title="Cai Ji" data-v-60336fea>护生草</p><p class="s" title="JP_Jalapeno" data-v-60336fea>墨辣椒</p><p class="s" title="Brightly_" data-v-60336fea>光之子</p><p class="s" data-v-60336fea>及其他</p><br data-v-60336fea><br data-v-60336fea><h2 data-v-60336fea>致敬于</h2><p class="b" title="Jack Lance" data-v-60336fea>兰杰克</p><br data-v-60336fea><br data-v-60336fea>', 18)), R("button", {
                onClick: y[3] || (y[3] = H => s.value = 0)
            }, "回首页")])) : de("", !0), s.value === 1 ? (B(), q("div", So, [R("div", Co, [R("div", null, "已通过：" + ke(l.value) + "✔️", 1), R("button", {
                class: "header-button",
                onClick: y[4] || (y[4] = H => s.value = 0)
            }, "回首页")]), (B(!0), q(pe, null, Ut(i.value, (H, Ce) => (B(), q("div", {
                class: "triddles-group",
                key: Ce
            }, [(B(!0), q(pe, null, Ut(H.l, (Te, ee) => (B(), q("div", {
                class: rs(["triddle-item", {
                    completed: Te.c === 1
                }]),
                key: Te.i,
                onClick: z => A(Te, ee, Ce)
            }, [R("div", Eo, ke(Te.g), 1), R("div", Oo, [R("span", null, ke(te(Te.i)), 1), Te.c === 1 ? (B(), q("span", Ao, "✔️")) : (B(), q("span", Io, "❌"))])], 10, To))), 128))]))), 128)), c.value.length > 0 ? (B(!0), q(pe, {
                key: 0
            }, Ut(c.value, (H, Ce) => (B(), q("div", {
                class: "triddles-group unlocked",
                style: ns({
                    opacity: .7 - .3 * Ce
                })
            }, [(B(!0), q(pe, null, Ut(H, (Te, ee) => (B(), q("div", {
                class: "triddle-item",
                key: ee
            }, y[18] || (y[18] = [R("div", {
                class: "triddle-gram"
            }, "未解锁", -1)])))), 128))], 4))), 256)) : de("", !0), o.value ? (B(), q("div", Po, [R("button", {
                class: "finish-button",
                onClick: y[5] || (y[5] = H => s.value = 4)
            }, "完成页")])) : de("", !0)])) : de("", !0), s.value === 3 ? (B(), q("div", Ro, [R("div", Mo, [R("div", null, "已通过：" + ke(l.value) + "✔️", 1), R("div", null, [R("button", {
                class: "header-button",
                onClick: ge
            }, "谜列表"), R("button", {
                class: "header-button",
                onClick: y[6] || (y[6] = H => s.value = 0)
            }, "回首页")])]), R("div", Fo, [d.value.c === 1 ? (B(), q("div", Do, "已通过✔️")) : (B(), q("div", $o, "未通过❌")), R("h2", null, ke(d.value.g), 1), R("div", No, ke(d.value.e), 1), Mi(R("input", {
                type: "text",
                "onUpdate:modelValue": y[7] || (y[7] = H => r.value[d.value.i] = H),
                onInput: y[8] || (y[8] = H => D(H, d.value.i)),
                onKeydown: oo(Le, ["enter"]),
                ref_key: "triddleInput",
                ref: u,
                class: "triddle-input"
            }, null, 544), [[io, r.value[d.value.i]]]), o.value && d.value.f === 1 ? (B(), q("div", Lo, [R("button", {
                class: "finish-button",
                onClick: y[9] || (y[9] = H => s.value = 4)
            }, "完成页")])) : de("", !0), R("div", Ho, [$.value > 0 ? (B(), q("button", {
                key: 0,
                class: "header-button",
                onClick: y[10] || (y[10] = H => Z())
            }, "← 上一题")) : de("", !0), $.value < k.value - 1 ? (B(), q("button", {
                key: 1,
                class: "header-button",
                onClick: y[11] || (y[11] = H => be())
            }, "下一题 →")) : de("", !0), $.value == k.value - 1 ? (B(), q("button", {
                key: 2,
                class: "header-button",
                onClick: y[12] || (y[12] = H => be())
            }, "谜列表 →")) : de("", !0)])])])) : de("", !0), s.value === 4 ? (B(), q("div", jo, [y[19] || (y[19] = R("h2", {
                class: "page-top"
            }, "恭喜你", -1)), y[20] || (y[20] = R("h2", null, "已通过", -1)), y[21] || (y[21] = R("h2", null, "三字谜", -1)), R("p", null, "已通过：" + ke(l.value) + "✔️", 1), R("button", {
                onClick: y[13] || (y[13] = H => s.value = 0)
            }, "回首页")])) : de("", !0)]), n.value ? (B(), q("div", Uo, [R("div", null, [y[22] || (y[22] = R("h2", null, "删存档", -1)), y[23] || (y[23] = R("p", null, "点击后", -1)), y[24] || (y[24] = R("p", null, "存档消", -1)), y[25] || (y[25] = R("p", null, "真删吗", -1)), R("button", {
                onClick: F
            }, "我确认"), R("button", {
                onClick: y[14] || (y[14] = H => n.value = !1)
            }, "再想想")])])) : de("", !0), t.value ? (B(), q("div", Ko, y[26] || (y[26] = [R("div", {
                class: "loading-content"
            }, [R("h2", null, "加载中...")], -1)]))) : de("", !0)], 64))
        }
    },
    Bo = bo(Vo, [["__scopeId", "data-v-60336fea"]]);
ao(Bo).mount("#app");
