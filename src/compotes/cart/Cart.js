// import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";
import { NavLink} from "react-router-dom";
import { toast } from "react-toastify";
import { decQuantity, deleteCart, getCart, incQuantity } from "sever/service";
// import NavBarCart from '../Nagition/NavBarCart';

const LoadingOverlay = () => {
  return (
    <div
      // style={{
      //   position: "fixed",
      //   top: 0,
      //   left: 0,
      //   width: "100%",
      //   height: "100%",
      //   backgroundColor: "rgba(255, 255, 255, 0.8)", // Màu nền với độ trong suốt
      //   display: "flex",
      //   justifyContent: "center",
      //   alignItems: "center",
      //   zIndex: 9999,
      // }}
      >
    <span class="loader"></span>
    </div>
  );
};
const Cart = () => {
  const [total, setTotal] = useState(0);
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(false);
  const user = JSON.parse(localStorage.getItem("dataUser")) || {};

  
  // const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const fetchGetCart = async () => {
    setLoading(true);
    const res = await getCart(user.id);
    if (res.data && res.data.length > 0) {
      setCart(res.data);
    } 
    // else {
    //   setCart([]);
    // }
    setLoading(false);
  };
  // localStorage.setItem("cart", JSON.stringify(cart));

  useEffect(() => {
    fetchGetCart();
    const total = cart.reduce((acc, item) => {
      return acc + item.product.price * item.qty;
    }, 0);
    setTotal(total);
  }, [cart.length]);

  //tru so l 
  const handleDec = async (item) => {
    const valueDec = {
      userId: user.id,
      productId: item.productId,
      plus: 1,
    };
    const res = await decQuantity(valueDec);
    if (res.status === 200) {
      await fetchGetCart();
      toast.success("success !"); 
    } else {
      toast.error("số lượng không được nhỏ hơn 1");
    }
  };
  
  //them sl
  const handleInc = async (item) => {
    const valueDec = {
      userId: user.id,
      productId: item.productId,
      plus: 1,
    };

    const res = await incQuantity(valueDec);
    // console.log("check res +++  ", res);
    if (res.status === 200) {
      await fetchGetCart();
      toast.success("success !");
    } else {
      toast.error("hết hàng");
    }
  };
  //xoa sl

  const handleRemove = async (item) => {
    const valueDec = {
      userId: user.id,
      productId: item.productId,
    };
    const res = await deleteCart(valueDec);
    if (res.status === 200) {
      await fetchGetCart();
      toast.success("success !");
      localStorage.removeItem("cart");
      setCart([]);
      setLoading(false);
    } else {
      toast.error("hết hàng");
    }
  };

  if (cart.length === 0) {
    return (
      <div className="cart d-flex justify-content-center align-items-center">
        Cart Is Empty
      </div>
    );
  }
  return (
    <Fragment>
      {loading && <LoadingOverlay />}
      <div className="card">
        <div className="row">
          <div className="col-md-8 cart">
            <div className="title">
              <div className="row">
                <div className="col">
                  <h4>
                    <b>Shopping Cart</b>
                  </h4>
                </div>
                <div className="col align-self-center text-right text-muted">
                  {cart?.length} Items
                </div>
              </div>
            </div>
            {cart.length > 0 && 
            cart.map((cart,id) => {
              return (
                <div key={id} className="row border-top border-bottom">
                  <div className="row main align-items-center">
                    <div className="col-2">
                      <img
                        className="img-fluid"
                        src={cart.product.thumbnail}
                        alt={cart.product.name}
                      />
                    </div>
                    <div className="col-3">
                      {/* <div className="row text-muted">{cart.product.category.name}</div> */}
                      <div className="row">{cart.product.name}</div>
                    </div>
                    <div className="col-4" style={{ width: "200px" }}>
                      <NavLink>
                        <svg
                          onClick={() => handleDec(cart)}
                          style={{ width: "27px" }}
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="w-2 h-2">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19.5 12h-15"
                          />
                        </svg>
                      </NavLink>

                      <input
                        style={{ width: "50px" }}
                        type="text"
                        className="border text-center"
                        value={cart.qty}
                      />
                      <NavLink>
                        <svg
                          onClick={() => handleInc(cart)}
                          style={{ width: "27px" }}
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="w-6 h-6">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 4.5v15m7.5-7.5h-15"
                          />
                        </svg>
                      </NavLink>
                    </div>
                    <div className="col-3">
                      ${cart.product.price * cart.qty}
                      <span
                        className="close ml-4 cursor-pointer"
                        onClick={() => handleRemove(cart)}>
                        &#10005;
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
            <div className="back-to-shop">
              <NavLink to="/products">
                <span>Back to shop</span>
              </NavLink>
            </div>
          </div>
          <div className="col-md-4 summary">
            <div>
              <h5>
                <b>Summary</b>
              </h5>
            </div>
            <hr />
            <div className="row">
              <div className="col pl-0">ITEMS {cart.length}</div>
              <div className="col text-right">${total}</div>
            </div>
            <form>
              <p>SHIPPING</p>
              <select>
                <option className="text-muted">VAT 10%</option>
              </select>
              <p>GIVE CODE</p>
              <input id="code" placeholder="Enter your code" />
            </form>
            <div
              className="row"
              // style={{ border- top:" 1px solid rgba(0,0,0,.1)"; padding: " 2vh 0"}}
            >
              <div className="col">TOTAL PRICE</div>
              <div className="col text-right">$ {total + 500}</div>
            </div>
            <NavLink
              to="/checkout"
              className=" btn btn-dark w-100 mt-4 mr- mb-0 hover-lift-sm hover-box-shadow">
              CHECKOUT
            </NavLink>
          </div>
        </div>
      </div>
      {/* <!-- / Main Section--> */}
    </Fragment>
  );
};

export default Cart;
