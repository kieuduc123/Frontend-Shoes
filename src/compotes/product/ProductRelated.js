import React, { useEffect, useState } from "react";
import Api from "sever/Api";
import url from "sever/url";
import { NavLink, useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const ProductRelated = () => {
  const { id } = useParams();
  const [related, setRelated] = useState([]);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const relatedProduct = async () => {
    try {
      const rs = await Api.get(url.PRODUCT.RELATED + `?id=${id}`);
      console.log("product-related", rs);
      setRelated(rs.data);
    } catch (error) {
      console.log("loi roi");
    }
  };
  useEffect(() => {
    relatedProduct();
  }, id);
  return (
    <Swiper spaceBetween={50} slidesPerView={4} Autoplay="true">
      <div className="swiper-wrapper">
        {related.map((i, k) => {
          return (
            <SwiperSlide key={k}>
              {/* <!-- Card Product--> */}
              <div className="card border border-transparent position-relative overflow-hidden h-100 transparent">
                <div className="card-img position-relative">
                  <div className="card-badges">
                    <span className="badge badge-card">
                      <span className="f-w-2 f-h-2 bg-danger rounded-circle d-block me-1"></span>{" "}
                      Sale
                    </span>
                  </div>
                  <span className="position-absolute top-0 end-0 p-2 z-index-20 text-muted">
                    <i className="ri-heart-line"></i>
                  </span>
                  <picture className="position-relative overflow-hidden d-block bg-light">
                    <img
                      className="w-100 img-fluid position-relative z-index-10"
                      title=""
                      src={i.thumbnail}
                      alt=""
                    />
                  </picture>
                  <div className="position-absolute start-0 bottom-0 end-0 z-index-50 p-2">
                    <NavLink
                      className="btn btn-quick-add"
                      to={`/products/${i.id}`}>
                      By Now
                    </NavLink>
                  </div>
                </div>
                <div className="card-body px-0">
                  <a
                    className="text-decoration-none link-cover"
                    href="./product.html">
                    {i.name}
                  </a>
                  <small className="text-muted d-block">
                    4 colours, 10 sizes
                  </small>
                  <p className="mt-2 mb-0 small">
                    <s className="text-muted">$198.66</s>{" "}
                    <span className="text-danger">${i.price}</span>
                  </p>
                </div>
              </div>
              {/* <!--/ Card Product--> */}
            </SwiperSlide>
          );
        })}

        {/* <!--/ Card Product--> */}
      </div>
      <div className="swiper-prev top-50  start-0 z-index-30 cursor-pointer transition-all bg-white px-3 py-4 position-absolute z-index-30 top-50 start-0 mt-n8 d-flex justify-content-center align-items-center opacity-50-hover">
        <i className="ri-arrow-left-s-line ri-lg"></i>
      </div>
      <div className="swiper-next top-50 end-0 z-index-30 cursor-pointer transition-all bg-white px-3 py-4 position-absolute z-index-30 top-50 end-0 mt-n8 d-flex justify-content-center align-items-center opacity-50-hover">
        <i className="ri-arrow-right-s-line ri-lg"></i>
      </div>
    </Swiper>
  );
};

export default ProductRelated;
