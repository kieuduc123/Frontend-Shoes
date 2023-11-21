import React from 'react';
import { NavLink } from 'react-router-dom';

const ForgottenPassWord = () => {
    return (
        // <!-- Main Section-->
    <section className="mt-0 overflow-hidden  vh-100 d-flex justify-content-center align-items-center p-4">
        {/* <!-- Page Content Goes Here --> */}

        {/* <!-- Login Form--> */}
        <div className="col col-md-8 col-lg-6 col-xxl-5">
            {/* <!-- Logo--> */}
            <NavLink className="navbar-brand fw-bold fs-3 flex-shrink-0 order-0 align-self-center justify-content-center d-flex mx-0 px-0" to="/">
                <div className="d-flex align-items-center">
                    <svg className="f-w-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 77.53 72.26"><path d="M10.43,54.2h0L0,36.13,10.43,18.06,20.86,0H41.72L10.43,54.2Zm67.1-7.83L73,54.2,68.49,62,45,48.47,31.29,72.26H20.86l-5.22-9L52.15,0H62.58l5.21,9L54.06,32.82,77.53,46.37Z" fill="currentColor" fill-rule="evenodd"/></svg>
                </div>
            </NavLink>
            {/* <!-- / Logo--> */}
            <div className="shadow-xl p-4 p-lg-5 bg-white">
                <h1 className="text-center fs-2 mb-5 fw-bold">Forgotten Password</h1>
                <p className="text-muted">Please enter your email below and we will send you a secure link to reset your password.</p>
                <form>
                    <div className="form-group">
                      <label for="forgot-password" className="form-label">Email address</label>
                      <input type="email" className="form-control" id="forgot-password" placeholder="name@email.com"/>
                    </div>
                    <button type="submit" className="btn btn-dark d-block w-100 my-4">Send Reset Link</button>
                </form>
            </div>

        </div>
        </section>
    );
};

export default ForgottenPassWord;