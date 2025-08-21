import { _ as __nuxt_component_0 } from './nuxt-link-Diyv8x98.mjs';
import { defineComponent, computed, ref, mergeProps, unref, withCtx, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { _ as _sfc_main$1 } from './headerTwo-CyEfRA8v.mjs';
import { b as useNuxtApp, c as useRoute } from './server.mjs';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'consola';
import 'node:url';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'unhead/plugins';
import 'vue-router';

const PRE_REGISTER_CODE = 1e3;
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "gracias",
  __ssrInlineRender: true,
  setup(__props) {
    const { $fbq } = useNuxtApp();
    const defaultMessage = {
      title: "\xA1Gracias por registrarte en Futzo!",
      text: "Te has asegurado un descuento exclusivo por tu pre-registro. Muy pronto recibir\xE1s todas las novedades del lanzamiento de nuestra app.",
      cta: "Mantente atento a tu correo y prep\xE1rate para gestionar tu liga de f\xFAtbol como un profesional."
    };
    const isPreRegisterCode = computed(() => {
      var _a, _b;
      return Number((_b = (_a = useRoute()) == null ? void 0 : _a.query) == null ? void 0 : _b.code) === PRE_REGISTER_CODE;
    });
    const messages = ref(defaultMessage);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_link = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "inner" }, _attrs))}><div class="main">`);
      _push(ssrRenderComponent(_sfc_main$1, null, null, _parent));
      _push(`<section id="home" class="section welcome-area inner-area bg-overlay h-100vh overflow-hidden"><div class="container h-100"><div class="row align-items-center h-100"><div class="col-12 col-md-8"><div class="welcome-intro"><h1 class="text-white">${ssrInterpolate(unref(messages).title)}</h1><p class="text-white my-4">${ssrInterpolate(unref(messages).text)}</p>`);
      if (!unref(isPreRegisterCode)) {
        _push(`<p class="text-white my-4">${ssrInterpolate(unref(messages).cta)}</p>`);
      } else {
        _push(ssrRenderComponent(_component_nuxt_link, {
          href: "https://futzo.io",
          class: "my-4 btn sApp-btn text-uppercase"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(unref(messages).cta)}`);
            } else {
              return [
                createTextVNode(toDisplayString(unref(messages).cta), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
      }
      _push(`</div></div></div></div></section></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/gracias.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=gracias-hTxShniu.mjs.map
