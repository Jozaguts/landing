<script lang="ts" setup>
const imgSrc = computed(() => {
  return useRoute().name === 'thank-you' ? 'images/logo-19.png' : 'images/logo-17.png'
})
</script>
<template>
  <header class="navbar navbar-sticky navbar-expand-lg navbar-dark">
    <div class="container position-relative">
      <a class="navbar-brand" href="/">
        <img class="navbar-brand-regular mt-4" width="180" height="54" :src="imgSrc" alt="Futzo.io logo">
        <img class="navbar-brand-sticky" width="80" height="56" src="assets/img/logos/icon/logo-02.png" alt="sticky brand-logo">
      </a>
      <button class="navbar-toggler d-lg-none" type="button" data-toggle="navbarToggler" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="navbar-inner">
        <!--  Mobile Menu Toggler -->
        <button class="navbar-toggler d-lg-none" type="button" data-toggle="navbarToggler" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <nav v-if="useRoute().name !== 'thank-you'">
          <ul class="navbar-nav" id="navbar-nav">
            <li class="nav-item">
              <a class="nav-link scroll" href="#home">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link scroll" href="#features">Características</a>
            </li>
            <li class="nav-item">
              <a class="nav-link scroll" href="#screenshots">Imágenes</a>
            </li>
            <li class="nav-item">
              <a class="nav-link scroll" href="#pricing">Precio</a>
            </li>
            <li class="nav-item">
                <a class="nav-link scroll" href="https://futzo.io">Ingresar</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
</template>