import React, { Fragment } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { NavLink } from 'react-router-dom';


const HomePage = () => {
    return (
        <Fragment>
            <div classNameName="mt-0 overflow-hidden ">
                
        <section className="vh-75 vh-lg-60  container-fluid rounded overflow-hidden" data-aos="fade-in">
        <div
                            className="swiper-container overflow-hidden overflow-lg-visible"
                            spaceBetween={25}
                            slidesPerView={4}
        centeredSlides={true}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
         navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
            >
                        <div className=''>
              <div className="swiper-wrapper slider-banner">
            
            
                <SwiperSlide className="swiper-slide position-relative h-100 w-100">
                  <div className="w-100 h-100 overflow-hidden position-absolute z-index-1 top-0 start-0 end-0 bottom-0">
                    <div className="w-100 h-100 bg-img-cover bg-pos-center-center overflow-hidden" data-swiper-parallax="-100"
                    style={{ willChange: "transform", backgroundImage: `url(./assets/images/banners/banner-1.jpg)`}}>
                    </div>
                  </div>
                  <div
                    className="container position-relative z-index-10 d-flex h-100  align-items-start flex-column justify-content-center">
                    <p className="title-small text-white opacity-75 mb-0" data-swiper-parallax="-100">Everything You Need</p>
                    <h2 className="display-3 tracking-wide fw-bold text-uppercase tracking-wide text-white" data-swiper-parallax="100">
                      <span className="text-outline-light">Summer</span> Essentials</h2>
                    <div data-swiper-parallax-y="-25">
                      <NavLink to="/products" className="btn btn-psuedo text-white" role="button">Shop New Arrivals</NavLink>
                    </div>
                  </div>
                </SwiperSlide>
            
                        </div>
                          </div>
            
              <div className="swiper-pagination swiper-pagination-bullet-light"></div>
            
                    </div>
                    

                </section>

                 <div className="brand-section container-fluid" data-aos="fade-in">
            <div className="bg-overlay-sides-white-to-transparent bg-white py-5 py-md-7">
                <section className="marquee marquee-hover-pause">
                    <div className="marquee-body">
                        <div className="marquee-section animation-marquee-50">
                            <div className="mx-3 mx-lg-5 f-w-24">
                                <NavLink className="d-block" to="/products">
                                    <picture>
                                        <img className="img-fluid d-table mx-auto" src="./assets/images/logos/logo-1.svg" alt=""/>
                                    </picture>
                                </NavLink >
                            </div>
                            <div className="mx-3 mx-lg-5 f-w-24">
                                <NavLink className="d-block" to="/products">
                                    <picture>
                                        <img className="img-fluid d-table mx-auto" src="./assets/images/logos/logo-2.svg" alt=""/>
                                    </picture>
                                </NavLink>
                            </div>
                            <div className="mx-3 mx-lg-5 f-w-24">
                                <NavLink className="d-block" to="/products">
                                    <picture>
                                        <img className="img-fluid d-table mx-auto" src="./assets/images/logos/logo-3.svg" alt=""/>
                                    </picture>
                                </NavLink>
                            </div>
                            <div className="mx-3 mx-lg-5 f-w-24">
                                <NavLink className="d-block" to="/products">
                                    <picture>
                                        <img className="img-fluid d-table mx-auto" src="./assets/images/logos/logo-4.svg" alt=""/>
                                    </picture>
                                </NavLink>
                            </div>
                            <div className="mx-3 mx-lg-5 f-w-24">
                                <NavLink className="d-block" to="/products">
                                    <picture>
                                        <img className="img-fluid d-table mx-auto" src="./assets/images/logos/logo-5.svg" alt=""/>
                                    </picture>
                                </NavLink >
                            </div>
                            <div className="mx-3 mx-lg-5 f-w-24">
                                <NavLink className="d-block" to="/products">
                                    <picture>
                                        <img className="img-fluid d-table mx-auto" src="./assets/images/logos/logo-6.svg" alt=""/>
                                    </picture>
                                </NavLink>
                            </div>
                            <div className="mx-3 mx-lg-5 f-w-24">
                                <NavLink className="d-block" to="/products">
                                    <picture>
                                        <img className="img-fluid d-table mx-auto" src="./assets/images/logos/logo-7.svg" alt=""/>
                                    </picture>
                                </NavLink>
                            </div>
                            <div className="mx-3 mx-lg-5 f-w-24">
                                <NavLink className="d-block" to="/products">
                                    <picture>
                                        <img className="img-fluid d-table mx-auto" src="./assets/images/logos/logo-8.svg" alt=""/>
                                    </picture>
                                </NavLink>
                            </div>
                            <div className="mx-3 mx-lg-5 f-w-24">
                                <NavLink className="d-block" to="/products">
                                    <picture>
                                        <img className="img-fluid d-table mx-auto" src="./assets/images/logos/logo-9.svg" alt=""/>
                                    </picture>
                                </NavLink >
                            </div>
                        </div>
                        <div className="marquee-section animation-marquee-50">
                            <div className="mx-5 f-w-24">
                                <NavLink className="d-block" to="/products">
                                    <picture>
                                        <img className="img-fluid d-table mx-auto" src="./assets/images/logos/logo-1.svg" alt=""/>
                                    </picture>
                                </NavLink >
                            </div>
                            <div className="mx-5 f-w-24">
                                <NavLink className="d-block" to="/products">
                                    <picture>
                                        <img className="img-fluid d-table mx-auto" src="./assets/images/logos/logo-2.svg" alt=""/>
                                    </picture>
                                </NavLink >
                            </div>
                            <div className="mx-5 f-w-24">
                                <NavLink className="d-block" to="/products">
                                    <picture>
                                        <img className="img-fluid d-table mx-auto" src="./assets/images/logos/logo-3.svg" alt=""/>
                                    </picture>
                                </NavLink >
                            </div>
                            <div className="mx-5 f-w-24">
                                <NavLink className="d-block" to="/products">
                                    <picture>
                                        <img className="img-fluid d-table mx-auto" src="./assets/images/logos/logo-4.svg" alt=""/>
                                    </picture>
                                </NavLink >
                            </div>
                            <div className="mx-5 f-w-24">
                                <NavLink className="d-block" to="/products">
                                    <picture>
                                        <img className="img-fluid d-table mx-auto" src="./assets/images/logos/logo-5.svg" alt=""/>
                                    </picture>
                                </NavLink>
                            </div>
                            <div className="mx-5 f-w-24">
                                <NavLink className="d-block" to="/products">
                                    <picture>
                                        <img className="img-fluid d-table mx-auto" src="./assets/images/logos/logo-6.svg" alt=""/>
                                    </picture>
                                </NavLink >
                            </div>
                            <div className="mx-5 f-w-24">
                                <NavLink className="d-block" to="/products">
                                    <picture>
                                        <img className="img-fluid d-table mx-auto" src="./assets/images/logos/logo-7.svg" alt=""/>
                                    </picture>
                                </NavLink >
                            </div>
                            <div className="mx-5 f-w-24">
                                <NavLink className="d-block" to="/products">
                                    <picture>
                                        <img className="img-fluid d-table mx-auto" src="./assets/images/logos/logo-8.svg" alt=""/>
                                    </picture>
                                </NavLink >
                            </div>
                            <div className="mx-5 f-w-24">
                                <NavLink className="d-block" to="/products">
                                    <picture>
                                        <img className="img-fluid d-table mx-auto" src="./assets/images/logos/logo-9.svg" alt=""/>
                                    </picture>
                                </NavLink >
                            </div>
                        </div>
                    </div>
                </section>
            </div>
                </div> 
                 <div className="container-fluid">
           
            <div className="m-0">
                   
                        <Swiper
                            className="swiper-container overflow-hidden overflow-lg-visible"
                            spaceBetween={25}
                            slidesPerView={4}
        centeredSlides={true}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
         navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
            >
                      <div className="">
                          <SwiperSlide className="swiper-slide align-self-stretch bg-transparent h-auto">
                            <div className="me-xl-n4 me-xxl-n5" data-aos="fade-up" data-aos-delay="000">
                                <picture className="d-block mb-4 img-clip-shape-one">
                                    <img className="w-100" title="" src="./assets/images/categories/products-7.jpg" alt="HTML Bootstrap Template by Pixel Rocket"/>
                                </picture>
                                <p className="title-small mb-2 text-muted">Must Haves</p>
                                <h4 className="lead fw-bold">Premium Essentials</h4>
                                <NavLink to="/products" className="btn btn-psuedo align-self-start">Shop Now</NavLink>
                            </div>
                          </SwiperSlide>
                          <SwiperSlide className="swiper-slide align-self-stretch bg-transparent h-auto">
                            <div className="me-xl-n4 me-xxl-n5" data-aos="fade-up" data-aos-delay="100">
                                <picture className="d-block mb-4 img-clip-shape-one">
                                    <img className="w-100" title="" src="./assets/images/categories/products-2.jpg" alt="HTML Bootstrap Template by Pixel Rocket"/>
                                </picture>
                                <p className="title-small mb-2 text-muted">Curated Selection</p>
                                <h4 className="lead fw-bold">Our Favourites</h4>
                                <NavLink to="/products" className="btn btn-psuedo align-self-start">Shop Now</NavLink>
                            </div>
                          </SwiperSlide>
                          <SwiperSlide className="swiper-slide align-self-stretch bg-transparent h-auto">
                            <div className="me-xl-n4 me-xxl-n5" data-aos="fade-up" data-aos-delay="200">
                                <picture className="d-block mb-4 img-clip-shape-one">
                                    <img className="w-100" title="" src="./assets/images/categories/products-3.jpg" alt="HTML Bootstrap Template by Pixel Rocket"/>
                                </picture>
                                <p className="title-small mb-2 text-muted">Streetwear Basics</p>
                                <h4 className="lead fw-bold">T-Shirts &amp; Shirts</h4>
                                <NavLink to="/products" className="btn btn-psuedo align-self-start">Shop Now</NavLink>
                            </div>
                          </SwiperSlide>
                          <SwiperSlide className="swiper-slide align-self-stretch bg-transparent h-auto">
                            <div className="me-xl-n4 me-xxl-n5" data-aos="fade-up" data-aos-delay="300">
                                
                                <p className="title-small mb-2 text-muted">Waterproof &amp; Lightweight</p>
                                <h4 className="lead fw-bold">Jackets &amp; Coats</h4>
                                <NavLink to="/products" className="btn btn-psuedo align-self-start">Shop Now</NavLink>
                            </div>
                          </SwiperSlide>
                          <SwiperSlide className="swiper-slide align-self-stretch bg-transparent h-auto">
                            <div className="me-xl-n4 me-xxl-n5" data-aos="fade-up" data-aos-delay="400">
                                
                                <p className="title-small mb-2 text-muted">Keep Warm</p>
                                <h4 className="lead fw-bold">Hats &amp; Beanies</h4>
                                <NavLink to="/products" className="btn btn-psuedo align-self-start">Shop Now</NavLink>
                            </div>
                          </SwiperSlide>
                          <SwiperSlide className="swiper-slide align-self-stretch bg-transparent h-auto">
                            <div className="me-xl-n4 me-xxl-n5" data-aos="fade-up" data-aos-delay="500">
                                
                                <p className="title-small mb-2 text-muted">20% Off</p>
                                <h4 className="lead fw-bold">Summer Sale</h4>
                                <NavLink to="/products" className="btn btn-psuedo align-self-start">Shop Now</NavLink>
                            </div>
                          </SwiperSlide>
                          <SwiperSlide className="swiper-slide align-self-stretch bg-transparent h-auto">
                            <div className="me-xl-n4 me-xxl-n5" data-aos="fade-up" data-aos-delay="600">
                               
                                <p className="title-small mb-2 text-muted">Just Arrived</p>
                                <h4 className="lead fw-bold">Latest Kicks</h4>
                                <NavLink to="/products" className="btn btn-psuedo align-self-start">Shop Now</NavLink>
                            </div>
                          </SwiperSlide>
                          <SwiperSlide className="swiper-slide align-self-stretch bg-transparent h-auto">
                            <div className="me-xl-n4 me-xxl-n5" data-aos="fade-up" data-aos-delay="700">
                            
                                <p className="title-small mb-2 text-muted">Accessories</p>
                                <h4 className="lead fw-bold">Bags &amp; Rugsacks</h4>
                                <NavLink to="/products" className="btn btn-psuedo align-self-start">Shop Now</NavLink>
                            </div>
                          </SwiperSlide>
                            </div>
                    </Swiper>
                <svg width="0" height="0">
                  <defs>
                  <clipPath id="svg-slanted-one" clipPathUnits="objectBoundingBox">
                      <path d="M0.822,1 H0.016 a0.015,0.015,0,0,1,-0.016,-0.015 L0.158,0.015 A0.016,0.015,0,0,1,0.173,0 L0.984,0 a0.016,0.015,0,0,1,0.016,0.015 L0.837,0.985 A0.016,0.015,0,0,1,0.822,1"></path>
                  </clipPath>
                  </defs>
                        </svg>
                    </div>
         
            <div className="position-relative row my-lg-7 pt-5 pt-lg-0 g-8">
                <div className="bg-text bottom-0 start-0 end-0" data-aos="fade-up">
                    <h2 className="bg-text-title opacity-10"><span className="text-outline-dark">Old</span>Skool</h2>
                </div>
                <div className="col-12 col-md-6 position-relative z-index-20 mb-7 mb-lg-0" data-aos="fade-right">
                    <p className="text-muted title-small">Welcome</p>
                    <h3 className="display-3 fw-bold mb-5"><span className="text-outline-dark">OldSkool</span> - streetwear & footwear specialists</h3>
                    <p className="lead">We are OldSkool, NavLink leading supplier of global streetwear brands, including names such as <NavLink to="/products">Stussy</NavLink>, <NavLink to="/products">Carhartt</NavLink>, <NavLink to="/products">Gramicci</NavLink>, <NavLink to="/products">Afends</NavLink> and many more.</p>
                    <p className="lead">With worldwide shipping and unbeatable prices - now's NavLink great time to pick out something from our range.</p>
                    <NavLink to="/products" className="btn btn-psuedo" role="button">Shop New Arrivals</NavLink>
                </div>
                <div className="col-12 col-md-6 position-relative z-index-20 pe-0" data-aos="fade-left">
                   
                    <picture className="w-60 d-block me-8 mt-n10 shadow-lg border border-white border-4 position-relative z-index-20 ms-auto">
                        <img className="img-fluid" src="./assets/images/banners/banner-6.jpg" alt="HTML Bootstrap Template by Pixel Rocket"/>
                    </picture>
                    <picture className="w-50 d-block me-8 mt-n7 shadow-lg border border-white border-4 position-absolute top-0 end-0 z-index-0 ">
                        <img className="img-fluid" src="./assets/images/banners/banner-7.jpg" alt="HTML Bootstrap Template by Pixel Rocket"/>
                    </picture>
                </div>
            </div>
        
            <div className="pt-7 mb-5 mb-lg-10">
                <div className="row g-4">
                    <div className="col-12 col-xl-6 position-relative" data-aos="fade-right">
                       
                        <div className="position-absolute top-0 bottom-0 start-0 end-0 d-flex justify-content-center align-items-center z-index-20">
                            <div className="py-6 px-5 px-lg-10 text-center w-100">
                                <h2 className="display-1 mb-3 fw-bold text-white"><span className="text-outline-light">Flash</span> Sale</h2>
                                <p className="fs-5 fw-light text-white d-none d-md-block">Our yearly flash sale is now on! Grab yourself NavLink bargain from the world's leading streetwear brands.</p>
                                <NavLink to="/products" className="btn btn-psuedo text-white" role="button">Shop All Sale Items</NavLink>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-xl-6" data-aos="fade-left">
                        <div className="row g-4 justify-content-end">
                            <div className="col-12 col-md-6 d-flex">
                                <div className="card position-relative overflow-hidden">
                                   
                                    <div className="card-overlay">
                                        <p className="lead fw-bolder mb-2">The Jordan DeltNavLink 2</p>
                                        <NavLink to="/products" className="btn btn-psuedo text-white py-2" role="button">Shop Kicks</NavLink>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 d-flex">
                                <div className="card position-relative overflow-hidden">
                                   
                                    <div className="card-overlay">
                                        <p className="lead fw-bolder mb-2">Latest Mens Shirts</p>
                                        <NavLink to="/products" className="btn btn-psuedo text-white py-2" role="button">Shop New</NavLink>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 d-flex">
                                <div className="card position-relative overflow-hidden">
                                   
                                    <div className="card-overlay">
                                        <p className="lead fw-bolder mb-2">KiiKii Osake Tees</p>
                                        <NavLink to="/products" className="btn btn-psuedo text-white py-2" role="button">Shop T-Shirts</NavLink>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 d-flex">
                                <div className="card position-relative overflow-hidden">
                                  
                                    <div className="card-overlay">
                                        <p className="lead fw-bolder mb-2">Multibuy Womens Shirts</p>
                                        <NavLink to="/products" className="btn btn-psuedo text-white py-2" role="button">Shop Sale Items</NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

          
            <div data-aos="fade-in">
              <h3 className="title-small text-muted text-center mb-3 mt-5"><i className="ri-instagram-line align-bottom"></i>
                #OLDSKOOL
            </h3>
            <div className="overflow-hidden">
                            <Swiper className="swiper-container swiper-overflow-visible"
                                spaceBetween={ 20}
                            slidesPerView={5}
        centeredSlides={true}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        //  navigation={true}
        modules={[Autoplay, Pagination, Navigation]}>
                
                <div className="mb-5">
            
                 
                  <SwiperSlide className="swiper-slide flex-column">
                    <picture>
                      <img
                        className="rounded shadow-sm img-fluid"
                        data-zoomable
                        src="https://images.unsplash.com/photo-1586396874197-b8fc676a5187?ixid&#x3D;MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib&#x3D;rb-1.2.1&amp;auto&#x3D;format&amp;fit&#x3D;crop&amp;w&#x3D;700&amp;h&#x3D;700"
                        title=""
                        alt=""/>
                    </picture>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide flex-column">
                    <picture>
                      <img
                        className="rounded shadow-sm img-fluid"
                        data-zoomable
                        src="https://images.unsplash.com/photo-1538329972958-465d6d2144ed?ixid&#x3D;MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib&#x3D;rb-1.2.1&amp;auto&#x3D;format&amp;fit&#x3D;crop&amp;w&#x3D;700&amp;h&#x3D;700"
                        title=""
                        alt=""/>
                    </picture>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide flex-column">
                    <picture>
                      <img
                        className="rounded shadow-sm img-fluid"
                        data-zoomable
                        src="https://images.unsplash.com/photo-1503341338985-c0477be52513?ixlib&#x3D;rb-1.2.1&amp;ixid&#x3D;MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto&#x3D;format&amp;fit&#x3D;crop&amp;w&#x3D;700&amp;h&#x3D;700"
                        title=""
                        alt=""/>
                    </picture>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide flex-column">
                    <picture>
                      <img
                        className="rounded shadow-sm img-fluid"
                        data-zoomable
                        src="https://images.unsplash.com/photo-1566677914817-56426959ae9c?ixid&#x3D;MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib&#x3D;rb-1.2.1&amp;auto&#x3D;format&amp;fit&#x3D;crop&amp;w&#x3D;700&amp;h&#x3D;700"
                        title=""
                        alt=""/>
                    </picture>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide flex-column">
                    <picture>
                      <img
                        className="rounded shadow-sm img-fluid"
                        data-zoomable
                        src="https://images.unsplash.com/photo-1582657233895-0f37a3f150c0?ixlib&#x3D;rb-1.2.1&amp;ixid&#x3D;MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto&#x3D;format&amp;fit&#x3D;crop&amp;w&#x3D;700&amp;h&#x3D;700"
                        title=""
                        alt=""/>
                    </picture>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide flex-column">
                    <picture>
                      <img
                        className="rounded shadow-sm img-fluid"
                        data-zoomable
                        src="https://images.unsplash.com/photo-1550246140-5119ae4790b8?ixlib&#x3D;rb-1.2.1&amp;ixid&#x3D;MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto&#x3D;format&amp;fit&#x3D;crop&amp;w&#x3D;700&amp;h&#x3D;700"
                        title=""
                        alt=""/>
                    </picture>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide flex-column">
                    <picture>
                      <img
                        className="rounded shadow-sm img-fluid"
                        data-zoomable
                        src="https://images.unsplash.com/photo-1520048480367-7a6a4b6efb2a?ixid&#x3D;MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib&#x3D;rb-1.2.1&amp;auto&#x3D;format&amp;fit&#x3D;crop&amp;w&#x3D;700&amp;h&#x3D;700"
                        title=""
                        alt=""/>
                    </picture>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide flex-column">
                    <picture>
                      <img
                        className="rounded shadow-sm img-fluid"
                        data-zoomable
                        src="https://images.unsplash.com/photo-1550246140-29f40b909e5a?ixlib&#x3D;rb-1.2.1&amp;ixid&#x3D;MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto&#x3D;format&amp;fit&#x3D;crop&amp;w&#x3D;700&amp;h&#x3D;700"
                        title=""
                        alt=""/>
                    </picture>
                  </SwiperSlide>
                
            
                </div>
              </Swiper>
            </div>
            </div>
         

        </div>
  </div >                  
 </Fragment>
   
    );
};

export default HomePage ;