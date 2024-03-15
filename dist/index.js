import * as ae from "react";
import ui, { forwardRef as BM, useContext as YM, Children as WM, isValidElement as eg, cloneElement as tg } from "react";
function tw(l) {
  return l && l.__esModule && Object.prototype.hasOwnProperty.call(l, "default") ? l.default : l;
}
var Tb = { exports: {} }, zv = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var VT;
function GM() {
  if (VT)
    return zv;
  VT = 1;
  var l = ui, s = Symbol.for("react.element"), d = Symbol.for("react.fragment"), v = Object.prototype.hasOwnProperty, g = l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, S = { key: !0, ref: !0, __self: !0, __source: !0 };
  function m(R, w, k) {
    var M, N = {}, A = null, V = null;
    k !== void 0 && (A = "" + k), w.key !== void 0 && (A = "" + w.key), w.ref !== void 0 && (V = w.ref);
    for (M in w)
      v.call(w, M) && !S.hasOwnProperty(M) && (N[M] = w[M]);
    if (R && R.defaultProps)
      for (M in w = R.defaultProps, w)
        N[M] === void 0 && (N[M] = w[M]);
    return { $$typeof: s, type: R, key: A, ref: V, props: N, _owner: g.current };
  }
  return zv.Fragment = d, zv.jsx = m, zv.jsxs = m, zv;
}
var Pv = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var HT;
function qM() {
  return HT || (HT = 1, process.env.NODE_ENV !== "production" && function() {
    var l = ui, s = Symbol.for("react.element"), d = Symbol.for("react.portal"), v = Symbol.for("react.fragment"), g = Symbol.for("react.strict_mode"), S = Symbol.for("react.profiler"), m = Symbol.for("react.provider"), R = Symbol.for("react.context"), w = Symbol.for("react.forward_ref"), k = Symbol.for("react.suspense"), M = Symbol.for("react.suspense_list"), N = Symbol.for("react.memo"), A = Symbol.for("react.lazy"), V = Symbol.for("react.offscreen"), F = Symbol.iterator, P = "@@iterator";
    function H(L) {
      if (L === null || typeof L != "object")
        return null;
      var pe = F && L[F] || L[P];
      return typeof pe == "function" ? pe : null;
    }
    var le = l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function de(L) {
      {
        for (var pe = arguments.length, Re = new Array(pe > 1 ? pe - 1 : 0), at = 1; at < pe; at++)
          Re[at - 1] = arguments[at];
        K("error", L, Re);
      }
    }
    function K(L, pe, Re) {
      {
        var at = le.ReactDebugCurrentFrame, Et = at.getStackAddendum();
        Et !== "" && (pe += "%s", Re = Re.concat([Et]));
        var Mt = Re.map(function(bt) {
          return String(bt);
        });
        Mt.unshift("Warning: " + pe), Function.prototype.apply.call(console[L], console, Mt);
      }
    }
    var J = !1, D = !1, ve = !1, ie = !1, Ke = !1, ot;
    ot = Symbol.for("react.module.reference");
    function De(L) {
      return !!(typeof L == "string" || typeof L == "function" || L === v || L === S || Ke || L === g || L === k || L === M || ie || L === V || J || D || ve || typeof L == "object" && L !== null && (L.$$typeof === A || L.$$typeof === N || L.$$typeof === m || L.$$typeof === R || L.$$typeof === w || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      L.$$typeof === ot || L.getModuleId !== void 0));
    }
    function _e(L, pe, Re) {
      var at = L.displayName;
      if (at)
        return at;
      var Et = pe.displayName || pe.name || "";
      return Et !== "" ? Re + "(" + Et + ")" : Re;
    }
    function Ye(L) {
      return L.displayName || "Context";
    }
    function Ee(L) {
      if (L == null)
        return null;
      if (typeof L.tag == "number" && de("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof L == "function")
        return L.displayName || L.name || null;
      if (typeof L == "string")
        return L;
      switch (L) {
        case v:
          return "Fragment";
        case d:
          return "Portal";
        case S:
          return "Profiler";
        case g:
          return "StrictMode";
        case k:
          return "Suspense";
        case M:
          return "SuspenseList";
      }
      if (typeof L == "object")
        switch (L.$$typeof) {
          case R:
            var pe = L;
            return Ye(pe) + ".Consumer";
          case m:
            var Re = L;
            return Ye(Re._context) + ".Provider";
          case w:
            return _e(L, L.render, "ForwardRef");
          case N:
            var at = L.displayName || null;
            return at !== null ? at : Ee(L.type) || "Memo";
          case A: {
            var Et = L, Mt = Et._payload, bt = Et._init;
            try {
              return Ee(bt(Mt));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var ge = Object.assign, nt = 0, be, Be, oe, Pe, I, ue, we;
    function Ve() {
    }
    Ve.__reactDisabledLog = !0;
    function ke() {
      {
        if (nt === 0) {
          be = console.log, Be = console.info, oe = console.warn, Pe = console.error, I = console.group, ue = console.groupCollapsed, we = console.groupEnd;
          var L = {
            configurable: !0,
            enumerable: !0,
            value: Ve,
            writable: !0
          };
          Object.defineProperties(console, {
            info: L,
            log: L,
            warn: L,
            error: L,
            group: L,
            groupCollapsed: L,
            groupEnd: L
          });
        }
        nt++;
      }
    }
    function qe() {
      {
        if (nt--, nt === 0) {
          var L = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: ge({}, L, {
              value: be
            }),
            info: ge({}, L, {
              value: Be
            }),
            warn: ge({}, L, {
              value: oe
            }),
            error: ge({}, L, {
              value: Pe
            }),
            group: ge({}, L, {
              value: I
            }),
            groupCollapsed: ge({}, L, {
              value: ue
            }),
            groupEnd: ge({}, L, {
              value: we
            })
          });
        }
        nt < 0 && de("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Ne = le.ReactCurrentDispatcher, Xe;
    function We(L, pe, Re) {
      {
        if (Xe === void 0)
          try {
            throw Error();
          } catch (Et) {
            var at = Et.stack.trim().match(/\n( *(at )?)/);
            Xe = at && at[1] || "";
          }
        return `
` + Xe + L;
      }
    }
    var He = !1, rt;
    {
      var Rt = typeof WeakMap == "function" ? WeakMap : Map;
      rt = new Rt();
    }
    function Z(L, pe) {
      if (!L || He)
        return "";
      {
        var Re = rt.get(L);
        if (Re !== void 0)
          return Re;
      }
      var at;
      He = !0;
      var Et = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var Mt;
      Mt = Ne.current, Ne.current = null, ke();
      try {
        if (pe) {
          var bt = function() {
            throw Error();
          };
          if (Object.defineProperty(bt.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(bt, []);
            } catch (At) {
              at = At;
            }
            Reflect.construct(L, [], bt);
          } else {
            try {
              bt.call();
            } catch (At) {
              at = At;
            }
            L.call(bt.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (At) {
            at = At;
          }
          L();
        }
      } catch (At) {
        if (At && at && typeof At.stack == "string") {
          for (var lt = At.stack.split(`
`), Zn = at.stack.split(`
`), dn = lt.length - 1, pn = Zn.length - 1; dn >= 1 && pn >= 0 && lt[dn] !== Zn[pn]; )
            pn--;
          for (; dn >= 1 && pn >= 0; dn--, pn--)
            if (lt[dn] !== Zn[pn]) {
              if (dn !== 1 || pn !== 1)
                do
                  if (dn--, pn--, pn < 0 || lt[dn] !== Zn[pn]) {
                    var Nr = `
` + lt[dn].replace(" at new ", " at ");
                    return L.displayName && Nr.includes("<anonymous>") && (Nr = Nr.replace("<anonymous>", L.displayName)), typeof L == "function" && rt.set(L, Nr), Nr;
                  }
                while (dn >= 1 && pn >= 0);
              break;
            }
        }
      } finally {
        He = !1, Ne.current = Mt, qe(), Error.prepareStackTrace = Et;
      }
      var so = L ? L.displayName || L.name : "", sc = so ? We(so) : "";
      return typeof L == "function" && rt.set(L, sc), sc;
    }
    function mt(L, pe, Re) {
      return Z(L, !1);
    }
    function Se(L) {
      var pe = L.prototype;
      return !!(pe && pe.isReactComponent);
    }
    function Ft(L, pe, Re) {
      if (L == null)
        return "";
      if (typeof L == "function")
        return Z(L, Se(L));
      if (typeof L == "string")
        return We(L);
      switch (L) {
        case k:
          return We("Suspense");
        case M:
          return We("SuspenseList");
      }
      if (typeof L == "object")
        switch (L.$$typeof) {
          case w:
            return mt(L.render);
          case N:
            return Ft(L.type, pe, Re);
          case A: {
            var at = L, Et = at._payload, Mt = at._init;
            try {
              return Ft(Mt(Et), pe, Re);
            } catch {
            }
          }
        }
      return "";
    }
    var mn = Object.prototype.hasOwnProperty, On = {}, Ir = le.ReactDebugCurrentFrame;
    function ua(L) {
      if (L) {
        var pe = L._owner, Re = Ft(L.type, L._source, pe ? pe.type : null);
        Ir.setExtraStackFrame(Re);
      } else
        Ir.setExtraStackFrame(null);
    }
    function sa(L, pe, Re, at, Et) {
      {
        var Mt = Function.call.bind(mn);
        for (var bt in L)
          if (Mt(L, bt)) {
            var lt = void 0;
            try {
              if (typeof L[bt] != "function") {
                var Zn = Error((at || "React class") + ": " + Re + " type `" + bt + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof L[bt] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Zn.name = "Invariant Violation", Zn;
              }
              lt = L[bt](pe, bt, at, Re, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (dn) {
              lt = dn;
            }
            lt && !(lt instanceof Error) && (ua(Et), de("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", at || "React class", Re, bt, typeof lt), ua(null)), lt instanceof Error && !(lt.message in On) && (On[lt.message] = !0, ua(Et), de("Failed %s type: %s", Re, lt.message), ua(null));
          }
      }
    }
    var Br = Array.isArray;
    function ca(L) {
      return Br(L);
    }
    function kr(L) {
      {
        var pe = typeof Symbol == "function" && Symbol.toStringTag, Re = pe && L[Symbol.toStringTag] || L.constructor.name || "Object";
        return Re;
      }
    }
    function Or(L) {
      try {
        return Vn(L), !1;
      } catch {
        return !0;
      }
    }
    function Vn(L) {
      return "" + L;
    }
    function fa(L) {
      if (Or(L))
        return de("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", kr(L)), Vn(L);
    }
    var yn = le.ReactCurrentOwner, Dr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, ct, Yr, Ce;
    Ce = {};
    function Ze(L) {
      if (mn.call(L, "ref")) {
        var pe = Object.getOwnPropertyDescriptor(L, "ref").get;
        if (pe && pe.isReactWarning)
          return !1;
      }
      return L.ref !== void 0;
    }
    function xt(L) {
      if (mn.call(L, "key")) {
        var pe = Object.getOwnPropertyDescriptor(L, "key").get;
        if (pe && pe.isReactWarning)
          return !1;
      }
      return L.key !== void 0;
    }
    function Vt(L, pe) {
      if (typeof L.ref == "string" && yn.current && pe && yn.current.stateNode !== pe) {
        var Re = Ee(yn.current.type);
        Ce[Re] || (de('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', Ee(yn.current.type), L.ref), Ce[Re] = !0);
      }
    }
    function gn(L, pe) {
      {
        var Re = function() {
          ct || (ct = !0, de("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", pe));
        };
        Re.isReactWarning = !0, Object.defineProperty(L, "key", {
          get: Re,
          configurable: !0
        });
      }
    }
    function Xn(L, pe) {
      {
        var Re = function() {
          Yr || (Yr = !0, de("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", pe));
        };
        Re.isReactWarning = !0, Object.defineProperty(L, "ref", {
          get: Re,
          configurable: !0
        });
      }
    }
    var Dn = function(L, pe, Re, at, Et, Mt, bt) {
      var lt = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: s,
        // Built-in properties that belong on the element
        type: L,
        key: pe,
        ref: Re,
        props: bt,
        // Record the component responsible for creating this element.
        _owner: Mt
      };
      return lt._store = {}, Object.defineProperty(lt._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(lt, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: at
      }), Object.defineProperty(lt, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Et
      }), Object.freeze && (Object.freeze(lt.props), Object.freeze(lt)), lt;
    };
    function Wr(L, pe, Re, at, Et) {
      {
        var Mt, bt = {}, lt = null, Zn = null;
        Re !== void 0 && (fa(Re), lt = "" + Re), xt(pe) && (fa(pe.key), lt = "" + pe.key), Ze(pe) && (Zn = pe.ref, Vt(pe, Et));
        for (Mt in pe)
          mn.call(pe, Mt) && !Dr.hasOwnProperty(Mt) && (bt[Mt] = pe[Mt]);
        if (L && L.defaultProps) {
          var dn = L.defaultProps;
          for (Mt in dn)
            bt[Mt] === void 0 && (bt[Mt] = dn[Mt]);
        }
        if (lt || Zn) {
          var pn = typeof L == "function" ? L.displayName || L.name || "Unknown" : L;
          lt && gn(bt, pn), Zn && Xn(bt, pn);
        }
        return Dn(L, lt, Zn, Et, at, yn.current, bt);
      }
    }
    var an = le.ReactCurrentOwner, da = le.ReactDebugCurrentFrame;
    function en(L) {
      if (L) {
        var pe = L._owner, Re = Ft(L.type, L._source, pe ? pe.type : null);
        da.setExtraStackFrame(Re);
      } else
        da.setExtraStackFrame(null);
    }
    var on;
    on = !1;
    function Il(L) {
      return typeof L == "object" && L !== null && L.$$typeof === s;
    }
    function qo() {
      {
        if (an.current) {
          var L = Ee(an.current.type);
          if (L)
            return `

Check the render method of \`` + L + "`.";
        }
        return "";
      }
    }
    function Bl(L) {
      {
        if (L !== void 0) {
          var pe = L.fileName.replace(/^.*[\\\/]/, ""), Re = L.lineNumber;
          return `

Check your code at ` + pe + ":" + Re + ".";
        }
        return "";
      }
    }
    var qu = {};
    function uc(L) {
      {
        var pe = qo();
        if (!pe) {
          var Re = typeof L == "string" ? L : L.displayName || L.name;
          Re && (pe = `

Check the top-level render call using <` + Re + ">.");
        }
        return pe;
      }
    }
    function Qo(L, pe) {
      {
        if (!L._store || L._store.validated || L.key != null)
          return;
        L._store.validated = !0;
        var Re = uc(pe);
        if (qu[Re])
          return;
        qu[Re] = !0;
        var at = "";
        L && L._owner && L._owner !== an.current && (at = " It was passed a child from " + Ee(L._owner.type) + "."), en(L), de('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', Re, at), en(null);
      }
    }
    function Yl(L, pe) {
      {
        if (typeof L != "object")
          return;
        if (ca(L))
          for (var Re = 0; Re < L.length; Re++) {
            var at = L[Re];
            Il(at) && Qo(at, pe);
          }
        else if (Il(L))
          L._store && (L._store.validated = !0);
        else if (L) {
          var Et = H(L);
          if (typeof Et == "function" && Et !== L.entries)
            for (var Mt = Et.call(L), bt; !(bt = Mt.next()).done; )
              Il(bt.value) && Qo(bt.value, pe);
        }
      }
    }
    function Ko(L) {
      {
        var pe = L.type;
        if (pe == null || typeof pe == "string")
          return;
        var Re;
        if (typeof pe == "function")
          Re = pe.propTypes;
        else if (typeof pe == "object" && (pe.$$typeof === w || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        pe.$$typeof === N))
          Re = pe.propTypes;
        else
          return;
        if (Re) {
          var at = Ee(pe);
          sa(Re, L.props, "prop", at, L);
        } else if (pe.PropTypes !== void 0 && !on) {
          on = !0;
          var Et = Ee(pe);
          de("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", Et || "Unknown");
        }
        typeof pe.getDefaultProps == "function" && !pe.getDefaultProps.isReactClassApproved && de("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Wl(L) {
      {
        for (var pe = Object.keys(L.props), Re = 0; Re < pe.length; Re++) {
          var at = pe[Re];
          if (at !== "children" && at !== "key") {
            en(L), de("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", at), en(null);
            break;
          }
        }
        L.ref !== null && (en(L), de("Invalid attribute `ref` supplied to `React.Fragment`."), en(null));
      }
    }
    function ci(L, pe, Re, at, Et, Mt) {
      {
        var bt = De(L);
        if (!bt) {
          var lt = "";
          (L === void 0 || typeof L == "object" && L !== null && Object.keys(L).length === 0) && (lt += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Zn = Bl(Et);
          Zn ? lt += Zn : lt += qo();
          var dn;
          L === null ? dn = "null" : ca(L) ? dn = "array" : L !== void 0 && L.$$typeof === s ? (dn = "<" + (Ee(L.type) || "Unknown") + " />", lt = " Did you accidentally export a JSX literal instead of a component?") : dn = typeof L, de("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", dn, lt);
        }
        var pn = Wr(L, pe, Re, Et, Mt);
        if (pn == null)
          return pn;
        if (bt) {
          var Nr = pe.children;
          if (Nr !== void 0)
            if (at)
              if (ca(Nr)) {
                for (var so = 0; so < Nr.length; so++)
                  Yl(Nr[so], L);
                Object.freeze && Object.freeze(Nr);
              } else
                de("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Yl(Nr, L);
        }
        return L === v ? Wl(pn) : Ko(pn), pn;
      }
    }
    function lo(L, pe, Re) {
      return ci(L, pe, Re, !0);
    }
    function pa(L, pe, Re) {
      return ci(L, pe, Re, !1);
    }
    var Qa = pa, uo = lo;
    Pv.Fragment = v, Pv.jsx = Qa, Pv.jsxs = uo;
  }()), Pv;
}
process.env.NODE_ENV === "production" ? Tb.exports = GM() : Tb.exports = qM();
var Ct = Tb.exports;
function Tn(l, s) {
  if (l == null)
    return {};
  var d = {}, v = Object.keys(l), g, S;
  for (S = 0; S < v.length; S++)
    g = v[S], !(s.indexOf(g) >= 0) && (d[g] = l[g]);
  return d;
}
function fe() {
  return fe = Object.assign ? Object.assign.bind() : function(l) {
    for (var s = 1; s < arguments.length; s++) {
      var d = arguments[s];
      for (var v in d)
        Object.prototype.hasOwnProperty.call(d, v) && (l[v] = d[v]);
    }
    return l;
  }, fe.apply(this, arguments);
}
var Rb = { exports: {} }, qy = { exports: {} }, qt = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var IT;
function QM() {
  if (IT)
    return qt;
  IT = 1;
  var l = typeof Symbol == "function" && Symbol.for, s = l ? Symbol.for("react.element") : 60103, d = l ? Symbol.for("react.portal") : 60106, v = l ? Symbol.for("react.fragment") : 60107, g = l ? Symbol.for("react.strict_mode") : 60108, S = l ? Symbol.for("react.profiler") : 60114, m = l ? Symbol.for("react.provider") : 60109, R = l ? Symbol.for("react.context") : 60110, w = l ? Symbol.for("react.async_mode") : 60111, k = l ? Symbol.for("react.concurrent_mode") : 60111, M = l ? Symbol.for("react.forward_ref") : 60112, N = l ? Symbol.for("react.suspense") : 60113, A = l ? Symbol.for("react.suspense_list") : 60120, V = l ? Symbol.for("react.memo") : 60115, F = l ? Symbol.for("react.lazy") : 60116, P = l ? Symbol.for("react.block") : 60121, H = l ? Symbol.for("react.fundamental") : 60117, le = l ? Symbol.for("react.responder") : 60118, de = l ? Symbol.for("react.scope") : 60119;
  function K(D) {
    if (typeof D == "object" && D !== null) {
      var ve = D.$$typeof;
      switch (ve) {
        case s:
          switch (D = D.type, D) {
            case w:
            case k:
            case v:
            case S:
            case g:
            case N:
              return D;
            default:
              switch (D = D && D.$$typeof, D) {
                case R:
                case M:
                case F:
                case V:
                case m:
                  return D;
                default:
                  return ve;
              }
          }
        case d:
          return ve;
      }
    }
  }
  function J(D) {
    return K(D) === k;
  }
  return qt.AsyncMode = w, qt.ConcurrentMode = k, qt.ContextConsumer = R, qt.ContextProvider = m, qt.Element = s, qt.ForwardRef = M, qt.Fragment = v, qt.Lazy = F, qt.Memo = V, qt.Portal = d, qt.Profiler = S, qt.StrictMode = g, qt.Suspense = N, qt.isAsyncMode = function(D) {
    return J(D) || K(D) === w;
  }, qt.isConcurrentMode = J, qt.isContextConsumer = function(D) {
    return K(D) === R;
  }, qt.isContextProvider = function(D) {
    return K(D) === m;
  }, qt.isElement = function(D) {
    return typeof D == "object" && D !== null && D.$$typeof === s;
  }, qt.isForwardRef = function(D) {
    return K(D) === M;
  }, qt.isFragment = function(D) {
    return K(D) === v;
  }, qt.isLazy = function(D) {
    return K(D) === F;
  }, qt.isMemo = function(D) {
    return K(D) === V;
  }, qt.isPortal = function(D) {
    return K(D) === d;
  }, qt.isProfiler = function(D) {
    return K(D) === S;
  }, qt.isStrictMode = function(D) {
    return K(D) === g;
  }, qt.isSuspense = function(D) {
    return K(D) === N;
  }, qt.isValidElementType = function(D) {
    return typeof D == "string" || typeof D == "function" || D === v || D === k || D === S || D === g || D === N || D === A || typeof D == "object" && D !== null && (D.$$typeof === F || D.$$typeof === V || D.$$typeof === m || D.$$typeof === R || D.$$typeof === M || D.$$typeof === H || D.$$typeof === le || D.$$typeof === de || D.$$typeof === P);
  }, qt.typeOf = K, qt;
}
var Qt = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var BT;
function KM() {
  return BT || (BT = 1, process.env.NODE_ENV !== "production" && function() {
    var l = typeof Symbol == "function" && Symbol.for, s = l ? Symbol.for("react.element") : 60103, d = l ? Symbol.for("react.portal") : 60106, v = l ? Symbol.for("react.fragment") : 60107, g = l ? Symbol.for("react.strict_mode") : 60108, S = l ? Symbol.for("react.profiler") : 60114, m = l ? Symbol.for("react.provider") : 60109, R = l ? Symbol.for("react.context") : 60110, w = l ? Symbol.for("react.async_mode") : 60111, k = l ? Symbol.for("react.concurrent_mode") : 60111, M = l ? Symbol.for("react.forward_ref") : 60112, N = l ? Symbol.for("react.suspense") : 60113, A = l ? Symbol.for("react.suspense_list") : 60120, V = l ? Symbol.for("react.memo") : 60115, F = l ? Symbol.for("react.lazy") : 60116, P = l ? Symbol.for("react.block") : 60121, H = l ? Symbol.for("react.fundamental") : 60117, le = l ? Symbol.for("react.responder") : 60118, de = l ? Symbol.for("react.scope") : 60119;
    function K(Z) {
      return typeof Z == "string" || typeof Z == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      Z === v || Z === k || Z === S || Z === g || Z === N || Z === A || typeof Z == "object" && Z !== null && (Z.$$typeof === F || Z.$$typeof === V || Z.$$typeof === m || Z.$$typeof === R || Z.$$typeof === M || Z.$$typeof === H || Z.$$typeof === le || Z.$$typeof === de || Z.$$typeof === P);
    }
    function J(Z) {
      if (typeof Z == "object" && Z !== null) {
        var mt = Z.$$typeof;
        switch (mt) {
          case s:
            var Se = Z.type;
            switch (Se) {
              case w:
              case k:
              case v:
              case S:
              case g:
              case N:
                return Se;
              default:
                var Ft = Se && Se.$$typeof;
                switch (Ft) {
                  case R:
                  case M:
                  case F:
                  case V:
                  case m:
                    return Ft;
                  default:
                    return mt;
                }
            }
          case d:
            return mt;
        }
      }
    }
    var D = w, ve = k, ie = R, Ke = m, ot = s, De = M, _e = v, Ye = F, Ee = V, ge = d, nt = S, be = g, Be = N, oe = !1;
    function Pe(Z) {
      return oe || (oe = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), I(Z) || J(Z) === w;
    }
    function I(Z) {
      return J(Z) === k;
    }
    function ue(Z) {
      return J(Z) === R;
    }
    function we(Z) {
      return J(Z) === m;
    }
    function Ve(Z) {
      return typeof Z == "object" && Z !== null && Z.$$typeof === s;
    }
    function ke(Z) {
      return J(Z) === M;
    }
    function qe(Z) {
      return J(Z) === v;
    }
    function Ne(Z) {
      return J(Z) === F;
    }
    function Xe(Z) {
      return J(Z) === V;
    }
    function We(Z) {
      return J(Z) === d;
    }
    function He(Z) {
      return J(Z) === S;
    }
    function rt(Z) {
      return J(Z) === g;
    }
    function Rt(Z) {
      return J(Z) === N;
    }
    Qt.AsyncMode = D, Qt.ConcurrentMode = ve, Qt.ContextConsumer = ie, Qt.ContextProvider = Ke, Qt.Element = ot, Qt.ForwardRef = De, Qt.Fragment = _e, Qt.Lazy = Ye, Qt.Memo = Ee, Qt.Portal = ge, Qt.Profiler = nt, Qt.StrictMode = be, Qt.Suspense = Be, Qt.isAsyncMode = Pe, Qt.isConcurrentMode = I, Qt.isContextConsumer = ue, Qt.isContextProvider = we, Qt.isElement = Ve, Qt.isForwardRef = ke, Qt.isFragment = qe, Qt.isLazy = Ne, Qt.isMemo = Xe, Qt.isPortal = We, Qt.isProfiler = He, Qt.isStrictMode = rt, Qt.isSuspense = Rt, Qt.isValidElementType = K, Qt.typeOf = J;
  }()), Qt;
}
var YT;
function nw() {
  return YT || (YT = 1, process.env.NODE_ENV === "production" ? qy.exports = QM() : qy.exports = KM()), qy.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var fb, WT;
function XM() {
  if (WT)
    return fb;
  WT = 1;
  var l = Object.getOwnPropertySymbols, s = Object.prototype.hasOwnProperty, d = Object.prototype.propertyIsEnumerable;
  function v(S) {
    if (S == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(S);
  }
  function g() {
    try {
      if (!Object.assign)
        return !1;
      var S = new String("abc");
      if (S[5] = "de", Object.getOwnPropertyNames(S)[0] === "5")
        return !1;
      for (var m = {}, R = 0; R < 10; R++)
        m["_" + String.fromCharCode(R)] = R;
      var w = Object.getOwnPropertyNames(m).map(function(M) {
        return m[M];
      });
      if (w.join("") !== "0123456789")
        return !1;
      var k = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(M) {
        k[M] = M;
      }), Object.keys(Object.assign({}, k)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return fb = g() ? Object.assign : function(S, m) {
    for (var R, w = v(S), k, M = 1; M < arguments.length; M++) {
      R = Object(arguments[M]);
      for (var N in R)
        s.call(R, N) && (w[N] = R[N]);
      if (l) {
        k = l(R);
        for (var A = 0; A < k.length; A++)
          d.call(R, k[A]) && (w[k[A]] = R[k[A]]);
      }
    }
    return w;
  }, fb;
}
var db, GT;
function $b() {
  if (GT)
    return db;
  GT = 1;
  var l = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return db = l, db;
}
var pb, qT;
function rw() {
  return qT || (qT = 1, pb = Function.call.bind(Object.prototype.hasOwnProperty)), pb;
}
var vb, QT;
function ZM() {
  if (QT)
    return vb;
  QT = 1;
  var l = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var s = $b(), d = {}, v = rw();
    l = function(S) {
      var m = "Warning: " + S;
      typeof console < "u" && console.error(m);
      try {
        throw new Error(m);
      } catch {
      }
    };
  }
  function g(S, m, R, w, k) {
    if (process.env.NODE_ENV !== "production") {
      for (var M in S)
        if (v(S, M)) {
          var N;
          try {
            if (typeof S[M] != "function") {
              var A = Error(
                (w || "React class") + ": " + R + " type `" + M + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof S[M] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw A.name = "Invariant Violation", A;
            }
            N = S[M](m, M, w, R, null, s);
          } catch (F) {
            N = F;
          }
          if (N && !(N instanceof Error) && l(
            (w || "React class") + ": type specification of " + R + " `" + M + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof N + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), N instanceof Error && !(N.message in d)) {
            d[N.message] = !0;
            var V = k ? k() : "";
            l(
              "Failed " + R + " type: " + N.message + (V ?? "")
            );
          }
        }
    }
  }
  return g.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (d = {});
  }, vb = g, vb;
}
var hb, KT;
function JM() {
  if (KT)
    return hb;
  KT = 1;
  var l = nw(), s = XM(), d = $b(), v = rw(), g = ZM(), S = function() {
  };
  process.env.NODE_ENV !== "production" && (S = function(R) {
    var w = "Warning: " + R;
    typeof console < "u" && console.error(w);
    try {
      throw new Error(w);
    } catch {
    }
  });
  function m() {
    return null;
  }
  return hb = function(R, w) {
    var k = typeof Symbol == "function" && Symbol.iterator, M = "@@iterator";
    function N(I) {
      var ue = I && (k && I[k] || I[M]);
      if (typeof ue == "function")
        return ue;
    }
    var A = "<<anonymous>>", V = {
      array: le("array"),
      bigint: le("bigint"),
      bool: le("boolean"),
      func: le("function"),
      number: le("number"),
      object: le("object"),
      string: le("string"),
      symbol: le("symbol"),
      any: de(),
      arrayOf: K,
      element: J(),
      elementType: D(),
      instanceOf: ve,
      node: De(),
      objectOf: Ke,
      oneOf: ie,
      oneOfType: ot,
      shape: Ye,
      exact: Ee
    };
    function F(I, ue) {
      return I === ue ? I !== 0 || 1 / I === 1 / ue : I !== I && ue !== ue;
    }
    function P(I, ue) {
      this.message = I, this.data = ue && typeof ue == "object" ? ue : {}, this.stack = "";
    }
    P.prototype = Error.prototype;
    function H(I) {
      if (process.env.NODE_ENV !== "production")
        var ue = {}, we = 0;
      function Ve(qe, Ne, Xe, We, He, rt, Rt) {
        if (We = We || A, rt = rt || Xe, Rt !== d) {
          if (w) {
            var Z = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw Z.name = "Invariant Violation", Z;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var mt = We + ":" + Xe;
            !ue[mt] && // Avoid spamming the console because they are often not actionable except for lib authors
            we < 3 && (S(
              "You are manually calling a React.PropTypes validation function for the `" + rt + "` prop on `" + We + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), ue[mt] = !0, we++);
          }
        }
        return Ne[Xe] == null ? qe ? Ne[Xe] === null ? new P("The " + He + " `" + rt + "` is marked as required " + ("in `" + We + "`, but its value is `null`.")) : new P("The " + He + " `" + rt + "` is marked as required in " + ("`" + We + "`, but its value is `undefined`.")) : null : I(Ne, Xe, We, He, rt);
      }
      var ke = Ve.bind(null, !1);
      return ke.isRequired = Ve.bind(null, !0), ke;
    }
    function le(I) {
      function ue(we, Ve, ke, qe, Ne, Xe) {
        var We = we[Ve], He = be(We);
        if (He !== I) {
          var rt = Be(We);
          return new P(
            "Invalid " + qe + " `" + Ne + "` of type " + ("`" + rt + "` supplied to `" + ke + "`, expected ") + ("`" + I + "`."),
            { expectedType: I }
          );
        }
        return null;
      }
      return H(ue);
    }
    function de() {
      return H(m);
    }
    function K(I) {
      function ue(we, Ve, ke, qe, Ne) {
        if (typeof I != "function")
          return new P("Property `" + Ne + "` of component `" + ke + "` has invalid PropType notation inside arrayOf.");
        var Xe = we[Ve];
        if (!Array.isArray(Xe)) {
          var We = be(Xe);
          return new P("Invalid " + qe + " `" + Ne + "` of type " + ("`" + We + "` supplied to `" + ke + "`, expected an array."));
        }
        for (var He = 0; He < Xe.length; He++) {
          var rt = I(Xe, He, ke, qe, Ne + "[" + He + "]", d);
          if (rt instanceof Error)
            return rt;
        }
        return null;
      }
      return H(ue);
    }
    function J() {
      function I(ue, we, Ve, ke, qe) {
        var Ne = ue[we];
        if (!R(Ne)) {
          var Xe = be(Ne);
          return new P("Invalid " + ke + " `" + qe + "` of type " + ("`" + Xe + "` supplied to `" + Ve + "`, expected a single ReactElement."));
        }
        return null;
      }
      return H(I);
    }
    function D() {
      function I(ue, we, Ve, ke, qe) {
        var Ne = ue[we];
        if (!l.isValidElementType(Ne)) {
          var Xe = be(Ne);
          return new P("Invalid " + ke + " `" + qe + "` of type " + ("`" + Xe + "` supplied to `" + Ve + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return H(I);
    }
    function ve(I) {
      function ue(we, Ve, ke, qe, Ne) {
        if (!(we[Ve] instanceof I)) {
          var Xe = I.name || A, We = Pe(we[Ve]);
          return new P("Invalid " + qe + " `" + Ne + "` of type " + ("`" + We + "` supplied to `" + ke + "`, expected ") + ("instance of `" + Xe + "`."));
        }
        return null;
      }
      return H(ue);
    }
    function ie(I) {
      if (!Array.isArray(I))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? S(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : S("Invalid argument supplied to oneOf, expected an array.")), m;
      function ue(we, Ve, ke, qe, Ne) {
        for (var Xe = we[Ve], We = 0; We < I.length; We++)
          if (F(Xe, I[We]))
            return null;
        var He = JSON.stringify(I, function(Rt, Z) {
          var mt = Be(Z);
          return mt === "symbol" ? String(Z) : Z;
        });
        return new P("Invalid " + qe + " `" + Ne + "` of value `" + String(Xe) + "` " + ("supplied to `" + ke + "`, expected one of " + He + "."));
      }
      return H(ue);
    }
    function Ke(I) {
      function ue(we, Ve, ke, qe, Ne) {
        if (typeof I != "function")
          return new P("Property `" + Ne + "` of component `" + ke + "` has invalid PropType notation inside objectOf.");
        var Xe = we[Ve], We = be(Xe);
        if (We !== "object")
          return new P("Invalid " + qe + " `" + Ne + "` of type " + ("`" + We + "` supplied to `" + ke + "`, expected an object."));
        for (var He in Xe)
          if (v(Xe, He)) {
            var rt = I(Xe, He, ke, qe, Ne + "." + He, d);
            if (rt instanceof Error)
              return rt;
          }
        return null;
      }
      return H(ue);
    }
    function ot(I) {
      if (!Array.isArray(I))
        return process.env.NODE_ENV !== "production" && S("Invalid argument supplied to oneOfType, expected an instance of array."), m;
      for (var ue = 0; ue < I.length; ue++) {
        var we = I[ue];
        if (typeof we != "function")
          return S(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + oe(we) + " at index " + ue + "."
          ), m;
      }
      function Ve(ke, qe, Ne, Xe, We) {
        for (var He = [], rt = 0; rt < I.length; rt++) {
          var Rt = I[rt], Z = Rt(ke, qe, Ne, Xe, We, d);
          if (Z == null)
            return null;
          Z.data && v(Z.data, "expectedType") && He.push(Z.data.expectedType);
        }
        var mt = He.length > 0 ? ", expected one of type [" + He.join(", ") + "]" : "";
        return new P("Invalid " + Xe + " `" + We + "` supplied to " + ("`" + Ne + "`" + mt + "."));
      }
      return H(Ve);
    }
    function De() {
      function I(ue, we, Ve, ke, qe) {
        return ge(ue[we]) ? null : new P("Invalid " + ke + " `" + qe + "` supplied to " + ("`" + Ve + "`, expected a ReactNode."));
      }
      return H(I);
    }
    function _e(I, ue, we, Ve, ke) {
      return new P(
        (I || "React class") + ": " + ue + " type `" + we + "." + Ve + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + ke + "`."
      );
    }
    function Ye(I) {
      function ue(we, Ve, ke, qe, Ne) {
        var Xe = we[Ve], We = be(Xe);
        if (We !== "object")
          return new P("Invalid " + qe + " `" + Ne + "` of type `" + We + "` " + ("supplied to `" + ke + "`, expected `object`."));
        for (var He in I) {
          var rt = I[He];
          if (typeof rt != "function")
            return _e(ke, qe, Ne, He, Be(rt));
          var Rt = rt(Xe, He, ke, qe, Ne + "." + He, d);
          if (Rt)
            return Rt;
        }
        return null;
      }
      return H(ue);
    }
    function Ee(I) {
      function ue(we, Ve, ke, qe, Ne) {
        var Xe = we[Ve], We = be(Xe);
        if (We !== "object")
          return new P("Invalid " + qe + " `" + Ne + "` of type `" + We + "` " + ("supplied to `" + ke + "`, expected `object`."));
        var He = s({}, we[Ve], I);
        for (var rt in He) {
          var Rt = I[rt];
          if (v(I, rt) && typeof Rt != "function")
            return _e(ke, qe, Ne, rt, Be(Rt));
          if (!Rt)
            return new P(
              "Invalid " + qe + " `" + Ne + "` key `" + rt + "` supplied to `" + ke + "`.\nBad object: " + JSON.stringify(we[Ve], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(I), null, "  ")
            );
          var Z = Rt(Xe, rt, ke, qe, Ne + "." + rt, d);
          if (Z)
            return Z;
        }
        return null;
      }
      return H(ue);
    }
    function ge(I) {
      switch (typeof I) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !I;
        case "object":
          if (Array.isArray(I))
            return I.every(ge);
          if (I === null || R(I))
            return !0;
          var ue = N(I);
          if (ue) {
            var we = ue.call(I), Ve;
            if (ue !== I.entries) {
              for (; !(Ve = we.next()).done; )
                if (!ge(Ve.value))
                  return !1;
            } else
              for (; !(Ve = we.next()).done; ) {
                var ke = Ve.value;
                if (ke && !ge(ke[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function nt(I, ue) {
      return I === "symbol" ? !0 : ue ? ue["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && ue instanceof Symbol : !1;
    }
    function be(I) {
      var ue = typeof I;
      return Array.isArray(I) ? "array" : I instanceof RegExp ? "object" : nt(ue, I) ? "symbol" : ue;
    }
    function Be(I) {
      if (typeof I > "u" || I === null)
        return "" + I;
      var ue = be(I);
      if (ue === "object") {
        if (I instanceof Date)
          return "date";
        if (I instanceof RegExp)
          return "regexp";
      }
      return ue;
    }
    function oe(I) {
      var ue = Be(I);
      switch (ue) {
        case "array":
        case "object":
          return "an " + ue;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + ue;
        default:
          return ue;
      }
    }
    function Pe(I) {
      return !I.constructor || !I.constructor.name ? A : I.constructor.name;
    }
    return V.checkPropTypes = g, V.resetWarningCache = g.resetWarningCache, V.PropTypes = V, V;
  }, hb;
}
var mb, XT;
function e2() {
  if (XT)
    return mb;
  XT = 1;
  var l = $b();
  function s() {
  }
  function d() {
  }
  return d.resetWarningCache = s, mb = function() {
    function v(m, R, w, k, M, N) {
      if (N !== l) {
        var A = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw A.name = "Invariant Violation", A;
      }
    }
    v.isRequired = v;
    function g() {
      return v;
    }
    var S = {
      array: v,
      bigint: v,
      bool: v,
      func: v,
      number: v,
      object: v,
      string: v,
      symbol: v,
      any: v,
      arrayOf: g,
      element: v,
      elementType: v,
      instanceOf: g,
      node: v,
      objectOf: g,
      oneOf: g,
      oneOfType: g,
      shape: g,
      exact: g,
      checkPropTypes: d,
      resetWarningCache: s
    };
    return S.PropTypes = S, S;
  }, mb;
}
if (process.env.NODE_ENV !== "production") {
  var t2 = nw(), n2 = !0;
  Rb.exports = JM()(t2.isElement, n2);
} else
  Rb.exports = e2()();
var r2 = Rb.exports;
const x = /* @__PURE__ */ tw(r2);
function aw(l) {
  var s, d, v = "";
  if (typeof l == "string" || typeof l == "number")
    v += l;
  else if (typeof l == "object")
    if (Array.isArray(l)) {
      var g = l.length;
      for (s = 0; s < g; s++)
        l[s] && (d = aw(l[s])) && (v && (v += " "), v += d);
    } else
      for (d in l)
        l[d] && (v && (v += " "), v += d);
  return v;
}
function xn() {
  for (var l, s, d = 0, v = "", g = arguments.length; d < g; d++)
    (l = arguments[d]) && (s = aw(l)) && (v && (v += " "), v += s);
  return v;
}
function pg(l, s) {
  return process.env.NODE_ENV === "production" ? () => null : function(...v) {
    return l(...v) || s(...v);
  };
}
function Yu(l) {
  if (typeof l != "object" || l === null)
    return !1;
  const s = Object.getPrototypeOf(l);
  return (s === null || s === Object.prototype || Object.getPrototypeOf(s) === null) && !(Symbol.toStringTag in l) && !(Symbol.iterator in l);
}
function iw(l) {
  if (!Yu(l))
    return l;
  const s = {};
  return Object.keys(l).forEach((d) => {
    s[d] = iw(l[d]);
  }), s;
}
function Fl(l, s, d = {
  clone: !0
}) {
  const v = d.clone ? fe({}, l) : l;
  return Yu(l) && Yu(s) && Object.keys(s).forEach((g) => {
    g !== "__proto__" && (Yu(s[g]) && g in l && Yu(l[g]) ? v[g] = Fl(l[g], s[g], d) : d.clone ? v[g] = Yu(s[g]) ? iw(s[g]) : s[g] : v[g] = s[g]);
  }), v;
}
function a2(l) {
  const {
    prototype: s = {}
  } = l;
  return !!s.isReactComponent;
}
function ow(l, s, d, v, g) {
  const S = l[s], m = g || s;
  if (S == null || // When server-side rendering React doesn't warn either.
  // This is not an accurate check for SSR.
  // This is only in place for Emotion compat.
  // TODO: Revisit once https://github.com/facebook/react/issues/20047 is resolved.
  typeof window > "u")
    return null;
  let R;
  const w = S.type;
  return typeof w == "function" && !a2(w) && (R = "Did you accidentally use a plain function component for an element instead?"), R !== void 0 ? new Error(`Invalid ${v} \`${m}\` supplied to \`${d}\`. Expected an element that can hold a ref. ${R} For more information see https://mui.com/r/caveat-with-refs-guide`) : null;
}
const lw = pg(x.element, ow);
lw.isRequired = pg(x.element.isRequired, ow);
const Fb = lw;
function i2(l) {
  const {
    prototype: s = {}
  } = l;
  return !!s.isReactComponent;
}
function o2(l, s, d, v, g) {
  const S = l[s], m = g || s;
  if (S == null || // When server-side rendering React doesn't warn either.
  // This is not an accurate check for SSR.
  // This is only in place for emotion compat.
  // TODO: Revisit once https://github.com/facebook/react/issues/20047 is resolved.
  typeof window > "u")
    return null;
  let R;
  return typeof S == "function" && !i2(S) && (R = "Did you accidentally provide a plain function component instead?"), R !== void 0 ? new Error(`Invalid ${v} \`${m}\` supplied to \`${d}\`. Expected an element type that can hold a ref. ${R} For more information see https://mui.com/r/caveat-with-refs-guide`) : null;
}
const l2 = pg(x.elementType, o2), u2 = "exact-prop: ​";
function uw(l) {
  return process.env.NODE_ENV === "production" ? l : fe({}, l, {
    [u2]: (s) => {
      const d = Object.keys(s).filter((v) => !l.hasOwnProperty(v));
      return d.length > 0 ? new Error(`The following props are not supported: ${d.map((v) => `\`${v}\``).join(", ")}. Please remove them.`) : null;
    }
  });
}
function vd(l) {
  let s = "https://mui.com/production-error/?code=" + l;
  for (let d = 1; d < arguments.length; d += 1)
    s += "&args[]=" + encodeURIComponent(arguments[d]);
  return "Minified MUI error #" + l + "; visit " + s + " for the full message.";
}
var wb = { exports: {} }, Kt = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ZT;
function s2() {
  if (ZT)
    return Kt;
  ZT = 1;
  var l = Symbol.for("react.element"), s = Symbol.for("react.portal"), d = Symbol.for("react.fragment"), v = Symbol.for("react.strict_mode"), g = Symbol.for("react.profiler"), S = Symbol.for("react.provider"), m = Symbol.for("react.context"), R = Symbol.for("react.server_context"), w = Symbol.for("react.forward_ref"), k = Symbol.for("react.suspense"), M = Symbol.for("react.suspense_list"), N = Symbol.for("react.memo"), A = Symbol.for("react.lazy"), V = Symbol.for("react.offscreen"), F;
  F = Symbol.for("react.module.reference");
  function P(H) {
    if (typeof H == "object" && H !== null) {
      var le = H.$$typeof;
      switch (le) {
        case l:
          switch (H = H.type, H) {
            case d:
            case g:
            case v:
            case k:
            case M:
              return H;
            default:
              switch (H = H && H.$$typeof, H) {
                case R:
                case m:
                case w:
                case A:
                case N:
                case S:
                  return H;
                default:
                  return le;
              }
          }
        case s:
          return le;
      }
    }
  }
  return Kt.ContextConsumer = m, Kt.ContextProvider = S, Kt.Element = l, Kt.ForwardRef = w, Kt.Fragment = d, Kt.Lazy = A, Kt.Memo = N, Kt.Portal = s, Kt.Profiler = g, Kt.StrictMode = v, Kt.Suspense = k, Kt.SuspenseList = M, Kt.isAsyncMode = function() {
    return !1;
  }, Kt.isConcurrentMode = function() {
    return !1;
  }, Kt.isContextConsumer = function(H) {
    return P(H) === m;
  }, Kt.isContextProvider = function(H) {
    return P(H) === S;
  }, Kt.isElement = function(H) {
    return typeof H == "object" && H !== null && H.$$typeof === l;
  }, Kt.isForwardRef = function(H) {
    return P(H) === w;
  }, Kt.isFragment = function(H) {
    return P(H) === d;
  }, Kt.isLazy = function(H) {
    return P(H) === A;
  }, Kt.isMemo = function(H) {
    return P(H) === N;
  }, Kt.isPortal = function(H) {
    return P(H) === s;
  }, Kt.isProfiler = function(H) {
    return P(H) === g;
  }, Kt.isStrictMode = function(H) {
    return P(H) === v;
  }, Kt.isSuspense = function(H) {
    return P(H) === k;
  }, Kt.isSuspenseList = function(H) {
    return P(H) === M;
  }, Kt.isValidElementType = function(H) {
    return typeof H == "string" || typeof H == "function" || H === d || H === g || H === v || H === k || H === M || H === V || typeof H == "object" && H !== null && (H.$$typeof === A || H.$$typeof === N || H.$$typeof === S || H.$$typeof === m || H.$$typeof === w || H.$$typeof === F || H.getModuleId !== void 0);
  }, Kt.typeOf = P, Kt;
}
var Xt = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var JT;
function c2() {
  return JT || (JT = 1, process.env.NODE_ENV !== "production" && function() {
    var l = Symbol.for("react.element"), s = Symbol.for("react.portal"), d = Symbol.for("react.fragment"), v = Symbol.for("react.strict_mode"), g = Symbol.for("react.profiler"), S = Symbol.for("react.provider"), m = Symbol.for("react.context"), R = Symbol.for("react.server_context"), w = Symbol.for("react.forward_ref"), k = Symbol.for("react.suspense"), M = Symbol.for("react.suspense_list"), N = Symbol.for("react.memo"), A = Symbol.for("react.lazy"), V = Symbol.for("react.offscreen"), F = !1, P = !1, H = !1, le = !1, de = !1, K;
    K = Symbol.for("react.module.reference");
    function J(Se) {
      return !!(typeof Se == "string" || typeof Se == "function" || Se === d || Se === g || de || Se === v || Se === k || Se === M || le || Se === V || F || P || H || typeof Se == "object" && Se !== null && (Se.$$typeof === A || Se.$$typeof === N || Se.$$typeof === S || Se.$$typeof === m || Se.$$typeof === w || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      Se.$$typeof === K || Se.getModuleId !== void 0));
    }
    function D(Se) {
      if (typeof Se == "object" && Se !== null) {
        var Ft = Se.$$typeof;
        switch (Ft) {
          case l:
            var mn = Se.type;
            switch (mn) {
              case d:
              case g:
              case v:
              case k:
              case M:
                return mn;
              default:
                var On = mn && mn.$$typeof;
                switch (On) {
                  case R:
                  case m:
                  case w:
                  case A:
                  case N:
                  case S:
                    return On;
                  default:
                    return Ft;
                }
            }
          case s:
            return Ft;
        }
      }
    }
    var ve = m, ie = S, Ke = l, ot = w, De = d, _e = A, Ye = N, Ee = s, ge = g, nt = v, be = k, Be = M, oe = !1, Pe = !1;
    function I(Se) {
      return oe || (oe = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function ue(Se) {
      return Pe || (Pe = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function we(Se) {
      return D(Se) === m;
    }
    function Ve(Se) {
      return D(Se) === S;
    }
    function ke(Se) {
      return typeof Se == "object" && Se !== null && Se.$$typeof === l;
    }
    function qe(Se) {
      return D(Se) === w;
    }
    function Ne(Se) {
      return D(Se) === d;
    }
    function Xe(Se) {
      return D(Se) === A;
    }
    function We(Se) {
      return D(Se) === N;
    }
    function He(Se) {
      return D(Se) === s;
    }
    function rt(Se) {
      return D(Se) === g;
    }
    function Rt(Se) {
      return D(Se) === v;
    }
    function Z(Se) {
      return D(Se) === k;
    }
    function mt(Se) {
      return D(Se) === M;
    }
    Xt.ContextConsumer = ve, Xt.ContextProvider = ie, Xt.Element = Ke, Xt.ForwardRef = ot, Xt.Fragment = De, Xt.Lazy = _e, Xt.Memo = Ye, Xt.Portal = Ee, Xt.Profiler = ge, Xt.StrictMode = nt, Xt.Suspense = be, Xt.SuspenseList = Be, Xt.isAsyncMode = I, Xt.isConcurrentMode = ue, Xt.isContextConsumer = we, Xt.isContextProvider = Ve, Xt.isElement = ke, Xt.isForwardRef = qe, Xt.isFragment = Ne, Xt.isLazy = Xe, Xt.isMemo = We, Xt.isPortal = He, Xt.isProfiler = rt, Xt.isStrictMode = Rt, Xt.isSuspense = Z, Xt.isSuspenseList = mt, Xt.isValidElementType = J, Xt.typeOf = D;
  }()), Xt;
}
process.env.NODE_ENV === "production" ? wb.exports = s2() : wb.exports = c2();
var eR = wb.exports;
const f2 = /^\s*function(?:\s|\s*\/\*.*\*\/\s*)+([^(\s/]*)\s*/;
function d2(l) {
  const s = `${l}`.match(f2);
  return s && s[1] || "";
}
function sw(l, s = "") {
  return l.displayName || l.name || d2(l) || s;
}
function tR(l, s, d) {
  const v = sw(s);
  return l.displayName || (v !== "" ? `${d}(${v})` : d);
}
function p2(l) {
  if (l != null) {
    if (typeof l == "string")
      return l;
    if (typeof l == "function")
      return sw(l, "Component");
    if (typeof l == "object")
      switch (l.$$typeof) {
        case eR.ForwardRef:
          return tR(l, l.render, "ForwardRef");
        case eR.Memo:
          return tR(l, l.type, "memo");
        default:
          return;
      }
  }
}
function cw(l, s, d, v, g) {
  if (process.env.NODE_ENV === "production")
    return null;
  const S = l[s], m = g || s;
  return S == null ? null : S && S.nodeType !== 1 ? new Error(`Invalid ${v} \`${m}\` supplied to \`${d}\`. Expected an HTMLElement.`) : null;
}
const v2 = x.oneOfType([x.func, x.object]), h2 = v2;
function Qn(l) {
  if (typeof l != "string")
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `capitalize(string)` expects a string argument." : vd(7));
  return l.charAt(0).toUpperCase() + l.slice(1);
}
function nR(...l) {
  return l.reduce((s, d) => d == null ? s : function(...g) {
    s.apply(this, g), d.apply(this, g);
  }, () => {
  });
}
function Wu(l) {
  return l && l.ownerDocument || document;
}
function Vb(l) {
  return Wu(l).defaultView || window;
}
function _b(l, s) {
  typeof l == "function" ? l(s) : l && (l.current = s);
}
const kb = typeof window < "u" ? ae.useLayoutEffect : ae.useEffect;
let rR = 0;
function m2(l) {
  const [s, d] = ae.useState(l), v = l || s;
  return ae.useEffect(() => {
    s == null && (rR += 1, d(`mui-${rR}`));
  }, [s]), v;
}
const aR = ae.useId;
function y2(l) {
  if (aR !== void 0) {
    const s = aR();
    return l ?? s;
  }
  return m2(l);
}
function cd(l) {
  const s = ae.useRef(l);
  return kb(() => {
    s.current = l;
  }), ae.useRef((...d) => (
    // @ts-expect-error hide `this`
    (0, s.current)(...d)
  )).current;
}
function oc(...l) {
  return ae.useMemo(() => l.every((s) => s == null) ? null : (s) => {
    l.forEach((d) => {
      _b(d, s);
    });
  }, l);
}
const iR = {};
function g2(l, s) {
  const d = ae.useRef(iR);
  return d.current === iR && (d.current = l(s)), d;
}
const S2 = [];
function E2(l) {
  ae.useEffect(l, S2);
}
class vg {
  constructor() {
    this.currentId = 0, this.clear = () => {
      this.currentId !== 0 && (clearTimeout(this.currentId), this.currentId = 0);
    }, this.disposeEffect = () => this.clear;
  }
  static create() {
    return new vg();
  }
  /**
   * Executes `fn` after `delay`, clearing any previously scheduled call.
   */
  start(s, d) {
    this.clear(), this.currentId = setTimeout(() => {
      this.currentId = 0, d();
    }, s);
  }
}
function b2() {
  const l = g2(vg.create).current;
  return E2(l.disposeEffect), l;
}
let hg = !0, Ob = !1;
const C2 = new vg(), x2 = {
  text: !0,
  search: !0,
  url: !0,
  tel: !0,
  email: !0,
  password: !0,
  number: !0,
  date: !0,
  month: !0,
  week: !0,
  time: !0,
  datetime: !0,
  "datetime-local": !0
};
function T2(l) {
  const {
    type: s,
    tagName: d
  } = l;
  return !!(d === "INPUT" && x2[s] && !l.readOnly || d === "TEXTAREA" && !l.readOnly || l.isContentEditable);
}
function R2(l) {
  l.metaKey || l.altKey || l.ctrlKey || (hg = !0);
}
function yb() {
  hg = !1;
}
function w2() {
  this.visibilityState === "hidden" && Ob && (hg = !0);
}
function _2(l) {
  l.addEventListener("keydown", R2, !0), l.addEventListener("mousedown", yb, !0), l.addEventListener("pointerdown", yb, !0), l.addEventListener("touchstart", yb, !0), l.addEventListener("visibilitychange", w2, !0);
}
function k2(l) {
  const {
    target: s
  } = l;
  try {
    return s.matches(":focus-visible");
  } catch {
  }
  return hg || T2(s);
}
function O2() {
  const l = ae.useCallback((g) => {
    g != null && _2(g.ownerDocument);
  }, []), s = ae.useRef(!1);
  function d() {
    return s.current ? (Ob = !0, C2.start(100, () => {
      Ob = !1;
    }), s.current = !1, !0) : !1;
  }
  function v(g) {
    return k2(g) ? (s.current = !0, !0) : !1;
  }
  return {
    isFocusVisibleRef: s,
    onFocus: v,
    onBlur: d,
    ref: l
  };
}
function D2(l) {
  const s = l.documentElement.clientWidth;
  return Math.abs(window.innerWidth - s);
}
function N2(l) {
  const s = typeof l;
  switch (s) {
    case "number":
      return Number.isNaN(l) ? "NaN" : Number.isFinite(l) ? l !== Math.floor(l) ? "float" : "number" : "Infinity";
    case "object":
      return l === null ? "null" : l.constructor.name;
    default:
      return s;
  }
}
function M2(l) {
  return typeof l == "number" && isFinite(l) && Math.floor(l) === l;
}
const L2 = Number.isInteger || M2;
function fw(l, s, d, v) {
  const g = l[s];
  if (g == null || !L2(g)) {
    const S = N2(g);
    return new RangeError(`Invalid ${v} \`${s}\` of type \`${S}\` supplied to \`${d}\`, expected \`integer\`.`);
  }
  return null;
}
function dw(l, s, ...d) {
  return l[s] === void 0 ? null : fw(l, s, ...d);
}
function Db() {
  return null;
}
dw.isRequired = fw;
Db.isRequired = Db;
const A2 = process.env.NODE_ENV === "production" ? Db : dw;
function Hb(l, s) {
  const d = fe({}, s);
  return Object.keys(l).forEach((v) => {
    if (v.toString().match(/^(components|slots)$/))
      d[v] = fe({}, l[v], d[v]);
    else if (v.toString().match(/^(componentsProps|slotProps)$/)) {
      const g = l[v] || {}, S = s[v];
      d[v] = {}, !S || !Object.keys(S) ? d[v] = g : !g || !Object.keys(g) ? d[v] = S : (d[v] = fe({}, S), Object.keys(g).forEach((m) => {
        d[v][m] = Hb(g[m], S[m]);
      }));
    } else
      d[v] === void 0 && (d[v] = l[v]);
  }), d;
}
function Go(l, s, d = void 0) {
  const v = {};
  return Object.keys(l).forEach(
    // `Object.keys(slots)` can't be wider than `T` because we infer `T` from `slots`.
    // @ts-expect-error https://github.com/microsoft/TypeScript/pull/12253#issuecomment-263132208
    (g) => {
      v[g] = l[g].reduce((S, m) => {
        if (m) {
          const R = s(m);
          R !== "" && S.push(R), d && d[m] && S.push(d[m]);
        }
        return S;
      }, []).join(" ");
    }
  ), v;
}
const oR = (l) => l, z2 = () => {
  let l = oR;
  return {
    configure(s) {
      l = s;
    },
    generate(s) {
      return l(s);
    },
    reset() {
      l = oR;
    }
  };
}, P2 = z2(), U2 = {
  active: "active",
  checked: "checked",
  completed: "completed",
  disabled: "disabled",
  error: "error",
  expanded: "expanded",
  focused: "focused",
  focusVisible: "focusVisible",
  open: "open",
  readOnly: "readOnly",
  required: "required",
  selected: "selected"
};
function ki(l, s, d = "Mui") {
  const v = U2[s];
  return v ? `${d}-${v}` : `${P2.generate(l)}-${s}`;
}
function io(l, s, d = "Mui") {
  const v = {};
  return s.forEach((g) => {
    v[g] = ki(l, g, d);
  }), v;
}
function j2(l, s = Number.MIN_SAFE_INTEGER, d = Number.MAX_SAFE_INTEGER) {
  return Math.max(s, Math.min(l, d));
}
function pw(l) {
  var s = /* @__PURE__ */ Object.create(null);
  return function(d) {
    return s[d] === void 0 && (s[d] = l(d)), s[d];
  };
}
var $2 = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, F2 = /* @__PURE__ */ pw(
  function(l) {
    return $2.test(l) || l.charCodeAt(0) === 111 && l.charCodeAt(1) === 110 && l.charCodeAt(2) < 91;
  }
  /* Z+1 */
);
function V2(l) {
  if (l.sheet)
    return l.sheet;
  for (var s = 0; s < document.styleSheets.length; s++)
    if (document.styleSheets[s].ownerNode === l)
      return document.styleSheets[s];
}
function H2(l) {
  var s = document.createElement("style");
  return s.setAttribute("data-emotion", l.key), l.nonce !== void 0 && s.setAttribute("nonce", l.nonce), s.appendChild(document.createTextNode("")), s.setAttribute("data-s", ""), s;
}
var I2 = /* @__PURE__ */ function() {
  function l(d) {
    var v = this;
    this._insertTag = function(g) {
      var S;
      v.tags.length === 0 ? v.insertionPoint ? S = v.insertionPoint.nextSibling : v.prepend ? S = v.container.firstChild : S = v.before : S = v.tags[v.tags.length - 1].nextSibling, v.container.insertBefore(g, S), v.tags.push(g);
    }, this.isSpeedy = d.speedy === void 0 ? process.env.NODE_ENV === "production" : d.speedy, this.tags = [], this.ctr = 0, this.nonce = d.nonce, this.key = d.key, this.container = d.container, this.prepend = d.prepend, this.insertionPoint = d.insertionPoint, this.before = null;
  }
  var s = l.prototype;
  return s.hydrate = function(v) {
    v.forEach(this._insertTag);
  }, s.insert = function(v) {
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(H2(this));
    var g = this.tags[this.tags.length - 1];
    if (process.env.NODE_ENV !== "production") {
      var S = v.charCodeAt(0) === 64 && v.charCodeAt(1) === 105;
      S && this._alreadyInsertedOrderInsensitiveRule && console.error(`You're attempting to insert the following rule:
` + v + "\n\n`@import` rules must be before all other types of rules in a stylesheet but other rules have already been inserted. Please ensure that `@import` rules are before all other rules."), this._alreadyInsertedOrderInsensitiveRule = this._alreadyInsertedOrderInsensitiveRule || !S;
    }
    if (this.isSpeedy) {
      var m = V2(g);
      try {
        m.insertRule(v, m.cssRules.length);
      } catch (R) {
        process.env.NODE_ENV !== "production" && !/:(-moz-placeholder|-moz-focus-inner|-moz-focusring|-ms-input-placeholder|-moz-read-write|-moz-read-only|-ms-clear|-ms-expand|-ms-reveal){/.test(v) && console.error('There was a problem inserting the following rule: "' + v + '"', R);
      }
    } else
      g.appendChild(document.createTextNode(v));
    this.ctr++;
  }, s.flush = function() {
    this.tags.forEach(function(v) {
      return v.parentNode && v.parentNode.removeChild(v);
    }), this.tags = [], this.ctr = 0, process.env.NODE_ENV !== "production" && (this._alreadyInsertedOrderInsensitiveRule = !1);
  }, l;
}(), la = "-ms-", lg = "-moz-", It = "-webkit-", Ib = "comm", Bb = "rule", Yb = "decl", B2 = "@import", vw = "@keyframes", Y2 = "@layer", W2 = Math.abs, mg = String.fromCharCode, G2 = Object.assign;
function q2(l, s) {
  return Hr(l, 0) ^ 45 ? (((s << 2 ^ Hr(l, 0)) << 2 ^ Hr(l, 1)) << 2 ^ Hr(l, 2)) << 2 ^ Hr(l, 3) : 0;
}
function hw(l) {
  return l.trim();
}
function Q2(l, s) {
  return (l = s.exec(l)) ? l[0] : l;
}
function Bt(l, s, d) {
  return l.replace(s, d);
}
function Nb(l, s) {
  return l.indexOf(s);
}
function Hr(l, s) {
  return l.charCodeAt(s) | 0;
}
function Hv(l, s, d) {
  return l.slice(s, d);
}
function Yo(l) {
  return l.length;
}
function Wb(l) {
  return l.length;
}
function Qy(l, s) {
  return s.push(l), l;
}
function K2(l, s) {
  return l.map(s).join("");
}
var yg = 1, hd = 1, mw = 0, qa = 0, lr = 0, yd = "";
function gg(l, s, d, v, g, S, m) {
  return { value: l, root: s, parent: d, type: v, props: g, children: S, line: yg, column: hd, length: m, return: "" };
}
function Uv(l, s) {
  return G2(gg("", null, null, "", null, null, 0), l, { length: -l.length }, s);
}
function X2() {
  return lr;
}
function Z2() {
  return lr = qa > 0 ? Hr(yd, --qa) : 0, hd--, lr === 10 && (hd = 1, yg--), lr;
}
function si() {
  return lr = qa < mw ? Hr(yd, qa++) : 0, hd++, lr === 10 && (hd = 1, yg++), lr;
}
function Wo() {
  return Hr(yd, qa);
}
function ng() {
  return qa;
}
function Wv(l, s) {
  return Hv(yd, l, s);
}
function Iv(l) {
  switch (l) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function yw(l) {
  return yg = hd = 1, mw = Yo(yd = l), qa = 0, [];
}
function gw(l) {
  return yd = "", l;
}
function rg(l) {
  return hw(Wv(qa - 1, Mb(l === 91 ? l + 2 : l === 40 ? l + 1 : l)));
}
function J2(l) {
  for (; (lr = Wo()) && lr < 33; )
    si();
  return Iv(l) > 2 || Iv(lr) > 3 ? "" : " ";
}
function eL(l, s) {
  for (; --s && si() && !(lr < 48 || lr > 102 || lr > 57 && lr < 65 || lr > 70 && lr < 97); )
    ;
  return Wv(l, ng() + (s < 6 && Wo() == 32 && si() == 32));
}
function Mb(l) {
  for (; si(); )
    switch (lr) {
      case l:
        return qa;
      case 34:
      case 39:
        l !== 34 && l !== 39 && Mb(lr);
        break;
      case 40:
        l === 41 && Mb(l);
        break;
      case 92:
        si();
        break;
    }
  return qa;
}
function tL(l, s) {
  for (; si() && l + lr !== 57; )
    if (l + lr === 84 && Wo() === 47)
      break;
  return "/*" + Wv(s, qa - 1) + "*" + mg(l === 47 ? l : si());
}
function nL(l) {
  for (; !Iv(Wo()); )
    si();
  return Wv(l, qa);
}
function rL(l) {
  return gw(ag("", null, null, null, [""], l = yw(l), 0, [0], l));
}
function ag(l, s, d, v, g, S, m, R, w) {
  for (var k = 0, M = 0, N = m, A = 0, V = 0, F = 0, P = 1, H = 1, le = 1, de = 0, K = "", J = g, D = S, ve = v, ie = K; H; )
    switch (F = de, de = si()) {
      case 40:
        if (F != 108 && Hr(ie, N - 1) == 58) {
          Nb(ie += Bt(rg(de), "&", "&\f"), "&\f") != -1 && (le = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        ie += rg(de);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        ie += J2(F);
        break;
      case 92:
        ie += eL(ng() - 1, 7);
        continue;
      case 47:
        switch (Wo()) {
          case 42:
          case 47:
            Qy(aL(tL(si(), ng()), s, d), w);
            break;
          default:
            ie += "/";
        }
        break;
      case 123 * P:
        R[k++] = Yo(ie) * le;
      case 125 * P:
      case 59:
      case 0:
        switch (de) {
          case 0:
          case 125:
            H = 0;
          case 59 + M:
            le == -1 && (ie = Bt(ie, /\f/g, "")), V > 0 && Yo(ie) - N && Qy(V > 32 ? uR(ie + ";", v, d, N - 1) : uR(Bt(ie, " ", "") + ";", v, d, N - 2), w);
            break;
          case 59:
            ie += ";";
          default:
            if (Qy(ve = lR(ie, s, d, k, M, g, R, K, J = [], D = [], N), S), de === 123)
              if (M === 0)
                ag(ie, s, ve, ve, J, S, N, R, D);
              else
                switch (A === 99 && Hr(ie, 3) === 110 ? 100 : A) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    ag(l, ve, ve, v && Qy(lR(l, ve, ve, 0, 0, g, R, K, g, J = [], N), D), g, D, N, R, v ? J : D);
                    break;
                  default:
                    ag(ie, ve, ve, ve, [""], D, 0, R, D);
                }
        }
        k = M = V = 0, P = le = 1, K = ie = "", N = m;
        break;
      case 58:
        N = 1 + Yo(ie), V = F;
      default:
        if (P < 1) {
          if (de == 123)
            --P;
          else if (de == 125 && P++ == 0 && Z2() == 125)
            continue;
        }
        switch (ie += mg(de), de * P) {
          case 38:
            le = M > 0 ? 1 : (ie += "\f", -1);
            break;
          case 44:
            R[k++] = (Yo(ie) - 1) * le, le = 1;
            break;
          case 64:
            Wo() === 45 && (ie += rg(si())), A = Wo(), M = N = Yo(K = ie += nL(ng())), de++;
            break;
          case 45:
            F === 45 && Yo(ie) == 2 && (P = 0);
        }
    }
  return S;
}
function lR(l, s, d, v, g, S, m, R, w, k, M) {
  for (var N = g - 1, A = g === 0 ? S : [""], V = Wb(A), F = 0, P = 0, H = 0; F < v; ++F)
    for (var le = 0, de = Hv(l, N + 1, N = W2(P = m[F])), K = l; le < V; ++le)
      (K = hw(P > 0 ? A[le] + " " + de : Bt(de, /&\f/g, A[le]))) && (w[H++] = K);
  return gg(l, s, d, g === 0 ? Bb : R, w, k, M);
}
function aL(l, s, d) {
  return gg(l, s, d, Ib, mg(X2()), Hv(l, 2, -2), 0);
}
function uR(l, s, d, v) {
  return gg(l, s, d, Yb, Hv(l, 0, v), Hv(l, v + 1, -1), v);
}
function dd(l, s) {
  for (var d = "", v = Wb(l), g = 0; g < v; g++)
    d += s(l[g], g, l, s) || "";
  return d;
}
function iL(l, s, d, v) {
  switch (l.type) {
    case Y2:
      if (l.children.length)
        break;
    case B2:
    case Yb:
      return l.return = l.return || l.value;
    case Ib:
      return "";
    case vw:
      return l.return = l.value + "{" + dd(l.children, v) + "}";
    case Bb:
      l.value = l.props.join(",");
  }
  return Yo(d = dd(l.children, v)) ? l.return = l.value + "{" + d + "}" : "";
}
function oL(l) {
  var s = Wb(l);
  return function(d, v, g, S) {
    for (var m = "", R = 0; R < s; R++)
      m += l[R](d, v, g, S) || "";
    return m;
  };
}
function lL(l) {
  return function(s) {
    s.root || (s = s.return) && l(s);
  };
}
var uL = function(s, d, v) {
  for (var g = 0, S = 0; g = S, S = Wo(), g === 38 && S === 12 && (d[v] = 1), !Iv(S); )
    si();
  return Wv(s, qa);
}, sL = function(s, d) {
  var v = -1, g = 44;
  do
    switch (Iv(g)) {
      case 0:
        g === 38 && Wo() === 12 && (d[v] = 1), s[v] += uL(qa - 1, d, v);
        break;
      case 2:
        s[v] += rg(g);
        break;
      case 4:
        if (g === 44) {
          s[++v] = Wo() === 58 ? "&\f" : "", d[v] = s[v].length;
          break;
        }
      default:
        s[v] += mg(g);
    }
  while (g = si());
  return s;
}, cL = function(s, d) {
  return gw(sL(yw(s), d));
}, sR = /* @__PURE__ */ new WeakMap(), fL = function(s) {
  if (!(s.type !== "rule" || !s.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  s.length < 1)) {
    for (var d = s.value, v = s.parent, g = s.column === v.column && s.line === v.line; v.type !== "rule"; )
      if (v = v.parent, !v)
        return;
    if (!(s.props.length === 1 && d.charCodeAt(0) !== 58 && !sR.get(v)) && !g) {
      sR.set(s, !0);
      for (var S = [], m = cL(d, S), R = v.props, w = 0, k = 0; w < m.length; w++)
        for (var M = 0; M < R.length; M++, k++)
          s.props[k] = S[w] ? m[w].replace(/&\f/g, R[M]) : R[M] + " " + m[w];
    }
  }
}, dL = function(s) {
  if (s.type === "decl") {
    var d = s.value;
    // charcode for l
    d.charCodeAt(0) === 108 && // charcode for b
    d.charCodeAt(2) === 98 && (s.return = "", s.value = "");
  }
}, pL = "emotion-disable-server-rendering-unsafe-selector-warning-please-do-not-use-this-the-warning-exists-for-a-reason", vL = function(s) {
  return s.type === "comm" && s.children.indexOf(pL) > -1;
}, hL = function(s) {
  return function(d, v, g) {
    if (!(d.type !== "rule" || s.compat)) {
      var S = d.value.match(/(:first|:nth|:nth-last)-child/g);
      if (S) {
        for (var m = !!d.parent, R = m ? d.parent.children : (
          // global rule at the root level
          g
        ), w = R.length - 1; w >= 0; w--) {
          var k = R[w];
          if (k.line < d.line)
            break;
          if (k.column < d.column) {
            if (vL(k))
              return;
            break;
          }
        }
        S.forEach(function(M) {
          console.error('The pseudo class "' + M + '" is potentially unsafe when doing server-side rendering. Try changing it to "' + M.split("-child")[0] + '-of-type".');
        });
      }
    }
  };
}, Sw = function(s) {
  return s.type.charCodeAt(1) === 105 && s.type.charCodeAt(0) === 64;
}, mL = function(s, d) {
  for (var v = s - 1; v >= 0; v--)
    if (!Sw(d[v]))
      return !0;
  return !1;
}, cR = function(s) {
  s.type = "", s.value = "", s.return = "", s.children = "", s.props = "";
}, yL = function(s, d, v) {
  Sw(s) && (s.parent ? (console.error("`@import` rules can't be nested inside other rules. Please move it to the top level and put it before regular rules. Keep in mind that they can only be used within global styles."), cR(s)) : mL(d, v) && (console.error("`@import` rules can't be after other rules. Please put your `@import` rules before your other rules."), cR(s)));
};
function Ew(l, s) {
  switch (q2(l, s)) {
    case 5103:
      return It + "print-" + l + l;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return It + l + l;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return It + l + lg + l + la + l + l;
    case 6828:
    case 4268:
      return It + l + la + l + l;
    case 6165:
      return It + l + la + "flex-" + l + l;
    case 5187:
      return It + l + Bt(l, /(\w+).+(:[^]+)/, It + "box-$1$2" + la + "flex-$1$2") + l;
    case 5443:
      return It + l + la + "flex-item-" + Bt(l, /flex-|-self/, "") + l;
    case 4675:
      return It + l + la + "flex-line-pack" + Bt(l, /align-content|flex-|-self/, "") + l;
    case 5548:
      return It + l + la + Bt(l, "shrink", "negative") + l;
    case 5292:
      return It + l + la + Bt(l, "basis", "preferred-size") + l;
    case 6060:
      return It + "box-" + Bt(l, "-grow", "") + It + l + la + Bt(l, "grow", "positive") + l;
    case 4554:
      return It + Bt(l, /([^-])(transform)/g, "$1" + It + "$2") + l;
    case 6187:
      return Bt(Bt(Bt(l, /(zoom-|grab)/, It + "$1"), /(image-set)/, It + "$1"), l, "") + l;
    case 5495:
    case 3959:
      return Bt(l, /(image-set\([^]*)/, It + "$1$`$1");
    case 4968:
      return Bt(Bt(l, /(.+:)(flex-)?(.*)/, It + "box-pack:$3" + la + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + It + l + l;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return Bt(l, /(.+)-inline(.+)/, It + "$1$2") + l;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (Yo(l) - 1 - s > 6)
        switch (Hr(l, s + 1)) {
          case 109:
            if (Hr(l, s + 4) !== 45)
              break;
          case 102:
            return Bt(l, /(.+:)(.+)-([^]+)/, "$1" + It + "$2-$3$1" + lg + (Hr(l, s + 3) == 108 ? "$3" : "$2-$3")) + l;
          case 115:
            return ~Nb(l, "stretch") ? Ew(Bt(l, "stretch", "fill-available"), s) + l : l;
        }
      break;
    case 4949:
      if (Hr(l, s + 1) !== 115)
        break;
    case 6444:
      switch (Hr(l, Yo(l) - 3 - (~Nb(l, "!important") && 10))) {
        case 107:
          return Bt(l, ":", ":" + It) + l;
        case 101:
          return Bt(l, /(.+:)([^;!]+)(;|!.+)?/, "$1" + It + (Hr(l, 14) === 45 ? "inline-" : "") + "box$3$1" + It + "$2$3$1" + la + "$2box$3") + l;
      }
      break;
    case 5936:
      switch (Hr(l, s + 11)) {
        case 114:
          return It + l + la + Bt(l, /[svh]\w+-[tblr]{2}/, "tb") + l;
        case 108:
          return It + l + la + Bt(l, /[svh]\w+-[tblr]{2}/, "tb-rl") + l;
        case 45:
          return It + l + la + Bt(l, /[svh]\w+-[tblr]{2}/, "lr") + l;
      }
      return It + l + la + l + l;
  }
  return l;
}
var gL = function(s, d, v, g) {
  if (s.length > -1 && !s.return)
    switch (s.type) {
      case Yb:
        s.return = Ew(s.value, s.length);
        break;
      case vw:
        return dd([Uv(s, {
          value: Bt(s.value, "@", "@" + It)
        })], g);
      case Bb:
        if (s.length)
          return K2(s.props, function(S) {
            switch (Q2(S, /(::plac\w+|:read-\w+)/)) {
              case ":read-only":
              case ":read-write":
                return dd([Uv(s, {
                  props: [Bt(S, /:(read-\w+)/, ":" + lg + "$1")]
                })], g);
              case "::placeholder":
                return dd([Uv(s, {
                  props: [Bt(S, /:(plac\w+)/, ":" + It + "input-$1")]
                }), Uv(s, {
                  props: [Bt(S, /:(plac\w+)/, ":" + lg + "$1")]
                }), Uv(s, {
                  props: [Bt(S, /:(plac\w+)/, la + "input-$1")]
                })], g);
            }
            return "";
          });
    }
}, SL = [gL], EL = function(s) {
  var d = s.key;
  if (process.env.NODE_ENV !== "production" && !d)
    throw new Error(`You have to configure \`key\` for your cache. Please make sure it's unique (and not equal to 'css') as it's used for linking styles to your cache.
If multiple caches share the same key they might "fight" for each other's style elements.`);
  if (d === "css") {
    var v = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(v, function(P) {
      var H = P.getAttribute("data-emotion");
      H.indexOf(" ") !== -1 && (document.head.appendChild(P), P.setAttribute("data-s", ""));
    });
  }
  var g = s.stylisPlugins || SL;
  if (process.env.NODE_ENV !== "production" && /[^a-z-]/.test(d))
    throw new Error('Emotion key must only contain lower case alphabetical characters and - but "' + d + '" was passed');
  var S = {}, m, R = [];
  m = s.container || document.head, Array.prototype.forEach.call(
    // this means we will ignore elements which don't have a space in them which
    // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
    document.querySelectorAll('style[data-emotion^="' + d + ' "]'),
    function(P) {
      for (var H = P.getAttribute("data-emotion").split(" "), le = 1; le < H.length; le++)
        S[H[le]] = !0;
      R.push(P);
    }
  );
  var w, k = [fL, dL];
  process.env.NODE_ENV !== "production" && k.push(hL({
    get compat() {
      return F.compat;
    }
  }), yL);
  {
    var M, N = [iL, process.env.NODE_ENV !== "production" ? function(P) {
      P.root || (P.return ? M.insert(P.return) : P.value && P.type !== Ib && M.insert(P.value + "{}"));
    } : lL(function(P) {
      M.insert(P);
    })], A = oL(k.concat(g, N)), V = function(H) {
      return dd(rL(H), A);
    };
    w = function(H, le, de, K) {
      M = de, process.env.NODE_ENV !== "production" && le.map !== void 0 && (M = {
        insert: function(D) {
          de.insert(D + le.map);
        }
      }), V(H ? H + "{" + le.styles + "}" : le.styles), K && (F.inserted[le.name] = !0);
    };
  }
  var F = {
    key: d,
    sheet: new I2({
      key: d,
      container: m,
      nonce: s.nonce,
      speedy: s.speedy,
      prepend: s.prepend,
      insertionPoint: s.insertionPoint
    }),
    nonce: s.nonce,
    inserted: S,
    registered: {},
    insert: w
  };
  return F.sheet.hydrate(R), F;
}, Lb = { exports: {} }, Zt = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var fR;
function bL() {
  if (fR)
    return Zt;
  fR = 1;
  var l = typeof Symbol == "function" && Symbol.for, s = l ? Symbol.for("react.element") : 60103, d = l ? Symbol.for("react.portal") : 60106, v = l ? Symbol.for("react.fragment") : 60107, g = l ? Symbol.for("react.strict_mode") : 60108, S = l ? Symbol.for("react.profiler") : 60114, m = l ? Symbol.for("react.provider") : 60109, R = l ? Symbol.for("react.context") : 60110, w = l ? Symbol.for("react.async_mode") : 60111, k = l ? Symbol.for("react.concurrent_mode") : 60111, M = l ? Symbol.for("react.forward_ref") : 60112, N = l ? Symbol.for("react.suspense") : 60113, A = l ? Symbol.for("react.suspense_list") : 60120, V = l ? Symbol.for("react.memo") : 60115, F = l ? Symbol.for("react.lazy") : 60116, P = l ? Symbol.for("react.block") : 60121, H = l ? Symbol.for("react.fundamental") : 60117, le = l ? Symbol.for("react.responder") : 60118, de = l ? Symbol.for("react.scope") : 60119;
  function K(D) {
    if (typeof D == "object" && D !== null) {
      var ve = D.$$typeof;
      switch (ve) {
        case s:
          switch (D = D.type, D) {
            case w:
            case k:
            case v:
            case S:
            case g:
            case N:
              return D;
            default:
              switch (D = D && D.$$typeof, D) {
                case R:
                case M:
                case F:
                case V:
                case m:
                  return D;
                default:
                  return ve;
              }
          }
        case d:
          return ve;
      }
    }
  }
  function J(D) {
    return K(D) === k;
  }
  return Zt.AsyncMode = w, Zt.ConcurrentMode = k, Zt.ContextConsumer = R, Zt.ContextProvider = m, Zt.Element = s, Zt.ForwardRef = M, Zt.Fragment = v, Zt.Lazy = F, Zt.Memo = V, Zt.Portal = d, Zt.Profiler = S, Zt.StrictMode = g, Zt.Suspense = N, Zt.isAsyncMode = function(D) {
    return J(D) || K(D) === w;
  }, Zt.isConcurrentMode = J, Zt.isContextConsumer = function(D) {
    return K(D) === R;
  }, Zt.isContextProvider = function(D) {
    return K(D) === m;
  }, Zt.isElement = function(D) {
    return typeof D == "object" && D !== null && D.$$typeof === s;
  }, Zt.isForwardRef = function(D) {
    return K(D) === M;
  }, Zt.isFragment = function(D) {
    return K(D) === v;
  }, Zt.isLazy = function(D) {
    return K(D) === F;
  }, Zt.isMemo = function(D) {
    return K(D) === V;
  }, Zt.isPortal = function(D) {
    return K(D) === d;
  }, Zt.isProfiler = function(D) {
    return K(D) === S;
  }, Zt.isStrictMode = function(D) {
    return K(D) === g;
  }, Zt.isSuspense = function(D) {
    return K(D) === N;
  }, Zt.isValidElementType = function(D) {
    return typeof D == "string" || typeof D == "function" || D === v || D === k || D === S || D === g || D === N || D === A || typeof D == "object" && D !== null && (D.$$typeof === F || D.$$typeof === V || D.$$typeof === m || D.$$typeof === R || D.$$typeof === M || D.$$typeof === H || D.$$typeof === le || D.$$typeof === de || D.$$typeof === P);
  }, Zt.typeOf = K, Zt;
}
var Jt = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var dR;
function CL() {
  return dR || (dR = 1, process.env.NODE_ENV !== "production" && function() {
    var l = typeof Symbol == "function" && Symbol.for, s = l ? Symbol.for("react.element") : 60103, d = l ? Symbol.for("react.portal") : 60106, v = l ? Symbol.for("react.fragment") : 60107, g = l ? Symbol.for("react.strict_mode") : 60108, S = l ? Symbol.for("react.profiler") : 60114, m = l ? Symbol.for("react.provider") : 60109, R = l ? Symbol.for("react.context") : 60110, w = l ? Symbol.for("react.async_mode") : 60111, k = l ? Symbol.for("react.concurrent_mode") : 60111, M = l ? Symbol.for("react.forward_ref") : 60112, N = l ? Symbol.for("react.suspense") : 60113, A = l ? Symbol.for("react.suspense_list") : 60120, V = l ? Symbol.for("react.memo") : 60115, F = l ? Symbol.for("react.lazy") : 60116, P = l ? Symbol.for("react.block") : 60121, H = l ? Symbol.for("react.fundamental") : 60117, le = l ? Symbol.for("react.responder") : 60118, de = l ? Symbol.for("react.scope") : 60119;
    function K(Z) {
      return typeof Z == "string" || typeof Z == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      Z === v || Z === k || Z === S || Z === g || Z === N || Z === A || typeof Z == "object" && Z !== null && (Z.$$typeof === F || Z.$$typeof === V || Z.$$typeof === m || Z.$$typeof === R || Z.$$typeof === M || Z.$$typeof === H || Z.$$typeof === le || Z.$$typeof === de || Z.$$typeof === P);
    }
    function J(Z) {
      if (typeof Z == "object" && Z !== null) {
        var mt = Z.$$typeof;
        switch (mt) {
          case s:
            var Se = Z.type;
            switch (Se) {
              case w:
              case k:
              case v:
              case S:
              case g:
              case N:
                return Se;
              default:
                var Ft = Se && Se.$$typeof;
                switch (Ft) {
                  case R:
                  case M:
                  case F:
                  case V:
                  case m:
                    return Ft;
                  default:
                    return mt;
                }
            }
          case d:
            return mt;
        }
      }
    }
    var D = w, ve = k, ie = R, Ke = m, ot = s, De = M, _e = v, Ye = F, Ee = V, ge = d, nt = S, be = g, Be = N, oe = !1;
    function Pe(Z) {
      return oe || (oe = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), I(Z) || J(Z) === w;
    }
    function I(Z) {
      return J(Z) === k;
    }
    function ue(Z) {
      return J(Z) === R;
    }
    function we(Z) {
      return J(Z) === m;
    }
    function Ve(Z) {
      return typeof Z == "object" && Z !== null && Z.$$typeof === s;
    }
    function ke(Z) {
      return J(Z) === M;
    }
    function qe(Z) {
      return J(Z) === v;
    }
    function Ne(Z) {
      return J(Z) === F;
    }
    function Xe(Z) {
      return J(Z) === V;
    }
    function We(Z) {
      return J(Z) === d;
    }
    function He(Z) {
      return J(Z) === S;
    }
    function rt(Z) {
      return J(Z) === g;
    }
    function Rt(Z) {
      return J(Z) === N;
    }
    Jt.AsyncMode = D, Jt.ConcurrentMode = ve, Jt.ContextConsumer = ie, Jt.ContextProvider = Ke, Jt.Element = ot, Jt.ForwardRef = De, Jt.Fragment = _e, Jt.Lazy = Ye, Jt.Memo = Ee, Jt.Portal = ge, Jt.Profiler = nt, Jt.StrictMode = be, Jt.Suspense = Be, Jt.isAsyncMode = Pe, Jt.isConcurrentMode = I, Jt.isContextConsumer = ue, Jt.isContextProvider = we, Jt.isElement = Ve, Jt.isForwardRef = ke, Jt.isFragment = qe, Jt.isLazy = Ne, Jt.isMemo = Xe, Jt.isPortal = We, Jt.isProfiler = He, Jt.isStrictMode = rt, Jt.isSuspense = Rt, Jt.isValidElementType = K, Jt.typeOf = J;
  }()), Jt;
}
process.env.NODE_ENV === "production" ? Lb.exports = bL() : Lb.exports = CL();
var xL = Lb.exports, bw = xL, TL = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, RL = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, Cw = {};
Cw[bw.ForwardRef] = TL;
Cw[bw.Memo] = RL;
var wL = !0;
function Gb(l, s, d) {
  var v = "";
  return d.split(" ").forEach(function(g) {
    l[g] !== void 0 ? s.push(l[g] + ";") : v += g + " ";
  }), v;
}
var Sg = function(s, d, v) {
  var g = s.key + "-" + d.name;
  // we only need to add the styles to the registered cache if the
  // class name could be used further down
  // the tree but if it's a string tag, we know it won't
  // so we don't have to add it to registered cache.
  // this improves memory usage since we can avoid storing the whole style string
  (v === !1 || // we need to always store it if we're in compat mode and
  // in node since emotion-server relies on whether a style is in
  // the registered cache to know whether a style is global or not
  // also, note that this check will be dead code eliminated in the browser
  wL === !1) && s.registered[g] === void 0 && (s.registered[g] = d.styles);
}, Eg = function(s, d, v) {
  Sg(s, d, v);
  var g = s.key + "-" + d.name;
  if (s.inserted[d.name] === void 0) {
    var S = d;
    do
      s.insert(d === S ? "." + g : "", S, s.sheet, !0), S = S.next;
    while (S !== void 0);
  }
};
function _L(l) {
  for (var s = 0, d, v = 0, g = l.length; g >= 4; ++v, g -= 4)
    d = l.charCodeAt(v) & 255 | (l.charCodeAt(++v) & 255) << 8 | (l.charCodeAt(++v) & 255) << 16 | (l.charCodeAt(++v) & 255) << 24, d = /* Math.imul(k, m): */
    (d & 65535) * 1540483477 + ((d >>> 16) * 59797 << 16), d ^= /* k >>> r: */
    d >>> 24, s = /* Math.imul(k, m): */
    (d & 65535) * 1540483477 + ((d >>> 16) * 59797 << 16) ^ /* Math.imul(h, m): */
    (s & 65535) * 1540483477 + ((s >>> 16) * 59797 << 16);
  switch (g) {
    case 3:
      s ^= (l.charCodeAt(v + 2) & 255) << 16;
    case 2:
      s ^= (l.charCodeAt(v + 1) & 255) << 8;
    case 1:
      s ^= l.charCodeAt(v) & 255, s = /* Math.imul(h, m): */
      (s & 65535) * 1540483477 + ((s >>> 16) * 59797 << 16);
  }
  return s ^= s >>> 13, s = /* Math.imul(h, m): */
  (s & 65535) * 1540483477 + ((s >>> 16) * 59797 << 16), ((s ^ s >>> 15) >>> 0).toString(36);
}
var kL = {
  animationIterationCount: 1,
  aspectRatio: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
}, pR = `You have illegal escape sequence in your template literal, most likely inside content's property value.
Because you write your CSS inside a JavaScript string you actually have to do double escaping, so for example "content: '\\00d7';" should become "content: '\\\\00d7';".
You can read more about this here:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences`, OL = "You have passed in falsy value as style object's key (can happen when in example you pass unexported component as computed key).", DL = /[A-Z]|^ms/g, xw = /_EMO_([^_]+?)_([^]*?)_EMO_/g, qb = function(s) {
  return s.charCodeAt(1) === 45;
}, vR = function(s) {
  return s != null && typeof s != "boolean";
}, gb = /* @__PURE__ */ pw(function(l) {
  return qb(l) ? l : l.replace(DL, "-$&").toLowerCase();
}), ug = function(s, d) {
  switch (s) {
    case "animation":
    case "animationName":
      if (typeof d == "string")
        return d.replace(xw, function(v, g, S) {
          return ao = {
            name: g,
            styles: S,
            next: ao
          }, g;
        });
  }
  return kL[s] !== 1 && !qb(s) && typeof d == "number" && d !== 0 ? d + "px" : d;
};
if (process.env.NODE_ENV !== "production") {
  var NL = /(var|attr|counters?|url|element|(((repeating-)?(linear|radial))|conic)-gradient)\(|(no-)?(open|close)-quote/, ML = ["normal", "none", "initial", "inherit", "unset"], LL = ug, AL = /^-ms-/, zL = /-(.)/g, hR = {};
  ug = function(s, d) {
    if (s === "content" && (typeof d != "string" || ML.indexOf(d) === -1 && !NL.test(d) && (d.charAt(0) !== d.charAt(d.length - 1) || d.charAt(0) !== '"' && d.charAt(0) !== "'")))
      throw new Error("You seem to be using a value for 'content' without quotes, try replacing it with `content: '\"" + d + "\"'`");
    var v = LL(s, d);
    return v !== "" && !qb(s) && s.indexOf("-") !== -1 && hR[s] === void 0 && (hR[s] = !0, console.error("Using kebab-case for css properties in objects is not supported. Did you mean " + s.replace(AL, "ms-").replace(zL, function(g, S) {
      return S.toUpperCase();
    }) + "?")), v;
  };
}
var Tw = "Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.";
function Bv(l, s, d) {
  if (d == null)
    return "";
  if (d.__emotion_styles !== void 0) {
    if (process.env.NODE_ENV !== "production" && d.toString() === "NO_COMPONENT_SELECTOR")
      throw new Error(Tw);
    return d;
  }
  switch (typeof d) {
    case "boolean":
      return "";
    case "object": {
      if (d.anim === 1)
        return ao = {
          name: d.name,
          styles: d.styles,
          next: ao
        }, d.name;
      if (d.styles !== void 0) {
        var v = d.next;
        if (v !== void 0)
          for (; v !== void 0; )
            ao = {
              name: v.name,
              styles: v.styles,
              next: ao
            }, v = v.next;
        var g = d.styles + ";";
        return process.env.NODE_ENV !== "production" && d.map !== void 0 && (g += d.map), g;
      }
      return PL(l, s, d);
    }
    case "function": {
      if (l !== void 0) {
        var S = ao, m = d(l);
        return ao = S, Bv(l, s, m);
      } else
        process.env.NODE_ENV !== "production" && console.error("Functions that are interpolated in css calls will be stringified.\nIf you want to have a css call based on props, create a function that returns a css call like this\nlet dynamicStyle = (props) => css`color: ${props.color}`\nIt can be called directly with props or interpolated in a styled call like this\nlet SomeComponent = styled('div')`${dynamicStyle}`");
      break;
    }
    case "string":
      if (process.env.NODE_ENV !== "production") {
        var R = [], w = d.replace(xw, function(M, N, A) {
          var V = "animation" + R.length;
          return R.push("const " + V + " = keyframes`" + A.replace(/^@keyframes animation-\w+/, "") + "`"), "${" + V + "}";
        });
        R.length && console.error("`keyframes` output got interpolated into plain string, please wrap it with `css`.\n\nInstead of doing this:\n\n" + [].concat(R, ["`" + w + "`"]).join(`
`) + `

You should wrap it with \`css\` like this:

` + ("css`" + w + "`"));
      }
      break;
  }
  if (s == null)
    return d;
  var k = s[d];
  return k !== void 0 ? k : d;
}
function PL(l, s, d) {
  var v = "";
  if (Array.isArray(d))
    for (var g = 0; g < d.length; g++)
      v += Bv(l, s, d[g]) + ";";
  else
    for (var S in d) {
      var m = d[S];
      if (typeof m != "object")
        s != null && s[m] !== void 0 ? v += S + "{" + s[m] + "}" : vR(m) && (v += gb(S) + ":" + ug(S, m) + ";");
      else {
        if (S === "NO_COMPONENT_SELECTOR" && process.env.NODE_ENV !== "production")
          throw new Error(Tw);
        if (Array.isArray(m) && typeof m[0] == "string" && (s == null || s[m[0]] === void 0))
          for (var R = 0; R < m.length; R++)
            vR(m[R]) && (v += gb(S) + ":" + ug(S, m[R]) + ";");
        else {
          var w = Bv(l, s, m);
          switch (S) {
            case "animation":
            case "animationName": {
              v += gb(S) + ":" + w + ";";
              break;
            }
            default:
              process.env.NODE_ENV !== "production" && S === "undefined" && console.error(OL), v += S + "{" + w + "}";
          }
        }
      }
    }
  return v;
}
var mR = /label:\s*([^\s;\n{]+)\s*(;|$)/g, Rw;
process.env.NODE_ENV !== "production" && (Rw = /\/\*#\ssourceMappingURL=data:application\/json;\S+\s+\*\//g);
var ao, md = function(s, d, v) {
  if (s.length === 1 && typeof s[0] == "object" && s[0] !== null && s[0].styles !== void 0)
    return s[0];
  var g = !0, S = "";
  ao = void 0;
  var m = s[0];
  m == null || m.raw === void 0 ? (g = !1, S += Bv(v, d, m)) : (process.env.NODE_ENV !== "production" && m[0] === void 0 && console.error(pR), S += m[0]);
  for (var R = 1; R < s.length; R++)
    S += Bv(v, d, s[R]), g && (process.env.NODE_ENV !== "production" && m[R] === void 0 && console.error(pR), S += m[R]);
  var w;
  process.env.NODE_ENV !== "production" && (S = S.replace(Rw, function(A) {
    return w = A, "";
  })), mR.lastIndex = 0;
  for (var k = "", M; (M = mR.exec(S)) !== null; )
    k += "-" + // $FlowFixMe we know it's not null
    M[1];
  var N = _L(S) + k;
  return process.env.NODE_ENV !== "production" ? {
    name: N,
    styles: S,
    map: w,
    next: ao,
    toString: function() {
      return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
    }
  } : {
    name: N,
    styles: S,
    next: ao
  };
}, UL = function(s) {
  return s();
}, ww = ae.useInsertionEffect ? ae.useInsertionEffect : !1, Qb = ww || UL, yR = ww || ae.useLayoutEffect, jL = {}.hasOwnProperty, Kb = /* @__PURE__ */ ae.createContext(
  // we're doing this to avoid preconstruct's dead code elimination in this one case
  // because this module is primarily intended for the browser and node
  // but it's also required in react native and similar environments sometimes
  // and we could have a special build just for that
  // but this is much easier and the native packages
  // might use a different theme context in the future anyway
  typeof HTMLElement < "u" ? /* @__PURE__ */ EL({
    key: "css"
  }) : null
);
process.env.NODE_ENV !== "production" && (Kb.displayName = "EmotionCacheContext");
Kb.Provider;
var bg = function(s) {
  return /* @__PURE__ */ BM(function(d, v) {
    var g = YM(Kb);
    return s(d, g, v);
  });
}, gd = /* @__PURE__ */ ae.createContext({});
process.env.NODE_ENV !== "production" && (gd.displayName = "EmotionThemeContext");
var gR = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__", SR = "__EMOTION_LABEL_PLEASE_DO_NOT_USE__", $L = function(s) {
  var d = s.cache, v = s.serialized, g = s.isStringTag;
  return Sg(d, v, g), Qb(function() {
    return Eg(d, v, g);
  }), null;
}, FL = /* @__PURE__ */ bg(function(l, s, d) {
  var v = l.css;
  typeof v == "string" && s.registered[v] !== void 0 && (v = s.registered[v]);
  var g = l[gR], S = [v], m = "";
  typeof l.className == "string" ? m = Gb(s.registered, S, l.className) : l.className != null && (m = l.className + " ");
  var R = md(S, void 0, ae.useContext(gd));
  if (process.env.NODE_ENV !== "production" && R.name.indexOf("-") === -1) {
    var w = l[SR];
    w && (R = md([R, "label:" + w + ";"]));
  }
  m += s.key + "-" + R.name;
  var k = {};
  for (var M in l)
    jL.call(l, M) && M !== "css" && M !== gR && (process.env.NODE_ENV === "production" || M !== SR) && (k[M] = l[M]);
  return k.ref = d, k.className = m, /* @__PURE__ */ ae.createElement(ae.Fragment, null, /* @__PURE__ */ ae.createElement($L, {
    cache: s,
    serialized: R,
    isStringTag: typeof g == "string"
  }), /* @__PURE__ */ ae.createElement(g, k));
});
process.env.NODE_ENV !== "production" && (FL.displayName = "EmotionCssPropInternal");
var VL = {
  name: "@emotion/react",
  version: "11.11.3",
  main: "dist/emotion-react.cjs.js",
  module: "dist/emotion-react.esm.js",
  browser: {
    "./dist/emotion-react.esm.js": "./dist/emotion-react.browser.esm.js"
  },
  exports: {
    ".": {
      module: {
        worker: "./dist/emotion-react.worker.esm.js",
        browser: "./dist/emotion-react.browser.esm.js",
        default: "./dist/emotion-react.esm.js"
      },
      import: "./dist/emotion-react.cjs.mjs",
      default: "./dist/emotion-react.cjs.js"
    },
    "./jsx-runtime": {
      module: {
        worker: "./jsx-runtime/dist/emotion-react-jsx-runtime.worker.esm.js",
        browser: "./jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js",
        default: "./jsx-runtime/dist/emotion-react-jsx-runtime.esm.js"
      },
      import: "./jsx-runtime/dist/emotion-react-jsx-runtime.cjs.mjs",
      default: "./jsx-runtime/dist/emotion-react-jsx-runtime.cjs.js"
    },
    "./_isolated-hnrs": {
      module: {
        worker: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.worker.esm.js",
        browser: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.browser.esm.js",
        default: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.esm.js"
      },
      import: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.cjs.mjs",
      default: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.cjs.js"
    },
    "./jsx-dev-runtime": {
      module: {
        worker: "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.worker.esm.js",
        browser: "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.browser.esm.js",
        default: "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.esm.js"
      },
      import: "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.cjs.mjs",
      default: "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.cjs.js"
    },
    "./package.json": "./package.json",
    "./types/css-prop": "./types/css-prop.d.ts",
    "./macro": {
      types: {
        import: "./macro.d.mts",
        default: "./macro.d.ts"
      },
      default: "./macro.js"
    }
  },
  types: "types/index.d.ts",
  files: [
    "src",
    "dist",
    "jsx-runtime",
    "jsx-dev-runtime",
    "_isolated-hnrs",
    "types/*.d.ts",
    "macro.*"
  ],
  sideEffects: !1,
  author: "Emotion Contributors",
  license: "MIT",
  scripts: {
    "test:typescript": "dtslint types"
  },
  dependencies: {
    "@babel/runtime": "^7.18.3",
    "@emotion/babel-plugin": "^11.11.0",
    "@emotion/cache": "^11.11.0",
    "@emotion/serialize": "^1.1.3",
    "@emotion/use-insertion-effect-with-fallbacks": "^1.0.1",
    "@emotion/utils": "^1.2.1",
    "@emotion/weak-memoize": "^0.3.1",
    "hoist-non-react-statics": "^3.3.1"
  },
  peerDependencies: {
    react: ">=16.8.0"
  },
  peerDependenciesMeta: {
    "@types/react": {
      optional: !0
    }
  },
  devDependencies: {
    "@definitelytyped/dtslint": "0.0.112",
    "@emotion/css": "11.11.2",
    "@emotion/css-prettifier": "1.1.3",
    "@emotion/server": "11.11.0",
    "@emotion/styled": "11.11.0",
    "html-tag-names": "^1.1.2",
    react: "16.14.0",
    "svg-tag-names": "^1.1.1",
    typescript: "^4.5.5"
  },
  repository: "https://github.com/emotion-js/emotion/tree/main/packages/react",
  publishConfig: {
    access: "public"
  },
  "umd:main": "dist/emotion-react.umd.min.js",
  preconstruct: {
    entrypoints: [
      "./index.js",
      "./jsx-runtime.js",
      "./jsx-dev-runtime.js",
      "./_isolated-hnrs.js"
    ],
    umdName: "emotionReact",
    exports: {
      envConditions: [
        "browser",
        "worker"
      ],
      extra: {
        "./types/css-prop": "./types/css-prop.d.ts",
        "./macro": {
          types: {
            import: "./macro.d.mts",
            default: "./macro.d.ts"
          },
          default: "./macro.js"
        }
      }
    }
  }
}, ER = !1, HL = /* @__PURE__ */ bg(function(l, s) {
  process.env.NODE_ENV !== "production" && !ER && // check for className as well since the user is
  // probably using the custom createElement which
  // means it will be turned into a className prop
  // $FlowFixMe I don't really want to add it to the type since it shouldn't be used
  (l.className || l.css) && (console.error("It looks like you're using the css prop on Global, did you mean to use the styles prop instead?"), ER = !0);
  var d = l.styles, v = md([d], void 0, ae.useContext(gd)), g = ae.useRef();
  return yR(function() {
    var S = s.key + "-global", m = new s.sheet.constructor({
      key: S,
      nonce: s.sheet.nonce,
      container: s.sheet.container,
      speedy: s.sheet.isSpeedy
    }), R = !1, w = document.querySelector('style[data-emotion="' + S + " " + v.name + '"]');
    return s.sheet.tags.length && (m.before = s.sheet.tags[0]), w !== null && (R = !0, w.setAttribute("data-emotion", S), m.hydrate([w])), g.current = [m, R], function() {
      m.flush();
    };
  }, [s]), yR(function() {
    var S = g.current, m = S[0], R = S[1];
    if (R) {
      S[1] = !1;
      return;
    }
    if (v.next !== void 0 && Eg(s, v.next, !0), m.tags.length) {
      var w = m.tags[m.tags.length - 1].nextElementSibling;
      m.before = w, m.flush();
    }
    s.insert("", v, m, !1);
  }, [s, v.name]), null;
});
process.env.NODE_ENV !== "production" && (HL.displayName = "EmotionGlobal");
function IL() {
  for (var l = arguments.length, s = new Array(l), d = 0; d < l; d++)
    s[d] = arguments[d];
  return md(s);
}
var Xb = function() {
  var s = IL.apply(void 0, arguments), d = "animation-" + s.name;
  return {
    name: d,
    styles: "@keyframes " + d + "{" + s.styles + "}",
    anim: 1,
    toString: function() {
      return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
    }
  };
}, BL = function l(s) {
  for (var d = s.length, v = 0, g = ""; v < d; v++) {
    var S = s[v];
    if (S != null) {
      var m = void 0;
      switch (typeof S) {
        case "boolean":
          break;
        case "object": {
          if (Array.isArray(S))
            m = l(S);
          else {
            process.env.NODE_ENV !== "production" && S.styles !== void 0 && S.name !== void 0 && console.error("You have passed styles created with `css` from `@emotion/react` package to the `cx`.\n`cx` is meant to compose class names (strings) so you should convert those styles to a class name by passing them to the `css` received from <ClassNames/> component."), m = "";
            for (var R in S)
              S[R] && R && (m && (m += " "), m += R);
          }
          break;
        }
        default:
          m = S;
      }
      m && (g && (g += " "), g += m);
    }
  }
  return g;
};
function YL(l, s, d) {
  var v = [], g = Gb(l, v, d);
  return v.length < 2 ? d : g + s(v);
}
var WL = function(s) {
  var d = s.cache, v = s.serializedArr;
  return Qb(function() {
    for (var g = 0; g < v.length; g++)
      Eg(d, v[g], !1);
  }), null;
}, GL = /* @__PURE__ */ bg(function(l, s) {
  var d = !1, v = [], g = function() {
    if (d && process.env.NODE_ENV !== "production")
      throw new Error("css can only be used during render");
    for (var k = arguments.length, M = new Array(k), N = 0; N < k; N++)
      M[N] = arguments[N];
    var A = md(M, s.registered);
    return v.push(A), Sg(s, A, !1), s.key + "-" + A.name;
  }, S = function() {
    if (d && process.env.NODE_ENV !== "production")
      throw new Error("cx can only be used during render");
    for (var k = arguments.length, M = new Array(k), N = 0; N < k; N++)
      M[N] = arguments[N];
    return YL(s.registered, g, BL(M));
  }, m = {
    css: g,
    cx: S,
    theme: ae.useContext(gd)
  }, R = l.children(m);
  return d = !0, /* @__PURE__ */ ae.createElement(ae.Fragment, null, /* @__PURE__ */ ae.createElement(WL, {
    cache: s,
    serializedArr: v
  }), R);
});
process.env.NODE_ENV !== "production" && (GL.displayName = "EmotionClassNames");
if (process.env.NODE_ENV !== "production") {
  var bR = !0, qL = typeof jest < "u" || typeof vi < "u";
  if (bR && !qL) {
    var CR = (
      // $FlowIgnore
      typeof globalThis < "u" ? globalThis : bR ? window : global
    ), xR = "__EMOTION_REACT_" + VL.version.split(".")[0] + "__";
    CR[xR] && console.warn("You are loading @emotion/react when it is already loaded. Running multiple instances may cause problems. This can happen if multiple versions are used, or if multiple builds of the same version are used."), CR[xR] = !0;
  }
}
var QL = F2, KL = function(s) {
  return s !== "theme";
}, TR = function(s) {
  return typeof s == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  s.charCodeAt(0) > 96 ? QL : KL;
}, RR = function(s, d, v) {
  var g;
  if (d) {
    var S = d.shouldForwardProp;
    g = s.__emotion_forwardProp && S ? function(m) {
      return s.__emotion_forwardProp(m) && S(m);
    } : S;
  }
  return typeof g != "function" && v && (g = s.__emotion_forwardProp), g;
}, wR = `You have illegal escape sequence in your template literal, most likely inside content's property value.
Because you write your CSS inside a JavaScript string you actually have to do double escaping, so for example "content: '\\00d7';" should become "content: '\\\\00d7';".
You can read more about this here:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences`, XL = function(s) {
  var d = s.cache, v = s.serialized, g = s.isStringTag;
  return Sg(d, v, g), Qb(function() {
    return Eg(d, v, g);
  }), null;
}, ZL = function l(s, d) {
  if (process.env.NODE_ENV !== "production" && s === void 0)
    throw new Error(`You are trying to create a styled element with an undefined component.
You may have forgotten to import it.`);
  var v = s.__emotion_real === s, g = v && s.__emotion_base || s, S, m;
  d !== void 0 && (S = d.label, m = d.target);
  var R = RR(s, d, v), w = R || TR(g), k = !w("as");
  return function() {
    var M = arguments, N = v && s.__emotion_styles !== void 0 ? s.__emotion_styles.slice(0) : [];
    if (S !== void 0 && N.push("label:" + S + ";"), M[0] == null || M[0].raw === void 0)
      N.push.apply(N, M);
    else {
      process.env.NODE_ENV !== "production" && M[0][0] === void 0 && console.error(wR), N.push(M[0][0]);
      for (var A = M.length, V = 1; V < A; V++)
        process.env.NODE_ENV !== "production" && M[0][V] === void 0 && console.error(wR), N.push(M[V], M[0][V]);
    }
    var F = bg(function(P, H, le) {
      var de = k && P.as || g, K = "", J = [], D = P;
      if (P.theme == null) {
        D = {};
        for (var ve in P)
          D[ve] = P[ve];
        D.theme = ae.useContext(gd);
      }
      typeof P.className == "string" ? K = Gb(H.registered, J, P.className) : P.className != null && (K = P.className + " ");
      var ie = md(N.concat(J), H.registered, D);
      K += H.key + "-" + ie.name, m !== void 0 && (K += " " + m);
      var Ke = k && R === void 0 ? TR(de) : w, ot = {};
      for (var De in P)
        k && De === "as" || // $FlowFixMe
        Ke(De) && (ot[De] = P[De]);
      return ot.className = K, ot.ref = le, /* @__PURE__ */ ae.createElement(ae.Fragment, null, /* @__PURE__ */ ae.createElement(XL, {
        cache: H,
        serialized: ie,
        isStringTag: typeof de == "string"
      }), /* @__PURE__ */ ae.createElement(de, ot));
    });
    return F.displayName = S !== void 0 ? S : "Styled(" + (typeof g == "string" ? g : g.displayName || g.name || "Component") + ")", F.defaultProps = s.defaultProps, F.__emotion_real = F, F.__emotion_base = g, F.__emotion_styles = N, F.__emotion_forwardProp = R, Object.defineProperty(F, "toString", {
      value: function() {
        return m === void 0 && process.env.NODE_ENV !== "production" ? "NO_COMPONENT_SELECTOR" : "." + m;
      }
    }), F.withComponent = function(P, H) {
      return l(P, fe({}, d, H, {
        shouldForwardProp: RR(F, H, !0)
      })).apply(void 0, N);
    }, F;
  };
}, JL = [
  "a",
  "abbr",
  "address",
  "area",
  "article",
  "aside",
  "audio",
  "b",
  "base",
  "bdi",
  "bdo",
  "big",
  "blockquote",
  "body",
  "br",
  "button",
  "canvas",
  "caption",
  "cite",
  "code",
  "col",
  "colgroup",
  "data",
  "datalist",
  "dd",
  "del",
  "details",
  "dfn",
  "dialog",
  "div",
  "dl",
  "dt",
  "em",
  "embed",
  "fieldset",
  "figcaption",
  "figure",
  "footer",
  "form",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "head",
  "header",
  "hgroup",
  "hr",
  "html",
  "i",
  "iframe",
  "img",
  "input",
  "ins",
  "kbd",
  "keygen",
  "label",
  "legend",
  "li",
  "link",
  "main",
  "map",
  "mark",
  "marquee",
  "menu",
  "menuitem",
  "meta",
  "meter",
  "nav",
  "noscript",
  "object",
  "ol",
  "optgroup",
  "option",
  "output",
  "p",
  "param",
  "picture",
  "pre",
  "progress",
  "q",
  "rp",
  "rt",
  "ruby",
  "s",
  "samp",
  "script",
  "section",
  "select",
  "small",
  "source",
  "span",
  "strong",
  "style",
  "sub",
  "summary",
  "sup",
  "table",
  "tbody",
  "td",
  "textarea",
  "tfoot",
  "th",
  "thead",
  "time",
  "title",
  "tr",
  "track",
  "u",
  "ul",
  "var",
  "video",
  "wbr",
  // SVG
  "circle",
  "clipPath",
  "defs",
  "ellipse",
  "foreignObject",
  "g",
  "image",
  "line",
  "linearGradient",
  "mask",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "radialGradient",
  "rect",
  "stop",
  "svg",
  "text",
  "tspan"
], Ab = ZL.bind();
JL.forEach(function(l) {
  Ab[l] = Ab(l);
});
/**
 * @mui/styled-engine v5.15.9
 *
 * @license MIT
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
function eA(l, s) {
  const d = Ab(l, s);
  return process.env.NODE_ENV !== "production" ? (...v) => {
    const g = typeof l == "string" ? `"${l}"` : "component";
    return v.length === 0 ? console.error([`MUI: Seems like you called \`styled(${g})()\` without a \`style\` argument.`, 'You must provide a `styles` argument: `styled("div")(styleYouForgotToPass)`.'].join(`
`)) : v.some((S) => S === void 0) && console.error(`MUI: the styled(${g})(...args) API requires all its args to be defined.`), d(...v);
  } : d;
}
const tA = (l, s) => {
  Array.isArray(l.__emotion_styles) && (l.__emotion_styles = s(l.__emotion_styles));
}, nA = ["values", "unit", "step"], rA = (l) => {
  const s = Object.keys(l).map((d) => ({
    key: d,
    val: l[d]
  })) || [];
  return s.sort((d, v) => d.val - v.val), s.reduce((d, v) => fe({}, d, {
    [v.key]: v.val
  }), {});
};
function aA(l) {
  const {
    // The breakpoint **start** at this value.
    // For instance with the first breakpoint xs: [xs, sm).
    values: s = {
      xs: 0,
      // phone
      sm: 600,
      // tablet
      md: 900,
      // small laptop
      lg: 1200,
      // desktop
      xl: 1536
      // large screen
    },
    unit: d = "px",
    step: v = 5
  } = l, g = Tn(l, nA), S = rA(s), m = Object.keys(S);
  function R(A) {
    return `@media (min-width:${typeof s[A] == "number" ? s[A] : A}${d})`;
  }
  function w(A) {
    return `@media (max-width:${(typeof s[A] == "number" ? s[A] : A) - v / 100}${d})`;
  }
  function k(A, V) {
    const F = m.indexOf(V);
    return `@media (min-width:${typeof s[A] == "number" ? s[A] : A}${d}) and (max-width:${(F !== -1 && typeof s[m[F]] == "number" ? s[m[F]] : V) - v / 100}${d})`;
  }
  function M(A) {
    return m.indexOf(A) + 1 < m.length ? k(A, m[m.indexOf(A) + 1]) : R(A);
  }
  function N(A) {
    const V = m.indexOf(A);
    return V === 0 ? R(m[1]) : V === m.length - 1 ? w(m[V]) : k(A, m[m.indexOf(A) + 1]).replace("@media", "@media not all and");
  }
  return fe({
    keys: m,
    values: S,
    up: R,
    down: w,
    between: k,
    only: M,
    not: N,
    unit: d
  }, g);
}
const iA = {
  borderRadius: 4
}, oA = iA, lA = process.env.NODE_ENV !== "production" ? x.oneOfType([x.number, x.string, x.object, x.array]) : {}, Gu = lA;
function Fv(l, s) {
  return s ? Fl(l, s, {
    clone: !1
    // No need to clone deep, it's way faster.
  }) : l;
}
const Zb = {
  xs: 0,
  // phone
  sm: 600,
  // tablet
  md: 900,
  // small laptop
  lg: 1200,
  // desktop
  xl: 1536
  // large screen
}, _R = {
  // Sorted ASC by size. That's important.
  // It can't be configured as it's used statically for propTypes.
  keys: ["xs", "sm", "md", "lg", "xl"],
  up: (l) => `@media (min-width:${Zb[l]}px)`
};
function Vl(l, s, d) {
  const v = l.theme || {};
  if (Array.isArray(s)) {
    const S = v.breakpoints || _R;
    return s.reduce((m, R, w) => (m[S.up(S.keys[w])] = d(s[w]), m), {});
  }
  if (typeof s == "object") {
    const S = v.breakpoints || _R;
    return Object.keys(s).reduce((m, R) => {
      if (Object.keys(S.values || Zb).indexOf(R) !== -1) {
        const w = S.up(R);
        m[w] = d(s[R], R);
      } else {
        const w = R;
        m[w] = s[w];
      }
      return m;
    }, {});
  }
  return d(s);
}
function uA(l = {}) {
  var s;
  return ((s = l.keys) == null ? void 0 : s.reduce((v, g) => {
    const S = l.up(g);
    return v[S] = {}, v;
  }, {})) || {};
}
function sA(l, s) {
  return l.reduce((d, v) => {
    const g = d[v];
    return (!g || Object.keys(g).length === 0) && delete d[v], d;
  }, s);
}
function Cg(l, s, d = !0) {
  if (!s || typeof s != "string")
    return null;
  if (l && l.vars && d) {
    const v = `vars.${s}`.split(".").reduce((g, S) => g && g[S] ? g[S] : null, l);
    if (v != null)
      return v;
  }
  return s.split(".").reduce((v, g) => v && v[g] != null ? v[g] : null, l);
}
function sg(l, s, d, v = d) {
  let g;
  return typeof l == "function" ? g = l(d) : Array.isArray(l) ? g = l[d] || v : g = Cg(l, d) || v, s && (g = s(g, v, l)), g;
}
function Kn(l) {
  const {
    prop: s,
    cssProperty: d = l.prop,
    themeKey: v,
    transform: g
  } = l, S = (m) => {
    if (m[s] == null)
      return null;
    const R = m[s], w = m.theme, k = Cg(w, v) || {};
    return Vl(m, R, (N) => {
      let A = sg(k, g, N);
      return N === A && typeof N == "string" && (A = sg(k, g, `${s}${N === "default" ? "" : Qn(N)}`, N)), d === !1 ? A : {
        [d]: A
      };
    });
  };
  return S.propTypes = process.env.NODE_ENV !== "production" ? {
    [s]: Gu
  } : {}, S.filterProps = [s], S;
}
function cA(l) {
  const s = {};
  return (d) => (s[d] === void 0 && (s[d] = l(d)), s[d]);
}
const fA = {
  m: "margin",
  p: "padding"
}, dA = {
  t: "Top",
  r: "Right",
  b: "Bottom",
  l: "Left",
  x: ["Left", "Right"],
  y: ["Top", "Bottom"]
}, kR = {
  marginX: "mx",
  marginY: "my",
  paddingX: "px",
  paddingY: "py"
}, pA = cA((l) => {
  if (l.length > 2)
    if (kR[l])
      l = kR[l];
    else
      return [l];
  const [s, d] = l.split(""), v = fA[s], g = dA[d] || "";
  return Array.isArray(g) ? g.map((S) => v + S) : [v + g];
}), xg = ["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"], Tg = ["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"], vA = [...xg, ...Tg];
function Gv(l, s, d, v) {
  var g;
  const S = (g = Cg(l, s, !1)) != null ? g : d;
  return typeof S == "number" ? (m) => typeof m == "string" ? m : (process.env.NODE_ENV !== "production" && typeof m != "number" && console.error(`MUI: Expected ${v} argument to be a number or a string, got ${m}.`), S * m) : Array.isArray(S) ? (m) => typeof m == "string" ? m : (process.env.NODE_ENV !== "production" && (Number.isInteger(m) ? m > S.length - 1 && console.error([`MUI: The value provided (${m}) overflows.`, `The supported values are: ${JSON.stringify(S)}.`, `${m} > ${S.length - 1}, you need to add the missing values.`].join(`
`)) : console.error([`MUI: The \`theme.${s}\` array type cannot be combined with non integer values.You should either use an integer value that can be used as index, or define the \`theme.${s}\` as a number.`].join(`
`))), S[m]) : typeof S == "function" ? S : (process.env.NODE_ENV !== "production" && console.error([`MUI: The \`theme.${s}\` value (${S}) is invalid.`, "It should be a number, an array or a function."].join(`
`)), () => {
  });
}
function _w(l) {
  return Gv(l, "spacing", 8, "spacing");
}
function qv(l, s) {
  if (typeof s == "string" || s == null)
    return s;
  const d = Math.abs(s), v = l(d);
  return s >= 0 ? v : typeof v == "number" ? -v : `-${v}`;
}
function hA(l, s) {
  return (d) => l.reduce((v, g) => (v[g] = qv(s, d), v), {});
}
function mA(l, s, d, v) {
  if (s.indexOf(d) === -1)
    return null;
  const g = pA(d), S = hA(g, v), m = l[d];
  return Vl(l, m, S);
}
function kw(l, s) {
  const d = _w(l.theme);
  return Object.keys(l).map((v) => mA(l, s, v, d)).reduce(Fv, {});
}
function $n(l) {
  return kw(l, xg);
}
$n.propTypes = process.env.NODE_ENV !== "production" ? xg.reduce((l, s) => (l[s] = Gu, l), {}) : {};
$n.filterProps = xg;
function Fn(l) {
  return kw(l, Tg);
}
Fn.propTypes = process.env.NODE_ENV !== "production" ? Tg.reduce((l, s) => (l[s] = Gu, l), {}) : {};
Fn.filterProps = Tg;
process.env.NODE_ENV !== "production" && vA.reduce((l, s) => (l[s] = Gu, l), {});
function yA(l = 8) {
  if (l.mui)
    return l;
  const s = _w({
    spacing: l
  }), d = (...v) => (process.env.NODE_ENV !== "production" && (v.length <= 4 || console.error(`MUI: Too many arguments provided, expected between 0 and 4, got ${v.length}`)), (v.length === 0 ? [1] : v).map((S) => {
    const m = s(S);
    return typeof m == "number" ? `${m}px` : m;
  }).join(" "));
  return d.mui = !0, d;
}
function Rg(...l) {
  const s = l.reduce((v, g) => (g.filterProps.forEach((S) => {
    v[S] = g;
  }), v), {}), d = (v) => Object.keys(v).reduce((g, S) => s[S] ? Fv(g, s[S](v)) : g, {});
  return d.propTypes = process.env.NODE_ENV !== "production" ? l.reduce((v, g) => Object.assign(v, g.propTypes), {}) : {}, d.filterProps = l.reduce((v, g) => v.concat(g.filterProps), []), d;
}
function _i(l) {
  return typeof l != "number" ? l : `${l}px solid`;
}
function Oi(l, s) {
  return Kn({
    prop: l,
    themeKey: "borders",
    transform: s
  });
}
const gA = Oi("border", _i), SA = Oi("borderTop", _i), EA = Oi("borderRight", _i), bA = Oi("borderBottom", _i), CA = Oi("borderLeft", _i), xA = Oi("borderColor"), TA = Oi("borderTopColor"), RA = Oi("borderRightColor"), wA = Oi("borderBottomColor"), _A = Oi("borderLeftColor"), kA = Oi("outline", _i), OA = Oi("outlineColor"), wg = (l) => {
  if (l.borderRadius !== void 0 && l.borderRadius !== null) {
    const s = Gv(l.theme, "shape.borderRadius", 4, "borderRadius"), d = (v) => ({
      borderRadius: qv(s, v)
    });
    return Vl(l, l.borderRadius, d);
  }
  return null;
};
wg.propTypes = process.env.NODE_ENV !== "production" ? {
  borderRadius: Gu
} : {};
wg.filterProps = ["borderRadius"];
Rg(gA, SA, EA, bA, CA, xA, TA, RA, wA, _A, wg, kA, OA);
const _g = (l) => {
  if (l.gap !== void 0 && l.gap !== null) {
    const s = Gv(l.theme, "spacing", 8, "gap"), d = (v) => ({
      gap: qv(s, v)
    });
    return Vl(l, l.gap, d);
  }
  return null;
};
_g.propTypes = process.env.NODE_ENV !== "production" ? {
  gap: Gu
} : {};
_g.filterProps = ["gap"];
const kg = (l) => {
  if (l.columnGap !== void 0 && l.columnGap !== null) {
    const s = Gv(l.theme, "spacing", 8, "columnGap"), d = (v) => ({
      columnGap: qv(s, v)
    });
    return Vl(l, l.columnGap, d);
  }
  return null;
};
kg.propTypes = process.env.NODE_ENV !== "production" ? {
  columnGap: Gu
} : {};
kg.filterProps = ["columnGap"];
const Og = (l) => {
  if (l.rowGap !== void 0 && l.rowGap !== null) {
    const s = Gv(l.theme, "spacing", 8, "rowGap"), d = (v) => ({
      rowGap: qv(s, v)
    });
    return Vl(l, l.rowGap, d);
  }
  return null;
};
Og.propTypes = process.env.NODE_ENV !== "production" ? {
  rowGap: Gu
} : {};
Og.filterProps = ["rowGap"];
const DA = Kn({
  prop: "gridColumn"
}), NA = Kn({
  prop: "gridRow"
}), MA = Kn({
  prop: "gridAutoFlow"
}), LA = Kn({
  prop: "gridAutoColumns"
}), AA = Kn({
  prop: "gridAutoRows"
}), zA = Kn({
  prop: "gridTemplateColumns"
}), PA = Kn({
  prop: "gridTemplateRows"
}), UA = Kn({
  prop: "gridTemplateAreas"
}), jA = Kn({
  prop: "gridArea"
});
Rg(_g, kg, Og, DA, NA, MA, LA, AA, zA, PA, UA, jA);
function pd(l, s) {
  return s === "grey" ? s : l;
}
const $A = Kn({
  prop: "color",
  themeKey: "palette",
  transform: pd
}), FA = Kn({
  prop: "bgcolor",
  cssProperty: "backgroundColor",
  themeKey: "palette",
  transform: pd
}), VA = Kn({
  prop: "backgroundColor",
  themeKey: "palette",
  transform: pd
});
Rg($A, FA, VA);
function li(l) {
  return l <= 1 && l !== 0 ? `${l * 100}%` : l;
}
const HA = Kn({
  prop: "width",
  transform: li
}), Jb = (l) => {
  if (l.maxWidth !== void 0 && l.maxWidth !== null) {
    const s = (d) => {
      var v, g;
      const S = ((v = l.theme) == null || (v = v.breakpoints) == null || (v = v.values) == null ? void 0 : v[d]) || Zb[d];
      return S ? ((g = l.theme) == null || (g = g.breakpoints) == null ? void 0 : g.unit) !== "px" ? {
        maxWidth: `${S}${l.theme.breakpoints.unit}`
      } : {
        maxWidth: S
      } : {
        maxWidth: li(d)
      };
    };
    return Vl(l, l.maxWidth, s);
  }
  return null;
};
Jb.filterProps = ["maxWidth"];
const IA = Kn({
  prop: "minWidth",
  transform: li
}), BA = Kn({
  prop: "height",
  transform: li
}), YA = Kn({
  prop: "maxHeight",
  transform: li
}), WA = Kn({
  prop: "minHeight",
  transform: li
});
Kn({
  prop: "size",
  cssProperty: "width",
  transform: li
});
Kn({
  prop: "size",
  cssProperty: "height",
  transform: li
});
const GA = Kn({
  prop: "boxSizing"
});
Rg(HA, Jb, IA, BA, YA, WA, GA);
const qA = {
  // borders
  border: {
    themeKey: "borders",
    transform: _i
  },
  borderTop: {
    themeKey: "borders",
    transform: _i
  },
  borderRight: {
    themeKey: "borders",
    transform: _i
  },
  borderBottom: {
    themeKey: "borders",
    transform: _i
  },
  borderLeft: {
    themeKey: "borders",
    transform: _i
  },
  borderColor: {
    themeKey: "palette"
  },
  borderTopColor: {
    themeKey: "palette"
  },
  borderRightColor: {
    themeKey: "palette"
  },
  borderBottomColor: {
    themeKey: "palette"
  },
  borderLeftColor: {
    themeKey: "palette"
  },
  outline: {
    themeKey: "borders",
    transform: _i
  },
  outlineColor: {
    themeKey: "palette"
  },
  borderRadius: {
    themeKey: "shape.borderRadius",
    style: wg
  },
  // palette
  color: {
    themeKey: "palette",
    transform: pd
  },
  bgcolor: {
    themeKey: "palette",
    cssProperty: "backgroundColor",
    transform: pd
  },
  backgroundColor: {
    themeKey: "palette",
    transform: pd
  },
  // spacing
  p: {
    style: Fn
  },
  pt: {
    style: Fn
  },
  pr: {
    style: Fn
  },
  pb: {
    style: Fn
  },
  pl: {
    style: Fn
  },
  px: {
    style: Fn
  },
  py: {
    style: Fn
  },
  padding: {
    style: Fn
  },
  paddingTop: {
    style: Fn
  },
  paddingRight: {
    style: Fn
  },
  paddingBottom: {
    style: Fn
  },
  paddingLeft: {
    style: Fn
  },
  paddingX: {
    style: Fn
  },
  paddingY: {
    style: Fn
  },
  paddingInline: {
    style: Fn
  },
  paddingInlineStart: {
    style: Fn
  },
  paddingInlineEnd: {
    style: Fn
  },
  paddingBlock: {
    style: Fn
  },
  paddingBlockStart: {
    style: Fn
  },
  paddingBlockEnd: {
    style: Fn
  },
  m: {
    style: $n
  },
  mt: {
    style: $n
  },
  mr: {
    style: $n
  },
  mb: {
    style: $n
  },
  ml: {
    style: $n
  },
  mx: {
    style: $n
  },
  my: {
    style: $n
  },
  margin: {
    style: $n
  },
  marginTop: {
    style: $n
  },
  marginRight: {
    style: $n
  },
  marginBottom: {
    style: $n
  },
  marginLeft: {
    style: $n
  },
  marginX: {
    style: $n
  },
  marginY: {
    style: $n
  },
  marginInline: {
    style: $n
  },
  marginInlineStart: {
    style: $n
  },
  marginInlineEnd: {
    style: $n
  },
  marginBlock: {
    style: $n
  },
  marginBlockStart: {
    style: $n
  },
  marginBlockEnd: {
    style: $n
  },
  // display
  displayPrint: {
    cssProperty: !1,
    transform: (l) => ({
      "@media print": {
        display: l
      }
    })
  },
  display: {},
  overflow: {},
  textOverflow: {},
  visibility: {},
  whiteSpace: {},
  // flexbox
  flexBasis: {},
  flexDirection: {},
  flexWrap: {},
  justifyContent: {},
  alignItems: {},
  alignContent: {},
  order: {},
  flex: {},
  flexGrow: {},
  flexShrink: {},
  alignSelf: {},
  justifyItems: {},
  justifySelf: {},
  // grid
  gap: {
    style: _g
  },
  rowGap: {
    style: Og
  },
  columnGap: {
    style: kg
  },
  gridColumn: {},
  gridRow: {},
  gridAutoFlow: {},
  gridAutoColumns: {},
  gridAutoRows: {},
  gridTemplateColumns: {},
  gridTemplateRows: {},
  gridTemplateAreas: {},
  gridArea: {},
  // positions
  position: {},
  zIndex: {
    themeKey: "zIndex"
  },
  top: {},
  right: {},
  bottom: {},
  left: {},
  // shadows
  boxShadow: {
    themeKey: "shadows"
  },
  // sizing
  width: {
    transform: li
  },
  maxWidth: {
    style: Jb
  },
  minWidth: {
    transform: li
  },
  height: {
    transform: li
  },
  maxHeight: {
    transform: li
  },
  minHeight: {
    transform: li
  },
  boxSizing: {},
  // typography
  fontFamily: {
    themeKey: "typography"
  },
  fontSize: {
    themeKey: "typography"
  },
  fontStyle: {
    themeKey: "typography"
  },
  fontWeight: {
    themeKey: "typography"
  },
  letterSpacing: {},
  textTransform: {},
  lineHeight: {},
  textAlign: {},
  typography: {
    cssProperty: !1,
    themeKey: "typography"
  }
}, Dg = qA;
function QA(...l) {
  const s = l.reduce((v, g) => v.concat(Object.keys(g)), []), d = new Set(s);
  return l.every((v) => d.size === Object.keys(v).length);
}
function KA(l, s) {
  return typeof l == "function" ? l(s) : l;
}
function XA() {
  function l(d, v, g, S) {
    const m = {
      [d]: v,
      theme: g
    }, R = S[d];
    if (!R)
      return {
        [d]: v
      };
    const {
      cssProperty: w = d,
      themeKey: k,
      transform: M,
      style: N
    } = R;
    if (v == null)
      return null;
    if (k === "typography" && v === "inherit")
      return {
        [d]: v
      };
    const A = Cg(g, k) || {};
    return N ? N(m) : Vl(m, v, (F) => {
      let P = sg(A, M, F);
      return F === P && typeof F == "string" && (P = sg(A, M, `${d}${F === "default" ? "" : Qn(F)}`, F)), w === !1 ? P : {
        [w]: P
      };
    });
  }
  function s(d) {
    var v;
    const {
      sx: g,
      theme: S = {}
    } = d || {};
    if (!g)
      return null;
    const m = (v = S.unstable_sxConfig) != null ? v : Dg;
    function R(w) {
      let k = w;
      if (typeof w == "function")
        k = w(S);
      else if (typeof w != "object")
        return w;
      if (!k)
        return null;
      const M = uA(S.breakpoints), N = Object.keys(M);
      let A = M;
      return Object.keys(k).forEach((V) => {
        const F = KA(k[V], S);
        if (F != null)
          if (typeof F == "object")
            if (m[V])
              A = Fv(A, l(V, F, S, m));
            else {
              const P = Vl({
                theme: S
              }, F, (H) => ({
                [V]: H
              }));
              QA(P, F) ? A[V] = s({
                sx: F,
                theme: S
              }) : A = Fv(A, P);
            }
          else
            A = Fv(A, l(V, F, S, m));
      }), sA(N, A);
    }
    return Array.isArray(g) ? g.map(R) : R(g);
  }
  return s;
}
const Ng = XA();
Ng.filterProps = ["sx"];
function ZA(l, s) {
  const d = this;
  return d.vars && typeof d.getColorSchemeSelector == "function" ? {
    [d.getColorSchemeSelector(l).replace(/(\[[^\]]+\])/, "*:where($1)")]: s
  } : d.palette.mode === l ? s : {};
}
const JA = ["breakpoints", "palette", "spacing", "shape"];
function e1(l = {}, ...s) {
  const {
    breakpoints: d = {},
    palette: v = {},
    spacing: g,
    shape: S = {}
  } = l, m = Tn(l, JA), R = aA(d), w = yA(g);
  let k = Fl({
    breakpoints: R,
    direction: "ltr",
    components: {},
    // Inject component definitions.
    palette: fe({
      mode: "light"
    }, v),
    spacing: w,
    shape: fe({}, oA, S)
  }, m);
  return k.applyStyles = ZA, k = s.reduce((M, N) => Fl(M, N), k), k.unstable_sxConfig = fe({}, Dg, m == null ? void 0 : m.unstable_sxConfig), k.unstable_sx = function(N) {
    return Ng({
      sx: N,
      theme: this
    });
  }, k;
}
function ez(l) {
  return Object.keys(l).length === 0;
}
function tz(l = null) {
  const s = ae.useContext(gd);
  return !s || ez(s) ? l : s;
}
const nz = e1();
function Ow(l = nz) {
  return tz(l);
}
const rz = ["sx"], az = (l) => {
  var s, d;
  const v = {
    systemProps: {},
    otherProps: {}
  }, g = (s = l == null || (d = l.theme) == null ? void 0 : d.unstable_sxConfig) != null ? s : Dg;
  return Object.keys(l).forEach((S) => {
    g[S] ? v.systemProps[S] = l[S] : v.otherProps[S] = l[S];
  }), v;
};
function iz(l) {
  const {
    sx: s
  } = l, d = Tn(l, rz), {
    systemProps: v,
    otherProps: g
  } = az(d);
  let S;
  return Array.isArray(s) ? S = [v, ...s] : typeof s == "function" ? S = (...m) => {
    const R = s(...m);
    return Yu(R) ? fe({}, v, R) : v;
  } : S = fe({}, v, s), fe({}, g, {
    sx: S
  });
}
const oz = ["ownerState"], lz = ["variants"], uz = ["name", "slot", "skipVariantsResolver", "skipSx", "overridesResolver"];
function sz(l) {
  return Object.keys(l).length === 0;
}
function cz(l) {
  return typeof l == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  l.charCodeAt(0) > 96;
}
function ig(l) {
  return l !== "ownerState" && l !== "theme" && l !== "sx" && l !== "as";
}
const fz = e1(), OR = (l) => l && l.charAt(0).toLowerCase() + l.slice(1);
function Ky({
  defaultTheme: l,
  theme: s,
  themeId: d
}) {
  return sz(s) ? l : s[d] || s;
}
function dz(l) {
  return l ? (s, d) => d[l] : null;
}
function og(l, s) {
  let {
    ownerState: d
  } = s, v = Tn(s, oz);
  const g = typeof l == "function" ? l(fe({
    ownerState: d
  }, v)) : l;
  if (Array.isArray(g))
    return g.flatMap((S) => og(S, fe({
      ownerState: d
    }, v)));
  if (g && typeof g == "object" && Array.isArray(g.variants)) {
    const {
      variants: S = []
    } = g;
    let R = Tn(g, lz);
    return S.forEach((w) => {
      let k = !0;
      typeof w.props == "function" ? k = w.props(fe({
        ownerState: d
      }, v)) : Object.keys(w.props).forEach((M) => {
        (d == null ? void 0 : d[M]) !== w.props[M] && v[M] !== w.props[M] && (k = !1);
      }), k && (Array.isArray(R) || (R = [R]), R.push(typeof w.style == "function" ? w.style(fe({
        ownerState: d
      }, v)) : w.style));
    }), R;
  }
  return g;
}
function pz(l = {}) {
  const {
    themeId: s,
    defaultTheme: d = fz,
    rootShouldForwardProp: v = ig,
    slotShouldForwardProp: g = ig
  } = l, S = (m) => Ng(fe({}, m, {
    theme: Ky(fe({}, m, {
      defaultTheme: d,
      themeId: s
    }))
  }));
  return S.__mui_systemSx = !0, (m, R = {}) => {
    tA(m, (D) => D.filter((ve) => !(ve != null && ve.__mui_systemSx)));
    const {
      name: w,
      slot: k,
      skipVariantsResolver: M,
      skipSx: N,
      // TODO v6: remove `lowercaseFirstLetter()` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      overridesResolver: A = dz(OR(k))
    } = R, V = Tn(R, uz), F = M !== void 0 ? M : (
      // TODO v6: remove `Root` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      k && k !== "Root" && k !== "root" || !1
    ), P = N || !1;
    let H;
    process.env.NODE_ENV !== "production" && w && (H = `${w}-${OR(k || "Root")}`);
    let le = ig;
    k === "Root" || k === "root" ? le = v : k ? le = g : cz(m) && (le = void 0);
    const de = eA(m, fe({
      shouldForwardProp: le,
      label: H
    }, V)), K = (D) => typeof D == "function" && D.__emotion_real !== D || Yu(D) ? (ve) => og(D, fe({}, ve, {
      theme: Ky({
        theme: ve.theme,
        defaultTheme: d,
        themeId: s
      })
    })) : D, J = (D, ...ve) => {
      let ie = K(D);
      const Ke = ve ? ve.map(K) : [];
      w && A && Ke.push((_e) => {
        const Ye = Ky(fe({}, _e, {
          defaultTheme: d,
          themeId: s
        }));
        if (!Ye.components || !Ye.components[w] || !Ye.components[w].styleOverrides)
          return null;
        const Ee = Ye.components[w].styleOverrides, ge = {};
        return Object.entries(Ee).forEach(([nt, be]) => {
          ge[nt] = og(be, fe({}, _e, {
            theme: Ye
          }));
        }), A(_e, ge);
      }), w && !F && Ke.push((_e) => {
        var Ye;
        const Ee = Ky(fe({}, _e, {
          defaultTheme: d,
          themeId: s
        })), ge = Ee == null || (Ye = Ee.components) == null || (Ye = Ye[w]) == null ? void 0 : Ye.variants;
        return og({
          variants: ge
        }, fe({}, _e, {
          theme: Ee
        }));
      }), P || Ke.push(S);
      const ot = Ke.length - ve.length;
      if (Array.isArray(D) && ot > 0) {
        const _e = new Array(ot).fill("");
        ie = [...D, ..._e], ie.raw = [...D.raw, ..._e];
      }
      const De = de(ie, ...Ke);
      if (process.env.NODE_ENV !== "production") {
        let _e;
        w && (_e = `${w}${Qn(k || "")}`), _e === void 0 && (_e = `Styled(${p2(m)})`), De.displayName = _e;
      }
      return m.muiName && (De.muiName = m.muiName), De;
    };
    return de.withConfig && (J.withConfig = de.withConfig), J;
  };
}
function vz(l) {
  const {
    theme: s,
    name: d,
    props: v
  } = l;
  return !s || !s.components || !s.components[d] || !s.components[d].defaultProps ? v : Hb(s.components[d].defaultProps, v);
}
function hz({
  props: l,
  name: s,
  defaultTheme: d,
  themeId: v
}) {
  let g = Ow(d);
  return v && (g = g[v] || g), vz({
    theme: g,
    name: s,
    props: l
  });
}
function t1(l, s = 0, d = 1) {
  return process.env.NODE_ENV !== "production" && (l < s || l > d) && console.error(`MUI: The value provided ${l} is out of range [${s}, ${d}].`), j2(l, s, d);
}
function mz(l) {
  l = l.slice(1);
  const s = new RegExp(`.{1,${l.length >= 6 ? 2 : 1}}`, "g");
  let d = l.match(s);
  return d && d[0].length === 1 && (d = d.map((v) => v + v)), d ? `rgb${d.length === 4 ? "a" : ""}(${d.map((v, g) => g < 3 ? parseInt(v, 16) : Math.round(parseInt(v, 16) / 255 * 1e3) / 1e3).join(", ")})` : "";
}
function lc(l) {
  if (l.type)
    return l;
  if (l.charAt(0) === "#")
    return lc(mz(l));
  const s = l.indexOf("("), d = l.substring(0, s);
  if (["rgb", "rgba", "hsl", "hsla", "color"].indexOf(d) === -1)
    throw new Error(process.env.NODE_ENV !== "production" ? `MUI: Unsupported \`${l}\` color.
The following formats are supported: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().` : vd(9, l));
  let v = l.substring(s + 1, l.length - 1), g;
  if (d === "color") {
    if (v = v.split(" "), g = v.shift(), v.length === 4 && v[3].charAt(0) === "/" && (v[3] = v[3].slice(1)), ["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].indexOf(g) === -1)
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: unsupported \`${g}\` color space.
The following color spaces are supported: srgb, display-p3, a98-rgb, prophoto-rgb, rec-2020.` : vd(10, g));
  } else
    v = v.split(",");
  return v = v.map((S) => parseFloat(S)), {
    type: d,
    values: v,
    colorSpace: g
  };
}
function Mg(l) {
  const {
    type: s,
    colorSpace: d
  } = l;
  let {
    values: v
  } = l;
  return s.indexOf("rgb") !== -1 ? v = v.map((g, S) => S < 3 ? parseInt(g, 10) : g) : s.indexOf("hsl") !== -1 && (v[1] = `${v[1]}%`, v[2] = `${v[2]}%`), s.indexOf("color") !== -1 ? v = `${d} ${v.join(" ")}` : v = `${v.join(", ")}`, `${s}(${v})`;
}
function yz(l) {
  l = lc(l);
  const {
    values: s
  } = l, d = s[0], v = s[1] / 100, g = s[2] / 100, S = v * Math.min(g, 1 - g), m = (k, M = (k + d / 30) % 12) => g - S * Math.max(Math.min(M - 3, 9 - M, 1), -1);
  let R = "rgb";
  const w = [Math.round(m(0) * 255), Math.round(m(8) * 255), Math.round(m(4) * 255)];
  return l.type === "hsla" && (R += "a", w.push(s[3])), Mg({
    type: R,
    values: w
  });
}
function DR(l) {
  l = lc(l);
  let s = l.type === "hsl" || l.type === "hsla" ? lc(yz(l)).values : l.values;
  return s = s.map((d) => (l.type !== "color" && (d /= 255), d <= 0.03928 ? d / 12.92 : ((d + 0.055) / 1.055) ** 2.4)), Number((0.2126 * s[0] + 0.7152 * s[1] + 0.0722 * s[2]).toFixed(3));
}
function NR(l, s) {
  const d = DR(l), v = DR(s);
  return (Math.max(d, v) + 0.05) / (Math.min(d, v) + 0.05);
}
function fd(l, s) {
  return l = lc(l), s = t1(s), (l.type === "rgb" || l.type === "hsl") && (l.type += "a"), l.type === "color" ? l.values[3] = `/${s}` : l.values[3] = s, Mg(l);
}
function gz(l, s) {
  if (l = lc(l), s = t1(s), l.type.indexOf("hsl") !== -1)
    l.values[2] *= 1 - s;
  else if (l.type.indexOf("rgb") !== -1 || l.type.indexOf("color") !== -1)
    for (let d = 0; d < 3; d += 1)
      l.values[d] *= 1 - s;
  return Mg(l);
}
function Sz(l, s) {
  if (l = lc(l), s = t1(s), l.type.indexOf("hsl") !== -1)
    l.values[2] += (100 - l.values[2]) * s;
  else if (l.type.indexOf("rgb") !== -1)
    for (let d = 0; d < 3; d += 1)
      l.values[d] += (255 - l.values[d]) * s;
  else if (l.type.indexOf("color") !== -1)
    for (let d = 0; d < 3; d += 1)
      l.values[d] += (1 - l.values[d]) * s;
  return Mg(l);
}
function Ez(l, s) {
  return fe({
    toolbar: {
      minHeight: 56,
      [l.up("xs")]: {
        "@media (orientation: landscape)": {
          minHeight: 48
        }
      },
      [l.up("sm")]: {
        minHeight: 64
      }
    }
  }, s);
}
const bz = {
  black: "#000",
  white: "#fff"
}, Yv = bz, Cz = {
  50: "#fafafa",
  100: "#f5f5f5",
  200: "#eeeeee",
  300: "#e0e0e0",
  400: "#bdbdbd",
  500: "#9e9e9e",
  600: "#757575",
  700: "#616161",
  800: "#424242",
  900: "#212121",
  A100: "#f5f5f5",
  A200: "#eeeeee",
  A400: "#bdbdbd",
  A700: "#616161"
}, xz = Cz, Tz = {
  50: "#f3e5f5",
  100: "#e1bee7",
  200: "#ce93d8",
  300: "#ba68c8",
  400: "#ab47bc",
  500: "#9c27b0",
  600: "#8e24aa",
  700: "#7b1fa2",
  800: "#6a1b9a",
  900: "#4a148c",
  A100: "#ea80fc",
  A200: "#e040fb",
  A400: "#d500f9",
  A700: "#aa00ff"
}, rd = Tz, Rz = {
  50: "#ffebee",
  100: "#ffcdd2",
  200: "#ef9a9a",
  300: "#e57373",
  400: "#ef5350",
  500: "#f44336",
  600: "#e53935",
  700: "#d32f2f",
  800: "#c62828",
  900: "#b71c1c",
  A100: "#ff8a80",
  A200: "#ff5252",
  A400: "#ff1744",
  A700: "#d50000"
}, ad = Rz, wz = {
  50: "#fff3e0",
  100: "#ffe0b2",
  200: "#ffcc80",
  300: "#ffb74d",
  400: "#ffa726",
  500: "#ff9800",
  600: "#fb8c00",
  700: "#f57c00",
  800: "#ef6c00",
  900: "#e65100",
  A100: "#ffd180",
  A200: "#ffab40",
  A400: "#ff9100",
  A700: "#ff6d00"
}, jv = wz, _z = {
  50: "#e3f2fd",
  100: "#bbdefb",
  200: "#90caf9",
  300: "#64b5f6",
  400: "#42a5f5",
  500: "#2196f3",
  600: "#1e88e5",
  700: "#1976d2",
  800: "#1565c0",
  900: "#0d47a1",
  A100: "#82b1ff",
  A200: "#448aff",
  A400: "#2979ff",
  A700: "#2962ff"
}, id = _z, kz = {
  50: "#e1f5fe",
  100: "#b3e5fc",
  200: "#81d4fa",
  300: "#4fc3f7",
  400: "#29b6f6",
  500: "#03a9f4",
  600: "#039be5",
  700: "#0288d1",
  800: "#0277bd",
  900: "#01579b",
  A100: "#80d8ff",
  A200: "#40c4ff",
  A400: "#00b0ff",
  A700: "#0091ea"
}, od = kz, Oz = {
  50: "#e8f5e9",
  100: "#c8e6c9",
  200: "#a5d6a7",
  300: "#81c784",
  400: "#66bb6a",
  500: "#4caf50",
  600: "#43a047",
  700: "#388e3c",
  800: "#2e7d32",
  900: "#1b5e20",
  A100: "#b9f6ca",
  A200: "#69f0ae",
  A400: "#00e676",
  A700: "#00c853"
}, ld = Oz, Dz = ["mode", "contrastThreshold", "tonalOffset"], MR = {
  // The colors used to style the text.
  text: {
    // The most important text.
    primary: "rgba(0, 0, 0, 0.87)",
    // Secondary text.
    secondary: "rgba(0, 0, 0, 0.6)",
    // Disabled text have even lower visual prominence.
    disabled: "rgba(0, 0, 0, 0.38)"
  },
  // The color used to divide different elements.
  divider: "rgba(0, 0, 0, 0.12)",
  // The background colors used to style the surfaces.
  // Consistency between these values is important.
  background: {
    paper: Yv.white,
    default: Yv.white
  },
  // The colors used to style the action elements.
  action: {
    // The color of an active action like an icon button.
    active: "rgba(0, 0, 0, 0.54)",
    // The color of an hovered action.
    hover: "rgba(0, 0, 0, 0.04)",
    hoverOpacity: 0.04,
    // The color of a selected action.
    selected: "rgba(0, 0, 0, 0.08)",
    selectedOpacity: 0.08,
    // The color of a disabled action.
    disabled: "rgba(0, 0, 0, 0.26)",
    // The background color of a disabled action.
    disabledBackground: "rgba(0, 0, 0, 0.12)",
    disabledOpacity: 0.38,
    focus: "rgba(0, 0, 0, 0.12)",
    focusOpacity: 0.12,
    activatedOpacity: 0.12
  }
}, Sb = {
  text: {
    primary: Yv.white,
    secondary: "rgba(255, 255, 255, 0.7)",
    disabled: "rgba(255, 255, 255, 0.5)",
    icon: "rgba(255, 255, 255, 0.5)"
  },
  divider: "rgba(255, 255, 255, 0.12)",
  background: {
    paper: "#121212",
    default: "#121212"
  },
  action: {
    active: Yv.white,
    hover: "rgba(255, 255, 255, 0.08)",
    hoverOpacity: 0.08,
    selected: "rgba(255, 255, 255, 0.16)",
    selectedOpacity: 0.16,
    disabled: "rgba(255, 255, 255, 0.3)",
    disabledBackground: "rgba(255, 255, 255, 0.12)",
    disabledOpacity: 0.38,
    focus: "rgba(255, 255, 255, 0.12)",
    focusOpacity: 0.12,
    activatedOpacity: 0.24
  }
};
function LR(l, s, d, v) {
  const g = v.light || v, S = v.dark || v * 1.5;
  l[s] || (l.hasOwnProperty(d) ? l[s] = l[d] : s === "light" ? l.light = Sz(l.main, g) : s === "dark" && (l.dark = gz(l.main, S)));
}
function Nz(l = "light") {
  return l === "dark" ? {
    main: id[200],
    light: id[50],
    dark: id[400]
  } : {
    main: id[700],
    light: id[400],
    dark: id[800]
  };
}
function Mz(l = "light") {
  return l === "dark" ? {
    main: rd[200],
    light: rd[50],
    dark: rd[400]
  } : {
    main: rd[500],
    light: rd[300],
    dark: rd[700]
  };
}
function Lz(l = "light") {
  return l === "dark" ? {
    main: ad[500],
    light: ad[300],
    dark: ad[700]
  } : {
    main: ad[700],
    light: ad[400],
    dark: ad[800]
  };
}
function Az(l = "light") {
  return l === "dark" ? {
    main: od[400],
    light: od[300],
    dark: od[700]
  } : {
    main: od[700],
    light: od[500],
    dark: od[900]
  };
}
function zz(l = "light") {
  return l === "dark" ? {
    main: ld[400],
    light: ld[300],
    dark: ld[700]
  } : {
    main: ld[800],
    light: ld[500],
    dark: ld[900]
  };
}
function Pz(l = "light") {
  return l === "dark" ? {
    main: jv[400],
    light: jv[300],
    dark: jv[700]
  } : {
    main: "#ed6c02",
    // closest to orange[800] that pass 3:1.
    light: jv[500],
    dark: jv[900]
  };
}
function Uz(l) {
  const {
    mode: s = "light",
    contrastThreshold: d = 3,
    tonalOffset: v = 0.2
  } = l, g = Tn(l, Dz), S = l.primary || Nz(s), m = l.secondary || Mz(s), R = l.error || Lz(s), w = l.info || Az(s), k = l.success || zz(s), M = l.warning || Pz(s);
  function N(P) {
    const H = NR(P, Sb.text.primary) >= d ? Sb.text.primary : MR.text.primary;
    if (process.env.NODE_ENV !== "production") {
      const le = NR(P, H);
      le < 3 && console.error([`MUI: The contrast ratio of ${le}:1 for ${H} on ${P}`, "falls below the WCAG recommended absolute minimum contrast ratio of 3:1.", "https://www.w3.org/TR/2008/REC-WCAG20-20081211/#visual-audio-contrast-contrast"].join(`
`));
    }
    return H;
  }
  const A = ({
    color: P,
    name: H,
    mainShade: le = 500,
    lightShade: de = 300,
    darkShade: K = 700
  }) => {
    if (P = fe({}, P), !P.main && P[le] && (P.main = P[le]), !P.hasOwnProperty("main"))
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${H ? ` (${H})` : ""} provided to augmentColor(color) is invalid.
The color object needs to have a \`main\` property or a \`${le}\` property.` : vd(11, H ? ` (${H})` : "", le));
    if (typeof P.main != "string")
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${H ? ` (${H})` : ""} provided to augmentColor(color) is invalid.
\`color.main\` should be a string, but \`${JSON.stringify(P.main)}\` was provided instead.

Did you intend to use one of the following approaches?

import { green } from "@mui/material/colors";

const theme1 = createTheme({ palette: {
  primary: green,
} });

const theme2 = createTheme({ palette: {
  primary: { main: green[500] },
} });` : vd(12, H ? ` (${H})` : "", JSON.stringify(P.main)));
    return LR(P, "light", de, v), LR(P, "dark", K, v), P.contrastText || (P.contrastText = N(P.main)), P;
  }, V = {
    dark: Sb,
    light: MR
  };
  return process.env.NODE_ENV !== "production" && (V[s] || console.error(`MUI: The palette mode \`${s}\` is not supported.`)), Fl(fe({
    // A collection of common colors.
    common: fe({}, Yv),
    // prevent mutable object.
    // The palette mode, can be light or dark.
    mode: s,
    // The colors used to represent primary interface elements for a user.
    primary: A({
      color: S,
      name: "primary"
    }),
    // The colors used to represent secondary interface elements for a user.
    secondary: A({
      color: m,
      name: "secondary",
      mainShade: "A400",
      lightShade: "A200",
      darkShade: "A700"
    }),
    // The colors used to represent interface elements that the user should be made aware of.
    error: A({
      color: R,
      name: "error"
    }),
    // The colors used to represent potentially dangerous actions or important messages.
    warning: A({
      color: M,
      name: "warning"
    }),
    // The colors used to present information to the user that is neutral and not necessarily important.
    info: A({
      color: w,
      name: "info"
    }),
    // The colors used to indicate the successful completion of an action that user triggered.
    success: A({
      color: k,
      name: "success"
    }),
    // The grey colors.
    grey: xz,
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: d,
    // Takes a background color and returns the text color that maximizes the contrast.
    getContrastText: N,
    // Generate a rich color object.
    augmentColor: A,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: v
  }, V[s]), g);
}
const jz = ["fontFamily", "fontSize", "fontWeightLight", "fontWeightRegular", "fontWeightMedium", "fontWeightBold", "htmlFontSize", "allVariants", "pxToRem"];
function $z(l) {
  return Math.round(l * 1e5) / 1e5;
}
const AR = {
  textTransform: "uppercase"
}, zR = '"Roboto", "Helvetica", "Arial", sans-serif';
function Fz(l, s) {
  const d = typeof s == "function" ? s(l) : s, {
    fontFamily: v = zR,
    // The default font size of the Material Specification.
    fontSize: g = 14,
    // px
    fontWeightLight: S = 300,
    fontWeightRegular: m = 400,
    fontWeightMedium: R = 500,
    fontWeightBold: w = 700,
    // Tell MUI what's the font-size on the html element.
    // 16px is the default font-size used by browsers.
    htmlFontSize: k = 16,
    // Apply the CSS properties to all the variants.
    allVariants: M,
    pxToRem: N
  } = d, A = Tn(d, jz);
  process.env.NODE_ENV !== "production" && (typeof g != "number" && console.error("MUI: `fontSize` is required to be a number."), typeof k != "number" && console.error("MUI: `htmlFontSize` is required to be a number."));
  const V = g / 14, F = N || ((le) => `${le / k * V}rem`), P = (le, de, K, J, D) => fe({
    fontFamily: v,
    fontWeight: le,
    fontSize: F(de),
    // Unitless following https://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
    lineHeight: K
  }, v === zR ? {
    letterSpacing: `${$z(J / de)}em`
  } : {}, D, M), H = {
    h1: P(S, 96, 1.167, -1.5),
    h2: P(S, 60, 1.2, -0.5),
    h3: P(m, 48, 1.167, 0),
    h4: P(m, 34, 1.235, 0.25),
    h5: P(m, 24, 1.334, 0),
    h6: P(R, 20, 1.6, 0.15),
    subtitle1: P(m, 16, 1.75, 0.15),
    subtitle2: P(R, 14, 1.57, 0.1),
    body1: P(m, 16, 1.5, 0.15),
    body2: P(m, 14, 1.43, 0.15),
    button: P(R, 14, 1.75, 0.4, AR),
    caption: P(m, 12, 1.66, 0.4),
    overline: P(m, 12, 2.66, 1, AR),
    // TODO v6: Remove handling of 'inherit' variant from the theme as it is already handled in Material UI's Typography component. Also, remember to remove the associated types.
    inherit: {
      fontFamily: "inherit",
      fontWeight: "inherit",
      fontSize: "inherit",
      lineHeight: "inherit",
      letterSpacing: "inherit"
    }
  };
  return Fl(fe({
    htmlFontSize: k,
    pxToRem: F,
    fontFamily: v,
    fontSize: g,
    fontWeightLight: S,
    fontWeightRegular: m,
    fontWeightMedium: R,
    fontWeightBold: w
  }, H), A, {
    clone: !1
    // No need to clone deep
  });
}
const Vz = 0.2, Hz = 0.14, Iz = 0.12;
function kn(...l) {
  return [`${l[0]}px ${l[1]}px ${l[2]}px ${l[3]}px rgba(0,0,0,${Vz})`, `${l[4]}px ${l[5]}px ${l[6]}px ${l[7]}px rgba(0,0,0,${Hz})`, `${l[8]}px ${l[9]}px ${l[10]}px ${l[11]}px rgba(0,0,0,${Iz})`].join(",");
}
const Bz = ["none", kn(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), kn(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), kn(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), kn(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), kn(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), kn(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), kn(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), kn(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), kn(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), kn(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), kn(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), kn(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), kn(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), kn(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), kn(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), kn(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), kn(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), kn(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), kn(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), kn(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), kn(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), kn(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), kn(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), kn(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)], Yz = ["duration", "easing", "delay"], Wz = {
  // This is the most common easing curve.
  easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
  // Objects enter the screen at full velocity from off-screen and
  // slowly decelerate to a resting point.
  easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
  // Objects leave the screen at full velocity. They do not decelerate when off-screen.
  easeIn: "cubic-bezier(0.4, 0, 1, 1)",
  // The sharp curve is used by objects that may return to the screen at any time.
  sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
}, Gz = {
  shortest: 150,
  shorter: 200,
  short: 250,
  // most basic recommended timing
  standard: 300,
  // this is to be used in complex animations
  complex: 375,
  // recommended when something is entering screen
  enteringScreen: 225,
  // recommended when something is leaving screen
  leavingScreen: 195
};
function PR(l) {
  return `${Math.round(l)}ms`;
}
function qz(l) {
  if (!l)
    return 0;
  const s = l / 36;
  return Math.round((4 + 15 * s ** 0.25 + s / 5) * 10);
}
function Qz(l) {
  const s = fe({}, Wz, l.easing), d = fe({}, Gz, l.duration);
  return fe({
    getAutoHeightDuration: qz,
    create: (g = ["all"], S = {}) => {
      const {
        duration: m = d.standard,
        easing: R = s.easeInOut,
        delay: w = 0
      } = S, k = Tn(S, Yz);
      if (process.env.NODE_ENV !== "production") {
        const M = (A) => typeof A == "string", N = (A) => !isNaN(parseFloat(A));
        !M(g) && !Array.isArray(g) && console.error('MUI: Argument "props" must be a string or Array.'), !N(m) && !M(m) && console.error(`MUI: Argument "duration" must be a number or a string but found ${m}.`), M(R) || console.error('MUI: Argument "easing" must be a string.'), !N(w) && !M(w) && console.error('MUI: Argument "delay" must be a number or a string.'), typeof S != "object" && console.error(["MUI: Secong argument of transition.create must be an object.", "Arguments should be either `create('prop1', options)` or `create(['prop1', 'prop2'], options)`"].join(`
`)), Object.keys(k).length !== 0 && console.error(`MUI: Unrecognized argument(s) [${Object.keys(k).join(",")}].`);
      }
      return (Array.isArray(g) ? g : [g]).map((M) => `${M} ${typeof m == "string" ? m : PR(m)} ${R} ${typeof w == "string" ? w : PR(w)}`).join(",");
    }
  }, l, {
    easing: s,
    duration: d
  });
}
const Kz = {
  mobileStepper: 1e3,
  fab: 1050,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500
}, Xz = Kz, Zz = ["breakpoints", "mixins", "spacing", "palette", "transitions", "typography", "shape"];
function Jz(l = {}, ...s) {
  const {
    mixins: d = {},
    palette: v = {},
    transitions: g = {},
    typography: S = {}
  } = l, m = Tn(l, Zz);
  if (l.vars)
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `vars` is a private field used for CSS variables support.\nPlease use another name." : vd(18));
  const R = Uz(v), w = e1(l);
  let k = Fl(w, {
    mixins: Ez(w.breakpoints, d),
    palette: R,
    // Don't use [...shadows] until you've verified its transpiled code is not invoking the iterator protocol.
    shadows: Bz.slice(),
    typography: Fz(R, S),
    transitions: Qz(g),
    zIndex: fe({}, Xz)
  });
  if (k = Fl(k, m), k = s.reduce((M, N) => Fl(M, N), k), process.env.NODE_ENV !== "production") {
    const M = ["active", "checked", "completed", "disabled", "error", "expanded", "focused", "focusVisible", "required", "selected"], N = (A, V) => {
      let F;
      for (F in A) {
        const P = A[F];
        if (M.indexOf(F) !== -1 && Object.keys(P).length > 0) {
          if (process.env.NODE_ENV !== "production") {
            const H = ki("", F);
            console.error([`MUI: The \`${V}\` component increases the CSS specificity of the \`${F}\` internal state.`, "You can not override it like this: ", JSON.stringify(A, null, 2), "", `Instead, you need to use the '&.${H}' syntax:`, JSON.stringify({
              root: {
                [`&.${H}`]: P
              }
            }, null, 2), "", "https://mui.com/r/state-classes-guide"].join(`
`));
          }
          A[F] = {};
        }
      }
    };
    Object.keys(k.components).forEach((A) => {
      const V = k.components[A].styleOverrides;
      V && A.indexOf("Mui") === 0 && N(V, A);
    });
  }
  return k.unstable_sxConfig = fe({}, Dg, m == null ? void 0 : m.unstable_sxConfig), k.unstable_sx = function(N) {
    return Ng({
      sx: N,
      theme: this
    });
  }, k;
}
const eP = Jz(), n1 = eP, r1 = "$$material", Dw = (l) => ig(l) && l !== "classes", _r = pz({
  themeId: r1,
  defaultTheme: n1,
  rootShouldForwardProp: Dw
});
function oo({
  props: l,
  name: s
}) {
  return hz({
    props: l,
    name: s,
    defaultTheme: n1,
    themeId: r1
  });
}
function zb(l, s) {
  return zb = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(v, g) {
    return v.__proto__ = g, v;
  }, zb(l, s);
}
function Nw(l, s) {
  l.prototype = Object.create(s.prototype), l.prototype.constructor = l, zb(l, s);
}
var Pb = { exports: {} }, Wa = {}, Xy = { exports: {} }, Eb = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var UR;
function tP() {
  return UR || (UR = 1, function(l) {
    function s(oe, Pe) {
      var I = oe.length;
      oe.push(Pe);
      e:
        for (; 0 < I; ) {
          var ue = I - 1 >>> 1, we = oe[ue];
          if (0 < g(we, Pe))
            oe[ue] = Pe, oe[I] = we, I = ue;
          else
            break e;
        }
    }
    function d(oe) {
      return oe.length === 0 ? null : oe[0];
    }
    function v(oe) {
      if (oe.length === 0)
        return null;
      var Pe = oe[0], I = oe.pop();
      if (I !== Pe) {
        oe[0] = I;
        e:
          for (var ue = 0, we = oe.length, Ve = we >>> 1; ue < Ve; ) {
            var ke = 2 * (ue + 1) - 1, qe = oe[ke], Ne = ke + 1, Xe = oe[Ne];
            if (0 > g(qe, I))
              Ne < we && 0 > g(Xe, qe) ? (oe[ue] = Xe, oe[Ne] = I, ue = Ne) : (oe[ue] = qe, oe[ke] = I, ue = ke);
            else if (Ne < we && 0 > g(Xe, I))
              oe[ue] = Xe, oe[Ne] = I, ue = Ne;
            else
              break e;
          }
      }
      return Pe;
    }
    function g(oe, Pe) {
      var I = oe.sortIndex - Pe.sortIndex;
      return I !== 0 ? I : oe.id - Pe.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var S = performance;
      l.unstable_now = function() {
        return S.now();
      };
    } else {
      var m = Date, R = m.now();
      l.unstable_now = function() {
        return m.now() - R;
      };
    }
    var w = [], k = [], M = 1, N = null, A = 3, V = !1, F = !1, P = !1, H = typeof setTimeout == "function" ? setTimeout : null, le = typeof clearTimeout == "function" ? clearTimeout : null, de = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function K(oe) {
      for (var Pe = d(k); Pe !== null; ) {
        if (Pe.callback === null)
          v(k);
        else if (Pe.startTime <= oe)
          v(k), Pe.sortIndex = Pe.expirationTime, s(w, Pe);
        else
          break;
        Pe = d(k);
      }
    }
    function J(oe) {
      if (P = !1, K(oe), !F)
        if (d(w) !== null)
          F = !0, be(D);
        else {
          var Pe = d(k);
          Pe !== null && Be(J, Pe.startTime - oe);
        }
    }
    function D(oe, Pe) {
      F = !1, P && (P = !1, le(Ke), Ke = -1), V = !0;
      var I = A;
      try {
        for (K(Pe), N = d(w); N !== null && (!(N.expirationTime > Pe) || oe && !_e()); ) {
          var ue = N.callback;
          if (typeof ue == "function") {
            N.callback = null, A = N.priorityLevel;
            var we = ue(N.expirationTime <= Pe);
            Pe = l.unstable_now(), typeof we == "function" ? N.callback = we : N === d(w) && v(w), K(Pe);
          } else
            v(w);
          N = d(w);
        }
        if (N !== null)
          var Ve = !0;
        else {
          var ke = d(k);
          ke !== null && Be(J, ke.startTime - Pe), Ve = !1;
        }
        return Ve;
      } finally {
        N = null, A = I, V = !1;
      }
    }
    var ve = !1, ie = null, Ke = -1, ot = 5, De = -1;
    function _e() {
      return !(l.unstable_now() - De < ot);
    }
    function Ye() {
      if (ie !== null) {
        var oe = l.unstable_now();
        De = oe;
        var Pe = !0;
        try {
          Pe = ie(!0, oe);
        } finally {
          Pe ? Ee() : (ve = !1, ie = null);
        }
      } else
        ve = !1;
    }
    var Ee;
    if (typeof de == "function")
      Ee = function() {
        de(Ye);
      };
    else if (typeof MessageChannel < "u") {
      var ge = new MessageChannel(), nt = ge.port2;
      ge.port1.onmessage = Ye, Ee = function() {
        nt.postMessage(null);
      };
    } else
      Ee = function() {
        H(Ye, 0);
      };
    function be(oe) {
      ie = oe, ve || (ve = !0, Ee());
    }
    function Be(oe, Pe) {
      Ke = H(function() {
        oe(l.unstable_now());
      }, Pe);
    }
    l.unstable_IdlePriority = 5, l.unstable_ImmediatePriority = 1, l.unstable_LowPriority = 4, l.unstable_NormalPriority = 3, l.unstable_Profiling = null, l.unstable_UserBlockingPriority = 2, l.unstable_cancelCallback = function(oe) {
      oe.callback = null;
    }, l.unstable_continueExecution = function() {
      F || V || (F = !0, be(D));
    }, l.unstable_forceFrameRate = function(oe) {
      0 > oe || 125 < oe ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : ot = 0 < oe ? Math.floor(1e3 / oe) : 5;
    }, l.unstable_getCurrentPriorityLevel = function() {
      return A;
    }, l.unstable_getFirstCallbackNode = function() {
      return d(w);
    }, l.unstable_next = function(oe) {
      switch (A) {
        case 1:
        case 2:
        case 3:
          var Pe = 3;
          break;
        default:
          Pe = A;
      }
      var I = A;
      A = Pe;
      try {
        return oe();
      } finally {
        A = I;
      }
    }, l.unstable_pauseExecution = function() {
    }, l.unstable_requestPaint = function() {
    }, l.unstable_runWithPriority = function(oe, Pe) {
      switch (oe) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          oe = 3;
      }
      var I = A;
      A = oe;
      try {
        return Pe();
      } finally {
        A = I;
      }
    }, l.unstable_scheduleCallback = function(oe, Pe, I) {
      var ue = l.unstable_now();
      switch (typeof I == "object" && I !== null ? (I = I.delay, I = typeof I == "number" && 0 < I ? ue + I : ue) : I = ue, oe) {
        case 1:
          var we = -1;
          break;
        case 2:
          we = 250;
          break;
        case 5:
          we = 1073741823;
          break;
        case 4:
          we = 1e4;
          break;
        default:
          we = 5e3;
      }
      return we = I + we, oe = { id: M++, callback: Pe, priorityLevel: oe, startTime: I, expirationTime: we, sortIndex: -1 }, I > ue ? (oe.sortIndex = I, s(k, oe), d(w) === null && oe === d(k) && (P ? (le(Ke), Ke = -1) : P = !0, Be(J, I - ue))) : (oe.sortIndex = we, s(w, oe), F || V || (F = !0, be(D))), oe;
    }, l.unstable_shouldYield = _e, l.unstable_wrapCallback = function(oe) {
      var Pe = A;
      return function() {
        var I = A;
        A = Pe;
        try {
          return oe.apply(this, arguments);
        } finally {
          A = I;
        }
      };
    };
  }(Eb)), Eb;
}
var bb = {};
/**
 * @license React
 * scheduler.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var jR;
function nP() {
  return jR || (jR = 1, function(l) {
    process.env.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var s = !1, d = !1, v = 5;
      function g(Ce, Ze) {
        var xt = Ce.length;
        Ce.push(Ze), R(Ce, Ze, xt);
      }
      function S(Ce) {
        return Ce.length === 0 ? null : Ce[0];
      }
      function m(Ce) {
        if (Ce.length === 0)
          return null;
        var Ze = Ce[0], xt = Ce.pop();
        return xt !== Ze && (Ce[0] = xt, w(Ce, xt, 0)), Ze;
      }
      function R(Ce, Ze, xt) {
        for (var Vt = xt; Vt > 0; ) {
          var gn = Vt - 1 >>> 1, Xn = Ce[gn];
          if (k(Xn, Ze) > 0)
            Ce[gn] = Ze, Ce[Vt] = Xn, Vt = gn;
          else
            return;
        }
      }
      function w(Ce, Ze, xt) {
        for (var Vt = xt, gn = Ce.length, Xn = gn >>> 1; Vt < Xn; ) {
          var Dn = (Vt + 1) * 2 - 1, Wr = Ce[Dn], an = Dn + 1, da = Ce[an];
          if (k(Wr, Ze) < 0)
            an < gn && k(da, Wr) < 0 ? (Ce[Vt] = da, Ce[an] = Ze, Vt = an) : (Ce[Vt] = Wr, Ce[Dn] = Ze, Vt = Dn);
          else if (an < gn && k(da, Ze) < 0)
            Ce[Vt] = da, Ce[an] = Ze, Vt = an;
          else
            return;
        }
      }
      function k(Ce, Ze) {
        var xt = Ce.sortIndex - Ze.sortIndex;
        return xt !== 0 ? xt : Ce.id - Ze.id;
      }
      var M = 1, N = 2, A = 3, V = 4, F = 5;
      function P(Ce, Ze) {
      }
      var H = typeof performance == "object" && typeof performance.now == "function";
      if (H) {
        var le = performance;
        l.unstable_now = function() {
          return le.now();
        };
      } else {
        var de = Date, K = de.now();
        l.unstable_now = function() {
          return de.now() - K;
        };
      }
      var J = 1073741823, D = -1, ve = 250, ie = 5e3, Ke = 1e4, ot = J, De = [], _e = [], Ye = 1, Ee = null, ge = A, nt = !1, be = !1, Be = !1, oe = typeof setTimeout == "function" ? setTimeout : null, Pe = typeof clearTimeout == "function" ? clearTimeout : null, I = typeof setImmediate < "u" ? setImmediate : null;
      typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
      function ue(Ce) {
        for (var Ze = S(_e); Ze !== null; ) {
          if (Ze.callback === null)
            m(_e);
          else if (Ze.startTime <= Ce)
            m(_e), Ze.sortIndex = Ze.expirationTime, g(De, Ze);
          else
            return;
          Ze = S(_e);
        }
      }
      function we(Ce) {
        if (Be = !1, ue(Ce), !be)
          if (S(De) !== null)
            be = !0, fa(Ve);
          else {
            var Ze = S(_e);
            Ze !== null && yn(we, Ze.startTime - Ce);
          }
      }
      function Ve(Ce, Ze) {
        be = !1, Be && (Be = !1, Dr()), nt = !0;
        var xt = ge;
        try {
          var Vt;
          if (!d)
            return ke(Ce, Ze);
        } finally {
          Ee = null, ge = xt, nt = !1;
        }
      }
      function ke(Ce, Ze) {
        var xt = Ze;
        for (ue(xt), Ee = S(De); Ee !== null && !s && !(Ee.expirationTime > xt && (!Ce || ua())); ) {
          var Vt = Ee.callback;
          if (typeof Vt == "function") {
            Ee.callback = null, ge = Ee.priorityLevel;
            var gn = Ee.expirationTime <= xt, Xn = Vt(gn);
            xt = l.unstable_now(), typeof Xn == "function" ? Ee.callback = Xn : Ee === S(De) && m(De), ue(xt);
          } else
            m(De);
          Ee = S(De);
        }
        if (Ee !== null)
          return !0;
        var Dn = S(_e);
        return Dn !== null && yn(we, Dn.startTime - xt), !1;
      }
      function qe(Ce, Ze) {
        switch (Ce) {
          case M:
          case N:
          case A:
          case V:
          case F:
            break;
          default:
            Ce = A;
        }
        var xt = ge;
        ge = Ce;
        try {
          return Ze();
        } finally {
          ge = xt;
        }
      }
      function Ne(Ce) {
        var Ze;
        switch (ge) {
          case M:
          case N:
          case A:
            Ze = A;
            break;
          default:
            Ze = ge;
            break;
        }
        var xt = ge;
        ge = Ze;
        try {
          return Ce();
        } finally {
          ge = xt;
        }
      }
      function Xe(Ce) {
        var Ze = ge;
        return function() {
          var xt = ge;
          ge = Ze;
          try {
            return Ce.apply(this, arguments);
          } finally {
            ge = xt;
          }
        };
      }
      function We(Ce, Ze, xt) {
        var Vt = l.unstable_now(), gn;
        if (typeof xt == "object" && xt !== null) {
          var Xn = xt.delay;
          typeof Xn == "number" && Xn > 0 ? gn = Vt + Xn : gn = Vt;
        } else
          gn = Vt;
        var Dn;
        switch (Ce) {
          case M:
            Dn = D;
            break;
          case N:
            Dn = ve;
            break;
          case F:
            Dn = ot;
            break;
          case V:
            Dn = Ke;
            break;
          case A:
          default:
            Dn = ie;
            break;
        }
        var Wr = gn + Dn, an = {
          id: Ye++,
          callback: Ze,
          priorityLevel: Ce,
          startTime: gn,
          expirationTime: Wr,
          sortIndex: -1
        };
        return gn > Vt ? (an.sortIndex = gn, g(_e, an), S(De) === null && an === S(_e) && (Be ? Dr() : Be = !0, yn(we, gn - Vt))) : (an.sortIndex = Wr, g(De, an), !be && !nt && (be = !0, fa(Ve))), an;
      }
      function He() {
      }
      function rt() {
        !be && !nt && (be = !0, fa(Ve));
      }
      function Rt() {
        return S(De);
      }
      function Z(Ce) {
        Ce.callback = null;
      }
      function mt() {
        return ge;
      }
      var Se = !1, Ft = null, mn = -1, On = v, Ir = -1;
      function ua() {
        var Ce = l.unstable_now() - Ir;
        return !(Ce < On);
      }
      function sa() {
      }
      function Br(Ce) {
        if (Ce < 0 || Ce > 125) {
          console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported");
          return;
        }
        Ce > 0 ? On = Math.floor(1e3 / Ce) : On = v;
      }
      var ca = function() {
        if (Ft !== null) {
          var Ce = l.unstable_now();
          Ir = Ce;
          var Ze = !0, xt = !0;
          try {
            xt = Ft(Ze, Ce);
          } finally {
            xt ? kr() : (Se = !1, Ft = null);
          }
        } else
          Se = !1;
      }, kr;
      if (typeof I == "function")
        kr = function() {
          I(ca);
        };
      else if (typeof MessageChannel < "u") {
        var Or = new MessageChannel(), Vn = Or.port2;
        Or.port1.onmessage = ca, kr = function() {
          Vn.postMessage(null);
        };
      } else
        kr = function() {
          oe(ca, 0);
        };
      function fa(Ce) {
        Ft = Ce, Se || (Se = !0, kr());
      }
      function yn(Ce, Ze) {
        mn = oe(function() {
          Ce(l.unstable_now());
        }, Ze);
      }
      function Dr() {
        Pe(mn), mn = -1;
      }
      var ct = sa, Yr = null;
      l.unstable_IdlePriority = F, l.unstable_ImmediatePriority = M, l.unstable_LowPriority = V, l.unstable_NormalPriority = A, l.unstable_Profiling = Yr, l.unstable_UserBlockingPriority = N, l.unstable_cancelCallback = Z, l.unstable_continueExecution = rt, l.unstable_forceFrameRate = Br, l.unstable_getCurrentPriorityLevel = mt, l.unstable_getFirstCallbackNode = Rt, l.unstable_next = Ne, l.unstable_pauseExecution = He, l.unstable_requestPaint = ct, l.unstable_runWithPriority = qe, l.unstable_scheduleCallback = We, l.unstable_shouldYield = ua, l.unstable_wrapCallback = Xe, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(bb)), bb;
}
var $R;
function Mw() {
  return $R || ($R = 1, process.env.NODE_ENV === "production" ? Xy.exports = tP() : Xy.exports = nP()), Xy.exports;
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var FR;
function rP() {
  if (FR)
    return Wa;
  FR = 1;
  var l = ui, s = Mw();
  function d(n) {
    for (var r = "https://reactjs.org/docs/error-decoder.html?invariant=" + n, o = 1; o < arguments.length; o++)
      r += "&args[]=" + encodeURIComponent(arguments[o]);
    return "Minified React error #" + n + "; visit " + r + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var v = /* @__PURE__ */ new Set(), g = {};
  function S(n, r) {
    m(n, r), m(n + "Capture", r);
  }
  function m(n, r) {
    for (g[n] = r, n = 0; n < r.length; n++)
      v.add(r[n]);
  }
  var R = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), w = Object.prototype.hasOwnProperty, k = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, M = {}, N = {};
  function A(n) {
    return w.call(N, n) ? !0 : w.call(M, n) ? !1 : k.test(n) ? N[n] = !0 : (M[n] = !0, !1);
  }
  function V(n, r, o, c) {
    if (o !== null && o.type === 0)
      return !1;
    switch (typeof r) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return c ? !1 : o !== null ? !o.acceptsBooleans : (n = n.toLowerCase().slice(0, 5), n !== "data-" && n !== "aria-");
      default:
        return !1;
    }
  }
  function F(n, r, o, c) {
    if (r === null || typeof r > "u" || V(n, r, o, c))
      return !0;
    if (c)
      return !1;
    if (o !== null)
      switch (o.type) {
        case 3:
          return !r;
        case 4:
          return r === !1;
        case 5:
          return isNaN(r);
        case 6:
          return isNaN(r) || 1 > r;
      }
    return !1;
  }
  function P(n, r, o, c, p, y, C) {
    this.acceptsBooleans = r === 2 || r === 3 || r === 4, this.attributeName = c, this.attributeNamespace = p, this.mustUseProperty = o, this.propertyName = n, this.type = r, this.sanitizeURL = y, this.removeEmptyString = C;
  }
  var H = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n) {
    H[n] = new P(n, 0, !1, n, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(n) {
    var r = n[0];
    H[r] = new P(r, 1, !1, n[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(n) {
    H[n] = new P(n, 2, !1, n.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(n) {
    H[n] = new P(n, 2, !1, n, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n) {
    H[n] = new P(n, 3, !1, n.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(n) {
    H[n] = new P(n, 3, !0, n, null, !1, !1);
  }), ["capture", "download"].forEach(function(n) {
    H[n] = new P(n, 4, !1, n, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(n) {
    H[n] = new P(n, 6, !1, n, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(n) {
    H[n] = new P(n, 5, !1, n.toLowerCase(), null, !1, !1);
  });
  var le = /[\-:]([a-z])/g;
  function de(n) {
    return n[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n) {
    var r = n.replace(
      le,
      de
    );
    H[r] = new P(r, 1, !1, n, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n) {
    var r = n.replace(le, de);
    H[r] = new P(r, 1, !1, n, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(n) {
    var r = n.replace(le, de);
    H[r] = new P(r, 1, !1, n, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(n) {
    H[n] = new P(n, 1, !1, n.toLowerCase(), null, !1, !1);
  }), H.xlinkHref = new P("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(n) {
    H[n] = new P(n, 1, !1, n.toLowerCase(), null, !0, !0);
  });
  function K(n, r, o, c) {
    var p = H.hasOwnProperty(r) ? H[r] : null;
    (p !== null ? p.type !== 0 : c || !(2 < r.length) || r[0] !== "o" && r[0] !== "O" || r[1] !== "n" && r[1] !== "N") && (F(r, o, p, c) && (o = null), c || p === null ? A(r) && (o === null ? n.removeAttribute(r) : n.setAttribute(r, "" + o)) : p.mustUseProperty ? n[p.propertyName] = o === null ? p.type === 3 ? !1 : "" : o : (r = p.attributeName, c = p.attributeNamespace, o === null ? n.removeAttribute(r) : (p = p.type, o = p === 3 || p === 4 && o === !0 ? "" : "" + o, c ? n.setAttributeNS(c, r, o) : n.setAttribute(r, o))));
  }
  var J = l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, D = Symbol.for("react.element"), ve = Symbol.for("react.portal"), ie = Symbol.for("react.fragment"), Ke = Symbol.for("react.strict_mode"), ot = Symbol.for("react.profiler"), De = Symbol.for("react.provider"), _e = Symbol.for("react.context"), Ye = Symbol.for("react.forward_ref"), Ee = Symbol.for("react.suspense"), ge = Symbol.for("react.suspense_list"), nt = Symbol.for("react.memo"), be = Symbol.for("react.lazy"), Be = Symbol.for("react.offscreen"), oe = Symbol.iterator;
  function Pe(n) {
    return n === null || typeof n != "object" ? null : (n = oe && n[oe] || n["@@iterator"], typeof n == "function" ? n : null);
  }
  var I = Object.assign, ue;
  function we(n) {
    if (ue === void 0)
      try {
        throw Error();
      } catch (o) {
        var r = o.stack.trim().match(/\n( *(at )?)/);
        ue = r && r[1] || "";
      }
    return `
` + ue + n;
  }
  var Ve = !1;
  function ke(n, r) {
    if (!n || Ve)
      return "";
    Ve = !0;
    var o = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (r)
        if (r = function() {
          throw Error();
        }, Object.defineProperty(r.prototype, "props", { set: function() {
          throw Error();
        } }), typeof Reflect == "object" && Reflect.construct) {
          try {
            Reflect.construct(r, []);
          } catch (X) {
            var c = X;
          }
          Reflect.construct(n, [], r);
        } else {
          try {
            r.call();
          } catch (X) {
            c = X;
          }
          n.call(r.prototype);
        }
      else {
        try {
          throw Error();
        } catch (X) {
          c = X;
        }
        n();
      }
    } catch (X) {
      if (X && c && typeof X.stack == "string") {
        for (var p = X.stack.split(`
`), y = c.stack.split(`
`), C = p.length - 1, O = y.length - 1; 1 <= C && 0 <= O && p[C] !== y[O]; )
          O--;
        for (; 1 <= C && 0 <= O; C--, O--)
          if (p[C] !== y[O]) {
            if (C !== 1 || O !== 1)
              do
                if (C--, O--, 0 > O || p[C] !== y[O]) {
                  var z = `
` + p[C].replace(" at new ", " at ");
                  return n.displayName && z.includes("<anonymous>") && (z = z.replace("<anonymous>", n.displayName)), z;
                }
              while (1 <= C && 0 <= O);
            break;
          }
      }
    } finally {
      Ve = !1, Error.prepareStackTrace = o;
    }
    return (n = n ? n.displayName || n.name : "") ? we(n) : "";
  }
  function qe(n) {
    switch (n.tag) {
      case 5:
        return we(n.type);
      case 16:
        return we("Lazy");
      case 13:
        return we("Suspense");
      case 19:
        return we("SuspenseList");
      case 0:
      case 2:
      case 15:
        return n = ke(n.type, !1), n;
      case 11:
        return n = ke(n.type.render, !1), n;
      case 1:
        return n = ke(n.type, !0), n;
      default:
        return "";
    }
  }
  function Ne(n) {
    if (n == null)
      return null;
    if (typeof n == "function")
      return n.displayName || n.name || null;
    if (typeof n == "string")
      return n;
    switch (n) {
      case ie:
        return "Fragment";
      case ve:
        return "Portal";
      case ot:
        return "Profiler";
      case Ke:
        return "StrictMode";
      case Ee:
        return "Suspense";
      case ge:
        return "SuspenseList";
    }
    if (typeof n == "object")
      switch (n.$$typeof) {
        case _e:
          return (n.displayName || "Context") + ".Consumer";
        case De:
          return (n._context.displayName || "Context") + ".Provider";
        case Ye:
          var r = n.render;
          return n = n.displayName, n || (n = r.displayName || r.name || "", n = n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef"), n;
        case nt:
          return r = n.displayName || null, r !== null ? r : Ne(n.type) || "Memo";
        case be:
          r = n._payload, n = n._init;
          try {
            return Ne(n(r));
          } catch {
          }
      }
    return null;
  }
  function Xe(n) {
    var r = n.type;
    switch (n.tag) {
      case 24:
        return "Cache";
      case 9:
        return (r.displayName || "Context") + ".Consumer";
      case 10:
        return (r._context.displayName || "Context") + ".Provider";
      case 18:
        return "DehydratedFragment";
      case 11:
        return n = r.render, n = n.displayName || n.name || "", r.displayName || (n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef");
      case 7:
        return "Fragment";
      case 5:
        return r;
      case 4:
        return "Portal";
      case 3:
        return "Root";
      case 6:
        return "Text";
      case 16:
        return Ne(r);
      case 8:
        return r === Ke ? "StrictMode" : "Mode";
      case 22:
        return "Offscreen";
      case 12:
        return "Profiler";
      case 21:
        return "Scope";
      case 13:
        return "Suspense";
      case 19:
        return "SuspenseList";
      case 25:
        return "TracingMarker";
      case 1:
      case 0:
      case 17:
      case 2:
      case 14:
      case 15:
        if (typeof r == "function")
          return r.displayName || r.name || null;
        if (typeof r == "string")
          return r;
    }
    return null;
  }
  function We(n) {
    switch (typeof n) {
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return n;
      case "object":
        return n;
      default:
        return "";
    }
  }
  function He(n) {
    var r = n.type;
    return (n = n.nodeName) && n.toLowerCase() === "input" && (r === "checkbox" || r === "radio");
  }
  function rt(n) {
    var r = He(n) ? "checked" : "value", o = Object.getOwnPropertyDescriptor(n.constructor.prototype, r), c = "" + n[r];
    if (!n.hasOwnProperty(r) && typeof o < "u" && typeof o.get == "function" && typeof o.set == "function") {
      var p = o.get, y = o.set;
      return Object.defineProperty(n, r, { configurable: !0, get: function() {
        return p.call(this);
      }, set: function(C) {
        c = "" + C, y.call(this, C);
      } }), Object.defineProperty(n, r, { enumerable: o.enumerable }), { getValue: function() {
        return c;
      }, setValue: function(C) {
        c = "" + C;
      }, stopTracking: function() {
        n._valueTracker = null, delete n[r];
      } };
    }
  }
  function Rt(n) {
    n._valueTracker || (n._valueTracker = rt(n));
  }
  function Z(n) {
    if (!n)
      return !1;
    var r = n._valueTracker;
    if (!r)
      return !0;
    var o = r.getValue(), c = "";
    return n && (c = He(n) ? n.checked ? "true" : "false" : n.value), n = c, n !== o ? (r.setValue(n), !0) : !1;
  }
  function mt(n) {
    if (n = n || (typeof document < "u" ? document : void 0), typeof n > "u")
      return null;
    try {
      return n.activeElement || n.body;
    } catch {
      return n.body;
    }
  }
  function Se(n, r) {
    var o = r.checked;
    return I({}, r, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: o ?? n._wrapperState.initialChecked });
  }
  function Ft(n, r) {
    var o = r.defaultValue == null ? "" : r.defaultValue, c = r.checked != null ? r.checked : r.defaultChecked;
    o = We(r.value != null ? r.value : o), n._wrapperState = { initialChecked: c, initialValue: o, controlled: r.type === "checkbox" || r.type === "radio" ? r.checked != null : r.value != null };
  }
  function mn(n, r) {
    r = r.checked, r != null && K(n, "checked", r, !1);
  }
  function On(n, r) {
    mn(n, r);
    var o = We(r.value), c = r.type;
    if (o != null)
      c === "number" ? (o === 0 && n.value === "" || n.value != o) && (n.value = "" + o) : n.value !== "" + o && (n.value = "" + o);
    else if (c === "submit" || c === "reset") {
      n.removeAttribute("value");
      return;
    }
    r.hasOwnProperty("value") ? ua(n, r.type, o) : r.hasOwnProperty("defaultValue") && ua(n, r.type, We(r.defaultValue)), r.checked == null && r.defaultChecked != null && (n.defaultChecked = !!r.defaultChecked);
  }
  function Ir(n, r, o) {
    if (r.hasOwnProperty("value") || r.hasOwnProperty("defaultValue")) {
      var c = r.type;
      if (!(c !== "submit" && c !== "reset" || r.value !== void 0 && r.value !== null))
        return;
      r = "" + n._wrapperState.initialValue, o || r === n.value || (n.value = r), n.defaultValue = r;
    }
    o = n.name, o !== "" && (n.name = ""), n.defaultChecked = !!n._wrapperState.initialChecked, o !== "" && (n.name = o);
  }
  function ua(n, r, o) {
    (r !== "number" || mt(n.ownerDocument) !== n) && (o == null ? n.defaultValue = "" + n._wrapperState.initialValue : n.defaultValue !== "" + o && (n.defaultValue = "" + o));
  }
  var sa = Array.isArray;
  function Br(n, r, o, c) {
    if (n = n.options, r) {
      r = {};
      for (var p = 0; p < o.length; p++)
        r["$" + o[p]] = !0;
      for (o = 0; o < n.length; o++)
        p = r.hasOwnProperty("$" + n[o].value), n[o].selected !== p && (n[o].selected = p), p && c && (n[o].defaultSelected = !0);
    } else {
      for (o = "" + We(o), r = null, p = 0; p < n.length; p++) {
        if (n[p].value === o) {
          n[p].selected = !0, c && (n[p].defaultSelected = !0);
          return;
        }
        r !== null || n[p].disabled || (r = n[p]);
      }
      r !== null && (r.selected = !0);
    }
  }
  function ca(n, r) {
    if (r.dangerouslySetInnerHTML != null)
      throw Error(d(91));
    return I({}, r, { value: void 0, defaultValue: void 0, children: "" + n._wrapperState.initialValue });
  }
  function kr(n, r) {
    var o = r.value;
    if (o == null) {
      if (o = r.children, r = r.defaultValue, o != null) {
        if (r != null)
          throw Error(d(92));
        if (sa(o)) {
          if (1 < o.length)
            throw Error(d(93));
          o = o[0];
        }
        r = o;
      }
      r == null && (r = ""), o = r;
    }
    n._wrapperState = { initialValue: We(o) };
  }
  function Or(n, r) {
    var o = We(r.value), c = We(r.defaultValue);
    o != null && (o = "" + o, o !== n.value && (n.value = o), r.defaultValue == null && n.defaultValue !== o && (n.defaultValue = o)), c != null && (n.defaultValue = "" + c);
  }
  function Vn(n) {
    var r = n.textContent;
    r === n._wrapperState.initialValue && r !== "" && r !== null && (n.value = r);
  }
  function fa(n) {
    switch (n) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function yn(n, r) {
    return n == null || n === "http://www.w3.org/1999/xhtml" ? fa(r) : n === "http://www.w3.org/2000/svg" && r === "foreignObject" ? "http://www.w3.org/1999/xhtml" : n;
  }
  var Dr, ct = function(n) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(r, o, c, p) {
      MSApp.execUnsafeLocalFunction(function() {
        return n(r, o, c, p);
      });
    } : n;
  }(function(n, r) {
    if (n.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in n)
      n.innerHTML = r;
    else {
      for (Dr = Dr || document.createElement("div"), Dr.innerHTML = "<svg>" + r.valueOf().toString() + "</svg>", r = Dr.firstChild; n.firstChild; )
        n.removeChild(n.firstChild);
      for (; r.firstChild; )
        n.appendChild(r.firstChild);
    }
  });
  function Yr(n, r) {
    if (r) {
      var o = n.firstChild;
      if (o && o === n.lastChild && o.nodeType === 3) {
        o.nodeValue = r;
        return;
      }
    }
    n.textContent = r;
  }
  var Ce = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0
  }, Ze = ["Webkit", "ms", "Moz", "O"];
  Object.keys(Ce).forEach(function(n) {
    Ze.forEach(function(r) {
      r = r + n.charAt(0).toUpperCase() + n.substring(1), Ce[r] = Ce[n];
    });
  });
  function xt(n, r, o) {
    return r == null || typeof r == "boolean" || r === "" ? "" : o || typeof r != "number" || r === 0 || Ce.hasOwnProperty(n) && Ce[n] ? ("" + r).trim() : r + "px";
  }
  function Vt(n, r) {
    n = n.style;
    for (var o in r)
      if (r.hasOwnProperty(o)) {
        var c = o.indexOf("--") === 0, p = xt(o, r[o], c);
        o === "float" && (o = "cssFloat"), c ? n.setProperty(o, p) : n[o] = p;
      }
  }
  var gn = I({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function Xn(n, r) {
    if (r) {
      if (gn[n] && (r.children != null || r.dangerouslySetInnerHTML != null))
        throw Error(d(137, n));
      if (r.dangerouslySetInnerHTML != null) {
        if (r.children != null)
          throw Error(d(60));
        if (typeof r.dangerouslySetInnerHTML != "object" || !("__html" in r.dangerouslySetInnerHTML))
          throw Error(d(61));
      }
      if (r.style != null && typeof r.style != "object")
        throw Error(d(62));
    }
  }
  function Dn(n, r) {
    if (n.indexOf("-") === -1)
      return typeof r.is == "string";
    switch (n) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var Wr = null;
  function an(n) {
    return n = n.target || n.srcElement || window, n.correspondingUseElement && (n = n.correspondingUseElement), n.nodeType === 3 ? n.parentNode : n;
  }
  var da = null, en = null, on = null;
  function Il(n) {
    if (n = ms(n)) {
      if (typeof da != "function")
        throw Error(d(280));
      var r = n.stateNode;
      r && (r = et(r), da(n.stateNode, n.type, r));
    }
  }
  function qo(n) {
    en ? on ? on.push(n) : on = [n] : en = n;
  }
  function Bl() {
    if (en) {
      var n = en, r = on;
      if (on = en = null, Il(n), r)
        for (n = 0; n < r.length; n++)
          Il(r[n]);
    }
  }
  function qu(n, r) {
    return n(r);
  }
  function uc() {
  }
  var Qo = !1;
  function Yl(n, r, o) {
    if (Qo)
      return n(r, o);
    Qo = !0;
    try {
      return qu(n, r, o);
    } finally {
      Qo = !1, (en !== null || on !== null) && (uc(), Bl());
    }
  }
  function Ko(n, r) {
    var o = n.stateNode;
    if (o === null)
      return null;
    var c = et(o);
    if (c === null)
      return null;
    o = c[r];
    e:
      switch (r) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
          (c = !c.disabled) || (n = n.type, c = !(n === "button" || n === "input" || n === "select" || n === "textarea")), n = !c;
          break e;
        default:
          n = !1;
      }
    if (n)
      return null;
    if (o && typeof o != "function")
      throw Error(d(231, r, typeof o));
    return o;
  }
  var Wl = !1;
  if (R)
    try {
      var ci = {};
      Object.defineProperty(ci, "passive", { get: function() {
        Wl = !0;
      } }), window.addEventListener("test", ci, ci), window.removeEventListener("test", ci, ci);
    } catch {
      Wl = !1;
    }
  function lo(n, r, o, c, p, y, C, O, z) {
    var X = Array.prototype.slice.call(arguments, 3);
    try {
      r.apply(o, X);
    } catch (ce) {
      this.onError(ce);
    }
  }
  var pa = !1, Qa = null, uo = !1, L = null, pe = { onError: function(n) {
    pa = !0, Qa = n;
  } };
  function Re(n, r, o, c, p, y, C, O, z) {
    pa = !1, Qa = null, lo.apply(pe, arguments);
  }
  function at(n, r, o, c, p, y, C, O, z) {
    if (Re.apply(this, arguments), pa) {
      if (pa) {
        var X = Qa;
        pa = !1, Qa = null;
      } else
        throw Error(d(198));
      uo || (uo = !0, L = X);
    }
  }
  function Et(n) {
    var r = n, o = n;
    if (n.alternate)
      for (; r.return; )
        r = r.return;
    else {
      n = r;
      do
        r = n, r.flags & 4098 && (o = r.return), n = r.return;
      while (n);
    }
    return r.tag === 3 ? o : null;
  }
  function Mt(n) {
    if (n.tag === 13) {
      var r = n.memoizedState;
      if (r === null && (n = n.alternate, n !== null && (r = n.memoizedState)), r !== null)
        return r.dehydrated;
    }
    return null;
  }
  function bt(n) {
    if (Et(n) !== n)
      throw Error(d(188));
  }
  function lt(n) {
    var r = n.alternate;
    if (!r) {
      if (r = Et(n), r === null)
        throw Error(d(188));
      return r !== n ? null : n;
    }
    for (var o = n, c = r; ; ) {
      var p = o.return;
      if (p === null)
        break;
      var y = p.alternate;
      if (y === null) {
        if (c = p.return, c !== null) {
          o = c;
          continue;
        }
        break;
      }
      if (p.child === y.child) {
        for (y = p.child; y; ) {
          if (y === o)
            return bt(p), n;
          if (y === c)
            return bt(p), r;
          y = y.sibling;
        }
        throw Error(d(188));
      }
      if (o.return !== c.return)
        o = p, c = y;
      else {
        for (var C = !1, O = p.child; O; ) {
          if (O === o) {
            C = !0, o = p, c = y;
            break;
          }
          if (O === c) {
            C = !0, c = p, o = y;
            break;
          }
          O = O.sibling;
        }
        if (!C) {
          for (O = y.child; O; ) {
            if (O === o) {
              C = !0, o = y, c = p;
              break;
            }
            if (O === c) {
              C = !0, c = y, o = p;
              break;
            }
            O = O.sibling;
          }
          if (!C)
            throw Error(d(189));
        }
      }
      if (o.alternate !== c)
        throw Error(d(190));
    }
    if (o.tag !== 3)
      throw Error(d(188));
    return o.stateNode.current === o ? n : r;
  }
  function Zn(n) {
    return n = lt(n), n !== null ? dn(n) : null;
  }
  function dn(n) {
    if (n.tag === 5 || n.tag === 6)
      return n;
    for (n = n.child; n !== null; ) {
      var r = dn(n);
      if (r !== null)
        return r;
      n = n.sibling;
    }
    return null;
  }
  var pn = s.unstable_scheduleCallback, Nr = s.unstable_cancelCallback, so = s.unstable_shouldYield, sc = s.unstable_requestPaint, At = s.unstable_now, Ag = s.unstable_getCurrentPriorityLevel, Di = s.unstable_ImmediatePriority, wt = s.unstable_UserBlockingPriority, co = s.unstable_NormalPriority, Qv = s.unstable_LowPriority, Sd = s.unstable_IdlePriority, Qu = null, Ka = null;
  function Kv(n) {
    if (Ka && typeof Ka.onCommitFiberRoot == "function")
      try {
        Ka.onCommitFiberRoot(Qu, n, void 0, (n.current.flags & 128) === 128);
      } catch {
      }
  }
  var wa = Math.clz32 ? Math.clz32 : zg, Xv = Math.log, Zv = Math.LN2;
  function zg(n) {
    return n >>>= 0, n === 0 ? 32 : 31 - (Xv(n) / Zv | 0) | 0;
  }
  var cc = 64, Gl = 4194304;
  function Xo(n) {
    switch (n & -n) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return n & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return n & 130023424;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return n;
    }
  }
  function Xa(n, r) {
    var o = n.pendingLanes;
    if (o === 0)
      return 0;
    var c = 0, p = n.suspendedLanes, y = n.pingedLanes, C = o & 268435455;
    if (C !== 0) {
      var O = C & ~p;
      O !== 0 ? c = Xo(O) : (y &= C, y !== 0 && (c = Xo(y)));
    } else
      C = o & ~p, C !== 0 ? c = Xo(C) : y !== 0 && (c = Xo(y));
    if (c === 0)
      return 0;
    if (r !== 0 && r !== c && !(r & p) && (p = c & -c, y = r & -r, p >= y || p === 16 && (y & 4194240) !== 0))
      return r;
    if (c & 4 && (c |= o & 16), r = n.entangledLanes, r !== 0)
      for (n = n.entanglements, r &= c; 0 < r; )
        o = 31 - wa(r), p = 1 << o, c |= n[o], r &= ~p;
    return c;
  }
  function Ed(n, r) {
    switch (n) {
      case 1:
      case 2:
      case 4:
        return r + 250;
      case 8:
      case 16:
      case 32:
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return r + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return -1;
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function fc(n, r) {
    for (var o = n.suspendedLanes, c = n.pingedLanes, p = n.expirationTimes, y = n.pendingLanes; 0 < y; ) {
      var C = 31 - wa(y), O = 1 << C, z = p[C];
      z === -1 ? (!(O & o) || O & c) && (p[C] = Ed(O, r)) : z <= r && (n.expiredLanes |= O), y &= ~O;
    }
  }
  function bd(n) {
    return n = n.pendingLanes & -1073741825, n !== 0 ? n : n & 1073741824 ? 1073741824 : 0;
  }
  function dc() {
    var n = cc;
    return cc <<= 1, !(cc & 4194240) && (cc = 64), n;
  }
  function Cd(n) {
    for (var r = [], o = 0; 31 > o; o++)
      r.push(n);
    return r;
  }
  function Zo(n, r, o) {
    n.pendingLanes |= r, r !== 536870912 && (n.suspendedLanes = 0, n.pingedLanes = 0), n = n.eventTimes, r = 31 - wa(r), n[r] = o;
  }
  function Pg(n, r) {
    var o = n.pendingLanes & ~r;
    n.pendingLanes = r, n.suspendedLanes = 0, n.pingedLanes = 0, n.expiredLanes &= r, n.mutableReadLanes &= r, n.entangledLanes &= r, r = n.entanglements;
    var c = n.eventTimes;
    for (n = n.expirationTimes; 0 < o; ) {
      var p = 31 - wa(o), y = 1 << p;
      r[p] = 0, c[p] = -1, n[p] = -1, o &= ~y;
    }
  }
  function Ku(n, r) {
    var o = n.entangledLanes |= r;
    for (n = n.entanglements; o; ) {
      var c = 31 - wa(o), p = 1 << c;
      p & r | n[c] & r && (n[c] |= r), o &= ~p;
    }
  }
  var Ht = 0;
  function xd(n) {
    return n &= -n, 1 < n ? 4 < n ? n & 268435455 ? 16 : 536870912 : 4 : 1;
  }
  var Jv, pc, tn, eh, Td, yt = !1, Xu = [], An = null, _a = null, ka = null, Zu = /* @__PURE__ */ new Map(), Hn = /* @__PURE__ */ new Map(), Yt = [], Ug = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function Za(n, r) {
    switch (n) {
      case "focusin":
      case "focusout":
        An = null;
        break;
      case "dragenter":
      case "dragleave":
        _a = null;
        break;
      case "mouseover":
      case "mouseout":
        ka = null;
        break;
      case "pointerover":
      case "pointerout":
        Zu.delete(r.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Hn.delete(r.pointerId);
    }
  }
  function Sr(n, r, o, c, p, y) {
    return n === null || n.nativeEvent !== y ? (n = { blockedOn: r, domEventName: o, eventSystemFlags: c, nativeEvent: y, targetContainers: [p] }, r !== null && (r = ms(r), r !== null && pc(r)), n) : (n.eventSystemFlags |= c, r = n.targetContainers, p !== null && r.indexOf(p) === -1 && r.push(p), n);
  }
  function fo(n, r, o, c, p) {
    switch (r) {
      case "focusin":
        return An = Sr(An, n, r, o, c, p), !0;
      case "dragenter":
        return _a = Sr(_a, n, r, o, c, p), !0;
      case "mouseover":
        return ka = Sr(ka, n, r, o, c, p), !0;
      case "pointerover":
        var y = p.pointerId;
        return Zu.set(y, Sr(Zu.get(y) || null, n, r, o, c, p)), !0;
      case "gotpointercapture":
        return y = p.pointerId, Hn.set(y, Sr(Hn.get(y) || null, n, r, o, c, p)), !0;
    }
    return !1;
  }
  function th(n) {
    var r = Da(n.target);
    if (r !== null) {
      var o = Et(r);
      if (o !== null) {
        if (r = o.tag, r === 13) {
          if (r = Mt(o), r !== null) {
            n.blockedOn = r, Td(n.priority, function() {
              tn(o);
            });
            return;
          }
        } else if (r === 3 && o.stateNode.current.memoizedState.isDehydrated) {
          n.blockedOn = o.tag === 3 ? o.stateNode.containerInfo : null;
          return;
        }
      }
    }
    n.blockedOn = null;
  }
  function ql(n) {
    if (n.blockedOn !== null)
      return !1;
    for (var r = n.targetContainers; 0 < r.length; ) {
      var o = mc(n.domEventName, n.eventSystemFlags, r[0], n.nativeEvent);
      if (o === null) {
        o = n.nativeEvent;
        var c = new o.constructor(o.type, o);
        Wr = c, o.target.dispatchEvent(c), Wr = null;
      } else
        return r = ms(o), r !== null && pc(r), n.blockedOn = o, !1;
      r.shift();
    }
    return !0;
  }
  function Rd(n, r, o) {
    ql(n) && o.delete(r);
  }
  function nh() {
    yt = !1, An !== null && ql(An) && (An = null), _a !== null && ql(_a) && (_a = null), ka !== null && ql(ka) && (ka = null), Zu.forEach(Rd), Hn.forEach(Rd);
  }
  function Ju(n, r) {
    n.blockedOn === r && (n.blockedOn = null, yt || (yt = !0, s.unstable_scheduleCallback(s.unstable_NormalPriority, nh)));
  }
  function es(n) {
    function r(p) {
      return Ju(p, n);
    }
    if (0 < Xu.length) {
      Ju(Xu[0], n);
      for (var o = 1; o < Xu.length; o++) {
        var c = Xu[o];
        c.blockedOn === n && (c.blockedOn = null);
      }
    }
    for (An !== null && Ju(An, n), _a !== null && Ju(_a, n), ka !== null && Ju(ka, n), Zu.forEach(r), Hn.forEach(r), o = 0; o < Yt.length; o++)
      c = Yt[o], c.blockedOn === n && (c.blockedOn = null);
    for (; 0 < Yt.length && (o = Yt[0], o.blockedOn === null); )
      th(o), o.blockedOn === null && Yt.shift();
  }
  var Ql = J.ReactCurrentBatchConfig, Jo = !0;
  function rh(n, r, o, c) {
    var p = Ht, y = Ql.transition;
    Ql.transition = null;
    try {
      Ht = 1, hc(n, r, o, c);
    } finally {
      Ht = p, Ql.transition = y;
    }
  }
  function vc(n, r, o, c) {
    var p = Ht, y = Ql.transition;
    Ql.transition = null;
    try {
      Ht = 4, hc(n, r, o, c);
    } finally {
      Ht = p, Ql.transition = y;
    }
  }
  function hc(n, r, o, c) {
    if (Jo) {
      var p = mc(n, r, o, c);
      if (p === null)
        kc(n, r, c, ts, o), Za(n, c);
      else if (fo(p, n, r, o, c))
        c.stopPropagation();
      else if (Za(n, c), r & 4 && -1 < Ug.indexOf(n)) {
        for (; p !== null; ) {
          var y = ms(p);
          if (y !== null && Jv(y), y = mc(n, r, o, c), y === null && kc(n, r, c, ts, o), y === p)
            break;
          p = y;
        }
        p !== null && c.stopPropagation();
      } else
        kc(n, r, c, null, o);
    }
  }
  var ts = null;
  function mc(n, r, o, c) {
    if (ts = null, n = an(c), n = Da(n), n !== null)
      if (r = Et(n), r === null)
        n = null;
      else if (o = r.tag, o === 13) {
        if (n = Mt(r), n !== null)
          return n;
        n = null;
      } else if (o === 3) {
        if (r.stateNode.current.memoizedState.isDehydrated)
          return r.tag === 3 ? r.stateNode.containerInfo : null;
        n = null;
      } else
        r !== n && (n = null);
    return ts = n, null;
  }
  function wd(n) {
    switch (n) {
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 1;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "toggle":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 4;
      case "message":
        switch (Ag()) {
          case Di:
            return 1;
          case wt:
            return 4;
          case co:
          case Qv:
            return 16;
          case Sd:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var Ni = null, ns = null, rs = null;
  function _d() {
    if (rs)
      return rs;
    var n, r = ns, o = r.length, c, p = "value" in Ni ? Ni.value : Ni.textContent, y = p.length;
    for (n = 0; n < o && r[n] === p[n]; n++)
      ;
    var C = o - n;
    for (c = 1; c <= C && r[o - c] === p[y - c]; c++)
      ;
    return rs = p.slice(n, 1 < c ? 1 - c : void 0);
  }
  function Kl(n) {
    var r = n.keyCode;
    return "charCode" in n ? (n = n.charCode, n === 0 && r === 13 && (n = 13)) : n = r, n === 10 && (n = 13), 32 <= n || n === 13 ? n : 0;
  }
  function as() {
    return !0;
  }
  function ah() {
    return !1;
  }
  function va(n) {
    function r(o, c, p, y, C) {
      this._reactName = o, this._targetInst = p, this.type = c, this.nativeEvent = y, this.target = C, this.currentTarget = null;
      for (var O in n)
        n.hasOwnProperty(O) && (o = n[O], this[O] = o ? o(y) : y[O]);
      return this.isDefaultPrevented = (y.defaultPrevented != null ? y.defaultPrevented : y.returnValue === !1) ? as : ah, this.isPropagationStopped = ah, this;
    }
    return I(r.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var o = this.nativeEvent;
      o && (o.preventDefault ? o.preventDefault() : typeof o.returnValue != "unknown" && (o.returnValue = !1), this.isDefaultPrevented = as);
    }, stopPropagation: function() {
      var o = this.nativeEvent;
      o && (o.stopPropagation ? o.stopPropagation() : typeof o.cancelBubble != "unknown" && (o.cancelBubble = !0), this.isPropagationStopped = as);
    }, persist: function() {
    }, isPersistent: as }), r;
  }
  var po = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(n) {
    return n.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, yc = va(po), Xl = I({}, po, { view: 0, detail: 0 }), ih = va(Xl), gc, kd, is, Jn = I({}, Xl, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Md, button: 0, buttons: 0, relatedTarget: function(n) {
    return n.relatedTarget === void 0 ? n.fromElement === n.srcElement ? n.toElement : n.fromElement : n.relatedTarget;
  }, movementX: function(n) {
    return "movementX" in n ? n.movementX : (n !== is && (is && n.type === "mousemove" ? (gc = n.screenX - is.screenX, kd = n.screenY - is.screenY) : kd = gc = 0, is = n), gc);
  }, movementY: function(n) {
    return "movementY" in n ? n.movementY : kd;
  } }), Sc = va(Jn), oh = I({}, Jn, { dataTransfer: 0 }), lh = va(oh), jg = I({}, Xl, { relatedTarget: 0 }), vo = va(jg), Od = I({}, po, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), uh = va(Od), $g = I({}, po, { clipboardData: function(n) {
    return "clipboardData" in n ? n.clipboardData : window.clipboardData;
  } }), Fg = va($g), Vg = I({}, po, { data: 0 }), Dd = va(Vg), Nd = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
  }, sh = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
  }, ch = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function fh(n) {
    var r = this.nativeEvent;
    return r.getModifierState ? r.getModifierState(n) : (n = ch[n]) ? !!r[n] : !1;
  }
  function Md() {
    return fh;
  }
  var Mi = I({}, Xl, { key: function(n) {
    if (n.key) {
      var r = Nd[n.key] || n.key;
      if (r !== "Unidentified")
        return r;
    }
    return n.type === "keypress" ? (n = Kl(n), n === 13 ? "Enter" : String.fromCharCode(n)) : n.type === "keydown" || n.type === "keyup" ? sh[n.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Md, charCode: function(n) {
    return n.type === "keypress" ? Kl(n) : 0;
  }, keyCode: function(n) {
    return n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  }, which: function(n) {
    return n.type === "keypress" ? Kl(n) : n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  } }), Hg = va(Mi), Ld = I({}, Jn, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Ec = va(Ld), Ad = I({}, Xl, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Md }), Ig = va(Ad), bc = I({}, po, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), dh = va(bc), Gr = I({}, Jn, {
    deltaX: function(n) {
      return "deltaX" in n ? n.deltaX : "wheelDeltaX" in n ? -n.wheelDeltaX : 0;
    },
    deltaY: function(n) {
      return "deltaY" in n ? n.deltaY : "wheelDeltaY" in n ? -n.wheelDeltaY : "wheelDelta" in n ? -n.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Li = va(Gr), zn = [9, 13, 27, 32], Ja = R && "CompositionEvent" in window, el = null;
  R && "documentMode" in document && (el = document.documentMode);
  var Cc = R && "TextEvent" in window && !el, ph = R && (!Ja || el && 8 < el && 11 >= el), Zl = " ", vh = !1;
  function hh(n, r) {
    switch (n) {
      case "keyup":
        return zn.indexOf(r.keyCode) !== -1;
      case "keydown":
        return r.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function xc(n) {
    return n = n.detail, typeof n == "object" && "data" in n ? n.data : null;
  }
  var Jl = !1;
  function Bg(n, r) {
    switch (n) {
      case "compositionend":
        return xc(r);
      case "keypress":
        return r.which !== 32 ? null : (vh = !0, Zl);
      case "textInput":
        return n = r.data, n === Zl && vh ? null : n;
      default:
        return null;
    }
  }
  function Yg(n, r) {
    if (Jl)
      return n === "compositionend" || !Ja && hh(n, r) ? (n = _d(), rs = ns = Ni = null, Jl = !1, n) : null;
    switch (n) {
      case "paste":
        return null;
      case "keypress":
        if (!(r.ctrlKey || r.altKey || r.metaKey) || r.ctrlKey && r.altKey) {
          if (r.char && 1 < r.char.length)
            return r.char;
          if (r.which)
            return String.fromCharCode(r.which);
        }
        return null;
      case "compositionend":
        return ph && r.locale !== "ko" ? null : r.data;
      default:
        return null;
    }
  }
  var mh = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function yh(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r === "input" ? !!mh[n.type] : r === "textarea";
  }
  function gh(n, r, o, c) {
    qo(c), r = ps(r, "onChange"), 0 < r.length && (o = new yc("onChange", "change", null, o, c), n.push({ event: o, listeners: r }));
  }
  var os = null, eu = null;
  function tu(n) {
    _c(n, 0);
  }
  function nu(n) {
    var r = au(n);
    if (Z(r))
      return n;
  }
  function Sh(n, r) {
    if (n === "change")
      return r;
  }
  var zd = !1;
  if (R) {
    var Pd;
    if (R) {
      var Ud = "oninput" in document;
      if (!Ud) {
        var Eh = document.createElement("div");
        Eh.setAttribute("oninput", "return;"), Ud = typeof Eh.oninput == "function";
      }
      Pd = Ud;
    } else
      Pd = !1;
    zd = Pd && (!document.documentMode || 9 < document.documentMode);
  }
  function bh() {
    os && (os.detachEvent("onpropertychange", Ch), eu = os = null);
  }
  function Ch(n) {
    if (n.propertyName === "value" && nu(eu)) {
      var r = [];
      gh(r, eu, n, an(n)), Yl(tu, r);
    }
  }
  function Wg(n, r, o) {
    n === "focusin" ? (bh(), os = r, eu = o, os.attachEvent("onpropertychange", Ch)) : n === "focusout" && bh();
  }
  function Gg(n) {
    if (n === "selectionchange" || n === "keyup" || n === "keydown")
      return nu(eu);
  }
  function qg(n, r) {
    if (n === "click")
      return nu(r);
  }
  function xh(n, r) {
    if (n === "input" || n === "change")
      return nu(r);
  }
  function Qg(n, r) {
    return n === r && (n !== 0 || 1 / n === 1 / r) || n !== n && r !== r;
  }
  var Oa = typeof Object.is == "function" ? Object.is : Qg;
  function ls(n, r) {
    if (Oa(n, r))
      return !0;
    if (typeof n != "object" || n === null || typeof r != "object" || r === null)
      return !1;
    var o = Object.keys(n), c = Object.keys(r);
    if (o.length !== c.length)
      return !1;
    for (c = 0; c < o.length; c++) {
      var p = o[c];
      if (!w.call(r, p) || !Oa(n[p], r[p]))
        return !1;
    }
    return !0;
  }
  function Th(n) {
    for (; n && n.firstChild; )
      n = n.firstChild;
    return n;
  }
  function Rh(n, r) {
    var o = Th(n);
    n = 0;
    for (var c; o; ) {
      if (o.nodeType === 3) {
        if (c = n + o.textContent.length, n <= r && c >= r)
          return { node: o, offset: r - n };
        n = c;
      }
      e: {
        for (; o; ) {
          if (o.nextSibling) {
            o = o.nextSibling;
            break e;
          }
          o = o.parentNode;
        }
        o = void 0;
      }
      o = Th(o);
    }
  }
  function wh(n, r) {
    return n && r ? n === r ? !0 : n && n.nodeType === 3 ? !1 : r && r.nodeType === 3 ? wh(n, r.parentNode) : "contains" in n ? n.contains(r) : n.compareDocumentPosition ? !!(n.compareDocumentPosition(r) & 16) : !1 : !1;
  }
  function Tc() {
    for (var n = window, r = mt(); r instanceof n.HTMLIFrameElement; ) {
      try {
        var o = typeof r.contentWindow.location.href == "string";
      } catch {
        o = !1;
      }
      if (o)
        n = r.contentWindow;
      else
        break;
      r = mt(n.document);
    }
    return r;
  }
  function Ai(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r && (r === "input" && (n.type === "text" || n.type === "search" || n.type === "tel" || n.type === "url" || n.type === "password") || r === "textarea" || n.contentEditable === "true");
  }
  function Rc(n) {
    var r = Tc(), o = n.focusedElem, c = n.selectionRange;
    if (r !== o && o && o.ownerDocument && wh(o.ownerDocument.documentElement, o)) {
      if (c !== null && Ai(o)) {
        if (r = c.start, n = c.end, n === void 0 && (n = r), "selectionStart" in o)
          o.selectionStart = r, o.selectionEnd = Math.min(n, o.value.length);
        else if (n = (r = o.ownerDocument || document) && r.defaultView || window, n.getSelection) {
          n = n.getSelection();
          var p = o.textContent.length, y = Math.min(c.start, p);
          c = c.end === void 0 ? y : Math.min(c.end, p), !n.extend && y > c && (p = c, c = y, y = p), p = Rh(o, y);
          var C = Rh(
            o,
            c
          );
          p && C && (n.rangeCount !== 1 || n.anchorNode !== p.node || n.anchorOffset !== p.offset || n.focusNode !== C.node || n.focusOffset !== C.offset) && (r = r.createRange(), r.setStart(p.node, p.offset), n.removeAllRanges(), y > c ? (n.addRange(r), n.extend(C.node, C.offset)) : (r.setEnd(C.node, C.offset), n.addRange(r)));
        }
      }
      for (r = [], n = o; n = n.parentNode; )
        n.nodeType === 1 && r.push({ element: n, left: n.scrollLeft, top: n.scrollTop });
      for (typeof o.focus == "function" && o.focus(), o = 0; o < r.length; o++)
        n = r[o], n.element.scrollLeft = n.left, n.element.scrollTop = n.top;
    }
  }
  var _h = R && "documentMode" in document && 11 >= document.documentMode, ei = null, jd = null, us = null, $d = !1;
  function kh(n, r, o) {
    var c = o.window === o ? o.document : o.nodeType === 9 ? o : o.ownerDocument;
    $d || ei == null || ei !== mt(c) || (c = ei, "selectionStart" in c && Ai(c) ? c = { start: c.selectionStart, end: c.selectionEnd } : (c = (c.ownerDocument && c.ownerDocument.defaultView || window).getSelection(), c = { anchorNode: c.anchorNode, anchorOffset: c.anchorOffset, focusNode: c.focusNode, focusOffset: c.focusOffset }), us && ls(us, c) || (us = c, c = ps(jd, "onSelect"), 0 < c.length && (r = new yc("onSelect", "select", null, r, o), n.push({ event: r, listeners: c }), r.target = ei)));
  }
  function wc(n, r) {
    var o = {};
    return o[n.toLowerCase()] = r.toLowerCase(), o["Webkit" + n] = "webkit" + r, o["Moz" + n] = "moz" + r, o;
  }
  var tl = { animationend: wc("Animation", "AnimationEnd"), animationiteration: wc("Animation", "AnimationIteration"), animationstart: wc("Animation", "AnimationStart"), transitionend: wc("Transition", "TransitionEnd") }, Fd = {}, Vd = {};
  R && (Vd = document.createElement("div").style, "AnimationEvent" in window || (delete tl.animationend.animation, delete tl.animationiteration.animation, delete tl.animationstart.animation), "TransitionEvent" in window || delete tl.transitionend.transition);
  function er(n) {
    if (Fd[n])
      return Fd[n];
    if (!tl[n])
      return n;
    var r = tl[n], o;
    for (o in r)
      if (r.hasOwnProperty(o) && o in Vd)
        return Fd[n] = r[o];
    return n;
  }
  var Hd = er("animationend"), Oh = er("animationiteration"), Dh = er("animationstart"), Nh = er("transitionend"), Mh = /* @__PURE__ */ new Map(), Lh = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function zi(n, r) {
    Mh.set(n, r), S(r, [n]);
  }
  for (var ss = 0; ss < Lh.length; ss++) {
    var nl = Lh[ss], Kg = nl.toLowerCase(), cs = nl[0].toUpperCase() + nl.slice(1);
    zi(Kg, "on" + cs);
  }
  zi(Hd, "onAnimationEnd"), zi(Oh, "onAnimationIteration"), zi(Dh, "onAnimationStart"), zi("dblclick", "onDoubleClick"), zi("focusin", "onFocus"), zi("focusout", "onBlur"), zi(Nh, "onTransitionEnd"), m("onMouseEnter", ["mouseout", "mouseover"]), m("onMouseLeave", ["mouseout", "mouseover"]), m("onPointerEnter", ["pointerout", "pointerover"]), m("onPointerLeave", ["pointerout", "pointerover"]), S("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), S("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), S("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), S("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), S("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), S("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var fs = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Xg = new Set("cancel close invalid load scroll toggle".split(" ").concat(fs));
  function Ah(n, r, o) {
    var c = n.type || "unknown-event";
    n.currentTarget = o, at(c, r, void 0, n), n.currentTarget = null;
  }
  function _c(n, r) {
    r = (r & 4) !== 0;
    for (var o = 0; o < n.length; o++) {
      var c = n[o], p = c.event;
      c = c.listeners;
      e: {
        var y = void 0;
        if (r)
          for (var C = c.length - 1; 0 <= C; C--) {
            var O = c[C], z = O.instance, X = O.currentTarget;
            if (O = O.listener, z !== y && p.isPropagationStopped())
              break e;
            Ah(p, O, X), y = z;
          }
        else
          for (C = 0; C < c.length; C++) {
            if (O = c[C], z = O.instance, X = O.currentTarget, O = O.listener, z !== y && p.isPropagationStopped())
              break e;
            Ah(p, O, X), y = z;
          }
      }
    }
    if (uo)
      throw n = L, uo = !1, L = null, n;
  }
  function nn(n, r) {
    var o = r[Qd];
    o === void 0 && (o = r[Qd] = /* @__PURE__ */ new Set());
    var c = n + "__bubble";
    o.has(c) || (zh(r, n, 2, !1), o.add(c));
  }
  function ho(n, r, o) {
    var c = 0;
    r && (c |= 4), zh(o, n, c, r);
  }
  var Pi = "_reactListening" + Math.random().toString(36).slice(2);
  function ru(n) {
    if (!n[Pi]) {
      n[Pi] = !0, v.forEach(function(o) {
        o !== "selectionchange" && (Xg.has(o) || ho(o, !1, n), ho(o, !0, n));
      });
      var r = n.nodeType === 9 ? n : n.ownerDocument;
      r === null || r[Pi] || (r[Pi] = !0, ho("selectionchange", !1, r));
    }
  }
  function zh(n, r, o, c) {
    switch (wd(r)) {
      case 1:
        var p = rh;
        break;
      case 4:
        p = vc;
        break;
      default:
        p = hc;
    }
    o = p.bind(null, r, o, n), p = void 0, !Wl || r !== "touchstart" && r !== "touchmove" && r !== "wheel" || (p = !0), c ? p !== void 0 ? n.addEventListener(r, o, { capture: !0, passive: p }) : n.addEventListener(r, o, !0) : p !== void 0 ? n.addEventListener(r, o, { passive: p }) : n.addEventListener(r, o, !1);
  }
  function kc(n, r, o, c, p) {
    var y = c;
    if (!(r & 1) && !(r & 2) && c !== null)
      e:
        for (; ; ) {
          if (c === null)
            return;
          var C = c.tag;
          if (C === 3 || C === 4) {
            var O = c.stateNode.containerInfo;
            if (O === p || O.nodeType === 8 && O.parentNode === p)
              break;
            if (C === 4)
              for (C = c.return; C !== null; ) {
                var z = C.tag;
                if ((z === 3 || z === 4) && (z = C.stateNode.containerInfo, z === p || z.nodeType === 8 && z.parentNode === p))
                  return;
                C = C.return;
              }
            for (; O !== null; ) {
              if (C = Da(O), C === null)
                return;
              if (z = C.tag, z === 5 || z === 6) {
                c = y = C;
                continue e;
              }
              O = O.parentNode;
            }
          }
          c = c.return;
        }
    Yl(function() {
      var X = y, ce = an(o), he = [];
      e: {
        var se = Mh.get(n);
        if (se !== void 0) {
          var Me = yc, je = n;
          switch (n) {
            case "keypress":
              if (Kl(o) === 0)
                break e;
            case "keydown":
            case "keyup":
              Me = Hg;
              break;
            case "focusin":
              je = "focus", Me = vo;
              break;
            case "focusout":
              je = "blur", Me = vo;
              break;
            case "beforeblur":
            case "afterblur":
              Me = vo;
              break;
            case "click":
              if (o.button === 2)
                break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              Me = Sc;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              Me = lh;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              Me = Ig;
              break;
            case Hd:
            case Oh:
            case Dh:
              Me = uh;
              break;
            case Nh:
              Me = dh;
              break;
            case "scroll":
              Me = ih;
              break;
            case "wheel":
              Me = Li;
              break;
            case "copy":
            case "cut":
            case "paste":
              Me = Fg;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              Me = Ec;
          }
          var Ie = (r & 4) !== 0, Mn = !Ie && n === "scroll", B = Ie ? se !== null ? se + "Capture" : null : se;
          Ie = [];
          for (var j = X, G; j !== null; ) {
            G = j;
            var ye = G.stateNode;
            if (G.tag === 5 && ye !== null && (G = ye, B !== null && (ye = Ko(j, B), ye != null && Ie.push(ds(j, ye, G)))), Mn)
              break;
            j = j.return;
          }
          0 < Ie.length && (se = new Me(se, je, null, o, ce), he.push({ event: se, listeners: Ie }));
        }
      }
      if (!(r & 7)) {
        e: {
          if (se = n === "mouseover" || n === "pointerover", Me = n === "mouseout" || n === "pointerout", se && o !== Wr && (je = o.relatedTarget || o.fromElement) && (Da(je) || je[Ui]))
            break e;
          if ((Me || se) && (se = ce.window === ce ? ce : (se = ce.ownerDocument) ? se.defaultView || se.parentWindow : window, Me ? (je = o.relatedTarget || o.toElement, Me = X, je = je ? Da(je) : null, je !== null && (Mn = Et(je), je !== Mn || je.tag !== 5 && je.tag !== 6) && (je = null)) : (Me = null, je = X), Me !== je)) {
            if (Ie = Sc, ye = "onMouseLeave", B = "onMouseEnter", j = "mouse", (n === "pointerout" || n === "pointerover") && (Ie = Ec, ye = "onPointerLeave", B = "onPointerEnter", j = "pointer"), Mn = Me == null ? se : au(Me), G = je == null ? se : au(je), se = new Ie(ye, j + "leave", Me, o, ce), se.target = Mn, se.relatedTarget = G, ye = null, Da(ce) === X && (Ie = new Ie(B, j + "enter", je, o, ce), Ie.target = G, Ie.relatedTarget = Mn, ye = Ie), Mn = ye, Me && je)
              t: {
                for (Ie = Me, B = je, j = 0, G = Ie; G; G = rl(G))
                  j++;
                for (G = 0, ye = B; ye; ye = rl(ye))
                  G++;
                for (; 0 < j - G; )
                  Ie = rl(Ie), j--;
                for (; 0 < G - j; )
                  B = rl(B), G--;
                for (; j--; ) {
                  if (Ie === B || B !== null && Ie === B.alternate)
                    break t;
                  Ie = rl(Ie), B = rl(B);
                }
                Ie = null;
              }
            else
              Ie = null;
            Me !== null && Id(he, se, Me, Ie, !1), je !== null && Mn !== null && Id(he, Mn, je, Ie, !0);
          }
        }
        e: {
          if (se = X ? au(X) : window, Me = se.nodeName && se.nodeName.toLowerCase(), Me === "select" || Me === "input" && se.type === "file")
            var Ge = Sh;
          else if (yh(se))
            if (zd)
              Ge = xh;
            else {
              Ge = Gg;
              var $e = Wg;
            }
          else
            (Me = se.nodeName) && Me.toLowerCase() === "input" && (se.type === "checkbox" || se.type === "radio") && (Ge = qg);
          if (Ge && (Ge = Ge(n, X))) {
            gh(he, Ge, o, ce);
            break e;
          }
          $e && $e(n, se, X), n === "focusout" && ($e = se._wrapperState) && $e.controlled && se.type === "number" && ua(se, "number", se.value);
        }
        switch ($e = X ? au(X) : window, n) {
          case "focusin":
            (yh($e) || $e.contentEditable === "true") && (ei = $e, jd = X, us = null);
            break;
          case "focusout":
            us = jd = ei = null;
            break;
          case "mousedown":
            $d = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            $d = !1, kh(he, o, ce);
            break;
          case "selectionchange":
            if (_h)
              break;
          case "keydown":
          case "keyup":
            kh(he, o, ce);
        }
        var Je;
        if (Ja)
          e: {
            switch (n) {
              case "compositionstart":
                var pt = "onCompositionStart";
                break e;
              case "compositionend":
                pt = "onCompositionEnd";
                break e;
              case "compositionupdate":
                pt = "onCompositionUpdate";
                break e;
            }
            pt = void 0;
          }
        else
          Jl ? hh(n, o) && (pt = "onCompositionEnd") : n === "keydown" && o.keyCode === 229 && (pt = "onCompositionStart");
        pt && (ph && o.locale !== "ko" && (Jl || pt !== "onCompositionStart" ? pt === "onCompositionEnd" && Jl && (Je = _d()) : (Ni = ce, ns = "value" in Ni ? Ni.value : Ni.textContent, Jl = !0)), $e = ps(X, pt), 0 < $e.length && (pt = new Dd(pt, n, null, o, ce), he.push({ event: pt, listeners: $e }), Je ? pt.data = Je : (Je = xc(o), Je !== null && (pt.data = Je)))), (Je = Cc ? Bg(n, o) : Yg(n, o)) && (X = ps(X, "onBeforeInput"), 0 < X.length && (ce = new Dd("onBeforeInput", "beforeinput", null, o, ce), he.push({ event: ce, listeners: X }), ce.data = Je));
      }
      _c(he, r);
    });
  }
  function ds(n, r, o) {
    return { instance: n, listener: r, currentTarget: o };
  }
  function ps(n, r) {
    for (var o = r + "Capture", c = []; n !== null; ) {
      var p = n, y = p.stateNode;
      p.tag === 5 && y !== null && (p = y, y = Ko(n, o), y != null && c.unshift(ds(n, y, p)), y = Ko(n, r), y != null && c.push(ds(n, y, p))), n = n.return;
    }
    return c;
  }
  function rl(n) {
    if (n === null)
      return null;
    do
      n = n.return;
    while (n && n.tag !== 5);
    return n || null;
  }
  function Id(n, r, o, c, p) {
    for (var y = r._reactName, C = []; o !== null && o !== c; ) {
      var O = o, z = O.alternate, X = O.stateNode;
      if (z !== null && z === c)
        break;
      O.tag === 5 && X !== null && (O = X, p ? (z = Ko(o, y), z != null && C.unshift(ds(o, z, O))) : p || (z = Ko(o, y), z != null && C.push(ds(o, z, O)))), o = o.return;
    }
    C.length !== 0 && n.push({ event: r, listeners: C });
  }
  var Bd = /\r\n?/g, Zg = /\u0000|\uFFFD/g;
  function Yd(n) {
    return (typeof n == "string" ? n : "" + n).replace(Bd, `
`).replace(Zg, "");
  }
  function Oc(n, r, o) {
    if (r = Yd(r), Yd(n) !== r && o)
      throw Error(d(425));
  }
  function Dc() {
  }
  var Wd = null, al = null;
  function vs(n, r) {
    return n === "textarea" || n === "noscript" || typeof r.children == "string" || typeof r.children == "number" || typeof r.dangerouslySetInnerHTML == "object" && r.dangerouslySetInnerHTML !== null && r.dangerouslySetInnerHTML.__html != null;
  }
  var il = typeof setTimeout == "function" ? setTimeout : void 0, Ph = typeof clearTimeout == "function" ? clearTimeout : void 0, Gd = typeof Promise == "function" ? Promise : void 0, qd = typeof queueMicrotask == "function" ? queueMicrotask : typeof Gd < "u" ? function(n) {
    return Gd.resolve(null).then(n).catch(Jg);
  } : il;
  function Jg(n) {
    setTimeout(function() {
      throw n;
    });
  }
  function mo(n, r) {
    var o = r, c = 0;
    do {
      var p = o.nextSibling;
      if (n.removeChild(o), p && p.nodeType === 8)
        if (o = p.data, o === "/$") {
          if (c === 0) {
            n.removeChild(p), es(r);
            return;
          }
          c--;
        } else
          o !== "$" && o !== "$?" && o !== "$!" || c++;
      o = p;
    } while (o);
    es(r);
  }
  function ti(n) {
    for (; n != null; n = n.nextSibling) {
      var r = n.nodeType;
      if (r === 1 || r === 3)
        break;
      if (r === 8) {
        if (r = n.data, r === "$" || r === "$!" || r === "$?")
          break;
        if (r === "/$")
          return null;
      }
    }
    return n;
  }
  function hs(n) {
    n = n.previousSibling;
    for (var r = 0; n; ) {
      if (n.nodeType === 8) {
        var o = n.data;
        if (o === "$" || o === "$!" || o === "$?") {
          if (r === 0)
            return n;
          r--;
        } else
          o === "/$" && r++;
      }
      n = n.previousSibling;
    }
    return null;
  }
  var yo = Math.random().toString(36).slice(2), fi = "__reactFiber$" + yo, ol = "__reactProps$" + yo, Ui = "__reactContainer$" + yo, Qd = "__reactEvents$" + yo, e0 = "__reactListeners$" + yo, Kd = "__reactHandles$" + yo;
  function Da(n) {
    var r = n[fi];
    if (r)
      return r;
    for (var o = n.parentNode; o; ) {
      if (r = o[Ui] || o[fi]) {
        if (o = r.alternate, r.child !== null || o !== null && o.child !== null)
          for (n = hs(n); n !== null; ) {
            if (o = n[fi])
              return o;
            n = hs(n);
          }
        return r;
      }
      n = o, o = n.parentNode;
    }
    return null;
  }
  function ms(n) {
    return n = n[fi] || n[Ui], !n || n.tag !== 5 && n.tag !== 6 && n.tag !== 13 && n.tag !== 3 ? null : n;
  }
  function au(n) {
    if (n.tag === 5 || n.tag === 6)
      return n.stateNode;
    throw Error(d(33));
  }
  function et(n) {
    return n[ol] || null;
  }
  var go = [], ln = -1;
  function gt(n) {
    return { current: n };
  }
  function Ut(n) {
    0 > ln || (n.current = go[ln], go[ln] = null, ln--);
  }
  function jt(n, r) {
    ln++, go[ln] = n.current, n.current = r;
  }
  var di = {}, dt = gt(di), Rn = gt(!1), qr = di;
  function Na(n, r) {
    var o = n.type.contextTypes;
    if (!o)
      return di;
    var c = n.stateNode;
    if (c && c.__reactInternalMemoizedUnmaskedChildContext === r)
      return c.__reactInternalMemoizedMaskedChildContext;
    var p = {}, y;
    for (y in o)
      p[y] = r[y];
    return c && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = r, n.__reactInternalMemoizedMaskedChildContext = p), p;
  }
  function vn(n) {
    return n = n.childContextTypes, n != null;
  }
  function Ma() {
    Ut(Rn), Ut(dt);
  }
  function So(n, r, o) {
    if (dt.current !== di)
      throw Error(d(168));
    jt(dt, r), jt(Rn, o);
  }
  function ys(n, r, o) {
    var c = n.stateNode;
    if (r = r.childContextTypes, typeof c.getChildContext != "function")
      return o;
    c = c.getChildContext();
    for (var p in c)
      if (!(p in r))
        throw Error(d(108, Xe(n) || "Unknown", p));
    return I({}, o, c);
  }
  function Nc(n) {
    return n = (n = n.stateNode) && n.__reactInternalMemoizedMergedChildContext || di, qr = dt.current, jt(dt, n), jt(Rn, Rn.current), !0;
  }
  function Uh(n, r, o) {
    var c = n.stateNode;
    if (!c)
      throw Error(d(169));
    o ? (n = ys(n, r, qr), c.__reactInternalMemoizedMergedChildContext = n, Ut(Rn), Ut(dt), jt(dt, n)) : Ut(Rn), jt(Rn, o);
  }
  var ha = null, tr = !1, gs = !1;
  function Xd(n) {
    ha === null ? ha = [n] : ha.push(n);
  }
  function Zd(n) {
    tr = !0, Xd(n);
  }
  function Qr() {
    if (!gs && ha !== null) {
      gs = !0;
      var n = 0, r = Ht;
      try {
        var o = ha;
        for (Ht = 1; n < o.length; n++) {
          var c = o[n];
          do
            c = c(!0);
          while (c !== null);
        }
        ha = null, tr = !1;
      } catch (p) {
        throw ha !== null && (ha = ha.slice(n + 1)), pn(Di, Qr), p;
      } finally {
        Ht = r, gs = !1;
      }
    }
    return null;
  }
  var Eo = [], Kr = 0, ll = null, iu = 0, Xr = [], Er = 0, La = null, ur = 1, ji = "";
  function ma(n, r) {
    Eo[Kr++] = iu, Eo[Kr++] = ll, ll = n, iu = r;
  }
  function Jd(n, r, o) {
    Xr[Er++] = ur, Xr[Er++] = ji, Xr[Er++] = La, La = n;
    var c = ur;
    n = ji;
    var p = 32 - wa(c) - 1;
    c &= ~(1 << p), o += 1;
    var y = 32 - wa(r) + p;
    if (30 < y) {
      var C = p - p % 5;
      y = (c & (1 << C) - 1).toString(32), c >>= C, p -= C, ur = 1 << 32 - wa(r) + p | o << p | c, ji = y + n;
    } else
      ur = 1 << y | o << p | c, ji = n;
  }
  function Mc(n) {
    n.return !== null && (ma(n, 1), Jd(n, 1, 0));
  }
  function ep(n) {
    for (; n === ll; )
      ll = Eo[--Kr], Eo[Kr] = null, iu = Eo[--Kr], Eo[Kr] = null;
    for (; n === La; )
      La = Xr[--Er], Xr[Er] = null, ji = Xr[--Er], Xr[Er] = null, ur = Xr[--Er], Xr[Er] = null;
  }
  var ya = null, Zr = null, un = !1, Aa = null;
  function tp(n, r) {
    var o = Fa(5, null, null, 0);
    o.elementType = "DELETED", o.stateNode = r, o.return = n, r = n.deletions, r === null ? (n.deletions = [o], n.flags |= 16) : r.push(o);
  }
  function jh(n, r) {
    switch (n.tag) {
      case 5:
        var o = n.type;
        return r = r.nodeType !== 1 || o.toLowerCase() !== r.nodeName.toLowerCase() ? null : r, r !== null ? (n.stateNode = r, ya = n, Zr = ti(r.firstChild), !0) : !1;
      case 6:
        return r = n.pendingProps === "" || r.nodeType !== 3 ? null : r, r !== null ? (n.stateNode = r, ya = n, Zr = null, !0) : !1;
      case 13:
        return r = r.nodeType !== 8 ? null : r, r !== null ? (o = La !== null ? { id: ur, overflow: ji } : null, n.memoizedState = { dehydrated: r, treeContext: o, retryLane: 1073741824 }, o = Fa(18, null, null, 0), o.stateNode = r, o.return = n, n.child = o, ya = n, Zr = null, !0) : !1;
      default:
        return !1;
    }
  }
  function Lc(n) {
    return (n.mode & 1) !== 0 && (n.flags & 128) === 0;
  }
  function Ac(n) {
    if (un) {
      var r = Zr;
      if (r) {
        var o = r;
        if (!jh(n, r)) {
          if (Lc(n))
            throw Error(d(418));
          r = ti(o.nextSibling);
          var c = ya;
          r && jh(n, r) ? tp(c, o) : (n.flags = n.flags & -4097 | 2, un = !1, ya = n);
        }
      } else {
        if (Lc(n))
          throw Error(d(418));
        n.flags = n.flags & -4097 | 2, un = !1, ya = n;
      }
    }
  }
  function $h(n) {
    for (n = n.return; n !== null && n.tag !== 5 && n.tag !== 3 && n.tag !== 13; )
      n = n.return;
    ya = n;
  }
  function zc(n) {
    if (n !== ya)
      return !1;
    if (!un)
      return $h(n), un = !0, !1;
    var r;
    if ((r = n.tag !== 3) && !(r = n.tag !== 5) && (r = n.type, r = r !== "head" && r !== "body" && !vs(n.type, n.memoizedProps)), r && (r = Zr)) {
      if (Lc(n))
        throw Fh(), Error(d(418));
      for (; r; )
        tp(n, r), r = ti(r.nextSibling);
    }
    if ($h(n), n.tag === 13) {
      if (n = n.memoizedState, n = n !== null ? n.dehydrated : null, !n)
        throw Error(d(317));
      e: {
        for (n = n.nextSibling, r = 0; n; ) {
          if (n.nodeType === 8) {
            var o = n.data;
            if (o === "/$") {
              if (r === 0) {
                Zr = ti(n.nextSibling);
                break e;
              }
              r--;
            } else
              o !== "$" && o !== "$!" && o !== "$?" || r++;
          }
          n = n.nextSibling;
        }
        Zr = null;
      }
    } else
      Zr = ya ? ti(n.stateNode.nextSibling) : null;
    return !0;
  }
  function Fh() {
    for (var n = Zr; n; )
      n = ti(n.nextSibling);
  }
  function Sn() {
    Zr = ya = null, un = !1;
  }
  function np(n) {
    Aa === null ? Aa = [n] : Aa.push(n);
  }
  var Pc = J.ReactCurrentBatchConfig;
  function ga(n, r) {
    if (n && n.defaultProps) {
      r = I({}, r), n = n.defaultProps;
      for (var o in n)
        r[o] === void 0 && (r[o] = n[o]);
      return r;
    }
    return r;
  }
  var pi = gt(null), Uc = null, bo = null, rp = null;
  function ap() {
    rp = bo = Uc = null;
  }
  function Co(n) {
    var r = pi.current;
    Ut(pi), n._currentValue = r;
  }
  function nr(n, r, o) {
    for (; n !== null; ) {
      var c = n.alternate;
      if ((n.childLanes & r) !== r ? (n.childLanes |= r, c !== null && (c.childLanes |= r)) : c !== null && (c.childLanes & r) !== r && (c.childLanes |= r), n === o)
        break;
      n = n.return;
    }
  }
  function xe(n, r) {
    Uc = n, rp = bo = null, n = n.dependencies, n !== null && n.firstContext !== null && (n.lanes & r && (Pn = !0), n.firstContext = null);
  }
  function Nn(n) {
    var r = n._currentValue;
    if (rp !== n)
      if (n = { context: n, memoizedValue: r, next: null }, bo === null) {
        if (Uc === null)
          throw Error(d(308));
        bo = n, Uc.dependencies = { lanes: 0, firstContext: n };
      } else
        bo = bo.next = n;
    return r;
  }
  var sr = null;
  function ip(n) {
    sr === null ? sr = [n] : sr.push(n);
  }
  function Vh(n, r, o, c) {
    var p = r.interleaved;
    return p === null ? (o.next = o, ip(r)) : (o.next = p.next, p.next = o), r.interleaved = o, $i(n, c);
  }
  function $i(n, r) {
    n.lanes |= r;
    var o = n.alternate;
    for (o !== null && (o.lanes |= r), o = n, n = n.return; n !== null; )
      n.childLanes |= r, o = n.alternate, o !== null && (o.childLanes |= r), o = n, n = n.return;
    return o.tag === 3 ? o.stateNode : null;
  }
  var xo = !1;
  function op(n) {
    n.updateQueue = { baseState: n.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function In(n, r) {
    n = n.updateQueue, r.updateQueue === n && (r.updateQueue = { baseState: n.baseState, firstBaseUpdate: n.firstBaseUpdate, lastBaseUpdate: n.lastBaseUpdate, shared: n.shared, effects: n.effects });
  }
  function Fi(n, r) {
    return { eventTime: n, lane: r, tag: 0, payload: null, callback: null, next: null };
  }
  function To(n, r, o) {
    var c = n.updateQueue;
    if (c === null)
      return null;
    if (c = c.shared, _t & 2) {
      var p = c.pending;
      return p === null ? r.next = r : (r.next = p.next, p.next = r), c.pending = r, $i(n, o);
    }
    return p = c.interleaved, p === null ? (r.next = r, ip(c)) : (r.next = p.next, p.next = r), c.interleaved = r, $i(n, o);
  }
  function jc(n, r, o) {
    if (r = r.updateQueue, r !== null && (r = r.shared, (o & 4194240) !== 0)) {
      var c = r.lanes;
      c &= n.pendingLanes, o |= c, r.lanes = o, Ku(n, o);
    }
  }
  function lp(n, r) {
    var o = n.updateQueue, c = n.alternate;
    if (c !== null && (c = c.updateQueue, o === c)) {
      var p = null, y = null;
      if (o = o.firstBaseUpdate, o !== null) {
        do {
          var C = { eventTime: o.eventTime, lane: o.lane, tag: o.tag, payload: o.payload, callback: o.callback, next: null };
          y === null ? p = y = C : y = y.next = C, o = o.next;
        } while (o !== null);
        y === null ? p = y = r : y = y.next = r;
      } else
        p = y = r;
      o = { baseState: c.baseState, firstBaseUpdate: p, lastBaseUpdate: y, shared: c.shared, effects: c.effects }, n.updateQueue = o;
      return;
    }
    n = o.lastBaseUpdate, n === null ? o.firstBaseUpdate = r : n.next = r, o.lastBaseUpdate = r;
  }
  function Ro(n, r, o, c) {
    var p = n.updateQueue;
    xo = !1;
    var y = p.firstBaseUpdate, C = p.lastBaseUpdate, O = p.shared.pending;
    if (O !== null) {
      p.shared.pending = null;
      var z = O, X = z.next;
      z.next = null, C === null ? y = X : C.next = X, C = z;
      var ce = n.alternate;
      ce !== null && (ce = ce.updateQueue, O = ce.lastBaseUpdate, O !== C && (O === null ? ce.firstBaseUpdate = X : O.next = X, ce.lastBaseUpdate = z));
    }
    if (y !== null) {
      var he = p.baseState;
      C = 0, ce = X = z = null, O = y;
      do {
        var se = O.lane, Me = O.eventTime;
        if ((c & se) === se) {
          ce !== null && (ce = ce.next = {
            eventTime: Me,
            lane: 0,
            tag: O.tag,
            payload: O.payload,
            callback: O.callback,
            next: null
          });
          e: {
            var je = n, Ie = O;
            switch (se = r, Me = o, Ie.tag) {
              case 1:
                if (je = Ie.payload, typeof je == "function") {
                  he = je.call(Me, he, se);
                  break e;
                }
                he = je;
                break e;
              case 3:
                je.flags = je.flags & -65537 | 128;
              case 0:
                if (je = Ie.payload, se = typeof je == "function" ? je.call(Me, he, se) : je, se == null)
                  break e;
                he = I({}, he, se);
                break e;
              case 2:
                xo = !0;
            }
          }
          O.callback !== null && O.lane !== 0 && (n.flags |= 64, se = p.effects, se === null ? p.effects = [O] : se.push(O));
        } else
          Me = { eventTime: Me, lane: se, tag: O.tag, payload: O.payload, callback: O.callback, next: null }, ce === null ? (X = ce = Me, z = he) : ce = ce.next = Me, C |= se;
        if (O = O.next, O === null) {
          if (O = p.shared.pending, O === null)
            break;
          se = O, O = se.next, se.next = null, p.lastBaseUpdate = se, p.shared.pending = null;
        }
      } while (!0);
      if (ce === null && (z = he), p.baseState = z, p.firstBaseUpdate = X, p.lastBaseUpdate = ce, r = p.shared.interleaved, r !== null) {
        p = r;
        do
          C |= p.lane, p = p.next;
        while (p !== r);
      } else
        y === null && (p.shared.lanes = 0);
      Bi |= C, n.lanes = C, n.memoizedState = he;
    }
  }
  function ul(n, r, o) {
    if (n = r.effects, r.effects = null, n !== null)
      for (r = 0; r < n.length; r++) {
        var c = n[r], p = c.callback;
        if (p !== null) {
          if (c.callback = null, c = o, typeof p != "function")
            throw Error(d(191, p));
          p.call(c);
        }
      }
  }
  var Hh = new l.Component().refs;
  function up(n, r, o, c) {
    r = n.memoizedState, o = o(c, r), o = o == null ? r : I({}, r, o), n.memoizedState = o, n.lanes === 0 && (n.updateQueue.baseState = o);
  }
  var $c = { isMounted: function(n) {
    return (n = n._reactInternals) ? Et(n) === n : !1;
  }, enqueueSetState: function(n, r, o) {
    n = n._reactInternals;
    var c = Tr(), p = Un(n), y = Fi(c, p);
    y.payload = r, o != null && (y.callback = o), r = To(n, y, p), r !== null && (Rr(r, n, p, c), jc(r, n, p));
  }, enqueueReplaceState: function(n, r, o) {
    n = n._reactInternals;
    var c = Tr(), p = Un(n), y = Fi(c, p);
    y.tag = 1, y.payload = r, o != null && (y.callback = o), r = To(n, y, p), r !== null && (Rr(r, n, p, c), jc(r, n, p));
  }, enqueueForceUpdate: function(n, r) {
    n = n._reactInternals;
    var o = Tr(), c = Un(n), p = Fi(o, c);
    p.tag = 2, r != null && (p.callback = r), r = To(n, p, c), r !== null && (Rr(r, n, c, o), jc(r, n, c));
  } };
  function Ih(n, r, o, c, p, y, C) {
    return n = n.stateNode, typeof n.shouldComponentUpdate == "function" ? n.shouldComponentUpdate(c, y, C) : r.prototype && r.prototype.isPureReactComponent ? !ls(o, c) || !ls(p, y) : !0;
  }
  function Bh(n, r, o) {
    var c = !1, p = di, y = r.contextType;
    return typeof y == "object" && y !== null ? y = Nn(y) : (p = vn(r) ? qr : dt.current, c = r.contextTypes, y = (c = c != null) ? Na(n, p) : di), r = new r(o, y), n.memoizedState = r.state !== null && r.state !== void 0 ? r.state : null, r.updater = $c, n.stateNode = r, r._reactInternals = n, c && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = p, n.__reactInternalMemoizedMaskedChildContext = y), r;
  }
  function Yh(n, r, o, c) {
    n = r.state, typeof r.componentWillReceiveProps == "function" && r.componentWillReceiveProps(o, c), typeof r.UNSAFE_componentWillReceiveProps == "function" && r.UNSAFE_componentWillReceiveProps(o, c), r.state !== n && $c.enqueueReplaceState(r, r.state, null);
  }
  function Fc(n, r, o, c) {
    var p = n.stateNode;
    p.props = o, p.state = n.memoizedState, p.refs = Hh, op(n);
    var y = r.contextType;
    typeof y == "object" && y !== null ? p.context = Nn(y) : (y = vn(r) ? qr : dt.current, p.context = Na(n, y)), p.state = n.memoizedState, y = r.getDerivedStateFromProps, typeof y == "function" && (up(n, r, y, o), p.state = n.memoizedState), typeof r.getDerivedStateFromProps == "function" || typeof p.getSnapshotBeforeUpdate == "function" || typeof p.UNSAFE_componentWillMount != "function" && typeof p.componentWillMount != "function" || (r = p.state, typeof p.componentWillMount == "function" && p.componentWillMount(), typeof p.UNSAFE_componentWillMount == "function" && p.UNSAFE_componentWillMount(), r !== p.state && $c.enqueueReplaceState(p, p.state, null), Ro(n, o, p, c), p.state = n.memoizedState), typeof p.componentDidMount == "function" && (n.flags |= 4194308);
  }
  function ou(n, r, o) {
    if (n = o.ref, n !== null && typeof n != "function" && typeof n != "object") {
      if (o._owner) {
        if (o = o._owner, o) {
          if (o.tag !== 1)
            throw Error(d(309));
          var c = o.stateNode;
        }
        if (!c)
          throw Error(d(147, n));
        var p = c, y = "" + n;
        return r !== null && r.ref !== null && typeof r.ref == "function" && r.ref._stringRef === y ? r.ref : (r = function(C) {
          var O = p.refs;
          O === Hh && (O = p.refs = {}), C === null ? delete O[y] : O[y] = C;
        }, r._stringRef = y, r);
      }
      if (typeof n != "string")
        throw Error(d(284));
      if (!o._owner)
        throw Error(d(290, n));
    }
    return n;
  }
  function Vc(n, r) {
    throw n = Object.prototype.toString.call(r), Error(d(31, n === "[object Object]" ? "object with keys {" + Object.keys(r).join(", ") + "}" : n));
  }
  function Wh(n) {
    var r = n._init;
    return r(n._payload);
  }
  function Gh(n) {
    function r(B, j) {
      if (n) {
        var G = B.deletions;
        G === null ? (B.deletions = [j], B.flags |= 16) : G.push(j);
      }
    }
    function o(B, j) {
      if (!n)
        return null;
      for (; j !== null; )
        r(B, j), j = j.sibling;
      return null;
    }
    function c(B, j) {
      for (B = /* @__PURE__ */ new Map(); j !== null; )
        j.key !== null ? B.set(j.key, j) : B.set(j.index, j), j = j.sibling;
      return B;
    }
    function p(B, j) {
      return B = Lo(B, j), B.index = 0, B.sibling = null, B;
    }
    function y(B, j, G) {
      return B.index = G, n ? (G = B.alternate, G !== null ? (G = G.index, G < j ? (B.flags |= 2, j) : G) : (B.flags |= 2, j)) : (B.flags |= 1048576, j);
    }
    function C(B) {
      return n && B.alternate === null && (B.flags |= 2), B;
    }
    function O(B, j, G, ye) {
      return j === null || j.tag !== 6 ? (j = Us(G, B.mode, ye), j.return = B, j) : (j = p(j, G), j.return = B, j);
    }
    function z(B, j, G, ye) {
      var Ge = G.type;
      return Ge === ie ? ce(B, j, G.props.children, ye, G.key) : j !== null && (j.elementType === Ge || typeof Ge == "object" && Ge !== null && Ge.$$typeof === be && Wh(Ge) === j.type) ? (ye = p(j, G.props), ye.ref = ou(B, j, G), ye.return = B, ye) : (ye = Ef(G.type, G.key, G.props, null, B.mode, ye), ye.ref = ou(B, j, G), ye.return = B, ye);
    }
    function X(B, j, G, ye) {
      return j === null || j.tag !== 4 || j.stateNode.containerInfo !== G.containerInfo || j.stateNode.implementation !== G.implementation ? (j = _l(G, B.mode, ye), j.return = B, j) : (j = p(j, G.children || []), j.return = B, j);
    }
    function ce(B, j, G, ye, Ge) {
      return j === null || j.tag !== 7 ? (j = wl(G, B.mode, ye, Ge), j.return = B, j) : (j = p(j, G), j.return = B, j);
    }
    function he(B, j, G) {
      if (typeof j == "string" && j !== "" || typeof j == "number")
        return j = Us("" + j, B.mode, G), j.return = B, j;
      if (typeof j == "object" && j !== null) {
        switch (j.$$typeof) {
          case D:
            return G = Ef(j.type, j.key, j.props, null, B.mode, G), G.ref = ou(B, null, j), G.return = B, G;
          case ve:
            return j = _l(j, B.mode, G), j.return = B, j;
          case be:
            var ye = j._init;
            return he(B, ye(j._payload), G);
        }
        if (sa(j) || Pe(j))
          return j = wl(j, B.mode, G, null), j.return = B, j;
        Vc(B, j);
      }
      return null;
    }
    function se(B, j, G, ye) {
      var Ge = j !== null ? j.key : null;
      if (typeof G == "string" && G !== "" || typeof G == "number")
        return Ge !== null ? null : O(B, j, "" + G, ye);
      if (typeof G == "object" && G !== null) {
        switch (G.$$typeof) {
          case D:
            return G.key === Ge ? z(B, j, G, ye) : null;
          case ve:
            return G.key === Ge ? X(B, j, G, ye) : null;
          case be:
            return Ge = G._init, se(
              B,
              j,
              Ge(G._payload),
              ye
            );
        }
        if (sa(G) || Pe(G))
          return Ge !== null ? null : ce(B, j, G, ye, null);
        Vc(B, G);
      }
      return null;
    }
    function Me(B, j, G, ye, Ge) {
      if (typeof ye == "string" && ye !== "" || typeof ye == "number")
        return B = B.get(G) || null, O(j, B, "" + ye, Ge);
      if (typeof ye == "object" && ye !== null) {
        switch (ye.$$typeof) {
          case D:
            return B = B.get(ye.key === null ? G : ye.key) || null, z(j, B, ye, Ge);
          case ve:
            return B = B.get(ye.key === null ? G : ye.key) || null, X(j, B, ye, Ge);
          case be:
            var $e = ye._init;
            return Me(B, j, G, $e(ye._payload), Ge);
        }
        if (sa(ye) || Pe(ye))
          return B = B.get(G) || null, ce(j, B, ye, Ge, null);
        Vc(j, ye);
      }
      return null;
    }
    function je(B, j, G, ye) {
      for (var Ge = null, $e = null, Je = j, pt = j = 0, ir = null; Je !== null && pt < G.length; pt++) {
        Je.index > pt ? (ir = Je, Je = null) : ir = Je.sibling;
        var Lt = se(B, Je, G[pt], ye);
        if (Lt === null) {
          Je === null && (Je = ir);
          break;
        }
        n && Je && Lt.alternate === null && r(B, Je), j = y(Lt, j, pt), $e === null ? Ge = Lt : $e.sibling = Lt, $e = Lt, Je = ir;
      }
      if (pt === G.length)
        return o(B, Je), un && ma(B, pt), Ge;
      if (Je === null) {
        for (; pt < G.length; pt++)
          Je = he(B, G[pt], ye), Je !== null && (j = y(Je, j, pt), $e === null ? Ge = Je : $e.sibling = Je, $e = Je);
        return un && ma(B, pt), Ge;
      }
      for (Je = c(B, Je); pt < G.length; pt++)
        ir = Me(Je, B, pt, G[pt], ye), ir !== null && (n && ir.alternate !== null && Je.delete(ir.key === null ? pt : ir.key), j = y(ir, j, pt), $e === null ? Ge = ir : $e.sibling = ir, $e = ir);
      return n && Je.forEach(function(Ao) {
        return r(B, Ao);
      }), un && ma(B, pt), Ge;
    }
    function Ie(B, j, G, ye) {
      var Ge = Pe(G);
      if (typeof Ge != "function")
        throw Error(d(150));
      if (G = Ge.call(G), G == null)
        throw Error(d(151));
      for (var $e = Ge = null, Je = j, pt = j = 0, ir = null, Lt = G.next(); Je !== null && !Lt.done; pt++, Lt = G.next()) {
        Je.index > pt ? (ir = Je, Je = null) : ir = Je.sibling;
        var Ao = se(B, Je, Lt.value, ye);
        if (Ao === null) {
          Je === null && (Je = ir);
          break;
        }
        n && Je && Ao.alternate === null && r(B, Je), j = y(Ao, j, pt), $e === null ? Ge = Ao : $e.sibling = Ao, $e = Ao, Je = ir;
      }
      if (Lt.done)
        return o(
          B,
          Je
        ), un && ma(B, pt), Ge;
      if (Je === null) {
        for (; !Lt.done; pt++, Lt = G.next())
          Lt = he(B, Lt.value, ye), Lt !== null && (j = y(Lt, j, pt), $e === null ? Ge = Lt : $e.sibling = Lt, $e = Lt);
        return un && ma(B, pt), Ge;
      }
      for (Je = c(B, Je); !Lt.done; pt++, Lt = G.next())
        Lt = Me(Je, B, pt, Lt.value, ye), Lt !== null && (n && Lt.alternate !== null && Je.delete(Lt.key === null ? pt : Lt.key), j = y(Lt, j, pt), $e === null ? Ge = Lt : $e.sibling = Lt, $e = Lt);
      return n && Je.forEach(function(E0) {
        return r(B, E0);
      }), un && ma(B, pt), Ge;
    }
    function Mn(B, j, G, ye) {
      if (typeof G == "object" && G !== null && G.type === ie && G.key === null && (G = G.props.children), typeof G == "object" && G !== null) {
        switch (G.$$typeof) {
          case D:
            e: {
              for (var Ge = G.key, $e = j; $e !== null; ) {
                if ($e.key === Ge) {
                  if (Ge = G.type, Ge === ie) {
                    if ($e.tag === 7) {
                      o(B, $e.sibling), j = p($e, G.props.children), j.return = B, B = j;
                      break e;
                    }
                  } else if ($e.elementType === Ge || typeof Ge == "object" && Ge !== null && Ge.$$typeof === be && Wh(Ge) === $e.type) {
                    o(B, $e.sibling), j = p($e, G.props), j.ref = ou(B, $e, G), j.return = B, B = j;
                    break e;
                  }
                  o(B, $e);
                  break;
                } else
                  r(B, $e);
                $e = $e.sibling;
              }
              G.type === ie ? (j = wl(G.props.children, B.mode, ye, G.key), j.return = B, B = j) : (ye = Ef(G.type, G.key, G.props, null, B.mode, ye), ye.ref = ou(B, j, G), ye.return = B, B = ye);
            }
            return C(B);
          case ve:
            e: {
              for ($e = G.key; j !== null; ) {
                if (j.key === $e)
                  if (j.tag === 4 && j.stateNode.containerInfo === G.containerInfo && j.stateNode.implementation === G.implementation) {
                    o(B, j.sibling), j = p(j, G.children || []), j.return = B, B = j;
                    break e;
                  } else {
                    o(B, j);
                    break;
                  }
                else
                  r(B, j);
                j = j.sibling;
              }
              j = _l(G, B.mode, ye), j.return = B, B = j;
            }
            return C(B);
          case be:
            return $e = G._init, Mn(B, j, $e(G._payload), ye);
        }
        if (sa(G))
          return je(B, j, G, ye);
        if (Pe(G))
          return Ie(B, j, G, ye);
        Vc(B, G);
      }
      return typeof G == "string" && G !== "" || typeof G == "number" ? (G = "" + G, j !== null && j.tag === 6 ? (o(B, j.sibling), j = p(j, G), j.return = B, B = j) : (o(B, j), j = Us(G, B.mode, ye), j.return = B, B = j), C(B)) : o(B, j);
    }
    return Mn;
  }
  var lu = Gh(!0), qh = Gh(!1), Ss = {}, ni = gt(Ss), Es = gt(Ss), uu = gt(Ss);
  function sl(n) {
    if (n === Ss)
      throw Error(d(174));
    return n;
  }
  function sp(n, r) {
    switch (jt(uu, r), jt(Es, n), jt(ni, Ss), n = r.nodeType, n) {
      case 9:
      case 11:
        r = (r = r.documentElement) ? r.namespaceURI : yn(null, "");
        break;
      default:
        n = n === 8 ? r.parentNode : r, r = n.namespaceURI || null, n = n.tagName, r = yn(r, n);
    }
    Ut(ni), jt(ni, r);
  }
  function wo() {
    Ut(ni), Ut(Es), Ut(uu);
  }
  function it(n) {
    sl(uu.current);
    var r = sl(ni.current), o = yn(r, n.type);
    r !== o && (jt(Es, n), jt(ni, o));
  }
  function Tt(n) {
    Es.current === n && (Ut(ni), Ut(Es));
  }
  var ut = gt(0);
  function En(n) {
    for (var r = n; r !== null; ) {
      if (r.tag === 13) {
        var o = r.memoizedState;
        if (o !== null && (o = o.dehydrated, o === null || o.data === "$?" || o.data === "$!"))
          return r;
      } else if (r.tag === 19 && r.memoizedProps.revealOrder !== void 0) {
        if (r.flags & 128)
          return r;
      } else if (r.child !== null) {
        r.child.return = r, r = r.child;
        continue;
      }
      if (r === n)
        break;
      for (; r.sibling === null; ) {
        if (r.return === null || r.return === n)
          return null;
        r = r.return;
      }
      r.sibling.return = r.return, r = r.sibling;
    }
    return null;
  }
  var za = [];
  function Hc() {
    for (var n = 0; n < za.length; n++)
      za[n]._workInProgressVersionPrimary = null;
    za.length = 0;
  }
  var Ic = J.ReactCurrentDispatcher, cp = J.ReactCurrentBatchConfig, cl = 0, sn = null, ne = null, Ot = null, st = !1, hi = !1, Sa = 0, fl = 0;
  function cn() {
    throw Error(d(321));
  }
  function dl(n, r) {
    if (r === null)
      return !1;
    for (var o = 0; o < r.length && o < n.length; o++)
      if (!Oa(n[o], r[o]))
        return !1;
    return !0;
  }
  function _o(n, r, o, c, p, y) {
    if (cl = y, sn = r, r.memoizedState = null, r.updateQueue = null, r.lanes = 0, Ic.current = n === null || n.memoizedState === null ? n0 : r0, n = o(c, p), hi) {
      y = 0;
      do {
        if (hi = !1, Sa = 0, 25 <= y)
          throw Error(d(301));
        y += 1, Ot = ne = null, r.updateQueue = null, Ic.current = dp, n = o(c, p);
      } while (hi);
    }
    if (Ic.current = of, r = ne !== null && ne.next !== null, cl = 0, Ot = ne = sn = null, st = !1, r)
      throw Error(d(300));
    return n;
  }
  function pl() {
    var n = Sa !== 0;
    return Sa = 0, n;
  }
  function Pa() {
    var n = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return Ot === null ? sn.memoizedState = Ot = n : Ot = Ot.next = n, Ot;
  }
  function Jr() {
    if (ne === null) {
      var n = sn.alternate;
      n = n !== null ? n.memoizedState : null;
    } else
      n = ne.next;
    var r = Ot === null ? sn.memoizedState : Ot.next;
    if (r !== null)
      Ot = r, ne = n;
    else {
      if (n === null)
        throw Error(d(310));
      ne = n, n = { memoizedState: ne.memoizedState, baseState: ne.baseState, baseQueue: ne.baseQueue, queue: ne.queue, next: null }, Ot === null ? sn.memoizedState = Ot = n : Ot = Ot.next = n;
    }
    return Ot;
  }
  function vl(n, r) {
    return typeof r == "function" ? r(n) : r;
  }
  function bs(n) {
    var r = Jr(), o = r.queue;
    if (o === null)
      throw Error(d(311));
    o.lastRenderedReducer = n;
    var c = ne, p = c.baseQueue, y = o.pending;
    if (y !== null) {
      if (p !== null) {
        var C = p.next;
        p.next = y.next, y.next = C;
      }
      c.baseQueue = p = y, o.pending = null;
    }
    if (p !== null) {
      y = p.next, c = c.baseState;
      var O = C = null, z = null, X = y;
      do {
        var ce = X.lane;
        if ((cl & ce) === ce)
          z !== null && (z = z.next = { lane: 0, action: X.action, hasEagerState: X.hasEagerState, eagerState: X.eagerState, next: null }), c = X.hasEagerState ? X.eagerState : n(c, X.action);
        else {
          var he = {
            lane: ce,
            action: X.action,
            hasEagerState: X.hasEagerState,
            eagerState: X.eagerState,
            next: null
          };
          z === null ? (O = z = he, C = c) : z = z.next = he, sn.lanes |= ce, Bi |= ce;
        }
        X = X.next;
      } while (X !== null && X !== y);
      z === null ? C = c : z.next = O, Oa(c, r.memoizedState) || (Pn = !0), r.memoizedState = c, r.baseState = C, r.baseQueue = z, o.lastRenderedState = c;
    }
    if (n = o.interleaved, n !== null) {
      p = n;
      do
        y = p.lane, sn.lanes |= y, Bi |= y, p = p.next;
      while (p !== n);
    } else
      p === null && (o.lanes = 0);
    return [r.memoizedState, o.dispatch];
  }
  function Cs(n) {
    var r = Jr(), o = r.queue;
    if (o === null)
      throw Error(d(311));
    o.lastRenderedReducer = n;
    var c = o.dispatch, p = o.pending, y = r.memoizedState;
    if (p !== null) {
      o.pending = null;
      var C = p = p.next;
      do
        y = n(y, C.action), C = C.next;
      while (C !== p);
      Oa(y, r.memoizedState) || (Pn = !0), r.memoizedState = y, r.baseQueue === null && (r.baseState = y), o.lastRenderedState = y;
    }
    return [y, c];
  }
  function Bc() {
  }
  function Yc(n, r) {
    var o = sn, c = Jr(), p = r(), y = !Oa(c.memoizedState, p);
    if (y && (c.memoizedState = p, Pn = !0), c = c.queue, xs(qc.bind(null, o, c, n), [n]), c.getSnapshot !== r || y || Ot !== null && Ot.memoizedState.tag & 1) {
      if (o.flags |= 2048, hl(9, Gc.bind(null, o, c, p, r), void 0, null), bn === null)
        throw Error(d(349));
      cl & 30 || Wc(o, r, p);
    }
    return p;
  }
  function Wc(n, r, o) {
    n.flags |= 16384, n = { getSnapshot: r, value: o }, r = sn.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, sn.updateQueue = r, r.stores = [n]) : (o = r.stores, o === null ? r.stores = [n] : o.push(n));
  }
  function Gc(n, r, o, c) {
    r.value = o, r.getSnapshot = c, Qc(r) && Kc(n);
  }
  function qc(n, r, o) {
    return o(function() {
      Qc(r) && Kc(n);
    });
  }
  function Qc(n) {
    var r = n.getSnapshot;
    n = n.value;
    try {
      var o = r();
      return !Oa(n, o);
    } catch {
      return !0;
    }
  }
  function Kc(n) {
    var r = $i(n, 1);
    r !== null && Rr(r, n, 1, -1);
  }
  function Xc(n) {
    var r = Pa();
    return typeof n == "function" && (n = n()), r.memoizedState = r.baseState = n, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: vl, lastRenderedState: n }, r.queue = n, n = n.dispatch = af.bind(null, sn, n), [r.memoizedState, n];
  }
  function hl(n, r, o, c) {
    return n = { tag: n, create: r, destroy: o, deps: c, next: null }, r = sn.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, sn.updateQueue = r, r.lastEffect = n.next = n) : (o = r.lastEffect, o === null ? r.lastEffect = n.next = n : (c = o.next, o.next = n, n.next = c, r.lastEffect = n)), n;
  }
  function Zc() {
    return Jr().memoizedState;
  }
  function ml(n, r, o, c) {
    var p = Pa();
    sn.flags |= n, p.memoizedState = hl(1 | r, o, void 0, c === void 0 ? null : c);
  }
  function Vi(n, r, o, c) {
    var p = Jr();
    c = c === void 0 ? null : c;
    var y = void 0;
    if (ne !== null) {
      var C = ne.memoizedState;
      if (y = C.destroy, c !== null && dl(c, C.deps)) {
        p.memoizedState = hl(r, o, y, c);
        return;
      }
    }
    sn.flags |= n, p.memoizedState = hl(1 | r, o, y, c);
  }
  function Jc(n, r) {
    return ml(8390656, 8, n, r);
  }
  function xs(n, r) {
    return Vi(2048, 8, n, r);
  }
  function ef(n, r) {
    return Vi(4, 2, n, r);
  }
  function tf(n, r) {
    return Vi(4, 4, n, r);
  }
  function fp(n, r) {
    if (typeof r == "function")
      return n = n(), r(n), function() {
        r(null);
      };
    if (r != null)
      return n = n(), r.current = n, function() {
        r.current = null;
      };
  }
  function su(n, r, o) {
    return o = o != null ? o.concat([n]) : null, Vi(4, 4, fp.bind(null, r, n), o);
  }
  function nf() {
  }
  function cu(n, r) {
    var o = Jr();
    r = r === void 0 ? null : r;
    var c = o.memoizedState;
    return c !== null && r !== null && dl(r, c[1]) ? c[0] : (o.memoizedState = [n, r], n);
  }
  function ko(n, r) {
    var o = Jr();
    r = r === void 0 ? null : r;
    var c = o.memoizedState;
    return c !== null && r !== null && dl(r, c[1]) ? c[0] : (n = n(), o.memoizedState = [n, r], n);
  }
  function ea(n, r, o) {
    return cl & 21 ? (Oa(o, r) || (o = dc(), sn.lanes |= o, Bi |= o, n.baseState = !0), r) : (n.baseState && (n.baseState = !1, Pn = !0), n.memoizedState = o);
  }
  function t0(n, r) {
    var o = Ht;
    Ht = o !== 0 && 4 > o ? o : 4, n(!0);
    var c = cp.transition;
    cp.transition = {};
    try {
      n(!1), r();
    } finally {
      Ht = o, cp.transition = c;
    }
  }
  function rn() {
    return Jr().memoizedState;
  }
  function rf(n, r, o) {
    var c = Un(n);
    if (o = { lane: c, action: o, hasEagerState: !1, eagerState: null, next: null }, fu(n))
      Ts(r, o);
    else if (o = Vh(n, r, o, c), o !== null) {
      var p = Tr();
      Rr(o, n, c, p), Qh(o, r, c);
    }
  }
  function af(n, r, o) {
    var c = Un(n), p = { lane: c, action: o, hasEagerState: !1, eagerState: null, next: null };
    if (fu(n))
      Ts(r, p);
    else {
      var y = n.alternate;
      if (n.lanes === 0 && (y === null || y.lanes === 0) && (y = r.lastRenderedReducer, y !== null))
        try {
          var C = r.lastRenderedState, O = y(C, o);
          if (p.hasEagerState = !0, p.eagerState = O, Oa(O, C)) {
            var z = r.interleaved;
            z === null ? (p.next = p, ip(r)) : (p.next = z.next, z.next = p), r.interleaved = p;
            return;
          }
        } catch {
        } finally {
        }
      o = Vh(n, r, p, c), o !== null && (p = Tr(), Rr(o, n, c, p), Qh(o, r, c));
    }
  }
  function fu(n) {
    var r = n.alternate;
    return n === sn || r !== null && r === sn;
  }
  function Ts(n, r) {
    hi = st = !0;
    var o = n.pending;
    o === null ? r.next = r : (r.next = o.next, o.next = r), n.pending = r;
  }
  function Qh(n, r, o) {
    if (o & 4194240) {
      var c = r.lanes;
      c &= n.pendingLanes, o |= c, r.lanes = o, Ku(n, o);
    }
  }
  var of = { readContext: Nn, useCallback: cn, useContext: cn, useEffect: cn, useImperativeHandle: cn, useInsertionEffect: cn, useLayoutEffect: cn, useMemo: cn, useReducer: cn, useRef: cn, useState: cn, useDebugValue: cn, useDeferredValue: cn, useTransition: cn, useMutableSource: cn, useSyncExternalStore: cn, useId: cn, unstable_isNewReconciler: !1 }, n0 = { readContext: Nn, useCallback: function(n, r) {
    return Pa().memoizedState = [n, r === void 0 ? null : r], n;
  }, useContext: Nn, useEffect: Jc, useImperativeHandle: function(n, r, o) {
    return o = o != null ? o.concat([n]) : null, ml(
      4194308,
      4,
      fp.bind(null, r, n),
      o
    );
  }, useLayoutEffect: function(n, r) {
    return ml(4194308, 4, n, r);
  }, useInsertionEffect: function(n, r) {
    return ml(4, 2, n, r);
  }, useMemo: function(n, r) {
    var o = Pa();
    return r = r === void 0 ? null : r, n = n(), o.memoizedState = [n, r], n;
  }, useReducer: function(n, r, o) {
    var c = Pa();
    return r = o !== void 0 ? o(r) : r, c.memoizedState = c.baseState = r, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: n, lastRenderedState: r }, c.queue = n, n = n.dispatch = rf.bind(null, sn, n), [c.memoizedState, n];
  }, useRef: function(n) {
    var r = Pa();
    return n = { current: n }, r.memoizedState = n;
  }, useState: Xc, useDebugValue: nf, useDeferredValue: function(n) {
    return Pa().memoizedState = n;
  }, useTransition: function() {
    var n = Xc(!1), r = n[0];
    return n = t0.bind(null, n[1]), Pa().memoizedState = n, [r, n];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(n, r, o) {
    var c = sn, p = Pa();
    if (un) {
      if (o === void 0)
        throw Error(d(407));
      o = o();
    } else {
      if (o = r(), bn === null)
        throw Error(d(349));
      cl & 30 || Wc(c, r, o);
    }
    p.memoizedState = o;
    var y = { value: o, getSnapshot: r };
    return p.queue = y, Jc(qc.bind(
      null,
      c,
      y,
      n
    ), [n]), c.flags |= 2048, hl(9, Gc.bind(null, c, y, o, r), void 0, null), o;
  }, useId: function() {
    var n = Pa(), r = bn.identifierPrefix;
    if (un) {
      var o = ji, c = ur;
      o = (c & ~(1 << 32 - wa(c) - 1)).toString(32) + o, r = ":" + r + "R" + o, o = Sa++, 0 < o && (r += "H" + o.toString(32)), r += ":";
    } else
      o = fl++, r = ":" + r + "r" + o.toString(32) + ":";
    return n.memoizedState = r;
  }, unstable_isNewReconciler: !1 }, r0 = {
    readContext: Nn,
    useCallback: cu,
    useContext: Nn,
    useEffect: xs,
    useImperativeHandle: su,
    useInsertionEffect: ef,
    useLayoutEffect: tf,
    useMemo: ko,
    useReducer: bs,
    useRef: Zc,
    useState: function() {
      return bs(vl);
    },
    useDebugValue: nf,
    useDeferredValue: function(n) {
      var r = Jr();
      return ea(r, ne.memoizedState, n);
    },
    useTransition: function() {
      var n = bs(vl)[0], r = Jr().memoizedState;
      return [n, r];
    },
    useMutableSource: Bc,
    useSyncExternalStore: Yc,
    useId: rn,
    unstable_isNewReconciler: !1
  }, dp = { readContext: Nn, useCallback: cu, useContext: Nn, useEffect: xs, useImperativeHandle: su, useInsertionEffect: ef, useLayoutEffect: tf, useMemo: ko, useReducer: Cs, useRef: Zc, useState: function() {
    return Cs(vl);
  }, useDebugValue: nf, useDeferredValue: function(n) {
    var r = Jr();
    return ne === null ? r.memoizedState = n : ea(r, ne.memoizedState, n);
  }, useTransition: function() {
    var n = Cs(vl)[0], r = Jr().memoizedState;
    return [n, r];
  }, useMutableSource: Bc, useSyncExternalStore: Yc, useId: rn, unstable_isNewReconciler: !1 };
  function du(n, r) {
    try {
      var o = "", c = r;
      do
        o += qe(c), c = c.return;
      while (c);
      var p = o;
    } catch (y) {
      p = `
Error generating stack: ` + y.message + `
` + y.stack;
    }
    return { value: n, source: r, stack: p, digest: null };
  }
  function Rs(n, r, o) {
    return { value: n, source: null, stack: o ?? null, digest: r ?? null };
  }
  function lf(n, r) {
    try {
      console.error(r.value);
    } catch (o) {
      setTimeout(function() {
        throw o;
      });
    }
  }
  var a0 = typeof WeakMap == "function" ? WeakMap : Map;
  function Kh(n, r, o) {
    o = Fi(-1, o), o.tag = 3, o.payload = { element: null };
    var c = r.value;
    return o.callback = function() {
      vf || (vf = !0, bl = c), lf(n, r);
    }, o;
  }
  function ws(n, r, o) {
    o = Fi(-1, o), o.tag = 3;
    var c = n.type.getDerivedStateFromError;
    if (typeof c == "function") {
      var p = r.value;
      o.payload = function() {
        return c(p);
      }, o.callback = function() {
        lf(n, r);
      };
    }
    var y = n.stateNode;
    return y !== null && typeof y.componentDidCatch == "function" && (o.callback = function() {
      lf(n, r), typeof c != "function" && (gi === null ? gi = /* @__PURE__ */ new Set([this]) : gi.add(this));
      var C = r.stack;
      this.componentDidCatch(r.value, { componentStack: C !== null ? C : "" });
    }), o;
  }
  function Xh(n, r, o) {
    var c = n.pingCache;
    if (c === null) {
      c = n.pingCache = new a0();
      var p = /* @__PURE__ */ new Set();
      c.set(r, p);
    } else
      p = c.get(r), p === void 0 && (p = /* @__PURE__ */ new Set(), c.set(r, p));
    p.has(o) || (p.add(o), n = f0.bind(null, n, r, o), r.then(n, n));
  }
  function pp(n) {
    do {
      var r;
      if ((r = n.tag === 13) && (r = n.memoizedState, r = r !== null ? r.dehydrated !== null : !0), r)
        return n;
      n = n.return;
    } while (n !== null);
    return null;
  }
  function vp(n, r, o, c, p) {
    return n.mode & 1 ? (n.flags |= 65536, n.lanes = p, n) : (n === r ? n.flags |= 65536 : (n.flags |= 128, o.flags |= 131072, o.flags &= -52805, o.tag === 1 && (o.alternate === null ? o.tag = 17 : (r = Fi(-1, 1), r.tag = 2, To(o, r, 1))), o.lanes |= 1), n);
  }
  var i0 = J.ReactCurrentOwner, Pn = !1;
  function Bn(n, r, o, c) {
    r.child = n === null ? qh(r, null, o, c) : lu(r, n.child, o, c);
  }
  function Oo(n, r, o, c, p) {
    o = o.render;
    var y = r.ref;
    return xe(r, p), c = _o(n, r, o, c, y, p), o = pl(), n !== null && !Pn ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~p, cr(n, r, p)) : (un && o && Mc(r), r.flags |= 1, Bn(n, r, c, p), r.child);
  }
  function uf(n, r, o, c, p) {
    if (n === null) {
      var y = o.type;
      return typeof y == "function" && !Lp(y) && y.defaultProps === void 0 && o.compare === null && o.defaultProps === void 0 ? (r.tag = 15, r.type = y, ta(n, r, y, c, p)) : (n = Ef(o.type, null, c, r, r.mode, p), n.ref = r.ref, n.return = r, r.child = n);
    }
    if (y = n.child, !(n.lanes & p)) {
      var C = y.memoizedProps;
      if (o = o.compare, o = o !== null ? o : ls, o(C, c) && n.ref === r.ref)
        return cr(n, r, p);
    }
    return r.flags |= 1, n = Lo(y, c), n.ref = r.ref, n.return = r, r.child = n;
  }
  function ta(n, r, o, c, p) {
    if (n !== null) {
      var y = n.memoizedProps;
      if (ls(y, c) && n.ref === r.ref)
        if (Pn = !1, r.pendingProps = c = y, (n.lanes & p) !== 0)
          n.flags & 131072 && (Pn = !0);
        else
          return r.lanes = n.lanes, cr(n, r, p);
    }
    return pu(n, r, o, c, p);
  }
  function yl(n, r, o) {
    var c = r.pendingProps, p = c.children, y = n !== null ? n.memoizedState : null;
    if (c.mode === "hidden")
      if (!(r.mode & 1))
        r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, jt(Su, Ea), Ea |= o;
      else {
        if (!(o & 1073741824))
          return n = y !== null ? y.baseLanes | o : o, r.lanes = r.childLanes = 1073741824, r.memoizedState = { baseLanes: n, cachePool: null, transitions: null }, r.updateQueue = null, jt(Su, Ea), Ea |= n, null;
        r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, c = y !== null ? y.baseLanes : o, jt(Su, Ea), Ea |= c;
      }
    else
      y !== null ? (c = y.baseLanes | o, r.memoizedState = null) : c = o, jt(Su, Ea), Ea |= c;
    return Bn(n, r, p, o), r.child;
  }
  function St(n, r) {
    var o = r.ref;
    (n === null && o !== null || n !== null && n.ref !== o) && (r.flags |= 512, r.flags |= 2097152);
  }
  function pu(n, r, o, c, p) {
    var y = vn(o) ? qr : dt.current;
    return y = Na(r, y), xe(r, p), o = _o(n, r, o, c, y, p), c = pl(), n !== null && !Pn ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~p, cr(n, r, p)) : (un && c && Mc(r), r.flags |= 1, Bn(n, r, o, p), r.child);
  }
  function hp(n, r, o, c, p) {
    if (vn(o)) {
      var y = !0;
      Nc(r);
    } else
      y = !1;
    if (xe(r, p), r.stateNode === null)
      br(n, r), Bh(r, o, c), Fc(r, o, c, p), c = !0;
    else if (n === null) {
      var C = r.stateNode, O = r.memoizedProps;
      C.props = O;
      var z = C.context, X = o.contextType;
      typeof X == "object" && X !== null ? X = Nn(X) : (X = vn(o) ? qr : dt.current, X = Na(r, X));
      var ce = o.getDerivedStateFromProps, he = typeof ce == "function" || typeof C.getSnapshotBeforeUpdate == "function";
      he || typeof C.UNSAFE_componentWillReceiveProps != "function" && typeof C.componentWillReceiveProps != "function" || (O !== c || z !== X) && Yh(r, C, c, X), xo = !1;
      var se = r.memoizedState;
      C.state = se, Ro(r, c, C, p), z = r.memoizedState, O !== c || se !== z || Rn.current || xo ? (typeof ce == "function" && (up(r, o, ce, c), z = r.memoizedState), (O = xo || Ih(r, o, O, c, se, z, X)) ? (he || typeof C.UNSAFE_componentWillMount != "function" && typeof C.componentWillMount != "function" || (typeof C.componentWillMount == "function" && C.componentWillMount(), typeof C.UNSAFE_componentWillMount == "function" && C.UNSAFE_componentWillMount()), typeof C.componentDidMount == "function" && (r.flags |= 4194308)) : (typeof C.componentDidMount == "function" && (r.flags |= 4194308), r.memoizedProps = c, r.memoizedState = z), C.props = c, C.state = z, C.context = X, c = O) : (typeof C.componentDidMount == "function" && (r.flags |= 4194308), c = !1);
    } else {
      C = r.stateNode, In(n, r), O = r.memoizedProps, X = r.type === r.elementType ? O : ga(r.type, O), C.props = X, he = r.pendingProps, se = C.context, z = o.contextType, typeof z == "object" && z !== null ? z = Nn(z) : (z = vn(o) ? qr : dt.current, z = Na(r, z));
      var Me = o.getDerivedStateFromProps;
      (ce = typeof Me == "function" || typeof C.getSnapshotBeforeUpdate == "function") || typeof C.UNSAFE_componentWillReceiveProps != "function" && typeof C.componentWillReceiveProps != "function" || (O !== he || se !== z) && Yh(r, C, c, z), xo = !1, se = r.memoizedState, C.state = se, Ro(r, c, C, p);
      var je = r.memoizedState;
      O !== he || se !== je || Rn.current || xo ? (typeof Me == "function" && (up(r, o, Me, c), je = r.memoizedState), (X = xo || Ih(r, o, X, c, se, je, z) || !1) ? (ce || typeof C.UNSAFE_componentWillUpdate != "function" && typeof C.componentWillUpdate != "function" || (typeof C.componentWillUpdate == "function" && C.componentWillUpdate(c, je, z), typeof C.UNSAFE_componentWillUpdate == "function" && C.UNSAFE_componentWillUpdate(c, je, z)), typeof C.componentDidUpdate == "function" && (r.flags |= 4), typeof C.getSnapshotBeforeUpdate == "function" && (r.flags |= 1024)) : (typeof C.componentDidUpdate != "function" || O === n.memoizedProps && se === n.memoizedState || (r.flags |= 4), typeof C.getSnapshotBeforeUpdate != "function" || O === n.memoizedProps && se === n.memoizedState || (r.flags |= 1024), r.memoizedProps = c, r.memoizedState = je), C.props = c, C.state = je, C.context = z, c = X) : (typeof C.componentDidUpdate != "function" || O === n.memoizedProps && se === n.memoizedState || (r.flags |= 4), typeof C.getSnapshotBeforeUpdate != "function" || O === n.memoizedProps && se === n.memoizedState || (r.flags |= 1024), c = !1);
    }
    return Zh(n, r, o, c, y, p);
  }
  function Zh(n, r, o, c, p, y) {
    St(n, r);
    var C = (r.flags & 128) !== 0;
    if (!c && !C)
      return p && Uh(r, o, !1), cr(n, r, y);
    c = r.stateNode, i0.current = r;
    var O = C && typeof o.getDerivedStateFromError != "function" ? null : c.render();
    return r.flags |= 1, n !== null && C ? (r.child = lu(r, n.child, null, y), r.child = lu(r, null, O, y)) : Bn(n, r, O, y), r.memoizedState = c.state, p && Uh(r, o, !0), r.child;
  }
  function Jh(n) {
    var r = n.stateNode;
    r.pendingContext ? So(n, r.pendingContext, r.pendingContext !== r.context) : r.context && So(n, r.context, !1), sp(n, r.containerInfo);
  }
  function sf(n, r, o, c, p) {
    return Sn(), np(p), r.flags |= 256, Bn(n, r, o, c), r.child;
  }
  var gl = { dehydrated: null, treeContext: null, retryLane: 0 };
  function mp(n) {
    return { baseLanes: n, cachePool: null, transitions: null };
  }
  function yp(n, r, o) {
    var c = r.pendingProps, p = ut.current, y = !1, C = (r.flags & 128) !== 0, O;
    if ((O = C) || (O = n !== null && n.memoizedState === null ? !1 : (p & 2) !== 0), O ? (y = !0, r.flags &= -129) : (n === null || n.memoizedState !== null) && (p |= 1), jt(ut, p & 1), n === null)
      return Ac(r), n = r.memoizedState, n !== null && (n = n.dehydrated, n !== null) ? (r.mode & 1 ? n.data === "$!" ? r.lanes = 8 : r.lanes = 1073741824 : r.lanes = 1, null) : (C = c.children, n = c.fallback, y ? (c = r.mode, y = r.child, C = { mode: "hidden", children: C }, !(c & 1) && y !== null ? (y.childLanes = 0, y.pendingProps = C) : y = Ps(C, c, 0, null), n = wl(n, c, o, null), y.return = r, n.return = r, y.sibling = n, r.child = y, r.child.memoizedState = mp(o), r.memoizedState = gl, n) : gp(r, C));
    if (p = n.memoizedState, p !== null && (O = p.dehydrated, O !== null))
      return o0(n, r, C, c, O, p, o);
    if (y) {
      y = c.fallback, C = r.mode, p = n.child, O = p.sibling;
      var z = { mode: "hidden", children: c.children };
      return !(C & 1) && r.child !== p ? (c = r.child, c.childLanes = 0, c.pendingProps = z, r.deletions = null) : (c = Lo(p, z), c.subtreeFlags = p.subtreeFlags & 14680064), O !== null ? y = Lo(O, y) : (y = wl(y, C, o, null), y.flags |= 2), y.return = r, c.return = r, c.sibling = y, r.child = c, c = y, y = r.child, C = n.child.memoizedState, C = C === null ? mp(o) : { baseLanes: C.baseLanes | o, cachePool: null, transitions: C.transitions }, y.memoizedState = C, y.childLanes = n.childLanes & ~o, r.memoizedState = gl, c;
    }
    return y = n.child, n = y.sibling, c = Lo(y, { mode: "visible", children: c.children }), !(r.mode & 1) && (c.lanes = o), c.return = r, c.sibling = null, n !== null && (o = r.deletions, o === null ? (r.deletions = [n], r.flags |= 16) : o.push(n)), r.child = c, r.memoizedState = null, c;
  }
  function gp(n, r) {
    return r = Ps({ mode: "visible", children: r }, n.mode, 0, null), r.return = n, n.child = r;
  }
  function vu(n, r, o, c) {
    return c !== null && np(c), lu(r, n.child, null, o), n = gp(r, r.pendingProps.children), n.flags |= 2, r.memoizedState = null, n;
  }
  function o0(n, r, o, c, p, y, C) {
    if (o)
      return r.flags & 256 ? (r.flags &= -257, c = Rs(Error(d(422))), vu(n, r, C, c)) : r.memoizedState !== null ? (r.child = n.child, r.flags |= 128, null) : (y = c.fallback, p = r.mode, c = Ps({ mode: "visible", children: c.children }, p, 0, null), y = wl(y, p, C, null), y.flags |= 2, c.return = r, y.return = r, c.sibling = y, r.child = c, r.mode & 1 && lu(r, n.child, null, C), r.child.memoizedState = mp(C), r.memoizedState = gl, y);
    if (!(r.mode & 1))
      return vu(n, r, C, null);
    if (p.data === "$!") {
      if (c = p.nextSibling && p.nextSibling.dataset, c)
        var O = c.dgst;
      return c = O, y = Error(d(419)), c = Rs(y, c, void 0), vu(n, r, C, c);
    }
    if (O = (C & n.childLanes) !== 0, Pn || O) {
      if (c = bn, c !== null) {
        switch (C & -C) {
          case 4:
            p = 2;
            break;
          case 16:
            p = 8;
            break;
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            p = 32;
            break;
          case 536870912:
            p = 268435456;
            break;
          default:
            p = 0;
        }
        p = p & (c.suspendedLanes | C) ? 0 : p, p !== 0 && p !== y.retryLane && (y.retryLane = p, $i(n, p), Rr(c, n, p, -1));
      }
      return Dp(), c = Rs(Error(d(421))), vu(n, r, C, c);
    }
    return p.data === "$?" ? (r.flags |= 128, r.child = n.child, r = d0.bind(null, n), p._reactRetry = r, null) : (n = y.treeContext, Zr = ti(p.nextSibling), ya = r, un = !0, Aa = null, n !== null && (Xr[Er++] = ur, Xr[Er++] = ji, Xr[Er++] = La, ur = n.id, ji = n.overflow, La = r), r = gp(r, c.children), r.flags |= 4096, r);
  }
  function Sp(n, r, o) {
    n.lanes |= r;
    var c = n.alternate;
    c !== null && (c.lanes |= r), nr(n.return, r, o);
  }
  function cf(n, r, o, c, p) {
    var y = n.memoizedState;
    y === null ? n.memoizedState = { isBackwards: r, rendering: null, renderingStartTime: 0, last: c, tail: o, tailMode: p } : (y.isBackwards = r, y.rendering = null, y.renderingStartTime = 0, y.last = c, y.tail = o, y.tailMode = p);
  }
  function Ep(n, r, o) {
    var c = r.pendingProps, p = c.revealOrder, y = c.tail;
    if (Bn(n, r, c.children, o), c = ut.current, c & 2)
      c = c & 1 | 2, r.flags |= 128;
    else {
      if (n !== null && n.flags & 128)
        e:
          for (n = r.child; n !== null; ) {
            if (n.tag === 13)
              n.memoizedState !== null && Sp(n, o, r);
            else if (n.tag === 19)
              Sp(n, o, r);
            else if (n.child !== null) {
              n.child.return = n, n = n.child;
              continue;
            }
            if (n === r)
              break e;
            for (; n.sibling === null; ) {
              if (n.return === null || n.return === r)
                break e;
              n = n.return;
            }
            n.sibling.return = n.return, n = n.sibling;
          }
      c &= 1;
    }
    if (jt(ut, c), !(r.mode & 1))
      r.memoizedState = null;
    else
      switch (p) {
        case "forwards":
          for (o = r.child, p = null; o !== null; )
            n = o.alternate, n !== null && En(n) === null && (p = o), o = o.sibling;
          o = p, o === null ? (p = r.child, r.child = null) : (p = o.sibling, o.sibling = null), cf(r, !1, p, o, y);
          break;
        case "backwards":
          for (o = null, p = r.child, r.child = null; p !== null; ) {
            if (n = p.alternate, n !== null && En(n) === null) {
              r.child = p;
              break;
            }
            n = p.sibling, p.sibling = o, o = p, p = n;
          }
          cf(r, !0, o, null, y);
          break;
        case "together":
          cf(r, !1, null, null, void 0);
          break;
        default:
          r.memoizedState = null;
      }
    return r.child;
  }
  function br(n, r) {
    !(r.mode & 1) && n !== null && (n.alternate = null, r.alternate = null, r.flags |= 2);
  }
  function cr(n, r, o) {
    if (n !== null && (r.dependencies = n.dependencies), Bi |= r.lanes, !(o & r.childLanes))
      return null;
    if (n !== null && r.child !== n.child)
      throw Error(d(153));
    if (r.child !== null) {
      for (n = r.child, o = Lo(n, n.pendingProps), r.child = o, o.return = r; n.sibling !== null; )
        n = n.sibling, o = o.sibling = Lo(n, n.pendingProps), o.return = r;
      o.sibling = null;
    }
    return r.child;
  }
  function Hi(n, r, o) {
    switch (r.tag) {
      case 3:
        Jh(r), Sn();
        break;
      case 5:
        it(r);
        break;
      case 1:
        vn(r.type) && Nc(r);
        break;
      case 4:
        sp(r, r.stateNode.containerInfo);
        break;
      case 10:
        var c = r.type._context, p = r.memoizedProps.value;
        jt(pi, c._currentValue), c._currentValue = p;
        break;
      case 13:
        if (c = r.memoizedState, c !== null)
          return c.dehydrated !== null ? (jt(ut, ut.current & 1), r.flags |= 128, null) : o & r.child.childLanes ? yp(n, r, o) : (jt(ut, ut.current & 1), n = cr(n, r, o), n !== null ? n.sibling : null);
        jt(ut, ut.current & 1);
        break;
      case 19:
        if (c = (o & r.childLanes) !== 0, n.flags & 128) {
          if (c)
            return Ep(n, r, o);
          r.flags |= 128;
        }
        if (p = r.memoizedState, p !== null && (p.rendering = null, p.tail = null, p.lastEffect = null), jt(ut, ut.current), c)
          break;
        return null;
      case 22:
      case 23:
        return r.lanes = 0, yl(n, r, o);
    }
    return cr(n, r, o);
  }
  var _s, Sl, Ua, Yn;
  _s = function(n, r) {
    for (var o = r.child; o !== null; ) {
      if (o.tag === 5 || o.tag === 6)
        n.appendChild(o.stateNode);
      else if (o.tag !== 4 && o.child !== null) {
        o.child.return = o, o = o.child;
        continue;
      }
      if (o === r)
        break;
      for (; o.sibling === null; ) {
        if (o.return === null || o.return === r)
          return;
        o = o.return;
      }
      o.sibling.return = o.return, o = o.sibling;
    }
  }, Sl = function() {
  }, Ua = function(n, r, o, c) {
    var p = n.memoizedProps;
    if (p !== c) {
      n = r.stateNode, sl(ni.current);
      var y = null;
      switch (o) {
        case "input":
          p = Se(n, p), c = Se(n, c), y = [];
          break;
        case "select":
          p = I({}, p, { value: void 0 }), c = I({}, c, { value: void 0 }), y = [];
          break;
        case "textarea":
          p = ca(n, p), c = ca(n, c), y = [];
          break;
        default:
          typeof p.onClick != "function" && typeof c.onClick == "function" && (n.onclick = Dc);
      }
      Xn(o, c);
      var C;
      o = null;
      for (X in p)
        if (!c.hasOwnProperty(X) && p.hasOwnProperty(X) && p[X] != null)
          if (X === "style") {
            var O = p[X];
            for (C in O)
              O.hasOwnProperty(C) && (o || (o = {}), o[C] = "");
          } else
            X !== "dangerouslySetInnerHTML" && X !== "children" && X !== "suppressContentEditableWarning" && X !== "suppressHydrationWarning" && X !== "autoFocus" && (g.hasOwnProperty(X) ? y || (y = []) : (y = y || []).push(X, null));
      for (X in c) {
        var z = c[X];
        if (O = p != null ? p[X] : void 0, c.hasOwnProperty(X) && z !== O && (z != null || O != null))
          if (X === "style")
            if (O) {
              for (C in O)
                !O.hasOwnProperty(C) || z && z.hasOwnProperty(C) || (o || (o = {}), o[C] = "");
              for (C in z)
                z.hasOwnProperty(C) && O[C] !== z[C] && (o || (o = {}), o[C] = z[C]);
            } else
              o || (y || (y = []), y.push(
                X,
                o
              )), o = z;
          else
            X === "dangerouslySetInnerHTML" ? (z = z ? z.__html : void 0, O = O ? O.__html : void 0, z != null && O !== z && (y = y || []).push(X, z)) : X === "children" ? typeof z != "string" && typeof z != "number" || (y = y || []).push(X, "" + z) : X !== "suppressContentEditableWarning" && X !== "suppressHydrationWarning" && (g.hasOwnProperty(X) ? (z != null && X === "onScroll" && nn("scroll", n), y || O === z || (y = [])) : (y = y || []).push(X, z));
      }
      o && (y = y || []).push("style", o);
      var X = y;
      (r.updateQueue = X) && (r.flags |= 4);
    }
  }, Yn = function(n, r, o, c) {
    o !== c && (r.flags |= 4);
  };
  function ks(n, r) {
    if (!un)
      switch (n.tailMode) {
        case "hidden":
          r = n.tail;
          for (var o = null; r !== null; )
            r.alternate !== null && (o = r), r = r.sibling;
          o === null ? n.tail = null : o.sibling = null;
          break;
        case "collapsed":
          o = n.tail;
          for (var c = null; o !== null; )
            o.alternate !== null && (c = o), o = o.sibling;
          c === null ? r || n.tail === null ? n.tail = null : n.tail.sibling = null : c.sibling = null;
      }
  }
  function Cr(n) {
    var r = n.alternate !== null && n.alternate.child === n.child, o = 0, c = 0;
    if (r)
      for (var p = n.child; p !== null; )
        o |= p.lanes | p.childLanes, c |= p.subtreeFlags & 14680064, c |= p.flags & 14680064, p.return = n, p = p.sibling;
    else
      for (p = n.child; p !== null; )
        o |= p.lanes | p.childLanes, c |= p.subtreeFlags, c |= p.flags, p.return = n, p = p.sibling;
    return n.subtreeFlags |= c, n.childLanes = o, r;
  }
  function l0(n, r, o) {
    var c = r.pendingProps;
    switch (ep(r), r.tag) {
      case 2:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return Cr(r), null;
      case 1:
        return vn(r.type) && Ma(), Cr(r), null;
      case 3:
        return c = r.stateNode, wo(), Ut(Rn), Ut(dt), Hc(), c.pendingContext && (c.context = c.pendingContext, c.pendingContext = null), (n === null || n.child === null) && (zc(r) ? r.flags |= 4 : n === null || n.memoizedState.isDehydrated && !(r.flags & 256) || (r.flags |= 1024, Aa !== null && (zs(Aa), Aa = null))), Sl(n, r), Cr(r), null;
      case 5:
        Tt(r);
        var p = sl(uu.current);
        if (o = r.type, n !== null && r.stateNode != null)
          Ua(n, r, o, c, p), n.ref !== r.ref && (r.flags |= 512, r.flags |= 2097152);
        else {
          if (!c) {
            if (r.stateNode === null)
              throw Error(d(166));
            return Cr(r), null;
          }
          if (n = sl(ni.current), zc(r)) {
            c = r.stateNode, o = r.type;
            var y = r.memoizedProps;
            switch (c[fi] = r, c[ol] = y, n = (r.mode & 1) !== 0, o) {
              case "dialog":
                nn("cancel", c), nn("close", c);
                break;
              case "iframe":
              case "object":
              case "embed":
                nn("load", c);
                break;
              case "video":
              case "audio":
                for (p = 0; p < fs.length; p++)
                  nn(fs[p], c);
                break;
              case "source":
                nn("error", c);
                break;
              case "img":
              case "image":
              case "link":
                nn(
                  "error",
                  c
                ), nn("load", c);
                break;
              case "details":
                nn("toggle", c);
                break;
              case "input":
                Ft(c, y), nn("invalid", c);
                break;
              case "select":
                c._wrapperState = { wasMultiple: !!y.multiple }, nn("invalid", c);
                break;
              case "textarea":
                kr(c, y), nn("invalid", c);
            }
            Xn(o, y), p = null;
            for (var C in y)
              if (y.hasOwnProperty(C)) {
                var O = y[C];
                C === "children" ? typeof O == "string" ? c.textContent !== O && (y.suppressHydrationWarning !== !0 && Oc(c.textContent, O, n), p = ["children", O]) : typeof O == "number" && c.textContent !== "" + O && (y.suppressHydrationWarning !== !0 && Oc(
                  c.textContent,
                  O,
                  n
                ), p = ["children", "" + O]) : g.hasOwnProperty(C) && O != null && C === "onScroll" && nn("scroll", c);
              }
            switch (o) {
              case "input":
                Rt(c), Ir(c, y, !0);
                break;
              case "textarea":
                Rt(c), Vn(c);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof y.onClick == "function" && (c.onclick = Dc);
            }
            c = p, r.updateQueue = c, c !== null && (r.flags |= 4);
          } else {
            C = p.nodeType === 9 ? p : p.ownerDocument, n === "http://www.w3.org/1999/xhtml" && (n = fa(o)), n === "http://www.w3.org/1999/xhtml" ? o === "script" ? (n = C.createElement("div"), n.innerHTML = "<script><\/script>", n = n.removeChild(n.firstChild)) : typeof c.is == "string" ? n = C.createElement(o, { is: c.is }) : (n = C.createElement(o), o === "select" && (C = n, c.multiple ? C.multiple = !0 : c.size && (C.size = c.size))) : n = C.createElementNS(n, o), n[fi] = r, n[ol] = c, _s(n, r, !1, !1), r.stateNode = n;
            e: {
              switch (C = Dn(o, c), o) {
                case "dialog":
                  nn("cancel", n), nn("close", n), p = c;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  nn("load", n), p = c;
                  break;
                case "video":
                case "audio":
                  for (p = 0; p < fs.length; p++)
                    nn(fs[p], n);
                  p = c;
                  break;
                case "source":
                  nn("error", n), p = c;
                  break;
                case "img":
                case "image":
                case "link":
                  nn(
                    "error",
                    n
                  ), nn("load", n), p = c;
                  break;
                case "details":
                  nn("toggle", n), p = c;
                  break;
                case "input":
                  Ft(n, c), p = Se(n, c), nn("invalid", n);
                  break;
                case "option":
                  p = c;
                  break;
                case "select":
                  n._wrapperState = { wasMultiple: !!c.multiple }, p = I({}, c, { value: void 0 }), nn("invalid", n);
                  break;
                case "textarea":
                  kr(n, c), p = ca(n, c), nn("invalid", n);
                  break;
                default:
                  p = c;
              }
              Xn(o, p), O = p;
              for (y in O)
                if (O.hasOwnProperty(y)) {
                  var z = O[y];
                  y === "style" ? Vt(n, z) : y === "dangerouslySetInnerHTML" ? (z = z ? z.__html : void 0, z != null && ct(n, z)) : y === "children" ? typeof z == "string" ? (o !== "textarea" || z !== "") && Yr(n, z) : typeof z == "number" && Yr(n, "" + z) : y !== "suppressContentEditableWarning" && y !== "suppressHydrationWarning" && y !== "autoFocus" && (g.hasOwnProperty(y) ? z != null && y === "onScroll" && nn("scroll", n) : z != null && K(n, y, z, C));
                }
              switch (o) {
                case "input":
                  Rt(n), Ir(n, c, !1);
                  break;
                case "textarea":
                  Rt(n), Vn(n);
                  break;
                case "option":
                  c.value != null && n.setAttribute("value", "" + We(c.value));
                  break;
                case "select":
                  n.multiple = !!c.multiple, y = c.value, y != null ? Br(n, !!c.multiple, y, !1) : c.defaultValue != null && Br(
                    n,
                    !!c.multiple,
                    c.defaultValue,
                    !0
                  );
                  break;
                default:
                  typeof p.onClick == "function" && (n.onclick = Dc);
              }
              switch (o) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  c = !!c.autoFocus;
                  break e;
                case "img":
                  c = !0;
                  break e;
                default:
                  c = !1;
              }
            }
            c && (r.flags |= 4);
          }
          r.ref !== null && (r.flags |= 512, r.flags |= 2097152);
        }
        return Cr(r), null;
      case 6:
        if (n && r.stateNode != null)
          Yn(n, r, n.memoizedProps, c);
        else {
          if (typeof c != "string" && r.stateNode === null)
            throw Error(d(166));
          if (o = sl(uu.current), sl(ni.current), zc(r)) {
            if (c = r.stateNode, o = r.memoizedProps, c[fi] = r, (y = c.nodeValue !== o) && (n = ya, n !== null))
              switch (n.tag) {
                case 3:
                  Oc(c.nodeValue, o, (n.mode & 1) !== 0);
                  break;
                case 5:
                  n.memoizedProps.suppressHydrationWarning !== !0 && Oc(c.nodeValue, o, (n.mode & 1) !== 0);
              }
            y && (r.flags |= 4);
          } else
            c = (o.nodeType === 9 ? o : o.ownerDocument).createTextNode(c), c[fi] = r, r.stateNode = c;
        }
        return Cr(r), null;
      case 13:
        if (Ut(ut), c = r.memoizedState, n === null || n.memoizedState !== null && n.memoizedState.dehydrated !== null) {
          if (un && Zr !== null && r.mode & 1 && !(r.flags & 128))
            Fh(), Sn(), r.flags |= 98560, y = !1;
          else if (y = zc(r), c !== null && c.dehydrated !== null) {
            if (n === null) {
              if (!y)
                throw Error(d(318));
              if (y = r.memoizedState, y = y !== null ? y.dehydrated : null, !y)
                throw Error(d(317));
              y[fi] = r;
            } else
              Sn(), !(r.flags & 128) && (r.memoizedState = null), r.flags |= 4;
            Cr(r), y = !1;
          } else
            Aa !== null && (zs(Aa), Aa = null), y = !0;
          if (!y)
            return r.flags & 65536 ? r : null;
        }
        return r.flags & 128 ? (r.lanes = o, r) : (c = c !== null, c !== (n !== null && n.memoizedState !== null) && c && (r.child.flags |= 8192, r.mode & 1 && (n === null || ut.current & 1 ? Gn === 0 && (Gn = 3) : Dp())), r.updateQueue !== null && (r.flags |= 4), Cr(r), null);
      case 4:
        return wo(), Sl(n, r), n === null && ru(r.stateNode.containerInfo), Cr(r), null;
      case 10:
        return Co(r.type._context), Cr(r), null;
      case 17:
        return vn(r.type) && Ma(), Cr(r), null;
      case 19:
        if (Ut(ut), y = r.memoizedState, y === null)
          return Cr(r), null;
        if (c = (r.flags & 128) !== 0, C = y.rendering, C === null)
          if (c)
            ks(y, !1);
          else {
            if (Gn !== 0 || n !== null && n.flags & 128)
              for (n = r.child; n !== null; ) {
                if (C = En(n), C !== null) {
                  for (r.flags |= 128, ks(y, !1), c = C.updateQueue, c !== null && (r.updateQueue = c, r.flags |= 4), r.subtreeFlags = 0, c = o, o = r.child; o !== null; )
                    y = o, n = c, y.flags &= 14680066, C = y.alternate, C === null ? (y.childLanes = 0, y.lanes = n, y.child = null, y.subtreeFlags = 0, y.memoizedProps = null, y.memoizedState = null, y.updateQueue = null, y.dependencies = null, y.stateNode = null) : (y.childLanes = C.childLanes, y.lanes = C.lanes, y.child = C.child, y.subtreeFlags = 0, y.deletions = null, y.memoizedProps = C.memoizedProps, y.memoizedState = C.memoizedState, y.updateQueue = C.updateQueue, y.type = C.type, n = C.dependencies, y.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }), o = o.sibling;
                  return jt(ut, ut.current & 1 | 2), r.child;
                }
                n = n.sibling;
              }
            y.tail !== null && At() > bu && (r.flags |= 128, c = !0, ks(y, !1), r.lanes = 4194304);
          }
        else {
          if (!c)
            if (n = En(C), n !== null) {
              if (r.flags |= 128, c = !0, o = n.updateQueue, o !== null && (r.updateQueue = o, r.flags |= 4), ks(y, !0), y.tail === null && y.tailMode === "hidden" && !C.alternate && !un)
                return Cr(r), null;
            } else
              2 * At() - y.renderingStartTime > bu && o !== 1073741824 && (r.flags |= 128, c = !0, ks(y, !1), r.lanes = 4194304);
          y.isBackwards ? (C.sibling = r.child, r.child = C) : (o = y.last, o !== null ? o.sibling = C : r.child = C, y.last = C);
        }
        return y.tail !== null ? (r = y.tail, y.rendering = r, y.tail = r.sibling, y.renderingStartTime = At(), r.sibling = null, o = ut.current, jt(ut, c ? o & 1 | 2 : o & 1), r) : (Cr(r), null);
      case 22:
      case 23:
        return Op(), c = r.memoizedState !== null, n !== null && n.memoizedState !== null !== c && (r.flags |= 8192), c && r.mode & 1 ? Ea & 1073741824 && (Cr(r), r.subtreeFlags & 6 && (r.flags |= 8192)) : Cr(r), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(d(156, r.tag));
  }
  function bp(n, r) {
    switch (ep(r), r.tag) {
      case 1:
        return vn(r.type) && Ma(), n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 3:
        return wo(), Ut(Rn), Ut(dt), Hc(), n = r.flags, n & 65536 && !(n & 128) ? (r.flags = n & -65537 | 128, r) : null;
      case 5:
        return Tt(r), null;
      case 13:
        if (Ut(ut), n = r.memoizedState, n !== null && n.dehydrated !== null) {
          if (r.alternate === null)
            throw Error(d(340));
          Sn();
        }
        return n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 19:
        return Ut(ut), null;
      case 4:
        return wo(), null;
      case 10:
        return Co(r.type._context), null;
      case 22:
      case 23:
        return Op(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var Os = !1, Wn = !1, em = typeof WeakSet == "function" ? WeakSet : Set, Ue = null;
  function hu(n, r) {
    var o = n.ref;
    if (o !== null)
      if (typeof o == "function")
        try {
          o(null);
        } catch (c) {
          _n(n, r, c);
        }
      else
        o.current = null;
  }
  function Ds(n, r, o) {
    try {
      o();
    } catch (c) {
      _n(n, r, c);
    }
  }
  var tm = !1;
  function nm(n, r) {
    if (Wd = Jo, n = Tc(), Ai(n)) {
      if ("selectionStart" in n)
        var o = { start: n.selectionStart, end: n.selectionEnd };
      else
        e: {
          o = (o = n.ownerDocument) && o.defaultView || window;
          var c = o.getSelection && o.getSelection();
          if (c && c.rangeCount !== 0) {
            o = c.anchorNode;
            var p = c.anchorOffset, y = c.focusNode;
            c = c.focusOffset;
            try {
              o.nodeType, y.nodeType;
            } catch {
              o = null;
              break e;
            }
            var C = 0, O = -1, z = -1, X = 0, ce = 0, he = n, se = null;
            t:
              for (; ; ) {
                for (var Me; he !== o || p !== 0 && he.nodeType !== 3 || (O = C + p), he !== y || c !== 0 && he.nodeType !== 3 || (z = C + c), he.nodeType === 3 && (C += he.nodeValue.length), (Me = he.firstChild) !== null; )
                  se = he, he = Me;
                for (; ; ) {
                  if (he === n)
                    break t;
                  if (se === o && ++X === p && (O = C), se === y && ++ce === c && (z = C), (Me = he.nextSibling) !== null)
                    break;
                  he = se, se = he.parentNode;
                }
                he = Me;
              }
            o = O === -1 || z === -1 ? null : { start: O, end: z };
          } else
            o = null;
        }
      o = o || { start: 0, end: 0 };
    } else
      o = null;
    for (al = { focusedElem: n, selectionRange: o }, Jo = !1, Ue = r; Ue !== null; )
      if (r = Ue, n = r.child, (r.subtreeFlags & 1028) !== 0 && n !== null)
        n.return = r, Ue = n;
      else
        for (; Ue !== null; ) {
          r = Ue;
          try {
            var je = r.alternate;
            if (r.flags & 1024)
              switch (r.tag) {
                case 0:
                case 11:
                case 15:
                  break;
                case 1:
                  if (je !== null) {
                    var Ie = je.memoizedProps, Mn = je.memoizedState, B = r.stateNode, j = B.getSnapshotBeforeUpdate(r.elementType === r.type ? Ie : ga(r.type, Ie), Mn);
                    B.__reactInternalSnapshotBeforeUpdate = j;
                  }
                  break;
                case 3:
                  var G = r.stateNode.containerInfo;
                  G.nodeType === 1 ? G.textContent = "" : G.nodeType === 9 && G.documentElement && G.removeChild(G.documentElement);
                  break;
                case 5:
                case 6:
                case 4:
                case 17:
                  break;
                default:
                  throw Error(d(163));
              }
          } catch (ye) {
            _n(r, r.return, ye);
          }
          if (n = r.sibling, n !== null) {
            n.return = r.return, Ue = n;
            break;
          }
          Ue = r.return;
        }
    return je = tm, tm = !1, je;
  }
  function Ns(n, r, o) {
    var c = r.updateQueue;
    if (c = c !== null ? c.lastEffect : null, c !== null) {
      var p = c = c.next;
      do {
        if ((p.tag & n) === n) {
          var y = p.destroy;
          p.destroy = void 0, y !== void 0 && Ds(r, o, y);
        }
        p = p.next;
      } while (p !== c);
    }
  }
  function Ms(n, r) {
    if (r = r.updateQueue, r = r !== null ? r.lastEffect : null, r !== null) {
      var o = r = r.next;
      do {
        if ((o.tag & n) === n) {
          var c = o.create;
          o.destroy = c();
        }
        o = o.next;
      } while (o !== r);
    }
  }
  function Cp(n) {
    var r = n.ref;
    if (r !== null) {
      var o = n.stateNode;
      switch (n.tag) {
        case 5:
          n = o;
          break;
        default:
          n = o;
      }
      typeof r == "function" ? r(n) : r.current = n;
    }
  }
  function xp(n) {
    var r = n.alternate;
    r !== null && (n.alternate = null, xp(r)), n.child = null, n.deletions = null, n.sibling = null, n.tag === 5 && (r = n.stateNode, r !== null && (delete r[fi], delete r[ol], delete r[Qd], delete r[e0], delete r[Kd])), n.stateNode = null, n.return = null, n.dependencies = null, n.memoizedProps = null, n.memoizedState = null, n.pendingProps = null, n.stateNode = null, n.updateQueue = null;
  }
  function rm(n) {
    return n.tag === 5 || n.tag === 3 || n.tag === 4;
  }
  function ff(n) {
    e:
      for (; ; ) {
        for (; n.sibling === null; ) {
          if (n.return === null || rm(n.return))
            return null;
          n = n.return;
        }
        for (n.sibling.return = n.return, n = n.sibling; n.tag !== 5 && n.tag !== 6 && n.tag !== 18; ) {
          if (n.flags & 2 || n.child === null || n.tag === 4)
            continue e;
          n.child.return = n, n = n.child;
        }
        if (!(n.flags & 2))
          return n.stateNode;
      }
  }
  function mu(n, r, o) {
    var c = n.tag;
    if (c === 5 || c === 6)
      n = n.stateNode, r ? o.nodeType === 8 ? o.parentNode.insertBefore(n, r) : o.insertBefore(n, r) : (o.nodeType === 8 ? (r = o.parentNode, r.insertBefore(n, o)) : (r = o, r.appendChild(n)), o = o._reactRootContainer, o != null || r.onclick !== null || (r.onclick = Dc));
    else if (c !== 4 && (n = n.child, n !== null))
      for (mu(n, r, o), n = n.sibling; n !== null; )
        mu(n, r, o), n = n.sibling;
  }
  function mi(n, r, o) {
    var c = n.tag;
    if (c === 5 || c === 6)
      n = n.stateNode, r ? o.insertBefore(n, r) : o.appendChild(n);
    else if (c !== 4 && (n = n.child, n !== null))
      for (mi(n, r, o), n = n.sibling; n !== null; )
        mi(n, r, o), n = n.sibling;
  }
  var hn = null, rr = !1;
  function ja(n, r, o) {
    for (o = o.child; o !== null; )
      yu(n, r, o), o = o.sibling;
  }
  function yu(n, r, o) {
    if (Ka && typeof Ka.onCommitFiberUnmount == "function")
      try {
        Ka.onCommitFiberUnmount(Qu, o);
      } catch {
      }
    switch (o.tag) {
      case 5:
        Wn || hu(o, r);
      case 6:
        var c = hn, p = rr;
        hn = null, ja(n, r, o), hn = c, rr = p, hn !== null && (rr ? (n = hn, o = o.stateNode, n.nodeType === 8 ? n.parentNode.removeChild(o) : n.removeChild(o)) : hn.removeChild(o.stateNode));
        break;
      case 18:
        hn !== null && (rr ? (n = hn, o = o.stateNode, n.nodeType === 8 ? mo(n.parentNode, o) : n.nodeType === 1 && mo(n, o), es(n)) : mo(hn, o.stateNode));
        break;
      case 4:
        c = hn, p = rr, hn = o.stateNode.containerInfo, rr = !0, ja(n, r, o), hn = c, rr = p;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!Wn && (c = o.updateQueue, c !== null && (c = c.lastEffect, c !== null))) {
          p = c = c.next;
          do {
            var y = p, C = y.destroy;
            y = y.tag, C !== void 0 && (y & 2 || y & 4) && Ds(o, r, C), p = p.next;
          } while (p !== c);
        }
        ja(n, r, o);
        break;
      case 1:
        if (!Wn && (hu(o, r), c = o.stateNode, typeof c.componentWillUnmount == "function"))
          try {
            c.props = o.memoizedProps, c.state = o.memoizedState, c.componentWillUnmount();
          } catch (O) {
            _n(o, r, O);
          }
        ja(n, r, o);
        break;
      case 21:
        ja(n, r, o);
        break;
      case 22:
        o.mode & 1 ? (Wn = (c = Wn) || o.memoizedState !== null, ja(n, r, o), Wn = c) : ja(n, r, o);
        break;
      default:
        ja(n, r, o);
    }
  }
  function Ii(n) {
    var r = n.updateQueue;
    if (r !== null) {
      n.updateQueue = null;
      var o = n.stateNode;
      o === null && (o = n.stateNode = new em()), r.forEach(function(c) {
        var p = p0.bind(null, n, c);
        o.has(c) || (o.add(c), c.then(p, p));
      });
    }
  }
  function ri(n, r) {
    var o = r.deletions;
    if (o !== null)
      for (var c = 0; c < o.length; c++) {
        var p = o[c];
        try {
          var y = n, C = r, O = C;
          e:
            for (; O !== null; ) {
              switch (O.tag) {
                case 5:
                  hn = O.stateNode, rr = !1;
                  break e;
                case 3:
                  hn = O.stateNode.containerInfo, rr = !0;
                  break e;
                case 4:
                  hn = O.stateNode.containerInfo, rr = !0;
                  break e;
              }
              O = O.return;
            }
          if (hn === null)
            throw Error(d(160));
          yu(y, C, p), hn = null, rr = !1;
          var z = p.alternate;
          z !== null && (z.return = null), p.return = null;
        } catch (X) {
          _n(p, r, X);
        }
      }
    if (r.subtreeFlags & 12854)
      for (r = r.child; r !== null; )
        am(r, n), r = r.sibling;
  }
  function am(n, r) {
    var o = n.alternate, c = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (ri(r, n), yi(n), c & 4) {
          try {
            Ns(3, n, n.return), Ms(3, n);
          } catch (Ie) {
            _n(n, n.return, Ie);
          }
          try {
            Ns(5, n, n.return);
          } catch (Ie) {
            _n(n, n.return, Ie);
          }
        }
        break;
      case 1:
        ri(r, n), yi(n), c & 512 && o !== null && hu(o, o.return);
        break;
      case 5:
        if (ri(r, n), yi(n), c & 512 && o !== null && hu(o, o.return), n.flags & 32) {
          var p = n.stateNode;
          try {
            Yr(p, "");
          } catch (Ie) {
            _n(n, n.return, Ie);
          }
        }
        if (c & 4 && (p = n.stateNode, p != null)) {
          var y = n.memoizedProps, C = o !== null ? o.memoizedProps : y, O = n.type, z = n.updateQueue;
          if (n.updateQueue = null, z !== null)
            try {
              O === "input" && y.type === "radio" && y.name != null && mn(p, y), Dn(O, C);
              var X = Dn(O, y);
              for (C = 0; C < z.length; C += 2) {
                var ce = z[C], he = z[C + 1];
                ce === "style" ? Vt(p, he) : ce === "dangerouslySetInnerHTML" ? ct(p, he) : ce === "children" ? Yr(p, he) : K(p, ce, he, X);
              }
              switch (O) {
                case "input":
                  On(p, y);
                  break;
                case "textarea":
                  Or(p, y);
                  break;
                case "select":
                  var se = p._wrapperState.wasMultiple;
                  p._wrapperState.wasMultiple = !!y.multiple;
                  var Me = y.value;
                  Me != null ? Br(p, !!y.multiple, Me, !1) : se !== !!y.multiple && (y.defaultValue != null ? Br(
                    p,
                    !!y.multiple,
                    y.defaultValue,
                    !0
                  ) : Br(p, !!y.multiple, y.multiple ? [] : "", !1));
              }
              p[ol] = y;
            } catch (Ie) {
              _n(n, n.return, Ie);
            }
        }
        break;
      case 6:
        if (ri(r, n), yi(n), c & 4) {
          if (n.stateNode === null)
            throw Error(d(162));
          p = n.stateNode, y = n.memoizedProps;
          try {
            p.nodeValue = y;
          } catch (Ie) {
            _n(n, n.return, Ie);
          }
        }
        break;
      case 3:
        if (ri(r, n), yi(n), c & 4 && o !== null && o.memoizedState.isDehydrated)
          try {
            es(r.containerInfo);
          } catch (Ie) {
            _n(n, n.return, Ie);
          }
        break;
      case 4:
        ri(r, n), yi(n);
        break;
      case 13:
        ri(r, n), yi(n), p = n.child, p.flags & 8192 && (y = p.memoizedState !== null, p.stateNode.isHidden = y, !y || p.alternate !== null && p.alternate.memoizedState !== null || (wp = At())), c & 4 && Ii(n);
        break;
      case 22:
        if (ce = o !== null && o.memoizedState !== null, n.mode & 1 ? (Wn = (X = Wn) || ce, ri(r, n), Wn = X) : ri(r, n), yi(n), c & 8192) {
          if (X = n.memoizedState !== null, (n.stateNode.isHidden = X) && !ce && n.mode & 1)
            for (Ue = n, ce = n.child; ce !== null; ) {
              for (he = Ue = ce; Ue !== null; ) {
                switch (se = Ue, Me = se.child, se.tag) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    Ns(4, se, se.return);
                    break;
                  case 1:
                    hu(se, se.return);
                    var je = se.stateNode;
                    if (typeof je.componentWillUnmount == "function") {
                      c = se, o = se.return;
                      try {
                        r = c, je.props = r.memoizedProps, je.state = r.memoizedState, je.componentWillUnmount();
                      } catch (Ie) {
                        _n(c, o, Ie);
                      }
                    }
                    break;
                  case 5:
                    hu(se, se.return);
                    break;
                  case 22:
                    if (se.memoizedState !== null) {
                      Tp(he);
                      continue;
                    }
                }
                Me !== null ? (Me.return = se, Ue = Me) : Tp(he);
              }
              ce = ce.sibling;
            }
          e:
            for (ce = null, he = n; ; ) {
              if (he.tag === 5) {
                if (ce === null) {
                  ce = he;
                  try {
                    p = he.stateNode, X ? (y = p.style, typeof y.setProperty == "function" ? y.setProperty("display", "none", "important") : y.display = "none") : (O = he.stateNode, z = he.memoizedProps.style, C = z != null && z.hasOwnProperty("display") ? z.display : null, O.style.display = xt("display", C));
                  } catch (Ie) {
                    _n(n, n.return, Ie);
                  }
                }
              } else if (he.tag === 6) {
                if (ce === null)
                  try {
                    he.stateNode.nodeValue = X ? "" : he.memoizedProps;
                  } catch (Ie) {
                    _n(n, n.return, Ie);
                  }
              } else if ((he.tag !== 22 && he.tag !== 23 || he.memoizedState === null || he === n) && he.child !== null) {
                he.child.return = he, he = he.child;
                continue;
              }
              if (he === n)
                break e;
              for (; he.sibling === null; ) {
                if (he.return === null || he.return === n)
                  break e;
                ce === he && (ce = null), he = he.return;
              }
              ce === he && (ce = null), he.sibling.return = he.return, he = he.sibling;
            }
        }
        break;
      case 19:
        ri(r, n), yi(n), c & 4 && Ii(n);
        break;
      case 21:
        break;
      default:
        ri(
          r,
          n
        ), yi(n);
    }
  }
  function yi(n) {
    var r = n.flags;
    if (r & 2) {
      try {
        e: {
          for (var o = n.return; o !== null; ) {
            if (rm(o)) {
              var c = o;
              break e;
            }
            o = o.return;
          }
          throw Error(d(160));
        }
        switch (c.tag) {
          case 5:
            var p = c.stateNode;
            c.flags & 32 && (Yr(p, ""), c.flags &= -33);
            var y = ff(n);
            mi(n, y, p);
            break;
          case 3:
          case 4:
            var C = c.stateNode.containerInfo, O = ff(n);
            mu(n, O, C);
            break;
          default:
            throw Error(d(161));
        }
      } catch (z) {
        _n(n, n.return, z);
      }
      n.flags &= -3;
    }
    r & 4096 && (n.flags &= -4097);
  }
  function im(n, r, o) {
    Ue = n, gu(n);
  }
  function gu(n, r, o) {
    for (var c = (n.mode & 1) !== 0; Ue !== null; ) {
      var p = Ue, y = p.child;
      if (p.tag === 22 && c) {
        var C = p.memoizedState !== null || Os;
        if (!C) {
          var O = p.alternate, z = O !== null && O.memoizedState !== null || Wn;
          O = Os;
          var X = Wn;
          if (Os = C, (Wn = z) && !X)
            for (Ue = p; Ue !== null; )
              C = Ue, z = C.child, C.tag === 22 && C.memoizedState !== null ? lm(p) : z !== null ? (z.return = C, Ue = z) : lm(p);
          for (; y !== null; )
            Ue = y, gu(y), y = y.sibling;
          Ue = p, Os = O, Wn = X;
        }
        om(n);
      } else
        p.subtreeFlags & 8772 && y !== null ? (y.return = p, Ue = y) : om(n);
    }
  }
  function om(n) {
    for (; Ue !== null; ) {
      var r = Ue;
      if (r.flags & 8772) {
        var o = r.alternate;
        try {
          if (r.flags & 8772)
            switch (r.tag) {
              case 0:
              case 11:
              case 15:
                Wn || Ms(5, r);
                break;
              case 1:
                var c = r.stateNode;
                if (r.flags & 4 && !Wn)
                  if (o === null)
                    c.componentDidMount();
                  else {
                    var p = r.elementType === r.type ? o.memoizedProps : ga(r.type, o.memoizedProps);
                    c.componentDidUpdate(p, o.memoizedState, c.__reactInternalSnapshotBeforeUpdate);
                  }
                var y = r.updateQueue;
                y !== null && ul(r, y, c);
                break;
              case 3:
                var C = r.updateQueue;
                if (C !== null) {
                  if (o = null, r.child !== null)
                    switch (r.child.tag) {
                      case 5:
                        o = r.child.stateNode;
                        break;
                      case 1:
                        o = r.child.stateNode;
                    }
                  ul(r, C, o);
                }
                break;
              case 5:
                var O = r.stateNode;
                if (o === null && r.flags & 4) {
                  o = O;
                  var z = r.memoizedProps;
                  switch (r.type) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                      z.autoFocus && o.focus();
                      break;
                    case "img":
                      z.src && (o.src = z.src);
                  }
                }
                break;
              case 6:
                break;
              case 4:
                break;
              case 12:
                break;
              case 13:
                if (r.memoizedState === null) {
                  var X = r.alternate;
                  if (X !== null) {
                    var ce = X.memoizedState;
                    if (ce !== null) {
                      var he = ce.dehydrated;
                      he !== null && es(he);
                    }
                  }
                }
                break;
              case 19:
              case 17:
              case 21:
              case 22:
              case 23:
              case 25:
                break;
              default:
                throw Error(d(163));
            }
          Wn || r.flags & 512 && Cp(r);
        } catch (se) {
          _n(r, r.return, se);
        }
      }
      if (r === n) {
        Ue = null;
        break;
      }
      if (o = r.sibling, o !== null) {
        o.return = r.return, Ue = o;
        break;
      }
      Ue = r.return;
    }
  }
  function Tp(n) {
    for (; Ue !== null; ) {
      var r = Ue;
      if (r === n) {
        Ue = null;
        break;
      }
      var o = r.sibling;
      if (o !== null) {
        o.return = r.return, Ue = o;
        break;
      }
      Ue = r.return;
    }
  }
  function lm(n) {
    for (; Ue !== null; ) {
      var r = Ue;
      try {
        switch (r.tag) {
          case 0:
          case 11:
          case 15:
            var o = r.return;
            try {
              Ms(4, r);
            } catch (z) {
              _n(r, o, z);
            }
            break;
          case 1:
            var c = r.stateNode;
            if (typeof c.componentDidMount == "function") {
              var p = r.return;
              try {
                c.componentDidMount();
              } catch (z) {
                _n(r, p, z);
              }
            }
            var y = r.return;
            try {
              Cp(r);
            } catch (z) {
              _n(r, y, z);
            }
            break;
          case 5:
            var C = r.return;
            try {
              Cp(r);
            } catch (z) {
              _n(r, C, z);
            }
        }
      } catch (z) {
        _n(r, r.return, z);
      }
      if (r === n) {
        Ue = null;
        break;
      }
      var O = r.sibling;
      if (O !== null) {
        O.return = r.return, Ue = O;
        break;
      }
      Ue = r.return;
    }
  }
  var df = Math.ceil, Ls = J.ReactCurrentDispatcher, Rp = J.ReactCurrentOwner, xr = J.ReactCurrentBatchConfig, _t = 0, bn = null, wn = null, ar = 0, Ea = 0, Su = gt(0), Gn = 0, As = null, Bi = 0, pf = 0, Eu = 0, El = null, Mr = null, wp = 0, bu = 1 / 0, Yi = null, vf = !1, bl = null, gi = null, Do = !1, No = null, hf = 0, Cu = 0, mf = null, Cl = -1, xl = 0;
  function Tr() {
    return _t & 6 ? At() : Cl !== -1 ? Cl : Cl = At();
  }
  function Un(n) {
    return n.mode & 1 ? _t & 2 && ar !== 0 ? ar & -ar : Pc.transition !== null ? (xl === 0 && (xl = dc()), xl) : (n = Ht, n !== 0 || (n = window.event, n = n === void 0 ? 16 : wd(n.type)), n) : 1;
  }
  function Rr(n, r, o, c) {
    if (50 < Cu)
      throw Cu = 0, mf = null, Error(d(185));
    Zo(n, o, c), (!(_t & 2) || n !== bn) && (n === bn && (!(_t & 2) && (pf |= o), Gn === 4 && $a(n, ar)), wr(n, c), o === 1 && _t === 0 && !(r.mode & 1) && (bu = At() + 500, tr && Qr()));
  }
  function wr(n, r) {
    var o = n.callbackNode;
    fc(n, r);
    var c = Xa(n, n === bn ? ar : 0);
    if (c === 0)
      o !== null && Nr(o), n.callbackNode = null, n.callbackPriority = 0;
    else if (r = c & -c, n.callbackPriority !== r) {
      if (o != null && Nr(o), r === 1)
        n.tag === 0 ? Zd(um.bind(null, n)) : Xd(um.bind(null, n)), qd(function() {
          !(_t & 6) && Qr();
        }), o = null;
      else {
        switch (xd(c)) {
          case 1:
            o = Di;
            break;
          case 4:
            o = wt;
            break;
          case 16:
            o = co;
            break;
          case 536870912:
            o = Sd;
            break;
          default:
            o = co;
        }
        o = Mp(o, xu.bind(null, n));
      }
      n.callbackPriority = r, n.callbackNode = o;
    }
  }
  function xu(n, r) {
    if (Cl = -1, xl = 0, _t & 6)
      throw Error(d(327));
    var o = n.callbackNode;
    if (Ru() && n.callbackNode !== o)
      return null;
    var c = Xa(n, n === bn ? ar : 0);
    if (c === 0)
      return null;
    if (c & 30 || c & n.expiredLanes || r)
      r = gf(n, c);
    else {
      r = c;
      var p = _t;
      _t |= 2;
      var y = yf();
      (bn !== n || ar !== r) && (Yi = null, bu = At() + 500, Tl(n, r));
      do
        try {
          s0();
          break;
        } catch (O) {
          sm(n, O);
        }
      while (!0);
      ap(), Ls.current = y, _t = p, wn !== null ? r = 0 : (bn = null, ar = 0, r = Gn);
    }
    if (r !== 0) {
      if (r === 2 && (p = bd(n), p !== 0 && (c = p, r = _p(n, p))), r === 1)
        throw o = As, Tl(n, 0), $a(n, c), wr(n, At()), o;
      if (r === 6)
        $a(n, c);
      else {
        if (p = n.current.alternate, !(c & 30) && !kp(p) && (r = gf(n, c), r === 2 && (y = bd(n), y !== 0 && (c = y, r = _p(n, y))), r === 1))
          throw o = As, Tl(n, 0), $a(n, c), wr(n, At()), o;
        switch (n.finishedWork = p, n.finishedLanes = c, r) {
          case 0:
          case 1:
            throw Error(d(345));
          case 2:
            Rl(n, Mr, Yi);
            break;
          case 3:
            if ($a(n, c), (c & 130023424) === c && (r = wp + 500 - At(), 10 < r)) {
              if (Xa(n, 0) !== 0)
                break;
              if (p = n.suspendedLanes, (p & c) !== c) {
                Tr(), n.pingedLanes |= n.suspendedLanes & p;
                break;
              }
              n.timeoutHandle = il(Rl.bind(null, n, Mr, Yi), r);
              break;
            }
            Rl(n, Mr, Yi);
            break;
          case 4:
            if ($a(n, c), (c & 4194240) === c)
              break;
            for (r = n.eventTimes, p = -1; 0 < c; ) {
              var C = 31 - wa(c);
              y = 1 << C, C = r[C], C > p && (p = C), c &= ~y;
            }
            if (c = p, c = At() - c, c = (120 > c ? 120 : 480 > c ? 480 : 1080 > c ? 1080 : 1920 > c ? 1920 : 3e3 > c ? 3e3 : 4320 > c ? 4320 : 1960 * df(c / 1960)) - c, 10 < c) {
              n.timeoutHandle = il(Rl.bind(null, n, Mr, Yi), c);
              break;
            }
            Rl(n, Mr, Yi);
            break;
          case 5:
            Rl(n, Mr, Yi);
            break;
          default:
            throw Error(d(329));
        }
      }
    }
    return wr(n, At()), n.callbackNode === o ? xu.bind(null, n) : null;
  }
  function _p(n, r) {
    var o = El;
    return n.current.memoizedState.isDehydrated && (Tl(n, r).flags |= 256), n = gf(n, r), n !== 2 && (r = Mr, Mr = o, r !== null && zs(r)), n;
  }
  function zs(n) {
    Mr === null ? Mr = n : Mr.push.apply(Mr, n);
  }
  function kp(n) {
    for (var r = n; ; ) {
      if (r.flags & 16384) {
        var o = r.updateQueue;
        if (o !== null && (o = o.stores, o !== null))
          for (var c = 0; c < o.length; c++) {
            var p = o[c], y = p.getSnapshot;
            p = p.value;
            try {
              if (!Oa(y(), p))
                return !1;
            } catch {
              return !1;
            }
          }
      }
      if (o = r.child, r.subtreeFlags & 16384 && o !== null)
        o.return = r, r = o;
      else {
        if (r === n)
          break;
        for (; r.sibling === null; ) {
          if (r.return === null || r.return === n)
            return !0;
          r = r.return;
        }
        r.sibling.return = r.return, r = r.sibling;
      }
    }
    return !0;
  }
  function $a(n, r) {
    for (r &= ~Eu, r &= ~pf, n.suspendedLanes |= r, n.pingedLanes &= ~r, n = n.expirationTimes; 0 < r; ) {
      var o = 31 - wa(r), c = 1 << o;
      n[o] = -1, r &= ~c;
    }
  }
  function um(n) {
    if (_t & 6)
      throw Error(d(327));
    Ru();
    var r = Xa(n, 0);
    if (!(r & 1))
      return wr(n, At()), null;
    var o = gf(n, r);
    if (n.tag !== 0 && o === 2) {
      var c = bd(n);
      c !== 0 && (r = c, o = _p(n, c));
    }
    if (o === 1)
      throw o = As, Tl(n, 0), $a(n, r), wr(n, At()), o;
    if (o === 6)
      throw Error(d(345));
    return n.finishedWork = n.current.alternate, n.finishedLanes = r, Rl(n, Mr, Yi), wr(n, At()), null;
  }
  function Tu(n, r) {
    var o = _t;
    _t |= 1;
    try {
      return n(r);
    } finally {
      _t = o, _t === 0 && (bu = At() + 500, tr && Qr());
    }
  }
  function Mo(n) {
    No !== null && No.tag === 0 && !(_t & 6) && Ru();
    var r = _t;
    _t |= 1;
    var o = xr.transition, c = Ht;
    try {
      if (xr.transition = null, Ht = 1, n)
        return n();
    } finally {
      Ht = c, xr.transition = o, _t = r, !(_t & 6) && Qr();
    }
  }
  function Op() {
    Ea = Su.current, Ut(Su);
  }
  function Tl(n, r) {
    n.finishedWork = null, n.finishedLanes = 0;
    var o = n.timeoutHandle;
    if (o !== -1 && (n.timeoutHandle = -1, Ph(o)), wn !== null)
      for (o = wn.return; o !== null; ) {
        var c = o;
        switch (ep(c), c.tag) {
          case 1:
            c = c.type.childContextTypes, c != null && Ma();
            break;
          case 3:
            wo(), Ut(Rn), Ut(dt), Hc();
            break;
          case 5:
            Tt(c);
            break;
          case 4:
            wo();
            break;
          case 13:
            Ut(ut);
            break;
          case 19:
            Ut(ut);
            break;
          case 10:
            Co(c.type._context);
            break;
          case 22:
          case 23:
            Op();
        }
        o = o.return;
      }
    if (bn = n, wn = n = Lo(n.current, null), ar = Ea = r, Gn = 0, As = null, Eu = pf = Bi = 0, Mr = El = null, sr !== null) {
      for (r = 0; r < sr.length; r++)
        if (o = sr[r], c = o.interleaved, c !== null) {
          o.interleaved = null;
          var p = c.next, y = o.pending;
          if (y !== null) {
            var C = y.next;
            y.next = p, c.next = C;
          }
          o.pending = c;
        }
      sr = null;
    }
    return n;
  }
  function sm(n, r) {
    do {
      var o = wn;
      try {
        if (ap(), Ic.current = of, st) {
          for (var c = sn.memoizedState; c !== null; ) {
            var p = c.queue;
            p !== null && (p.pending = null), c = c.next;
          }
          st = !1;
        }
        if (cl = 0, Ot = ne = sn = null, hi = !1, Sa = 0, Rp.current = null, o === null || o.return === null) {
          Gn = 1, As = r, wn = null;
          break;
        }
        e: {
          var y = n, C = o.return, O = o, z = r;
          if (r = ar, O.flags |= 32768, z !== null && typeof z == "object" && typeof z.then == "function") {
            var X = z, ce = O, he = ce.tag;
            if (!(ce.mode & 1) && (he === 0 || he === 11 || he === 15)) {
              var se = ce.alternate;
              se ? (ce.updateQueue = se.updateQueue, ce.memoizedState = se.memoizedState, ce.lanes = se.lanes) : (ce.updateQueue = null, ce.memoizedState = null);
            }
            var Me = pp(C);
            if (Me !== null) {
              Me.flags &= -257, vp(Me, C, O, y, r), Me.mode & 1 && Xh(y, X, r), r = Me, z = X;
              var je = r.updateQueue;
              if (je === null) {
                var Ie = /* @__PURE__ */ new Set();
                Ie.add(z), r.updateQueue = Ie;
              } else
                je.add(z);
              break e;
            } else {
              if (!(r & 1)) {
                Xh(y, X, r), Dp();
                break e;
              }
              z = Error(d(426));
            }
          } else if (un && O.mode & 1) {
            var Mn = pp(C);
            if (Mn !== null) {
              !(Mn.flags & 65536) && (Mn.flags |= 256), vp(Mn, C, O, y, r), np(du(z, O));
              break e;
            }
          }
          y = z = du(z, O), Gn !== 4 && (Gn = 2), El === null ? El = [y] : El.push(y), y = C;
          do {
            switch (y.tag) {
              case 3:
                y.flags |= 65536, r &= -r, y.lanes |= r;
                var B = Kh(y, z, r);
                lp(y, B);
                break e;
              case 1:
                O = z;
                var j = y.type, G = y.stateNode;
                if (!(y.flags & 128) && (typeof j.getDerivedStateFromError == "function" || G !== null && typeof G.componentDidCatch == "function" && (gi === null || !gi.has(G)))) {
                  y.flags |= 65536, r &= -r, y.lanes |= r;
                  var ye = ws(y, O, r);
                  lp(y, ye);
                  break e;
                }
            }
            y = y.return;
          } while (y !== null);
        }
        Np(o);
      } catch (Ge) {
        r = Ge, wn === o && o !== null && (wn = o = o.return);
        continue;
      }
      break;
    } while (!0);
  }
  function yf() {
    var n = Ls.current;
    return Ls.current = of, n === null ? of : n;
  }
  function Dp() {
    (Gn === 0 || Gn === 3 || Gn === 2) && (Gn = 4), bn === null || !(Bi & 268435455) && !(pf & 268435455) || $a(bn, ar);
  }
  function gf(n, r) {
    var o = _t;
    _t |= 2;
    var c = yf();
    (bn !== n || ar !== r) && (Yi = null, Tl(n, r));
    do
      try {
        u0();
        break;
      } catch (p) {
        sm(n, p);
      }
    while (!0);
    if (ap(), _t = o, Ls.current = c, wn !== null)
      throw Error(d(261));
    return bn = null, ar = 0, Gn;
  }
  function u0() {
    for (; wn !== null; )
      cm(wn);
  }
  function s0() {
    for (; wn !== null && !so(); )
      cm(wn);
  }
  function cm(n) {
    var r = dm(n.alternate, n, Ea);
    n.memoizedProps = n.pendingProps, r === null ? Np(n) : wn = r, Rp.current = null;
  }
  function Np(n) {
    var r = n;
    do {
      var o = r.alternate;
      if (n = r.return, r.flags & 32768) {
        if (o = bp(o, r), o !== null) {
          o.flags &= 32767, wn = o;
          return;
        }
        if (n !== null)
          n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null;
        else {
          Gn = 6, wn = null;
          return;
        }
      } else if (o = l0(o, r, Ea), o !== null) {
        wn = o;
        return;
      }
      if (r = r.sibling, r !== null) {
        wn = r;
        return;
      }
      wn = r = n;
    } while (r !== null);
    Gn === 0 && (Gn = 5);
  }
  function Rl(n, r, o) {
    var c = Ht, p = xr.transition;
    try {
      xr.transition = null, Ht = 1, c0(n, r, o, c);
    } finally {
      xr.transition = p, Ht = c;
    }
    return null;
  }
  function c0(n, r, o, c) {
    do
      Ru();
    while (No !== null);
    if (_t & 6)
      throw Error(d(327));
    o = n.finishedWork;
    var p = n.finishedLanes;
    if (o === null)
      return null;
    if (n.finishedWork = null, n.finishedLanes = 0, o === n.current)
      throw Error(d(177));
    n.callbackNode = null, n.callbackPriority = 0;
    var y = o.lanes | o.childLanes;
    if (Pg(n, y), n === bn && (wn = bn = null, ar = 0), !(o.subtreeFlags & 2064) && !(o.flags & 2064) || Do || (Do = !0, Mp(co, function() {
      return Ru(), null;
    })), y = (o.flags & 15990) !== 0, o.subtreeFlags & 15990 || y) {
      y = xr.transition, xr.transition = null;
      var C = Ht;
      Ht = 1;
      var O = _t;
      _t |= 4, Rp.current = null, nm(n, o), am(o, n), Rc(al), Jo = !!Wd, al = Wd = null, n.current = o, im(o), sc(), _t = O, Ht = C, xr.transition = y;
    } else
      n.current = o;
    if (Do && (Do = !1, No = n, hf = p), y = n.pendingLanes, y === 0 && (gi = null), Kv(o.stateNode), wr(n, At()), r !== null)
      for (c = n.onRecoverableError, o = 0; o < r.length; o++)
        p = r[o], c(p.value, { componentStack: p.stack, digest: p.digest });
    if (vf)
      throw vf = !1, n = bl, bl = null, n;
    return hf & 1 && n.tag !== 0 && Ru(), y = n.pendingLanes, y & 1 ? n === mf ? Cu++ : (Cu = 0, mf = n) : Cu = 0, Qr(), null;
  }
  function Ru() {
    if (No !== null) {
      var n = xd(hf), r = xr.transition, o = Ht;
      try {
        if (xr.transition = null, Ht = 16 > n ? 16 : n, No === null)
          var c = !1;
        else {
          if (n = No, No = null, hf = 0, _t & 6)
            throw Error(d(331));
          var p = _t;
          for (_t |= 4, Ue = n.current; Ue !== null; ) {
            var y = Ue, C = y.child;
            if (Ue.flags & 16) {
              var O = y.deletions;
              if (O !== null) {
                for (var z = 0; z < O.length; z++) {
                  var X = O[z];
                  for (Ue = X; Ue !== null; ) {
                    var ce = Ue;
                    switch (ce.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Ns(8, ce, y);
                    }
                    var he = ce.child;
                    if (he !== null)
                      he.return = ce, Ue = he;
                    else
                      for (; Ue !== null; ) {
                        ce = Ue;
                        var se = ce.sibling, Me = ce.return;
                        if (xp(ce), ce === X) {
                          Ue = null;
                          break;
                        }
                        if (se !== null) {
                          se.return = Me, Ue = se;
                          break;
                        }
                        Ue = Me;
                      }
                  }
                }
                var je = y.alternate;
                if (je !== null) {
                  var Ie = je.child;
                  if (Ie !== null) {
                    je.child = null;
                    do {
                      var Mn = Ie.sibling;
                      Ie.sibling = null, Ie = Mn;
                    } while (Ie !== null);
                  }
                }
                Ue = y;
              }
            }
            if (y.subtreeFlags & 2064 && C !== null)
              C.return = y, Ue = C;
            else
              e:
                for (; Ue !== null; ) {
                  if (y = Ue, y.flags & 2048)
                    switch (y.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Ns(9, y, y.return);
                    }
                  var B = y.sibling;
                  if (B !== null) {
                    B.return = y.return, Ue = B;
                    break e;
                  }
                  Ue = y.return;
                }
          }
          var j = n.current;
          for (Ue = j; Ue !== null; ) {
            C = Ue;
            var G = C.child;
            if (C.subtreeFlags & 2064 && G !== null)
              G.return = C, Ue = G;
            else
              e:
                for (C = j; Ue !== null; ) {
                  if (O = Ue, O.flags & 2048)
                    try {
                      switch (O.tag) {
                        case 0:
                        case 11:
                        case 15:
                          Ms(9, O);
                      }
                    } catch (Ge) {
                      _n(O, O.return, Ge);
                    }
                  if (O === C) {
                    Ue = null;
                    break e;
                  }
                  var ye = O.sibling;
                  if (ye !== null) {
                    ye.return = O.return, Ue = ye;
                    break e;
                  }
                  Ue = O.return;
                }
          }
          if (_t = p, Qr(), Ka && typeof Ka.onPostCommitFiberRoot == "function")
            try {
              Ka.onPostCommitFiberRoot(Qu, n);
            } catch {
            }
          c = !0;
        }
        return c;
      } finally {
        Ht = o, xr.transition = r;
      }
    }
    return !1;
  }
  function fm(n, r, o) {
    r = du(o, r), r = Kh(n, r, 1), n = To(n, r, 1), r = Tr(), n !== null && (Zo(n, 1, r), wr(n, r));
  }
  function _n(n, r, o) {
    if (n.tag === 3)
      fm(n, n, o);
    else
      for (; r !== null; ) {
        if (r.tag === 3) {
          fm(r, n, o);
          break;
        } else if (r.tag === 1) {
          var c = r.stateNode;
          if (typeof r.type.getDerivedStateFromError == "function" || typeof c.componentDidCatch == "function" && (gi === null || !gi.has(c))) {
            n = du(o, n), n = ws(r, n, 1), r = To(r, n, 1), n = Tr(), r !== null && (Zo(r, 1, n), wr(r, n));
            break;
          }
        }
        r = r.return;
      }
  }
  function f0(n, r, o) {
    var c = n.pingCache;
    c !== null && c.delete(r), r = Tr(), n.pingedLanes |= n.suspendedLanes & o, bn === n && (ar & o) === o && (Gn === 4 || Gn === 3 && (ar & 130023424) === ar && 500 > At() - wp ? Tl(n, 0) : Eu |= o), wr(n, r);
  }
  function Sf(n, r) {
    r === 0 && (n.mode & 1 ? (r = Gl, Gl <<= 1, !(Gl & 130023424) && (Gl = 4194304)) : r = 1);
    var o = Tr();
    n = $i(n, r), n !== null && (Zo(n, r, o), wr(n, o));
  }
  function d0(n) {
    var r = n.memoizedState, o = 0;
    r !== null && (o = r.retryLane), Sf(n, o);
  }
  function p0(n, r) {
    var o = 0;
    switch (n.tag) {
      case 13:
        var c = n.stateNode, p = n.memoizedState;
        p !== null && (o = p.retryLane);
        break;
      case 19:
        c = n.stateNode;
        break;
      default:
        throw Error(d(314));
    }
    c !== null && c.delete(r), Sf(n, o);
  }
  var dm;
  dm = function(n, r, o) {
    if (n !== null)
      if (n.memoizedProps !== r.pendingProps || Rn.current)
        Pn = !0;
      else {
        if (!(n.lanes & o) && !(r.flags & 128))
          return Pn = !1, Hi(n, r, o);
        Pn = !!(n.flags & 131072);
      }
    else
      Pn = !1, un && r.flags & 1048576 && Jd(r, iu, r.index);
    switch (r.lanes = 0, r.tag) {
      case 2:
        var c = r.type;
        br(n, r), n = r.pendingProps;
        var p = Na(r, dt.current);
        xe(r, o), p = _o(null, r, c, n, p, o);
        var y = pl();
        return r.flags |= 1, typeof p == "object" && p !== null && typeof p.render == "function" && p.$$typeof === void 0 ? (r.tag = 1, r.memoizedState = null, r.updateQueue = null, vn(c) ? (y = !0, Nc(r)) : y = !1, r.memoizedState = p.state !== null && p.state !== void 0 ? p.state : null, op(r), p.updater = $c, r.stateNode = p, p._reactInternals = r, Fc(r, c, n, o), r = Zh(null, r, c, !0, y, o)) : (r.tag = 0, un && y && Mc(r), Bn(null, r, p, o), r = r.child), r;
      case 16:
        c = r.elementType;
        e: {
          switch (br(n, r), n = r.pendingProps, p = c._init, c = p(c._payload), r.type = c, p = r.tag = h0(c), n = ga(c, n), p) {
            case 0:
              r = pu(null, r, c, n, o);
              break e;
            case 1:
              r = hp(null, r, c, n, o);
              break e;
            case 11:
              r = Oo(null, r, c, n, o);
              break e;
            case 14:
              r = uf(null, r, c, ga(c.type, n), o);
              break e;
          }
          throw Error(d(
            306,
            c,
            ""
          ));
        }
        return r;
      case 0:
        return c = r.type, p = r.pendingProps, p = r.elementType === c ? p : ga(c, p), pu(n, r, c, p, o);
      case 1:
        return c = r.type, p = r.pendingProps, p = r.elementType === c ? p : ga(c, p), hp(n, r, c, p, o);
      case 3:
        e: {
          if (Jh(r), n === null)
            throw Error(d(387));
          c = r.pendingProps, y = r.memoizedState, p = y.element, In(n, r), Ro(r, c, null, o);
          var C = r.memoizedState;
          if (c = C.element, y.isDehydrated)
            if (y = { element: c, isDehydrated: !1, cache: C.cache, pendingSuspenseBoundaries: C.pendingSuspenseBoundaries, transitions: C.transitions }, r.updateQueue.baseState = y, r.memoizedState = y, r.flags & 256) {
              p = du(Error(d(423)), r), r = sf(n, r, c, o, p);
              break e;
            } else if (c !== p) {
              p = du(Error(d(424)), r), r = sf(n, r, c, o, p);
              break e;
            } else
              for (Zr = ti(r.stateNode.containerInfo.firstChild), ya = r, un = !0, Aa = null, o = qh(r, null, c, o), r.child = o; o; )
                o.flags = o.flags & -3 | 4096, o = o.sibling;
          else {
            if (Sn(), c === p) {
              r = cr(n, r, o);
              break e;
            }
            Bn(n, r, c, o);
          }
          r = r.child;
        }
        return r;
      case 5:
        return it(r), n === null && Ac(r), c = r.type, p = r.pendingProps, y = n !== null ? n.memoizedProps : null, C = p.children, vs(c, p) ? C = null : y !== null && vs(c, y) && (r.flags |= 32), St(n, r), Bn(n, r, C, o), r.child;
      case 6:
        return n === null && Ac(r), null;
      case 13:
        return yp(n, r, o);
      case 4:
        return sp(r, r.stateNode.containerInfo), c = r.pendingProps, n === null ? r.child = lu(r, null, c, o) : Bn(n, r, c, o), r.child;
      case 11:
        return c = r.type, p = r.pendingProps, p = r.elementType === c ? p : ga(c, p), Oo(n, r, c, p, o);
      case 7:
        return Bn(n, r, r.pendingProps, o), r.child;
      case 8:
        return Bn(n, r, r.pendingProps.children, o), r.child;
      case 12:
        return Bn(n, r, r.pendingProps.children, o), r.child;
      case 10:
        e: {
          if (c = r.type._context, p = r.pendingProps, y = r.memoizedProps, C = p.value, jt(pi, c._currentValue), c._currentValue = C, y !== null)
            if (Oa(y.value, C)) {
              if (y.children === p.children && !Rn.current) {
                r = cr(n, r, o);
                break e;
              }
            } else
              for (y = r.child, y !== null && (y.return = r); y !== null; ) {
                var O = y.dependencies;
                if (O !== null) {
                  C = y.child;
                  for (var z = O.firstContext; z !== null; ) {
                    if (z.context === c) {
                      if (y.tag === 1) {
                        z = Fi(-1, o & -o), z.tag = 2;
                        var X = y.updateQueue;
                        if (X !== null) {
                          X = X.shared;
                          var ce = X.pending;
                          ce === null ? z.next = z : (z.next = ce.next, ce.next = z), X.pending = z;
                        }
                      }
                      y.lanes |= o, z = y.alternate, z !== null && (z.lanes |= o), nr(
                        y.return,
                        o,
                        r
                      ), O.lanes |= o;
                      break;
                    }
                    z = z.next;
                  }
                } else if (y.tag === 10)
                  C = y.type === r.type ? null : y.child;
                else if (y.tag === 18) {
                  if (C = y.return, C === null)
                    throw Error(d(341));
                  C.lanes |= o, O = C.alternate, O !== null && (O.lanes |= o), nr(C, o, r), C = y.sibling;
                } else
                  C = y.child;
                if (C !== null)
                  C.return = y;
                else
                  for (C = y; C !== null; ) {
                    if (C === r) {
                      C = null;
                      break;
                    }
                    if (y = C.sibling, y !== null) {
                      y.return = C.return, C = y;
                      break;
                    }
                    C = C.return;
                  }
                y = C;
              }
          Bn(n, r, p.children, o), r = r.child;
        }
        return r;
      case 9:
        return p = r.type, c = r.pendingProps.children, xe(r, o), p = Nn(p), c = c(p), r.flags |= 1, Bn(n, r, c, o), r.child;
      case 14:
        return c = r.type, p = ga(c, r.pendingProps), p = ga(c.type, p), uf(n, r, c, p, o);
      case 15:
        return ta(n, r, r.type, r.pendingProps, o);
      case 17:
        return c = r.type, p = r.pendingProps, p = r.elementType === c ? p : ga(c, p), br(n, r), r.tag = 1, vn(c) ? (n = !0, Nc(r)) : n = !1, xe(r, o), Bh(r, c, p), Fc(r, c, p, o), Zh(null, r, c, !0, n, o);
      case 19:
        return Ep(n, r, o);
      case 22:
        return yl(n, r, o);
    }
    throw Error(d(156, r.tag));
  };
  function Mp(n, r) {
    return pn(n, r);
  }
  function v0(n, r, o, c) {
    this.tag = n, this.key = o, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = r, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = c, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Fa(n, r, o, c) {
    return new v0(n, r, o, c);
  }
  function Lp(n) {
    return n = n.prototype, !(!n || !n.isReactComponent);
  }
  function h0(n) {
    if (typeof n == "function")
      return Lp(n) ? 1 : 0;
    if (n != null) {
      if (n = n.$$typeof, n === Ye)
        return 11;
      if (n === nt)
        return 14;
    }
    return 2;
  }
  function Lo(n, r) {
    var o = n.alternate;
    return o === null ? (o = Fa(n.tag, r, n.key, n.mode), o.elementType = n.elementType, o.type = n.type, o.stateNode = n.stateNode, o.alternate = n, n.alternate = o) : (o.pendingProps = r, o.type = n.type, o.flags = 0, o.subtreeFlags = 0, o.deletions = null), o.flags = n.flags & 14680064, o.childLanes = n.childLanes, o.lanes = n.lanes, o.child = n.child, o.memoizedProps = n.memoizedProps, o.memoizedState = n.memoizedState, o.updateQueue = n.updateQueue, r = n.dependencies, o.dependencies = r === null ? null : { lanes: r.lanes, firstContext: r.firstContext }, o.sibling = n.sibling, o.index = n.index, o.ref = n.ref, o;
  }
  function Ef(n, r, o, c, p, y) {
    var C = 2;
    if (c = n, typeof n == "function")
      Lp(n) && (C = 1);
    else if (typeof n == "string")
      C = 5;
    else
      e:
        switch (n) {
          case ie:
            return wl(o.children, p, y, r);
          case Ke:
            C = 8, p |= 8;
            break;
          case ot:
            return n = Fa(12, o, r, p | 2), n.elementType = ot, n.lanes = y, n;
          case Ee:
            return n = Fa(13, o, r, p), n.elementType = Ee, n.lanes = y, n;
          case ge:
            return n = Fa(19, o, r, p), n.elementType = ge, n.lanes = y, n;
          case Be:
            return Ps(o, p, y, r);
          default:
            if (typeof n == "object" && n !== null)
              switch (n.$$typeof) {
                case De:
                  C = 10;
                  break e;
                case _e:
                  C = 9;
                  break e;
                case Ye:
                  C = 11;
                  break e;
                case nt:
                  C = 14;
                  break e;
                case be:
                  C = 16, c = null;
                  break e;
              }
            throw Error(d(130, n == null ? n : typeof n, ""));
        }
    return r = Fa(C, o, r, p), r.elementType = n, r.type = c, r.lanes = y, r;
  }
  function wl(n, r, o, c) {
    return n = Fa(7, n, c, r), n.lanes = o, n;
  }
  function Ps(n, r, o, c) {
    return n = Fa(22, n, c, r), n.elementType = Be, n.lanes = o, n.stateNode = { isHidden: !1 }, n;
  }
  function Us(n, r, o) {
    return n = Fa(6, n, null, r), n.lanes = o, n;
  }
  function _l(n, r, o) {
    return r = Fa(4, n.children !== null ? n.children : [], n.key, r), r.lanes = o, r.stateNode = { containerInfo: n.containerInfo, pendingChildren: null, implementation: n.implementation }, r;
  }
  function m0(n, r, o, c, p) {
    this.tag = r, this.containerInfo = n, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Cd(0), this.expirationTimes = Cd(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Cd(0), this.identifierPrefix = c, this.onRecoverableError = p, this.mutableSourceEagerHydrationData = null;
  }
  function bf(n, r, o, c, p, y, C, O, z) {
    return n = new m0(n, r, o, O, z), r === 1 ? (r = 1, y === !0 && (r |= 8)) : r = 0, y = Fa(3, null, null, r), n.current = y, y.stateNode = n, y.memoizedState = { element: c, isDehydrated: o, cache: null, transitions: null, pendingSuspenseBoundaries: null }, op(y), n;
  }
  function pm(n, r, o) {
    var c = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: ve, key: c == null ? null : "" + c, children: n, containerInfo: r, implementation: o };
  }
  function Ap(n) {
    if (!n)
      return di;
    n = n._reactInternals;
    e: {
      if (Et(n) !== n || n.tag !== 1)
        throw Error(d(170));
      var r = n;
      do {
        switch (r.tag) {
          case 3:
            r = r.stateNode.context;
            break e;
          case 1:
            if (vn(r.type)) {
              r = r.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        r = r.return;
      } while (r !== null);
      throw Error(d(171));
    }
    if (n.tag === 1) {
      var o = n.type;
      if (vn(o))
        return ys(n, o, r);
    }
    return r;
  }
  function vm(n, r, o, c, p, y, C, O, z) {
    return n = bf(o, c, !0, n, p, y, C, O, z), n.context = Ap(null), o = n.current, c = Tr(), p = Un(o), y = Fi(c, p), y.callback = r ?? null, To(o, y, p), n.current.lanes = p, Zo(n, p, c), wr(n, c), n;
  }
  function js(n, r, o, c) {
    var p = r.current, y = Tr(), C = Un(p);
    return o = Ap(o), r.context === null ? r.context = o : r.pendingContext = o, r = Fi(y, C), r.payload = { element: n }, c = c === void 0 ? null : c, c !== null && (r.callback = c), n = To(p, r, C), n !== null && (Rr(n, p, C, y), jc(n, p, C)), C;
  }
  function Cf(n) {
    if (n = n.current, !n.child)
      return null;
    switch (n.child.tag) {
      case 5:
        return n.child.stateNode;
      default:
        return n.child.stateNode;
    }
  }
  function hm(n, r) {
    if (n = n.memoizedState, n !== null && n.dehydrated !== null) {
      var o = n.retryLane;
      n.retryLane = o !== 0 && o < r ? o : r;
    }
  }
  function zp(n, r) {
    hm(n, r), (n = n.alternate) && hm(n, r);
  }
  function mm() {
    return null;
  }
  var Pp = typeof reportError == "function" ? reportError : function(n) {
    console.error(n);
  };
  function xf(n) {
    this._internalRoot = n;
  }
  Wi.prototype.render = xf.prototype.render = function(n) {
    var r = this._internalRoot;
    if (r === null)
      throw Error(d(409));
    js(n, r, null, null);
  }, Wi.prototype.unmount = xf.prototype.unmount = function() {
    var n = this._internalRoot;
    if (n !== null) {
      this._internalRoot = null;
      var r = n.containerInfo;
      Mo(function() {
        js(null, n, null, null);
      }), r[Ui] = null;
    }
  };
  function Wi(n) {
    this._internalRoot = n;
  }
  Wi.prototype.unstable_scheduleHydration = function(n) {
    if (n) {
      var r = eh();
      n = { blockedOn: null, target: n, priority: r };
      for (var o = 0; o < Yt.length && r !== 0 && r < Yt[o].priority; o++)
        ;
      Yt.splice(o, 0, n), o === 0 && th(n);
    }
  };
  function Up(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11);
  }
  function Tf(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11 && (n.nodeType !== 8 || n.nodeValue !== " react-mount-point-unstable "));
  }
  function ym() {
  }
  function y0(n, r, o, c, p) {
    if (p) {
      if (typeof c == "function") {
        var y = c;
        c = function() {
          var X = Cf(C);
          y.call(X);
        };
      }
      var C = vm(r, c, n, 0, null, !1, !1, "", ym);
      return n._reactRootContainer = C, n[Ui] = C.current, ru(n.nodeType === 8 ? n.parentNode : n), Mo(), C;
    }
    for (; p = n.lastChild; )
      n.removeChild(p);
    if (typeof c == "function") {
      var O = c;
      c = function() {
        var X = Cf(z);
        O.call(X);
      };
    }
    var z = bf(n, 0, !1, null, null, !1, !1, "", ym);
    return n._reactRootContainer = z, n[Ui] = z.current, ru(n.nodeType === 8 ? n.parentNode : n), Mo(function() {
      js(r, z, o, c);
    }), z;
  }
  function Rf(n, r, o, c, p) {
    var y = o._reactRootContainer;
    if (y) {
      var C = y;
      if (typeof p == "function") {
        var O = p;
        p = function() {
          var z = Cf(C);
          O.call(z);
        };
      }
      js(r, C, n, p);
    } else
      C = y0(o, r, n, p, c);
    return Cf(C);
  }
  Jv = function(n) {
    switch (n.tag) {
      case 3:
        var r = n.stateNode;
        if (r.current.memoizedState.isDehydrated) {
          var o = Xo(r.pendingLanes);
          o !== 0 && (Ku(r, o | 1), wr(r, At()), !(_t & 6) && (bu = At() + 500, Qr()));
        }
        break;
      case 13:
        Mo(function() {
          var c = $i(n, 1);
          if (c !== null) {
            var p = Tr();
            Rr(c, n, 1, p);
          }
        }), zp(n, 1);
    }
  }, pc = function(n) {
    if (n.tag === 13) {
      var r = $i(n, 134217728);
      if (r !== null) {
        var o = Tr();
        Rr(r, n, 134217728, o);
      }
      zp(n, 134217728);
    }
  }, tn = function(n) {
    if (n.tag === 13) {
      var r = Un(n), o = $i(n, r);
      if (o !== null) {
        var c = Tr();
        Rr(o, n, r, c);
      }
      zp(n, r);
    }
  }, eh = function() {
    return Ht;
  }, Td = function(n, r) {
    var o = Ht;
    try {
      return Ht = n, r();
    } finally {
      Ht = o;
    }
  }, da = function(n, r, o) {
    switch (r) {
      case "input":
        if (On(n, o), r = o.name, o.type === "radio" && r != null) {
          for (o = n; o.parentNode; )
            o = o.parentNode;
          for (o = o.querySelectorAll("input[name=" + JSON.stringify("" + r) + '][type="radio"]'), r = 0; r < o.length; r++) {
            var c = o[r];
            if (c !== n && c.form === n.form) {
              var p = et(c);
              if (!p)
                throw Error(d(90));
              Z(c), On(c, p);
            }
          }
        }
        break;
      case "textarea":
        Or(n, o);
        break;
      case "select":
        r = o.value, r != null && Br(n, !!o.multiple, r, !1);
    }
  }, qu = Tu, uc = Mo;
  var g0 = { usingClientEntryPoint: !1, Events: [ms, au, et, qo, Bl, Tu] }, wu = { findFiberByHostInstance: Da, bundleType: 0, version: "18.2.0", rendererPackageName: "react-dom" }, S0 = { bundleType: wu.bundleType, version: wu.version, rendererPackageName: wu.rendererPackageName, rendererConfig: wu.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: J.ReactCurrentDispatcher, findHostInstanceByFiber: function(n) {
    return n = Zn(n), n === null ? null : n.stateNode;
  }, findFiberByHostInstance: wu.findFiberByHostInstance || mm, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.2.0-next-9e3b772b8-20220608" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var wf = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!wf.isDisabled && wf.supportsFiber)
      try {
        Qu = wf.inject(S0), Ka = wf;
      } catch {
      }
  }
  return Wa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = g0, Wa.createPortal = function(n, r) {
    var o = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Up(r))
      throw Error(d(200));
    return pm(n, r, null, o);
  }, Wa.createRoot = function(n, r) {
    if (!Up(n))
      throw Error(d(299));
    var o = !1, c = "", p = Pp;
    return r != null && (r.unstable_strictMode === !0 && (o = !0), r.identifierPrefix !== void 0 && (c = r.identifierPrefix), r.onRecoverableError !== void 0 && (p = r.onRecoverableError)), r = bf(n, 1, !1, null, null, o, !1, c, p), n[Ui] = r.current, ru(n.nodeType === 8 ? n.parentNode : n), new xf(r);
  }, Wa.findDOMNode = function(n) {
    if (n == null)
      return null;
    if (n.nodeType === 1)
      return n;
    var r = n._reactInternals;
    if (r === void 0)
      throw typeof n.render == "function" ? Error(d(188)) : (n = Object.keys(n).join(","), Error(d(268, n)));
    return n = Zn(r), n = n === null ? null : n.stateNode, n;
  }, Wa.flushSync = function(n) {
    return Mo(n);
  }, Wa.hydrate = function(n, r, o) {
    if (!Tf(r))
      throw Error(d(200));
    return Rf(null, n, r, !0, o);
  }, Wa.hydrateRoot = function(n, r, o) {
    if (!Up(n))
      throw Error(d(405));
    var c = o != null && o.hydratedSources || null, p = !1, y = "", C = Pp;
    if (o != null && (o.unstable_strictMode === !0 && (p = !0), o.identifierPrefix !== void 0 && (y = o.identifierPrefix), o.onRecoverableError !== void 0 && (C = o.onRecoverableError)), r = vm(r, null, n, 1, o ?? null, p, !1, y, C), n[Ui] = r.current, ru(n), c)
      for (n = 0; n < c.length; n++)
        o = c[n], p = o._getVersion, p = p(o._source), r.mutableSourceEagerHydrationData == null ? r.mutableSourceEagerHydrationData = [o, p] : r.mutableSourceEagerHydrationData.push(
          o,
          p
        );
    return new Wi(r);
  }, Wa.render = function(n, r, o) {
    if (!Tf(r))
      throw Error(d(200));
    return Rf(null, n, r, !1, o);
  }, Wa.unmountComponentAtNode = function(n) {
    if (!Tf(n))
      throw Error(d(40));
    return n._reactRootContainer ? (Mo(function() {
      Rf(null, null, n, !1, function() {
        n._reactRootContainer = null, n[Ui] = null;
      });
    }), !0) : !1;
  }, Wa.unstable_batchedUpdates = Tu, Wa.unstable_renderSubtreeIntoContainer = function(n, r, o, c) {
    if (!Tf(o))
      throw Error(d(200));
    if (n == null || n._reactInternals === void 0)
      throw Error(d(38));
    return Rf(n, r, o, !1, c);
  }, Wa.version = "18.2.0-next-9e3b772b8-20220608", Wa;
}
var Ga = {};
/**
 * @license React
 * react-dom.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var VR;
function aP() {
  return VR || (VR = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var l = ui, s = Mw(), d = l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, v = !1;
    function g(e) {
      v = e;
    }
    function S(e) {
      if (!v) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        R("warn", e, a);
      }
    }
    function m(e) {
      if (!v) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        R("error", e, a);
      }
    }
    function R(e, t, a) {
      {
        var i = d.ReactDebugCurrentFrame, u = i.getStackAddendum();
        u !== "" && (t += "%s", a = a.concat([u]));
        var f = a.map(function(h) {
          return String(h);
        });
        f.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, f);
      }
    }
    var w = 0, k = 1, M = 2, N = 3, A = 4, V = 5, F = 6, P = 7, H = 8, le = 9, de = 10, K = 11, J = 12, D = 13, ve = 14, ie = 15, Ke = 16, ot = 17, De = 18, _e = 19, Ye = 21, Ee = 22, ge = 23, nt = 24, be = 25, Be = !0, oe = !1, Pe = !1, I = !1, ue = !1, we = !0, Ve = !1, ke = !1, qe = !0, Ne = !0, Xe = !0, We = /* @__PURE__ */ new Set(), He = {}, rt = {};
    function Rt(e, t) {
      Z(e, t), Z(e + "Capture", t);
    }
    function Z(e, t) {
      He[e] && m("EventRegistry: More than one plugin attempted to publish the same registration name, `%s`.", e), He[e] = t;
      {
        var a = e.toLowerCase();
        rt[a] = e, e === "onDoubleClick" && (rt.ondblclick = e);
      }
      for (var i = 0; i < t.length; i++)
        We.add(t[i]);
    }
    var mt = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", Se = Object.prototype.hasOwnProperty;
    function Ft(e) {
      {
        var t = typeof Symbol == "function" && Symbol.toStringTag, a = t && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return a;
      }
    }
    function mn(e) {
      try {
        return On(e), !1;
      } catch {
        return !0;
      }
    }
    function On(e) {
      return "" + e;
    }
    function Ir(e, t) {
      if (mn(e))
        return m("The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before before using it here.", t, Ft(e)), On(e);
    }
    function ua(e) {
      if (mn(e))
        return m("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Ft(e)), On(e);
    }
    function sa(e, t) {
      if (mn(e))
        return m("The provided `%s` prop is an unsupported type %s. This value must be coerced to a string before before using it here.", t, Ft(e)), On(e);
    }
    function Br(e, t) {
      if (mn(e))
        return m("The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before before using it here.", t, Ft(e)), On(e);
    }
    function ca(e) {
      if (mn(e))
        return m("The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before before using it here.", Ft(e)), On(e);
    }
    function kr(e) {
      if (mn(e))
        return m("Form field values (value, checked, defaultValue, or defaultChecked props) must be strings, not %s. This value must be coerced to a string before before using it here.", Ft(e)), On(e);
    }
    var Or = 0, Vn = 1, fa = 2, yn = 3, Dr = 4, ct = 5, Yr = 6, Ce = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", Ze = Ce + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040", xt = new RegExp("^[" + Ce + "][" + Ze + "]*$"), Vt = {}, gn = {};
    function Xn(e) {
      return Se.call(gn, e) ? !0 : Se.call(Vt, e) ? !1 : xt.test(e) ? (gn[e] = !0, !0) : (Vt[e] = !0, m("Invalid attribute name: `%s`", e), !1);
    }
    function Dn(e, t, a) {
      return t !== null ? t.type === Or : a ? !1 : e.length > 2 && (e[0] === "o" || e[0] === "O") && (e[1] === "n" || e[1] === "N");
    }
    function Wr(e, t, a, i) {
      if (a !== null && a.type === Or)
        return !1;
      switch (typeof t) {
        case "function":
        case "symbol":
          return !0;
        case "boolean": {
          if (i)
            return !1;
          if (a !== null)
            return !a.acceptsBooleans;
          var u = e.toLowerCase().slice(0, 5);
          return u !== "data-" && u !== "aria-";
        }
        default:
          return !1;
      }
    }
    function an(e, t, a, i) {
      if (t === null || typeof t > "u" || Wr(e, t, a, i))
        return !0;
      if (i)
        return !1;
      if (a !== null)
        switch (a.type) {
          case yn:
            return !t;
          case Dr:
            return t === !1;
          case ct:
            return isNaN(t);
          case Yr:
            return isNaN(t) || t < 1;
        }
      return !1;
    }
    function da(e) {
      return on.hasOwnProperty(e) ? on[e] : null;
    }
    function en(e, t, a, i, u, f, h) {
      this.acceptsBooleans = t === fa || t === yn || t === Dr, this.attributeName = i, this.attributeNamespace = u, this.mustUseProperty = a, this.propertyName = e, this.type = t, this.sanitizeURL = f, this.removeEmptyString = h;
    }
    var on = {}, Il = [
      "children",
      "dangerouslySetInnerHTML",
      // TODO: This prevents the assignment of defaultValue to regular
      // elements (not just inputs). Now that ReactDOMInput assigns to the
      // defaultValue property -- do we need this?
      "defaultValue",
      "defaultChecked",
      "innerHTML",
      "suppressContentEditableWarning",
      "suppressHydrationWarning",
      "style"
    ];
    Il.forEach(function(e) {
      on[e] = new en(
        e,
        Or,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
      var t = e[0], a = e[1];
      on[t] = new en(
        t,
        Vn,
        !1,
        // mustUseProperty
        a,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
      on[e] = new en(
        e,
        fa,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
      on[e] = new en(
        e,
        fa,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "allowFullScreen",
      "async",
      // Note: there is a special case that prevents it from being written to the DOM
      // on the client side because the browsers are inconsistent. Instead we call focus().
      "autoFocus",
      "autoPlay",
      "controls",
      "default",
      "defer",
      "disabled",
      "disablePictureInPicture",
      "disableRemotePlayback",
      "formNoValidate",
      "hidden",
      "loop",
      "noModule",
      "noValidate",
      "open",
      "playsInline",
      "readOnly",
      "required",
      "reversed",
      "scoped",
      "seamless",
      // Microdata
      "itemScope"
    ].forEach(function(e) {
      on[e] = new en(
        e,
        yn,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "checked",
      // Note: `option.selected` is not updated if `select.multiple` is
      // disabled with `removeAttribute`. We have special logic for handling this.
      "multiple",
      "muted",
      "selected"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      on[e] = new en(
        e,
        yn,
        !0,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "capture",
      "download"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      on[e] = new en(
        e,
        Dr,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "cols",
      "rows",
      "size",
      "span"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      on[e] = new en(
        e,
        Yr,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["rowSpan", "start"].forEach(function(e) {
      on[e] = new en(
        e,
        ct,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    });
    var qo = /[\-\:]([a-z])/g, Bl = function(e) {
      return e[1].toUpperCase();
    };
    [
      "accent-height",
      "alignment-baseline",
      "arabic-form",
      "baseline-shift",
      "cap-height",
      "clip-path",
      "clip-rule",
      "color-interpolation",
      "color-interpolation-filters",
      "color-profile",
      "color-rendering",
      "dominant-baseline",
      "enable-background",
      "fill-opacity",
      "fill-rule",
      "flood-color",
      "flood-opacity",
      "font-family",
      "font-size",
      "font-size-adjust",
      "font-stretch",
      "font-style",
      "font-variant",
      "font-weight",
      "glyph-name",
      "glyph-orientation-horizontal",
      "glyph-orientation-vertical",
      "horiz-adv-x",
      "horiz-origin-x",
      "image-rendering",
      "letter-spacing",
      "lighting-color",
      "marker-end",
      "marker-mid",
      "marker-start",
      "overline-position",
      "overline-thickness",
      "paint-order",
      "panose-1",
      "pointer-events",
      "rendering-intent",
      "shape-rendering",
      "stop-color",
      "stop-opacity",
      "strikethrough-position",
      "strikethrough-thickness",
      "stroke-dasharray",
      "stroke-dashoffset",
      "stroke-linecap",
      "stroke-linejoin",
      "stroke-miterlimit",
      "stroke-opacity",
      "stroke-width",
      "text-anchor",
      "text-decoration",
      "text-rendering",
      "underline-position",
      "underline-thickness",
      "unicode-bidi",
      "unicode-range",
      "units-per-em",
      "v-alphabetic",
      "v-hanging",
      "v-ideographic",
      "v-mathematical",
      "vector-effect",
      "vert-adv-y",
      "vert-origin-x",
      "vert-origin-y",
      "word-spacing",
      "writing-mode",
      "xmlns:xlink",
      "x-height"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace(qo, Bl);
      on[t] = new en(
        t,
        Vn,
        !1,
        // mustUseProperty
        e,
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "xlink:actuate",
      "xlink:arcrole",
      "xlink:role",
      "xlink:show",
      "xlink:title",
      "xlink:type"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace(qo, Bl);
      on[t] = new en(
        t,
        Vn,
        !1,
        // mustUseProperty
        e,
        "http://www.w3.org/1999/xlink",
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "xml:base",
      "xml:lang",
      "xml:space"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace(qo, Bl);
      on[t] = new en(
        t,
        Vn,
        !1,
        // mustUseProperty
        e,
        "http://www.w3.org/XML/1998/namespace",
        !1,
        // sanitizeURL
        !1
      );
    }), ["tabIndex", "crossOrigin"].forEach(function(e) {
      on[e] = new en(
        e,
        Vn,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    });
    var qu = "xlinkHref";
    on[qu] = new en(
      "xlinkHref",
      Vn,
      !1,
      // mustUseProperty
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      // sanitizeURL
      !1
    ), ["src", "href", "action", "formAction"].forEach(function(e) {
      on[e] = new en(
        e,
        Vn,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !0,
        // sanitizeURL
        !0
      );
    });
    var uc = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i, Qo = !1;
    function Yl(e) {
      !Qo && uc.test(e) && (Qo = !0, m("A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed %s.", JSON.stringify(e)));
    }
    function Ko(e, t, a, i) {
      if (i.mustUseProperty) {
        var u = i.propertyName;
        return e[u];
      } else {
        Ir(a, t), i.sanitizeURL && Yl("" + a);
        var f = i.attributeName, h = null;
        if (i.type === Dr) {
          if (e.hasAttribute(f)) {
            var E = e.getAttribute(f);
            return E === "" ? !0 : an(t, a, i, !1) ? E : E === "" + a ? a : E;
          }
        } else if (e.hasAttribute(f)) {
          if (an(t, a, i, !1))
            return e.getAttribute(f);
          if (i.type === yn)
            return a;
          h = e.getAttribute(f);
        }
        return an(t, a, i, !1) ? h === null ? a : h : h === "" + a ? a : h;
      }
    }
    function Wl(e, t, a, i) {
      {
        if (!Xn(t))
          return;
        if (!e.hasAttribute(t))
          return a === void 0 ? void 0 : null;
        var u = e.getAttribute(t);
        return Ir(a, t), u === "" + a ? a : u;
      }
    }
    function ci(e, t, a, i) {
      var u = da(t);
      if (!Dn(t, u, i)) {
        if (an(t, a, u, i) && (a = null), i || u === null) {
          if (Xn(t)) {
            var f = t;
            a === null ? e.removeAttribute(f) : (Ir(a, t), e.setAttribute(f, "" + a));
          }
          return;
        }
        var h = u.mustUseProperty;
        if (h) {
          var E = u.propertyName;
          if (a === null) {
            var b = u.type;
            e[E] = b === yn ? !1 : "";
          } else
            e[E] = a;
          return;
        }
        var T = u.attributeName, _ = u.attributeNamespace;
        if (a === null)
          e.removeAttribute(T);
        else {
          var $ = u.type, U;
          $ === yn || $ === Dr && a === !0 ? U = "" : (Ir(a, T), U = "" + a, u.sanitizeURL && Yl(U.toString())), _ ? e.setAttributeNS(_, T, U) : e.setAttribute(T, U);
        }
      }
    }
    var lo = Symbol.for("react.element"), pa = Symbol.for("react.portal"), Qa = Symbol.for("react.fragment"), uo = Symbol.for("react.strict_mode"), L = Symbol.for("react.profiler"), pe = Symbol.for("react.provider"), Re = Symbol.for("react.context"), at = Symbol.for("react.forward_ref"), Et = Symbol.for("react.suspense"), Mt = Symbol.for("react.suspense_list"), bt = Symbol.for("react.memo"), lt = Symbol.for("react.lazy"), Zn = Symbol.for("react.scope"), dn = Symbol.for("react.debug_trace_mode"), pn = Symbol.for("react.offscreen"), Nr = Symbol.for("react.legacy_hidden"), so = Symbol.for("react.cache"), sc = Symbol.for("react.tracing_marker"), At = Symbol.iterator, Ag = "@@iterator";
    function Di(e) {
      if (e === null || typeof e != "object")
        return null;
      var t = At && e[At] || e[Ag];
      return typeof t == "function" ? t : null;
    }
    var wt = Object.assign, co = 0, Qv, Sd, Qu, Ka, Kv, wa, Xv;
    function Zv() {
    }
    Zv.__reactDisabledLog = !0;
    function zg() {
      {
        if (co === 0) {
          Qv = console.log, Sd = console.info, Qu = console.warn, Ka = console.error, Kv = console.group, wa = console.groupCollapsed, Xv = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: Zv,
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
        co++;
      }
    }
    function cc() {
      {
        if (co--, co === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: wt({}, e, {
              value: Qv
            }),
            info: wt({}, e, {
              value: Sd
            }),
            warn: wt({}, e, {
              value: Qu
            }),
            error: wt({}, e, {
              value: Ka
            }),
            group: wt({}, e, {
              value: Kv
            }),
            groupCollapsed: wt({}, e, {
              value: wa
            }),
            groupEnd: wt({}, e, {
              value: Xv
            })
          });
        }
        co < 0 && m("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Gl = d.ReactCurrentDispatcher, Xo;
    function Xa(e, t, a) {
      {
        if (Xo === void 0)
          try {
            throw Error();
          } catch (u) {
            var i = u.stack.trim().match(/\n( *(at )?)/);
            Xo = i && i[1] || "";
          }
        return `
` + Xo + e;
      }
    }
    var Ed = !1, fc;
    {
      var bd = typeof WeakMap == "function" ? WeakMap : Map;
      fc = new bd();
    }
    function dc(e, t) {
      if (!e || Ed)
        return "";
      {
        var a = fc.get(e);
        if (a !== void 0)
          return a;
      }
      var i;
      Ed = !0;
      var u = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var f;
      f = Gl.current, Gl.current = null, zg();
      try {
        if (t) {
          var h = function() {
            throw Error();
          };
          if (Object.defineProperty(h.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(h, []);
            } catch (Q) {
              i = Q;
            }
            Reflect.construct(e, [], h);
          } else {
            try {
              h.call();
            } catch (Q) {
              i = Q;
            }
            e.call(h.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Q) {
            i = Q;
          }
          e();
        }
      } catch (Q) {
        if (Q && i && typeof Q.stack == "string") {
          for (var E = Q.stack.split(`
`), b = i.stack.split(`
`), T = E.length - 1, _ = b.length - 1; T >= 1 && _ >= 0 && E[T] !== b[_]; )
            _--;
          for (; T >= 1 && _ >= 0; T--, _--)
            if (E[T] !== b[_]) {
              if (T !== 1 || _ !== 1)
                do
                  if (T--, _--, _ < 0 || E[T] !== b[_]) {
                    var $ = `
` + E[T].replace(" at new ", " at ");
                    return e.displayName && $.includes("<anonymous>") && ($ = $.replace("<anonymous>", e.displayName)), typeof e == "function" && fc.set(e, $), $;
                  }
                while (T >= 1 && _ >= 0);
              break;
            }
        }
      } finally {
        Ed = !1, Gl.current = f, cc(), Error.prepareStackTrace = u;
      }
      var U = e ? e.displayName || e.name : "", q = U ? Xa(U) : "";
      return typeof e == "function" && fc.set(e, q), q;
    }
    function Cd(e, t, a) {
      return dc(e, !0);
    }
    function Zo(e, t, a) {
      return dc(e, !1);
    }
    function Pg(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function Ku(e, t, a) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return dc(e, Pg(e));
      if (typeof e == "string")
        return Xa(e);
      switch (e) {
        case Et:
          return Xa("Suspense");
        case Mt:
          return Xa("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case at:
            return Zo(e.render);
          case bt:
            return Ku(e.type, t, a);
          case lt: {
            var i = e, u = i._payload, f = i._init;
            try {
              return Ku(f(u), t, a);
            } catch {
            }
          }
        }
      return "";
    }
    function Ht(e) {
      switch (e._debugOwner && e._debugOwner.type, e._debugSource, e.tag) {
        case V:
          return Xa(e.type);
        case Ke:
          return Xa("Lazy");
        case D:
          return Xa("Suspense");
        case _e:
          return Xa("SuspenseList");
        case w:
        case M:
        case ie:
          return Zo(e.type);
        case K:
          return Zo(e.type.render);
        case k:
          return Cd(e.type);
        default:
          return "";
      }
    }
    function xd(e) {
      try {
        var t = "", a = e;
        do
          t += Ht(a), a = a.return;
        while (a);
        return t;
      } catch (i) {
        return `
Error generating stack: ` + i.message + `
` + i.stack;
      }
    }
    function Jv(e, t, a) {
      var i = e.displayName;
      if (i)
        return i;
      var u = t.displayName || t.name || "";
      return u !== "" ? a + "(" + u + ")" : a;
    }
    function pc(e) {
      return e.displayName || "Context";
    }
    function tn(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && m("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case Qa:
          return "Fragment";
        case pa:
          return "Portal";
        case L:
          return "Profiler";
        case uo:
          return "StrictMode";
        case Et:
          return "Suspense";
        case Mt:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case Re:
            var t = e;
            return pc(t) + ".Consumer";
          case pe:
            var a = e;
            return pc(a._context) + ".Provider";
          case at:
            return Jv(e, e.render, "ForwardRef");
          case bt:
            var i = e.displayName || null;
            return i !== null ? i : tn(e.type) || "Memo";
          case lt: {
            var u = e, f = u._payload, h = u._init;
            try {
              return tn(h(f));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    function eh(e, t, a) {
      var i = t.displayName || t.name || "";
      return e.displayName || (i !== "" ? a + "(" + i + ")" : a);
    }
    function Td(e) {
      return e.displayName || "Context";
    }
    function yt(e) {
      var t = e.tag, a = e.type;
      switch (t) {
        case nt:
          return "Cache";
        case le:
          var i = a;
          return Td(i) + ".Consumer";
        case de:
          var u = a;
          return Td(u._context) + ".Provider";
        case De:
          return "DehydratedFragment";
        case K:
          return eh(a, a.render, "ForwardRef");
        case P:
          return "Fragment";
        case V:
          return a;
        case A:
          return "Portal";
        case N:
          return "Root";
        case F:
          return "Text";
        case Ke:
          return tn(a);
        case H:
          return a === uo ? "StrictMode" : "Mode";
        case Ee:
          return "Offscreen";
        case J:
          return "Profiler";
        case Ye:
          return "Scope";
        case D:
          return "Suspense";
        case _e:
          return "SuspenseList";
        case be:
          return "TracingMarker";
        case k:
        case w:
        case ot:
        case M:
        case ve:
        case ie:
          if (typeof a == "function")
            return a.displayName || a.name || null;
          if (typeof a == "string")
            return a;
          break;
      }
      return null;
    }
    var Xu = d.ReactDebugCurrentFrame, An = null, _a = !1;
    function ka() {
      {
        if (An === null)
          return null;
        var e = An._debugOwner;
        if (e !== null && typeof e < "u")
          return yt(e);
      }
      return null;
    }
    function Zu() {
      return An === null ? "" : xd(An);
    }
    function Hn() {
      Xu.getCurrentStack = null, An = null, _a = !1;
    }
    function Yt(e) {
      Xu.getCurrentStack = e === null ? null : Zu, An = e, _a = !1;
    }
    function Ug() {
      return An;
    }
    function Za(e) {
      _a = e;
    }
    function Sr(e) {
      return "" + e;
    }
    function fo(e) {
      switch (typeof e) {
        case "boolean":
        case "number":
        case "string":
        case "undefined":
          return e;
        case "object":
          return kr(e), e;
        default:
          return "";
      }
    }
    var th = {
      button: !0,
      checkbox: !0,
      image: !0,
      hidden: !0,
      radio: !0,
      reset: !0,
      submit: !0
    };
    function ql(e, t) {
      th[t.type] || t.onChange || t.onInput || t.readOnly || t.disabled || t.value == null || m("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."), t.onChange || t.readOnly || t.disabled || t.checked == null || m("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.");
    }
    function Rd(e) {
      var t = e.type, a = e.nodeName;
      return a && a.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
    }
    function nh(e) {
      return e._valueTracker;
    }
    function Ju(e) {
      e._valueTracker = null;
    }
    function es(e) {
      var t = "";
      return e && (Rd(e) ? t = e.checked ? "true" : "false" : t = e.value), t;
    }
    function Ql(e) {
      var t = Rd(e) ? "checked" : "value", a = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
      kr(e[t]);
      var i = "" + e[t];
      if (!(e.hasOwnProperty(t) || typeof a > "u" || typeof a.get != "function" || typeof a.set != "function")) {
        var u = a.get, f = a.set;
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function() {
            return u.call(this);
          },
          set: function(E) {
            kr(E), i = "" + E, f.call(this, E);
          }
        }), Object.defineProperty(e, t, {
          enumerable: a.enumerable
        });
        var h = {
          getValue: function() {
            return i;
          },
          setValue: function(E) {
            kr(E), i = "" + E;
          },
          stopTracking: function() {
            Ju(e), delete e[t];
          }
        };
        return h;
      }
    }
    function Jo(e) {
      nh(e) || (e._valueTracker = Ql(e));
    }
    function rh(e) {
      if (!e)
        return !1;
      var t = nh(e);
      if (!t)
        return !0;
      var a = t.getValue(), i = es(e);
      return i !== a ? (t.setValue(i), !0) : !1;
    }
    function vc(e) {
      if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u")
        return null;
      try {
        return e.activeElement || e.body;
      } catch {
        return e.body;
      }
    }
    var hc = !1, ts = !1, mc = !1, wd = !1;
    function Ni(e) {
      var t = e.type === "checkbox" || e.type === "radio";
      return t ? e.checked != null : e.value != null;
    }
    function ns(e, t) {
      var a = e, i = t.checked, u = wt({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: i ?? a._wrapperState.initialChecked
      });
      return u;
    }
    function rs(e, t) {
      ql("input", t), t.checked !== void 0 && t.defaultChecked !== void 0 && !ts && (m("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", ka() || "A component", t.type), ts = !0), t.value !== void 0 && t.defaultValue !== void 0 && !hc && (m("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", ka() || "A component", t.type), hc = !0);
      var a = e, i = t.defaultValue == null ? "" : t.defaultValue;
      a._wrapperState = {
        initialChecked: t.checked != null ? t.checked : t.defaultChecked,
        initialValue: fo(t.value != null ? t.value : i),
        controlled: Ni(t)
      };
    }
    function _d(e, t) {
      var a = e, i = t.checked;
      i != null && ci(a, "checked", i, !1);
    }
    function Kl(e, t) {
      var a = e;
      {
        var i = Ni(t);
        !a._wrapperState.controlled && i && !wd && (m("A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), wd = !0), a._wrapperState.controlled && !i && !mc && (m("A component is changing a controlled input to be uncontrolled. This is likely caused by the value changing from a defined to undefined, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), mc = !0);
      }
      _d(e, t);
      var u = fo(t.value), f = t.type;
      if (u != null)
        f === "number" ? (u === 0 && a.value === "" || // We explicitly want to coerce to number here if possible.
        // eslint-disable-next-line
        a.value != u) && (a.value = Sr(u)) : a.value !== Sr(u) && (a.value = Sr(u));
      else if (f === "submit" || f === "reset") {
        a.removeAttribute("value");
        return;
      }
      t.hasOwnProperty("value") ? po(a, t.type, u) : t.hasOwnProperty("defaultValue") && po(a, t.type, fo(t.defaultValue)), t.checked == null && t.defaultChecked != null && (a.defaultChecked = !!t.defaultChecked);
    }
    function as(e, t, a) {
      var i = e;
      if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var u = t.type, f = u === "submit" || u === "reset";
        if (f && (t.value === void 0 || t.value === null))
          return;
        var h = Sr(i._wrapperState.initialValue);
        a || h !== i.value && (i.value = h), i.defaultValue = h;
      }
      var E = i.name;
      E !== "" && (i.name = ""), i.defaultChecked = !i.defaultChecked, i.defaultChecked = !!i._wrapperState.initialChecked, E !== "" && (i.name = E);
    }
    function ah(e, t) {
      var a = e;
      Kl(a, t), va(a, t);
    }
    function va(e, t) {
      var a = t.name;
      if (t.type === "radio" && a != null) {
        for (var i = e; i.parentNode; )
          i = i.parentNode;
        Ir(a, "name");
        for (var u = i.querySelectorAll("input[name=" + JSON.stringify("" + a) + '][type="radio"]'), f = 0; f < u.length; f++) {
          var h = u[f];
          if (!(h === e || h.form !== e.form)) {
            var E = Am(h);
            if (!E)
              throw new Error("ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported.");
            rh(h), Kl(h, E);
          }
        }
      }
    }
    function po(e, t, a) {
      // Focused number inputs synchronize on blur. See ChangeEventPlugin.js
      (t !== "number" || vc(e.ownerDocument) !== e) && (a == null ? e.defaultValue = Sr(e._wrapperState.initialValue) : e.defaultValue !== Sr(a) && (e.defaultValue = Sr(a)));
    }
    var yc = !1, Xl = !1, ih = !1;
    function gc(e, t) {
      t.value == null && (typeof t.children == "object" && t.children !== null ? l.Children.forEach(t.children, function(a) {
        a != null && (typeof a == "string" || typeof a == "number" || Xl || (Xl = !0, m("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>.")));
      }) : t.dangerouslySetInnerHTML != null && (ih || (ih = !0, m("Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected.")))), t.selected != null && !yc && (m("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."), yc = !0);
    }
    function kd(e, t) {
      t.value != null && e.setAttribute("value", Sr(fo(t.value)));
    }
    var is = Array.isArray;
    function Jn(e) {
      return is(e);
    }
    var Sc;
    Sc = !1;
    function oh() {
      var e = ka();
      return e ? `

Check the render method of \`` + e + "`." : "";
    }
    var lh = ["value", "defaultValue"];
    function jg(e) {
      {
        ql("select", e);
        for (var t = 0; t < lh.length; t++) {
          var a = lh[t];
          if (e[a] != null) {
            var i = Jn(e[a]);
            e.multiple && !i ? m("The `%s` prop supplied to <select> must be an array if `multiple` is true.%s", a, oh()) : !e.multiple && i && m("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.%s", a, oh());
          }
        }
      }
    }
    function vo(e, t, a, i) {
      var u = e.options;
      if (t) {
        for (var f = a, h = {}, E = 0; E < f.length; E++)
          h["$" + f[E]] = !0;
        for (var b = 0; b < u.length; b++) {
          var T = h.hasOwnProperty("$" + u[b].value);
          u[b].selected !== T && (u[b].selected = T), T && i && (u[b].defaultSelected = !0);
        }
      } else {
        for (var _ = Sr(fo(a)), $ = null, U = 0; U < u.length; U++) {
          if (u[U].value === _) {
            u[U].selected = !0, i && (u[U].defaultSelected = !0);
            return;
          }
          $ === null && !u[U].disabled && ($ = u[U]);
        }
        $ !== null && ($.selected = !0);
      }
    }
    function Od(e, t) {
      return wt({}, t, {
        value: void 0
      });
    }
    function uh(e, t) {
      var a = e;
      jg(t), a._wrapperState = {
        wasMultiple: !!t.multiple
      }, t.value !== void 0 && t.defaultValue !== void 0 && !Sc && (m("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://reactjs.org/link/controlled-components"), Sc = !0);
    }
    function $g(e, t) {
      var a = e;
      a.multiple = !!t.multiple;
      var i = t.value;
      i != null ? vo(a, !!t.multiple, i, !1) : t.defaultValue != null && vo(a, !!t.multiple, t.defaultValue, !0);
    }
    function Fg(e, t) {
      var a = e, i = a._wrapperState.wasMultiple;
      a._wrapperState.wasMultiple = !!t.multiple;
      var u = t.value;
      u != null ? vo(a, !!t.multiple, u, !1) : i !== !!t.multiple && (t.defaultValue != null ? vo(a, !!t.multiple, t.defaultValue, !0) : vo(a, !!t.multiple, t.multiple ? [] : "", !1));
    }
    function Vg(e, t) {
      var a = e, i = t.value;
      i != null && vo(a, !!t.multiple, i, !1);
    }
    var Dd = !1;
    function Nd(e, t) {
      var a = e;
      if (t.dangerouslySetInnerHTML != null)
        throw new Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");
      var i = wt({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: Sr(a._wrapperState.initialValue)
      });
      return i;
    }
    function sh(e, t) {
      var a = e;
      ql("textarea", t), t.value !== void 0 && t.defaultValue !== void 0 && !Dd && (m("%s contains a textarea with both value and defaultValue props. Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components", ka() || "A component"), Dd = !0);
      var i = t.value;
      if (i == null) {
        var u = t.children, f = t.defaultValue;
        if (u != null) {
          m("Use the `defaultValue` or `value` props instead of setting children on <textarea>.");
          {
            if (f != null)
              throw new Error("If you supply `defaultValue` on a <textarea>, do not pass children.");
            if (Jn(u)) {
              if (u.length > 1)
                throw new Error("<textarea> can only have at most one child.");
              u = u[0];
            }
            f = u;
          }
        }
        f == null && (f = ""), i = f;
      }
      a._wrapperState = {
        initialValue: fo(i)
      };
    }
    function ch(e, t) {
      var a = e, i = fo(t.value), u = fo(t.defaultValue);
      if (i != null) {
        var f = Sr(i);
        f !== a.value && (a.value = f), t.defaultValue == null && a.defaultValue !== f && (a.defaultValue = f);
      }
      u != null && (a.defaultValue = Sr(u));
    }
    function fh(e, t) {
      var a = e, i = a.textContent;
      i === a._wrapperState.initialValue && i !== "" && i !== null && (a.value = i);
    }
    function Md(e, t) {
      ch(e, t);
    }
    var Mi = "http://www.w3.org/1999/xhtml", Hg = "http://www.w3.org/1998/Math/MathML", Ld = "http://www.w3.org/2000/svg";
    function Ec(e) {
      switch (e) {
        case "svg":
          return Ld;
        case "math":
          return Hg;
        default:
          return Mi;
      }
    }
    function Ad(e, t) {
      return e == null || e === Mi ? Ec(t) : e === Ld && t === "foreignObject" ? Mi : e;
    }
    var Ig = function(e) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, a, i, u) {
        MSApp.execUnsafeLocalFunction(function() {
          return e(t, a, i, u);
        });
      } : e;
    }, bc, dh = Ig(function(e, t) {
      if (e.namespaceURI === Ld && !("innerHTML" in e)) {
        bc = bc || document.createElement("div"), bc.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>";
        for (var a = bc.firstChild; e.firstChild; )
          e.removeChild(e.firstChild);
        for (; a.firstChild; )
          e.appendChild(a.firstChild);
        return;
      }
      e.innerHTML = t;
    }), Gr = 1, Li = 3, zn = 8, Ja = 9, el = 11, Cc = function(e, t) {
      if (t) {
        var a = e.firstChild;
        if (a && a === e.lastChild && a.nodeType === Li) {
          a.nodeValue = t;
          return;
        }
      }
      e.textContent = t;
    }, ph = {
      animation: ["animationDelay", "animationDirection", "animationDuration", "animationFillMode", "animationIterationCount", "animationName", "animationPlayState", "animationTimingFunction"],
      background: ["backgroundAttachment", "backgroundClip", "backgroundColor", "backgroundImage", "backgroundOrigin", "backgroundPositionX", "backgroundPositionY", "backgroundRepeat", "backgroundSize"],
      backgroundPosition: ["backgroundPositionX", "backgroundPositionY"],
      border: ["borderBottomColor", "borderBottomStyle", "borderBottomWidth", "borderImageOutset", "borderImageRepeat", "borderImageSlice", "borderImageSource", "borderImageWidth", "borderLeftColor", "borderLeftStyle", "borderLeftWidth", "borderRightColor", "borderRightStyle", "borderRightWidth", "borderTopColor", "borderTopStyle", "borderTopWidth"],
      borderBlockEnd: ["borderBlockEndColor", "borderBlockEndStyle", "borderBlockEndWidth"],
      borderBlockStart: ["borderBlockStartColor", "borderBlockStartStyle", "borderBlockStartWidth"],
      borderBottom: ["borderBottomColor", "borderBottomStyle", "borderBottomWidth"],
      borderColor: ["borderBottomColor", "borderLeftColor", "borderRightColor", "borderTopColor"],
      borderImage: ["borderImageOutset", "borderImageRepeat", "borderImageSlice", "borderImageSource", "borderImageWidth"],
      borderInlineEnd: ["borderInlineEndColor", "borderInlineEndStyle", "borderInlineEndWidth"],
      borderInlineStart: ["borderInlineStartColor", "borderInlineStartStyle", "borderInlineStartWidth"],
      borderLeft: ["borderLeftColor", "borderLeftStyle", "borderLeftWidth"],
      borderRadius: ["borderBottomLeftRadius", "borderBottomRightRadius", "borderTopLeftRadius", "borderTopRightRadius"],
      borderRight: ["borderRightColor", "borderRightStyle", "borderRightWidth"],
      borderStyle: ["borderBottomStyle", "borderLeftStyle", "borderRightStyle", "borderTopStyle"],
      borderTop: ["borderTopColor", "borderTopStyle", "borderTopWidth"],
      borderWidth: ["borderBottomWidth", "borderLeftWidth", "borderRightWidth", "borderTopWidth"],
      columnRule: ["columnRuleColor", "columnRuleStyle", "columnRuleWidth"],
      columns: ["columnCount", "columnWidth"],
      flex: ["flexBasis", "flexGrow", "flexShrink"],
      flexFlow: ["flexDirection", "flexWrap"],
      font: ["fontFamily", "fontFeatureSettings", "fontKerning", "fontLanguageOverride", "fontSize", "fontSizeAdjust", "fontStretch", "fontStyle", "fontVariant", "fontVariantAlternates", "fontVariantCaps", "fontVariantEastAsian", "fontVariantLigatures", "fontVariantNumeric", "fontVariantPosition", "fontWeight", "lineHeight"],
      fontVariant: ["fontVariantAlternates", "fontVariantCaps", "fontVariantEastAsian", "fontVariantLigatures", "fontVariantNumeric", "fontVariantPosition"],
      gap: ["columnGap", "rowGap"],
      grid: ["gridAutoColumns", "gridAutoFlow", "gridAutoRows", "gridTemplateAreas", "gridTemplateColumns", "gridTemplateRows"],
      gridArea: ["gridColumnEnd", "gridColumnStart", "gridRowEnd", "gridRowStart"],
      gridColumn: ["gridColumnEnd", "gridColumnStart"],
      gridColumnGap: ["columnGap"],
      gridGap: ["columnGap", "rowGap"],
      gridRow: ["gridRowEnd", "gridRowStart"],
      gridRowGap: ["rowGap"],
      gridTemplate: ["gridTemplateAreas", "gridTemplateColumns", "gridTemplateRows"],
      listStyle: ["listStyleImage", "listStylePosition", "listStyleType"],
      margin: ["marginBottom", "marginLeft", "marginRight", "marginTop"],
      marker: ["markerEnd", "markerMid", "markerStart"],
      mask: ["maskClip", "maskComposite", "maskImage", "maskMode", "maskOrigin", "maskPositionX", "maskPositionY", "maskRepeat", "maskSize"],
      maskPosition: ["maskPositionX", "maskPositionY"],
      outline: ["outlineColor", "outlineStyle", "outlineWidth"],
      overflow: ["overflowX", "overflowY"],
      padding: ["paddingBottom", "paddingLeft", "paddingRight", "paddingTop"],
      placeContent: ["alignContent", "justifyContent"],
      placeItems: ["alignItems", "justifyItems"],
      placeSelf: ["alignSelf", "justifySelf"],
      textDecoration: ["textDecorationColor", "textDecorationLine", "textDecorationStyle"],
      textEmphasis: ["textEmphasisColor", "textEmphasisStyle"],
      transition: ["transitionDelay", "transitionDuration", "transitionProperty", "transitionTimingFunction"],
      wordWrap: ["overflowWrap"]
    }, Zl = {
      animationIterationCount: !0,
      aspectRatio: !0,
      borderImageOutset: !0,
      borderImageSlice: !0,
      borderImageWidth: !0,
      boxFlex: !0,
      boxFlexGroup: !0,
      boxOrdinalGroup: !0,
      columnCount: !0,
      columns: !0,
      flex: !0,
      flexGrow: !0,
      flexPositive: !0,
      flexShrink: !0,
      flexNegative: !0,
      flexOrder: !0,
      gridArea: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowSpan: !0,
      gridRowStart: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnSpan: !0,
      gridColumnStart: !0,
      fontWeight: !0,
      lineClamp: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      tabSize: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
      // SVG-related properties
      fillOpacity: !0,
      floodOpacity: !0,
      stopOpacity: !0,
      strokeDasharray: !0,
      strokeDashoffset: !0,
      strokeMiterlimit: !0,
      strokeOpacity: !0,
      strokeWidth: !0
    };
    function vh(e, t) {
      return e + t.charAt(0).toUpperCase() + t.substring(1);
    }
    var hh = ["Webkit", "ms", "Moz", "O"];
    Object.keys(Zl).forEach(function(e) {
      hh.forEach(function(t) {
        Zl[vh(t, e)] = Zl[e];
      });
    });
    function xc(e, t, a) {
      var i = t == null || typeof t == "boolean" || t === "";
      return i ? "" : !a && typeof t == "number" && t !== 0 && !(Zl.hasOwnProperty(e) && Zl[e]) ? t + "px" : (Br(t, e), ("" + t).trim());
    }
    var Jl = /([A-Z])/g, Bg = /^ms-/;
    function Yg(e) {
      return e.replace(Jl, "-$1").toLowerCase().replace(Bg, "-ms-");
    }
    var mh = function() {
    };
    {
      var yh = /^(?:webkit|moz|o)[A-Z]/, gh = /^-ms-/, os = /-(.)/g, eu = /;\s*$/, tu = {}, nu = {}, Sh = !1, zd = !1, Pd = function(e) {
        return e.replace(os, function(t, a) {
          return a.toUpperCase();
        });
      }, Ud = function(e) {
        tu.hasOwnProperty(e) && tu[e] || (tu[e] = !0, m(
          "Unsupported style property %s. Did you mean %s?",
          e,
          // As Andi Smith suggests
          // (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
          // is converted to lowercase `ms`.
          Pd(e.replace(gh, "ms-"))
        ));
      }, Eh = function(e) {
        tu.hasOwnProperty(e) && tu[e] || (tu[e] = !0, m("Unsupported vendor-prefixed style property %s. Did you mean %s?", e, e.charAt(0).toUpperCase() + e.slice(1)));
      }, bh = function(e, t) {
        nu.hasOwnProperty(t) && nu[t] || (nu[t] = !0, m(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`, e, t.replace(eu, "")));
      }, Ch = function(e, t) {
        Sh || (Sh = !0, m("`NaN` is an invalid value for the `%s` css style property.", e));
      }, Wg = function(e, t) {
        zd || (zd = !0, m("`Infinity` is an invalid value for the `%s` css style property.", e));
      };
      mh = function(e, t) {
        e.indexOf("-") > -1 ? Ud(e) : yh.test(e) ? Eh(e) : eu.test(t) && bh(e, t), typeof t == "number" && (isNaN(t) ? Ch(e, t) : isFinite(t) || Wg(e, t));
      };
    }
    var Gg = mh;
    function qg(e) {
      {
        var t = "", a = "";
        for (var i in e)
          if (e.hasOwnProperty(i)) {
            var u = e[i];
            if (u != null) {
              var f = i.indexOf("--") === 0;
              t += a + (f ? i : Yg(i)) + ":", t += xc(i, u, f), a = ";";
            }
          }
        return t || null;
      }
    }
    function xh(e, t) {
      var a = e.style;
      for (var i in t)
        if (t.hasOwnProperty(i)) {
          var u = i.indexOf("--") === 0;
          u || Gg(i, t[i]);
          var f = xc(i, t[i], u);
          i === "float" && (i = "cssFloat"), u ? a.setProperty(i, f) : a[i] = f;
        }
    }
    function Qg(e) {
      return e == null || typeof e == "boolean" || e === "";
    }
    function Oa(e) {
      var t = {};
      for (var a in e)
        for (var i = ph[a] || [a], u = 0; u < i.length; u++)
          t[i[u]] = a;
      return t;
    }
    function ls(e, t) {
      {
        if (!t)
          return;
        var a = Oa(e), i = Oa(t), u = {};
        for (var f in a) {
          var h = a[f], E = i[f];
          if (E && h !== E) {
            var b = h + "," + E;
            if (u[b])
              continue;
            u[b] = !0, m("%s a style property during rerender (%s) when a conflicting property is set (%s) can lead to styling bugs. To avoid this, don't mix shorthand and non-shorthand properties for the same value; instead, replace the shorthand with separate values.", Qg(e[h]) ? "Removing" : "Updating", h, E);
          }
        }
      }
    }
    var Th = {
      area: !0,
      base: !0,
      br: !0,
      col: !0,
      embed: !0,
      hr: !0,
      img: !0,
      input: !0,
      keygen: !0,
      link: !0,
      meta: !0,
      param: !0,
      source: !0,
      track: !0,
      wbr: !0
      // NOTE: menuitem's close tag should be omitted, but that causes problems.
    }, Rh = wt({
      menuitem: !0
    }, Th), wh = "__html";
    function Tc(e, t) {
      if (t) {
        if (Rh[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
          throw new Error(e + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
        if (t.dangerouslySetInnerHTML != null) {
          if (t.children != null)
            throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
          if (typeof t.dangerouslySetInnerHTML != "object" || !(wh in t.dangerouslySetInnerHTML))
            throw new Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
        }
        if (!t.suppressContentEditableWarning && t.contentEditable && t.children != null && m("A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."), t.style != null && typeof t.style != "object")
          throw new Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");
      }
    }
    function Ai(e, t) {
      if (e.indexOf("-") === -1)
        return typeof t.is == "string";
      switch (e) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
          return !1;
        default:
          return !0;
      }
    }
    var Rc = {
      // HTML
      accept: "accept",
      acceptcharset: "acceptCharset",
      "accept-charset": "acceptCharset",
      accesskey: "accessKey",
      action: "action",
      allowfullscreen: "allowFullScreen",
      alt: "alt",
      as: "as",
      async: "async",
      autocapitalize: "autoCapitalize",
      autocomplete: "autoComplete",
      autocorrect: "autoCorrect",
      autofocus: "autoFocus",
      autoplay: "autoPlay",
      autosave: "autoSave",
      capture: "capture",
      cellpadding: "cellPadding",
      cellspacing: "cellSpacing",
      challenge: "challenge",
      charset: "charSet",
      checked: "checked",
      children: "children",
      cite: "cite",
      class: "className",
      classid: "classID",
      classname: "className",
      cols: "cols",
      colspan: "colSpan",
      content: "content",
      contenteditable: "contentEditable",
      contextmenu: "contextMenu",
      controls: "controls",
      controlslist: "controlsList",
      coords: "coords",
      crossorigin: "crossOrigin",
      dangerouslysetinnerhtml: "dangerouslySetInnerHTML",
      data: "data",
      datetime: "dateTime",
      default: "default",
      defaultchecked: "defaultChecked",
      defaultvalue: "defaultValue",
      defer: "defer",
      dir: "dir",
      disabled: "disabled",
      disablepictureinpicture: "disablePictureInPicture",
      disableremoteplayback: "disableRemotePlayback",
      download: "download",
      draggable: "draggable",
      enctype: "encType",
      enterkeyhint: "enterKeyHint",
      for: "htmlFor",
      form: "form",
      formmethod: "formMethod",
      formaction: "formAction",
      formenctype: "formEncType",
      formnovalidate: "formNoValidate",
      formtarget: "formTarget",
      frameborder: "frameBorder",
      headers: "headers",
      height: "height",
      hidden: "hidden",
      high: "high",
      href: "href",
      hreflang: "hrefLang",
      htmlfor: "htmlFor",
      httpequiv: "httpEquiv",
      "http-equiv": "httpEquiv",
      icon: "icon",
      id: "id",
      imagesizes: "imageSizes",
      imagesrcset: "imageSrcSet",
      innerhtml: "innerHTML",
      inputmode: "inputMode",
      integrity: "integrity",
      is: "is",
      itemid: "itemID",
      itemprop: "itemProp",
      itemref: "itemRef",
      itemscope: "itemScope",
      itemtype: "itemType",
      keyparams: "keyParams",
      keytype: "keyType",
      kind: "kind",
      label: "label",
      lang: "lang",
      list: "list",
      loop: "loop",
      low: "low",
      manifest: "manifest",
      marginwidth: "marginWidth",
      marginheight: "marginHeight",
      max: "max",
      maxlength: "maxLength",
      media: "media",
      mediagroup: "mediaGroup",
      method: "method",
      min: "min",
      minlength: "minLength",
      multiple: "multiple",
      muted: "muted",
      name: "name",
      nomodule: "noModule",
      nonce: "nonce",
      novalidate: "noValidate",
      open: "open",
      optimum: "optimum",
      pattern: "pattern",
      placeholder: "placeholder",
      playsinline: "playsInline",
      poster: "poster",
      preload: "preload",
      profile: "profile",
      radiogroup: "radioGroup",
      readonly: "readOnly",
      referrerpolicy: "referrerPolicy",
      rel: "rel",
      required: "required",
      reversed: "reversed",
      role: "role",
      rows: "rows",
      rowspan: "rowSpan",
      sandbox: "sandbox",
      scope: "scope",
      scoped: "scoped",
      scrolling: "scrolling",
      seamless: "seamless",
      selected: "selected",
      shape: "shape",
      size: "size",
      sizes: "sizes",
      span: "span",
      spellcheck: "spellCheck",
      src: "src",
      srcdoc: "srcDoc",
      srclang: "srcLang",
      srcset: "srcSet",
      start: "start",
      step: "step",
      style: "style",
      summary: "summary",
      tabindex: "tabIndex",
      target: "target",
      title: "title",
      type: "type",
      usemap: "useMap",
      value: "value",
      width: "width",
      wmode: "wmode",
      wrap: "wrap",
      // SVG
      about: "about",
      accentheight: "accentHeight",
      "accent-height": "accentHeight",
      accumulate: "accumulate",
      additive: "additive",
      alignmentbaseline: "alignmentBaseline",
      "alignment-baseline": "alignmentBaseline",
      allowreorder: "allowReorder",
      alphabetic: "alphabetic",
      amplitude: "amplitude",
      arabicform: "arabicForm",
      "arabic-form": "arabicForm",
      ascent: "ascent",
      attributename: "attributeName",
      attributetype: "attributeType",
      autoreverse: "autoReverse",
      azimuth: "azimuth",
      basefrequency: "baseFrequency",
      baselineshift: "baselineShift",
      "baseline-shift": "baselineShift",
      baseprofile: "baseProfile",
      bbox: "bbox",
      begin: "begin",
      bias: "bias",
      by: "by",
      calcmode: "calcMode",
      capheight: "capHeight",
      "cap-height": "capHeight",
      clip: "clip",
      clippath: "clipPath",
      "clip-path": "clipPath",
      clippathunits: "clipPathUnits",
      cliprule: "clipRule",
      "clip-rule": "clipRule",
      color: "color",
      colorinterpolation: "colorInterpolation",
      "color-interpolation": "colorInterpolation",
      colorinterpolationfilters: "colorInterpolationFilters",
      "color-interpolation-filters": "colorInterpolationFilters",
      colorprofile: "colorProfile",
      "color-profile": "colorProfile",
      colorrendering: "colorRendering",
      "color-rendering": "colorRendering",
      contentscripttype: "contentScriptType",
      contentstyletype: "contentStyleType",
      cursor: "cursor",
      cx: "cx",
      cy: "cy",
      d: "d",
      datatype: "datatype",
      decelerate: "decelerate",
      descent: "descent",
      diffuseconstant: "diffuseConstant",
      direction: "direction",
      display: "display",
      divisor: "divisor",
      dominantbaseline: "dominantBaseline",
      "dominant-baseline": "dominantBaseline",
      dur: "dur",
      dx: "dx",
      dy: "dy",
      edgemode: "edgeMode",
      elevation: "elevation",
      enablebackground: "enableBackground",
      "enable-background": "enableBackground",
      end: "end",
      exponent: "exponent",
      externalresourcesrequired: "externalResourcesRequired",
      fill: "fill",
      fillopacity: "fillOpacity",
      "fill-opacity": "fillOpacity",
      fillrule: "fillRule",
      "fill-rule": "fillRule",
      filter: "filter",
      filterres: "filterRes",
      filterunits: "filterUnits",
      floodopacity: "floodOpacity",
      "flood-opacity": "floodOpacity",
      floodcolor: "floodColor",
      "flood-color": "floodColor",
      focusable: "focusable",
      fontfamily: "fontFamily",
      "font-family": "fontFamily",
      fontsize: "fontSize",
      "font-size": "fontSize",
      fontsizeadjust: "fontSizeAdjust",
      "font-size-adjust": "fontSizeAdjust",
      fontstretch: "fontStretch",
      "font-stretch": "fontStretch",
      fontstyle: "fontStyle",
      "font-style": "fontStyle",
      fontvariant: "fontVariant",
      "font-variant": "fontVariant",
      fontweight: "fontWeight",
      "font-weight": "fontWeight",
      format: "format",
      from: "from",
      fx: "fx",
      fy: "fy",
      g1: "g1",
      g2: "g2",
      glyphname: "glyphName",
      "glyph-name": "glyphName",
      glyphorientationhorizontal: "glyphOrientationHorizontal",
      "glyph-orientation-horizontal": "glyphOrientationHorizontal",
      glyphorientationvertical: "glyphOrientationVertical",
      "glyph-orientation-vertical": "glyphOrientationVertical",
      glyphref: "glyphRef",
      gradienttransform: "gradientTransform",
      gradientunits: "gradientUnits",
      hanging: "hanging",
      horizadvx: "horizAdvX",
      "horiz-adv-x": "horizAdvX",
      horizoriginx: "horizOriginX",
      "horiz-origin-x": "horizOriginX",
      ideographic: "ideographic",
      imagerendering: "imageRendering",
      "image-rendering": "imageRendering",
      in2: "in2",
      in: "in",
      inlist: "inlist",
      intercept: "intercept",
      k1: "k1",
      k2: "k2",
      k3: "k3",
      k4: "k4",
      k: "k",
      kernelmatrix: "kernelMatrix",
      kernelunitlength: "kernelUnitLength",
      kerning: "kerning",
      keypoints: "keyPoints",
      keysplines: "keySplines",
      keytimes: "keyTimes",
      lengthadjust: "lengthAdjust",
      letterspacing: "letterSpacing",
      "letter-spacing": "letterSpacing",
      lightingcolor: "lightingColor",
      "lighting-color": "lightingColor",
      limitingconeangle: "limitingConeAngle",
      local: "local",
      markerend: "markerEnd",
      "marker-end": "markerEnd",
      markerheight: "markerHeight",
      markermid: "markerMid",
      "marker-mid": "markerMid",
      markerstart: "markerStart",
      "marker-start": "markerStart",
      markerunits: "markerUnits",
      markerwidth: "markerWidth",
      mask: "mask",
      maskcontentunits: "maskContentUnits",
      maskunits: "maskUnits",
      mathematical: "mathematical",
      mode: "mode",
      numoctaves: "numOctaves",
      offset: "offset",
      opacity: "opacity",
      operator: "operator",
      order: "order",
      orient: "orient",
      orientation: "orientation",
      origin: "origin",
      overflow: "overflow",
      overlineposition: "overlinePosition",
      "overline-position": "overlinePosition",
      overlinethickness: "overlineThickness",
      "overline-thickness": "overlineThickness",
      paintorder: "paintOrder",
      "paint-order": "paintOrder",
      panose1: "panose1",
      "panose-1": "panose1",
      pathlength: "pathLength",
      patterncontentunits: "patternContentUnits",
      patterntransform: "patternTransform",
      patternunits: "patternUnits",
      pointerevents: "pointerEvents",
      "pointer-events": "pointerEvents",
      points: "points",
      pointsatx: "pointsAtX",
      pointsaty: "pointsAtY",
      pointsatz: "pointsAtZ",
      prefix: "prefix",
      preservealpha: "preserveAlpha",
      preserveaspectratio: "preserveAspectRatio",
      primitiveunits: "primitiveUnits",
      property: "property",
      r: "r",
      radius: "radius",
      refx: "refX",
      refy: "refY",
      renderingintent: "renderingIntent",
      "rendering-intent": "renderingIntent",
      repeatcount: "repeatCount",
      repeatdur: "repeatDur",
      requiredextensions: "requiredExtensions",
      requiredfeatures: "requiredFeatures",
      resource: "resource",
      restart: "restart",
      result: "result",
      results: "results",
      rotate: "rotate",
      rx: "rx",
      ry: "ry",
      scale: "scale",
      security: "security",
      seed: "seed",
      shaperendering: "shapeRendering",
      "shape-rendering": "shapeRendering",
      slope: "slope",
      spacing: "spacing",
      specularconstant: "specularConstant",
      specularexponent: "specularExponent",
      speed: "speed",
      spreadmethod: "spreadMethod",
      startoffset: "startOffset",
      stddeviation: "stdDeviation",
      stemh: "stemh",
      stemv: "stemv",
      stitchtiles: "stitchTiles",
      stopcolor: "stopColor",
      "stop-color": "stopColor",
      stopopacity: "stopOpacity",
      "stop-opacity": "stopOpacity",
      strikethroughposition: "strikethroughPosition",
      "strikethrough-position": "strikethroughPosition",
      strikethroughthickness: "strikethroughThickness",
      "strikethrough-thickness": "strikethroughThickness",
      string: "string",
      stroke: "stroke",
      strokedasharray: "strokeDasharray",
      "stroke-dasharray": "strokeDasharray",
      strokedashoffset: "strokeDashoffset",
      "stroke-dashoffset": "strokeDashoffset",
      strokelinecap: "strokeLinecap",
      "stroke-linecap": "strokeLinecap",
      strokelinejoin: "strokeLinejoin",
      "stroke-linejoin": "strokeLinejoin",
      strokemiterlimit: "strokeMiterlimit",
      "stroke-miterlimit": "strokeMiterlimit",
      strokewidth: "strokeWidth",
      "stroke-width": "strokeWidth",
      strokeopacity: "strokeOpacity",
      "stroke-opacity": "strokeOpacity",
      suppresscontenteditablewarning: "suppressContentEditableWarning",
      suppresshydrationwarning: "suppressHydrationWarning",
      surfacescale: "surfaceScale",
      systemlanguage: "systemLanguage",
      tablevalues: "tableValues",
      targetx: "targetX",
      targety: "targetY",
      textanchor: "textAnchor",
      "text-anchor": "textAnchor",
      textdecoration: "textDecoration",
      "text-decoration": "textDecoration",
      textlength: "textLength",
      textrendering: "textRendering",
      "text-rendering": "textRendering",
      to: "to",
      transform: "transform",
      typeof: "typeof",
      u1: "u1",
      u2: "u2",
      underlineposition: "underlinePosition",
      "underline-position": "underlinePosition",
      underlinethickness: "underlineThickness",
      "underline-thickness": "underlineThickness",
      unicode: "unicode",
      unicodebidi: "unicodeBidi",
      "unicode-bidi": "unicodeBidi",
      unicoderange: "unicodeRange",
      "unicode-range": "unicodeRange",
      unitsperem: "unitsPerEm",
      "units-per-em": "unitsPerEm",
      unselectable: "unselectable",
      valphabetic: "vAlphabetic",
      "v-alphabetic": "vAlphabetic",
      values: "values",
      vectoreffect: "vectorEffect",
      "vector-effect": "vectorEffect",
      version: "version",
      vertadvy: "vertAdvY",
      "vert-adv-y": "vertAdvY",
      vertoriginx: "vertOriginX",
      "vert-origin-x": "vertOriginX",
      vertoriginy: "vertOriginY",
      "vert-origin-y": "vertOriginY",
      vhanging: "vHanging",
      "v-hanging": "vHanging",
      videographic: "vIdeographic",
      "v-ideographic": "vIdeographic",
      viewbox: "viewBox",
      viewtarget: "viewTarget",
      visibility: "visibility",
      vmathematical: "vMathematical",
      "v-mathematical": "vMathematical",
      vocab: "vocab",
      widths: "widths",
      wordspacing: "wordSpacing",
      "word-spacing": "wordSpacing",
      writingmode: "writingMode",
      "writing-mode": "writingMode",
      x1: "x1",
      x2: "x2",
      x: "x",
      xchannelselector: "xChannelSelector",
      xheight: "xHeight",
      "x-height": "xHeight",
      xlinkactuate: "xlinkActuate",
      "xlink:actuate": "xlinkActuate",
      xlinkarcrole: "xlinkArcrole",
      "xlink:arcrole": "xlinkArcrole",
      xlinkhref: "xlinkHref",
      "xlink:href": "xlinkHref",
      xlinkrole: "xlinkRole",
      "xlink:role": "xlinkRole",
      xlinkshow: "xlinkShow",
      "xlink:show": "xlinkShow",
      xlinktitle: "xlinkTitle",
      "xlink:title": "xlinkTitle",
      xlinktype: "xlinkType",
      "xlink:type": "xlinkType",
      xmlbase: "xmlBase",
      "xml:base": "xmlBase",
      xmllang: "xmlLang",
      "xml:lang": "xmlLang",
      xmlns: "xmlns",
      "xml:space": "xmlSpace",
      xmlnsxlink: "xmlnsXlink",
      "xmlns:xlink": "xmlnsXlink",
      xmlspace: "xmlSpace",
      y1: "y1",
      y2: "y2",
      y: "y",
      ychannelselector: "yChannelSelector",
      z: "z",
      zoomandpan: "zoomAndPan"
    }, _h = {
      "aria-current": 0,
      // state
      "aria-description": 0,
      "aria-details": 0,
      "aria-disabled": 0,
      // state
      "aria-hidden": 0,
      // state
      "aria-invalid": 0,
      // state
      "aria-keyshortcuts": 0,
      "aria-label": 0,
      "aria-roledescription": 0,
      // Widget Attributes
      "aria-autocomplete": 0,
      "aria-checked": 0,
      "aria-expanded": 0,
      "aria-haspopup": 0,
      "aria-level": 0,
      "aria-modal": 0,
      "aria-multiline": 0,
      "aria-multiselectable": 0,
      "aria-orientation": 0,
      "aria-placeholder": 0,
      "aria-pressed": 0,
      "aria-readonly": 0,
      "aria-required": 0,
      "aria-selected": 0,
      "aria-sort": 0,
      "aria-valuemax": 0,
      "aria-valuemin": 0,
      "aria-valuenow": 0,
      "aria-valuetext": 0,
      // Live Region Attributes
      "aria-atomic": 0,
      "aria-busy": 0,
      "aria-live": 0,
      "aria-relevant": 0,
      // Drag-and-Drop Attributes
      "aria-dropeffect": 0,
      "aria-grabbed": 0,
      // Relationship Attributes
      "aria-activedescendant": 0,
      "aria-colcount": 0,
      "aria-colindex": 0,
      "aria-colspan": 0,
      "aria-controls": 0,
      "aria-describedby": 0,
      "aria-errormessage": 0,
      "aria-flowto": 0,
      "aria-labelledby": 0,
      "aria-owns": 0,
      "aria-posinset": 0,
      "aria-rowcount": 0,
      "aria-rowindex": 0,
      "aria-rowspan": 0,
      "aria-setsize": 0
    }, ei = {}, jd = new RegExp("^(aria)-[" + Ze + "]*$"), us = new RegExp("^(aria)[A-Z][" + Ze + "]*$");
    function $d(e, t) {
      {
        if (Se.call(ei, t) && ei[t])
          return !0;
        if (us.test(t)) {
          var a = "aria-" + t.slice(4).toLowerCase(), i = _h.hasOwnProperty(a) ? a : null;
          if (i == null)
            return m("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.", t), ei[t] = !0, !0;
          if (t !== i)
            return m("Invalid ARIA attribute `%s`. Did you mean `%s`?", t, i), ei[t] = !0, !0;
        }
        if (jd.test(t)) {
          var u = t.toLowerCase(), f = _h.hasOwnProperty(u) ? u : null;
          if (f == null)
            return ei[t] = !0, !1;
          if (t !== f)
            return m("Unknown ARIA attribute `%s`. Did you mean `%s`?", t, f), ei[t] = !0, !0;
        }
      }
      return !0;
    }
    function kh(e, t) {
      {
        var a = [];
        for (var i in t) {
          var u = $d(e, i);
          u || a.push(i);
        }
        var f = a.map(function(h) {
          return "`" + h + "`";
        }).join(", ");
        a.length === 1 ? m("Invalid aria prop %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", f, e) : a.length > 1 && m("Invalid aria props %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", f, e);
      }
    }
    function wc(e, t) {
      Ai(e, t) || kh(e, t);
    }
    var tl = !1;
    function Fd(e, t) {
      {
        if (e !== "input" && e !== "textarea" && e !== "select")
          return;
        t != null && t.value === null && !tl && (tl = !0, e === "select" && t.multiple ? m("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.", e) : m("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.", e));
      }
    }
    var Vd = function() {
    };
    {
      var er = {}, Hd = /^on./, Oh = /^on[^A-Z]/, Dh = new RegExp("^(aria)-[" + Ze + "]*$"), Nh = new RegExp("^(aria)[A-Z][" + Ze + "]*$");
      Vd = function(e, t, a, i) {
        if (Se.call(er, t) && er[t])
          return !0;
        var u = t.toLowerCase();
        if (u === "onfocusin" || u === "onfocusout")
          return m("React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."), er[t] = !0, !0;
        if (i != null) {
          var f = i.registrationNameDependencies, h = i.possibleRegistrationNames;
          if (f.hasOwnProperty(t))
            return !0;
          var E = h.hasOwnProperty(u) ? h[u] : null;
          if (E != null)
            return m("Invalid event handler property `%s`. Did you mean `%s`?", t, E), er[t] = !0, !0;
          if (Hd.test(t))
            return m("Unknown event handler property `%s`. It will be ignored.", t), er[t] = !0, !0;
        } else if (Hd.test(t))
          return Oh.test(t) && m("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.", t), er[t] = !0, !0;
        if (Dh.test(t) || Nh.test(t))
          return !0;
        if (u === "innerhtml")
          return m("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."), er[t] = !0, !0;
        if (u === "aria")
          return m("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."), er[t] = !0, !0;
        if (u === "is" && a !== null && a !== void 0 && typeof a != "string")
          return m("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.", typeof a), er[t] = !0, !0;
        if (typeof a == "number" && isNaN(a))
          return m("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.", t), er[t] = !0, !0;
        var b = da(t), T = b !== null && b.type === Or;
        if (Rc.hasOwnProperty(u)) {
          var _ = Rc[u];
          if (_ !== t)
            return m("Invalid DOM property `%s`. Did you mean `%s`?", t, _), er[t] = !0, !0;
        } else if (!T && t !== u)
          return m("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.", t, u), er[t] = !0, !0;
        return typeof a == "boolean" && Wr(t, a, b, !1) ? (a ? m('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.', a, t, t, a, t) : m('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.', a, t, t, a, t, t, t), er[t] = !0, !0) : T ? !0 : Wr(t, a, b, !1) ? (er[t] = !0, !1) : ((a === "false" || a === "true") && b !== null && b.type === yn && (m("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", a, t, a === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".', t, a), er[t] = !0), !0);
      };
    }
    var Mh = function(e, t, a) {
      {
        var i = [];
        for (var u in t) {
          var f = Vd(e, u, t[u], a);
          f || i.push(u);
        }
        var h = i.map(function(E) {
          return "`" + E + "`";
        }).join(", ");
        i.length === 1 ? m("Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", h, e) : i.length > 1 && m("Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", h, e);
      }
    };
    function Lh(e, t, a) {
      Ai(e, t) || Mh(e, t, a);
    }
    var zi = 1, ss = 2, nl = 4, Kg = zi | ss | nl, cs = null;
    function fs(e) {
      cs !== null && m("Expected currently replaying event to be null. This error is likely caused by a bug in React. Please file an issue."), cs = e;
    }
    function Xg() {
      cs === null && m("Expected currently replaying event to not be null. This error is likely caused by a bug in React. Please file an issue."), cs = null;
    }
    function Ah(e) {
      return e === cs;
    }
    function _c(e) {
      var t = e.target || e.srcElement || window;
      return t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === Li ? t.parentNode : t;
    }
    var nn = null, ho = null, Pi = null;
    function ru(e) {
      var t = Ou(e);
      if (t) {
        if (typeof nn != "function")
          throw new Error("setRestoreImplementation() needs to be called to handle a target for controlled events. This error is likely caused by a bug in React. Please file an issue.");
        var a = t.stateNode;
        if (a) {
          var i = Am(a);
          nn(t.stateNode, t.type, i);
        }
      }
    }
    function zh(e) {
      nn = e;
    }
    function kc(e) {
      ho ? Pi ? Pi.push(e) : Pi = [e] : ho = e;
    }
    function ds() {
      return ho !== null || Pi !== null;
    }
    function ps() {
      if (ho) {
        var e = ho, t = Pi;
        if (ho = null, Pi = null, ru(e), t)
          for (var a = 0; a < t.length; a++)
            ru(t[a]);
      }
    }
    var rl = function(e, t) {
      return e(t);
    }, Id = function() {
    }, Bd = !1;
    function Zg() {
      var e = ds();
      e && (Id(), ps());
    }
    function Yd(e, t, a) {
      if (Bd)
        return e(t, a);
      Bd = !0;
      try {
        return rl(e, t, a);
      } finally {
        Bd = !1, Zg();
      }
    }
    function Oc(e, t, a) {
      rl = e, Id = a;
    }
    function Dc(e) {
      return e === "button" || e === "input" || e === "select" || e === "textarea";
    }
    function Wd(e, t, a) {
      switch (e) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
          return !!(a.disabled && Dc(t));
        default:
          return !1;
      }
    }
    function al(e, t) {
      var a = e.stateNode;
      if (a === null)
        return null;
      var i = Am(a);
      if (i === null)
        return null;
      var u = i[t];
      if (Wd(t, e.type, i))
        return null;
      if (u && typeof u != "function")
        throw new Error("Expected `" + t + "` listener to be a function, instead got a value of `" + typeof u + "` type.");
      return u;
    }
    var vs = !1;
    if (mt)
      try {
        var il = {};
        Object.defineProperty(il, "passive", {
          get: function() {
            vs = !0;
          }
        }), window.addEventListener("test", il, il), window.removeEventListener("test", il, il);
      } catch {
        vs = !1;
      }
    function Ph(e, t, a, i, u, f, h, E, b) {
      var T = Array.prototype.slice.call(arguments, 3);
      try {
        t.apply(a, T);
      } catch (_) {
        this.onError(_);
      }
    }
    var Gd = Ph;
    if (typeof window < "u" && typeof window.dispatchEvent == "function" && typeof document < "u" && typeof document.createEvent == "function") {
      var qd = document.createElement("react");
      Gd = function(t, a, i, u, f, h, E, b, T) {
        if (typeof document > "u" || document === null)
          throw new Error("The `document` global was defined when React was initialized, but is not defined anymore. This can happen in a test environment if a component schedules an update from an asynchronous callback, but the test has already finished running. To solve this, you can either unmount the component at the end of your test (and ensure that any asynchronous operations get canceled in `componentWillUnmount`), or you can change the test itself to be asynchronous.");
        var _ = document.createEvent("Event"), $ = !1, U = !0, q = window.event, Q = Object.getOwnPropertyDescriptor(window, "event");
        function ee() {
          qd.removeEventListener(te, tt, !1), typeof window.event < "u" && window.hasOwnProperty("event") && (window.event = q);
        }
        var Ae = Array.prototype.slice.call(arguments, 3);
        function tt() {
          $ = !0, ee(), a.apply(i, Ae), U = !1;
        }
        var Qe, Nt = !1, kt = !1;
        function Y(W) {
          if (Qe = W.error, Nt = !0, Qe === null && W.colno === 0 && W.lineno === 0 && (kt = !0), W.defaultPrevented && Qe != null && typeof Qe == "object")
            try {
              Qe._suppressLogging = !0;
            } catch {
            }
        }
        var te = "react-" + (t || "invokeguardedcallback");
        if (window.addEventListener("error", Y), qd.addEventListener(te, tt, !1), _.initEvent(te, !1, !1), qd.dispatchEvent(_), Q && Object.defineProperty(window, "event", Q), $ && U && (Nt ? kt && (Qe = new Error("A cross-origin error was thrown. React doesn't have access to the actual error object in development. See https://reactjs.org/link/crossorigin-error for more information.")) : Qe = new Error(`An error was thrown inside one of your components, but React doesn't know what it was. This is likely due to browser flakiness. React does its best to preserve the "Pause on exceptions" behavior of the DevTools, which requires some DEV-mode only tricks. It's possible that these don't work in your browser. Try triggering the error in production mode, or switching to a modern browser. If you suspect that this is actually an issue with React, please file an issue.`), this.onError(Qe)), window.removeEventListener("error", Y), !$)
          return ee(), Ph.apply(this, arguments);
      };
    }
    var Jg = Gd, mo = !1, ti = null, hs = !1, yo = null, fi = {
      onError: function(e) {
        mo = !0, ti = e;
      }
    };
    function ol(e, t, a, i, u, f, h, E, b) {
      mo = !1, ti = null, Jg.apply(fi, arguments);
    }
    function Ui(e, t, a, i, u, f, h, E, b) {
      if (ol.apply(this, arguments), mo) {
        var T = Kd();
        hs || (hs = !0, yo = T);
      }
    }
    function Qd() {
      if (hs) {
        var e = yo;
        throw hs = !1, yo = null, e;
      }
    }
    function e0() {
      return mo;
    }
    function Kd() {
      if (mo) {
        var e = ti;
        return mo = !1, ti = null, e;
      } else
        throw new Error("clearCaughtError was called but no error was captured. This error is likely caused by a bug in React. Please file an issue.");
    }
    function Da(e) {
      return e._reactInternals;
    }
    function ms(e) {
      return e._reactInternals !== void 0;
    }
    function au(e, t) {
      e._reactInternals = t;
    }
    var et = (
      /*                      */
      0
    ), go = (
      /*                */
      1
    ), ln = (
      /*                    */
      2
    ), gt = (
      /*                       */
      4
    ), Ut = (
      /*                */
      16
    ), jt = (
      /*                 */
      32
    ), di = (
      /*                     */
      64
    ), dt = (
      /*                   */
      128
    ), Rn = (
      /*            */
      256
    ), qr = (
      /*                          */
      512
    ), Na = (
      /*                     */
      1024
    ), vn = (
      /*                      */
      2048
    ), Ma = (
      /*                    */
      4096
    ), So = (
      /*                   */
      8192
    ), ys = (
      /*             */
      16384
    ), Nc = vn | gt | di | qr | Na | ys, Uh = (
      /*               */
      32767
    ), ha = (
      /*                   */
      32768
    ), tr = (
      /*                */
      65536
    ), gs = (
      /* */
      131072
    ), Xd = (
      /*                       */
      1048576
    ), Zd = (
      /*                    */
      2097152
    ), Qr = (
      /*                 */
      4194304
    ), Eo = (
      /*                */
      8388608
    ), Kr = (
      /*               */
      16777216
    ), ll = (
      /*              */
      33554432
    ), iu = (
      // TODO: Remove Update flag from before mutation phase by re-landing Visibility
      // flag logic (see #20043)
      gt | Na | 0
    ), Xr = ln | gt | Ut | jt | qr | Ma | So, Er = gt | di | qr | So, La = vn | Ut, ur = Qr | Eo | Zd, ji = d.ReactCurrentOwner;
    function ma(e) {
      var t = e, a = e;
      if (e.alternate)
        for (; t.return; )
          t = t.return;
      else {
        var i = t;
        do
          t = i, (t.flags & (ln | Ma)) !== et && (a = t.return), i = t.return;
        while (i);
      }
      return t.tag === N ? a : null;
    }
    function Jd(e) {
      if (e.tag === D) {
        var t = e.memoizedState;
        if (t === null) {
          var a = e.alternate;
          a !== null && (t = a.memoizedState);
        }
        if (t !== null)
          return t.dehydrated;
      }
      return null;
    }
    function Mc(e) {
      return e.tag === N ? e.stateNode.containerInfo : null;
    }
    function ep(e) {
      return ma(e) === e;
    }
    function ya(e) {
      {
        var t = ji.current;
        if (t !== null && t.tag === k) {
          var a = t, i = a.stateNode;
          i._warnedAboutRefsInRender || m("%s is accessing isMounted inside its render() function. render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", yt(a) || "A component"), i._warnedAboutRefsInRender = !0;
        }
      }
      var u = Da(e);
      return u ? ma(u) === u : !1;
    }
    function Zr(e) {
      if (ma(e) !== e)
        throw new Error("Unable to find node on an unmounted component.");
    }
    function un(e) {
      var t = e.alternate;
      if (!t) {
        var a = ma(e);
        if (a === null)
          throw new Error("Unable to find node on an unmounted component.");
        return a !== e ? null : e;
      }
      for (var i = e, u = t; ; ) {
        var f = i.return;
        if (f === null)
          break;
        var h = f.alternate;
        if (h === null) {
          var E = f.return;
          if (E !== null) {
            i = u = E;
            continue;
          }
          break;
        }
        if (f.child === h.child) {
          for (var b = f.child; b; ) {
            if (b === i)
              return Zr(f), e;
            if (b === u)
              return Zr(f), t;
            b = b.sibling;
          }
          throw new Error("Unable to find node on an unmounted component.");
        }
        if (i.return !== u.return)
          i = f, u = h;
        else {
          for (var T = !1, _ = f.child; _; ) {
            if (_ === i) {
              T = !0, i = f, u = h;
              break;
            }
            if (_ === u) {
              T = !0, u = f, i = h;
              break;
            }
            _ = _.sibling;
          }
          if (!T) {
            for (_ = h.child; _; ) {
              if (_ === i) {
                T = !0, i = h, u = f;
                break;
              }
              if (_ === u) {
                T = !0, u = h, i = f;
                break;
              }
              _ = _.sibling;
            }
            if (!T)
              throw new Error("Child was not found in either parent set. This indicates a bug in React related to the return pointer. Please file an issue.");
          }
        }
        if (i.alternate !== u)
          throw new Error("Return fibers should always be each others' alternates. This error is likely caused by a bug in React. Please file an issue.");
      }
      if (i.tag !== N)
        throw new Error("Unable to find node on an unmounted component.");
      return i.stateNode.current === i ? e : t;
    }
    function Aa(e) {
      var t = un(e);
      return t !== null ? tp(t) : null;
    }
    function tp(e) {
      if (e.tag === V || e.tag === F)
        return e;
      for (var t = e.child; t !== null; ) {
        var a = tp(t);
        if (a !== null)
          return a;
        t = t.sibling;
      }
      return null;
    }
    function jh(e) {
      var t = un(e);
      return t !== null ? Lc(t) : null;
    }
    function Lc(e) {
      if (e.tag === V || e.tag === F)
        return e;
      for (var t = e.child; t !== null; ) {
        if (t.tag !== A) {
          var a = Lc(t);
          if (a !== null)
            return a;
        }
        t = t.sibling;
      }
      return null;
    }
    var Ac = s.unstable_scheduleCallback, $h = s.unstable_cancelCallback, zc = s.unstable_shouldYield, Fh = s.unstable_requestPaint, Sn = s.unstable_now, np = s.unstable_getCurrentPriorityLevel, Pc = s.unstable_ImmediatePriority, ga = s.unstable_UserBlockingPriority, pi = s.unstable_NormalPriority, Uc = s.unstable_LowPriority, bo = s.unstable_IdlePriority, rp = s.unstable_yieldValue, ap = s.unstable_setDisableYieldValue, Co = null, nr = null, xe = null, Nn = !1, sr = typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u";
    function ip(e) {
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u")
        return !1;
      var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (t.isDisabled)
        return !0;
      if (!t.supportsFiber)
        return m("The installed version of React DevTools is too old and will not work with the current version of React. Please update React DevTools. https://reactjs.org/link/react-devtools"), !0;
      try {
        qe && (e = wt({}, e, {
          getLaneLabelMap: To,
          injectProfilingHooks: Fi
        })), Co = t.inject(e), nr = t;
      } catch (a) {
        m("React instrumentation encountered an error: %s.", a);
      }
      return !!t.checkDCE;
    }
    function Vh(e, t) {
      if (nr && typeof nr.onScheduleFiberRoot == "function")
        try {
          nr.onScheduleFiberRoot(Co, e, t);
        } catch (a) {
          Nn || (Nn = !0, m("React instrumentation encountered an error: %s", a));
        }
    }
    function $i(e, t) {
      if (nr && typeof nr.onCommitFiberRoot == "function")
        try {
          var a = (e.current.flags & dt) === dt;
          if (Ne) {
            var i;
            switch (t) {
              case br:
                i = Pc;
                break;
              case cr:
                i = ga;
                break;
              case Hi:
                i = pi;
                break;
              case _s:
                i = bo;
                break;
              default:
                i = pi;
                break;
            }
            nr.onCommitFiberRoot(Co, e, i, a);
          }
        } catch (u) {
          Nn || (Nn = !0, m("React instrumentation encountered an error: %s", u));
        }
    }
    function xo(e) {
      if (nr && typeof nr.onPostCommitFiberRoot == "function")
        try {
          nr.onPostCommitFiberRoot(Co, e);
        } catch (t) {
          Nn || (Nn = !0, m("React instrumentation encountered an error: %s", t));
        }
    }
    function op(e) {
      if (nr && typeof nr.onCommitFiberUnmount == "function")
        try {
          nr.onCommitFiberUnmount(Co, e);
        } catch (t) {
          Nn || (Nn = !0, m("React instrumentation encountered an error: %s", t));
        }
    }
    function In(e) {
      if (typeof rp == "function" && (ap(e), g(e)), nr && typeof nr.setStrictMode == "function")
        try {
          nr.setStrictMode(Co, e);
        } catch (t) {
          Nn || (Nn = !0, m("React instrumentation encountered an error: %s", t));
        }
    }
    function Fi(e) {
      xe = e;
    }
    function To() {
      {
        for (var e = /* @__PURE__ */ new Map(), t = 1, a = 0; a < sn; a++) {
          var i = t0(t);
          e.set(t, i), t *= 2;
        }
        return e;
      }
    }
    function jc(e) {
      xe !== null && typeof xe.markCommitStarted == "function" && xe.markCommitStarted(e);
    }
    function lp() {
      xe !== null && typeof xe.markCommitStopped == "function" && xe.markCommitStopped();
    }
    function Ro(e) {
      xe !== null && typeof xe.markComponentRenderStarted == "function" && xe.markComponentRenderStarted(e);
    }
    function ul() {
      xe !== null && typeof xe.markComponentRenderStopped == "function" && xe.markComponentRenderStopped();
    }
    function Hh(e) {
      xe !== null && typeof xe.markComponentPassiveEffectMountStarted == "function" && xe.markComponentPassiveEffectMountStarted(e);
    }
    function up() {
      xe !== null && typeof xe.markComponentPassiveEffectMountStopped == "function" && xe.markComponentPassiveEffectMountStopped();
    }
    function $c(e) {
      xe !== null && typeof xe.markComponentPassiveEffectUnmountStarted == "function" && xe.markComponentPassiveEffectUnmountStarted(e);
    }
    function Ih() {
      xe !== null && typeof xe.markComponentPassiveEffectUnmountStopped == "function" && xe.markComponentPassiveEffectUnmountStopped();
    }
    function Bh(e) {
      xe !== null && typeof xe.markComponentLayoutEffectMountStarted == "function" && xe.markComponentLayoutEffectMountStarted(e);
    }
    function Yh() {
      xe !== null && typeof xe.markComponentLayoutEffectMountStopped == "function" && xe.markComponentLayoutEffectMountStopped();
    }
    function Fc(e) {
      xe !== null && typeof xe.markComponentLayoutEffectUnmountStarted == "function" && xe.markComponentLayoutEffectUnmountStarted(e);
    }
    function ou() {
      xe !== null && typeof xe.markComponentLayoutEffectUnmountStopped == "function" && xe.markComponentLayoutEffectUnmountStopped();
    }
    function Vc(e, t, a) {
      xe !== null && typeof xe.markComponentErrored == "function" && xe.markComponentErrored(e, t, a);
    }
    function Wh(e, t, a) {
      xe !== null && typeof xe.markComponentSuspended == "function" && xe.markComponentSuspended(e, t, a);
    }
    function Gh(e) {
      xe !== null && typeof xe.markLayoutEffectsStarted == "function" && xe.markLayoutEffectsStarted(e);
    }
    function lu() {
      xe !== null && typeof xe.markLayoutEffectsStopped == "function" && xe.markLayoutEffectsStopped();
    }
    function qh(e) {
      xe !== null && typeof xe.markPassiveEffectsStarted == "function" && xe.markPassiveEffectsStarted(e);
    }
    function Ss() {
      xe !== null && typeof xe.markPassiveEffectsStopped == "function" && xe.markPassiveEffectsStopped();
    }
    function ni(e) {
      xe !== null && typeof xe.markRenderStarted == "function" && xe.markRenderStarted(e);
    }
    function Es() {
      xe !== null && typeof xe.markRenderYielded == "function" && xe.markRenderYielded();
    }
    function uu() {
      xe !== null && typeof xe.markRenderStopped == "function" && xe.markRenderStopped();
    }
    function sl(e) {
      xe !== null && typeof xe.markRenderScheduled == "function" && xe.markRenderScheduled(e);
    }
    function sp(e, t) {
      xe !== null && typeof xe.markForceUpdateScheduled == "function" && xe.markForceUpdateScheduled(e, t);
    }
    function wo(e, t) {
      xe !== null && typeof xe.markStateUpdateScheduled == "function" && xe.markStateUpdateScheduled(e, t);
    }
    var it = (
      /*                         */
      0
    ), Tt = (
      /*                 */
      1
    ), ut = (
      /*                    */
      2
    ), En = (
      /*               */
      8
    ), za = (
      /*              */
      16
    ), Hc = Math.clz32 ? Math.clz32 : cl, Ic = Math.log, cp = Math.LN2;
    function cl(e) {
      var t = e >>> 0;
      return t === 0 ? 32 : 31 - (Ic(t) / cp | 0) | 0;
    }
    var sn = 31, ne = (
      /*                        */
      0
    ), Ot = (
      /*                          */
      0
    ), st = (
      /*                        */
      1
    ), hi = (
      /*    */
      2
    ), Sa = (
      /*             */
      4
    ), fl = (
      /*            */
      8
    ), cn = (
      /*                     */
      16
    ), dl = (
      /*                */
      32
    ), _o = (
      /*                       */
      4194240
    ), pl = (
      /*                        */
      64
    ), Pa = (
      /*                        */
      128
    ), Jr = (
      /*                        */
      256
    ), vl = (
      /*                        */
      512
    ), bs = (
      /*                        */
      1024
    ), Cs = (
      /*                        */
      2048
    ), Bc = (
      /*                        */
      4096
    ), Yc = (
      /*                        */
      8192
    ), Wc = (
      /*                        */
      16384
    ), Gc = (
      /*                       */
      32768
    ), qc = (
      /*                       */
      65536
    ), Qc = (
      /*                       */
      131072
    ), Kc = (
      /*                       */
      262144
    ), Xc = (
      /*                       */
      524288
    ), hl = (
      /*                       */
      1048576
    ), Zc = (
      /*                       */
      2097152
    ), ml = (
      /*                            */
      130023424
    ), Vi = (
      /*                             */
      4194304
    ), Jc = (
      /*                             */
      8388608
    ), xs = (
      /*                             */
      16777216
    ), ef = (
      /*                             */
      33554432
    ), tf = (
      /*                             */
      67108864
    ), fp = Vi, su = (
      /*          */
      134217728
    ), nf = (
      /*                          */
      268435455
    ), cu = (
      /*               */
      268435456
    ), ko = (
      /*                        */
      536870912
    ), ea = (
      /*                   */
      1073741824
    );
    function t0(e) {
      {
        if (e & st)
          return "Sync";
        if (e & hi)
          return "InputContinuousHydration";
        if (e & Sa)
          return "InputContinuous";
        if (e & fl)
          return "DefaultHydration";
        if (e & cn)
          return "Default";
        if (e & dl)
          return "TransitionHydration";
        if (e & _o)
          return "Transition";
        if (e & ml)
          return "Retry";
        if (e & su)
          return "SelectiveHydration";
        if (e & cu)
          return "IdleHydration";
        if (e & ko)
          return "Idle";
        if (e & ea)
          return "Offscreen";
      }
    }
    var rn = -1, rf = pl, af = Vi;
    function fu(e) {
      switch (Pn(e)) {
        case st:
          return st;
        case hi:
          return hi;
        case Sa:
          return Sa;
        case fl:
          return fl;
        case cn:
          return cn;
        case dl:
          return dl;
        case pl:
        case Pa:
        case Jr:
        case vl:
        case bs:
        case Cs:
        case Bc:
        case Yc:
        case Wc:
        case Gc:
        case qc:
        case Qc:
        case Kc:
        case Xc:
        case hl:
        case Zc:
          return e & _o;
        case Vi:
        case Jc:
        case xs:
        case ef:
        case tf:
          return e & ml;
        case su:
          return su;
        case cu:
          return cu;
        case ko:
          return ko;
        case ea:
          return ea;
        default:
          return m("Should have found matching lanes. This is a bug in React."), e;
      }
    }
    function Ts(e, t) {
      var a = e.pendingLanes;
      if (a === ne)
        return ne;
      var i = ne, u = e.suspendedLanes, f = e.pingedLanes, h = a & nf;
      if (h !== ne) {
        var E = h & ~u;
        if (E !== ne)
          i = fu(E);
        else {
          var b = h & f;
          b !== ne && (i = fu(b));
        }
      } else {
        var T = a & ~u;
        T !== ne ? i = fu(T) : f !== ne && (i = fu(f));
      }
      if (i === ne)
        return ne;
      if (t !== ne && t !== i && // If we already suspended with a delay, then interrupting is fine. Don't
      // bother waiting until the root is complete.
      (t & u) === ne) {
        var _ = Pn(i), $ = Pn(t);
        if (
          // Tests whether the next lane is equal or lower priority than the wip
          // one. This works because the bits decrease in priority as you go left.
          _ >= $ || // Default priority updates should not interrupt transition updates. The
          // only difference between default updates and transition updates is that
          // default updates do not support refresh transitions.
          _ === cn && ($ & _o) !== ne
        )
          return t;
      }
      (i & Sa) !== ne && (i |= a & cn);
      var U = e.entangledLanes;
      if (U !== ne)
        for (var q = e.entanglements, Q = i & U; Q > 0; ) {
          var ee = Oo(Q), Ae = 1 << ee;
          i |= q[ee], Q &= ~Ae;
        }
      return i;
    }
    function Qh(e, t) {
      for (var a = e.eventTimes, i = rn; t > 0; ) {
        var u = Oo(t), f = 1 << u, h = a[u];
        h > i && (i = h), t &= ~f;
      }
      return i;
    }
    function of(e, t) {
      switch (e) {
        case st:
        case hi:
        case Sa:
          return t + 250;
        case fl:
        case cn:
        case dl:
        case pl:
        case Pa:
        case Jr:
        case vl:
        case bs:
        case Cs:
        case Bc:
        case Yc:
        case Wc:
        case Gc:
        case qc:
        case Qc:
        case Kc:
        case Xc:
        case hl:
        case Zc:
          return t + 5e3;
        case Vi:
        case Jc:
        case xs:
        case ef:
        case tf:
          return rn;
        case su:
        case cu:
        case ko:
        case ea:
          return rn;
        default:
          return m("Should have found matching lanes. This is a bug in React."), rn;
      }
    }
    function n0(e, t) {
      for (var a = e.pendingLanes, i = e.suspendedLanes, u = e.pingedLanes, f = e.expirationTimes, h = a; h > 0; ) {
        var E = Oo(h), b = 1 << E, T = f[E];
        T === rn ? ((b & i) === ne || (b & u) !== ne) && (f[E] = of(b, t)) : T <= t && (e.expiredLanes |= b), h &= ~b;
      }
    }
    function r0(e) {
      return fu(e.pendingLanes);
    }
    function dp(e) {
      var t = e.pendingLanes & ~ea;
      return t !== ne ? t : t & ea ? ea : ne;
    }
    function du(e) {
      return (e & st) !== ne;
    }
    function Rs(e) {
      return (e & nf) !== ne;
    }
    function lf(e) {
      return (e & ml) === e;
    }
    function a0(e) {
      var t = st | Sa | cn;
      return (e & t) === ne;
    }
    function Kh(e) {
      return (e & _o) === e;
    }
    function ws(e, t) {
      var a = hi | Sa | fl | cn;
      return (t & a) !== ne;
    }
    function Xh(e, t) {
      return (t & e.expiredLanes) !== ne;
    }
    function pp(e) {
      return (e & _o) !== ne;
    }
    function vp() {
      var e = rf;
      return rf <<= 1, (rf & _o) === ne && (rf = pl), e;
    }
    function i0() {
      var e = af;
      return af <<= 1, (af & ml) === ne && (af = Vi), e;
    }
    function Pn(e) {
      return e & -e;
    }
    function Bn(e) {
      return Pn(e);
    }
    function Oo(e) {
      return 31 - Hc(e);
    }
    function uf(e) {
      return Oo(e);
    }
    function ta(e, t) {
      return (e & t) !== ne;
    }
    function yl(e, t) {
      return (e & t) === t;
    }
    function St(e, t) {
      return e | t;
    }
    function pu(e, t) {
      return e & ~t;
    }
    function hp(e, t) {
      return e & t;
    }
    function Zh(e) {
      return e;
    }
    function Jh(e, t) {
      return e !== Ot && e < t ? e : t;
    }
    function sf(e) {
      for (var t = [], a = 0; a < sn; a++)
        t.push(e);
      return t;
    }
    function gl(e, t, a) {
      e.pendingLanes |= t, t !== ko && (e.suspendedLanes = ne, e.pingedLanes = ne);
      var i = e.eventTimes, u = uf(t);
      i[u] = a;
    }
    function mp(e, t) {
      e.suspendedLanes |= t, e.pingedLanes &= ~t;
      for (var a = e.expirationTimes, i = t; i > 0; ) {
        var u = Oo(i), f = 1 << u;
        a[u] = rn, i &= ~f;
      }
    }
    function yp(e, t, a) {
      e.pingedLanes |= e.suspendedLanes & t;
    }
    function gp(e, t) {
      var a = e.pendingLanes & ~t;
      e.pendingLanes = t, e.suspendedLanes = ne, e.pingedLanes = ne, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t;
      for (var i = e.entanglements, u = e.eventTimes, f = e.expirationTimes, h = a; h > 0; ) {
        var E = Oo(h), b = 1 << E;
        i[E] = ne, u[E] = rn, f[E] = rn, h &= ~b;
      }
    }
    function vu(e, t) {
      for (var a = e.entangledLanes |= t, i = e.entanglements, u = a; u; ) {
        var f = Oo(u), h = 1 << f;
        // Is this one of the newly entangled lanes?
        h & t | // Is this lane transitively entangled with the newly entangled lanes?
        i[f] & t && (i[f] |= t), u &= ~h;
      }
    }
    function o0(e, t) {
      var a = Pn(t), i;
      switch (a) {
        case Sa:
          i = hi;
          break;
        case cn:
          i = fl;
          break;
        case pl:
        case Pa:
        case Jr:
        case vl:
        case bs:
        case Cs:
        case Bc:
        case Yc:
        case Wc:
        case Gc:
        case qc:
        case Qc:
        case Kc:
        case Xc:
        case hl:
        case Zc:
        case Vi:
        case Jc:
        case xs:
        case ef:
        case tf:
          i = dl;
          break;
        case ko:
          i = cu;
          break;
        default:
          i = Ot;
          break;
      }
      return (i & (e.suspendedLanes | t)) !== Ot ? Ot : i;
    }
    function Sp(e, t, a) {
      if (sr)
        for (var i = e.pendingUpdatersLaneMap; a > 0; ) {
          var u = uf(a), f = 1 << u, h = i[u];
          h.add(t), a &= ~f;
        }
    }
    function cf(e, t) {
      if (sr)
        for (var a = e.pendingUpdatersLaneMap, i = e.memoizedUpdaters; t > 0; ) {
          var u = uf(t), f = 1 << u, h = a[u];
          h.size > 0 && (h.forEach(function(E) {
            var b = E.alternate;
            (b === null || !i.has(b)) && i.add(E);
          }), h.clear()), t &= ~f;
        }
    }
    function Ep(e, t) {
      return null;
    }
    var br = st, cr = Sa, Hi = cn, _s = ko, Sl = Ot;
    function Ua() {
      return Sl;
    }
    function Yn(e) {
      Sl = e;
    }
    function ks(e, t) {
      var a = Sl;
      try {
        return Sl = e, t();
      } finally {
        Sl = a;
      }
    }
    function Cr(e, t) {
      return e !== 0 && e < t ? e : t;
    }
    function l0(e, t) {
      return e === 0 || e > t ? e : t;
    }
    function bp(e, t) {
      return e !== 0 && e < t;
    }
    function Os(e) {
      var t = Pn(e);
      return bp(br, t) ? bp(cr, t) ? Rs(t) ? Hi : _s : cr : br;
    }
    function Wn(e) {
      var t = e.current.memoizedState;
      return t.isDehydrated;
    }
    var em;
    function Ue(e) {
      em = e;
    }
    function hu(e) {
      em(e);
    }
    var Ds;
    function tm(e) {
      Ds = e;
    }
    var nm;
    function Ns(e) {
      nm = e;
    }
    var Ms;
    function Cp(e) {
      Ms = e;
    }
    var xp;
    function rm(e) {
      xp = e;
    }
    var ff = !1, mu = [], mi = null, hn = null, rr = null, ja = /* @__PURE__ */ new Map(), yu = /* @__PURE__ */ new Map(), Ii = [], ri = [
      "mousedown",
      "mouseup",
      "touchcancel",
      "touchend",
      "touchstart",
      "auxclick",
      "dblclick",
      "pointercancel",
      "pointerdown",
      "pointerup",
      "dragend",
      "dragstart",
      "drop",
      "compositionend",
      "compositionstart",
      "keydown",
      "keypress",
      "keyup",
      "input",
      "textInput",
      // Intentionally camelCase
      "copy",
      "cut",
      "paste",
      "click",
      "change",
      "contextmenu",
      "reset",
      "submit"
    ];
    function am(e) {
      return ri.indexOf(e) > -1;
    }
    function yi(e, t, a, i, u) {
      return {
        blockedOn: e,
        domEventName: t,
        eventSystemFlags: a,
        nativeEvent: u,
        targetContainers: [i]
      };
    }
    function im(e, t) {
      switch (e) {
        case "focusin":
        case "focusout":
          mi = null;
          break;
        case "dragenter":
        case "dragleave":
          hn = null;
          break;
        case "mouseover":
        case "mouseout":
          rr = null;
          break;
        case "pointerover":
        case "pointerout": {
          var a = t.pointerId;
          ja.delete(a);
          break;
        }
        case "gotpointercapture":
        case "lostpointercapture": {
          var i = t.pointerId;
          yu.delete(i);
          break;
        }
      }
    }
    function gu(e, t, a, i, u, f) {
      if (e === null || e.nativeEvent !== f) {
        var h = yi(t, a, i, u, f);
        if (t !== null) {
          var E = Ou(t);
          E !== null && Ds(E);
        }
        return h;
      }
      e.eventSystemFlags |= i;
      var b = e.targetContainers;
      return u !== null && b.indexOf(u) === -1 && b.push(u), e;
    }
    function om(e, t, a, i, u) {
      switch (t) {
        case "focusin": {
          var f = u;
          return mi = gu(mi, e, t, a, i, f), !0;
        }
        case "dragenter": {
          var h = u;
          return hn = gu(hn, e, t, a, i, h), !0;
        }
        case "mouseover": {
          var E = u;
          return rr = gu(rr, e, t, a, i, E), !0;
        }
        case "pointerover": {
          var b = u, T = b.pointerId;
          return ja.set(T, gu(ja.get(T) || null, e, t, a, i, b)), !0;
        }
        case "gotpointercapture": {
          var _ = u, $ = _.pointerId;
          return yu.set($, gu(yu.get($) || null, e, t, a, i, _)), !0;
        }
      }
      return !1;
    }
    function Tp(e) {
      var t = Vs(e.target);
      if (t !== null) {
        var a = ma(t);
        if (a !== null) {
          var i = a.tag;
          if (i === D) {
            var u = Jd(a);
            if (u !== null) {
              e.blockedOn = u, xp(e.priority, function() {
                nm(a);
              });
              return;
            }
          } else if (i === N) {
            var f = a.stateNode;
            if (Wn(f)) {
              e.blockedOn = Mc(a);
              return;
            }
          }
        }
      }
      e.blockedOn = null;
    }
    function lm(e) {
      for (var t = Ms(), a = {
        blockedOn: null,
        target: e,
        priority: t
      }, i = 0; i < Ii.length && bp(t, Ii[i].priority); i++)
        ;
      Ii.splice(i, 0, a), i === 0 && Tp(a);
    }
    function df(e) {
      if (e.blockedOn !== null)
        return !1;
      for (var t = e.targetContainers; t.length > 0; ) {
        var a = t[0], i = El(e.domEventName, e.eventSystemFlags, a, e.nativeEvent);
        if (i === null) {
          var u = e.nativeEvent, f = new u.constructor(u.type, u);
          fs(f), u.target.dispatchEvent(f), Xg();
        } else {
          var h = Ou(i);
          return h !== null && Ds(h), e.blockedOn = i, !1;
        }
        t.shift();
      }
      return !0;
    }
    function Ls(e, t, a) {
      df(e) && a.delete(t);
    }
    function Rp() {
      ff = !1, mi !== null && df(mi) && (mi = null), hn !== null && df(hn) && (hn = null), rr !== null && df(rr) && (rr = null), ja.forEach(Ls), yu.forEach(Ls);
    }
    function xr(e, t) {
      e.blockedOn === t && (e.blockedOn = null, ff || (ff = !0, s.unstable_scheduleCallback(s.unstable_NormalPriority, Rp)));
    }
    function _t(e) {
      if (mu.length > 0) {
        xr(mu[0], e);
        for (var t = 1; t < mu.length; t++) {
          var a = mu[t];
          a.blockedOn === e && (a.blockedOn = null);
        }
      }
      mi !== null && xr(mi, e), hn !== null && xr(hn, e), rr !== null && xr(rr, e);
      var i = function(E) {
        return xr(E, e);
      };
      ja.forEach(i), yu.forEach(i);
      for (var u = 0; u < Ii.length; u++) {
        var f = Ii[u];
        f.blockedOn === e && (f.blockedOn = null);
      }
      for (; Ii.length > 0; ) {
        var h = Ii[0];
        if (h.blockedOn !== null)
          break;
        Tp(h), h.blockedOn === null && Ii.shift();
      }
    }
    var bn = d.ReactCurrentBatchConfig, wn = !0;
    function ar(e) {
      wn = !!e;
    }
    function Ea() {
      return wn;
    }
    function Su(e, t, a) {
      var i = Mr(t), u;
      switch (i) {
        case br:
          u = Gn;
          break;
        case cr:
          u = As;
          break;
        case Hi:
        default:
          u = Bi;
          break;
      }
      return u.bind(null, t, a, e);
    }
    function Gn(e, t, a, i) {
      var u = Ua(), f = bn.transition;
      bn.transition = null;
      try {
        Yn(br), Bi(e, t, a, i);
      } finally {
        Yn(u), bn.transition = f;
      }
    }
    function As(e, t, a, i) {
      var u = Ua(), f = bn.transition;
      bn.transition = null;
      try {
        Yn(cr), Bi(e, t, a, i);
      } finally {
        Yn(u), bn.transition = f;
      }
    }
    function Bi(e, t, a, i) {
      wn && pf(e, t, a, i);
    }
    function pf(e, t, a, i) {
      var u = El(e, t, a, i);
      if (u === null) {
        _0(e, t, i, Eu, a), im(e, i);
        return;
      }
      if (om(u, e, t, a, i)) {
        i.stopPropagation();
        return;
      }
      if (im(e, i), t & nl && am(e)) {
        for (; u !== null; ) {
          var f = Ou(u);
          f !== null && hu(f);
          var h = El(e, t, a, i);
          if (h === null && _0(e, t, i, Eu, a), h === u)
            break;
          u = h;
        }
        u !== null && i.stopPropagation();
        return;
      }
      _0(e, t, i, null, a);
    }
    var Eu = null;
    function El(e, t, a, i) {
      Eu = null;
      var u = _c(i), f = Vs(u);
      if (f !== null) {
        var h = ma(f);
        if (h === null)
          f = null;
        else {
          var E = h.tag;
          if (E === D) {
            var b = Jd(h);
            if (b !== null)
              return b;
            f = null;
          } else if (E === N) {
            var T = h.stateNode;
            if (Wn(T))
              return Mc(h);
            f = null;
          } else
            h !== f && (f = null);
        }
      }
      return Eu = f, null;
    }
    function Mr(e) {
      switch (e) {
        case "cancel":
        case "click":
        case "close":
        case "contextmenu":
        case "copy":
        case "cut":
        case "auxclick":
        case "dblclick":
        case "dragend":
        case "dragstart":
        case "drop":
        case "focusin":
        case "focusout":
        case "input":
        case "invalid":
        case "keydown":
        case "keypress":
        case "keyup":
        case "mousedown":
        case "mouseup":
        case "paste":
        case "pause":
        case "play":
        case "pointercancel":
        case "pointerdown":
        case "pointerup":
        case "ratechange":
        case "reset":
        case "resize":
        case "seeked":
        case "submit":
        case "touchcancel":
        case "touchend":
        case "touchstart":
        case "volumechange":
        case "change":
        case "selectionchange":
        case "textInput":
        case "compositionstart":
        case "compositionend":
        case "compositionupdate":
        case "beforeblur":
        case "afterblur":
        case "beforeinput":
        case "blur":
        case "fullscreenchange":
        case "focus":
        case "hashchange":
        case "popstate":
        case "select":
        case "selectstart":
          return br;
        case "drag":
        case "dragenter":
        case "dragexit":
        case "dragleave":
        case "dragover":
        case "mousemove":
        case "mouseout":
        case "mouseover":
        case "pointermove":
        case "pointerout":
        case "pointerover":
        case "scroll":
        case "toggle":
        case "touchmove":
        case "wheel":
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
          return cr;
        case "message": {
          var t = np();
          switch (t) {
            case Pc:
              return br;
            case ga:
              return cr;
            case pi:
            case Uc:
              return Hi;
            case bo:
              return _s;
            default:
              return Hi;
          }
        }
        default:
          return Hi;
      }
    }
    function wp(e, t, a) {
      return e.addEventListener(t, a, !1), a;
    }
    function bu(e, t, a) {
      return e.addEventListener(t, a, !0), a;
    }
    function Yi(e, t, a, i) {
      return e.addEventListener(t, a, {
        capture: !0,
        passive: i
      }), a;
    }
    function vf(e, t, a, i) {
      return e.addEventListener(t, a, {
        passive: i
      }), a;
    }
    var bl = null, gi = null, Do = null;
    function No(e) {
      return bl = e, gi = mf(), !0;
    }
    function hf() {
      bl = null, gi = null, Do = null;
    }
    function Cu() {
      if (Do)
        return Do;
      var e, t = gi, a = t.length, i, u = mf(), f = u.length;
      for (e = 0; e < a && t[e] === u[e]; e++)
        ;
      var h = a - e;
      for (i = 1; i <= h && t[a - i] === u[f - i]; i++)
        ;
      var E = i > 1 ? 1 - i : void 0;
      return Do = u.slice(e, E), Do;
    }
    function mf() {
      return "value" in bl ? bl.value : bl.textContent;
    }
    function Cl(e) {
      var t, a = e.keyCode;
      return "charCode" in e ? (t = e.charCode, t === 0 && a === 13 && (t = 13)) : t = a, t === 10 && (t = 13), t >= 32 || t === 13 ? t : 0;
    }
    function xl() {
      return !0;
    }
    function Tr() {
      return !1;
    }
    function Un(e) {
      function t(a, i, u, f, h) {
        this._reactName = a, this._targetInst = u, this.type = i, this.nativeEvent = f, this.target = h, this.currentTarget = null;
        for (var E in e)
          if (e.hasOwnProperty(E)) {
            var b = e[E];
            b ? this[E] = b(f) : this[E] = f[E];
          }
        var T = f.defaultPrevented != null ? f.defaultPrevented : f.returnValue === !1;
        return T ? this.isDefaultPrevented = xl : this.isDefaultPrevented = Tr, this.isPropagationStopped = Tr, this;
      }
      return wt(t.prototype, {
        preventDefault: function() {
          this.defaultPrevented = !0;
          var a = this.nativeEvent;
          a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = !1), this.isDefaultPrevented = xl);
        },
        stopPropagation: function() {
          var a = this.nativeEvent;
          a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0), this.isPropagationStopped = xl);
        },
        /**
         * We release all dispatched `SyntheticEvent`s after each event loop, adding
         * them back into the pool. This allows a way to hold onto a reference that
         * won't be added back into the pool.
         */
        persist: function() {
        },
        /**
         * Checks if this event should be released back into the pool.
         *
         * @return {boolean} True if this should not be released, false otherwise.
         */
        isPersistent: xl
      }), t;
    }
    var Rr = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function(e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0
    }, wr = Un(Rr), xu = wt({}, Rr, {
      view: 0,
      detail: 0
    }), _p = Un(xu), zs, kp, $a;
    function um(e) {
      e !== $a && ($a && e.type === "mousemove" ? (zs = e.screenX - $a.screenX, kp = e.screenY - $a.screenY) : (zs = 0, kp = 0), $a = e);
    }
    var Tu = wt({}, xu, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: Sf,
      button: 0,
      buttons: 0,
      relatedTarget: function(e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
      },
      movementX: function(e) {
        return "movementX" in e ? e.movementX : (um(e), zs);
      },
      movementY: function(e) {
        return "movementY" in e ? e.movementY : kp;
      }
    }), Mo = Un(Tu), Op = wt({}, Tu, {
      dataTransfer: 0
    }), Tl = Un(Op), sm = wt({}, xu, {
      relatedTarget: 0
    }), yf = Un(sm), Dp = wt({}, Rr, {
      animationName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), gf = Un(Dp), u0 = wt({}, Rr, {
      clipboardData: function(e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      }
    }), s0 = Un(u0), cm = wt({}, Rr, {
      data: 0
    }), Np = Un(cm), Rl = Np, c0 = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified"
    }, Ru = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta"
    };
    function fm(e) {
      if (e.key) {
        var t = c0[e.key] || e.key;
        if (t !== "Unidentified")
          return t;
      }
      if (e.type === "keypress") {
        var a = Cl(e);
        return a === 13 ? "Enter" : String.fromCharCode(a);
      }
      return e.type === "keydown" || e.type === "keyup" ? Ru[e.keyCode] || "Unidentified" : "";
    }
    var _n = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey"
    };
    function f0(e) {
      var t = this, a = t.nativeEvent;
      if (a.getModifierState)
        return a.getModifierState(e);
      var i = _n[e];
      return i ? !!a[i] : !1;
    }
    function Sf(e) {
      return f0;
    }
    var d0 = wt({}, xu, {
      key: fm,
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: Sf,
      // Legacy Interface
      charCode: function(e) {
        return e.type === "keypress" ? Cl(e) : 0;
      },
      keyCode: function(e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function(e) {
        return e.type === "keypress" ? Cl(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      }
    }), p0 = Un(d0), dm = wt({}, Tu, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0
    }), Mp = Un(dm), v0 = wt({}, xu, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Sf
    }), Fa = Un(v0), Lp = wt({}, Rr, {
      propertyName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), h0 = Un(Lp), Lo = wt({}, Tu, {
      deltaX: function(e) {
        return "deltaX" in e ? e.deltaX : (
          // Fallback to `wheelDeltaX` for Webkit and normalize (right is positive).
          "wheelDeltaX" in e ? -e.wheelDeltaX : 0
        );
      },
      deltaY: function(e) {
        return "deltaY" in e ? e.deltaY : (
          // Fallback to `wheelDeltaY` for Webkit and normalize (down is positive).
          "wheelDeltaY" in e ? -e.wheelDeltaY : (
            // Fallback to `wheelDelta` for IE<9 and normalize (down is positive).
            "wheelDelta" in e ? -e.wheelDelta : 0
          )
        );
      },
      deltaZ: 0,
      // Browsers without "deltaMode" is reporting in raw wheel delta where one
      // notch on the scroll is always +/- 120, roughly equivalent to pixels.
      // A good approximation of DOM_DELTA_LINE (1) is 5% of viewport size or
      // ~40 pixels, for DOM_DELTA_SCREEN (2) it is 87.5% of viewport size.
      deltaMode: 0
    }), Ef = Un(Lo), wl = [9, 13, 27, 32], Ps = 229, Us = mt && "CompositionEvent" in window, _l = null;
    mt && "documentMode" in document && (_l = document.documentMode);
    var m0 = mt && "TextEvent" in window && !_l, bf = mt && (!Us || _l && _l > 8 && _l <= 11), pm = 32, Ap = String.fromCharCode(pm);
    function vm() {
      Rt("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), Rt("onCompositionEnd", ["compositionend", "focusout", "keydown", "keypress", "keyup", "mousedown"]), Rt("onCompositionStart", ["compositionstart", "focusout", "keydown", "keypress", "keyup", "mousedown"]), Rt("onCompositionUpdate", ["compositionupdate", "focusout", "keydown", "keypress", "keyup", "mousedown"]);
    }
    var js = !1;
    function Cf(e) {
      return (e.ctrlKey || e.altKey || e.metaKey) && // ctrlKey && altKey is equivalent to AltGr, and is not a command.
      !(e.ctrlKey && e.altKey);
    }
    function hm(e) {
      switch (e) {
        case "compositionstart":
          return "onCompositionStart";
        case "compositionend":
          return "onCompositionEnd";
        case "compositionupdate":
          return "onCompositionUpdate";
      }
    }
    function zp(e, t) {
      return e === "keydown" && t.keyCode === Ps;
    }
    function mm(e, t) {
      switch (e) {
        case "keyup":
          return wl.indexOf(t.keyCode) !== -1;
        case "keydown":
          return t.keyCode !== Ps;
        case "keypress":
        case "mousedown":
        case "focusout":
          return !0;
        default:
          return !1;
      }
    }
    function Pp(e) {
      var t = e.detail;
      return typeof t == "object" && "data" in t ? t.data : null;
    }
    function xf(e) {
      return e.locale === "ko";
    }
    var Wi = !1;
    function Up(e, t, a, i, u) {
      var f, h;
      if (Us ? f = hm(t) : Wi ? mm(t, i) && (f = "onCompositionEnd") : zp(t, i) && (f = "onCompositionStart"), !f)
        return null;
      bf && !xf(i) && (!Wi && f === "onCompositionStart" ? Wi = No(u) : f === "onCompositionEnd" && Wi && (h = Cu()));
      var E = bm(a, f);
      if (E.length > 0) {
        var b = new Np(f, t, null, i, u);
        if (e.push({
          event: b,
          listeners: E
        }), h)
          b.data = h;
        else {
          var T = Pp(i);
          T !== null && (b.data = T);
        }
      }
    }
    function Tf(e, t) {
      switch (e) {
        case "compositionend":
          return Pp(t);
        case "keypress":
          var a = t.which;
          return a !== pm ? null : (js = !0, Ap);
        case "textInput":
          var i = t.data;
          return i === Ap && js ? null : i;
        default:
          return null;
      }
    }
    function ym(e, t) {
      if (Wi) {
        if (e === "compositionend" || !Us && mm(e, t)) {
          var a = Cu();
          return hf(), Wi = !1, a;
        }
        return null;
      }
      switch (e) {
        case "paste":
          return null;
        case "keypress":
          if (!Cf(t)) {
            if (t.char && t.char.length > 1)
              return t.char;
            if (t.which)
              return String.fromCharCode(t.which);
          }
          return null;
        case "compositionend":
          return bf && !xf(t) ? null : t.data;
        default:
          return null;
      }
    }
    function y0(e, t, a, i, u) {
      var f;
      if (m0 ? f = Tf(t, i) : f = ym(t, i), !f)
        return null;
      var h = bm(a, "onBeforeInput");
      if (h.length > 0) {
        var E = new Rl("onBeforeInput", "beforeinput", null, i, u);
        e.push({
          event: E,
          listeners: h
        }), E.data = f;
      }
    }
    function Rf(e, t, a, i, u, f, h) {
      Up(e, t, a, i, u), y0(e, t, a, i, u);
    }
    var g0 = {
      color: !0,
      date: !0,
      datetime: !0,
      "datetime-local": !0,
      email: !0,
      month: !0,
      number: !0,
      password: !0,
      range: !0,
      search: !0,
      tel: !0,
      text: !0,
      time: !0,
      url: !0,
      week: !0
    };
    function wu(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t === "input" ? !!g0[e.type] : t === "textarea";
    }
    /**
     * Checks if an event is supported in the current execution environment.
     *
     * NOTE: This will not work correctly for non-generic events such as `change`,
     * `reset`, `load`, `error`, and `select`.
     *
     * Borrows from Modernizr.
     *
     * @param {string} eventNameSuffix Event name, e.g. "click".
     * @return {boolean} True if the event is supported.
     * @internal
     * @license Modernizr 3.0.0pre (Custom Build) | MIT
     */
    function S0(e) {
      if (!mt)
        return !1;
      var t = "on" + e, a = t in document;
      if (!a) {
        var i = document.createElement("div");
        i.setAttribute(t, "return;"), a = typeof i[t] == "function";
      }
      return a;
    }
    function wf() {
      Rt("onChange", ["change", "click", "focusin", "focusout", "input", "keydown", "keyup", "selectionchange"]);
    }
    function n(e, t, a, i) {
      kc(i);
      var u = bm(t, "onChange");
      if (u.length > 0) {
        var f = new wr("onChange", "change", null, a, i);
        e.push({
          event: f,
          listeners: u
        });
      }
    }
    var r = null, o = null;
    function c(e) {
      var t = e.nodeName && e.nodeName.toLowerCase();
      return t === "select" || t === "input" && e.type === "file";
    }
    function p(e) {
      var t = [];
      n(t, o, e, _c(e)), Yd(y, t);
    }
    function y(e) {
      S1(e, 0);
    }
    function C(e) {
      var t = Mf(e);
      if (rh(t))
        return e;
    }
    function O(e, t) {
      if (e === "change")
        return t;
    }
    var z = !1;
    mt && (z = S0("input") && (!document.documentMode || document.documentMode > 9));
    function X(e, t) {
      r = e, o = t, r.attachEvent("onpropertychange", he);
    }
    function ce() {
      r && (r.detachEvent("onpropertychange", he), r = null, o = null);
    }
    function he(e) {
      e.propertyName === "value" && C(o) && p(e);
    }
    function se(e, t, a) {
      e === "focusin" ? (ce(), X(t, a)) : e === "focusout" && ce();
    }
    function Me(e, t) {
      if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return C(o);
    }
    function je(e) {
      var t = e.nodeName;
      return t && t.toLowerCase() === "input" && (e.type === "checkbox" || e.type === "radio");
    }
    function Ie(e, t) {
      if (e === "click")
        return C(t);
    }
    function Mn(e, t) {
      if (e === "input" || e === "change")
        return C(t);
    }
    function B(e) {
      var t = e._wrapperState;
      !t || !t.controlled || e.type !== "number" || po(e, "number", e.value);
    }
    function j(e, t, a, i, u, f, h) {
      var E = a ? Mf(a) : window, b, T;
      if (c(E) ? b = O : wu(E) ? z ? b = Mn : (b = Me, T = se) : je(E) && (b = Ie), b) {
        var _ = b(t, a);
        if (_) {
          n(e, _, i, u);
          return;
        }
      }
      T && T(t, E, a), t === "focusout" && B(E);
    }
    function G() {
      Z("onMouseEnter", ["mouseout", "mouseover"]), Z("onMouseLeave", ["mouseout", "mouseover"]), Z("onPointerEnter", ["pointerout", "pointerover"]), Z("onPointerLeave", ["pointerout", "pointerover"]);
    }
    function ye(e, t, a, i, u, f, h) {
      var E = t === "mouseover" || t === "pointerover", b = t === "mouseout" || t === "pointerout";
      if (E && !Ah(i)) {
        var T = i.relatedTarget || i.fromElement;
        if (T && (Vs(T) || Xp(T)))
          return;
      }
      if (!(!b && !E)) {
        var _;
        if (u.window === u)
          _ = u;
        else {
          var $ = u.ownerDocument;
          $ ? _ = $.defaultView || $.parentWindow : _ = window;
        }
        var U, q;
        if (b) {
          var Q = i.relatedTarget || i.toElement;
          if (U = a, q = Q ? Vs(Q) : null, q !== null) {
            var ee = ma(q);
            (q !== ee || q.tag !== V && q.tag !== F) && (q = null);
          }
        } else
          U = null, q = a;
        if (U !== q) {
          var Ae = Mo, tt = "onMouseLeave", Qe = "onMouseEnter", Nt = "mouse";
          (t === "pointerout" || t === "pointerover") && (Ae = Mp, tt = "onPointerLeave", Qe = "onPointerEnter", Nt = "pointer");
          var kt = U == null ? _ : Mf(U), Y = q == null ? _ : Mf(q), te = new Ae(tt, Nt + "leave", U, i, u);
          te.target = kt, te.relatedTarget = Y;
          var W = null, me = Vs(u);
          if (me === a) {
            var ze = new Ae(Qe, Nt + "enter", q, i, u);
            ze.target = Y, ze.relatedTarget = kt, W = ze;
          }
          x_(e, te, W, U, q);
        }
      }
    }
    function Ge(e, t) {
      return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
    }
    var $e = typeof Object.is == "function" ? Object.is : Ge;
    function Je(e, t) {
      if ($e(e, t))
        return !0;
      if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
      var a = Object.keys(e), i = Object.keys(t);
      if (a.length !== i.length)
        return !1;
      for (var u = 0; u < a.length; u++) {
        var f = a[u];
        if (!Se.call(t, f) || !$e(e[f], t[f]))
          return !1;
      }
      return !0;
    }
    function pt(e) {
      for (; e && e.firstChild; )
        e = e.firstChild;
      return e;
    }
    function ir(e) {
      for (; e; ) {
        if (e.nextSibling)
          return e.nextSibling;
        e = e.parentNode;
      }
    }
    function Lt(e, t) {
      for (var a = pt(e), i = 0, u = 0; a; ) {
        if (a.nodeType === Li) {
          if (u = i + a.textContent.length, i <= t && u >= t)
            return {
              node: a,
              offset: t - i
            };
          i = u;
        }
        a = pt(ir(a));
      }
    }
    function Ao(e) {
      var t = e.ownerDocument, a = t && t.defaultView || window, i = a.getSelection && a.getSelection();
      if (!i || i.rangeCount === 0)
        return null;
      var u = i.anchorNode, f = i.anchorOffset, h = i.focusNode, E = i.focusOffset;
      try {
        u.nodeType, h.nodeType;
      } catch {
        return null;
      }
      return E0(e, u, f, h, E);
    }
    function E0(e, t, a, i, u) {
      var f = 0, h = -1, E = -1, b = 0, T = 0, _ = e, $ = null;
      e:
        for (; ; ) {
          for (var U = null; _ === t && (a === 0 || _.nodeType === Li) && (h = f + a), _ === i && (u === 0 || _.nodeType === Li) && (E = f + u), _.nodeType === Li && (f += _.nodeValue.length), (U = _.firstChild) !== null; )
            $ = _, _ = U;
          for (; ; ) {
            if (_ === e)
              break e;
            if ($ === t && ++b === a && (h = f), $ === i && ++T === u && (E = f), (U = _.nextSibling) !== null)
              break;
            _ = $, $ = _.parentNode;
          }
          _ = U;
        }
      return h === -1 || E === -1 ? null : {
        start: h,
        end: E
      };
    }
    function a_(e, t) {
      var a = e.ownerDocument || document, i = a && a.defaultView || window;
      if (i.getSelection) {
        var u = i.getSelection(), f = e.textContent.length, h = Math.min(t.start, f), E = t.end === void 0 ? h : Math.min(t.end, f);
        if (!u.extend && h > E) {
          var b = E;
          E = h, h = b;
        }
        var T = Lt(e, h), _ = Lt(e, E);
        if (T && _) {
          if (u.rangeCount === 1 && u.anchorNode === T.node && u.anchorOffset === T.offset && u.focusNode === _.node && u.focusOffset === _.offset)
            return;
          var $ = a.createRange();
          $.setStart(T.node, T.offset), u.removeAllRanges(), h > E ? (u.addRange($), u.extend(_.node, _.offset)) : ($.setEnd(_.node, _.offset), u.addRange($));
        }
      }
    }
    function l1(e) {
      return e && e.nodeType === Li;
    }
    function u1(e, t) {
      return !e || !t ? !1 : e === t ? !0 : l1(e) ? !1 : l1(t) ? u1(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1;
    }
    function i_(e) {
      return e && e.ownerDocument && u1(e.ownerDocument.documentElement, e);
    }
    function o_(e) {
      try {
        return typeof e.contentWindow.location.href == "string";
      } catch {
        return !1;
      }
    }
    function s1() {
      for (var e = window, t = vc(); t instanceof e.HTMLIFrameElement; ) {
        if (o_(t))
          e = t.contentWindow;
        else
          return t;
        t = vc(e.document);
      }
      return t;
    }
    function b0(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
    }
    function l_() {
      var e = s1();
      return {
        focusedElem: e,
        selectionRange: b0(e) ? s_(e) : null
      };
    }
    function u_(e) {
      var t = s1(), a = e.focusedElem, i = e.selectionRange;
      if (t !== a && i_(a)) {
        i !== null && b0(a) && c_(a, i);
        for (var u = [], f = a; f = f.parentNode; )
          f.nodeType === Gr && u.push({
            element: f,
            left: f.scrollLeft,
            top: f.scrollTop
          });
        typeof a.focus == "function" && a.focus();
        for (var h = 0; h < u.length; h++) {
          var E = u[h];
          E.element.scrollLeft = E.left, E.element.scrollTop = E.top;
        }
      }
    }
    function s_(e) {
      var t;
      return "selectionStart" in e ? t = {
        start: e.selectionStart,
        end: e.selectionEnd
      } : t = Ao(e), t || {
        start: 0,
        end: 0
      };
    }
    function c_(e, t) {
      var a = t.start, i = t.end;
      i === void 0 && (i = a), "selectionStart" in e ? (e.selectionStart = a, e.selectionEnd = Math.min(i, e.value.length)) : a_(e, t);
    }
    var f_ = mt && "documentMode" in document && document.documentMode <= 11;
    function d_() {
      Rt("onSelect", ["focusout", "contextmenu", "dragend", "focusin", "keydown", "keyup", "mousedown", "mouseup", "selectionchange"]);
    }
    var _f = null, C0 = null, jp = null, x0 = !1;
    function p_(e) {
      if ("selectionStart" in e && b0(e))
        return {
          start: e.selectionStart,
          end: e.selectionEnd
        };
      var t = e.ownerDocument && e.ownerDocument.defaultView || window, a = t.getSelection();
      return {
        anchorNode: a.anchorNode,
        anchorOffset: a.anchorOffset,
        focusNode: a.focusNode,
        focusOffset: a.focusOffset
      };
    }
    function v_(e) {
      return e.window === e ? e.document : e.nodeType === Ja ? e : e.ownerDocument;
    }
    function c1(e, t, a) {
      var i = v_(a);
      if (!(x0 || _f == null || _f !== vc(i))) {
        var u = p_(_f);
        if (!jp || !Je(jp, u)) {
          jp = u;
          var f = bm(C0, "onSelect");
          if (f.length > 0) {
            var h = new wr("onSelect", "select", null, t, a);
            e.push({
              event: h,
              listeners: f
            }), h.target = _f;
          }
        }
      }
    }
    function h_(e, t, a, i, u, f, h) {
      var E = a ? Mf(a) : window;
      switch (t) {
        case "focusin":
          (wu(E) || E.contentEditable === "true") && (_f = E, C0 = a, jp = null);
          break;
        case "focusout":
          _f = null, C0 = null, jp = null;
          break;
        case "mousedown":
          x0 = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          x0 = !1, c1(e, i, u);
          break;
        case "selectionchange":
          if (f_)
            break;
        case "keydown":
        case "keyup":
          c1(e, i, u);
      }
    }
    function gm(e, t) {
      var a = {};
      return a[e.toLowerCase()] = t.toLowerCase(), a["Webkit" + e] = "webkit" + t, a["Moz" + e] = "moz" + t, a;
    }
    var kf = {
      animationend: gm("Animation", "AnimationEnd"),
      animationiteration: gm("Animation", "AnimationIteration"),
      animationstart: gm("Animation", "AnimationStart"),
      transitionend: gm("Transition", "TransitionEnd")
    }, T0 = {}, f1 = {};
    mt && (f1 = document.createElement("div").style, "AnimationEvent" in window || (delete kf.animationend.animation, delete kf.animationiteration.animation, delete kf.animationstart.animation), "TransitionEvent" in window || delete kf.transitionend.transition);
    function Sm(e) {
      if (T0[e])
        return T0[e];
      if (!kf[e])
        return e;
      var t = kf[e];
      for (var a in t)
        if (t.hasOwnProperty(a) && a in f1)
          return T0[e] = t[a];
      return e;
    }
    var d1 = Sm("animationend"), p1 = Sm("animationiteration"), v1 = Sm("animationstart"), h1 = Sm("transitionend"), m1 = /* @__PURE__ */ new Map(), y1 = ["abort", "auxClick", "cancel", "canPlay", "canPlayThrough", "click", "close", "contextMenu", "copy", "cut", "drag", "dragEnd", "dragEnter", "dragExit", "dragLeave", "dragOver", "dragStart", "drop", "durationChange", "emptied", "encrypted", "ended", "error", "gotPointerCapture", "input", "invalid", "keyDown", "keyPress", "keyUp", "load", "loadedData", "loadedMetadata", "loadStart", "lostPointerCapture", "mouseDown", "mouseMove", "mouseOut", "mouseOver", "mouseUp", "paste", "pause", "play", "playing", "pointerCancel", "pointerDown", "pointerMove", "pointerOut", "pointerOver", "pointerUp", "progress", "rateChange", "reset", "resize", "seeked", "seeking", "stalled", "submit", "suspend", "timeUpdate", "touchCancel", "touchEnd", "touchStart", "volumeChange", "scroll", "toggle", "touchMove", "waiting", "wheel"];
    function _u(e, t) {
      m1.set(e, t), Rt(t, [e]);
    }
    function m_() {
      for (var e = 0; e < y1.length; e++) {
        var t = y1[e], a = t.toLowerCase(), i = t[0].toUpperCase() + t.slice(1);
        _u(a, "on" + i);
      }
      _u(d1, "onAnimationEnd"), _u(p1, "onAnimationIteration"), _u(v1, "onAnimationStart"), _u("dblclick", "onDoubleClick"), _u("focusin", "onFocus"), _u("focusout", "onBlur"), _u(h1, "onTransitionEnd");
    }
    function y_(e, t, a, i, u, f, h) {
      var E = m1.get(t);
      if (E !== void 0) {
        var b = wr, T = t;
        switch (t) {
          case "keypress":
            if (Cl(i) === 0)
              return;
          case "keydown":
          case "keyup":
            b = p0;
            break;
          case "focusin":
            T = "focus", b = yf;
            break;
          case "focusout":
            T = "blur", b = yf;
            break;
          case "beforeblur":
          case "afterblur":
            b = yf;
            break;
          case "click":
            if (i.button === 2)
              return;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            b = Mo;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            b = Tl;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            b = Fa;
            break;
          case d1:
          case p1:
          case v1:
            b = gf;
            break;
          case h1:
            b = h0;
            break;
          case "scroll":
            b = _p;
            break;
          case "wheel":
            b = Ef;
            break;
          case "copy":
          case "cut":
          case "paste":
            b = s0;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            b = Mp;
            break;
        }
        var _ = (f & nl) !== 0;
        {
          var $ = !_ && // TODO: ideally, we'd eventually add all events from
          // nonDelegatedEvents list in DOMPluginEventSystem.
          // Then we can remove this special list.
          // This is a breaking change that can wait until React 18.
          t === "scroll", U = b_(a, E, i.type, _, $);
          if (U.length > 0) {
            var q = new b(E, T, null, i, u);
            e.push({
              event: q,
              listeners: U
            });
          }
        }
      }
    }
    m_(), G(), wf(), d_(), vm();
    function g_(e, t, a, i, u, f, h) {
      y_(e, t, a, i, u, f);
      var E = (f & Kg) === 0;
      E && (ye(e, t, a, i, u), j(e, t, a, i, u), h_(e, t, a, i, u), Rf(e, t, a, i, u));
    }
    var $p = ["abort", "canplay", "canplaythrough", "durationchange", "emptied", "encrypted", "ended", "error", "loadeddata", "loadedmetadata", "loadstart", "pause", "play", "playing", "progress", "ratechange", "resize", "seeked", "seeking", "stalled", "suspend", "timeupdate", "volumechange", "waiting"], R0 = new Set(["cancel", "close", "invalid", "load", "scroll", "toggle"].concat($p));
    function g1(e, t, a) {
      var i = e.type || "unknown-event";
      e.currentTarget = a, Ui(i, t, void 0, e), e.currentTarget = null;
    }
    function S_(e, t, a) {
      var i;
      if (a)
        for (var u = t.length - 1; u >= 0; u--) {
          var f = t[u], h = f.instance, E = f.currentTarget, b = f.listener;
          if (h !== i && e.isPropagationStopped())
            return;
          g1(e, b, E), i = h;
        }
      else
        for (var T = 0; T < t.length; T++) {
          var _ = t[T], $ = _.instance, U = _.currentTarget, q = _.listener;
          if ($ !== i && e.isPropagationStopped())
            return;
          g1(e, q, U), i = $;
        }
    }
    function S1(e, t) {
      for (var a = (t & nl) !== 0, i = 0; i < e.length; i++) {
        var u = e[i], f = u.event, h = u.listeners;
        S_(f, h, a);
      }
      Qd();
    }
    function E_(e, t, a, i, u) {
      var f = _c(a), h = [];
      g_(h, e, i, a, f, t), S1(h, t);
    }
    function Cn(e, t) {
      R0.has(e) || m('Did not expect a listenToNonDelegatedEvent() call for "%s". This is a bug in React. Please file an issue.', e);
      var a = !1, i = Kk(t), u = T_(e, a);
      i.has(u) || (E1(t, e, ss, a), i.add(u));
    }
    function w0(e, t, a) {
      R0.has(e) && !t && m('Did not expect a listenToNativeEvent() call for "%s" in the bubble phase. This is a bug in React. Please file an issue.', e);
      var i = 0;
      t && (i |= nl), E1(a, e, i, t);
    }
    var Em = "_reactListening" + Math.random().toString(36).slice(2);
    function Fp(e) {
      if (!e[Em]) {
        e[Em] = !0, We.forEach(function(a) {
          a !== "selectionchange" && (R0.has(a) || w0(a, !1, e), w0(a, !0, e));
        });
        var t = e.nodeType === Ja ? e : e.ownerDocument;
        t !== null && (t[Em] || (t[Em] = !0, w0("selectionchange", !1, t)));
      }
    }
    function E1(e, t, a, i, u) {
      var f = Su(e, t, a), h = void 0;
      vs && (t === "touchstart" || t === "touchmove" || t === "wheel") && (h = !0), e = e, i ? h !== void 0 ? Yi(e, t, f, h) : bu(e, t, f) : h !== void 0 ? vf(e, t, f, h) : wp(e, t, f);
    }
    function b1(e, t) {
      return e === t || e.nodeType === zn && e.parentNode === t;
    }
    function _0(e, t, a, i, u) {
      var f = i;
      if (!(t & zi) && !(t & ss)) {
        var h = u;
        if (i !== null) {
          var E = i;
          e:
            for (; ; ) {
              if (E === null)
                return;
              var b = E.tag;
              if (b === N || b === A) {
                var T = E.stateNode.containerInfo;
                if (b1(T, h))
                  break;
                if (b === A)
                  for (var _ = E.return; _ !== null; ) {
                    var $ = _.tag;
                    if ($ === N || $ === A) {
                      var U = _.stateNode.containerInfo;
                      if (b1(U, h))
                        return;
                    }
                    _ = _.return;
                  }
                for (; T !== null; ) {
                  var q = Vs(T);
                  if (q === null)
                    return;
                  var Q = q.tag;
                  if (Q === V || Q === F) {
                    E = f = q;
                    continue e;
                  }
                  T = T.parentNode;
                }
              }
              E = E.return;
            }
        }
      }
      Yd(function() {
        return E_(e, t, a, f);
      });
    }
    function Vp(e, t, a) {
      return {
        instance: e,
        listener: t,
        currentTarget: a
      };
    }
    function b_(e, t, a, i, u, f) {
      for (var h = t !== null ? t + "Capture" : null, E = i ? h : t, b = [], T = e, _ = null; T !== null; ) {
        var $ = T, U = $.stateNode, q = $.tag;
        if (q === V && U !== null && (_ = U, E !== null)) {
          var Q = al(T, E);
          Q != null && b.push(Vp(T, Q, _));
        }
        if (u)
          break;
        T = T.return;
      }
      return b;
    }
    function bm(e, t) {
      for (var a = t + "Capture", i = [], u = e; u !== null; ) {
        var f = u, h = f.stateNode, E = f.tag;
        if (E === V && h !== null) {
          var b = h, T = al(u, a);
          T != null && i.unshift(Vp(u, T, b));
          var _ = al(u, t);
          _ != null && i.push(Vp(u, _, b));
        }
        u = u.return;
      }
      return i;
    }
    function Of(e) {
      if (e === null)
        return null;
      do
        e = e.return;
      while (e && e.tag !== V);
      return e || null;
    }
    function C_(e, t) {
      for (var a = e, i = t, u = 0, f = a; f; f = Of(f))
        u++;
      for (var h = 0, E = i; E; E = Of(E))
        h++;
      for (; u - h > 0; )
        a = Of(a), u--;
      for (; h - u > 0; )
        i = Of(i), h--;
      for (var b = u; b--; ) {
        if (a === i || i !== null && a === i.alternate)
          return a;
        a = Of(a), i = Of(i);
      }
      return null;
    }
    function C1(e, t, a, i, u) {
      for (var f = t._reactName, h = [], E = a; E !== null && E !== i; ) {
        var b = E, T = b.alternate, _ = b.stateNode, $ = b.tag;
        if (T !== null && T === i)
          break;
        if ($ === V && _ !== null) {
          var U = _;
          if (u) {
            var q = al(E, f);
            q != null && h.unshift(Vp(E, q, U));
          } else if (!u) {
            var Q = al(E, f);
            Q != null && h.push(Vp(E, Q, U));
          }
        }
        E = E.return;
      }
      h.length !== 0 && e.push({
        event: t,
        listeners: h
      });
    }
    function x_(e, t, a, i, u) {
      var f = i && u ? C_(i, u) : null;
      i !== null && C1(e, t, i, f, !1), u !== null && a !== null && C1(e, a, u, f, !0);
    }
    function T_(e, t) {
      return e + "__" + (t ? "capture" : "bubble");
    }
    var Va = !1, Hp = "dangerouslySetInnerHTML", Cm = "suppressContentEditableWarning", ku = "suppressHydrationWarning", x1 = "autoFocus", $s = "children", Fs = "style", xm = "__html", k0, Tm, Ip, T1, Rm, R1, w1;
    k0 = {
      // There are working polyfills for <dialog>. Let people use it.
      dialog: !0,
      // Electron ships a custom <webview> tag to display external web content in
      // an isolated frame and process.
      // This tag is not present in non Electron environments such as JSDom which
      // is often used for testing purposes.
      // @see https://electronjs.org/docs/api/webview-tag
      webview: !0
    }, Tm = function(e, t) {
      wc(e, t), Fd(e, t), Lh(e, t, {
        registrationNameDependencies: He,
        possibleRegistrationNames: rt
      });
    }, R1 = mt && !document.documentMode, Ip = function(e, t, a) {
      if (!Va) {
        var i = wm(a), u = wm(t);
        u !== i && (Va = !0, m("Prop `%s` did not match. Server: %s Client: %s", e, JSON.stringify(u), JSON.stringify(i)));
      }
    }, T1 = function(e) {
      if (!Va) {
        Va = !0;
        var t = [];
        e.forEach(function(a) {
          t.push(a);
        }), m("Extra attributes from the server: %s", t);
      }
    }, Rm = function(e, t) {
      t === !1 ? m("Expected `%s` listener to be a function, instead got `false`.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.", e, e, e) : m("Expected `%s` listener to be a function, instead got a value of `%s` type.", e, typeof t);
    }, w1 = function(e, t) {
      var a = e.namespaceURI === Mi ? e.ownerDocument.createElement(e.tagName) : e.ownerDocument.createElementNS(e.namespaceURI, e.tagName);
      return a.innerHTML = t, a.innerHTML;
    };
    var R_ = /\r\n?/g, w_ = /\u0000|\uFFFD/g;
    function wm(e) {
      ca(e);
      var t = typeof e == "string" ? e : "" + e;
      return t.replace(R_, `
`).replace(w_, "");
    }
    function _m(e, t, a, i) {
      var u = wm(t), f = wm(e);
      if (f !== u && (i && (Va || (Va = !0, m('Text content did not match. Server: "%s" Client: "%s"', f, u))), a && Be))
        throw new Error("Text content does not match server-rendered HTML.");
    }
    function _1(e) {
      return e.nodeType === Ja ? e : e.ownerDocument;
    }
    function __() {
    }
    function km(e) {
      e.onclick = __;
    }
    function k_(e, t, a, i, u) {
      for (var f in i)
        if (i.hasOwnProperty(f)) {
          var h = i[f];
          if (f === Fs)
            h && Object.freeze(h), xh(t, h);
          else if (f === Hp) {
            var E = h ? h[xm] : void 0;
            E != null && dh(t, E);
          } else if (f === $s)
            if (typeof h == "string") {
              var b = e !== "textarea" || h !== "";
              b && Cc(t, h);
            } else
              typeof h == "number" && Cc(t, "" + h);
          else
            f === Cm || f === ku || f === x1 || (He.hasOwnProperty(f) ? h != null && (typeof h != "function" && Rm(f, h), f === "onScroll" && Cn("scroll", t)) : h != null && ci(t, f, h, u));
        }
    }
    function O_(e, t, a, i) {
      for (var u = 0; u < t.length; u += 2) {
        var f = t[u], h = t[u + 1];
        f === Fs ? xh(e, h) : f === Hp ? dh(e, h) : f === $s ? Cc(e, h) : ci(e, f, h, i);
      }
    }
    function D_(e, t, a, i) {
      var u, f = _1(a), h, E = i;
      if (E === Mi && (E = Ec(e)), E === Mi) {
        if (u = Ai(e, t), !u && e !== e.toLowerCase() && m("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.", e), e === "script") {
          var b = f.createElement("div");
          b.innerHTML = "<script><\/script>";
          var T = b.firstChild;
          h = b.removeChild(T);
        } else if (typeof t.is == "string")
          h = f.createElement(e, {
            is: t.is
          });
        else if (h = f.createElement(e), e === "select") {
          var _ = h;
          t.multiple ? _.multiple = !0 : t.size && (_.size = t.size);
        }
      } else
        h = f.createElementNS(E, e);
      return E === Mi && !u && Object.prototype.toString.call(h) === "[object HTMLUnknownElement]" && !Se.call(k0, e) && (k0[e] = !0, m("The tag <%s> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.", e)), h;
    }
    function N_(e, t) {
      return _1(t).createTextNode(e);
    }
    function M_(e, t, a, i) {
      var u = Ai(t, a);
      Tm(t, a);
      var f;
      switch (t) {
        case "dialog":
          Cn("cancel", e), Cn("close", e), f = a;
          break;
        case "iframe":
        case "object":
        case "embed":
          Cn("load", e), f = a;
          break;
        case "video":
        case "audio":
          for (var h = 0; h < $p.length; h++)
            Cn($p[h], e);
          f = a;
          break;
        case "source":
          Cn("error", e), f = a;
          break;
        case "img":
        case "image":
        case "link":
          Cn("error", e), Cn("load", e), f = a;
          break;
        case "details":
          Cn("toggle", e), f = a;
          break;
        case "input":
          rs(e, a), f = ns(e, a), Cn("invalid", e);
          break;
        case "option":
          gc(e, a), f = a;
          break;
        case "select":
          uh(e, a), f = Od(e, a), Cn("invalid", e);
          break;
        case "textarea":
          sh(e, a), f = Nd(e, a), Cn("invalid", e);
          break;
        default:
          f = a;
      }
      switch (Tc(t, f), k_(t, e, i, f, u), t) {
        case "input":
          Jo(e), as(e, a, !1);
          break;
        case "textarea":
          Jo(e), fh(e);
          break;
        case "option":
          kd(e, a);
          break;
        case "select":
          $g(e, a);
          break;
        default:
          typeof f.onClick == "function" && km(e);
          break;
      }
    }
    function L_(e, t, a, i, u) {
      Tm(t, i);
      var f = null, h, E;
      switch (t) {
        case "input":
          h = ns(e, a), E = ns(e, i), f = [];
          break;
        case "select":
          h = Od(e, a), E = Od(e, i), f = [];
          break;
        case "textarea":
          h = Nd(e, a), E = Nd(e, i), f = [];
          break;
        default:
          h = a, E = i, typeof h.onClick != "function" && typeof E.onClick == "function" && km(e);
          break;
      }
      Tc(t, E);
      var b, T, _ = null;
      for (b in h)
        if (!(E.hasOwnProperty(b) || !h.hasOwnProperty(b) || h[b] == null))
          if (b === Fs) {
            var $ = h[b];
            for (T in $)
              $.hasOwnProperty(T) && (_ || (_ = {}), _[T] = "");
          } else
            b === Hp || b === $s || b === Cm || b === ku || b === x1 || (He.hasOwnProperty(b) ? f || (f = []) : (f = f || []).push(b, null));
      for (b in E) {
        var U = E[b], q = h != null ? h[b] : void 0;
        if (!(!E.hasOwnProperty(b) || U === q || U == null && q == null))
          if (b === Fs)
            if (U && Object.freeze(U), q) {
              for (T in q)
                q.hasOwnProperty(T) && (!U || !U.hasOwnProperty(T)) && (_ || (_ = {}), _[T] = "");
              for (T in U)
                U.hasOwnProperty(T) && q[T] !== U[T] && (_ || (_ = {}), _[T] = U[T]);
            } else
              _ || (f || (f = []), f.push(b, _)), _ = U;
          else if (b === Hp) {
            var Q = U ? U[xm] : void 0, ee = q ? q[xm] : void 0;
            Q != null && ee !== Q && (f = f || []).push(b, Q);
          } else
            b === $s ? (typeof U == "string" || typeof U == "number") && (f = f || []).push(b, "" + U) : b === Cm || b === ku || (He.hasOwnProperty(b) ? (U != null && (typeof U != "function" && Rm(b, U), b === "onScroll" && Cn("scroll", e)), !f && q !== U && (f = [])) : (f = f || []).push(b, U));
      }
      return _ && (ls(_, E[Fs]), (f = f || []).push(Fs, _)), f;
    }
    function A_(e, t, a, i, u) {
      a === "input" && u.type === "radio" && u.name != null && _d(e, u);
      var f = Ai(a, i), h = Ai(a, u);
      switch (O_(e, t, f, h), a) {
        case "input":
          Kl(e, u);
          break;
        case "textarea":
          ch(e, u);
          break;
        case "select":
          Fg(e, u);
          break;
      }
    }
    function z_(e) {
      {
        var t = e.toLowerCase();
        return Rc.hasOwnProperty(t) && Rc[t] || null;
      }
    }
    function P_(e, t, a, i, u, f, h) {
      var E, b;
      switch (E = Ai(t, a), Tm(t, a), t) {
        case "dialog":
          Cn("cancel", e), Cn("close", e);
          break;
        case "iframe":
        case "object":
        case "embed":
          Cn("load", e);
          break;
        case "video":
        case "audio":
          for (var T = 0; T < $p.length; T++)
            Cn($p[T], e);
          break;
        case "source":
          Cn("error", e);
          break;
        case "img":
        case "image":
        case "link":
          Cn("error", e), Cn("load", e);
          break;
        case "details":
          Cn("toggle", e);
          break;
        case "input":
          rs(e, a), Cn("invalid", e);
          break;
        case "option":
          gc(e, a);
          break;
        case "select":
          uh(e, a), Cn("invalid", e);
          break;
        case "textarea":
          sh(e, a), Cn("invalid", e);
          break;
      }
      Tc(t, a);
      {
        b = /* @__PURE__ */ new Set();
        for (var _ = e.attributes, $ = 0; $ < _.length; $++) {
          var U = _[$].name.toLowerCase();
          switch (U) {
            case "value":
              break;
            case "checked":
              break;
            case "selected":
              break;
            default:
              b.add(_[$].name);
          }
        }
      }
      var q = null;
      for (var Q in a)
        if (a.hasOwnProperty(Q)) {
          var ee = a[Q];
          if (Q === $s)
            typeof ee == "string" ? e.textContent !== ee && (a[ku] !== !0 && _m(e.textContent, ee, f, h), q = [$s, ee]) : typeof ee == "number" && e.textContent !== "" + ee && (a[ku] !== !0 && _m(e.textContent, ee, f, h), q = [$s, "" + ee]);
          else if (He.hasOwnProperty(Q))
            ee != null && (typeof ee != "function" && Rm(Q, ee), Q === "onScroll" && Cn("scroll", e));
          else if (h && // Convince Flow we've calculated it (it's DEV-only in this method.)
          typeof E == "boolean") {
            var Ae = void 0, tt = E && Ve ? null : da(Q);
            if (a[ku] !== !0) {
              if (!(Q === Cm || Q === ku || // Controlled attributes are not validated
              // TODO: Only ignore them on controlled tags.
              Q === "value" || Q === "checked" || Q === "selected")) {
                if (Q === Hp) {
                  var Qe = e.innerHTML, Nt = ee ? ee[xm] : void 0;
                  if (Nt != null) {
                    var kt = w1(e, Nt);
                    kt !== Qe && Ip(Q, Qe, kt);
                  }
                } else if (Q === Fs) {
                  if (b.delete(Q), R1) {
                    var Y = qg(ee);
                    Ae = e.getAttribute("style"), Y !== Ae && Ip(Q, Ae, Y);
                  }
                } else if (E && !Ve)
                  b.delete(Q.toLowerCase()), Ae = Wl(e, Q, ee), ee !== Ae && Ip(Q, Ae, ee);
                else if (!Dn(Q, tt, E) && !an(Q, ee, tt, E)) {
                  var te = !1;
                  if (tt !== null)
                    b.delete(tt.attributeName), Ae = Ko(e, Q, ee, tt);
                  else {
                    var W = i;
                    if (W === Mi && (W = Ec(t)), W === Mi)
                      b.delete(Q.toLowerCase());
                    else {
                      var me = z_(Q);
                      me !== null && me !== Q && (te = !0, b.delete(me)), b.delete(Q);
                    }
                    Ae = Wl(e, Q, ee);
                  }
                  var ze = Ve;
                  !ze && ee !== Ae && !te && Ip(Q, Ae, ee);
                }
              }
            }
          }
        }
      switch (h && // $FlowFixMe - Should be inferred as not undefined.
      b.size > 0 && a[ku] !== !0 && T1(b), t) {
        case "input":
          Jo(e), as(e, a, !0);
          break;
        case "textarea":
          Jo(e), fh(e);
          break;
        case "select":
        case "option":
          break;
        default:
          typeof a.onClick == "function" && km(e);
          break;
      }
      return q;
    }
    function U_(e, t, a) {
      var i = e.nodeValue !== t;
      return i;
    }
    function O0(e, t) {
      {
        if (Va)
          return;
        Va = !0, m("Did not expect server HTML to contain a <%s> in <%s>.", t.nodeName.toLowerCase(), e.nodeName.toLowerCase());
      }
    }
    function D0(e, t) {
      {
        if (Va)
          return;
        Va = !0, m('Did not expect server HTML to contain the text node "%s" in <%s>.', t.nodeValue, e.nodeName.toLowerCase());
      }
    }
    function N0(e, t, a) {
      {
        if (Va)
          return;
        Va = !0, m("Expected server HTML to contain a matching <%s> in <%s>.", t, e.nodeName.toLowerCase());
      }
    }
    function M0(e, t) {
      {
        if (t === "" || Va)
          return;
        Va = !0, m('Expected server HTML to contain a matching text node for "%s" in <%s>.', t, e.nodeName.toLowerCase());
      }
    }
    function j_(e, t, a) {
      switch (t) {
        case "input":
          ah(e, a);
          return;
        case "textarea":
          Md(e, a);
          return;
        case "select":
          Vg(e, a);
          return;
      }
    }
    var Bp = function() {
    }, Yp = function() {
    };
    {
      var $_ = ["address", "applet", "area", "article", "aside", "base", "basefont", "bgsound", "blockquote", "body", "br", "button", "caption", "center", "col", "colgroup", "dd", "details", "dir", "div", "dl", "dt", "embed", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "iframe", "img", "input", "isindex", "li", "link", "listing", "main", "marquee", "menu", "menuitem", "meta", "nav", "noembed", "noframes", "noscript", "object", "ol", "p", "param", "plaintext", "pre", "script", "section", "select", "source", "style", "summary", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "title", "tr", "track", "ul", "wbr", "xmp"], k1 = [
        "applet",
        "caption",
        "html",
        "table",
        "td",
        "th",
        "marquee",
        "object",
        "template",
        // https://html.spec.whatwg.org/multipage/syntax.html#html-integration-point
        // TODO: Distinguish by namespace here -- for <title>, including it here
        // errs on the side of fewer warnings
        "foreignObject",
        "desc",
        "title"
      ], F_ = k1.concat(["button"]), V_ = ["dd", "dt", "li", "option", "optgroup", "p", "rp", "rt"], O1 = {
        current: null,
        formTag: null,
        aTagInScope: null,
        buttonTagInScope: null,
        nobrTagInScope: null,
        pTagInButtonScope: null,
        listItemTagAutoclosing: null,
        dlItemTagAutoclosing: null
      };
      Yp = function(e, t) {
        var a = wt({}, e || O1), i = {
          tag: t
        };
        return k1.indexOf(t) !== -1 && (a.aTagInScope = null, a.buttonTagInScope = null, a.nobrTagInScope = null), F_.indexOf(t) !== -1 && (a.pTagInButtonScope = null), $_.indexOf(t) !== -1 && t !== "address" && t !== "div" && t !== "p" && (a.listItemTagAutoclosing = null, a.dlItemTagAutoclosing = null), a.current = i, t === "form" && (a.formTag = i), t === "a" && (a.aTagInScope = i), t === "button" && (a.buttonTagInScope = i), t === "nobr" && (a.nobrTagInScope = i), t === "p" && (a.pTagInButtonScope = i), t === "li" && (a.listItemTagAutoclosing = i), (t === "dd" || t === "dt") && (a.dlItemTagAutoclosing = i), a;
      };
      var H_ = function(e, t) {
        switch (t) {
          case "select":
            return e === "option" || e === "optgroup" || e === "#text";
          case "optgroup":
            return e === "option" || e === "#text";
          case "option":
            return e === "#text";
          case "tr":
            return e === "th" || e === "td" || e === "style" || e === "script" || e === "template";
          case "tbody":
          case "thead":
          case "tfoot":
            return e === "tr" || e === "style" || e === "script" || e === "template";
          case "colgroup":
            return e === "col" || e === "template";
          case "table":
            return e === "caption" || e === "colgroup" || e === "tbody" || e === "tfoot" || e === "thead" || e === "style" || e === "script" || e === "template";
          case "head":
            return e === "base" || e === "basefont" || e === "bgsound" || e === "link" || e === "meta" || e === "title" || e === "noscript" || e === "noframes" || e === "style" || e === "script" || e === "template";
          case "html":
            return e === "head" || e === "body" || e === "frameset";
          case "frameset":
            return e === "frame";
          case "#document":
            return e === "html";
        }
        switch (e) {
          case "h1":
          case "h2":
          case "h3":
          case "h4":
          case "h5":
          case "h6":
            return t !== "h1" && t !== "h2" && t !== "h3" && t !== "h4" && t !== "h5" && t !== "h6";
          case "rp":
          case "rt":
            return V_.indexOf(t) === -1;
          case "body":
          case "caption":
          case "col":
          case "colgroup":
          case "frameset":
          case "frame":
          case "head":
          case "html":
          case "tbody":
          case "td":
          case "tfoot":
          case "th":
          case "thead":
          case "tr":
            return t == null;
        }
        return !0;
      }, I_ = function(e, t) {
        switch (e) {
          case "address":
          case "article":
          case "aside":
          case "blockquote":
          case "center":
          case "details":
          case "dialog":
          case "dir":
          case "div":
          case "dl":
          case "fieldset":
          case "figcaption":
          case "figure":
          case "footer":
          case "header":
          case "hgroup":
          case "main":
          case "menu":
          case "nav":
          case "ol":
          case "p":
          case "section":
          case "summary":
          case "ul":
          case "pre":
          case "listing":
          case "table":
          case "hr":
          case "xmp":
          case "h1":
          case "h2":
          case "h3":
          case "h4":
          case "h5":
          case "h6":
            return t.pTagInButtonScope;
          case "form":
            return t.formTag || t.pTagInButtonScope;
          case "li":
            return t.listItemTagAutoclosing;
          case "dd":
          case "dt":
            return t.dlItemTagAutoclosing;
          case "button":
            return t.buttonTagInScope;
          case "a":
            return t.aTagInScope;
          case "nobr":
            return t.nobrTagInScope;
        }
        return null;
      }, D1 = {};
      Bp = function(e, t, a) {
        a = a || O1;
        var i = a.current, u = i && i.tag;
        t != null && (e != null && m("validateDOMNesting: when childText is passed, childTag should be null"), e = "#text");
        var f = H_(e, u) ? null : i, h = f ? null : I_(e, a), E = f || h;
        if (E) {
          var b = E.tag, T = !!f + "|" + e + "|" + b;
          if (!D1[T]) {
            D1[T] = !0;
            var _ = e, $ = "";
            if (e === "#text" ? /\S/.test(t) ? _ = "Text nodes" : (_ = "Whitespace text nodes", $ = " Make sure you don't have any extra whitespace between tags on each line of your source code.") : _ = "<" + e + ">", f) {
              var U = "";
              b === "table" && e === "tr" && (U += " Add a <tbody>, <thead> or <tfoot> to your code to match the DOM tree generated by the browser."), m("validateDOMNesting(...): %s cannot appear as a child of <%s>.%s%s", _, b, $, U);
            } else
              m("validateDOMNesting(...): %s cannot appear as a descendant of <%s>.", _, b);
          }
        }
      };
    }
    var Om = "suppressHydrationWarning", Dm = "$", Nm = "/$", Wp = "$?", Gp = "$!", B_ = "style", L0 = null, A0 = null;
    function Y_(e) {
      var t, a, i = e.nodeType;
      switch (i) {
        case Ja:
        case el: {
          t = i === Ja ? "#document" : "#fragment";
          var u = e.documentElement;
          a = u ? u.namespaceURI : Ad(null, "");
          break;
        }
        default: {
          var f = i === zn ? e.parentNode : e, h = f.namespaceURI || null;
          t = f.tagName, a = Ad(h, t);
          break;
        }
      }
      {
        var E = t.toLowerCase(), b = Yp(null, E);
        return {
          namespace: a,
          ancestorInfo: b
        };
      }
    }
    function W_(e, t, a) {
      {
        var i = e, u = Ad(i.namespace, t), f = Yp(i.ancestorInfo, t);
        return {
          namespace: u,
          ancestorInfo: f
        };
      }
    }
    function a3(e) {
      return e;
    }
    function G_(e) {
      L0 = Ea(), A0 = l_();
      var t = null;
      return ar(!1), t;
    }
    function q_(e) {
      u_(A0), ar(L0), L0 = null, A0 = null;
    }
    function Q_(e, t, a, i, u) {
      var f;
      {
        var h = i;
        if (Bp(e, null, h.ancestorInfo), typeof t.children == "string" || typeof t.children == "number") {
          var E = "" + t.children, b = Yp(h.ancestorInfo, e);
          Bp(null, E, b);
        }
        f = h.namespace;
      }
      var T = D_(e, t, a, f);
      return Kp(u, T), H0(T, t), T;
    }
    function K_(e, t) {
      e.appendChild(t);
    }
    function X_(e, t, a, i, u) {
      switch (M_(e, t, a, i), t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          return !!a.autoFocus;
        case "img":
          return !0;
        default:
          return !1;
      }
    }
    function Z_(e, t, a, i, u, f) {
      {
        var h = f;
        if (typeof i.children != typeof a.children && (typeof i.children == "string" || typeof i.children == "number")) {
          var E = "" + i.children, b = Yp(h.ancestorInfo, t);
          Bp(null, E, b);
        }
      }
      return L_(e, t, a, i);
    }
    function z0(e, t) {
      return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
    }
    function J_(e, t, a, i) {
      {
        var u = a;
        Bp(null, e, u.ancestorInfo);
      }
      var f = N_(e, t);
      return Kp(i, f), f;
    }
    function ek() {
      var e = window.event;
      return e === void 0 ? Hi : Mr(e.type);
    }
    var P0 = typeof setTimeout == "function" ? setTimeout : void 0, tk = typeof clearTimeout == "function" ? clearTimeout : void 0, U0 = -1, N1 = typeof Promise == "function" ? Promise : void 0, nk = typeof queueMicrotask == "function" ? queueMicrotask : typeof N1 < "u" ? function(e) {
      return N1.resolve(null).then(e).catch(rk);
    } : P0;
    function rk(e) {
      setTimeout(function() {
        throw e;
      });
    }
    function ak(e, t, a, i) {
      switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          a.autoFocus && e.focus();
          return;
        case "img": {
          a.src && (e.src = a.src);
          return;
        }
      }
    }
    function ik(e, t, a, i, u, f) {
      A_(e, t, a, i, u), H0(e, u);
    }
    function M1(e) {
      Cc(e, "");
    }
    function ok(e, t, a) {
      e.nodeValue = a;
    }
    function lk(e, t) {
      e.appendChild(t);
    }
    function uk(e, t) {
      var a;
      e.nodeType === zn ? (a = e.parentNode, a.insertBefore(t, e)) : (a = e, a.appendChild(t));
      var i = e._reactRootContainer;
      i == null && a.onclick === null && km(a);
    }
    function sk(e, t, a) {
      e.insertBefore(t, a);
    }
    function ck(e, t, a) {
      e.nodeType === zn ? e.parentNode.insertBefore(t, a) : e.insertBefore(t, a);
    }
    function fk(e, t) {
      e.removeChild(t);
    }
    function dk(e, t) {
      e.nodeType === zn ? e.parentNode.removeChild(t) : e.removeChild(t);
    }
    function j0(e, t) {
      var a = t, i = 0;
      do {
        var u = a.nextSibling;
        if (e.removeChild(a), u && u.nodeType === zn) {
          var f = u.data;
          if (f === Nm)
            if (i === 0) {
              e.removeChild(u), _t(t);
              return;
            } else
              i--;
          else
            (f === Dm || f === Wp || f === Gp) && i++;
        }
        a = u;
      } while (a);
      _t(t);
    }
    function pk(e, t) {
      e.nodeType === zn ? j0(e.parentNode, t) : e.nodeType === Gr && j0(e, t), _t(e);
    }
    function vk(e) {
      e = e;
      var t = e.style;
      typeof t.setProperty == "function" ? t.setProperty("display", "none", "important") : t.display = "none";
    }
    function hk(e) {
      e.nodeValue = "";
    }
    function mk(e, t) {
      e = e;
      var a = t[B_], i = a != null && a.hasOwnProperty("display") ? a.display : null;
      e.style.display = xc("display", i);
    }
    function yk(e, t) {
      e.nodeValue = t;
    }
    function gk(e) {
      e.nodeType === Gr ? e.textContent = "" : e.nodeType === Ja && e.documentElement && e.removeChild(e.documentElement);
    }
    function Sk(e, t, a) {
      return e.nodeType !== Gr || t.toLowerCase() !== e.nodeName.toLowerCase() ? null : e;
    }
    function Ek(e, t) {
      return t === "" || e.nodeType !== Li ? null : e;
    }
    function bk(e) {
      return e.nodeType !== zn ? null : e;
    }
    function L1(e) {
      return e.data === Wp;
    }
    function $0(e) {
      return e.data === Gp;
    }
    function Ck(e) {
      var t = e.nextSibling && e.nextSibling.dataset, a, i, u;
      return t && (a = t.dgst, i = t.msg, u = t.stck), {
        message: i,
        digest: a,
        stack: u
      };
    }
    function xk(e, t) {
      e._reactRetry = t;
    }
    function Mm(e) {
      for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === Gr || t === Li)
          break;
        if (t === zn) {
          var a = e.data;
          if (a === Dm || a === Gp || a === Wp)
            break;
          if (a === Nm)
            return null;
        }
      }
      return e;
    }
    function qp(e) {
      return Mm(e.nextSibling);
    }
    function Tk(e) {
      return Mm(e.firstChild);
    }
    function Rk(e) {
      return Mm(e.firstChild);
    }
    function wk(e) {
      return Mm(e.nextSibling);
    }
    function _k(e, t, a, i, u, f, h) {
      Kp(f, e), H0(e, a);
      var E;
      {
        var b = u;
        E = b.namespace;
      }
      var T = (f.mode & Tt) !== it;
      return P_(e, t, a, E, i, T, h);
    }
    function kk(e, t, a, i) {
      return Kp(a, e), a.mode & Tt, U_(e, t);
    }
    function Ok(e, t) {
      Kp(t, e);
    }
    function Dk(e) {
      for (var t = e.nextSibling, a = 0; t; ) {
        if (t.nodeType === zn) {
          var i = t.data;
          if (i === Nm) {
            if (a === 0)
              return qp(t);
            a--;
          } else
            (i === Dm || i === Gp || i === Wp) && a++;
        }
        t = t.nextSibling;
      }
      return null;
    }
    function A1(e) {
      for (var t = e.previousSibling, a = 0; t; ) {
        if (t.nodeType === zn) {
          var i = t.data;
          if (i === Dm || i === Gp || i === Wp) {
            if (a === 0)
              return t;
            a--;
          } else
            i === Nm && a++;
        }
        t = t.previousSibling;
      }
      return null;
    }
    function Nk(e) {
      _t(e);
    }
    function Mk(e) {
      _t(e);
    }
    function Lk(e) {
      return e !== "head" && e !== "body";
    }
    function Ak(e, t, a, i) {
      var u = !0;
      _m(t.nodeValue, a, i, u);
    }
    function zk(e, t, a, i, u, f) {
      if (t[Om] !== !0) {
        var h = !0;
        _m(i.nodeValue, u, f, h);
      }
    }
    function Pk(e, t) {
      t.nodeType === Gr ? O0(e, t) : t.nodeType === zn || D0(e, t);
    }
    function Uk(e, t) {
      {
        var a = e.parentNode;
        a !== null && (t.nodeType === Gr ? O0(a, t) : t.nodeType === zn || D0(a, t));
      }
    }
    function jk(e, t, a, i, u) {
      (u || t[Om] !== !0) && (i.nodeType === Gr ? O0(a, i) : i.nodeType === zn || D0(a, i));
    }
    function $k(e, t, a) {
      N0(e, t);
    }
    function Fk(e, t) {
      M0(e, t);
    }
    function Vk(e, t, a) {
      {
        var i = e.parentNode;
        i !== null && N0(i, t);
      }
    }
    function Hk(e, t) {
      {
        var a = e.parentNode;
        a !== null && M0(a, t);
      }
    }
    function Ik(e, t, a, i, u, f) {
      (f || t[Om] !== !0) && N0(a, i);
    }
    function Bk(e, t, a, i, u) {
      (u || t[Om] !== !0) && M0(a, i);
    }
    function Yk(e) {
      m("An error occurred during hydration. The server HTML was replaced with client content in <%s>.", e.nodeName.toLowerCase());
    }
    function Wk(e) {
      Fp(e);
    }
    var Df = Math.random().toString(36).slice(2), Nf = "__reactFiber$" + Df, F0 = "__reactProps$" + Df, Qp = "__reactContainer$" + Df, V0 = "__reactEvents$" + Df, Gk = "__reactListeners$" + Df, qk = "__reactHandles$" + Df;
    function Qk(e) {
      delete e[Nf], delete e[F0], delete e[V0], delete e[Gk], delete e[qk];
    }
    function Kp(e, t) {
      t[Nf] = e;
    }
    function Lm(e, t) {
      t[Qp] = e;
    }
    function z1(e) {
      e[Qp] = null;
    }
    function Xp(e) {
      return !!e[Qp];
    }
    function Vs(e) {
      var t = e[Nf];
      if (t)
        return t;
      for (var a = e.parentNode; a; ) {
        if (t = a[Qp] || a[Nf], t) {
          var i = t.alternate;
          if (t.child !== null || i !== null && i.child !== null)
            for (var u = A1(e); u !== null; ) {
              var f = u[Nf];
              if (f)
                return f;
              u = A1(u);
            }
          return t;
        }
        e = a, a = e.parentNode;
      }
      return null;
    }
    function Ou(e) {
      var t = e[Nf] || e[Qp];
      return t && (t.tag === V || t.tag === F || t.tag === D || t.tag === N) ? t : null;
    }
    function Mf(e) {
      if (e.tag === V || e.tag === F)
        return e.stateNode;
      throw new Error("getNodeFromInstance: Invalid argument.");
    }
    function Am(e) {
      return e[F0] || null;
    }
    function H0(e, t) {
      e[F0] = t;
    }
    function Kk(e) {
      var t = e[V0];
      return t === void 0 && (t = e[V0] = /* @__PURE__ */ new Set()), t;
    }
    var P1 = {}, U1 = d.ReactDebugCurrentFrame;
    function zm(e) {
      if (e) {
        var t = e._owner, a = Ku(e.type, e._source, t ? t.type : null);
        U1.setExtraStackFrame(a);
      } else
        U1.setExtraStackFrame(null);
    }
    function Gi(e, t, a, i, u) {
      {
        var f = Function.call.bind(Se);
        for (var h in e)
          if (f(e, h)) {
            var E = void 0;
            try {
              if (typeof e[h] != "function") {
                var b = Error((i || "React class") + ": " + a + " type `" + h + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[h] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw b.name = "Invariant Violation", b;
              }
              E = e[h](t, h, i, a, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (T) {
              E = T;
            }
            E && !(E instanceof Error) && (zm(u), m("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", i || "React class", a, h, typeof E), zm(null)), E instanceof Error && !(E.message in P1) && (P1[E.message] = !0, zm(u), m("Failed %s type: %s", a, E.message), zm(null));
          }
      }
    }
    var I0 = [], Pm;
    Pm = [];
    var kl = -1;
    function Du(e) {
      return {
        current: e
      };
    }
    function na(e, t) {
      if (kl < 0) {
        m("Unexpected pop.");
        return;
      }
      t !== Pm[kl] && m("Unexpected Fiber popped."), e.current = I0[kl], I0[kl] = null, Pm[kl] = null, kl--;
    }
    function ra(e, t, a) {
      kl++, I0[kl] = e.current, Pm[kl] = a, e.current = t;
    }
    var B0;
    B0 = {};
    var ai = {};
    Object.freeze(ai);
    var Ol = Du(ai), zo = Du(!1), Y0 = ai;
    function Lf(e, t, a) {
      return a && Po(t) ? Y0 : Ol.current;
    }
    function j1(e, t, a) {
      {
        var i = e.stateNode;
        i.__reactInternalMemoizedUnmaskedChildContext = t, i.__reactInternalMemoizedMaskedChildContext = a;
      }
    }
    function Af(e, t) {
      {
        var a = e.type, i = a.contextTypes;
        if (!i)
          return ai;
        var u = e.stateNode;
        if (u && u.__reactInternalMemoizedUnmaskedChildContext === t)
          return u.__reactInternalMemoizedMaskedChildContext;
        var f = {};
        for (var h in i)
          f[h] = t[h];
        {
          var E = yt(e) || "Unknown";
          Gi(i, f, "context", E);
        }
        return u && j1(e, t, f), f;
      }
    }
    function Um() {
      return zo.current;
    }
    function Po(e) {
      {
        var t = e.childContextTypes;
        return t != null;
      }
    }
    function jm(e) {
      na(zo, e), na(Ol, e);
    }
    function W0(e) {
      na(zo, e), na(Ol, e);
    }
    function $1(e, t, a) {
      {
        if (Ol.current !== ai)
          throw new Error("Unexpected context found on stack. This error is likely caused by a bug in React. Please file an issue.");
        ra(Ol, t, e), ra(zo, a, e);
      }
    }
    function F1(e, t, a) {
      {
        var i = e.stateNode, u = t.childContextTypes;
        if (typeof i.getChildContext != "function") {
          {
            var f = yt(e) || "Unknown";
            B0[f] || (B0[f] = !0, m("%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.", f, f));
          }
          return a;
        }
        var h = i.getChildContext();
        for (var E in h)
          if (!(E in u))
            throw new Error((yt(e) || "Unknown") + '.getChildContext(): key "' + E + '" is not defined in childContextTypes.');
        {
          var b = yt(e) || "Unknown";
          Gi(u, h, "child context", b);
        }
        return wt({}, a, h);
      }
    }
    function $m(e) {
      {
        var t = e.stateNode, a = t && t.__reactInternalMemoizedMergedChildContext || ai;
        return Y0 = Ol.current, ra(Ol, a, e), ra(zo, zo.current, e), !0;
      }
    }
    function V1(e, t, a) {
      {
        var i = e.stateNode;
        if (!i)
          throw new Error("Expected to have an instance by this point. This error is likely caused by a bug in React. Please file an issue.");
        if (a) {
          var u = F1(e, t, Y0);
          i.__reactInternalMemoizedMergedChildContext = u, na(zo, e), na(Ol, e), ra(Ol, u, e), ra(zo, a, e);
        } else
          na(zo, e), ra(zo, a, e);
      }
    }
    function Xk(e) {
      {
        if (!ep(e) || e.tag !== k)
          throw new Error("Expected subtree parent to be a mounted class component. This error is likely caused by a bug in React. Please file an issue.");
        var t = e;
        do {
          switch (t.tag) {
            case N:
              return t.stateNode.context;
            case k: {
              var a = t.type;
              if (Po(a))
                return t.stateNode.__reactInternalMemoizedMergedChildContext;
              break;
            }
          }
          t = t.return;
        } while (t !== null);
        throw new Error("Found unexpected detached subtree parent. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    var Nu = 0, Fm = 1, Dl = null, G0 = !1, q0 = !1;
    function H1(e) {
      Dl === null ? Dl = [e] : Dl.push(e);
    }
    function Zk(e) {
      G0 = !0, H1(e);
    }
    function I1() {
      G0 && Mu();
    }
    function Mu() {
      if (!q0 && Dl !== null) {
        q0 = !0;
        var e = 0, t = Ua();
        try {
          var a = !0, i = Dl;
          for (Yn(br); e < i.length; e++) {
            var u = i[e];
            do
              u = u(a);
            while (u !== null);
          }
          Dl = null, G0 = !1;
        } catch (f) {
          throw Dl !== null && (Dl = Dl.slice(e + 1)), Ac(Pc, Mu), f;
        } finally {
          Yn(t), q0 = !1;
        }
      }
      return null;
    }
    var zf = [], Pf = 0, Vm = null, Hm = 0, Si = [], Ei = 0, Hs = null, Nl = 1, Ml = "";
    function Jk(e) {
      return Bs(), (e.flags & Xd) !== et;
    }
    function eO(e) {
      return Bs(), Hm;
    }
    function tO() {
      var e = Ml, t = Nl, a = t & ~nO(t);
      return a.toString(32) + e;
    }
    function Is(e, t) {
      Bs(), zf[Pf++] = Hm, zf[Pf++] = Vm, Vm = e, Hm = t;
    }
    function B1(e, t, a) {
      Bs(), Si[Ei++] = Nl, Si[Ei++] = Ml, Si[Ei++] = Hs, Hs = e;
      var i = Nl, u = Ml, f = Im(i) - 1, h = i & ~(1 << f), E = a + 1, b = Im(t) + f;
      if (b > 30) {
        var T = f - f % 5, _ = (1 << T) - 1, $ = (h & _).toString(32), U = h >> T, q = f - T, Q = Im(t) + q, ee = E << q, Ae = ee | U, tt = $ + u;
        Nl = 1 << Q | Ae, Ml = tt;
      } else {
        var Qe = E << f, Nt = Qe | h, kt = u;
        Nl = 1 << b | Nt, Ml = kt;
      }
    }
    function Q0(e) {
      Bs();
      var t = e.return;
      if (t !== null) {
        var a = 1, i = 0;
        Is(e, a), B1(e, a, i);
      }
    }
    function Im(e) {
      return 32 - Hc(e);
    }
    function nO(e) {
      return 1 << Im(e) - 1;
    }
    function K0(e) {
      for (; e === Vm; )
        Vm = zf[--Pf], zf[Pf] = null, Hm = zf[--Pf], zf[Pf] = null;
      for (; e === Hs; )
        Hs = Si[--Ei], Si[Ei] = null, Ml = Si[--Ei], Si[Ei] = null, Nl = Si[--Ei], Si[Ei] = null;
    }
    function rO() {
      return Bs(), Hs !== null ? {
        id: Nl,
        overflow: Ml
      } : null;
    }
    function aO(e, t) {
      Bs(), Si[Ei++] = Nl, Si[Ei++] = Ml, Si[Ei++] = Hs, Nl = t.id, Ml = t.overflow, Hs = e;
    }
    function Bs() {
      Ar() || m("Expected to be hydrating. This is a bug in React. Please file an issue.");
    }
    var Lr = null, bi = null, qi = !1, Ys = !1, Lu = null;
    function iO() {
      qi && m("We should not be hydrating here. This is a bug in React. Please file a bug.");
    }
    function Y1() {
      Ys = !0;
    }
    function oO() {
      return Ys;
    }
    function lO(e) {
      var t = e.stateNode.containerInfo;
      return bi = Rk(t), Lr = e, qi = !0, Lu = null, Ys = !1, !0;
    }
    function uO(e, t, a) {
      return bi = wk(t), Lr = e, qi = !0, Lu = null, Ys = !1, a !== null && aO(e, a), !0;
    }
    function W1(e, t) {
      switch (e.tag) {
        case N: {
          Pk(e.stateNode.containerInfo, t);
          break;
        }
        case V: {
          var a = (e.mode & Tt) !== it;
          jk(
            e.type,
            e.memoizedProps,
            e.stateNode,
            t,
            // TODO: Delete this argument when we remove the legacy root API.
            a
          );
          break;
        }
        case D: {
          var i = e.memoizedState;
          i.dehydrated !== null && Uk(i.dehydrated, t);
          break;
        }
      }
    }
    function G1(e, t) {
      W1(e, t);
      var a = fM();
      a.stateNode = t, a.return = e;
      var i = e.deletions;
      i === null ? (e.deletions = [a], e.flags |= Ut) : i.push(a);
    }
    function X0(e, t) {
      {
        if (Ys)
          return;
        switch (e.tag) {
          case N: {
            var a = e.stateNode.containerInfo;
            switch (t.tag) {
              case V:
                var i = t.type;
                t.pendingProps, $k(a, i);
                break;
              case F:
                var u = t.pendingProps;
                Fk(a, u);
                break;
            }
            break;
          }
          case V: {
            var f = e.type, h = e.memoizedProps, E = e.stateNode;
            switch (t.tag) {
              case V: {
                var b = t.type, T = t.pendingProps, _ = (e.mode & Tt) !== it;
                Ik(
                  f,
                  h,
                  E,
                  b,
                  T,
                  // TODO: Delete this argument when we remove the legacy root API.
                  _
                );
                break;
              }
              case F: {
                var $ = t.pendingProps, U = (e.mode & Tt) !== it;
                Bk(
                  f,
                  h,
                  E,
                  $,
                  // TODO: Delete this argument when we remove the legacy root API.
                  U
                );
                break;
              }
            }
            break;
          }
          case D: {
            var q = e.memoizedState, Q = q.dehydrated;
            if (Q !== null)
              switch (t.tag) {
                case V:
                  var ee = t.type;
                  t.pendingProps, Vk(Q, ee);
                  break;
                case F:
                  var Ae = t.pendingProps;
                  Hk(Q, Ae);
                  break;
              }
            break;
          }
          default:
            return;
        }
      }
    }
    function q1(e, t) {
      t.flags = t.flags & ~Ma | ln, X0(e, t);
    }
    function Q1(e, t) {
      switch (e.tag) {
        case V: {
          var a = e.type;
          e.pendingProps;
          var i = Sk(t, a);
          return i !== null ? (e.stateNode = i, Lr = e, bi = Tk(i), !0) : !1;
        }
        case F: {
          var u = e.pendingProps, f = Ek(t, u);
          return f !== null ? (e.stateNode = f, Lr = e, bi = null, !0) : !1;
        }
        case D: {
          var h = bk(t);
          if (h !== null) {
            var E = {
              dehydrated: h,
              treeContext: rO(),
              retryLane: ea
            };
            e.memoizedState = E;
            var b = dM(h);
            return b.return = e, e.child = b, Lr = e, bi = null, !0;
          }
          return !1;
        }
        default:
          return !1;
      }
    }
    function Z0(e) {
      return (e.mode & Tt) !== it && (e.flags & dt) === et;
    }
    function J0(e) {
      throw new Error("Hydration failed because the initial UI does not match what was rendered on the server.");
    }
    function eS(e) {
      if (qi) {
        var t = bi;
        if (!t) {
          Z0(e) && (X0(Lr, e), J0()), q1(Lr, e), qi = !1, Lr = e;
          return;
        }
        var a = t;
        if (!Q1(e, t)) {
          Z0(e) && (X0(Lr, e), J0()), t = qp(a);
          var i = Lr;
          if (!t || !Q1(e, t)) {
            q1(Lr, e), qi = !1, Lr = e;
            return;
          }
          G1(i, a);
        }
      }
    }
    function sO(e, t, a) {
      var i = e.stateNode, u = !Ys, f = _k(i, e.type, e.memoizedProps, t, a, e, u);
      return e.updateQueue = f, f !== null;
    }
    function cO(e) {
      var t = e.stateNode, a = e.memoizedProps, i = kk(t, a, e);
      if (i) {
        var u = Lr;
        if (u !== null)
          switch (u.tag) {
            case N: {
              var f = u.stateNode.containerInfo, h = (u.mode & Tt) !== it;
              Ak(
                f,
                t,
                a,
                // TODO: Delete this argument when we remove the legacy root API.
                h
              );
              break;
            }
            case V: {
              var E = u.type, b = u.memoizedProps, T = u.stateNode, _ = (u.mode & Tt) !== it;
              zk(
                E,
                b,
                T,
                t,
                a,
                // TODO: Delete this argument when we remove the legacy root API.
                _
              );
              break;
            }
          }
      }
      return i;
    }
    function fO(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      Ok(a, e);
    }
    function dO(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      return Dk(a);
    }
    function K1(e) {
      for (var t = e.return; t !== null && t.tag !== V && t.tag !== N && t.tag !== D; )
        t = t.return;
      Lr = t;
    }
    function Bm(e) {
      if (e !== Lr)
        return !1;
      if (!qi)
        return K1(e), qi = !0, !1;
      if (e.tag !== N && (e.tag !== V || Lk(e.type) && !z0(e.type, e.memoizedProps))) {
        var t = bi;
        if (t)
          if (Z0(e))
            X1(e), J0();
          else
            for (; t; )
              G1(e, t), t = qp(t);
      }
      return K1(e), e.tag === D ? bi = dO(e) : bi = Lr ? qp(e.stateNode) : null, !0;
    }
    function pO() {
      return qi && bi !== null;
    }
    function X1(e) {
      for (var t = bi; t; )
        W1(e, t), t = qp(t);
    }
    function Uf() {
      Lr = null, bi = null, qi = !1, Ys = !1;
    }
    function Z1() {
      Lu !== null && (Wx(Lu), Lu = null);
    }
    function Ar() {
      return qi;
    }
    function tS(e) {
      Lu === null ? Lu = [e] : Lu.push(e);
    }
    var vO = d.ReactCurrentBatchConfig, hO = null;
    function mO() {
      return vO.transition;
    }
    var Qi = {
      recordUnsafeLifecycleWarnings: function(e, t) {
      },
      flushPendingUnsafeLifecycleWarnings: function() {
      },
      recordLegacyContextWarning: function(e, t) {
      },
      flushLegacyContextWarning: function() {
      },
      discardPendingWarnings: function() {
      }
    };
    {
      var yO = function(e) {
        for (var t = null, a = e; a !== null; )
          a.mode & En && (t = a), a = a.return;
        return t;
      }, Ws = function(e) {
        var t = [];
        return e.forEach(function(a) {
          t.push(a);
        }), t.sort().join(", ");
      }, Zp = [], Jp = [], ev = [], tv = [], nv = [], rv = [], Gs = /* @__PURE__ */ new Set();
      Qi.recordUnsafeLifecycleWarnings = function(e, t) {
        Gs.has(e.type) || (typeof t.componentWillMount == "function" && // Don't warn about react-lifecycles-compat polyfilled components.
        t.componentWillMount.__suppressDeprecationWarning !== !0 && Zp.push(e), e.mode & En && typeof t.UNSAFE_componentWillMount == "function" && Jp.push(e), typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps.__suppressDeprecationWarning !== !0 && ev.push(e), e.mode & En && typeof t.UNSAFE_componentWillReceiveProps == "function" && tv.push(e), typeof t.componentWillUpdate == "function" && t.componentWillUpdate.__suppressDeprecationWarning !== !0 && nv.push(e), e.mode & En && typeof t.UNSAFE_componentWillUpdate == "function" && rv.push(e));
      }, Qi.flushPendingUnsafeLifecycleWarnings = function() {
        var e = /* @__PURE__ */ new Set();
        Zp.length > 0 && (Zp.forEach(function(U) {
          e.add(yt(U) || "Component"), Gs.add(U.type);
        }), Zp = []);
        var t = /* @__PURE__ */ new Set();
        Jp.length > 0 && (Jp.forEach(function(U) {
          t.add(yt(U) || "Component"), Gs.add(U.type);
        }), Jp = []);
        var a = /* @__PURE__ */ new Set();
        ev.length > 0 && (ev.forEach(function(U) {
          a.add(yt(U) || "Component"), Gs.add(U.type);
        }), ev = []);
        var i = /* @__PURE__ */ new Set();
        tv.length > 0 && (tv.forEach(function(U) {
          i.add(yt(U) || "Component"), Gs.add(U.type);
        }), tv = []);
        var u = /* @__PURE__ */ new Set();
        nv.length > 0 && (nv.forEach(function(U) {
          u.add(yt(U) || "Component"), Gs.add(U.type);
        }), nv = []);
        var f = /* @__PURE__ */ new Set();
        if (rv.length > 0 && (rv.forEach(function(U) {
          f.add(yt(U) || "Component"), Gs.add(U.type);
        }), rv = []), t.size > 0) {
          var h = Ws(t);
          m(`Using UNSAFE_componentWillMount in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.

Please update the following components: %s`, h);
        }
        if (i.size > 0) {
          var E = Ws(i);
          m(`Using UNSAFE_componentWillReceiveProps in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state

Please update the following components: %s`, E);
        }
        if (f.size > 0) {
          var b = Ws(f);
          m(`Using UNSAFE_componentWillUpdate in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.

Please update the following components: %s`, b);
        }
        if (e.size > 0) {
          var T = Ws(e);
          S(`componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.
* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, T);
        }
        if (a.size > 0) {
          var _ = Ws(a);
          S(`componentWillReceiveProps has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state
* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, _);
        }
        if (u.size > 0) {
          var $ = Ws(u);
          S(`componentWillUpdate has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, $);
        }
      };
      var Ym = /* @__PURE__ */ new Map(), J1 = /* @__PURE__ */ new Set();
      Qi.recordLegacyContextWarning = function(e, t) {
        var a = yO(e);
        if (a === null) {
          m("Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue.");
          return;
        }
        if (!J1.has(e.type)) {
          var i = Ym.get(a);
          (e.type.contextTypes != null || e.type.childContextTypes != null || t !== null && typeof t.getChildContext == "function") && (i === void 0 && (i = [], Ym.set(a, i)), i.push(e));
        }
      }, Qi.flushLegacyContextWarning = function() {
        Ym.forEach(function(e, t) {
          if (e.length !== 0) {
            var a = e[0], i = /* @__PURE__ */ new Set();
            e.forEach(function(f) {
              i.add(yt(f) || "Component"), J1.add(f.type);
            });
            var u = Ws(i);
            try {
              Yt(a), m(`Legacy context API has been detected within a strict-mode tree.

The old API will be supported in all 16.x releases, but applications using it should migrate to the new version.

Please update the following components: %s

Learn more about this warning here: https://reactjs.org/link/legacy-context`, u);
            } finally {
              Hn();
            }
          }
        });
      }, Qi.discardPendingWarnings = function() {
        Zp = [], Jp = [], ev = [], tv = [], nv = [], rv = [], Ym = /* @__PURE__ */ new Map();
      };
    }
    function Ki(e, t) {
      if (e && e.defaultProps) {
        var a = wt({}, t), i = e.defaultProps;
        for (var u in i)
          a[u] === void 0 && (a[u] = i[u]);
        return a;
      }
      return t;
    }
    var nS = Du(null), rS;
    rS = {};
    var Wm = null, jf = null, aS = null, Gm = !1;
    function qm() {
      Wm = null, jf = null, aS = null, Gm = !1;
    }
    function eC() {
      Gm = !0;
    }
    function tC() {
      Gm = !1;
    }
    function nC(e, t, a) {
      ra(nS, t._currentValue, e), t._currentValue = a, t._currentRenderer !== void 0 && t._currentRenderer !== null && t._currentRenderer !== rS && m("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), t._currentRenderer = rS;
    }
    function iS(e, t) {
      var a = nS.current;
      na(nS, t), e._currentValue = a;
    }
    function oS(e, t, a) {
      for (var i = e; i !== null; ) {
        var u = i.alternate;
        if (yl(i.childLanes, t) ? u !== null && !yl(u.childLanes, t) && (u.childLanes = St(u.childLanes, t)) : (i.childLanes = St(i.childLanes, t), u !== null && (u.childLanes = St(u.childLanes, t))), i === a)
          break;
        i = i.return;
      }
      i !== a && m("Expected to find the propagation root when scheduling context work. This error is likely caused by a bug in React. Please file an issue.");
    }
    function gO(e, t, a) {
      SO(e, t, a);
    }
    function SO(e, t, a) {
      var i = e.child;
      for (i !== null && (i.return = e); i !== null; ) {
        var u = void 0, f = i.dependencies;
        if (f !== null) {
          u = i.child;
          for (var h = f.firstContext; h !== null; ) {
            if (h.context === t) {
              if (i.tag === k) {
                var E = Bn(a), b = Ll(rn, E);
                b.tag = Km;
                var T = i.updateQueue;
                if (T !== null) {
                  var _ = T.shared, $ = _.pending;
                  $ === null ? b.next = b : (b.next = $.next, $.next = b), _.pending = b;
                }
              }
              i.lanes = St(i.lanes, a);
              var U = i.alternate;
              U !== null && (U.lanes = St(U.lanes, a)), oS(i.return, a, e), f.lanes = St(f.lanes, a);
              break;
            }
            h = h.next;
          }
        } else if (i.tag === de)
          u = i.type === e.type ? null : i.child;
        else if (i.tag === De) {
          var q = i.return;
          if (q === null)
            throw new Error("We just came from a parent so we must have had a parent. This is a bug in React.");
          q.lanes = St(q.lanes, a);
          var Q = q.alternate;
          Q !== null && (Q.lanes = St(Q.lanes, a)), oS(q, a, e), u = i.sibling;
        } else
          u = i.child;
        if (u !== null)
          u.return = i;
        else
          for (u = i; u !== null; ) {
            if (u === e) {
              u = null;
              break;
            }
            var ee = u.sibling;
            if (ee !== null) {
              ee.return = u.return, u = ee;
              break;
            }
            u = u.return;
          }
        i = u;
      }
    }
    function $f(e, t) {
      Wm = e, jf = null, aS = null;
      var a = e.dependencies;
      if (a !== null) {
        var i = a.firstContext;
        i !== null && (ta(a.lanes, t) && yv(), a.firstContext = null);
      }
    }
    function or(e) {
      Gm && m("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      var t = e._currentValue;
      if (aS !== e) {
        var a = {
          context: e,
          memoizedValue: t,
          next: null
        };
        if (jf === null) {
          if (Wm === null)
            throw new Error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
          jf = a, Wm.dependencies = {
            lanes: ne,
            firstContext: a
          };
        } else
          jf = jf.next = a;
      }
      return t;
    }
    var qs = null;
    function lS(e) {
      qs === null ? qs = [e] : qs.push(e);
    }
    function EO() {
      if (qs !== null) {
        for (var e = 0; e < qs.length; e++) {
          var t = qs[e], a = t.interleaved;
          if (a !== null) {
            t.interleaved = null;
            var i = a.next, u = t.pending;
            if (u !== null) {
              var f = u.next;
              u.next = i, a.next = f;
            }
            t.pending = a;
          }
        }
        qs = null;
      }
    }
    function rC(e, t, a, i) {
      var u = t.interleaved;
      return u === null ? (a.next = a, lS(t)) : (a.next = u.next, u.next = a), t.interleaved = a, Qm(e, i);
    }
    function bO(e, t, a, i) {
      var u = t.interleaved;
      u === null ? (a.next = a, lS(t)) : (a.next = u.next, u.next = a), t.interleaved = a;
    }
    function CO(e, t, a, i) {
      var u = t.interleaved;
      return u === null ? (a.next = a, lS(t)) : (a.next = u.next, u.next = a), t.interleaved = a, Qm(e, i);
    }
    function Ha(e, t) {
      return Qm(e, t);
    }
    var xO = Qm;
    function Qm(e, t) {
      e.lanes = St(e.lanes, t);
      var a = e.alternate;
      a !== null && (a.lanes = St(a.lanes, t)), a === null && (e.flags & (ln | Ma)) !== et && aT(e);
      for (var i = e, u = e.return; u !== null; )
        u.childLanes = St(u.childLanes, t), a = u.alternate, a !== null ? a.childLanes = St(a.childLanes, t) : (u.flags & (ln | Ma)) !== et && aT(e), i = u, u = u.return;
      if (i.tag === N) {
        var f = i.stateNode;
        return f;
      } else
        return null;
    }
    var aC = 0, iC = 1, Km = 2, uS = 3, Xm = !1, sS, Zm;
    sS = !1, Zm = null;
    function cS(e) {
      var t = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
          pending: null,
          interleaved: null,
          lanes: ne
        },
        effects: null
      };
      e.updateQueue = t;
    }
    function oC(e, t) {
      var a = t.updateQueue, i = e.updateQueue;
      if (a === i) {
        var u = {
          baseState: i.baseState,
          firstBaseUpdate: i.firstBaseUpdate,
          lastBaseUpdate: i.lastBaseUpdate,
          shared: i.shared,
          effects: i.effects
        };
        t.updateQueue = u;
      }
    }
    function Ll(e, t) {
      var a = {
        eventTime: e,
        lane: t,
        tag: aC,
        payload: null,
        callback: null,
        next: null
      };
      return a;
    }
    function Au(e, t, a) {
      var i = e.updateQueue;
      if (i === null)
        return null;
      var u = i.shared;
      if (Zm === u && !sS && (m("An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback."), sS = !0), xN()) {
        var f = u.pending;
        return f === null ? t.next = t : (t.next = f.next, f.next = t), u.pending = t, xO(e, a);
      } else
        return CO(e, u, t, a);
    }
    function Jm(e, t, a) {
      var i = t.updateQueue;
      if (i !== null) {
        var u = i.shared;
        if (pp(a)) {
          var f = u.lanes;
          f = hp(f, e.pendingLanes);
          var h = St(f, a);
          u.lanes = h, vu(e, h);
        }
      }
    }
    function fS(e, t) {
      var a = e.updateQueue, i = e.alternate;
      if (i !== null) {
        var u = i.updateQueue;
        if (a === u) {
          var f = null, h = null, E = a.firstBaseUpdate;
          if (E !== null) {
            var b = E;
            do {
              var T = {
                eventTime: b.eventTime,
                lane: b.lane,
                tag: b.tag,
                payload: b.payload,
                callback: b.callback,
                next: null
              };
              h === null ? f = h = T : (h.next = T, h = T), b = b.next;
            } while (b !== null);
            h === null ? f = h = t : (h.next = t, h = t);
          } else
            f = h = t;
          a = {
            baseState: u.baseState,
            firstBaseUpdate: f,
            lastBaseUpdate: h,
            shared: u.shared,
            effects: u.effects
          }, e.updateQueue = a;
          return;
        }
      }
      var _ = a.lastBaseUpdate;
      _ === null ? a.firstBaseUpdate = t : _.next = t, a.lastBaseUpdate = t;
    }
    function TO(e, t, a, i, u, f) {
      switch (a.tag) {
        case iC: {
          var h = a.payload;
          if (typeof h == "function") {
            eC();
            var E = h.call(f, i, u);
            {
              if (e.mode & En) {
                In(!0);
                try {
                  h.call(f, i, u);
                } finally {
                  In(!1);
                }
              }
              tC();
            }
            return E;
          }
          return h;
        }
        case uS:
          e.flags = e.flags & ~tr | dt;
        case aC: {
          var b = a.payload, T;
          if (typeof b == "function") {
            eC(), T = b.call(f, i, u);
            {
              if (e.mode & En) {
                In(!0);
                try {
                  b.call(f, i, u);
                } finally {
                  In(!1);
                }
              }
              tC();
            }
          } else
            T = b;
          return T == null ? i : wt({}, i, T);
        }
        case Km:
          return Xm = !0, i;
      }
      return i;
    }
    function ey(e, t, a, i) {
      var u = e.updateQueue;
      Xm = !1, Zm = u.shared;
      var f = u.firstBaseUpdate, h = u.lastBaseUpdate, E = u.shared.pending;
      if (E !== null) {
        u.shared.pending = null;
        var b = E, T = b.next;
        b.next = null, h === null ? f = T : h.next = T, h = b;
        var _ = e.alternate;
        if (_ !== null) {
          var $ = _.updateQueue, U = $.lastBaseUpdate;
          U !== h && (U === null ? $.firstBaseUpdate = T : U.next = T, $.lastBaseUpdate = b);
        }
      }
      if (f !== null) {
        var q = u.baseState, Q = ne, ee = null, Ae = null, tt = null, Qe = f;
        do {
          var Nt = Qe.lane, kt = Qe.eventTime;
          if (yl(i, Nt)) {
            if (tt !== null) {
              var te = {
                eventTime: kt,
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: Ot,
                tag: Qe.tag,
                payload: Qe.payload,
                callback: Qe.callback,
                next: null
              };
              tt = tt.next = te;
            }
            q = TO(e, u, Qe, q, t, a);
            var W = Qe.callback;
            if (W !== null && // If the update was already committed, we should not queue its
            // callback again.
            Qe.lane !== Ot) {
              e.flags |= di;
              var me = u.effects;
              me === null ? u.effects = [Qe] : me.push(Qe);
            }
          } else {
            var Y = {
              eventTime: kt,
              lane: Nt,
              tag: Qe.tag,
              payload: Qe.payload,
              callback: Qe.callback,
              next: null
            };
            tt === null ? (Ae = tt = Y, ee = q) : tt = tt.next = Y, Q = St(Q, Nt);
          }
          if (Qe = Qe.next, Qe === null) {
            if (E = u.shared.pending, E === null)
              break;
            var ze = E, Oe = ze.next;
            ze.next = null, Qe = Oe, u.lastBaseUpdate = ze, u.shared.pending = null;
          }
        } while (!0);
        tt === null && (ee = q), u.baseState = ee, u.firstBaseUpdate = Ae, u.lastBaseUpdate = tt;
        var ft = u.shared.interleaved;
        if (ft !== null) {
          var ht = ft;
          do
            Q = St(Q, ht.lane), ht = ht.next;
          while (ht !== ft);
        } else
          f === null && (u.shared.lanes = ne);
        Ov(Q), e.lanes = Q, e.memoizedState = q;
      }
      Zm = null;
    }
    function RO(e, t) {
      if (typeof e != "function")
        throw new Error("Invalid argument passed as callback. Expected a function. Instead " + ("received: " + e));
      e.call(t);
    }
    function lC() {
      Xm = !1;
    }
    function ty() {
      return Xm;
    }
    function uC(e, t, a) {
      var i = t.effects;
      if (t.effects = null, i !== null)
        for (var u = 0; u < i.length; u++) {
          var f = i[u], h = f.callback;
          h !== null && (f.callback = null, RO(h, a));
        }
    }
    var dS = {}, sC = new l.Component().refs, pS, vS, hS, mS, yS, cC, ny, gS, SS, ES;
    {
      pS = /* @__PURE__ */ new Set(), vS = /* @__PURE__ */ new Set(), hS = /* @__PURE__ */ new Set(), mS = /* @__PURE__ */ new Set(), gS = /* @__PURE__ */ new Set(), yS = /* @__PURE__ */ new Set(), SS = /* @__PURE__ */ new Set(), ES = /* @__PURE__ */ new Set();
      var fC = /* @__PURE__ */ new Set();
      ny = function(e, t) {
        if (!(e === null || typeof e == "function")) {
          var a = t + "_" + e;
          fC.has(a) || (fC.add(a), m("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e));
        }
      }, cC = function(e, t) {
        if (t === void 0) {
          var a = tn(e) || "Component";
          yS.has(a) || (yS.add(a), m("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.", a));
        }
      }, Object.defineProperty(dS, "_processChildContext", {
        enumerable: !1,
        value: function() {
          throw new Error("_processChildContext is not available in React 16+. This likely means you have multiple copies of React and are attempting to nest a React 15 tree inside a React 16 tree using unstable_renderSubtreeIntoContainer, which isn't supported. Try to make sure you have only one copy of React (and ideally, switch to ReactDOM.createPortal).");
        }
      }), Object.freeze(dS);
    }
    function bS(e, t, a, i) {
      var u = e.memoizedState, f = a(i, u);
      {
        if (e.mode & En) {
          In(!0);
          try {
            f = a(i, u);
          } finally {
            In(!1);
          }
        }
        cC(t, f);
      }
      var h = f == null ? u : wt({}, u, f);
      if (e.memoizedState = h, e.lanes === ne) {
        var E = e.updateQueue;
        E.baseState = h;
      }
    }
    var CS = {
      isMounted: ya,
      enqueueSetState: function(e, t, a) {
        var i = Da(e), u = xa(), f = Hu(i), h = Ll(u, f);
        h.payload = t, a != null && (ny(a, "setState"), h.callback = a);
        var E = Au(i, h, f);
        E !== null && (gr(E, i, f, u), Jm(E, i, f)), wo(i, f);
      },
      enqueueReplaceState: function(e, t, a) {
        var i = Da(e), u = xa(), f = Hu(i), h = Ll(u, f);
        h.tag = iC, h.payload = t, a != null && (ny(a, "replaceState"), h.callback = a);
        var E = Au(i, h, f);
        E !== null && (gr(E, i, f, u), Jm(E, i, f)), wo(i, f);
      },
      enqueueForceUpdate: function(e, t) {
        var a = Da(e), i = xa(), u = Hu(a), f = Ll(i, u);
        f.tag = Km, t != null && (ny(t, "forceUpdate"), f.callback = t);
        var h = Au(a, f, u);
        h !== null && (gr(h, a, u, i), Jm(h, a, u)), sp(a, u);
      }
    };
    function dC(e, t, a, i, u, f, h) {
      var E = e.stateNode;
      if (typeof E.shouldComponentUpdate == "function") {
        var b = E.shouldComponentUpdate(i, f, h);
        {
          if (e.mode & En) {
            In(!0);
            try {
              b = E.shouldComponentUpdate(i, f, h);
            } finally {
              In(!1);
            }
          }
          b === void 0 && m("%s.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.", tn(t) || "Component");
        }
        return b;
      }
      return t.prototype && t.prototype.isPureReactComponent ? !Je(a, i) || !Je(u, f) : !0;
    }
    function wO(e, t, a) {
      var i = e.stateNode;
      {
        var u = tn(t) || "Component", f = i.render;
        f || (t.prototype && typeof t.prototype.render == "function" ? m("%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?", u) : m("%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.", u)), i.getInitialState && !i.getInitialState.isReactClassApproved && !i.state && m("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?", u), i.getDefaultProps && !i.getDefaultProps.isReactClassApproved && m("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.", u), i.propTypes && m("propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.", u), i.contextType && m("contextType was defined as an instance property on %s. Use a static property to define contextType instead.", u), i.contextTypes && m("contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.", u), t.contextType && t.contextTypes && !SS.has(t) && (SS.add(t), m("%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.", u)), typeof i.componentShouldUpdate == "function" && m("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.", u), t.prototype && t.prototype.isPureReactComponent && typeof i.shouldComponentUpdate < "u" && m("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.", tn(t) || "A pure component"), typeof i.componentDidUnmount == "function" && m("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?", u), typeof i.componentDidReceiveProps == "function" && m("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().", u), typeof i.componentWillRecieveProps == "function" && m("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", u), typeof i.UNSAFE_componentWillRecieveProps == "function" && m("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?", u);
        var h = i.props !== a;
        i.props !== void 0 && h && m("%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.", u, u), i.defaultProps && m("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.", u, u), typeof i.getSnapshotBeforeUpdate == "function" && typeof i.componentDidUpdate != "function" && !hS.has(t) && (hS.add(t), m("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.", tn(t))), typeof i.getDerivedStateFromProps == "function" && m("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.", u), typeof i.getDerivedStateFromError == "function" && m("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.", u), typeof t.getSnapshotBeforeUpdate == "function" && m("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.", u);
        var E = i.state;
        E && (typeof E != "object" || Jn(E)) && m("%s.state: must be set to an object or null", u), typeof i.getChildContext == "function" && typeof t.childContextTypes != "object" && m("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", u);
      }
    }
    function pC(e, t) {
      t.updater = CS, e.stateNode = t, au(t, e), t._reactInternalInstance = dS;
    }
    function vC(e, t, a) {
      var i = !1, u = ai, f = ai, h = t.contextType;
      if ("contextType" in t) {
        var E = (
          // Allow null for conditional declaration
          h === null || h !== void 0 && h.$$typeof === Re && h._context === void 0
        );
        if (!E && !ES.has(t)) {
          ES.add(t);
          var b = "";
          h === void 0 ? b = " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof h != "object" ? b = " However, it is set to a " + typeof h + "." : h.$$typeof === pe ? b = " Did you accidentally pass the Context.Provider instead?" : h._context !== void 0 ? b = " Did you accidentally pass the Context.Consumer instead?" : b = " However, it is set to an object with keys {" + Object.keys(h).join(", ") + "}.", m("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", tn(t) || "Component", b);
        }
      }
      if (typeof h == "object" && h !== null)
        f = or(h);
      else {
        u = Lf(e, t, !0);
        var T = t.contextTypes;
        i = T != null, f = i ? Af(e, u) : ai;
      }
      var _ = new t(a, f);
      if (e.mode & En) {
        In(!0);
        try {
          _ = new t(a, f);
        } finally {
          In(!1);
        }
      }
      var $ = e.memoizedState = _.state !== null && _.state !== void 0 ? _.state : null;
      pC(e, _);
      {
        if (typeof t.getDerivedStateFromProps == "function" && $ === null) {
          var U = tn(t) || "Component";
          vS.has(U) || (vS.add(U), m("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", U, _.state === null ? "null" : "undefined", U));
        }
        if (typeof t.getDerivedStateFromProps == "function" || typeof _.getSnapshotBeforeUpdate == "function") {
          var q = null, Q = null, ee = null;
          if (typeof _.componentWillMount == "function" && _.componentWillMount.__suppressDeprecationWarning !== !0 ? q = "componentWillMount" : typeof _.UNSAFE_componentWillMount == "function" && (q = "UNSAFE_componentWillMount"), typeof _.componentWillReceiveProps == "function" && _.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? Q = "componentWillReceiveProps" : typeof _.UNSAFE_componentWillReceiveProps == "function" && (Q = "UNSAFE_componentWillReceiveProps"), typeof _.componentWillUpdate == "function" && _.componentWillUpdate.__suppressDeprecationWarning !== !0 ? ee = "componentWillUpdate" : typeof _.UNSAFE_componentWillUpdate == "function" && (ee = "UNSAFE_componentWillUpdate"), q !== null || Q !== null || ee !== null) {
            var Ae = tn(t) || "Component", tt = typeof t.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
            mS.has(Ae) || (mS.add(Ae), m(`Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://reactjs.org/link/unsafe-component-lifecycles`, Ae, tt, q !== null ? `
  ` + q : "", Q !== null ? `
  ` + Q : "", ee !== null ? `
  ` + ee : ""));
          }
        }
      }
      return i && j1(e, u, f), _;
    }
    function _O(e, t) {
      var a = t.state;
      typeof t.componentWillMount == "function" && t.componentWillMount(), typeof t.UNSAFE_componentWillMount == "function" && t.UNSAFE_componentWillMount(), a !== t.state && (m("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", yt(e) || "Component"), CS.enqueueReplaceState(t, t.state, null));
    }
    function hC(e, t, a, i) {
      var u = t.state;
      if (typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(a, i), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(a, i), t.state !== u) {
        {
          var f = yt(e) || "Component";
          pS.has(f) || (pS.add(f), m("%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", f));
        }
        CS.enqueueReplaceState(t, t.state, null);
      }
    }
    function xS(e, t, a, i) {
      wO(e, t, a);
      var u = e.stateNode;
      u.props = a, u.state = e.memoizedState, u.refs = sC, cS(e);
      var f = t.contextType;
      if (typeof f == "object" && f !== null)
        u.context = or(f);
      else {
        var h = Lf(e, t, !0);
        u.context = Af(e, h);
      }
      {
        if (u.state === a) {
          var E = tn(t) || "Component";
          gS.has(E) || (gS.add(E), m("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.", E));
        }
        e.mode & En && Qi.recordLegacyContextWarning(e, u), Qi.recordUnsafeLifecycleWarnings(e, u);
      }
      u.state = e.memoizedState;
      var b = t.getDerivedStateFromProps;
      if (typeof b == "function" && (bS(e, t, b, a), u.state = e.memoizedState), typeof t.getDerivedStateFromProps != "function" && typeof u.getSnapshotBeforeUpdate != "function" && (typeof u.UNSAFE_componentWillMount == "function" || typeof u.componentWillMount == "function") && (_O(e, u), ey(e, a, u, i), u.state = e.memoizedState), typeof u.componentDidMount == "function") {
        var T = gt;
        T |= Qr, (e.mode & za) !== it && (T |= Kr), e.flags |= T;
      }
    }
    function kO(e, t, a, i) {
      var u = e.stateNode, f = e.memoizedProps;
      u.props = f;
      var h = u.context, E = t.contextType, b = ai;
      if (typeof E == "object" && E !== null)
        b = or(E);
      else {
        var T = Lf(e, t, !0);
        b = Af(e, T);
      }
      var _ = t.getDerivedStateFromProps, $ = typeof _ == "function" || typeof u.getSnapshotBeforeUpdate == "function";
      !$ && (typeof u.UNSAFE_componentWillReceiveProps == "function" || typeof u.componentWillReceiveProps == "function") && (f !== a || h !== b) && hC(e, u, a, b), lC();
      var U = e.memoizedState, q = u.state = U;
      if (ey(e, a, u, i), q = e.memoizedState, f === a && U === q && !Um() && !ty()) {
        if (typeof u.componentDidMount == "function") {
          var Q = gt;
          Q |= Qr, (e.mode & za) !== it && (Q |= Kr), e.flags |= Q;
        }
        return !1;
      }
      typeof _ == "function" && (bS(e, t, _, a), q = e.memoizedState);
      var ee = ty() || dC(e, t, f, a, U, q, b);
      if (ee) {
        if (!$ && (typeof u.UNSAFE_componentWillMount == "function" || typeof u.componentWillMount == "function") && (typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount()), typeof u.componentDidMount == "function") {
          var Ae = gt;
          Ae |= Qr, (e.mode & za) !== it && (Ae |= Kr), e.flags |= Ae;
        }
      } else {
        if (typeof u.componentDidMount == "function") {
          var tt = gt;
          tt |= Qr, (e.mode & za) !== it && (tt |= Kr), e.flags |= tt;
        }
        e.memoizedProps = a, e.memoizedState = q;
      }
      return u.props = a, u.state = q, u.context = b, ee;
    }
    function OO(e, t, a, i, u) {
      var f = t.stateNode;
      oC(e, t);
      var h = t.memoizedProps, E = t.type === t.elementType ? h : Ki(t.type, h);
      f.props = E;
      var b = t.pendingProps, T = f.context, _ = a.contextType, $ = ai;
      if (typeof _ == "object" && _ !== null)
        $ = or(_);
      else {
        var U = Lf(t, a, !0);
        $ = Af(t, U);
      }
      var q = a.getDerivedStateFromProps, Q = typeof q == "function" || typeof f.getSnapshotBeforeUpdate == "function";
      !Q && (typeof f.UNSAFE_componentWillReceiveProps == "function" || typeof f.componentWillReceiveProps == "function") && (h !== b || T !== $) && hC(t, f, i, $), lC();
      var ee = t.memoizedState, Ae = f.state = ee;
      if (ey(t, i, f, u), Ae = t.memoizedState, h === b && ee === Ae && !Um() && !ty() && !Pe)
        return typeof f.componentDidUpdate == "function" && (h !== e.memoizedProps || ee !== e.memoizedState) && (t.flags |= gt), typeof f.getSnapshotBeforeUpdate == "function" && (h !== e.memoizedProps || ee !== e.memoizedState) && (t.flags |= Na), !1;
      typeof q == "function" && (bS(t, a, q, i), Ae = t.memoizedState);
      var tt = ty() || dC(t, a, E, i, ee, Ae, $) || // TODO: In some cases, we'll end up checking if context has changed twice,
      // both before and after `shouldComponentUpdate` has been called. Not ideal,
      // but I'm loath to refactor this function. This only happens for memoized
      // components so it's not that common.
      Pe;
      return tt ? (!Q && (typeof f.UNSAFE_componentWillUpdate == "function" || typeof f.componentWillUpdate == "function") && (typeof f.componentWillUpdate == "function" && f.componentWillUpdate(i, Ae, $), typeof f.UNSAFE_componentWillUpdate == "function" && f.UNSAFE_componentWillUpdate(i, Ae, $)), typeof f.componentDidUpdate == "function" && (t.flags |= gt), typeof f.getSnapshotBeforeUpdate == "function" && (t.flags |= Na)) : (typeof f.componentDidUpdate == "function" && (h !== e.memoizedProps || ee !== e.memoizedState) && (t.flags |= gt), typeof f.getSnapshotBeforeUpdate == "function" && (h !== e.memoizedProps || ee !== e.memoizedState) && (t.flags |= Na), t.memoizedProps = i, t.memoizedState = Ae), f.props = i, f.state = Ae, f.context = $, tt;
    }
    var TS, RS, wS, _S, kS, mC = function(e, t) {
    };
    TS = !1, RS = !1, wS = {}, _S = {}, kS = {}, mC = function(e, t) {
      if (!(e === null || typeof e != "object") && !(!e._store || e._store.validated || e.key != null)) {
        if (typeof e._store != "object")
          throw new Error("React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue.");
        e._store.validated = !0;
        var a = yt(t) || "Component";
        _S[a] || (_S[a] = !0, m('Each child in a list should have a unique "key" prop. See https://reactjs.org/link/warning-keys for more information.'));
      }
    };
    function av(e, t, a) {
      var i = a.ref;
      if (i !== null && typeof i != "function" && typeof i != "object") {
        if ((e.mode & En || ke) && // We warn in ReactElement.js if owner and self are equal for string refs
        // because these cannot be automatically converted to an arrow function
        // using a codemod. Therefore, we don't have to warn about string refs again.
        !(a._owner && a._self && a._owner.stateNode !== a._self)) {
          var u = yt(e) || "Component";
          wS[u] || (m('A string ref, "%s", has been found within a strict mode tree. String refs are a source of potential bugs and should be avoided. We recommend using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', i), wS[u] = !0);
        }
        if (a._owner) {
          var f = a._owner, h;
          if (f) {
            var E = f;
            if (E.tag !== k)
              throw new Error("Function components cannot have string refs. We recommend using useRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref");
            h = E.stateNode;
          }
          if (!h)
            throw new Error("Missing owner for string ref " + i + ". This error is likely caused by a bug in React. Please file an issue.");
          var b = h;
          sa(i, "ref");
          var T = "" + i;
          if (t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === T)
            return t.ref;
          var _ = function($) {
            var U = b.refs;
            U === sC && (U = b.refs = {}), $ === null ? delete U[T] : U[T] = $;
          };
          return _._stringRef = T, _;
        } else {
          if (typeof i != "string")
            throw new Error("Expected ref to be a function, a string, an object returned by React.createRef(), or null.");
          if (!a._owner)
            throw new Error("Element ref was specified as a string (" + i + `) but no owner was set. This could happen for one of the following reasons:
1. You may be adding a ref to a function component
2. You may be adding a ref to a component that was not created inside a component's render method
3. You have multiple copies of React loaded
See https://reactjs.org/link/refs-must-have-owner for more information.`);
        }
      }
      return i;
    }
    function ry(e, t) {
      var a = Object.prototype.toString.call(t);
      throw new Error("Objects are not valid as a React child (found: " + (a === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : a) + "). If you meant to render a collection of children, use an array instead.");
    }
    function ay(e) {
      {
        var t = yt(e) || "Component";
        if (kS[t])
          return;
        kS[t] = !0, m("Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.");
      }
    }
    function yC(e) {
      var t = e._payload, a = e._init;
      return a(t);
    }
    function gC(e) {
      function t(Y, te) {
        if (e) {
          var W = Y.deletions;
          W === null ? (Y.deletions = [te], Y.flags |= Ut) : W.push(te);
        }
      }
      function a(Y, te) {
        if (!e)
          return null;
        for (var W = te; W !== null; )
          t(Y, W), W = W.sibling;
        return null;
      }
      function i(Y, te) {
        for (var W = /* @__PURE__ */ new Map(), me = te; me !== null; )
          me.key !== null ? W.set(me.key, me) : W.set(me.index, me), me = me.sibling;
        return W;
      }
      function u(Y, te) {
        var W = nc(Y, te);
        return W.index = 0, W.sibling = null, W;
      }
      function f(Y, te, W) {
        if (Y.index = W, !e)
          return Y.flags |= Xd, te;
        var me = Y.alternate;
        if (me !== null) {
          var ze = me.index;
          return ze < te ? (Y.flags |= ln, te) : ze;
        } else
          return Y.flags |= ln, te;
      }
      function h(Y) {
        return e && Y.alternate === null && (Y.flags |= ln), Y;
      }
      function E(Y, te, W, me) {
        if (te === null || te.tag !== F) {
          var ze = tb(W, Y.mode, me);
          return ze.return = Y, ze;
        } else {
          var Oe = u(te, W);
          return Oe.return = Y, Oe;
        }
      }
      function b(Y, te, W, me) {
        var ze = W.type;
        if (ze === Qa)
          return _(Y, te, W.props.children, me, W.key);
        if (te !== null && (te.elementType === ze || // Keep this check inline so it only runs on the false path:
        uT(te, W) || // Lazy types should reconcile their resolved type.
        // We need to do this after the Hot Reloading check above,
        // because hot reloading has different semantics than prod because
        // it doesn't resuspend. So we can't let the call below suspend.
        typeof ze == "object" && ze !== null && ze.$$typeof === lt && yC(ze) === te.type)) {
          var Oe = u(te, W.props);
          return Oe.ref = av(Y, te, W), Oe.return = Y, Oe._debugSource = W._source, Oe._debugOwner = W._owner, Oe;
        }
        var ft = eb(W, Y.mode, me);
        return ft.ref = av(Y, te, W), ft.return = Y, ft;
      }
      function T(Y, te, W, me) {
        if (te === null || te.tag !== A || te.stateNode.containerInfo !== W.containerInfo || te.stateNode.implementation !== W.implementation) {
          var ze = nb(W, Y.mode, me);
          return ze.return = Y, ze;
        } else {
          var Oe = u(te, W.children || []);
          return Oe.return = Y, Oe;
        }
      }
      function _(Y, te, W, me, ze) {
        if (te === null || te.tag !== P) {
          var Oe = Bu(W, Y.mode, me, ze);
          return Oe.return = Y, Oe;
        } else {
          var ft = u(te, W);
          return ft.return = Y, ft;
        }
      }
      function $(Y, te, W) {
        if (typeof te == "string" && te !== "" || typeof te == "number") {
          var me = tb("" + te, Y.mode, W);
          return me.return = Y, me;
        }
        if (typeof te == "object" && te !== null) {
          switch (te.$$typeof) {
            case lo: {
              var ze = eb(te, Y.mode, W);
              return ze.ref = av(Y, null, te), ze.return = Y, ze;
            }
            case pa: {
              var Oe = nb(te, Y.mode, W);
              return Oe.return = Y, Oe;
            }
            case lt: {
              var ft = te._payload, ht = te._init;
              return $(Y, ht(ft), W);
            }
          }
          if (Jn(te) || Di(te)) {
            var Gt = Bu(te, Y.mode, W, null);
            return Gt.return = Y, Gt;
          }
          ry(Y, te);
        }
        return typeof te == "function" && ay(Y), null;
      }
      function U(Y, te, W, me) {
        var ze = te !== null ? te.key : null;
        if (typeof W == "string" && W !== "" || typeof W == "number")
          return ze !== null ? null : E(Y, te, "" + W, me);
        if (typeof W == "object" && W !== null) {
          switch (W.$$typeof) {
            case lo:
              return W.key === ze ? b(Y, te, W, me) : null;
            case pa:
              return W.key === ze ? T(Y, te, W, me) : null;
            case lt: {
              var Oe = W._payload, ft = W._init;
              return U(Y, te, ft(Oe), me);
            }
          }
          if (Jn(W) || Di(W))
            return ze !== null ? null : _(Y, te, W, me, null);
          ry(Y, W);
        }
        return typeof W == "function" && ay(Y), null;
      }
      function q(Y, te, W, me, ze) {
        if (typeof me == "string" && me !== "" || typeof me == "number") {
          var Oe = Y.get(W) || null;
          return E(te, Oe, "" + me, ze);
        }
        if (typeof me == "object" && me !== null) {
          switch (me.$$typeof) {
            case lo: {
              var ft = Y.get(me.key === null ? W : me.key) || null;
              return b(te, ft, me, ze);
            }
            case pa: {
              var ht = Y.get(me.key === null ? W : me.key) || null;
              return T(te, ht, me, ze);
            }
            case lt:
              var Gt = me._payload, zt = me._init;
              return q(Y, te, W, zt(Gt), ze);
          }
          if (Jn(me) || Di(me)) {
            var qn = Y.get(W) || null;
            return _(te, qn, me, ze, null);
          }
          ry(te, me);
        }
        return typeof me == "function" && ay(te), null;
      }
      function Q(Y, te, W) {
        {
          if (typeof Y != "object" || Y === null)
            return te;
          switch (Y.$$typeof) {
            case lo:
            case pa:
              mC(Y, W);
              var me = Y.key;
              if (typeof me != "string")
                break;
              if (te === null) {
                te = /* @__PURE__ */ new Set(), te.add(me);
                break;
              }
              if (!te.has(me)) {
                te.add(me);
                break;
              }
              m("Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.", me);
              break;
            case lt:
              var ze = Y._payload, Oe = Y._init;
              Q(Oe(ze), te, W);
              break;
          }
        }
        return te;
      }
      function ee(Y, te, W, me) {
        for (var ze = null, Oe = 0; Oe < W.length; Oe++) {
          var ft = W[Oe];
          ze = Q(ft, ze, Y);
        }
        for (var ht = null, Gt = null, zt = te, qn = 0, Pt = 0, jn = null; zt !== null && Pt < W.length; Pt++) {
          zt.index > Pt ? (jn = zt, zt = null) : jn = zt.sibling;
          var ia = U(Y, zt, W[Pt], me);
          if (ia === null) {
            zt === null && (zt = jn);
            break;
          }
          e && zt && ia.alternate === null && t(Y, zt), qn = f(ia, qn, Pt), Gt === null ? ht = ia : Gt.sibling = ia, Gt = ia, zt = jn;
        }
        if (Pt === W.length) {
          if (a(Y, zt), Ar()) {
            var Vr = Pt;
            Is(Y, Vr);
          }
          return ht;
        }
        if (zt === null) {
          for (; Pt < W.length; Pt++) {
            var oi = $(Y, W[Pt], me);
            oi !== null && (qn = f(oi, qn, Pt), Gt === null ? ht = oi : Gt.sibling = oi, Gt = oi);
          }
          if (Ar()) {
            var Ta = Pt;
            Is(Y, Ta);
          }
          return ht;
        }
        for (var Ra = i(Y, zt); Pt < W.length; Pt++) {
          var oa = q(Ra, Y, Pt, W[Pt], me);
          oa !== null && (e && oa.alternate !== null && Ra.delete(oa.key === null ? Pt : oa.key), qn = f(oa, qn, Pt), Gt === null ? ht = oa : Gt.sibling = oa, Gt = oa);
        }
        if (e && Ra.forEach(function(nd) {
          return t(Y, nd);
        }), Ar()) {
          var $l = Pt;
          Is(Y, $l);
        }
        return ht;
      }
      function Ae(Y, te, W, me) {
        var ze = Di(W);
        if (typeof ze != "function")
          throw new Error("An object is not an iterable. This error is likely caused by a bug in React. Please file an issue.");
        {
          typeof Symbol == "function" && // $FlowFixMe Flow doesn't know about toStringTag
          W[Symbol.toStringTag] === "Generator" && (RS || m("Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers."), RS = !0), W.entries === ze && (TS || m("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), TS = !0);
          var Oe = ze.call(W);
          if (Oe)
            for (var ft = null, ht = Oe.next(); !ht.done; ht = Oe.next()) {
              var Gt = ht.value;
              ft = Q(Gt, ft, Y);
            }
        }
        var zt = ze.call(W);
        if (zt == null)
          throw new Error("An iterable object provided no iterator.");
        for (var qn = null, Pt = null, jn = te, ia = 0, Vr = 0, oi = null, Ta = zt.next(); jn !== null && !Ta.done; Vr++, Ta = zt.next()) {
          jn.index > Vr ? (oi = jn, jn = null) : oi = jn.sibling;
          var Ra = U(Y, jn, Ta.value, me);
          if (Ra === null) {
            jn === null && (jn = oi);
            break;
          }
          e && jn && Ra.alternate === null && t(Y, jn), ia = f(Ra, ia, Vr), Pt === null ? qn = Ra : Pt.sibling = Ra, Pt = Ra, jn = oi;
        }
        if (Ta.done) {
          if (a(Y, jn), Ar()) {
            var oa = Vr;
            Is(Y, oa);
          }
          return qn;
        }
        if (jn === null) {
          for (; !Ta.done; Vr++, Ta = zt.next()) {
            var $l = $(Y, Ta.value, me);
            $l !== null && (ia = f($l, ia, Vr), Pt === null ? qn = $l : Pt.sibling = $l, Pt = $l);
          }
          if (Ar()) {
            var nd = Vr;
            Is(Y, nd);
          }
          return qn;
        }
        for (var Av = i(Y, jn); !Ta.done; Vr++, Ta = zt.next()) {
          var Bo = q(Av, Y, Vr, Ta.value, me);
          Bo !== null && (e && Bo.alternate !== null && Av.delete(Bo.key === null ? Vr : Bo.key), ia = f(Bo, ia, Vr), Pt === null ? qn = Bo : Pt.sibling = Bo, Pt = Bo);
        }
        if (e && Av.forEach(function(IM) {
          return t(Y, IM);
        }), Ar()) {
          var HM = Vr;
          Is(Y, HM);
        }
        return qn;
      }
      function tt(Y, te, W, me) {
        if (te !== null && te.tag === F) {
          a(Y, te.sibling);
          var ze = u(te, W);
          return ze.return = Y, ze;
        }
        a(Y, te);
        var Oe = tb(W, Y.mode, me);
        return Oe.return = Y, Oe;
      }
      function Qe(Y, te, W, me) {
        for (var ze = W.key, Oe = te; Oe !== null; ) {
          if (Oe.key === ze) {
            var ft = W.type;
            if (ft === Qa) {
              if (Oe.tag === P) {
                a(Y, Oe.sibling);
                var ht = u(Oe, W.props.children);
                return ht.return = Y, ht._debugSource = W._source, ht._debugOwner = W._owner, ht;
              }
            } else if (Oe.elementType === ft || // Keep this check inline so it only runs on the false path:
            uT(Oe, W) || // Lazy types should reconcile their resolved type.
            // We need to do this after the Hot Reloading check above,
            // because hot reloading has different semantics than prod because
            // it doesn't resuspend. So we can't let the call below suspend.
            typeof ft == "object" && ft !== null && ft.$$typeof === lt && yC(ft) === Oe.type) {
              a(Y, Oe.sibling);
              var Gt = u(Oe, W.props);
              return Gt.ref = av(Y, Oe, W), Gt.return = Y, Gt._debugSource = W._source, Gt._debugOwner = W._owner, Gt;
            }
            a(Y, Oe);
            break;
          } else
            t(Y, Oe);
          Oe = Oe.sibling;
        }
        if (W.type === Qa) {
          var zt = Bu(W.props.children, Y.mode, me, W.key);
          return zt.return = Y, zt;
        } else {
          var qn = eb(W, Y.mode, me);
          return qn.ref = av(Y, te, W), qn.return = Y, qn;
        }
      }
      function Nt(Y, te, W, me) {
        for (var ze = W.key, Oe = te; Oe !== null; ) {
          if (Oe.key === ze)
            if (Oe.tag === A && Oe.stateNode.containerInfo === W.containerInfo && Oe.stateNode.implementation === W.implementation) {
              a(Y, Oe.sibling);
              var ft = u(Oe, W.children || []);
              return ft.return = Y, ft;
            } else {
              a(Y, Oe);
              break;
            }
          else
            t(Y, Oe);
          Oe = Oe.sibling;
        }
        var ht = nb(W, Y.mode, me);
        return ht.return = Y, ht;
      }
      function kt(Y, te, W, me) {
        var ze = typeof W == "object" && W !== null && W.type === Qa && W.key === null;
        if (ze && (W = W.props.children), typeof W == "object" && W !== null) {
          switch (W.$$typeof) {
            case lo:
              return h(Qe(Y, te, W, me));
            case pa:
              return h(Nt(Y, te, W, me));
            case lt:
              var Oe = W._payload, ft = W._init;
              return kt(Y, te, ft(Oe), me);
          }
          if (Jn(W))
            return ee(Y, te, W, me);
          if (Di(W))
            return Ae(Y, te, W, me);
          ry(Y, W);
        }
        return typeof W == "string" && W !== "" || typeof W == "number" ? h(tt(Y, te, "" + W, me)) : (typeof W == "function" && ay(Y), a(Y, te));
      }
      return kt;
    }
    var Ff = gC(!0), SC = gC(!1);
    function DO(e, t) {
      if (e !== null && t.child !== e.child)
        throw new Error("Resuming work not yet implemented.");
      if (t.child !== null) {
        var a = t.child, i = nc(a, a.pendingProps);
        for (t.child = i, i.return = t; a.sibling !== null; )
          a = a.sibling, i = i.sibling = nc(a, a.pendingProps), i.return = t;
        i.sibling = null;
      }
    }
    function NO(e, t) {
      for (var a = e.child; a !== null; )
        oM(a, t), a = a.sibling;
    }
    var iv = {}, zu = Du(iv), ov = Du(iv), iy = Du(iv);
    function oy(e) {
      if (e === iv)
        throw new Error("Expected host context to exist. This error is likely caused by a bug in React. Please file an issue.");
      return e;
    }
    function EC() {
      var e = oy(iy.current);
      return e;
    }
    function OS(e, t) {
      ra(iy, t, e), ra(ov, e, e), ra(zu, iv, e);
      var a = Y_(t);
      na(zu, e), ra(zu, a, e);
    }
    function Vf(e) {
      na(zu, e), na(ov, e), na(iy, e);
    }
    function DS() {
      var e = oy(zu.current);
      return e;
    }
    function bC(e) {
      oy(iy.current);
      var t = oy(zu.current), a = W_(t, e.type);
      t !== a && (ra(ov, e, e), ra(zu, a, e));
    }
    function NS(e) {
      ov.current === e && (na(zu, e), na(ov, e));
    }
    var MO = 0, CC = 1, xC = 1, lv = 2, Xi = Du(MO);
    function MS(e, t) {
      return (e & t) !== 0;
    }
    function Hf(e) {
      return e & CC;
    }
    function LS(e, t) {
      return e & CC | t;
    }
    function LO(e, t) {
      return e | t;
    }
    function Pu(e, t) {
      ra(Xi, t, e);
    }
    function If(e) {
      na(Xi, e);
    }
    function AO(e, t) {
      var a = e.memoizedState;
      return a !== null ? a.dehydrated !== null : (e.memoizedProps, !0);
    }
    function ly(e) {
      for (var t = e; t !== null; ) {
        if (t.tag === D) {
          var a = t.memoizedState;
          if (a !== null) {
            var i = a.dehydrated;
            if (i === null || L1(i) || $0(i))
              return t;
          }
        } else if (t.tag === _e && // revealOrder undefined can't be trusted because it don't
        // keep track of whether it suspended or not.
        t.memoizedProps.revealOrder !== void 0) {
          var u = (t.flags & dt) !== et;
          if (u)
            return t;
        } else if (t.child !== null) {
          t.child.return = t, t = t.child;
          continue;
        }
        if (t === e)
          return null;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e)
            return null;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
      return null;
    }
    var Ia = (
      /*   */
      0
    ), fr = (
      /* */
      1
    ), Uo = (
      /*  */
      2
    ), dr = (
      /*    */
      4
    ), zr = (
      /*   */
      8
    ), AS = [];
    function zS() {
      for (var e = 0; e < AS.length; e++) {
        var t = AS[e];
        t._workInProgressVersionPrimary = null;
      }
      AS.length = 0;
    }
    function zO(e, t) {
      var a = t._getVersion, i = a(t._source);
      e.mutableSourceEagerHydrationData == null ? e.mutableSourceEagerHydrationData = [t, i] : e.mutableSourceEagerHydrationData.push(t, i);
    }
    var Le = d.ReactCurrentDispatcher, uv = d.ReactCurrentBatchConfig, PS, Bf;
    PS = /* @__PURE__ */ new Set();
    var Qs = ne, Wt = null, pr = null, vr = null, uy = !1, sv = !1, cv = 0, PO = 0, UO = 25, re = null, Ci = null, Uu = -1, US = !1;
    function $t() {
      {
        var e = re;
        Ci === null ? Ci = [e] : Ci.push(e);
      }
    }
    function Te() {
      {
        var e = re;
        Ci !== null && (Uu++, Ci[Uu] !== e && jO(e));
      }
    }
    function Yf(e) {
      e != null && !Jn(e) && m("%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.", re, typeof e);
    }
    function jO(e) {
      {
        var t = yt(Wt);
        if (!PS.has(t) && (PS.add(t), Ci !== null)) {
          for (var a = "", i = 30, u = 0; u <= Uu; u++) {
            for (var f = Ci[u], h = u === Uu ? e : f, E = u + 1 + ". " + f; E.length < i; )
              E += " ";
            E += h + `
`, a += E;
          }
          m(`React has detected a change in the order of Hooks called by %s. This will lead to bugs and errors if not fixed. For more information, read the Rules of Hooks: https://reactjs.org/link/rules-of-hooks

   Previous render            Next render
   ------------------------------------------------------
%s   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
`, t, a);
        }
      }
    }
    function aa() {
      throw new Error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`);
    }
    function jS(e, t) {
      if (US)
        return !1;
      if (t === null)
        return m("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.", re), !1;
      e.length !== t.length && m(`The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`, re, "[" + t.join(", ") + "]", "[" + e.join(", ") + "]");
      for (var a = 0; a < t.length && a < e.length; a++)
        if (!$e(e[a], t[a]))
          return !1;
      return !0;
    }
    function Wf(e, t, a, i, u, f) {
      Qs = f, Wt = t, Ci = e !== null ? e._debugHookTypes : null, Uu = -1, US = e !== null && e.type !== t.type, t.memoizedState = null, t.updateQueue = null, t.lanes = ne, e !== null && e.memoizedState !== null ? Le.current = YC : Ci !== null ? Le.current = BC : Le.current = IC;
      var h = a(i, u);
      if (sv) {
        var E = 0;
        do {
          if (sv = !1, cv = 0, E >= UO)
            throw new Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
          E += 1, US = !1, pr = null, vr = null, t.updateQueue = null, Uu = -1, Le.current = WC, h = a(i, u);
        } while (sv);
      }
      Le.current = by, t._debugHookTypes = Ci;
      var b = pr !== null && pr.next !== null;
      if (Qs = ne, Wt = null, pr = null, vr = null, re = null, Ci = null, Uu = -1, e !== null && (e.flags & ur) !== (t.flags & ur) && // Disable this warning in legacy mode, because legacy Suspense is weird
      // and creates false positives. To make this work in legacy mode, we'd
      // need to mark fibers that commit in an incomplete state, somehow. For
      // now I'll disable the warning that most of the bugs that would trigger
      // it are either exclusive to concurrent mode or exist in both.
      (e.mode & Tt) !== it && m("Internal React error: Expected static flag was missing. Please notify the React team."), uy = !1, b)
        throw new Error("Rendered fewer hooks than expected. This may be caused by an accidental early return statement.");
      return h;
    }
    function Gf() {
      var e = cv !== 0;
      return cv = 0, e;
    }
    function TC(e, t, a) {
      t.updateQueue = e.updateQueue, (t.mode & za) !== it ? t.flags &= ~(ll | Kr | vn | gt) : t.flags &= ~(vn | gt), e.lanes = pu(e.lanes, a);
    }
    function RC() {
      if (Le.current = by, uy) {
        for (var e = Wt.memoizedState; e !== null; ) {
          var t = e.queue;
          t !== null && (t.pending = null), e = e.next;
        }
        uy = !1;
      }
      Qs = ne, Wt = null, pr = null, vr = null, Ci = null, Uu = -1, re = null, jC = !1, sv = !1, cv = 0;
    }
    function jo() {
      var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
      };
      return vr === null ? Wt.memoizedState = vr = e : vr = vr.next = e, vr;
    }
    function xi() {
      var e;
      if (pr === null) {
        var t = Wt.alternate;
        t !== null ? e = t.memoizedState : e = null;
      } else
        e = pr.next;
      var a;
      if (vr === null ? a = Wt.memoizedState : a = vr.next, a !== null)
        vr = a, a = vr.next, pr = e;
      else {
        if (e === null)
          throw new Error("Rendered more hooks than during the previous render.");
        pr = e;
        var i = {
          memoizedState: pr.memoizedState,
          baseState: pr.baseState,
          baseQueue: pr.baseQueue,
          queue: pr.queue,
          next: null
        };
        vr === null ? Wt.memoizedState = vr = i : vr = vr.next = i;
      }
      return vr;
    }
    function wC() {
      return {
        lastEffect: null,
        stores: null
      };
    }
    function $S(e, t) {
      return typeof t == "function" ? t(e) : t;
    }
    function FS(e, t, a) {
      var i = jo(), u;
      a !== void 0 ? u = a(t) : u = t, i.memoizedState = i.baseState = u;
      var f = {
        pending: null,
        interleaved: null,
        lanes: ne,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: u
      };
      i.queue = f;
      var h = f.dispatch = HO.bind(null, Wt, f);
      return [i.memoizedState, h];
    }
    function VS(e, t, a) {
      var i = xi(), u = i.queue;
      if (u === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      u.lastRenderedReducer = e;
      var f = pr, h = f.baseQueue, E = u.pending;
      if (E !== null) {
        if (h !== null) {
          var b = h.next, T = E.next;
          h.next = T, E.next = b;
        }
        f.baseQueue !== h && m("Internal error: Expected work-in-progress queue to be a clone. This is a bug in React."), f.baseQueue = h = E, u.pending = null;
      }
      if (h !== null) {
        var _ = h.next, $ = f.baseState, U = null, q = null, Q = null, ee = _;
        do {
          var Ae = ee.lane;
          if (yl(Qs, Ae)) {
            if (Q !== null) {
              var Qe = {
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: Ot,
                action: ee.action,
                hasEagerState: ee.hasEagerState,
                eagerState: ee.eagerState,
                next: null
              };
              Q = Q.next = Qe;
            }
            if (ee.hasEagerState)
              $ = ee.eagerState;
            else {
              var Nt = ee.action;
              $ = e($, Nt);
            }
          } else {
            var tt = {
              lane: Ae,
              action: ee.action,
              hasEagerState: ee.hasEagerState,
              eagerState: ee.eagerState,
              next: null
            };
            Q === null ? (q = Q = tt, U = $) : Q = Q.next = tt, Wt.lanes = St(Wt.lanes, Ae), Ov(Ae);
          }
          ee = ee.next;
        } while (ee !== null && ee !== _);
        Q === null ? U = $ : Q.next = q, $e($, i.memoizedState) || yv(), i.memoizedState = $, i.baseState = U, i.baseQueue = Q, u.lastRenderedState = $;
      }
      var kt = u.interleaved;
      if (kt !== null) {
        var Y = kt;
        do {
          var te = Y.lane;
          Wt.lanes = St(Wt.lanes, te), Ov(te), Y = Y.next;
        } while (Y !== kt);
      } else
        h === null && (u.lanes = ne);
      var W = u.dispatch;
      return [i.memoizedState, W];
    }
    function HS(e, t, a) {
      var i = xi(), u = i.queue;
      if (u === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      u.lastRenderedReducer = e;
      var f = u.dispatch, h = u.pending, E = i.memoizedState;
      if (h !== null) {
        u.pending = null;
        var b = h.next, T = b;
        do {
          var _ = T.action;
          E = e(E, _), T = T.next;
        } while (T !== b);
        $e(E, i.memoizedState) || yv(), i.memoizedState = E, i.baseQueue === null && (i.baseState = E), u.lastRenderedState = E;
      }
      return [E, f];
    }
    function i3(e, t, a) {
    }
    function o3(e, t, a) {
    }
    function IS(e, t, a) {
      var i = Wt, u = jo(), f, h = Ar();
      if (h) {
        if (a === void 0)
          throw new Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");
        f = a(), Bf || f !== a() && (m("The result of getServerSnapshot should be cached to avoid an infinite loop"), Bf = !0);
      } else {
        if (f = t(), !Bf) {
          var E = t();
          $e(f, E) || (m("The result of getSnapshot should be cached to avoid an infinite loop"), Bf = !0);
        }
        var b = $y();
        if (b === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        ws(b, Qs) || _C(i, t, f);
      }
      u.memoizedState = f;
      var T = {
        value: f,
        getSnapshot: t
      };
      return u.queue = T, py(OC.bind(null, i, T, e), [e]), i.flags |= vn, fv(fr | zr, kC.bind(null, i, T, f, t), void 0, null), f;
    }
    function sy(e, t, a) {
      var i = Wt, u = xi(), f = t();
      if (!Bf) {
        var h = t();
        $e(f, h) || (m("The result of getSnapshot should be cached to avoid an infinite loop"), Bf = !0);
      }
      var E = u.memoizedState, b = !$e(E, f);
      b && (u.memoizedState = f, yv());
      var T = u.queue;
      if (pv(OC.bind(null, i, T, e), [e]), T.getSnapshot !== t || b || // Check if the susbcribe function changed. We can save some memory by
      // checking whether we scheduled a subscription effect above.
      vr !== null && vr.memoizedState.tag & fr) {
        i.flags |= vn, fv(fr | zr, kC.bind(null, i, T, f, t), void 0, null);
        var _ = $y();
        if (_ === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        ws(_, Qs) || _C(i, t, f);
      }
      return f;
    }
    function _C(e, t, a) {
      e.flags |= ys;
      var i = {
        getSnapshot: t,
        value: a
      }, u = Wt.updateQueue;
      if (u === null)
        u = wC(), Wt.updateQueue = u, u.stores = [i];
      else {
        var f = u.stores;
        f === null ? u.stores = [i] : f.push(i);
      }
    }
    function kC(e, t, a, i) {
      t.value = a, t.getSnapshot = i, DC(t) && NC(e);
    }
    function OC(e, t, a) {
      var i = function() {
        DC(t) && NC(e);
      };
      return a(i);
    }
    function DC(e) {
      var t = e.getSnapshot, a = e.value;
      try {
        var i = t();
        return !$e(a, i);
      } catch {
        return !0;
      }
    }
    function NC(e) {
      var t = Ha(e, st);
      t !== null && gr(t, e, st, rn);
    }
    function cy(e) {
      var t = jo();
      typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e;
      var a = {
        pending: null,
        interleaved: null,
        lanes: ne,
        dispatch: null,
        lastRenderedReducer: $S,
        lastRenderedState: e
      };
      t.queue = a;
      var i = a.dispatch = IO.bind(null, Wt, a);
      return [t.memoizedState, i];
    }
    function BS(e) {
      return VS($S);
    }
    function YS(e) {
      return HS($S);
    }
    function fv(e, t, a, i) {
      var u = {
        tag: e,
        create: t,
        destroy: a,
        deps: i,
        // Circular
        next: null
      }, f = Wt.updateQueue;
      if (f === null)
        f = wC(), Wt.updateQueue = f, f.lastEffect = u.next = u;
      else {
        var h = f.lastEffect;
        if (h === null)
          f.lastEffect = u.next = u;
        else {
          var E = h.next;
          h.next = u, u.next = E, f.lastEffect = u;
        }
      }
      return u;
    }
    function WS(e) {
      var t = jo();
      {
        var a = {
          current: e
        };
        return t.memoizedState = a, a;
      }
    }
    function fy(e) {
      var t = xi();
      return t.memoizedState;
    }
    function dv(e, t, a, i) {
      var u = jo(), f = i === void 0 ? null : i;
      Wt.flags |= e, u.memoizedState = fv(fr | t, a, void 0, f);
    }
    function dy(e, t, a, i) {
      var u = xi(), f = i === void 0 ? null : i, h = void 0;
      if (pr !== null) {
        var E = pr.memoizedState;
        if (h = E.destroy, f !== null) {
          var b = E.deps;
          if (jS(f, b)) {
            u.memoizedState = fv(t, a, h, f);
            return;
          }
        }
      }
      Wt.flags |= e, u.memoizedState = fv(fr | t, a, h, f);
    }
    function py(e, t) {
      return (Wt.mode & za) !== it ? dv(ll | vn | Eo, zr, e, t) : dv(vn | Eo, zr, e, t);
    }
    function pv(e, t) {
      return dy(vn, zr, e, t);
    }
    function GS(e, t) {
      return dv(gt, Uo, e, t);
    }
    function vy(e, t) {
      return dy(gt, Uo, e, t);
    }
    function qS(e, t) {
      var a = gt;
      return a |= Qr, (Wt.mode & za) !== it && (a |= Kr), dv(a, dr, e, t);
    }
    function hy(e, t) {
      return dy(gt, dr, e, t);
    }
    function MC(e, t) {
      if (typeof t == "function") {
        var a = t, i = e();
        return a(i), function() {
          a(null);
        };
      } else if (t != null) {
        var u = t;
        u.hasOwnProperty("current") || m("Expected useImperativeHandle() first argument to either be a ref callback or React.createRef() object. Instead received: %s.", "an object with keys {" + Object.keys(u).join(", ") + "}");
        var f = e();
        return u.current = f, function() {
          u.current = null;
        };
      }
    }
    function QS(e, t, a) {
      typeof t != "function" && m("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = a != null ? a.concat([e]) : null, u = gt;
      return u |= Qr, (Wt.mode & za) !== it && (u |= Kr), dv(u, dr, MC.bind(null, t, e), i);
    }
    function my(e, t, a) {
      typeof t != "function" && m("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = a != null ? a.concat([e]) : null;
      return dy(gt, dr, MC.bind(null, t, e), i);
    }
    function $O(e, t) {
    }
    var yy = $O;
    function KS(e, t) {
      var a = jo(), i = t === void 0 ? null : t;
      return a.memoizedState = [e, i], e;
    }
    function gy(e, t) {
      var a = xi(), i = t === void 0 ? null : t, u = a.memoizedState;
      if (u !== null && i !== null) {
        var f = u[1];
        if (jS(i, f))
          return u[0];
      }
      return a.memoizedState = [e, i], e;
    }
    function XS(e, t) {
      var a = jo(), i = t === void 0 ? null : t, u = e();
      return a.memoizedState = [u, i], u;
    }
    function Sy(e, t) {
      var a = xi(), i = t === void 0 ? null : t, u = a.memoizedState;
      if (u !== null && i !== null) {
        var f = u[1];
        if (jS(i, f))
          return u[0];
      }
      var h = e();
      return a.memoizedState = [h, i], h;
    }
    function ZS(e) {
      var t = jo();
      return t.memoizedState = e, e;
    }
    function LC(e) {
      var t = xi(), a = pr, i = a.memoizedState;
      return zC(t, i, e);
    }
    function AC(e) {
      var t = xi();
      if (pr === null)
        return t.memoizedState = e, e;
      var a = pr.memoizedState;
      return zC(t, a, e);
    }
    function zC(e, t, a) {
      var i = !a0(Qs);
      if (i) {
        if (!$e(a, t)) {
          var u = vp();
          Wt.lanes = St(Wt.lanes, u), Ov(u), e.baseState = !0;
        }
        return t;
      } else
        return e.baseState && (e.baseState = !1, yv()), e.memoizedState = a, a;
    }
    function FO(e, t, a) {
      var i = Ua();
      Yn(Cr(i, cr)), e(!0);
      var u = uv.transition;
      uv.transition = {};
      var f = uv.transition;
      uv.transition._updatedFibers = /* @__PURE__ */ new Set();
      try {
        e(!1), t();
      } finally {
        if (Yn(i), uv.transition = u, u === null && f._updatedFibers) {
          var h = f._updatedFibers.size;
          h > 10 && S("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), f._updatedFibers.clear();
        }
      }
    }
    function JS() {
      var e = cy(!1), t = e[0], a = e[1], i = FO.bind(null, a), u = jo();
      return u.memoizedState = i, [t, i];
    }
    function PC() {
      var e = BS(), t = e[0], a = xi(), i = a.memoizedState;
      return [t, i];
    }
    function UC() {
      var e = YS(), t = e[0], a = xi(), i = a.memoizedState;
      return [t, i];
    }
    var jC = !1;
    function VO() {
      return jC;
    }
    function eE() {
      var e = jo(), t = $y(), a = t.identifierPrefix, i;
      if (Ar()) {
        var u = tO();
        i = ":" + a + "R" + u;
        var f = cv++;
        f > 0 && (i += "H" + f.toString(32)), i += ":";
      } else {
        var h = PO++;
        i = ":" + a + "r" + h.toString(32) + ":";
      }
      return e.memoizedState = i, i;
    }
    function Ey() {
      var e = xi(), t = e.memoizedState;
      return t;
    }
    function HO(e, t, a) {
      typeof arguments[3] == "function" && m("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var i = Hu(e), u = {
        lane: i,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if ($C(e))
        FC(t, u);
      else {
        var f = rC(e, t, u, i);
        if (f !== null) {
          var h = xa();
          gr(f, e, i, h), VC(f, t, i);
        }
      }
      HC(e, i);
    }
    function IO(e, t, a) {
      typeof arguments[3] == "function" && m("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var i = Hu(e), u = {
        lane: i,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if ($C(e))
        FC(t, u);
      else {
        var f = e.alternate;
        if (e.lanes === ne && (f === null || f.lanes === ne)) {
          var h = t.lastRenderedReducer;
          if (h !== null) {
            var E;
            E = Le.current, Le.current = Zi;
            try {
              var b = t.lastRenderedState, T = h(b, a);
              if (u.hasEagerState = !0, u.eagerState = T, $e(T, b)) {
                bO(e, t, u, i);
                return;
              }
            } catch {
            } finally {
              Le.current = E;
            }
          }
        }
        var _ = rC(e, t, u, i);
        if (_ !== null) {
          var $ = xa();
          gr(_, e, i, $), VC(_, t, i);
        }
      }
      HC(e, i);
    }
    function $C(e) {
      var t = e.alternate;
      return e === Wt || t !== null && t === Wt;
    }
    function FC(e, t) {
      sv = uy = !0;
      var a = e.pending;
      a === null ? t.next = t : (t.next = a.next, a.next = t), e.pending = t;
    }
    function VC(e, t, a) {
      if (pp(a)) {
        var i = t.lanes;
        i = hp(i, e.pendingLanes);
        var u = St(i, a);
        t.lanes = u, vu(e, u);
      }
    }
    function HC(e, t, a) {
      wo(e, t);
    }
    var by = {
      readContext: or,
      useCallback: aa,
      useContext: aa,
      useEffect: aa,
      useImperativeHandle: aa,
      useInsertionEffect: aa,
      useLayoutEffect: aa,
      useMemo: aa,
      useReducer: aa,
      useRef: aa,
      useState: aa,
      useDebugValue: aa,
      useDeferredValue: aa,
      useTransition: aa,
      useMutableSource: aa,
      useSyncExternalStore: aa,
      useId: aa,
      unstable_isNewReconciler: oe
    }, IC = null, BC = null, YC = null, WC = null, $o = null, Zi = null, Cy = null;
    {
      var tE = function() {
        m("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      }, vt = function() {
        m("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks");
      };
      IC = {
        readContext: function(e) {
          return or(e);
        },
        useCallback: function(e, t) {
          return re = "useCallback", $t(), Yf(t), KS(e, t);
        },
        useContext: function(e) {
          return re = "useContext", $t(), or(e);
        },
        useEffect: function(e, t) {
          return re = "useEffect", $t(), Yf(t), py(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return re = "useImperativeHandle", $t(), Yf(a), QS(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return re = "useInsertionEffect", $t(), Yf(t), GS(e, t);
        },
        useLayoutEffect: function(e, t) {
          return re = "useLayoutEffect", $t(), Yf(t), qS(e, t);
        },
        useMemo: function(e, t) {
          re = "useMemo", $t(), Yf(t);
          var a = Le.current;
          Le.current = $o;
          try {
            return XS(e, t);
          } finally {
            Le.current = a;
          }
        },
        useReducer: function(e, t, a) {
          re = "useReducer", $t();
          var i = Le.current;
          Le.current = $o;
          try {
            return FS(e, t, a);
          } finally {
            Le.current = i;
          }
        },
        useRef: function(e) {
          return re = "useRef", $t(), WS(e);
        },
        useState: function(e) {
          re = "useState", $t();
          var t = Le.current;
          Le.current = $o;
          try {
            return cy(e);
          } finally {
            Le.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return re = "useDebugValue", $t(), void 0;
        },
        useDeferredValue: function(e) {
          return re = "useDeferredValue", $t(), ZS(e);
        },
        useTransition: function() {
          return re = "useTransition", $t(), JS();
        },
        useMutableSource: function(e, t, a) {
          return re = "useMutableSource", $t(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return re = "useSyncExternalStore", $t(), IS(e, t, a);
        },
        useId: function() {
          return re = "useId", $t(), eE();
        },
        unstable_isNewReconciler: oe
      }, BC = {
        readContext: function(e) {
          return or(e);
        },
        useCallback: function(e, t) {
          return re = "useCallback", Te(), KS(e, t);
        },
        useContext: function(e) {
          return re = "useContext", Te(), or(e);
        },
        useEffect: function(e, t) {
          return re = "useEffect", Te(), py(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return re = "useImperativeHandle", Te(), QS(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return re = "useInsertionEffect", Te(), GS(e, t);
        },
        useLayoutEffect: function(e, t) {
          return re = "useLayoutEffect", Te(), qS(e, t);
        },
        useMemo: function(e, t) {
          re = "useMemo", Te();
          var a = Le.current;
          Le.current = $o;
          try {
            return XS(e, t);
          } finally {
            Le.current = a;
          }
        },
        useReducer: function(e, t, a) {
          re = "useReducer", Te();
          var i = Le.current;
          Le.current = $o;
          try {
            return FS(e, t, a);
          } finally {
            Le.current = i;
          }
        },
        useRef: function(e) {
          return re = "useRef", Te(), WS(e);
        },
        useState: function(e) {
          re = "useState", Te();
          var t = Le.current;
          Le.current = $o;
          try {
            return cy(e);
          } finally {
            Le.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return re = "useDebugValue", Te(), void 0;
        },
        useDeferredValue: function(e) {
          return re = "useDeferredValue", Te(), ZS(e);
        },
        useTransition: function() {
          return re = "useTransition", Te(), JS();
        },
        useMutableSource: function(e, t, a) {
          return re = "useMutableSource", Te(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return re = "useSyncExternalStore", Te(), IS(e, t, a);
        },
        useId: function() {
          return re = "useId", Te(), eE();
        },
        unstable_isNewReconciler: oe
      }, YC = {
        readContext: function(e) {
          return or(e);
        },
        useCallback: function(e, t) {
          return re = "useCallback", Te(), gy(e, t);
        },
        useContext: function(e) {
          return re = "useContext", Te(), or(e);
        },
        useEffect: function(e, t) {
          return re = "useEffect", Te(), pv(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return re = "useImperativeHandle", Te(), my(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return re = "useInsertionEffect", Te(), vy(e, t);
        },
        useLayoutEffect: function(e, t) {
          return re = "useLayoutEffect", Te(), hy(e, t);
        },
        useMemo: function(e, t) {
          re = "useMemo", Te();
          var a = Le.current;
          Le.current = Zi;
          try {
            return Sy(e, t);
          } finally {
            Le.current = a;
          }
        },
        useReducer: function(e, t, a) {
          re = "useReducer", Te();
          var i = Le.current;
          Le.current = Zi;
          try {
            return VS(e, t, a);
          } finally {
            Le.current = i;
          }
        },
        useRef: function(e) {
          return re = "useRef", Te(), fy();
        },
        useState: function(e) {
          re = "useState", Te();
          var t = Le.current;
          Le.current = Zi;
          try {
            return BS(e);
          } finally {
            Le.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return re = "useDebugValue", Te(), yy();
        },
        useDeferredValue: function(e) {
          return re = "useDeferredValue", Te(), LC(e);
        },
        useTransition: function() {
          return re = "useTransition", Te(), PC();
        },
        useMutableSource: function(e, t, a) {
          return re = "useMutableSource", Te(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return re = "useSyncExternalStore", Te(), sy(e, t);
        },
        useId: function() {
          return re = "useId", Te(), Ey();
        },
        unstable_isNewReconciler: oe
      }, WC = {
        readContext: function(e) {
          return or(e);
        },
        useCallback: function(e, t) {
          return re = "useCallback", Te(), gy(e, t);
        },
        useContext: function(e) {
          return re = "useContext", Te(), or(e);
        },
        useEffect: function(e, t) {
          return re = "useEffect", Te(), pv(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return re = "useImperativeHandle", Te(), my(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return re = "useInsertionEffect", Te(), vy(e, t);
        },
        useLayoutEffect: function(e, t) {
          return re = "useLayoutEffect", Te(), hy(e, t);
        },
        useMemo: function(e, t) {
          re = "useMemo", Te();
          var a = Le.current;
          Le.current = Cy;
          try {
            return Sy(e, t);
          } finally {
            Le.current = a;
          }
        },
        useReducer: function(e, t, a) {
          re = "useReducer", Te();
          var i = Le.current;
          Le.current = Cy;
          try {
            return HS(e, t, a);
          } finally {
            Le.current = i;
          }
        },
        useRef: function(e) {
          return re = "useRef", Te(), fy();
        },
        useState: function(e) {
          re = "useState", Te();
          var t = Le.current;
          Le.current = Cy;
          try {
            return YS(e);
          } finally {
            Le.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return re = "useDebugValue", Te(), yy();
        },
        useDeferredValue: function(e) {
          return re = "useDeferredValue", Te(), AC(e);
        },
        useTransition: function() {
          return re = "useTransition", Te(), UC();
        },
        useMutableSource: function(e, t, a) {
          return re = "useMutableSource", Te(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return re = "useSyncExternalStore", Te(), sy(e, t);
        },
        useId: function() {
          return re = "useId", Te(), Ey();
        },
        unstable_isNewReconciler: oe
      }, $o = {
        readContext: function(e) {
          return tE(), or(e);
        },
        useCallback: function(e, t) {
          return re = "useCallback", vt(), $t(), KS(e, t);
        },
        useContext: function(e) {
          return re = "useContext", vt(), $t(), or(e);
        },
        useEffect: function(e, t) {
          return re = "useEffect", vt(), $t(), py(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return re = "useImperativeHandle", vt(), $t(), QS(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return re = "useInsertionEffect", vt(), $t(), GS(e, t);
        },
        useLayoutEffect: function(e, t) {
          return re = "useLayoutEffect", vt(), $t(), qS(e, t);
        },
        useMemo: function(e, t) {
          re = "useMemo", vt(), $t();
          var a = Le.current;
          Le.current = $o;
          try {
            return XS(e, t);
          } finally {
            Le.current = a;
          }
        },
        useReducer: function(e, t, a) {
          re = "useReducer", vt(), $t();
          var i = Le.current;
          Le.current = $o;
          try {
            return FS(e, t, a);
          } finally {
            Le.current = i;
          }
        },
        useRef: function(e) {
          return re = "useRef", vt(), $t(), WS(e);
        },
        useState: function(e) {
          re = "useState", vt(), $t();
          var t = Le.current;
          Le.current = $o;
          try {
            return cy(e);
          } finally {
            Le.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return re = "useDebugValue", vt(), $t(), void 0;
        },
        useDeferredValue: function(e) {
          return re = "useDeferredValue", vt(), $t(), ZS(e);
        },
        useTransition: function() {
          return re = "useTransition", vt(), $t(), JS();
        },
        useMutableSource: function(e, t, a) {
          return re = "useMutableSource", vt(), $t(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return re = "useSyncExternalStore", vt(), $t(), IS(e, t, a);
        },
        useId: function() {
          return re = "useId", vt(), $t(), eE();
        },
        unstable_isNewReconciler: oe
      }, Zi = {
        readContext: function(e) {
          return tE(), or(e);
        },
        useCallback: function(e, t) {
          return re = "useCallback", vt(), Te(), gy(e, t);
        },
        useContext: function(e) {
          return re = "useContext", vt(), Te(), or(e);
        },
        useEffect: function(e, t) {
          return re = "useEffect", vt(), Te(), pv(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return re = "useImperativeHandle", vt(), Te(), my(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return re = "useInsertionEffect", vt(), Te(), vy(e, t);
        },
        useLayoutEffect: function(e, t) {
          return re = "useLayoutEffect", vt(), Te(), hy(e, t);
        },
        useMemo: function(e, t) {
          re = "useMemo", vt(), Te();
          var a = Le.current;
          Le.current = Zi;
          try {
            return Sy(e, t);
          } finally {
            Le.current = a;
          }
        },
        useReducer: function(e, t, a) {
          re = "useReducer", vt(), Te();
          var i = Le.current;
          Le.current = Zi;
          try {
            return VS(e, t, a);
          } finally {
            Le.current = i;
          }
        },
        useRef: function(e) {
          return re = "useRef", vt(), Te(), fy();
        },
        useState: function(e) {
          re = "useState", vt(), Te();
          var t = Le.current;
          Le.current = Zi;
          try {
            return BS(e);
          } finally {
            Le.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return re = "useDebugValue", vt(), Te(), yy();
        },
        useDeferredValue: function(e) {
          return re = "useDeferredValue", vt(), Te(), LC(e);
        },
        useTransition: function() {
          return re = "useTransition", vt(), Te(), PC();
        },
        useMutableSource: function(e, t, a) {
          return re = "useMutableSource", vt(), Te(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return re = "useSyncExternalStore", vt(), Te(), sy(e, t);
        },
        useId: function() {
          return re = "useId", vt(), Te(), Ey();
        },
        unstable_isNewReconciler: oe
      }, Cy = {
        readContext: function(e) {
          return tE(), or(e);
        },
        useCallback: function(e, t) {
          return re = "useCallback", vt(), Te(), gy(e, t);
        },
        useContext: function(e) {
          return re = "useContext", vt(), Te(), or(e);
        },
        useEffect: function(e, t) {
          return re = "useEffect", vt(), Te(), pv(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return re = "useImperativeHandle", vt(), Te(), my(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return re = "useInsertionEffect", vt(), Te(), vy(e, t);
        },
        useLayoutEffect: function(e, t) {
          return re = "useLayoutEffect", vt(), Te(), hy(e, t);
        },
        useMemo: function(e, t) {
          re = "useMemo", vt(), Te();
          var a = Le.current;
          Le.current = Zi;
          try {
            return Sy(e, t);
          } finally {
            Le.current = a;
          }
        },
        useReducer: function(e, t, a) {
          re = "useReducer", vt(), Te();
          var i = Le.current;
          Le.current = Zi;
          try {
            return HS(e, t, a);
          } finally {
            Le.current = i;
          }
        },
        useRef: function(e) {
          return re = "useRef", vt(), Te(), fy();
        },
        useState: function(e) {
          re = "useState", vt(), Te();
          var t = Le.current;
          Le.current = Zi;
          try {
            return YS(e);
          } finally {
            Le.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return re = "useDebugValue", vt(), Te(), yy();
        },
        useDeferredValue: function(e) {
          return re = "useDeferredValue", vt(), Te(), AC(e);
        },
        useTransition: function() {
          return re = "useTransition", vt(), Te(), UC();
        },
        useMutableSource: function(e, t, a) {
          return re = "useMutableSource", vt(), Te(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return re = "useSyncExternalStore", vt(), Te(), sy(e, t);
        },
        useId: function() {
          return re = "useId", vt(), Te(), Ey();
        },
        unstable_isNewReconciler: oe
      };
    }
    var ju = s.unstable_now, GC = 0, xy = -1, vv = -1, Ty = -1, nE = !1, Ry = !1;
    function qC() {
      return nE;
    }
    function BO() {
      Ry = !0;
    }
    function YO() {
      nE = !1, Ry = !1;
    }
    function WO() {
      nE = Ry, Ry = !1;
    }
    function QC() {
      return GC;
    }
    function KC() {
      GC = ju();
    }
    function rE(e) {
      vv = ju(), e.actualStartTime < 0 && (e.actualStartTime = ju());
    }
    function XC(e) {
      vv = -1;
    }
    function wy(e, t) {
      if (vv >= 0) {
        var a = ju() - vv;
        e.actualDuration += a, t && (e.selfBaseDuration = a), vv = -1;
      }
    }
    function Fo(e) {
      if (xy >= 0) {
        var t = ju() - xy;
        xy = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case N:
              var i = a.stateNode;
              i.effectDuration += t;
              return;
            case J:
              var u = a.stateNode;
              u.effectDuration += t;
              return;
          }
          a = a.return;
        }
      }
    }
    function aE(e) {
      if (Ty >= 0) {
        var t = ju() - Ty;
        Ty = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case N:
              var i = a.stateNode;
              i !== null && (i.passiveEffectDuration += t);
              return;
            case J:
              var u = a.stateNode;
              u !== null && (u.passiveEffectDuration += t);
              return;
          }
          a = a.return;
        }
      }
    }
    function Vo() {
      xy = ju();
    }
    function iE() {
      Ty = ju();
    }
    function oE(e) {
      for (var t = e.child; t; )
        e.actualDuration += t.actualDuration, t = t.sibling;
    }
    function Ks(e, t) {
      return {
        value: e,
        source: t,
        stack: xd(t),
        digest: null
      };
    }
    function lE(e, t, a) {
      return {
        value: e,
        source: null,
        stack: a ?? null,
        digest: t ?? null
      };
    }
    function GO(e, t) {
      return !0;
    }
    function uE(e, t) {
      try {
        var a = GO(e, t);
        if (a === !1)
          return;
        var i = t.value, u = t.source, f = t.stack, h = f !== null ? f : "";
        if (i != null && i._suppressLogging) {
          if (e.tag === k)
            return;
          console.error(i);
        }
        var E = u ? yt(u) : null, b = E ? "The above error occurred in the <" + E + "> component:" : "The above error occurred in one of your React components:", T;
        if (e.tag === N)
          T = `Consider adding an error boundary to your tree to customize error handling behavior.
Visit https://reactjs.org/link/error-boundaries to learn more about error boundaries.`;
        else {
          var _ = yt(e) || "Anonymous";
          T = "React will try to recreate this component tree from scratch " + ("using the error boundary you provided, " + _ + ".");
        }
        var $ = b + `
` + h + `

` + ("" + T);
        console.error($);
      } catch (U) {
        setTimeout(function() {
          throw U;
        });
      }
    }
    var qO = typeof WeakMap == "function" ? WeakMap : Map;
    function ZC(e, t, a) {
      var i = Ll(rn, a);
      i.tag = uS, i.payload = {
        element: null
      };
      var u = t.value;
      return i.callback = function() {
        FN(u), uE(e, t);
      }, i;
    }
    function sE(e, t, a) {
      var i = Ll(rn, a);
      i.tag = uS;
      var u = e.type.getDerivedStateFromError;
      if (typeof u == "function") {
        var f = t.value;
        i.payload = function() {
          return u(f);
        }, i.callback = function() {
          sT(e), uE(e, t);
        };
      }
      var h = e.stateNode;
      return h !== null && typeof h.componentDidCatch == "function" && (i.callback = function() {
        sT(e), uE(e, t), typeof u != "function" && jN(this);
        var b = t.value, T = t.stack;
        this.componentDidCatch(b, {
          componentStack: T !== null ? T : ""
        }), typeof u != "function" && (ta(e.lanes, st) || m("%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.", yt(e) || "Unknown"));
      }), i;
    }
    function JC(e, t, a) {
      var i = e.pingCache, u;
      if (i === null ? (i = e.pingCache = new qO(), u = /* @__PURE__ */ new Set(), i.set(t, u)) : (u = i.get(t), u === void 0 && (u = /* @__PURE__ */ new Set(), i.set(t, u))), !u.has(a)) {
        u.add(a);
        var f = VN.bind(null, e, t, a);
        sr && Dv(e, a), t.then(f, f);
      }
    }
    function QO(e, t, a, i) {
      var u = e.updateQueue;
      if (u === null) {
        var f = /* @__PURE__ */ new Set();
        f.add(a), e.updateQueue = f;
      } else
        u.add(a);
    }
    function KO(e, t) {
      var a = e.tag;
      if ((e.mode & Tt) === it && (a === w || a === K || a === ie)) {
        var i = e.alternate;
        i ? (e.updateQueue = i.updateQueue, e.memoizedState = i.memoizedState, e.lanes = i.lanes) : (e.updateQueue = null, e.memoizedState = null);
      }
    }
    function ex(e) {
      var t = e;
      do {
        if (t.tag === D && AO(t))
          return t;
        t = t.return;
      } while (t !== null);
      return null;
    }
    function tx(e, t, a, i, u) {
      if ((e.mode & Tt) === it) {
        if (e === t)
          e.flags |= tr;
        else {
          if (e.flags |= dt, a.flags |= gs, a.flags &= ~(Nc | ha), a.tag === k) {
            var f = a.alternate;
            if (f === null)
              a.tag = ot;
            else {
              var h = Ll(rn, st);
              h.tag = Km, Au(a, h, st);
            }
          }
          a.lanes = St(a.lanes, st);
        }
        return e;
      }
      return e.flags |= tr, e.lanes = u, e;
    }
    function XO(e, t, a, i, u) {
      if (a.flags |= ha, sr && Dv(e, u), i !== null && typeof i == "object" && typeof i.then == "function") {
        var f = i;
        KO(a), Ar() && a.mode & Tt && Y1();
        var h = ex(t);
        if (h !== null) {
          h.flags &= ~Rn, tx(h, t, a, e, u), h.mode & Tt && JC(e, f, u), QO(h, e, f);
          return;
        } else {
          if (!du(u)) {
            JC(e, f, u), HE();
            return;
          }
          var E = new Error("A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.");
          i = E;
        }
      } else if (Ar() && a.mode & Tt) {
        Y1();
        var b = ex(t);
        if (b !== null) {
          (b.flags & tr) === et && (b.flags |= Rn), tx(b, t, a, e, u), tS(Ks(i, a));
          return;
        }
      }
      i = Ks(i, a), DN(i);
      var T = t;
      do {
        switch (T.tag) {
          case N: {
            var _ = i;
            T.flags |= tr;
            var $ = Bn(u);
            T.lanes = St(T.lanes, $);
            var U = ZC(T, _, $);
            fS(T, U);
            return;
          }
          case k:
            var q = i, Q = T.type, ee = T.stateNode;
            if ((T.flags & dt) === et && (typeof Q.getDerivedStateFromError == "function" || ee !== null && typeof ee.componentDidCatch == "function" && !eT(ee))) {
              T.flags |= tr;
              var Ae = Bn(u);
              T.lanes = St(T.lanes, Ae);
              var tt = sE(T, q, Ae);
              fS(T, tt);
              return;
            }
            break;
        }
        T = T.return;
      } while (T !== null);
    }
    function ZO() {
      return null;
    }
    var hv = d.ReactCurrentOwner, Ji = !1, cE, mv, fE, dE, pE, Xs, vE, _y;
    cE = {}, mv = {}, fE = {}, dE = {}, pE = {}, Xs = !1, vE = {}, _y = {};
    function ba(e, t, a, i) {
      e === null ? t.child = SC(t, null, a, i) : t.child = Ff(t, e.child, a, i);
    }
    function JO(e, t, a, i) {
      t.child = Ff(t, e.child, null, i), t.child = Ff(t, null, a, i);
    }
    function nx(e, t, a, i, u) {
      if (t.type !== t.elementType) {
        var f = a.propTypes;
        f && Gi(
          f,
          i,
          // Resolved props
          "prop",
          tn(a)
        );
      }
      var h = a.render, E = t.ref, b, T;
      $f(t, u), Ro(t);
      {
        if (hv.current = t, Za(!0), b = Wf(e, t, h, i, E, u), T = Gf(), t.mode & En) {
          In(!0);
          try {
            b = Wf(e, t, h, i, E, u), T = Gf();
          } finally {
            In(!1);
          }
        }
        Za(!1);
      }
      return ul(), e !== null && !Ji ? (TC(e, t, u), Al(e, t, u)) : (Ar() && T && Q0(t), t.flags |= go, ba(e, t, b, u), t.child);
    }
    function rx(e, t, a, i, u) {
      if (e === null) {
        var f = a.type;
        if (aM(f) && a.compare === null && // SimpleMemoComponent codepath doesn't resolve outer props either.
        a.defaultProps === void 0) {
          var h = f;
          return h = td(f), t.tag = ie, t.type = h, yE(t, f), ax(e, t, h, i, u);
        }
        {
          var E = f.propTypes;
          E && Gi(
            E,
            i,
            // Resolved props
            "prop",
            tn(f)
          );
        }
        var b = JE(a.type, null, i, t, t.mode, u);
        return b.ref = t.ref, b.return = t, t.child = b, b;
      }
      {
        var T = a.type, _ = T.propTypes;
        _ && Gi(
          _,
          i,
          // Resolved props
          "prop",
          tn(T)
        );
      }
      var $ = e.child, U = xE(e, u);
      if (!U) {
        var q = $.memoizedProps, Q = a.compare;
        if (Q = Q !== null ? Q : Je, Q(q, i) && e.ref === t.ref)
          return Al(e, t, u);
      }
      t.flags |= go;
      var ee = nc($, i);
      return ee.ref = t.ref, ee.return = t, t.child = ee, ee;
    }
    function ax(e, t, a, i, u) {
      if (t.type !== t.elementType) {
        var f = t.elementType;
        if (f.$$typeof === lt) {
          var h = f, E = h._payload, b = h._init;
          try {
            f = b(E);
          } catch {
            f = null;
          }
          var T = f && f.propTypes;
          T && Gi(
            T,
            i,
            // Resolved (SimpleMemoComponent has no defaultProps)
            "prop",
            tn(f)
          );
        }
      }
      if (e !== null) {
        var _ = e.memoizedProps;
        if (Je(_, i) && e.ref === t.ref && // Prevent bailout if the implementation changed due to hot reload.
        t.type === e.type)
          if (Ji = !1, t.pendingProps = i = _, xE(e, u))
            (e.flags & gs) !== et && (Ji = !0);
          else
            return t.lanes = e.lanes, Al(e, t, u);
      }
      return hE(e, t, a, i, u);
    }
    function ix(e, t, a) {
      var i = t.pendingProps, u = i.children, f = e !== null ? e.memoizedState : null;
      if (i.mode === "hidden" || I)
        if ((t.mode & Tt) === it) {
          var h = {
            baseLanes: ne,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = h, Fy(t, a);
        } else if (ta(a, ea)) {
          var $ = {
            baseLanes: ne,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = $;
          var U = f !== null ? f.baseLanes : a;
          Fy(t, U);
        } else {
          var E = null, b;
          if (f !== null) {
            var T = f.baseLanes;
            b = St(T, a);
          } else
            b = a;
          t.lanes = t.childLanes = ea;
          var _ = {
            baseLanes: b,
            cachePool: E,
            transitions: null
          };
          return t.memoizedState = _, t.updateQueue = null, Fy(t, b), null;
        }
      else {
        var q;
        f !== null ? (q = St(f.baseLanes, a), t.memoizedState = null) : q = a, Fy(t, q);
      }
      return ba(e, t, u, a), t.child;
    }
    function eD(e, t, a) {
      var i = t.pendingProps;
      return ba(e, t, i, a), t.child;
    }
    function tD(e, t, a) {
      var i = t.pendingProps.children;
      return ba(e, t, i, a), t.child;
    }
    function nD(e, t, a) {
      {
        t.flags |= gt;
        {
          var i = t.stateNode;
          i.effectDuration = 0, i.passiveEffectDuration = 0;
        }
      }
      var u = t.pendingProps, f = u.children;
      return ba(e, t, f, a), t.child;
    }
    function ox(e, t) {
      var a = t.ref;
      (e === null && a !== null || e !== null && e.ref !== a) && (t.flags |= qr, t.flags |= Zd);
    }
    function hE(e, t, a, i, u) {
      if (t.type !== t.elementType) {
        var f = a.propTypes;
        f && Gi(
          f,
          i,
          // Resolved props
          "prop",
          tn(a)
        );
      }
      var h;
      {
        var E = Lf(t, a, !0);
        h = Af(t, E);
      }
      var b, T;
      $f(t, u), Ro(t);
      {
        if (hv.current = t, Za(!0), b = Wf(e, t, a, i, h, u), T = Gf(), t.mode & En) {
          In(!0);
          try {
            b = Wf(e, t, a, i, h, u), T = Gf();
          } finally {
            In(!1);
          }
        }
        Za(!1);
      }
      return ul(), e !== null && !Ji ? (TC(e, t, u), Al(e, t, u)) : (Ar() && T && Q0(t), t.flags |= go, ba(e, t, b, u), t.child);
    }
    function lx(e, t, a, i, u) {
      {
        switch (SM(t)) {
          case !1: {
            var f = t.stateNode, h = t.type, E = new h(t.memoizedProps, f.context), b = E.state;
            f.updater.enqueueSetState(f, b, null);
            break;
          }
          case !0: {
            t.flags |= dt, t.flags |= tr;
            var T = new Error("Simulated error coming from DevTools"), _ = Bn(u);
            t.lanes = St(t.lanes, _);
            var $ = sE(t, Ks(T, t), _);
            fS(t, $);
            break;
          }
        }
        if (t.type !== t.elementType) {
          var U = a.propTypes;
          U && Gi(
            U,
            i,
            // Resolved props
            "prop",
            tn(a)
          );
        }
      }
      var q;
      Po(a) ? (q = !0, $m(t)) : q = !1, $f(t, u);
      var Q = t.stateNode, ee;
      Q === null ? (Oy(e, t), vC(t, a, i), xS(t, a, i, u), ee = !0) : e === null ? ee = kO(t, a, i, u) : ee = OO(e, t, a, i, u);
      var Ae = mE(e, t, a, ee, q, u);
      {
        var tt = t.stateNode;
        ee && tt.props !== i && (Xs || m("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.", yt(t) || "a component"), Xs = !0);
      }
      return Ae;
    }
    function mE(e, t, a, i, u, f) {
      ox(e, t);
      var h = (t.flags & dt) !== et;
      if (!i && !h)
        return u && V1(t, a, !1), Al(e, t, f);
      var E = t.stateNode;
      hv.current = t;
      var b;
      if (h && typeof a.getDerivedStateFromError != "function")
        b = null, XC();
      else {
        Ro(t);
        {
          if (Za(!0), b = E.render(), t.mode & En) {
            In(!0);
            try {
              E.render();
            } finally {
              In(!1);
            }
          }
          Za(!1);
        }
        ul();
      }
      return t.flags |= go, e !== null && h ? JO(e, t, b, f) : ba(e, t, b, f), t.memoizedState = E.state, u && V1(t, a, !0), t.child;
    }
    function ux(e) {
      var t = e.stateNode;
      t.pendingContext ? $1(e, t.pendingContext, t.pendingContext !== t.context) : t.context && $1(e, t.context, !1), OS(e, t.containerInfo);
    }
    function rD(e, t, a) {
      if (ux(t), e === null)
        throw new Error("Should have a current fiber. This is a bug in React.");
      var i = t.pendingProps, u = t.memoizedState, f = u.element;
      oC(e, t), ey(t, i, null, a);
      var h = t.memoizedState;
      t.stateNode;
      var E = h.element;
      if (u.isDehydrated) {
        var b = {
          element: E,
          isDehydrated: !1,
          cache: h.cache,
          pendingSuspenseBoundaries: h.pendingSuspenseBoundaries,
          transitions: h.transitions
        }, T = t.updateQueue;
        if (T.baseState = b, t.memoizedState = b, t.flags & Rn) {
          var _ = Ks(new Error("There was an error while hydrating. Because the error happened outside of a Suspense boundary, the entire root will switch to client rendering."), t);
          return sx(e, t, E, a, _);
        } else if (E !== f) {
          var $ = Ks(new Error("This root received an early update, before anything was able hydrate. Switched the entire root to client rendering."), t);
          return sx(e, t, E, a, $);
        } else {
          lO(t);
          var U = SC(t, null, E, a);
          t.child = U;
          for (var q = U; q; )
            q.flags = q.flags & ~ln | Ma, q = q.sibling;
        }
      } else {
        if (Uf(), E === f)
          return Al(e, t, a);
        ba(e, t, E, a);
      }
      return t.child;
    }
    function sx(e, t, a, i, u) {
      return Uf(), tS(u), t.flags |= Rn, ba(e, t, a, i), t.child;
    }
    function aD(e, t, a) {
      bC(t), e === null && eS(t);
      var i = t.type, u = t.pendingProps, f = e !== null ? e.memoizedProps : null, h = u.children, E = z0(i, u);
      return E ? h = null : f !== null && z0(i, f) && (t.flags |= jt), ox(e, t), ba(e, t, h, a), t.child;
    }
    function iD(e, t) {
      return e === null && eS(t), null;
    }
    function oD(e, t, a, i) {
      Oy(e, t);
      var u = t.pendingProps, f = a, h = f._payload, E = f._init, b = E(h);
      t.type = b;
      var T = t.tag = iM(b), _ = Ki(b, u), $;
      switch (T) {
        case w:
          return yE(t, b), t.type = b = td(b), $ = hE(null, t, b, _, i), $;
        case k:
          return t.type = b = GE(b), $ = lx(null, t, b, _, i), $;
        case K:
          return t.type = b = qE(b), $ = nx(null, t, b, _, i), $;
        case ve: {
          if (t.type !== t.elementType) {
            var U = b.propTypes;
            U && Gi(
              U,
              _,
              // Resolved for outer only
              "prop",
              tn(b)
            );
          }
          return $ = rx(
            null,
            t,
            b,
            Ki(b.type, _),
            // The inner type can have defaults too
            i
          ), $;
        }
      }
      var q = "";
      throw b !== null && typeof b == "object" && b.$$typeof === lt && (q = " Did you wrap a component in React.lazy() more than once?"), new Error("Element type is invalid. Received a promise that resolves to: " + b + ". " + ("Lazy element type must resolve to a class or function." + q));
    }
    function lD(e, t, a, i, u) {
      Oy(e, t), t.tag = k;
      var f;
      return Po(a) ? (f = !0, $m(t)) : f = !1, $f(t, u), vC(t, a, i), xS(t, a, i, u), mE(null, t, a, !0, f, u);
    }
    function uD(e, t, a, i) {
      Oy(e, t);
      var u = t.pendingProps, f;
      {
        var h = Lf(t, a, !1);
        f = Af(t, h);
      }
      $f(t, i);
      var E, b;
      Ro(t);
      {
        if (a.prototype && typeof a.prototype.render == "function") {
          var T = tn(a) || "Unknown";
          cE[T] || (m("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", T, T), cE[T] = !0);
        }
        t.mode & En && Qi.recordLegacyContextWarning(t, null), Za(!0), hv.current = t, E = Wf(null, t, a, u, f, i), b = Gf(), Za(!1);
      }
      if (ul(), t.flags |= go, typeof E == "object" && E !== null && typeof E.render == "function" && E.$$typeof === void 0) {
        var _ = tn(a) || "Unknown";
        mv[_] || (m("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", _, _, _), mv[_] = !0);
      }
      if (
        // Run these checks in production only if the flag is off.
        // Eventually we'll delete this branch altogether.
        typeof E == "object" && E !== null && typeof E.render == "function" && E.$$typeof === void 0
      ) {
        {
          var $ = tn(a) || "Unknown";
          mv[$] || (m("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", $, $, $), mv[$] = !0);
        }
        t.tag = k, t.memoizedState = null, t.updateQueue = null;
        var U = !1;
        return Po(a) ? (U = !0, $m(t)) : U = !1, t.memoizedState = E.state !== null && E.state !== void 0 ? E.state : null, cS(t), pC(t, E), xS(t, a, u, i), mE(null, t, a, !0, U, i);
      } else {
        if (t.tag = w, t.mode & En) {
          In(!0);
          try {
            E = Wf(null, t, a, u, f, i), b = Gf();
          } finally {
            In(!1);
          }
        }
        return Ar() && b && Q0(t), ba(null, t, E, i), yE(t, a), t.child;
      }
    }
    function yE(e, t) {
      {
        if (t && t.childContextTypes && m("%s(...): childContextTypes cannot be defined on a function component.", t.displayName || t.name || "Component"), e.ref !== null) {
          var a = "", i = ka();
          i && (a += `

Check the render method of \`` + i + "`.");
          var u = i || "", f = e._debugSource;
          f && (u = f.fileName + ":" + f.lineNumber), pE[u] || (pE[u] = !0, m("Function components cannot be given refs. Attempts to access this ref will fail. Did you mean to use React.forwardRef()?%s", a));
        }
        if (typeof t.getDerivedStateFromProps == "function") {
          var h = tn(t) || "Unknown";
          dE[h] || (m("%s: Function components do not support getDerivedStateFromProps.", h), dE[h] = !0);
        }
        if (typeof t.contextType == "object" && t.contextType !== null) {
          var E = tn(t) || "Unknown";
          fE[E] || (m("%s: Function components do not support contextType.", E), fE[E] = !0);
        }
      }
    }
    var gE = {
      dehydrated: null,
      treeContext: null,
      retryLane: Ot
    };
    function SE(e) {
      return {
        baseLanes: e,
        cachePool: ZO(),
        transitions: null
      };
    }
    function sD(e, t) {
      var a = null;
      return {
        baseLanes: St(e.baseLanes, t),
        cachePool: a,
        transitions: e.transitions
      };
    }
    function cD(e, t, a, i) {
      if (t !== null) {
        var u = t.memoizedState;
        if (u === null)
          return !1;
      }
      return MS(e, lv);
    }
    function fD(e, t) {
      return pu(e.childLanes, t);
    }
    function cx(e, t, a) {
      var i = t.pendingProps;
      EM(t) && (t.flags |= dt);
      var u = Xi.current, f = !1, h = (t.flags & dt) !== et;
      if (h || cD(u, e) ? (f = !0, t.flags &= ~dt) : (e === null || e.memoizedState !== null) && (u = LO(u, xC)), u = Hf(u), Pu(t, u), e === null) {
        eS(t);
        var E = t.memoizedState;
        if (E !== null) {
          var b = E.dehydrated;
          if (b !== null)
            return mD(t, b);
        }
        var T = i.children, _ = i.fallback;
        if (f) {
          var $ = dD(t, T, _, a), U = t.child;
          return U.memoizedState = SE(a), t.memoizedState = gE, $;
        } else
          return EE(t, T);
      } else {
        var q = e.memoizedState;
        if (q !== null) {
          var Q = q.dehydrated;
          if (Q !== null)
            return yD(e, t, h, i, Q, q, a);
        }
        if (f) {
          var ee = i.fallback, Ae = i.children, tt = vD(e, t, Ae, ee, a), Qe = t.child, Nt = e.child.memoizedState;
          return Qe.memoizedState = Nt === null ? SE(a) : sD(Nt, a), Qe.childLanes = fD(e, a), t.memoizedState = gE, tt;
        } else {
          var kt = i.children, Y = pD(e, t, kt, a);
          return t.memoizedState = null, Y;
        }
      }
    }
    function EE(e, t, a) {
      var i = e.mode, u = {
        mode: "visible",
        children: t
      }, f = bE(u, i);
      return f.return = e, e.child = f, f;
    }
    function dD(e, t, a, i) {
      var u = e.mode, f = e.child, h = {
        mode: "hidden",
        children: t
      }, E, b;
      return (u & Tt) === it && f !== null ? (E = f, E.childLanes = ne, E.pendingProps = h, e.mode & ut && (E.actualDuration = 0, E.actualStartTime = -1, E.selfBaseDuration = 0, E.treeBaseDuration = 0), b = Bu(a, u, i, null)) : (E = bE(h, u), b = Bu(a, u, i, null)), E.return = e, b.return = e, E.sibling = b, e.child = E, b;
    }
    function bE(e, t, a) {
      return fT(e, t, ne, null);
    }
    function fx(e, t) {
      return nc(e, t);
    }
    function pD(e, t, a, i) {
      var u = e.child, f = u.sibling, h = fx(u, {
        mode: "visible",
        children: a
      });
      if ((t.mode & Tt) === it && (h.lanes = i), h.return = t, h.sibling = null, f !== null) {
        var E = t.deletions;
        E === null ? (t.deletions = [f], t.flags |= Ut) : E.push(f);
      }
      return t.child = h, h;
    }
    function vD(e, t, a, i, u) {
      var f = t.mode, h = e.child, E = h.sibling, b = {
        mode: "hidden",
        children: a
      }, T;
      if (
        // In legacy mode, we commit the primary tree as if it successfully
        // completed, even though it's in an inconsistent state.
        (f & Tt) === it && // Make sure we're on the second pass, i.e. the primary child fragment was
        // already cloned. In legacy mode, the only case where this isn't true is
        // when DevTools forces us to display a fallback; we skip the first render
        // pass entirely and go straight to rendering the fallback. (In Concurrent
        // Mode, SuspenseList can also trigger this scenario, but this is a legacy-
        // only codepath.)
        t.child !== h
      ) {
        var _ = t.child;
        T = _, T.childLanes = ne, T.pendingProps = b, t.mode & ut && (T.actualDuration = 0, T.actualStartTime = -1, T.selfBaseDuration = h.selfBaseDuration, T.treeBaseDuration = h.treeBaseDuration), t.deletions = null;
      } else
        T = fx(h, b), T.subtreeFlags = h.subtreeFlags & ur;
      var $;
      return E !== null ? $ = nc(E, i) : ($ = Bu(i, f, u, null), $.flags |= ln), $.return = t, T.return = t, T.sibling = $, t.child = T, $;
    }
    function ky(e, t, a, i) {
      i !== null && tS(i), Ff(t, e.child, null, a);
      var u = t.pendingProps, f = u.children, h = EE(t, f);
      return h.flags |= ln, t.memoizedState = null, h;
    }
    function hD(e, t, a, i, u) {
      var f = t.mode, h = {
        mode: "visible",
        children: a
      }, E = bE(h, f), b = Bu(i, f, u, null);
      return b.flags |= ln, E.return = t, b.return = t, E.sibling = b, t.child = E, (t.mode & Tt) !== it && Ff(t, e.child, null, u), b;
    }
    function mD(e, t, a) {
      return (e.mode & Tt) === it ? (m("Cannot hydrate Suspense in legacy mode. Switch from ReactDOM.hydrate(element, container) to ReactDOMClient.hydrateRoot(container, <App />).render(element) or remove the Suspense components from the server rendered components."), e.lanes = st) : $0(t) ? e.lanes = fl : e.lanes = ea, null;
    }
    function yD(e, t, a, i, u, f, h) {
      if (a)
        if (t.flags & Rn) {
          t.flags &= ~Rn;
          var Y = lE(new Error("There was an error while hydrating this Suspense boundary. Switched to client rendering."));
          return ky(e, t, h, Y);
        } else {
          if (t.memoizedState !== null)
            return t.child = e.child, t.flags |= dt, null;
          var te = i.children, W = i.fallback, me = hD(e, t, te, W, h), ze = t.child;
          return ze.memoizedState = SE(h), t.memoizedState = gE, me;
        }
      else {
        if (iO(), (t.mode & Tt) === it)
          return ky(
            e,
            t,
            h,
            // TODO: When we delete legacy mode, we should make this error argument
            // required — every concurrent mode path that causes hydration to
            // de-opt to client rendering should have an error message.
            null
          );
        if ($0(u)) {
          var E, b, T;
          {
            var _ = Ck(u);
            E = _.digest, b = _.message, T = _.stack;
          }
          var $;
          b ? $ = new Error(b) : $ = new Error("The server could not finish this Suspense boundary, likely due to an error during server rendering. Switched to client rendering.");
          var U = lE($, E, T);
          return ky(e, t, h, U);
        }
        var q = ta(h, e.childLanes);
        if (Ji || q) {
          var Q = $y();
          if (Q !== null) {
            var ee = o0(Q, h);
            if (ee !== Ot && ee !== f.retryLane) {
              f.retryLane = ee;
              var Ae = rn;
              Ha(e, ee), gr(Q, e, ee, Ae);
            }
          }
          HE();
          var tt = lE(new Error("This Suspense boundary received an update before it finished hydrating. This caused the boundary to switch to client rendering. The usual way to fix this is to wrap the original update in startTransition."));
          return ky(e, t, h, tt);
        } else if (L1(u)) {
          t.flags |= dt, t.child = e.child;
          var Qe = HN.bind(null, e);
          return xk(u, Qe), null;
        } else {
          uO(t, u, f.treeContext);
          var Nt = i.children, kt = EE(t, Nt);
          return kt.flags |= Ma, kt;
        }
      }
    }
    function dx(e, t, a) {
      e.lanes = St(e.lanes, t);
      var i = e.alternate;
      i !== null && (i.lanes = St(i.lanes, t)), oS(e.return, t, a);
    }
    function gD(e, t, a) {
      for (var i = t; i !== null; ) {
        if (i.tag === D) {
          var u = i.memoizedState;
          u !== null && dx(i, a, e);
        } else if (i.tag === _e)
          dx(i, a, e);
        else if (i.child !== null) {
          i.child.return = i, i = i.child;
          continue;
        }
        if (i === e)
          return;
        for (; i.sibling === null; ) {
          if (i.return === null || i.return === e)
            return;
          i = i.return;
        }
        i.sibling.return = i.return, i = i.sibling;
      }
    }
    function SD(e) {
      for (var t = e, a = null; t !== null; ) {
        var i = t.alternate;
        i !== null && ly(i) === null && (a = t), t = t.sibling;
      }
      return a;
    }
    function ED(e) {
      if (e !== void 0 && e !== "forwards" && e !== "backwards" && e !== "together" && !vE[e])
        if (vE[e] = !0, typeof e == "string")
          switch (e.toLowerCase()) {
            case "together":
            case "forwards":
            case "backwards": {
              m('"%s" is not a valid value for revealOrder on <SuspenseList />. Use lowercase "%s" instead.', e, e.toLowerCase());
              break;
            }
            case "forward":
            case "backward": {
              m('"%s" is not a valid value for revealOrder on <SuspenseList />. React uses the -s suffix in the spelling. Use "%ss" instead.', e, e.toLowerCase());
              break;
            }
            default:
              m('"%s" is not a supported revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?', e);
              break;
          }
        else
          m('%s is not a supported value for revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?', e);
    }
    function bD(e, t) {
      e !== void 0 && !_y[e] && (e !== "collapsed" && e !== "hidden" ? (_y[e] = !0, m('"%s" is not a supported value for tail on <SuspenseList />. Did you mean "collapsed" or "hidden"?', e)) : t !== "forwards" && t !== "backwards" && (_y[e] = !0, m('<SuspenseList tail="%s" /> is only valid if revealOrder is "forwards" or "backwards". Did you mean to specify revealOrder="forwards"?', e)));
    }
    function px(e, t) {
      {
        var a = Jn(e), i = !a && typeof Di(e) == "function";
        if (a || i) {
          var u = a ? "array" : "iterable";
          return m("A nested %s was passed to row #%s in <SuspenseList />. Wrap it in an additional SuspenseList to configure its revealOrder: <SuspenseList revealOrder=...> ... <SuspenseList revealOrder=...>{%s}</SuspenseList> ... </SuspenseList>", u, t, u), !1;
        }
      }
      return !0;
    }
    function CD(e, t) {
      if ((t === "forwards" || t === "backwards") && e !== void 0 && e !== null && e !== !1)
        if (Jn(e)) {
          for (var a = 0; a < e.length; a++)
            if (!px(e[a], a))
              return;
        } else {
          var i = Di(e);
          if (typeof i == "function") {
            var u = i.call(e);
            if (u)
              for (var f = u.next(), h = 0; !f.done; f = u.next()) {
                if (!px(f.value, h))
                  return;
                h++;
              }
          } else
            m('A single row was passed to a <SuspenseList revealOrder="%s" />. This is not useful since it needs multiple rows. Did you mean to pass multiple children or an array?', t);
        }
    }
    function CE(e, t, a, i, u) {
      var f = e.memoizedState;
      f === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: i,
        tail: a,
        tailMode: u
      } : (f.isBackwards = t, f.rendering = null, f.renderingStartTime = 0, f.last = i, f.tail = a, f.tailMode = u);
    }
    function vx(e, t, a) {
      var i = t.pendingProps, u = i.revealOrder, f = i.tail, h = i.children;
      ED(u), bD(f, u), CD(h, u), ba(e, t, h, a);
      var E = Xi.current, b = MS(E, lv);
      if (b)
        E = LS(E, lv), t.flags |= dt;
      else {
        var T = e !== null && (e.flags & dt) !== et;
        T && gD(t, t.child, a), E = Hf(E);
      }
      if (Pu(t, E), (t.mode & Tt) === it)
        t.memoizedState = null;
      else
        switch (u) {
          case "forwards": {
            var _ = SD(t.child), $;
            _ === null ? ($ = t.child, t.child = null) : ($ = _.sibling, _.sibling = null), CE(
              t,
              !1,
              // isBackwards
              $,
              _,
              f
            );
            break;
          }
          case "backwards": {
            var U = null, q = t.child;
            for (t.child = null; q !== null; ) {
              var Q = q.alternate;
              if (Q !== null && ly(Q) === null) {
                t.child = q;
                break;
              }
              var ee = q.sibling;
              q.sibling = U, U = q, q = ee;
            }
            CE(
              t,
              !0,
              // isBackwards
              U,
              null,
              // last
              f
            );
            break;
          }
          case "together": {
            CE(
              t,
              !1,
              // isBackwards
              null,
              // tail
              null,
              // last
              void 0
            );
            break;
          }
          default:
            t.memoizedState = null;
        }
      return t.child;
    }
    function xD(e, t, a) {
      OS(t, t.stateNode.containerInfo);
      var i = t.pendingProps;
      return e === null ? t.child = Ff(t, null, i, a) : ba(e, t, i, a), t.child;
    }
    var hx = !1;
    function TD(e, t, a) {
      var i = t.type, u = i._context, f = t.pendingProps, h = t.memoizedProps, E = f.value;
      {
        "value" in f || hx || (hx = !0, m("The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?"));
        var b = t.type.propTypes;
        b && Gi(b, f, "prop", "Context.Provider");
      }
      if (nC(t, u, E), h !== null) {
        var T = h.value;
        if ($e(T, E)) {
          if (h.children === f.children && !Um())
            return Al(e, t, a);
        } else
          gO(t, u, a);
      }
      var _ = f.children;
      return ba(e, t, _, a), t.child;
    }
    var mx = !1;
    function RD(e, t, a) {
      var i = t.type;
      i._context === void 0 ? i !== i.Consumer && (mx || (mx = !0, m("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"))) : i = i._context;
      var u = t.pendingProps, f = u.children;
      typeof f != "function" && m("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."), $f(t, a);
      var h = or(i);
      Ro(t);
      var E;
      return hv.current = t, Za(!0), E = f(h), Za(!1), ul(), t.flags |= go, ba(e, t, E, a), t.child;
    }
    function yv() {
      Ji = !0;
    }
    function Oy(e, t) {
      (t.mode & Tt) === it && e !== null && (e.alternate = null, t.alternate = null, t.flags |= ln);
    }
    function Al(e, t, a) {
      return e !== null && (t.dependencies = e.dependencies), XC(), Ov(t.lanes), ta(a, t.childLanes) ? (DO(e, t), t.child) : null;
    }
    function wD(e, t, a) {
      {
        var i = t.return;
        if (i === null)
          throw new Error("Cannot swap the root fiber.");
        if (e.alternate = null, t.alternate = null, a.index = t.index, a.sibling = t.sibling, a.return = t.return, a.ref = t.ref, t === i.child)
          i.child = a;
        else {
          var u = i.child;
          if (u === null)
            throw new Error("Expected parent to have a child.");
          for (; u.sibling !== t; )
            if (u = u.sibling, u === null)
              throw new Error("Expected to find the previous sibling.");
          u.sibling = a;
        }
        var f = i.deletions;
        return f === null ? (i.deletions = [e], i.flags |= Ut) : f.push(e), a.flags |= ln, a;
      }
    }
    function xE(e, t) {
      var a = e.lanes;
      return !!ta(a, t);
    }
    function _D(e, t, a) {
      switch (t.tag) {
        case N:
          ux(t), t.stateNode, Uf();
          break;
        case V:
          bC(t);
          break;
        case k: {
          var i = t.type;
          Po(i) && $m(t);
          break;
        }
        case A:
          OS(t, t.stateNode.containerInfo);
          break;
        case de: {
          var u = t.memoizedProps.value, f = t.type._context;
          nC(t, f, u);
          break;
        }
        case J:
          {
            var h = ta(a, t.childLanes);
            h && (t.flags |= gt);
            {
              var E = t.stateNode;
              E.effectDuration = 0, E.passiveEffectDuration = 0;
            }
          }
          break;
        case D: {
          var b = t.memoizedState;
          if (b !== null) {
            if (b.dehydrated !== null)
              return Pu(t, Hf(Xi.current)), t.flags |= dt, null;
            var T = t.child, _ = T.childLanes;
            if (ta(a, _))
              return cx(e, t, a);
            Pu(t, Hf(Xi.current));
            var $ = Al(e, t, a);
            return $ !== null ? $.sibling : null;
          } else
            Pu(t, Hf(Xi.current));
          break;
        }
        case _e: {
          var U = (e.flags & dt) !== et, q = ta(a, t.childLanes);
          if (U) {
            if (q)
              return vx(e, t, a);
            t.flags |= dt;
          }
          var Q = t.memoizedState;
          if (Q !== null && (Q.rendering = null, Q.tail = null, Q.lastEffect = null), Pu(t, Xi.current), q)
            break;
          return null;
        }
        case Ee:
        case ge:
          return t.lanes = ne, ix(e, t, a);
      }
      return Al(e, t, a);
    }
    function yx(e, t, a) {
      if (t._debugNeedsRemount && e !== null)
        return wD(e, t, JE(t.type, t.key, t.pendingProps, t._debugOwner || null, t.mode, t.lanes));
      if (e !== null) {
        var i = e.memoizedProps, u = t.pendingProps;
        if (i !== u || Um() || // Force a re-render if the implementation changed due to hot reload:
        t.type !== e.type)
          Ji = !0;
        else {
          var f = xE(e, a);
          if (!f && // If this is the second pass of an error or suspense boundary, there
          // may not be work scheduled on `current`, so we check for this flag.
          (t.flags & dt) === et)
            return Ji = !1, _D(e, t, a);
          (e.flags & gs) !== et ? Ji = !0 : Ji = !1;
        }
      } else if (Ji = !1, Ar() && Jk(t)) {
        var h = t.index, E = eO();
        B1(t, E, h);
      }
      switch (t.lanes = ne, t.tag) {
        case M:
          return uD(e, t, t.type, a);
        case Ke: {
          var b = t.elementType;
          return oD(e, t, b, a);
        }
        case w: {
          var T = t.type, _ = t.pendingProps, $ = t.elementType === T ? _ : Ki(T, _);
          return hE(e, t, T, $, a);
        }
        case k: {
          var U = t.type, q = t.pendingProps, Q = t.elementType === U ? q : Ki(U, q);
          return lx(e, t, U, Q, a);
        }
        case N:
          return rD(e, t, a);
        case V:
          return aD(e, t, a);
        case F:
          return iD(e, t);
        case D:
          return cx(e, t, a);
        case A:
          return xD(e, t, a);
        case K: {
          var ee = t.type, Ae = t.pendingProps, tt = t.elementType === ee ? Ae : Ki(ee, Ae);
          return nx(e, t, ee, tt, a);
        }
        case P:
          return eD(e, t, a);
        case H:
          return tD(e, t, a);
        case J:
          return nD(e, t, a);
        case de:
          return TD(e, t, a);
        case le:
          return RD(e, t, a);
        case ve: {
          var Qe = t.type, Nt = t.pendingProps, kt = Ki(Qe, Nt);
          if (t.type !== t.elementType) {
            var Y = Qe.propTypes;
            Y && Gi(
              Y,
              kt,
              // Resolved for outer only
              "prop",
              tn(Qe)
            );
          }
          return kt = Ki(Qe.type, kt), rx(e, t, Qe, kt, a);
        }
        case ie:
          return ax(e, t, t.type, t.pendingProps, a);
        case ot: {
          var te = t.type, W = t.pendingProps, me = t.elementType === te ? W : Ki(te, W);
          return lD(e, t, te, me, a);
        }
        case _e:
          return vx(e, t, a);
        case Ye:
          break;
        case Ee:
          return ix(e, t, a);
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function qf(e) {
      e.flags |= gt;
    }
    function gx(e) {
      e.flags |= qr, e.flags |= Zd;
    }
    var Sx, TE, Ex, bx;
    Sx = function(e, t, a, i) {
      for (var u = t.child; u !== null; ) {
        if (u.tag === V || u.tag === F)
          K_(e, u.stateNode);
        else if (u.tag !== A) {
          if (u.child !== null) {
            u.child.return = u, u = u.child;
            continue;
          }
        }
        if (u === t)
          return;
        for (; u.sibling === null; ) {
          if (u.return === null || u.return === t)
            return;
          u = u.return;
        }
        u.sibling.return = u.return, u = u.sibling;
      }
    }, TE = function(e, t) {
    }, Ex = function(e, t, a, i, u) {
      var f = e.memoizedProps;
      if (f !== i) {
        var h = t.stateNode, E = DS(), b = Z_(h, a, f, i, u, E);
        t.updateQueue = b, b && qf(t);
      }
    }, bx = function(e, t, a, i) {
      a !== i && qf(t);
    };
    function gv(e, t) {
      if (!Ar())
        switch (e.tailMode) {
          case "hidden": {
            for (var a = e.tail, i = null; a !== null; )
              a.alternate !== null && (i = a), a = a.sibling;
            i === null ? e.tail = null : i.sibling = null;
            break;
          }
          case "collapsed": {
            for (var u = e.tail, f = null; u !== null; )
              u.alternate !== null && (f = u), u = u.sibling;
            f === null ? !t && e.tail !== null ? e.tail.sibling = null : e.tail = null : f.sibling = null;
            break;
          }
        }
    }
    function Pr(e) {
      var t = e.alternate !== null && e.alternate.child === e.child, a = ne, i = et;
      if (t) {
        if ((e.mode & ut) !== it) {
          for (var b = e.selfBaseDuration, T = e.child; T !== null; )
            a = St(a, St(T.lanes, T.childLanes)), i |= T.subtreeFlags & ur, i |= T.flags & ur, b += T.treeBaseDuration, T = T.sibling;
          e.treeBaseDuration = b;
        } else
          for (var _ = e.child; _ !== null; )
            a = St(a, St(_.lanes, _.childLanes)), i |= _.subtreeFlags & ur, i |= _.flags & ur, _.return = e, _ = _.sibling;
        e.subtreeFlags |= i;
      } else {
        if ((e.mode & ut) !== it) {
          for (var u = e.actualDuration, f = e.selfBaseDuration, h = e.child; h !== null; )
            a = St(a, St(h.lanes, h.childLanes)), i |= h.subtreeFlags, i |= h.flags, u += h.actualDuration, f += h.treeBaseDuration, h = h.sibling;
          e.actualDuration = u, e.treeBaseDuration = f;
        } else
          for (var E = e.child; E !== null; )
            a = St(a, St(E.lanes, E.childLanes)), i |= E.subtreeFlags, i |= E.flags, E.return = e, E = E.sibling;
        e.subtreeFlags |= i;
      }
      return e.childLanes = a, t;
    }
    function kD(e, t, a) {
      if (pO() && (t.mode & Tt) !== it && (t.flags & dt) === et)
        return X1(t), Uf(), t.flags |= Rn | ha | tr, !1;
      var i = Bm(t);
      if (a !== null && a.dehydrated !== null)
        if (e === null) {
          if (!i)
            throw new Error("A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React.");
          if (fO(t), Pr(t), (t.mode & ut) !== it) {
            var u = a !== null;
            if (u) {
              var f = t.child;
              f !== null && (t.treeBaseDuration -= f.treeBaseDuration);
            }
          }
          return !1;
        } else {
          if (Uf(), (t.flags & dt) === et && (t.memoizedState = null), t.flags |= gt, Pr(t), (t.mode & ut) !== it) {
            var h = a !== null;
            if (h) {
              var E = t.child;
              E !== null && (t.treeBaseDuration -= E.treeBaseDuration);
            }
          }
          return !1;
        }
      else
        return Z1(), !0;
    }
    function Cx(e, t, a) {
      var i = t.pendingProps;
      switch (K0(t), t.tag) {
        case M:
        case Ke:
        case ie:
        case w:
        case K:
        case P:
        case H:
        case J:
        case le:
        case ve:
          return Pr(t), null;
        case k: {
          var u = t.type;
          return Po(u) && jm(t), Pr(t), null;
        }
        case N: {
          var f = t.stateNode;
          if (Vf(t), W0(t), zS(), f.pendingContext && (f.context = f.pendingContext, f.pendingContext = null), e === null || e.child === null) {
            var h = Bm(t);
            if (h)
              qf(t);
            else if (e !== null) {
              var E = e.memoizedState;
              // Check if this is a client root
              (!E.isDehydrated || // Check if we reverted to client rendering (e.g. due to an error)
              (t.flags & Rn) !== et) && (t.flags |= Na, Z1());
            }
          }
          return TE(e, t), Pr(t), null;
        }
        case V: {
          NS(t);
          var b = EC(), T = t.type;
          if (e !== null && t.stateNode != null)
            Ex(e, t, T, i, b), e.ref !== t.ref && gx(t);
          else {
            if (!i) {
              if (t.stateNode === null)
                throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
              return Pr(t), null;
            }
            var _ = DS(), $ = Bm(t);
            if ($)
              sO(t, b, _) && qf(t);
            else {
              var U = Q_(T, i, b, _, t);
              Sx(U, t, !1, !1), t.stateNode = U, X_(U, T, i, b) && qf(t);
            }
            t.ref !== null && gx(t);
          }
          return Pr(t), null;
        }
        case F: {
          var q = i;
          if (e && t.stateNode != null) {
            var Q = e.memoizedProps;
            bx(e, t, Q, q);
          } else {
            if (typeof q != "string" && t.stateNode === null)
              throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
            var ee = EC(), Ae = DS(), tt = Bm(t);
            tt ? cO(t) && qf(t) : t.stateNode = J_(q, ee, Ae, t);
          }
          return Pr(t), null;
        }
        case D: {
          If(t);
          var Qe = t.memoizedState;
          if (e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            var Nt = kD(e, t, Qe);
            if (!Nt)
              return t.flags & tr ? t : null;
          }
          if ((t.flags & dt) !== et)
            return t.lanes = a, (t.mode & ut) !== it && oE(t), t;
          var kt = Qe !== null, Y = e !== null && e.memoizedState !== null;
          if (kt !== Y && kt) {
            var te = t.child;
            if (te.flags |= So, (t.mode & Tt) !== it) {
              var W = e === null && (t.memoizedProps.unstable_avoidThisFallback !== !0 || !ue);
              W || MS(Xi.current, xC) ? ON() : HE();
            }
          }
          var me = t.updateQueue;
          if (me !== null && (t.flags |= gt), Pr(t), (t.mode & ut) !== it && kt) {
            var ze = t.child;
            ze !== null && (t.treeBaseDuration -= ze.treeBaseDuration);
          }
          return null;
        }
        case A:
          return Vf(t), TE(e, t), e === null && Wk(t.stateNode.containerInfo), Pr(t), null;
        case de:
          var Oe = t.type._context;
          return iS(Oe, t), Pr(t), null;
        case ot: {
          var ft = t.type;
          return Po(ft) && jm(t), Pr(t), null;
        }
        case _e: {
          If(t);
          var ht = t.memoizedState;
          if (ht === null)
            return Pr(t), null;
          var Gt = (t.flags & dt) !== et, zt = ht.rendering;
          if (zt === null)
            if (Gt)
              gv(ht, !1);
            else {
              var qn = NN() && (e === null || (e.flags & dt) === et);
              if (!qn)
                for (var Pt = t.child; Pt !== null; ) {
                  var jn = ly(Pt);
                  if (jn !== null) {
                    Gt = !0, t.flags |= dt, gv(ht, !1);
                    var ia = jn.updateQueue;
                    return ia !== null && (t.updateQueue = ia, t.flags |= gt), t.subtreeFlags = et, NO(t, a), Pu(t, LS(Xi.current, lv)), t.child;
                  }
                  Pt = Pt.sibling;
                }
              ht.tail !== null && Sn() > Ix() && (t.flags |= dt, Gt = !0, gv(ht, !1), t.lanes = fp);
            }
          else {
            if (!Gt) {
              var Vr = ly(zt);
              if (Vr !== null) {
                t.flags |= dt, Gt = !0;
                var oi = Vr.updateQueue;
                if (oi !== null && (t.updateQueue = oi, t.flags |= gt), gv(ht, !0), ht.tail === null && ht.tailMode === "hidden" && !zt.alternate && !Ar())
                  return Pr(t), null;
              } else
                // The time it took to render last row is greater than the remaining
                // time we have to render. So rendering one more row would likely
                // exceed it.
                Sn() * 2 - ht.renderingStartTime > Ix() && a !== ea && (t.flags |= dt, Gt = !0, gv(ht, !1), t.lanes = fp);
            }
            if (ht.isBackwards)
              zt.sibling = t.child, t.child = zt;
            else {
              var Ta = ht.last;
              Ta !== null ? Ta.sibling = zt : t.child = zt, ht.last = zt;
            }
          }
          if (ht.tail !== null) {
            var Ra = ht.tail;
            ht.rendering = Ra, ht.tail = Ra.sibling, ht.renderingStartTime = Sn(), Ra.sibling = null;
            var oa = Xi.current;
            return Gt ? oa = LS(oa, lv) : oa = Hf(oa), Pu(t, oa), Ra;
          }
          return Pr(t), null;
        }
        case Ye:
          break;
        case Ee:
        case ge: {
          VE(t);
          var $l = t.memoizedState, nd = $l !== null;
          if (e !== null) {
            var Av = e.memoizedState, Bo = Av !== null;
            Bo !== nd && // LegacyHidden doesn't do any hiding — it only pre-renders.
            !I && (t.flags |= So);
          }
          return !nd || (t.mode & Tt) === it ? Pr(t) : ta(Io, ea) && (Pr(t), t.subtreeFlags & (ln | gt) && (t.flags |= So)), null;
        }
        case nt:
          return null;
        case be:
          return null;
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function OD(e, t, a) {
      switch (K0(t), t.tag) {
        case k: {
          var i = t.type;
          Po(i) && jm(t);
          var u = t.flags;
          return u & tr ? (t.flags = u & ~tr | dt, (t.mode & ut) !== it && oE(t), t) : null;
        }
        case N: {
          t.stateNode, Vf(t), W0(t), zS();
          var f = t.flags;
          return (f & tr) !== et && (f & dt) === et ? (t.flags = f & ~tr | dt, t) : null;
        }
        case V:
          return NS(t), null;
        case D: {
          If(t);
          var h = t.memoizedState;
          if (h !== null && h.dehydrated !== null) {
            if (t.alternate === null)
              throw new Error("Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue.");
            Uf();
          }
          var E = t.flags;
          return E & tr ? (t.flags = E & ~tr | dt, (t.mode & ut) !== it && oE(t), t) : null;
        }
        case _e:
          return If(t), null;
        case A:
          return Vf(t), null;
        case de:
          var b = t.type._context;
          return iS(b, t), null;
        case Ee:
        case ge:
          return VE(t), null;
        case nt:
          return null;
        default:
          return null;
      }
    }
    function xx(e, t, a) {
      switch (K0(t), t.tag) {
        case k: {
          var i = t.type.childContextTypes;
          i != null && jm(t);
          break;
        }
        case N: {
          t.stateNode, Vf(t), W0(t), zS();
          break;
        }
        case V: {
          NS(t);
          break;
        }
        case A:
          Vf(t);
          break;
        case D:
          If(t);
          break;
        case _e:
          If(t);
          break;
        case de:
          var u = t.type._context;
          iS(u, t);
          break;
        case Ee:
        case ge:
          VE(t);
          break;
      }
    }
    var Tx = null;
    Tx = /* @__PURE__ */ new Set();
    var Dy = !1, Ur = !1, DD = typeof WeakSet == "function" ? WeakSet : Set, Fe = null, Qf = null, Kf = null;
    function ND(e) {
      ol(null, function() {
        throw e;
      }), Kd();
    }
    var MD = function(e, t) {
      if (t.props = e.memoizedProps, t.state = e.memoizedState, e.mode & ut)
        try {
          Vo(), t.componentWillUnmount();
        } finally {
          Fo(e);
        }
      else
        t.componentWillUnmount();
    };
    function Rx(e, t) {
      try {
        $u(dr, e);
      } catch (a) {
        fn(e, t, a);
      }
    }
    function RE(e, t, a) {
      try {
        MD(e, a);
      } catch (i) {
        fn(e, t, i);
      }
    }
    function LD(e, t, a) {
      try {
        a.componentDidMount();
      } catch (i) {
        fn(e, t, i);
      }
    }
    function wx(e, t) {
      try {
        kx(e);
      } catch (a) {
        fn(e, t, a);
      }
    }
    function Xf(e, t) {
      var a = e.ref;
      if (a !== null)
        if (typeof a == "function") {
          var i;
          try {
            if (Ne && Xe && e.mode & ut)
              try {
                Vo(), i = a(null);
              } finally {
                Fo(e);
              }
            else
              i = a(null);
          } catch (u) {
            fn(e, t, u);
          }
          typeof i == "function" && m("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", yt(e));
        } else
          a.current = null;
    }
    function Ny(e, t, a) {
      try {
        a();
      } catch (i) {
        fn(e, t, i);
      }
    }
    var _x = !1;
    function AD(e, t) {
      G_(e.containerInfo), Fe = t, zD();
      var a = _x;
      return _x = !1, a;
    }
    function zD() {
      for (; Fe !== null; ) {
        var e = Fe, t = e.child;
        (e.subtreeFlags & iu) !== et && t !== null ? (t.return = e, Fe = t) : PD();
      }
    }
    function PD() {
      for (; Fe !== null; ) {
        var e = Fe;
        Yt(e);
        try {
          UD(e);
        } catch (a) {
          fn(e, e.return, a);
        }
        Hn();
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, Fe = t;
          return;
        }
        Fe = e.return;
      }
    }
    function UD(e) {
      var t = e.alternate, a = e.flags;
      if ((a & Na) !== et) {
        switch (Yt(e), e.tag) {
          case w:
          case K:
          case ie:
            break;
          case k: {
            if (t !== null) {
              var i = t.memoizedProps, u = t.memoizedState, f = e.stateNode;
              e.type === e.elementType && !Xs && (f.props !== e.memoizedProps && m("Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", yt(e) || "instance"), f.state !== e.memoizedState && m("Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", yt(e) || "instance"));
              var h = f.getSnapshotBeforeUpdate(e.elementType === e.type ? i : Ki(e.type, i), u);
              {
                var E = Tx;
                h === void 0 && !E.has(e.type) && (E.add(e.type), m("%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.", yt(e)));
              }
              f.__reactInternalSnapshotBeforeUpdate = h;
            }
            break;
          }
          case N: {
            {
              var b = e.stateNode;
              gk(b.containerInfo);
            }
            break;
          }
          case V:
          case F:
          case A:
          case ot:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
        Hn();
      }
    }
    function eo(e, t, a) {
      var i = t.updateQueue, u = i !== null ? i.lastEffect : null;
      if (u !== null) {
        var f = u.next, h = f;
        do {
          if ((h.tag & e) === e) {
            var E = h.destroy;
            h.destroy = void 0, E !== void 0 && ((e & zr) !== Ia ? $c(t) : (e & dr) !== Ia && Fc(t), (e & Uo) !== Ia && Nv(!0), Ny(t, a, E), (e & Uo) !== Ia && Nv(!1), (e & zr) !== Ia ? Ih() : (e & dr) !== Ia && ou());
          }
          h = h.next;
        } while (h !== f);
      }
    }
    function $u(e, t) {
      var a = t.updateQueue, i = a !== null ? a.lastEffect : null;
      if (i !== null) {
        var u = i.next, f = u;
        do {
          if ((f.tag & e) === e) {
            (e & zr) !== Ia ? Hh(t) : (e & dr) !== Ia && Bh(t);
            var h = f.create;
            (e & Uo) !== Ia && Nv(!0), f.destroy = h(), (e & Uo) !== Ia && Nv(!1), (e & zr) !== Ia ? up() : (e & dr) !== Ia && Yh();
            {
              var E = f.destroy;
              if (E !== void 0 && typeof E != "function") {
                var b = void 0;
                (f.tag & dr) !== et ? b = "useLayoutEffect" : (f.tag & Uo) !== et ? b = "useInsertionEffect" : b = "useEffect";
                var T = void 0;
                E === null ? T = " You returned null. If your effect does not require clean up, return undefined (or nothing)." : typeof E.then == "function" ? T = `

It looks like you wrote ` + b + `(async () => ...) or returned a Promise. Instead, write the async function inside your effect and call it immediately:

` + b + `(() => {
  async function fetchData() {
    // You can await here
    const response = await MyAPI.getData(someId);
    // ...
  }
  fetchData();
}, [someId]); // Or [] if effect doesn't need props or state

Learn more about data fetching with Hooks: https://reactjs.org/link/hooks-data-fetching` : T = " You returned: " + E, m("%s must not return anything besides a function, which is used for clean-up.%s", b, T);
              }
            }
          }
          f = f.next;
        } while (f !== u);
      }
    }
    function jD(e, t) {
      if ((t.flags & gt) !== et)
        switch (t.tag) {
          case J: {
            var a = t.stateNode.passiveEffectDuration, i = t.memoizedProps, u = i.id, f = i.onPostCommit, h = QC(), E = t.alternate === null ? "mount" : "update";
            qC() && (E = "nested-update"), typeof f == "function" && f(u, E, a, h);
            var b = t.return;
            e:
              for (; b !== null; ) {
                switch (b.tag) {
                  case N:
                    var T = b.stateNode;
                    T.passiveEffectDuration += a;
                    break e;
                  case J:
                    var _ = b.stateNode;
                    _.passiveEffectDuration += a;
                    break e;
                }
                b = b.return;
              }
            break;
          }
        }
    }
    function $D(e, t, a, i) {
      if ((a.flags & Er) !== et)
        switch (a.tag) {
          case w:
          case K:
          case ie: {
            if (!Ur)
              if (a.mode & ut)
                try {
                  Vo(), $u(dr | fr, a);
                } finally {
                  Fo(a);
                }
              else
                $u(dr | fr, a);
            break;
          }
          case k: {
            var u = a.stateNode;
            if (a.flags & gt && !Ur)
              if (t === null)
                if (a.type === a.elementType && !Xs && (u.props !== a.memoizedProps && m("Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", yt(a) || "instance"), u.state !== a.memoizedState && m("Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", yt(a) || "instance")), a.mode & ut)
                  try {
                    Vo(), u.componentDidMount();
                  } finally {
                    Fo(a);
                  }
                else
                  u.componentDidMount();
              else {
                var f = a.elementType === a.type ? t.memoizedProps : Ki(a.type, t.memoizedProps), h = t.memoizedState;
                if (a.type === a.elementType && !Xs && (u.props !== a.memoizedProps && m("Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", yt(a) || "instance"), u.state !== a.memoizedState && m("Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", yt(a) || "instance")), a.mode & ut)
                  try {
                    Vo(), u.componentDidUpdate(f, h, u.__reactInternalSnapshotBeforeUpdate);
                  } finally {
                    Fo(a);
                  }
                else
                  u.componentDidUpdate(f, h, u.__reactInternalSnapshotBeforeUpdate);
              }
            var E = a.updateQueue;
            E !== null && (a.type === a.elementType && !Xs && (u.props !== a.memoizedProps && m("Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", yt(a) || "instance"), u.state !== a.memoizedState && m("Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", yt(a) || "instance")), uC(a, E, u));
            break;
          }
          case N: {
            var b = a.updateQueue;
            if (b !== null) {
              var T = null;
              if (a.child !== null)
                switch (a.child.tag) {
                  case V:
                    T = a.child.stateNode;
                    break;
                  case k:
                    T = a.child.stateNode;
                    break;
                }
              uC(a, b, T);
            }
            break;
          }
          case V: {
            var _ = a.stateNode;
            if (t === null && a.flags & gt) {
              var $ = a.type, U = a.memoizedProps;
              ak(_, $, U);
            }
            break;
          }
          case F:
            break;
          case A:
            break;
          case J: {
            {
              var q = a.memoizedProps, Q = q.onCommit, ee = q.onRender, Ae = a.stateNode.effectDuration, tt = QC(), Qe = t === null ? "mount" : "update";
              qC() && (Qe = "nested-update"), typeof ee == "function" && ee(a.memoizedProps.id, Qe, a.actualDuration, a.treeBaseDuration, a.actualStartTime, tt);
              {
                typeof Q == "function" && Q(a.memoizedProps.id, Qe, Ae, tt), PN(a);
                var Nt = a.return;
                e:
                  for (; Nt !== null; ) {
                    switch (Nt.tag) {
                      case N:
                        var kt = Nt.stateNode;
                        kt.effectDuration += Ae;
                        break e;
                      case J:
                        var Y = Nt.stateNode;
                        Y.effectDuration += Ae;
                        break e;
                    }
                    Nt = Nt.return;
                  }
              }
            }
            break;
          }
          case D: {
            GD(e, a);
            break;
          }
          case _e:
          case ot:
          case Ye:
          case Ee:
          case ge:
          case be:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
      Ur || a.flags & qr && kx(a);
    }
    function FD(e) {
      switch (e.tag) {
        case w:
        case K:
        case ie: {
          if (e.mode & ut)
            try {
              Vo(), Rx(e, e.return);
            } finally {
              Fo(e);
            }
          else
            Rx(e, e.return);
          break;
        }
        case k: {
          var t = e.stateNode;
          typeof t.componentDidMount == "function" && LD(e, e.return, t), wx(e, e.return);
          break;
        }
        case V: {
          wx(e, e.return);
          break;
        }
      }
    }
    function VD(e, t) {
      for (var a = null, i = e; ; ) {
        if (i.tag === V) {
          if (a === null) {
            a = i;
            try {
              var u = i.stateNode;
              t ? vk(u) : mk(i.stateNode, i.memoizedProps);
            } catch (h) {
              fn(e, e.return, h);
            }
          }
        } else if (i.tag === F) {
          if (a === null)
            try {
              var f = i.stateNode;
              t ? hk(f) : yk(f, i.memoizedProps);
            } catch (h) {
              fn(e, e.return, h);
            }
        } else if (!((i.tag === Ee || i.tag === ge) && i.memoizedState !== null && i !== e)) {
          if (i.child !== null) {
            i.child.return = i, i = i.child;
            continue;
          }
        }
        if (i === e)
          return;
        for (; i.sibling === null; ) {
          if (i.return === null || i.return === e)
            return;
          a === i && (a = null), i = i.return;
        }
        a === i && (a = null), i.sibling.return = i.return, i = i.sibling;
      }
    }
    function kx(e) {
      var t = e.ref;
      if (t !== null) {
        var a = e.stateNode, i;
        switch (e.tag) {
          case V:
            i = a;
            break;
          default:
            i = a;
        }
        if (typeof t == "function") {
          var u;
          if (e.mode & ut)
            try {
              Vo(), u = t(i);
            } finally {
              Fo(e);
            }
          else
            u = t(i);
          typeof u == "function" && m("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", yt(e));
        } else
          t.hasOwnProperty("current") || m("Unexpected ref object provided for %s. Use either a ref-setter function or React.createRef().", yt(e)), t.current = i;
      }
    }
    function HD(e) {
      var t = e.alternate;
      t !== null && (t.return = null), e.return = null;
    }
    function Ox(e) {
      var t = e.alternate;
      t !== null && (e.alternate = null, Ox(t));
      {
        if (e.child = null, e.deletions = null, e.sibling = null, e.tag === V) {
          var a = e.stateNode;
          a !== null && Qk(a);
        }
        e.stateNode = null, e._debugOwner = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
      }
    }
    function ID(e) {
      for (var t = e.return; t !== null; ) {
        if (Dx(t))
          return t;
        t = t.return;
      }
      throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
    }
    function Dx(e) {
      return e.tag === V || e.tag === N || e.tag === A;
    }
    function Nx(e) {
      var t = e;
      e:
        for (; ; ) {
          for (; t.sibling === null; ) {
            if (t.return === null || Dx(t.return))
              return null;
            t = t.return;
          }
          for (t.sibling.return = t.return, t = t.sibling; t.tag !== V && t.tag !== F && t.tag !== De; ) {
            if (t.flags & ln || t.child === null || t.tag === A)
              continue e;
            t.child.return = t, t = t.child;
          }
          if (!(t.flags & ln))
            return t.stateNode;
        }
    }
    function BD(e) {
      var t = ID(e);
      switch (t.tag) {
        case V: {
          var a = t.stateNode;
          t.flags & jt && (M1(a), t.flags &= ~jt);
          var i = Nx(e);
          _E(e, i, a);
          break;
        }
        case N:
        case A: {
          var u = t.stateNode.containerInfo, f = Nx(e);
          wE(e, f, u);
          break;
        }
        default:
          throw new Error("Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    function wE(e, t, a) {
      var i = e.tag, u = i === V || i === F;
      if (u) {
        var f = e.stateNode;
        t ? ck(a, f, t) : uk(a, f);
      } else if (i !== A) {
        var h = e.child;
        if (h !== null) {
          wE(h, t, a);
          for (var E = h.sibling; E !== null; )
            wE(E, t, a), E = E.sibling;
        }
      }
    }
    function _E(e, t, a) {
      var i = e.tag, u = i === V || i === F;
      if (u) {
        var f = e.stateNode;
        t ? sk(a, f, t) : lk(a, f);
      } else if (i !== A) {
        var h = e.child;
        if (h !== null) {
          _E(h, t, a);
          for (var E = h.sibling; E !== null; )
            _E(E, t, a), E = E.sibling;
        }
      }
    }
    var jr = null, to = !1;
    function YD(e, t, a) {
      {
        var i = t;
        e:
          for (; i !== null; ) {
            switch (i.tag) {
              case V: {
                jr = i.stateNode, to = !1;
                break e;
              }
              case N: {
                jr = i.stateNode.containerInfo, to = !0;
                break e;
              }
              case A: {
                jr = i.stateNode.containerInfo, to = !0;
                break e;
              }
            }
            i = i.return;
          }
        if (jr === null)
          throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
        Mx(e, t, a), jr = null, to = !1;
      }
      HD(a);
    }
    function Fu(e, t, a) {
      for (var i = a.child; i !== null; )
        Mx(e, t, i), i = i.sibling;
    }
    function Mx(e, t, a) {
      switch (op(a), a.tag) {
        case V:
          Ur || Xf(a, t);
        case F: {
          {
            var i = jr, u = to;
            jr = null, Fu(e, t, a), jr = i, to = u, jr !== null && (to ? dk(jr, a.stateNode) : fk(jr, a.stateNode));
          }
          return;
        }
        case De: {
          jr !== null && (to ? pk(jr, a.stateNode) : j0(jr, a.stateNode));
          return;
        }
        case A: {
          {
            var f = jr, h = to;
            jr = a.stateNode.containerInfo, to = !0, Fu(e, t, a), jr = f, to = h;
          }
          return;
        }
        case w:
        case K:
        case ve:
        case ie: {
          if (!Ur) {
            var E = a.updateQueue;
            if (E !== null) {
              var b = E.lastEffect;
              if (b !== null) {
                var T = b.next, _ = T;
                do {
                  var $ = _, U = $.destroy, q = $.tag;
                  U !== void 0 && ((q & Uo) !== Ia ? Ny(a, t, U) : (q & dr) !== Ia && (Fc(a), a.mode & ut ? (Vo(), Ny(a, t, U), Fo(a)) : Ny(a, t, U), ou())), _ = _.next;
                } while (_ !== T);
              }
            }
          }
          Fu(e, t, a);
          return;
        }
        case k: {
          if (!Ur) {
            Xf(a, t);
            var Q = a.stateNode;
            typeof Q.componentWillUnmount == "function" && RE(a, t, Q);
          }
          Fu(e, t, a);
          return;
        }
        case Ye: {
          Fu(e, t, a);
          return;
        }
        case Ee: {
          if (
            // TODO: Remove this dead flag
            a.mode & Tt
          ) {
            var ee = Ur;
            Ur = ee || a.memoizedState !== null, Fu(e, t, a), Ur = ee;
          } else
            Fu(e, t, a);
          break;
        }
        default: {
          Fu(e, t, a);
          return;
        }
      }
    }
    function WD(e) {
      e.memoizedState;
    }
    function GD(e, t) {
      var a = t.memoizedState;
      if (a === null) {
        var i = t.alternate;
        if (i !== null) {
          var u = i.memoizedState;
          if (u !== null) {
            var f = u.dehydrated;
            f !== null && Mk(f);
          }
        }
      }
    }
    function Lx(e) {
      var t = e.updateQueue;
      if (t !== null) {
        e.updateQueue = null;
        var a = e.stateNode;
        a === null && (a = e.stateNode = new DD()), t.forEach(function(i) {
          var u = IN.bind(null, e, i);
          if (!a.has(i)) {
            if (a.add(i), sr)
              if (Qf !== null && Kf !== null)
                Dv(Kf, Qf);
              else
                throw Error("Expected finished root and lanes to be set. This is a bug in React.");
            i.then(u, u);
          }
        });
      }
    }
    function qD(e, t, a) {
      Qf = a, Kf = e, Yt(t), Ax(t, e), Yt(t), Qf = null, Kf = null;
    }
    function no(e, t, a) {
      var i = t.deletions;
      if (i !== null)
        for (var u = 0; u < i.length; u++) {
          var f = i[u];
          try {
            YD(e, t, f);
          } catch (b) {
            fn(f, t, b);
          }
        }
      var h = Ug();
      if (t.subtreeFlags & Xr)
        for (var E = t.child; E !== null; )
          Yt(E), Ax(E, e), E = E.sibling;
      Yt(h);
    }
    function Ax(e, t, a) {
      var i = e.alternate, u = e.flags;
      switch (e.tag) {
        case w:
        case K:
        case ve:
        case ie: {
          if (no(t, e), Ho(e), u & gt) {
            try {
              eo(Uo | fr, e, e.return), $u(Uo | fr, e);
            } catch (ft) {
              fn(e, e.return, ft);
            }
            if (e.mode & ut) {
              try {
                Vo(), eo(dr | fr, e, e.return);
              } catch (ft) {
                fn(e, e.return, ft);
              }
              Fo(e);
            } else
              try {
                eo(dr | fr, e, e.return);
              } catch (ft) {
                fn(e, e.return, ft);
              }
          }
          return;
        }
        case k: {
          no(t, e), Ho(e), u & qr && i !== null && Xf(i, i.return);
          return;
        }
        case V: {
          no(t, e), Ho(e), u & qr && i !== null && Xf(i, i.return);
          {
            if (e.flags & jt) {
              var f = e.stateNode;
              try {
                M1(f);
              } catch (ft) {
                fn(e, e.return, ft);
              }
            }
            if (u & gt) {
              var h = e.stateNode;
              if (h != null) {
                var E = e.memoizedProps, b = i !== null ? i.memoizedProps : E, T = e.type, _ = e.updateQueue;
                if (e.updateQueue = null, _ !== null)
                  try {
                    ik(h, _, T, b, E, e);
                  } catch (ft) {
                    fn(e, e.return, ft);
                  }
              }
            }
          }
          return;
        }
        case F: {
          if (no(t, e), Ho(e), u & gt) {
            if (e.stateNode === null)
              throw new Error("This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue.");
            var $ = e.stateNode, U = e.memoizedProps, q = i !== null ? i.memoizedProps : U;
            try {
              ok($, q, U);
            } catch (ft) {
              fn(e, e.return, ft);
            }
          }
          return;
        }
        case N: {
          if (no(t, e), Ho(e), u & gt && i !== null) {
            var Q = i.memoizedState;
            if (Q.isDehydrated)
              try {
                Nk(t.containerInfo);
              } catch (ft) {
                fn(e, e.return, ft);
              }
          }
          return;
        }
        case A: {
          no(t, e), Ho(e);
          return;
        }
        case D: {
          no(t, e), Ho(e);
          var ee = e.child;
          if (ee.flags & So) {
            var Ae = ee.stateNode, tt = ee.memoizedState, Qe = tt !== null;
            if (Ae.isHidden = Qe, Qe) {
              var Nt = ee.alternate !== null && ee.alternate.memoizedState !== null;
              Nt || kN();
            }
          }
          if (u & gt) {
            try {
              WD(e);
            } catch (ft) {
              fn(e, e.return, ft);
            }
            Lx(e);
          }
          return;
        }
        case Ee: {
          var kt = i !== null && i.memoizedState !== null;
          if (
            // TODO: Remove this dead flag
            e.mode & Tt
          ) {
            var Y = Ur;
            Ur = Y || kt, no(t, e), Ur = Y;
          } else
            no(t, e);
          if (Ho(e), u & So) {
            var te = e.stateNode, W = e.memoizedState, me = W !== null, ze = e;
            if (te.isHidden = me, me && !kt && (ze.mode & Tt) !== it) {
              Fe = ze;
              for (var Oe = ze.child; Oe !== null; )
                Fe = Oe, KD(Oe), Oe = Oe.sibling;
            }
            VD(ze, me);
          }
          return;
        }
        case _e: {
          no(t, e), Ho(e), u & gt && Lx(e);
          return;
        }
        case Ye:
          return;
        default: {
          no(t, e), Ho(e);
          return;
        }
      }
    }
    function Ho(e) {
      var t = e.flags;
      if (t & ln) {
        try {
          BD(e);
        } catch (a) {
          fn(e, e.return, a);
        }
        e.flags &= ~ln;
      }
      t & Ma && (e.flags &= ~Ma);
    }
    function QD(e, t, a) {
      Qf = a, Kf = t, Fe = e, zx(e, t, a), Qf = null, Kf = null;
    }
    function zx(e, t, a) {
      for (var i = (e.mode & Tt) !== it; Fe !== null; ) {
        var u = Fe, f = u.child;
        if (u.tag === Ee && i) {
          var h = u.memoizedState !== null, E = h || Dy;
          if (E) {
            kE(e, t, a);
            continue;
          } else {
            var b = u.alternate, T = b !== null && b.memoizedState !== null, _ = T || Ur, $ = Dy, U = Ur;
            Dy = E, Ur = _, Ur && !U && (Fe = u, XD(u));
            for (var q = f; q !== null; )
              Fe = q, zx(
                q,
                // New root; bubble back up to here and stop.
                t,
                a
              ), q = q.sibling;
            Fe = u, Dy = $, Ur = U, kE(e, t, a);
            continue;
          }
        }
        (u.subtreeFlags & Er) !== et && f !== null ? (f.return = u, Fe = f) : kE(e, t, a);
      }
    }
    function kE(e, t, a) {
      for (; Fe !== null; ) {
        var i = Fe;
        if ((i.flags & Er) !== et) {
          var u = i.alternate;
          Yt(i);
          try {
            $D(t, u, i, a);
          } catch (h) {
            fn(i, i.return, h);
          }
          Hn();
        }
        if (i === e) {
          Fe = null;
          return;
        }
        var f = i.sibling;
        if (f !== null) {
          f.return = i.return, Fe = f;
          return;
        }
        Fe = i.return;
      }
    }
    function KD(e) {
      for (; Fe !== null; ) {
        var t = Fe, a = t.child;
        switch (t.tag) {
          case w:
          case K:
          case ve:
          case ie: {
            if (t.mode & ut)
              try {
                Vo(), eo(dr, t, t.return);
              } finally {
                Fo(t);
              }
            else
              eo(dr, t, t.return);
            break;
          }
          case k: {
            Xf(t, t.return);
            var i = t.stateNode;
            typeof i.componentWillUnmount == "function" && RE(t, t.return, i);
            break;
          }
          case V: {
            Xf(t, t.return);
            break;
          }
          case Ee: {
            var u = t.memoizedState !== null;
            if (u) {
              Px(e);
              continue;
            }
            break;
          }
        }
        a !== null ? (a.return = t, Fe = a) : Px(e);
      }
    }
    function Px(e) {
      for (; Fe !== null; ) {
        var t = Fe;
        if (t === e) {
          Fe = null;
          return;
        }
        var a = t.sibling;
        if (a !== null) {
          a.return = t.return, Fe = a;
          return;
        }
        Fe = t.return;
      }
    }
    function XD(e) {
      for (; Fe !== null; ) {
        var t = Fe, a = t.child;
        if (t.tag === Ee) {
          var i = t.memoizedState !== null;
          if (i) {
            Ux(e);
            continue;
          }
        }
        a !== null ? (a.return = t, Fe = a) : Ux(e);
      }
    }
    function Ux(e) {
      for (; Fe !== null; ) {
        var t = Fe;
        Yt(t);
        try {
          FD(t);
        } catch (i) {
          fn(t, t.return, i);
        }
        if (Hn(), t === e) {
          Fe = null;
          return;
        }
        var a = t.sibling;
        if (a !== null) {
          a.return = t.return, Fe = a;
          return;
        }
        Fe = t.return;
      }
    }
    function ZD(e, t, a, i) {
      Fe = t, JD(t, e, a, i);
    }
    function JD(e, t, a, i) {
      for (; Fe !== null; ) {
        var u = Fe, f = u.child;
        (u.subtreeFlags & La) !== et && f !== null ? (f.return = u, Fe = f) : eN(e, t, a, i);
      }
    }
    function eN(e, t, a, i) {
      for (; Fe !== null; ) {
        var u = Fe;
        if ((u.flags & vn) !== et) {
          Yt(u);
          try {
            tN(t, u, a, i);
          } catch (h) {
            fn(u, u.return, h);
          }
          Hn();
        }
        if (u === e) {
          Fe = null;
          return;
        }
        var f = u.sibling;
        if (f !== null) {
          f.return = u.return, Fe = f;
          return;
        }
        Fe = u.return;
      }
    }
    function tN(e, t, a, i) {
      switch (t.tag) {
        case w:
        case K:
        case ie: {
          if (t.mode & ut) {
            iE();
            try {
              $u(zr | fr, t);
            } finally {
              aE(t);
            }
          } else
            $u(zr | fr, t);
          break;
        }
      }
    }
    function nN(e) {
      Fe = e, rN();
    }
    function rN() {
      for (; Fe !== null; ) {
        var e = Fe, t = e.child;
        if ((Fe.flags & Ut) !== et) {
          var a = e.deletions;
          if (a !== null) {
            for (var i = 0; i < a.length; i++) {
              var u = a[i];
              Fe = u, oN(u, e);
            }
            {
              var f = e.alternate;
              if (f !== null) {
                var h = f.child;
                if (h !== null) {
                  f.child = null;
                  do {
                    var E = h.sibling;
                    h.sibling = null, h = E;
                  } while (h !== null);
                }
              }
            }
            Fe = e;
          }
        }
        (e.subtreeFlags & La) !== et && t !== null ? (t.return = e, Fe = t) : aN();
      }
    }
    function aN() {
      for (; Fe !== null; ) {
        var e = Fe;
        (e.flags & vn) !== et && (Yt(e), iN(e), Hn());
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, Fe = t;
          return;
        }
        Fe = e.return;
      }
    }
    function iN(e) {
      switch (e.tag) {
        case w:
        case K:
        case ie: {
          e.mode & ut ? (iE(), eo(zr | fr, e, e.return), aE(e)) : eo(zr | fr, e, e.return);
          break;
        }
      }
    }
    function oN(e, t) {
      for (; Fe !== null; ) {
        var a = Fe;
        Yt(a), uN(a, t), Hn();
        var i = a.child;
        i !== null ? (i.return = a, Fe = i) : lN(e);
      }
    }
    function lN(e) {
      for (; Fe !== null; ) {
        var t = Fe, a = t.sibling, i = t.return;
        if (Ox(t), t === e) {
          Fe = null;
          return;
        }
        if (a !== null) {
          a.return = i, Fe = a;
          return;
        }
        Fe = i;
      }
    }
    function uN(e, t) {
      switch (e.tag) {
        case w:
        case K:
        case ie: {
          e.mode & ut ? (iE(), eo(zr, e, t), aE(e)) : eo(zr, e, t);
          break;
        }
      }
    }
    function sN(e) {
      switch (e.tag) {
        case w:
        case K:
        case ie: {
          try {
            $u(dr | fr, e);
          } catch (a) {
            fn(e, e.return, a);
          }
          break;
        }
        case k: {
          var t = e.stateNode;
          try {
            t.componentDidMount();
          } catch (a) {
            fn(e, e.return, a);
          }
          break;
        }
      }
    }
    function cN(e) {
      switch (e.tag) {
        case w:
        case K:
        case ie: {
          try {
            $u(zr | fr, e);
          } catch (t) {
            fn(e, e.return, t);
          }
          break;
        }
      }
    }
    function fN(e) {
      switch (e.tag) {
        case w:
        case K:
        case ie: {
          try {
            eo(dr | fr, e, e.return);
          } catch (a) {
            fn(e, e.return, a);
          }
          break;
        }
        case k: {
          var t = e.stateNode;
          typeof t.componentWillUnmount == "function" && RE(e, e.return, t);
          break;
        }
      }
    }
    function dN(e) {
      switch (e.tag) {
        case w:
        case K:
        case ie:
          try {
            eo(zr | fr, e, e.return);
          } catch (t) {
            fn(e, e.return, t);
          }
      }
    }
    if (typeof Symbol == "function" && Symbol.for) {
      var Sv = Symbol.for;
      Sv("selector.component"), Sv("selector.has_pseudo_class"), Sv("selector.role"), Sv("selector.test_id"), Sv("selector.text");
    }
    var pN = [];
    function vN() {
      pN.forEach(function(e) {
        return e();
      });
    }
    var hN = d.ReactCurrentActQueue;
    function mN(e) {
      {
        var t = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        ), a = typeof jest < "u";
        return a && t !== !1;
      }
    }
    function jx() {
      {
        var e = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        );
        return !e && hN.current !== null && m("The current testing environment is not configured to support act(...)"), e;
      }
    }
    var yN = Math.ceil, OE = d.ReactCurrentDispatcher, DE = d.ReactCurrentOwner, $r = d.ReactCurrentBatchConfig, ro = d.ReactCurrentActQueue, hr = (
      /*             */
      0
    ), $x = (
      /*               */
      1
    ), Fr = (
      /*                */
      2
    ), Ti = (
      /*                */
      4
    ), zl = 0, Ev = 1, Zs = 2, My = 3, bv = 4, Fx = 5, NE = 6, Dt = hr, Ca = null, Ln = null, mr = ne, Io = ne, ME = Du(ne), yr = zl, Cv = null, Ly = ne, xv = ne, Ay = ne, Tv = null, Ba = null, LE = 0, Vx = 500, Hx = 1 / 0, gN = 500, Pl = null;
    function Rv() {
      Hx = Sn() + gN;
    }
    function Ix() {
      return Hx;
    }
    var zy = !1, AE = null, Zf = null, Js = !1, Vu = null, wv = ne, zE = [], PE = null, SN = 50, _v = 0, UE = null, jE = !1, Py = !1, EN = 50, Jf = 0, Uy = null, kv = rn, jy = ne, Bx = !1;
    function $y() {
      return Ca;
    }
    function xa() {
      return (Dt & (Fr | Ti)) !== hr ? Sn() : (kv !== rn || (kv = Sn()), kv);
    }
    function Hu(e) {
      var t = e.mode;
      if ((t & Tt) === it)
        return st;
      if ((Dt & Fr) !== hr && mr !== ne)
        return Bn(mr);
      var a = mO() !== hO;
      if (a) {
        if ($r.transition !== null) {
          var i = $r.transition;
          i._updatedFibers || (i._updatedFibers = /* @__PURE__ */ new Set()), i._updatedFibers.add(e);
        }
        return jy === Ot && (jy = vp()), jy;
      }
      var u = Ua();
      if (u !== Ot)
        return u;
      var f = ek();
      return f;
    }
    function bN(e) {
      var t = e.mode;
      return (t & Tt) === it ? st : i0();
    }
    function gr(e, t, a, i) {
      YN(), Bx && m("useInsertionEffect must not schedule updates."), jE && (Py = !0), gl(e, a, i), (Dt & Fr) !== ne && e === Ca ? qN(t) : (sr && Sp(e, t, a), QN(t), e === Ca && ((Dt & Fr) === hr && (xv = St(xv, a)), yr === bv && Iu(e, mr)), Ya(e, i), a === st && Dt === hr && (t.mode & Tt) === it && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
      !ro.isBatchingLegacy && (Rv(), I1()));
    }
    function CN(e, t, a) {
      var i = e.current;
      i.lanes = t, gl(e, t, a), Ya(e, a);
    }
    function xN(e) {
      return (
        // TODO: Remove outdated deferRenderPhaseUpdateToNextBatch experiment. We
        // decided not to enable it.
        (Dt & Fr) !== hr
      );
    }
    function Ya(e, t) {
      var a = e.callbackNode;
      n0(e, t);
      var i = Ts(e, e === Ca ? mr : ne);
      if (i === ne) {
        a !== null && oT(a), e.callbackNode = null, e.callbackPriority = Ot;
        return;
      }
      var u = Pn(i), f = e.callbackPriority;
      if (f === u && // Special case related to `act`. If the currently scheduled task is a
      // Scheduler task, rather than an `act` task, cancel it and re-scheduled
      // on the `act` queue.
      !(ro.current !== null && a !== YE)) {
        a == null && f !== st && m("Expected scheduled callback to exist. This error is likely caused by a bug in React. Please file an issue.");
        return;
      }
      a != null && oT(a);
      var h;
      if (u === st)
        e.tag === Nu ? (ro.isBatchingLegacy !== null && (ro.didScheduleLegacyUpdate = !0), Zk(Gx.bind(null, e))) : H1(Gx.bind(null, e)), ro.current !== null ? ro.current.push(Mu) : nk(function() {
          (Dt & (Fr | Ti)) === hr && Mu();
        }), h = null;
      else {
        var E;
        switch (Os(i)) {
          case br:
            E = Pc;
            break;
          case cr:
            E = ga;
            break;
          case Hi:
            E = pi;
            break;
          case _s:
            E = bo;
            break;
          default:
            E = pi;
            break;
        }
        h = WE(E, Yx.bind(null, e));
      }
      e.callbackPriority = u, e.callbackNode = h;
    }
    function Yx(e, t) {
      if (YO(), kv = rn, jy = ne, (Dt & (Fr | Ti)) !== hr)
        throw new Error("Should not already be working.");
      var a = e.callbackNode, i = jl();
      if (i && e.callbackNode !== a)
        return null;
      var u = Ts(e, e === Ca ? mr : ne);
      if (u === ne)
        return null;
      var f = !ws(e, u) && !Xh(e, u) && !t, h = f ? LN(e, u) : Vy(e, u);
      if (h !== zl) {
        if (h === Zs) {
          var E = dp(e);
          E !== ne && (u = E, h = $E(e, E));
        }
        if (h === Ev) {
          var b = Cv;
          throw ec(e, ne), Iu(e, u), Ya(e, Sn()), b;
        }
        if (h === NE)
          Iu(e, u);
        else {
          var T = !ws(e, u), _ = e.current.alternate;
          if (T && !RN(_)) {
            if (h = Vy(e, u), h === Zs) {
              var $ = dp(e);
              $ !== ne && (u = $, h = $E(e, $));
            }
            if (h === Ev) {
              var U = Cv;
              throw ec(e, ne), Iu(e, u), Ya(e, Sn()), U;
            }
          }
          e.finishedWork = _, e.finishedLanes = u, TN(e, h, u);
        }
      }
      return Ya(e, Sn()), e.callbackNode === a ? Yx.bind(null, e) : null;
    }
    function $E(e, t) {
      var a = Tv;
      if (Wn(e)) {
        var i = ec(e, t);
        i.flags |= Rn, Yk(e.containerInfo);
      }
      var u = Vy(e, t);
      if (u !== Zs) {
        var f = Ba;
        Ba = a, f !== null && Wx(f);
      }
      return u;
    }
    function Wx(e) {
      Ba === null ? Ba = e : Ba.push.apply(Ba, e);
    }
    function TN(e, t, a) {
      switch (t) {
        case zl:
        case Ev:
          throw new Error("Root did not complete. This is a bug in React.");
        case Zs: {
          tc(e, Ba, Pl);
          break;
        }
        case My: {
          if (Iu(e, a), lf(a) && // do not delay if we're inside an act() scope
          !lT()) {
            var i = LE + Vx - Sn();
            if (i > 10) {
              var u = Ts(e, ne);
              if (u !== ne)
                break;
              var f = e.suspendedLanes;
              if (!yl(f, a)) {
                xa(), yp(e, f);
                break;
              }
              e.timeoutHandle = P0(tc.bind(null, e, Ba, Pl), i);
              break;
            }
          }
          tc(e, Ba, Pl);
          break;
        }
        case bv: {
          if (Iu(e, a), Kh(a))
            break;
          if (!lT()) {
            var h = Qh(e, a), E = h, b = Sn() - E, T = BN(b) - b;
            if (T > 10) {
              e.timeoutHandle = P0(tc.bind(null, e, Ba, Pl), T);
              break;
            }
          }
          tc(e, Ba, Pl);
          break;
        }
        case Fx: {
          tc(e, Ba, Pl);
          break;
        }
        default:
          throw new Error("Unknown root exit status.");
      }
    }
    function RN(e) {
      for (var t = e; ; ) {
        if (t.flags & ys) {
          var a = t.updateQueue;
          if (a !== null) {
            var i = a.stores;
            if (i !== null)
              for (var u = 0; u < i.length; u++) {
                var f = i[u], h = f.getSnapshot, E = f.value;
                try {
                  if (!$e(h(), E))
                    return !1;
                } catch {
                  return !1;
                }
              }
          }
        }
        var b = t.child;
        if (t.subtreeFlags & ys && b !== null) {
          b.return = t, t = b;
          continue;
        }
        if (t === e)
          return !0;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e)
            return !0;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
      return !0;
    }
    function Iu(e, t) {
      t = pu(t, Ay), t = pu(t, xv), mp(e, t);
    }
    function Gx(e) {
      if (WO(), (Dt & (Fr | Ti)) !== hr)
        throw new Error("Should not already be working.");
      jl();
      var t = Ts(e, ne);
      if (!ta(t, st))
        return Ya(e, Sn()), null;
      var a = Vy(e, t);
      if (e.tag !== Nu && a === Zs) {
        var i = dp(e);
        i !== ne && (t = i, a = $E(e, i));
      }
      if (a === Ev) {
        var u = Cv;
        throw ec(e, ne), Iu(e, t), Ya(e, Sn()), u;
      }
      if (a === NE)
        throw new Error("Root did not complete. This is a bug in React.");
      var f = e.current.alternate;
      return e.finishedWork = f, e.finishedLanes = t, tc(e, Ba, Pl), Ya(e, Sn()), null;
    }
    function wN(e, t) {
      t !== ne && (vu(e, St(t, st)), Ya(e, Sn()), (Dt & (Fr | Ti)) === hr && (Rv(), Mu()));
    }
    function FE(e, t) {
      var a = Dt;
      Dt |= $x;
      try {
        return e(t);
      } finally {
        Dt = a, Dt === hr && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
        !ro.isBatchingLegacy && (Rv(), I1());
      }
    }
    function _N(e, t, a, i, u) {
      var f = Ua(), h = $r.transition;
      try {
        return $r.transition = null, Yn(br), e(t, a, i, u);
      } finally {
        Yn(f), $r.transition = h, Dt === hr && Rv();
      }
    }
    function Ul(e) {
      Vu !== null && Vu.tag === Nu && (Dt & (Fr | Ti)) === hr && jl();
      var t = Dt;
      Dt |= $x;
      var a = $r.transition, i = Ua();
      try {
        return $r.transition = null, Yn(br), e ? e() : void 0;
      } finally {
        Yn(i), $r.transition = a, Dt = t, (Dt & (Fr | Ti)) === hr && Mu();
      }
    }
    function qx() {
      return (Dt & (Fr | Ti)) !== hr;
    }
    function Fy(e, t) {
      ra(ME, Io, e), Io = St(Io, t);
    }
    function VE(e) {
      Io = ME.current, na(ME, e);
    }
    function ec(e, t) {
      e.finishedWork = null, e.finishedLanes = ne;
      var a = e.timeoutHandle;
      if (a !== U0 && (e.timeoutHandle = U0, tk(a)), Ln !== null)
        for (var i = Ln.return; i !== null; ) {
          var u = i.alternate;
          xx(u, i), i = i.return;
        }
      Ca = e;
      var f = nc(e.current, null);
      return Ln = f, mr = Io = t, yr = zl, Cv = null, Ly = ne, xv = ne, Ay = ne, Tv = null, Ba = null, EO(), Qi.discardPendingWarnings(), f;
    }
    function Qx(e, t) {
      do {
        var a = Ln;
        try {
          if (qm(), RC(), Hn(), DE.current = null, a === null || a.return === null) {
            yr = Ev, Cv = t, Ln = null;
            return;
          }
          if (Ne && a.mode & ut && wy(a, !0), qe)
            if (ul(), t !== null && typeof t == "object" && typeof t.then == "function") {
              var i = t;
              Wh(a, i, mr);
            } else
              Vc(a, t, mr);
          XO(e, a.return, a, t, mr), Jx(a);
        } catch (u) {
          t = u, Ln === a && a !== null ? (a = a.return, Ln = a) : a = Ln;
          continue;
        }
        return;
      } while (!0);
    }
    function Kx() {
      var e = OE.current;
      return OE.current = by, e === null ? by : e;
    }
    function Xx(e) {
      OE.current = e;
    }
    function kN() {
      LE = Sn();
    }
    function Ov(e) {
      Ly = St(e, Ly);
    }
    function ON() {
      yr === zl && (yr = My);
    }
    function HE() {
      (yr === zl || yr === My || yr === Zs) && (yr = bv), Ca !== null && (Rs(Ly) || Rs(xv)) && Iu(Ca, mr);
    }
    function DN(e) {
      yr !== bv && (yr = Zs), Tv === null ? Tv = [e] : Tv.push(e);
    }
    function NN() {
      return yr === zl;
    }
    function Vy(e, t) {
      var a = Dt;
      Dt |= Fr;
      var i = Kx();
      if (Ca !== e || mr !== t) {
        if (sr) {
          var u = e.memoizedUpdaters;
          u.size > 0 && (Dv(e, mr), u.clear()), cf(e, t);
        }
        Pl = Ep(), ec(e, t);
      }
      ni(t);
      do
        try {
          MN();
          break;
        } catch (f) {
          Qx(e, f);
        }
      while (!0);
      if (qm(), Dt = a, Xx(i), Ln !== null)
        throw new Error("Cannot commit an incomplete root. This error is likely caused by a bug in React. Please file an issue.");
      return uu(), Ca = null, mr = ne, yr;
    }
    function MN() {
      for (; Ln !== null; )
        Zx(Ln);
    }
    function LN(e, t) {
      var a = Dt;
      Dt |= Fr;
      var i = Kx();
      if (Ca !== e || mr !== t) {
        if (sr) {
          var u = e.memoizedUpdaters;
          u.size > 0 && (Dv(e, mr), u.clear()), cf(e, t);
        }
        Pl = Ep(), Rv(), ec(e, t);
      }
      ni(t);
      do
        try {
          AN();
          break;
        } catch (f) {
          Qx(e, f);
        }
      while (!0);
      return qm(), Xx(i), Dt = a, Ln !== null ? (Es(), zl) : (uu(), Ca = null, mr = ne, yr);
    }
    function AN() {
      for (; Ln !== null && !zc(); )
        Zx(Ln);
    }
    function Zx(e) {
      var t = e.alternate;
      Yt(e);
      var a;
      (e.mode & ut) !== it ? (rE(e), a = IE(t, e, Io), wy(e, !0)) : a = IE(t, e, Io), Hn(), e.memoizedProps = e.pendingProps, a === null ? Jx(e) : Ln = a, DE.current = null;
    }
    function Jx(e) {
      var t = e;
      do {
        var a = t.alternate, i = t.return;
        if ((t.flags & ha) === et) {
          Yt(t);
          var u = void 0;
          if ((t.mode & ut) === it ? u = Cx(a, t, Io) : (rE(t), u = Cx(a, t, Io), wy(t, !1)), Hn(), u !== null) {
            Ln = u;
            return;
          }
        } else {
          var f = OD(a, t);
          if (f !== null) {
            f.flags &= Uh, Ln = f;
            return;
          }
          if ((t.mode & ut) !== it) {
            wy(t, !1);
            for (var h = t.actualDuration, E = t.child; E !== null; )
              h += E.actualDuration, E = E.sibling;
            t.actualDuration = h;
          }
          if (i !== null)
            i.flags |= ha, i.subtreeFlags = et, i.deletions = null;
          else {
            yr = NE, Ln = null;
            return;
          }
        }
        var b = t.sibling;
        if (b !== null) {
          Ln = b;
          return;
        }
        t = i, Ln = t;
      } while (t !== null);
      yr === zl && (yr = Fx);
    }
    function tc(e, t, a) {
      var i = Ua(), u = $r.transition;
      try {
        $r.transition = null, Yn(br), zN(e, t, a, i);
      } finally {
        $r.transition = u, Yn(i);
      }
      return null;
    }
    function zN(e, t, a, i) {
      do
        jl();
      while (Vu !== null);
      if (WN(), (Dt & (Fr | Ti)) !== hr)
        throw new Error("Should not already be working.");
      var u = e.finishedWork, f = e.finishedLanes;
      if (jc(f), u === null)
        return lp(), null;
      if (f === ne && m("root.finishedLanes should not be empty during a commit. This is a bug in React."), e.finishedWork = null, e.finishedLanes = ne, u === e.current)
        throw new Error("Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue.");
      e.callbackNode = null, e.callbackPriority = Ot;
      var h = St(u.lanes, u.childLanes);
      gp(e, h), e === Ca && (Ca = null, Ln = null, mr = ne), ((u.subtreeFlags & La) !== et || (u.flags & La) !== et) && (Js || (Js = !0, PE = a, WE(pi, function() {
        return jl(), null;
      })));
      var E = (u.subtreeFlags & (iu | Xr | Er | La)) !== et, b = (u.flags & (iu | Xr | Er | La)) !== et;
      if (E || b) {
        var T = $r.transition;
        $r.transition = null;
        var _ = Ua();
        Yn(br);
        var $ = Dt;
        Dt |= Ti, DE.current = null, AD(e, u), KC(), qD(e, u, f), q_(e.containerInfo), e.current = u, Gh(f), QD(u, e, f), lu(), Fh(), Dt = $, Yn(_), $r.transition = T;
      } else
        e.current = u, KC();
      var U = Js;
      if (Js ? (Js = !1, Vu = e, wv = f) : (Jf = 0, Uy = null), h = e.pendingLanes, h === ne && (Zf = null), U || rT(e.current, !1), $i(u.stateNode, i), sr && e.memoizedUpdaters.clear(), vN(), Ya(e, Sn()), t !== null)
        for (var q = e.onRecoverableError, Q = 0; Q < t.length; Q++) {
          var ee = t[Q], Ae = ee.stack, tt = ee.digest;
          q(ee.value, {
            componentStack: Ae,
            digest: tt
          });
        }
      if (zy) {
        zy = !1;
        var Qe = AE;
        throw AE = null, Qe;
      }
      return ta(wv, st) && e.tag !== Nu && jl(), h = e.pendingLanes, ta(h, st) ? (BO(), e === UE ? _v++ : (_v = 0, UE = e)) : _v = 0, Mu(), lp(), null;
    }
    function jl() {
      if (Vu !== null) {
        var e = Os(wv), t = l0(Hi, e), a = $r.transition, i = Ua();
        try {
          return $r.transition = null, Yn(t), UN();
        } finally {
          Yn(i), $r.transition = a;
        }
      }
      return !1;
    }
    function PN(e) {
      zE.push(e), Js || (Js = !0, WE(pi, function() {
        return jl(), null;
      }));
    }
    function UN() {
      if (Vu === null)
        return !1;
      var e = PE;
      PE = null;
      var t = Vu, a = wv;
      if (Vu = null, wv = ne, (Dt & (Fr | Ti)) !== hr)
        throw new Error("Cannot flush passive effects while already rendering.");
      jE = !0, Py = !1, qh(a);
      var i = Dt;
      Dt |= Ti, nN(t.current), ZD(t, t.current, a, e);
      {
        var u = zE;
        zE = [];
        for (var f = 0; f < u.length; f++) {
          var h = u[f];
          jD(t, h);
        }
      }
      Ss(), rT(t.current, !0), Dt = i, Mu(), Py ? t === Uy ? Jf++ : (Jf = 0, Uy = t) : Jf = 0, jE = !1, Py = !1, xo(t);
      {
        var E = t.current.stateNode;
        E.effectDuration = 0, E.passiveEffectDuration = 0;
      }
      return !0;
    }
    function eT(e) {
      return Zf !== null && Zf.has(e);
    }
    function jN(e) {
      Zf === null ? Zf = /* @__PURE__ */ new Set([e]) : Zf.add(e);
    }
    function $N(e) {
      zy || (zy = !0, AE = e);
    }
    var FN = $N;
    function tT(e, t, a) {
      var i = Ks(a, t), u = ZC(e, i, st), f = Au(e, u, st), h = xa();
      f !== null && (gl(f, st, h), Ya(f, h));
    }
    function fn(e, t, a) {
      if (ND(a), Nv(!1), e.tag === N) {
        tT(e, e, a);
        return;
      }
      var i = null;
      for (i = t; i !== null; ) {
        if (i.tag === N) {
          tT(i, e, a);
          return;
        } else if (i.tag === k) {
          var u = i.type, f = i.stateNode;
          if (typeof u.getDerivedStateFromError == "function" || typeof f.componentDidCatch == "function" && !eT(f)) {
            var h = Ks(a, e), E = sE(i, h, st), b = Au(i, E, st), T = xa();
            b !== null && (gl(b, st, T), Ya(b, T));
            return;
          }
        }
        i = i.return;
      }
      m(`Internal React error: Attempted to capture a commit phase error inside a detached tree. This indicates a bug in React. Likely causes include deleting the same fiber more than once, committing an already-finished tree, or an inconsistent return pointer.

Error message:

%s`, a);
    }
    function VN(e, t, a) {
      var i = e.pingCache;
      i !== null && i.delete(t);
      var u = xa();
      yp(e, a), KN(e), Ca === e && yl(mr, a) && (yr === bv || yr === My && lf(mr) && Sn() - LE < Vx ? ec(e, ne) : Ay = St(Ay, a)), Ya(e, u);
    }
    function nT(e, t) {
      t === Ot && (t = bN(e));
      var a = xa(), i = Ha(e, t);
      i !== null && (gl(i, t, a), Ya(i, a));
    }
    function HN(e) {
      var t = e.memoizedState, a = Ot;
      t !== null && (a = t.retryLane), nT(e, a);
    }
    function IN(e, t) {
      var a = Ot, i;
      switch (e.tag) {
        case D:
          i = e.stateNode;
          var u = e.memoizedState;
          u !== null && (a = u.retryLane);
          break;
        case _e:
          i = e.stateNode;
          break;
        default:
          throw new Error("Pinged unknown suspense boundary type. This is probably a bug in React.");
      }
      i !== null && i.delete(t), nT(e, a);
    }
    function BN(e) {
      return e < 120 ? 120 : e < 480 ? 480 : e < 1080 ? 1080 : e < 1920 ? 1920 : e < 3e3 ? 3e3 : e < 4320 ? 4320 : yN(e / 1960) * 1960;
    }
    function YN() {
      if (_v > SN)
        throw _v = 0, UE = null, new Error("Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.");
      Jf > EN && (Jf = 0, Uy = null, m("Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render."));
    }
    function WN() {
      Qi.flushLegacyContextWarning(), Qi.flushPendingUnsafeLifecycleWarnings();
    }
    function rT(e, t) {
      Yt(e), Hy(e, Kr, fN), t && Hy(e, ll, dN), Hy(e, Kr, sN), t && Hy(e, ll, cN), Hn();
    }
    function Hy(e, t, a) {
      for (var i = e, u = null; i !== null; ) {
        var f = i.subtreeFlags & t;
        i !== u && i.child !== null && f !== et ? i = i.child : ((i.flags & t) !== et && a(i), i.sibling !== null ? i = i.sibling : i = u = i.return);
      }
    }
    var Iy = null;
    function aT(e) {
      {
        if ((Dt & Fr) !== hr || !(e.mode & Tt))
          return;
        var t = e.tag;
        if (t !== M && t !== N && t !== k && t !== w && t !== K && t !== ve && t !== ie)
          return;
        var a = yt(e) || "ReactComponent";
        if (Iy !== null) {
          if (Iy.has(a))
            return;
          Iy.add(a);
        } else
          Iy = /* @__PURE__ */ new Set([a]);
        var i = An;
        try {
          Yt(e), m("Can't perform a React state update on a component that hasn't mounted yet. This indicates that you have a side-effect in your render function that asynchronously later calls tries to update the component. Move this work to useEffect instead.");
        } finally {
          i ? Yt(e) : Hn();
        }
      }
    }
    var IE;
    {
      var GN = null;
      IE = function(e, t, a) {
        var i = dT(GN, t);
        try {
          return yx(e, t, a);
        } catch (f) {
          if (oO() || f !== null && typeof f == "object" && typeof f.then == "function")
            throw f;
          if (qm(), RC(), xx(e, t), dT(t, i), t.mode & ut && rE(t), ol(null, yx, null, e, t, a), e0()) {
            var u = Kd();
            typeof u == "object" && u !== null && u._suppressLogging && typeof f == "object" && f !== null && !f._suppressLogging && (f._suppressLogging = !0);
          }
          throw f;
        }
      };
    }
    var iT = !1, BE;
    BE = /* @__PURE__ */ new Set();
    function qN(e) {
      if (_a && !VO())
        switch (e.tag) {
          case w:
          case K:
          case ie: {
            var t = Ln && yt(Ln) || "Unknown", a = t;
            if (!BE.has(a)) {
              BE.add(a);
              var i = yt(e) || "Unknown";
              m("Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://reactjs.org/link/setstate-in-render", i, t, t);
            }
            break;
          }
          case k: {
            iT || (m("Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state."), iT = !0);
            break;
          }
        }
    }
    function Dv(e, t) {
      if (sr) {
        var a = e.memoizedUpdaters;
        a.forEach(function(i) {
          Sp(e, i, t);
        });
      }
    }
    var YE = {};
    function WE(e, t) {
      {
        var a = ro.current;
        return a !== null ? (a.push(t), YE) : Ac(e, t);
      }
    }
    function oT(e) {
      if (e !== YE)
        return $h(e);
    }
    function lT() {
      return ro.current !== null;
    }
    function QN(e) {
      {
        if (e.mode & Tt) {
          if (!jx())
            return;
        } else if (!mN() || Dt !== hr || e.tag !== w && e.tag !== K && e.tag !== ie)
          return;
        if (ro.current === null) {
          var t = An;
          try {
            Yt(e), m(`An update to %s inside a test was not wrapped in act(...).

When testing, code that causes React state updates should be wrapped into act(...):

act(() => {
  /* fire events that update state */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`, yt(e));
          } finally {
            t ? Yt(e) : Hn();
          }
        }
      }
    }
    function KN(e) {
      e.tag !== Nu && jx() && ro.current === null && m(`A suspended resource finished loading inside a test, but the event was not wrapped in act(...).

When testing, code that resolves suspended data should be wrapped into act(...):

act(() => {
  /* finish loading suspended data */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`);
    }
    function Nv(e) {
      Bx = e;
    }
    var Ri = null, ed = null, XN = function(e) {
      Ri = e;
    };
    function td(e) {
      {
        if (Ri === null)
          return e;
        var t = Ri(e);
        return t === void 0 ? e : t.current;
      }
    }
    function GE(e) {
      return td(e);
    }
    function qE(e) {
      {
        if (Ri === null)
          return e;
        var t = Ri(e);
        if (t === void 0) {
          if (e != null && typeof e.render == "function") {
            var a = td(e.render);
            if (e.render !== a) {
              var i = {
                $$typeof: at,
                render: a
              };
              return e.displayName !== void 0 && (i.displayName = e.displayName), i;
            }
          }
          return e;
        }
        return t.current;
      }
    }
    function uT(e, t) {
      {
        if (Ri === null)
          return !1;
        var a = e.elementType, i = t.type, u = !1, f = typeof i == "object" && i !== null ? i.$$typeof : null;
        switch (e.tag) {
          case k: {
            typeof i == "function" && (u = !0);
            break;
          }
          case w: {
            (typeof i == "function" || f === lt) && (u = !0);
            break;
          }
          case K: {
            (f === at || f === lt) && (u = !0);
            break;
          }
          case ve:
          case ie: {
            (f === bt || f === lt) && (u = !0);
            break;
          }
          default:
            return !1;
        }
        if (u) {
          var h = Ri(a);
          if (h !== void 0 && h === Ri(i))
            return !0;
        }
        return !1;
      }
    }
    function sT(e) {
      {
        if (Ri === null || typeof WeakSet != "function")
          return;
        ed === null && (ed = /* @__PURE__ */ new WeakSet()), ed.add(e);
      }
    }
    var ZN = function(e, t) {
      {
        if (Ri === null)
          return;
        var a = t.staleFamilies, i = t.updatedFamilies;
        jl(), Ul(function() {
          QE(e.current, i, a);
        });
      }
    }, JN = function(e, t) {
      {
        if (e.context !== ai)
          return;
        jl(), Ul(function() {
          Mv(t, e, null, null);
        });
      }
    };
    function QE(e, t, a) {
      {
        var i = e.alternate, u = e.child, f = e.sibling, h = e.tag, E = e.type, b = null;
        switch (h) {
          case w:
          case ie:
          case k:
            b = E;
            break;
          case K:
            b = E.render;
            break;
        }
        if (Ri === null)
          throw new Error("Expected resolveFamily to be set during hot reload.");
        var T = !1, _ = !1;
        if (b !== null) {
          var $ = Ri(b);
          $ !== void 0 && (a.has($) ? _ = !0 : t.has($) && (h === k ? _ = !0 : T = !0));
        }
        if (ed !== null && (ed.has(e) || i !== null && ed.has(i)) && (_ = !0), _ && (e._debugNeedsRemount = !0), _ || T) {
          var U = Ha(e, st);
          U !== null && gr(U, e, st, rn);
        }
        u !== null && !_ && QE(u, t, a), f !== null && QE(f, t, a);
      }
    }
    var eM = function(e, t) {
      {
        var a = /* @__PURE__ */ new Set(), i = new Set(t.map(function(u) {
          return u.current;
        }));
        return KE(e.current, i, a), a;
      }
    };
    function KE(e, t, a) {
      {
        var i = e.child, u = e.sibling, f = e.tag, h = e.type, E = null;
        switch (f) {
          case w:
          case ie:
          case k:
            E = h;
            break;
          case K:
            E = h.render;
            break;
        }
        var b = !1;
        E !== null && t.has(E) && (b = !0), b ? tM(e, a) : i !== null && KE(i, t, a), u !== null && KE(u, t, a);
      }
    }
    function tM(e, t) {
      {
        var a = nM(e, t);
        if (a)
          return;
        for (var i = e; ; ) {
          switch (i.tag) {
            case V:
              t.add(i.stateNode);
              return;
            case A:
              t.add(i.stateNode.containerInfo);
              return;
            case N:
              t.add(i.stateNode.containerInfo);
              return;
          }
          if (i.return === null)
            throw new Error("Expected to reach root first.");
          i = i.return;
        }
      }
    }
    function nM(e, t) {
      for (var a = e, i = !1; ; ) {
        if (a.tag === V)
          i = !0, t.add(a.stateNode);
        else if (a.child !== null) {
          a.child.return = a, a = a.child;
          continue;
        }
        if (a === e)
          return i;
        for (; a.sibling === null; ) {
          if (a.return === null || a.return === e)
            return i;
          a = a.return;
        }
        a.sibling.return = a.return, a = a.sibling;
      }
      return !1;
    }
    var XE;
    {
      XE = !1;
      try {
        var cT = Object.preventExtensions({});
      } catch {
        XE = !0;
      }
    }
    function rM(e, t, a, i) {
      this.tag = e, this.key = a, this.elementType = null, this.type = null, this.stateNode = null, this.return = null, this.child = null, this.sibling = null, this.index = 0, this.ref = null, this.pendingProps = t, this.memoizedProps = null, this.updateQueue = null, this.memoizedState = null, this.dependencies = null, this.mode = i, this.flags = et, this.subtreeFlags = et, this.deletions = null, this.lanes = ne, this.childLanes = ne, this.alternate = null, this.actualDuration = Number.NaN, this.actualStartTime = Number.NaN, this.selfBaseDuration = Number.NaN, this.treeBaseDuration = Number.NaN, this.actualDuration = 0, this.actualStartTime = -1, this.selfBaseDuration = 0, this.treeBaseDuration = 0, this._debugSource = null, this._debugOwner = null, this._debugNeedsRemount = !1, this._debugHookTypes = null, !XE && typeof Object.preventExtensions == "function" && Object.preventExtensions(this);
    }
    var ii = function(e, t, a, i) {
      return new rM(e, t, a, i);
    };
    function ZE(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function aM(e) {
      return typeof e == "function" && !ZE(e) && e.defaultProps === void 0;
    }
    function iM(e) {
      if (typeof e == "function")
        return ZE(e) ? k : w;
      if (e != null) {
        var t = e.$$typeof;
        if (t === at)
          return K;
        if (t === bt)
          return ve;
      }
      return M;
    }
    function nc(e, t) {
      var a = e.alternate;
      a === null ? (a = ii(e.tag, t, e.key, e.mode), a.elementType = e.elementType, a.type = e.type, a.stateNode = e.stateNode, a._debugSource = e._debugSource, a._debugOwner = e._debugOwner, a._debugHookTypes = e._debugHookTypes, a.alternate = e, e.alternate = a) : (a.pendingProps = t, a.type = e.type, a.flags = et, a.subtreeFlags = et, a.deletions = null, a.actualDuration = 0, a.actualStartTime = -1), a.flags = e.flags & ur, a.childLanes = e.childLanes, a.lanes = e.lanes, a.child = e.child, a.memoizedProps = e.memoizedProps, a.memoizedState = e.memoizedState, a.updateQueue = e.updateQueue;
      var i = e.dependencies;
      switch (a.dependencies = i === null ? null : {
        lanes: i.lanes,
        firstContext: i.firstContext
      }, a.sibling = e.sibling, a.index = e.index, a.ref = e.ref, a.selfBaseDuration = e.selfBaseDuration, a.treeBaseDuration = e.treeBaseDuration, a._debugNeedsRemount = e._debugNeedsRemount, a.tag) {
        case M:
        case w:
        case ie:
          a.type = td(e.type);
          break;
        case k:
          a.type = GE(e.type);
          break;
        case K:
          a.type = qE(e.type);
          break;
      }
      return a;
    }
    function oM(e, t) {
      e.flags &= ur | ln;
      var a = e.alternate;
      if (a === null)
        e.childLanes = ne, e.lanes = t, e.child = null, e.subtreeFlags = et, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null, e.selfBaseDuration = 0, e.treeBaseDuration = 0;
      else {
        e.childLanes = a.childLanes, e.lanes = a.lanes, e.child = a.child, e.subtreeFlags = et, e.deletions = null, e.memoizedProps = a.memoizedProps, e.memoizedState = a.memoizedState, e.updateQueue = a.updateQueue, e.type = a.type;
        var i = a.dependencies;
        e.dependencies = i === null ? null : {
          lanes: i.lanes,
          firstContext: i.firstContext
        }, e.selfBaseDuration = a.selfBaseDuration, e.treeBaseDuration = a.treeBaseDuration;
      }
      return e;
    }
    function lM(e, t, a) {
      var i;
      return e === Fm ? (i = Tt, t === !0 && (i |= En, i |= za)) : i = it, sr && (i |= ut), ii(N, null, null, i);
    }
    function JE(e, t, a, i, u, f) {
      var h = M, E = e;
      if (typeof e == "function")
        ZE(e) ? (h = k, E = GE(E)) : E = td(E);
      else if (typeof e == "string")
        h = V;
      else
        e:
          switch (e) {
            case Qa:
              return Bu(a.children, u, f, t);
            case uo:
              h = H, u |= En, (u & Tt) !== it && (u |= za);
              break;
            case L:
              return uM(a, u, f, t);
            case Et:
              return sM(a, u, f, t);
            case Mt:
              return cM(a, u, f, t);
            case pn:
              return fT(a, u, f, t);
            case Nr:
            case Zn:
            case so:
            case sc:
            case dn:
            default: {
              if (typeof e == "object" && e !== null)
                switch (e.$$typeof) {
                  case pe:
                    h = de;
                    break e;
                  case Re:
                    h = le;
                    break e;
                  case at:
                    h = K, E = qE(E);
                    break e;
                  case bt:
                    h = ve;
                    break e;
                  case lt:
                    h = Ke, E = null;
                    break e;
                }
              var b = "";
              {
                (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (b += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
                var T = i ? yt(i) : null;
                T && (b += `

Check the render method of \`` + T + "`.");
              }
              throw new Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) " + ("but got: " + (e == null ? e : typeof e) + "." + b));
            }
          }
      var _ = ii(h, a, t, u);
      return _.elementType = e, _.type = E, _.lanes = f, _._debugOwner = i, _;
    }
    function eb(e, t, a) {
      var i = null;
      i = e._owner;
      var u = e.type, f = e.key, h = e.props, E = JE(u, f, h, i, t, a);
      return E._debugSource = e._source, E._debugOwner = e._owner, E;
    }
    function Bu(e, t, a, i) {
      var u = ii(P, e, i, t);
      return u.lanes = a, u;
    }
    function uM(e, t, a, i) {
      typeof e.id != "string" && m('Profiler must specify an "id" of type `string` as a prop. Received the type `%s` instead.', typeof e.id);
      var u = ii(J, e, i, t | ut);
      return u.elementType = L, u.lanes = a, u.stateNode = {
        effectDuration: 0,
        passiveEffectDuration: 0
      }, u;
    }
    function sM(e, t, a, i) {
      var u = ii(D, e, i, t);
      return u.elementType = Et, u.lanes = a, u;
    }
    function cM(e, t, a, i) {
      var u = ii(_e, e, i, t);
      return u.elementType = Mt, u.lanes = a, u;
    }
    function fT(e, t, a, i) {
      var u = ii(Ee, e, i, t);
      u.elementType = pn, u.lanes = a;
      var f = {
        isHidden: !1
      };
      return u.stateNode = f, u;
    }
    function tb(e, t, a) {
      var i = ii(F, e, null, t);
      return i.lanes = a, i;
    }
    function fM() {
      var e = ii(V, null, null, it);
      return e.elementType = "DELETED", e;
    }
    function dM(e) {
      var t = ii(De, null, null, it);
      return t.stateNode = e, t;
    }
    function nb(e, t, a) {
      var i = e.children !== null ? e.children : [], u = ii(A, i, e.key, t);
      return u.lanes = a, u.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        // Used by persistent updates
        implementation: e.implementation
      }, u;
    }
    function dT(e, t) {
      return e === null && (e = ii(M, null, null, it)), e.tag = t.tag, e.key = t.key, e.elementType = t.elementType, e.type = t.type, e.stateNode = t.stateNode, e.return = t.return, e.child = t.child, e.sibling = t.sibling, e.index = t.index, e.ref = t.ref, e.pendingProps = t.pendingProps, e.memoizedProps = t.memoizedProps, e.updateQueue = t.updateQueue, e.memoizedState = t.memoizedState, e.dependencies = t.dependencies, e.mode = t.mode, e.flags = t.flags, e.subtreeFlags = t.subtreeFlags, e.deletions = t.deletions, e.lanes = t.lanes, e.childLanes = t.childLanes, e.alternate = t.alternate, e.actualDuration = t.actualDuration, e.actualStartTime = t.actualStartTime, e.selfBaseDuration = t.selfBaseDuration, e.treeBaseDuration = t.treeBaseDuration, e._debugSource = t._debugSource, e._debugOwner = t._debugOwner, e._debugNeedsRemount = t._debugNeedsRemount, e._debugHookTypes = t._debugHookTypes, e;
    }
    function pM(e, t, a, i, u) {
      this.tag = t, this.containerInfo = e, this.pendingChildren = null, this.current = null, this.pingCache = null, this.finishedWork = null, this.timeoutHandle = U0, this.context = null, this.pendingContext = null, this.callbackNode = null, this.callbackPriority = Ot, this.eventTimes = sf(ne), this.expirationTimes = sf(rn), this.pendingLanes = ne, this.suspendedLanes = ne, this.pingedLanes = ne, this.expiredLanes = ne, this.mutableReadLanes = ne, this.finishedLanes = ne, this.entangledLanes = ne, this.entanglements = sf(ne), this.identifierPrefix = i, this.onRecoverableError = u, this.mutableSourceEagerHydrationData = null, this.effectDuration = 0, this.passiveEffectDuration = 0;
      {
        this.memoizedUpdaters = /* @__PURE__ */ new Set();
        for (var f = this.pendingUpdatersLaneMap = [], h = 0; h < sn; h++)
          f.push(/* @__PURE__ */ new Set());
      }
      switch (t) {
        case Fm:
          this._debugRootType = a ? "hydrateRoot()" : "createRoot()";
          break;
        case Nu:
          this._debugRootType = a ? "hydrate()" : "render()";
          break;
      }
    }
    function pT(e, t, a, i, u, f, h, E, b, T) {
      var _ = new pM(e, t, a, E, b), $ = lM(t, f);
      _.current = $, $.stateNode = _;
      {
        var U = {
          element: i,
          isDehydrated: a,
          cache: null,
          // not enabled yet
          transitions: null,
          pendingSuspenseBoundaries: null
        };
        $.memoizedState = U;
      }
      return cS($), _;
    }
    var rb = "18.2.0";
    function vM(e, t, a) {
      var i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
      return ua(i), {
        // This tag allow us to uniquely identify this as a React Portal
        $$typeof: pa,
        key: i == null ? null : "" + i,
        children: e,
        containerInfo: t,
        implementation: a
      };
    }
    var ab, ib;
    ab = !1, ib = {};
    function vT(e) {
      if (!e)
        return ai;
      var t = Da(e), a = Xk(t);
      if (t.tag === k) {
        var i = t.type;
        if (Po(i))
          return F1(t, i, a);
      }
      return a;
    }
    function hM(e, t) {
      {
        var a = Da(e);
        if (a === void 0) {
          if (typeof e.render == "function")
            throw new Error("Unable to find node on an unmounted component.");
          var i = Object.keys(e).join(",");
          throw new Error("Argument appears to not be a ReactComponent. Keys: " + i);
        }
        var u = Aa(a);
        if (u === null)
          return null;
        if (u.mode & En) {
          var f = yt(a) || "Component";
          if (!ib[f]) {
            ib[f] = !0;
            var h = An;
            try {
              Yt(u), a.mode & En ? m("%s is deprecated in StrictMode. %s was passed an instance of %s which is inside StrictMode. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, f) : m("%s is deprecated in StrictMode. %s was passed an instance of %s which renders StrictMode children. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, f);
            } finally {
              h ? Yt(h) : Hn();
            }
          }
        }
        return u.stateNode;
      }
    }
    function hT(e, t, a, i, u, f, h, E) {
      var b = !1, T = null;
      return pT(e, t, b, T, a, i, u, f, h);
    }
    function mT(e, t, a, i, u, f, h, E, b, T) {
      var _ = !0, $ = pT(a, i, _, e, u, f, h, E, b);
      $.context = vT(null);
      var U = $.current, q = xa(), Q = Hu(U), ee = Ll(q, Q);
      return ee.callback = t ?? null, Au(U, ee, Q), CN($, Q, q), $;
    }
    function Mv(e, t, a, i) {
      Vh(t, e);
      var u = t.current, f = xa(), h = Hu(u);
      sl(h);
      var E = vT(a);
      t.context === null ? t.context = E : t.pendingContext = E, _a && An !== null && !ab && (ab = !0, m(`Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.

Check the render method of %s.`, yt(An) || "Unknown"));
      var b = Ll(f, h);
      b.payload = {
        element: e
      }, i = i === void 0 ? null : i, i !== null && (typeof i != "function" && m("render(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", i), b.callback = i);
      var T = Au(u, b, h);
      return T !== null && (gr(T, u, h, f), Jm(T, u, h)), h;
    }
    function By(e) {
      var t = e.current;
      if (!t.child)
        return null;
      switch (t.child.tag) {
        case V:
          return t.child.stateNode;
        default:
          return t.child.stateNode;
      }
    }
    function mM(e) {
      switch (e.tag) {
        case N: {
          var t = e.stateNode;
          if (Wn(t)) {
            var a = r0(t);
            wN(t, a);
          }
          break;
        }
        case D: {
          Ul(function() {
            var u = Ha(e, st);
            if (u !== null) {
              var f = xa();
              gr(u, e, st, f);
            }
          });
          var i = st;
          ob(e, i);
          break;
        }
      }
    }
    function yT(e, t) {
      var a = e.memoizedState;
      a !== null && a.dehydrated !== null && (a.retryLane = Jh(a.retryLane, t));
    }
    function ob(e, t) {
      yT(e, t);
      var a = e.alternate;
      a && yT(a, t);
    }
    function yM(e) {
      if (e.tag === D) {
        var t = su, a = Ha(e, t);
        if (a !== null) {
          var i = xa();
          gr(a, e, t, i);
        }
        ob(e, t);
      }
    }
    function gM(e) {
      if (e.tag === D) {
        var t = Hu(e), a = Ha(e, t);
        if (a !== null) {
          var i = xa();
          gr(a, e, t, i);
        }
        ob(e, t);
      }
    }
    function gT(e) {
      var t = jh(e);
      return t === null ? null : t.stateNode;
    }
    var ST = function(e) {
      return null;
    };
    function SM(e) {
      return ST(e);
    }
    var ET = function(e) {
      return !1;
    };
    function EM(e) {
      return ET(e);
    }
    var bT = null, CT = null, xT = null, TT = null, RT = null, wT = null, _T = null, kT = null, OT = null;
    {
      var DT = function(e, t, a) {
        var i = t[a], u = Jn(e) ? e.slice() : wt({}, e);
        return a + 1 === t.length ? (Jn(u) ? u.splice(i, 1) : delete u[i], u) : (u[i] = DT(e[i], t, a + 1), u);
      }, NT = function(e, t) {
        return DT(e, t, 0);
      }, MT = function(e, t, a, i) {
        var u = t[i], f = Jn(e) ? e.slice() : wt({}, e);
        if (i + 1 === t.length) {
          var h = a[i];
          f[h] = f[u], Jn(f) ? f.splice(u, 1) : delete f[u];
        } else
          f[u] = MT(
            // $FlowFixMe number or string is fine here
            e[u],
            t,
            a,
            i + 1
          );
        return f;
      }, LT = function(e, t, a) {
        if (t.length !== a.length) {
          S("copyWithRename() expects paths of the same length");
          return;
        } else
          for (var i = 0; i < a.length - 1; i++)
            if (t[i] !== a[i]) {
              S("copyWithRename() expects paths to be the same except for the deepest key");
              return;
            }
        return MT(e, t, a, 0);
      }, AT = function(e, t, a, i) {
        if (a >= t.length)
          return i;
        var u = t[a], f = Jn(e) ? e.slice() : wt({}, e);
        return f[u] = AT(e[u], t, a + 1, i), f;
      }, zT = function(e, t, a) {
        return AT(e, t, 0, a);
      }, lb = function(e, t) {
        for (var a = e.memoizedState; a !== null && t > 0; )
          a = a.next, t--;
        return a;
      };
      bT = function(e, t, a, i) {
        var u = lb(e, t);
        if (u !== null) {
          var f = zT(u.memoizedState, a, i);
          u.memoizedState = f, u.baseState = f, e.memoizedProps = wt({}, e.memoizedProps);
          var h = Ha(e, st);
          h !== null && gr(h, e, st, rn);
        }
      }, CT = function(e, t, a) {
        var i = lb(e, t);
        if (i !== null) {
          var u = NT(i.memoizedState, a);
          i.memoizedState = u, i.baseState = u, e.memoizedProps = wt({}, e.memoizedProps);
          var f = Ha(e, st);
          f !== null && gr(f, e, st, rn);
        }
      }, xT = function(e, t, a, i) {
        var u = lb(e, t);
        if (u !== null) {
          var f = LT(u.memoizedState, a, i);
          u.memoizedState = f, u.baseState = f, e.memoizedProps = wt({}, e.memoizedProps);
          var h = Ha(e, st);
          h !== null && gr(h, e, st, rn);
        }
      }, TT = function(e, t, a) {
        e.pendingProps = zT(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = Ha(e, st);
        i !== null && gr(i, e, st, rn);
      }, RT = function(e, t) {
        e.pendingProps = NT(e.memoizedProps, t), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var a = Ha(e, st);
        a !== null && gr(a, e, st, rn);
      }, wT = function(e, t, a) {
        e.pendingProps = LT(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = Ha(e, st);
        i !== null && gr(i, e, st, rn);
      }, _T = function(e) {
        var t = Ha(e, st);
        t !== null && gr(t, e, st, rn);
      }, kT = function(e) {
        ST = e;
      }, OT = function(e) {
        ET = e;
      };
    }
    function bM(e) {
      var t = Aa(e);
      return t === null ? null : t.stateNode;
    }
    function CM(e) {
      return null;
    }
    function xM() {
      return An;
    }
    function TM(e) {
      var t = e.findFiberByHostInstance, a = d.ReactCurrentDispatcher;
      return ip({
        bundleType: e.bundleType,
        version: e.version,
        rendererPackageName: e.rendererPackageName,
        rendererConfig: e.rendererConfig,
        overrideHookState: bT,
        overrideHookStateDeletePath: CT,
        overrideHookStateRenamePath: xT,
        overrideProps: TT,
        overridePropsDeletePath: RT,
        overridePropsRenamePath: wT,
        setErrorHandler: kT,
        setSuspenseHandler: OT,
        scheduleUpdate: _T,
        currentDispatcherRef: a,
        findHostInstanceByFiber: bM,
        findFiberByHostInstance: t || CM,
        // React Refresh
        findHostInstancesForRefresh: eM,
        scheduleRefresh: ZN,
        scheduleRoot: JN,
        setRefreshHandler: XN,
        // Enables DevTools to append owner stacks to error messages in DEV mode.
        getCurrentFiber: xM,
        // Enables DevTools to detect reconciler version rather than renderer version
        // which may not match for third party renderers.
        reconcilerVersion: rb
      });
    }
    var PT = typeof reportError == "function" ? (
      // In modern browsers, reportError will dispatch an error event,
      // emulating an uncaught JavaScript error.
      reportError
    ) : function(e) {
      console.error(e);
    };
    function ub(e) {
      this._internalRoot = e;
    }
    Yy.prototype.render = ub.prototype.render = function(e) {
      var t = this._internalRoot;
      if (t === null)
        throw new Error("Cannot update an unmounted root.");
      {
        typeof arguments[1] == "function" ? m("render(...): does not support the second callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().") : Wy(arguments[1]) ? m("You passed a container to the second argument of root.render(...). You don't need to pass it again since you already passed it to create the root.") : typeof arguments[1] < "u" && m("You passed a second argument to root.render(...) but it only accepts one argument.");
        var a = t.containerInfo;
        if (a.nodeType !== zn) {
          var i = gT(t.current);
          i && i.parentNode !== a && m("render(...): It looks like the React-rendered content of the root container was removed without using React. This is not supported and will cause errors. Instead, call root.unmount() to empty a root's container.");
        }
      }
      Mv(e, t, null, null);
    }, Yy.prototype.unmount = ub.prototype.unmount = function() {
      typeof arguments[0] == "function" && m("unmount(...): does not support a callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().");
      var e = this._internalRoot;
      if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        qx() && m("Attempted to synchronously unmount a root while React was already rendering. React cannot finish unmounting the root until the current render has completed, which may lead to a race condition."), Ul(function() {
          Mv(null, e, null, null);
        }), z1(t);
      }
    };
    function RM(e, t) {
      if (!Wy(e))
        throw new Error("createRoot(...): Target container is not a DOM element.");
      UT(e);
      var a = !1, i = !1, u = "", f = PT;
      t != null && (t.hydrate ? S("hydrate through createRoot is deprecated. Use ReactDOMClient.hydrateRoot(container, <App />) instead.") : typeof t == "object" && t !== null && t.$$typeof === lo && m(`You passed a JSX element to createRoot. You probably meant to call root.render instead. Example usage:

  let root = createRoot(domContainer);
  root.render(<App />);`), t.unstable_strictMode === !0 && (a = !0), t.identifierPrefix !== void 0 && (u = t.identifierPrefix), t.onRecoverableError !== void 0 && (f = t.onRecoverableError), t.transitionCallbacks !== void 0 && t.transitionCallbacks);
      var h = hT(e, Fm, null, a, i, u, f);
      Lm(h.current, e);
      var E = e.nodeType === zn ? e.parentNode : e;
      return Fp(E), new ub(h);
    }
    function Yy(e) {
      this._internalRoot = e;
    }
    function wM(e) {
      e && lm(e);
    }
    Yy.prototype.unstable_scheduleHydration = wM;
    function _M(e, t, a) {
      if (!Wy(e))
        throw new Error("hydrateRoot(...): Target container is not a DOM element.");
      UT(e), t === void 0 && m("Must provide initial children as second argument to hydrateRoot. Example usage: hydrateRoot(domContainer, <App />)");
      var i = a ?? null, u = a != null && a.hydratedSources || null, f = !1, h = !1, E = "", b = PT;
      a != null && (a.unstable_strictMode === !0 && (f = !0), a.identifierPrefix !== void 0 && (E = a.identifierPrefix), a.onRecoverableError !== void 0 && (b = a.onRecoverableError));
      var T = mT(t, null, e, Fm, i, f, h, E, b);
      if (Lm(T.current, e), Fp(e), u)
        for (var _ = 0; _ < u.length; _++) {
          var $ = u[_];
          zO(T, $);
        }
      return new Yy(T);
    }
    function Wy(e) {
      return !!(e && (e.nodeType === Gr || e.nodeType === Ja || e.nodeType === el || !we));
    }
    function Lv(e) {
      return !!(e && (e.nodeType === Gr || e.nodeType === Ja || e.nodeType === el || e.nodeType === zn && e.nodeValue === " react-mount-point-unstable "));
    }
    function UT(e) {
      e.nodeType === Gr && e.tagName && e.tagName.toUpperCase() === "BODY" && m("createRoot(): Creating roots directly with document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try using a container element created for your app."), Xp(e) && (e._reactRootContainer ? m("You are calling ReactDOMClient.createRoot() on a container that was previously passed to ReactDOM.render(). This is not supported.") : m("You are calling ReactDOMClient.createRoot() on a container that has already been passed to createRoot() before. Instead, call root.render() on the existing root instead if you want to update it."));
    }
    var kM = d.ReactCurrentOwner, jT;
    jT = function(e) {
      if (e._reactRootContainer && e.nodeType !== zn) {
        var t = gT(e._reactRootContainer.current);
        t && t.parentNode !== e && m("render(...): It looks like the React-rendered content of this container was removed without using React. This is not supported and will cause errors. Instead, call ReactDOM.unmountComponentAtNode to empty a container.");
      }
      var a = !!e._reactRootContainer, i = sb(e), u = !!(i && Ou(i));
      u && !a && m("render(...): Replacing React-rendered children with a new root component. If you intended to update the children of this node, you should instead have the existing children update their state and render the new components instead of calling ReactDOM.render."), e.nodeType === Gr && e.tagName && e.tagName.toUpperCase() === "BODY" && m("render(): Rendering components directly into document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try rendering into a container element created for your app.");
    };
    function sb(e) {
      return e ? e.nodeType === Ja ? e.documentElement : e.firstChild : null;
    }
    function $T() {
    }
    function OM(e, t, a, i, u) {
      if (u) {
        if (typeof i == "function") {
          var f = i;
          i = function() {
            var U = By(h);
            f.call(U);
          };
        }
        var h = mT(
          t,
          i,
          e,
          Nu,
          null,
          // hydrationCallbacks
          !1,
          // isStrictMode
          !1,
          // concurrentUpdatesByDefaultOverride,
          "",
          // identifierPrefix
          $T
        );
        e._reactRootContainer = h, Lm(h.current, e);
        var E = e.nodeType === zn ? e.parentNode : e;
        return Fp(E), Ul(), h;
      } else {
        for (var b; b = e.lastChild; )
          e.removeChild(b);
        if (typeof i == "function") {
          var T = i;
          i = function() {
            var U = By(_);
            T.call(U);
          };
        }
        var _ = hT(
          e,
          Nu,
          null,
          // hydrationCallbacks
          !1,
          // isStrictMode
          !1,
          // concurrentUpdatesByDefaultOverride,
          "",
          // identifierPrefix
          $T
        );
        e._reactRootContainer = _, Lm(_.current, e);
        var $ = e.nodeType === zn ? e.parentNode : e;
        return Fp($), Ul(function() {
          Mv(t, _, a, i);
        }), _;
      }
    }
    function DM(e, t) {
      e !== null && typeof e != "function" && m("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e);
    }
    function Gy(e, t, a, i, u) {
      jT(a), DM(u === void 0 ? null : u, "render");
      var f = a._reactRootContainer, h;
      if (!f)
        h = OM(a, t, e, u, i);
      else {
        if (h = f, typeof u == "function") {
          var E = u;
          u = function() {
            var b = By(h);
            E.call(b);
          };
        }
        Mv(t, h, e, u);
      }
      return By(h);
    }
    function NM(e) {
      {
        var t = kM.current;
        if (t !== null && t.stateNode !== null) {
          var a = t.stateNode._warnedAboutRefsInRender;
          a || m("%s is accessing findDOMNode inside its render(). render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", tn(t.type) || "A component"), t.stateNode._warnedAboutRefsInRender = !0;
        }
      }
      return e == null ? null : e.nodeType === Gr ? e : hM(e, "findDOMNode");
    }
    function MM(e, t, a) {
      if (m("ReactDOM.hydrate is no longer supported in React 18. Use hydrateRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Lv(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = Xp(t) && t._reactRootContainer === void 0;
        i && m("You are calling ReactDOM.hydrate() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call hydrateRoot(container, element)?");
      }
      return Gy(null, e, t, !0, a);
    }
    function LM(e, t, a) {
      if (m("ReactDOM.render is no longer supported in React 18. Use createRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Lv(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = Xp(t) && t._reactRootContainer === void 0;
        i && m("You are calling ReactDOM.render() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.render(element)?");
      }
      return Gy(null, e, t, !1, a);
    }
    function AM(e, t, a, i) {
      if (m("ReactDOM.unstable_renderSubtreeIntoContainer() is no longer supported in React 18. Consider using a portal instead. Until you switch to the createRoot API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Lv(a))
        throw new Error("Target container is not a DOM element.");
      if (e == null || !ms(e))
        throw new Error("parentComponent must be a valid React Component");
      return Gy(e, t, a, !1, i);
    }
    function zM(e) {
      if (!Lv(e))
        throw new Error("unmountComponentAtNode(...): Target container is not a DOM element.");
      {
        var t = Xp(e) && e._reactRootContainer === void 0;
        t && m("You are calling ReactDOM.unmountComponentAtNode() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.unmount()?");
      }
      if (e._reactRootContainer) {
        {
          var a = sb(e), i = a && !Ou(a);
          i && m("unmountComponentAtNode(): The node you're attempting to unmount was rendered by another copy of React.");
        }
        return Ul(function() {
          Gy(null, null, e, !1, function() {
            e._reactRootContainer = null, z1(e);
          });
        }), !0;
      } else {
        {
          var u = sb(e), f = !!(u && Ou(u)), h = e.nodeType === Gr && Lv(e.parentNode) && !!e.parentNode._reactRootContainer;
          f && m("unmountComponentAtNode(): The node you're attempting to unmount was rendered by React and is not a top-level container. %s", h ? "You may have accidentally passed in a React root node instead of its container." : "Instead, have the parent component update its state and rerender in order to remove this component.");
        }
        return !1;
      }
    }
    Ue(mM), tm(yM), Ns(gM), Cp(Ua), rm(ks), (typeof Map != "function" || // $FlowIssue Flow incorrectly thinks Map has no prototype
    Map.prototype == null || typeof Map.prototype.forEach != "function" || typeof Set != "function" || // $FlowIssue Flow incorrectly thinks Set has no prototype
    Set.prototype == null || typeof Set.prototype.clear != "function" || typeof Set.prototype.forEach != "function") && m("React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"), zh(j_), Oc(FE, _N, Ul);
    function PM(e, t) {
      var a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
      if (!Wy(t))
        throw new Error("Target container is not a DOM element.");
      return vM(e, t, null, a);
    }
    function UM(e, t, a, i) {
      return AM(e, t, a, i);
    }
    var cb = {
      usingClientEntryPoint: !1,
      // Keep in sync with ReactTestUtils.js.
      // This is an array for better minification.
      Events: [Ou, Mf, Am, kc, ps, FE]
    };
    function jM(e, t) {
      return cb.usingClientEntryPoint || m('You are importing createRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), RM(e, t);
    }
    function $M(e, t, a) {
      return cb.usingClientEntryPoint || m('You are importing hydrateRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), _M(e, t, a);
    }
    function FM(e) {
      return qx() && m("flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task."), Ul(e);
    }
    var VM = TM({
      findFiberByHostInstance: Vs,
      bundleType: 1,
      version: rb,
      rendererPackageName: "react-dom"
    });
    if (!VM && mt && window.top === window.self && (navigator.userAgent.indexOf("Chrome") > -1 && navigator.userAgent.indexOf("Edge") === -1 || navigator.userAgent.indexOf("Firefox") > -1)) {
      var FT = window.location.protocol;
      /^(https?|file):$/.test(FT) && console.info("%cDownload the React DevTools for a better development experience: https://reactjs.org/link/react-devtools" + (FT === "file:" ? `
You might need to use a local HTTP server (instead of file://): https://reactjs.org/link/react-devtools-faq` : ""), "font-weight:bold");
    }
    Ga.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = cb, Ga.createPortal = PM, Ga.createRoot = jM, Ga.findDOMNode = NM, Ga.flushSync = FM, Ga.hydrate = MM, Ga.hydrateRoot = $M, Ga.render = LM, Ga.unmountComponentAtNode = zM, Ga.unstable_batchedUpdates = FE, Ga.unstable_renderSubtreeIntoContainer = UM, Ga.version = rb, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), Ga;
}
function Lw() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) {
    if (process.env.NODE_ENV !== "production")
      throw new Error("^_^");
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Lw);
    } catch (l) {
      console.error(l);
    }
  }
}
process.env.NODE_ENV === "production" ? (Lw(), Pb.exports = rP()) : Pb.exports = aP();
var Aw = Pb.exports;
const Zy = /* @__PURE__ */ tw(Aw), HR = {
  disabled: !1
};
var iP = process.env.NODE_ENV !== "production" ? x.oneOfType([x.number, x.shape({
  enter: x.number,
  exit: x.number,
  appear: x.number
}).isRequired]) : null;
process.env.NODE_ENV !== "production" && x.oneOfType([x.string, x.shape({
  enter: x.string,
  exit: x.string,
  active: x.string
}), x.shape({
  enter: x.string,
  enterDone: x.string,
  enterActive: x.string,
  exit: x.string,
  exitDone: x.string,
  exitActive: x.string
})]);
const cg = ui.createContext(null);
var oP = function(s) {
  return s.scrollTop;
}, $v = "unmounted", rc = "exited", ac = "entering", sd = "entered", Ub = "exiting", Hl = /* @__PURE__ */ function(l) {
  Nw(s, l);
  function s(v, g) {
    var S;
    S = l.call(this, v, g) || this;
    var m = g, R = m && !m.isMounting ? v.enter : v.appear, w;
    return S.appearStatus = null, v.in ? R ? (w = rc, S.appearStatus = ac) : w = sd : v.unmountOnExit || v.mountOnEnter ? w = $v : w = rc, S.state = {
      status: w
    }, S.nextCallback = null, S;
  }
  s.getDerivedStateFromProps = function(g, S) {
    var m = g.in;
    return m && S.status === $v ? {
      status: rc
    } : null;
  };
  var d = s.prototype;
  return d.componentDidMount = function() {
    this.updateStatus(!0, this.appearStatus);
  }, d.componentDidUpdate = function(g) {
    var S = null;
    if (g !== this.props) {
      var m = this.state.status;
      this.props.in ? m !== ac && m !== sd && (S = ac) : (m === ac || m === sd) && (S = Ub);
    }
    this.updateStatus(!1, S);
  }, d.componentWillUnmount = function() {
    this.cancelNextCallback();
  }, d.getTimeouts = function() {
    var g = this.props.timeout, S, m, R;
    return S = m = R = g, g != null && typeof g != "number" && (S = g.exit, m = g.enter, R = g.appear !== void 0 ? g.appear : m), {
      exit: S,
      enter: m,
      appear: R
    };
  }, d.updateStatus = function(g, S) {
    if (g === void 0 && (g = !1), S !== null)
      if (this.cancelNextCallback(), S === ac) {
        if (this.props.unmountOnExit || this.props.mountOnEnter) {
          var m = this.props.nodeRef ? this.props.nodeRef.current : Zy.findDOMNode(this);
          m && oP(m);
        }
        this.performEnter(g);
      } else
        this.performExit();
    else
      this.props.unmountOnExit && this.state.status === rc && this.setState({
        status: $v
      });
  }, d.performEnter = function(g) {
    var S = this, m = this.props.enter, R = this.context ? this.context.isMounting : g, w = this.props.nodeRef ? [R] : [Zy.findDOMNode(this), R], k = w[0], M = w[1], N = this.getTimeouts(), A = R ? N.appear : N.enter;
    if (!g && !m || HR.disabled) {
      this.safeSetState({
        status: sd
      }, function() {
        S.props.onEntered(k);
      });
      return;
    }
    this.props.onEnter(k, M), this.safeSetState({
      status: ac
    }, function() {
      S.props.onEntering(k, M), S.onTransitionEnd(A, function() {
        S.safeSetState({
          status: sd
        }, function() {
          S.props.onEntered(k, M);
        });
      });
    });
  }, d.performExit = function() {
    var g = this, S = this.props.exit, m = this.getTimeouts(), R = this.props.nodeRef ? void 0 : Zy.findDOMNode(this);
    if (!S || HR.disabled) {
      this.safeSetState({
        status: rc
      }, function() {
        g.props.onExited(R);
      });
      return;
    }
    this.props.onExit(R), this.safeSetState({
      status: Ub
    }, function() {
      g.props.onExiting(R), g.onTransitionEnd(m.exit, function() {
        g.safeSetState({
          status: rc
        }, function() {
          g.props.onExited(R);
        });
      });
    });
  }, d.cancelNextCallback = function() {
    this.nextCallback !== null && (this.nextCallback.cancel(), this.nextCallback = null);
  }, d.safeSetState = function(g, S) {
    S = this.setNextCallback(S), this.setState(g, S);
  }, d.setNextCallback = function(g) {
    var S = this, m = !0;
    return this.nextCallback = function(R) {
      m && (m = !1, S.nextCallback = null, g(R));
    }, this.nextCallback.cancel = function() {
      m = !1;
    }, this.nextCallback;
  }, d.onTransitionEnd = function(g, S) {
    this.setNextCallback(S);
    var m = this.props.nodeRef ? this.props.nodeRef.current : Zy.findDOMNode(this), R = g == null && !this.props.addEndListener;
    if (!m || R) {
      setTimeout(this.nextCallback, 0);
      return;
    }
    if (this.props.addEndListener) {
      var w = this.props.nodeRef ? [this.nextCallback] : [m, this.nextCallback], k = w[0], M = w[1];
      this.props.addEndListener(k, M);
    }
    g != null && setTimeout(this.nextCallback, g);
  }, d.render = function() {
    var g = this.state.status;
    if (g === $v)
      return null;
    var S = this.props, m = S.children;
    S.in, S.mountOnEnter, S.unmountOnExit, S.appear, S.enter, S.exit, S.timeout, S.addEndListener, S.onEnter, S.onEntering, S.onEntered, S.onExit, S.onExiting, S.onExited, S.nodeRef;
    var R = Tn(S, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);
    return (
      // allows for nested Transitions
      /* @__PURE__ */ ui.createElement(cg.Provider, {
        value: null
      }, typeof m == "function" ? m(g, R) : ui.cloneElement(ui.Children.only(m), R))
    );
  }, s;
}(ui.Component);
Hl.contextType = cg;
Hl.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * A React reference to DOM element that need to transition:
   * https://stackoverflow.com/a/51127130/4671932
   *
   *   - When `nodeRef` prop is used, `node` is not passed to callback functions
   *      (e.g. `onEnter`) because user already has direct access to the node.
   *   - When changing `key` prop of `Transition` in a `TransitionGroup` a new
   *     `nodeRef` need to be provided to `Transition` with changed `key` prop
   *     (see
   *     [test/CSSTransition-test.js](https://github.com/reactjs/react-transition-group/blob/13435f897b3ab71f6e19d724f145596f5910581c/test/CSSTransition-test.js#L362-L437)).
   */
  nodeRef: x.shape({
    current: typeof Element > "u" ? x.any : function(l, s, d, v, g, S) {
      var m = l[s];
      return x.instanceOf(m && "ownerDocument" in m ? m.ownerDocument.defaultView.Element : Element)(l, s, d, v, g, S);
    }
  }),
  /**
   * A `function` child can be used instead of a React element. This function is
   * called with the current transition status (`'entering'`, `'entered'`,
   * `'exiting'`, `'exited'`), which can be used to apply context
   * specific props to a component.
   *
   * ```jsx
   * <Transition in={this.state.in} timeout={150}>
   *   {state => (
   *     <MyComponent className={`fade fade-${state}`} />
   *   )}
   * </Transition>
   * ```
   */
  children: x.oneOfType([x.func.isRequired, x.element.isRequired]).isRequired,
  /**
   * Show the component; triggers the enter or exit states
   */
  in: x.bool,
  /**
   * By default the child component is mounted immediately along with
   * the parent `Transition` component. If you want to "lazy mount" the component on the
   * first `in={true}` you can set `mountOnEnter`. After the first enter transition the component will stay
   * mounted, even on "exited", unless you also specify `unmountOnExit`.
   */
  mountOnEnter: x.bool,
  /**
   * By default the child component stays mounted after it reaches the `'exited'` state.
   * Set `unmountOnExit` if you'd prefer to unmount the component after it finishes exiting.
   */
  unmountOnExit: x.bool,
  /**
   * By default the child component does not perform the enter transition when
   * it first mounts, regardless of the value of `in`. If you want this
   * behavior, set both `appear` and `in` to `true`.
   *
   * > **Note**: there are no special appear states like `appearing`/`appeared`, this prop
   * > only adds an additional enter transition. However, in the
   * > `<CSSTransition>` component that first enter transition does result in
   * > additional `.appear-*` classes, that way you can choose to style it
   * > differently.
   */
  appear: x.bool,
  /**
   * Enable or disable enter transitions.
   */
  enter: x.bool,
  /**
   * Enable or disable exit transitions.
   */
  exit: x.bool,
  /**
   * The duration of the transition, in milliseconds.
   * Required unless `addEndListener` is provided.
   *
   * You may specify a single timeout for all transitions:
   *
   * ```jsx
   * timeout={500}
   * ```
   *
   * or individually:
   *
   * ```jsx
   * timeout={{
   *  appear: 500,
   *  enter: 300,
   *  exit: 500,
   * }}
   * ```
   *
   * - `appear` defaults to the value of `enter`
   * - `enter` defaults to `0`
   * - `exit` defaults to `0`
   *
   * @type {number | { enter?: number, exit?: number, appear?: number }}
   */
  timeout: function(s) {
    var d = iP;
    s.addEndListener || (d = d.isRequired);
    for (var v = arguments.length, g = new Array(v > 1 ? v - 1 : 0), S = 1; S < v; S++)
      g[S - 1] = arguments[S];
    return d.apply(void 0, [s].concat(g));
  },
  /**
   * Add a custom transition end trigger. Called with the transitioning
   * DOM node and a `done` callback. Allows for more fine grained transition end
   * logic. Timeouts are still used as a fallback if provided.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * ```jsx
   * addEndListener={(node, done) => {
   *   // use the css transitionend event to mark the finish of a transition
   *   node.addEventListener('transitionend', done, false);
   * }}
   * ```
   */
  addEndListener: x.func,
  /**
   * Callback fired before the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEnter: x.func,
  /**
   * Callback fired after the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntering: x.func,
  /**
   * Callback fired after the "entered" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEntered: x.func,
  /**
   * Callback fired before the "exiting" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExit: x.func,
  /**
   * Callback fired after the "exiting" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExiting: x.func,
  /**
   * Callback fired after the "exited" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExited: x.func
} : {};
function ud() {
}
Hl.defaultProps = {
  in: !1,
  mountOnEnter: !1,
  unmountOnExit: !1,
  appear: !1,
  enter: !0,
  exit: !0,
  onEnter: ud,
  onEntering: ud,
  onEntered: ud,
  onExit: ud,
  onExiting: ud,
  onExited: ud
};
Hl.UNMOUNTED = $v;
Hl.EXITED = rc;
Hl.ENTERING = ac;
Hl.ENTERED = sd;
Hl.EXITING = Ub;
const lP = Hl;
function uP(l) {
  if (l === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return l;
}
function a1(l, s) {
  var d = function(S) {
    return s && eg(S) ? s(S) : S;
  }, v = /* @__PURE__ */ Object.create(null);
  return l && WM.map(l, function(g) {
    return g;
  }).forEach(function(g) {
    v[g.key] = d(g);
  }), v;
}
function sP(l, s) {
  l = l || {}, s = s || {};
  function d(M) {
    return M in s ? s[M] : l[M];
  }
  var v = /* @__PURE__ */ Object.create(null), g = [];
  for (var S in l)
    S in s ? g.length && (v[S] = g, g = []) : g.push(S);
  var m, R = {};
  for (var w in s) {
    if (v[w])
      for (m = 0; m < v[w].length; m++) {
        var k = v[w][m];
        R[v[w][m]] = d(k);
      }
    R[w] = d(w);
  }
  for (m = 0; m < g.length; m++)
    R[g[m]] = d(g[m]);
  return R;
}
function ic(l, s, d) {
  return d[s] != null ? d[s] : l.props[s];
}
function cP(l, s) {
  return a1(l.children, function(d) {
    return tg(d, {
      onExited: s.bind(null, d),
      in: !0,
      appear: ic(d, "appear", l),
      enter: ic(d, "enter", l),
      exit: ic(d, "exit", l)
    });
  });
}
function fP(l, s, d) {
  var v = a1(l.children), g = sP(s, v);
  return Object.keys(g).forEach(function(S) {
    var m = g[S];
    if (eg(m)) {
      var R = S in s, w = S in v, k = s[S], M = eg(k) && !k.props.in;
      w && (!R || M) ? g[S] = tg(m, {
        onExited: d.bind(null, m),
        in: !0,
        exit: ic(m, "exit", l),
        enter: ic(m, "enter", l)
      }) : !w && R && !M ? g[S] = tg(m, {
        in: !1
      }) : w && R && eg(k) && (g[S] = tg(m, {
        onExited: d.bind(null, m),
        in: k.props.in,
        exit: ic(m, "exit", l),
        enter: ic(m, "enter", l)
      }));
    }
  }), g;
}
var dP = Object.values || function(l) {
  return Object.keys(l).map(function(s) {
    return l[s];
  });
}, pP = {
  component: "div",
  childFactory: function(s) {
    return s;
  }
}, i1 = /* @__PURE__ */ function(l) {
  Nw(s, l);
  function s(v, g) {
    var S;
    S = l.call(this, v, g) || this;
    var m = S.handleExited.bind(uP(S));
    return S.state = {
      contextValue: {
        isMounting: !0
      },
      handleExited: m,
      firstRender: !0
    }, S;
  }
  var d = s.prototype;
  return d.componentDidMount = function() {
    this.mounted = !0, this.setState({
      contextValue: {
        isMounting: !1
      }
    });
  }, d.componentWillUnmount = function() {
    this.mounted = !1;
  }, s.getDerivedStateFromProps = function(g, S) {
    var m = S.children, R = S.handleExited, w = S.firstRender;
    return {
      children: w ? cP(g, R) : fP(g, m, R),
      firstRender: !1
    };
  }, d.handleExited = function(g, S) {
    var m = a1(this.props.children);
    g.key in m || (g.props.onExited && g.props.onExited(S), this.mounted && this.setState(function(R) {
      var w = fe({}, R.children);
      return delete w[g.key], {
        children: w
      };
    }));
  }, d.render = function() {
    var g = this.props, S = g.component, m = g.childFactory, R = Tn(g, ["component", "childFactory"]), w = this.state.contextValue, k = dP(this.state.children).map(m);
    return delete R.appear, delete R.enter, delete R.exit, S === null ? /* @__PURE__ */ ui.createElement(cg.Provider, {
      value: w
    }, k) : /* @__PURE__ */ ui.createElement(cg.Provider, {
      value: w
    }, /* @__PURE__ */ ui.createElement(S, R, k));
  }, s;
}(ui.Component);
i1.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * `<TransitionGroup>` renders a `<div>` by default. You can change this
   * behavior by providing a `component` prop.
   * If you use React v16+ and would like to avoid a wrapping `<div>` element
   * you can pass in `component={null}`. This is useful if the wrapping div
   * borks your css styles.
   */
  component: x.any,
  /**
   * A set of `<Transition>` components, that are toggled `in` and out as they
   * leave. the `<TransitionGroup>` will inject specific transition props, so
   * remember to spread them through if you are wrapping the `<Transition>` as
   * with our `<Fade>` example.
   *
   * While this component is meant for multiple `Transition` or `CSSTransition`
   * children, sometimes you may want to have a single transition child with
   * content that you want to be transitioned out and in when you change it
   * (e.g. routes, images etc.) In that case you can change the `key` prop of
   * the transition child as you change its content, this will cause
   * `TransitionGroup` to transition the child out and back in.
   */
  children: x.node,
  /**
   * A convenience prop that enables or disables appear animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  appear: x.bool,
  /**
   * A convenience prop that enables or disables enter animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  enter: x.bool,
  /**
   * A convenience prop that enables or disables exit animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  exit: x.bool,
  /**
   * You may need to apply reactive updates to a child as it is exiting.
   * This is generally done by using `cloneElement` however in the case of an exiting
   * child the element has already been removed and not accessible to the consumer.
   *
   * If you do need to update a child as it leaves you can provide a `childFactory`
   * to wrap every child, even the ones that are leaving.
   *
   * @type Function(child: ReactElement) -> ReactElement
   */
  childFactory: x.func
} : {};
i1.defaultProps = pP;
const vP = i1;
function zw(l) {
  const {
    className: s,
    classes: d,
    pulsate: v = !1,
    rippleX: g,
    rippleY: S,
    rippleSize: m,
    in: R,
    onExited: w,
    timeout: k
  } = l, [M, N] = ae.useState(!1), A = xn(s, d.ripple, d.rippleVisible, v && d.ripplePulsate), V = {
    width: m,
    height: m,
    top: -(m / 2) + S,
    left: -(m / 2) + g
  }, F = xn(d.child, M && d.childLeaving, v && d.childPulsate);
  return !R && !M && N(!0), ae.useEffect(() => {
    if (!R && w != null) {
      const P = setTimeout(w, k);
      return () => {
        clearTimeout(P);
      };
    }
  }, [w, R, k]), /* @__PURE__ */ Ct.jsx("span", {
    className: A,
    style: V,
    children: /* @__PURE__ */ Ct.jsx("span", {
      className: F
    })
  });
}
process.env.NODE_ENV !== "production" && (zw.propTypes = {
  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: x.object.isRequired,
  className: x.string,
  /**
   * @ignore - injected from TransitionGroup
   */
  in: x.bool,
  /**
   * @ignore - injected from TransitionGroup
   */
  onExited: x.func,
  /**
   * If `true`, the ripple pulsates, typically indicating the keyboard focus state of an element.
   */
  pulsate: x.bool,
  /**
   * Diameter of the ripple.
   */
  rippleSize: x.number,
  /**
   * Horizontal position of the ripple center.
   */
  rippleX: x.number,
  /**
   * Vertical position of the ripple center.
   */
  rippleY: x.number,
  /**
   * exit delay
   */
  timeout: x.number.isRequired
});
const wi = io("MuiTouchRipple", ["root", "ripple", "rippleVisible", "ripplePulsate", "child", "childLeaving", "childPulsate"]), hP = ["center", "classes", "className"];
let Lg = (l) => l, IR, BR, YR, WR;
const jb = 550, mP = 80, yP = Xb(IR || (IR = Lg`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`)), gP = Xb(BR || (BR = Lg`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`)), SP = Xb(YR || (YR = Lg`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`)), EP = _r("span", {
  name: "MuiTouchRipple",
  slot: "Root"
})({
  overflow: "hidden",
  pointerEvents: "none",
  position: "absolute",
  zIndex: 0,
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  borderRadius: "inherit"
}), bP = _r(zw, {
  name: "MuiTouchRipple",
  slot: "Ripple"
})(WR || (WR = Lg`
  opacity: 0;
  position: absolute;

  &.${0} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  &.${0} {
    animation-duration: ${0}ms;
  }

  & .${0} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${0} {
    opacity: 0;
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  & .${0} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${0};
    animation-duration: 2500ms;
    animation-timing-function: ${0};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`), wi.rippleVisible, yP, jb, ({
  theme: l
}) => l.transitions.easing.easeInOut, wi.ripplePulsate, ({
  theme: l
}) => l.transitions.duration.shorter, wi.child, wi.childLeaving, gP, jb, ({
  theme: l
}) => l.transitions.easing.easeInOut, wi.childPulsate, SP, ({
  theme: l
}) => l.transitions.easing.easeInOut), Pw = /* @__PURE__ */ ae.forwardRef(function(s, d) {
  const v = oo({
    props: s,
    name: "MuiTouchRipple"
  }), {
    center: g = !1,
    classes: S = {},
    className: m
  } = v, R = Tn(v, hP), [w, k] = ae.useState([]), M = ae.useRef(0), N = ae.useRef(null);
  ae.useEffect(() => {
    N.current && (N.current(), N.current = null);
  }, [w]);
  const A = ae.useRef(!1), V = b2(), F = ae.useRef(null), P = ae.useRef(null), H = ae.useCallback((J) => {
    const {
      pulsate: D,
      rippleX: ve,
      rippleY: ie,
      rippleSize: Ke,
      cb: ot
    } = J;
    k((De) => [...De, /* @__PURE__ */ Ct.jsx(bP, {
      classes: {
        ripple: xn(S.ripple, wi.ripple),
        rippleVisible: xn(S.rippleVisible, wi.rippleVisible),
        ripplePulsate: xn(S.ripplePulsate, wi.ripplePulsate),
        child: xn(S.child, wi.child),
        childLeaving: xn(S.childLeaving, wi.childLeaving),
        childPulsate: xn(S.childPulsate, wi.childPulsate)
      },
      timeout: jb,
      pulsate: D,
      rippleX: ve,
      rippleY: ie,
      rippleSize: Ke
    }, M.current)]), M.current += 1, N.current = ot;
  }, [S]), le = ae.useCallback((J = {}, D = {}, ve = () => {
  }) => {
    const {
      pulsate: ie = !1,
      center: Ke = g || D.pulsate,
      fakeElement: ot = !1
      // For test purposes
    } = D;
    if ((J == null ? void 0 : J.type) === "mousedown" && A.current) {
      A.current = !1;
      return;
    }
    (J == null ? void 0 : J.type) === "touchstart" && (A.current = !0);
    const De = ot ? null : P.current, _e = De ? De.getBoundingClientRect() : {
      width: 0,
      height: 0,
      left: 0,
      top: 0
    };
    let Ye, Ee, ge;
    if (Ke || J === void 0 || J.clientX === 0 && J.clientY === 0 || !J.clientX && !J.touches)
      Ye = Math.round(_e.width / 2), Ee = Math.round(_e.height / 2);
    else {
      const {
        clientX: nt,
        clientY: be
      } = J.touches && J.touches.length > 0 ? J.touches[0] : J;
      Ye = Math.round(nt - _e.left), Ee = Math.round(be - _e.top);
    }
    if (Ke)
      ge = Math.sqrt((2 * _e.width ** 2 + _e.height ** 2) / 3), ge % 2 === 0 && (ge += 1);
    else {
      const nt = Math.max(Math.abs((De ? De.clientWidth : 0) - Ye), Ye) * 2 + 2, be = Math.max(Math.abs((De ? De.clientHeight : 0) - Ee), Ee) * 2 + 2;
      ge = Math.sqrt(nt ** 2 + be ** 2);
    }
    J != null && J.touches ? F.current === null && (F.current = () => {
      H({
        pulsate: ie,
        rippleX: Ye,
        rippleY: Ee,
        rippleSize: ge,
        cb: ve
      });
    }, V.start(mP, () => {
      F.current && (F.current(), F.current = null);
    })) : H({
      pulsate: ie,
      rippleX: Ye,
      rippleY: Ee,
      rippleSize: ge,
      cb: ve
    });
  }, [g, H, V]), de = ae.useCallback(() => {
    le({}, {
      pulsate: !0
    });
  }, [le]), K = ae.useCallback((J, D) => {
    if (V.clear(), (J == null ? void 0 : J.type) === "touchend" && F.current) {
      F.current(), F.current = null, V.start(0, () => {
        K(J, D);
      });
      return;
    }
    F.current = null, k((ve) => ve.length > 0 ? ve.slice(1) : ve), N.current = D;
  }, [V]);
  return ae.useImperativeHandle(d, () => ({
    pulsate: de,
    start: le,
    stop: K
  }), [de, le, K]), /* @__PURE__ */ Ct.jsx(EP, fe({
    className: xn(wi.root, S.root, m),
    ref: P
  }, R, {
    children: /* @__PURE__ */ Ct.jsx(vP, {
      component: null,
      exit: !0,
      children: w
    })
  }));
});
process.env.NODE_ENV !== "production" && (Pw.propTypes = {
  /**
   * If `true`, the ripple starts at the center of the component
   * rather than at the point of interaction.
   */
  center: x.bool,
  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: x.object,
  /**
   * @ignore
   */
  className: x.string
});
const CP = Pw;
function xP(l) {
  return ki("MuiButtonBase", l);
}
const TP = io("MuiButtonBase", ["root", "disabled", "focusVisible"]), RP = ["action", "centerRipple", "children", "className", "component", "disabled", "disableRipple", "disableTouchRipple", "focusRipple", "focusVisibleClassName", "LinkComponent", "onBlur", "onClick", "onContextMenu", "onDragLeave", "onFocus", "onFocusVisible", "onKeyDown", "onKeyUp", "onMouseDown", "onMouseLeave", "onMouseUp", "onTouchEnd", "onTouchMove", "onTouchStart", "tabIndex", "TouchRippleProps", "touchRippleRef", "type"], wP = (l) => {
  const {
    disabled: s,
    focusVisible: d,
    focusVisibleClassName: v,
    classes: g
  } = l, m = Go({
    root: ["root", s && "disabled", d && "focusVisible"]
  }, xP, g);
  return d && v && (m.root += ` ${v}`), m;
}, _P = _r("button", {
  name: "MuiButtonBase",
  slot: "Root",
  overridesResolver: (l, s) => s.root
})({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
  boxSizing: "border-box",
  WebkitTapHighlightColor: "transparent",
  backgroundColor: "transparent",
  // Reset default value
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0,
  border: 0,
  margin: 0,
  // Remove the margin in Safari
  borderRadius: 0,
  padding: 0,
  // Remove the padding in Firefox
  cursor: "pointer",
  userSelect: "none",
  verticalAlign: "middle",
  MozAppearance: "none",
  // Reset
  WebkitAppearance: "none",
  // Reset
  textDecoration: "none",
  // So we take precedent over the style of a native <a /> element.
  color: "inherit",
  "&::-moz-focus-inner": {
    borderStyle: "none"
    // Remove Firefox dotted outline.
  },
  [`&.${TP.disabled}`]: {
    pointerEvents: "none",
    // Disable link interactions
    cursor: "default"
  },
  "@media print": {
    colorAdjust: "exact"
  }
}), Uw = /* @__PURE__ */ ae.forwardRef(function(s, d) {
  const v = oo({
    props: s,
    name: "MuiButtonBase"
  }), {
    action: g,
    centerRipple: S = !1,
    children: m,
    className: R,
    component: w = "button",
    disabled: k = !1,
    disableRipple: M = !1,
    disableTouchRipple: N = !1,
    focusRipple: A = !1,
    LinkComponent: V = "a",
    onBlur: F,
    onClick: P,
    onContextMenu: H,
    onDragLeave: le,
    onFocus: de,
    onFocusVisible: K,
    onKeyDown: J,
    onKeyUp: D,
    onMouseDown: ve,
    onMouseLeave: ie,
    onMouseUp: Ke,
    onTouchEnd: ot,
    onTouchMove: De,
    onTouchStart: _e,
    tabIndex: Ye = 0,
    TouchRippleProps: Ee,
    touchRippleRef: ge,
    type: nt
  } = v, be = Tn(v, RP), Be = ae.useRef(null), oe = ae.useRef(null), Pe = oc(oe, ge), {
    isFocusVisibleRef: I,
    onFocus: ue,
    onBlur: we,
    ref: Ve
  } = O2(), [ke, qe] = ae.useState(!1);
  k && ke && qe(!1), ae.useImperativeHandle(g, () => ({
    focusVisible: () => {
      qe(!0), Be.current.focus();
    }
  }), []);
  const [Ne, Xe] = ae.useState(!1);
  ae.useEffect(() => {
    Xe(!0);
  }, []);
  const We = Ne && !M && !k;
  ae.useEffect(() => {
    ke && A && !M && Ne && oe.current.pulsate();
  }, [M, A, ke, Ne]);
  function He(ct, Yr, Ce = N) {
    return cd((Ze) => (Yr && Yr(Ze), !Ce && oe.current && oe.current[ct](Ze), !0));
  }
  const rt = He("start", ve), Rt = He("stop", H), Z = He("stop", le), mt = He("stop", Ke), Se = He("stop", (ct) => {
    ke && ct.preventDefault(), ie && ie(ct);
  }), Ft = He("start", _e), mn = He("stop", ot), On = He("stop", De), Ir = He("stop", (ct) => {
    we(ct), I.current === !1 && qe(!1), F && F(ct);
  }, !1), ua = cd((ct) => {
    Be.current || (Be.current = ct.currentTarget), ue(ct), I.current === !0 && (qe(!0), K && K(ct)), de && de(ct);
  }), sa = () => {
    const ct = Be.current;
    return w && w !== "button" && !(ct.tagName === "A" && ct.href);
  }, Br = ae.useRef(!1), ca = cd((ct) => {
    A && !Br.current && ke && oe.current && ct.key === " " && (Br.current = !0, oe.current.stop(ct, () => {
      oe.current.start(ct);
    })), ct.target === ct.currentTarget && sa() && ct.key === " " && ct.preventDefault(), J && J(ct), ct.target === ct.currentTarget && sa() && ct.key === "Enter" && !k && (ct.preventDefault(), P && P(ct));
  }), kr = cd((ct) => {
    A && ct.key === " " && oe.current && ke && !ct.defaultPrevented && (Br.current = !1, oe.current.stop(ct, () => {
      oe.current.pulsate(ct);
    })), D && D(ct), P && ct.target === ct.currentTarget && sa() && ct.key === " " && !ct.defaultPrevented && P(ct);
  });
  let Or = w;
  Or === "button" && (be.href || be.to) && (Or = V);
  const Vn = {};
  Or === "button" ? (Vn.type = nt === void 0 ? "button" : nt, Vn.disabled = k) : (!be.href && !be.to && (Vn.role = "button"), k && (Vn["aria-disabled"] = k));
  const fa = oc(d, Ve, Be);
  process.env.NODE_ENV !== "production" && ae.useEffect(() => {
    We && !oe.current && console.error(["MUI: The `component` prop provided to ButtonBase is invalid.", "Please make sure the children prop is rendered in this custom component."].join(`
`));
  }, [We]);
  const yn = fe({}, v, {
    centerRipple: S,
    component: w,
    disabled: k,
    disableRipple: M,
    disableTouchRipple: N,
    focusRipple: A,
    tabIndex: Ye,
    focusVisible: ke
  }), Dr = wP(yn);
  return /* @__PURE__ */ Ct.jsxs(_P, fe({
    as: Or,
    className: xn(Dr.root, R),
    ownerState: yn,
    onBlur: Ir,
    onClick: P,
    onContextMenu: Rt,
    onFocus: ua,
    onKeyDown: ca,
    onKeyUp: kr,
    onMouseDown: rt,
    onMouseLeave: Se,
    onMouseUp: mt,
    onDragLeave: Z,
    onTouchEnd: mn,
    onTouchMove: On,
    onTouchStart: Ft,
    ref: fa,
    tabIndex: k ? -1 : Ye,
    type: nt
  }, Vn, be, {
    children: [m, We ? (
      /* TouchRipple is only needed client-side, x2 boost on the server. */
      /* @__PURE__ */ Ct.jsx(CP, fe({
        ref: Pe,
        center: S
      }, Ee))
    ) : null]
  }));
});
process.env.NODE_ENV !== "production" && (Uw.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * A ref for imperative actions.
   * It currently only supports `focusVisible()` action.
   */
  action: h2,
  /**
   * If `true`, the ripples are centered.
   * They won't start at the cursor interaction position.
   * @default false
   */
  centerRipple: x.bool,
  /**
   * The content of the component.
   */
  children: x.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: x.object,
  /**
   * @ignore
   */
  className: x.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: l2,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: x.bool,
  /**
   * If `true`, the ripple effect is disabled.
   *
   * ⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure
   * to highlight the element by applying separate styles with the `.Mui-focusVisible` class.
   * @default false
   */
  disableRipple: x.bool,
  /**
   * If `true`, the touch ripple effect is disabled.
   * @default false
   */
  disableTouchRipple: x.bool,
  /**
   * If `true`, the base button will have a keyboard focus ripple.
   * @default false
   */
  focusRipple: x.bool,
  /**
   * This prop can help identify which element has keyboard focus.
   * The class name will be applied when the element gains the focus through keyboard interaction.
   * It's a polyfill for the [CSS :focus-visible selector](https://drafts.csswg.org/selectors-4/#the-focus-visible-pseudo).
   * The rationale for using this feature [is explained here](https://github.com/WICG/focus-visible/blob/HEAD/explainer.md).
   * A [polyfill can be used](https://github.com/WICG/focus-visible) to apply a `focus-visible` class to other components
   * if needed.
   */
  focusVisibleClassName: x.string,
  /**
   * @ignore
   */
  href: x.any,
  /**
   * The component used to render a link when the `href` prop is provided.
   * @default 'a'
   */
  LinkComponent: x.elementType,
  /**
   * @ignore
   */
  onBlur: x.func,
  /**
   * @ignore
   */
  onClick: x.func,
  /**
   * @ignore
   */
  onContextMenu: x.func,
  /**
   * @ignore
   */
  onDragLeave: x.func,
  /**
   * @ignore
   */
  onFocus: x.func,
  /**
   * Callback fired when the component is focused with a keyboard.
   * We trigger a `onFocus` callback too.
   */
  onFocusVisible: x.func,
  /**
   * @ignore
   */
  onKeyDown: x.func,
  /**
   * @ignore
   */
  onKeyUp: x.func,
  /**
   * @ignore
   */
  onMouseDown: x.func,
  /**
   * @ignore
   */
  onMouseLeave: x.func,
  /**
   * @ignore
   */
  onMouseUp: x.func,
  /**
   * @ignore
   */
  onTouchEnd: x.func,
  /**
   * @ignore
   */
  onTouchMove: x.func,
  /**
   * @ignore
   */
  onTouchStart: x.func,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: x.oneOfType([x.arrayOf(x.oneOfType([x.func, x.object, x.bool])), x.func, x.object]),
  /**
   * @default 0
   */
  tabIndex: x.number,
  /**
   * Props applied to the `TouchRipple` element.
   */
  TouchRippleProps: x.object,
  /**
   * A ref that points to the `TouchRipple` element.
   */
  touchRippleRef: x.oneOfType([x.func, x.shape({
    current: x.shape({
      pulsate: x.func.isRequired,
      start: x.func.isRequired,
      stop: x.func.isRequired
    })
  })]),
  /**
   * @ignore
   */
  type: x.oneOfType([x.oneOf(["button", "reset", "submit"]), x.string])
});
const kP = Uw;
function OP(l) {
  return ki("MuiButton", l);
}
const DP = io("MuiButton", ["root", "text", "textInherit", "textPrimary", "textSecondary", "textSuccess", "textError", "textInfo", "textWarning", "outlined", "outlinedInherit", "outlinedPrimary", "outlinedSecondary", "outlinedSuccess", "outlinedError", "outlinedInfo", "outlinedWarning", "contained", "containedInherit", "containedPrimary", "containedSecondary", "containedSuccess", "containedError", "containedInfo", "containedWarning", "disableElevation", "focusVisible", "disabled", "colorInherit", "textSizeSmall", "textSizeMedium", "textSizeLarge", "outlinedSizeSmall", "outlinedSizeMedium", "outlinedSizeLarge", "containedSizeSmall", "containedSizeMedium", "containedSizeLarge", "sizeMedium", "sizeSmall", "sizeLarge", "fullWidth", "startIcon", "endIcon", "iconSizeSmall", "iconSizeMedium", "iconSizeLarge"]), Jy = DP, jw = /* @__PURE__ */ ae.createContext({});
process.env.NODE_ENV !== "production" && (jw.displayName = "ButtonGroupContext");
const NP = jw, $w = /* @__PURE__ */ ae.createContext(void 0);
process.env.NODE_ENV !== "production" && ($w.displayName = "ButtonGroupButtonContext");
const MP = $w, LP = ["children", "color", "component", "className", "disabled", "disableElevation", "disableFocusRipple", "endIcon", "focusVisibleClassName", "fullWidth", "size", "startIcon", "type", "variant"], AP = (l) => {
  const {
    color: s,
    disableElevation: d,
    fullWidth: v,
    size: g,
    variant: S,
    classes: m
  } = l, R = {
    root: ["root", S, `${S}${Qn(s)}`, `size${Qn(g)}`, `${S}Size${Qn(g)}`, s === "inherit" && "colorInherit", d && "disableElevation", v && "fullWidth"],
    label: ["label"],
    startIcon: ["startIcon", `iconSize${Qn(g)}`],
    endIcon: ["endIcon", `iconSize${Qn(g)}`]
  }, w = Go(R, OP, m);
  return fe({}, m, w);
}, Fw = (l) => fe({}, l.size === "small" && {
  "& > *:nth-of-type(1)": {
    fontSize: 18
  }
}, l.size === "medium" && {
  "& > *:nth-of-type(1)": {
    fontSize: 20
  }
}, l.size === "large" && {
  "& > *:nth-of-type(1)": {
    fontSize: 22
  }
}), zP = _r(kP, {
  shouldForwardProp: (l) => Dw(l) || l === "classes",
  name: "MuiButton",
  slot: "Root",
  overridesResolver: (l, s) => {
    const {
      ownerState: d
    } = l;
    return [s.root, s[d.variant], s[`${d.variant}${Qn(d.color)}`], s[`size${Qn(d.size)}`], s[`${d.variant}Size${Qn(d.size)}`], d.color === "inherit" && s.colorInherit, d.disableElevation && s.disableElevation, d.fullWidth && s.fullWidth];
  }
})(({
  theme: l,
  ownerState: s
}) => {
  var d, v;
  const g = l.palette.mode === "light" ? l.palette.grey[300] : l.palette.grey[800], S = l.palette.mode === "light" ? l.palette.grey.A100 : l.palette.grey[700];
  return fe({}, l.typography.button, {
    minWidth: 64,
    padding: "6px 16px",
    borderRadius: (l.vars || l).shape.borderRadius,
    transition: l.transitions.create(["background-color", "box-shadow", "border-color", "color"], {
      duration: l.transitions.duration.short
    }),
    "&:hover": fe({
      textDecoration: "none",
      backgroundColor: l.vars ? `rgba(${l.vars.palette.text.primaryChannel} / ${l.vars.palette.action.hoverOpacity})` : fd(l.palette.text.primary, l.palette.action.hoverOpacity),
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: "transparent"
      }
    }, s.variant === "text" && s.color !== "inherit" && {
      backgroundColor: l.vars ? `rgba(${l.vars.palette[s.color].mainChannel} / ${l.vars.palette.action.hoverOpacity})` : fd(l.palette[s.color].main, l.palette.action.hoverOpacity),
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: "transparent"
      }
    }, s.variant === "outlined" && s.color !== "inherit" && {
      border: `1px solid ${(l.vars || l).palette[s.color].main}`,
      backgroundColor: l.vars ? `rgba(${l.vars.palette[s.color].mainChannel} / ${l.vars.palette.action.hoverOpacity})` : fd(l.palette[s.color].main, l.palette.action.hoverOpacity),
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: "transparent"
      }
    }, s.variant === "contained" && {
      backgroundColor: l.vars ? l.vars.palette.Button.inheritContainedHoverBg : S,
      boxShadow: (l.vars || l).shadows[4],
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        boxShadow: (l.vars || l).shadows[2],
        backgroundColor: (l.vars || l).palette.grey[300]
      }
    }, s.variant === "contained" && s.color !== "inherit" && {
      backgroundColor: (l.vars || l).palette[s.color].dark,
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: (l.vars || l).palette[s.color].main
      }
    }),
    "&:active": fe({}, s.variant === "contained" && {
      boxShadow: (l.vars || l).shadows[8]
    }),
    [`&.${Jy.focusVisible}`]: fe({}, s.variant === "contained" && {
      boxShadow: (l.vars || l).shadows[6]
    }),
    [`&.${Jy.disabled}`]: fe({
      color: (l.vars || l).palette.action.disabled
    }, s.variant === "outlined" && {
      border: `1px solid ${(l.vars || l).palette.action.disabledBackground}`
    }, s.variant === "contained" && {
      color: (l.vars || l).palette.action.disabled,
      boxShadow: (l.vars || l).shadows[0],
      backgroundColor: (l.vars || l).palette.action.disabledBackground
    })
  }, s.variant === "text" && {
    padding: "6px 8px"
  }, s.variant === "text" && s.color !== "inherit" && {
    color: (l.vars || l).palette[s.color].main
  }, s.variant === "outlined" && {
    padding: "5px 15px",
    border: "1px solid currentColor"
  }, s.variant === "outlined" && s.color !== "inherit" && {
    color: (l.vars || l).palette[s.color].main,
    border: l.vars ? `1px solid rgba(${l.vars.palette[s.color].mainChannel} / 0.5)` : `1px solid ${fd(l.palette[s.color].main, 0.5)}`
  }, s.variant === "contained" && {
    color: l.vars ? (
      // this is safe because grey does not change between default light/dark mode
      l.vars.palette.text.primary
    ) : (d = (v = l.palette).getContrastText) == null ? void 0 : d.call(v, l.palette.grey[300]),
    backgroundColor: l.vars ? l.vars.palette.Button.inheritContainedBg : g,
    boxShadow: (l.vars || l).shadows[2]
  }, s.variant === "contained" && s.color !== "inherit" && {
    color: (l.vars || l).palette[s.color].contrastText,
    backgroundColor: (l.vars || l).palette[s.color].main
  }, s.color === "inherit" && {
    color: "inherit",
    borderColor: "currentColor"
  }, s.size === "small" && s.variant === "text" && {
    padding: "4px 5px",
    fontSize: l.typography.pxToRem(13)
  }, s.size === "large" && s.variant === "text" && {
    padding: "8px 11px",
    fontSize: l.typography.pxToRem(15)
  }, s.size === "small" && s.variant === "outlined" && {
    padding: "3px 9px",
    fontSize: l.typography.pxToRem(13)
  }, s.size === "large" && s.variant === "outlined" && {
    padding: "7px 21px",
    fontSize: l.typography.pxToRem(15)
  }, s.size === "small" && s.variant === "contained" && {
    padding: "4px 10px",
    fontSize: l.typography.pxToRem(13)
  }, s.size === "large" && s.variant === "contained" && {
    padding: "8px 22px",
    fontSize: l.typography.pxToRem(15)
  }, s.fullWidth && {
    width: "100%"
  });
}, ({
  ownerState: l
}) => l.disableElevation && {
  boxShadow: "none",
  "&:hover": {
    boxShadow: "none"
  },
  [`&.${Jy.focusVisible}`]: {
    boxShadow: "none"
  },
  "&:active": {
    boxShadow: "none"
  },
  [`&.${Jy.disabled}`]: {
    boxShadow: "none"
  }
}), PP = _r("span", {
  name: "MuiButton",
  slot: "StartIcon",
  overridesResolver: (l, s) => {
    const {
      ownerState: d
    } = l;
    return [s.startIcon, s[`iconSize${Qn(d.size)}`]];
  }
})(({
  ownerState: l
}) => fe({
  display: "inherit",
  marginRight: 8,
  marginLeft: -4
}, l.size === "small" && {
  marginLeft: -2
}, Fw(l))), UP = _r("span", {
  name: "MuiButton",
  slot: "EndIcon",
  overridesResolver: (l, s) => {
    const {
      ownerState: d
    } = l;
    return [s.endIcon, s[`iconSize${Qn(d.size)}`]];
  }
})(({
  ownerState: l
}) => fe({
  display: "inherit",
  marginRight: -4,
  marginLeft: 8
}, l.size === "small" && {
  marginRight: -2
}, Fw(l))), Vw = /* @__PURE__ */ ae.forwardRef(function(s, d) {
  const v = ae.useContext(NP), g = ae.useContext(MP), S = Hb(v, s), m = oo({
    props: S,
    name: "MuiButton"
  }), {
    children: R,
    color: w = "primary",
    component: k = "button",
    className: M,
    disabled: N = !1,
    disableElevation: A = !1,
    disableFocusRipple: V = !1,
    endIcon: F,
    focusVisibleClassName: P,
    fullWidth: H = !1,
    size: le = "medium",
    startIcon: de,
    type: K,
    variant: J = "text"
  } = m, D = Tn(m, LP), ve = fe({}, m, {
    color: w,
    component: k,
    disabled: N,
    disableElevation: A,
    disableFocusRipple: V,
    fullWidth: H,
    size: le,
    type: K,
    variant: J
  }), ie = AP(ve), Ke = de && /* @__PURE__ */ Ct.jsx(PP, {
    className: ie.startIcon,
    ownerState: ve,
    children: de
  }), ot = F && /* @__PURE__ */ Ct.jsx(UP, {
    className: ie.endIcon,
    ownerState: ve,
    children: F
  }), De = g || "";
  return /* @__PURE__ */ Ct.jsxs(zP, fe({
    ownerState: ve,
    className: xn(v.className, ie.root, M, De),
    component: k,
    disabled: N,
    focusRipple: !V,
    focusVisibleClassName: xn(ie.focusVisible, P),
    ref: d,
    type: K
  }, D, {
    classes: ie,
    children: [Ke, R, ot]
  }));
});
process.env.NODE_ENV !== "production" && (Vw.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: x.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: x.object,
  /**
   * @ignore
   */
  className: x.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'primary'
   */
  color: x.oneOfType([x.oneOf(["inherit", "primary", "secondary", "success", "error", "info", "warning"]), x.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: x.elementType,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: x.bool,
  /**
   * If `true`, no elevation is used.
   * @default false
   */
  disableElevation: x.bool,
  /**
   * If `true`, the  keyboard focus ripple is disabled.
   * @default false
   */
  disableFocusRipple: x.bool,
  /**
   * If `true`, the ripple effect is disabled.
   *
   * ⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure
   * to highlight the element by applying separate styles with the `.Mui-focusVisible` class.
   * @default false
   */
  disableRipple: x.bool,
  /**
   * Element placed after the children.
   */
  endIcon: x.node,
  /**
   * @ignore
   */
  focusVisibleClassName: x.string,
  /**
   * If `true`, the button will take up the full width of its container.
   * @default false
   */
  fullWidth: x.bool,
  /**
   * The URL to link to when the button is clicked.
   * If defined, an `a` element will be used as the root node.
   */
  href: x.string,
  /**
   * The size of the component.
   * `small` is equivalent to the dense button styling.
   * @default 'medium'
   */
  size: x.oneOfType([x.oneOf(["small", "medium", "large"]), x.string]),
  /**
   * Element placed before the children.
   */
  startIcon: x.node,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: x.oneOfType([x.arrayOf(x.oneOfType([x.func, x.object, x.bool])), x.func, x.object]),
  /**
   * @ignore
   */
  type: x.oneOfType([x.oneOf(["button", "reset", "submit"]), x.string]),
  /**
   * The variant to use.
   * @default 'text'
   */
  variant: x.oneOfType([x.oneOf(["contained", "outlined", "text"]), x.string])
});
const GR = Vw;
function jP(l) {
  return typeof l == "string";
}
function $P(l, s, d) {
  return l === void 0 || jP(l) ? s : fe({}, s, {
    ownerState: fe({}, s.ownerState, d)
  });
}
function Hw(l, s = []) {
  if (l === void 0)
    return {};
  const d = {};
  return Object.keys(l).filter((v) => v.match(/^on[A-Z]/) && typeof l[v] == "function" && !s.includes(v)).forEach((v) => {
    d[v] = l[v];
  }), d;
}
function FP(l, s, d) {
  return typeof l == "function" ? l(s, d) : l;
}
function qR(l) {
  if (l === void 0)
    return {};
  const s = {};
  return Object.keys(l).filter((d) => !(d.match(/^on[A-Z]/) && typeof l[d] == "function")).forEach((d) => {
    s[d] = l[d];
  }), s;
}
function VP(l) {
  const {
    getSlotProps: s,
    additionalProps: d,
    externalSlotProps: v,
    externalForwardedProps: g,
    className: S
  } = l;
  if (!s) {
    const V = xn(d == null ? void 0 : d.className, S, g == null ? void 0 : g.className, v == null ? void 0 : v.className), F = fe({}, d == null ? void 0 : d.style, g == null ? void 0 : g.style, v == null ? void 0 : v.style), P = fe({}, d, g, v);
    return V.length > 0 && (P.className = V), Object.keys(F).length > 0 && (P.style = F), {
      props: P,
      internalRef: void 0
    };
  }
  const m = Hw(fe({}, g, v)), R = qR(v), w = qR(g), k = s(m), M = xn(k == null ? void 0 : k.className, d == null ? void 0 : d.className, S, g == null ? void 0 : g.className, v == null ? void 0 : v.className), N = fe({}, k == null ? void 0 : k.style, d == null ? void 0 : d.style, g == null ? void 0 : g.style, v == null ? void 0 : v.style), A = fe({}, k, d, w, R);
  return M.length > 0 && (A.className = M), Object.keys(N).length > 0 && (A.style = N), {
    props: A,
    internalRef: k.ref
  };
}
const HP = ["elementType", "externalSlotProps", "ownerState", "skipResolvingSlotProps"];
function QR(l) {
  var s;
  const {
    elementType: d,
    externalSlotProps: v,
    ownerState: g,
    skipResolvingSlotProps: S = !1
  } = l, m = Tn(l, HP), R = S ? {} : FP(v, g), {
    props: w,
    internalRef: k
  } = VP(fe({}, m, {
    externalSlotProps: R
  })), M = oc(k, R == null ? void 0 : R.ref, (s = l.additionalProps) == null ? void 0 : s.ref);
  return $P(d, fe({}, w, {
    ref: M
  }), g);
}
function IP(l) {
  const s = Wu(l);
  return s.body === l ? Vb(l).innerWidth > s.documentElement.clientWidth : l.scrollHeight > l.clientHeight;
}
function Vv(l, s) {
  s ? l.setAttribute("aria-hidden", "true") : l.removeAttribute("aria-hidden");
}
function KR(l) {
  return parseInt(Vb(l).getComputedStyle(l).paddingRight, 10) || 0;
}
function BP(l) {
  const d = ["TEMPLATE", "SCRIPT", "STYLE", "LINK", "MAP", "META", "NOSCRIPT", "PICTURE", "COL", "COLGROUP", "PARAM", "SLOT", "SOURCE", "TRACK"].indexOf(l.tagName) !== -1, v = l.tagName === "INPUT" && l.getAttribute("type") === "hidden";
  return d || v;
}
function XR(l, s, d, v, g) {
  const S = [s, d, ...v];
  [].forEach.call(l.children, (m) => {
    const R = S.indexOf(m) === -1, w = !BP(m);
    R && w && Vv(m, g);
  });
}
function Cb(l, s) {
  let d = -1;
  return l.some((v, g) => s(v) ? (d = g, !0) : !1), d;
}
function YP(l, s) {
  const d = [], v = l.container;
  if (!s.disableScrollLock) {
    if (IP(v)) {
      const m = D2(Wu(v));
      d.push({
        value: v.style.paddingRight,
        property: "padding-right",
        el: v
      }), v.style.paddingRight = `${KR(v) + m}px`;
      const R = Wu(v).querySelectorAll(".mui-fixed");
      [].forEach.call(R, (w) => {
        d.push({
          value: w.style.paddingRight,
          property: "padding-right",
          el: w
        }), w.style.paddingRight = `${KR(w) + m}px`;
      });
    }
    let S;
    if (v.parentNode instanceof DocumentFragment)
      S = Wu(v).body;
    else {
      const m = v.parentElement, R = Vb(v);
      S = (m == null ? void 0 : m.nodeName) === "HTML" && R.getComputedStyle(m).overflowY === "scroll" ? m : v;
    }
    d.push({
      value: S.style.overflow,
      property: "overflow",
      el: S
    }, {
      value: S.style.overflowX,
      property: "overflow-x",
      el: S
    }, {
      value: S.style.overflowY,
      property: "overflow-y",
      el: S
    }), S.style.overflow = "hidden";
  }
  return () => {
    d.forEach(({
      value: S,
      el: m,
      property: R
    }) => {
      S ? m.style.setProperty(R, S) : m.style.removeProperty(R);
    });
  };
}
function WP(l) {
  const s = [];
  return [].forEach.call(l.children, (d) => {
    d.getAttribute("aria-hidden") === "true" && s.push(d);
  }), s;
}
class GP {
  constructor() {
    this.containers = void 0, this.modals = void 0, this.modals = [], this.containers = [];
  }
  add(s, d) {
    let v = this.modals.indexOf(s);
    if (v !== -1)
      return v;
    v = this.modals.length, this.modals.push(s), s.modalRef && Vv(s.modalRef, !1);
    const g = WP(d);
    XR(d, s.mount, s.modalRef, g, !0);
    const S = Cb(this.containers, (m) => m.container === d);
    return S !== -1 ? (this.containers[S].modals.push(s), v) : (this.containers.push({
      modals: [s],
      container: d,
      restore: null,
      hiddenSiblings: g
    }), v);
  }
  mount(s, d) {
    const v = Cb(this.containers, (S) => S.modals.indexOf(s) !== -1), g = this.containers[v];
    g.restore || (g.restore = YP(g, d));
  }
  remove(s, d = !0) {
    const v = this.modals.indexOf(s);
    if (v === -1)
      return v;
    const g = Cb(this.containers, (m) => m.modals.indexOf(s) !== -1), S = this.containers[g];
    if (S.modals.splice(S.modals.indexOf(s), 1), this.modals.splice(v, 1), S.modals.length === 0)
      S.restore && S.restore(), s.modalRef && Vv(s.modalRef, d), XR(S.container, s.mount, s.modalRef, S.hiddenSiblings, !1), this.containers.splice(g, 1);
    else {
      const m = S.modals[S.modals.length - 1];
      m.modalRef && Vv(m.modalRef, !1);
    }
    return v;
  }
  isTopModal(s) {
    return this.modals.length > 0 && this.modals[this.modals.length - 1] === s;
  }
}
function qP(l) {
  return typeof l == "function" ? l() : l;
}
function QP(l) {
  return l ? l.props.hasOwnProperty("in") : !1;
}
const KP = new GP();
function XP(l) {
  const {
    container: s,
    disableEscapeKeyDown: d = !1,
    disableScrollLock: v = !1,
    // @ts-ignore internal logic - Base UI supports the manager as a prop too
    manager: g = KP,
    closeAfterTransition: S = !1,
    onTransitionEnter: m,
    onTransitionExited: R,
    children: w,
    onClose: k,
    open: M,
    rootRef: N
  } = l, A = ae.useRef({}), V = ae.useRef(null), F = ae.useRef(null), P = oc(F, N), [H, le] = ae.useState(!M), de = QP(w);
  let K = !0;
  (l["aria-hidden"] === "false" || l["aria-hidden"] === !1) && (K = !1);
  const J = () => Wu(V.current), D = () => (A.current.modalRef = F.current, A.current.mount = V.current, A.current), ve = () => {
    g.mount(D(), {
      disableScrollLock: v
    }), F.current && (F.current.scrollTop = 0);
  }, ie = cd(() => {
    const be = qP(s) || J().body;
    g.add(D(), be), F.current && ve();
  }), Ke = ae.useCallback(() => g.isTopModal(D()), [g]), ot = cd((be) => {
    V.current = be, be && (M && Ke() ? ve() : F.current && Vv(F.current, K));
  }), De = ae.useCallback(() => {
    g.remove(D(), K);
  }, [K, g]);
  ae.useEffect(() => () => {
    De();
  }, [De]), ae.useEffect(() => {
    M ? ie() : (!de || !S) && De();
  }, [M, De, de, S, ie]);
  const _e = (be) => (Be) => {
    var oe;
    (oe = be.onKeyDown) == null || oe.call(be, Be), !(Be.key !== "Escape" || Be.which === 229 || // Wait until IME is settled.
    !Ke()) && (d || (Be.stopPropagation(), k && k(Be, "escapeKeyDown")));
  }, Ye = (be) => (Be) => {
    var oe;
    (oe = be.onClick) == null || oe.call(be, Be), Be.target === Be.currentTarget && k && k(Be, "backdropClick");
  };
  return {
    getRootProps: (be = {}) => {
      const Be = Hw(l);
      delete Be.onTransitionEnter, delete Be.onTransitionExited;
      const oe = fe({}, Be, be);
      return fe({
        role: "presentation"
      }, oe, {
        onKeyDown: _e(oe),
        ref: P
      });
    },
    getBackdropProps: (be = {}) => {
      const Be = be;
      return fe({
        "aria-hidden": !0
      }, Be, {
        onClick: Ye(Be),
        open: M
      });
    },
    getTransitionProps: () => {
      const be = () => {
        le(!1), m && m();
      }, Be = () => {
        le(!0), R && R(), S && De();
      };
      return {
        onEnter: nR(be, w == null ? void 0 : w.props.onEnter),
        onExited: nR(Be, w == null ? void 0 : w.props.onExited)
      };
    },
    rootRef: P,
    portalRef: ot,
    isTopModal: Ke,
    exited: H,
    hasTransition: de
  };
}
const ZP = ["input", "select", "textarea", "a[href]", "button", "[tabindex]", "audio[controls]", "video[controls]", '[contenteditable]:not([contenteditable="false"])'].join(",");
function JP(l) {
  const s = parseInt(l.getAttribute("tabindex") || "", 10);
  return Number.isNaN(s) ? l.contentEditable === "true" || (l.nodeName === "AUDIO" || l.nodeName === "VIDEO" || l.nodeName === "DETAILS") && l.getAttribute("tabindex") === null ? 0 : l.tabIndex : s;
}
function eU(l) {
  if (l.tagName !== "INPUT" || l.type !== "radio" || !l.name)
    return !1;
  const s = (v) => l.ownerDocument.querySelector(`input[type="radio"]${v}`);
  let d = s(`[name="${l.name}"]:checked`);
  return d || (d = s(`[name="${l.name}"]`)), d !== l;
}
function tU(l) {
  return !(l.disabled || l.tagName === "INPUT" && l.type === "hidden" || eU(l));
}
function nU(l) {
  const s = [], d = [];
  return Array.from(l.querySelectorAll(ZP)).forEach((v, g) => {
    const S = JP(v);
    S === -1 || !tU(v) || (S === 0 ? s.push(v) : d.push({
      documentOrder: g,
      tabIndex: S,
      node: v
    }));
  }), d.sort((v, g) => v.tabIndex === g.tabIndex ? v.documentOrder - g.documentOrder : v.tabIndex - g.tabIndex).map((v) => v.node).concat(s);
}
function rU() {
  return !0;
}
function fg(l) {
  const {
    children: s,
    disableAutoFocus: d = !1,
    disableEnforceFocus: v = !1,
    disableRestoreFocus: g = !1,
    getTabbable: S = nU,
    isEnabled: m = rU,
    open: R
  } = l, w = ae.useRef(!1), k = ae.useRef(null), M = ae.useRef(null), N = ae.useRef(null), A = ae.useRef(null), V = ae.useRef(!1), F = ae.useRef(null), P = oc(s.ref, F), H = ae.useRef(null);
  ae.useEffect(() => {
    !R || !F.current || (V.current = !d);
  }, [d, R]), ae.useEffect(() => {
    if (!R || !F.current)
      return;
    const K = Wu(F.current);
    return F.current.contains(K.activeElement) || (F.current.hasAttribute("tabIndex") || (process.env.NODE_ENV !== "production" && console.error(["MUI: The modal content node does not accept focus.", 'For the benefit of assistive technologies, the tabIndex of the node is being set to "-1".'].join(`
`)), F.current.setAttribute("tabIndex", "-1")), V.current && F.current.focus()), () => {
      g || (N.current && N.current.focus && (w.current = !0, N.current.focus()), N.current = null);
    };
  }, [R]), ae.useEffect(() => {
    if (!R || !F.current)
      return;
    const K = Wu(F.current), J = (ie) => {
      H.current = ie, !(v || !m() || ie.key !== "Tab") && K.activeElement === F.current && ie.shiftKey && (w.current = !0, M.current && M.current.focus());
    }, D = () => {
      const ie = F.current;
      if (ie === null)
        return;
      if (!K.hasFocus() || !m() || w.current) {
        w.current = !1;
        return;
      }
      if (ie.contains(K.activeElement) || v && K.activeElement !== k.current && K.activeElement !== M.current)
        return;
      if (K.activeElement !== A.current)
        A.current = null;
      else if (A.current !== null)
        return;
      if (!V.current)
        return;
      let Ke = [];
      if ((K.activeElement === k.current || K.activeElement === M.current) && (Ke = S(F.current)), Ke.length > 0) {
        var ot, De;
        const _e = !!((ot = H.current) != null && ot.shiftKey && ((De = H.current) == null ? void 0 : De.key) === "Tab"), Ye = Ke[0], Ee = Ke[Ke.length - 1];
        typeof Ye != "string" && typeof Ee != "string" && (_e ? Ee.focus() : Ye.focus());
      } else
        ie.focus();
    };
    K.addEventListener("focusin", D), K.addEventListener("keydown", J, !0);
    const ve = setInterval(() => {
      K.activeElement && K.activeElement.tagName === "BODY" && D();
    }, 50);
    return () => {
      clearInterval(ve), K.removeEventListener("focusin", D), K.removeEventListener("keydown", J, !0);
    };
  }, [d, v, g, m, R, S]);
  const le = (K) => {
    N.current === null && (N.current = K.relatedTarget), V.current = !0, A.current = K.target;
    const J = s.props.onFocus;
    J && J(K);
  }, de = (K) => {
    N.current === null && (N.current = K.relatedTarget), V.current = !0;
  };
  return /* @__PURE__ */ Ct.jsxs(ae.Fragment, {
    children: [/* @__PURE__ */ Ct.jsx("div", {
      tabIndex: R ? 0 : -1,
      onFocus: de,
      ref: k,
      "data-testid": "sentinelStart"
    }), /* @__PURE__ */ ae.cloneElement(s, {
      ref: P,
      onFocus: le
    }), /* @__PURE__ */ Ct.jsx("div", {
      tabIndex: R ? 0 : -1,
      onFocus: de,
      ref: M,
      "data-testid": "sentinelEnd"
    })]
  });
}
process.env.NODE_ENV !== "production" && (fg.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * A single child content element.
   */
  children: Fb,
  /**
   * If `true`, the focus trap will not automatically shift focus to itself when it opens, and
   * replace it to the last focused element when it closes.
   * This also works correctly with any focus trap children that have the `disableAutoFocus` prop.
   *
   * Generally this should never be set to `true` as it makes the focus trap less
   * accessible to assistive technologies, like screen readers.
   * @default false
   */
  disableAutoFocus: x.bool,
  /**
   * If `true`, the focus trap will not prevent focus from leaving the focus trap while open.
   *
   * Generally this should never be set to `true` as it makes the focus trap less
   * accessible to assistive technologies, like screen readers.
   * @default false
   */
  disableEnforceFocus: x.bool,
  /**
   * If `true`, the focus trap will not restore focus to previously focused element once
   * focus trap is hidden or unmounted.
   * @default false
   */
  disableRestoreFocus: x.bool,
  /**
   * Returns an array of ordered tabbable nodes (i.e. in tab order) within the root.
   * For instance, you can provide the "tabbable" npm dependency.
   * @param {HTMLElement} root
   */
  getTabbable: x.func,
  /**
   * This prop extends the `open` prop.
   * It allows to toggle the open state without having to wait for a rerender when changing the `open` prop.
   * This prop should be memoized.
   * It can be used to support multiple focus trap mounted at the same time.
   * @default function defaultIsEnabled(): boolean {
   *   return true;
   * }
   */
  isEnabled: x.func,
  /**
   * If `true`, focus is locked.
   */
  open: x.bool.isRequired
});
process.env.NODE_ENV !== "production" && (fg.propTypes = uw(fg.propTypes));
function aU(l) {
  return typeof l == "function" ? l() : l;
}
const dg = /* @__PURE__ */ ae.forwardRef(function(s, d) {
  const {
    children: v,
    container: g,
    disablePortal: S = !1
  } = s, [m, R] = ae.useState(null), w = oc(/* @__PURE__ */ ae.isValidElement(v) ? v.ref : null, d);
  if (kb(() => {
    S || R(aU(g) || document.body);
  }, [g, S]), kb(() => {
    if (m && !S)
      return _b(d, m), () => {
        _b(d, null);
      };
  }, [d, m, S]), S) {
    if (/* @__PURE__ */ ae.isValidElement(v)) {
      const k = {
        ref: w
      };
      return /* @__PURE__ */ ae.cloneElement(v, k);
    }
    return /* @__PURE__ */ Ct.jsx(ae.Fragment, {
      children: v
    });
  }
  return /* @__PURE__ */ Ct.jsx(ae.Fragment, {
    children: m && /* @__PURE__ */ Aw.createPortal(v, m)
  });
});
process.env.NODE_ENV !== "production" && (dg.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The children to render into the `container`.
   */
  children: x.node,
  /**
   * An HTML element or function that returns one.
   * The `container` will have the portal children appended to it.
   *
   * You can also provide a callback, which is called in a React layout effect.
   * This lets you set the container from a ref, and also makes server-side rendering possible.
   *
   * By default, it uses the body of the top-level document object,
   * so it's simply `document.body` most of the time.
   */
  container: x.oneOfType([cw, x.func]),
  /**
   * The `children` will be under the DOM hierarchy of the parent component.
   * @default false
   */
  disablePortal: x.bool
});
process.env.NODE_ENV !== "production" && (dg.propTypes = uw(dg.propTypes));
function o1() {
  const l = Ow(n1);
  return process.env.NODE_ENV !== "production" && ae.useDebugValue(l), l[r1] || l;
}
const iU = (l) => l.scrollTop;
function ZR(l, s) {
  var d, v;
  const {
    timeout: g,
    easing: S,
    style: m = {}
  } = l;
  return {
    duration: (d = m.transitionDuration) != null ? d : typeof g == "number" ? g : g[s.mode] || 0,
    easing: (v = m.transitionTimingFunction) != null ? v : typeof S == "object" ? S[s.mode] : S,
    delay: m.transitionDelay
  };
}
const oU = ["addEndListener", "appear", "children", "easing", "in", "onEnter", "onEntered", "onEntering", "onExit", "onExited", "onExiting", "style", "timeout", "TransitionComponent"], lU = {
  entering: {
    opacity: 1
  },
  entered: {
    opacity: 1
  }
}, Iw = /* @__PURE__ */ ae.forwardRef(function(s, d) {
  const v = o1(), g = {
    enter: v.transitions.duration.enteringScreen,
    exit: v.transitions.duration.leavingScreen
  }, {
    addEndListener: S,
    appear: m = !0,
    children: R,
    easing: w,
    in: k,
    onEnter: M,
    onEntered: N,
    onEntering: A,
    onExit: V,
    onExited: F,
    onExiting: P,
    style: H,
    timeout: le = g,
    // eslint-disable-next-line react/prop-types
    TransitionComponent: de = lP
  } = s, K = Tn(s, oU), J = ae.useRef(null), D = oc(J, R.ref, d), ve = (ge) => (nt) => {
    if (ge) {
      const be = J.current;
      nt === void 0 ? ge(be) : ge(be, nt);
    }
  }, ie = ve(A), Ke = ve((ge, nt) => {
    iU(ge);
    const be = ZR({
      style: H,
      timeout: le,
      easing: w
    }, {
      mode: "enter"
    });
    ge.style.webkitTransition = v.transitions.create("opacity", be), ge.style.transition = v.transitions.create("opacity", be), M && M(ge, nt);
  }), ot = ve(N), De = ve(P), _e = ve((ge) => {
    const nt = ZR({
      style: H,
      timeout: le,
      easing: w
    }, {
      mode: "exit"
    });
    ge.style.webkitTransition = v.transitions.create("opacity", nt), ge.style.transition = v.transitions.create("opacity", nt), V && V(ge);
  }), Ye = ve(F), Ee = (ge) => {
    S && S(J.current, ge);
  };
  return /* @__PURE__ */ Ct.jsx(de, fe({
    appear: m,
    in: k,
    nodeRef: J,
    onEnter: Ke,
    onEntered: ot,
    onEntering: ie,
    onExit: _e,
    onExited: Ye,
    onExiting: De,
    addEndListener: Ee,
    timeout: le
  }, K, {
    children: (ge, nt) => /* @__PURE__ */ ae.cloneElement(R, fe({
      style: fe({
        opacity: 0,
        visibility: ge === "exited" && !k ? "hidden" : void 0
      }, lU[ge], H, R.props.style),
      ref: D
    }, nt))
  }));
});
process.env.NODE_ENV !== "production" && (Iw.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Add a custom transition end trigger. Called with the transitioning DOM
   * node and a done callback. Allows for more fine grained transition end
   * logic. Note: Timeouts are still used as a fallback if provided.
   */
  addEndListener: x.func,
  /**
   * Perform the enter transition when it first mounts if `in` is also `true`.
   * Set this to `false` to disable this behavior.
   * @default true
   */
  appear: x.bool,
  /**
   * A single child content element.
   */
  children: Fb.isRequired,
  /**
   * The transition timing function.
   * You may specify a single easing or a object containing enter and exit values.
   */
  easing: x.oneOfType([x.shape({
    enter: x.string,
    exit: x.string
  }), x.string]),
  /**
   * If `true`, the component will transition in.
   */
  in: x.bool,
  /**
   * @ignore
   */
  onEnter: x.func,
  /**
   * @ignore
   */
  onEntered: x.func,
  /**
   * @ignore
   */
  onEntering: x.func,
  /**
   * @ignore
   */
  onExit: x.func,
  /**
   * @ignore
   */
  onExited: x.func,
  /**
   * @ignore
   */
  onExiting: x.func,
  /**
   * @ignore
   */
  style: x.object,
  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   * @default {
   *   enter: theme.transitions.duration.enteringScreen,
   *   exit: theme.transitions.duration.leavingScreen,
   * }
   */
  timeout: x.oneOfType([x.number, x.shape({
    appear: x.number,
    enter: x.number,
    exit: x.number
  })])
});
const Bw = Iw;
function uU(l) {
  return ki("MuiBackdrop", l);
}
io("MuiBackdrop", ["root", "invisible"]);
const sU = ["children", "className", "component", "components", "componentsProps", "invisible", "open", "slotProps", "slots", "TransitionComponent", "transitionDuration"], cU = (l) => {
  const {
    classes: s,
    invisible: d
  } = l;
  return Go({
    root: ["root", d && "invisible"]
  }, uU, s);
}, fU = _r("div", {
  name: "MuiBackdrop",
  slot: "Root",
  overridesResolver: (l, s) => {
    const {
      ownerState: d
    } = l;
    return [s.root, d.invisible && s.invisible];
  }
})(({
  ownerState: l
}) => fe({
  position: "fixed",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  right: 0,
  bottom: 0,
  top: 0,
  left: 0,
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  WebkitTapHighlightColor: "transparent"
}, l.invisible && {
  backgroundColor: "transparent"
})), Yw = /* @__PURE__ */ ae.forwardRef(function(s, d) {
  var v, g, S;
  const m = oo({
    props: s,
    name: "MuiBackdrop"
  }), {
    children: R,
    className: w,
    component: k = "div",
    components: M = {},
    componentsProps: N = {},
    invisible: A = !1,
    open: V,
    slotProps: F = {},
    slots: P = {},
    TransitionComponent: H = Bw,
    transitionDuration: le
  } = m, de = Tn(m, sU), K = fe({}, m, {
    component: k,
    invisible: A
  }), J = cU(K), D = (v = F.root) != null ? v : N.root;
  return /* @__PURE__ */ Ct.jsx(H, fe({
    in: V,
    timeout: le
  }, de, {
    children: /* @__PURE__ */ Ct.jsx(fU, fe({
      "aria-hidden": !0
    }, D, {
      as: (g = (S = P.root) != null ? S : M.Root) != null ? g : k,
      className: xn(J.root, w, D == null ? void 0 : D.className),
      ownerState: fe({}, K, D == null ? void 0 : D.ownerState),
      classes: J,
      ref: d,
      children: R
    }))
  }));
});
process.env.NODE_ENV !== "production" && (Yw.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: x.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: x.object,
  /**
   * @ignore
   */
  className: x.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: x.elementType,
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `slots` prop.
   * It's recommended to use the `slots` prop instead.
   *
   * @default {}
   */
  components: x.shape({
    Root: x.elementType
  }),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * This prop is an alias for the `slotProps` prop.
   * It's recommended to use the `slotProps` prop instead, as `componentsProps` will be deprecated in the future.
   *
   * @default {}
   */
  componentsProps: x.shape({
    root: x.object
  }),
  /**
   * If `true`, the backdrop is invisible.
   * It can be used when rendering a popover or a custom select component.
   * @default false
   */
  invisible: x.bool,
  /**
   * If `true`, the component is shown.
   */
  open: x.bool.isRequired,
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * This prop is an alias for the `componentsProps` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slotProps: x.shape({
    root: x.object
  }),
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `components` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slots: x.shape({
    root: x.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: x.oneOfType([x.arrayOf(x.oneOfType([x.func, x.object, x.bool])), x.func, x.object]),
  /**
   * The component used for the transition.
   * [Follow this guide](/material-ui/transitions/#transitioncomponent-prop) to learn more about the requirements for this component.
   * @default Fade
   */
  TransitionComponent: x.elementType,
  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   */
  transitionDuration: x.oneOfType([x.number, x.shape({
    appear: x.number,
    enter: x.number,
    exit: x.number
  })])
});
const Ww = Yw;
function dU(l) {
  return ki("MuiModal", l);
}
io("MuiModal", ["root", "hidden", "backdrop"]);
const pU = ["BackdropComponent", "BackdropProps", "classes", "className", "closeAfterTransition", "children", "container", "component", "components", "componentsProps", "disableAutoFocus", "disableEnforceFocus", "disableEscapeKeyDown", "disablePortal", "disableRestoreFocus", "disableScrollLock", "hideBackdrop", "keepMounted", "onBackdropClick", "onClose", "onTransitionEnter", "onTransitionExited", "open", "slotProps", "slots", "theme"], vU = (l) => {
  const {
    open: s,
    exited: d,
    classes: v
  } = l;
  return Go({
    root: ["root", !s && d && "hidden"],
    backdrop: ["backdrop"]
  }, dU, v);
}, hU = _r("div", {
  name: "MuiModal",
  slot: "Root",
  overridesResolver: (l, s) => {
    const {
      ownerState: d
    } = l;
    return [s.root, !d.open && d.exited && s.hidden];
  }
})(({
  theme: l,
  ownerState: s
}) => fe({
  position: "fixed",
  zIndex: (l.vars || l).zIndex.modal,
  right: 0,
  bottom: 0,
  top: 0,
  left: 0
}, !s.open && s.exited && {
  visibility: "hidden"
})), mU = _r(Ww, {
  name: "MuiModal",
  slot: "Backdrop",
  overridesResolver: (l, s) => s.backdrop
})({
  zIndex: -1
}), Gw = /* @__PURE__ */ ae.forwardRef(function(s, d) {
  var v, g, S, m, R, w;
  const k = oo({
    name: "MuiModal",
    props: s
  }), {
    BackdropComponent: M = mU,
    BackdropProps: N,
    className: A,
    closeAfterTransition: V = !1,
    children: F,
    container: P,
    component: H,
    components: le = {},
    componentsProps: de = {},
    disableAutoFocus: K = !1,
    disableEnforceFocus: J = !1,
    disableEscapeKeyDown: D = !1,
    disablePortal: ve = !1,
    disableRestoreFocus: ie = !1,
    disableScrollLock: Ke = !1,
    hideBackdrop: ot = !1,
    keepMounted: De = !1,
    onBackdropClick: _e,
    open: Ye,
    slotProps: Ee,
    slots: ge
    // eslint-disable-next-line react/prop-types
  } = k, nt = Tn(k, pU), be = fe({}, k, {
    closeAfterTransition: V,
    disableAutoFocus: K,
    disableEnforceFocus: J,
    disableEscapeKeyDown: D,
    disablePortal: ve,
    disableRestoreFocus: ie,
    disableScrollLock: Ke,
    hideBackdrop: ot,
    keepMounted: De
  }), {
    getRootProps: Be,
    getBackdropProps: oe,
    getTransitionProps: Pe,
    portalRef: I,
    isTopModal: ue,
    exited: we,
    hasTransition: Ve
  } = XP(fe({}, be, {
    rootRef: d
  })), ke = fe({}, be, {
    exited: we
  }), qe = vU(ke), Ne = {};
  if (F.props.tabIndex === void 0 && (Ne.tabIndex = "-1"), Ve) {
    const {
      onEnter: mt,
      onExited: Se
    } = Pe();
    Ne.onEnter = mt, Ne.onExited = Se;
  }
  const Xe = (v = (g = ge == null ? void 0 : ge.root) != null ? g : le.Root) != null ? v : hU, We = (S = (m = ge == null ? void 0 : ge.backdrop) != null ? m : le.Backdrop) != null ? S : M, He = (R = Ee == null ? void 0 : Ee.root) != null ? R : de.root, rt = (w = Ee == null ? void 0 : Ee.backdrop) != null ? w : de.backdrop, Rt = QR({
    elementType: Xe,
    externalSlotProps: He,
    externalForwardedProps: nt,
    getSlotProps: Be,
    additionalProps: {
      ref: d,
      as: H
    },
    ownerState: ke,
    className: xn(A, He == null ? void 0 : He.className, qe == null ? void 0 : qe.root, !ke.open && ke.exited && (qe == null ? void 0 : qe.hidden))
  }), Z = QR({
    elementType: We,
    externalSlotProps: rt,
    additionalProps: N,
    getSlotProps: (mt) => oe(fe({}, mt, {
      onClick: (Se) => {
        _e && _e(Se), mt != null && mt.onClick && mt.onClick(Se);
      }
    })),
    className: xn(rt == null ? void 0 : rt.className, N == null ? void 0 : N.className, qe == null ? void 0 : qe.backdrop),
    ownerState: ke
  });
  return !De && !Ye && (!Ve || we) ? null : /* @__PURE__ */ Ct.jsx(dg, {
    ref: I,
    container: P,
    disablePortal: ve,
    children: /* @__PURE__ */ Ct.jsxs(Xe, fe({}, Rt, {
      children: [!ot && M ? /* @__PURE__ */ Ct.jsx(We, fe({}, Z)) : null, /* @__PURE__ */ Ct.jsx(fg, {
        disableEnforceFocus: J,
        disableAutoFocus: K,
        disableRestoreFocus: ie,
        isEnabled: ue,
        open: Ye,
        children: /* @__PURE__ */ ae.cloneElement(F, Ne)
      })]
    }))
  });
});
process.env.NODE_ENV !== "production" && (Gw.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * A backdrop component. This prop enables custom backdrop rendering.
   * @deprecated Use `slots.backdrop` instead. While this prop currently works, it will be removed in the next major version.
   * Use the `slots.backdrop` prop to make your application ready for the next version of Material UI.
   * @default styled(Backdrop, {
   *   name: 'MuiModal',
   *   slot: 'Backdrop',
   *   overridesResolver: (props, styles) => {
   *     return styles.backdrop;
   *   },
   * })({
   *   zIndex: -1,
   * })
   */
  BackdropComponent: x.elementType,
  /**
   * Props applied to the [`Backdrop`](/material-ui/api/backdrop/) element.
   * @deprecated Use `slotProps.backdrop` instead.
   */
  BackdropProps: x.object,
  /**
   * A single child content element.
   */
  children: Fb.isRequired,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: x.object,
  /**
   * @ignore
   */
  className: x.string,
  /**
   * When set to true the Modal waits until a nested Transition is completed before closing.
   * @default false
   */
  closeAfterTransition: x.bool,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: x.elementType,
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `slots` prop.
   * It's recommended to use the `slots` prop instead.
   *
   * @default {}
   */
  components: x.shape({
    Backdrop: x.elementType,
    Root: x.elementType
  }),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * This prop is an alias for the `slotProps` prop.
   * It's recommended to use the `slotProps` prop instead, as `componentsProps` will be deprecated in the future.
   *
   * @default {}
   */
  componentsProps: x.shape({
    backdrop: x.oneOfType([x.func, x.object]),
    root: x.oneOfType([x.func, x.object])
  }),
  /**
   * An HTML element or function that returns one.
   * The `container` will have the portal children appended to it.
   *
   * You can also provide a callback, which is called in a React layout effect.
   * This lets you set the container from a ref, and also makes server-side rendering possible.
   *
   * By default, it uses the body of the top-level document object,
   * so it's simply `document.body` most of the time.
   */
  container: x.oneOfType([cw, x.func]),
  /**
   * If `true`, the modal will not automatically shift focus to itself when it opens, and
   * replace it to the last focused element when it closes.
   * This also works correctly with any modal children that have the `disableAutoFocus` prop.
   *
   * Generally this should never be set to `true` as it makes the modal less
   * accessible to assistive technologies, like screen readers.
   * @default false
   */
  disableAutoFocus: x.bool,
  /**
   * If `true`, the modal will not prevent focus from leaving the modal while open.
   *
   * Generally this should never be set to `true` as it makes the modal less
   * accessible to assistive technologies, like screen readers.
   * @default false
   */
  disableEnforceFocus: x.bool,
  /**
   * If `true`, hitting escape will not fire the `onClose` callback.
   * @default false
   */
  disableEscapeKeyDown: x.bool,
  /**
   * The `children` will be under the DOM hierarchy of the parent component.
   * @default false
   */
  disablePortal: x.bool,
  /**
   * If `true`, the modal will not restore focus to previously focused element once
   * modal is hidden or unmounted.
   * @default false
   */
  disableRestoreFocus: x.bool,
  /**
   * Disable the scroll lock behavior.
   * @default false
   */
  disableScrollLock: x.bool,
  /**
   * If `true`, the backdrop is not rendered.
   * @default false
   */
  hideBackdrop: x.bool,
  /**
   * Always keep the children in the DOM.
   * This prop can be useful in SEO situation or
   * when you want to maximize the responsiveness of the Modal.
   * @default false
   */
  keepMounted: x.bool,
  /**
   * Callback fired when the backdrop is clicked.
   * @deprecated Use the `onClose` prop with the `reason` argument to handle the `backdropClick` events.
   */
  onBackdropClick: x.func,
  /**
   * Callback fired when the component requests to be closed.
   * The `reason` parameter can optionally be used to control the response to `onClose`.
   *
   * @param {object} event The event source of the callback.
   * @param {string} reason Can be: `"escapeKeyDown"`, `"backdropClick"`.
   */
  onClose: x.func,
  /**
   * A function called when a transition enters.
   */
  onTransitionEnter: x.func,
  /**
   * A function called when a transition has exited.
   */
  onTransitionExited: x.func,
  /**
   * If `true`, the component is shown.
   */
  open: x.bool.isRequired,
  /**
   * The props used for each slot inside the Modal.
   * @default {}
   */
  slotProps: x.shape({
    backdrop: x.oneOfType([x.func, x.object]),
    root: x.oneOfType([x.func, x.object])
  }),
  /**
   * The components used for each slot inside the Modal.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  slots: x.shape({
    backdrop: x.elementType,
    root: x.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: x.oneOfType([x.arrayOf(x.oneOfType([x.func, x.object, x.bool])), x.func, x.object])
});
const yU = Gw, JR = (l) => {
  let s;
  return l < 1 ? s = 5.11916 * l ** 2 : s = 4.5 * Math.log(l + 1) + 2, (s / 100).toFixed(2);
};
function gU(l) {
  return ki("MuiPaper", l);
}
io("MuiPaper", ["root", "rounded", "outlined", "elevation", "elevation0", "elevation1", "elevation2", "elevation3", "elevation4", "elevation5", "elevation6", "elevation7", "elevation8", "elevation9", "elevation10", "elevation11", "elevation12", "elevation13", "elevation14", "elevation15", "elevation16", "elevation17", "elevation18", "elevation19", "elevation20", "elevation21", "elevation22", "elevation23", "elevation24"]);
const SU = ["className", "component", "elevation", "square", "variant"], EU = (l) => {
  const {
    square: s,
    elevation: d,
    variant: v,
    classes: g
  } = l, S = {
    root: ["root", v, !s && "rounded", v === "elevation" && `elevation${d}`]
  };
  return Go(S, gU, g);
}, bU = _r("div", {
  name: "MuiPaper",
  slot: "Root",
  overridesResolver: (l, s) => {
    const {
      ownerState: d
    } = l;
    return [s.root, s[d.variant], !d.square && s.rounded, d.variant === "elevation" && s[`elevation${d.elevation}`]];
  }
})(({
  theme: l,
  ownerState: s
}) => {
  var d;
  return fe({
    backgroundColor: (l.vars || l).palette.background.paper,
    color: (l.vars || l).palette.text.primary,
    transition: l.transitions.create("box-shadow")
  }, !s.square && {
    borderRadius: l.shape.borderRadius
  }, s.variant === "outlined" && {
    border: `1px solid ${(l.vars || l).palette.divider}`
  }, s.variant === "elevation" && fe({
    boxShadow: (l.vars || l).shadows[s.elevation]
  }, !l.vars && l.palette.mode === "dark" && {
    backgroundImage: `linear-gradient(${fd("#fff", JR(s.elevation))}, ${fd("#fff", JR(s.elevation))})`
  }, l.vars && {
    backgroundImage: (d = l.vars.overlays) == null ? void 0 : d[s.elevation]
  }));
}), qw = /* @__PURE__ */ ae.forwardRef(function(s, d) {
  const v = oo({
    props: s,
    name: "MuiPaper"
  }), {
    className: g,
    component: S = "div",
    elevation: m = 1,
    square: R = !1,
    variant: w = "elevation"
  } = v, k = Tn(v, SU), M = fe({}, v, {
    component: S,
    elevation: m,
    square: R,
    variant: w
  }), N = EU(M);
  return process.env.NODE_ENV !== "production" && o1().shadows[m] === void 0 && console.error([`MUI: The elevation provided <Paper elevation={${m}}> is not available in the theme.`, `Please make sure that \`theme.shadows[${m}]\` is defined.`].join(`
`)), /* @__PURE__ */ Ct.jsx(bU, fe({
    as: S,
    ownerState: M,
    className: xn(N.root, g),
    ref: d
  }, k));
});
process.env.NODE_ENV !== "production" && (qw.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: x.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: x.object,
  /**
   * @ignore
   */
  className: x.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: x.elementType,
  /**
   * Shadow depth, corresponds to `dp` in the spec.
   * It accepts values between 0 and 24 inclusive.
   * @default 1
   */
  elevation: pg(A2, (l) => {
    const {
      elevation: s,
      variant: d
    } = l;
    return s > 0 && d === "outlined" ? new Error(`MUI: Combining \`elevation={${s}}\` with \`variant="${d}"\` has no effect. Either use \`elevation={0}\` or use a different \`variant\`.`) : null;
  }),
  /**
   * If `true`, rounded corners are disabled.
   * @default false
   */
  square: x.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: x.oneOfType([x.arrayOf(x.oneOfType([x.func, x.object, x.bool])), x.func, x.object]),
  /**
   * The variant to use.
   * @default 'elevation'
   */
  variant: x.oneOfType([x.oneOf(["elevation", "outlined"]), x.string])
});
const Qw = qw;
function CU(l) {
  return ki("MuiDialog", l);
}
const xU = io("MuiDialog", ["root", "scrollPaper", "scrollBody", "container", "paper", "paperScrollPaper", "paperScrollBody", "paperWidthFalse", "paperWidthXs", "paperWidthSm", "paperWidthMd", "paperWidthLg", "paperWidthXl", "paperFullWidth", "paperFullScreen"]), xb = xU, Kw = /* @__PURE__ */ ae.createContext({});
process.env.NODE_ENV !== "production" && (Kw.displayName = "DialogContext");
const Xw = Kw, TU = ["aria-describedby", "aria-labelledby", "BackdropComponent", "BackdropProps", "children", "className", "disableEscapeKeyDown", "fullScreen", "fullWidth", "maxWidth", "onBackdropClick", "onClose", "open", "PaperComponent", "PaperProps", "scroll", "TransitionComponent", "transitionDuration", "TransitionProps"], RU = _r(Ww, {
  name: "MuiDialog",
  slot: "Backdrop",
  overrides: (l, s) => s.backdrop
})({
  // Improve scrollable dialog support.
  zIndex: -1
}), wU = (l) => {
  const {
    classes: s,
    scroll: d,
    maxWidth: v,
    fullWidth: g,
    fullScreen: S
  } = l, m = {
    root: ["root"],
    container: ["container", `scroll${Qn(d)}`],
    paper: ["paper", `paperScroll${Qn(d)}`, `paperWidth${Qn(String(v))}`, g && "paperFullWidth", S && "paperFullScreen"]
  };
  return Go(m, CU, s);
}, _U = _r(yU, {
  name: "MuiDialog",
  slot: "Root",
  overridesResolver: (l, s) => s.root
})({
  "@media print": {
    // Use !important to override the Modal inline-style.
    position: "absolute !important"
  }
}), kU = _r("div", {
  name: "MuiDialog",
  slot: "Container",
  overridesResolver: (l, s) => {
    const {
      ownerState: d
    } = l;
    return [s.container, s[`scroll${Qn(d.scroll)}`]];
  }
})(({
  ownerState: l
}) => fe({
  height: "100%",
  "@media print": {
    height: "auto"
  },
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0
}, l.scroll === "paper" && {
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
}, l.scroll === "body" && {
  overflowY: "auto",
  overflowX: "hidden",
  textAlign: "center",
  "&::after": {
    content: '""',
    display: "inline-block",
    verticalAlign: "middle",
    height: "100%",
    width: "0"
  }
})), OU = _r(Qw, {
  name: "MuiDialog",
  slot: "Paper",
  overridesResolver: (l, s) => {
    const {
      ownerState: d
    } = l;
    return [s.paper, s[`scrollPaper${Qn(d.scroll)}`], s[`paperWidth${Qn(String(d.maxWidth))}`], d.fullWidth && s.paperFullWidth, d.fullScreen && s.paperFullScreen];
  }
})(({
  theme: l,
  ownerState: s
}) => fe({
  margin: 32,
  position: "relative",
  overflowY: "auto",
  // Fix IE11 issue, to remove at some point.
  "@media print": {
    overflowY: "visible",
    boxShadow: "none"
  }
}, s.scroll === "paper" && {
  display: "flex",
  flexDirection: "column",
  maxHeight: "calc(100% - 64px)"
}, s.scroll === "body" && {
  display: "inline-block",
  verticalAlign: "middle",
  textAlign: "left"
  // 'initial' doesn't work on IE11
}, !s.maxWidth && {
  maxWidth: "calc(100% - 64px)"
}, s.maxWidth === "xs" && {
  maxWidth: l.breakpoints.unit === "px" ? Math.max(l.breakpoints.values.xs, 444) : `max(${l.breakpoints.values.xs}${l.breakpoints.unit}, 444px)`,
  [`&.${xb.paperScrollBody}`]: {
    [l.breakpoints.down(Math.max(l.breakpoints.values.xs, 444) + 32 * 2)]: {
      maxWidth: "calc(100% - 64px)"
    }
  }
}, s.maxWidth && s.maxWidth !== "xs" && {
  maxWidth: `${l.breakpoints.values[s.maxWidth]}${l.breakpoints.unit}`,
  [`&.${xb.paperScrollBody}`]: {
    [l.breakpoints.down(l.breakpoints.values[s.maxWidth] + 32 * 2)]: {
      maxWidth: "calc(100% - 64px)"
    }
  }
}, s.fullWidth && {
  width: "calc(100% - 64px)"
}, s.fullScreen && {
  margin: 0,
  width: "100%",
  maxWidth: "100%",
  height: "100%",
  maxHeight: "none",
  borderRadius: 0,
  [`&.${xb.paperScrollBody}`]: {
    margin: 0,
    maxWidth: "100%"
  }
})), Zw = /* @__PURE__ */ ae.forwardRef(function(s, d) {
  const v = oo({
    props: s,
    name: "MuiDialog"
  }), g = o1(), S = {
    enter: g.transitions.duration.enteringScreen,
    exit: g.transitions.duration.leavingScreen
  }, {
    "aria-describedby": m,
    "aria-labelledby": R,
    BackdropComponent: w,
    BackdropProps: k,
    children: M,
    className: N,
    disableEscapeKeyDown: A = !1,
    fullScreen: V = !1,
    fullWidth: F = !1,
    maxWidth: P = "sm",
    onBackdropClick: H,
    onClose: le,
    open: de,
    PaperComponent: K = Qw,
    PaperProps: J = {},
    scroll: D = "paper",
    TransitionComponent: ve = Bw,
    transitionDuration: ie = S,
    TransitionProps: Ke
  } = v, ot = Tn(v, TU), De = fe({}, v, {
    disableEscapeKeyDown: A,
    fullScreen: V,
    fullWidth: F,
    maxWidth: P,
    scroll: D
  }), _e = wU(De), Ye = ae.useRef(), Ee = (Be) => {
    Ye.current = Be.target === Be.currentTarget;
  }, ge = (Be) => {
    Ye.current && (Ye.current = null, H && H(Be), le && le(Be, "backdropClick"));
  }, nt = y2(R), be = ae.useMemo(() => ({
    titleId: nt
  }), [nt]);
  return /* @__PURE__ */ Ct.jsx(_U, fe({
    className: xn(_e.root, N),
    closeAfterTransition: !0,
    components: {
      Backdrop: RU
    },
    componentsProps: {
      backdrop: fe({
        transitionDuration: ie,
        as: w
      }, k)
    },
    disableEscapeKeyDown: A,
    onClose: le,
    open: de,
    ref: d,
    onClick: ge,
    ownerState: De
  }, ot, {
    children: /* @__PURE__ */ Ct.jsx(ve, fe({
      appear: !0,
      in: de,
      timeout: ie,
      role: "presentation"
    }, Ke, {
      children: /* @__PURE__ */ Ct.jsx(kU, {
        className: xn(_e.container),
        onMouseDown: Ee,
        ownerState: De,
        children: /* @__PURE__ */ Ct.jsx(OU, fe({
          as: K,
          elevation: 24,
          role: "dialog",
          "aria-describedby": m,
          "aria-labelledby": nt
        }, J, {
          className: xn(_e.paper, J.className),
          ownerState: De,
          children: /* @__PURE__ */ Ct.jsx(Xw.Provider, {
            value: be,
            children: M
          })
        }))
      })
    }))
  }));
});
process.env.NODE_ENV !== "production" && (Zw.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The id(s) of the element(s) that describe the dialog.
   */
  "aria-describedby": x.string,
  /**
   * The id(s) of the element(s) that label the dialog.
   */
  "aria-labelledby": x.string,
  /**
   * A backdrop component. This prop enables custom backdrop rendering.
   * @deprecated Use `slots.backdrop` instead. While this prop currently works, it will be removed in the next major version.
   * Use the `slots.backdrop` prop to make your application ready for the next version of Material UI.
   * @default styled(Backdrop, {
   *   name: 'MuiModal',
   *   slot: 'Backdrop',
   *   overridesResolver: (props, styles) => {
   *     return styles.backdrop;
   *   },
   * })({
   *   zIndex: -1,
   * })
   */
  BackdropComponent: x.elementType,
  /**
   * @ignore
   */
  BackdropProps: x.object,
  /**
   * Dialog children, usually the included sub-components.
   */
  children: x.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: x.object,
  /**
   * @ignore
   */
  className: x.string,
  /**
   * If `true`, hitting escape will not fire the `onClose` callback.
   * @default false
   */
  disableEscapeKeyDown: x.bool,
  /**
   * If `true`, the dialog is full-screen.
   * @default false
   */
  fullScreen: x.bool,
  /**
   * If `true`, the dialog stretches to `maxWidth`.
   *
   * Notice that the dialog width grow is limited by the default margin.
   * @default false
   */
  fullWidth: x.bool,
  /**
   * Determine the max-width of the dialog.
   * The dialog width grows with the size of the screen.
   * Set to `false` to disable `maxWidth`.
   * @default 'sm'
   */
  maxWidth: x.oneOfType([x.oneOf(["xs", "sm", "md", "lg", "xl", !1]), x.string]),
  /**
   * Callback fired when the backdrop is clicked.
   * @deprecated Use the `onClose` prop with the `reason` argument to handle the `backdropClick` events.
   */
  onBackdropClick: x.func,
  /**
   * Callback fired when the component requests to be closed.
   *
   * @param {object} event The event source of the callback.
   * @param {string} reason Can be: `"escapeKeyDown"`, `"backdropClick"`.
   */
  onClose: x.func,
  /**
   * If `true`, the component is shown.
   */
  open: x.bool.isRequired,
  /**
   * The component used to render the body of the dialog.
   * @default Paper
   */
  PaperComponent: x.elementType,
  /**
   * Props applied to the [`Paper`](/material-ui/api/paper/) element.
   * @default {}
   */
  PaperProps: x.object,
  /**
   * Determine the container for scrolling the dialog.
   * @default 'paper'
   */
  scroll: x.oneOf(["body", "paper"]),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: x.oneOfType([x.arrayOf(x.oneOfType([x.func, x.object, x.bool])), x.func, x.object]),
  /**
   * The component used for the transition.
   * [Follow this guide](/material-ui/transitions/#transitioncomponent-prop) to learn more about the requirements for this component.
   * @default Fade
   */
  TransitionComponent: x.elementType,
  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   * @default {
   *   enter: theme.transitions.duration.enteringScreen,
   *   exit: theme.transitions.duration.leavingScreen,
   * }
   */
  transitionDuration: x.oneOfType([x.number, x.shape({
    appear: x.number,
    enter: x.number,
    exit: x.number
  })]),
  /**
   * Props applied to the transition element.
   * By default, the element is based on this [`Transition`](http://reactcommunity.org/react-transition-group/transition/) component.
   */
  TransitionProps: x.object
});
const DU = Zw;
function NU(l) {
  return ki("MuiDialogActions", l);
}
io("MuiDialogActions", ["root", "spacing"]);
const MU = ["className", "disableSpacing"], LU = (l) => {
  const {
    classes: s,
    disableSpacing: d
  } = l;
  return Go({
    root: ["root", !d && "spacing"]
  }, NU, s);
}, AU = _r("div", {
  name: "MuiDialogActions",
  slot: "Root",
  overridesResolver: (l, s) => {
    const {
      ownerState: d
    } = l;
    return [s.root, !d.disableSpacing && s.spacing];
  }
})(({
  ownerState: l
}) => fe({
  display: "flex",
  alignItems: "center",
  padding: 8,
  justifyContent: "flex-end",
  flex: "0 0 auto"
}, !l.disableSpacing && {
  "& > :not(style) ~ :not(style)": {
    marginLeft: 8
  }
})), Jw = /* @__PURE__ */ ae.forwardRef(function(s, d) {
  const v = oo({
    props: s,
    name: "MuiDialogActions"
  }), {
    className: g,
    disableSpacing: S = !1
  } = v, m = Tn(v, MU), R = fe({}, v, {
    disableSpacing: S
  }), w = LU(R);
  return /* @__PURE__ */ Ct.jsx(AU, fe({
    className: xn(w.root, g),
    ownerState: R,
    ref: d
  }, m));
});
process.env.NODE_ENV !== "production" && (Jw.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: x.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: x.object,
  /**
   * @ignore
   */
  className: x.string,
  /**
   * If `true`, the actions do not have additional margin.
   * @default false
   */
  disableSpacing: x.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: x.oneOfType([x.arrayOf(x.oneOfType([x.func, x.object, x.bool])), x.func, x.object])
});
const zU = Jw;
function PU(l) {
  return ki("MuiDialogContent", l);
}
io("MuiDialogContent", ["root", "dividers"]);
function UU(l) {
  return ki("MuiDialogTitle", l);
}
const jU = io("MuiDialogTitle", ["root"]), $U = jU, FU = ["className", "dividers"], VU = (l) => {
  const {
    classes: s,
    dividers: d
  } = l;
  return Go({
    root: ["root", d && "dividers"]
  }, PU, s);
}, HU = _r("div", {
  name: "MuiDialogContent",
  slot: "Root",
  overridesResolver: (l, s) => {
    const {
      ownerState: d
    } = l;
    return [s.root, d.dividers && s.dividers];
  }
})(({
  theme: l,
  ownerState: s
}) => fe({
  flex: "1 1 auto",
  // Add iOS momentum scrolling for iOS < 13.0
  WebkitOverflowScrolling: "touch",
  overflowY: "auto",
  padding: "20px 24px"
}, s.dividers ? {
  padding: "16px 24px",
  borderTop: `1px solid ${(l.vars || l).palette.divider}`,
  borderBottom: `1px solid ${(l.vars || l).palette.divider}`
} : {
  [`.${$U.root} + &`]: {
    paddingTop: 0
  }
})), e_ = /* @__PURE__ */ ae.forwardRef(function(s, d) {
  const v = oo({
    props: s,
    name: "MuiDialogContent"
  }), {
    className: g,
    dividers: S = !1
  } = v, m = Tn(v, FU), R = fe({}, v, {
    dividers: S
  }), w = VU(R);
  return /* @__PURE__ */ Ct.jsx(HU, fe({
    className: xn(w.root, g),
    ownerState: R,
    ref: d
  }, m));
});
process.env.NODE_ENV !== "production" && (e_.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: x.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: x.object,
  /**
   * @ignore
   */
  className: x.string,
  /**
   * Display the top and bottom dividers.
   * @default false
   */
  dividers: x.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: x.oneOfType([x.arrayOf(x.oneOfType([x.func, x.object, x.bool])), x.func, x.object])
});
const IU = e_;
function BU(l) {
  return ki("MuiTypography", l);
}
io("MuiTypography", ["root", "h1", "h2", "h3", "h4", "h5", "h6", "subtitle1", "subtitle2", "body1", "body2", "inherit", "button", "caption", "overline", "alignLeft", "alignRight", "alignCenter", "alignJustify", "noWrap", "gutterBottom", "paragraph"]);
const YU = ["align", "className", "component", "gutterBottom", "noWrap", "paragraph", "variant", "variantMapping"], WU = (l) => {
  const {
    align: s,
    gutterBottom: d,
    noWrap: v,
    paragraph: g,
    variant: S,
    classes: m
  } = l, R = {
    root: ["root", S, l.align !== "inherit" && `align${Qn(s)}`, d && "gutterBottom", v && "noWrap", g && "paragraph"]
  };
  return Go(R, BU, m);
}, GU = _r("span", {
  name: "MuiTypography",
  slot: "Root",
  overridesResolver: (l, s) => {
    const {
      ownerState: d
    } = l;
    return [s.root, d.variant && s[d.variant], d.align !== "inherit" && s[`align${Qn(d.align)}`], d.noWrap && s.noWrap, d.gutterBottom && s.gutterBottom, d.paragraph && s.paragraph];
  }
})(({
  theme: l,
  ownerState: s
}) => fe({
  margin: 0
}, s.variant === "inherit" && {
  // Some elements, like <button> on Chrome have default font that doesn't inherit, reset this.
  font: "inherit"
}, s.variant !== "inherit" && l.typography[s.variant], s.align !== "inherit" && {
  textAlign: s.align
}, s.noWrap && {
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap"
}, s.gutterBottom && {
  marginBottom: "0.35em"
}, s.paragraph && {
  marginBottom: 16
})), ew = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
  subtitle1: "h6",
  subtitle2: "h6",
  body1: "p",
  body2: "p",
  inherit: "p"
}, qU = {
  primary: "primary.main",
  textPrimary: "text.primary",
  secondary: "secondary.main",
  textSecondary: "text.secondary",
  error: "error.main"
}, QU = (l) => qU[l] || l, t_ = /* @__PURE__ */ ae.forwardRef(function(s, d) {
  const v = oo({
    props: s,
    name: "MuiTypography"
  }), g = QU(v.color), S = iz(fe({}, v, {
    color: g
  })), {
    align: m = "inherit",
    className: R,
    component: w,
    gutterBottom: k = !1,
    noWrap: M = !1,
    paragraph: N = !1,
    variant: A = "body1",
    variantMapping: V = ew
  } = S, F = Tn(S, YU), P = fe({}, S, {
    align: m,
    color: g,
    className: R,
    component: w,
    gutterBottom: k,
    noWrap: M,
    paragraph: N,
    variant: A,
    variantMapping: V
  }), H = w || (N ? "p" : V[A] || ew[A]) || "span", le = WU(P);
  return /* @__PURE__ */ Ct.jsx(GU, fe({
    as: H,
    ref: d,
    ownerState: P,
    className: xn(le.root, R)
  }, F));
});
process.env.NODE_ENV !== "production" && (t_.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Set the text-align on the component.
   * @default 'inherit'
   */
  align: x.oneOf(["center", "inherit", "justify", "left", "right"]),
  /**
   * The content of the component.
   */
  children: x.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: x.object,
  /**
   * @ignore
   */
  className: x.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: x.elementType,
  /**
   * If `true`, the text will have a bottom margin.
   * @default false
   */
  gutterBottom: x.bool,
  /**
   * If `true`, the text will not wrap, but instead will truncate with a text overflow ellipsis.
   *
   * Note that text overflow can only happen with block or inline-block level elements
   * (the element needs to have a width in order to overflow).
   * @default false
   */
  noWrap: x.bool,
  /**
   * If `true`, the element will be a paragraph element.
   * @default false
   */
  paragraph: x.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: x.oneOfType([x.arrayOf(x.oneOfType([x.func, x.object, x.bool])), x.func, x.object]),
  /**
   * Applies the theme typography styles.
   * @default 'body1'
   */
  variant: x.oneOfType([x.oneOf(["body1", "body2", "button", "caption", "h1", "h2", "h3", "h4", "h5", "h6", "inherit", "overline", "subtitle1", "subtitle2"]), x.string]),
  /**
   * The component maps the variant prop to a range of different HTML element types.
   * For instance, subtitle1 to `<h6>`.
   * If you wish to change that mapping, you can provide your own.
   * Alternatively, you can use the `component` prop.
   * @default {
   *   h1: 'h1',
   *   h2: 'h2',
   *   h3: 'h3',
   *   h4: 'h4',
   *   h5: 'h5',
   *   h6: 'h6',
   *   subtitle1: 'h6',
   *   subtitle2: 'h6',
   *   body1: 'p',
   *   body2: 'p',
   *   inherit: 'p',
   * }
   */
  variantMapping: x.object
});
const n_ = t_, KU = ["className", "id"], XU = (l) => {
  const {
    classes: s
  } = l;
  return Go({
    root: ["root"]
  }, UU, s);
}, ZU = _r(n_, {
  name: "MuiDialogTitle",
  slot: "Root",
  overridesResolver: (l, s) => s.root
})({
  padding: "16px 24px",
  flex: "0 0 auto"
}), r_ = /* @__PURE__ */ ae.forwardRef(function(s, d) {
  const v = oo({
    props: s,
    name: "MuiDialogTitle"
  }), {
    className: g,
    id: S
  } = v, m = Tn(v, KU), R = v, w = XU(R), {
    titleId: k = S
  } = ae.useContext(Xw);
  return /* @__PURE__ */ Ct.jsx(ZU, fe({
    component: "h2",
    className: xn(w.root, g),
    ownerState: R,
    ref: d,
    variant: "h6",
    id: S ?? k
  }, m));
});
process.env.NODE_ENV !== "production" && (r_.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: x.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: x.object,
  /**
   * @ignore
   */
  className: x.string,
  /**
   * @ignore
   */
  id: x.string,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: x.oneOfType([x.arrayOf(x.oneOfType([x.func, x.object, x.bool])), x.func, x.object])
});
const JU = r_, e3 = ({
  dialog: l,
  dialogTitle: s,
  dialogContent: d,
  dialogActions: v,
  children: g,
  isOpen: S,
  handleClose: m,
  disableEscape: R = !1,
  maxWidth: w = "sm",
  fullMaxWidth: k = !0
}) => {
  var M, N, A, V;
  return /* @__PURE__ */ Ct.jsxs(
    DU,
    {
      keepMounted: !0,
      scroll: "paper",
      ...l,
      open: S,
      onClose: R ? void 0 : m,
      disableEscapeKeyDown: R,
      maxWidth: w,
      fullWidth: k,
      children: [
        g && /* @__PURE__ */ Ct.jsx("div", { children: g }),
        !g && /* @__PURE__ */ Ct.jsxs(Ct.Fragment, { children: [
          s && /* @__PURE__ */ Ct.jsx(JU, { ...s }),
          d && /* @__PURE__ */ Ct.jsx(IU, { ...d, children: d.children }),
          v && /* @__PURE__ */ Ct.jsxs(zU, { ...v, children: [
            /* @__PURE__ */ Ct.jsx(
              GR,
              {
                variant: "outlined",
                ...(M = v == null ? void 0 : v.cancel) == null ? void 0 : M.props,
                onClick: () => {
                  var F;
                  return (F = v == null ? void 0 : v.cancel) == null ? void 0 : F.callback(m);
                },
                children: ((N = v == null ? void 0 : v.cancel) == null ? void 0 : N.text) || "Cancel"
              }
            ),
            /* @__PURE__ */ Ct.jsx(
              GR,
              {
                variant: "contained",
                ...(A = v == null ? void 0 : v.ok) == null ? void 0 : A.props,
                onClick: () => {
                  var F;
                  return (F = v == null ? void 0 : v.ok) == null ? void 0 : F.callback(m);
                },
                children: ((V = v == null ? void 0 : v.ok) == null ? void 0 : V.text) || "Ok"
              }
            )
          ] })
        ] })
      ]
    }
  );
}, t3 = ae.memo(e3), n3 = (l, s) => {
  const [d, v] = ae.useState(!1), g = ae.useCallback(() => v(!0), []), S = ae.useCallback(() => v(!1), []);
  return ae.useImperativeHandle(
    s,
    () => ({
      isOpen: d,
      setIsOpen: v,
      handleOpen: g,
      handleClose: S
    }),
    [d, v, g, S]
  ), /* @__PURE__ */ Ct.jsx(
    t3,
    {
      ...l,
      isOpen: d,
      handleClose: S
    }
  );
}, u3 = ae.memo(
  ae.forwardRef(n3)
), r3 = (l) => /* @__PURE__ */ Ct.jsx(n_, { component: "footer", variant: "caption", ...l }), s3 = ae.memo(r3);
export {
  s3 as AdminAppFooter,
  t3 as BaseControlledDialog,
  u3 as BaseUncontrolledDialog
};
