// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  app:{
    head:{
     script: [
       { src: 'https://futzo.s3.us-east-2.amazonaws.com/assets/js/jquery-3.3.1.min.js', tagPosition: 'bodyClose' },
       { src: 'https://futzo.s3.us-east-2.amazonaws.com/assets/js/popper.min.js', tagPosition: 'bodyClose' },
       { src: 'https://futzo.s3.us-east-2.amazonaws.com/assets/js/bootstrap.min.js', tagPosition: 'bodyClose'  },
       { src: 'https://futzo.s3.us-east-2.amazonaws.com/assets/js/plugins.min.js', tagPosition: 'bodyClose'  },
       { src: 'https://futzo.s3.us-east-2.amazonaws.com/assets/js/scripts.js', tagPosition: 'bodyClose' },

     ],
    }
  },
  css: [
    "~/assets/css/style.css",
    "~/assets/css/responsive.css",
  ],

  modules: ["@nuxtjs/fontaine"]
})