<script lang="ts" setup>
import ScrollupSection from '@/components/ScrollupSection/scrollUp.vue'
import HeaderSection from '@/components/HeaderSection/headerTwo.vue'
import HeroSection from '@/components/HeroSection/heroTwo.vue'
import FeatureSection from '@/components/FeatureSection/featureTwo.vue'
import DiscoverSection from '@/components/DiscoverSection/discoverTwo.vue'
import ServiceSection from '@/components/ServiceSection/serviceTwo.vue'
import WorkSection from '@/components/WorkSection/work.vue'
import ScreenshotSection from '@/components/ScreenshotSection/screenshotTwo.vue'
import PricingSection from '@/components/PricingSection/pricingOne.vue'
import FaqSection from '@/components/FaqSection/faqTwo.vue'
import NewsletterSection from '@/components/NewsletterSection/newsletter.vue'
import FooterSection from '@/components/FooterSection/footerOne.vue'
import {ref} from 'vue'
import {useIntersectionObserver} from '@vueuse/core'

const { $fbq } = useNuxtApp()
const pricingRef = ref(null)
const pricingRefIsVisible = ref(false)
const { stop } = useIntersectionObserver(
    pricingRef,
    ([{ isIntersecting }], observerElement) => {
      pricingRefIsVisible.value = isIntersecting
    },
)
watch(() => pricingRefIsVisible.value, (value) => {
  if (value) {
    console.log('Pricing Section is visible')
    $fbq('track', 'ViewContent',{value: 100,content_type: 'pricing'})
    stop()
  }
})
</script>
<template>
  <div class="homepage-2">
    <ScrollupSection />
    <div class="main">
      <HeaderSection />
      <HeroSection/>
      <FeatureSection />  
      <DiscoverSection />
      <ServiceSection />
      <WorkSection />
      <ScreenshotSection />
<!--      <ReviewSection />-->
      <PricingSection  ref="pricingRef"/>
      <NewsletterSection />
      <FaqSection />
<!--      <DownloadSection />-->

<!--      <ContactSection />-->
      <FooterSection />
    </div>
  </div>
</template>
