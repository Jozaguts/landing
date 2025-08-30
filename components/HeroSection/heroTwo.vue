<script setup lang="ts">
useHead({
  title: 'Futzo.io | Administra tu liga en minutos. Calendarios, equipos y resultados en un solo lugar Prueba gratis 7 días. Sin tarjeta de crédito.',
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
            <h2><strong>Administra tu liga en minutos</strong></h2>
            <p class="hero-subtitle my-0">Calendarios, equipos y resultados en un solo lugar.</p>
            <p class="hero-subtitle my-0"><strong>Prueba gratis 7 días.</strong></p>
            <ul class="hero-benefits">
              <li>✅ Calendario y resultados en tiempo real</li>
              <li>✅ Registro fácil de equipos y jugadores</li>
              <li>✅ Estadísticas automáticas</li>
            </ul>
            <div class="hero-ctas">
              <a class="btn btn-primary" href="#pricing">Prueba gratis 7 días</a>
            </div>
            <small class="hero-note">
              Sin instalación. Prueba rápida. Soporte por chat.
            </small>
          </div>
        </div>
        <div class="col-12 col-md-5">
          <!-- Welcome Thumb -->
          <div class="welcome-thumb" data-aos="fade-right" data-aos-delay="500" data-aos-duration="1000">
            <figure class="hero-media">
              <img
                  src="assets/img/image1 - monitor - dashboard.png"
                  width="445"
                  height="425"
                  loading="eager"
                  fetchpriority="high"
                  alt="Panel de administración de liga en Futzo mostrando calendario y equipos"
              />
            </figure>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style>
.hero { max-width: 1100px; margin: 0 auto; padding: 2rem 1rem; }
.hero-subtitle { margin-top: .75rem; }
.hero-benefits { margin: 1rem 0; padding-left: 1.25rem; }
.hero-ctas { display: flex; gap: .75rem; margin: 1rem 0; }
.btn { display: inline-block; padding: .8rem 1.25rem; border-radius: 4px; text-decoration: none; }
.btn-primary {background: #9155FD; }
.btn-outline { border: 1px solid #9155FD; color: #9155FD; background: transparent; }
.btn-outline:hover { border: 1px solid #9155FD; color: #9155FD; background: transparent; }
.btn-outline:focus { border: 1px solid #9155FD; color: #9155FD; background: transparent; }
.hero-note { display: block; opacity: .8; }
</style>
