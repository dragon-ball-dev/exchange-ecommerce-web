import { Link } from "react-router-dom";
import Footer from "../../common/Footer";
import Header from "../../common/Header";
import useScript from "../../components/useScripts";

function ShoppingCart(props) {
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

            <section class="breadcrumb-option">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="breadcrumb__text">
                                <h4>Shopping Cart</h4>
                                <div class="breadcrumb__links">
                                    <a href="./index.html">Home</a>
                                    <a href="./shop.html">Shop</a>
                                    <span>Shopping Cart</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="shopping-cart spad">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-8">
                            <div class="shopping__cart__table">
                                <table>
                                    <thead>
                                        <tr>
                                            <th>Product</th>
                                            <th>Quantity</th>
                                            <th>Total</th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td class="product__cart__item">
                                                <div class="product__cart__item__pic">
                                                    <img src="../../assets/img/shopping-cart/cart-1.jpg" alt="" />
                                                </div>
                                                <div class="product__cart__item__text">
                                                    <h6>T-shirt Contrast Pocket</h6>
                                                    <h5>$98.49</h5>
                                                </div>
                                            </td>
                                            <td >
                                                <input type="number"  style={{width : "100px"}}/>
                                            </td>
                                            <td class="cart__price">$ 30.00</td>
                                            <td class="cart__close"><i class="fa fa-close"></i></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div class="row">
                                <div class="col-lg-6 col-md-6 col-sm-6">
                                    <div class="continue__btn">
                                        <a href="/shop">Continue Shopping</a>
                                    </div>
                                </div>
                                <div class="col-lg-6 col-md-6 col-sm-6">
                                    <div class="continue__btn update__btn">
                                        <a href="#"><i class="fa fa-spinner"></i> Update cart</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="cart__discount">
                                <h6>Discount codes</h6>
                                <form action="#">
                                    <input type="text" placeholder="Coupon code" />
                                    <button type="submit">Apply</button>
                                </form>
                            </div>
                            <div class="cart__total">
                                <h6>Cart total</h6>
                                <ul>
                                    <li>Subtotal <span>$ 169.50</span></li>
                                    <li>Total <span>$ 169.50</span></li>
                                </ul>
                                <a href="/check-out" class="primary-btn">Proceed to checkout</a>
                            </div>
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

export default ShoppingCart;