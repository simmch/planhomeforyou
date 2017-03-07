<!-- Start of contact section -->
<section id="contact" class="section contact-sec">
    <div class="container">
        <div class="row">
            <div class="section-title">
                <h2>We'd Love to hear from you</h2>
                <p> dolor sit amet, consectetuer adipiscing elit. Donec odio.Quisque volutpat mattis eros. Nullam</p>
            </div>
            <div class="col-md-3">
                <div class="contact-img" data-aos="fade-down">
                    <img src="assets/img/contact.jpg" alt="">
                </div>
            </div>

            <div class="col-md-9">
                <form action="contact_mail.php" method= "post" id="contact_form" autocomplete="off">
                    <div id="mail-status"></div>
                    <div class="col-md-6 col-sm-12">
                        <span class="input input--nao" data-aos="fade-down">
                            <input id="first_name" name="first_name" class="input__field input__field--nao" type="text" />
                            <label class="input__label input__label--nao">
                                <span class="input__label-content input__label-content--nao">Username</span>
                            </label>
                        </span>
                    </div>

                    <div class="col-md-6 col-sm-12">
                        <span class="input input--nao" data-aos="fade-down">
                            <input id="user_email" name="user_email" class="input__field input__field--nao" type="text" />
                            <label class="input__label input__label--nao">
                                <span class="input__label-content input__label-content--nao">Email</span>
                            </label>
                        </span>
                    </div>

                    <div class="col-md-12 col-sm-12">
                        <span class="input input--nao message" data-aos="fade-down">
                            <textarea class="input__field input__field--nao" rows="5" id="comments" name="comments"></textarea>
                            <label class="input__label input__label--nao">
                                <span class="input__label-content input__label-content--nao">Message</span>
                            </label>
                        </span>
                    </div>
                    <input type="submit"  class="submit btn btn-default" value="Submit">
                    <div class="ajax-loader" style="display:none;">
                        <img class="contact_spinner" src="assets/img/spinner.gif" alt="">
                    </div>
                </form>
            </div>
        </div>
    </div>
</section>
<div id="map"></div>
<!-- End of contact section -->

<!-- Start of map section -->
<section class="contact-info section">
    <div class="contact-info-container">
        <div class="container">
            <div class="row">
                <div class="col-md-4">
                    <div class="contact-content-wrapper location-div" data-aos="fade-down">
                        <div class="contact-icon">
                            <i class="ion-ios-location" aria-hidden="true"></i>
                        </div>
                        <div class="contact-content">
                            <h2 class="location-title">Our Location</h2>
                            <span>10th Floor,Washington Square Park, NY, United States.</span>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="contact-content-wrapper phone-div" data-aos="fade-down">
                        <div class="contact-icon">
                           <i class="ion-ios-telephone" aria-hidden="true"></i>
                        </div>
                        <div class="contact-content">
                            <h2 class="call-title">Give a Call</h2>
                            <span>123456789</span>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="contact-content-wrapper mail-div" data-aos="fade-down">
                        <div class="contact-icon">
                           <i class="ion-email" aria-hidden="true"></i>
                        </div>
                        <div class="contact-content">
                            <h2 class="mail-title">Email Us</h2>
                            <span>sushil@codepixelzmedia.com.np</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<!-- End of contact info section -->

