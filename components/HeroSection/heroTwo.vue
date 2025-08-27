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
            <h2><strong>Gestiona tu liga de fútbol </strong> de manera profesional</h2>
            <p class="hero-subtitle my-0">Centraliza calendarios, equipos, jugadores y resultados en una sola plataforma.</p>
            <p class="hero-subtitle my-0"> Ahorra tiempo y mejora la comunicación en tu liga.</p>

            <!-- Key benefits improve scanability and SEO -->
            <ul class="hero-benefits">
              <li>Calendario y resultados en tiempo real</li>
              <li>Registro de equipos y jugadores</li>
              <li>Estadísticas y tarjetas de juego</li>
            </ul>
            <div class="hero-ctas">
              <a class="btn btn-primary" href="#pricing">Ver planes</a>
              <a class="btn btn-outline" href="#newsletter">Obtener cupón: primer mes $299 MXN</a>
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
