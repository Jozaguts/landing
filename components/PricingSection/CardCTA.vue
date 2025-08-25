<script setup lang="ts">
const {cta, url} = defineProps<{cta?: string, url?: string}>()
const email =ref('')
const disabled = ref(true)
const{isAnnuallyPrice} = useProductPrices()
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
  if (validateEmail(email.value)) {
    window.location.href = url + `&identifier=${email.value}&period=${isAnnuallyPrice.value ?'year': 'month'}`;
  }
}
</script>

<template>
  <div>
    <div class="mt-2 ">
      <input  v-model="email" type="email" required class="form-control " placeholder="Ingresa tu correo electrónico" name="email" autocomplete="off" style="border: 1px solid #6f42c1;">
    </div>
    <!-- Plan Button -->
    <div class="plan-button" data-toggle="tooltip" data-placement="top" :title="cta">
      <button type="button" class="btn mt-4" :disabled="disabled" @click="clickHandler">{{cta}} </button>
    </div>
  </div>
</template>

<style scoped>

</style>