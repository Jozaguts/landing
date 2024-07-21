<template>
    <div>
        <ScrollupSection />
        <div class="main">
            <HeaderSection />
            <InnerBreadcrumb />
            <FaqSection />
            <DownloadSection />
            <ContactSection />
            <FooterSection />
        </div>
    </div>
</template>

<script>
import ScrollupSection from '../../ScrollupSection/scrollUp'
import HeaderSection from '../../HeaderSection/headerOne'
import InnerBreadcrumb from '../InnerBreadcrumb/breadcrumbThree'
import FaqSection from '../../FaqSection/faqFour'
import DownloadSection from '../../DownloadSection/download'
import ContactSection from '../../ContactSection/contactOne'
import FooterSection from '../../FooterSection/footerTwo'

export default {
    name: 'Faq',
    components: {
        ScrollupSection,
        HeaderSection,
        InnerBreadcrumb,
        FaqSection,
        DownloadSection,
        ContactSection,
        FooterSection
    }
}
</script>

<style>

</style>