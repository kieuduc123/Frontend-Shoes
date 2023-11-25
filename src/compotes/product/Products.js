import React, { Fragment, useEffect, useRef, useState } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { NavLink } from "react-router-dom";
import Api from "../../sever/Api";
import url from "../../sever/url";
import SortSelect from "./SortSelect";
// import ProductList from "./product/ProductList";

const LoadingOverlay = () => {
    return (
        <div >
            <div className="row">
                <div className="col-lg-3">
                    <Skeleton height={350}></Skeleton>
                </div>
                <div className="col-lg-3">
                    <Skeleton height={350}></Skeleton>
                </div>
                <div className="col-lg-3">
                    <Skeleton height={350}></Skeleton>
                </div>
                <div className="col-lg-3">
                    <Skeleton height={350}></Skeleton>
                </div>
               
            </div>
            <div className="row mt-3">
                <div className="col-lg-3">
                    <Skeleton height={350}></Skeleton>
                </div>
                <div className="col-lg-3">
                    <Skeleton height={350}></Skeleton>
                </div>
                <div className="col-lg-3">
                    <Skeleton height={350}></Skeleton>
                </div>
                <div className="col-lg-3">
                    <Skeleton height={350}></Skeleton>
                </div>
               
            </div>
        </div>
    );
};
const Products = () => {
    // const [data, setData] = useState([]);
    const [filter, setFilter] = useState([]);
    const [loading, setLoading] = useState(false);

    const [products, setProducts] = useState([]);
    const [sort, setSort] = useState("desc");
    // const [currentPage, setCurrentPage] = useState(1);
    // const [totalPages, setTotalPages] = useState(1);
    const fetchData = useRef();
    fetchData.current = async () => {
        try {
            setLoading(true);
            const response = await Api.get(
                `${url.BASE_URL}${url.PRODUCT.SORT_LIST}${sort}`
            );
            // setTotalPages(response.count_P);
            setProducts(await response.data);
            setLoading(false);
        } catch (error) {
            console.error(error);
        }
    };

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
    //     // setLoading(false);
    //   }
    // };

    // const handlePageChange = (page) => {
    //   setCurrentPage(page);
    // };
    useEffect(() => {
        fetchData.current();
        // fetchProducts(currentPage);
    }, [sort]);
    // eslint-disable-next-line no-unused-vars
    const Loading = () => {
        return (
            <div className="lds-roller">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
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
                        onClick={() => setFilter(products)}
                    >
                        All
                    </button>
                    <button
                        className="btn btn-outline-dark text-muted"
                        onClick={() => setFilter("Trendy")}
                    >
                        Trendy
                    </button>
                    <button
                        className="btn btn-outline-dark text-muted"
                        onClick={() => setFilter("Fashion")}
                    >
                        Fashion
                    </button>
                    <button
                        className="btn btn-outline-dark text-muted"
                        onClick={() => setFilter("Trending")}
                    >
                        Trending
                    </button>
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
                    }}
                >
                    <div
                        className="container-fluid position-relative z-index-20"
                        data-aos="fade-right"
                        data-aos-delay="300"
                    >
                        <h1 className="fw-bold display-6 mb-4 text-white">
                            Latest Arrivals
                        </h1>
                        <div className="col-12 col-md-6">
                            <p className="text-white mb-0 fs-5">
                                When it's time to head out and get your Kicks
                                on, have a look at our latest arrivals. Whether
                                you're into Nike, Adidas, Dunks or New Balance,
                                we really have something for everyone!
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
                            <p className="m-0 text-muted small">
                                Showing 1 - 9 of 121
                            </p>
                            <nav aria-label="breadcrumb">
                                <ShowProducts />
                            </nav>
                        </div>
                        <div className="d-flex justify-content-end align-items-center mt-4 mt-lg-0 flex-column flex-md-row">
                            {/* <!-- Filter Trigger--> */}

                            {/* <!-- / Filter Trigger--> */}

                            {/* <!-- Sort Options--> */}
                            <SortSelect sort={sort} setSort={setSort} />
                        </div>
                    </div>
                    {/* <!-- /Category Toolbar--> */}

                    {/* <!-- Products--> */}
                    {loading && <LoadingOverlay />}
                    <div className="row g-4">
                        {loading ? (
                            <Loading />
                        ) : (
                            testDate.length > 0 &&
                            testDate.map((product, index) => {
                                return (
                                    <div
                                        className="col-12 col-sm-6 col-lg-4"
                                        key={index}
                                    >
                                        {/* <!-- Card Product--> */}

                                        <div className="card border border-transparent position-relative overflow-hidden h-100 transparent">
                                            <div className="card-img position-relative">
                                                <div className="card-badges">
                                                    <span className="badge badge-card">
                                                        <span className="f-w-2 f-h-2 bg-danger rounded-circle d-block me-1"></span>{" "}
                                                        Sale
                                                    </span>
                                                </div>
                                                {/* <span className="position-absolute top-0 end-0 p-2 z-index-20 text-muted">
                        <i className="ri-heart-line"></i>
                      </span> */}
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
                                                        to={`/products/${product.id}`}
                                                    >
                                                        By Now
                                                    </NavLink>
                                                </div>
                                            </div>
                                            <div className="card-body px-0">
                                                <NavLink
                                                    className="text-decoration-none link-cover"
                                                    to="/"
                                                >
                                                    {product.name}
                                                </NavLink>
                                                <small className="text-muted d-block">
                                                    {product.qty} item, 10 sizes
                                                </small>
                                                <p className="mt-2 mb-0 small">
                                                    <s className="text-muted">
                                                        $329.99
                                                    </s>
                                                    <span className="text-danger">
                                                        {product.price}
                                                    </span>
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
        </Fragment>
    );
};

export default Products;
