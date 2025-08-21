import { c as useRoute } from './server.mjs';
import { defineComponent, computed, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr } from 'vue/server-renderer';

const _imports_0 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAAA4CAMAAABdaI+oAAAAM1BMVEVHcEyRVf2RVf2RVf2RVf2RVf2RVf2RVf2RVf2RVf2RVf2RVf2RVf2RVf2RVf2RVf2RVf0fqbUpAAAAEHRSTlMA0/QRHIEtuOYFdT2jaFOSo11+hwAAAy5JREFUWMOtWNmCpCAMNIT7/v+v3YioeCH2bObFdjDmrEqcpgExyEnQTP9DuAtJQRGVguN/04bRA8uNMEgRfzfOQr4RsL+ZiQGyTi7oVpkOLukM4QcrncpayOViE+XohhR6ufgixjKWZDVV1DAyUQ2TiTH7KefoM8T1CTPFEkuI+/vojv/gNldZyfaGJI1wvENH+Ad959eHnMPpkB/WSP5e3OFa84Fj9/kQNwcR4HpPZTGSmcjg6sqdwokDiwMBhKzMmMKJauE9jInaQY5amHN6bZC508KYwjj34kvLGF867OLzTZZnj0l8Py+yQEH1mctNAmNx/yW5qR7fxqcVsXTt7DNPwHahTm5Ee7l4TCK6NV0BUCF1G1PiSTxTfIkOtWSvut0KzxYVC53o2GztikG9tNgN6hXrFYShJG3UYDsHfcMe3XpwDdP49xCCCGpXWDj0KE4xG+nMWxB5KRqW+JzC1ZMIB9HzHwH27PjCN/qx/YxkBZhNMbYWmFEHxgPlSZIzK8ySAbIbGS9X0FG4NncTWQaH5M988xxt47LeuUfUksVgGxFHyCp885w+14IHVWK8bc5Tp6dRhdQrd31q1CmrPYWS+SN2K3y30D8nher/eFjspIFh6eJ0hn2jnstmhlF+pKHtaZsr4kA8w3YPHfypBPYwehYcZCslXkrNd8EhnCmwhtFphbd8GLrgQK8zZ8RNZpmeqCzFFfCN76IIXiplCyNdOKJ2e0l6F2DJhnAhmfoORwhJMXVnj8ULSR1fSHb5GkYEqqlzGBFeSIqIIpzmHIpeCSPXFEBzCmN4o1FyrDWhGIR+phdM5VUUxnCYbl5n47QHxURdQkaPqVRHViN1w17ifRSZnxYVqQjil/NE0Rosbj2jRCgi2MCwRG7eMBUtZgdYX/8/MM7Ncd/XEvlEPANTQzvr9ri0YdDRRYCrngl2X4OG1wDcNF4RdmdB/2Hlw/Tos1xDmL7se8ZY/eBz9Vjbr+t43RnPPlePPy+Pdb29+lxm8J/W22UBZxl8cBzRGETuggda6u3v3wkwEstlpmmkUTQnsT9+Ilh01o8YevmI8Udtm1aaEXHsM8s/D44xKm0gkNkAAAAASUVORK5CYII=";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "headerTwo",
  __ssrInlineRender: true,
  setup(__props) {
    const imgSrc = computed(() => {
      return useRoute().name === "gracias" ? "images/logo-19.png" : "images/logo-17.png";
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<header${ssrRenderAttrs(mergeProps({ class: "navbar navbar-sticky navbar-expand-lg navbar-dark" }, _attrs))}><div class="container position-relative"><a class="navbar-brand" href="/"><img class="navbar-brand-regular mt-4" width="180" height="54"${ssrRenderAttr("src", unref(imgSrc))} alt="Futzo.io logo"><img class="navbar-brand-sticky" width="80" height="56"${ssrRenderAttr("src", _imports_0)} alt="sticky brand-logo"></a><button class="navbar-toggler d-lg-none" type="button" data-toggle="navbarToggler" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button><div class="navbar-inner"><button class="navbar-toggler d-lg-none" type="button" data-toggle="navbarToggler" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>`);
      if (("useRoute" in _ctx ? _ctx.useRoute : unref(useRoute))().name !== "gracias") {
        _push(`<nav><ul class="navbar-nav" id="navbar-nav"><li class="nav-item"><a class="nav-link scroll" href="#home">Home</a></li><li class="nav-item"><a class="nav-link scroll" href="#features">Caracter\xEDsticas</a></li><li class="nav-item"><a class="nav-link scroll" href="#screenshots">Im\xE1genes</a></li><li class="nav-item"><a class="nav-link scroll" href="#pricing">Precio</a></li><li class="nav-item"><a class="nav-link scroll" href="https://futzo.io">Ingresar</a></li></ul></nav>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></header>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/HeaderSection/headerTwo.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=headerTwo-CyEfRA8v.mjs.map
