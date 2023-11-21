import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBarCart = () => {
    return (
        <nav className="d-none d-md-block">

        <ul className="list-unstyled d-flex justify-content-start mt-4 align-items-center fw-bolder small">
                                <li className="me-4"><NavLink  className="nav-link-checkout active"
                                        to="/cart">Your Cart</NavLink ></li>
                                <li className="me-4"><NavLink  className="nav-link-checkout "
                                        to="/checkout">Information</NavLink ></li>
                                <li className="me-4"><NavLink  className="nav-link-checkout "
                                        to="/checkout-shipping">Shipping</NavLink ></li>
                                <li><NavLink  className="nav-link-checkout nav-link-last "
                                        to="/checkout-payment">Payment</NavLink ></li>
                            </ul>
        </nav>
    );
};

export default NavBarCart;