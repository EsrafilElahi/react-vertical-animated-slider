import j, { useState as gr } from "react";
var ee = { exports: {} }, N = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ce;
function mr() {
  if (Ce)
    return N;
  Ce = 1;
  var n = j, a = Symbol.for("react.element"), o = Symbol.for("react.fragment"), u = Object.prototype.hasOwnProperty, d = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, b = { key: !0, ref: !0, __self: !0, __source: !0 };
  function x(R, c, w) {
    var y, m = {}, h = null, $ = null;
    w !== void 0 && (h = "" + w), c.key !== void 0 && (h = "" + c.key), c.ref !== void 0 && ($ = c.ref);
    for (y in c)
      u.call(c, y) && !b.hasOwnProperty(y) && (m[y] = c[y]);
    if (R && R.defaultProps)
      for (y in c = R.defaultProps, c)
        m[y] === void 0 && (m[y] = c[y]);
    return { $$typeof: a, type: R, key: h, ref: $, props: m, _owner: d.current };
  }
  return N.Fragment = o, N.jsx = x, N.jsxs = x, N;
}
var W = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Pe;
function br() {
  return Pe || (Pe = 1, process.env.NODE_ENV !== "production" && function() {
    var n = j, a = Symbol.for("react.element"), o = Symbol.for("react.portal"), u = Symbol.for("react.fragment"), d = Symbol.for("react.strict_mode"), b = Symbol.for("react.profiler"), x = Symbol.for("react.provider"), R = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), w = Symbol.for("react.suspense"), y = Symbol.for("react.suspense_list"), m = Symbol.for("react.memo"), h = Symbol.for("react.lazy"), $ = Symbol.for("react.offscreen"), re = Symbol.iterator, Fe = "@@iterator";
    function Ie(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = re && e[re] || e[Fe];
      return typeof r == "function" ? r : null;
    }
    var S = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function _(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), i = 1; i < r; i++)
          t[i - 1] = arguments[i];
        Ne("error", e, t);
      }
    }
    function Ne(e, r, t) {
      {
        var i = S.ReactDebugCurrentFrame, f = i.getStackAddendum();
        f !== "" && (r += "%s", t = t.concat([f]));
        var v = t.map(function(l) {
          return String(l);
        });
        v.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, v);
      }
    }
    var We = !1, $e = !1, Ye = !1, Le = !1, Me = !1, te;
    te = Symbol.for("react.module.reference");
    function Ve(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === u || e === b || Me || e === d || e === w || e === y || Le || e === $ || We || $e || Ye || typeof e == "object" && e !== null && (e.$$typeof === h || e.$$typeof === m || e.$$typeof === x || e.$$typeof === R || e.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === te || e.getModuleId !== void 0));
    }
    function Ue(e, r, t) {
      var i = e.displayName;
      if (i)
        return i;
      var f = r.displayName || r.name || "";
      return f !== "" ? t + "(" + f + ")" : t;
    }
    function ne(e) {
      return e.displayName || "Context";
    }
    function C(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && _("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case u:
          return "Fragment";
        case o:
          return "Portal";
        case b:
          return "Profiler";
        case d:
          return "StrictMode";
        case w:
          return "Suspense";
        case y:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case R:
            var r = e;
            return ne(r) + ".Consumer";
          case x:
            var t = e;
            return ne(t._context) + ".Provider";
          case c:
            return Ue(e, e.render, "ForwardRef");
          case m:
            var i = e.displayName || null;
            return i !== null ? i : C(e.type) || "Memo";
          case h: {
            var f = e, v = f._payload, l = f._init;
            try {
              return C(l(v));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var T = Object.assign, F = 0, ae, ie, oe, ue, se, le, ce;
    function fe() {
    }
    fe.__reactDisabledLog = !0;
    function Be() {
      {
        if (F === 0) {
          ae = console.log, ie = console.info, oe = console.warn, ue = console.error, se = console.group, le = console.groupCollapsed, ce = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: fe,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        F++;
      }
    }
    function ze() {
      {
        if (F--, F === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: T({}, e, {
              value: ae
            }),
            info: T({}, e, {
              value: ie
            }),
            warn: T({}, e, {
              value: oe
            }),
            error: T({}, e, {
              value: ue
            }),
            group: T({}, e, {
              value: se
            }),
            groupCollapsed: T({}, e, {
              value: le
            }),
            groupEnd: T({}, e, {
              value: ce
            })
          });
        }
        F < 0 && _("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var q = S.ReactCurrentDispatcher, G;
    function Y(e, r, t) {
      {
        if (G === void 0)
          try {
            throw Error();
          } catch (f) {
            var i = f.stack.trim().match(/\n( *(at )?)/);
            G = i && i[1] || "";
          }
        return `
` + G + e;
      }
    }
    var J = !1, L;
    {
      var qe = typeof WeakMap == "function" ? WeakMap : Map;
      L = new qe();
    }
    function ve(e, r) {
      if (!e || J)
        return "";
      {
        var t = L.get(e);
        if (t !== void 0)
          return t;
      }
      var i;
      J = !0;
      var f = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var v;
      v = q.current, q.current = null, Be();
      try {
        if (r) {
          var l = function() {
            throw Error();
          };
          if (Object.defineProperty(l.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(l, []);
            } catch (P) {
              i = P;
            }
            Reflect.construct(e, [], l);
          } else {
            try {
              l.call();
            } catch (P) {
              i = P;
            }
            e.call(l.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (P) {
            i = P;
          }
          e();
        }
      } catch (P) {
        if (P && i && typeof P.stack == "string") {
          for (var s = P.stack.split(`
`), E = i.stack.split(`
`), p = s.length - 1, g = E.length - 1; p >= 1 && g >= 0 && s[p] !== E[g]; )
            g--;
          for (; p >= 1 && g >= 0; p--, g--)
            if (s[p] !== E[g]) {
              if (p !== 1 || g !== 1)
                do
                  if (p--, g--, g < 0 || s[p] !== E[g]) {
                    var O = `
` + s[p].replace(" at new ", " at ");
                    return e.displayName && O.includes("<anonymous>") && (O = O.replace("<anonymous>", e.displayName)), typeof e == "function" && L.set(e, O), O;
                  }
                while (p >= 1 && g >= 0);
              break;
            }
        }
      } finally {
        J = !1, q.current = v, ze(), Error.prepareStackTrace = f;
      }
      var A = e ? e.displayName || e.name : "", we = A ? Y(A) : "";
      return typeof e == "function" && L.set(e, we), we;
    }
    function Ge(e, r, t) {
      return ve(e, !1);
    }
    function Je(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function M(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return ve(e, Je(e));
      if (typeof e == "string")
        return Y(e);
      switch (e) {
        case w:
          return Y("Suspense");
        case y:
          return Y("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case c:
            return Ge(e.render);
          case m:
            return M(e.type, r, t);
          case h: {
            var i = e, f = i._payload, v = i._init;
            try {
              return M(v(f), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var V = Object.prototype.hasOwnProperty, de = {}, pe = S.ReactDebugCurrentFrame;
    function U(e) {
      if (e) {
        var r = e._owner, t = M(e.type, e._source, r ? r.type : null);
        pe.setExtraStackFrame(t);
      } else
        pe.setExtraStackFrame(null);
    }
    function Ke(e, r, t, i, f) {
      {
        var v = Function.call.bind(V);
        for (var l in e)
          if (v(e, l)) {
            var s = void 0;
            try {
              if (typeof e[l] != "function") {
                var E = Error((i || "React class") + ": " + t + " type `" + l + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[l] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw E.name = "Invariant Violation", E;
              }
              s = e[l](r, l, i, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (p) {
              s = p;
            }
            s && !(s instanceof Error) && (U(f), _("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", i || "React class", t, l, typeof s), U(null)), s instanceof Error && !(s.message in de) && (de[s.message] = !0, U(f), _("Failed %s type: %s", t, s.message), U(null));
          }
      }
    }
    var He = Array.isArray;
    function K(e) {
      return He(e);
    }
    function Xe(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, t = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t;
      }
    }
    function Ze(e) {
      try {
        return ge(e), !1;
      } catch {
        return !0;
      }
    }
    function ge(e) {
      return "" + e;
    }
    function me(e) {
      if (Ze(e))
        return _("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Xe(e)), ge(e);
    }
    var I = S.ReactCurrentOwner, Qe = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, be, ye, H;
    H = {};
    function er(e) {
      if (V.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function rr(e) {
      if (V.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function tr(e, r) {
      if (typeof e.ref == "string" && I.current && r && I.current.stateNode !== r) {
        var t = C(I.current.type);
        H[t] || (_('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', C(I.current.type), e.ref), H[t] = !0);
      }
    }
    function nr(e, r) {
      {
        var t = function() {
          be || (be = !0, _("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: t,
          configurable: !0
        });
      }
    }
    function ar(e, r) {
      {
        var t = function() {
          ye || (ye = !0, _("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var ir = function(e, r, t, i, f, v, l) {
      var s = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: a,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: t,
        props: l,
        // Record the component responsible for creating this element.
        _owner: v
      };
      return s._store = {}, Object.defineProperty(s._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(s, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: i
      }), Object.defineProperty(s, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: f
      }), Object.freeze && (Object.freeze(s.props), Object.freeze(s)), s;
    };
    function or(e, r, t, i, f) {
      {
        var v, l = {}, s = null, E = null;
        t !== void 0 && (me(t), s = "" + t), rr(r) && (me(r.key), s = "" + r.key), er(r) && (E = r.ref, tr(r, f));
        for (v in r)
          V.call(r, v) && !Qe.hasOwnProperty(v) && (l[v] = r[v]);
        if (e && e.defaultProps) {
          var p = e.defaultProps;
          for (v in p)
            l[v] === void 0 && (l[v] = p[v]);
        }
        if (s || E) {
          var g = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          s && nr(l, g), E && ar(l, g);
        }
        return ir(e, s, E, f, i, I.current, l);
      }
    }
    var X = S.ReactCurrentOwner, he = S.ReactDebugCurrentFrame;
    function k(e) {
      if (e) {
        var r = e._owner, t = M(e.type, e._source, r ? r.type : null);
        he.setExtraStackFrame(t);
      } else
        he.setExtraStackFrame(null);
    }
    var Z;
    Z = !1;
    function Q(e) {
      return typeof e == "object" && e !== null && e.$$typeof === a;
    }
    function _e() {
      {
        if (X.current) {
          var e = C(X.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function ur(e) {
      {
        if (e !== void 0) {
          var r = e.fileName.replace(/^.*[\\\/]/, ""), t = e.lineNumber;
          return `

Check your code at ` + r + ":" + t + ".";
        }
        return "";
      }
    }
    var Ee = {};
    function sr(e) {
      {
        var r = _e();
        if (!r) {
          var t = typeof e == "string" ? e : e.displayName || e.name;
          t && (r = `

Check the top-level render call using <` + t + ">.");
        }
        return r;
      }
    }
    function Re(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var t = sr(r);
        if (Ee[t])
          return;
        Ee[t] = !0;
        var i = "";
        e && e._owner && e._owner !== X.current && (i = " It was passed a child from " + C(e._owner.type) + "."), k(e), _('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, i), k(null);
      }
    }
    function Oe(e, r) {
      {
        if (typeof e != "object")
          return;
        if (K(e))
          for (var t = 0; t < e.length; t++) {
            var i = e[t];
            Q(i) && Re(i, r);
          }
        else if (Q(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var f = Ie(e);
          if (typeof f == "function" && f !== e.entries)
            for (var v = f.call(e), l; !(l = v.next()).done; )
              Q(l.value) && Re(l.value, r);
        }
      }
    }
    function lr(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var t;
        if (typeof r == "function")
          t = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === c || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === m))
          t = r.propTypes;
        else
          return;
        if (t) {
          var i = C(r);
          Ke(t, e.props, "prop", i, e);
        } else if (r.PropTypes !== void 0 && !Z) {
          Z = !0;
          var f = C(r);
          _("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", f || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && _("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function cr(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var i = r[t];
          if (i !== "children" && i !== "key") {
            k(e), _("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", i), k(null);
            break;
          }
        }
        e.ref !== null && (k(e), _("Invalid attribute `ref` supplied to `React.Fragment`."), k(null));
      }
    }
    function xe(e, r, t, i, f, v) {
      {
        var l = Ve(e);
        if (!l) {
          var s = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (s += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var E = ur(f);
          E ? s += E : s += _e();
          var p;
          e === null ? p = "null" : K(e) ? p = "array" : e !== void 0 && e.$$typeof === a ? (p = "<" + (C(e.type) || "Unknown") + " />", s = " Did you accidentally export a JSX literal instead of a component?") : p = typeof e, _("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", p, s);
        }
        var g = or(e, r, t, f, v);
        if (g == null)
          return g;
        if (l) {
          var O = r.children;
          if (O !== void 0)
            if (i)
              if (K(O)) {
                for (var A = 0; A < O.length; A++)
                  Oe(O[A], e);
                Object.freeze && Object.freeze(O);
              } else
                _("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Oe(O, e);
        }
        return e === u ? cr(g) : lr(g), g;
      }
    }
    function fr(e, r, t) {
      return xe(e, r, t, !0);
    }
    function vr(e, r, t) {
      return xe(e, r, t, !1);
    }
    var dr = vr, pr = fr;
    W.Fragment = u, W.jsx = dr, W.jsxs = pr;
  }()), W;
}
process.env.NODE_ENV === "production" ? ee.exports = mr() : ee.exports = br();
var D = ee.exports, ke = {
  color: void 0,
  size: void 0,
  className: void 0,
  style: void 0,
  attr: void 0
}, je = j.createContext && /* @__PURE__ */ j.createContext(ke), yr = ["attr", "size", "title"];
function hr(n, a) {
  if (n == null)
    return {};
  var o = _r(n, a), u, d;
  if (Object.getOwnPropertySymbols) {
    var b = Object.getOwnPropertySymbols(n);
    for (d = 0; d < b.length; d++)
      u = b[d], !(a.indexOf(u) >= 0) && Object.prototype.propertyIsEnumerable.call(n, u) && (o[u] = n[u]);
  }
  return o;
}
function _r(n, a) {
  if (n == null)
    return {};
  var o = {}, u = Object.keys(n), d, b;
  for (b = 0; b < u.length; b++)
    d = u[b], !(a.indexOf(d) >= 0) && (o[d] = n[d]);
  return o;
}
function B() {
  return B = Object.assign ? Object.assign.bind() : function(n) {
    for (var a = 1; a < arguments.length; a++) {
      var o = arguments[a];
      for (var u in o)
        Object.prototype.hasOwnProperty.call(o, u) && (n[u] = o[u]);
    }
    return n;
  }, B.apply(this, arguments);
}
function Te(n, a) {
  var o = Object.keys(n);
  if (Object.getOwnPropertySymbols) {
    var u = Object.getOwnPropertySymbols(n);
    a && (u = u.filter(function(d) {
      return Object.getOwnPropertyDescriptor(n, d).enumerable;
    })), o.push.apply(o, u);
  }
  return o;
}
function z(n) {
  for (var a = 1; a < arguments.length; a++) {
    var o = arguments[a] != null ? arguments[a] : {};
    a % 2 ? Te(Object(o), !0).forEach(function(u) {
      Er(n, u, o[u]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(o)) : Te(Object(o)).forEach(function(u) {
      Object.defineProperty(n, u, Object.getOwnPropertyDescriptor(o, u));
    });
  }
  return n;
}
function Er(n, a, o) {
  return a = Rr(a), a in n ? Object.defineProperty(n, a, { value: o, enumerable: !0, configurable: !0, writable: !0 }) : n[a] = o, n;
}
function Rr(n) {
  var a = Or(n, "string");
  return typeof a == "symbol" ? a : String(a);
}
function Or(n, a) {
  if (typeof n != "object" || n === null)
    return n;
  var o = n[Symbol.toPrimitive];
  if (o !== void 0) {
    var u = o.call(n, a || "default");
    if (typeof u != "object")
      return u;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (a === "string" ? String : Number)(n);
}
function Ae(n) {
  return n && n.map((a, o) => /* @__PURE__ */ j.createElement(a.tag, z({
    key: o
  }, a.attr), Ae(a.child)));
}
function De(n) {
  return (a) => /* @__PURE__ */ j.createElement(xr, B({
    attr: z({}, n.attr)
  }, a), Ae(n.child));
}
function xr(n) {
  var a = (o) => {
    var {
      attr: u,
      size: d,
      title: b
    } = n, x = hr(n, yr), R = d || o.size || "1em", c;
    return o.className && (c = o.className), n.className && (c = (c ? c + " " : "") + n.className), /* @__PURE__ */ j.createElement("svg", B({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, o.attr, u, x, {
      className: c,
      style: z(z({
        color: n.color || o.color
      }, o.style), n.style),
      height: R,
      width: R,
      xmlns: "http://www.w3.org/2000/svg"
    }), b && /* @__PURE__ */ j.createElement("title", null, b), n.children);
  };
  return je !== void 0 ? /* @__PURE__ */ j.createElement(je.Consumer, null, (o) => a(o)) : a(ke);
}
function wr(n) {
  return De({ tag: "svg", attr: { viewBox: "0 0 1024 1024" }, child: [{ tag: "path", attr: { d: "M724 218.3V141c0-6.7-7.7-10.4-12.9-6.3L260.3 486.8a31.86 31.86 0 0 0 0 50.3l450.8 352.1c5.3 4.1 12.9.4 12.9-6.3v-77.3c0-4.9-2.3-9.6-6.1-12.6l-360-281 360-281.1c3.8-3 6.1-7.7 6.1-12.6z" }, child: [] }] })(n);
}
function Cr(n) {
  return De({ tag: "svg", attr: { viewBox: "0 0 1024 1024" }, child: [{ tag: "path", attr: { d: "M765.7 486.8L314.9 134.7A7.97 7.97 0 0 0 302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 0 0 0-50.4z" }, child: [] }] })(n);
}
const Pr = "_carousel_1x7xv_8", jr = "_cardContainer_1x7xv_15", Tr = "_card_1x7xv_15", Sr = "_nav_1x7xv_37", kr = "_left_1x7xv_52", Ar = "_right_1x7xv_57", Se = {
  carousel: Pr,
  cardContainer: jr,
  card: Tr,
  nav: Sr,
  left: kr,
  right: Ar
}, Fr = (n) => {
  const {
    data: a,
    containerClassName: o = "",
    behindCardSpace: u = 1.4,
    maxBehindCardVisibility: d = 2,
    CardItem: b,
    startFromRight: x = !0
  } = n, R = Array.isArray(a) ? a.length : 0, [c, w] = gr(x ? 0 : R - 1), y = x ? Array.isArray(a) ? a : [] : [...Array.isArray(a) ? a : []].reverse();
  return /* @__PURE__ */ D.jsxs(
    "div",
    {
      className: `flex h-[8.5em] justify-between items-center gap-4 ${o}`,
      children: [
        /* @__PURE__ */ D.jsx(
          wr,
          {
            className: `text-gray w-6 h-6 cursor-pointer ${c > 0 ? "visible" : "invisible"}`,
            onClick: () => w((m) => m - 1)
          }
        ),
        /* @__PURE__ */ D.jsx("div", { className: Se.carousel, children: y == null ? void 0 : y.map((m, h) => /* @__PURE__ */ D.jsx(
          "div",
          {
            className: Se.cardContainer,
            style: {
              "--active": h === c ? 1 : 0,
              "--offset": (c - h) / u,
              "--direction": Math.sign(c - h),
              "--absOffset": Math.abs(c - h) / 2,
              pointerEvents: c === h ? "auto" : "none",
              opacity: Math.abs(c - h) >= d ? "0" : "1",
              display: Math.abs(c - h) > d ? "none" : "block"
            },
            children: /* @__PURE__ */ D.jsx(b, { hasCard: R, card: m })
          },
          (m == null ? void 0 : m.id) || h
        )) }),
        /* @__PURE__ */ D.jsx(
          Cr,
          {
            className: `text-gray w-6 h-6 cursor-pointer ${c < R - 1 ? "visible" : "invisible"}`,
            onClick: () => w((m) => m + 1)
          }
        )
      ]
    }
  );
};
export {
  Fr as VerticalAnimatedCarousel
};
//# sourceMappingURL=index.es.js.map
