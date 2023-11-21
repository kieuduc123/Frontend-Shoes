// import { useParams } from "react-router-dom";
import axios from "./Api";
export const callLoginUser = async (user) => {
  const res = await axios.post(
    "https://semester3shoprunner.azurewebsites.net/api/Users/login",
    { ...user }
  );
  return res;
};
export const logOut = async (id) => {
  const res = await axios.post(
    `https://semester3shoprunner.azurewebsites.net/api/Users/log_out?id=${id}`,
  );
  return res;
};
export const callRegisterUser = async (user) => {
  const res = await axios.post(
    "https://semester3shoprunner.azurewebsites.net/api/Users/register",
    { ...user }
  );
  return res;
};
export const callUserOTP = async (param) => {
  const res = await axios.post(
    `https://semester3shoprunner.azurewebsites.net/api/Users/verifyOtp?${param}`
  );
  return res;
};

export const sendUserOtp = async (sendOtp) => {
  const res = await axios.post(
    `https://semester3shoprunner.azurewebsites.net/api/Users/send_again_otp?email=${sendOtp}`
  );
  return res;
};

// giảm số lương
export const decQuantity = async (product) => {
  const res = await axios.post(
    `https://semester3shoprunner.azurewebsites.net/api/Cart/alter_quantity?userId=${product.userId}&product_id=${product.productId}&minus=${product.plus}`
  );
  return res;
};

// tăng số lượng
export const incQuantity = async (product) => {
  const res = await axios.post(
    `https://semester3shoprunner.azurewebsites.net/api/Cart/alter_quantity?userId=${product.userId}&product_id=${product.productId}&plus=1`,
    { product }
  );
  return res;
};
export const deleteCart = async (product) => {
  const res = await axios.delete(
    `https://semester3shoprunner.azurewebsites.net/api/Cart/delete-product-cart?userId=${product.userId}&product_id=${product.productId}`,
    { product }
  );
  return res;
};

// tăng số lượng
export const getCart = async (id) => {
  const res = await axios.get(
    `https://semester3shoprunner.azurewebsites.net/api/Cart/get-cart?userId=${id}`
  );
  return res;
};

export const createCart = async (param) => {
  const res = await axios.post(
    `https://semester3shoprunner.azurewebsites.net/api/Cart/add-to-cart?${param}`
  );
  return res;
};

export const createPaymentOrder = async (user) => {
  const res = await axios.post(
    "https://semester3shoprunner.azurewebsites.net/api/Order/payment",
    { ...user }
  );
  return res;
};

export const orderHistory = async (id) => {
  const res = await axios.get(`https://semester3shoprunner.azurewebsites.net/api/Order/client/status-order-client?userId=${id}`
  );
  return  res;
}
