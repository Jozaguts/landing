<script lang="ts" setup>
const {
  load,
} = useProductPrices()
onMounted(() => {
  load()
})
</script>
<template>
  <NuxtPage/>
</template>
