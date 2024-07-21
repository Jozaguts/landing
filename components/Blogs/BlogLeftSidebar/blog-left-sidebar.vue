<template>
    <div class="blog">
        <ScrollupSection />
        <div class="main">
            <HeaderSection />
            <BlogBreadcrumb />
            <section id="blog" class="section blog-area ptb_100">
                <div class="container">
                    <div class="row">
                        <div class="col-12 col-lg-3">
                            <SidebarSection />
                        </div>
                        <div class="col-12 col-lg-9">
                            <Blog />
                            <PaginationSection />
                        </div>
                    </div>
                </div>
            </section>
            <FooterSection />
        </div>
    </div>
</template>

<script>
import ScrollupSection from '../../ScrollupSection/scrollUp'
import HeaderSection from '../../HeaderSection/headerOne'
import BlogBreadcrumb from '../BlogBreadcrumb/breadcrumbThree'
import SidebarSection from '../SidebarSection/sidebarOne'
import Blog from '../Blog/blog'
import PaginationSection from '../PaginationSection/pagination'
import FooterSection from '../../FooterSection/footerFour'

export default {
    name: 'BlogLeftSidebar',
    components: {
        ScrollupSection,
        HeaderSection,
        BlogBreadcrumb,
        SidebarSection,
        Blog,
        PaginationSection,
        FooterSection
    }
}
</script>

<style>

</style>