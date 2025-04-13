// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2024-04-03',
    devtools: {enabled: true},
    app: {
        head: {
            htmlAttrs: {
                lang: 'es',
            },
            script: [
                {src: 'https://futzo.s3.us-east-2.amazonaws.com/assets/js/jquery-3.3.1.min.js', tagPosition: 'bodyClose'},
                {src: 'https://futzo.s3.us-east-2.amazonaws.com/assets/js/popper.min.js', tagPosition: 'bodyClose'},
                {src: 'https://futzo.s3.us-east-2.amazonaws.com/assets/js/bootstrap.min.js', tagPosition: 'bodyClose'},
                {src: 'https://futzo.s3.us-east-2.amazonaws.com/assets/js/plugins.min.js', tagPosition: 'bodyClose'},
                {src: 'https://futzo.s3.us-east-2.amazonaws.com/assets/js/scripts.js', tagPosition: 'bodyClose'},

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
    modules: ["@nuxtjs/fontaine", "nuxt-icons", "nuxt-meta-pixel", "@vueuse/nuxt", "@nuxtjs/robots"],
    runtimeConfig: {
        // Keys within public, will be also exposed to the client-side
        public: {
            apiBase: 'https://app.futzo.io/api/v1',
            metapixel: {
                default: {id: '543648128091975', pageView: '/'},
            }
        }
    }
})
