import React from "react";
import LogoPage from "./LogoPage";
import { NavLink, useNavigate } from "react-router-dom";
import Search from "compotes/search/Search";
import { logOut } from "sever/service";
import { toast } from "react-toastify";

const NavBar = () => {
  const navigate = useNavigate();
  const carts = JSON.parse(localStorage.getItem("cart")) || [];
  const email = JSON.parse(localStorage.getItem("dataUser")) || "";
const handleLogout = async () => {
  try {
    const email = JSON.parse(localStorage.getItem("dataUser")) || "";
     const accessToken = localStorage.getItem("currentUser");
    const response = await logOut(email.id,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      }
      )
    console.log("logOut",response)
    if (response.status === 200) {
      toast.success('Đã đăng xuất thành công');
      localStorage.removeItem("dataUser");
      localStorage.removeItem("currentUser");
      localStorage.removeItem("cart");
      navigate("/");
    } else {
      toast.error('Đăng xuất không thành công');
    }
  } catch (error) {
    toast.error("Đã xảy ra lỗi");
  }
};
  return (
    <nav className="navbar  navbar-expand-lg navbar-light bg-white flex-column border-0  ">
      <div className="container-fluid">
        <div className="w-100">
          <div className="d-flex justify-content-between align-items-center flex-wrap">
            {/* <!-- Logo--> */}
            <LogoPage></LogoPage>
            {/* <!-- / Logo--> */}
            {/* <!-- Navbar Icons--> */}
            <ul className="list-unstyled mb-0 d-flex align-items-center order-1 order-lg-2 nav-sidelinks">
              {/* <!-- Mobile Nav Toggler--> */}
              <li className="d-lg-none">
                <span
                  className="nav-link text-body d-flex align-items-center cursor-pointer"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarNavDropdown"
                  aria-controls="navbarNavDropdown"
                  aria-expanded="false"
                  aria-label="Toggle navigation">
                  <i className="ri-menu-line ri-lg me-1"></i> Menu
                </span>
              </li>
              {/* <!-- /Mobile Nav Toggler-->
                        <!-- Navbar Search--> */}
              <li className=" d-sm-block nav-search">
                <Search></Search>
              </li>
              {/* <!-- /Navbar Search-->
                        <!-- Navbar Login--> */}
              <li className="ms-1 d-none d-lg-inline-block ">
                {email ? (

                  <div class="dropdown">
                  <button class=" dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    {email.fullname}
                  </button>
                  <ul class="dropdown-menu border border-secondary ">
                    <li className="border-bottom border-secondary p-1"><NavLink class="dropdown-item " onClick={handleLogout}> Log Out</NavLink></li>
                    <li className="p-1"><NavLink class="dropdown-item" to="/orderhistory">Order </NavLink></li>
                  </ul>
                </div>
                ) : (
                  <NavLink
                    className="nav-link 
                              text-body"
                    to="/login">
                    Account
                  </NavLink>
                )}
              </li>
              <li className="ms-1 d-inline-block position-relative dropdown-cart">
                <NavLink
                  to="/cart"
                  className="nav-link me-0 disable-child-pointer border-0 p-0 bg-transparent text-body">
                  Cart
                  <span className="items">{carts.length}</span>
                </NavLink>
              </li>
            </ul>
            {/* <!-- Main Navigation--> */}
            <div
              className="flex-shrink-0 collapse navbar-collapse navbar-collapse-light w-auto flex-grow-1 order-2 order-lg-1"
              id="navbarNavDropdown">
              {/* <!-- Menu--> */}
              <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <NavLink className="nav-link" to="/" role="button">
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/products" role="button">
                    Product
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/about" role="button">
                    About Us
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/contact" role="button">
                    Contact
                  </NavLink>
                </li>
              </ul>
              {/* <!-- / Menu--> */}
            </div>
            {/* <!-- / Main Navigation--> */}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
