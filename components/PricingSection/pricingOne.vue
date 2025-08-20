<script setup lang="ts">
const {
    productPrices,
    isAnnuallyPrice,
    priceMode,
    setPriceMode,
    loading,
    specialOffer
  } = useProductPrices()
</script>
<template>
  <section id="pricing" class="section price-plan-area  overflow-hidden ptb_100">
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
              <!-- Single Price Plan -->
              <div class="single-price-plan text-center p-5 wow fadeInLeft" data-aos-duration="2s" data-wow-delay="0.4s">
                <!-- Plan Thumb -->
                <div class="plan-thumb">
                  <img width="250" height="180" src="assets/img/logos/vertical/logo-08.png" alt="futzo logo vertical fondo primario">
                </div>
                <!-- Plan Title -->
                <div class="plan-title my-2 my-sm-3">
                  <p class="card-title text-uppercase">Kickoff</p>
                </div>
                <!-- Plan Price -->
                <div class="plan-price">
                  <span class="color-primary price-text"><small class="fw-7"> {{ productPrices?.kickoff?.symbol }}</small>{{ productPrices?.kickoff[priceMode] }}<small class="price-details"> {{productPrices?.kickoff?.iso_code}} / mes</small></span>
                </div>
                <div class="plan-price details" v-auto-animate :class="[isAnnuallyPrice ? 'py-2': '']">
                  <span v-if="isAnnuallyPrice" class="color-primary text-primary">Cuando paga anualmente</span>
                </div>
                <div class="plan-price details py-2" v-auto-animate>
                  <p class="color-primary text-primary">Oferta especial <strong>{{specialOffer}}</strong> por tu primer mes.</p>
                </div>
                <!-- Plan Description -->
                <div class="plan-description">
                  <ul class="plan-features">
                    <li class="border-top py-3">Gestión de múltiples torneos</li>
                    <li class="border-top py-3">Programación de partidos automatizada</li>
                    <li class="border-top border-bottom py-3">Estadísticas generales</li>
                  </ul>
                </div>
                <!-- Plan Button -->
                <div class="plan-button" data-toggle="tooltip" data-placement="top" :title="productPrices?.kickoff?.cta">
                  <a href="#" class="btn mt-4">{{productPrices?.kickoff?.cta}} </a>
                </div>
              </div>
            </div>
            <div class="col-12 col-md-4">
              <!-- Single Price Plan -->
              <div class="single-price-plan text-center p-5 wow fadeInLeft" data-aos-duration="2s" data-wow-delay="0.4s">
                <!-- Plan Thumb -->
                <div class="plan-thumb">
                  <img width="240" height="169" src="assets/img/logos/vertical/logo-07.png" alt="futzo logo vertical fondo primario">
                </div>
                <!-- Plan Title -->
                <div class="plan-title my-2 my-sm-3">
                  <p class="card-title text-uppercase">ProPlay</p>
                </div>
                <!-- Plan Price -->
                <div class="plan-price">
                  <span class="color-primary price-text"><small class="fw-7">{{ productPrices?.pro_play?.symbol }}</small>{{ productPrices?.pro_play[priceMode] }} <small class="price-details">{{productPrices?.pro_play?.iso_code}} / mes</small></span>
                </div>
                <div class="plan-price details" v-auto-animate :class="[isAnnuallyPrice ? 'py-2': '']">
                  <span v-if="isAnnuallyPrice" class="color-primary text-primary">Cuando paga anualmente</span>
                </div>
                <div class="plan-price details py-2" v-auto-animate>
                  <p class="color-primary text-primary">Oferta especial <strong>{{specialOffer}}</strong> por tu primer mes.</p>
                </div>
                <!-- Plan Description -->
                <div class="plan-description">
                  <ul class="plan-features">
                    <li class="border-top py-3">Plan Kickoff</li>
                    <li class="border-top py-3 ">Registro Automátizado, genera URLs únicas para inscripción directa en torneos.</li>
                    <li class="border-top py-3">Configuración visual, asegura que futzo.io coincida con tu liga.</li>
                    <li class="border-top border-bottom py-3">Soporte</li>
                  </ul>
                </div>
                <!-- Plan Button -->
                <div class="plan-button" data-toggle="tooltip" data-placement="top" :title="productPrices?.pro_play?.cta">
                  <a href="#" class="btn mt-4">{{productPrices?.pro_play?.cta}} </a>
                </div>
              </div>
            </div>
            <div class="col-12 col-md-4 mt-4 mt-md-0">
              <!-- Single Price Plan -->
              <div class="single-price-plan text-center p-5 wow fadeInRight" data-aos-duration="2s" data-wow-delay="0.4s">
                <!-- Plan Thumb -->
                <div class="plan-thumb">
                  <img width="250" height="180" src="assets/img/logos/vertical/logo-08.png" alt="futzo logo vertical fondo primario">
                </div>
                <!-- Plan Title -->
                <div class="plan-title my-2 my-sm-3">
                  <p class="card-title text-uppercase">EliteLeague</p>
                </div>
                <!-- Plan Price -->
                <div class="plan-price">
                  <span class="color-primary price-text"><small class="fw-7">{{ productPrices?.elite_league?.symbol }}</small>{{productPrices?.elite_league[priceMode]}} <small class="price-details">{{ productPrices?.elite_league?.iso_code }}/ mes</small></span>
                </div>
                <div class="plan-price details" v-auto-animate :class="[isAnnuallyPrice ? 'py-2': '']">
                  <span v-if="isAnnuallyPrice" class="color-primary text-primary">Cuando paga anualmente</span>
                </div>
                <div class="plan-price details py-2" v-auto-animate>
                  <p class="color-primary text-primary">Oferta especial <strong>{{specialOffer}}</strong> por tu primer mes.</p>
                </div>
                <!-- Plan Description -->
                <div class="plan-description">
                  <ul class="plan-features">
                    <li class="border-top py-3">Plan ProPlay</li>
                    <li class="border-top py-3">Soporte prioritario</li>
                    <li class="border-top py-3">Acceso anticipado a futuras actualizaciones</li>
                    <li class="border-top border-bottom py-3">Comunicación directa con jugadores y entrenadores</li>
                  </ul>
                </div>
                <!-- Plan Button -->
                <div class="plan-button" data-toggle="tooltip" data-placement="top" :title="productPrices?.elite_league.cta">
                  <a href="#" class="btn mt-4 ">{{productPrices?.elite_league.cta}} </a>
                </div>
              </div>
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
<style>
  .plan-price.details{
    border-radius: 4px;
  }
  .plan-price.details p{
    font-weight: bold;
    font-size: 14px;
  }
  .plan-price.details p{
    border: 1px solid #9155FD;
    border-radius: 4px;
    padding: .5rem 1rem;
    background: transparent;
    color: #565656 !important;
  }
  .plan-price.details span{
    font-weight: bold;
    font-size: 12px;
  }
  .price-details{
    font-size: 14px;
  }
  .custom-btn, .custom-btn:hover {
   color: #444;
    background: transparent;
    border: 1px solid #9155FD;
  }
  .custom-btn.active {
    color: white;
    background: linear-gradient(-47deg, #28243D 0%, #9155FD 100%);
    border: 1px solid #9155FD;
  }
.price-text {
  font-size: 2em;
  font-weight: 600;
  line-height: 1.2;
  color: #222;
}

.cursor-pointer:hover {
  cursor: pointer;
}

.card-title {
  font-size: 20px;
  letter-spacing: 3px;
  opacity: 0.8;
  line-height: 1.2;
  font-weight: 600;
  color: #222;
  margin-bottom: 0;
}
</style>
