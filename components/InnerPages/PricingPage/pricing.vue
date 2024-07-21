<template>
    <div>
        <ScrollupSection />
        <div class="main">
            <HeaderSection />
            <InnerBreadcrumb />
            <PricingSection />
            <FaqSection />
            <FooterSection />
        </div>
    </div>
</template>

<script>
import ScrollupSection from '../../ScrollupSection/scrollUp'
import HeaderSection from '../../HeaderSection/headerOne'
import InnerBreadcrumb from '../InnerBreadcrumb/breadcrumbOne'
import PricingSection from '../../PricingSection/pricingFive'
import FaqSection from '../../FaqSection/faqOne'
import FooterSection from '../../FooterSection/footerThree'

export default {
    name: 'Pricing',
    components: {
        ScrollupSection,
        HeaderSection,
        InnerBreadcrumb,
        PricingSection,
        FaqSection,
        FooterSection
    }
}
</script>

<style>

</style>