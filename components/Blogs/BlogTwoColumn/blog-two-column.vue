<template>
    <div class="blog">
        <ScrollupSection />
        <div class="main">
            <HeaderSection />
            <BlogBreadcrumb />
            <section id="blog" class="section blog-area ptb_100">
                <div class="container">
                    <Blog />
                    <div class="row">
                        <div class="col-12">
                            <!-- Pagination -->
                            <ul class="pagination justify-content-center">
                                <li class="disabled px-1">
                                    <a href="#" aria-label="Previous">
                                        <i class="fas fa-arrow-left"></i>
                                    </a>
                                </li>
                                <li class="px-1"><a href="#">1</a></li>
                                <li class="active px-1"><a href="#">2</a></li>
                                <li class="px-1"><a href="#">3</a></li>
                                <li>
                                    <a href="#" aria-label="Next">
                                        <i class="fas fa-arrow-right"></i>
                                    </a>
                                </li>
                            </ul>
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
import BlogBreadcrumb from '../BlogBreadcrumb/breadcrumbOne'
import Blog from '../Blog/blog'
import FooterSection from '../../FooterSection/footerFour'

export default {
    name: 'BlogTwoColumn',
    components: {
        ScrollupSection,
        HeaderSection,
        BlogBreadcrumb,
        Blog,
        FooterSection
    }
}
</script>

<style>

</style>