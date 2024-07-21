<template>
    <div>
        <ScrollupSection />
        <div class="main">
            <HeaderSection />
            <InnerBreadcrumb />
            <ReviewSection />
            <FaqSection />
            <FooterSection />
        </div>
    </div>
</template>

<script>
import ScrollupSection from '../../ScrollupSection/scrollUp'
import HeaderSection from '../../HeaderSection/headerOne'
import InnerBreadcrumb from '../InnerBreadcrumb/breadcrumbTwo'
import ReviewSection from '../../ReviewSection/reviewFour'
import FaqSection from '../../FaqSection/faqThree'
import FooterSection from '../../FooterSection/footerTwo'

export default {
    name: 'Reviews',
    components: {
        ScrollupSection,
        HeaderSection,
        InnerBreadcrumb,
        ReviewSection,
        FaqSection,
        FooterSection
    }
}
</script>

<style>

</style>