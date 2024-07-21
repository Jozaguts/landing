<template>
    <div class="contact-page">
        <ScrollupSection />
        <div class="main">
            <HeaderSection />
            <InnerBreadcrumb />
            <ContactSection />
            <MapSection />
            <FooterSection />
        </div>
    </div>
</template>

<script>
import ScrollupSection from '../../ScrollupSection/scrollUp'
import HeaderSection from '../../HeaderSection/headerOne'
import InnerBreadcrumb from '../InnerBreadcrumb/breadcrumbFour'
import ContactSection from '../../ContactSection/contactThree'
import MapSection from '../../MapSection/map'
import FooterSection from '../../FooterSection/footerTwo'

export default {
    name: 'Contact',
    components: {
        ScrollupSection,
        HeaderSection,
        InnerBreadcrumb,
        ContactSection,
        MapSection,
        FooterSection
    }
}
</script>

<style>

</style>