import HomePage from "./compotes/HomePage";
import { Route, Routes } from "react-router-dom";
import NavBar from "./compotes/Nagition/NavBar";
import Footer from "./compotes/Nagition/Footer";
import React, { Fragment,Suspense } from "react";
import Cart from "./compotes/cart/Cart";
import Checkout from "./compotes/order/Checkout";
import CheckoutPayment from "./compotes/cart/CheckoutPayment";
import Login from "./compotes/page/Login";
import PageOTP from "./compotes/page/PageOTP";
import Register from "./compotes/page/Register";
import ForgottenPassWord from "./compotes/page/ForgottenPassWord";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ProductDetail from "./compotes/product/ProductDetail";
import NotFound from "compotes/Nagition/NotFound";
import OrderHistory from "compotes/order/OrderHistory";
import Contact from "compotes/layout/Contact";
import OrderStatus from "compotes/order/OrderStatus";

const Products = React.lazy(() => import("./compotes/product/Products"));
const Fallback = () => {
  return <div>Loading.......</div>
}
function App() {
  return (
    <Fragment>
      

        <NavBar></NavBar>
        <Suspense fallback= {<Fallback/>}> 
      <Routes>
        <Route path="/" element={<HomePage></HomePage>}>  {" "} </Route>
        <Route path="/products" element={<Products></Products>}></Route>
        <Route path="/products/:id" element={<ProductDetail></ProductDetail>}>
          {" "}
        </Route>
        <Route path="/cart" element={<Cart></Cart>}></Route>
        <Route path="/checkout" element={<Checkout></Checkout>}></Route>
        <Route path="/orderhistory" element={<OrderHistory></OrderHistory>}>    </Route>
             <Route path="/order-status" element={<OrderStatus></OrderStatus>}></Route>
      
        <Route
          path="/checkout-payment"
          element={<CheckoutPayment></CheckoutPayment>}></Route>
     
     
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route
          path="/forgotten-password"
          element={<ForgottenPassWord></ForgottenPassWord>}></Route>
        <Route path="/otp" element={<PageOTP />}></Route>
        <Route path="/contact" element={<Contact></Contact>}></Route>
          <Route  path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      </Suspense>
       <Footer></Footer>
      <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </Fragment>
    // </UseProvider>
  );
}

export default App;
