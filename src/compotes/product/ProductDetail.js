/* eslint-disable react-hooks/exhaustive-deps */
import React, { Fragment, useEffect, useState } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
// import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
// import Skeleton from "react-loading-skeleton";
import { toast } from "react-toastify";
import Api from "../../sever/Api";
import url from "../../sever/url";
import ProductRelated from "./ProductRelated";
import { createCart, getCart } from "sever/service";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState({
    category: {},
  });
  const user = JSON.parse(localStorage.getItem("dataUser")) || {};
  // const carts = JSON.parse(localStorage.getItem("cart")) || [];

  // const [loading, setLoading] = useState(false);
  const fetchGetCart = async () => {
    const res = await getCart(user.id);
    localStorage.setItem("cart", JSON.stringify(res.data));
  };

  const lisProduct = async () => {
    try {
      const rs = await Api.get(url.PRODUCT.DETAIL + `?id=${id}`);
      setProduct(rs.data);
      // setLoading(false)
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    lisProduct();
  }, [id]);


  // const handleCart = async (item) => {
  //   const res = await createCart(`userId=${user.id}&product_id=${item.id}`);
  //   if (res.status === 200) {
  //     await fetchGetCart();
  //     toast.success("Thành Công !");
  //     navigate("/cart");
  //   } else  {
  //     toast.error("Bạn chưa đăng nhập");
  //     navigate("/login")
  //   }
    
  // };

  const handleAddCart = async (item) => {
    const res = await createCart(`userId=${user.id}&product_id=${item.id}`);
    // console.log("check res create ---", res);
    if (res.status === 200) {
      await fetchGetCart();
      toast.success("Thành Công !");
    } else {
      toast.error("Bạn chưa đăng nhập");
      navigate("/login")
    }
  };

  //   console.log("check product", product);

  return (
    <Fragment>
      <section className="mt-0 ">
        <div className="bg-dark py-6">
          <div className="container-fluid">
            <nav className="m-0" aria-label="breadcrumb">
              <ol className="breadcrumb m-0">
                <li className="breadcrumb-item breadcrumb-light">
                  <NavLink to="/">Home</NavLink>
                </li>
                <li className="breadcrumb-item breadcrumb-light">
                  <NavLink to="/product">Product</NavLink>
                </li>
                {/* <li
                                    className="breadcrumb-item  breadcrumb-light active"
                                    aria-current="page"
                                >
                                    Osaka Japan Mens T-Shirt
                                </li> */}
              </ol>
            </nav>
          </div>
        </div>
        <div className="container-fluid mt-5">
          <div className="row g-9" data-sticky-container>
            {/* { <Loading />} */}
            {/* <!-- Product Images--> */}
            <div className="col-12 col-md-6 col-xl-7">
              <div className="row g-3" data-aos="fade-right">
                <div className="col-12 d-flex     justify-content-center">
                  <picture className="picture">
                    <img className="img" src={product.thumbnail} alt="" />
                  </picture>
                </div>
              </div>
            </div>
            {/* <!-- /Product Images--> */}

            {/* <!-- Product Information--> */}
            <div className="col-12 col-md-6 col-lg-5">
              <div className="sticky-top top-5">
                <div className="pb-3" data-aos="fade-in">
                  <div className="d-flex align-items-center mb-3">
                    <p className="small fw-bolder text-uppercase tracking-wider text-muted m-0 me-4">
                      {product.category.name}
                    </p>
                    <div
                      className="d-flex justify-content-start align-items-center disable-child-pointer cursor-pointer"
                      // data-pixr-scrollto
                      // data-target=".reviews"
                    >
                      {/* <!-- Review Stars Small--> */}
                      <div className="rating position-relative d-table">
                        <div
                          className="position-absolute stars"
                          style={{ width: "80%" }}>
                          <i className="ri-star-fill text-dark mr-1"></i>
                          <i className="ri-star-fill text-dark mr-1"></i>
                          <i className="ri-star-fill text-dark mr-1"></i>
                          <i className="ri-star-fill text-dark mr-1"></i>
                          <i className="ri-star-fill text-dark mr-1"></i>
                        </div>
                        <div className="stars">
                          <i className="ri-star-fill mr-1 text-muted opacity-25"></i>
                          <i className="ri-star-fill mr-1 text-muted opacity-25"></i>
                          <i className="ri-star-fill mr-1 text-muted opacity-25"></i>
                          <i className="ri-star-fill mr-1 text-muted opacity-25"></i>
                          <i className="ri-star-fill mr-1 text-muted opacity-25"></i>
                        </div>
                      </div>{" "}
                      <small className="text-muted d-inline-block ms-2 fs-bolder">
                        (105 reviews)
                      </small>
                    </div>
                  </div>

                  <h1 className="mb-1 fs-2 fw-bold">{product.name}</h1>
                  <div className="d-flex justify-content-between align-items-center">
                    <p className="fs-4 m-0">${product.price}</p>
                  </div>
                  <div className="border-top mt-4 mb-3 product-option">
                    <small className="text-uppercase pt-4 d-block fw-bolder">
                      <span className="text-muted">Available Sizes (Mens)</span>{" "}
                      :{" "}
                      <span
                        className="selected-option fw-bold"
                        // data-pixr-product-option="size"
                      >
                        M
                      </span>
                    </small>
                    <div className="mt-4 d-flex justify-content-start flex-wrap align-items-start">
                      <div className="form-check-option form-check-rounded">
                        <input
                          type="radio"
                          name="product-option-sizes"
                          value="S"
                          id="option-sizes-0"
                        />
                        <label for="option-sizes-0">
                          <small>S</small>
                        </label>
                      </div>{" "}
                      <div className="form-check-option form-check-rounded">
                        <input
                          type="radio"
                          name="product-option-sizes"
                          value="SM"
                          id="option-sizes-1"
                        />
                        <label for="option-sizes-1">
                          <small>SM</small>
                        </label>
                      </div>{" "}
                      <div className="form-check-option form-check-rounded">
                        <input
                          type="radio"
                          name="product-option-sizes"
                          value="M"
                          checked
                          id="option-sizes-2"
                        />
                        <label for="option-sizes-2">
                          <small>M</small>
                        </label>
                      </div>{" "}
                      <div className="form-check-option form-check-rounded">
                        <input
                          type="radio"
                          name="product-option-sizes"
                          value="L"
                          id="option-sizes-3"
                        />
                        <label for="option-sizes-3">
                          <small>L</small>
                        </label>
                      </div>{" "}
                      <div className="form-check-option form-check-rounded">
                        <input
                          type="radio"
                          name="product-option-sizes"
                          value="Xl"
                          id="option-sizes-4"
                        />
                        <label for="option-sizes-4">
                          <small>XL</small>
                        </label>
                      </div>{" "}
                      <div className="form-check-option form-check-rounded">
                        <input
                          type="radio"
                          name="product-option-sizes"
                          value="XXL"
                          id="option-sizes-5"
                        />
                        <label for="option-sizes-5">
                          <small>XXL</small>
                        </label>
                      </div>{" "}
                    </div>
                  </div>
                  <div className="mb-3">
                    <small className="text-uppercase pt-4 d-block fw-bolder text-muted">
                      Available Designs :
                    </small>
                    <div className="mt-4 d-flex justify-content-start flex-wrap align-items-start">
                      <picture className="me-2">
                        <img
                          className="f-w-24 p-2 bg-light border-bottom border-dark border-2 cursor-pointer"
                          src={product.thumbnail}
                          alt=""
                        />
                      </picture>
                      <picture>
                        <img
                          className="f-w-24 p-2 bg-light cursor-pointer"
                          src={product.thumbnail}
                          alt={product.name}
                        />
                      </picture>
                    </div>
                  </div>
                  <div className="d-flex">
                    {/* <button
                      className=" bynow btn btn-dark w-100 mt-4 mr- mb-0 hover-lift-sm hover-boxshadow mr-4"
                      onClick={() => handleCart(product)}>
                      By It Now
                    </button> */}
                    <button
                      className="btn btn-dark w-100 mt-4 mb-0 hover-lift-sm hover-boxshadow"
                      onClick={() => handleAddCart(product)}>
                      Add To Shopping Bag
                    </button>
                  </div>
                  {/* <!-- Product Highlights--> */}
                  <div className="my-5">
                    <div className="row">
                      <div className="col-12 col-md-4">
                        <div className="text-center px-2">
                          <i className="ri-24-hours-line ri-2x"></i>
                          <small className="d-block mt-1">
                            Next-day Delivery
                          </small>
                        </div>
                      </div>
                      <div className="col-12 col-md-4">
                        <div className="text-center px-2">
                          <i className="ri-secure-payment-line ri-2x"></i>
                          <small className="d-block mt-1">
                            Secure Checkout
                          </small>
                        </div>
                      </div>
                      <div className="col-12 col-md-4">
                        <div className="text-center px-2">
                          <i className="ri-service-line ri-2x"></i>
                          <small className="d-block mt-1">Free Returns</small>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <!-- / Product Highlights-->
                        
                            <!-- Product Accordion --> */}
                  <div className="accordion" id="accordionProduct">
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingOne">
                        <button
                          className="accordion-button"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseOne"
                          aria-expanded="true"
                          aria-controls="collapseOne">
                          Product Details
                        </button>
                      </h2>
                      <div
                        id="collapseOne"
                        className="accordion-collapse collapse show"
                        aria-labelledby="headingOne"
                        data-bs-parent="#accordionProduct">
                        <div className="accordion-body">
                          <p className="m-0">{product.description}</p>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingTwo">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseTwo"
                          aria-expanded="false"
                          aria-controls="collapseTwo">
                          Details & Care
                        </button>
                      </h2>
                      <div
                        id="collapseTwo"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingTwo"
                        data-bs-parent="#accordionProduct">
                        <div className="accordion-body">
                          <ul className="list-group list-group-flush">
                            <li className="list-group-item d-flex border-0 row g-0 px-0">
                              <span className="col-4 fw-bolder">
                                Composition
                              </span>
                              <span className="col-7 offset-1">
                                98% Cotton, 2% elastane
                              </span>
                            </li>
                            <li className="list-group-item d-flex border-0 row g-0 px-0">
                              <span className="col-4 fw-bolder">Care</span>
                              <span className="col-7 offset-1">
                                Professional dry clean only. Do not bleach. Do
                                not iron.
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingThree">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseThree"
                          aria-expanded="false"
                          aria-controls="collapseThree">
                          Delivery & Returns
                        </button>
                      </h2>
                      <div
                        id="collapseThree"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingThree"
                        data-bs-parent="#accordionProduct">
                        <div className="accordion-body">
                          <ul className="list-group list-group-flush">
                            <li className="list-group-item d-flex border-0 row g-0 px-0">
                              <span className="col-4 fw-bolder">Delivery</span>
                              <span className="col-7 offset-1">
                                Standard delivery free for orders over $99. Next
                                day delivery $9.99
                              </span>
                            </li>
                            <li className="list-group-item d-flex border-0 row g-0 px-0">
                              <span className="col-4 fw-bolder">Returns</span>
                              <span className="col-7 offset-1">
                                30 day return period. See our{" "}
                                <NavLink className="text-link-border" to="/">
                                  terms & conditions.
                                </NavLink>
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>{" "}
              </div>
            </div>
          </div>

          <div className="row g-0">
            {/* <!-- Related Products--> */}
            <div className="col-12" data-aos="fade-up">
              <h3 className="fs-4 fw-bolder mt-7 mb-4">You May Also Like</h3>
              {/* <!-- Swiper Latest --> */}
              {/* <div className="swiper-container"> */}{" "}
              <ProductRelated></ProductRelated>
              {/* <!-- / Swiper Latest--> */}
            </div>

            {/* <!-- Reviews--> */}
            <div className="col-12" data-aos="fade-up">
              <h3 className="fs-4 fw-bolder mt-7 mb-4 reviews">Reviews</h3>

              {/* <!-- Review Summary--> */}
              <div className="bg-light p-5 justify-content-between d-flex flex-column flex-lg-row">
                <div className="d-flex flex-column align-items-center mb-4 mb-lg-0">
                  <div className="bg-dark text-white f-w-24 f-h-24 d-flex rounded-circle align-items-center justify-content-center fs-2 fw-bold mb-3">
                    4.3
                  </div>
                  {/* <!-- Review Stars Medium--> */}
                  <div className="rating position-relative d-table">
                    <div
                      className="position-absolute stars"
                      style={{ width: "88%" }}>
                      <i className="ri-star-fill text-dark ri-2x mr-1"></i>
                      <i className="ri-star-fill text-dark ri-2x mr-1"></i>
                      <i className="ri-star-fill text-dark ri-2x mr-1"></i>
                      <i className="ri-star-fill text-dark ri-2x mr-1"></i>
                      <i className="ri-star-fill text-dark ri-2x mr-1"></i>
                    </div>
                    <div className="stars">
                      <i className="ri-star-fill ri-2x mr-1 text-muted opacity-25"></i>
                      <i className="ri-star-fill ri-2x mr-1 text-muted opacity-25"></i>
                      <i className="ri-star-fill ri-2x mr-1 text-muted opacity-25"></i>
                      <i className="ri-star-fill ri-2x mr-1 text-muted opacity-25"></i>
                      <i className="ri-star-fill ri-2x mr-1 text-muted opacity-25"></i>
                    </div>
                  </div>{" "}
                </div>
                <div className="d-flex flex-grow-1 flex-column ms-lg-8">
                  <div className="d-flex align-items-center justify-content-start mb-2">
                    <div className="f-w-20">
                      {/* <!-- Review Stars Small--> */}
                      <div className="rating position-relative d-table">
                        <div
                          className="position-absolute stars"
                          style={{ width: " 100%" }}>
                          <i className="ri-star-fill text-dark mr-1"></i>
                          <i className="ri-star-fill text-dark mr-1"></i>
                          <i className="ri-star-fill text-dark mr-1"></i>
                          <i className="ri-star-fill text-dark mr-1"></i>
                          <i className="ri-star-fill text-dark mr-1"></i>
                        </div>
                        <div className="stars">
                          <i className="ri-star-fill mr-1 text-muted opacity-25"></i>
                          <i className="ri-star-fill mr-1 text-muted opacity-25"></i>
                          <i className="ri-star-fill mr-1 text-muted opacity-25"></i>
                          <i className="ri-star-fill mr-1 text-muted opacity-25"></i>
                          <i className="ri-star-fill mr-1 text-muted opacity-25"></i>
                        </div>
                      </div>{" "}
                    </div>
                    <div className="progress d-flex flex-grow-1 mx-4 f-h-1">
                      <div
                        className="progress-bar bg-dark"
                        role="progressbar"
                        style={{ width: " 80%" }}
                        aria-valuenow="25"
                        aria-valuemin="0"
                        aria-valuemax="100"></div>
                    </div>
                    <span className="fw-bold small d-block f-w-4 text-end">
                      55
                    </span>
                  </div>
                  <div className="d-flex align-items-center justify-content-start mb-2">
                    <div className="f-w-20">
                      {/* <!-- Review Stars Small--> */}
                      <div className="rating position-relative d-table">
                        <div
                          className="position-absolute stars"
                          style={{ width: " 80%" }}>
                          <i className="ri-star-fill text-dark mr-1"></i>
                          <i className="ri-star-fill text-dark mr-1"></i>
                          <i className="ri-star-fill text-dark mr-1"></i>
                          <i className="ri-star-fill text-dark mr-1"></i>
                          <i className="ri-star-fill text-dark mr-1"></i>
                        </div>
                        <div className="stars">
                          <i className="ri-star-fill mr-1 text-muted opacity-25"></i>
                          <i className="ri-star-fill mr-1 text-muted opacity-25"></i>
                          <i className="ri-star-fill mr-1 text-muted opacity-25"></i>
                          <i className="ri-star-fill mr-1 text-muted opacity-25"></i>
                          <i className="ri-star-fill mr-1 text-muted opacity-25"></i>
                        </div>
                      </div>{" "}
                    </div>
                    <div className="progress d-flex flex-grow-1 mx-4 f-h-1">
                      <div
                        className="progress-bar bg-dark"
                        role="progressbar"
                        style={{ width: " 60%" }}
                        aria-valuenow="25"
                        aria-valuemin="0"
                        aria-valuemax="100"></div>
                    </div>
                    <span className="fw-bold small d-block f-w-4 text-end">
                      32
                    </span>
                  </div>
                  <div className="d-flex align-items-center justify-content-start mb-2">
                    <div className="f-w-20">
                      {/* <!-- Review Stars Small--> */}
                      <div className="rating position-relative d-table">
                        <div
                          className="position-absolute stars"
                          style={{ width: " 60%" }}>
                          <i className="ri-star-fill text-dark mr-1"></i>
                          <i className="ri-star-fill text-dark mr-1"></i>
                          <i className="ri-star-fill text-dark mr-1"></i>
                          <i className="ri-star-fill text-dark mr-1"></i>
                          <i className="ri-star-fill text-dark mr-1"></i>
                        </div>
                        <div className="stars">
                          <i className="ri-star-fill mr-1 text-muted opacity-25"></i>
                          <i className="ri-star-fill mr-1 text-muted opacity-25"></i>
                          <i className="ri-star-fill mr-1 text-muted opacity-25"></i>
                          <i className="ri-star-fill mr-1 text-muted opacity-25"></i>
                          <i className="ri-star-fill mr-1 text-muted opacity-25"></i>
                        </div>
                      </div>{" "}
                    </div>
                    <div className="progress d-flex flex-grow-1 mx-4 f-h-1">
                      <div
                        className="progress-bar bg-dark"
                        role="progressbar"
                        style={{ width: " 30%" }}
                        aria-valuenow="25"
                        aria-valuemin="0"
                        aria-valuemax="100"></div>
                    </div>
                    <span className="fw-bold small d-block f-w-4 text-end">
                      15
                    </span>
                  </div>
                  <div className="d-flex align-items-center justify-content-start mb-2">
                    <div className="f-w-20">
                      {/* <!-- Review Stars Small--> */}
                      <div className="rating position-relative d-table">
                        <div
                          className="position-absolute stars"
                          style={{ width: " 40%" }}>
                          <i className="ri-star-fill text-dark mr-1"></i>
                          <i className="ri-star-fill text-dark mr-1"></i>
                          <i className="ri-star-fill text-dark mr-1"></i>
                          <i className="ri-star-fill text-dark mr-1"></i>
                          <i className="ri-star-fill text-dark mr-1"></i>
                        </div>
                        <div className="stars">
                          <i className="ri-star-fill mr-1 text-muted opacity-25"></i>
                          <i className="ri-star-fill mr-1 text-muted opacity-25"></i>
                          <i className="ri-star-fill mr-1 text-muted opacity-25"></i>
                          <i className="ri-star-fill mr-1 text-muted opacity-25"></i>
                          <i className="ri-star-fill mr-1 text-muted opacity-25"></i>
                        </div>
                      </div>{" "}
                    </div>
                    <div className="progress d-flex flex-grow-1 mx-4 f-h-1">
                      <div
                        className="progress-bar bg-dark"
                        style={{ width: " 8%" }}
                        aria-valuenow="25"
                        aria-valuemin="0"
                        aria-valuemax="100"></div>
                    </div>
                    <span className="fw-bold small d-block f-w-4 text-end">
                      5
                    </span>
                  </div>
                  <div className="d-flex align-items-center justify-content-start mb-2">
                    <div className="f-w-20">
                      {/* <!-- Review Stars Small--> */}
                      <div className="rating position-relative d-table">
                        <div
                          className="position-absolute stars"
                          style={{ width: " 20%" }}>
                          <i className="ri-star-fill text-dark mr-1"></i>
                          <i className="ri-star-fill text-dark mr-1"></i>
                          <i className="ri-star-fill text-dark mr-1"></i>
                          <i className="ri-star-fill text-dark mr-1"></i>
                          <i className="ri-star-fill text-dark mr-1"></i>
                        </div>
                        <div className="stars">
                          <i className="ri-star-fill mr-1 text-muted opacity-25"></i>
                          <i className="ri-star-fill mr-1 text-muted opacity-25"></i>
                          <i className="ri-star-fill mr-1 text-muted opacity-25"></i>
                          <i className="ri-star-fill mr-1 text-muted opacity-25"></i>
                          <i className="ri-star-fill mr-1 text-muted opacity-25"></i>
                        </div>
                      </div>{" "}
                    </div>
                    <div className="progress d-flex flex-grow-1 mx-4 f-h-1">
                      <div
                        className="progress-bar bg-dark"
                        style={{ width: " 5%" }}
                        aria-valuenow="25"
                        aria-valuemin="0"
                        aria-valuemax="100"></div>
                    </div>
                    <span className="fw-bold small d-block f-w-4 text-end">
                      1
                    </span>
                  </div>
                  <p className="mt-3 mb-0 d-flex align-items-start">
                    <i className="ri-chat-voice-line me-2"></i> 105 customers
                    have reviewed this product
                  </p>
                </div>
              </div>
              {/* <!-- / Rewview Summary--> */}

              {/* <!-- Reviews--> */}
              <div className="row g-6 g-md-8 g-lg-10 my-3">
                <div className="col-12 col-lg-6 col-xxl-4">
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    {/* <!-- Review Stars Small--> */}
                    <div className="rating position-relative d-table">
                      <div
                        className="position-absolute stars"
                        style={{ width: " 80%" }}>
                        <i className="ri-star-fill text-dark mr-1"></i>
                        <i className="ri-star-fill text-dark mr-1"></i>
                        <i className="ri-star-fill text-dark mr-1"></i>
                        <i className="ri-star-fill text-dark mr-1"></i>
                        <i className="ri-star-fill text-dark mr-1"></i>
                      </div>
                      <div className="stars">
                        <i className="ri-star-fill mr-1 text-muted opacity-25"></i>
                        <i className="ri-star-fill mr-1 text-muted opacity-25"></i>
                        <i className="ri-star-fill mr-1 text-muted opacity-25"></i>
                        <i className="ri-star-fill mr-1 text-muted opacity-25"></i>
                        <i className="ri-star-fill mr-1 text-muted opacity-25"></i>
                      </div>
                    </div>{" "}
                    <div className="text-muted small">
                      20th September 2020 by DaveD
                    </div>
                  </div>
                  <p className="fw-bold mb-2">Great fit, great price</p>
                  <p className="fs-7">
                    Worth buying this for value for money. But be warned: get
                    one size larger as the medium is closer to small medium!
                  </p>
                </div>
                <div className="col-12 col-lg-6 col-xxl-4">
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    {/* <!-- Review Stars Small--> */}
                    <div className="rating position-relative d-table">
                      <div
                        className="position-absolute stars"
                        style={{ width: " 40%" }}>
                        <i className="ri-star-fill text-dark mr-1"></i>
                        <i className="ri-star-fill text-dark mr-1"></i>
                        <i className="ri-star-fill text-dark mr-1"></i>
                        <i className="ri-star-fill text-dark mr-1"></i>
                        <i className="ri-star-fill text-dark mr-1"></i>
                      </div>
                      <div className="stars">
                        <i className="ri-star-fill mr-1 text-muted opacity-25"></i>
                        <i className="ri-star-fill mr-1 text-muted opacity-25"></i>
                        <i className="ri-star-fill mr-1 text-muted opacity-25"></i>
                        <i className="ri-star-fill mr-1 text-muted opacity-25"></i>
                        <i className="ri-star-fill mr-1 text-muted opacity-25"></i>
                      </div>
                    </div>{" "}
                    <div className="text-muted small">
                      18th September 2020 by Sandra K
                    </div>
                  </div>
                  <p className="fw-bold mb-2">Not worth the money</p>
                  <p className="fs-7">
                    Loose and poor stiching on the sides. Won&#x27;t buy this
                    again.
                  </p>
                </div>
                <div className="col-12 col-lg-6 col-xxl-4">
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    {/* <!-- Review Stars Small--> */}
                    <div className="rating position-relative d-table">
                      <div
                        className="position-absolute stars"
                        style={{ width: " 90%" }}>
                        <i className="ri-star-fill text-dark mr-1"></i>
                        <i className="ri-star-fill text-dark mr-1"></i>
                        <i className="ri-star-fill text-dark mr-1"></i>
                        <i className="ri-star-fill text-dark mr-1"></i>
                        <i className="ri-star-fill text-dark mr-1"></i>
                      </div>
                      <div className="stars">
                        <i className="ri-star-fill mr-1 text-muted opacity-25"></i>
                        <i className="ri-star-fill mr-1 text-muted opacity-25"></i>
                        <i className="ri-star-fill mr-1 text-muted opacity-25"></i>
                        <i className="ri-star-fill mr-1 text-muted opacity-25"></i>
                        <i className="ri-star-fill mr-1 text-muted opacity-25"></i>
                      </div>
                    </div>{" "}
                    <div className="text-muted small">
                      16th September 2020 by MikeS
                    </div>
                  </div>
                  <p className="fw-bold mb-2">Decent for the price</p>
                  <p className="fs-7">
                    I buy these often as they are good quality and value for
                    money.
                  </p>
                </div>
                <div className="col-12 col-lg-6 col-xxl-4">
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    {/* <!-- Review Stars Small--> */}
                    <div className="rating position-relative d-table">
                      <div
                        className="position-absolute stars"
                        style={{ width: " 85%" }}>
                        <i className="ri-star-fill text-dark mr-1"></i>
                        <i className="ri-star-fill text-dark mr-1"></i>
                        <i className="ri-star-fill text-dark mr-1"></i>
                        <i className="ri-star-fill text-dark mr-1"></i>
                        <i className="ri-star-fill text-dark mr-1"></i>
                      </div>
                      <div className="stars">
                        <i className="ri-star-fill mr-1 text-muted opacity-25"></i>
                        <i className="ri-star-fill mr-1 text-muted opacity-25"></i>
                        <i className="ri-star-fill mr-1 text-muted opacity-25"></i>
                        <i className="ri-star-fill mr-1 text-muted opacity-25"></i>
                        <i className="ri-star-fill mr-1 text-muted opacity-25"></i>
                      </div>
                    </div>{" "}
                    <div className="text-muted small">
                      14th September 2020 by Frankie
                    </div>
                  </div>
                  <p className="fw-bold mb-2">Great little T</p>
                  <p className="fs-7">
                    Wore this to my local music festival - went down well.
                  </p>
                </div>
                <div className="col-12 col-lg-6 col-xxl-4">
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    {/* <!-- Review Stars Small--> */}
                    <div className="rating position-relative d-table">
                      <div
                        className="position-absolute stars"
                        style={{ width: " 70%" }}>
                        <i className="ri-star-fill text-dark mr-1"></i>
                        <i className="ri-star-fill text-dark mr-1"></i>
                        <i className="ri-star-fill text-dark mr-1"></i>
                        <i className="ri-star-fill text-dark mr-1"></i>
                        <i className="ri-star-fill text-dark mr-1"></i>
                      </div>
                      <div className="stars">
                        <i className="ri-star-fill mr-1 text-muted opacity-25"></i>
                        <i className="ri-star-fill mr-1 text-muted opacity-25"></i>
                        <i className="ri-star-fill mr-1 text-muted opacity-25"></i>
                        <i className="ri-star-fill mr-1 text-muted opacity-25"></i>
                        <i className="ri-star-fill mr-1 text-muted opacity-25"></i>
                      </div>
                    </div>{" "}
                    <div className="text-muted small">
                      20th September 2020 by Kevin
                    </div>
                  </div>
                  <p className="fw-bold mb-2">Great for the BBQ</p>
                  <p className="fs-7">
                    Bought this on the off chance it would work well with my
                    skinny jeans, was a great decision. Would recommend.
                  </p>
                </div>
                <div className="col-12 col-lg-6 col-xxl-4">
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    {/* <!-- Review Stars Small--> */}
                    <div className="rating position-relative d-table">
                      <div
                        className="position-absolute stars"
                        style={{ width: " 20%" }}>
                        <i className="ri-star-fill text-dark mr-1"></i>
                        <i className="ri-star-fill text-dark mr-1"></i>
                        <i className="ri-star-fill text-dark mr-1"></i>
                        <i className="ri-star-fill text-dark mr-1"></i>
                        <i className="ri-star-fill text-dark mr-1"></i>
                      </div>
                      <div className="stars">
                        <i className="ri-star-fill mr-1 text-muted opacity-25"></i>
                        <i className="ri-star-fill mr-1 text-muted opacity-25"></i>
                        <i className="ri-star-fill mr-1 text-muted opacity-25"></i>
                        <i className="ri-star-fill mr-1 text-muted opacity-25"></i>
                        <i className="ri-star-fill mr-1 text-muted opacity-25"></i>
                      </div>
                    </div>{" "}
                    <div className="text-muted small">
                      20th September 2020 by Holly
                    </div>
                  </div>
                  <p className="fw-bold mb-2">
                    Nothing special but it&#x27;s okay
                  </p>
                  <p className="fs-7">
                    It&#x27;s a t-shirt. What can I say, it does the job.
                  </p>
                </div>
              </div>
              {/* <!-- / Reviews--> */}

              {/* <!-- Review Pagination--> */}
              <div className="d-flex flex-column f-w-44 mx-auto my-5 text-center">
                <small className="text-muted">Showing 6 of 105 reviews</small>
                <div className="progress f-h-1 mt-3">
                  <div
                    className="progress-bar bg-dark"
                    role="progressbar"
                    style={{ width: " 25%" }}
                    aria-valuenow="25"
                    aria-valuemin="0"
                    aria-valuemax="100"></div>
                </div>
                <NavLink
                  to="#"
                  className="btn btn-outline-dark btn-sm mt-5 align-self-center py-3 px-4 border-2">
                  Load More
                </NavLink>
              </div>
              {/* <!-- / Review Pagination--> */}
            </div>
            {/* <!-- / Reviews--> */}
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default ProductDetail;
