import { version, ref, watchEffect, watch, getCurrentInstance, defineAsyncComponent, useSSRContext, defineComponent, provide, createElementBlock, unref, inject, mergeProps, withAsyncContext, createApp, effectScope, shallowReactive, reactive, getCurrentScope, hasInjectionContext, onErrorCaptured, onServerPrefetch, createVNode, resolveDynamicComponent, toRef, computed, h, isReadonly, isRef, isShallow, isReactive, toRaw } from 'vue';
import { $ as $fetch, l as hasProtocol, m as isScriptProtocol, n as joinURL, w as withQuery, o as sanitizeStatusCode, p as createHooks, h as createError$1, q as isEqual, t as toRouteMatcher, r as createRouter, v as defu, x as stringifyParsedURL, y as stringifyQuery, z as parseQuery } from '../runtime.mjs';
import { b as baseURL } from '../routes/renderer.mjs';
import { CapoPlugin, getActiveHead } from 'unhead';
import { defineHeadPlugin, composableNames } from '@unhead/shared';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderClass, ssrIncludeBooleanAttr, ssrRenderStyle, ssrRenderComponent, ssrRenderSuspense, ssrRenderVNode, ssrInterpolate } from 'vue/server-renderer';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';

function createContext$1(opts = {}) {
  let currentInstance;
  let isSingleton = false;
  const checkConflict = (instance) => {
    if (currentInstance && currentInstance !== instance) {
      throw new Error("Context conflict");
    }
  };
  let als;
  if (opts.asyncContext) {
    const _AsyncLocalStorage = opts.AsyncLocalStorage || globalThis.AsyncLocalStorage;
    if (_AsyncLocalStorage) {
      als = new _AsyncLocalStorage();
    } else {
      console.warn("[unctx] `AsyncLocalStorage` is not provided.");
    }
  }
  const _getCurrentInstance = () => {
    if (als && currentInstance === void 0) {
      const instance = als.getStore();
      if (instance !== void 0) {
        return instance;
      }
    }
    return currentInstance;
  };
  return {
    use: () => {
      const _instance = _getCurrentInstance();
      if (_instance === void 0) {
        throw new Error("Context is not available");
      }
      return _instance;
    },
    tryUse: () => {
      return _getCurrentInstance();
    },
    set: (instance, replace) => {
      if (!replace) {
        checkConflict(instance);
      }
      currentInstance = instance;
      isSingleton = true;
    },
    unset: () => {
      currentInstance = void 0;
      isSingleton = false;
    },
    call: (instance, callback) => {
      checkConflict(instance);
      currentInstance = instance;
      try {
        return als ? als.run(instance, callback) : callback();
      } finally {
        if (!isSingleton) {
          currentInstance = void 0;
        }
      }
    },
    async callAsync(instance, callback) {
      currentInstance = instance;
      const onRestore = () => {
        currentInstance = instance;
      };
      const onLeave = () => currentInstance === instance ? onRestore : void 0;
      asyncHandlers$1.add(onLeave);
      try {
        const r = als ? als.run(instance, callback) : callback();
        if (!isSingleton) {
          currentInstance = void 0;
        }
        return await r;
      } finally {
        asyncHandlers$1.delete(onLeave);
      }
    }
  };
}
function createNamespace$1(defaultOpts = {}) {
  const contexts = {};
  return {
    get(key, opts = {}) {
      if (!contexts[key]) {
        contexts[key] = createContext$1({ ...defaultOpts, ...opts });
      }
      contexts[key];
      return contexts[key];
    }
  };
}
const _globalThis$1 = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : typeof global !== "undefined" ? global : {};
const globalKey$2 = "__unctx__";
const defaultNamespace = _globalThis$1[globalKey$2] || (_globalThis$1[globalKey$2] = createNamespace$1());
const getContext = (key, opts = {}) => defaultNamespace.get(key, opts);
const asyncHandlersKey$1 = "__unctx_async_handlers__";
const asyncHandlers$1 = _globalThis$1[asyncHandlersKey$1] || (_globalThis$1[asyncHandlersKey$1] = /* @__PURE__ */ new Set());

