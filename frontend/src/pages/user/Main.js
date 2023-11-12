import { useEffect } from "react";
import useScript from "../../components/useScripts";
import Header from "../../common/Header";
import Footer from "../../common/Footer";
import Home from "../../common/Home";

function Main(props) {
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

            <Header authenticated={props.authenticated} currentUser={props.currentUser} onLogout={props.onLogout}/>

            <Home />

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

export default Main;