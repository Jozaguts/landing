<script setup lang="ts">
import {PRE_REGISTER_CODE} from "~/utils/constants";
import HeaderSection from '@/components/HeaderSection/headerTwo.vue'
const {$fbq} = useNuxtApp()
const defaultMessage ={
  title: '¡Gracias por registrarte en Futzo!',
  text: 'Te has asegurado un descuento exclusivo por tu pre-registro. Muy pronto recibirás todas las novedades del lanzamiento de nuestra app.',
  cta: 'Mantente atento a tu correo y prepárate para gestionar tu liga de fútbol como un profesional.',
}
const isPreRegisterCode =  computed(() => Number(useRoute()?.query?.code) === PRE_REGISTER_CODE)
const messages = ref(defaultMessage)
onMounted(() => {
  if (!isPreRegisterCode.value){
    messages.value = defaultMessage
    $fbq('track', 'Lead')
  }else if (isPreRegisterCode.value){
    messages.value = {
      title: '¡Bienvenido a Futzo!',
      text: 'Tu suscripción está activa. Desde hoy, tienes acceso a todas las herramientas para administrar y comunicarte con tu equipo en un solo lugar.',
      cta: 'Ingresa ahora.'
    }
    $fbq('track','Purchase',{currency: "USD", value: 30.00})
  }
})
</script>

<template>
  <div class="inner">
    <div class="main">
      <HeaderSection/>
      <section id="home" class="section welcome-area inner-area bg-overlay h-100vh overflow-hidden">
        <div class="container h-100">
          <div class="row align-items-center h-100">
            <div class="col-12 col-md-8">
              <div class="welcome-intro">
                <h1 class="text-white">{{messages.title}}</h1>
                <p class="text-white my-4">{{messages.text}}</p>
                <p v-if="!isPreRegisterCode"  class="text-white my-4">{{messages.cta}}</p>
                <nuxt-link href="https://futzo.io" v-else class="my-4 btn sApp-btn text-uppercase">{{messages.cta}}</nuxt-link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>