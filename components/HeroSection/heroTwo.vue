<template>
  <section id="home" class="section welcome-area bg-inherit h-100vh overflow-hidden">
    <div class="shapes-container">
      <div class="bg-shape"></div>
    </div>
    <div class="container h-100">
      <div class="row align-items-center h-100">
        <!-- Welcome Intro Start -->
        <div class="col-12 col-md-7">
          <div class="welcome-intro">
            <h1>Futzo.io</h1>
            <h2>Gestiona tu liga de fútbol de manera profesional</h2>
            <p class="d-none d-md-block d-lg-block my-4">Futzo.io centraliza todas tus operaciones en una sola plataforma. Simplifica la administración y mejora la comunicación con tu
              equipo.</p>
            <p class="my-4 d-lg-node d-md-none d-block">
              Futzo centraliza todas tus operaciones <br>
              en una sola plataforma. Simplifica la <br> administración
              y mejora la comunicación <br> con tu equipo.</p>
            <a href="#newsletter" class="btn">¡Únete a la Espera!</a>
          </div>
        </div>
        <div class="col-12 col-md-5">
          <!-- Welcome Thumb -->
          <div class="welcome-thumb" data-aos="fade-right" data-aos-delay="500" data-aos-duration="1000">
            <img src="assets/img/image1 - monitor - dashboard.png" alt="Interfaz de gestión de equipos y jugadores en Futzo.io" width="445" height="425">
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
useHead({
  title: 'Futzo.io | Gestiona tu liga de fútbol de manera profesional',
  meta: [
    {
      name: 'description',
      content: 'Futzo.io es la plataforma definitiva para la gestión de ligas de fútbol. Centraliza operaciones, automatiza calendarios y mantén una comunicación efectiva con tus equipos. Fácil, rápido y seguro.'
    },
    {
      name: 'keywords',
      content: 'futzo.io, futzo, liga de fútbol, gestión de torneos, calendario de partidos, asignación de canchas, equipos, jugadores, automatización de procesos, acceso seguro'
    }
  ]
})
</script>
