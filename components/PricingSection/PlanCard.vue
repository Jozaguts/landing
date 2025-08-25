<script setup lang="ts">
import CardCTA from "~/components/PricingSection/CardCTA.vue";
import type {PlanCard} from "~/types";
const{isAnnuallyPrice} = useProductPrices()
const {
  title,
  img_path,
  symbol,
  price,
  iso_code,
  annually_price,
  promo_price,
  annual_saving,
  cta,
  url,
  features,
} = defineProps<PlanCard>();
</script>

<template>
  <div class="single-price-plan text-center p-5 wow fadeInLeft" data-aos-duration="2s" data-wow-delay="0.4s">
    <!-- Plan Thumb -->
    <div class="plan-thumb">
      <img width="240" height="207" :src="img_path" alt="futzo logo vertical fondo primario">
    </div>
    <!-- Plan Title -->
    <div class="plan-title my-2 my-sm-3">
      <p class="card-title text-uppercase">{{title}}</p>
    </div>
    <!-- Plan Price -->
    <div class="plan-price">
      <p :class="{'text-muted': isAnnuallyPrice}">
        <span class="price-text" :style="{'text-decoration': isAnnuallyPrice ? 'line-through' : 'none'}">{{symbol}}{{price}}{{iso_code}}/mes</span>
      </p>
    </div>
    <div class="plan-price details py-2 px-1 mt-2" v-auto-animate>
      <p class="promo">
        <span v-if="isAnnuallyPrice" style="font-size: 14px;">
          <strong>{{symbol}}{{annually_price}}{{iso_code}}/mes</strong>
          <span>
             <span class="badge badge-pill text-white ml-1" style="background-color: #9155FD">Facturado anual</span>
          </span>
          <br>
         <span style="font-size: 14px;">💸 Ahorra <span style="font-weight: bolder;"> {{symbol}}{{ annual_saving }}{{iso_code}}/año</span></span>
        </span>
        <span v-else style="font-size: 14px;">
          <strong>{{symbol}}{{promo_price}}{{iso_code}}</strong>
           <span class="badge badge-pill text-white ml-1" style="background-color: #9155FD">Primer mes</span>
          <br>
          Después {{symbol}}{{price}}{{iso_code}}/mes
        </span>
        <br>
      </p>
    </div>
    <!-- Plan Description -->
    <div class="plan-description">
      <ul class="plan-features">
        <li v-for="feat in features" :key="feat" class="border-top py-3">✅ {{feat}}</li>
      </ul>
    </div>
    <CardCTA :cta="cta" :url="url"/>
  </div>
</template>
<style scoped>
.plan-price.details{
  border-top: 1px solid #9155FD;
  border-bottom: 1px solid #9155FD;
  padding: .5rem 1rem;
  background: transparent;
}
.plan-price.details p{
  font-weight: bold;
  font-size: 14px;
}
.plan-price.details span{
  font-weight: bold;
  font-size: 12px;
}
.price-details{
  font-size: 14px;
}
.price-text {
  font-size: 2em;
  font-weight: 600;
  line-height: 1.2;
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