import { Link } from "react-router-dom";
import Footer from "../../common/Footer";
import Header from "../../common/Header";
import useScript from "../../components/useScripts";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Pagination from "./Pagnation";
import { getAllShop } from "../../services/fetch/ApiUtils";

function Shop(props) {
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

 
    const [tableData, setTableData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(10);
    const [totalItems, setTotalItems] = useState(0);
    const [searchQuery, setSearchQuery] = useState('');
    const [price, setPrice] = useState('150000');
    const [size, setSize] = useState('freesize');


    // Fetch data from the API
    useEffect(() => {
        fetchData();
    }, [currentPage, searchQuery]);


    const fetchData = () => {
        getAllShop(currentPage, itemsPerPage, searchQuery, size, price).then(response => {
            setTableData(response.content);
            setTotalItems(response.totalElements);
        }).catch(
            error => {
                toast.error((error && error.message) || 'Oops! Có điều gì đó xảy ra. Vui lòng thử lại!');
            }
        )
    }

    const handleAddNewCart = (id) => {

    }

    const handleSearch = (event) => {
        setSearchQuery(event.target.value);
    };

    const handleSearchPrice = (event) => {
        setPrice(event.target.value);
    };
    const handleSearchSize = (event) => {
        setSize(event.target.value);
    };

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    };



    return (
        <>
            
            <Header authenticated={props.authenticated} currentUser={props.currentUser} onLogout={props.onLogout}/>

            <section class="breadcrumb-option">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="breadcrumb__text">
                                <h4>Shop</h4>
                                <div class="breadcrumb__links">
                                    <a href="./index.html">Home</a>
                                    <span>Shop</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section class="shop spad">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-3">
                            <div class="shop__sidebar">
                                <div class="shop__sidebar__search">
                                    <form action="#">
                                        <input type="text"                                         
                                        value={searchQuery}
                                        onChange={handleSearch} placeholder="Search..." style={{marginBottom: "20px"}}/> 
                                        <input type="text"                                         
                                        value={price}
                                        onChange={handleSearchPrice} placeholder="Price..." style={{marginBottom: "20px"}}/>                                       
                                        <input type="text"                                         
                                        value={size}
                                        onChange={handleSearchSize} placeholder="Size..." style={{marginBottom: "20px"}}/>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-9">
                            <div class="row">
                            {tableData.map((item) => (
                                <div class="col-lg-4 col-md-6 col-sm-6">
                                    <div class="product__item">
                                        <div class="product__item__pic set-bg" >
                                            <img class="product__item__pic set-bg" src="../../assets/img/product/product-2.jpg"></img>
                                            <ul class="product__hover">
                                                <li><a href="#"><img src="../../assets/img/icon/heart.png" alt="" /></a></li>
                                                <li><a href="#"><img src="../../assets/img/icon/compare.png" alt="" /> <span>Compare</span></a>
                                                </li>
                                                <li><a href={`/shop-details/`+item?.id}><img src="../../assets/img/icon/search.png" alt="" /></a><span>Details</span></li>
                                            </ul>
                                        </div>
                                        <div class="product__item__text">
                                            <h6>{item.name}</h6>
                                            {props.authenticated ? <><a onClick={() => handleAddNewCart(item?.id)} class="add-cart">+ Add To Cart</a></> : <></>}
                                         <h5>{item.price.toLocaleString('en-US', {
                                                    style: 'currency',
                                                    currency: 'USD',
                                            })}</h5>
                                        </div>
                                    </div>
                                </div>
                            ))}
                            </div>
                            <Pagination
                                    itemsPerPage={itemsPerPage}
                                    totalItems={totalItems}
                                    currentPage={currentPage}
                                    paginate={paginate}
                                />
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

export default Shop;