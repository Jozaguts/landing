<template>
    <div>
        <div class="blog-comments">
            <!-- Admin -->
            <div class="admin media py-3">
                <!-- Admin Thumb -->
                <div class="admin-thumb avatar-lg">
                    <img class="rounded-circle" src="assets/img/avatar_1.png" alt="">
                </div>
                <!-- Admin Content -->
                <div class="admin-content media-body pl-3 pl-sm-4">
                    <h4 class="admin-name mb-2"><a href="#">Anna Swford</a></h4>
                    <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock Virginia.</p>
                </div>
            </div>
            <!-- Comments -->
            <div class="comments my-3">
                <!-- Comments Title -->
                <h3 class="comments-title text-uppercase text-right mb-3">Recent Comments</h3>
                <!-- Single Comments -->
                <div class="single-comments media p-3 p-lg-4">
                    <!-- Comments Thumb -->
                    <div class="comments-thumb avatar-lg">
                        <img class="rounded-circle" src="assets/img/avatar_2.png" alt="">
                    </div>
                    <!-- Comments Content -->
                    <div class="comments-content media-body pl-3">
                        <h5 class="d-flex mb-2">
                            <a href="#">Jonayed Hasan</a>
                            <a href="#" class="ml-auto">Reply</a>
                        </h5>
                        <p class="d-none d-lg-block">The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.</p>
                        <p class="d-block d-lg-none">The standard chunk of Lorem Ipsum used since the 1500s.</p>
                    </div>
                </div>
                <!-- Single Comments -->
                <div class="single-comments media p-3 p-lg-4">
                    <!-- Comments Thumb -->
                    <div class="comments-thumb avatar-lg">
                        <img class="rounded-circle" src="assets/img/avatar_3.png" alt="">
                    </div>
                    <!-- Comments Content -->
                    <div class="comments-content media-body pl-3">
                        <h5 class="d-flex mb-2">
                            <a href="#">Jassica William</a>
                            <a href="#" class="ml-auto">Reply</a>
                        </h5>
                        <p class="d-none d-lg-block">All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.</p>
                        <p class="d-block d-lg-none">All the Lorem Ipsum generators on the Internet tend to repeat.</p>
                    </div>
                </div>
            </div>
        </div>
        <!-- Blog Contact -->
        <div class="blog-contact mt-4">
            <!-- Contact Title -->
            <h3 class="comments-title text-uppercase text-right mb-3">Post your Comments</h3>
            <!-- Comment Box -->
            <div class="contact-box comment-box">
                <form method="POST" action="#">
                    <div class="row">
                        <div class="col-12 col-md-6">
                            <div class="form-group">
                                <input type="text" class="form-control" name="name" placeholder="Name" required="required">
                            </div>
                        </div>
                        <div class="col-12 col-md-6">
                            <div class="form-group">
                                <input type="email" class="form-control" name="email" placeholder="Email" required="required">
                            </div>
                        </div>
                        <div class="col-12">
                            <div class="form-group">
                                <textarea class="form-control" name="message" placeholder="Message" required="required"></textarea>
                            </div>
                        </div>
                        <div class="col-12">
                            <button class="btn btn-bordered" type="submit">Send Message</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style>

</style>