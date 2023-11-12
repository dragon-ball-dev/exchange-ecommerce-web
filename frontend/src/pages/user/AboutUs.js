import Footer from "../../common/Footer";
import Header from "../../common/Header";
import useScript from "../../components/useScripts";

function AboutUs() {
    useScript("../../assets/js/main.js");
    useScript("../../assets/js/jquery-3.3.1.min.js");
    useScript("../../assets/js/bootstrap.min.js");
    useScript("../../assets/js/jquery.nice-select.min.js");
    useScript("../../assets/js/jquery.nicescroll.min.js");
    useScript("../../assets/js/jquery.magnific-popup.min.js");
    useScript("../../assets/js/jquery.countdown.min.js");
    useScript("../../assets/js/jquery.slicknav.js");
    useScript("../../assets/js/mixitup.min.js");
    useScript("../../assets/js/owl.carousel.min.js");
    return (
        <>
            <Header />
            <section class="breadcrumb-option">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="breadcrumb__text">
                                <h4>About Us</h4>
                                <div class="breadcrumb__links">
                                    <a href="./index.html">Home</a>
                                    <span>About Us</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="about spad">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="about__pic">
                                <img src="../../assets/img/about/about-us.jpg" alt=""/>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-4 col-md-4 col-sm-6">
                            <div class="about__item">
                                <h4>Who We Are ?</h4>
                                <p>Contextual advertising programs sometimes have strict policies that need to be adhered too.
                                    Let’s take Google as an example.</p>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-4 col-sm-6">
                            <div class="about__item">
                                <h4>Who We Do ?</h4>
                                <p>In this digital generation where information can be easily obtained within seconds, business
                                    cards still have retained their importance.</p>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-4 col-sm-6">
                            <div class="about__item">
                                <h4>Why Choose Us</h4>
                                <p>A two or three storey house is the ideal way to maximise the piece of earth on which our home
                                    sits, but for older or infirm people.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

    <section class="team spad">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="section-title">
                        <span>Our Team</span>
                        <h2>Meet Our Team</h2>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-3 col-md-6 col-sm-6">
                    <div class="team__item">
                        <img src="../../assets/img/about/team-1.jpg" alt=""/>
                        <h4>John Smith</h4>
                        <span>Fashion Design</span>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6 col-sm-6">
                    <div class="team__item">
                        <img src="../../assets/img/about/team-2.jpg" alt=""/>
                        <h4>Christine Wise</h4>
                        <span>C.E.O</span>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6 col-sm-6">
                    <div class="team__item">
                        <img src="../../assets/img/about/team-3.jpg" alt=""/>
                        <h4>Sean Robbins</h4>
                        <span>Manager</span>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6 col-sm-6">
                    <div class="team__item">
                        <img src="../../assets/img/about/team-4.jpg" alt=""/>
                        <h4>Lucy Myers</h4>
                        <span>Delivery</span>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="clients spad">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="section-title">
                        <span>Partner</span>
                        <h2>Happy Clients</h2>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-3 col-md-4 col-sm-4 col-6">
                    <a href="#" class="client__item"><img src="../../assets/img/clients/client-1.png" alt=""/></a>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-4 col-6">
                    <a href="#" class="client__item"><img src="../../assets/img/clients/client-2.png" alt=""/></a>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-4 col-6">
                    <a href="#" class="client__item"><img src="../../assets/img/clients/client-3.png" alt=""/></a>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-4 col-6">
                    <a href="#" class="client__item"><img src="../../assets/img/clients/client-4.png" alt=""/></a>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-4 col-6">
                    <a href="#" class="client__item"><img src="../../assets/img/clients/client-5.png" alt=""/></a>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-4 col-6">
                    <a href="#" class="client__item"><img src="../../assets/img/clients/client-6.png" alt=""/></a>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-4 col-6">
                    <a href="#" class="client__item"><img src="../../assets/img/clients/client-7.png" alt=""/></a>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-4 col-6">
                    <a href="#" class="client__item"><img src="../../assets/img/clients/client-8.png" alt=""/></a>
                </div>
            </div>
        </div>
    </section>

            <Footer />

            <div class="search-model">
                <div class="h-100 d-flex align-items-center justify-content-center">
                    <div class="search-close-switch">+</div>
                    <form class="search-model-form">
                        <input type="text" id="search-input" placeholder="Search here....." />
                    </form>
                </div>
            </div>
        </>
    );
}

export default AboutUs;