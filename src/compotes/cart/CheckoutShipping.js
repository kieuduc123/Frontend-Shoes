import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import NavBarCart from '../Nagition/NavBarCart';
const CheckoutShipping = () => {
    return (
        <Fragment>
             <section className="mt-0  vh-lg-100">
        {/* <!-- Page Content Goes Here --> */}
        <div className="container">
            <div className="row g-0 vh-lg-100">
                <div className="col-lg-7 pt-5 pt-lg-10">
                    <div className="pe-lg-5">
                        {/* <!-- Logo--> */}
                        <NavLink className="navbar-brand fw-bold fs-3 flex-shrink-0 mx-0 px-0" to="./index.html">
                                <div className="d-flex align-items-center">
                                    <svg className="f-w-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 77.53 72.26"><path d="M10.43,54.2h0L0,36.13,10.43,18.06,20.86,0H41.72L10.43,54.2Zm67.1-7.83L73,54.2,68.49,62,45,48.47,31.29,72.26H20.86l-5.22-9L52.15,0H62.58l5.21,9L54.06,32.82,77.53,46.37Z" fill="currentColor" fill-rule="evenodd"/></svg>
                                </div>
                            </NavLink >
                        {/* <!-- / Logo--> */}
                       <NavBarCart></NavBarCart>
                                <div className="mt-5">
                            {/* <!-- Checkout Information Summary --> */}
                            <ul className="list-group mb-5 d-none d-lg-block rounded-0">
                                <li className="list-group-item d-flex justify-content-between align-items-center">
                                    <div className="d-flex justify-content-start align-items-center">
                                        <span className="text-muted small me-2 f-w-36 fw-bolder">Contact</span>
                                        <span className="small">test@email.com</span>
                                    </div>
                                    <NavLink to="./checkout.html" className="text-muted small" role="button">Change</NavLink>
                                </li>
                                    </ul>
                                    {/* <!-- / Checkout Information Summary--> */}
                            
                            {/* <!-- Checkout Panel Information--> */}
                            <h3 className="fs-5 fw-bolder mb-4 border-bottom pb-4">Shipping Method</h3>
                            
                            {/* <!-- Shipping Option--> */}
                            <div className="form-check form-group form-check-custom form-radio-custom form-radio-highlight mb-3">
                              <input className="form-check-input" type="radio" name="checkoutShippingMethod" id="checkoutShippingMethodOne" checked/>
                              <label className="form-check-label" for="checkoutShippingMethodOne">
                                <span className="d-flex justify-content-between align-items-start">
                                  <span>
                                    <span className="mb-0 fw-bolder d-block">Click & Collect Shipping</span>
                                    <small className="fw-bolder">Collect from our London store</small>
                                  </span>
                                  <span className="small fw-bolder text-uppercase">Free</span>
                                </span>
                              </label>
                            </div>
                            
                            {/* <!-- Shipping Option--> */}
                            <div className="form-check form-group form-check-custom form-radio-custom form-radio-highlight mb-3">
                              <input className="form-check-input" type="radio" name="checkoutShippingMethod" id="checkoutShippingMethodTwo"/>
                              <label className="form-check-label" for="checkoutShippingMethodTwo">
                                <span className="d-flex justify-content-between align-items-start">
                                  <span>
                                    <span className="mb-0 fw-bolder d-block">UPS Next Day</span>
                                    <small className="fw-bolder">For all orders placed before 1pm Monday to Thursday</small>
                                  </span>
                                  <span className="small fw-bolder text-uppercase">$19.99</span>
                                </span>
                              </label>
                            </div>
                            
                            {/* <!-- Shipping Option--> */}
                            <div className="form-check form-group form-check-custom form-radio-custom form-radio-highlight mb-3">
                              <input className="form-check-input" type="radio" name="checkoutShippingMethod" id="checkoutShippingMethodThree"/>
                              <label className="form-check-label" for="checkoutShippingMethodThree">
                                <span className="d-flex justify-content-between align-items-start">
                                  <span>
                                    <span className="mb-0 fw-bolder d-block">DHL Priority Service</span>
                                    <small className="fw-bolder">24 - 36 hour delivery</small>
                                  </span>
                                  <span className="small fw-bolder text-uppercase">$9.99</span>
                                </span>
                              </label>
                            </div>
                            
                            <div className="pt-5 mt-5 pb-5 border-top d-flex flex-column flex-md-row justify-content-between align-items-center">
                                        <NavLink to="/checkout" className="btn ps-md-0 btn-link fw-bolder w-100 w-md-auto mb-2 mb-md-0" role="button">Back to information</NavLink>
                                        
                              <NavLink to="/checkout-payment" className="btn btn-dark w-100 w-md-auto" role="button">Proceed to payment</NavLink >
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-lg-5 bg-light pt-lg-10 aside-checkout pb-5 pb-lg-0 my-5 my-lg-0">
                    <div className="p-4 py-lg-0 pe-lg-0 ps-lg-5">
                        <div className="pb-3">
                            {/* <!-- Cart Item--> */}
                            <div className="row mx-0 py-4 g-0 border-bottom">
                                <div className="col-2 position-relative">
                                        <span className="checkout-item-qty">3</span>
                                    <picture className="d-block border">
                                        <img className="img-fluid" src="./assets/images/products/product-cart-1.jpg" alt="HTML Bootstrap Template by Pixel Rocket"/>
                                    </picture>
                                </div>
                                <div className="col-9 offset-1">
                                    <div>
                                        <h6 className="justify-content-between d-flex align-items-start mb-2">
                                            Nike Air VaporMax 2021
                                            <i className="ri-close-line ms-3"></i>
                                        </h6>
                                        <span className="d-block text-muted fw-bolder text-uppercase fs-9">Size: 9 / Qty: 1</span>
                                    </div>
                                    <p className="fw-bolder text-end text-muted m-0">$85.00</p>
                                </div>
                                    </div>
                                    {/* <!-- / Cart Item-->
                            <!-- Cart Item--> */}
                            <div className="row mx-0 py-4 g-0 border-bottom">
                                <div className="col-2 position-relative">
                                        <span className="checkout-item-qty">3</span>
                                    <picture className="d-block border">
                                        <img className="img-fluid" src="./assets/images/products/product-cart-2.jpg" alt="HTML Bootstrap Template by Pixel Rocket"/>
                                    </picture>
                                </div>
                                <div className="col-9 offset-1">
                                    <div>
                                        <h6 className="justify-content-between d-flex align-items-start mb-2">
                                            Nike ZoomX Vaporfly
                                            <i className="ri-close-line ms-3"></i>
                                        </h6>
                                        <span className="d-block text-muted fw-bolder text-uppercase fs-9">Size: 11 / Qty: 1</span>
                                    </div>
                                    <p className="fw-bolder text-end text-muted m-0">$125.00</p>
                                </div>
                                    </div>
                                    {/* <!-- / Cart Item--> */}
                        </div>
                        <div className="py-4 border-bottom">
                            <div className="d-flex justify-content-between align-items-center mb-2">
                                <p className="m-0 fw-bolder fs-6">Subtotal</p>
                                <p className="m-0 fs-6 fw-bolder">$422.99</p>
                            </div>
                            <div className="d-flex justify-content-between align-items-center ">
                                <p className="m-0 fw-bolder fs-6">Shipping</p>
                                <p className="m-0 fs-6 fw-bolder">$8.95</p>
                            </div>
                        </div>
                        <div className="py-4 border-bottom">
                            <div className="d-flex justify-content-between">
                                <div>
                                    <p className="m-0 fw-bold fs-5">Grand Total</p>
                                    <span className="text-muted small">Inc $45.89 sales tax</span>
                                </div>
                                <p className="m-0 fs-5 fw-bold">$422.99</p>
                            </div>
                        </div>
                        <div className="py-4">
                            <div className="input-group mb-0">
                                <input type="text" className="form-control" placeholder="Enter your coupon code"/>
                                <button className="btn btn-dark btn-sm px-4">Apply</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- /Page Content --> */}
    </section>
    {/* <!-- / Main Section--> */}


        </Fragment>
    );
};

export default CheckoutShipping;