! function(t) {
    var e = {};

    function r(n) {
        if (e[n]) return e[n].exports;
        var o = e[n] = {
            i: n,
            l: !1,
            exports: {}
        };
        return t[n].call(o.exports, o, o.exports, r), o.l = !0, o.exports
    }
    r.m = t, r.c = e, r.d = function(t, e, n) {
        r.o(t, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: n
        })
    }, r.r = function(t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }, r.t = function(t, e) {
        if (1 & e && (t = r(t)), 8 & e) return t;
        if (4 & e && "object" == typeof t && t && t.__esModule) return t;
        var n = Object.create(null);
        if (r.r(n), Object.defineProperty(n, "default", {
                enumerable: !0,
                value: t
            }), 2 & e && "string" != typeof t)
            for (var o in t) r.d(n, o, function(e) {
                return t[e]
            }.bind(null, o));
        return n
    }, r.n = function(t) {
        var e = t && t.__esModule ? function() {
            return t.default
        } : function() {
            return t
        };
        return r.d(e, "a", e), e
    }, r.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, r.p = "", r(r.s = 28)
}([function(t, e, r) {
    "use strict";
    var n = r(1),
        o = Object.prototype.toString;

    function i(t) {
        return "[object Array]" === o.call(t)
    }

    function a(t) {
        return void 0 === t
    }

    function s(t) {
        return null !== t && "object" == typeof t
    }

    function u(t) {
        return "[object Function]" === o.call(t)
    }

    function c(t, e) {
        if (null != t)
            if ("object" != typeof t && (t = [t]), i(t))
                for (var r = 0, n = t.length; r < n; r++) e.call(null, t[r], r, t);
            else
                for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && e.call(null, t[o], o, t)
    }
    t.exports = {
        isArray: i,
        isArrayBuffer: function(t) {
            return "[object ArrayBuffer]" === o.call(t)
        },
        isBuffer: function(t) {
            return null !== t && !a(t) && null !== t.constructor && !a(t.constructor) && "function" == typeof t.constructor.isBuffer && t.constructor.isBuffer(t)
        },
        isFormData: function(t) {
            return "undefined" != typeof FormData && t instanceof FormData
        },
        isArrayBufferView: function(t) {
            return "undefined" != typeof ArrayBuffer && ArrayBuffer.isView ? ArrayBuffer.isView(t) : t && t.buffer && t.buffer instanceof ArrayBuffer
        },
        isString: function(t) {
            return "string" == typeof t
        },
        isNumber: function(t) {
            return "number" == typeof t
        },
        isObject: s,
        isUndefined: a,
        isDate: function(t) {
            return "[object Date]" === o.call(t)
        },
        isFile: function(t) {
            return "[object File]" === o.call(t)
        },
        isBlob: function(t) {
            return "[object Blob]" === o.call(t)
        },
        isFunction: u,
        isStream: function(t) {
            return s(t) && u(t.pipe)
        },
        isURLSearchParams: function(t) {
            return "undefined" != typeof URLSearchParams && t instanceof URLSearchParams
        },
        isStandardBrowserEnv: function() {
            return ("undefined" == typeof navigator || "ReactNative" !== navigator.product && "NativeScript" !== navigator.product && "NS" !== navigator.product) && ("undefined" != typeof window && "undefined" != typeof document)
        },
        forEach: c,
        merge: function t() {
            var e = {};

            function r(r, n) {
                "object" == typeof e[n] && "object" == typeof r ? e[n] = t(e[n], r) : e[n] = r
            }
            for (var n = 0, o = arguments.length; n < o; n++) c(arguments[n], r);
            return e
        },
        deepMerge: function t() {
            var e = {};

            function r(r, n) {
                "object" == typeof e[n] && "object" == typeof r ? e[n] = t(e[n], r) : e[n] = "object" == typeof r ? t({}, r) : r
            }
            for (var n = 0, o = arguments.length; n < o; n++) c(arguments[n], r);
            return e
        },
        extend: function(t, e, r) {
            return c(e, (function(e, o) {
                t[o] = r && "function" == typeof e ? n(e, r) : e
            })), t
        },
        trim: function(t) {
            return t.replace(/^\s*/, "").replace(/\s*$/, "")
        }
    }
}, function(t, e, r) {
    "use strict";
    t.exports = function(t, e) {
        return function() {
            for (var r = new Array(arguments.length), n = 0; n < r.length; n++) r[n] = arguments[n];
            return t.apply(e, r)
        }
    }
}, function(t, e, r) {
    "use strict";
    var n = r(0);

    function o(t) {
        return encodeURIComponent(t).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]")
    }
    t.exports = function(t, e, r) {
        if (!e) return t;
        var i;
        if (r) i = r(e);
        else if (n.isURLSearchParams(e)) i = e.toString();
        else {
            var a = [];
            n.forEach(e, (function(t, e) {
                null != t && (n.isArray(t) ? e += "[]" : t = [t], n.forEach(t, (function(t) {
                    n.isDate(t) ? t = t.toISOString() : n.isObject(t) && (t = JSON.stringify(t)), a.push(o(e) + "=" + o(t))
                })))
            })), i = a.join("&")
        }
        if (i) {
            var s = t.indexOf("#"); - 1 !== s && (t = t.slice(0, s)), t += (-1 === t.indexOf("?") ? "?" : "&") + i
        }
        return t
    }
}, function(t, e, r) {
    "use strict";
    t.exports = function(t) {
        return !(!t || !t.__CANCEL__)
    }
}, function(t, e, r) {
    "use strict";
    (function(e) {
        var n = r(0),
            o = r(17),
            i = {
                "Content-Type": "application/x-www-form-urlencoded"
            };

        function a(t, e) {
            !n.isUndefined(t) && n.isUndefined(t["Content-Type"]) && (t["Content-Type"] = e)
        }
        var s, u = {
            adapter: (("undefined" != typeof XMLHttpRequest || void 0 !== e && "[object process]" === Object.prototype.toString.call(e)) && (s = r(5)), s),
            transformRequest: [function(t, e) {
                return o(e, "Accept"), o(e, "Content-Type"), n.isFormData(t) || n.isArrayBuffer(t) || n.isBuffer(t) || n.isStream(t) || n.isFile(t) || n.isBlob(t) ? t : n.isArrayBufferView(t) ? t.buffer : n.isURLSearchParams(t) ? (a(e, "application/x-www-form-urlencoded;charset=utf-8"), t.toString()) : n.isObject(t) ? (a(e, "application/json;charset=utf-8"), JSON.stringify(t)) : t
            }],
            transformResponse: [function(t) {
                if ("string" == typeof t) try {
                    t = JSON.parse(t)
                } catch (t) {}
                return t
            }],
            timeout: 0,
            xsrfCookieName: "XSRF-TOKEN",
            xsrfHeaderName: "X-XSRF-TOKEN",
            maxContentLength: -1,
            validateStatus: function(t) {
                return t >= 200 && t < 300
            }
        };
        u.headers = {
            common: {
                Accept: "application/json, text/plain, */*"
            }
        }, n.forEach(["delete", "get", "head"], (function(t) {
            u.headers[t] = {}
        })), n.forEach(["post", "put", "patch"], (function(t) {
            u.headers[t] = n.merge(i)
        })), t.exports = u
    }).call(this, r(16))
}, function(t, e, r) {
    "use strict";
    var n = r(0),
        o = r(18),
        i = r(2),
        a = r(20),
        s = r(23),
        u = r(24),
        c = r(6);
    t.exports = function(t) {
        return new Promise((function(e, f) {
            var l = t.data,
                p = t.headers;
            n.isFormData(l) && delete p["Content-Type"];
            var h = new XMLHttpRequest;
            if (t.auth) {
                var d = t.auth.username || "",
                    y = t.auth.password || "";
                p.Authorization = "Basic " + btoa(d + ":" + y)
            }
            var m = a(t.baseURL, t.url);
            if (h.open(t.method.toUpperCase(), i(m, t.params, t.paramsSerializer), !0), h.timeout = t.timeout, h.onreadystatechange = function() {
                    if (h && 4 === h.readyState && (0 !== h.status || h.responseURL && 0 === h.responseURL.indexOf("file:"))) {
                        var r = "getAllResponseHeaders" in h ? s(h.getAllResponseHeaders()) : null,
                            n = {
                                data: t.responseType && "text" !== t.responseType ? h.response : h.responseText,
                                status: h.status,
                                statusText: h.statusText,
                                headers: r,
                                config: t,
                                request: h
                            };
                        o(e, f, n), h = null
                    }
                }, h.onabort = function() {
                    h && (f(c("Request aborted", t, "ECONNABORTED", h)), h = null)
                }, h.onerror = function() {
                    f(c("Network Error", t, null, h)), h = null
                }, h.ontimeout = function() {
                    var e = "timeout of " + t.timeout + "ms exceeded";
                    t.timeoutErrorMessage && (e = t.timeoutErrorMessage), f(c(e, t, "ECONNABORTED", h)), h = null
                }, n.isStandardBrowserEnv()) {
                var v = r(25),
                    g = (t.withCredentials || u(m)) && t.xsrfCookieName ? v.read(t.xsrfCookieName) : void 0;
                g && (p[t.xsrfHeaderName] = g)
            }
            if ("setRequestHeader" in h && n.forEach(p, (function(t, e) {
                    void 0 === l && "content-type" === e.toLowerCase() ? delete p[e] : h.setRequestHeader(e, t)
                })), n.isUndefined(t.withCredentials) || (h.withCredentials = !!t.withCredentials), t.responseType) try {
                h.responseType = t.responseType
            } catch (e) {
                if ("json" !== t.responseType) throw e
            }
            "function" == typeof t.onDownloadProgress && h.addEventListener("progress", t.onDownloadProgress), "function" == typeof t.onUploadProgress && h.upload && h.upload.addEventListener("progress", t.onUploadProgress), t.cancelToken && t.cancelToken.promise.then((function(t) {
                h && (h.abort(), f(t), h = null)
            })), void 0 === l && (l = null), h.send(l)
        }))
    }
}, function(t, e, r) {
    "use strict";
    var n = r(19);
    t.exports = function(t, e, r, o, i) {
        var a = new Error(t);
        return n(a, e, r, o, i)
    }
}, function(t, e, r) {
    "use strict";
    var n = r(0);
    t.exports = function(t, e) {
        e = e || {};
        var r = {},
            o = ["url", "method", "params", "data"],
            i = ["headers", "auth", "proxy"],
            a = ["baseURL", "url", "transformRequest", "transformResponse", "paramsSerializer", "timeout", "withCredentials", "adapter", "responseType", "xsrfCookieName", "xsrfHeaderName", "onUploadProgress", "onDownloadProgress", "maxContentLength", "validateStatus", "maxRedirects", "httpAgent", "httpsAgent", "cancelToken", "socketPath"];
        n.forEach(o, (function(t) {
            void 0 !== e[t] && (r[t] = e[t])
        })), n.forEach(i, (function(o) {
            n.isObject(e[o]) ? r[o] = n.deepMerge(t[o], e[o]) : void 0 !== e[o] ? r[o] = e[o] : n.isObject(t[o]) ? r[o] = n.deepMerge(t[o]) : void 0 !== t[o] && (r[o] = t[o])
        })), n.forEach(a, (function(n) {
            void 0 !== e[n] ? r[n] = e[n] : void 0 !== t[n] && (r[n] = t[n])
        }));
        var s = o.concat(i).concat(a),
            u = Object.keys(e).filter((function(t) {
                return -1 === s.indexOf(t)
            }));
        return n.forEach(u, (function(n) {
            void 0 !== e[n] ? r[n] = e[n] : void 0 !== t[n] && (r[n] = t[n])
        })), r
    }
}, function(t, e, r) {
    "use strict";

    function n(t) {
        this.message = t
    }
    n.prototype.toString = function() {
        return "Cancel" + (this.message ? ": " + this.message : "")
    }, n.prototype.__CANCEL__ = !0, t.exports = n
}, function(t, e, r) {
    window,
    t.exports = function() {
        return r = {}, t.m = e = [function(t, e, r) {
            "use strict";
            var n = r(2),
                o = Object.prototype.toString;

            function i(t) {
                return "[object Array]" === o.call(t)
            }

            function a(t) {
                return void 0 === t
            }

            function s(t) {
                return null !== t && "object" == typeof t
            }

            function u(t) {
                return "[object Function]" === o.call(t)
            }

            function c(t, e) {
                if (null != t)
                    if ("object" != typeof t && (t = [t]), i(t))
                        for (var r = 0, n = t.length; r < n; r++) e.call(null, t[r], r, t);
                    else
                        for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && e.call(null, t[o], o, t)
            }
            t.exports = {
                isArray: i,
                isArrayBuffer: function(t) {
                    return "[object ArrayBuffer]" === o.call(t)
                },
                isBuffer: function(t) {
                    return null !== t && !a(t) && null !== t.constructor && !a(t.constructor) && "function" == typeof t.constructor.isBuffer && t.constructor.isBuffer(t)
                },
                isFormData: function(t) {
                    return "undefined" != typeof FormData && t instanceof FormData
                },
                isArrayBufferView: function(t) {
                    return "undefined" != typeof ArrayBuffer && ArrayBuffer.isView ? ArrayBuffer.isView(t) : t && t.buffer && t.buffer instanceof ArrayBuffer
                },
                isString: function(t) {
                    return "string" == typeof t
                },
                isNumber: function(t) {
                    return "number" == typeof t
                },
                isObject: s,
                isUndefined: a,
                isDate: function(t) {
                    return "[object Date]" === o.call(t)
                },
                isFile: function(t) {
                    return "[object File]" === o.call(t)
                },
                isBlob: function(t) {
                    return "[object Blob]" === o.call(t)
                },
                isFunction: u,
                isStream: function(t) {
                    return s(t) && u(t.pipe)
                },
                isURLSearchParams: function(t) {
                    return "undefined" != typeof URLSearchParams && t instanceof URLSearchParams
                },
                isStandardBrowserEnv: function() {
                    return ("undefined" == typeof navigator || "ReactNative" !== navigator.product && "NativeScript" !== navigator.product && "NS" !== navigator.product) && "undefined" != typeof window && "undefined" != typeof document
                },
                forEach: c,
                merge: function t() {
                    var e = {};

                    function r(r, n) {
                        "object" == typeof e[n] && "object" == typeof r ? e[n] = t(e[n], r) : e[n] = r
                    }
                    for (var n = 0, o = arguments.length; n < o; n++) c(arguments[n], r);
                    return e
                },
                deepMerge: function t() {
                    var e = {};

                    function r(r, n) {
                        "object" == typeof e[n] && "object" == typeof r ? e[n] = t(e[n], r) : e[n] = "object" == typeof r ? t({}, r) : r
                    }
                    for (var n = 0, o = arguments.length; n < o; n++) c(arguments[n], r);
                    return e
                },
                extend: function(t, e, r) {
                    return c(e, (function(e, o) {
                        t[o] = r && "function" == typeof e ? n(e, r) : e
                    })), t
                },
                trim: function(t) {
                    return t.replace(/^\s*/, "").replace(/\s*$/, "")
                }
            }
        }, function(t, e, r) {
            t.exports = r(13)
        }, function(t, e, r) {
            "use strict";
            t.exports = function(t, e) {
                return function() {
                    for (var r = new Array(arguments.length), n = 0; n < r.length; n++) r[n] = arguments[n];
                    return t.apply(e, r)
                }
            }
        }, function(t, e, r) {
            "use strict";
            var n = r(0);

            function o(t) {
                return encodeURIComponent(t).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]")
            }
            t.exports = function(t, e, r) {
                if (!e) return t;
                var i;
                if (r) i = r(e);
                else if (n.isURLSearchParams(e)) i = e.toString();
                else {
                    var a = [];
                    n.forEach(e, (function(t, e) {
                        null != t && (n.isArray(t) ? e += "[]" : t = [t], n.forEach(t, (function(t) {
                            n.isDate(t) ? t = t.toISOString() : n.isObject(t) && (t = JSON.stringify(t)), a.push(o(e) + "=" + o(t))
                        })))
                    })), i = a.join("&")
                }
                if (i) {
                    var s = t.indexOf("#"); - 1 !== s && (t = t.slice(0, s)), t += (-1 === t.indexOf("?") ? "?" : "&") + i
                }
                return t
            }
        }, function(t, e, r) {
            "use strict";
            t.exports = function(t) {
                return !(!t || !t.__CANCEL__)
            }
        }, function(t, e, r) {
            "use strict";
            (function(e) {
                var n = r(0),
                    o = r(20),
                    i = {
                        "Content-Type": "application/x-www-form-urlencoded"
                    };

                function a(t, e) {
                    !n.isUndefined(t) && n.isUndefined(t["Content-Type"]) && (t["Content-Type"] = e)
                }
                var s, u = {
                    adapter: (("undefined" != typeof XMLHttpRequest || void 0 !== e && "[object process]" === Object.prototype.toString.call(e)) && (s = r(6)), s),
                    transformRequest: [function(t, e) {
                        return o(e, "Accept"), o(e, "Content-Type"), n.isFormData(t) || n.isArrayBuffer(t) || n.isBuffer(t) || n.isStream(t) || n.isFile(t) || n.isBlob(t) ? t : n.isArrayBufferView(t) ? t.buffer : n.isURLSearchParams(t) ? (a(e, "application/x-www-form-urlencoded;charset=utf-8"), t.toString()) : n.isObject(t) ? (a(e, "application/json;charset=utf-8"), JSON.stringify(t)) : t
                    }],
                    transformResponse: [function(t) {
                        if ("string" == typeof t) try {
                            t = JSON.parse(t)
                        } catch (t) {}
                        return t
                    }],
                    timeout: 0,
                    xsrfCookieName: "XSRF-TOKEN",
                    xsrfHeaderName: "X-XSRF-TOKEN",
                    maxContentLength: -1,
                    validateStatus: function(t) {
                        return 200 <= t && t < 300
                    },
                    headers: {
                        common: {
                            Accept: "application/json, text/plain, */*"
                        }
                    }
                };
                n.forEach(["delete", "get", "head"], (function(t) {
                    u.headers[t] = {}
                })), n.forEach(["post", "put", "patch"], (function(t) {
                    u.headers[t] = n.merge(i)
                })), t.exports = u
            }).call(this, r(19))
        }, function(t, e, r) {
            "use strict";
            var n = r(0),
                o = r(21),
                i = r(3),
                a = r(23),
                s = r(26),
                u = r(27),
                c = r(7);
            t.exports = function(t) {
                return new Promise((function(e, f) {
                    var l = t.data,
                        p = t.headers;
                    n.isFormData(l) && delete p["Content-Type"];
                    var h = new XMLHttpRequest;
                    if (t.auth) {
                        var d = t.auth.username || "",
                            y = t.auth.password || "";
                        p.Authorization = "Basic " + btoa(d + ":" + y)
                    }
                    var m = a(t.baseURL, t.url);
                    if (h.open(t.method.toUpperCase(), i(m, t.params, t.paramsSerializer), !0), h.timeout = t.timeout, h.onreadystatechange = function() {
                            if (h && 4 === h.readyState && (0 !== h.status || h.responseURL && 0 === h.responseURL.indexOf("file:"))) {
                                var r = "getAllResponseHeaders" in h ? s(h.getAllResponseHeaders()) : null,
                                    n = {
                                        data: t.responseType && "text" !== t.responseType ? h.response : h.responseText,
                                        status: h.status,
                                        statusText: h.statusText,
                                        headers: r,
                                        config: t,
                                        request: h
                                    };
                                o(e, f, n), h = null
                            }
                        }, h.onabort = function() {
                            h && (f(c("Request aborted", t, "ECONNABORTED", h)), h = null)
                        }, h.onerror = function() {
                            f(c("Network Error", t, null, h)), h = null
                        }, h.ontimeout = function() {
                            var e = "timeout of " + t.timeout + "ms exceeded";
                            t.timeoutErrorMessage && (e = t.timeoutErrorMessage), f(c(e, t, "ECONNABORTED", h)), h = null
                        }, n.isStandardBrowserEnv()) {
                        var v = r(28),
                            g = (t.withCredentials || u(m)) && t.xsrfCookieName ? v.read(t.xsrfCookieName) : void 0;
                        g && (p[t.xsrfHeaderName] = g)
                    }
                    if ("setRequestHeader" in h && n.forEach(p, (function(t, e) {
                            void 0 === l && "content-type" === e.toLowerCase() ? delete p[e] : h.setRequestHeader(e, t)
                        })), n.isUndefined(t.withCredentials) || (h.withCredentials = !!t.withCredentials), t.responseType) try {
                        h.responseType = t.responseType
                    } catch (d) {
                        if ("json" !== t.responseType) throw d
                    }
                    "function" == typeof t.onDownloadProgress && h.addEventListener("progress", t.onDownloadProgress), "function" == typeof t.onUploadProgress && h.upload && h.upload.addEventListener("progress", t.onUploadProgress), t.cancelToken && t.cancelToken.promise.then((function(t) {
                        h && (h.abort(), f(t), h = null)
                    })), void 0 === l && (l = null), h.send(l)
                }))
            }
        }, function(t, e, r) {
            "use strict";
            var n = r(22);
            t.exports = function(t, e, r, o, i) {
                var a = new Error(t);
                return n(a, e, r, o, i)
            }
        }, function(t, e, r) {
            "use strict";
            var n = r(0);
            t.exports = function(t, e) {
                e = e || {};
                var r = {},
                    o = ["url", "method", "params", "data"],
                    i = ["headers", "auth", "proxy"],
                    a = ["baseURL", "url", "transformRequest", "transformResponse", "paramsSerializer", "timeout", "withCredentials", "adapter", "responseType", "xsrfCookieName", "xsrfHeaderName", "onUploadProgress", "onDownloadProgress", "maxContentLength", "validateStatus", "maxRedirects", "httpAgent", "httpsAgent", "cancelToken", "socketPath"];
                n.forEach(o, (function(t) {
                    void 0 !== e[t] && (r[t] = e[t])
                })), n.forEach(i, (function(o) {
                    n.isObject(e[o]) ? r[o] = n.deepMerge(t[o], e[o]) : void 0 !== e[o] ? r[o] = e[o] : n.isObject(t[o]) ? r[o] = n.deepMerge(t[o]) : void 0 !== t[o] && (r[o] = t[o])
                })), n.forEach(a, (function(n) {
                    void 0 !== e[n] ? r[n] = e[n] : void 0 !== t[n] && (r[n] = t[n])
                }));
                var s = o.concat(i).concat(a),
                    u = Object.keys(e).filter((function(t) {
                        return -1 === s.indexOf(t)
                    }));
                return n.forEach(u, (function(n) {
                    void 0 !== e[n] ? r[n] = e[n] : void 0 !== t[n] && (r[n] = t[n])
                })), r
            }
        }, function(t, e, r) {
            "use strict";

            function n(t) {
                this.message = t
            }
            n.prototype.toString = function() {
                return "Cancel" + (this.message ? ": " + this.message : "")
            }, n.prototype.__CANCEL__ = !0, t.exports = n
        }, function(t, e) {
            t.exports = function(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }
        }, function(t, e) {
            function r(t, e) {
                for (var r = 0; r < e.length; r++) {
                    var n = e[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }
            t.exports = function(t, e, n) {
                return e && r(t.prototype, e), n && r(t, n), t
            }
        }, function(t, e, r) {
            t.exports = r(14)
        }, function(t, e, r) {
            var n = function(t) {
                "use strict";
                var e, r = Object.prototype,
                    n = r.hasOwnProperty,
                    o = "function" == typeof Symbol ? Symbol : {},
                    i = o.iterator || "@@iterator",
                    a = o.asyncIterator || "@@asyncIterator",
                    s = o.toStringTag || "@@toStringTag";

                function u(t, e, r, n) {
                    var o, i, a, s, u = e && e.prototype instanceof y ? e : y,
                        m = Object.create(u.prototype),
                        v = new L(n || []);
                    return m._invoke = (o = t, i = r, a = v, s = f, function(t, e) {
                        if (s === p) throw new Error("Generator is already running");
                        if (s === h) {
                            if ("throw" === t) throw e;
                            return P()
                        }
                        for (a.method = t, a.arg = e;;) {
                            var r = a.delegate;
                            if (r) {
                                var n = T(r, a);
                                if (n) {
                                    if (n === d) continue;
                                    return n
                                }
                            }
                            if ("next" === a.method) a.sent = a._sent = a.arg;
                            else if ("throw" === a.method) {
                                if (s === f) throw s = h, a.arg;
                                a.dispatchException(a.arg)
                            } else "return" === a.method && a.abrupt("return", a.arg);
                            s = p;
                            var u = c(o, i, a);
                            if ("normal" === u.type) {
                                if (s = a.done ? h : l, u.arg === d) continue;
                                return {
                                    value: u.arg,
                                    done: a.done
                                }
                            }
                            "throw" === u.type && (s = h, a.method = "throw", a.arg = u.arg)
                        }
                    }), m
                }

                function c(t, e, r) {
                    try {
                        return {
                            type: "normal",
                            arg: t.call(e, r)
                        }
                    } catch (t) {
                        return {
                            type: "throw",
                            arg: t
                        }
                    }
                }
                t.wrap = u;
                var f = "suspendedStart",
                    l = "suspendedYield",
                    p = "executing",
                    h = "completed",
                    d = {};

                function y() {}

                function m() {}

                function v() {}
                var g = {};
                g[i] = function() {
                    return this
                };
                var w = Object.getPrototypeOf,
                    b = w && w(w(k([])));
                b && b !== r && n.call(b, i) && (g = b);
                var x = v.prototype = y.prototype = Object.create(g);

                function E(t) {
                    ["next", "throw", "return"].forEach((function(e) {
                        t[e] = function(t) {
                            return this._invoke(e, t)
                        }
                    }))
                }

                function S(t) {
                    var e;
                    this._invoke = function(r, o) {
                        function i() {
                            return new Promise((function(e, i) {
                                ! function e(r, o, i, a) {
                                    var s = c(t[r], t, o);
                                    if ("throw" !== s.type) {
                                        var u = s.arg,
                                            f = u.value;
                                        return f && "object" == typeof f && n.call(f, "__await") ? Promise.resolve(f.__await).then((function(t) {
                                            e("next", t, i, a)
                                        }), (function(t) {
                                            e("throw", t, i, a)
                                        })) : Promise.resolve(f).then((function(t) {
                                            u.value = t, i(u)
                                        }), (function(t) {
                                            return e("throw", t, i, a)
                                        }))
                                    }
                                    a(s.arg)
                                }(r, o, e, i)
                            }))
                        }
                        return e = e ? e.then(i, i) : i()
                    }
                }

                function T(t, r) {
                    var n = t.iterator[r.method];
                    if (n === e) {
                        if (r.delegate = null, "throw" === r.method) {
                            if (t.iterator.return && (r.method = "return", r.arg = e, T(t, r), "throw" === r.method)) return d;
                            r.method = "throw", r.arg = new TypeError("The iterator does not provide a 'throw' method")
                        }
                        return d
                    }
                    var o = c(n, t.iterator, r.arg);
                    if ("throw" === o.type) return r.method = "throw", r.arg = o.arg, r.delegate = null, d;
                    var i = o.arg;
                    return i ? i.done ? (r[t.resultName] = i.value, r.next = t.nextLoc, "return" !== r.method && (r.method = "next", r.arg = e), r.delegate = null, d) : i : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, d)
                }

                function j(t) {
                    var e = {
                        tryLoc: t[0]
                    };
                    1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e)
                }

                function O(t) {
                    var e = t.completion || {};
                    e.type = "normal", delete e.arg, t.completion = e
                }

                function L(t) {
                    this.tryEntries = [{
                        tryLoc: "root"
                    }], t.forEach(j, this), this.reset(!0)
                }

                function k(t) {
                    if (t) {
                        var r = t[i];
                        if (r) return r.call(t);
                        if ("function" == typeof t.next) return t;
                        if (!isNaN(t.length)) {
                            var o = -1,
                                a = function r() {
                                    for (; ++o < t.length;)
                                        if (n.call(t, o)) return r.value = t[o], r.done = !1, r;
                                    return r.value = e, r.done = !0, r
                                };
                            return a.next = a
                        }
                    }
                    return {
                        next: P
                    }
                }

                function P() {
                    return {
                        value: e,
                        done: !0
                    }
                }
                return m.prototype = x.constructor = v, v.constructor = m, v[s] = m.displayName = "GeneratorFunction", t.isGeneratorFunction = function(t) {
                    var e = "function" == typeof t && t.constructor;
                    return !!e && (e === m || "GeneratorFunction" === (e.displayName || e.name))
                }, t.mark = function(t) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(t, v) : (t.__proto__ = v, s in t || (t[s] = "GeneratorFunction")), t.prototype = Object.create(x), t
                }, t.awrap = function(t) {
                    return {
                        __await: t
                    }
                }, E(S.prototype), S.prototype[a] = function() {
                    return this
                }, t.AsyncIterator = S, t.async = function(e, r, n, o) {
                    var i = new S(u(e, r, n, o));
                    return t.isGeneratorFunction(r) ? i : i.next().then((function(t) {
                        return t.done ? t.value : i.next()
                    }))
                }, E(x), x[s] = "Generator", x[i] = function() {
                    return this
                }, x.toString = function() {
                    return "[object Generator]"
                }, t.keys = function(t) {
                    var e = [];
                    for (var r in t) e.push(r);
                    return e.reverse(),
                        function r() {
                            for (; e.length;) {
                                var n = e.pop();
                                if (n in t) return r.value = n, r.done = !1, r
                            }
                            return r.done = !0, r
                        }
                }, t.values = k, L.prototype = {
                    constructor: L,
                    reset: function(t) {
                        if (this.prev = 0, this.next = 0, this.sent = this._sent = e, this.done = !1, this.delegate = null, this.method = "next", this.arg = e, this.tryEntries.forEach(O), !t)
                            for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = e)
                    },
                    stop: function() {
                        this.done = !0;
                        var t = this.tryEntries[0].completion;
                        if ("throw" === t.type) throw t.arg;
                        return this.rval
                    },
                    dispatchException: function(t) {
                        if (this.done) throw t;
                        var r = this;

                        function o(n, o) {
                            return s.type = "throw", s.arg = t, r.next = n, o && (r.method = "next", r.arg = e), !!o
                        }
                        for (var i = this.tryEntries.length - 1; 0 <= i; --i) {
                            var a = this.tryEntries[i],
                                s = a.completion;
                            if ("root" === a.tryLoc) return o("end");
                            if (a.tryLoc <= this.prev) {
                                var u = n.call(a, "catchLoc"),
                                    c = n.call(a, "finallyLoc");
                                if (u && c) {
                                    if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
                                    if (this.prev < a.finallyLoc) return o(a.finallyLoc)
                                } else if (u) {
                                    if (this.prev < a.catchLoc) return o(a.catchLoc, !0)
                                } else {
                                    if (!c) throw new Error("try statement without catch or finally");
                                    if (this.prev < a.finallyLoc) return o(a.finallyLoc)
                                }
                            }
                        }
                    },
                    abrupt: function(t, e) {
                        for (var r = this.tryEntries.length - 1; 0 <= r; --r) {
                            var o = this.tryEntries[r];
                            if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                                var i = o;
                                break
                            }
                        }
                        i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
                        var a = i ? i.completion : {};
                        return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, d) : this.complete(a)
                    },
                    complete: function(t, e) {
                        if ("throw" === t.type) throw t.arg;
                        return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), d
                    },
                    finish: function(t) {
                        for (var e = this.tryEntries.length - 1; 0 <= e; --e) {
                            var r = this.tryEntries[e];
                            if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), O(r), d
                        }
                    },
                    catch: function(t) {
                        for (var e = this.tryEntries.length - 1; 0 <= e; --e) {
                            var r = this.tryEntries[e];
                            if (r.tryLoc === t) {
                                var n = r.completion;
                                if ("throw" === n.type) {
                                    var o = n.arg;
                                    O(r)
                                }
                                return o
                            }
                        }
                        throw new Error("illegal catch attempt")
                    },
                    delegateYield: function(t, r, n) {
                        return this.delegate = {
                            iterator: k(t),
                            resultName: r,
                            nextLoc: n
                        }, "next" === this.method && (this.arg = e), d
                    }
                }, t
            }(t.exports);
            try {
                regeneratorRuntime = n
            } catch (t) {
                Function("r", "regeneratorRuntime = r")(n)
            }
        }, function(t, e, r) {
            "use strict";
            var n = r(0),
                o = r(2),
                i = r(15),
                a = r(8);

            function s(t) {
                var e = new i(t),
                    r = o(i.prototype.request, e);
                return n.extend(r, i.prototype, e), n.extend(r, e), r
            }
            var u = s(r(5));
            u.Axios = i, u.create = function(t) {
                return s(a(u.defaults, t))
            }, u.Cancel = r(9), u.CancelToken = r(29), u.isCancel = r(4), u.all = function(t) {
                return Promise.all(t)
            }, u.spread = r(30), t.exports = u, t.exports.default = u
        }, function(t, e, r) {
            "use strict";
            var n = r(0),
                o = r(3),
                i = r(16),
                a = r(17),
                s = r(8);

            function u(t) {
                this.defaults = t, this.interceptors = {
                    request: new i,
                    response: new i
                }
            }
            u.prototype.request = function(t, e) {
                "string" == typeof t ? (t = e || {}).url = arguments[0] : t = t || {}, (t = s(this.defaults, t)).method ? t.method = t.method.toLowerCase() : this.defaults.method ? t.method = this.defaults.method.toLowerCase() : t.method = "get";
                var r = [a, void 0],
                    n = Promise.resolve(t);
                for (this.interceptors.request.forEach((function(t) {
                        r.unshift(t.fulfilled, t.rejected)
                    })), this.interceptors.response.forEach((function(t) {
                        r.push(t.fulfilled, t.rejected)
                    })); r.length;) n = n.then(r.shift(), r.shift());
                return n
            }, u.prototype.getUri = function(t) {
                return t = s(this.defaults, t), o(t.url, t.params, t.paramsSerializer).replace(/^\?/, "")
            }, n.forEach(["delete", "get", "head", "options"], (function(t) {
                u.prototype[t] = function(e, r) {
                    return this.request(n.merge(r || {}, {
                        method: t,
                        url: e
                    }))
                }
            })), n.forEach(["post", "put", "patch"], (function(t) {
                u.prototype[t] = function(e, r, o) {
                    return this.request(n.merge(o || {}, {
                        method: t,
                        url: e,
                        data: r
                    }))
                }
            })), t.exports = u
        }, function(t, e, r) {
            "use strict";
            var n = r(0);

            function o() {
                this.handlers = []
            }
            o.prototype.use = function(t, e) {
                return this.handlers.push({
                    fulfilled: t,
                    rejected: e
                }), this.handlers.length - 1
            }, o.prototype.eject = function(t) {
                this.handlers[t] && (this.handlers[t] = null)
            }, o.prototype.forEach = function(t) {
                n.forEach(this.handlers, (function(e) {
                    null !== e && t(e)
                }))
            }, t.exports = o
        }, function(t, e, r) {
            "use strict";
            var n = r(0),
                o = r(18),
                i = r(4),
                a = r(5);

            function s(t) {
                t.cancelToken && t.cancelToken.throwIfRequested()
            }
            t.exports = function(t) {
                return s(t), t.headers = t.headers || {}, t.data = o(t.data, t.headers, t.transformRequest), t.headers = n.merge(t.headers.common || {}, t.headers[t.method] || {}, t.headers), n.forEach(["delete", "get", "head", "post", "put", "patch", "common"], (function(e) {
                    delete t.headers[e]
                })), (t.adapter || a.adapter)(t).then((function(e) {
                    return s(t), e.data = o(e.data, e.headers, t.transformResponse), e
                }), (function(e) {
                    return i(e) || (s(t), e && e.response && (e.response.data = o(e.response.data, e.response.headers, t.transformResponse))), Promise.reject(e)
                }))
            }
        }, function(t, e, r) {
            "use strict";
            var n = r(0);
            t.exports = function(t, e, r) {
                return n.forEach(r, (function(r) {
                    t = r(t, e)
                })), t
            }
        }, function(t, e) {
            var r, n, o = t.exports = {};

            function i() {
                throw new Error("setTimeout has not been defined")
            }

            function a() {
                throw new Error("clearTimeout has not been defined")
            }

            function s(t) {
                if (r === setTimeout) return setTimeout(t, 0);
                if ((r === i || !r) && setTimeout) return r = setTimeout, setTimeout(t, 0);
                try {
                    return r(t, 0)
                } catch (e) {
                    try {
                        return r.call(null, t, 0)
                    } catch (e) {
                        return r.call(this, t, 0)
                    }
                }
            }! function() {
                try {
                    r = "function" == typeof setTimeout ? setTimeout : i
                } catch (t) {
                    r = i
                }
                try {
                    n = "function" == typeof clearTimeout ? clearTimeout : a
                } catch (t) {
                    n = a
                }
            }();
            var u, c = [],
                f = !1,
                l = -1;

            function p() {
                f && u && (f = !1, u.length ? c = u.concat(c) : l = -1, c.length && h())
            }

            function h() {
                if (!f) {
                    var t = s(p);
                    f = !0;
                    for (var e = c.length; e;) {
                        for (u = c, c = []; ++l < e;) u && u[l].run();
                        l = -1, e = c.length
                    }
                    u = null, f = !1,
                        function(t) {
                            if (n === clearTimeout) return clearTimeout(t);
                            if ((n === a || !n) && clearTimeout) return n = clearTimeout, clearTimeout(t);
                            try {
                                n(t)
                            } catch (e) {
                                try {
                                    return n.call(null, t)
                                } catch (e) {
                                    return n.call(this, t)
                                }
                            }
                        }(t)
                }
            }

            function d(t, e) {
                this.fun = t, this.array = e
            }

            function y() {}
            o.nextTick = function(t) {
                var e = new Array(arguments.length - 1);
                if (1 < arguments.length)
                    for (var r = 1; r < arguments.length; r++) e[r - 1] = arguments[r];
                c.push(new d(t, e)), 1 !== c.length || f || s(h)
            }, d.prototype.run = function() {
                this.fun.apply(null, this.array)
            }, o.title = "browser", o.browser = !0, o.env = {}, o.argv = [], o.version = "", o.versions = {}, o.on = y, o.addListener = y, o.once = y, o.off = y, o.removeListener = y, o.removeAllListeners = y, o.emit = y, o.prependListener = y, o.prependOnceListener = y, o.listeners = function(t) {
                return []
            }, o.binding = function(t) {
                throw new Error("process.binding is not supported")
            }, o.cwd = function() {
                return "/"
            }, o.chdir = function(t) {
                throw new Error("process.chdir is not supported")
            }, o.umask = function() {
                return 0
            }
        }, function(t, e, r) {
            "use strict";
            var n = r(0);
            t.exports = function(t, e) {
                n.forEach(t, (function(r, n) {
                    n !== e && n.toUpperCase() === e.toUpperCase() && (t[e] = r, delete t[n])
                }))
            }
        }, function(t, e, r) {
            "use strict";
            var n = r(7);
            t.exports = function(t, e, r) {
                var o = r.config.validateStatus;
                !o || o(r.status) ? t(r) : e(n("Request failed with status code " + r.status, r.config, null, r.request, r))
            }
        }, function(t, e, r) {
            "use strict";
            t.exports = function(t, e, r, n, o) {
                return t.config = e, r && (t.code = r), t.request = n, t.response = o, t.isAxiosError = !0, t.toJSON = function() {
                    return {
                        message: this.message,
                        name: this.name,
                        description: this.description,
                        number: this.number,
                        fileName: this.fileName,
                        lineNumber: this.lineNumber,
                        columnNumber: this.columnNumber,
                        stack: this.stack,
                        config: this.config,
                        code: this.code
                    }
                }, t
            }
        }, function(t, e, r) {
            "use strict";
            var n = r(24),
                o = r(25);
            t.exports = function(t, e) {
                return t && !n(e) ? o(t, e) : e
            }
        }, function(t, e, r) {
            "use strict";
            t.exports = function(t) {
                return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(t)
            }
        }, function(t, e, r) {
            "use strict";
            t.exports = function(t, e) {
                return e ? t.replace(/\/+$/, "") + "/" + e.replace(/^\/+/, "") : t
            }
        }, function(t, e, r) {
            "use strict";
            var n = r(0),
                o = ["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"];
            t.exports = function(t) {
                var e, r, i, a = {};
                return t && n.forEach(t.split("\n"), (function(t) {
                    if (i = t.indexOf(":"), e = n.trim(t.substr(0, i)).toLowerCase(), r = n.trim(t.substr(i + 1)), e) {
                        if (a[e] && 0 <= o.indexOf(e)) return;
                        a[e] = "set-cookie" === e ? (a[e] ? a[e] : []).concat([r]) : a[e] ? a[e] + ", " + r : r
                    }
                })), a
            }
        }, function(t, e, r) {
            "use strict";
            var n, o, i, a = r(0);

            function s(t) {
                var e = t;
                return o && (i.setAttribute("href", e), e = i.href), i.setAttribute("href", e), {
                    href: i.href,
                    protocol: i.protocol ? i.protocol.replace(/:$/, "") : "",
                    host: i.host,
                    search: i.search ? i.search.replace(/^\?/, "") : "",
                    hash: i.hash ? i.hash.replace(/^#/, "") : "",
                    hostname: i.hostname,
                    port: i.port,
                    pathname: "/" === i.pathname.charAt(0) ? i.pathname : "/" + i.pathname
                }
            }
            t.exports = a.isStandardBrowserEnv() ? (o = /(msie|trident)/i.test(navigator.userAgent), i = document.createElement("a"), n = s(window.location.href), function(t) {
                var e = a.isString(t) ? s(t) : t;
                return e.protocol === n.protocol && e.host === n.host
            }) : function() {
                return !0
            }
        }, function(t, e, r) {
            "use strict";
            var n = r(0);
            t.exports = n.isStandardBrowserEnv() ? {
                write: function(t, e, r, o, i, a) {
                    var s = [];
                    s.push(t + "=" + encodeURIComponent(e)), n.isNumber(r) && s.push("expires=" + new Date(r).toGMTString()), n.isString(o) && s.push("path=" + o), n.isString(i) && s.push("domain=" + i), !0 === a && s.push("secure"), document.cookie = s.join("; ")
                },
                read: function(t) {
                    var e = document.cookie.match(new RegExp("(^|;\\s*)(" + t + ")=([^;]*)"));
                    return e ? decodeURIComponent(e[3]) : null
                },
                remove: function(t) {
                    this.write(t, "", Date.now() - 864e5)
                }
            } : {
                write: function() {},
                read: function() {
                    return null
                },
                remove: function() {}
            }
        }, function(t, e, r) {
            "use strict";
            var n = r(9);

            function o(t) {
                if ("function" != typeof t) throw new TypeError("executor must be a function.");
                var e;
                this.promise = new Promise((function(t) {
                    e = t
                }));
                var r = this;
                t((function(t) {
                    r.reason || (r.reason = new n(t), e(r.reason))
                }))
            }
            o.prototype.throwIfRequested = function() {
                if (this.reason) throw this.reason
            }, o.source = function() {
                var t;
                return {
                    token: new o((function(e) {
                        t = e
                    })),
                    cancel: t
                }
            }, t.exports = o
        }, function(t, e, r) {
            "use strict";
            t.exports = function(t) {
                return function(e) {
                    return t.apply(null, e)
                }
            }
        }, function(t, e, r) {
            "use strict";
            r.r(e);
            var n = r(1),
                o = r.n(n),
                i = r(10),
                a = r.n(i),
                s = r(11),
                u = r.n(s),
                c = r(12),
                f = r.n(c),
                l = function(t) {
                    for (var e = null, r = [], n = window.location.search.substr(1).split("&"), o = 0; o < n.length; o++) "customer" === (r = n[o].split("="))[0] && (e = decodeURIComponent(r[1]));
                    return e
                }(),
                p = function(t, e) {
                    var r = 0 < arguments.length && void 0 !== t ? t : null,
                        n = 1 < arguments.length && void 0 !== e ? e : null;
                    n && (l = n);
                    var o = "/pay/".concat(l);
                    return r && (o = r + o), f.a.create({
                        baseURL: o
                    })
                };
            r.d(e, "default", (function() {
                return d
            }));
            var h = function(t, e, r, n) {
                    return new(r = r || Promise)((function(o, i) {
                        function a(t) {
                            try {
                                u(n.next(t))
                            } catch (t) {
                                i(t)
                            }
                        }

                        function s(t) {
                            try {
                                u(n.throw(t))
                            } catch (t) {
                                i(t)
                            }
                        }

                        function u(t) {
                            var e;
                            t.done ? o(t.value) : ((e = t.value) instanceof r ? e : new r((function(t) {
                                t(e)
                            }))).then(a, s)
                        }
                        u((n = n.apply(t, e || [])).next())
                    }))
                },
                d = function() {
                    function t(e, r, n) {
                        var o = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null,
                            i = 4 < arguments.length && void 0 !== arguments[4] ? arguments[4] : null,
                            s = 5 < arguments.length && void 0 !== arguments[5] ? arguments[5] : null;
                        a()(this, t), this.paymentData = e, this.merchantIdentifier = r, this.resultCallback = n, this.apiOrigin = o, this.payTokenFromClient = i, this.clientToken = s, this.pst = "apple_pay", this.ps = "APPLEPAYEPAYKZT", this.ERROR_APPLEPAY = "ÐÐµ ÑƒÐ´Ð°Ð»Ð¾ÑÑŒ Ð¾Ð¿Ð»Ð°Ñ‚Ð¸Ñ‚ÑŒ Ñ‡ÐµÑ€ÐµÐ· APPLE PAY", this.STATUS_SUCCESS = "ok", this.STATUS_FAILURE = "error"
                    }
                    return u()(t, [{
                        key: "exists",
                        value: function() {
                            return h(this, void 0, void 0, o.a.mark((function t() {
                                var e;
                                return o.a.wrap((function(t) {
                                    for (;;) switch (t.prev = t.next) {
                                        case 0:
                                            return t.prev = 0, t.next = 3, window.ApplePaySession.canMakePaymentsWithActiveCard(this.merchantIdentifier);
                                        case 3:
                                            return e = t.sent, t.abrupt("return", e);
                                        case 7:
                                            return t.prev = 7, t.t0 = t.catch(0), t.abrupt("return", !1);
                                        case 10:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t, this, [
                                    [0, 7]
                                ])
                            })))
                        }
                    }, {
                        key: "checkout",
                        value: function() {
                            try {
                                this.applePaySession = new window.ApplePaySession(1, this.paymentData), this.applePaySession.onvalidatemerchant = this.validateMerchant.bind(this), this.applePaySession.onpaymentauthorized = this.paymentAuthorize.bind(this), this.applePaySession.begin()
                            } catch (t) {
                                this.triggerError(t)
                            }
                        }
                    }, {
                        key: "validateMerchant",
                        value: function(t) {
                            return h(this, void 0, void 0, o.a.mark((function e() {
                                var r;
                                return o.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.prev = 0, e.next = 3, this.performValidation(t.validationURL);
                                        case 3:
                                            if ((r = e.sent) && r.data) {
                                                e.next = 6;
                                                break
                                            }
                                            throw new Error(this.ERROR_APPLEPAY);
                                        case 6:
                                            this.applePaySession.completeMerchantValidation(r.data), e.next = 12;
                                            break;
                                        case 9:
                                            e.prev = 9, e.t0 = e.catch(0), this.triggerError(e.t0);
                                        case 12:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this, [
                                    [0, 9]
                                ])
                            })))
                        }
                    }, {
                        key: "performValidation",
                        value: function(t) {
                            return h(this, void 0, void 0, o.a.mark((function e() {
                                var r;
                                return o.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return r = {
                                                "validate-url": t,
                                                domain: window.location.hostname
                                            }, this.clientToken && (r.token = this.clientToken), e.abrupt("return", p(this.apiOrigin, this.payTokenFromClient).post("applepay/validate", r));
                                        case 3:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this)
                            })))
                        }
                    }, {
                        key: "paymentAuthorize",
                        value: function(t) {
                            return h(this, void 0, void 0, o.a.mark((function e() {
                                var r, n, i, a;
                                return o.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.prev = 0, r = t.payment.token.paymentData.header, n = {
                                                paymentID: t.payment.token.transactionIdentifier,
                                                paymentTransactionEncryption: t.payment.token.paymentData.version,
                                                paymentData: t.payment.token.paymentData.data,
                                                paymentSignature: t.payment.token.paymentData.signature,
                                                paymentTransactionHeader: r,
                                                paymentEphemeralPublicKey: r.ephemeralPublicKey,
                                                paymentPublicKeyHash: r.publicKeyHash,
                                                paymentTransactionId: r.transactionId,
                                                paymentApplicationData: r.applicationData
                                            }, e.next = 5, this.processPayment(n);
                                        case 5:
                                            if ((i = e.sent) && i.data.data && i.data.data.status) {
                                                e.next = 8;
                                                break
                                            }
                                            throw new Error(this.ERROR_APPLEPAY);
                                        case 8:
                                            a = i.data.data.status === this.STATUS_SUCCESS ? this.applePaySession.STATUS_SUCCESS : this.applePaySession.STATUS_FAILURE, this.applePaySession.completePayment(a), this.resultCallback(this.STATUS_SUCCESS, i.data.data), e.next = 16;
                                            break;
                                        case 13:
                                            e.prev = 13, e.t0 = e.catch(0), this.triggerError(e.t0);
                                        case 16:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this, [
                                    [0, 13]
                                ])
                            })))
                        }
                    }, {
                        key: "processPayment",
                        value: function(t) {
                            return h(this, void 0, void 0, o.a.mark((function e() {
                                var r;
                                return o.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return r = Object.assign(Object.assign({}, t), {
                                                type: this.pst,
                                                paymentSystem: this.ps,
                                                domain: window.location.hostname
                                            }), this.clientToken && (r.token = this.clientToken), e.abrupt("return", p(this.apiOrigin, this.payTokenFromClient).post("pay", r));
                                        case 3:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this)
                            })))
                        }
                    }, {
                        key: "triggerError",
                        value: function(t) {
                            this.applePaySession && this.applePaySession.abort(), this.resultCallback(this.STATUS_FAILURE, t)
                        }
                    }]), t
                }()
        }], t.c = r, t.d = function(e, r, n) {
            t.o(e, r) || Object.defineProperty(e, r, {
                enumerable: !0,
                get: n
            })
        }, t.r = function(t) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
                value: "Module"
            }), Object.defineProperty(t, "__esModule", {
                value: !0
            })
        }, t.t = function(e, r) {
            if (1 & r && (e = t(e)), 8 & r) return e;
            if (4 & r && "object" == typeof e && e && e.__esModule) return e;
            var n = Object.create(null);
            if (t.r(n), Object.defineProperty(n, "default", {
                    enumerable: !0,
                    value: e
                }), 2 & r && "string" != typeof e)
                for (var o in e) t.d(n, o, function(t) {
                    return e[t]
                }.bind(null, o));
            return n
        }, t.n = function(e) {
            var r = e && e.__esModule ? function() {
                return e.default
            } : function() {
                return e
            };
            return t.d(r, "a", r), r
        }, t.o = function(t, e) {
            return Object.prototype.hasOwnProperty.call(t, e)
        }, t.p = "", t(t.s = 31);

        function t(n) {
            if (r[n]) return r[n].exports;
            var o = r[n] = {
                i: n,
                l: !1,
                exports: {}
            };
            return e[n].call(o.exports, o, o.exports, t), o.l = !0, o.exports
        }
        var e, r
    }()
}, function(t, e, r) {
    t.exports = r(11)
}, function(t, e, r) {
    "use strict";
    var n = r(0),
        o = r(1),
        i = r(12),
        a = r(7);

    function s(t) {
        var e = new i(t),
            r = o(i.prototype.request, e);
        return n.extend(r, i.prototype, e), n.extend(r, e), r
    }
    var u = s(r(4));
    u.Axios = i, u.create = function(t) {
        return s(a(u.defaults, t))
    }, u.Cancel = r(8), u.CancelToken = r(26), u.isCancel = r(3), u.all = function(t) {
        return Promise.all(t)
    }, u.spread = r(27), t.exports = u, t.exports.default = u
}, function(t, e, r) {
    "use strict";
    var n = r(0),
        o = r(2),
        i = r(13),
        a = r(14),
        s = r(7);

    function u(t) {
        this.defaults = t, this.interceptors = {
            request: new i,
            response: new i
        }
    }
    u.prototype.request = function(t) {
        "string" == typeof t ? (t = arguments[1] || {}).url = arguments[0] : t = t || {}, (t = s(this.defaults, t)).method ? t.method = t.method.toLowerCase() : this.defaults.method ? t.method = this.defaults.method.toLowerCase() : t.method = "get";
        var e = [a, void 0],
            r = Promise.resolve(t);
        for (this.interceptors.request.forEach((function(t) {
                e.unshift(t.fulfilled, t.rejected)
            })), this.interceptors.response.forEach((function(t) {
                e.push(t.fulfilled, t.rejected)
            })); e.length;) r = r.then(e.shift(), e.shift());
        return r
    }, u.prototype.getUri = function(t) {
        return t = s(this.defaults, t), o(t.url, t.params, t.paramsSerializer).replace(/^\?/, "")
    }, n.forEach(["delete", "get", "head", "options"], (function(t) {
        u.prototype[t] = function(e, r) {
            return this.request(n.merge(r || {}, {
                method: t,
                url: e
            }))
        }
    })), n.forEach(["post", "put", "patch"], (function(t) {
        u.prototype[t] = function(e, r, o) {
            return this.request(n.merge(o || {}, {
                method: t,
                url: e,
                data: r
            }))
        }
    })), t.exports = u
}, function(t, e, r) {
    "use strict";
    var n = r(0);

    function o() {
        this.handlers = []
    }
    o.prototype.use = function(t, e) {
        return this.handlers.push({
            fulfilled: t,
            rejected: e
        }), this.handlers.length - 1
    }, o.prototype.eject = function(t) {
        this.handlers[t] && (this.handlers[t] = null)
    }, o.prototype.forEach = function(t) {
        n.forEach(this.handlers, (function(e) {
            null !== e && t(e)
        }))
    }, t.exports = o
}, function(t, e, r) {
    "use strict";
    var n = r(0),
        o = r(15),
        i = r(3),
        a = r(4);

    function s(t) {
        t.cancelToken && t.cancelToken.throwIfRequested()
    }
    t.exports = function(t) {
        return s(t), t.headers = t.headers || {}, t.data = o(t.data, t.headers, t.transformRequest), t.headers = n.merge(t.headers.common || {}, t.headers[t.method] || {}, t.headers), n.forEach(["delete", "get", "head", "post", "put", "patch", "common"], (function(e) {
            delete t.headers[e]
        })), (t.adapter || a.adapter)(t).then((function(e) {
            return s(t), e.data = o(e.data, e.headers, t.transformResponse), e
        }), (function(e) {
            return i(e) || (s(t), e && e.response && (e.response.data = o(e.response.data, e.response.headers, t.transformResponse))), Promise.reject(e)
        }))
    }
}, function(t, e, r) {
    "use strict";
    var n = r(0);
    t.exports = function(t, e, r) {
        return n.forEach(r, (function(r) {
            t = r(t, e)
        })), t
    }
}, function(t, e) {
    var r, n, o = t.exports = {};

    function i() {
        throw new Error("setTimeout has not been defined")
    }

    function a() {
        throw new Error("clearTimeout has not been defined")
    }

    function s(t) {
        if (r === setTimeout) return setTimeout(t, 0);
        if ((r === i || !r) && setTimeout) return r = setTimeout, setTimeout(t, 0);
        try {
            return r(t, 0)
        } catch (e) {
            try {
                return r.call(null, t, 0)
            } catch (e) {
                return r.call(this, t, 0)
            }
        }
    }! function() {
        try {
            r = "function" == typeof setTimeout ? setTimeout : i
        } catch (t) {
            r = i
        }
        try {
            n = "function" == typeof clearTimeout ? clearTimeout : a
        } catch (t) {
            n = a
        }
    }();
    var u, c = [],
        f = !1,
        l = -1;

    function p() {
        f && u && (f = !1, u.length ? c = u.concat(c) : l = -1, c.length && h())
    }

    function h() {
        if (!f) {
            var t = s(p);
            f = !0;
            for (var e = c.length; e;) {
                for (u = c, c = []; ++l < e;) u && u[l].run();
                l = -1, e = c.length
            }
            u = null, f = !1,
                function(t) {
                    if (n === clearTimeout) return clearTimeout(t);
                    if ((n === a || !n) && clearTimeout) return n = clearTimeout, clearTimeout(t);
                    try {
                        n(t)
                    } catch (e) {
                        try {
                            return n.call(null, t)
                        } catch (e) {
                            return n.call(this, t)
                        }
                    }
                }(t)
        }
    }

    function d(t, e) {
        this.fun = t, this.array = e
    }

    function y() {}
    o.nextTick = function(t) {
        var e = new Array(arguments.length - 1);
        if (arguments.length > 1)
            for (var r = 1; r < arguments.length; r++) e[r - 1] = arguments[r];
        c.push(new d(t, e)), 1 !== c.length || f || s(h)
    }, d.prototype.run = function() {
        this.fun.apply(null, this.array)
    }, o.title = "browser", o.browser = !0, o.env = {}, o.argv = [], o.version = "", o.versions = {}, o.on = y, o.addListener = y, o.once = y, o.off = y, o.removeListener = y, o.removeAllListeners = y, o.emit = y, o.prependListener = y, o.prependOnceListener = y, o.listeners = function(t) {
        return []
    }, o.binding = function(t) {
        throw new Error("process.binding is not supported")
    }, o.cwd = function() {
        return "/"
    }, o.chdir = function(t) {
        throw new Error("process.chdir is not supported")
    }, o.umask = function() {
        return 0
    }
}, function(t, e, r) {
    "use strict";
    var n = r(0);
    t.exports = function(t, e) {
        n.forEach(t, (function(r, n) {
            n !== e && n.toUpperCase() === e.toUpperCase() && (t[e] = r, delete t[n])
        }))
    }
}, function(t, e, r) {
    "use strict";
    var n = r(6);
    t.exports = function(t, e, r) {
        var o = r.config.validateStatus;
        !o || o(r.status) ? t(r) : e(n("Request failed with status code " + r.status, r.config, null, r.request, r))
    }
}, function(t, e, r) {
    "use strict";
    t.exports = function(t, e, r, n, o) {
        return t.config = e, r && (t.code = r), t.request = n, t.response = o, t.isAxiosError = !0, t.toJSON = function() {
            return {
                message: this.message,
                name: this.name,
                description: this.description,
                number: this.number,
                fileName: this.fileName,
                lineNumber: this.lineNumber,
                columnNumber: this.columnNumber,
                stack: this.stack,
                config: this.config,
                code: this.code
            }
        }, t
    }
}, function(t, e, r) {
    "use strict";
    var n = r(21),
        o = r(22);
    t.exports = function(t, e) {
        return t && !n(e) ? o(t, e) : e
    }
}, function(t, e, r) {
    "use strict";
    t.exports = function(t) {
        return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(t)
    }
}, function(t, e, r) {
    "use strict";
    t.exports = function(t, e) {
        return e ? t.replace(/\/+$/, "") + "/" + e.replace(/^\/+/, "") : t
    }
}, function(t, e, r) {
    "use strict";
    var n = r(0),
        o = ["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"];
    t.exports = function(t) {
        var e, r, i, a = {};
        return t ? (n.forEach(t.split("\n"), (function(t) {
            if (i = t.indexOf(":"), e = n.trim(t.substr(0, i)).toLowerCase(), r = n.trim(t.substr(i + 1)), e) {
                if (a[e] && o.indexOf(e) >= 0) return;
                a[e] = "set-cookie" === e ? (a[e] ? a[e] : []).concat([r]) : a[e] ? a[e] + ", " + r : r
            }
        })), a) : a
    }
}, function(t, e, r) {
    "use strict";
    var n = r(0);
    t.exports = n.isStandardBrowserEnv() ? function() {
        var t, e = /(msie|trident)/i.test(navigator.userAgent),
            r = document.createElement("a");

        function o(t) {
            var n = t;
            return e && (r.setAttribute("href", n), n = r.href), r.setAttribute("href", n), {
                href: r.href,
                protocol: r.protocol ? r.protocol.replace(/:$/, "") : "",
                host: r.host,
                search: r.search ? r.search.replace(/^\?/, "") : "",
                hash: r.hash ? r.hash.replace(/^#/, "") : "",
                hostname: r.hostname,
                port: r.port,
                pathname: "/" === r.pathname.charAt(0) ? r.pathname : "/" + r.pathname
            }
        }
        return t = o(window.location.href),
            function(e) {
                var r = n.isString(e) ? o(e) : e;
                return r.protocol === t.protocol && r.host === t.host
            }
    }() : function() {
        return !0
    }
}, function(t, e, r) {
    "use strict";
    var n = r(0);
    t.exports = n.isStandardBrowserEnv() ? {
        write: function(t, e, r, o, i, a) {
            var s = [];
            s.push(t + "=" + encodeURIComponent(e)), n.isNumber(r) && s.push("expires=" + new Date(r).toGMTString()), n.isString(o) && s.push("path=" + o), n.isString(i) && s.push("domain=" + i), !0 === a && s.push("secure"), document.cookie = s.join("; ")
        },
        read: function(t) {
            var e = document.cookie.match(new RegExp("(^|;\\s*)(" + t + ")=([^;]*)"));
            return e ? decodeURIComponent(e[3]) : null
        },
        remove: function(t) {
            this.write(t, "", Date.now() - 864e5)
        }
    } : {
        write: function() {},
        read: function() {
            return null
        },
        remove: function() {}
    }
}, function(t, e, r) {
    "use strict";
    var n = r(8);

    function o(t) {
        if ("function" != typeof t) throw new TypeError("executor must be a function.");
        var e;
        this.promise = new Promise((function(t) {
            e = t
        }));
        var r = this;
        t((function(t) {
            r.reason || (r.reason = new n(t), e(r.reason))
        }))
    }
    o.prototype.throwIfRequested = function() {
        if (this.reason) throw this.reason
    }, o.source = function() {
        var t;
        return {
            token: new o((function(e) {
                t = e
            })),
            cancel: t
        }
    }, t.exports = o
}, function(t, e, r) {
    "use strict";
    t.exports = function(t) {
        return function(e) {
            return t.apply(null, e)
        }
    }
}, function(t, e, r) {
    "use strict";
    r.r(e);
    var n = r(9),
        o = r.n(n);

    function i(t) {
        return (i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }

    function a(t, e) {
        for (var r = 0; r < e.length; r++) {
            var n = e[r];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, (o = n.key, a = void 0, a = function(t, e) {
                if ("object" !== i(t) || null === t) return t;
                var r = t[Symbol.toPrimitive];
                if (void 0 !== r) {
                    var n = r.call(t, e || "default");
                    if ("object" !== i(n)) return n;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return ("string" === e ? String : Number)(t)
            }(o, "string"), "symbol" === i(a) ? a : String(a)), n)
        }
        var o, a
    }
    var s = function() {
            function t() {
                ! function(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, t), this.el = null
            }
            var e, r, n;
            return e = t, (r = [{
                key: "render",
                value: function(t) {
                    var e = document.createElement("button");
                    e.setAttribute("style", "-webkit-appearance: -apple-pay-button;"), document.getElementById(t).appendChild(e), this.el = e
                }
            }]) && a(e.prototype, r), n && a(e, n), Object.defineProperty(e, "prototype", {
                writable: !1
            }), t
        }(),
        u = "ÐÐµÐ´Ð¾ÑÑ‚Ð°Ñ‚Ð¾Ñ‡Ð½Ð¾ Ð´Ð°Ð½Ð½Ñ‹Ñ… Ð´Ð»Ñ Ð¸Ð½Ð¸Ñ†Ð¸Ð°Ð»Ð¸Ð·Ð°Ñ†Ð¸Ð¸ Ð¿Ð»Ð°Ñ‚ÐµÐ¶Ð°",
        c = "Ð£ÑÑ‚Ñ€Ð¾Ð¹ÑÑ‚Ð²Ð¾ Ð½Ðµ Ð¿Ð¾Ð´Ð´ÐµÑ€Ð¶Ð¸Ð²Ð°ÐµÑ‚ Ð´Ð°Ð½Ð½Ñ‹Ð¹ Ð¿Ð»Ð°Ñ‚ÐµÐ¶Ð½Ñ‹Ð¹ Ð¼ÐµÑ‚Ð¾Ð´",
        f = "ÐŸÑ€Ð¾Ð¸Ð·Ð¾ÑˆÐ»Ð° Ð¾ÑˆÐ¸Ð±ÐºÐ° Ð¿Ñ€Ð¸ Ð¸Ð½Ð¸Ñ†Ð¸Ð°Ð»Ð¸Ð·Ð°Ñ†Ð¸Ð¸ Ð¿Ð»Ð°Ñ‚ÐµÐ¶Ð°, Ð¾Ð±Ñ€Ð°Ñ‚Ð¸Ñ‚ÐµÑÑŒ Ðº Ð²Ð°ÑˆÐµÐ¼Ñƒ Ð¿ÐµÑ€ÑÐ¾Ð½Ð°Ð»ÑŒÐ½Ð¾Ð¼Ñƒ Ð¼ÐµÐ½ÐµÐ´Ð¶ÐµÑ€Ñƒ",
        l = "ÐÐµÐ¸Ð·Ð²ÐµÑÑ‚Ð½Ð°Ñ Ð¾ÑˆÐ¸Ð±ÐºÐ°",
        p = r(10),
        h = r.n(p);

    function d(t) {
        return (d = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }

    function y(t, e) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(t);
            e && (n = n.filter((function(e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable
            }))), r.push.apply(r, n)
        }
        return r
    }

    function m(t) {
        for (var e = 1; e < arguments.length; e++) {
            var r = null != arguments[e] ? arguments[e] : {};
            e % 2 ? y(Object(r), !0).forEach((function(e) {
                v(t, e, r[e])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : y(Object(r)).forEach((function(e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
            }))
        }
        return t
    }

    function v(t, e, r) {
        return (e = function(t) {
            var e = function(t, e) {
                if ("object" !== d(t) || null === t) return t;
                var r = t[Symbol.toPrimitive];
                if (void 0 !== r) {
                    var n = r.call(t, e || "default");
                    if ("object" !== d(n)) return n;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return ("string" === e ? String : Number)(t)
            }(t, "string");
            return "symbol" === d(e) ? e : String(e)
        }(e)) in t ? Object.defineProperty(t, e, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : t[e] = r, t
    }
    var g = function(t) {
            return t || (t = "https://p2p.paybox.kz/"), h.a.create({
                baseURL: t
            })
        },
        w = {
            init: function(t, e) {
                var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
                    n = m({
                        token: t
                    }, e);
                return g(r).post("token_payments/init", n)
            }
        };

    function b(t) {
        return (b = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }

    function x() {
        /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
        x = function() {
            return t
        };
        var t = {},
            e = Object.prototype,
            r = e.hasOwnProperty,
            n = Object.defineProperty || function(t, e, r) {
                t[e] = r.value
            },
            o = "function" == typeof Symbol ? Symbol : {},
            i = o.iterator || "@@iterator",
            a = o.asyncIterator || "@@asyncIterator",
            s = o.toStringTag || "@@toStringTag";

        function u(t, e, r) {
            return Object.defineProperty(t, e, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }), t[e]
        }
        try {
            u({}, "")
        } catch (t) {
            u = function(t, e, r) {
                return t[e] = r
            }
        }

        function c(t, e, r, o) {
            var i = e && e.prototype instanceof p ? e : p,
                a = Object.create(i.prototype),
                s = new L(o || []);
            return n(a, "_invoke", {
                value: S(t, r, s)
            }), a
        }

        function f(t, e, r) {
            try {
                return {
                    type: "normal",
                    arg: t.call(e, r)
                }
            } catch (t) {
                return {
                    type: "throw",
                    arg: t
                }
            }
        }
        t.wrap = c;
        var l = {};

        function p() {}

        function h() {}

        function d() {}
        var y = {};
        u(y, i, (function() {
            return this
        }));
        var m = Object.getPrototypeOf,
            v = m && m(m(k([])));
        v && v !== e && r.call(v, i) && (y = v);
        var g = d.prototype = p.prototype = Object.create(y);

        function w(t) {
            ["next", "throw", "return"].forEach((function(e) {
                u(t, e, (function(t) {
                    return this._invoke(e, t)
                }))
            }))
        }

        function E(t, e) {
            var o;
            n(this, "_invoke", {
                value: function(n, i) {
                    function a() {
                        return new e((function(o, a) {
                            ! function n(o, i, a, s) {
                                var u = f(t[o], t, i);
                                if ("throw" !== u.type) {
                                    var c = u.arg,
                                        l = c.value;
                                    return l && "object" == b(l) && r.call(l, "__await") ? e.resolve(l.__await).then((function(t) {
                                        n("next", t, a, s)
                                    }), (function(t) {
                                        n("throw", t, a, s)
                                    })) : e.resolve(l).then((function(t) {
                                        c.value = t, a(c)
                                    }), (function(t) {
                                        return n("throw", t, a, s)
                                    }))
                                }
                                s(u.arg)
                            }(n, i, o, a)
                        }))
                    }
                    return o = o ? o.then(a, a) : a()
                }
            })
        }

        function S(t, e, r) {
            var n = "suspendedStart";
            return function(o, i) {
                if ("executing" === n) throw new Error("Generator is already running");
                if ("completed" === n) {
                    if ("throw" === o) throw i;
                    return P()
                }
                for (r.method = o, r.arg = i;;) {
                    var a = r.delegate;
                    if (a) {
                        var s = T(a, r);
                        if (s) {
                            if (s === l) continue;
                            return s
                        }
                    }
                    if ("next" === r.method) r.sent = r._sent = r.arg;
                    else if ("throw" === r.method) {
                        if ("suspendedStart" === n) throw n = "completed", r.arg;
                        r.dispatchException(r.arg)
                    } else "return" === r.method && r.abrupt("return", r.arg);
                    n = "executing";
                    var u = f(t, e, r);
                    if ("normal" === u.type) {
                        if (n = r.done ? "completed" : "suspendedYield", u.arg === l) continue;
                        return {
                            value: u.arg,
                            done: r.done
                        }
                    }
                    "throw" === u.type && (n = "completed", r.method = "throw", r.arg = u.arg)
                }
            }
        }

        function T(t, e) {
            var r = e.method,
                n = t.iterator[r];
            if (void 0 === n) return e.delegate = null, "throw" === r && t.iterator.return && (e.method = "return", e.arg = void 0, T(t, e), "throw" === e.method) || "return" !== r && (e.method = "throw", e.arg = new TypeError("The iterator does not provide a '" + r + "' method")), l;
            var o = f(n, t.iterator, e.arg);
            if ("throw" === o.type) return e.method = "throw", e.arg = o.arg, e.delegate = null, l;
            var i = o.arg;
            return i ? i.done ? (e[t.resultName] = i.value, e.next = t.nextLoc, "return" !== e.method && (e.method = "next", e.arg = void 0), e.delegate = null, l) : i : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, l)
        }

        function j(t) {
            var e = {
                tryLoc: t[0]
            };
            1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e)
        }

        function O(t) {
            var e = t.completion || {};
            e.type = "normal", delete e.arg, t.completion = e
        }

        function L(t) {
            this.tryEntries = [{
                tryLoc: "root"
            }], t.forEach(j, this), this.reset(!0)
        }

        function k(t) {
            if (t) {
                var e = t[i];
                if (e) return e.call(t);
                if ("function" == typeof t.next) return t;
                if (!isNaN(t.length)) {
                    var n = -1,
                        o = function e() {
                            for (; ++n < t.length;)
                                if (r.call(t, n)) return e.value = t[n], e.done = !1, e;
                            return e.value = void 0, e.done = !0, e
                        };
                    return o.next = o
                }
            }
            return {
                next: P
            }
        }

        function P() {
            return {
                value: void 0,
                done: !0
            }
        }
        return h.prototype = d, n(g, "constructor", {
            value: d,
            configurable: !0
        }), n(d, "constructor", {
            value: h,
            configurable: !0
        }), h.displayName = u(d, s, "GeneratorFunction"), t.isGeneratorFunction = function(t) {
            var e = "function" == typeof t && t.constructor;
            return !!e && (e === h || "GeneratorFunction" === (e.displayName || e.name))
        }, t.mark = function(t) {
            return Object.setPrototypeOf ? Object.setPrototypeOf(t, d) : (t.__proto__ = d, u(t, s, "GeneratorFunction")), t.prototype = Object.create(g), t
        }, t.awrap = function(t) {
            return {
                __await: t
            }
        }, w(E.prototype), u(E.prototype, a, (function() {
            return this
        })), t.AsyncIterator = E, t.async = function(e, r, n, o, i) {
            void 0 === i && (i = Promise);
            var a = new E(c(e, r, n, o), i);
            return t.isGeneratorFunction(r) ? a : a.next().then((function(t) {
                return t.done ? t.value : a.next()
            }))
        }, w(g), u(g, s, "Generator"), u(g, i, (function() {
            return this
        })), u(g, "toString", (function() {
            return "[object Generator]"
        })), t.keys = function(t) {
            var e = Object(t),
                r = [];
            for (var n in e) r.push(n);
            return r.reverse(),
                function t() {
                    for (; r.length;) {
                        var n = r.pop();
                        if (n in e) return t.value = n, t.done = !1, t
                    }
                    return t.done = !0, t
                }
        }, t.values = k, L.prototype = {
            constructor: L,
            reset: function(t) {
                if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(O), !t)
                    for (var e in this) "t" === e.charAt(0) && r.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = void 0)
            },
            stop: function() {
                this.done = !0;
                var t = this.tryEntries[0].completion;
                if ("throw" === t.type) throw t.arg;
                return this.rval
            },
            dispatchException: function(t) {
                if (this.done) throw t;
                var e = this;

                function n(r, n) {
                    return a.type = "throw", a.arg = t, e.next = r, n && (e.method = "next", e.arg = void 0), !!n
                }
                for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                    var i = this.tryEntries[o],
                        a = i.completion;
                    if ("root" === i.tryLoc) return n("end");
                    if (i.tryLoc <= this.prev) {
                        var s = r.call(i, "catchLoc"),
                            u = r.call(i, "finallyLoc");
                        if (s && u) {
                            if (this.prev < i.catchLoc) return n(i.catchLoc, !0);
                            if (this.prev < i.finallyLoc) return n(i.finallyLoc)
                        } else if (s) {
                            if (this.prev < i.catchLoc) return n(i.catchLoc, !0)
                        } else {
                            if (!u) throw new Error("try statement without catch or finally");
                            if (this.prev < i.finallyLoc) return n(i.finallyLoc)
                        }
                    }
                }
            },
            abrupt: function(t, e) {
                for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                    var o = this.tryEntries[n];
                    if (o.tryLoc <= this.prev && r.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                        var i = o;
                        break
                    }
                }
                i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
                var a = i ? i.completion : {};
                return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, l) : this.complete(a)
            },
            complete: function(t, e) {
                if ("throw" === t.type) throw t.arg;
                return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), l
            },
            finish: function(t) {
                for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                    var r = this.tryEntries[e];
                    if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), O(r), l
                }
            },
            catch: function(t) {
                for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                    var r = this.tryEntries[e];
                    if (r.tryLoc === t) {
                        var n = r.completion;
                        if ("throw" === n.type) {
                            var o = n.arg;
                            O(r)
                        }
                        return o
                    }
                }
                throw new Error("illegal catch attempt")
            },
            delegateYield: function(t, e, r) {
                return this.delegate = {
                    iterator: k(t),
                    resultName: e,
                    nextLoc: r
                }, "next" === this.method && (this.arg = void 0), l
            }
        }, t
    }

    function E(t, e, r, n, o, i, a) {
        try {
            var s = t[i](a),
                u = s.value
        } catch (t) {
            return void r(t)
        }
        s.done ? e(u) : Promise.resolve(u).then(n, o)
    }

    function S(t) {
        return function() {
            var e = this,
                r = arguments;
            return new Promise((function(n, o) {
                var i = t.apply(e, r);

                function a(t) {
                    E(i, n, o, a, s, "next", t)
                }

                function s(t) {
                    E(i, n, o, a, s, "throw", t)
                }
                a(void 0)
            }))
        }
    }
    var T = "merchant.money.paybox.customer",
        j = "https://customer.paybox.money",
        O = "ok",
        L = "error";

    function k() {
        return (k = S(x().mark((function t(e, r) {
            var n, i, a, p, h, d, y, m, v = arguments;
            return x().wrap((function(t) {
                for (;;) switch (t.prev = t.next) {
                    case 0:
                        if (n = v.length > 2 && void 0 !== v[2] ? v[2] : {}, i = v.length > 3 ? v[3] : void 0, a = v.length > 4 ? v[4] : void 0, p = v.length > 5 ? v[5] : void 0, h = v.length > 6 ? v[6] : void 0, t.prev = 5, C(e, r, n)) {
                            t.next = 8;
                            break
                        }
                        throw {
                            message: u
                        };
                    case 8:
                        return t.next = 10, window.ApplePaySession.canMakePaymentsWithActiveCard(T);
                    case 10:
                        if (t.sent) {
                            t.next = 13;
                            break
                        }
                        throw {
                            message: c
                        };
                    case 13:
                        return t.next = 15, w.init(r, n, j);
                    case 15:
                        if (d = t.sent, y = A(d.data, "applepay"), 0 !== Object.keys(y).length) {
                            t.next = 19;
                            break
                        }
                        throw {
                            message: f
                        };
                    case 19:
                        (m = new s).render(e), m.el && (m.el.addEventListener("click", (function(t) {
                            new o.a(y, T, P.bind(null, i, a), j, d.data.payment_token, r).checkout()
                        })), p()), t.next = 27;
                        break;
                    case 24:
                        t.prev = 24, t.t0 = t.catch(5), h && "[object Function]" === {}.toString.call(h) && (t.t0 ? h(t.t0) : h(l));
                    case 27:
                    case "end":
                        return t.stop()
                }
            }), t, null, [
                [5, 24]
            ])
        })))).apply(this, arguments)
    }

    function P(t, e, r, n) {
        n.status && ~[L, O].indexOf(n.status) ? "ok" === n.status ? t(n) : "error" === n.status && e(n) : e()
    }

    function A(t, e) {
        var r = {};
        return t && t.token_payment_systems ? (t.token_payment_systems.forEach((function(t) {
            t.name === e && (r = t.options)
        })), r) : r
    }

    function C(t, e, r) {
        return !!(t && e && r.amount && r.description)
    }
    window.PayBoxPayButtons = function(t, e) {
        return k.apply(this, arguments)
    }
}]);