if (!globalThis.$fetch) {
  globalThis.$fetch = $fetch.create({
    baseURL: baseURL()
  });
}
const nuxtLinkDefaults = { "componentName": "NuxtLink" };
const appId = "nuxt-app";
function getNuxtAppCtx(appName = appId) {
  return getContext(appName, {
    asyncContext: false
  });
}
const NuxtPluginIndicator = "__nuxt_plugin";
function createNuxtApp(options) {
  let hydratingCount = 0;
  const nuxtApp = {
    _name: appId,
    _scope: effectScope(),
    provide: void 0,
    globalName: "nuxt",
    versions: {
      get nuxt() {
        return "3.12.4";
      },
      get vue() {
        return nuxtApp.vueApp.version;
      }
    },
    payload: shallowReactive({
      data: shallowReactive({}),
      state: reactive({}),
      once: /* @__PURE__ */ new Set(),
      _errors: shallowReactive({})
    }),
    static: {
      data: {}
    },
    runWithContext(fn) {
      if (nuxtApp._scope.active && !getCurrentScope()) {
        return nuxtApp._scope.run(() => callWithNuxt(nuxtApp, fn));
      }
      return callWithNuxt(nuxtApp, fn);
    },
    isHydrating: false,
    deferHydration() {
      if (!nuxtApp.isHydrating) {
        return () => {
        };
      }
      hydratingCount++;
      let called = false;
      return () => {
        if (called) {
          return;
        }
        called = true;
        hydratingCount--;
        if (hydratingCount === 0) {
          nuxtApp.isHydrating = false;
          return nuxtApp.callHook("app:suspense:resolve");
        }
      };
    },
    _asyncDataPromises: {},
    _asyncData: shallowReactive({}),
    _payloadRevivers: {},
    ...options
  };
  {
    nuxtApp.payload.serverRendered = true;
  }
  nuxtApp.hooks = createHooks();
  nuxtApp.hook = nuxtApp.hooks.hook;
  {
    const contextCaller = async function(hooks, args) {
      for (const hook of hooks) {
        await nuxtApp.runWithContext(() => hook(...args));
      }
    };
    nuxtApp.hooks.callHook = (name, ...args) => nuxtApp.hooks.callHookWith(contextCaller, name, ...args);
  }
  nuxtApp.callHook = nuxtApp.hooks.callHook;
  nuxtApp.provide = (name, value) => {
    const $name = "$" + name;
    defineGetter(nuxtApp, $name, value);
    defineGetter(nuxtApp.vueApp.config.globalProperties, $name, value);
  };
  defineGetter(nuxtApp.vueApp, "$nuxt", nuxtApp);
  defineGetter(nuxtApp.vueApp.config.globalProperties, "$nuxt", nuxtApp);
  {
    if (nuxtApp.ssrContext) {
      nuxtApp.ssrContext.nuxt = nuxtApp;
      nuxtApp.ssrContext._payloadReducers = {};
      nuxtApp.payload.path = nuxtApp.ssrContext.url;
    }
    nuxtApp.ssrContext = nuxtApp.ssrContext || {};
    if (nuxtApp.ssrContext.payload) {
      Object.assign(nuxtApp.payload, nuxtApp.ssrContext.payload);
    }
    nuxtApp.ssrContext.payload = nuxtApp.payload;
    nuxtApp.ssrContext.config = {
      public: options.ssrContext.runtimeConfig.public,
      app: options.ssrContext.runtimeConfig.app
    };
  }
  const runtimeConfig = options.ssrContext.runtimeConfig;
  nuxtApp.provide("config", runtimeConfig);
  return nuxtApp;
}
function registerPluginHooks(nuxtApp, plugin) {
  if (plugin.hooks) {
    nuxtApp.hooks.addHooks(plugin.hooks);
  }
}
async function applyPlugin(nuxtApp, plugin) {
  if (typeof plugin === "function") {
    const { provide: provide2 } = await nuxtApp.runWithContext(() => plugin(nuxtApp)) || {};
    if (provide2 && typeof provide2 === "object") {
      for (const key in provide2) {
        nuxtApp.provide(key, provide2[key]);
      }
    }
  }
}
async function applyPlugins(nuxtApp, plugins2) {
  var _a, _b, _c, _d;
  const resolvedPlugins = [];
  const unresolvedPlugins = [];
  const parallels = [];
  const errors = [];
  let promiseDepth = 0;
  async function executePlugin(plugin) {
    var _a2;
    const unresolvedPluginsForThisPlugin = ((_a2 = plugin.dependsOn) == null ? void 0 : _a2.filter((name) => plugins2.some((p) => p._name === name) && !resolvedPlugins.includes(name))) ?? [];
    if (unresolvedPluginsForThisPlugin.length > 0) {
      unresolvedPlugins.push([new Set(unresolvedPluginsForThisPlugin), plugin]);
    } else {
      const promise = applyPlugin(nuxtApp, plugin).then(async () => {
        if (plugin._name) {
          resolvedPlugins.push(plugin._name);
          await Promise.all(unresolvedPlugins.map(async ([dependsOn, unexecutedPlugin]) => {
            if (dependsOn.has(plugin._name)) {
              dependsOn.delete(plugin._name);
              if (dependsOn.size === 0) {
                promiseDepth++;
                await executePlugin(unexecutedPlugin);
              }
            }
          }));
        }
      });
      if (plugin.parallel) {
        parallels.push(promise.catch((e) => errors.push(e)));
      } else {
        await promise;
      }
    }
  }
  for (const plugin of plugins2) {
    if (((_a = nuxtApp.ssrContext) == null ? void 0 : _a.islandContext) && ((_b = plugin.env) == null ? void 0 : _b.islands) === false) {
      continue;
    }
    registerPluginHooks(nuxtApp, plugin);
  }
  for (const plugin of plugins2) {
    if (((_c = nuxtApp.ssrContext) == null ? void 0 : _c.islandContext) && ((_d = plugin.env) == null ? void 0 : _d.islands) === false) {
      continue;
    }
    await executePlugin(plugin);
  }
  await Promise.all(parallels);
  if (promiseDepth) {
    for (let i = 0; i < promiseDepth; i++) {
      await Promise.all(parallels);
    }
  }
  if (errors.length) {
    throw errors[0];
  }
}
// @__NO_SIDE_EFFECTS__
function defineNuxtPlugin(plugin) {
  if (typeof plugin === "function") {
    return plugin;
  }
  const _name = plugin._name || plugin.name;
  delete plugin.name;
  return Object.assign(plugin.setup || (() => {
  }), plugin, { [NuxtPluginIndicator]: true, _name });
}
function callWithNuxt(nuxt, setup, args) {
  const fn = () => setup();
  const nuxtAppCtx = getNuxtAppCtx(nuxt._name);
  {
    return nuxt.vueApp.runWithContext(() => nuxtAppCtx.callAsync(nuxt, fn));
  }
}
function tryUseNuxtApp(appName) {
  var _a;
  let nuxtAppInstance;
  if (hasInjectionContext()) {
    nuxtAppInstance = (_a = getCurrentInstance()) == null ? void 0 : _a.appContext.app.$nuxt;
  }
  nuxtAppInstance = nuxtAppInstance || getNuxtAppCtx(appName).tryUse();
  return nuxtAppInstance || null;
}
function useNuxtApp(appName) {
  const nuxtAppInstance = tryUseNuxtApp(appName);
  if (!nuxtAppInstance) {
    {
      throw new Error("[nuxt] instance unavailable");
    }
  }
  return nuxtAppInstance;
}
// @__NO_SIDE_EFFECTS__
function useRuntimeConfig(_event) {
  return useNuxtApp().$config;
}
function defineGetter(obj, key, val) {
  Object.defineProperty(obj, key, { get: () => val });
}
const PageRouteSymbol = Symbol("route");
const useRouter = () => {
  var _a;
  return (_a = useNuxtApp()) == null ? void 0 : _a.$router;
};
const useRoute = () => {
  if (hasInjectionContext()) {
    return inject(PageRouteSymbol, useNuxtApp()._route);
  }
  return useNuxtApp()._route;
};
// @__NO_SIDE_EFFECTS__
function defineNuxtRouteMiddleware(middleware) {
  return middleware;
}
const isProcessingMiddleware = () => {
  try {
    if (useNuxtApp()._processingMiddleware) {
      return true;
    }
  } catch {
    return false;
  }
  return false;
};
const navigateTo = (to, options) => {
  if (!to) {
    to = "/";
  }
  const toPath = typeof to === "string" ? to : "path" in to ? resolveRouteObject(to) : useRouter().resolve(to).href;
  const isExternalHost = hasProtocol(toPath, { acceptRelative: true });
  const isExternal = (options == null ? void 0 : options.external) || isExternalHost;
  if (isExternal) {
    if (!(options == null ? void 0 : options.external)) {
      throw new Error("Navigating to an external URL is not allowed by default. Use `navigateTo(url, { external: true })`.");
    }
    const { protocol } = new URL(toPath, "http://localhost");
    if (protocol && isScriptProtocol(protocol)) {
      throw new Error(`Cannot navigate to a URL with '${protocol}' protocol.`);
    }
  }
  const inMiddleware = isProcessingMiddleware();
  const router = useRouter();
  const nuxtApp = useNuxtApp();
  {
    if (nuxtApp.ssrContext) {
      const fullPath = typeof to === "string" || isExternal ? toPath : router.resolve(to).fullPath || "/";
      const location2 = isExternal ? toPath : joinURL((/* @__PURE__ */ useRuntimeConfig()).app.baseURL, fullPath);
      const redirect = async function(response) {
        await nuxtApp.callHook("app:redirected");
        const encodedLoc = location2.replace(/"/g, "%22");
        const encodedHeader = encodeURL(location2, isExternalHost);
        nuxtApp.ssrContext._renderResponse = {
          statusCode: sanitizeStatusCode((options == null ? void 0 : options.redirectCode) || 302, 302),
          body: `<!DOCTYPE html><html><head><meta http-equiv="refresh" content="0; url=${encodedLoc}"></head></html>`,
          headers: { location: encodedHeader }
        };
        return response;
      };
      if (!isExternal && inMiddleware) {
        router.afterEach((final) => final.fullPath === fullPath ? redirect(false) : void 0);
        return to;
      }
      return redirect(!inMiddleware ? void 0 : (
        /* abort route navigation */
        false
      ));
    }
  }
  if (isExternal) {
    nuxtApp._scope.stop();
    if (options == null ? void 0 : options.replace) {
      (void 0).replace(toPath);
    } else {
      (void 0).href = toPath;
    }
    if (inMiddleware) {
      if (!nuxtApp.isHydrating) {
        return false;
      }
      return new Promise(() => {
      });
    }
    return Promise.resolve();
  }
  return (options == null ? void 0 : options.replace) ? router.replace(to) : router.push(to);
};
function resolveRouteObject(to) {
  return withQuery(to.path || "", to.query || {}) + (to.hash || "");
}
function encodeURL(location2, isExternalHost = false) {
  const url = new URL(location2, "http://localhost");
  if (!isExternalHost) {
    return url.pathname + url.search + url.hash;
  }
  if (location2.startsWith("//")) {
    return url.toString().replace(url.protocol, "");
  }
  return url.toString();
}
const NUXT_ERROR_SIGNATURE = "__nuxt_error";
const useError = () => toRef(useNuxtApp().payload, "error");
const showError = (error) => {
  const nuxtError = createError(error);
  try {
    const nuxtApp = useNuxtApp();
    const error2 = useError();
    if (false) ;
    error2.value = error2.value || nuxtError;
  } catch {
    throw nuxtError;
  }
  return nuxtError;
};
const isNuxtError = (error) => !!error && typeof error === "object" && NUXT_ERROR_SIGNATURE in error;
const createError = (error) => {
  const nuxtError = createError$1(error);
  Object.defineProperty(nuxtError, NUXT_ERROR_SIGNATURE, {
    value: true,
    configurable: false,
    writable: false
  });
  return nuxtError;
};
version.startsWith("3");
function resolveUnref(r) {
  return typeof r === "function" ? r() : unref(r);
}
function resolveUnrefHeadInput(ref2, lastKey = "") {
  if (ref2 instanceof Promise)
    return ref2;
  const root = resolveUnref(ref2);
  if (!ref2 || !root)
    return root;
  if (Array.isArray(root))
    return root.map((r) => resolveUnrefHeadInput(r, lastKey));
  if (typeof root === "object") {
    return Object.fromEntries(
      Object.entries(root).map(([k, v]) => {
        if (k === "titleTemplate" || k.startsWith("on"))
          return [k, unref(v)];
        return [k, resolveUnrefHeadInput(v, k)];
      })
    );
  }
  return root;
}
defineHeadPlugin({
  hooks: {
    "entries:resolve": function(ctx) {
      for (const entry2 of ctx.entries)
        entry2.resolvedInput = resolveUnrefHeadInput(entry2.input);
    }
  }
});
const headSymbol = "usehead";
const _global = typeof globalThis !== "undefined" ? globalThis : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
const globalKey$1 = "__unhead_injection_handler__";
function setHeadInjectionHandler(handler) {
  _global[globalKey$1] = handler;
}
function injectHead() {
  if (globalKey$1 in _global) {
    return _global[globalKey$1]();
  }
  const head = inject(headSymbol);
  if (!head && "production" !== "production")
    console.warn("Unhead is missing Vue context, falling back to shared context. This may have unexpected results.");
  return head || getActiveHead();
}
function useHead(input, options = {}) {
  const head = options.head || injectHead();
  if (head) {
    if (!head.ssr)
      return clientUseHead(head, input, options);
    return head.push(input, options);
  }
}
function clientUseHead(head, input, options = {}) {
  const deactivated = ref(false);
  const resolvedInput = ref({});
  watchEffect(() => {
    resolvedInput.value = deactivated.value ? {} : resolveUnrefHeadInput(input);
  });
  const entry2 = head.push(resolvedInput.value, options);
  watch(resolvedInput, (e) => {
    entry2.patch(e);
  });
  getCurrentInstance();
  return entry2;
}
const coreComposableNames = [
  "injectHead"
];
({
  "@unhead/vue": [...coreComposableNames, ...composableNames]
});
[CapoPlugin({ track: true })];
const unhead_KgADcZ0jPj = /* @__PURE__ */ defineNuxtPlugin({
  name: "nuxt:head",
  enforce: "pre",
  setup(nuxtApp) {
    const head = nuxtApp.ssrContext.head;
    setHeadInjectionHandler(
      // need a fresh instance of the nuxt app to avoid parallel requests interfering with each other
      () => useNuxtApp().vueApp._context.provides.usehead
    );
    nuxtApp.vueApp.use(head);
  }
});
async function getRouteRules(url) {
  {
    const _routeRulesMatcher = toRouteMatcher(
      createRouter({ routes: (/* @__PURE__ */ useRuntimeConfig()).nitro.routeRules })
    );
    return defu({}, ..._routeRulesMatcher.matchAll(url).reverse());
  }
}
function createContext(opts = {}) {
  let currentInstance;
  let isSingleton = false;
  const checkConflict = (instance) => {
    if (currentInstance && currentInstance !== instance) {
      throw new Error("Context conflict");
    }
  };
  let als;
  if (opts.asyncContext) {
    const _AsyncLocalStorage = opts.AsyncLocalStorage || globalThis.AsyncLocalStorage;
    if (_AsyncLocalStorage) {
      als = new _AsyncLocalStorage();
    } else {
      console.warn("[unctx] `AsyncLocalStorage` is not provided.");
    }
  }
  const _getCurrentInstance = () => {
    if (als && currentInstance === void 0) {
      const instance = als.getStore();
      if (instance !== void 0) {
        return instance;
      }
    }
    return currentInstance;
  };
  return {
    use: () => {
      const _instance = _getCurrentInstance();
      if (_instance === void 0) {
        throw new Error("Context is not available");
      }
      return _instance;
    },
    tryUse: () => {
      return _getCurrentInstance();
    },
    set: (instance, replace) => {
      if (!replace) {
        checkConflict(instance);
      }
      currentInstance = instance;
      isSingleton = true;
    },
    unset: () => {
      currentInstance = void 0;
      isSingleton = false;
    },
    call: (instance, callback) => {
      checkConflict(instance);
      currentInstance = instance;
      try {
        return als ? als.run(instance, callback) : callback();
      } finally {
        if (!isSingleton) {
          currentInstance = void 0;
        }
      }
    },
    async callAsync(instance, callback) {
      currentInstance = instance;
      const onRestore = () => {
        currentInstance = instance;
      };
      const onLeave = () => currentInstance === instance ? onRestore : void 0;
      asyncHandlers.add(onLeave);
      try {
        const r = als ? als.run(instance, callback) : callback();
        if (!isSingleton) {
          currentInstance = void 0;
        }
        return await r;
      } finally {
        asyncHandlers.delete(onLeave);
      }
    }
  };
}
function createNamespace(defaultOpts = {}) {
  const contexts = {};
  return {
    get(key, opts = {}) {
      if (!contexts[key]) {
        contexts[key] = createContext({ ...defaultOpts, ...opts });
      }
      contexts[key];
      return contexts[key];
    }
  };
}
const _globalThis = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : typeof global !== "undefined" ? global : {};
const globalKey = "__unctx__";
_globalThis[globalKey] || (_globalThis[globalKey] = createNamespace());
const asyncHandlersKey = "__unctx_async_handlers__";
const asyncHandlers = _globalThis[asyncHandlersKey] || (_globalThis[asyncHandlersKey] = /* @__PURE__ */ new Set());
const manifest_45route_45rule = /* @__PURE__ */ defineNuxtRouteMiddleware(async (to) => {
  {
    return;
  }
});
const globalMiddleware = [
  manifest_45route_45rule
];
function getRouteFromPath(fullPath) {
  if (typeof fullPath === "object") {
    fullPath = stringifyParsedURL({
      pathname: fullPath.path || "",
      search: stringifyQuery(fullPath.query || {}),
      hash: fullPath.hash || ""
    });
  }
  const url = new URL(fullPath.toString(), "http://localhost");
  return {
    path: url.pathname,
    fullPath,
    query: parseQuery(url.search),
    hash: url.hash,
    // stub properties for compat with vue-router
    params: {},
    name: void 0,
    matched: [],
    redirectedFrom: void 0,
    meta: {},
    href: fullPath
  };
}
const router_CaKIoANnI2 = /* @__PURE__ */ defineNuxtPlugin({
  name: "nuxt:router",
  enforce: "pre",
  setup(nuxtApp) {
    const initialURL = nuxtApp.ssrContext.url;
    const routes = [];
    const hooks = {
      "navigate:before": [],
      "resolve:before": [],
      "navigate:after": [],
      "error": []
    };
    const registerHook = (hook, guard) => {
      hooks[hook].push(guard);
      return () => hooks[hook].splice(hooks[hook].indexOf(guard), 1);
    };
    (/* @__PURE__ */ useRuntimeConfig()).app.baseURL;
    const route = reactive(getRouteFromPath(initialURL));
    async function handleNavigation(url, replace) {
      try {
        const to = getRouteFromPath(url);
        for (const middleware of hooks["navigate:before"]) {
          const result = await middleware(to, route);
          if (result === false || result instanceof Error) {
            return;
          }
          if (typeof result === "string" && result.length) {
            return handleNavigation(result, true);
          }
        }
        for (const handler of hooks["resolve:before"]) {
          await handler(to, route);
        }
        Object.assign(route, to);
        if (false) ;
        for (const middleware of hooks["navigate:after"]) {
          await middleware(to, route);
        }
      } catch (err) {
        for (const handler of hooks.error) {
          await handler(err);
        }
      }
    }
    const currentRoute = computed(() => route);
    const router = {
      currentRoute,
      isReady: () => Promise.resolve(),
      // These options provide a similar API to vue-router but have no effect
      options: {},
      install: () => Promise.resolve(),
      // Navigation
      push: (url) => handleNavigation(url),
      replace: (url) => handleNavigation(url),
      back: () => (void 0).history.go(-1),
      go: (delta) => (void 0).history.go(delta),
      forward: () => (void 0).history.go(1),
      // Guards
      beforeResolve: (guard) => registerHook("resolve:before", guard),
      beforeEach: (guard) => registerHook("navigate:before", guard),
      afterEach: (guard) => registerHook("navigate:after", guard),
      onError: (handler) => registerHook("error", handler),
      // Routes
      resolve: getRouteFromPath,
      addRoute: (parentName, route2) => {
        routes.push(route2);
      },
      getRoutes: () => routes,
      hasRoute: (name) => routes.some((route2) => route2.name === name),
      removeRoute: (name) => {
        const index = routes.findIndex((route2) => route2.name === name);
        if (index !== -1) {
          routes.splice(index, 1);
        }
      }
    };
    nuxtApp.vueApp.component("RouterLink", defineComponent({
      functional: true,
      props: {
        to: {
          type: String,
          required: true
        },
        custom: Boolean,
        replace: Boolean,
        // Not implemented
        activeClass: String,
        exactActiveClass: String,
        ariaCurrentValue: String
      },
      setup: (props, { slots }) => {
        const navigate = () => handleNavigation(props.to, props.replace);
        return () => {
          var _a;
          const route2 = router.resolve(props.to);
          return props.custom ? (_a = slots.default) == null ? void 0 : _a.call(slots, { href: props.to, navigate, route: route2 }) : h("a", { href: props.to, onClick: (e) => {
            e.preventDefault();
            return navigate();
          } }, slots);
        };
      }
    }));
    nuxtApp._route = route;
    nuxtApp._middleware = nuxtApp._middleware || {
      global: [],
      named: {}
    };
    const initialLayout = nuxtApp.payload.state._layout;
    nuxtApp.hooks.hookOnce("app:created", async () => {
      router.beforeEach(async (to, from) => {
        var _a;
        to.meta = reactive(to.meta || {});
        if (nuxtApp.isHydrating && initialLayout && !isReadonly(to.meta.layout)) {
          to.meta.layout = initialLayout;
        }
        nuxtApp._processingMiddleware = true;
        if (!((_a = nuxtApp.ssrContext) == null ? void 0 : _a.islandContext)) {
          const middlewareEntries = /* @__PURE__ */ new Set([...globalMiddleware, ...nuxtApp._middleware.global]);
          {
            const routeRules = await nuxtApp.runWithContext(() => getRouteRules(to.path));
            if (routeRules.appMiddleware) {
              for (const key in routeRules.appMiddleware) {
                const guard = nuxtApp._middleware.named[key];
                if (!guard) {
                  return;
                }
                if (routeRules.appMiddleware[key]) {
                  middlewareEntries.add(guard);
                } else {
                  middlewareEntries.delete(guard);
                }
              }
            }
          }
          for (const middleware of middlewareEntries) {
            const result = await nuxtApp.runWithContext(() => middleware(to, from));
            {
              if (result === false || result instanceof Error) {
                const error = result || createError$1({
                  statusCode: 404,
                  statusMessage: `Page Not Found: ${initialURL}`,
                  data: {
                    path: initialURL
                  }
                });
                delete nuxtApp._processingMiddleware;
                return nuxtApp.runWithContext(() => showError(error));
              }
            }
            if (result === true) {
              continue;
            }
            if (result || result === false) {
              return result;
            }
          }
        }
      });
      router.afterEach(() => {
        delete nuxtApp._processingMiddleware;
      });
      await router.replace(initialURL);
      if (!isEqual(route.fullPath, initialURL)) {
        await nuxtApp.runWithContext(() => navigateTo(route.fullPath));
      }
    });
    return {
      provide: {
        route,
        router
      }
    };
  }
});
function definePayloadReducer(name, reduce) {
  {
    useNuxtApp().ssrContext._payloadReducers[name] = reduce;
  }
}
const reducers = {
  NuxtError: (data) => isNuxtError(data) && data.toJSON(),
  EmptyShallowRef: (data) => isRef(data) && isShallow(data) && !data.value && (typeof data.value === "bigint" ? "0n" : JSON.stringify(data.value) || "_"),
  EmptyRef: (data) => isRef(data) && !data.value && (typeof data.value === "bigint" ? "0n" : JSON.stringify(data.value) || "_"),
  ShallowRef: (data) => isRef(data) && isShallow(data) && data.value,
  ShallowReactive: (data) => isReactive(data) && isShallow(data) && toRaw(data),
  Ref: (data) => isRef(data) && data.value,
  Reactive: (data) => isReactive(data) && toRaw(data)
};
const revive_payload_server_eJ33V7gbc6 = /* @__PURE__ */ defineNuxtPlugin({
  name: "nuxt:revive-payload:server",
  setup() {
    for (const reducer in reducers) {
      definePayloadReducer(reducer, reducers[reducer]);
    }
  }
});
const LazyNuxtIcon = defineAsyncComponent(() => Promise.resolve().then(function() {
  return nuxtIcon;
}).then((r) => r["default"] || r.default || r));
const lazyGlobalComponents = [
  ["NuxtIcon", LazyNuxtIcon]
];
const components_plugin_KR1HBZs4kY = /* @__PURE__ */ defineNuxtPlugin({
  name: "nuxt:global-components",
  setup(nuxtApp) {
    for (const [name, component] of lazyGlobalComponents) {
      nuxtApp.vueApp.component(name, component);
      nuxtApp.vueApp.component("Lazy" + name, component);
    }
  }
});
const css = ``;
const font_fallback_inlining_plugin_server_0jIQFwhKjU = /* @__PURE__ */ defineNuxtPlugin(() => {
  useHead({ style: [{ innerHTML: css + ` ` }] });
});
const plugins = [
  unhead_KgADcZ0jPj,
  router_CaKIoANnI2,
  revive_payload_server_eJ33V7gbc6,
  components_plugin_KR1HBZs4kY,
  font_fallback_inlining_plugin_server_0jIQFwhKjU
];
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main$f = {};
function _sfc_ssrRender$9(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({
    id: "scrollUp",
    title: "Scroll To Top"
  }, _attrs))}><i class="fas fa-arrow-up"></i></div>`);
}
const _sfc_setup$f = _sfc_main$f.setup;
_sfc_main$f.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ScrollupSection/scrollUp.vue");
  return _sfc_setup$f ? _sfc_setup$f(props, ctx) : void 0;
};
const ScrollupSection = /* @__PURE__ */ _export_sfc(_sfc_main$f, [["ssrRender", _sfc_ssrRender$9]]);
const _imports_0$7 = "" + __buildAssetsURL("logo-02.DuoHDUKo.png");
const _sfc_main$e = {};
function _sfc_ssrRender$8(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<header${ssrRenderAttrs(mergeProps({ class: "navbar navbar-sticky navbar-expand-lg navbar-dark" }, _attrs))}><div class="container position-relative"><a class="navbar-brand" href="/"><img class="navbar-brand-regular" width="80"${ssrRenderAttr("src", _imports_0$7)} alt="brand-logo"><img class="navbar-brand-sticky" width="80"${ssrRenderAttr("src", _imports_0$7)} alt="sticky brand-logo"></a><button class="navbar-toggler d-lg-none" type="button" data-toggle="navbarToggler" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button><div class="navbar-inner"><button class="navbar-toggler d-lg-none" type="button" data-toggle="navbarToggler" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button><nav><ul class="navbar-nav" id="navbar-nav"><li class="nav-item"><a class="nav-link scroll" href="#home">Home</a></li><li class="nav-item"><a class="nav-link scroll" href="#features">Características</a></li><li class="nav-item"><a class="nav-link scroll" href="#screenshots">Imágenes</a></li><li class="nav-item"><a class="nav-link scroll" href="#pricing">Precio</a></li></ul></nav></div></div></header>`);
}
const _sfc_setup$e = _sfc_main$e.setup;
_sfc_main$e.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/HeaderSection/headerTwo.vue");
  return _sfc_setup$e ? _sfc_setup$e(props, ctx) : void 0;
};
const HeaderSection = /* @__PURE__ */ _export_sfc(_sfc_main$e, [["ssrRender", _sfc_ssrRender$8]]);
const _imports_0$6 = "" + __buildAssetsURL("image1 - monitor - dashboard.CbPsBg91.png");
const _sfc_main$d = /* @__PURE__ */ defineComponent({
  __name: "heroTwo",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Futzo | Gestiona tu liga de fútbol de manera profesional",
      meta: [
        {
          name: "description",
          content: "Futzo es la plataforma definitiva para la gestión de ligas de fútbol. Centraliza operaciones, automatiza calendarios y mantén una comunicación efectiva con tus equipos. Fácil, rápido y seguro."
        },
        {
          name: "keywords",
          content: "futzo, liga de fútbol, gestión de torneos, calendario de partidos, asignación de canchas, equipos, jugadores, automatización de procesos, acceso seguro"
        }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        id: "home",
        class: "section welcome-area bg-inherit h-100vh overflow-hidden"
      }, _attrs))}><div class="shapes-container"><div class="bg-shape"></div></div><div class="container h-100"><div class="row align-items-center h-100"><div class="col-12 col-md-7"><div class="welcome-intro"><h1>La mejor plataforma para gestionar tu liga de fútbol de manera profesional</h1><p class="d-none d-md-block d-lg-block my-4">Futzo centraliza todas tus operaciones en una sola plataforma. Simplifica la administración y mejora la comunicación con tu equipo.</p><p class="my-4 d-lg-node d-md-none d-block"> Futzo centraliza todas tus operaciones <br> en una sola plataforma. Simplifica la <br> administración y mejora la comunicación <br> con tu equipo.</p><a href="#newsletter" class="btn">¡Únete a la Espera!</a></div></div><div class="col-12 col-md-5"><div class="welcome-thumb" data-aos="fade-right" data-aos-delay="500" data-aos-duration="1000"><img${ssrRenderAttr("src", _imports_0$6)} alt="Interfaz de gestión de equipos y jugadores en Futzo"></div></div></div></div></section>`);
    };
  }
});
const _sfc_setup$d = _sfc_main$d.setup;
_sfc_main$d.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/HeroSection/heroTwo.vue");
  return _sfc_setup$d ? _sfc_setup$d(props, ctx) : void 0;
};
const _sfc_main$c = /* @__PURE__ */ defineComponent({
  __name: "nuxt-icon",
  __ssrInlineRender: true,
  props: {
    name: {},
    filled: { type: Boolean, default: false }
  },
  async setup(__props) {
    let __temp, __restore;
    const props = __props;
    const icon = ref("");
    let hasStroke = false;
    async function getIcon() {
      try {
        const iconsImport = /* @__PURE__ */ Object.assign({
          "/assets/icons/calendar.svg": () => import('./calendar-BDoiyWPC.mjs').then((m) => m["default"]),
          "/assets/icons/cogs.svg": () => import('./cogs-DlRP8sR9.mjs').then((m) => m["default"]),
          "/assets/icons/communication.svg": () => import('./communication-CL_VLhUz.mjs').then((m) => m["default"]),
          "/assets/icons/design.svg": () => import('./design-Bb5EER0V.mjs').then((m) => m["default"]),
          "/assets/icons/field.svg": () => import('./field-DKgkNMk_.mjs').then((m) => m["default"]),
          "/assets/icons/football.svg": () => import('./football-BoSf_m3o.mjs').then((m) => m["default"]),
          "/assets/icons/form.svg": () => import('./form-BDvvoAFF.mjs').then((m) => m["default"]),
          "/assets/icons/lock.svg": () => import('./lock-BoHhMDeC.mjs').then((m) => m["default"]),
          "/assets/icons/register.svg": () => import('./register-D3AnpC3b.mjs').then((m) => m["default"]),
          "/assets/icons/settings.svg": () => import('./settings-CSYux17r.mjs').then((m) => m["default"]),
          "/assets/icons/stats.svg": () => import('./stats-De9Fpv91.mjs').then((m) => m["default"]),
          "/assets/icons/sync.svg": () => import('./sync-BUXAQr5-.mjs').then((m) => m["default"]),
          "/assets/icons/trophy.svg": () => import('./trophy-leumNbBc.mjs').then((m) => m["default"]),
          "/assets/icons/users.svg": () => import('./users-BJaiB1ek.mjs').then((m) => m["default"])
        });
        const rawIcon = await iconsImport[`/assets/icons/${props.name}.svg`]();
        if (rawIcon.includes("stroke")) {
          hasStroke = true;
        }
        icon.value = rawIcon;
      } catch {
        console.error(
          `[nuxt-icons] Icon '${props.name}' doesn't exist in 'assets/icons'`
        );
      }
    }
    [__temp, __restore] = withAsyncContext(() => getIcon()), await __temp, __restore();
    watchEffect(getIcon);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<span${ssrRenderAttrs(mergeProps({
        class: ["nuxt-icon", { "nuxt-icon--fill": !_ctx.filled, "nuxt-icon--stroke": unref(hasStroke) && !_ctx.filled }]
      }, _attrs))}>${unref(icon) ?? ""}</span>`);
    };
  }
});
const _sfc_setup$c = _sfc_main$c.setup;
_sfc_main$c.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/nuxt-icons/dist/runtime/components/nuxt-icon.vue");
  return _sfc_setup$c ? _sfc_setup$c(props, ctx) : void 0;
};
const nuxtIcon = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: _sfc_main$c
});
const _sfc_main$b = {};
function _sfc_ssrRender$7(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_nuxt_icon = _sfc_main$c;
  _push(`<section${ssrRenderAttrs(mergeProps({
    id: "features",
    class: "section features-area ptb_100"
  }, _attrs))}><div class="container"><div class="row justify-content-center"><div class="col-12 col-md-10 col-lg-6"><div class="section-heading text-center"><h2>Características principales de Futzo para la gestión de ligas de fútbol</h2><p class="d-none d-sm-block mt-4">Todas las herramientas que necesitas en un solo lugar Con Futzo, controla todos los aspectos de tu liga de fútbol.</p><p class="d-block d-sm-none mt-4">Futzo te ofrece todo lo que necesitas para gestionar tu liga de fútbol de manera eficiente y profesional.</p></div></div></div><div class="row"><div class="col-12 col-md-6 col-lg-4"><div class="icon-box text-center p-4 wow fadeInUp" data-wow-duration="2s"><div class="featured-icon mb-3">`);
  _push(ssrRenderComponent(_component_nuxt_icon, {
    class: "feature-icon",
    name: "trophy",
    filled: ""
  }, null, _parent));
  _push(`</div><div class="icon-text"><h3 class="mb-2">Gestión de Torneos</h3><p>Organiza y administra múltiples torneos con facilidad. Desde la creación hasta la finalización, todo en una plataforma intuitiva.</p></div></div></div><div class="col-12 col-md-6 col-lg-4"><div class="icon-box text-center p-4 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.2s"><div class="featured-icon mb-3">`);
  _push(ssrRenderComponent(_component_nuxt_icon, {
    class: "feature-icon",
    name: "calendar",
    filled: ""
  }, null, _parent));
  _push(`</div><div class="icon-text"><h3 class="mb-2">Calendario de Partidos</h3><p>Planifica y visualiza todos los encuentros de tu liga con un calendario interactivo que facilita la programación y el seguimiento de los partidos.</p></div></div></div><div class="col-12 col-md-6 col-lg-4"><div class="icon-box text-center p-4 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.4s"><div class="featured-icon mb-3">`);
  _push(ssrRenderComponent(_component_nuxt_icon, {
    name: "field",
    filled: "",
    class: "feature-icon"
  }, null, _parent));
  _push(`</div><div class="icon-text"><h3 class="mb-2">Asignación de Canchas</h3><p>Evita conflictos de horarios y asegura la disponibilidad de las canchas con nuestra herramienta de gestión de ubicaciones.</p></div></div></div><div class="col-12 col-md-6 col-lg-4"><div class="icon-box text-center p-4 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.6s"><div class="featured-icon mb-3">`);
  _push(ssrRenderComponent(_component_nuxt_icon, {
    name: "football",
    filled: "",
    class: "feature-icon"
  }, null, _parent));
  _push(`</div><div class="icon-text"><h3 class="mb-2">Gestión de Equipos y Jugadores</h3><p>Mantén un registro detallado de los equipos y jugadores, incluyendo estadísticas, rendimientos y más.</p></div></div></div><div class="col-12 col-md-6 col-lg-4"><div class="icon-box text-center p-4 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.8s"><div class="featured-icon mb-3">`);
  _push(ssrRenderComponent(_component_nuxt_icon, {
    name: "communication",
    filled: "",
    class: "feature-icon"
  }, null, _parent));
  _push(`</div><div class="icon-text"><h3 class="mb-2">Comunicación Efectiva</h3><p>Envía notificaciones y actualizaciones a todos los miembros de la liga directamente desde la plataforma.</p></div></div></div><div class="col-12 col-md-6 col-lg-4"><div class="icon-box text-center p-4 wow fadeInUp" data-wow-duration="2s" data-wow-delay="1s"><div class="featured-icon mb-3">`);
  _push(ssrRenderComponent(_component_nuxt_icon, {
    name: "stats",
    filled: "",
    class: "feature-icon"
  }, null, _parent));
  _push(`</div><div class="icon-text"><h3 class="mb-2">Informe y Estadísticas</h3><p>Genera informes detallados y analiza estadísticas para tomar decisiones informadas y mejorar la gestión de tu liga.</p></div></div></div></div></div></section>`);
}
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/FeatureSection/featureTwo.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const FeatureSection = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["ssrRender", _sfc_ssrRender$7]]);
const _imports_0$5 = "" + __buildAssetsURL("image 3 - floating - stats.BiPCISmR.png");
const _sfc_main$a = {};
function _sfc_ssrRender$6(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "section discover-area bg-gray overflow-hidden ptb_100" }, _attrs))}><div class="container"><div class="row justify-content-between align-items-center"><div class="col-12 col-lg-6 order-2 order-lg-1"><div class="service-thumb discover-thumb mx-auto text-center"><img${ssrRenderAttr("src", _imports_0$5)} alt=""></div></div><div class="col-12 col-lg-6 order-1 order-lg-2"><div class="discover-text px-0 px-lg-4 pt-4 pt-lg-0"><h2 class="pb-4">Explora nuestras funciones avanzadas.</h2><ul class="check-list"><li class="py-1"><div class="list-box media"><span class="icon align-self-center"><i class="fas fa-check"></i></span><span class="media-body pl-2">Registro y administración completa de equipos, jugadores y cuerpo técnico, con información detallada y precisa. Además, genera URLs únicas para que equipos y jugadores se registren automáticamente en los torneos.</span></div></li><li class="py-1"><div class="list-box media"><span class="icon align-self-center"><i class="fas fa-check"></i></span><span class="media-body pl-2">Automatización de calendarios de partidos: Creación automática de calendarios considerando disponibilidad de estadios y preferencias de equipos.</span></div></li><li class="py-1"><div class="list-box media"><span class="icon align-self-center"><i class="fas fa-check"></i></span><span class="media-body pl-2">Notificaciones en tiempo real: Notificaciones automáticas sobre partidos próximos, cambios en el calendario y actualizaciones relevantes.</span></div></li><li class="py-1"><div class="list-box media"><span class="icon align-self-center"><i class="fas fa-check"></i></span><span class="media-body pl-2">Estadísticas detalladas y análisis: Recopilación y presentación de estadísticas de juegos y rendimiento de equipos y jugadores</span></div></li></ul><div class="icon-box d-flex mt-3 mb-3"><div class="service-icon"><span><i class="fas fa-bell"></i></span></div><div class="service-icon px-3"><span><i class="fas fa-calendar-alt"></i></span></div><div class="service-icon"><span><i class="fas fa-users-cog"></i></span></div></div></div></div></div></div></section>`);
}
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/DiscoverSection/discoverTwo.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const DiscoverSection = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["ssrRender", _sfc_ssrRender$6]]);
const clientOnlySymbol = Symbol.for("nuxt:client-only");
const __nuxt_component_0 = defineComponent({
  name: "ClientOnly",
  inheritAttrs: false,
  props: ["fallback", "placeholder", "placeholderTag", "fallbackTag"],
  setup(_, { slots, attrs }) {
    const mounted = ref(false);
    provide(clientOnlySymbol, true);
    return (props) => {
      var _a;
      if (mounted.value) {
        return (_a = slots.default) == null ? void 0 : _a.call(slots);
      }
      const slot = slots.fallback || slots.placeholder;
      if (slot) {
        return slot();
      }
      const fallbackStr = props.fallback || props.placeholder || "";
      const fallbackTag = props.fallbackTag || props.placeholderTag || "span";
      return createElementBlock(fallbackTag, attrs, fallbackStr);
    };
  }
});
const _imports_0$4 = "" + __buildAssetsURL("image4 - laptop - teams.DmLOSdp1.png");
const _sfc_main$9 = {};
function _sfc_ssrRender$5(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_client_only = __nuxt_component_0;
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "section service-area bg-inherit overflow-hidden ptb_100" }, _attrs))}><div class="container"><div class="row justify-content-between"><div class="col-12 col-lg-6 order-2 order-lg-1"><div class="service-text pt-4 pt-lg-0"><h2 class="mb-4">Características de Futzo</h2><ul class="service-list"><li class="single-service media py-2"><div class="service-icon pr-4"><span>`);
  _push(ssrRenderComponent(_component_client_only, null, {}, _parent));
  _push(`</span></div><div class="service-text media-body"><p>Gestión Integral de Ligas: Administra fácilmente equipos, torneos y calendarios desde un solo lugar.</p></div></li><li class="single-service media py-2"><div class="service-icon pr-4"><span>`);
  _push(ssrRenderComponent(_component_client_only, null, {}, _parent));
  _push(`</span></div><div class="service-text media-body"><p>Control Detallado de Equipos y Jugadores: Registra y gestiona estadísticas y rendimientos de manera profesional.</p></div></li><li class="single-service media py-2"><div class="service-icon pr-4"><span>`);
  _push(ssrRenderComponent(_component_client_only, null, {}, _parent));
  _push(`</span></div><div class="service-text media-body"><p>Automatización de Procesos: Ahorra tiempo con herramientas que simplifican la organización y administración de tu liga.</p></div></li><li class="single-service media py-2"><div class="service-icon pr-4"><span>`);
  _push(ssrRenderComponent(_component_client_only, null, {}, _parent));
  _push(`</span></div><div class="service-text media-body"><p>Acceso Fácil y Seguro: Todo lo que necesitas para gestionar tu liga, disponible en cualquier momento y desde cualquier dispositivo.</p></div></li><li class="single-service media py-2"><div class="service-icon pr-4"><span>`);
  _push(ssrRenderComponent(_component_client_only, null, {}, _parent));
  _push(`</span></div><div class="service-text media-body"><p>Registro Automático de Equipos y Jugadores: Genera URLs únicas para cada torneo, permitiendo que los equipos y jugadores se registren automáticamente sin necesidad de intervención manual.</p></div></li></ul><a href="#newsletter" class="btn btn-bordered mt-4">¡Únete a la Espera!</a></div></div><div class="col-12 col-lg-4 order-1 order-lg-2 d-none d-md-block"><div class="service-thumb mx-auto"><img${ssrRenderAttr("src", _imports_0$4)} alt=""></div></div></div></div></section>`);
}
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ServiceSection/serviceTwo.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const ServiceSection = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["ssrRender", _sfc_ssrRender$5]]);
const _imports_0$3 = "" + __buildAssetsURL("work_thumb_3.CpKBatf6.png");
const _sfc_main$8 = {};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_client_only = __nuxt_component_0;
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "section work-area bg-overlay overflow-hidden ptb_100" }, _attrs))}><div class="container"><div class="row justify-content-center"><div class="col-12 col-lg-6"><div class="work-content text-center"><h2 class="text-white">¿Cómo funciona Futzo?</h2><p class="text-white my-3 mt-sm-4 mb-sm-5">Sigue estos pasos para empezar a disfrutar de sus beneficios.</p></div></div></div><div class="row"><div class="col-12 col-md-4"><div class="single-work text-center p-3"><div class="work-icon">`);
  _push(ssrRenderComponent(_component_client_only, null, {}, _parent));
  _push(`</div><h3 class="text-white py-3">Regístrate y crea tu cuenta</h3><p class="text-white">Inscríbete en Futzo rápidamente. Con solo registrarte, tendrás acceso a todas las funciones que necesitas para administrar tu liga.</p></div></div><div class="col-12 col-md-4"><div class="single-work text-center p-3"><div class="work-icon">`);
  _push(ssrRenderComponent(_component_client_only, null, {}, _parent));
  _push(`</div><h3 class="text-white py-3">Inicia tu liga</h3><p class="text-white">Empieza configurando tu liga: define sus reglas, horarios, y otros detalles importantes para que esté lista para el juego.</p></div></div><div class="col-12 col-md-4"><div class="single-work text-center p-3"><div class="work-icon"><img class="avatar-md"${ssrRenderAttr("src", _imports_0$3)} alt=""></div><h3 class="text-white py-3">Configura y gestiona tu liga</h3><p class="text-white">Agrega equipos y jugadores fácilmente. Asigna roles y organiza todos los aspectos de tu liga, todo desde un solo lugar, para que la administración sea más sencilla y eficiente.</p></div></div></div></div></section>`);
}
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/WorkSection/work.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const WorkSection = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["ssrRender", _sfc_ssrRender$4]]);
const _imports_0$2 = "" + __buildAssetsURL("screenshot_3.Bta726vR.jpg");
const _imports_1 = "" + __buildAssetsURL("screenshot_4.D4om3EBm.jpg");
const _imports_2 = "" + __buildAssetsURL("screenshot_5.PEG_sT6m.jpg");
const _sfc_main$7 = {};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<section${ssrRenderAttrs(mergeProps({
    id: "screenshots",
    class: "section screenshots-area ptb_100"
  }, _attrs))}><div class="container"><div class="row justify-content-center"><div class="col-12 col-md-10 col-lg-7"><div class="section-heading text-center"><h2 class="text-capitalize">Interfaz Simple y Atractiva</h2><p class="d-none d-sm-block mt-4">Futzo ofrece una interfaz clara y organizada, diseñada para facilitar la gestión eficiente de tu liga de fútbol. Navega fácilmente por todas las funciones clave.</p><p class="d-block d-sm-none mt-4">Futzo te facilita gestionar tu liga con una interfaz intuitiva y visualmente atractiva.</p></div></div></div><div class="row"><div class="col-12"><div class="app-screenshots"><div class="single-screenshot"><img${ssrRenderAttr("src", _imports_0$2)} alt="pagina de registro"></div><div class="single-screenshot"><img${ssrRenderAttr("src", _imports_0$2)} alt=""></div><div class="single-screenshot"><img${ssrRenderAttr("src", _imports_0$2)} alt=""></div><div class="single-screenshot"><img${ssrRenderAttr("src", _imports_1)} alt=""></div><div class="single-screenshot"><img${ssrRenderAttr("src", _imports_2)} alt=""></div></div></div></div></div></section>`);
}
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ScreenshotSection/screenshotTwo.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const ScreenshotSection = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["ssrRender", _sfc_ssrRender$3]]);
const _imports_0$1 = "" + __buildAssetsURL("logo-08.VpcmJwX2.png");
const _imports_0 = "" + __buildAssetsURL("logo-07.DdT1AXOY.png");
const _sfc_main$6 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<section${ssrRenderAttrs(mergeProps({
    id: "pricing",
    class: "section price-plan-area bg-gray overflow-hidden ptb_100"
  }, _attrs))}><div class="container"><div class="row justify-content-center"><div class="col-12 col-md-10 col-lg-7"><div class="section-heading text-center"><h2>Desbloquea Todo el Potencial de Futzo</h2><p class="d-none d-sm-block mt-4">Lleva la gestión de tu liga al siguiente nivel con Futzo. Desde pequeñas ligas hasta grandes competiciones, te ofrecemos la solución perfecta.</p><p class="d-block d-sm-none mt-4">Gestión eficiente de tu liga de fútbol con las herramientas avanzadas de Futzo.</p></div></div></div><div class="row justify-content-center"><div class="col-12 col-sm-12 col-lg-12"><div class="row price-plan-wrapper"><div class="col-12 col-md-4"><div class="single-price-plan text-center p-5 wow fadeInLeft" data-aos-duration="2s" data-wow-delay="0.4s"><div class="plan-thumb"><img width="250" height="180"${ssrRenderAttr("src", _imports_0$1)} alt="futzo logo vertical fondo primario"></div><div class="plan-title my-2 my-sm-3"><h3 class="text-uppercase">Kickoff</h3></div><div class="plan-price pb-2 pb-sm-3"><h1 class="color-primary price-text"><small class="fw-7">$</small>25</h1></div><div class="plan-description"><ul class="plan-features"><li class="border-top py-3">Gestión de múltiples torneos</li><li class="border-top py-3">Programación de partidos automatizada</li><li class="border-top border-bottom py-3">Estadísticas generales</li></ul></div><div class="plan-button" data-toggle="tooltip" data-placement="top" title="Próximamente"><a href="#" class="btn mt-4 disabled">Registrarme</a></div></div></div><div class="col-12 col-md-4"><div class="single-price-plan text-center p-5 wow fadeInLeft" data-aos-duration="2s" data-wow-delay="0.4s"><div class="plan-thumb"><img width="250" height="180"${ssrRenderAttr("src", _imports_0)} alt="futzo logo vertical fondo primario"></div><div class="plan-title my-2 my-sm-3"><h3 class="text-uppercase">ProPlay</h3></div><div class="plan-price pb-2 pb-sm-3"><h1 class="color-primary price-text"><small class="fw-7">$</small>39</h1></div><div class="plan-description"><ul class="plan-features"><li class="border-top py-3">Plan Kickoff</li><li class="border-top py-3">Registro Automátizado, genera URLs únicas para inscripción directa en torneos.</li><li class="border-top py-3">Configuración visual, asegura que futzo coincida con tu liga.</li><li class="border-top border-bottom py-3">Soporte</li></ul></div><div class="plan-button" data-toggle="tooltip" data-placement="top" title="Próximamente"><a href="#" class="btn mt-4 disabled">Registrarme</a></div></div></div><div class="col-12 col-md-4 mt-4 mt-md-0"><div class="single-price-plan text-center p-5 wow fadeInRight" data-aos-duration="2s" data-wow-delay="0.4s"><div class="plan-thumb"><img width="250" height="180"${ssrRenderAttr("src", _imports_0$1)} alt="futzo logo vertical fondo primario"></div><div class="plan-title my-2 my-sm-3"><h3 class="text-uppercase">EliteLeague</h3></div><div class="plan-price pb-2 pb-sm-3"><h1 class="color-primary price-text"><small class="fw-7">$</small>119</h1></div><div class="plan-description"><ul class="plan-features"><li class="border-top py-3">Plan ProPlay</li><li class="border-top py-3">Soporte prioritario</li><li class="border-top py-3">Acceso anticipado a futuras actualizaciones</li><li class="border-top border-bottom py-3">Comunicación directa con jugadores y entrenadores</li></ul></div><div class="plan-button" data-toggle="tooltip" data-placement="top" title="Próximamente"><a href="#" class="btn mt-4 disabled">Registrarme</a></div></div></div></div></div></div><div class="row justify-content-center pt-5"><p class="text-body pt-4 fw-6">Satisfacción Garantizada en Todos Nuestros Planes</p><p class="text-body fw-2">Puedes probar cualquier plan con total confianza, sabiendo que, si no quedas satisfecho, te devolveremos tu dinero sin preguntas.</p></div></div></section>`);
}
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/PricingSection/pricingOne.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const PricingSection = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$5 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<section${ssrRenderAttrs(mergeProps({
    class: "section faq-area ptb_100",
    id: "faq"
  }, _attrs))}><div class="container"><div class="row justify-content-center"><div class="col-12 col-md-10 col-lg-7"><div class="section-heading text-center"><h2 class="text-capitalize"> ¿Tienes Preguntas? </h2><p class="d-none d-sm-block mt-4">Si tienes alguna pregunta sobre Futzo, consulta nuestras preguntas frecuentes. Hemos reunido las dudas más comunes para que puedas resolverlas rápidamente.</p><p class="d-block d-sm-none mt-4">Consulta nuestras preguntas frecuentes para resolver tus dudas sobre Futzo de manera rápida.</p></div></div></div><div class="row justify-content-center"><div class="col-12"><div class="faq-content"><div class="accordion" id="sApp-accordion"><div class="row justify-content-center"><div class="col-12 col-md-10 col-lg-8"><div class="card border-top-0 border-left-0 border-right-0 border-bottom"><div class="card-header bg-inherit border-0 p-0"><h2 class="mb-0"><button class="btn px-0 py-3" type="button" data-toggle="collapse" data-target="#collapseOne"> ¿Qué es Futzo y cómo puede ayudarme en la gestión de mi liga de fútbol? </button></h2></div><div id="collapseOne" class="collapse show" data-parent="#sApp-accordion"><div class="card-body px-0 py-3"> Futzo es una plataforma integral diseñada para optimizar la administración de ligas de fútbol, haciéndola más eficiente y menos complicada. Desde la programación automatizada de partidos hasta la gestión de equipos, Futzo centraliza todas las funciones clave en un solo lugar. Una de sus características destacadas es la automatización del proceso de inscripción: Futzo genera URLs únicas para que cada equipo y jugador se registren de forma autónoma, reduciendo significativamente el esfuerzo administrativo. Además, facilita la comunicación directa con los jugadores, asegurando que todo el proceso sea fluido y sin complicaciones. </div></div></div><div class="card border-top-0 border-left-0 border-right-0 border-bottom"><div class="card-header bg-inherit border-0 p-0"><h2 class="mb-0"><button class="btn collapsed px-0 py-3" type="button" data-toggle="collapse" data-target="#collapseTwo"> ¿Necesito instalar algún software para usar Futzo? </button></h2></div><div id="collapseTwo" class="collapse" data-parent="#sApp-accordion"><div class="card-body px-0 py-3"> No, Futzo es una plataforma basada en la web. Solo necesitas registrarte y acceder desde cualquier dispositivo con conexión a internet. No requiere instalación, lo que te permite empezar a usarla de inmediato. </div></div></div><div class="card border-top-0 border-left-0 border-right-0 border-bottom"><div class="card-header bg-inherit border-0 p-0"><h2 class="mb-0"><button class="btn collapsed px-0 py-3" type="button" data-toggle="collapse" data-target="#collapseThree"> ¿Puedo gestionar múltiples torneos al mismo tiempo con Futzo? </button></h2></div><div id="collapseThree" class="collapse" data-parent="#sApp-accordion"><div class="card-body px-0 py-3"> Sí, Futzo te permite organizar y administrar múltiples torneos simultáneamente. La plataforma está diseñada para manejar la complejidad de gestionar varios torneos sin perder de vista los detalles importantes. </div></div></div><div class="card border-top-0 border-left-0 border-right-0 border-bottom"><div class="card-header bg-inherit border-0 p-0"><h2 class="mb-0"><button class="btn collapsed px-0 py-3" type="button" data-toggle="collapse" data-target="#collapseFour"> ¿Qué tipo de soporte técnico ofrece Futzo? </button></h2></div><div id="collapseFour" class="collapse" data-parent="#sApp-accordion"><div class="card-body px-0 py-3"> Futzo ofrece soporte técnico 24/7 para todos sus usuarios. Nuestro equipo está disponible para ayudarte con cualquier problema técnico o consulta que puedas tener, asegurando que siempre tengas acceso a la asistencia que necesitas. </div></div></div><div class="card border-top-0 border-left-0 border-right-0 border-bottom"><div class="card-header bg-inherit border-0 p-0"><h2 class="mb-0"><button class="btn collapsed px-0 py-3" type="button" data-toggle="collapse" data-target="#collapseFive"> ¿Es seguro almacenar los datos de mi liga en Futzo? </button></h2></div><div id="collapseFive" class="collapse" data-parent="#sApp-accordion"><div class="card-body px-0 py-3"> Absolutamente. Futzo utiliza tecnologías de encriptación avanzadas y copias de seguridad diarias para garantizar que todos tus datos estén seguros y protegidos. La privacidad y seguridad de tu información son nuestras prioridades. </div></div></div></div></div></div></div></div></div></div></section>`);
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/FaqSection/faqTwo.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const FaqSection = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "newsletter",
  __ssrInlineRender: true,
  setup(__props) {
    const email = ref("");
    const stateClass = ref("");
    const isSubmitted = ref(false);
    ref(false);
    useNuxtApp();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        id: "newsletter",
        class: "section price-plan-area bg-gray ptb_100"
      }, _attrs))}><div class="container"><div class="row justify-content-center"><div class="col-12 col-md-10 col-lg-7"><div class="subscribe-content text-center"><h2>¡Mantente al Tanto del Lanzamiento de Futzo!</h2><p class="my-4">Únete a nuestra lista de espera ingresando tu correo electrónico. Si estás entre los primeros 100 en registrarte, podrías recibir un código promocional que te otorgará hasta un 50% de descuento o incluso acceso gratuito por tiempo limitado. ¡No te pierdas esta oportunidad!</p><form class="subscribe-form"><div class="form-group"><input type="email"${ssrRenderAttr("value", unref(email))} class="${ssrRenderClass([unref(stateClass), "form-control"])}" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Ingresa tu correo electrónico" formnovalidate><div id="validationServer03Feedback" class="invalid-feedback"> Ingresa un correo electrónico válido. </div></div><button${ssrIncludeBooleanAttr(unref(isSubmitted)) ? " disabled" : ""} type="submit" class="btn btn-lg btn-block">Unirme <span style="${ssrRenderStyle(unref(isSubmitted) ? null : { display: "none" })}" class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span></button></form></div></div></div></div></section>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/NewsletterSection/newsletter.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><div class="height-emulator d-none d-lg-block"></div><footer class="footer-area footer-fixed"><div class="footer-top ptb_100"><div class="container"><div class="row"><div class="col-12 col-sm-6 col-lg-3"><div class="footer-items"><a class="navbar-brand" href="#"><img class="logo"${ssrRenderAttr("src", _imports_0)} alt="futzo plataforma admintrativa de ligas deportivas"></a><p class="mt-2 mb-3">El control total de tu liga de fútbol, en un solo lugar.</p><div class="social-icons d-flex"><a class="facebook" href="https://www.facebook.com/futzo.io"><i class="fab fa-facebook-f"></i><i class="fab fa-facebook-f"></i></a><a class="bg-danger" href="https://www.instagram.com/futzo.io/"><i class="fab fa-instagram"></i><i class="fab fa-instagram"></i></a></div></div></div><div class="col-12 col-sm-6 col-lg-3"><div class="footer-items"><h3 class="footer-title mb-2">Enlaces útiles</h3><ul><li class="py-2"><a href="#home">Home</a></li><li class="py-2"><a href="#features">Características</a></li><li class="py-2"><a href="#screenshots">Imágenes</a></li></ul></div></div><div class="col-12 col-sm-6 col-lg-3"><div class="footer-items"><h3 class="footer-title mb-2">Ayuda del producto</h3><ul><li class="py-2"><a href="#faq">Preguntas frecuentes</a></li><li class="py-2"><a href="#">Política de privacidad</a></li></ul></div></div></div></div></div><div class="footer-bottom"><div class="container"><div class="row"><div class="col-12"><div class="copyright-area d-flex flex-wrap justify-content-center justify-content-sm-between text-center py-4"><div class="copyright-left">© Copyrights ${ssrInterpolate((/* @__PURE__ */ new Date()).getFullYear())} Futzo todos los derechos reservados.</div></div></div></div></div></div></footer></div>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/FooterSection/footerOne.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const FooterSection = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "app",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "homepage-2" }, _attrs))}>`);
      _push(ssrRenderComponent(ScrollupSection, null, null, _parent));
      _push(`<div class="main">`);
      _push(ssrRenderComponent(HeaderSection, null, null, _parent));
      _push(ssrRenderComponent(_sfc_main$d, null, null, _parent));
      _push(ssrRenderComponent(FeatureSection, null, null, _parent));
      _push(ssrRenderComponent(DiscoverSection, null, null, _parent));
      _push(ssrRenderComponent(ServiceSection, null, null, _parent));
      _push(ssrRenderComponent(WorkSection, null, null, _parent));
      _push(ssrRenderComponent(ScreenshotSection, null, null, _parent));
      _push(ssrRenderComponent(PricingSection, null, null, _parent));
      _push(ssrRenderComponent(FaqSection, null, null, _parent));
      _push(ssrRenderComponent(_sfc_main$4, null, null, _parent));
      _push(ssrRenderComponent(FooterSection, null, null, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("app.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {
  __name: "nuxt-error-page",
  __ssrInlineRender: true,
  props: {
    error: Object
  },
  setup(__props) {
    const props = __props;
    const _error = props.error;
    _error.stack ? _error.stack.split("\n").splice(1).map((line) => {
      const text = line.replace("webpack:/", "").replace(".vue", ".js").trim();
      return {
        text,
        internal: line.includes("node_modules") && !line.includes(".cache") || line.includes("internal") || line.includes("new Promise")
      };
    }).map((i) => `<span class="stack${i.internal ? " internal" : ""}">${i.text}</span>`).join("\n") : "";
    const statusCode = Number(_error.statusCode || 500);
    const is404 = statusCode === 404;
    const statusMessage = _error.statusMessage ?? (is404 ? "Page Not Found" : "Internal Server Error");
    const description = _error.message || _error.toString();
    const stack = void 0;
    const _Error404 = defineAsyncComponent(() => import('./error-404-Bd4Y14dE.mjs').then((r) => r.default || r));
    const _Error = defineAsyncComponent(() => import('./error-500-DiazK33y.mjs').then((r) => r.default || r));
    const ErrorTemplate = is404 ? _Error404 : _Error;
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(ErrorTemplate), mergeProps({ statusCode: unref(statusCode), statusMessage: unref(statusMessage), description: unref(description), stack: unref(stack) }, _attrs), null, _parent));
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/nuxt/dist/app/components/nuxt-error-page.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "nuxt-root",
  __ssrInlineRender: true,
  setup(__props) {
    const IslandRenderer = () => null;
    const nuxtApp = useNuxtApp();
    nuxtApp.deferHydration();
    nuxtApp.ssrContext.url;
    const SingleRenderer = false;
    provide(PageRouteSymbol, useRoute());
    nuxtApp.hooks.callHookWith((hooks) => hooks.map((hook) => hook()), "vue:setup");
    const error = useError();
    const abortRender = error.value && !nuxtApp.ssrContext.error;
    onErrorCaptured((err, target, info) => {
      nuxtApp.hooks.callHook("vue:error", err, target, info).catch((hookError) => console.error("[nuxt] Error in `vue:error` hook", hookError));
      {
        const p = nuxtApp.runWithContext(() => showError(err));
        onServerPrefetch(() => p);
        return false;
      }
    });
    const islandContext = nuxtApp.ssrContext.islandContext;
    return (_ctx, _push, _parent, _attrs) => {
      ssrRenderSuspense(_push, {
        default: () => {
          if (unref(abortRender)) {
            _push(`<div></div>`);
          } else if (unref(error)) {
            _push(ssrRenderComponent(unref(_sfc_main$1), { error: unref(error) }, null, _parent));
          } else if (unref(islandContext)) {
            _push(ssrRenderComponent(unref(IslandRenderer), { context: unref(islandContext) }, null, _parent));
          } else if (unref(SingleRenderer)) {
            ssrRenderVNode(_push, createVNode(resolveDynamicComponent(unref(SingleRenderer)), null, null), _parent);
          } else {
            _push(ssrRenderComponent(unref(_sfc_main$2), null, null, _parent));
          }
        },
        _: 1
      });
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/nuxt/dist/app/components/nuxt-root.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
let entry;
{
  entry = async function createNuxtAppServer(ssrContext) {
    const vueApp = createApp(_sfc_main);
    const nuxt = createNuxtApp({ vueApp, ssrContext });
    try {
      await applyPlugins(nuxt, plugins);
      await nuxt.hooks.callHook("app:created", vueApp);
    } catch (error) {
      await nuxt.hooks.callHook("app:error", error);
      nuxt.payload.error = nuxt.payload.error || createError(error);
    }
    if (ssrContext == null ? void 0 : ssrContext._renderResponse) {
      throw new Error("skipping render");
    }
    return vueApp;
  };
}
const entry$1 = (ssrContext) => entry(ssrContext);

export { _export_sfc as _, navigateTo as a, useRuntimeConfig as b, useHead as c, entry$1 as default, nuxtLinkDefaults as n, resolveRouteObject as r, useRouter as u };
//# sourceMappingURL=server.mjs.map
