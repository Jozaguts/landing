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
            <h2>Desbloquea Todo el Potencial de Futzo.io</h2>
            <p class="d-none d-sm-block mt-4">Lleva la gestión de tu liga al siguiente nivel con Futzo.io Desde pequeñas ligas hasta grandes competiciones, te ofrecemos la solución
              perfecta.</p>
            <p class="d-block d-sm-none mt-4">Gestión eficiente de tu liga de fútbol con las herramientas avanzadas de Futzo.</p>
          </div>
        </div>
      </div>
      <div class="row justify-content-center pb-2">
        <div class="col-6">
          <ul class="nav nav-pills nav-justified">
            <li class="nav-item mx-2 mb-2">
              <button @click="() => setPriceMode('annually_price')"  type="button" class="btn btn-block custom-btn" :class="{'active': priceMode ==='annually_price' }">Anual</button>
            </li>
            <li class="nav-item">
              <button @click="() => setPriceMode('monthly_price')" type="button" class="btn btn-block custom-btn" :class="{'active': priceMode ==='monthly_price' }">Mensual</button>
            </li>
          </ul>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-12 col-sm-12 col-lg-12">
          <div class="row price-plan-wrapper">
            <div class="col-12 col-md-4">
             <PlanCard
                 :title="kickoffPlan?.name"
                 img_path="/images/logo-08.png"
                 :price="kickoffPlan?.price"
                 :symbol="kickoffPlan?.currency?.symbol"
                 :iso_code="kickoffPlan?.currency?.iso_code"
                 :promo_price="kickoffPlan?.promo_price"
                 :annually_price="kickoffPlan?.annually_price"
                 :annual_saving="kickoffPlan?.annual_saving"
                 :cta="kickoffPlan?.cta"
                 :url="kickoffPlan?.url"
                 :features="[
                     'Administra todos tus torneos desde un solo lugar.',
                     'Olvídate de Excel: calendario automático en segundos.',
                     'Resultados, goles sustituciones y tarjetas en tiempo real.',
                 ]"
             />
            </div>
            <div class="col-12 col-md-4">
              <!-- Single Price Plan -->
              <PlanCard
                  :title="proPlayPlan?.name"
                  img_path="/images/logo-07.png"
                  :price="proPlayPlan?.price"
                  :symbol="proPlayPlan?.currency?.symbol"
                  :iso_code="proPlayPlan?.currency?.iso_code"
                  :promo_price="proPlayPlan?.promo_price"
                  :annually_price="proPlayPlan?.annually_price"
                  :annual_saving="proPlayPlan?.annual_saving"
                  :cta="proPlayPlan?.cta"
                  :url="proPlayPlan?.url"
                  :features="[
                     'Todo lo del plan Kickoff',
                      'Registro automático con links únicos para inscripción',
                      'Personaliza Futzo con los colores y logo de tu liga',
                      'Soporte estándar'
                 ]"
              />
            </div>
            <div class="col-12 col-md-4 mt-4 mt-md-0">
              <!-- Single Price Plan -->
              <PlanCard
                  :title="eliteLeaguePlan?.name"
                  img_path="/images/logo-08.png"
                  :price="eliteLeaguePlan?.price"
                  :symbol="eliteLeaguePlan?.currency?.symbol"
                  :iso_code="eliteLeaguePlan?.currency?.iso_code"
                  :promo_price="eliteLeaguePlan?.promo_price"
                  :annually_price="eliteLeaguePlan?.annually_price"
                  :annual_saving="eliteLeaguePlan?.annual_saving"
                  :cta="eliteLeaguePlan?.cta"
                  :url="eliteLeaguePlan?.url"
                  :features="[
                     'Todo lo del plan ProPlay',
                     'Soporte prioritario',
                     'Acceso anticipado a nuevas funciones',
                     'Comunicación directa con jugadores y entrenadores',
                 ]"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="row justify-content-center pt-5">
        <p class="text-body pt-4 fw-6">Satisfacción Garantizada en Todos Nuestros Planes</p>
        <p class="text-body fw-2">Puedes probar cualquier plan con total confianza, sabiendo que, si no quedas satisfecho, te devolveremos tu dinero sin preguntas.</p>
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
