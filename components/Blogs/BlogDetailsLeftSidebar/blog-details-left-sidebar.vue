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
                            <!-- Single Blog Details -->
                            <article class="single-blog-details">
                                <!-- Blog Thumb -->
                                <div class="blog-thumb">
                                    <a href="#"><img src="assets/img/blog_2.jpg" alt=""></a>
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
                                        <h3 class="blog-title py-2 py-sm-3"><a href="#">How to grow up your business with sApp</a></h3>
                                        <p class="d-none d-sm-block">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.</p>
                                        <p class="d-block d-sm-none">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution.</p>
                                        <blockquote class="blockquote px-4 py-3 my-3 ml-4">
                                            <p class="d-none d-sm-block">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing.</p>
                                            <p class="d-block d-sm-none">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
                                        </blockquote>
                                        <p class="d-none d-sm-block">On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish.</p>
                                        <p class="d-block d-sm-none">On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment.</p>
                                    </div>
                                </div>
                                <!-- Blog Comments -->
                                <CommentSection />
                            </article>
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
import BlogBreadcrumb from '../BlogBreadcrumb/breadcrumbFive'
import SidebarSection from '../SidebarSection/sidebarThree'
import CommentSection from '../CommentSection/comments'
import FooterSection from '../../FooterSection/footerFour'

export default {
    name: 'BlogDetailsLeftSidebar',
    components: {
        ScrollupSection,
        HeaderSection,
        BlogBreadcrumb,
        SidebarSection,
        CommentSection,
        FooterSection
    }
}
</script>

<style>

</style>