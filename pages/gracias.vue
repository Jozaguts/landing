<script setup lang="ts">
import {PRE_REGISTER_CODE, PURCHASE_SUBSCRIPTION_CODE, SEND_COUPON_CODE} from "~/utils/constants";

import HeaderSection from '@/components/HeaderSection/headerTwo.vue'
const {$fbq} = useNuxtApp()
const hydrated = ref(true)
const defaultMessage ={
  title: '¡Gracias por registrarte en Futzo!',
  text: 'Te has asegurado un descuento exclusivo por tu pre-registro. Muy pronto recibirás todas las novedades del lanzamiento de nuestra app.',
  cta: 'Mantente atento a tu correo y prepárate para gestionar tu liga de fútbol como un profesional.',
  img:{
    src:  '/images/success.svg',
    width: '450px',
    height: '450px'
  }
}
const code =  Number(useRoute()?.query?.code);
const state = ref(defaultMessage)
onMounted(() => {
  if (code === SEND_COUPON_CODE){
    state.value = {
      title: '¡Cupón enviado con éxito!',
      text: 'Revisa tu correo: ya tienes tu cupón de descuento exclusivo para usar en el lanzamiento de Futzo.',
      cta: 'Guárdalo bien y prepárate para vivir el fútbol como nunca antes. ¡Nos vemos pronto!',
      img: {
        src: '/images/ship-it.svg',
        width: '350px',
        height: '250px'
      }
    }
    $fbq('track', 'Lead')
  }else if (code === PRE_REGISTER_CODE){
    state.value = {
      title: '¡Pre-registro confirmado!',
      text: 'Gracias por unirte a Futzo. Pronto recibirás una promoción exclusiva directamente en tu correo.',
      cta: 'Mantente atento a tu bandeja de entrada. ¡Se viene algo grande para tu liga de fútbol!',
      img:{
        src:  '/images/join.svg',
        width: '250px',
        height: '250px'
      }
    }
    $fbq('track', 'Lead')
  }
  else if(code === PURCHASE_SUBSCRIPTION_CODE){
    const amount_subtotal = (Number(useRoute()?.query?.amount_subtotal) / 100)?.toFixed(2)
    state.value = {
      title: '¡Bienvenido a Futzo!',
      text: 'Desde hoy, tienes acceso a todas las herramientas para administrar tu liga en un solo lugar.',
      cta: 'Ingresa ahora.',
      img: {
        src: '/images/success.svg',
        width: '450px',
        height: '450px'
      }
    }

    $fbq('track','Purchase',{currency: "MXN", value: amount_subtotal})
  }
  hydrated.value = false
})
</script>
<template>
  <div class="inner " v-if="!hydrated">
    <div class="main">
      <HeaderSection/>
      <section id="home" class="section welcome-area h-100vh overflow-hidden">
        <div class="content-container">
          <h4 class="text-h4"> {{state.title}} </h4>
          <p class="mb-0 text-body-1"> {{state.text}} </p>
        </div>
        <div class="misc-avatar w-100 text-center">
          <div class="v-img  mx-auto">
            <div class="v-responsive__sizer"></div>
            <img :src='state.img.src' alt="success" class="v_img" :width="state.img.width" :height="state.img.height" />
          </div>

        </div>
        <p v-if="code !== PURCHASE_SUBSCRIPTION_CODE"  class="text-color my-4">{{state.cta}}</p>
        <nuxt-link v-else href="https://futzo.io"  class="futzo-btn text-uppercase">{{state.cta}}</nuxt-link>
      </section>
    </div>
  </div>
</template>
<style scoped>
.content-container{
  max-width: 600px;
  text-align: center;
  margin-bottom: 40px;
}
.text-h4{
  font-size: 1.5rem;
  margin-bottom: 8px;
  color: rgba(46,38,61)
}
.text-body-1{
  font-weight: 400;
  line-height: 1.375rem;
  font-size: 15px;
  letter-spacing: normal;
  text-transform: none;
}
.misc-avatar{
  z-index: 1;
  width: 100%;
  text-align: center;
}
.v-responsive {
  display: flex;
  flex: 1 0 auto;
  max-height: 100%;
  max-width: 100%;
  overflow: hidden;
  position: relative;
}
.v-responsive__sizer{
  flex: 1 0 0;
  transition: padding-bottom .2s cubic-bezier(.4,0,.2,1);
  pointer-events: none;
}
.v_img{
  object-fit: contain;
  margin-top: 2rem;
}
.welcome-area{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1.25rem;
  min-block-size: 100dvh;
}
.welcome-intro >.text-color {
  color: #2e263db3;
}
.welcome-intro > h1{
  color: #3A3541;
  font-weight: 500;
}
.futzo-btn {
  border-radius: 6px;
  height: 40px;
  padding: 10px 20px;
  margin-top: 40px;
  max-width: 400px;
  background-color: #8c57ff !important;
  color: #fff !important;
  box-shadow: 0 0 1px -2px;
  border-color: rgba( 46, 38, 61,0.12);
  border-style: solid;
  border-width: 0;
  align-items: center;
  display: inline-grid;
  flex-shrink: 0;
  font-weight: 500;
  grid-template-areas: "prepend content append";
  grid-template-columns: max-content auto max-content;
  justify-content: center;
  letter-spacing: .0892857143em;
  line-height: normal;
  outline: none;
  position: relative;
  text-decoration: none;
  text-indent: .0892857143em;
  transition-duration: .28s;
  transition-property: box-shadow, transform, opacity, background;
  transition-timing-function: cubic-bezier(.4,0,.2,1);
  text-transform: uppercase;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
  vertical-align: middle;
}
.futzo-btn:hover {
  box-shadow: 0 2px 4px -1px
}
</style>