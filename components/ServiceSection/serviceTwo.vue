<script setup lang="ts">
const {kickoffPlan} = useProductPrices()
const { $buildAppUrl } = useNuxtApp() as any
const url  = ref('')
watch(kickoffPlan, (newVal) => {
  console.log(newVal.url)
  if (newVal.url) {
    url.value = $buildAppUrl(newVal.url)
  }
},{deep:true})
</script>
<template>
  <section class="section service-area overflow-hidden bg-white ptb_100">
    <div class="container">
      <div class="row justify-content-between">
        <div class="col-12 col-lg-6 order-2 order-lg-1">
          <!-- Service Text -->
          <div class="service-text pt-4 pt-lg-0">
            <h2 class="mb-4">Características de Futzo.io</h2>
            <!-- Service List -->
            <ul class="service-list">
              <!-- Single Service -->
              <li class="single-service media py-2">
                <div class="service-icon pr-4">
                   <span>
                     <client-only>
                      <nuxt-icon class="service-icon" name="cogs" filled></nuxt-icon>
                     </client-only>
                   </span>
                </div>
                <div class="service-text media-body">
                  <p>Gestión Integral de Ligas: Administra fácilmente equipos, torneos y calendarios desde un solo lugar.</p>
                </div>
              </li>
              <!-- Single Service -->
              <li class="single-service media py-2">
                <div class="service-icon pr-4">
                                    <span>
                                      <client-only>
                                        <nuxt-icon class="service-icon" name="users" filled></nuxt-icon>
                                     </client-only>
                                    </span>
                </div>
                <div class="service-text media-body">
                  <p>Control Detallado de Equipos y Jugadores: Registra y gestiona estadísticas y rendimientos de manera profesional.</p>
                </div>
              </li>
              <!-- Single Service -->
              <li class="single-service media py-2">
                <div class="service-icon pr-4">
                                       <span>
                                         <client-only>
                                          <nuxt-icon class="service-icon" name="sync" filled></nuxt-icon>
                                         </client-only>
                                      </span>
                </div>
                <div class="service-text media-body">
                  <p>Automatización de Procesos: Ahorra tiempo con herramientas que simplifican la organización y administración de tu liga.</p>
                </div>
              </li>
              <!-- Single Service -->
              <li class="single-service media py-2">
                <div class="service-icon pr-4">
                                     <span>
                                       <client-only>
                                        <nuxt-icon class="service-icon" name="lock" filled></nuxt-icon>
                                       </client-only>
                                    </span>
                </div>
                <div class="service-text media-body">
                  <p>Acceso Fácil y Seguro: Todo lo que necesitas para gestionar tu liga, disponible en cualquier momento y desde cualquier dispositivo.</p>
                </div>
              </li>
              <li class="single-service media py-2">
                <div class="service-icon pr-4">
                                     <span>
                                       <client-only>
                                        <nuxt-icon class="service-icon" name="form" filled></nuxt-icon>
                                       </client-only>
                                    </span>
                </div>
                <div class="service-text media-body">
                  <p>Registro Automático de Equipos y Jugadores: Genera URLs únicas para cada torneo, permitiendo que los equipos y jugadores se registren automáticamente sin
                    necesidad de intervención manual.</p>
                </div>
              </li>
            </ul>
            <a :href="url" target="_blank" class="btn btn-bordered mt-4">Empieza gratis</a>
          </div>
        </div>
        <div class="col-12 col-lg-4 order-1 order-lg-2 d-none d-md-block">
          <!-- Service Thumb -->
          <div class="service-thumb mx-auto">
            <img src="assets/img/image4 - laptop - teams.png" alt="Características de futzo.io" width="274" height="550">
          </div>
        </div>
      </div>
    </div>
  </section>
</template>



<style>
.nuxt-icon.service-icon > svg {
  width: 24px;
  height: 24px;
  max-width: 24px !important;
  max-height: 24px !important;
}
</style>
