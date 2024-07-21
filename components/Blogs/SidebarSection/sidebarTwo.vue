<template>
    <aside class="sidebar">
        <!-- Single Widget -->
        <div class="single-widget">
            <!-- Search Widget -->
            <div class="widget-content search-widget">
                <form action="#">
                    <input type="text" placeholder="Enter your keywords">
                </form>
            </div>
        </div>
        <!-- Single Widget -->
        <div class="single-widget">
            <!-- Category Widget -->
            <div class="accordions widget catagory-widget" id="cat-accordion">
                <div class="single-accordion blog-accordion">
                    <h5>
                        <a role="button" class="collapse show text-uppercase d-block p-3" data-toggle="collapse" href="#accordion1">Categories
                        </a>
                    </h5>
                    <!-- Category Widget Content -->
                    <div id="accordion1" class="accordion-content widget-content collapse show" data-parent="#cat-accordion">
                        <!-- Category Widget Items -->
                        <ul class="widget-items">
                            <li><a href="#" class="d-flex active p-3"><span>Web Design</span><span class="ml-auto">(14)</span></a></li>
                            <li><a href="#" class="d-flex p-3"><span>App Landing</span><span class="ml-auto">(32)</span></a></li>
                            <li><a href="#" class="d-flex p-3"><span>Wordpress</span><span class="ml-auto">(27)</span></a></li>
                            <li><a href="#" class="d-flex p-3"><span>UI Design</span><span class="ml-auto">(18)</span></a></li>
                            <li><a href="#" class="d-flex p-3"><span>Bootstrap</span><span class="ml-auto">(15)</span></a></li>
                            <li><a href="#" class="d-flex p-3"><span>Web Template</span><span class="ml-auto">(29)</span></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <!-- Single Widget -->
        <div class="single-widget">
            <!-- Post Widget -->
            <div class="accordions widget post-widget" id="post-accordion">
                <div class="single-accordion">
                    <h5>
                        <a role="button" class="collapse show text-uppercase d-block p-3" data-toggle="collapse" href="#accordion2">Popular Post
                        </a>
                    </h5>
                    <!-- Post Widget Content -->
                    <div id="accordion2" class="accordion-content widget-content collapse show" data-parent="#post-accordion">
                        <!-- Post Widget Items -->
                        <ul class="widget-items">
                            <li>
                                <a href="#" class="single-post media p-3">
                                    <!-- Post Thumb -->
                                    <div class="post-thumb avatar-md">
                                        <img class="align-self-center" src="assets/img/avatar_1.png" alt="">
                                    </div>
                                    <div class="post-content media-body pl-3">
                                        <p class="post-date mb-2">05 Feb, 2018</p>
                                        <h6>Promote Your Apps With sApp</h6>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="#" class="single-post media p-3">
                                    <!-- Post Thumb -->
                                    <div class="post-thumb avatar-md">
                                        <img class="align-self-center" src="assets/img/avatar_2.png" alt="">
                                    </div>
                                    <div class="post-content media-body pl-3">
                                        <p class="post-date mb-2">09 Apr, 2018</p>
                                        <h6>Sell Your Product Like Never Before</h6>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="#" class="single-post media p-3">
                                    <!-- Post Thumb -->
                                    <div class="post-thumb avatar-md">
                                        <img class="align-self-center" src="assets/img/avatar_3.png" alt="">
                                    </div>
                                    <div class="post-content media-body pl-3">
                                        <p class="post-date mb-2">13 Jul, 2018</p>
                                        <h6>Built For Passionate People</h6>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="#" class="single-post media p-3">
                                    <!-- Post Thumb -->
                                    <div class="post-thumb avatar-md">
                                        <img class="align-self-center" src="assets/img/avatar_4.png" alt="">
                                    </div>
                                    <div class="post-content media-body pl-3">
                                        <p class="post-date mb-2">03 Oct, 2018</p>
                                        <h6>Get Unlimited Offers &amp; Plans</h6>
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <!-- Single Widget -->
        <div class="single-widget">
            <!-- Tags Widget -->
            <div class="accordions widget tags-widget" id="tags-accordion">
                <div class="single-accordion blog-accordion">
                    <h5>
                        <a role="button" class="collapse show text-uppercase d-block p-3" data-toggle="collapse" href="#accordion3">Popular Tags
                        </a>
                    </h5>
                    <!-- Tags Widget Content -->
                    <div id="accordion3" class="accordion-content widget-content collapse show" data-parent="#tags-accordion">
                        <!-- Tags Widget Items -->
                        <div class="widget-content tags-widget-items pt-2">
                            <a href="#" class="d-inline-block mt-2 mr-1 px-2 py-1">sApp</a>
                            <a href="#" class="d-inline-block mt-2 mr-1 px-2 py-1">Bootstrap</a>
                            <a href="#" class="d-inline-block mt-2 mr-1 px-2 py-1">IOS</a>
                            <a href="#" class="d-inline-block mt-2 mr-1 px-2 py-1">Android</a>
                            <a href="#" class="d-inline-block mt-2 mr-1 px-2 py-1">Landing Page</a>
                            <a href="#" class="d-inline-block mt-2 mr-1 px-2 py-1">Business</a>
                            <a href="#" class="d-inline-block mt-2 mr-1 px-2 py-1">Fashion</a>
                            <a href="#" class="d-inline-block mt-2 mr-1 px-2 py-1">Media</a>
                            <a href="#" class="d-inline-block mt-2 mr-1 px-2 py-1">Lifestyle</a>
                            <a href="#" class="d-inline-block mt-2 mr-1 px-2 py-1">Wordpress</a>
                            <a href="#" class="d-inline-block mt-2 mr-1 px-2 py-1">Web Design</a>
                            <a href="#" class="d-inline-block mt-2 mr-1 px-2 py-1">Mobile App</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </aside>
</template>

<script>
export default {
    
}
</script>

<style>

</style>