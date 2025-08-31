<script setup lang="ts">
const { $fbq, $buildAppUrl } = useNuxtApp() as any
const {cta, url} = defineProps<{cta?: string, url?: string}>()
const email =ref('')
const disabled = ref(true)
const validateEmail = (email: string) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
watch(email,(value)  =>{
  if (value) {
    disabled.value = !validateEmail(value);
  }
})
const  clickHandler =() =>{
  $fbq('trackCustom', 'StartTrialClick', { source: 'landing', placement: 'card_cta' })
  window.location.href = $buildAppUrl(url)
}
</script>

<template>
  <div>
    <button type="button" class="btn mt-4" @click="clickHandler">{{cta}} </button>
    <p class="trial-note mt-3" aria-live="polite">
      No se te cobrará durante la prueba.
      Elige tu plan al finalizar los 7 días.
    </p>
  </div>
</template>
<style scoped>
.trial-note {
font-size: 12px;
opacity: .8;
}
</style>