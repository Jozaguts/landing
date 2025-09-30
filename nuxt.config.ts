// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2024-04-03',
    devtools: {enabled: true},
    app: {
        head: {
            htmlAttrs: {
                lang: 'es',
            },
            link:[
                {rel: 'stylesheet', href: 'https://assets.calendly.com/assets/external/widget.css'},
            ],
            script: [
                {src: 'https://futzo.s3.us-east-2.amazonaws.com/assets/js/jquery-3.3.1.min.js', tagPosition: 'bodyClose'},
                {src: 'https://futzo.s3.us-east-2.amazonaws.com/assets/js/popper.min.js', tagPosition: 'bodyClose'},
                {src: 'https://futzo.s3.us-east-2.amazonaws.com/assets/js/bootstrap.min.js', tagPosition: 'bodyClose'},
                {src: 'https://futzo.s3.us-east-2.amazonaws.com/assets/js/plugins.min.js', tagPosition: 'bodyClose'},
                {src: 'https://futzo.s3.us-east-2.amazonaws.com/assets/js/scripts.js', tagPosition: 'bodyClose'},
                {src: 'https://assets.calendly.com/assets/external/widget.js', tagPosition: 'bodyClose', async: true},

            ],
            meta: [
                { name: 'description', content: 'Futzo.io es una plataforma para organizar y administrar ligas deportivas.' },
                { property: 'og:site_name', content: 'Futzo.io' },
                { property: 'og:title', content: 'Futzo.io - Gestiona tu liga como un profesional' },
                { property: 'og:description', content: 'Crea torneos, registra equipos y jugadores, genera calendarios y estadísticas desde una plataforma intuitiva.' },
                { property: 'og:image', content: 'https://hola.futzo.io/images/futzo.png' },
                { property: 'og:url', content: 'https://hola.futzo.io' },
                { property: 'og:site_name', content: 'Futzo.io' },
                { property: 'og:type', content: 'website' },
              ]
        }
    },
    css: [
        "~/assets/css/style.css",
        "~/assets/css/responsive.css",
    ],
    robots: {
        blockNonSeoBots: true
    },
    modules: ["@nuxtjs/fontaine", "nuxt-icons", "nuxt-meta-pixel", "@vueuse/nuxt", "@nuxtjs/robots",'@formkit/auto-animate/nuxt'],
    runtimeConfig: {
        // Keys within public, will be also exposed to the client-side
        public: {
            apiBase: process.env.NUXT_PUBLIC_API_BASE || 'https://app.futzo.io/api/v1',
            siteUrl: process.env.NUXT_PUBLIC_SITE_URL || 'https://hola.futzo.io',
            metapixel: {
                default: { id: process.env.NUXT_PUBLIC_META_PIXEL_ID || '543648128091975', pageView: '/' },
            }
        }
    }
})
