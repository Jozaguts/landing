<template>
    <div class="blog blog-right">
        <ScrollupSection />
        <div class="main">
            <HeaderSection />
            <BlogBreadcrumb />
            <section id="blog" class="section blog-area ptb_100">
                <div class="container">
                    <div class="row">
                        <div class="col-12 col-lg-9">
                            <!-- Single Blog Details -->
                            <article class="single-blog-details">
                                <!-- Blog Thumb -->
                                <div class="blog-thumb">
                                    <a href="#"><img src="assets/img/blog_7.jpg" alt=""></a>
                                </div>
                                <!-- Blog Content -->
                                <div class="blog-content sApp-blog">
                                    <!-- Meta Info -->
                                    <div class="meta-info d-flex flex-wrap align-items-center py-2">
                                        <ul>
                                            <li class="d-inline-block p-2">By <a href="#">Anna Swford</a></li>
                                            <li class="d-inline-block p-2"><a href="#">05 Feb, 2018</a></li>
                                            <li class="d-inline-block p-2"><a href="#">2 Comments</a></li>
                                        </ul>
                                        <!-- Blog Share -->
                                        <div class="blog-share ml-auto d-none d-sm-block">
                                            <!-- Social Icons -->
                                            <div class="social-icons d-flex justify-content-center">
                                                <a class="bg-white facebook" href="#">
                                                    <i class="fab fa-facebook-f"></i>
                                                    <i class="fab fa-facebook-f"></i>
                                                </a>
                                                <a class="bg-white twitter" href="#">
                                                    <i class="fab fa-twitter"></i>
                                                    <i class="fab fa-twitter"></i>
                                                </a>
                                                <a class="bg-white google-plus" href="#">
                                                    <i class="fab fa-google-plus-g"></i>
                                                    <i class="fab fa-google-plus-g"></i>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- Blog Details -->
                                    <div class="blog-details">
                                        <h3 class="blog-title py-2 py-sm-3"><a href="#">How to promote your product with this awesome landing page</a></h3>
                                        <p class="d-none d-sm-block">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.</p>
                                        <p class="d-block d-sm-none">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage.</p>
                                        <blockquote class="blockquote px-4 py-3 my-3 ml-4">
                                            <p class="d-none d-sm-block">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature.</p>
                                            <p class="d-block d-sm-none">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</p>
                                        </blockquote>
                                        <p class="d-none d-sm-block">The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</p>
                                        <p class="d-block d-sm-none">The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33.</p>
                                    </div>
                                </div>
                                <!-- Blog Comments -->
                                <CommentSection />
                            </article>
                        </div>
                        <div class="col-12 col-lg-3">
                            <SidebarSection />
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
import BlogBreadcrumb from '../BlogBreadcrumb/breadcrumbSix'
import SidebarSection from '../SidebarSection/sidebarThree'
import CommentSection from '../CommentSection/comments'
import FooterSection from '../../FooterSection/footerFour'

export default {
    name: 'BlogDetailsRightSidebar',
    components: {
        ScrollupSection,
        BlogBreadcrumb,
        HeaderSection,
        SidebarSection,
        CommentSection,
        FooterSection
    }
}
</script>

<style>

</style>