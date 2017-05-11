var requirejs, require, define;
(function(Z) {
	function H(b) {
		return "[object Function]" === L.call(b)
	}
	function I(b) {
		return "[object Array]" === L.call(b)
	}
	function y(b, c) {
		if (b) {
			var d;
			for (d = 0; d < b.length && (!b[d] || !c(b[d], d, b)); d += 1) {}
		}
	}
	function M(b, c) {
		if (b) {
			var d;
			for (d = b.length - 1; - 1 < d && (!b[d] || !c(b[d], d, b)); d -= 1) {}
		}
	}
	function s(b, c) {
		return ga.call(b, c)
	}
	function l(b, c) {
		return s(b, c) && b[c]
	}
	function F(b, c) {
		for (var d in b) {
			if (s(b, d) && c(b[d], d)) {
				break
			}
		}
	}
	function Q(b, c, d, h) {
		c && F(c, function(c, j) {
			if (d || !s(b, j)) {
				h && "string" !== typeof c ? (b[j] || (b[j] = {}), Q(b[j], c, d, h)) : b[j] = c
			}
		});
		return b
	}
	function u(b, c) {
		return function() {
			return c.apply(b, arguments)
		}
	}
	function aa(b) {
		throw b
	}
	function ba(b) {
		if (!b) {
			return b
		}
		var c = Z;
		y(b.split("."), function(b) {
			c = c[b]
		});
		return c
	}
	function A(b, c, d, h) {
		
	}
	function ha(b) {
		function c(a, f, b) {
			var e, m, c, g, d, h, j, i = f && f.split("/");
			e = i;
			var n = k.map,
				p = n && n["*"];
			if (a && "." === a.charAt(0)) {
				if (f) {
					e = l(k.pkgs, f) ? i = [f] : i.slice(0, i.length - 1);
					f = a = e.concat(a.split("/"));
					for (e = 0; f[e]; e += 1) {
						if (m = f[e], "." === m) {
							f.splice(e, 1), e -= 1
						} else {
							if (".." === m) {
								if (1 === e && (".." === f[2] || ".." === f[0])) {
									break
								} else {
									0 < e && (f.splice(e - 1, 2), e -= 2)
								}
							}
						}
					}
					e = l(k.pkgs, f = a[0]);
					a = a.join("default.htm");
					e && a === f + "/" + e.main && (a = f)
				} else {
					0 === a.indexOf("./") && (a = a.substring(2))
				}
			}
			if (b && n && (i || p)) {
				f = a.split("/");
				for (e = f.length; 0 < e; e -= 1) {
					c = f.slice(0, e).join("default.htm");
					if (i) {
						for (m = i.length; 0 < m; m -= 1) {
							if (b = l(n, i.slice(0, m).join("default.htm"))) {
								if (b = l(b, c)) {
									g = b;
									d = e;
									break
								}
							}
						}
					}
					if (g) {
						break
					}!h && (p && l(p, c)) && (h = l(p, c), j = e)
				}!g && h && (g = h, d = j);
				g && (f.splice(0, d, g), a = f.join("default.htm"))
			}
			return a
		}
		function d(a) {
			z && y(document.getElementsByTagName("script"), function(f) {
				if (f.getAttribute("data-requiremodule") === a && f.getAttribute("data-requirecontext") === i.contextName) {
					return f.parentNode.removeChild(f), !0
				}
			})
		}
		function h(a) {
			var f = l(k.paths, a);
			if (f && I(f) && 1 < f.length) {
				return d(a), f.shift(), i.require.undef(a), i.require([a]), !0
			}
		}
		function $(a) {
			var f, b = a ? a.indexOf("!") : -1; - 1 < b && (f = a.substring(0, b), a = a.substring(b + 1, a.length));
			return [f, a]
		}
		function n(a, f, b, e) {
			var m, B, g = null,
				d = f ? f.name : null,
				h = a,
				j = !0,
				k = "";
			a || (j = !1, a = "_@r" + (L += 1));
			a = $(a);
			g = a[0];
			a = a[1];
			g && (g = c(g, d, e), B = l(r, g));
			a && (g ? k = B && B.normalize ? B.normalize(a, function(a) {
				return c(a, d, e)
			}) : c(a, d, e) : (k = c(a, d, e), a = $(k), g = a[0], k = a[1], b = !0, m = i.nameToUrl(k)));
			b = g && !B && !b ? "_unnormalized" + (M += 1) : "";
			return {
				prefix: g,
				name: k,
				parentMap: f,
				unnormalized: !! b,
				url: m,
				originalName: h,
				isDefine: j,
				id: (g ? g + "!" + k : k) + b
			}
		}
		function q(a) {
			var f = a.id,
				b = l(p, f);
			b || (b = p[f] = new i.Module(a));
			return b
		}
		function t(a, f, b) {
			var e = a.id,
				m = l(p, e);
			if (s(r, e) && (!m || m.defineEmitComplete)) {
				"defined" === f && b(r[e])
			} else {
				if (m = q(a), m.error && "error" === f) {
					b(m.error)
				} else {
					m.on(f, b)
				}
			}
		}
		function v(a, f) {
			var b = a.requireModules,
				e = !1;
			if (f) {
				f(a)
			} else {
				if (y(b, function(f) {
					if (f = l(p, f)) {
						f.error = a, f.events.error && (e = !0, f.emit("error", a))
					}
				}), !e) {
					j.onError(a)
				}
			}
		}
		function w() {
			R.length && (ia.apply(G, [G.length - 1, 0].concat(R)), R = [])
		}
		function x(a) {
			delete p[a];
			delete T[a]
		}
		function E(a, f, b) {
			var e = a.map.id;
			a.error ? a.emit("error", a.error) : (f[e] = !0, y(a.depMaps, function(e, c) {
				var g = e.id,
					d = l(p, g);
				d && (!a.depMatched[c] && !b[g]) && (l(f, g) ? (a.defineDep(c, r[g]), a.check()) : E(d, f, b))
			}), b[e] = !0)
		}
		function C() {
			var a, f, b, e, m = (b = 1000 * k.waitSeconds) && i.startTime + b < (new Date).getTime(),
				c = [],
				g = [],
				j = !1,
				l = !0;
			if (!U) {
				U = !0;
				F(T, function(b) {
					a = b.map;
					f = a.id;
					if (b.enabled && (a.isDefine || g.push(b), !b.error)) {
						if (!b.inited && m) {
							h(f) ? j = e = !0 : (c.push(f), d(f))
						} else {
							if (!b.inited && (b.fetched && a.isDefine) && (j = !0, !a.prefix)) {
								return l = !1
							}
						}
					}
				});
				if (m && c.length) {
					return b = A("timeout", "Load timeout for modules: " + c, null, c), b.contextName = i.contextName, v(b)
				}
				l && y(g, function(a) {
					E(a, {}, {})
				});
				if ((!m || e) && j) {
					if ((z || da) && !V) {
						V = setTimeout(function() {
							V = 0;
							C()
						}, 50)
					}
				}
				U = !1
			}
		}
		function D(a) {
			s(r, a[0]) || q(n(a[0], null, !0)).init(a[1], a[2])
		}
		function J(a) {
			var a = a.currentTarget || a.srcElement,
				b = i.onScriptLoad;
			a.detachEvent && !W ? a.detachEvent("onreadystatechange", b) : a.removeEventListener("load", b, !1);
			b = i.onScriptError;
			(!a.detachEvent || W) && a.removeEventListener("error", b, !1);
			return {
				node: a,
				id: a && a.getAttribute("data-requiremodule")
			}
		}
		function K() {
			var a;
			for (w(); G.length;) {
				a = G.shift();
				if (null === a[0]) {
					return v(A("mismatch", "Mismatched anonymous define() module: " + a[a.length - 1]))
				}
				D(a)
			}
		}
		var U, X, i, N, V, k = {
			waitSeconds: 7,
			baseUrl: "./",
			paths: {},
			pkgs: {},
			shim: {},
			config: {}
		},
			p = {},
			T = {},
			Y = {},
			G = [],
			r = {},
			S = {},
			L = 1,
			M = 1;
		N = {
			require: function(a) {
				return a.require ? a.require : a.require = i.makeRequire(a.map)
			},
			exports: function(a) {
				a.usingExports = !0;
				if (a.map.isDefine) {
					return a.exports ? a.exports : a.exports = r[a.map.id] = {}
				}
			},
			module: function(a) {
				return a.module ? a.module : a.module = {
					id: a.map.id,
					uri: a.map.url,
					config: function() {
						var b = l(k.pkgs, a.map.id);
						return (b ? l(k.config, a.map.id + "/" + b.main) : l(k.config, a.map.id)) || {}
					},
					exports: r[a.map.id]
				}
			}
		};
		X = function(a) {
			this.events = l(Y, a.id) || {};
			this.map = a;
			this.shim = l(k.shim, a.id);
			this.depExports = [];
			this.depMaps = [];
			this.depMatched = [];
			this.pluginMaps = {};
			this.depCount = 0
		};
		X.prototype = {
			init: function(a, b, c, e) {
				e = e || {};
				if (!this.inited) {
					this.factory = b;
					if (c) {
						this.on("error", c)
					} else {
						this.events.error && (c = u(this, function(a) {
							this.emit("error", a)
						}))
					}
					this.depMaps = a && a.slice(0);
					this.errback = c;
					this.inited = !0;
					this.ignore = e.ignore;
					e.enabled || this.enabled ? this.enable() : this.check()
				}
			},
			defineDep: function(a, b) {
				this.depMatched[a] || (this.depMatched[a] = !0, this.depCount -= 1, this.depExports[a] = b)
			},
			fetch: function() {
				if (!this.fetched) {
					this.fetched = !0;
					i.startTime = (new Date).getTime();
					var a = this.map;
					if (this.shim) {
						i.makeRequire(this.map, {
							enableBuildCallback: !0
						})(this.shim.deps || [], u(this, function() {
							return a.prefix ? this.callPlugin() : this.load()
						}))
					} else {
						return a.prefix ? this.callPlugin() : this.load()
					}
				}
			},
			load: function() {
				var a = this.map.url;
				S[a] || (S[a] = !0, i.load(this.map.id, a))
			},
			check: function() {
				if (this.enabled && !this.enabling) {
					var a, b, c = this.map.id;
					b = this.depExports;
					var e = this.exports,
						m = this.factory;
					if (this.inited) {
						if (this.error) {
							this.emit("error", this.error)
						} else {
							if (!this.defining) {
								this.defining = !0;
								if (1 > this.depCount && !this.defined) {
									if (H(m)) {
										if (this.events.error && this.map.isDefine || j.onError !== aa) {
											try {
												e = i.execCb(c, m, b, e)
											} catch (d) {
												a = d
											}
										} else {
											e = i.execCb(c, m, b, e)
										}
										this.map.isDefine && ((b = this.module) && void 0 !== b.exports && b.exports !== this.exports ? e = b.exports : void 0 === e && this.usingExports && (e = this.exports));
										if (a) {
											return a.requireMap = this.map, a.requireModules = this.map.isDefine ? [this.map.id] : null, a.requireType = this.map.isDefine ? "define" : "require", v(this.error = a)
										}
									} else {
										e = m
									}
									this.exports = e;
									if (this.map.isDefine && !this.ignore && (r[c] = e, j.onResourceLoad)) {
										j.onResourceLoad(i, this.map, this.depMaps)
									}
									x(c);
									this.defined = !0
								}
								this.defining = !1;
								this.defined && !this.defineEmitted && (this.defineEmitted = !0, this.emit("defined", this.exports), this.defineEmitComplete = !0)
							}
						}
					} else {
						this.fetch()
					}
				}
			},
			callPlugin: function() {
				var a = this.map,
					b = a.id,
					d = n(a.prefix);
				this.depMaps.push(d);
				t(d, "defined", u(this, function(e) {
					var m, d;
					d = this.map.name;
					var g = this.map.parentMap ? this.map.parentMap.name : null,
						h = i.makeRequire(a.parentMap, {
							enableBuildCallback: !0
						});
					if (this.map.unnormalized) {
						if (e.normalize && (d = e.normalize(d, function(a) {
							return c(a, g, !0)
						}) || ""), e = n(a.prefix + "!" + d, this.map.parentMap), t(e, "defined", u(this, function(a) {
							this.init([], function() {
								return a
							}, null, {
								enabled: !0,
								ignore: !0
							})
						})), d = l(p, e.id)) {
							this.depMaps.push(e);
							if (this.events.error) {
								d.on("error", u(this, function(a) {
									this.emit("error", a)
								}))
							}
							d.enable()
						}
					} else {
						m = u(this, function(a) {
							this.init([], function() {
								return a
							}, null, {
								enabled: !0
							})
						}), m.error = u(this, function(a) {
							this.inited = !0;
							this.error = a;
							a.requireModules = [b];
							F(p, function(a) {
								0 === a.map.id.indexOf(b + "_unnormalized") && x(a.map.id)
							});
							v(a)
						}), m.fromText = u(this, function(e, c) {
							var d = a.name,
								g = n(d),
								B = O;
							c && (e = c);
							B && (O = !1);
							q(g);
							s(k.config, b) && (k.config[d] = k.config[b]);
							try {
								j.exec(e)
							} catch (ca) {
								return v(A("fromtexteval", "fromText eval for " + b + " failed: " + ca, ca, [b]))
							}
							B && (O = !0);
							this.depMaps.push(g);
							i.completeLoad(d);
							h([d], m)
						}), e.load(a.name, h, m, k)
					}
				}));
				i.enable(d, this);
				this.pluginMaps[d.id] = d
			},
			enable: function() {
				T[this.map.id] = this;
				this.enabling = this.enabled = !0;
				y(this.depMaps, u(this, function(a, b) {
					var c, e;
					if ("string" === typeof a) {
						a = n(a, this.map.isDefine ? this.map : this.map.parentMap, !1, !this.skipMap);
						this.depMaps[b] = a;
						if (c = l(N, a.id)) {
							this.depExports[b] = c(this);
							return
						}
						this.depCount += 1;
						t(a, "defined", u(this, function(a) {
							this.defineDep(b, a);
							this.check()
						}));
						this.errback && t(a, "error", u(this, this.errback))
					}
					c = a.id;
					e = p[c];
					!s(N, c) && (e && !e.enabled) && i.enable(a, this)
				}));
				F(this.pluginMaps, u(this, function(a) {
					var b = l(p, a.id);
					b && !b.enabled && i.enable(a, this)
				}));
				this.enabling = !1;
				this.check()
			},
			on: function(a, b) {
				var c = this.events[a];
				c || (c = this.events[a] = []);
				c.push(b)
			},
			emit: function(a, b) {
				y(this.events[a], function(a) {
					a(b)
				});
				"error" === a && delete this.events[a]
			}
		};
		i = {
			config: k,
			contextName: b,
			registry: p,
			defined: r,
			urlFetched: S,
			defQueue: G,
			Module: X,
			makeModuleMap: n,
			nextTick: j.nextTick,
			onError: v,
			configure: function(a) {
				a.baseUrl && "./" !== a.baseUrl.charAt(a.baseUrl.length - 1) && (a.baseUrl += "./");
				var b = k.pkgs,
					c = k.shim,
					e = {
						paths: !0,
						config: !0,
						map: !0
					};
				F(a, function(a, b) {
					e[b] ? "map" === b ? (k.map || (k.map = {}), Q(k[b], a, !0, !0)) : Q(k[b], a, !0) : k[b] = a
				});
				a.shim && (F(a.shim, function(a, b) {
					I(a) && (a = {
						deps: a
					});
					if ((a.exports || a.init) && !a.exportsFn) {
						a.exportsFn = i.makeShimExports(a)
					}
					c[b] = a
				}), k.shim = c);
				a.packages && (y(a.packages, function(a) {
					a = "string" === typeof a ? {
						name: a
					} : a;
					b[a.name] = {
						name: a.name,
						location: a.location || a.name,
						main: (a.main || "main").replace(ja, "").replace(ea, "")
					}
				}), k.pkgs = b);
				F(p, function(a, b) {
					!a.inited && !a.map.unnormalized && (a.map = n(b))
				});
				if (a.deps || a.callback) {
					i.require(a.deps || [], a.callback)
				}
			},
			makeShimExports: function(a) {
				return function() {
					var b;
					a.init && (b = a.init.apply(Z, arguments));
					return b || a.exports && ba(a.exports)
				}
			},
			makeRequire: function(a, f) {
				function d(e, c, h) {
					var g, k;
					f.enableBuildCallback && (c && H(c)) && (c.__requireJsBuild = !0);
					if ("string" === typeof e) {
						if (H(c)) {
							return v(A("requireargs", "Invalid require call"), h)
						}
						if (a && s(N, e)) {
							return N[e](p[a.id])
						}
						if (j.get) {
							return j.get(i, e, a, d)
						}
						g = n(e, a, !1, !0);
						g = g.id;
						return !s(r, g) ? v(A("notloaded", 'Module name "' + g + '" has not been loaded yet for context: ' + b + (a ? "" : ". Use require([])"))) : r[g]
					}
					K();
					i.nextTick(function() {
						K();
						k = q(n(null, a));
						k.skipMap = f.skipMap;
						k.init(e, c, h, {
							enabled: !0
						});
						C()
					});
					return d
				}
				f = f || {};
				Q(d, {
					isBrowser: z,
					toUrl: function(b) {
						var d, f = b.lastIndexOf("."),
							g = b.split("/")[0];
						if (-1 !== f && (!("." === g || ".." === g) || 1 < f)) {
							d = b.substring(f, b.length), b = b.substring(0, f)
						}
						return i.nameToUrl(c(b, a && a.id, !0), d, !0)
					},
					defined: function(b) {
						return s(r, n(b, a, !1, !0).id)
					},
					specified: function(b) {
						b = n(b, a, !1, !0).id;
						return s(r, b) || s(p, b)
					}
				});
				a || (d.undef = function(b) {
					w();
					var c = n(b, a, !0),
						f = l(p, b);
					delete r[b];
					delete S[c.url];
					delete Y[b];
					f && (f.events.defined && (Y[b] = f.events), x(b))
				});
				return d
			},
			enable: function(a) {
				l(p, a.id) && q(a).enable()
			},
			completeLoad: function(a) {
				var b, c, e = l(k.shim, a) || {},
					d = e.exports;
				for (w(); G.length;) {
					c = G.shift();
					if (null === c[0]) {
						c[0] = a;
						if (b) {
							break
						}
						b = !0
					} else {
						c[0] === a && (b = !0)
					}
					D(c)
				}
				c = l(p, a);
				if (!b && !s(r, a) && c && !c.inited) {
					if (k.enforceDefine && (!d || !ba(d))) {
						return h(a) ? void 0 : v(A("nodefine", "No define call for " + a, null, [a]))
					}
					D([a, e.deps || [], e.exportsFn])
				}
				C()
			},
			nameToUrl: function(a, b, c) {
				var e, d, h, g, i, n;
				if (j.jsExtRegExp.test(a)) {
					g = a + (b || "")
				} else {
					e = k.paths;
					d = k.pkgs;
					g = a.split("/");
					for (i = g.length; 0 < i; i -= 1) {
						if (n = g.slice(0, i).join("default.htm"), h = l(d, n), n = l(e, n)) {
							I(n) && (n = n[0]);
							g.splice(0, i, n);
							break
						} else {
							if (h) {
								a = a === h.name ? h.location + "/" + h.main : h.location;
								g.splice(0, i, a);
								break
							}
						}
					}
					g = g.join("default.htm");
					g += b || (/\?/.test(g) || c ? "" : ".js");
					g = ("default.htm" === g.charAt(0) || g.match(/^[\w\+\.\-]+:) @ "" : k.baseUrl) + g
				}
				return k.urlArgs ? g + ((-1 === g.indexOf("?") ? "?" : "&") + k.urlArgs) : g
			},
			load: function(a, b) {
				j.load(i, a, b)
			},
			execCb: function(a, b, c, e) {
				return b.apply(e, c)
			},
			onScriptLoad: function(a) {
				if ("load" === a.type || ka.test((a.currentTarget || a.srcElement).readyState)) {
					P = null, a = J(a), i.completeLoad(a.id)
				}
			},
			onScriptError: function(a) {
				var b = J(a);
				if (!h(b.id)) {
					return v(A("scripterror", "Script error for: " + b.id, a, [b.id]))
				}
			}
		};
		i.require = i.makeRequire();
		return i
	}
	var j, w, x, C, J, D, P, K, q, fa, la = /(\/\*([\s\S]*?)\*\/|([^:]|^)\/\/(.*)$)/mg,
		ma = /[^.]\s*require\s*\(\s*["']([^'"\s]+)["']\s*\)/g,
		ea = /\.js$/,
		ja = /^\.\//;
	w = Object.prototype;
	var L = w.toString,
		ga = w.hasOwnProperty,
		ia = Array.prototype.splice,
		z = !! ("undefined" !== typeof window && navigator && window.document),
		da = !z && "undefined" !== typeof importScripts,
		ka = z && "PLAYSTATION 3" === navigator.platform ? /^complete$/ : /^(complete|loaded)$/,
		W = "undefined" !== typeof opera && "[object Opera]" === opera.toString(),
		E = {},
		t = {},
		R = [],
		O = !1;
	if ("undefined" === typeof define) {
		if ("undefined" !== typeof requirejs) {
			if (H(requirejs)) {
				return
			}
			t = requirejs;
			requirejs = void 0
		}
		"undefined" !== typeof require && !H(require) && (t = require, require = void 0);
		j = requirejs = function(b, c, d, h) {
			var q, n = "_";
			!I(b) && "string" !== typeof b && (q = b, I(c) ? (b = c, c = d, d = h) : b = []);
			q && q.context && (n = q.context);
			(h = l(E, n)) || (h = E[n] = j.s.newContext(n));
			q && h.configure(q);
			return h.require(b, c, d)
		};
		j.config = function(b) {
			return j(b)
		};
		j.nextTick = "undefined" !== typeof setTimeout ?
		function(b) {
			setTimeout(b, 4)
		} : function(b) {
			b()
		};
		require || (require = j);
		j.version = "2.1.8";
		j.jsExtRegExp = /^\/|:|\?|\.js$/;
		j.isBrowser = z;
		w = j.s = {
			contexts: E,
			newContext: ha
		};
		j({});
		y(["toUrl", "undef", "defined", "specified"], function(b) {
			j[b] = function() {
				var c = E._;
				return c.require[b].apply(c, arguments)
			}
		});
		if (z && (x = w.head = document.getElementsByTagName("head")[0], C = document.getElementsByTagName("base")[0])) {
			x = w.head = C.parentNode
		}
		j.onError = aa;
		j.createNode = function(b) {
			var c = b.xhtml ? document.createElementNS("http://www.w3.org/1999/xhtml", "html:script") : document.createElement("script");
			c.type = b.scriptType || "text/javascript";
			c.charset = "utf-8";
			c.async = !0;
			return c
		};
		j.load = function(b, c, d) {
			var h = b && b.config || {};
			if (z) {
				return h = j.createNode(h, c, d), h.setAttribute("data-requirecontext", b.contextName), h.setAttribute("data-requiremodule", c), h.attachEvent && !(h.attachEvent.toString && 0 > h.attachEvent.toString().indexOf("[native code")) && !W ? (O = !0, h.attachEvent("onreadystatechange", b.onScriptLoad)) : (h.addEventListener("load", b.onScriptLoad, !1), h.addEventListener("error", b.onScriptError, !1)), h.src = d, K = h, C ? x.insertBefore(h, C) : x.appendChild(h), K = null, h
			}
			if (da) {
				try {
					importScripts(d), b.completeLoad(c)
				} catch (l) {
					b.onError(A("importscripts", "importScripts failed for " + c + " at " + d, l, [c]))
				}
			}
		};
		z && M(document.getElementsByTagName("script"), function(b) {
			x || (x = b.parentNode);
			if (J = b.getAttribute("data-main")) {
				return q = J, t.baseUrl || (D = q.split("/"), q = D.pop(), fa = D.length ? D.join("default.htm") + "default.htm" : "./", t.baseUrl = fa), q = q.replace(ea, ""), j.jsExtRegExp.test(q) && (q = J), t.deps = t.deps ? t.deps.concat(q) : [q], !0
			}
		});
		define = function(b, c, d) {
			var h, j;
			"string" !== typeof b && (d = c, c = b, b = null);
			I(c) || (d = c, c = null);
			!c && H(d) && (c = [], d.length && (d.toString().replace(la, "").replace(ma, function(b, d) {
				c.push(d)
			}), c = (1 === d.length ? ["require"] : ["require", "exports", "module"]).concat(c)));
			if (O) {
				if (!(h = K)) {
					P && "interactive" === P.readyState || M(document.getElementsByTagName("script"), function(b) {
						if ("interactive" === b.readyState) {
							return P = b
						}
					}), h = P
				}
				h && (b || (b = h.getAttribute("data-requiremodule")), j = E[h.getAttribute("data-requirecontext")])
			}(j ? j.defQueue : R).push([b, c, d])
		};
		define.amd = {
			jQuery: !0
		};
		j.exec = function(b) {
			return eval(b)
		};
		j(t)
	}
})(this);
(function(b) {
	String.prototype.trim === b && (String.prototype.trim = function() {
		return this.replace(/^\s+|\s+$/g, "")
	}), Array.prototype.reduce === b && (Array.prototype.reduce = function(a) {
		if (this === void 0 || this === null) {
			throw new TypeError
		}
		var j = Object(this),
			i = j.length >>> 0,
			h = 0,
			g;
		if (typeof a != "function") {
			throw new TypeError
		}
		if (i == 0 && arguments.length == 1) {
			throw new TypeError
		}
		if (arguments.length >= 2) {
			g = arguments[1]
		} else {
			do {
				if (h in j) {
					g = j[h++];
					break
				}
				if (++h >= i) {
					throw new TypeError
				}
			} while (!0)
		}
		while (h < i) {
			h in j && (g = a.call(b, g, j[h], h, j)), h++
		}
		return g
	})
})();
var Zepto = function() {
		function E(a) {
			return a == null ? String(a) : y[z.call(a)] || "object"
		}
		function F(a) {
			return E(a) == "function"
		}
		function G(a) {
			return a != null && a == a.window
		}
		function H(a) {
			return a != null && a.nodeType == a.DOCUMENT_NODE
		}
		function I(a) {
			return E(a) == "object"
		}
		function J(a) {
			return I(a) && !G(a) && a.__proto__ == Object.prototype
		}
		function K(a) {
			return a instanceof Array
		}
		function L(a) {
			return typeof a.length == "number"
		}
		function M(a) {
			return g.call(a, function(a) {
				return a != null
			})
		}
		function N(a) {
			return a.length > 0 ? c.fn.concat.apply([], a) : a
		}
		function O(a) {
			return a.replace(/::/g, "default.htm").replace(/([A-Z]+)([A-Z][a-z])/g, "$1_$2").replace(/([a-z\d])([A-Z])/g, "$1_$2").replace(/_/g, "-").toLowerCase()
		}
		function P(a) {
			return a in j ? j[a] : j[a] = new RegExp("(^|\\s)" + a + "(\\s|$)")
		}
		function Q(a, b) {
			return typeof b == "number" && !l[O(a)] ? b + "px" : b
		}
		function R(a) {
			var b, c;
			return i[a] || (b = h.createElement(a), h.body.appendChild(b), c = k(b, "").getPropertyValue("display"), b.parentNode.removeChild(b), c == "none" && (c = "block"), i[a] = c), i[a]
		}
		function S(a) {
			return "children" in a ? f.call(a.children) : c.map(a.childNodes, function(a) {
				if (a.nodeType == 1) {
					return a
				}
			})
		}
		function T(c, d, e) {
			for (b in d) {
				e && (J(d[b]) || K(d[b])) ? (J(d[b]) && !J(c[b]) && (c[b] = {}), K(d[b]) && !K(c[b]) && (c[b] = []), T(c[b], d[b], e)) : d[b] !== a && (c[b] = d[b])
			}
		}
		function U(b, d) {
			return d === a ? c(b) : c(b).filter(d)
		}
		function V(a, b, c, d) {
			return F(b) ? b.call(a, c, d) : b
		}
		function W(a, b, c) {
			c == null ? a.removeAttribute(b) : a.setAttribute(b, c)
		}
		function X(b, c) {
			var d = b.className,
				e = d && d.baseVal !== a;
			if (c === a) {
				return e ? d.baseVal : d
			}
			e ? d.baseVal = c : b.className = c
		}
		function Y(a) {
			var b;
			try {
				return a ? a == "true" || (a == "false" ? !1 : a == "null" ? null : isNaN(b = Number(a)) ? /^[\[\{]/.test(a) ? c.parseJSON(a) : a : b) : a
			} catch (d) {
				return a
			}
		}
		function Z(a, b) {
			b(a);
			for (var c in a.childNodes) {
				Z(a.childNodes[c], b)
			}
		}
		var a, b, c, d, e = [],
			f = e.slice,
			g = e.filter,
			h = window.document,
			i = {},
			j = {},
			k = h.defaultView.getComputedStyle,
			l = {
				"column-count": 1,
				columns: 1,
				"font-weight": 1,
				"line-height": 1,
				opacity: 1,
				"z-index": 1,
				zoom: 1
			},
			m = /^\s*<(\w+|!)[^>]*>/,
			n = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig,
			o = /^(?:body|html)$/i,
			p = ["val", "css", "html", "text", "data", "width", "height", "offset"],
			q = ["after", "prepend", "before", "append"],
			r = h.createElement("table"),
			s = h.createElement("tr"),
			t = {
				tr: h.createElement("tbody"),
				tbody: r,
				thead: r,
				tfoot: r,
				td: s,
				th: s,
				"*": h.createElement("div")
			},
			u = /complete|loaded|interactive/,
			v = /^\.([\w-]+)$/,
			w = /^#([\w-]*)$/,
			x = /^[\w-]+$/,
			y = {},
			z = y.toString,
			A = {},
			B, C, D = h.createElement("div");
		return A.matches = function(a, b) {
			if (!a || a.nodeType !== 1) {
				return !1
			}
			var c = a.webkitMatchesSelector || a.mozMatchesSelector || a.oMatchesSelector || a.matchesSelector;
			if (c) {
				return c.call(a, b)
			}
			var d, e = a.parentNode,
				f = !e;
			return f && (e = D).appendChild(a), d = ~A.qsa(e, b).indexOf(a), f && D.removeChild(a), d
		}, B = function(a) {
			return a.replace(/-+(.)?/g, function(a, b) {
				return b ? b.toUpperCase() : ""
			})
		}, C = function(a) {
			return g.call(a, function(b, c) {
				return a.indexOf(b) == c
			})
		}, A.fragment = function(b, d, e) {
			b.replace && (b = b.replace(n, "<$1></$2>")), d === a && (d = m.test(b) && RegExp.$1), d in t || (d = "*");
			var g, h, i = t[d];
			return i.innerHTML = "" + b, h = c.each(f.call(i.childNodes), function() {
				i.removeChild(this)
			}), J(e) && (g = c(h), c.each(e, function(a, b) {
				p.indexOf(a) > -1 ? g[a](b) : g.attr(a, b)
			})), h
		}, A.Z = function(a, b) {
			return a = a || [], a.__proto__ = c.fn, a.selector = b || "", a
		}, A.isZ = function(a) {
			return a instanceof A.Z
		}, A.init = function(b, d) {
			if (!b) {
				return A.Z()
			}
			if (F(b)) {
				return c(h).ready(b)
			}
			if (A.isZ(b)) {
				return b
			}
			var e;
			if (K(b)) {
				e = M(b)
			} else {
				if (I(b)) {
					e = [J(b) ? c.extend({}, b) : b], b = null
				} else {
					if (m.test(b)) {
						e = A.fragment(b.trim(), RegExp.$1, d), b = null
					} else {
						if (d !== a) {
							return c(d).find(b)
						}
						e = A.qsa(h, b)
					}
				}
			}
			return A.Z(e, b)
		}, c = function(a, b) {
			return A.init(a, b)
		}, c.extend = function(a) {
			var b, c = f.call(arguments, 1);
			return typeof a == "boolean" && (b = a, a = c.shift()), c.forEach(function(c) {
				T(a, c, b)
			}), a
		}, A.qsa = function(a, b) {
			var c;
			return H(a) && w.test(b) ? (c = a.getElementById(RegExp.$1)) ? [c] : [] : a.nodeType !== 1 && a.nodeType !== 9 ? [] : f.call(v.test(b) ? a.getElementsByClassName(RegExp.$1) : x.test(b) ? a.getElementsByTagName(b) : a.querySelectorAll(b))
		}, c.contains = function(a, b) {
			return a !== b && a.contains(b)
		}, c.type = E, c.isFunction = F, c.isWindow = G, c.isArray = K, c.isPlainObject = J, c.isEmptyObject = function(a) {
			var b;
			for (b in a) {
				return !1
			}
			return !0
		}, c.inArray = function(a, b, c) {
			return e.indexOf.call(b, a, c)
		}, c.camelCase = B, c.trim = function(a) {
			return a.trim()
		}, c.uuid = 0, c.support = {}, c.expr = {}, c.map = function(a, b) {
			var c, d = [],
				e, f;
			if (L(a)) {
				for (e = 0; e < a.length; e++) {
					c = b(a[e], e), c != null && d.push(c)
				}
			} else {
				for (f in a) {
					c = b(a[f], f), c != null && d.push(c)
				}
			}
			return N(d)
		}, c.each = function(a, b) {
			var c, d;
			if (L(a)) {
				for (c = 0; c < a.length; c++) {
					if (b.call(a[c], c, a[c]) === !1) {
						return a
					}
				}
			} else {
				for (d in a) {
					if (b.call(a[d], d, a[d]) === !1) {
						return a
					}
				}
			}
			return a
		}, c.grep = function(a, b) {
			return g.call(a, b)
		}, window.JSON && (c.parseJSON = JSON.parse), c.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(a, b) {
			y["[object " + b + "]"] = b.toLowerCase()
		}), c.fn = {
			forEach: e.forEach,
			reduce: e.reduce,
			push: e.push,
			sort: e.sort,
			indexOf: e.indexOf,
			concat: e.concat,
			map: function(a) {
				return c(c.map(this, function(b, c) {
					return a.call(b, c, b)
				}))
			},
			slice: function() {
				return c(f.apply(this, arguments))
			},
			ready: function(a) {
				return u.test(h.readyState) ? a(c) : h.addEventListener("DOMContentLoaded", function() {
					a(c)
				}, !1), this
			},
			get: function(b) {
				return b === a ? f.call(this) : this[b >= 0 ? b : b + this.length]
			},
			toArray: function() {
				return this.get()
			},
			size: function() {
				return this.length
			},
			remove: function() {
				return this.each(function() {
					this.parentNode != null && this.parentNode.removeChild(this)
				})
			},
			each: function(a) {
				return e.every.call(this, function(b, c) {
					return a.call(b, c, b) !== !1
				}), this
			},
			filter: function(a) {
				return F(a) ? this.not(this.not(a)) : c(g.call(this, function(b) {
					return A.matches(b, a)
				}))
			},
			add: function(a, b) {
				return c(C(this.concat(c(a, b))))
			},
			is: function(a) {
				return this.length > 0 && A.matches(this[0], a)
			},
			not: function(b) {
				var d = [];
				if (F(b) && b.call !== a) {
					this.each(function(a) {
						b.call(this, a) || d.push(this)
					})
				} else {
					var e = typeof b == "string" ? this.filter(b) : L(b) && F(b.item) ? f.call(b) : c(b);
					this.forEach(function(a) {
						e.indexOf(a) < 0 && d.push(a)
					})
				}
				return c(d)
			},
			has: function(a) {
				return this.filter(function() {
					return I(a) ? c.contains(this, a) : c(this).find(a).size()
				})
			},
			eq: function(a) {
				return a === -1 ? this.slice(a) : this.slice(a, +a + 1)
			},
			first: function() {
				var a = this[0];
				return a && !I(a) ? a : c(a)
			},
			last: function() {
				var a = this[this.length - 1];
				return a && !I(a) ? a : c(a)
			},
			find: function(a) {
				var b, d = this;
				return typeof a == "object" ? b = c(a).filter(function() {
					var a = this;
					return e.some.call(d, function(b) {
						return c.contains(b, a)
					})
				}) : this.length == 1 ? b = c(A.qsa(this[0], a)) : b = this.map(function() {
					return A.qsa(this, a)
				}), b
			},
			closest: function(a, b) {
				var d = this[0],
					e = !1;
				typeof a == "object" && (e = c(a));
				while (d && !(e ? e.indexOf(d) >= 0 : A.matches(d, a))) {
					d = d !== b && !H(d) && d.parentNode
				}
				return c(d)
			},
			parents: function(a) {
				var b = [],
					d = this;
				while (d.length > 0) {
					d = c.map(d, function(a) {
						if ((a = a.parentNode) && !H(a) && b.indexOf(a) < 0) {
							return b.push(a), a
						}
					})
				}
				return U(b, a)
			},
			parent: function(a) {
				return U(C(this.pluck("parentNode")), a)
			},
			children: function(a) {
				return U(this.map(function() {
					return S(this)
				}), a)
			},
			contents: function() {
				return this.map(function() {
					return f.call(this.childNodes)
				})
			},
			siblings: function(a) {
				return U(this.map(function(a, b) {
					return g.call(S(b.parentNode), function(a) {
						return a !== b
					})
				}), a)
			},
			empty: function() {
				return this.each(function() {
					this.innerHTML = ""
				})
			},
			pluck: function(a) {
				return c.map(this, function(b) {
					return b[a]
				})
			},
			show: function() {
				return this.each(function() {
					this.style.display == "none" && (this.style.display = null), k(this, "").getPropertyValue("display") == "none" && (this.style.display = R(this.nodeName))
				})
			},
			replaceWith: function(a) {
				return this.before(a).remove()
			},
			wrap: function(a) {
				var b = F(a);
				if (this[0] && !b) {
					var d = c(a).get(0),
						e = d.parentNode || this.length > 1
				}
				return this.each(function(f) {
					c(this).wrapAll(b ? a.call(this, f) : e ? d.cloneNode(!0) : d)
				})
			},
			wrapAll: function(a) {
				if (this[0]) {
					c(this[0]).before(a = c(a));
					var b;
					while ((b = a.children()).length) {
						a = b.first()
					}
					c(a).append(this)
				}
				return this
			},
			wrapInner: function(a) {
				var b = F(a);
				return this.each(function(d) {
					var e = c(this),
						f = e.contents(),
						g = b ? a.call(this, d) : a;
					f.length ? f.wrapAll(g) : e.append(g)
				})
			},
			unwrap: function() {
				return this.parent().each(function() {
					c(this).replaceWith(c(this).children())
				}), this
			},
			clone: function() {
				return this.map(function() {
					return this.cloneNode(!0)
				})
			},
			hide: function() {
				return this.css("display", "none")
			},
			toggle: function(b) {
				return this.each(function() {
					var d = c(this);
					(b === a ? d.css("display") == "none" : b) ? d.show() : d.hide()
				})
			},
			prev: function(a) {
				return c(this.pluck("previousElementSibling")).filter(a || "*")
			},
			next: function(a) {
				return c(this.pluck("nextElementSibling")).filter(a || "*")
			},
			html: function(b) {
				return b === a ? this.length > 0 ? this[0].innerHTML : null : this.each(function(a) {
					var d = this.innerHTML;
					c(this).empty().append(V(this, b, a, d))
				})
			},
			text: function(b) {
				return b === a ? this.length > 0 ? this[0].textContent : null : this.each(function() {
					this.textContent = b
				})
			},
			attr: function(c, d) {
				var e;
				return typeof c == "string" && d === a ? this.length == 0 || this[0].nodeType !== 1 ? a : c == "value" && this[0].nodeName == "INPUT" ? this.val() : !(e = this[0].getAttribute(c)) && c in this[0] ? this[0][c] : e : this.each(function(a) {
					if (this.nodeType !== 1) {
						return
					}
					if (I(c)) {
						for (b in c) {
							W(this, b, c[b])
						}
					} else {
						W(this, c, V(this, d, a, this.getAttribute(c)))
					}
				})
			},
			removeAttr: function(a) {
				return this.each(function() {
					this.nodeType === 1 && W(this, a)
				})
			},
			prop: function(b, c) {
				return c === a ? this[0] && this[0][b] : this.each(function(a) {
					this[b] = V(this, c, a, this[b])
				})
			},
			data: function(b, c) {
				var d = this.attr("data-" + O(b), c);
				return d !== null ? Y(d) : a
			},
			val: function(b) {
				return b === a ? this[0] && (this[0].multiple ? c(this[0]).find("option").filter(function(a) {
					return this.selected
				}).pluck("value") : this[0].value) : this.each(function(a) {
					this.value = V(this, b, a, this.value)
				})
			},
			offset: function(a) {
				if (a) {
					return this.each(function(b) {
						var d = c(this),
							e = V(this, a, b, d.offset()),
							f = d.offsetParent().offset(),
							g = {
								top: e.top - f.top,
								left: e.left - f.left
							};
						d.css("position") == "static" && (g.position = "relative"), d.css(g)
					})
				}
				if (this.length == 0) {
					return null
				}
				var b = this[0].getBoundingClientRect();
				return {
					left: b.left + window.pageXOffset,
					top: b.top + window.pageYOffset,
					width: Math.round(b.width),
					height: Math.round(b.height)
				}
			},
			css: function(a, c) {
				if (arguments.length < 2 && typeof a == "string") {
					return this[0] && (this[0].style[B(a)] || k(this[0], "").getPropertyValue(a))
				}
				var d = "";
				if (E(a) == "string") {
					!c && c !== 0 ? this.each(function() {
						this.style.removeProperty(O(a))
					}) : d = O(a) + ":" + Q(a, c)
				} else {
					for (b in a) {
						!a[b] && a[b] !== 0 ? this.each(function() {
							this.style.removeProperty(O(b))
						}) : d += O(b) + ":" + Q(b, a[b]) + ";"
					}
				}
				return this.each(function() {
					this.style.cssText += ";" + d
				})
			},
			index: function(a) {
				return a ? this.indexOf(c(a)[0]) : this.parent().children().indexOf(this[0])
			},
			hasClass: function(a) {
				return e.some.call(this, function(a) {
					return this.test(X(a))
				}, P(a))
			},
			addClass: function(a) {
				return this.each(function(b) {
					d = [];
					var e = X(this),
						f = V(this, a, b, e);
					f.split(/\s+/g).forEach(function(a) {
						c(this).hasClass(a) || d.push(a)
					}, this), d.length && X(this, e + (e ? " " : "") + d.join(" "))
				})
			},
			removeClass: function(b) {
				return this.each(function(c) {
					if (b === a) {
						return X(this, "")
					}
					d = X(this), V(this, b, c, d).split(/\s+/g).forEach(function(a) {
						d = d.replace(P(a), " ")
					}), X(this, d.trim())
				})
			},
			toggleClass: function(b, d) {
				return this.each(function(e) {
					var f = c(this),
						g = V(this, b, e, X(this));
					g.split(/\s+/g).forEach(function(b) {
						(d === a ? !f.hasClass(b) : d) ? f.addClass(b) : f.removeClass(b)
					})
				})
			},
			scrollTop: function() {
				if (!this.length) {
					return
				}
				return "scrollTop" in this[0] ? this[0].scrollTop : this[0].scrollY
			},
			position: function() {
				if (!this.length) {
					return
				}
				var a = this[0],
					b = this.offsetParent(),
					d = this.offset(),
					e = o.test(b[0].nodeName) ? {
						top: 0,
						left: 0
					} : b.offset();
				return d.top -= parseFloat(c(a).css("margin-top")) || 0, d.left -= parseFloat(c(a).css("margin-left")) || 0, e.top += parseFloat(c(b[0]).css("border-top-width")) || 0, e.left += parseFloat(c(b[0]).css("border-left-width")) || 0, {
					top: d.top - e.top,
					left: d.left - e.left
				}
			},
			offsetParent: function() {
				return this.map(function() {
					var a = this.offsetParent || h.body;
					while (a && !o.test(a.nodeName) && c(a).css("position") == "static") {
						a = a.offsetParent
					}
					return a
				})
			}
		}, c.fn.detach = c.fn.remove, ["width", "height"].forEach(function(b) {
			c.fn[b] = function(d) {
				var e, f = this[0],
					g = b.replace(/./, function(a) {
						return a[0].toUpperCase()
					});
				return d === a ? G(f) ? f["inner" + g] : H(f) ? f.documentElement["offset" + g] : (e = this.offset()) && e[b] : this.each(function(a) {
					f = c(this), f.css(b, V(this, d, a, f[b]()))
				})
			}
		}), q.forEach(function(a, b) {
			var d = b % 2;
			c.fn[a] = function() {
				var a, e = c.map(arguments, function(b) {
					return a = E(b), a == "object" || a == "array" || b == null ? b : A.fragment(b)
				}),
					f, g = this.length > 1;
				return e.length < 1 ? this : this.each(function(a, h) {
					f = d ? h : h.parentNode, h = b == 0 ? h.nextSibling : b == 1 ? h.firstChild : b == 2 ? h : null, e.forEach(function(a) {
						if (g) {
							a = a.cloneNode(!0)
						} else {
							if (!f) {
								return c(a).remove()
							}
						}
						Z(f.insertBefore(a, h), function(a) {
							a.nodeName != null && a.nodeName.toUpperCase() === "SCRIPT" && (!a.type || a.type === "text/javascript") && !a.src && window.eval.call(window, a.innerHTML)
						})
					})
				})
			}, c.fn[d ? a + "To" : "insert" + (b ? "Before" : "After")] = function(b) {
				return c(b)[a](this), this
			}
		}), A.Z.prototype = c.fn, A.uniq = C, A.deserializeValue = Y, c.zepto = A, c
	}();
window.Zepto = Zepto, "$" in window || (window.$ = Zepto), function(d) {
	function c(H) {
		var G = this.os = {},
			F = this.browser = {},
			E = H.match(/WebKit\/([\d.]+)/),
			D = H.match(/(Android)\s+([\d.]+)/),
			C = H.match(/(iPad).*OS\s([\d_]+)/),
			B = !C && H.match(/(iPhone\sOS)\s([\d_]+)/),
			A = H.match(/(webOS|hpwOS)[\s\/]([\d.]+)/),
			z = A && H.match(/TouchPad/),
			y = H.match(/Kindle\/([\d.]+)/),
			x = H.match(/Silk\/([\d._]+)/),
			w = H.match(/(BlackBerry).*Version\/([\d.]+)/),
			v = H.match(/(BB10).*Version\/([\d.]+)/),
			u = H.match(/(RIM\sTablet\sOS)\s([\d.]+)/),
			t = H.match(/PlayBook/),
			s = H.match(/Chrome\/([\d.]+)/) || H.match(/CriOS\/([\d.]+)/),
			r = H.match(/Firefox\/([\d.]+)/);
		if (F.webkit = !! E) {
			F.version = E[1]
		}
		D && (G.android = !0, G.version = D[2]), B && (G.ios = G.iphone = !0, G.version = B[2].replace(/_/g, ".")), C && (G.ios = G.ipad = !0, G.version = C[2].replace(/_/g, ".")), A && (G.webos = !0, G.version = A[2]), z && (G.touchpad = !0), w && (G.blackberry = !0, G.version = w[2]), v && (G.bb10 = !0, G.version = v[2]), u && (G.rimtabletos = !0, G.version = u[2]), t && (F.playbook = !0), y && (G.kindle = !0, G.version = y[1]), x && (F.silk = !0, F.version = x[1]), !x && G.android && H.match(/Kindle Fire/) && (F.silk = !0), s && (F.chrome = !0, F.version = s[1]), r && (F.firefox = !0, F.version = r[1]), G.tablet = !! (C || t || D && !H.match(/Mobile/) || r && H.match(/Tablet/)), G.phone = !G.tablet && !! (D || B || A || w || v || s && H.match(/Android/) || s && H.match(/CriOS\/([\d.]+)/) || r && H.match(/Mobile/))
	}
	c.call(d, navigator.userAgent), d.__detect = c
}(Zepto), function(P) {
	function J(b) {
		return b._zid || (b._zid = M++)
	}
	function I(g, c, j, i) {
		c = H(c);
		if (c.ns) {
			var h = G(c.ns)
		}
		return (N[J(g)] || []).filter(function(b) {
			return b && (!c.e || b.e == c.e) && (!c.ns || h.test(b.ns)) && (!j || J(b.fn) === J(j)) && (!i || b.sel == i)
		})
	}
	function H(d) {
		var c = ("" + d).split(".");
		return {
			e: c[0],
			ns: c.slice(1).sort().join(" ")
		}
	}
	function G(b) {
		return new RegExp("(?:^| )" + b.replace(" ", " .* ?") + "(?: |$)")
	}
	function F(a, f, e) {
		P.type(a) != "string" ? P.each(a, e) : a.split(/\s/).forEach(function(b) {
			e(b, f)
		})
	}
	function E(d, c) {
		return d.del && (d.e == "focus" || d.e == "blur") || !! c
	}
	function D(b) {
		return K[b] || b
	}
	function C(a, l, i, f, c, m) {
		var k = J(a),
			g = N[k] || (N[k] = []);
		F(l, i, function(n, j) {
			var h = H(n);
			h.fn = j, h.sel = f, h.e in K && (j = function(d) {
				var e = d.relatedTarget;
				if (!e || e !== this && !P.contains(this, e)) {
					return h.fn.apply(this, arguments)
				}
			}), h.del = c && c(j, n);
			var b = h.del || j;
			h.proxy = function(d) {
				var e = b.apply(a, [d].concat(d.data));
				return e === !1 && (d.preventDefault(), d.stopPropagation()), e
			}, h.i = g.length, g.push(h), a.addEventListener(D(h.e), h.proxy, E(h, m))
		})
	}
	function B(g, c, l, k, j) {
		var h = J(g);
		F(c || "", l, function(a, e) {
			I(g, a, e, k).forEach(function(d) {
				delete N[h][d.i], g.removeEventListener(D(d.e), d.proxy, E(d, j))
			})
		})
	}
	function w(a) {
		var f, e = {
			originalEvent: a
		};
		for (f in a) {
			!y.test(f) && a[f] !== undefined && (e[f] = a[f])
		}
		return P.each(x, function(b, d) {
			e[b] = function() {
				return this[d] = A, a[b].apply(a, arguments)
			}, e[d] = z
		}), e
	}
	function v(d) {
		if (!("defaultPrevented" in d)) {
			d.defaultPrevented = !1;
			var c = d.preventDefault;
			d.preventDefault = function() {
				this.defaultPrevented = !0, c.call(this)
			}
		}
	}
	var O = P.zepto.qsa,
		N = {},
		M = 1,
		L = {},
		K = {
			mouseenter: "mouseover",
			mouseleave: "mouseout"
		};
	L.click = L.mousedown = L.mouseup = L.mousemove = "MouseEvents", P.event = {
		add: C,
		remove: B
	}, P.proxy = function(a, f) {
		if (P.isFunction(a)) {
			var e = function() {
					return a.apply(f, arguments)
				};
			return e._zid = J(a), e
		}
		if (typeof f == "string") {
			return P.proxy(a[f], a)
		}
		throw new TypeError("expected function")
	}, P.fn.bind = function(d, c) {
		return this.each(function() {
			C(this, d, c)
		})
	}, P.fn.unbind = function(d, c) {
		return this.each(function() {
			B(this, d, c)
		})
	}, P.fn.one = function(d, c) {
		return this.each(function(b, a) {
			C(this, d, c, null, function(f, e) {
				return function() {
					var g = f.apply(a, arguments);
					return B(a, e, f), g
				}
			})
		})
	};
	var A = function() {
			return !0
		},
		z = function() {
			return !1
		},
		y = /^([A-Z]|layer[XY]$)/,
		x = {
			preventDefault: "isDefaultPrevented",
			stopImmediatePropagation: "isImmediatePropagationStopped",
			stopPropagation: "isPropagationStopped"
		};
	P.fn.delegate = function(a, f, e) {
		return this.each(function(c, b) {
			C(b, f, e, a, function(d) {
				return function(j) {
					var i, h = P(j.target).closest(a, b).get(0);
					if (h) {
						return i = P.extend(w(j), {
							currentTarget: h,
							liveFired: b
						}), d.apply(h, [i].concat([].slice.call(arguments, 1)))
					}
				}
			})
		})
	}, P.fn.undelegate = function(e, d, f) {
		return this.each(function() {
			B(this, d, f, e)
		})
	}, P.fn.live = function(a, d) {
		return P(document.body).delegate(this.selector, a, d), this
	}, P.fn.die = function(a, d) {
		return P(document.body).undelegate(this.selector, a, d), this
	}, P.fn.on = function(a, f, e) {
		return !f || P.isFunction(f) ? this.bind(a, f || e) : this.delegate(f, a, e)
	}, P.fn.off = function(a, f, e) {
		return !f || P.isFunction(f) ? this.unbind(a, f || e) : this.undelegate(f, a, e)
	}, P.fn.trigger = function(a, d) {
		if (typeof a == "string" || P.isPlainObject(a)) {
			a = P.Event(a)
		}
		return v(a), a.data = d, this.each(function() {
			"dispatchEvent" in this && this.dispatchEvent(a)
		})
	}, P.fn.triggerHandler = function(a, h) {
		var g, f;
		return this.each(function(c, b) {
			g = w(typeof a == "string" ? P.Event(a) : a), g.data = h, g.target = b, P.each(I(b, a.type || a), function(e, d) {
				f = d.proxy(g);
				if (g.isImmediatePropagationStopped()) {
					return !1
				}
			})
		}), f
	}, "focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error".split(" ").forEach(function(a) {
		P.fn[a] = function(b) {
			return b ? this.bind(a, b) : this.trigger(a)
		}
	}), ["focus", "blur"].forEach(function(a) {
		P.fn[a] = function(b) {
			return b ? this.bind(a, b) : this.each(function() {
				try {
					this[a]()
				} catch (c) {}
			}), this
		}
	}), P.Event = function(g, e) {
		typeof g != "string" && (e = g, g = e.type);
		var j = document.createEvent(L[g] || "Events"),
			i = !0;
		if (e) {
			for (var h in e) {
				h == "bubbles" ? i = !! e[h] : j[h] = e[h]
			}
		}
		return j.initEvent(g, i, !0, null, null, null, null, null, null, null, null, null, null, null, null), j.isDefaultPrevented = function() {
			return this.defaultPrevented
		}, j
	}
}(Zepto), function($) {
	function triggerAndReturn(a, b, c) {
		var d = $.Event(b);
		return $(a).trigger(d, c), !d.defaultPrevented
	}
	function triggerGlobal(a, b, c, d) {
		if (a.global) {
			return triggerAndReturn(b || document, c, d)
		}
	}
	function ajaxStart(a) {
		a.global && $.active++ === 0 && triggerGlobal(a, null, "ajaxStart")
	}
	function ajaxStop(a) {
		a.global && !--$.active && triggerGlobal(a, null, "ajaxStop")
	}
	function ajaxBeforeSend(a, b) {
		var c = b.context;
		if (b.beforeSend.call(c, a, b) === !1 || triggerGlobal(b, c, "ajaxBeforeSend", [a, b]) === !1) {
			return !1
		}
		triggerGlobal(b, c, "ajaxSend", [a, b])
	}
	function ajaxSuccess(a, b, c) {
		var d = c.context,
			e = "success";
		c.success.call(d, a, e, b), triggerGlobal(c, d, "ajaxSuccess", [b, c, a]), ajaxComplete(e, b, c)
	}
	function ajaxError(a, b, c, d) {
		var e = d.context;
		d.error.call(e, c, b, a), triggerGlobal(d, e, "ajaxError", [c, d, a]), ajaxComplete(b, c, d)
	}
	function ajaxComplete(a, b, c) {
		var d = c.context;
		c.complete.call(d, b, a), triggerGlobal(c, d, "ajaxComplete", [b, c]), ajaxStop(c)
	}
	function empty() {}
	function mimeToDataType(a) {
		return a && (a = a.split(";", 2)[0]), a && (a == htmlType ? "html" : a == jsonType ? "json" : scriptTypeRE.test(a) ? "script" : xmlTypeRE.test(a) && "xml") || "text"
	}
	function appendQuery(a, b) {
		return (a + "&" + b).replace(/[&?]{1,2}/, "?")
	}
	function serializeData(a) {
		a.processData && a.data && $.type(a.data) != "string" && (a.data = $.param(a.data, a.traditional)), a.data && (!a.type || a.type.toUpperCase() == "GET") && (a.url = appendQuery(a.url, a.data))
	}
	function parseArguments(a, b, c, d) {
		var e = !$.isFunction(b);
		return {
			url: a,
			data: e ? b : undefined,
			success: e ? $.isFunction(c) ? c : undefined : b,
			dataType: e ? d || c : c
		}
	}
	function serialize(a, b, c, d) {
		var e, f = $.isArray(b);
		$.each(b, function(b, g) {
			e = $.type(g), d && (b = c ? d : d + "[" + (f ? "" : b) + "]"), !d && f ? a.add(g.name, g.value) : e == "array" || !c && e == "object" ? serialize(a, g, c, b) : a.add(b, g)
		})
	}
	var jsonpID = 0,
		document = window.document,
		key, name, rscript = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
		scriptTypeRE = /^(?:text|application)\/javascript/i,
		xmlTypeRE = /^(?:text|application)\/xml/i,
		jsonType = "application/json",
		htmlType = "text/html",
		blankRE = /^\s*$/;
	$.active = 0, $.ajaxJSONP = function(a) {
		if ("type" in a) {
			var b = "jsonp" + ++jsonpID,
				c = document.createElement("script"),
				d = function() {
					clearTimeout(g), $(c).remove(), delete window[b]
				},
				e = function(c) {
					d();
					if (!c || c == "timeout") {
						window[b] = empty
					}
					ajaxError(null, c || "abort", f, a)
				},
				f = {
					abort: e
				},
				g;
			return ajaxBeforeSend(f, a) === !1 ? (e("abort"), !1) : (window[b] = function(b) {
				d(), ajaxSuccess(b, f, a)
			}, c.onerror = function() {
				e("error")
			}, c.src = a.url.replace(/=\?/, "=" + b), $("head").append(c), a.timeout > 0 && (g = setTimeout(function() {
				e("timeout")
			}, a.timeout)), f)
		}
		return $.ajax(a)
	}, $.ajaxSettings = {
		type: "GET",
		beforeSend: empty,
		success: empty,
		error: empty,
		complete: empty,
		context: null,
		global: !0,
		xhr: function() {
			return new window.XMLHttpRequest
		},
		accepts: {
			script: "text/javascript, application/javascript",
			json: jsonType,
			xml: "application/xml, text/xml",
			html: htmlType,
			text: "text/plain"
		},
		crossDomain: !1,
		timeout: 0,
		processData: !0,
		cache: !0
	}, $.ajax = function(options) {
		var settings = $.extend({}, options || {});
		for (key in $.ajaxSettings) {
			settings[key] === undefined && (settings[key] = $.ajaxSettings[key])
		}
		ajaxStart(settings), settings.crossDomain || (settings.crossDomain = /^([\w-]+:)?\/\/([^\/]+)/.test(settings.url) && RegExp.$2 != window.location.host), settings.url || (settings.url = window.location.toString()), serializeData(settings), settings.cache === !1 && (settings.url = appendQuery(settings.url, "_=" + Date.now()));
		var dataType = settings.dataType,
			hasPlaceholder = /=\?/.test(settings.url);
		if (dataType == "jsonp" || hasPlaceholder) {
			return hasPlaceholder || (settings.url = appendQuery(settings.url, "callback=?")), $.ajaxJSONP(settings)
		}
		var mime = settings.accepts[dataType],
			baseHeaders = {},
			protocol = /^([\w-]+:)\/\//.test(settings.url) ? RegExp.$1 : window.location.protocol,
			xhr = settings.xhr(),
			abortTimeout;
		settings.crossDomain || (baseHeaders["X-Requested-With"] = "XMLHttpRequest"), mime && (baseHeaders.Accept = mime, mime.indexOf(",") > -1 && (mime = mime.split(",", 2)[0]), xhr.overrideMimeType && xhr.overrideMimeType(mime));
		if (settings.contentType || settings.contentType !== !1 && settings.data && settings.type.toUpperCase() != "GET") {
			baseHeaders["Content-Type"] = settings.contentType || "application/x-www-form-urlencoded"
		}
		settings.headers = $.extend(baseHeaders, settings.headers || {}), xhr.onreadystatechange = function() {
			if (xhr.readyState == 4) {
				xhr.onreadystatechange = empty, clearTimeout(abortTimeout);
				var result, error = !1;
				if (xhr.status >= 200 && xhr.status < 300 || xhr.status == 304 || xhr.status == 0 && protocol == "file:") {
					dataType = dataType || mimeToDataType(xhr.getResponseHeader("content-type")), result = xhr.responseText;
					try {
						dataType == "script" ? (1, eval)(result) : dataType == "xml" ? result = xhr.responseXML : dataType == "json" && (result = blankRE.test(result) ? null : $.parseJSON(result))
					} catch (e) {
						error = e
					}
					error ? ajaxError(error, "parsererror", xhr, settings) : ajaxSuccess(result, xhr, settings)
				} else {
					ajaxError(null, xhr.status ? "error" : "abort", xhr, settings)
				}
			}
		};
		var async = "async" in settings ? settings.async : !0;
		xhr.open(settings.type, settings.url, async);
		for (name in settings.headers) {
			xhr.setRequestHeader(name, settings.headers[name])
		}
		return ajaxBeforeSend(xhr, settings) === !1 ? (xhr.abort(), !1) : (settings.timeout > 0 && (abortTimeout = setTimeout(function() {
			xhr.onreadystatechange = empty, xhr.abort(), ajaxError(null, "timeout", xhr, settings)
		}, settings.timeout)), xhr.send(settings.data ? settings.data : null), xhr)
	}, $.get = function(a, b, c, d) {
		return $.ajax(parseArguments.apply(null, arguments))
	}, $.post = function(a, b, c, d) {
		var e = parseArguments.apply(null, arguments);
		return e.type = "POST", $.ajax(e)
	}, $.getJSON = function(a, b, c) {
		var d = parseArguments.apply(null, arguments);
		return d.dataType = "json", $.ajax(d)
	}, $.fn.load = function(a, b, c) {
		if (!this.length) {
			return this
		}
		var d = this,
			e = a.split(/\s/),
			f, g = parseArguments(a, b, c),
			h = g.success;
		return e.length > 1 && (g.url = e[0], f = e[1]), g.success = function(a) {
			d.html(f ? $("<div>").html(a.replace(rscript, "")).find(f) : a), h && h.apply(d, arguments)
		}, $.ajax(g), this
	};
	var escape = encodeURIComponent;
	$.param = function(a, b) {
		var c = [];
		return c.add = function(a, b) {
			this.push(escape(a) + "=" + escape(b))
		}, serialize(c, a, b), c.join("&").replace(/%20/g, "+")
	}
	
}(Zepto), function(b) {
	b.fn.serializeArray = function() {
		var a = [],
			d;
		return b(Array.prototype.slice.call(this.get(0).elements)).each(function() {
			d = b(this);
			var c = d.attr("type");
			this.nodeName.toLowerCase() != "fieldset" && !this.disabled && c != "submit" && c != "reset" && c != "button" && (c != "radio" && c != "checkbox" || this.checked) && a.push({
				name: d.attr("name"),
				value: d.val()
			})
		}), a
	}, b.fn.serialize = function() {
		var c = [];
		return this.serializeArray().forEach(function(a) {
			c.push(encodeURIComponent(a.name) + "=" + encodeURIComponent(a.value))
		}), c.join("&")
	}, b.fn.submit = function(a) {
		if (a) {
			this.bind("submit", a)
		} else {
			if (this.length) {
				var d = b.Event("submit");
				this.eq(0).trigger(d), d.defaultPrevented || this.get(0).submit()
				
			}
		}
		return this
	}
}(Zepto), function(P, O) {
	function x(b) {
		return w(b.replace(/([a-z])([A-Z])/, "$1-$2"))
	}
	function w(b) {
		return b.toLowerCase()
	}
	function v(b) {
		return M ? M + b : w(b)
	}
	var N = "",
		M, L, K, J = {
			Webkit: "webkit",
			Moz: "",
			O: "o",
			ms: "MS"
		},
		I = window.document,
		H = I.createElement("div"),
		G = /^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i,
		F, E, D, C, B, A, z, y = {};
	P.each(J, function(b, c) {
		if (H.style[b + "TransitionProperty"] !== O) {
			return N = "-" + w(b) + "-", M = c, !1
		}
	}), F = N + "transform", y[E = N + "transition-property"] = y[D = N + "transition-duration"] = y[C = N + "transition-timing-function"] = y[B = N + "animation-name"] = y[A = N + "animation-duration"] = y[z = N + "animation-timing-function"] = "", P.fx = {
		off: M === O && H.style.transitionProperty === O,
		speeds: {
			_default: 400,
			fast: 200,
			slow: 600
		},
		cssPrefix: N,
		transitionEnd: v("TransitionEnd"),
		animationEnd: v("AnimationEnd")
	}, P.fn.animate = function(a, h, g, f) {
		return P.isPlainObject(h) && (g = h.easing, f = h.complete, h = h.duration), h && (h = (typeof h == "number" ? h : P.fx.speeds[h] || P.fx.speeds._default) / 1000), this.anim(a, h, g, f)
	}, P.fn.anim = function(n, m, l, k) {
		var j, b = {},
			a, r = "",
			q = this,
			p, o = P.fx.transitionEnd;
		m === O && (m = 0.4), P.fx.off && (m = 0);
		if (typeof n == "string") {
			b[B] = n, b[A] = m + "s", b[z] = l || "linear", o = P.fx.animationEnd
		} else {
			a = [];
			for (j in n) {
				G.test(j) ? r += j + "(" + n[j] + ") " : (b[j] = n[j], a.push(x(j)))
			}
			r && (b[F] = r, a.push(F)), m > 0 && typeof n == "object" && (b[E] = a.join(", "), b[D] = m + "s", b[C] = l || "linear")
		}
		return p = function(c) {
			if (typeof c != "undefined") {
				if (c.target !== c.currentTarget) {
					return
				}
				P(c.target).unbind(o, p)
			}
			P(this).css(y), k && k.call(this)
		}, m > 0 && this.bind(o, p), this.size() && this.get(0).clientLeft, this.css(b), m <= 0 && setTimeout(function() {
			q.each(function() {
				p.call(this)
			})
		}, 0), this
	}, H = null
}(Zepto);

function checkEnglish(b) {
	var a = /^[A-Za-z]+$/;
	if (a.test(b)) {
		return true
	} else {
		return false
	}
}
function checkEnglishAndChiness(b) {
	var a = /^[一-龥A-Za-z]+$/;
	if (a.test(b)) {
		return true
	} else {
		return false
	}
}
function checkChinessEnghlish(b) {
	var a = /^[一-龥]+[A-Za-z]+[一-龥]+[一-龥a-zA-Z]*$/;
	if (a.test(b)) {
		return true
	} else {
		return false
	}
}
function checkEnglishChiness(b) {
	var a = /^[A-Za-z]+[一-龥]+[一-龥a-zA-Z]*$/;
	if (a.test(b)) {
		return true
	} else {
		return false
	}
}
function checkChiness(b) {
	var a = /^[一-龥]+$/;
	if (a.test(b)) {
		return true
	} else {
		return false
	}
}
function checkPassengerAndContactEnglishName(a) {
	var b = /^[A-Za-z]+[\/\/\/]+[A-Za-z]+$/;
	if (b.test(a)) {
		return true
	} else {
		return false
	}
}
function checkPassengerAndContactName(a) {
	if (a) {
		if (a.length > 26) {
			return 1
		} else {
			if (checkEnglishAndChiness(a)) {
				if (checkChinessEnghlish(a)) {
					return 2
				}
				if (checkEnglishChiness(a)) {
					return 3
				}
				if (checkEnglish(a)) {
					if (a.length < 3) {
						return 5
					} else {
						return 4
					}
				}
				if (checkChiness(a)) {
					if (a.length > 13) {
						return 1
					}
					if (a.length <= 1) {
						return 5
					} else {
						return 0
					}
				}
			} else {
				if (checkPassengerAndContactEnglishName(a)) {
					if (a.length < 5) {
						return 5
					} else {
						return 0
					}
				}
				return 6
			}
		}
		return 0
	} else {
		return 5
	}
}
function isCardIDAccordWithFormat(a) {
	return /^[0-9a-zA-Z]+$/.test(a)
}
function isID15(a) {
	return /(^\d{15}$)/.test(a)
}
function isIDCardFormat(a) {
	return /(^\d{15}$)|(^\d{17}(?:\d|x|X)$)/.test(a)
}
function isMobileOK(a) {
	return /^1[3458][0-9]{9}$/.test(a)
}
function checkBD(a){
	var res =  /\d\d\.\d\d\.\d\d\d\d/.test(a);
	var res2=  /\d\.\d\.\d\d\d\d/.test(a);
	var res3=  /\d\.\d\d\.\d\d\d\d/.test(a);
	var res4=  /\d\d\.\d\.\d\d\d\d/.test(a);
	if(res || res2 || res3 || res4){
		return 1;
	}else{
		return 0;
	}
}
var qStorage = (function(b) {
	var c = window.localStorage;
	if (c) {
		return {
			get: function(a) {
				return c.getItem(a) || false
			},
			set: function(a, d) {
				c.setItem(a, JSON.stringify(d))
			},
			del: function(a) {
				c.removeItem(a)
			},
			clear: function() {
				c.clear()
			},
			getAll: function() {
				var a = c.length,
					g = null,
					f = [];
				for (var e = 0; e < a; e++) {
					g = c.key(e), f.push(g + "=" + this.getKey(g))
				}
				return f.join("; ")
			}
		}
	}
	return {
		get: function(f) {
			var g = document.cookie.split("; "),
				d = g.length,
				a = [];
			for (var e = 0; e < d; e++) {
				a = g[e].split("=");
				if (f === a[0]) {
					return unescape(a[1])
				}
			}
			return null
		},
		set: function(a, f, e) {
			if (!e || typeof e !== date) {
				e = new Date, e.setDate(e.getDate() + 1)
			}
			document.cookie = a + "=" + escape(f) + "; expires=" + e.toGMTString()
		},
		del: function(a) {
			document.cookie = a + "=''; expires=Fri, 31 Dec 1999 23:59:59 GMT;"
		},
		clear: function() {
			var f = document.cookie.split("; "),
				d = f.length,
				a = [];
			for (var e = 0; e < d; e++) {
				a = f[e].split("=");
				this.deleteKey(a[0])
			}
		},
		getAll: function() {
			return unescape(document.cookie.toString())
		}
	}
})();
(function() {
	var b = function() {
			return function() {
				//return ($.os.ios || ($.os.android && $.os.version >= "4.0")) && (!/UCBrowser|baidubrowser/i.test(navigator.userAgent))
			}()
		};
	$.extend($.fn, {
		page: function(c) {
			var e = this,
				g = c.init ||
			function() {}, f = c.active ||
			function() {}, h = c.unactive ||
			function() {}, d = c.cancel ||
			function() {}, a = false;
			return {
				thiz: $(e),
				init: function() {
					!a && g.apply(this, arguments);
					a = true
				},
				active: function() {
					f.apply(this, arguments)
				},
				unactive: function() {
					h.apply(this, arguments)
				},
				cancel: d
			}
		},
		pages: function(f) {
			var e = function(j) {
					return {
						"-webkit-transform": "translate3d(" + j + ",0,0)",
						transform: "translate3d(" + j + ",0,0)"
					}
				};
			var h = this,
				a = "",
				i = false,
				f = $.extend({
					main: "",
					side: [],
					animate: true
				}, f),
				d = $("#" + f.main),
				c = function(j) {
					window.scroll(0, 1);
					if (i) {
						return
					}
					i = true;
					d.show();
					j.thiz.animate(e($(window).width() + "px"), {
						duration: 200,
						easing: "ease-out",
						complete: function() {
							j.thiz.removeClass("active").hide();
							i = false
						}
					});
					a = "";
					window.setTimeout(function() {
						i = false
					}, 100)
				},
				g = function(l, k) {
					if (i) {
						return
					}
					i = true;
					a = l;
					$.each(f.side, function(j, m) {
						var n = m.thiz;
						if (l.indexOf(n.attr("id")) == 0) {
							n.addClass("active").show();
							m.active();
							window.scrollTo(0, 1);
							n.css(e($(window).width() + "px")).animate(e(0), {
								duration: 200,
								easing: "ease-out",
								complete: function() {
									d.hide();
									i = false
								}
							});
							return false
						}
					});
					!k && f.supportPushState && window.history.pushState({
						page: l
					}, l);
					window.setTimeout(function() {
						i = false
					}, 100)
				};
			f.supportPushState = !! window.history.pushState && b();
			$.each(f.side, function(m, n) {
				n.thiz.show();
				n.init();
				n.thiz.hide();
				var j = n.unactive;
				n.unactive = function() {
					(j.apply(n, arguments) !== false && f.supportPushState) ? window.history.back() : c(n)
				};
				n.thiz.find(".back").on("click", function(k) {
					k.preventDefault();
					if (n.cancel() === false) {
						return
					}
					$('#ky_page').show();
					f.supportPushState ? window.history.back() : c(n)
				})
			});
			$(window).on("popstate", function(j) {
				if (j.state && j.state.page) {
					g(j.state.page, true);
					return
				}
				if (!a) {
					return
				}
				$.each(f.side, function(l, m) {
					m.thiz.attr("id") == a && c(m)
				})
			}).on("load", function(j) {
				window.history.replaceState({
					page: ""
				}, "")
			});
			return {
				toPage: g
			}
		}
	})
})();
var QNotice = (function() {
	var a = "QNotice",
		d = {},
		f = false,
		c = function() {
			var g, h = navigator.userAgent,
				j = ["iPhone OS ", "Android "],
				l = adnroid = false;
			for (var k = 0; k < j.length; k++) {
				var m = h.indexOf(j[k]);
				if (m > -1) {
					if (k == 0) {
						l = true
					}
					if (k == 1) {
						adnroid = true
					}
					g = h.substr(m + j[k].length, 6);
					g = g.split(/_|\./)
				}
			}
			if ((adnroid && Number(g[0] + "." + g[1]) >= 2.2) || (l && Number(g[0]) > 4)) {
				f = true
			}
			return {
				sys: l || adnroid,
				version: g
			}
		}();
	var e = function(g) {
			return Object.prototype.toString.call(g)
		};
	var b = false;
	d.show = function(h, n, k, j) {
		switch (arguments.length) {
		case 0:
			return;
		case 1:
			if (e(arguments[0]) !== "[object String]") {
				return
			}
			break;
		case 2:
			if (e(arguments[0]) !== "[object String]") {
				return
			} else {
				if (e(arguments[1]) === "[object String]") {
					n = arguments[1]
				} else {
					if (e(arguments[1]) === "[object Number]") {
						k = arguments[1];
						n = "#ff0000"
					} else {
						return
					}
				}
			}
			break;
		case 3:
			if (e(arguments[0]) !== "[object String]" || e(arguments[1]) !== "[object String]" || e(arguments[2]) !== "[object Number]") {
				return
			}
			break;
		default:
		}
		h = h ? h : "出现错误";
		n = n ? n : "#333";
		k = k ? k : 2000;
		if (b) {
			return
		}
		setTimeout(function() {
			b = false
		}, k + 450);
		b = true;
		var g = document.getElementById(a);
		if (g == null) {
			g = document.createElement("div");
			g.id = a;
			if (j) {
				g.className = j
			} else {
				g.style.cssText = "display:block;position:absolute;z-index:99999;left:0;opacity:1;width:100%;line-height:100px;color:white;text-align:center"
			}
			if (f) {
				g.style.position = "fixed"
			}
			document.getElementsByTagName("body")[0].appendChild(g)
		}
		g.style.display = "block";
		g.style.background = n;
		g.innerHTML = h;
		var o = g.offsetHeight,
			m = f ? -o : window.scrollY - o;
		g.style.top = m + "px";
		var q = function(r, u) {
				u = u ? 1 : -1;
				var t = 0,
					s = false;
				clearInterval(s);
				s = setInterval(function() {
					if (t < 10) {
						t++;
						g.style.top = r + u * t * o / 10 + "px"
					} else {
						clearInterval(s);
						if (u == -1) {
							g.style.display = "none"
						}
					}
				}, 20)
			};
		q(m, true);
		var l;
		setTimeout(function() {
			l = parseInt(g.style.top);
			q(l)
		}, k);

		function i(r) {
			g.style.opacity = "1";
			g.style.top = window.scrollY + "px";
			l = window.scrollY
		}
		function p(r) {
			g.style.opacity = "0";
			l = window.scrollY
		}
		if (!f) {
			window.addEventListener("scroll", i, false);
			document.addEventListener("touchmove", p, false)
		}
	};
	return d
})();
var qdialog = (function() {
	var e = {},
		g = document,
		j = false,
		a = {},
		f, c = {
			name: "",
			addDom: g.body,
			content: "",
			width: 200,
			height: 200,
			x: "center",
			y: "center",
			isMask: true,
			scrollMove: false,
			style: ""
		};
	var b = function(k, d) {
			$(k).css({
				"transform-origin": d,
				"-moz-transform-origin": d,
				"-webkit-transform-origin": d,
				"-o-transform-origin": d,
				"-ms-transform-origin": d
			})
		};
	var i = function() {
			if ($("#mMask").length == 0) {
				var d = g.createElement("div");
				d.id = "mMask";
				$.extend(d.style, {
					background: "#000",
					height: (Math.max(g.body.scrollHeight, g.body.clientHeight, $(window).height()) + 1) + "px",
					width: "100%",
					top: "0px",
					left: "0px",
					opacity: "0",
					zIndex: "80000",
					position: "absolute",
					display: "block"
				});
				$("body").append(d)
			} else {
				$("#mMask").css("opacity", 0)
			}
			$("#mMask").show().animate({
				opacity: "0.7"
			}, {
				duration: 200,
				easing: "ease-out"
			})
		};
	var h = function() {
			if (!f) {
				return
			}
			if (a.style) {
				f[0].style.cssText = a.style
			}
			var d = {
				position: a.scrollMove ? "fixed" : "absolute",
				"z-index": "800001",
				width: a.width || "100%",
				height: a.height,
				overflow: "hidden"
			};
			if (a.x == "center") {
				if (a.width == "100%") {
					d.left = d.marginLeft = 0
				} else {
					d.left = "50%";
					d.marginLeft = -a.width / 2 + "px"
				}
			} else {
				d.left = a.x;
				d.marginLeft = "0"
			}
			if (a.y == "center") {
				d.top = $(window).height() / 2;
				d.marginTop = -a.height / 2 + "px"
			} else {
				if (a.y == "top" || a.y == "bottom") {
					d.position = "fixed";
					a.y == "top" ? d.top = 0 : d.bottom = 0;
					d.height = 0;
					d.marginTop = "0"
				} else {
					d.top = a.y;
					d.marginTop = "0"
				}
			}
			f.css(d);
			if (a.y == "top" || a.y == "bottom") {
				b(f, a.y);
				window.setTimeout(function() {
					f.height(a.height)
				}, 100)
			} else {
				if (a.y == "center") {
					window.addEventListener("resize", function() {
						f.css({
							top: $(window).height() / 2,
							marginTop: -a.height / 2
						})
					}, false)
				}
			}
		};
	e.open = function() {
		var d = {};
		if (typeof arguments[0] == "string") {
			d.content = arguments[0]
		}
		if (typeof arguments[0] == "object" || typeof arguments[1] == "object") {
			d = $.extend(d, (typeof arguments[0] == "object" ? arguments[0] : arguments[1]))
		}
		a = $.extend({}, c, d);
		if (!a.scrollMove || a.y == "bottom") {
			$(document).on("touchmove", function(l) {
				l.preventDefault()
			})
		}
		a.isMask ? i() : $("#mMask").hide();
		if (a.content) {
			var k = "dialogBox" + a.name;
			f = $("#" + k);
			if (f.length == 0) {
				$(a.addDom).append('<div id="' + k + '" class="dialogBox"></div>');
				f = $("#" + k)
			}
			h();
			$(f).html(a.content)
		}
		return e
	};
	e.close = function(k, l, p) {
		var o = l || "",
			d = k || false;
		$("#dialogBox" + o).remove();
		d && $("#mMask").animate({
			opacity: "0"
		}, {
			duration: 200,
			easing: "ease-out",
			complete: function() {
				$("#mMask").hide()
			}
		});
		p && p.call(this);
		$(document).off("touchmove")
	};
	return e
})();
if (!window.jQuery) {
	var jQuery = Zepto;
	(function(b) {
		["width", "height"].forEach(function(c) {
			var a = c.replace(/./, function(d) {
				return d[0].toUpperCase()
			});
			b.fn["outer" + a] = function(d) {
				var e = this;
				if (e) {
					var f = e[0]["offset" + a];
					({
						width: ["left", "right"],
						height: ["top", "bottom"]
					})[c].forEach(function(g) {
						d && (f += parseInt(e.css("margin-" + g), 10))
					});
					return f
				}
				return null
			}
		});
		["Left", "Top"].forEach(function(c, a) {
			function e(f) {
				return f && "object" === typeof f && "setInterval" in f ? f : 9 === f.nodeType ? f.defaultView || f.parentWindow : !1
			}
			var d = "scroll" + c;
			b.fn[d] = function(i) {
				var j, g;
				if (void 0 === i) {
					return j = this[0], !j ? null : (g = e(j)) ? "pageXOffset" in g ? g[a ? "pageYOffset" : "pageXOffset"] : g.document.documentElement[d] || g.document.body[d] : j[d]
				}
				this.each(function() {
					if (g = e(this)) {
						var k = !a ? i : b(g).scrollLeft(),
							h = a ? i : b(g).scrollTop();
						g.scrollTo(k, h)
					} else {
						this[d] = i
					}
				})
			}
		});
		b.fn._height = b.fn.height;
		b.fn.height = function() {
			if ("#document" == this[0].nodeName) {
				var c = document.body,
					a = document.documentElement;
				return Math.max(c.scrollHeight, c.offsetHeight, a.clientHeight, a.scrollHeight, a.offsetHeight)
			}
			return b.fn._height.apply(this, arguments)
		};
		b._extend = b.extend;
		b.extend = function() {
			arguments[0] = arguments[0] || {};
			return b._extend.apply(this, arguments)
		}
	})(jQuery)
}(function(au) {
	function an(aE, aD) {
		function aA(f) {
			return au.isArray(aB.readonly) ? (f = au(".dwwl", av).index(f), aB.readonly[f]) : aB.readonly
		}
		function aC(j) {
			var h = ["月", "日", "时", "分"];
			var o = '<div class="dw-bf">',
				f = 1,
				m;
			for (m in E[j]) {
				0 == f % 20 && (o += '</div><div class="dw-bf">'), o += '<div class="dw-li dw-v" data-val="' + m + '" style="height:' + A + "px;line-height:" + A + 'px;"><div class="dw-i">' + E[j][m] + (h[j] ? '<i class="dw-q">' + h[j] + "</i>" : "") + "</div></div>", f++
			}
			return o + "</div>"
		}
		function aw(f) {
			ar = au(".dw-li", f).index(au(".dw-v", f).eq(0));
			aj = au(".dw-li", f).index(au(".dw-v", f).eq(-1));
			Q = au(".dw-ul", av).index(f);
			aq = A;
			Y = az
		}
		function ax(f) {
			var h = aB.headerText;
			return h ? "function" == typeof h ? h.call(u, f) : h.replace(/\{value\}/i, f) : ""
		}
		function v() {
			az.temp = d && null !== az.val && az.val != D.val() || null === az.values ? aB.parseValue(D.val() || "", az) : az.values.slice(0);
			az.setValue(!0)
		}
		function ay(o, h, f, m, j) {
			!1 !== z("validate", [av, h, o]) && (au(".dw-ul", av).each(function(aK) {
				var aJ = au(this),
					aI = au('.dw-li[data-val="' + az.temp[aK] + '"]', aJ),
					aG = au(".dw-li", aJ),
					aM = aG.index(aI),
					aH = aG.length,
					O = aK == h || void 0 === h;
				if (!aI.hasClass("dw-v")) {
					for (var aN = aI, S = 0, aL = 0; 0 <= aM - S && !aN.hasClass("dw-v");) {
						S++, aN = aG.eq(aM - S)
					}
					for (; aM + aL < aH && !aI.hasClass("dw-v");) {
						aL++, aI = aG.eq(aM + aL)
					}(aL < S && aL && 2 !== m || !S || 0 > aM - S || 1 == m) && aI.hasClass("dw-v") ? aM += aL : (aI = aN, aM -= S)
				}
				if (!aI.hasClass("dw-sel") || O) {
					az.temp[aK] = aI.attr("data-val"), au(".dw-sel", aJ).removeClass("dw-sel"), aI.addClass("dw-sel"), az.scroll(aJ, aK, aM, O ? o : 0.1, O ? j : void 0)
				}
			}), az.change(f))
		}
		function H(aN) {
			if (!("inline" == aB.display || t === au(window).width() && a === au(window).height() && aN)) {
				var aO, aJ, aM, aL, aK, aG, aQ, aH, m, aI = 0,
					S = 0,
					aN = au(window).scrollTop();
				aL = au(".dwwr", av);
				var aP = au(".dw", av),
					O = {};
				aK = void 0 === aB.anchor ? D : aB.anchor;
				t = au(window).width();
				a = au(window).height();
				y = (y = window.innerHeight) || a;
				/modal|bubble/.test(aB.display) && (au(".dwc", av).each(function() {
					aO = au(this).outerWidth(!0);
					aI += aO;
					S = aO > S ? aO : S
				}), aO = aI > t ? S : aI, aL.width(aO));
				n = aP.outerWidth();
				x = aP.outerHeight(!0);
				"modal" == aB.display ? (aJ = (t - n) / 2, aM = aN + (y - x) / 2) : "bubble" == aB.display ? (m = !0, aH = au(".dw-arrw-i", av), aJ = aK.offset(), aG = aJ.top, aQ = aJ.left, aL = aK.outerWidth(), aK = aK.outerHeight(), aJ = aQ - (aP.outerWidth(!0) - aL) / 2, aJ = aJ > t - n ? t - (n + 20) : aJ, aJ = 0 <= aJ ? aJ : 20, aM = aG - x, aM < aN || aG > aN + y ? (aP.removeClass("dw-bubble-top").addClass("dw-bubble-bottom"), aM = aG + aK) : aP.removeClass("dw-bubble-bottom").addClass("dw-bubble-top"), aH = aH.outerWidth(), aL = aQ + aL / 2 - (aJ + (n - aH) / 2), au(".dw-arr", av).css({
					left: aL > aH ? aH : aL
				})) : (O.width = "100%", "top" == aB.display ? aM = aN : "bottom" == aB.display && (aM = aN + y - x));
				O.top = 0 > aM ? 0 : aM;
				O.left = aJ;
				aP.css(O);
				au(".dw-persp", av).height(0).height(aM + x > au(document).height() ? aM + x : au(document).height());
				m && (aM + x > aN + y || aG > aN + y) && au(window).scrollTop(aM + x - y)
			}
		}
		function J(f) {
			if ("touchstart" === f.type) {
				G = !0, setTimeout(function() {
					G = !1
				}, 500)
			} else {
				if (G) {
					return G = !1
				}
			}
			return !0
		}
		function z(j, h) {
			var f;
			h.push(az);
			au.each([aF, aD], function(m, o) {
				o[j] && (f = o[j].apply(u, h))
			});
			return f
		}
		function q(f) {
			var h = +f.data("pos") + 1;
			al(f, h > aj ? ar : h, 1, !0)
		}
		function Z(f) {
			var h = +f.data("pos") - 1;
			al(f, h < ar ? aj : h, 2, !0)
		}
		var e, A, B, av, t, y, a, n, x, r, X, az = this,
			W = au.mobiscroll,
			u = aE,
			D = au(u),
			I, N, aB = P({}, k),
			aF = {},
			E = [],
			l = {},
			b = {},
			d = D.is("input"),
			g = !1;
		az.enable = function() {
			aB.disabled = !1;
			d && D.prop("disabled", !1)
		};
		az.disable = function() {
			aB.disabled = !0;
			d && D.prop("disabled", !0)
		};
		az.scroll = function(j, aG, o, h, S) {
			function O() {
				clearInterval(l[aG]);
				delete l[aG];
				j.data("pos", o).closest(".dwwl").removeClass("dwa")
			}
			var m = (e - o) * A,
				p;
			m == b[aG] && l[aG] || (b[aG] = m, j.attr("style", s + "-transition:all " + (h ? h.toFixed(3) : 0) + "s ease-out;" + (c ? s + "-transform:translate3d(0," + m + "px,0);" : "top:" + m + "px;")), l[aG] && O(), h && void 0 !== S ? (p = 0, j.closest(".dwwl").addClass("dwa"), l[aG] = setInterval(function() {
				p += 0.1;
				j.data("pos", Math.round((o - S) * Math.sin(p / h * (Math.PI / 2)) + S));
				p >= h && O()
			}, 100)) : j.data("pos", o))
		};
		az.setValue = function(m, f, h, j) {
			au.isArray(az.temp) || (az.temp = aB.parseValue(az.temp + "", az));
			g && m && ay(h);
			B = aB.formatResult(az.temp);
			j || (az.values = az.temp.slice(0), az.val = B);
			f && d && D.val(B).trigger("change")
		};
		az.getValues = function() {
			var f = [],
				h;
			for (h in az._selectedValues) {
				f.push(az._selectedValues[h])
			}
			return f
		};
		az.validate = function(h, m, f, j) {
			ay(f, h, !0, m, j)
		};
		az.change = function(f) {
			B = aB.formatResult(az.temp);
			"inline" == aB.display ? az.setValue(!1, f) : au(".dwv", av).html(ax(B));
			f && z("onChange", [B])
		};
		az.changeWheel = function(O, h) {
			if (av) {
				var j = 0,
					p, m, o = O.length;
				for (p in aB.wheels) {
					for (m in aB.wheels[p]) {
						if (-1 < au.inArray(j, O) && (E[j] = aB.wheels[p][m], au(".dw-ul", av).eq(j).html(aC(j)), o--, !o)) {
							H();
							ay(h, void 0, !0);
							return
						}
						j++
					}
				}
			}
		};
		az.isVisible = function() {
			return g
		};
		az.tap = function(h, m) {
			var j, f;
			aB.tap && h.bind("touchstart", function(o) {
				o.preventDefault();
				j = ag(o, "X");
				f = ag(o, "Y")
			}).bind("touchend", function(o) {
				20 > Math.abs(ag(o, "X") - j) && 20 > Math.abs(ag(o, "Y") - f) && m.call(this, o);
				L = !0;
				setTimeout(function() {
					L = !1
				}, 300)
			});
			h.bind("click", function(o) {
				L || m.call(this, o)
			})
		};
		az.show = function(p) {
			if (aB.disabled || g) {
				return !1
			}
			"top" == aB.display && (r = "slidedown");
			"bottom" == aB.display && (r = "slideup");
			v();
			z("onBeforeShow", [av]);
			var o = 0,
				j, m = "";
			r && !p && (m = "dw-" + r + " dw-in");
			for (var h = '<div class="dw-trans ' + aB.theme + " dw-" + aB.display + '">' + ("inline" == aB.display ? '<div class="dw dwbg dwi"><div class="dwwr">' : '<div class="dw-persp"><div class="dwo"></div><div class="dw dwbg ' + m + '"><div class="dw-arrw"><div class="dw-arrw-i"><div class="dw-arr"></div></div></div><div class="dwwr">' + (aB.headerText ? '<div class="dwv"></div>' : "")), p = 0; p < aB.wheels.length; p++) {
				h += '<div class="dwc' + ("scroller" != aB.mode ? " dwpm" : " dwsc") + (aB.showLabel ? "" : " dwhl") + '"><div class="dwwc dwrc"><table cellpadding="0" cellspacing="0"><tr>';
				for (j in aB.wheels[p]) {
					E[o] = aB.wheels[p][j], h += '<td><div class="dwwl dwrc dwwl' + o + '">' + ("scroller" != aB.mode ? '<div class="dwwb dwwbp" style="height:' + A + "px;line-height:" + A + 'px;"><span>+</span></div><div class="dwwb dwwbm" style="height:' + A + "px;line-height:" + A + 'px;"><span>&ndash;</span></div>' : "") + '<div class="dwl">' + j + '</div><div class="dww" style="height:' + aB.rows * A + "px;min-width:" + aB.width + 'px;"><div class="dw-ul">', h += aC(o), h += '</div><div class="dwwo"></div></div><div class="dwwol"></div></div></td>', o++
				}
				h += "</tr></table></div></div>"
			}
			h += ("inline" != aB.display ? '<div class="dwbc' + (aB.button3 ? " dwbc-p" : "") + '"><span class="dwbw dwb-s"><span class="dwb">' + aB.setText + "</span></span>" + (aB.button3 ? '<span class="dwbw dwb-n"><span class="dwb">' + aB.button3Text + "</span></span>" : "") + '<span class="dwbw dwb-c"><span class="dwb">' + aB.cancelText + "</span></span></div></div>" : '<div class="dwcc"></div>') + "</div></div></div>";
			av = au(h);
			ay();
			z("onMarkupReady", [av]);
			"inline" != aB.display ? (av.appendTo("body"), setTimeout(function() {
				av.removeClass("dw-trans").find(".dw").removeClass(m)
			}, 350)) : D.is("div") ? D.html(av) : av.insertAfter(D);
			g = !0;
			I.init(av, az);
			"inline" != aB.display && (az.tap(au(".dwb-s span", av), function() {
				if (az.hide(false, "set") !== false) {
					az.setValue(false, true);
					z("onSelect", [az.val])
				}
			}), az.tap(au(".dwb-c span", av), function() {
				az.cancel()
			}), aB.button3 && az.tap(au(".dwb-n span", av), aB.button3), aB.scrollLock && av.bind("touchmove", function(f) {
				x <= y && n <= t && f.preventDefault()
			}), au("input,select,button").each(function() {
				au(this).prop("disabled") || au(this).addClass("dwtd").prop("disabled", true)
			}), H(), au(window).bind("resize.dw", function() {
				clearTimeout(X);
				X = setTimeout(function() {
					H(true)
				}, 100)
			}));
			av.delegate(".dwwl", "DOMMouseScroll mousewheel", function(S) {
				if (!aA(this)) {
					S.preventDefault();
					var S = S.originalEvent,
						S = S.wheelDelta ? S.wheelDelta / 120 : S.detail ? -S.detail / 3 : 0,
						O = au(".dw-ul", this),
						f = +O.data("pos"),
						f = Math.round(f - S);
					aw(O);
					al(O, f, S < 0 ? 1 : 2)
				}
			}).delegate(".dwb, .dwwb", T, function() {
				au(this).addClass("dwb-a")
			}).delegate(".dwwb", T, function(aG) {
				aG.stopPropagation();
				aG.preventDefault();
				var O = au(this).closest(".dwwl");
				if (J(aG) && !aA(O) && !O.hasClass("dwa")) {
					ab = true;
					var f = O.find(".dw-ul"),
						S = au(this).hasClass("dwwbp") ? q : Z;
					aw(f);
					clearInterval(V);
					V = setInterval(function() {
						S(f)
					}, aB.delay);
					S(f)
				}
			}).delegate(".dwwl", T, function(f) {
				f.preventDefault();
				if (J(f) && !at && !aA(this) && !ab) {
					at = true;
					au(document).bind(ao, ac);
					ae = au(".dw-ul", this);
					F = aB.mode != "clickpick";
					M = +ae.data("pos");
					aw(ae);
					i = l[Q] !== void 0;
					ad = ag(f, "Y");
					K = new Date;
					R = ad;
					az.scroll(ae, Q, M, 0.001);
					F && ae.closest(".dwwl").addClass("dwa")
				}
			});
			z("onShow", [av, B])
		};
		az.hide = function(h, f) {
			if (!1 === z("onClose", [B, f])) {
				return !1
			}
			au(".dwtd").prop("disabled", !1).removeClass("dwtd");
			D.blur();
			av && ("inline" != aB.display && r && !h ? (av.addClass("dw-trans").find(".dw").addClass("dw-" + r + " dw-out"), setTimeout(function() {
				av.remove();
				av = null
			}, 350)) : (av.remove(), av = null), g = !1, b = {}, au(window).unbind(".dw"))
		};
		az.cancel = function() {
			!1 !== az.hide(!1, "cancel") && z("onCancel", [az.val])
		};
		az.init = function(f) {
			I = P({
				defaults: {},
				init: af
			}, W.themes[f.theme || aB.theme]);
			N = W.i18n[f.lang || aB.lang];
			P(aD, f);
			P(aB, I.defaults, N, aD);
			az.settings = aB;
			D.unbind(".dw");
			if (f = W.presets[aB.preset]) {
				aF = f.call(u, az), P(aB, aF, aD), P(U, aF.methods)
			}
			e = Math.floor(aB.rows / 2);
			A = aB.height;
			r = aB.animate;
			void 0 !== D.data("dwro") && (u.readOnly = aa(D.data("dwro")));
			g && az.hide();
			"inline" == aB.display ? az.show() : (v(), d && aB.showOnFocus && (D.data("dwro", u.readOnly), u.readOnly = !0, D.bind("focus.dw", function() {
				az.show()
			})))
		};
		az.trigger = function(h, f) {
			return z(h, f)
		};
		az.values = null;
		az.val = null;
		az.temp = null;
		az._selectedValues = {};
		az.init(aD)
	}
	function ak(d) {
		for (var b in d) {
			if (void 0 !== w[d[b]]) {
				return !0
			}
		}
		return !1
	}
	function ai(a) {
		return am[a.id]
	}
	function ag(h, e) {
		var f = h.originalEvent,
			d = h.changedTouches;
		return d || f && f.changedTouches ? f ? f.changedTouches[0]["page" + e] : d[0]["page" + e] : h["page" + e]
	}
	function aa(a) {
		return !0 === a || "true" == a
	}
	function ap(e, b, d) {
		e = e > d ? d : e;
		return e < b ? b : e
	}
	function al(q, n, r, o, t) {
		var n = ap(n, ar, aj),
			f = au(".dw-li", q).eq(n),
			m = void 0 === t ? n : t,
			d = Q,
			a = o ? n == m ? 0.1 : Math.abs(0.1 * (n - m)) : 0;
		Y.temp[d] = f.attr("data-val");
		Y.scroll(q, d, n, a, t);
		setTimeout(function() {
			Y.validate(d, r, a, t)
		}, 10)
	}
	function C(e, b, d) {
		return U[b] ? U[b].apply(e, Array.prototype.slice.call(d, 1)) : "object" === typeof b ? U.init.call(e, b) : e
	}
	var am = {},
		V, af = function() {},
		aq, ar, aj, Y, ah = (new Date).getTime(),
		at, ab, ae, Q, ad, R, K, M, i, F, w = document.createElement("modernizr").style,
		c = ak(["perspectiveProperty", "WebkitPerspective", "MozPerspective", "OPerspective", "msPerspective"]),
		s = function() {
			var b = ["Webkit", "Moz", "O", "ms"],
				d;
			for (d in b) {
				if (ak([b[d] + "Transform"])) {
					return "-" + b[d].toLowerCase()
				}
			}
			return ""
		}(),
		P = au.extend,
		L, G, T = "touchstart mousedown",
		ao = "touchmove mousemove",
		ac = function(b) {
			F && (b.preventDefault(), R = ag(b, "Y"), Y.scroll(ae, Q, ap(M + (ad - R) / aq, ar - 1, aj + 1)));
			i = !0
		},
		k = {
			width: 50,
			height: 40,
			rows: 3,
			delay: 300,
			disabled: !1,
			readonly: !1,
			showOnFocus: !0,
			showLabel: !0,
			wheels: [],
			theme: "",
			headerText: "{value}",
			display: "modal",
			mode: "scroller",
			preset: "",
			lang: "en-US",
			setText: "Set",
			cancelText: "Cancel",
			scrollLock: !0,
			tap: !0,
			formatResult: function(b) {
				return b.join(" ")
			},
			parseValue: function(t, n) {
				var r = n.settings.wheels,
					q = t.split(" "),
					p = [],
					o = 0,
					u, l, m;
				for (u = 0; u < r.length; u++) {
					for (l in r[u]) {
						if (void 0 !== r[u][l][q[o]]) {
							p.push(q[o])
						} else {
							for (m in r[u][l]) {
								p.push(m);
								break
							}
						}
						o++
					}
				}
				return p
			}
		},
		U = {
			init: function(b) {
				void 0 === b && (b = {});
				return this.each(function() {
					this.id || (ah += 1, this.id = "scoller" + ah);
					am[this.id] = new an(this, b)
				})
			},
			enable: function() {
				return this.each(function() {
					var b = ai(this);
					b && b.enable()
				})
			},
			disable: function() {
				return this.each(function() {
					var b = ai(this);
					b && b.disable()
				})
			},
			isDisabled: function() {
				var b = ai(this[0]);
				if (b) {
					return b.settings.disabled
				}
			},
			isVisible: function() {
				var b = ai(this[0]);
				if (b) {
					return b.isVisible()
				}
			},
			option: function(b, d) {
				return this.each(function() {
					var a = ai(this);
					if (a) {
						var e = {};
						"object" === typeof b ? e = b : e[b] = d;
						a.init(e)
					}
				})
			},
			setValue: function(f, h, e, j) {
				return this.each(function() {
					var a = ai(this);
					a && (a.temp = f, a.setValue(!0, h, e, j))
				})
			},
			getInst: function() {
				return ai(this[0])
			},
			getValue: function() {
				var b = ai(this[0]);
				if (b) {
					return b.values
				}
			},
			getValues: function() {
				var b = ai(this[0]);
				if (b) {
					return b.getValues()
				}
			},
			show: function() {
				var b = ai(this[0]);
				if (b) {
					return b.show()
				}
			},
			hide: function() {
				return this.each(function() {
					var b = ai(this);
					b && b.hide()
				})
			},
			destroy: function() {
				return this.each(function() {
					var a = ai(this);
					a && (a.hide(), au(this).unbind(".dw"), delete am[this.id], au(this).is("input") && (this.readOnly = aa(au(this).data("dwro"))))
				})
			}
		};
	au(document).bind("touchend mouseup", function() {
		if (at) {
			var f = new Date - K,
				a = ap(M + (ad - R) / aq, ar - 1, aj + 1),
				b, d = ae.offset().top;
			300 > f ? (f = (R - ad) / f, b = f * f / 0.0012, 0 > R - ad && (b = -b)) : b = R - ad;
			f = Math.round(M - b / aq);
			if (!b && !i) {
				var d = Math.floor((R - d) / aq),
					e = au(".dw-li", ae).eq(d);
				b = F;
				!1 !== Y.trigger("onValueTap", [e]) ? f = d : b = !0;
				b && (e.addClass("dw-hl"), setTimeout(function() {
					e.removeClass("dw-hl")
				}, 200))
			}
			F && al(ae, f, 0, !0, Math.round(a));
			at = !1;
			ae = null;
			au(document).unbind(ao, ac)
		}
		ab && (clearInterval(V), ab = !1);
		au(".dwb-a").removeClass("dwb-a")
	}).bind("mouseover mouseup mousedown click", function(b) {
		if (L) {
			return b.stopPropagation(), b.preventDefault(), !1
		}
	});
	au.fn.mobiscroll = function(a) {
		P(this, au.mobiscroll.shorts);
		return C(this, a, arguments)
	};
	au.mobiscroll = au.mobiscroll || {
		setDefaults: function(b) {
			P(k, b)
		},
		presetShort: function(b) {
			this.shorts[b] = function(a) {
				return C(this, P(a, {
					preset: b
				}), arguments)
			}
		},
		shorts: {},
		presets: {},
		themes: {},
		i18n: {}
	};
	au.scroller = au.scroller || au.mobiscroll;
	au.fn.scroller = au.fn.scroller || au.fn.mobiscroll
})(jQuery);
(function(c) {
	var d = c.mobiscroll,
		b = new Date(new Date().getTime() + 45 * 60 * 1000),
		f = {
			dateFormat: "mm/dd/yy",
			dateOrder: "mmddy",
			timeWheels: "hhiiA",
			timeFormat: "hh:ii A",
			startYear: b.getFullYear() - 100,
			endYear: b.getFullYear() + 1,
			monthNames: "January,February,March,April,May,June,July,August,September,October,November,December".split(","),
			monthNamesShort: "Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec".split(","),
			dayNames: "Sunday,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday".split(","),
			dayNamesShort: "Sun,Mon,Tue,Wed,Thu,Fri,Sat".split(","),
			shortYearCutoff: "+10",
			monthText: "Month",
			dayText: "Day",
			yearText: "Year",
			hourText: "Hours",
			minuteText: "Minutes",
			secText: "Seconds",
			ampmText: "&nbsp;",
			nowText: "Now",
			showNow: !1,
			stepHour: 1,
			stepMinute: 1,
			stepSecond: 1,
			separator: " "
		},
		e = function(w) {
			function ac(l, j, m) {
				return void 0 !== U[j] ? +l[U[j]] : void 0 !== m ? m : o[F[j]] ? o[F[j]]() : F[j](o)
			}
			function aa(l, j) {
				return Math.floor(l / j) * j
			}
			function Y(l) {
				var j = ac(l, "h", 0);
				return new Date(ac(l, "y"), ac(l, "m"), ac(l, "d", 1), ac(l, "a") ? j + 12 : j, ac(l, "i", 0), ac(l, "s", 0))
			}
			var ab = c(this),
				R = {},
				P;
			if (ab.is("input")) {
				switch (ab.attr("type")) {
				case "date":
					P = "yy-mm-dd";
					break;
				case "datetime":
					P = "yy-mm-ddTHH:ii:ssZ";
					break;
				case "datetime-local":
					P = "yy-mm-ddTHH:ii:ss";
					break;
				case "month":
					P = "yy-mm";
					R.dateOrder = "mmyy";
					break;
				case "time":
					P = "HH:ii:ss"
				}
				var ad = ab.attr("min"),
					ab = ab.attr("max");
				ad && (R.minDate = d.parseDate(P, ad));
				ab && (R.maxDate = d.parseDate(P, ab))
			}
			var ae = c.extend({}, f, R, w.settings),
				V = 0,
				R = [],
				s = [],
				U = {},
				af, F = {
					y: "getFullYear",
					m: "getMonth",
					d: "getDate",
					h: function(j) {
						j = j.getHours();
						j = L && 12 <= j ? j - 12 : j;
						return aa(j, k)
					},
					i: function(j) {
						return aa(j.getMinutes(), a)
					},
					s: function(j) {
						return aa(j.getSeconds(), h)
					},
					a: function(j) {
						return C && 11 < j.getHours() ? 1 : 0
					}
				},
				M = ae.preset,
				Q = ae.dateOrder,
				K = ae.timeWheels,
				T = Q.match(/D/),
				C = K.match(/a/i),
				L = K.match(/h/),
				g = "datetime" == M ? ae.dateFormat + ae.separator + ae.timeFormat : "time" == M ? ae.timeFormat : ae.dateFormat,
				o = new Date(new Date().getTime() + 45 * 60 * 1000),
				k = ae.stepHour,
				a = ae.stepMinute,
				h = ae.stepSecond,
				O = ae.minDate || new Date(ae.startYear, 0, 1),
				G = ae.maxDate || new Date(ae.endYear, 11, 31, 23, 59, 59);
			w.settings = ae;
			P = P || g;
			if (M.match(/date/i)) {
				c.each(["y", "m", "d"], function(j, l) {
					af = Q.search(RegExp(l, "i")); - 1 < af && s.push({
						o: af,
						v: l
					})
				});
				s.sort(function(l, j) {
					return l.o > j.o ? 1 : -1
				});
				c.each(s, function(l, j) {
					U[j.v] = l
				});
				ab = {};
				for (ad = 0; 3 > ad; ad++) {
					if (ad == U.y) {
						V++;
						ab[ae.yearText] = {};
						var v = O.getFullYear(),
							i = G.getFullYear();
						for (af = v; af <= i; af++) {
							ab[ae.yearText][af] = Q.match(/yy/i) ? af : (af + "").substr(2, 2)
						}
					} else {
						if (ad == U.m) {
							V++;
							ab[ae.monthText] = {};
							for (af = 0; 12 > af; af++) {
								v = Q.replace(/[dy]/gi, "").replace(/mm/, 9 > af ? "0" + (af + 1) : af + 1).replace(/m/, af + 1), ab[ae.monthText][af] = v.match(/MM/) ? v.replace(/MM/, '<span class="dw-mon">' + ae.monthNames[af] + "</span>") : v.replace(/M/, '<span class="dw-mon">' + ae.monthNamesShort[af] + "</span>")
							}
						} else {
							if (ad == U.d) {
								V++;
								ab[ae.dayText] = {};
								for (af = 1; 32 > af; af++) {
									ab[ae.dayText][af] = Q.match(/dd/i) && 10 > af ? "0" + af : af
								}
							}
						}
					}
				}
				R.push(ab)
			}
			if (M.match(/time/i)) {
				s = [];
				c.each(["h", "i", "s", "a"], function(l, j) {
					l = K.search(RegExp(j, "i")); - 1 < l && s.push({
						o: l,
						v: j
					})
				});
				s.sort(function(l, j) {
					return l.o > j.o ? 1 : -1
				});
				c.each(s, function(l, j) {
					U[j.v] = V + l
				});
				ab = {};
				for (ad = V; ad < V + 4; ad++) {
					if (ad == U.h) {
						V++;
						ab[ae.hourText] = {};
						for (af = 0; af < (L ? 12 : 24); af += k) {
							ab[ae.hourText][af] = L && 0 == af ? 12 : K.match(/hh/i) && 10 > af ? "0" + af : af
						}
					} else {
						if (ad == U.i) {
							V++;
							ab[ae.minuteText] = {};
							for (af = 0; 60 > af; af += a) {
								ab[ae.minuteText][af] = K.match(/ii/) && 10 > af ? "0" + af : af
							}
						} else {
							if (ad == U.s) {
								V++;
								ab[ae.secText] = {};
								for (af = 0; 60 > af; af += h) {
									ab[ae.secText][af] = K.match(/ss/) && 10 > af ? "0" + af : af
								}
							} else {
								ad == U.a && (V++, M = K.match(/A/), ab[ae.ampmText] = {
									"0": M ? "AM" : "am",
									1: M ? "PM" : "pm"
								})
							}
						}
					}
				}
				R.push(ab)
			}
			w.setDate = function(l, j, n, m) {
				for (var p in U) {
					this.temp[U[p]] = l[F[p]] ? l[F[p]]() : F[p](l)
				}
				this.setValue(!0, j, n, m)
			};
			w.getDate = function(j) {
				return Y(j)
			};
			return {
				button3Text: ae.showNow ? ae.nowText : void 0,
				button3: ae.showNow ?
				function() {
					w.setDate(new Date(new Date().getTime() + 45 * 60 * 1000), !1, 0.3, !0)
				} : void 0,
				wheels: R,
				headerText: function() {
					return d.formatDate(g, Y(w.temp), ae)
				},
				formatResult: function(j) {
					return d.formatDate(P, Y(j), ae)
				},
				parseValue: function(l) {
					var j = new Date(new Date().getTime() + 45 * 60 * 1000),
						n, m = [];
					try {
						j = d.parseDate(P, l, ae)
					} catch (p) {}
					for (n in U) {
						m[U[n]] = j[F[n]] ? j[F[n]]() : F[n](j)
					}
					return m
				},
				validate: function(l) {
					O = new Date(new Date().getTime() + 45 * 60 * 1000);
					var p = w.temp,
						m = {
							y: O.getFullYear(),
							m: 0,
							d: 1,
							h: 0,
							i: 0,
							s: 0,
							a: 0
						},
						n = {
							y: G.getFullYear(),
							m: 11,
							d: 31,
							h: aa(L ? 11 : 23, k),
							i: aa(59, a),
							s: aa(59, h),
							a: 1
						},
						r = !0,
						q = !0;
					c.each("y,m,d,a,h,i,s".split(","), function(D, A) {
						if (U[A] !== void 0) {
							var j = m[A],
								B = n[A],
								x = 31,
								N = ac(p, A),
								ag = c(".dw-ul", l).eq(U[A]),
								X, S;
							if (A == "d") {
								X = ac(p, "y");
								S = ac(p, "m");
								B = x = 32 - (new Date(X, S, 32)).getDate();
								T && c(".dw-li", ag).each(function() {
									var y = c(this),
										t = y.data("val"),
										u = (new Date(X, S, t)).getDay(),
										t = Q.replace(/[my]/gi, "").replace(/dd/, t < 10 ? "0" + t : t).replace(/d/, t);
									c(".dw-i", y).html(t.match(/DD/) ? t.replace(/DD/, '<span class="dw-day">' + ae.dayNames[u] + "</span>") : t.replace(/D/, '<span class="dw-day">' + ae.dayNamesShort[u] + "</span>"))
								})
							}
							r && O && (j = O[F[A]] ? O[F[A]]() : F[A](O));
							q && G && (B = G[F[A]] ? G[F[A]]() : F[A](G));
							if (A != "y") {
								var J = c(".dw-li", ag).index(c('.dw-li[data-val="' + j + '"]', ag)),
									H = c(".dw-li", ag).index(c('.dw-li[data-val="' + B + '"]', ag));
								c(".dw-li", ag).removeClass("dw-v").slice(J, H + 1).addClass("dw-v");
								A == "d" && c(".dw-li", ag).removeClass("dw-h").slice(x).addClass("dw-h")
							}
							N < j && (N = j);
							N > B && (N = B);
							r && (r = N == j);
							q && (q = N == B);
							if (ae.invalid && A == "d") {
								var ah = [];
								ae.invalid.dates && c.each(ae.invalid.dates, function(u, t) {
									t.getFullYear() == X && t.getMonth() == S && ah.push(t.getDate() - 1)
								});
								if (ae.invalid.daysOfWeek) {
									var W = (new Date(X, S, 1)).getDay(),
										Z;
									c.each(ae.invalid.daysOfWeek, function(u, t) {
										for (Z = t - W; Z < x; Z = Z + 7) {
											Z >= 0 && ah.push(Z)
										}
									})
								}
								ae.invalid.daysOfMonth && c.each(ae.invalid.daysOfMonth, function(u, t) {
									t = (t + "").split("/");
									t[1] ? t[0] - 1 == S && ah.push(t[1] - 1) : ah.push(t[0] - 1)
								});
								c.each(ah, function(t, u) {
									c(".dw-li", ag).eq(u).removeClass("dw-v")
								})
							}
							p[U[A]] = N
						}
					})
				},
				methods: {
					getDate: function(j) {
						var l = c(this).mobiscroll("getInst");
						if (l) {
							return l.getDate(j ? l.temp : l.values)
						}
					},
					setDate: function(j, n, m, l) {
						void 0 == n && (n = !1);
						return this.each(function() {
							var p = c(this).mobiscroll("getInst");
							p && p.setDate(j, n, m, l)
						})
					}
				}
			}
		};
	c.each(["date", "time", "datetime"], function(g, h) {
		d.presets[h] = e;
		d.presetShort(h)
	});
	d.formatDate = function(s, t, o) {
		if (!t) {
			return null
		}
		var o = c.extend({}, f, o),
			k = function(h) {
				for (var j = 0; a + 1 < s.length && s.charAt(a + 1) == h;) {
					j++, a++
				}
				return j
			},
			p = function(j, l, h) {
				l = "" + l;
				if (k(j)) {
					for (; l.length < h;) {
						l = "0" + l
					}
				}
				return l
			},
			g = function(j, m, h, l) {
				return k(j) ? l[m] : h[m]
			},
			a, u = "",
			v = !1;
		for (a = 0; a < s.length; a++) {
			if (v) {
				"'" == s.charAt(a) && !k("'") ? v = !1 : u += s.charAt(a)
			} else {
				switch (s.charAt(a)) {
				case "d":
					u += p("d", t.getDate(), 2);
					break;
				case "D":
					u += g("D", t.getDay(), o.dayNamesShort, o.dayNames);
					break;
				case "o":
					u += p("o", (t.getTime() - (new Date(t.getFullYear(), 0, 0)).getTime()) / 86400000, 3);
					break;
				case "m":
					u += p("m", t.getMonth() + 1, 2);
					break;
				case "M":
					u += g("M", t.getMonth(), o.monthNamesShort, o.monthNames);
					break;
				case "y":
					u += k("y") ? t.getFullYear() : (10 > t.getYear() % 100 ? "0" : "") + t.getYear() % 100;
					break;
				case "h":
					var i = t.getHours(),
						u = u + p("h", 12 < i ? i - 12 : 0 == i ? 12 : i, 2);
					break;
				case "H":
					u += p("H", t.getHours(), 2);
					break;
				case "i":
					u += p("i", t.getMinutes(), 2);
					break;
				case "s":
					u += p("s", t.getSeconds(), 2);
					break;
				case "a":
					u += 11 < t.getHours() ? "pm" : "am";
					break;
				case "A":
					u += 11 < t.getHours() ? "PM" : "AM";
					break;
				case "'":
					k("'") ? u += "'" : v = !0;
					break;
				default:
					u += s.charAt(a)
				}
			}
		}
		return u
	};
	d.parseDate = function(G, H, E) {
		var D = new Date(new Date().getTime() + 45 * 60 * 1000);
		if (!G || !H) {
			return D
		}
		var H = "object" == typeof H ? H.toString() : H + "",
			F = c.extend({}, f, E),
			v = F.shortYearCutoff,
			E = D.getFullYear(),
			o = D.getMonth() + 1,
			I = D.getDate(),
			J = -1,
			C = D.getHours(),
			D = D.getMinutes(),
			a = 0,
			y = -1,
			K = !1,
			g = function(h) {
				(h = w + 1 < G.length && G.charAt(w + 1) == h) && w++;
				return h
			},
			k = function(h) {
				g(h);
				h = H.substr(i).match(RegExp("^\\d{1," + ("@" == h ? 14 : "!" == h ? 20 : "y" == h ? 4 : "o" == h ? 3 : 2) + "}"));
				if (!h) {
					return 0
				}
				i += h[0].length;
				return parseInt(h[0], 10)
			},
			s = function(j, h, l) {
				j = g(j) ? l : h;
				for (h = 0; h < j.length; h++) {
					if (H.substr(i, j[h].length).toLowerCase() == j[h].toLowerCase()) {
						return i += j[h].length, h + 1
					}
				}
				return 0
			},
			i = 0,
			w;
		for (w = 0; w < G.length; w++) {
			if (K) {
				"'" == G.charAt(w) && !g("'") ? K = !1 : i++
			} else {
				switch (G.charAt(w)) {
				case "d":
					I = k("d");
					break;
				case "D":
					s("D", F.dayNamesShort, F.dayNames);
					break;
				case "o":
					J = k("o");
					break;
				case "m":
					o = k("m");
					break;
				case "M":
					o = s("M", F.monthNamesShort, F.monthNames);
					break;
				case "y":
					E = k("y");
					break;
				case "H":
					C = k("H");
					break;
				case "h":
					C = k("h");
					break;
				case "i":
					D = k("i");
					break;
				case "s":
					a = k("s");
					break;
				case "a":
					y = s("a", ["am", "pm"], ["am", "pm"]) - 1;
					break;
				case "A":
					y = s("A", ["am", "pm"], ["am", "pm"]) - 1;
					break;
				case "'":
					g("'") ? i++ : K = !0;
					break;
				default:
					i++
				}
			}
		}
		100 > E && (E += (new Date(new Date().getTime() + 45 * 60 * 1000)).getFullYear() - (new Date(new Date().getTime() + 45 * 60 * 1000)).getFullYear() % 100 + (E <= ("string" != typeof v ? v : (new Date(new Date().getTime() + 45 * 60 * 1000)).getFullYear() % 100 + parseInt(v, 10)) ? 0 : -100));
		if (-1 < J) {
			o = 1;
			I = J;
			do {
				F = 32 - (new Date(E, o - 1, 32)).getDate();
				if (I <= F) {
					break
				}
				o++;
				I -= F
			} while (1)
		}
		C = new Date(E, o - 1, I, -1 == y ? C : y && 12 > C ? C + 12 : !y && 12 == C ? 0 : C, D, a);
		if (C.getFullYear() != E || C.getMonth() + 1 != o || C.getDate() != I) {
			throw "Invalid date"
		}
		return C
	}
})(jQuery);
(function(b) {
	b.mobiscroll.themes.android = {
		defaults: {
			dateOrder: "Mddyy",
			mode: "clickpick",
			height: 50
		}
	}
})(jQuery);
(function(b) {
	var c = {
		defaults: {
			dateOrder: "Mddyy",
			mode: "mixed",
			rows: 5,
			width: 50,
			height: 36,
			showLabel: !1
		}
	};
	b.mobiscroll.themes["android-ics"] = c;
	b.mobiscroll.themes["android-ics light"] = c
})(jQuery);
(function(b) {
	b.mobiscroll.themes.ios = {
		defaults: {
			dateOrder: "MMdyy",
			rows: 5,
			height: 30,
			width: 55,
			headerText: !1,
			showLabel: !1
		}
	}
})(jQuery);
(function(b) {
	b.mobiscroll.themes.jqm = {
		defaults: {
			jqmBorder: "a",
			jqmBody: "c",
			jqmHeader: "b",
			jqmWheel: "d",
			jqmClickPick: "c",
			jqmSet: "b",
			jqmCancel: "c"
		},
		init: function(c, a) {
			var d = a.settings;
			b(".dw", c).removeClass("dwbg").addClass("ui-overlay-shadow ui-corner-all ui-body-" + d.jqmBorder);
			b(".dwb-s span", c).attr("data-role", "button").attr("data-theme", d.jqmSet);
			b(".dwb-n span", c).attr("data-role", "button").attr("data-theme", d.jqmCancel);
			b(".dwb-c span", c).attr("data-role", "button").attr("data-theme", d.jqmCancel);
			b(".dwwb", c).attr("data-role", "button").attr("data-theme", d.jqmClickPick);
			b(".dwv", c).addClass("ui-header ui-bar-" + d.jqmHeader);
			b(".dwwr", c).addClass("ui-body-" + d.jqmBody);
			b(".dwpm .dwwl", c).addClass("ui-body-" + d.jqmWheel);
			b(".dwpm .dwl", c).addClass("ui-body-" + d.jqmBody);
			c.trigger("create");
			b(".dwo", c).click(function() {
				a.cancel()
			})
		}
	}
})(jQuery);
(function(b) {
	
})(jQuery);
var G_url = "user/",
	G_log = G_url + "userapi/",
	G_touch = " ";

function getQuery(a) {
	var b = new RegExp("(^|&)" + a + "=([^&]*)(&|$)");
	var c = window.location.search.substr(1).match(b);
	return c != null ? c[2] : ""
}
function Qdecode(d) {
	var c;
	try {
		c = decodeURIComponent(d)
	} catch (e) {}
	return c || ""
}
function safeMobile(a) {
	return a.replace(/(\d{3})\d{4}(\d{4})/, "$1****$2")
}
var Taxi = {};
Taxi.getcookie = function(d) {
	
};
Taxi.setcookie = function(g, a, d, e, f) {
	var b = "";
	if (d) {
		b = new Date((new Date).getTime() + d);
		b = "; expires=" + b.toGMTString()
	}
	
};
Taxi.localorder = (function() {
	var a = "qn_taxi_localOrder";
	return {
		get: function() {
			return JSON.parse(qStorage.get(a)) || {}
		},
		add: function(e, d, b) {
			var c = this.get();
			if (b && c[e]) {
				c[e][b] = d
			} else {
				c[e] = d
			}
			qStorage.set(a, c)
		},
		remove: function(b) {
			var c = this.get();
			$.each(b, function(e, d) {
				if (c[d]) {
					delete c[d]
				}
			});
			qStorage.set(a, c)
		}
	}
})();
Taxi.fromhistory = (function() {
	var a = "qn_taxi_fromhistory";
	return {
		get: function() {
			return JSON.parse(qStorage.get(a)) || {}
		},
		add: function(d, c) {
			var b = this.get();
			b[d] = c;
			qStorage.set(a, b)
		},
		clear: function() {
			qStorage.set(a, "")
		}
	}
})();
Taxi.c = {
	t: "",
	uid: Taxi.getcookie("QN48"),
	pid: 10060,
	vid: 91010000,
	qcookie: Taxi.getcookie("_q"),
	tcookie: Taxi.getcookie("_t")
};

/***开始***/
Taxi.index = (function() {
	
	
	var g = {},
		n = {},
		i = 1,
		k = {},
		c = fromHistory = false,
		a = {};
	var d = "QN_car_phone";
	var o = {};
	var j = function() {},
		m = function(w) {},
		b = function() {},
		f = function() {},
		e = function() {},
		h = function() {},
		l = function() {
			var p = Taxi.fromhistory.get(),
				q = "";
			$.each(p, function(s, r) {
				q += r
			});
			return q
		};
	g.options = o;
	g.getPortList = h;
	g.pages = {};
	g.init = function() {
		j();
		b();
		
		//弹出子列表框
		$('.boxopen').on("click",function(){
			
			var box = $(this).next().find('.showbox').toggle() ;
			return false;
		});
		$('.logo').on("click",function(){
			window.location.href='./';
		});
		//扩展js 方法
		$('.loading_more').on("click",function(){
			//旅游
			$('.trahide').each(function(i){
				if( i < 5 ){
					$(this).show();
					$(this).removeClass('trahide');
				}
			});
			var cs 	= $('.trahide').attr('class');
			var tip	= $('#list').attr('class');
			if( !cs && tip ){
				$('.loading_more').html('<span>Sorry,已经到底了</span>');
			}
			//机票
			$('.tichide').each(function(a){
				if( a < 5 ){
						$(this).show();
						$(this).removeClass('tichide');
				}
			});
			var ts 	= $('.tichide').attr('class');
			var aip	= $('#list-items').attr('class');
			if( !ts && aip ){
				$('.loading_more').html('<span>Sorry,已经到底了</span>');
			}
				
		});
		//旅游提交团期
		$('#travelsub').on('click',function(){
			var tuang = $('#conttip').attr('date');
			if(tuang == " "){
				
				$('.J_toAddress').click();
				window.setTimeout(function(){QNotice.show('请先选择团期!');},600);
				return;
			}else{
				var href    = $(this).attr('date');
				var newhref = href + tuang;
				window.location.href = newhref;
			}
			
		});
		//机票预订信息订单提交
		$('#booksub').on('click',function(){
			
			
			
			$('.breq').each(function(){
				if(!$(this).val()){
					$('#tip').show();
					return false;
				}
			});
			var ttotime = $('#ttotime').val();
			if(ttotime){
				$('#rtime').val(ttotime);
				$('#journey_type').val(0);
			}else{
				$('#rtime').val('');
				$('#journey_type').val(1);
			}
			
			var email = $('#email').val();
			var myreg = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
			if(!myreg.test(email)){
				QNotice.show('请输入正确的邮箱地址 !');
				return false;
			}
			$('#tip').hide();
			$('form').submit();
		});
		//机票tab查询切换
		$("#ky_tabs li").click(function() {
				i = $("#ky_tabs li").index(this);
				if(i == 2){
					window.location.href= '@go=allticket';
					return false;
				}
				$("#ky_tabs li").removeClass().eq(i).addClass("active");
				i = i == 1 ? 0 : 1;
				if( i == 0 ){
					//单程
					$('#retime_div').hide();
					$('#gotype').val('');
					
				}else if(i == 1){
					//往返
					$('#retime_div').show();
					$('#gotype').val('1');
				}
		});
		//城市机票查询
		$('#searchcity').bind('input propertychange', function(){
			var lan = $(this).val().length;
			if(lan >=3 ){
				var newhtml = '<dt>请选择城市</dt>';
				$('#city_list').html('<dt class="loading">正在获取...</dt>');
				var term = $(this).val();
				$.ajax({
					type: "POST",
					url: "api/airport.php",
					data: "term="+term,
					dataType:'json',
					cache: false,
					success: function(msg){
						 $.each(msg,function(item){
							var code 		= msg[item].code;
							var fullname	= msg[item].fullname;
							newhtml += '<dd >'+fullname+' ('+code+')</dd>';
						 })
						 $('#city_list').html(newhtml);
					}
				}); 
			}
		});
		
		//机票查询提交
		$("#t_selectSubm").on("click", function(x) {
			var fcity = $('#fcity').val();
			var tcity = $('#tcity').val();
			var ftime = $('#ftime').val();
			var rtime = $('#rtime').val();
			var gotype	= $('#gotype').val();
			if(!fcity){
				QNotice.show('请输入出发城市 !');
				return false;
			}
			if(!tcity){
				QNotice.show('请输入目的地城市 !');
				return false ;
			}
			if(gotype == 1){
				if(!ftime){
					QNotice.show('请选择出发时间 !');
					return false;
				}
				if(!rtime){
					QNotice.show('请选择返回时间 !');
					return false;
				}
				
			}else{
				if(!ftime){
					QNotice.show('请选择出发时间 !');
					return false;
				}
			}
			var defaultpsg 	= $('#dafultpsg').val();
			var childpsg	= $('#childpsg').val();
			var babypsg		= $('#babypsg').val();
			var psgval		= $('#psg').val();
			if(babypsg > 0 &&  defaultpsg == 0 ){
				QNotice.show('婴儿乘客请家长陪同 ! ');
				return false ;
			}
			if(defaultpsg == 0 && childpsg == 0){
				QNotice.show('请选择乘机人 !');
				return false ;
			}
			if(!psgval){
				QNotice.show('请选择乘机人 !');
				return false ;
			}
			$('#loading_box').show();
			window.setTimeout(function () {$('form').submit();}, 100);
		})
		//城市机票查询列表显示
		$('.titticket').on("click",function(){
			
			$(this).next().toggle();
			$('.titticket').removeClass('ky_bg_grey');
			$(this).addClass('ky_bg_grey');
			return false;
		});
		//选择航班号
		$('.round').on('click',function(){
			if($(this).find('.min_price .op').hasClass('opok')){
				$(this).find('.min_price .op').removeClass('opok');
				$(this).parent().attr('date_code','');
				$(this).parent().attr('date_title','');
			}else{
				$(this).siblings().find('.min_price .op').removeClass('opok');
				$(this).find('.min_price .op').addClass('opok');
				var date_code 	= $(this).attr('date_code');
				var date_title 	= $(this).attr('date_title');
				$(this).parent().attr('date_code',date_code);
				$(this).parent().attr('date_title',date_title);
			}
		});
		
		//航班提交
		$('.ticket_book').on('click',function(){
			var gocode 	= $(this).siblings('.goair').attr('date_code');
			var aircode	= $(this).attr('date_air');
			var filename= $('#titlefile').attr('date_filename');
			var title	= $('#titletime').text() +' '+$('#titletcity').text();
			
			var airtitle	= $(this).siblings('.goair').attr('date_air');
			var countprice	= $(this).siblings('.goair').attr('countprice');
			var adultprice	= $(this).siblings('.goair').attr('adultprice');
			var adulttax	= $(this).siblings('.goair').attr('adulttax');
			var adultotal	= $(this).siblings('.goair').attr('adultotal');
			var chrprice	= $(this).siblings('.goair').attr('chrprice');
			var chrtax		= $(this).siblings('.goair').attr('chrtax');
			var chrtotal	= $(this).siblings('.goair').attr('chrtotal');
			var babyprice	= $(this).siblings('.goair').attr('babyprice');
			var babyttax	= $(this).siblings('.goair').attr('babytax');
			var babytotal	= $(this).siblings('.goair').attr('babytotal');
			
			$('#aircode').val(aircode);
			$('#gocode').val(gocode);
			$('#adultprice').val(adultprice);
			$('#adulttax').val(adulttax);
			$('#adulttotal').val(adultotal);
			$('#chrprice').val(chrprice);
			$('#chrtax').val(chrtax);
			$('#chrtotal').val(chrtotal);
			$('#babyprice').val(babyprice);
			$('#babyttax').val(babyttax);
			$('#babytotal').val(babytotal);
			$('#countprice').val(countprice);
			$('#airtitle').val(airtitle);
			
			
			var gotitle	= $(this).siblings('.goair').attr('date_title');
			$('#gotitle').val(gotitle);
			var reOb	= $(this).prev().attr('class');
			if(reOb == 'returnair ky_btop'){
				//往返
				var returncode 	= $(this).siblings('.returnair').attr('date_code');
				var retitle		= $(this).siblings('.returnair').attr('date_title');
				$('#retitle').val(retitle);
				$('#returncode').val(returncode);
				if(!gocode){
					QNotice.show('请选择去程航班');
					return false;
				}
				if(!returncode){
					QNotice.show('请选择返回航班');
					return false;
				}
				$('form').submit();
				}else{
				//单程
				if(!gocode){
					QNotice.show('请选择去程航班!');
					return false;
				}
				$('form').submit();
			
			}
		});
		//机票订单提交
		$('#ticketordersub').on('click',function(){
			var res = {c : '0'};
			$('.sub_request').each(function(i){
				if(!$(this).val()){
					var title = $(this).attr('msg');
					alert(title);
					res.c = 1;
					return false;
				}
			});
			if(res.c == 1){
				return false;
			}
			$('form').submit();
		});
		//旅游订单提交页面 js ,,人数选择
		$('#travelnum').change(function(){
			var num 	= $(this).val();
			var boxnum 	= $('.grouper_box').length;
			if(num > boxnum){
			//增加人数
				for(i=1;i<=(num - boxnum);i++){
					var html = '';
					html += '<div  class="grouper_box"  ><div class="qo_title ky_mt5">参团人'+[boxnum+i]+'</div>';
					html += '<div class="qo_item clrfix"><div class="qo_type name">姓 名</div><div class="ky_ticketinput"><input class="ky_required_input showname" type="text" size="10" validator="notEmpty" placeholder="必填" readonly="readonly"  /></div></div><div class="qo_item clrfix"><div class="qo_type idcard">护照号码</div>'+
									'<div class="ky_ticketinput">'+
										'<input class="ky_required_input showpassport" type="text" size="15" validator="notEmpty" placeholder="必填" readonly="readonly"   />'+
									'</div></div>';
					
					html += '<input type="hidden"  name="roomnum['+[boxnum+i]+']" value="'+[boxnum+i]+'" class="roomnum" data_value="'+[boxnum+i]+'" date_room="2"/><input type="hidden" name="_name['+[boxnum+i]+']" class="xingname"/><input type="hidden" name="_vorname['+[boxnum+i]+']" class="vorname"/><input type="hidden" name="_sex['+[boxnum+i]+']" class="sex"/>'+
							'<input type="hidden" name="_birth['+[boxnum+i]+']" class="birth"/><input type="hidden" name="_passport['+[boxnum+i]+']" class="passport" /><input type="hidden" name="roomtype['+[boxnum+i]+']" class="roomtype" value="2"/></div>';
					
					//追加到div
					$('#grouper').append(html);
				}
			}else if(num < boxnum){
			//减去人数 remove 删除多个div失效
				var html = '';
				for(i=0;i<(num);i++){
					html += '<div  class="grouper_box"  >';
					html += $('#grouper').find('.grouper_box').eq(i).html();
					html += '</div>';
				}
				$('#grouper').html(html);
				//已添加信息后 去掉人数显示bug
				$('#grouper').find('.grouper_box').each(function(i){
					var xing = $(this).find('.xingname').val();
					var ming = $(this).find('.vorname').val();
					
					var showpassport = $(this).find('.passport').val();	
					$(this).find('.showname').val(xing+ming);
					$(this).find('.showpassport').val(showpassport);
				});	
			}
			getprice();
		});

		//旅游订单提交 submit 方法冲突无效
		$('#travelbooksub').on('click',function(){
			var tip = 0;
			var up 	= $('#_boarding').val();
			var down= $('#_exit').val();
			if(up == 0 || down == 0){
				alert('请选择上下团城市');
				tip = 1;
				return false;
			}
			$('.request_info').each(function(i){
				var val = $(this).val();
				if(!val){
					alert('请将必要的信息补全');
					tip = 1;
					return false;
				}
			});
			if(tip == 1){
				return false;
			}
			return true;
		});
		//机票活动订单 人数增删减
		$('#people').change(function(){
			var num 	= $(this).val();
			var boxnum 	= $('.reserve_box').length;
			if(num > boxnum){
			//增加人数
				for(i=1;i<=(num - boxnum);i++){
					var html = '';
					html += '<div  class="reserve_box"  ><div class="qo_title ky_mt5">乘客'+[boxnum+i]+'</div>';
					html += '<div class="qo_item clrfix"><div class="qo_type name">姓 名</div><div class="ky_ticketinput"><input class="ky_required_input showname" type="text" size="10" validator="notEmpty" placeholder="必填" readonly="readonly"  /></div></div><div class="qo_item clrfix"><div class="qo_type idcard">护照号码</div>'+
									'<div class="ky_ticketinput">'+
										'<input class="ky_required_input showpassport" type="text" size="15" validator="notEmpty" placeholder="必填" readonly="readonly"   />'+
									'</div></div>';
					
					html += '<input type="hidden" name="_name['+[boxnum+i]+']" class="xingname"/><input type="hidden" name="_vorname['+[boxnum+i]+']" class="vorname"/><input type="hidden" name="_sex['+[boxnum+i]+']" class="sex"/>'+
							'<input type="hidden" name="_birth['+[boxnum+i]+']" class="birth"/><input type="hidden" name="_passport['+[boxnum+i]+']" class="passport" /></div>';
					
					//追加到div
					$('#reserve').append(html);
				}
			}else if(num < boxnum){
			//减去人数 remove 删除多个div失效
				var html = '';
				for(i=0;i<(num);i++){
					html += '<div  class="reserve_box"  >';
					html += $('#reserve').find('.reserve_box').eq(i).html();
					html += '</div>';
				}
				$('#reserve').html(html);
				//已添加信息后 去掉人数显示bug
				$('#reserve').find('.reserve_box').each(function(i){
					var xing = $(this).find('.xingname').val();
					var ming = $(this).find('.vorname').val();
					
					var showpassport = $(this).find('.passport').val();	
					$(this).find('.showname').val(xing+ming);
					$(this).find('.showpassport').val(showpassport);
				});	
			}
		});
		
		
		/******* 点击弹出框内容 *********************************/
		/*******团期选择 **********/
		var ws = $("#toAddressPage").page({
			init: function() {
				var z = this,
				y = $("#toAddress_list dd");
				y.on("click", "dd", function() {
					$('#conttip').text('已选择团期 '+$(this).attr('tuang'));
					$('#conttip').attr('date',$(this).attr('data_id'));
					window.location.href = $("#travelsub").attr("date")+$(this).attr('data_id');
					return false;
					var price 	= $(this).attr('data_price');
					var pricet 	= parseInt(price) - 10;
					$('#price_one').text(price);
					$('#price_two').text(pricet);
					z.unactive();
				});
				//点击弹出框
				$(".J_toAddress").on("click", function() {
					z.output = this;
					g.pages.toPage("toAddressPage");
				});
			}
		});
		//机票日期弹出框
		var ca = $("#calendarPage").page({
			init: function() {
				var z = this,
				y = $(".dayable");
				var idname 	= null;
				var inputid	= null;
				y.on("click",'td',function() {
					$('#'+idname).val($(this).attr('data-day'));
					$('#'+inputid).val($(this).attr('data-day'));
					z.unactive();
				});
				$(".calendar").on("click", function() {
					z.output = this;
					g.pages.toPage("calendarPage");
					idname 	= $(this).attr('id');
					inputid	= $(this).attr('date_id');
				});
			}
		});
		//机票城市弹出框
		var ci = $("#cityPage").page({
			init: function() {
				var z = this;
				var idname = null;
				var inputid	= null;
				//重要......dd 
				y = $("#city_list");
				y.on("click", 'dd',function() {
					$('#'+idname).val($(this).text());
					$('#'+inputid).val($(this).text());
					z.unactive();
				});
				$(".city").on("click", function() {
					z.output = this;
					g.pages.toPage("cityPage");
					idname 	= $(this).attr('id');
					inputid	= $(this).attr('date_id');
				});
			}
		});	
		//乘机人数选择弹出框
		var psg =$('#psgPage').page({
			init: function() {
				var z = this;
				$('#psgnum_sub ').on("click",function() {
					var defaultpsg 	= $('#dafultpsg').val();
					var childpsg	= $('#childpsg').val();
					var babypsg		= $('#babypsg').val();
					if(babypsg > 0 &&  defaultpsg == 0 ){
						QNotice.show('婴儿乘客请家长陪同 ! ');
						return false ;
					}
					if(defaultpsg == 0 && childpsg == 0){
						QNotice.show('请选择乘机人 !');
						return false ;
					}
					var psgtext = null;
					if(defaultpsg > 0){
						psgtext = defaultpsg+'成人 ';
					}
					if(childpsg > 0){
						psgtext = psgtext+childpsg+'儿童 ';
					}
					if(babypsg > 0){
						psgtext = psgtext+babypsg+'婴儿 ';
					}
					if($('#ticketzh').val() == 0 ){
						psgtext = psgtext+'非直航 ';
					}else{
						psgtext = psgtext+'直航 ';
					}
					if($('#ticketcw').val() == 'ECONOMY' ){
						psgtext = psgtext+'经济舱 ';
					}else if($('#ticketcw').val() == 'FIRST' ){
						psgtext = psgtext+'头等舱 ';
					}else{
						psgtext = psgtext+'商务舱';
					}
					
					$('#psg').val(psgtext);
					z.unactive();
				});
				$("#psg").on("click", function() {
					z.output = this;
					g.pages.toPage("psgPage");
				});
			}
		});
		//乘机人信息弹出框
		var pi = $('#psginfoPage').page({
			init: function() {
				var z 	= this;
				var ob 	= null;
				$('#psginfo_sub').on("click", function(){
					var psgxin 	= $('#psgxin').val();
					var psgname	= $('#psgname').val();
					var gender	= $('#gender').val();
					var brithdy = $('#brithdy').val();
					var idcard	= $('#idcard').val();
					var psgcountry = $('#psgcountry').val();
					var aircard = $('#aircard').val();
					if(!psgxin || !psgname || gender == 0 || !brithdy || !idcard || !psgcountry){
						QNotice.show('请输入完整的乘机人信息 ');
						return false;
					}
					if(!checkBD(brithdy)){
						QNotice.show('请输入正确的出生日期 ');
						return false;
					}
					$(ob).find('.lastname').val(psgname);
					$(ob).find('.fistname').val(psgxin);
					$(ob).find('.gender').val(gender);
					$(ob).find('.birdthy').val(brithdy);
					$(ob).find('.idcard').val(idcard);
					$(ob).find('.counrty').val(psgcountry);
					$(ob).find('.aircard').val(aircard);
					$(ob).find('.allname').text(psgxin+psgname);
					$(ob).find('.allbirdthy').text(brithdy);
					$(ob).find('.allidcard').text(idcard);
					//清空input 输入框
					$('.psg_info').val('');
					$('#gender').val(0);
					z.unactive();
				});
				$(".psginfo").on("click", function(){
					z.output = this;
					g.pages.toPage("psginfoPage");
					$('#pagetitle').text($(this).attr('data_title'));
					ob = this;
					//将内容补全到输入框
					$('#psgxin').val($(this).find('.fistname').val());
					$('#psgname').val($(this).find('.lastname').val());
					$('#gender').val($(this).find('.gender').val());
					$('#brithdy').val($(this).find('.birdthy').val());
					$('#idcard').val($(this).find('.idcard').val());
					$('#psgcountry').val($(this).find('.counrty').val());
					$('#aircard').val($(this).find('.aircard').val());
					
					
				});
			}
		});
		
		//参团人弹窗口
		var ot = $('#travelPage').page({
			init: function(){
				var z 	= this;
				var ob 	= null;
				$('#travel_sub').on("click", function(){
					var psgxin 	= $('#psgxin').val();
					var psgname	= $('#psgname').val();
					var gender	= $('#gender').val();
					var brithdy = $('#brithdy').val();
					var idcard	= $('#idcard').val();
					var room	= $('#room').val();
					if(!psgxin || !psgname  || !brithdy || !idcard){
						QNotice.show('请输入完整的参团人信息 ');
						return false;
					}
					if(!checkBD(brithdy)){
						QNotice.show('请输入正确的出生日期 ');
						return false;
					}
					$(ob).find('.xingname').val(psgxin);
					$(ob).find('.vorname').val(psgname);
					$(ob).find('.sex').val(gender);
					$(ob).find('.birth').val(brithdy);
					$(ob).find('.passport').val(idcard);
					$(ob).find('.roomtype').val(room);
					$(ob).find('.showname').val(psgxin+psgname);
					$(ob).find('.showpassport').val(idcard);
					
					//改变下个人房间
					var selfnum = $(ob).find('.roomnum').attr('data_value');
					var roomnum	= $(ob).find('.roomnum').val();	
					if(roomnum == parseInt(selfnum)){
						if(room == 2 || room == 3 || room == 4){
							$(ob).next().find('.roomnum').val(roomnum);
							$(ob).next().find('.roomtype').val(room);
						}
					}
					//计算价格
					getprice();
					$('.psg_info').val('');
					z.unactive();
				});
				$('#grouper').on('click','.grouper_box',function(){
				
					z.output 	= this;
					g.pages.toPage("travelPage");
					ob			= this;
					//将内容补全到输入框
					$('#psgxin').val($(this).find('.xingname').val());
					$('#psgname').val($(this).find('.vorname').val());
					$('#gender').val($(this).find('.sex').val());
					$('#brithdy').val($(this).find('.birth').val());
					$('#idcard').val($(this).find('.passport').val());
					$('#room').val($(this).find('.roomtype').val());
					
					//判断是否能有权限选择房间
					var selfnum = $(this).find('.roomnum').attr('data_value');
					if($(this).find('.roomnum').val() != parseInt(selfnum)){
						$('#room').attr('disabled','disabled');
					}else{
						$('#room').removeAttr('disabled');
					}
				});
				//房间改变方法,只对下个人有效******************************************
				$('#room').change(function(){
					var num 	= $(this).val();
					var roomnum	= $(ob).find('.roomnum').val();				//同房间人
					var oldroom	= $(ob).find('.roomnum').attr('data_room');	//判断是否有改变房型的依据
					
					var nextob	= $(ob).next();
					var nextroom = nextob.find('.roomnum').val();
					var threeob 	= $(ob).next().next();
					var threeroom	= threeob.find('.roomnum').val();
					//判断是否有改变上次选择的房型,如果有初始化后面的房间
					if(num !== oldroom){
						var nextold = nextob.find('.roomnum').attr('data_value');
						nextob.find('.roomnum').val(nextold);
						nextob.find('.roomtype').val(2);
						
						if(threeroom){
							var threeold = threeob.find('.roomnum').attr('data_value');
							threeob.find('.roomnum').val(threeold);
							threeob.find('.roomtype').val(2);
						}
					}
					//双人大床间
					if(num  == 4){
						if(nextroom){
							nextob.find('.roomnum').val(roomnum);
							nextob.find('.roomtype').val(4);
							
							$(ob).find('.roomtype').val(4);
							$(ob).find('.roomnum').attr('data_room',4);
						}else{
							alert('对不起,单人不可选择双人大床间!')
							return $(this).val(2);
						}
					}
					//三人间
					if(num == 3){
						if(nextroom && threeroom){
							alert('三人间中第三张床为小床,只适合14岁以下的儿童');
							nextob.find('.roomnum').val(roomnum);
							nextob.find('.roomtype').val(3);
							threeob.find('.roomnum').val(roomnum);
							threeob.find('.roomtype').val(3);
							
							$(ob).find('.roomtype').val(3);
							$(ob).find('.roomnum').attr('data_room',3);
						}else{
							alert('末位报名少于三人无法选择三人间.');
							return $(this).val(2);
						}
					}
					if(num == 9){
						alert('必须是6岁以下的儿童..');
						return;
					}
					if(num == 2){
					//双人双床间
						$(ob).find('.roomtype').val(2);
						$(ob).find('.roomnum').attr('data_room',2);
						
						nextob.find('.roomnum').val(roomnum);
						nextob.find('.roomtype').val(2);
						return;
					}
				});
			}
		});
		//机票预订页面 乘客信息弹出框
		var bp = $('#bookpeoPage').page({
			init: function() {
				var z 	= this;
				var ob 	= null;
				$('#reserve_sub').on("click", function(){
					var psgxin 	= $('#psgxin').val();
					var psgname	= $('#psgname').val();
					var gender	= $('#gender').val();
					var brithdy = $('#brithdy').val();
					var idcard	= $('#idcard').val();
					if(!psgxin || !psgname  || !brithdy || !idcard){
						QNotice.show('请输入完整的乘客信息 ');
						return false;
					}
					if(!checkBD(brithdy)){
						QNotice.show('请输入正确的出生日期 ');
						return false;
					}
					$(ob).find('.xingname').val(psgxin);
					$(ob).find('.vorname').val(psgname);
					$(ob).find('.sex').val(gender);
					$(ob).find('.birth').val(brithdy);
					$(ob).find('.passport').val(idcard);
					$(ob).find('.showname').val(psgxin+psgname);
					$(ob).find('.showpassport').val(idcard);
					
					$('.psg_info').val('');
					z.unactive();
				});
				$('#reserve').on('click','.reserve_box',function(){
					z.output 	= this;
					g.pages.toPage("bookpeoPage");
					ob			= this;
					
					$('#pagetitle').text($(this).find('.qo_title').text());
					//将内容补全到输入框
					$('#psgxin').val($(this).find('.xingname').val());
					$('#psgname').val($(this).find('.vorname').val());
					$('#gender').val($(this).find('.sex').val());
					$('#brithdy').val($(this).find('.birth').val());
					$('#idcard').val($(this).find('.passport').val());
				});
			}
		});
		
		//账单地址弹出框
		var oa = $('#addressPage').page({
			init: function() {
				var z = this;
				$('#address_sub').on("click", function(){
					var res = {c : '0'};
					$('.addre_request').each(function(i){
						if(!$(this).val()){
							QNotice.show('请输入需要的账单地址信息');
							res.c = 1;
							return;
						}
					});
					if(res.c == 1){return};
					//检测邮箱
					var myreg = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
					if(!myreg.test($('#addressemail').val())){
						QNotice.show('请输入正确的邮箱地址');
						return false;
					}
					var name = $('#addressxin').val() + $('#addressname').val();
					$('#add_name').text(name);
					$('#add_email').text($('#addressemail').val());
					//兼容input 标签
					$('#add_name').val(name);
					$('#add_email').val($('#addressemail').val());
					z.unactive();
				});
				$(".orderaddress").on("click", function(){
					z.output = this;
					g.pages.toPage("addressPage");
				});
			}
		});
		//旅游线路筛选弹出框
		var sl = $("#toCheckproPage").page({
			init: function() {
				var z = this
				y = $("#toPro_list dd");
				y.on("click", "dd", function() {
					var src = $(this).find('a').attr('href');
					window.location.href = src;
					return false;
				});
				$(".black_box").on("click", function() {
					z.output = this;
					g.pages.toPage("toCheckproPage");
				});
			}
		}); 
		//初始化弹出框
		g.pages = $(".qn_pages").pages({
			main: "searchPage", //覆盖div的id名 
			side: [ ws,ca,ci,oa,psg,pi,ot,bp,sl ]
		});
	};
	
	return g
})();
$(document).ready(function(){
	window.init();
	
});
function viewProfile(){
            if (typeof WeixinJSBridge != "undefined" && WeixinJSBridge.invoke){
                WeixinJSBridge.invoke('profile',{
                    'username':'gh_cf6999f98787',
                    'scene':'57'
                });
            }
 }