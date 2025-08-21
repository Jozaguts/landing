import { a as buildAssetsURL } from '../routes/renderer.mjs';
import { defineComponent, ref, watch, mergeProps, computed, resolveDirective, unref, getCurrentScope, onScopeDispose, createVNode, resolveDynamicComponent, withCtx, createTextVNode, getCurrentInstance, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderClass, ssrGetDirectiveProps, ssrInterpolate, ssrRenderStyle, ssrIncludeBooleanAttr, ssrRenderVNode } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import { _ as _sfc_main$c } from './headerTwo-CyEfRA8v.mjs';
import { b as useNuxtApp, u as useHead, a as useProductPrices, _ as __nuxt_component_0$1 } from './server.mjs';
import _sfc_main$d from './nuxt-icon-Bh6q9at1.mjs';
import { _ as __nuxt_component_0 } from './nuxt-link-Diyv8x98.mjs';
import 'vue-bundle-renderer/runtime';
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
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'unhead/plugins';
import 'vue-router';

const _sfc_main$b = {};
function _sfc_ssrRender$7(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({
    id: "scrollUp",
    title: "Scroll To Top"
  }, _attrs))}><i class="fas fa-arrow-up"></i></div>`);
}
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ScrollupSection/scrollUp.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const ScrollupSection = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["ssrRender", _sfc_ssrRender$7]]);
const _imports_0$6 = "" + buildAssetsURL("image1 - monitor - dashboard.D2szuDo-.png");
const _sfc_main$a = /* @__PURE__ */ defineComponent({
  __name: "heroTwo",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Futzo.io | Gestiona tu liga de f\xFAtbol de manera profesional",
      meta: [
        {
          name: "description",
          content: "Futzo.io es la plataforma definitiva para la gesti\xF3n de ligas de f\xFAtbol. Centraliza operaciones, automatiza calendarios y mant\xE9n una comunicaci\xF3n efectiva con tus equipos. F\xE1cil, r\xE1pido y seguro."
        },
        {
          name: "keywords",
          content: "futzo.io, futzo, liga de f\xFAtbol, gesti\xF3n de torneos, calendario de partidos, asignaci\xF3n de canchas, equipos, jugadores, automatizaci\xF3n de procesos, acceso seguro"
        }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        id: "home",
        class: "section welcome-area bg-inherit h-100vh overflow-hidden"
      }, _attrs))}><div class="shapes-container"><div class="bg-shape"></div></div><div class="container h-100"><div class="row align-items-center h-100"><div class="col-12 col-md-7"><div class="welcome-intro"><h1>Futzo.io</h1><h2><strong>Gestiona tu liga de f\xFAtbol </strong> de manera profesional</h2><p class="hero-subtitle my-0">Centraliza calendarios, equipos, jugadores y resultados en una sola plataforma.</p><p class="hero-subtitle my-0"> Ahorra tiempo y mejora la comunicaci\xF3n en tu liga.</p><ul class="hero-benefits"><li>Calendario y resultados en tiempo real</li><li>Registro de equipos y jugadores</li><li>Estad\xEDsticas y tarjetas de juego</li></ul><div class="hero-ctas"><a class="btn btn-primary" href="#pricing">Ver planes</a><a class="btn btn-outline" href="#newsletter">Obtener cup\xF3n: primer mes $299 MXN</a></div><small class="hero-note"> Sin instalaci\xF3n. Prueba r\xE1pida. Soporte por chat. </small></div></div><div class="col-12 col-md-5"><div class="welcome-thumb" data-aos="fade-right" data-aos-delay="500" data-aos-duration="1000"><figure class="hero-media"><img${ssrRenderAttr("src", _imports_0$6)} width="445" height="425" loading="eager" fetchpriority="high" alt="Panel de administraci\xF3n de liga en Futzo mostrando calendario y equipos"></figure></div></div></div></div></section>`);
    };
  }
});
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/HeroSection/heroTwo.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const _sfc_main$9 = {};
function _sfc_ssrRender$6(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_nuxt_icon = _sfc_main$d;
  _push(`<section${ssrRenderAttrs(mergeProps({
    id: "features",
    class: "section features-area ptb_100"
  }, _attrs))}><div class="container"><div class="row justify-content-center"><div class="col-12 col-md-10 col-lg-6"><div class="section-heading text-center"><h2>Caracter\xEDsticas principales de Futzo.io para la gesti\xF3n de ligas de f\xFAtbol</h2><p class="d-none d-sm-block mt-4">Todas las herramientas que necesitas en un solo lugar Con Futzo.io, controla todos los aspectos de tu liga de f\xFAtbol.</p><p class="d-block d-sm-none mt-4">Futzo.io te ofrece todo lo que necesitas para gestionar tu liga de f\xFAtbol de manera eficiente y profesional.</p></div></div></div><div class="row"><div class="col-12 col-md-6 col-lg-4"><div class="icon-box text-center p-4 wow fadeInUp" data-wow-duration="2s"><div class="featured-icon mb-3">`);
  _push(ssrRenderComponent(_component_nuxt_icon, {
    class: "feature-icon",
    name: "trophy",
    filled: ""
  }, null, _parent));
  _push(`</div><div class="icon-text"><h3 class="mb-2">Gesti\xF3n de Torneos</h3><p>Organiza y administra m\xFAltiples torneos con facilidad. Desde la creaci\xF3n hasta la finalizaci\xF3n, todo en una plataforma intuitiva.</p></div></div></div><div class="col-12 col-md-6 col-lg-4"><div class="icon-box text-center p-4 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.2s"><div class="featured-icon mb-3">`);
  _push(ssrRenderComponent(_component_nuxt_icon, {
    class: "feature-icon",
    name: "calendar",
    filled: ""
  }, null, _parent));
  _push(`</div><div class="icon-text"><h3 class="mb-2">Calendario de Partidos</h3><p>Planifica y visualiza todos los encuentros de tu liga con un calendario interactivo que facilita la programaci\xF3n y el seguimiento de los partidos.</p></div></div></div><div class="col-12 col-md-6 col-lg-4"><div class="icon-box text-center p-4 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.4s"><div class="featured-icon mb-3">`);
  _push(ssrRenderComponent(_component_nuxt_icon, {
    name: "field",
    filled: "",
    class: "feature-icon"
  }, null, _parent));
  _push(`</div><div class="icon-text"><h3 class="mb-2">Asignaci\xF3n de Canchas</h3><p>Evita conflictos de horarios y asegura la disponibilidad de las canchas con nuestra herramienta de gesti\xF3n de ubicaciones.</p></div></div></div><div class="col-12 col-md-6 col-lg-4"><div class="icon-box text-center p-4 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.6s"><div class="featured-icon mb-3">`);
  _push(ssrRenderComponent(_component_nuxt_icon, {
    name: "football",
    filled: "",
    class: "feature-icon"
  }, null, _parent));
  _push(`</div><div class="icon-text"><h3 class="mb-2">Gesti\xF3n de Equipos y Jugadores</h3><p>Mant\xE9n un registro detallado de los equipos y jugadores, incluyendo estad\xEDsticas, rendimientos y m\xE1s.</p></div></div></div><div class="col-12 col-md-6 col-lg-4"><div class="icon-box text-center p-4 wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.8s"><div class="featured-icon mb-3">`);
  _push(ssrRenderComponent(_component_nuxt_icon, {
    name: "communication",
    filled: "",
    class: "feature-icon"
  }, null, _parent));
  _push(`</div><div class="icon-text"><h3 class="mb-2">Comunicaci\xF3n Efectiva</h3><p>Env\xEDa notificaciones y actualizaciones a todos los miembros de la liga directamente desde la plataforma.</p></div></div></div><div class="col-12 col-md-6 col-lg-4"><div class="icon-box text-center p-4 wow fadeInUp" data-wow-duration="2s" data-wow-delay="1s"><div class="featured-icon mb-3">`);
  _push(ssrRenderComponent(_component_nuxt_icon, {
    name: "stats",
    filled: "",
    class: "feature-icon"
  }, null, _parent));
  _push(`</div><div class="icon-text"><h3 class="mb-2">Informe y Estad\xEDsticas</h3><p>Genera informes detallados y analiza estad\xEDsticas para tomar decisiones informadas y mejorar la gesti\xF3n de tu liga.</p></div></div></div></div></div></section>`);
}
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/FeatureSection/featureTwo.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const FeatureSection = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["ssrRender", _sfc_ssrRender$6]]);
const _imports_0$5 = "" + buildAssetsURL("image 3 - floating - stats.CEc2iiKY.png");
const _sfc_main$8 = {};
function _sfc_ssrRender$5(_ctx, _push, _parent, _attrs) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "section discover-area bg-gray overflow-hidden ptb_100" }, _attrs))}><div class="container"><div class="row justify-content-between align-items-center"><div class="col-12 col-lg-6 order-2 order-lg-1"><div class="service-thumb discover-thumb mx-auto text-center"><img${ssrRenderAttr("src", _imports_0$5)} alt="explora nuestras funciones" width="540" height="359"></div></div><div class="col-12 col-lg-6 order-1 order-lg-2"><div class="discover-text px-0 px-lg-4 pt-4 pt-lg-0"><h2 class="pb-4">Explora nuestras funciones avanzadas.</h2><ul class="check-list"><li class="py-1"><div class="list-box media"><span class="icon align-self-center"><i class="fas fa-check"></i></span><span class="media-body pl-2">Registro y administraci\xF3n completa de equipos, jugadores y cuerpo t\xE9cnico, con informaci\xF3n detallada y precisa. Adem\xE1s, genera URLs \xFAnicas para que equipos y jugadores se registren autom\xE1ticamente en los torneos.</span></div></li><li class="py-1"><div class="list-box media"><span class="icon align-self-center"><i class="fas fa-check"></i></span><span class="media-body pl-2">Automatizaci\xF3n de calendarios de partidos: Creaci\xF3n autom\xE1tica de calendarios considerando disponibilidad de estadios y preferencias de equipos.</span></div></li><li class="py-1"><div class="list-box media"><span class="icon align-self-center"><i class="fas fa-check"></i></span><span class="media-body pl-2">Notificaciones en tiempo real: Notificaciones autom\xE1ticas sobre partidos pr\xF3ximos, cambios en el calendario y actualizaciones relevantes.</span></div></li><li class="py-1"><div class="list-box media"><span class="icon align-self-center"><i class="fas fa-check"></i></span><span class="media-body pl-2">Estad\xEDsticas detalladas y an\xE1lisis: Recopilaci\xF3n y presentaci\xF3n de estad\xEDsticas de juegos y rendimiento de equipos y jugadores</span></div></li></ul><div class="icon-box d-flex mt-3 mb-3"><div class="service-icon"><span><i class="fas fa-bell"></i></span></div><div class="service-icon px-3"><span><i class="fas fa-calendar-alt"></i></span></div><div class="service-icon"><span><i class="fas fa-users-cog"></i></span></div></div></div></div></div></div></section>`);
}
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/DiscoverSection/discoverTwo.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const DiscoverSection = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["ssrRender", _sfc_ssrRender$5]]);
const _imports_0$4 = "" + buildAssetsURL("image4 - laptop - teams.DmLOSdp1.png");
const _sfc_main$7 = {};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_client_only = __nuxt_component_0$1;
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "section service-area bg-inherit overflow-hidden ptb_100" }, _attrs))}><div class="container"><div class="row justify-content-between"><div class="col-12 col-lg-6 order-2 order-lg-1"><div class="service-text pt-4 pt-lg-0"><h2 class="mb-4">Caracter\xEDsticas de Futzo.io</h2><ul class="service-list"><li class="single-service media py-2"><div class="service-icon pr-4"><span>`);
  _push(ssrRenderComponent(_component_client_only, null, {}, _parent));
  _push(`</span></div><div class="service-text media-body"><p>Gesti\xF3n Integral de Ligas: Administra f\xE1cilmente equipos, torneos y calendarios desde un solo lugar.</p></div></li><li class="single-service media py-2"><div class="service-icon pr-4"><span>`);
  _push(ssrRenderComponent(_component_client_only, null, {}, _parent));
  _push(`</span></div><div class="service-text media-body"><p>Control Detallado de Equipos y Jugadores: Registra y gestiona estad\xEDsticas y rendimientos de manera profesional.</p></div></li><li class="single-service media py-2"><div class="service-icon pr-4"><span>`);
  _push(ssrRenderComponent(_component_client_only, null, {}, _parent));
  _push(`</span></div><div class="service-text media-body"><p>Automatizaci\xF3n de Procesos: Ahorra tiempo con herramientas que simplifican la organizaci\xF3n y administraci\xF3n de tu liga.</p></div></li><li class="single-service media py-2"><div class="service-icon pr-4"><span>`);
  _push(ssrRenderComponent(_component_client_only, null, {}, _parent));
  _push(`</span></div><div class="service-text media-body"><p>Acceso F\xE1cil y Seguro: Todo lo que necesitas para gestionar tu liga, disponible en cualquier momento y desde cualquier dispositivo.</p></div></li><li class="single-service media py-2"><div class="service-icon pr-4"><span>`);
  _push(ssrRenderComponent(_component_client_only, null, {}, _parent));
  _push(`</span></div><div class="service-text media-body"><p>Registro Autom\xE1tico de Equipos y Jugadores: Genera URLs \xFAnicas para cada torneo, permitiendo que los equipos y jugadores se registren autom\xE1ticamente sin necesidad de intervenci\xF3n manual.</p></div></li></ul><a href="#newsletter" class="btn btn-bordered mt-4">\xA1\xDAnete a la Espera!</a></div></div><div class="col-12 col-lg-4 order-1 order-lg-2 d-none d-md-block"><div class="service-thumb mx-auto"><img${ssrRenderAttr("src", _imports_0$4)} alt="Caracter\xEDsticas de futzo.io" width="274" height="550"></div></div></div></div></section>`);
}
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ServiceSection/serviceTwo.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const ServiceSection = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["ssrRender", _sfc_ssrRender$4]]);
const _imports_0$3 = "" + buildAssetsURL("work_thumb_3.CpKBatf6.png");
const _sfc_main$6 = {};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_client_only = __nuxt_component_0$1;
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "section work-area bg-overlay overflow-hidden ptb_100" }, _attrs))}><div class="container"><div class="row justify-content-center"><div class="col-12 col-lg-6"><div class="work-content text-center"><h2 class="text-white">\xBFC\xF3mo funciona Futzo.io?</h2><p class="text-white my-3 mt-sm-4 mb-sm-5">Sigue estos pasos para empezar a disfrutar de sus beneficios.</p></div></div></div><div class="row"><div class="col-12 col-md-4"><div class="single-work text-center p-3"><div class="work-icon">`);
  _push(ssrRenderComponent(_component_client_only, null, {}, _parent));
  _push(`</div><h3 class="text-white py-3">Reg\xEDstrate y crea tu cuenta</h3><p class="text-white">Inscr\xEDbete en Futzo.io r\xE1pidamente. Con solo registrarte, tendr\xE1s acceso a todas las funciones que necesitas para administrar tu liga.</p></div></div><div class="col-12 col-md-4"><div class="single-work text-center p-3"><div class="work-icon">`);
  _push(ssrRenderComponent(_component_client_only, null, {}, _parent));
  _push(`</div><h3 class="text-white py-3">Inicia tu liga</h3><p class="text-white">Empieza configurando tu liga: define sus reglas, horarios, y otros detalles importantes para que est\xE9 lista para el juego.</p></div></div><div class="col-12 col-md-4"><div class="single-work text-center p-3"><div class="work-icon"><img class="avatar-md"${ssrRenderAttr("src", _imports_0$3)} alt="avatar"></div><h3 class="text-white py-3">Configura y gestiona tu liga</h3><p class="text-white">Agrega equipos y jugadores f\xE1cilmente. Asigna roles y organiza todos los aspectos de tu liga, todo desde un solo lugar, para que la administraci\xF3n sea m\xE1s sencilla y eficiente.</p></div></div></div></div></section>`);
}
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/WorkSection/work.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const WorkSection = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["ssrRender", _sfc_ssrRender$3]]);
const _imports_0$2 = "" + buildAssetsURL("slider1-resized.CqKNUIg4.png");
const _imports_1 = "" + buildAssetsURL("slider2-resized.BUI4R3_g.png");
const _imports_2 = "" + buildAssetsURL("image4 - laptop - teams-resized.B2UNu7Yl.png");
const _sfc_main$5 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<section${ssrRenderAttrs(mergeProps({
    id: "screenshots",
    class: "section screenshots-area ptb_100 bg-gray overflow-hidden ptb_100"
  }, _attrs))}><div class="container"><div class="row justify-content-center"><div class="col-12 col-md-10 col-lg-7"><div class="section-heading text-center"><h2 class="text-capitalize">Interfaz Simple y Atractiva</h2><p class="d-none d-sm-block mt-4">Futzo.io ofrece una interfaz clara y organizada, dise\xF1ada para facilitar la gesti\xF3n eficiente de tu liga de f\xFAtbol. Navega f\xE1cilmente por todas las funciones clave.</p><p class="d-block d-sm-none mt-4">Futzo te facilita gestionar tu liga con una interfaz intuitiva y visualmente atractiva.</p></div></div></div><div class="row"><div class="col-12"><div class="app-screenshots"><div class="single-screenshot"><img${ssrRenderAttr("src", _imports_0$2)} alt="pagina de registro" width="250" height="444"></div><div class="single-screenshot"><img${ssrRenderAttr("src", _imports_1)} alt="estad\xEDsticas de tu liga" width="250" height="444"></div><div class="single-screenshot"><img${ssrRenderAttr("src", _imports_2)} alt="Calendario de partidos" width="250" height="501"></div><div class="single-screenshot"><img${ssrRenderAttr("src", _imports_1)} alt="Registros de jugadores" width="250" height="444"></div><div class="single-screenshot"><img${ssrRenderAttr("src", _imports_0$2)} alt="pagina de registro" width="250" height="444"></div><div class="single-screenshot"><img${ssrRenderAttr("src", _imports_1)} alt="Registros de jugadores" width="250" height="444"></div></div></div></div></div></section>`);
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ScreenshotSection/screenshotTwo.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const ScreenshotSection = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$2]]);
const _imports_0$1 = "" + buildAssetsURL("logo-08.VpcmJwX2.png");
const _imports_0 = "data:image/png;base64,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";
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "pricingOne",
  __ssrInlineRender: true,
  setup(__props) {
    const {
      kickOffPrice,
      proPlayPrice,
      eliteLeaguePrice,
      isAnnuallyPrice,
      priceMode,
      loading
    } = useProductPrices();
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r;
      const _directive_auto_animate = resolveDirective("auto-animate");
      _push(`<section${ssrRenderAttrs(mergeProps({
        id: "pricing",
        class: "section price-plan-area overflow-hidden ptb_100"
      }, _attrs))}>`);
      if (!unref(loading)) {
        _push(`<div class="container"><div class="row justify-content-center"><div class="col-12 col-md-10 col-lg-7"><div class="section-heading text-center"><h2>Desbloquea Todo el Potencial de Futzo.io</h2><p class="d-none d-sm-block mt-4">Lleva la gesti\xF3n de tu liga al siguiente nivel con Futzo.io Desde peque\xF1as ligas hasta grandes competiciones, te ofrecemos la soluci\xF3n perfecta.</p><p class="d-block d-sm-none mt-4">Gesti\xF3n eficiente de tu liga de f\xFAtbol con las herramientas avanzadas de Futzo.</p></div></div></div><div class="row justify-content-center pb-2"><div class="col-6"><ul class="nav nav-pills nav-justified"><li class="nav-item mx-2 mb-2"><button type="button" class="${ssrRenderClass([{ "active": unref(priceMode) === "annually_price" }, "btn btn-block custom-btn"])}">Anual</button></li><li class="nav-item"><button type="button" class="${ssrRenderClass([{ "active": unref(priceMode) === "monthly_price" }, "btn btn-block custom-btn"])}">Mensual</button></li></ul></div></div><div class="row justify-content-center"><div class="col-12 col-sm-12 col-lg-12"><div class="row price-plan-wrapper"><div class="col-12 col-md-4"><div class="single-price-plan text-center p-5 wow fadeInLeft" data-aos-duration="2s" data-wow-delay="0.4s"><div class="plan-thumb"><img width="250" height="180"${ssrRenderAttr("src", _imports_0$1)} alt="futzo logo vertical fondo primario"></div><div class="plan-title my-2 my-sm-3"><p class="card-title text-uppercase">Kickoff</p></div><div class="plan-price">${(_b = (_a = unref(kickOffPrice)) == null ? void 0 : _a.price) != null ? _b : ""}</div><div${ssrRenderAttrs(mergeProps({ class: "plan-price details py-2 mt-2" }, ssrGetDirectiveProps(_ctx, _directive_auto_animate)))}><p class="promo">${(_d = (_c = unref(kickOffPrice)) == null ? void 0 : _c.promo) != null ? _d : ""}</p>`);
        if (unref(isAnnuallyPrice)) {
          _push(`<p class="color-primary text-primary">Al pagar anualmente</p>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div><div class="plan-description"><ul class="plan-features"><li class="border-top py-3">Gesti\xF3n de m\xFAltiples torneos</li><li class="border-top py-3">Programaci\xF3n de partidos automatizada</li><li class="border-top border-bottom py-3">Estad\xEDsticas generales</li></ul></div><div class="plan-button" data-toggle="tooltip" data-placement="top"${ssrRenderAttr("title", (_e = unref(kickOffPrice)) == null ? void 0 : _e.cta)}><a href="#" class="btn mt-4">${ssrInterpolate((_f = unref(kickOffPrice)) == null ? void 0 : _f.cta)}</a></div></div></div><div class="col-12 col-md-4"><div class="single-price-plan text-center p-5 wow fadeInLeft" data-aos-duration="2s" data-wow-delay="0.4s"><div class="plan-thumb"><img width="240" height="169"${ssrRenderAttr("src", _imports_0)} alt="futzo logo vertical fondo primario"></div><div class="plan-title my-2 my-sm-3"><p class="card-title text-uppercase">ProPlay</p></div><div class="plan-price">${(_h = (_g = unref(proPlayPrice)) == null ? void 0 : _g.price) != null ? _h : ""}</div><div${ssrRenderAttrs(mergeProps({ class: "plan-price details py-2 mt-2" }, ssrGetDirectiveProps(_ctx, _directive_auto_animate)))}><p class="promo">${(_j = (_i = unref(proPlayPrice)) == null ? void 0 : _i.promo) != null ? _j : ""}</p>`);
        if (unref(isAnnuallyPrice)) {
          _push(`<p class="color-primary text-primary">Al pagar anualmente</p>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div><div class="plan-description"><ul class="plan-features"><li class="border-top py-3">Incluye todo de Kickoff</li><li class="border-top py-3">Registro automatizado, genera URLs \xFAnicas para inscripci\xF3n directa en torneos.</li><li class="border-top py-3">Configuraci\xF3n visual, asegura que futzo.io coincida con tu liga.</li><li class="border-top border-bottom py-3">Soporte</li></ul></div><div class="plan-button" data-toggle="tooltip" data-placement="top"${ssrRenderAttr("title", (_k = unref(proPlayPrice)) == null ? void 0 : _k.cta)}><a href="#" class="btn mt-4">${ssrInterpolate((_l = unref(proPlayPrice)) == null ? void 0 : _l.cta)}</a></div></div></div><div class="col-12 col-md-4 mt-4 mt-md-0"><div class="single-price-plan text-center p-5 wow fadeInRight" data-aos-duration="2s" data-wow-delay="0.4s"><div class="plan-thumb"><img width="250" height="180"${ssrRenderAttr("src", _imports_0$1)} alt="futzo logo vertical fondo primario"></div><div class="plan-title my-2 my-sm-3"><p class="card-title text-uppercase">EliteLeague</p></div><div class="plan-price">${(_n = (_m = unref(eliteLeaguePrice)) == null ? void 0 : _m.price) != null ? _n : ""}</div><div${ssrRenderAttrs(mergeProps({ class: "plan-price details py-2 mt-2" }, ssrGetDirectiveProps(_ctx, _directive_auto_animate)))}><p class="promo">${(_p = (_o = unref(eliteLeaguePrice)) == null ? void 0 : _o.promo) != null ? _p : ""}</p>`);
        if (unref(isAnnuallyPrice)) {
          _push(`<p class="color-primary text-primary">Al pagar anualmente</p>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div><div class="plan-description"><ul class="plan-features"><li class="border-top py-3">Incluye todo de ProPlay</li><li class="border-top py-3">Soporte prioritario</li><li class="border-top py-3">Acceso anticipado a futuras actualizaciones</li><li class="border-top border-bottom py-3">Comunicaci\xF3n directa con jugadores y entrenadores</li></ul></div><div class="plan-button" data-toggle="tooltip" data-placement="top"${ssrRenderAttr("title", (_q = unref(eliteLeaguePrice)) == null ? void 0 : _q.cta)}><a href="#" class="btn mt-4">${ssrInterpolate((_r = unref(eliteLeaguePrice)) == null ? void 0 : _r.cta)}</a></div></div></div></div></div></div><div class="row justify-content-center pt-5"><p class="text-body pt-4 fw-6">Satisfacci\xF3n Garantizada en Todos Nuestros Planes</p><p class="text-body fw-2">Puedes probar cualquier plan con total confianza, sabiendo que, si no quedas satisfecho, te devolveremos tu dinero sin preguntas.</p></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</section>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/PricingSection/pricingOne.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<section${ssrRenderAttrs(mergeProps({
    class: "section faq-area ptb_100",
    id: "faq"
  }, _attrs))}><div class="container"><div class="row justify-content-center"><div class="col-12 col-md-10 col-lg-7"><div class="section-heading text-center"><h2 class="text-capitalize"> \xBFTienes Preguntas? </h2><p class="d-none d-sm-block mt-4">Si tienes alguna pregunta sobre Futzo.io, consulta nuestras preguntas frecuentes. Hemos reunido las dudas m\xE1s comunes para que puedas resolverlas r\xE1pidamente.</p><p class="d-block d-sm-none mt-4">Consulta nuestras preguntas frecuentes para resolver tus dudas sobre Futzo.io de manera r\xE1pida.</p></div></div></div><div class="row justify-content-center"><div class="col-12"><div class="faq-content"><div class="accordion" id="sApp-accordion"><div class="row justify-content-center"><div class="col-12 col-md-10 col-lg-8"><div class="card border-top-0 border-left-0 border-right-0 border-bottom"><div class="card-header bg-inherit border-0 p-0"><h2 class="mb-0"><button class="btn px-0 py-3" type="button" data-toggle="collapse" data-target="#collapseOne"> \xBFQu\xE9 es Futzo.io y c\xF3mo puede ayudarme en la gesti\xF3n de mi liga de f\xFAtbol? </button></h2></div><div id="collapseOne" class="collapse show" data-parent="#sApp-accordion"><div class="card-body px-0 py-3"> Futzo.io es una plataforma integral dise\xF1ada para optimizar la administraci\xF3n de ligas de f\xFAtbol, haci\xE9ndola m\xE1s eficiente y menos complicada. Desde la programaci\xF3n automatizada de partidos hasta la gesti\xF3n de equipos, Futzo.io centraliza todas las funciones clave en un solo lugar. Una de sus caracter\xEDsticas destacadas es la automatizaci\xF3n del proceso de inscripci\xF3n: Futzo.io genera URLs \xFAnicas para que cada equipo y jugador se registren de forma aut\xF3noma, reduciendo significativamente el esfuerzo administrativo. Adem\xE1s, facilita la comunicaci\xF3n directa con los jugadores, asegurando que todo el proceso sea fluido y sin complicaciones. </div></div></div><div class="card border-top-0 border-left-0 border-right-0 border-bottom"><div class="card-header bg-inherit border-0 p-0"><h2 class="mb-0"><button class="btn collapsed px-0 py-3" type="button" data-toggle="collapse" data-target="#collapseTwo"> \xBFNecesito instalar alg\xFAn software para usar Futzo.io? </button></h2></div><div id="collapseTwo" class="collapse" data-parent="#sApp-accordion"><div class="card-body px-0 py-3"> No, Futzo.io es una plataforma basada en la web. Solo necesitas registrarte y acceder desde cualquier dispositivo con conexi\xF3n a internet. No requiere instalaci\xF3n, lo que te permite empezar a usarla de inmediato. </div></div></div><div class="card border-top-0 border-left-0 border-right-0 border-bottom"><div class="card-header bg-inherit border-0 p-0"><h2 class="mb-0"><button class="btn collapsed px-0 py-3" type="button" data-toggle="collapse" data-target="#collapseThree"> \xBFPuedo gestionar m\xFAltiples torneos al mismo tiempo con Futzo.io? </button></h2></div><div id="collapseThree" class="collapse" data-parent="#sApp-accordion"><div class="card-body px-0 py-3"> S\xED, Futzo.io te permite organizar y administrar m\xFAltiples torneos simult\xE1neamente. La plataforma est\xE1 dise\xF1ada para manejar la complejidad de gestionar varios torneos sin perder de vista los detalles importantes. </div></div></div><div class="card border-top-0 border-left-0 border-right-0 border-bottom"><div class="card-header bg-inherit border-0 p-0"><h2 class="mb-0"><button class="btn collapsed px-0 py-3" type="button" data-toggle="collapse" data-target="#collapseFour"> \xBFQu\xE9 tipo de soporte t\xE9cnico ofrece Futzo.io? </button></h2></div><div id="collapseFour" class="collapse" data-parent="#sApp-accordion"><div class="card-body px-0 py-3"> Futzo.io ofrece soporte t\xE9cnico 24/7 para todos sus usuarios. Nuestro equipo est\xE1 disponible para ayudarte con cualquier problema t\xE9cnico o consulta que puedas tener, asegurando que siempre tengas acceso a la asistencia que necesitas. </div></div></div><div class="card border-top-0 border-left-0 border-right-0 border-bottom"><div class="card-header bg-inherit border-0 p-0"><h2 class="mb-0"><button class="btn collapsed px-0 py-3" type="button" data-toggle="collapse" data-target="#collapseFive"> \xBFEs seguro almacenar los datos de mi liga en Futzo.io? </button></h2></div><div id="collapseFive" class="collapse" data-parent="#sApp-accordion"><div class="card-body px-0 py-3"> Absolutamente. Futzo.io utiliza tecnolog\xEDas de encriptaci\xF3n avanzadas y copias de seguridad diarias para garantizar que todos tus datos est\xE9n seguros y protegidos. La privacidad y seguridad de tu informaci\xF3n son nuestras prioridades. </div></div></div></div></div></div></div></div></div></div></section>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/FaqSection/faqTwo.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const FaqSection = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "newsletter",
  __ssrInlineRender: true,
  setup(__props) {
    const email = ref("");
    const stateClass = ref("");
    const isSubmitted = ref(false);
    ref(false);
    const { $toast } = useNuxtApp();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><section id="newsletter" class="section price-plan-area bg-gray ptb_100" data-v-6f276ad5><div class="container" data-v-6f276ad5><div class="row justify-content-center" data-v-6f276ad5><div class="col-12 col-md-10 col-lg-7" data-v-6f276ad5><div class="subscribe-content text-center" data-v-6f276ad5><h2 data-v-6f276ad5>Paga menos, juega m\xE1s: primer mes en <strong data-v-6f276ad5>Futzo</strong> por <strong data-v-6f276ad5>$299 MXN</strong></h2><p class="mt-4" data-v-6f276ad5> Administra tu <strong data-v-6f276ad5>liga de f\xFAtbol</strong> con facilidad: registra equipos y jugadores, genera calendarios y lleva estad\xEDsticas en un solo lugar. Tu <strong data-v-6f276ad5>primer mes</strong> cuesta solo <strong data-v-6f276ad5>$299 MXN</strong>, v\xE1lido para <strong data-v-6f276ad5>cualquier plan</strong>.</p><form class="subscribe-form" data-v-6f276ad5><div class="form-group" data-v-6f276ad5><input type="email"${ssrRenderAttr("value", unref(email))} class="${ssrRenderClass([unref(stateClass), "form-control"])}" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Ingresa tu correo electr\xF3nico" formnovalidate data-v-6f276ad5><div id="validationServer03Feedback" class="invalid-feedback" data-v-6f276ad5> Ingresa un correo electr\xF3nico v\xE1lido. </div></div><button${ssrIncludeBooleanAttr(unref(isSubmitted)) ? " disabled" : ""} type="submit" class="btn btn-lg btn-block" data-v-6f276ad5> Obtener cup\xF3n de Futzo <span style="${ssrRenderStyle(unref(isSubmitted) ? null : { display: "none" })}" class="spinner-border spinner-border-sm" role="status" aria-hidden="true" data-v-6f276ad5></span></button></form></div></div></div></div></section>`);
      ssrRenderVNode(_push, createVNode(resolveDynamicComponent("script"), { type: "application/ld+json" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` { &quot;@context&quot;: &quot;https://schema.org&quot;, &quot;@type&quot;: &quot;FAQPage&quot;, &quot;mainEntity&quot;: [ { &quot;@type&quot;: &quot;Question&quot;, &quot;name&quot;: &quot;\xBFC\xF3mo obtengo el cup\xF3n de $299 MXN?&quot;, &quot;acceptedAnswer&quot;: { &quot;@type&quot;: &quot;Answer&quot;, &quot;text&quot;: &quot;Ingresa tu correo en el formulario y te enviaremos el cup\xF3n por email para aplicarlo al momento de tu primera facturaci\xF3n.&quot; } }, { &quot;@type&quot;: &quot;Question&quot;, &quot;name&quot;: &quot;\xBFEl precio de $299 MXN aplica a cualquier plan?&quot;, &quot;acceptedAnswer&quot;: { &quot;@type&quot;: &quot;Answer&quot;, &quot;text&quot;: &quot;S\xED. El cup\xF3n reduce el costo del primer mes a $299 MXN en cualquier plan de Futzo.&quot; } } ] } `);
          } else {
            return [
              createTextVNode(' { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [ { "@type": "Question", "name": "\xBFC\xF3mo obtengo el cup\xF3n de $299 MXN?", "acceptedAnswer": { "@type": "Answer", "text": "Ingresa tu correo en el formulario y te enviaremos el cup\xF3n por email para aplicarlo al momento de tu primera facturaci\xF3n." } }, { "@type": "Question", "name": "\xBFEl precio de $299 MXN aplica a cualquier plan?", "acceptedAnswer": { "@type": "Answer", "text": "S\xED. El cup\xF3n reduce el costo del primer mes a $299 MXN en cualquier plan de Futzo." } } ] } ')
            ];
          }
        }),
        _: 1
      }), _parent);
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/NewsletterSection/newsletter.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const NewsletterSection = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-6f276ad5"]]);
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_nuxt_link = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(_attrs)}><div class="height-emulator d-none d-lg-block"></div><footer class="footer-area footer-fixed bg-gray"><div class="footer-top ptb_100"><div class="container"><div class="row"><div class="col-12 col-sm-6 col-lg-3"><div class="footer-items"><a class="navbar-brand" href="#"><img class="logo"${ssrRenderAttr("src", _imports_0)} alt="futzo plataforma admintrativa de ligas deportivas" width="140" height="169"></a><p class="mt-2 mb-3"></p><div class="social-icons d-flex"><a class="facebook" href="https://www.facebook.com/futzo.io" aria-label="Visit Futzo on Facebook"><i class="fab fa-facebook-f"></i><i class="fab fa-facebook-f"></i></a><a class="bg-danger" href="https://www.instagram.com/futzo.io/" aria-label="Visit Futzo on Instagram"><i class="fab fa-instagram"></i><i class="fab fa-instagram"></i></a></div></div></div><div class="col-12 col-sm-3 col-lg-3"><div class="footer-items"><h3 class="footer-title mb-2">Enlaces \xFAtiles</h3><ul><li class="py-2"><a href="#home">Home</a></li><li class="py-2"><a href="#features">Caracter\xEDsticas</a></li><li class="py-2"><a href="#screenshots">Im\xE1genes</a></li><li class="py-2"><a href="#faq">Preguntas frecuentes</a></li><li class="py-2">`);
  _push(ssrRenderComponent(_component_nuxt_link, { to: "/politicas-de-privacidad" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Pol\xEDtica de privacidad`);
      } else {
        return [
          createTextVNode("Pol\xEDtica de privacidad")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li class="py-2">`);
  _push(ssrRenderComponent(_component_nuxt_link, { to: "/terminos-de-servicio" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`T\xE9rminos de servicio`);
      } else {
        return [
          createTextVNode("T\xE9rminos de servicio")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li></ul></div></div><div class="col-12 col-sm-6 col-lg-6"><div class="footer-items"><h3 class="footer-title mb-2">Sobre Futzo.io</h3><p class="mb-3"> Futzo.io es una plataforma dise\xF1ada para facilitar la administraci\xF3n de ligas deportivas. Ayudamos a organizadores, \xE1rbitros y due\xF1os de equipos a crear torneos, registrar jugadores, gestionar calendarios y generar estad\xEDsticas f\xE1cilmente desde un solo lugar. </p><p class="mb-3">Con Futzo.io, llevar el control de tu liga es simple, r\xE1pido y profesional.</p><p><span>\u{1F4CD}</span> Con sede en Puerto Vallarta, Jalisco, M\xE9xico</p><p><span>\u{1F4DE}</span> Contacto: +52 322 475 0062</p><p><span>\u{1F4E7}</span> Email: contacto@futzo.io</p></div></div></div></div></div><div class="footer-bottom"><div class="container"><div class="row"><div class="col-12"><div class="copyright-area d-flex flex-wrap justify-content-center justify-content-sm-between text-center py-4"><div class="copyright-left">\xA9 Copyrights ${ssrInterpolate((/* @__PURE__ */ new Date()).getFullYear())} Futzo.io todos los derechos reservados.</div></div></div></div></div></div></footer></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/FooterSection/footerOne.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const FooterSection = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
function tryOnScopeDispose(fn) {
  if (getCurrentScope()) {
    onScopeDispose(fn);
    return true;
  }
  return false;
}
function toValue(r) {
  return typeof r === "function" ? r() : unref(r);
}
typeof WorkerGlobalScope !== "undefined" && globalThis instanceof WorkerGlobalScope;
const notNullish = (val) => val != null;
const noop = () => {
};
const defaultWindow = void 0;
function unrefElement(elRef) {
  var _a;
  const plain = toValue(elRef);
  return (_a = plain == null ? void 0 : plain.$el) != null ? _a : plain;
}
function useMounted() {
  const isMounted = ref(false);
  getCurrentInstance();
  return isMounted;
}
function useSupported(callback) {
  const isMounted = useMounted();
  return computed(() => {
    isMounted.value;
    return Boolean(callback());
  });
}
function useIntersectionObserver(target, callback, options = {}) {
  const {
    root,
    rootMargin = "0px",
    threshold = 0,
    window: window2 = defaultWindow,
    immediate = true
  } = options;
  const isSupported = useSupported(() => window2 && "IntersectionObserver" in window2);
  const targets = computed(() => {
    const _target = toValue(target);
    return (Array.isArray(_target) ? _target : [_target]).map(unrefElement).filter(notNullish);
  });
  let cleanup = noop;
  const isActive = ref(immediate);
  const stopWatch = isSupported.value ? watch(
    () => [targets.value, unrefElement(root), isActive.value],
    ([targets2, root2]) => {
      cleanup();
      if (!isActive.value)
        return;
      if (!targets2.length)
        return;
      const observer = new IntersectionObserver(
        callback,
        {
          root: unrefElement(root2),
          rootMargin,
          threshold
        }
      );
      targets2.forEach((el) => el && observer.observe(el));
      cleanup = () => {
        observer.disconnect();
        cleanup = noop;
      };
    },
    { immediate, flush: "post" }
  ) : noop;
  const stop = () => {
    cleanup();
    stopWatch();
    isActive.value = false;
  };
  tryOnScopeDispose(stop);
  return {
    isSupported,
    isActive,
    pause() {
      cleanup();
      isActive.value = false;
    },
    resume() {
      isActive.value = true;
    },
    stop
  };
}
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const { $fbq } = useNuxtApp();
    const pricingRef = ref(null);
    const pricingRefIsVisible = ref(false);
    const { stop } = useIntersectionObserver(
      pricingRef,
      ([{ isIntersecting }], observerElement) => {
        pricingRefIsVisible.value = isIntersecting;
      }
    );
    watch(() => pricingRefIsVisible.value, (value) => {
      if (value) {
        $fbq("track", "ViewContent", { value: 100, content_type: "pricing" });
        stop();
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "homepage-2" }, _attrs))}>`);
      _push(ssrRenderComponent(ScrollupSection, null, null, _parent));
      _push(`<div class="main">`);
      _push(ssrRenderComponent(_sfc_main$c, null, null, _parent));
      _push(ssrRenderComponent(_sfc_main$a, null, null, _parent));
      _push(ssrRenderComponent(FeatureSection, null, null, _parent));
      _push(ssrRenderComponent(DiscoverSection, null, null, _parent));
      _push(ssrRenderComponent(ServiceSection, null, null, _parent));
      _push(ssrRenderComponent(WorkSection, null, null, _parent));
      _push(ssrRenderComponent(ScreenshotSection, null, null, _parent));
      _push(ssrRenderComponent(_sfc_main$4, {
        ref_key: "pricingRef",
        ref: pricingRef
      }, null, _parent));
      _push(ssrRenderComponent(NewsletterSection, null, null, _parent));
      _push(ssrRenderComponent(FaqSection, null, null, _parent));
      _push(ssrRenderComponent(FooterSection, null, null, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-Cy_1sDph.mjs.map
