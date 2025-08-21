import { defineComponent, ref, withAsyncContext, watchEffect, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs } from 'vue/server-renderer';

const _sfc_main = /* @__PURE__ */ defineComponent({
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
      var _a;
      _push(`<span${ssrRenderAttrs(mergeProps({
        class: ["nuxt-icon", { "nuxt-icon--fill": !_ctx.filled, "nuxt-icon--stroke": unref(hasStroke) && !_ctx.filled }]
      }, _attrs))}>${(_a = unref(icon)) != null ? _a : ""}</span>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/nuxt-icons/dist/runtime/components/nuxt-icon.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=nuxt-icon-Bh6q9at1.mjs.map
