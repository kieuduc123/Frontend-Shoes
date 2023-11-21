import React, { Fragment, useEffect, useRef, useState } from "react";
import Skeleton from "react-loading-skeleton";
import { NavLink } from "react-router-dom";
import Api from "../../sever/Api";
import url from "../../sever/url";
import SortSelect from "./SortSelect";
// import ProductList from "./product/ProductList";
const Products = () => {
  // const [data, setData] = useState([]);
  const [filter, setFilter] = useState([]);
  const [loading, setLoading] = useState(false);

  const [products, setProducts] = useState([]);
  const [sort, setSort] = useState("desc");
  // const [currentPage, setCurrentPage] = useState(1);
  // const [totalPages, setTotalPages] = useState(1);
  const fetchData = useRef()
   fetchData.current = async () => {
    try {
      setLoading(true)
      const response = await Api.get(`${url.BASE_URL}${url.PRODUCT.SORT_LIST}${sort}`);
      // setTotalPages(response.count_P);
        setProducts(await response.data);
        setLoading(false)
    } catch (error) {
      console.error(error);
     
    }
  }

  //Pagination
  // const fetchProducts = async (page) => {
  //   try {
  //     setLoading(true);
  //     const response = await fetch(`https://semester3shoprunner.azurewebsites.net/api/Product/Paginate?page=${page}&pageSize=7`);
  //     const data = await response.json();
  //     setProducts(data.new_List);
  //     setTotalPages(data.count_P);
  //   } catch (error) {
  //     console.error('Error fetching data:', error);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  // const handlePageChange = (page) => {
  //   setCurrentPage(page);
  // };
  useEffect(() => {
    fetchData.current();
    // fetchProducts(currentPage);
  }, [ sort]);
  // eslint-disable-next-line no-unused-vars
  const Loading = () => {
    return (
      <>
        <div className="col-lg-4">
          <Skeleton height={350}></Skeleton>
        </div>
        <div className="col-lg-4">
          <Skeleton height={350}></Skeleton>
        </div>
        <div className="col-lg-4">
          <Skeleton height={350}></Skeleton>
        </div>
      </>
    );
  };
  console.log("check products----", products);
  const updateList = products.filter((x) => x.category.name === filter);
  console.log("check updatelist", updateList);
  const ShowProducts = () => {
    return (
      <>
        <div className="d-flex justify-content-center mb-2 text-muted">
          <button
            className="btn btn-outline-dark text-muted"
            onClick={() => setFilter(products)}>
            All
          </button>
          <button
            className="btn btn-outline-dark text-muted"
            onClick={() => setFilter("Trendy")}>
            Trendy
          </button>
          <button
            className="btn btn-outline-dark text-muted"
            onClick={() => setFilter("Fashion")}>
            Fashion
          </button>
          <button
            className="btn btn-outline-dark text-muted"
            onClick={() => setFilter("Trending")}>
            Trending
          </button>
          {/* <button
            className="btn btn-outline-dark text-muted"
            onClick={() => setFilter("electronics")}>
            Electronics
          </button> */}
        </div>
      </>
    );
  };

  const testDate = updateList.length === 0 ? products : updateList;

  return (
    <Fragment>
      <section className="mt-0 ">
        <div
          className="py-10 bg-img-cover bg-overlay-dark position-relative overflow-hidden bg-pos-center-center rounded-0"
          style={{
            backgroundImage: `url(./assets/images/banners/banner-category-top.jpg)`,
          }}>
          <div
            className="container-fluid position-relative z-index-20"
            data-aos="fade-right"
            data-aos-delay="300">
            <h1 className="fw-bold display-6 mb-4 text-white">
              Latest Arrivals
            </h1>
            <div className="col-12 col-md-6">
              <p className="text-white mb-0 fs-5">
                When it's time to head out and get your Kicks on, have a look at
                our latest arrivals. Whether you're into Nike, Adidas, Dunks or
                New Balance, we really have something for everyone!
              </p>
            </div>
          </div>
        </div>
        {/* <!-- Category Top Banner --> */}

        <div className="container-fluid" data-aos="fade-in">
          {/* <!-- Category Toolbar--> */}
          <div className="d-flex justify-content-between items-center pt-5 pb-4 flex-column flex-lg-row">
            <div>
              <h1 className="fw-bold fs-3 mb-2">New Releases </h1>
              <p className="m-0 text-muted small">Showing 1 - 9 of 121</p>
              <nav aria-label="breadcrumb">
               <ShowProducts />
              </nav>
            </div>
            <div className="d-flex justify-content-end align-items-center mt-4 mt-lg-0 flex-column flex-md-row">
              {/* <!-- Filter Trigger--> */}
              <button
                className="btn bg-light p-3 me-md-3 d-flex align-items-center fs-7 lh-1 w-100 mb-2 mb-md-0 w-md-auto "
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasFilters"
                aria-controls="offcanvasFilters">
                <i className="ri-equalizer-line me-2"></i> Filters
              </button>
              {/* <!-- / Filter Trigger--> */}

              {/* <!-- Sort Options--> */}
              <SortSelect sort={sort} setSort={setSort} />
            </div>
          </div>
          {/* <!-- /Category Toolbar--> */}

          {/* <!-- Products--> */}
          <div className="row g-4">
          {loading ? (
            <Loading/>
          ) : (
         testDate.length > 0 && 
            testDate.map((product, index) => {
              return (
                <div className="col-12 col-sm-6 col-lg-4" key={index}>
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
                          className=" position-relative z-index-10 object-fit-cover "
                          style={{
                            height: "350px",
                            width: "300px",
                          }}
                          title=""
                          src={product.thumbnail}
                          alt=""
                        />
                      </picture>
                      <div className="position-absolute start-0 bottom-0 end-0 z-index-40 p-2">
                        <NavLink
                          className="btn btn-quick-add"
                          to={`/products/${product.id}`}>
                          By Now
                        </NavLink>
                      </div>
                    </div>
                    <div className="card-body px-0">
                      <NavLink
                        className="text-decoration-none link-cover"
                        to="/">
                        {product.name}
                      </NavLink>
                      <small className="text-muted d-block">
                      {product.qty} color, 10 sizes
                      </small>
                      <p className="mt-2 mb-0 small">
                        <s className="text-muted">$329.99</s>
                        <span className="text-danger">{product.price}</span>
                      </p>
                    </div>
                  </div>
               
                </div>
              );
            })
          )}
          </div>
          {/* <!-- / Products--> */}

          {/* <!-- Pagination--> */}
          {/* <div className="pagination">
        <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1} className="btn ">Previous</button>
        <span className="page">{` ${currentPage}...${totalPages}`}</span>
        <button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages} className="btn ">Next</button>
      </div> */}
        </div>

        {/* <!-- /Page Content --> */}
      </section>
      {/* <!-- Filters Offcanvas--> */}
      <div
        class="offcanvas offcanvas-end"
        tabindex="-1"
        id="offcanvasFilters"
        ariaLabelLedBy="offcanvasFiltersLabel">
        <div class="offcanvas-header pb-0 d-flex align-items-center">
          <h5 class="offcanvas-title" id="offcanvasFiltersLabel">
            Category Filters
          </h5>
          <button
            type="button"
            class="btn-close text-reset"
            // data-bs-dismiss="offcanvas"
            ariaLabel="Close"></button>
        </div>
        <div class="offcanvas-body">
          <div class="d-flex flex-column justify-content-between w-100 h-100">
            {/* <!-- Filters--> */}
            <div>
              {/* <!-- Price Filter --> */}
              <div class="py-4 widget-filter widget-filter-price border-top">
                <NavLink
                  class="small text-body text-decoration-none text-secondary-hover transition-all transition-all fs-6 fw-bolder d-block collapse-icon-chevron"
                  // data-bs-toggle="collapse"
                  to="#"
                  role="button"
                  // aria-expanded="true"
                  // aria-controls="filter-modal-price">
                  >
                  Price
                </NavLink>
                <div id="filter-modal-price" class="collapse show">
                  <div class="filter-price mt-6"></div>
                  <div class="d-flex justify-content-between align-items-center mt-7">
                    <div class="input-group mb-0 me-2 border">
                      <span class="input-group-text bg-transparent fs-7 p-2 text-muted border-0">
                        $
                      </span>
                      <input
                        type="number"
                        min="00"
                        max="1000"
                        step="1"
                        class="filter-min form-control-sm border flex-grow-1 text-muted border-0"
                      />
                    </div>
                    <div class="input-group mb-0 ms-2 border">
                      <span class="input-group-text bg-transparent fs-7 p-2 text-muted border-0">
                        $
                      </span>
                      <input
                        type="number"
                        min="00"
                        max="1000"
                        step="1"
                        class="filter-max form-control-sm flex-grow-1 text-muted border-0"
                      />
                    </div>
                  </div>{" "}
                </div>
              </div>
              {/* <!-- / Price Filter --> */}

              {/* <!-- Brands Filter --> */}
              <div class="py-4 widget-filter border-top">
                <a
                  class="small text-body text-decoration-none text-secondary-hover transition-all transition-all fs-6 fw-bolder d-block collapse-icon-chevron"
                  data-bs-toggle="collapse"
                  href="#filter-modal-brands"
                  role="button"
                  aria-expanded="true"
                  aria-controls="filter-modal-brands">
                  Brands
                </a>
                <div id="filter-modal-brands" class="collapse show">
                  <div class="input-group my-3 py-1">
                    <input
                      type="text"
                      class="form-control py-2 filter-search rounded"
                      placeholder="Search"
                      aria-label="Search"
                    />
                    <span class="input-group-text bg-transparent p-2 position-absolute top-10 end-0 border-0 z-index-20">
                      <i class="ri-search-2-line text-muted"></i>
                    </span>
                  </div>
                  <div class="simpLeBarWrapper">
                    <div class="filter-options" >
                      <div class="form-group form-check-custom mb-1">
                        <input
                          type="checkbox"
                          class="form-check-input"
                          id="filter-brands-modal-0"
                        />
                        <label
                          class="form-check-label fw-normal text-body flex-grow-1 d-flex align-items-center"
                          // for="filter-brands-modal-0"
                          >
                          Adidas <span class="text-muted ms-1 fs-9">(21)</span>
                        </label>
                      </div>{" "}
                      <div class="form-group form-check-custom mb-1">
                        <input
                          type="checkbox"
                          class="form-check-input"
                          id="filter-brands-modal-1"
                        />
                        <label
                          class="form-check-label fw-normal text-body flex-grow-1 d-flex align-items-center"
                          for="filter-brands-modal-1">
                          Asics <span class="text-muted ms-1 fs-9">(13)</span>
                        </label>
                      </div>{" "}
                      <div class="form-group form-check-custom mb-1">
                        <input
                          type="checkbox"
                          class="form-check-input"
                          id="filter-brands-modal-2"
                        />
                        <label
                          class="form-check-label fw-normal text-body flex-grow-1 d-flex align-items-center"
                          for="filter-brands-modal-2">
                          Canterbury{" "}
                          <span class="text-muted ms-1 fs-9">(18)</span>
                        </label>
                      </div>{" "}
                      <div class="form-group form-check-custom mb-1">
                        <input
                          type="checkbox"
                          class="form-check-input"
                          id="filter-brands-modal-3"
                        />
                        <label
                          class="form-check-label fw-normal text-body flex-grow-1 d-flex align-items-center"
                          for="filter-brands-modal-3">
                          Converse{" "}
                          <span class="text-muted ms-1 fs-9">(25)</span>
                        </label>
                      </div>{" "}
                      <div class="form-group form-check-custom mb-1">
                        <input
                          type="checkbox"
                          class="form-check-input"
                          id="filter-brands-modal-4"
                        />
                        <label
                          class="form-check-label fw-normal text-body flex-grow-1 d-flex align-items-center"
                          for="filter-brands-modal-4">
                          Donnay <span class="text-muted ms-1 fs-9">(11)</span>
                        </label>
                      </div>{" "}
                      <div class="form-group form-check-custom mb-1">
                        <input
                          type="checkbox"
                          class="form-check-input"
                          id="filter-brands-modal-5"
                        />
                        <label
                          class="form-check-label fw-normal text-body flex-grow-1 d-flex align-items-center"
                          for="filter-brands-modal-5">
                          Nike <span class="text-muted ms-1 fs-9">(19)</span>
                        </label>
                      </div>{" "}
                      <div class="form-group form-check-custom mb-1">
                        <input
                          type="checkbox"
                          class="form-check-input"
                          id="filter-brands-modal-6"
                        />
                        <label
                          class="form-check-label fw-normal text-body flex-grow-1 d-flex align-items-center"
                          for="filter-brands-modal-6">
                          Millet <span class="text-muted ms-1 fs-9">(24)</span>
                        </label>
                      </div>{" "}
                      <div class="form-group form-check-custom mb-1">
                        <input
                          type="checkbox"
                          class="form-check-input"
                          id="filter-brands-modal-7"
                        />
                        <label
                          class="form-check-label fw-normal text-body flex-grow-1 d-flex align-items-center"
                          for="filter-brands-modal-7">
                          Puma <span class="text-muted ms-1 fs-9">(11)</span>
                        </label>
                      </div>{" "}
                      <div class="form-group form-check-custom mb-1">
                        <input
                          type="checkbox"
                          class="form-check-input"
                          id="filter-brands-modal-8"
                        />
                        <label
                          class="form-check-label fw-normal text-body flex-grow-1 d-flex align-items-center"
                          for="filter-brands-modal-8">
                          Reebok <span class="text-muted ms-1 fs-9">(19)</span>
                        </label>
                      </div>{" "}
                      <div class="form-group form-check-custom mb-1">
                        <input
                          type="checkbox"
                          class="form-check-input"
                          id="filter-brands-modal-9"
                        />
                        <label
                          class="form-check-label fw-normal text-body flex-grow-1 d-flex align-items-center"
                          for="filter-brands-modal-9">
                          Under Armour{" "}
                          <span class="text-muted ms-1 fs-9">(24)</span>
                        </label>
                      </div>{" "}
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- / Brands Filter --> */}
              {/*     
            <!-- Sizes Filter --> */}
              <div class="py-4 widget-filter border-top">
                <a
                  class="small text-body text-decoration-none text-secondary-hover transition-all transition-all fs-6 fw-bolder d-block collapse-icon-chevron"
                  data-bs-toggle="collapse"
                  href="#filter-modal-sizes"
                  role="button"
                  aria-expanded="true"
                  aria-controls="filter-modal-sizes">
                  Sizes
                </a>
                <div id="filter-modal-sizes" class="collapse show">
                  <div class="filter-options mt-3">
                    <div class="form-group d-inline-block mr-2 mb-2 form-check-bg form-check-custom">
                      <input
                        type="checkbox"
                        class="form-check-bg-input"
                        id="filter-sizes-modal-0"
                      />
                      <label
                        class="form-check-label fw-normal"
                        for="filter-sizes-modal-0">
                        6.5
                      </label>
                    </div>{" "}
                    <div class="form-group d-inline-block mr-2 mb-2 form-check-bg form-check-custom">
                      <input
                        type="checkbox"
                        class="form-check-bg-input"
                        id="filter-sizes-modal-1"
                      />
                      <label
                        class="form-check-label fw-normal"
                        for="filter-sizes-modal-1">
                        7
                      </label>
                    </div>{" "}
                    <div class="form-group d-inline-block mr-2 mb-2 form-check-bg form-check-custom">
                      <input
                        type="checkbox"
                        class="form-check-bg-input"
                        id="filter-sizes-modal-2"
                      />
                      <label
                        class="form-check-label fw-normal"
                        for="filter-sizes-modal-2">
                        7.5
                      </label>
                    </div>{" "}
                    <div class="form-group d-inline-block mr-2 mb-2 form-check-bg form-check-custom">
                      <input
                        type="checkbox"
                        class="form-check-bg-input"
                        id="filter-sizes-modal-3"
                      />
                      <label
                        class="form-check-label fw-normal"
                        for="filter-sizes-modal-3">
                        8
                      </label>
                    </div>{" "}
                    <div class="form-group d-inline-block mr-2 mb-2 form-check-bg form-check-custom">
                      <input
                        type="checkbox"
                        class="form-check-bg-input"
                        id="filter-sizes-modal-4"
                      />
                      <label
                        class="form-check-label fw-normal"
                        for="filter-sizes-modal-4">
                        8.5
                      </label>
                    </div>{" "}
                    <div class="form-group d-inline-block mr-2 mb-2 form-check-bg form-check-custom">
                      <input
                        type="checkbox"
                        class="form-check-bg-input"
                        id="filter-sizes-modal-5"
                      />
                      <label
                        class="form-check-label fw-normal"
                        for="filter-sizes-modal-5">
                        9
                      </label>
                    </div>{" "}
                    <div class="form-group d-inline-block mr-2 mb-2 form-check-bg form-check-custom">
                      <input
                        type="checkbox"
                        class="form-check-bg-input"
                        id="filter-sizes-modal-6"
                      />
                      <label
                        class="form-check-label fw-normal"
                        for="filter-sizes-modal-6">
                        9.5
                      </label>
                    </div>{" "}
                    <div class="form-group d-inline-block mr-2 mb-2 form-check-bg form-check-custom">
                      <input
                        type="checkbox"
                        class="form-check-bg-input"
                        id="filter-sizes-modal-7"
                      />
                      <label
                        class="form-check-label fw-normal"
                        for="filter-sizes-modal-7">
                        10
                      </label>
                    </div>{" "}
                    <div class="form-group d-inline-block mr-2 mb-2 form-check-bg form-check-custom">
                      <input
                        type="checkbox"
                        class="form-check-bg-input"
                        id="filter-sizes-modal-8"
                      />
                      <label
                        class="form-check-label fw-normal"
                        for="filter-sizes-modal-8">
                        10.5
                      </label>
                    </div>{" "}
                    <div class="form-group d-inline-block mr-2 mb-2 form-check-bg form-check-custom">
                      <input
                        type="checkbox"
                        class="form-check-bg-input"
                        id="filter-sizes-modal-9"
                      />
                      <label
                        class="form-check-label fw-normal"
                        for="filter-sizes-modal-9">
                        11
                      </label>
                    </div>{" "}
                    <div class="form-group d-inline-block mr-2 mb-2 form-check-bg form-check-custom">
                      <input
                        type="checkbox"
                        class="form-check-bg-input"
                        id="filter-sizes-modal-10"
                      />
                      <label
                        class="form-check-label fw-normal"
                        for="filter-sizes-modal-10">
                        11.5
                      </label>
                    </div>{" "}
                  </div>
                </div>
              </div>
              {/* <!-- / Sizes Filter --> */}

              {/* <!-- Colour Filter --> */}
              <div class="py-4 widget-filter border-top">
                <NavLink
                  class="small text-body text-decoration-none text-secondary-hover transition-all transition-all fs-6 fw-bolder d-block collapse-icon-chevron"
                  data-bs-toggle="collapse"
                  to="/"
                  role="button"
                  aria-expanded="true"
                  aria-controls="">
                  Colour
                </NavLink>
                <div id="" class="collapse show">
                  <div class="filter-options mt-3">
                    <div class="form-group d-inline-block mr-1 mb-1 form-check-solid-bg-checkMark form-check-custom form-check-primary">
                      <input
                        type="checkbox"
                        class="form-check-color-input"
                        id="0"
                      />
                      <label class="form-check-label" for="0"></label>
                    </div>{" "}
                    <div class="form-group d-inline-block mr-1 mb-1 form-check-solid-bg-checkMark form-check-custom form-check-success">
                      <input
                        type="checkbox"
                        class="form-check-color-input"
                        id="1"
                      />
                      <label class="form-check-label" for="1"></label>
                    </div>{" "}
                    <div class="form-group d-inline-block mr-1 mb-1 form-check-solid-bg-checkMark form-check-custom form-check-danger">
                      <input
                        type="checkbox"
                        class="form-check-color-input"
                        id="2"
                      />
                      <label class="form-check-label" for="2"></label>
                    </div>{" "}
                    <div class="form-group d-inline-block mr-1 mb-1 form-check-solid-bg-checkMark form-check-custom form-check-info">
                      <input
                        type="checkbox"
                        class="form-check-color-input"
                        id="3"
                      />
                      <label class="form-check-label" for="3"></label>
                    </div>{" "}
                    <div class="form-group d-inline-block mr-1 mb-1 form-check-solid-bg-checkMark form-check-custom form-check-warning">
                      <input
                        type="checkbox"
                        class="form-check-color-input"
                        id="4"
                      />
                      <label class="form-check-label" for="4"></label>
                    </div>{" "}
                    <div class="form-group d-inline-block mr-1 mb-1 form-check-solid-bg-checkMark form-check-custom form-check-dark">
                      <input
                        type="checkbox"
                        class="form-check-color-input"
                        id="5"
                      />
                      <label class="form-check-label" for="5"></label>
                    </div>{" "}
                    <div class="form-group d-inline-block mr-1 mb-1 form-check-solid-bg-checkMark form-check-custom form-check-secondary">
                      <input
                        type="checkbox"
                        class="form-check-color-input"
                        id="6"
                      />
                      <label class="form-check-label" for="6"></label>
                    </div>{" "}
                  </div>
                </div>
              </div>
              {/* <!-- / Colour Filter --> */}
            </div>
            {/* <!-- / Filters--> */}

            {/* <!-- Filter Button--> */}
            <div class="border-top pt-3">
              <NavLink
                to="#"
                class="btn btn-dark mt-2 d-block hover-lift-sm hover-boxShadow"
                data-bs-dismiss="offcanvas"
                aria-label="Close">
                Done
              </NavLink>
            </div>
            {/* <!-- /Filter Button--> */}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Products;