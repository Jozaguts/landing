<template>
  <div>
    <div class="height-emulator d-none d-lg-block "></div>
    <footer class="footer-area footer-fixed bg-gray">
      <!-- Footer Top -->
      <div class="footer-top ptb_100">
        <div class="container">
          <div class="row">
            <div class="col-12 col-sm-6 col-lg-3">
              <!-- Footer Items -->
              <div class="footer-items">
                <!-- Logo -->
                <a class="navbar-brand" href="#">
                  <img class="logo"
                  src="assets/img/logos/vertical/logo-07.png"
                  alt="futzo plataforma admintrativa de ligas deportivas"
                  width="140"
                  height="169">
                </a>
                <p class="mt-2 mb-3"></p>
                <!-- Social Icons -->
                <div class="social-icons d-flex">
                  <a class="facebook" href="https://www.facebook.com/futzo.io" aria-label="Visit Futzo on Facebook">
                    <i class="fab fa-facebook-f"></i>
                    <i class="fab fa-facebook-f"></i>
                  </a>
                  <a class="bg-danger" href="https://www.instagram.com/futzo.io/" aria-label="Visit Futzo on Instagram">
                    <i class="fab fa-instagram"></i>
                    <i class="fab fa-instagram"></i>
                  </a>

                </div>
              </div>
            </div>
            <div class="col-12 col-sm-3 col-lg-3">
              <!-- Footer Items -->
              <div class="footer-items">
                <!-- Footer Title -->
                <h3 class="footer-title mb-2">Enlaces útiles</h3>
                <ul>
                  <li class="py-2"><a href="#home">Home</a></li>
                  <li class="py-2"><a href="#features">Características</a></li>
                  <li class="py-2"><a href="#screenshots">Imágenes</a></li>
                  <li class="py-2"><a href="#faq">Preguntas frecuentes</a></li>
                  <li class="py-2">
                    <nuxt-link to="/politicas-de-privacidad">Política de privacidad</nuxt-link>
                  </li>
                  <li class="py-2">
                    <nuxt-link to="/terminos-de-servicio">Términos de servicio</nuxt-link>
                  </li>
                </ul>
              </div>
            </div>

            <div class="col-12 col-sm-6 col-lg-6">
              <!-- Footer Items -->
              <div class="footer-items">
                <!-- Footer Title -->
                <h3 class="footer-title mb-2">Sobre Futzo.io</h3>
                <p class="mb-3">
                    Futzo.io es una plataforma diseñada para facilitar la administración de ligas deportivas. Ayudamos a organizadores, árbitros y dueños de equipos a crear torneos, registrar jugadores, gestionar calendarios y generar estadísticas fácilmente desde un solo lugar.
                </p>
                <p class="mb-3">Con Futzo.io, llevar el control de tu liga es simple, rápido y profesional.</p>
                <p><span>📍</span> Con sede en Puerto Vallarta, Jalisco, México</p>
                <p><span>📞</span> Contacto: +52 322 475 0062</p>
                <p><span>📧</span> Email: contacto@futzo.io</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Footer Bottom -->
      <div class="footer-bottom">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <!-- Copyright Area -->
              <div class="copyright-area d-flex flex-wrap justify-content-center justify-content-sm-between text-center py-4">
                <!-- Copyright Left -->
                <div class="copyright-left">&copy; Copyrights {{ new Date().getFullYear() }} Futzo.io todos los derechos reservados.</div>
                <!-- Copyright Right -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script lang="ts" setup></script>
