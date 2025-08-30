<script setup lang="ts">
import PlanCard from "~/components/PricingSection/PlanCard.vue";

const {
    priceMode,
    setPriceMode,
    loading,
  kickoffPlan,
  proPlayPlan,
  eliteLeaguePlan,
  } = useProductPrices()
</script>
<template>
  <section id="pricing" class="section price-plan-area  overflow-hidden bg-white ptb_100">
    <div v-if="!loading" class="container">
      <div class="row justify-content-center">
        <div class="col-12 col-md-10 col-lg-7">
          <!-- Section Heading -->
          <div class="section-heading text-center">
            <h2>Elige tu plan después de tu prueba gratis</h2>
            <p class="d-none d-sm-block mt-4">Comienza hoy con tu <strong>trial gratis de 7 días</strong>.
              Al finalizar, selecciona el plan que mejor se adapte al tamaño de tu liga.</p>
            <p class="d-block d-sm-none mt-4">Gestión eficiente de tu liga de fútbol con las herramientas avanzadas de Futzo.</p>
          </div>
        </div>
      </div>
      <div class="row justify-content-center pb-2">
        <div class="col-12 col-md-6">
          <ul class="nav nav-pills nav-justified align-items-center">
            <li class="nav-item mx-2 mb-2">
              <button
                  @click="() => setPriceMode('annually_price')"
                  type="button"
                  class="btn btn-block custom-btn"
                  :class="{'active': priceMode === 'annually_price' }"
              >
                Anual <span v-if="kickoffPlan?.annual_saving"></span>
              </button>
            </li>
            <li class="nav-item mx-2 mb-2">
              <button
                  @click="() => setPriceMode('monthly_price')"
                  type="button"
                  class="btn btn-block custom-btn"
                  :class="{'active': priceMode === 'monthly_price' }"
              >
                Mensual
              </button>
            </li>
          </ul>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-12">
          <div class="row price-plan-wrapper">
            <!-- Kickoff -->
            <div class="col-12 col-md-4">
              <PlanCard
                  :title="kickoffPlan?.name"
                  img_path="/images/logo-08.png"
                  :price="kickoffPlan?.price"
                  :symbol="kickoffPlan?.currency?.symbol"
                  :iso_code="kickoffPlan?.currency?.iso_code"
                  :annually_price="kickoffPlan?.annually_price"
                  :annual_saving="kickoffPlan?.annual_saving"
                  cta="Empieza gratis 7 días"
                  :url="kickoffPlan?.url"
                  :features="[
                'Administra todos tus torneos desde un solo lugar',
                'Calendario automático en segundos (adiós Excel)',
                'Resultados y estadísticas en tiempo real'
              ]"
                  :mode="priceMode"
              />
            </div>

            <!-- ProPlay (recomendado) -->
            <div class="col-12 col-md-4">
              <PlanCard
                  :title="proPlayPlan?.name"
                  img_path="/images/logo-07.png"
                  :price="proPlayPlan?.price"
                  :symbol="proPlayPlan?.currency?.symbol"
                  :iso_code="proPlayPlan?.currency?.iso_code"
                  :annually_price="proPlayPlan?.annually_price"
                  :annual_saving="proPlayPlan?.annual_saving"
                  cta="Empieza gratis 7 días"
                  :url="proPlayPlan?.url"
                  :features="[
                'Todo lo de Kickoff',
                'Registro automático con links únicos',
                'Personaliza colores y logo de tu liga',
                'Soporte estándar'
              ]"
                  :mode="priceMode"
                  featured
                  badge="Más elegido"
              />
            </div>

            <!-- EliteLeague -->
            <div class="col-12 col-md-4 mt-4 mt-md-0">
              <PlanCard
                  :title="eliteLeaguePlan?.name"
                  img_path="/images/logo-08.png"
                  :price="eliteLeaguePlan?.price"
                  :symbol="eliteLeaguePlan?.currency?.symbol"
                  :iso_code="eliteLeaguePlan?.currency?.iso_code"
                  :annually_price="eliteLeaguePlan?.annually_price"
                  :annual_saving="eliteLeaguePlan?.annual_saving"
                  cta="Empieza gratis 7 días"
                  :url="eliteLeaguePlan?.url"
                  :features="[
                'Todo lo de ProPlay',
                'Soporte prioritario',
                'Acceso anticipado a nuevas funciones',
                'Comunicación directa con jugadores y entrenadores'
              ]"
                  :mode="priceMode"
              />
            </div>
          </div>
        </div>
      </div>
      <!-- Confianza -->
      <div class="row justify-content-center pt-5 text-center">
        <div class="col-12 col-md-10">
          <p class="text-body pt-2 fw-6">Cambia o cancela tu plan en cualquier momento.</p>
          <p class="text-body fw-2">Tu progreso y configuración se conservan cuando pasas del trial a un plan.</p>
          <p class="text-body fw-2">
            ¿Dudas? <a href="#faq">Consulta las preguntas frecuentes</a> o escríbenos por chat.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped>
.custom-btn, .custom-btn:hover {
  color: #444;
  background: transparent;
  border: 1px solid #9155FD;
}
.custom-btn.active {
  color: white;
  background:  #9155FD;
  border: 1px solid #9155FD;
}
</style>
