import React, { useEffect,  useState } from "react";
import { useNavigate } from "react-router-dom";
import { Label } from "../label";
import { Input } from "../input";
import FormGroup from "compotes/layout/FormGroup";
import Button from "compotes/button/Button";
import { toast } from "react-toastify";
import { callUserOTP, sendUserOtp } from "../../sever/service";

const PageOTP = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState();
  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  
  useEffect(() => {
    setEmail(localStorage.getItem("emailOTp") || " ");
  }, []); // Thực hiện một lần khi component được tạo
  //gửi otp
  const handleLogin = async (e) => {
    e.preventDefault();
    const query = `otp=${otp}&email=${email}`;
    try {
      const res = await callUserOTP(query);
      if (res?.data) {
        toast.success("Thành công");
        navigate("/");
        setLoading(false);
      } else {
        setError("Invalid OTP. Please try again."); // Đặt thông báo lỗi nếu OTP không hợp lệ
      }
    } catch (error) {
      setError(`Error: ${error.message}`);
    }
  };

// gửi lại otp 
const handleSendOtp = async (e) => {
  e.preventDefault();
  try {
    const res = await sendUserOtp(email);
    if (res?.data) {
      toast.success("Xin Moi Check Email");
    } else {
      setError("Failed to send OTP. Please try again."); // Đặt thông báo lỗi nếu gửi OTP thất bại
    }
  } catch (error) {
    setError(`Error: ${error.message}`);
  }
};
  return (
    <section className="mt-0 overflow-hidden  vh-100 d-flex justify-content-center align-items-center p-4">
      {/* <!-- Page Content Goes Here --> */}

      {/* <!-- Login Form--> */}
      <div className="col col-md-8 col-lg-6 col-xxl-5">
        <span className="text-muted text-center d-block fw-bolder my-4 fs-1 tex">
          OTP
        </span>
        <form onSubmit={handleLogin}>
          <FormGroup>
            <Label htmlFor="email">Email</Label>
            <Input
              // control={control}
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              type="email"
              name="email"
              placeholder="name@email.com"></Input>
            {/* <p className='text-danger mt-3'>{errors.email?.message}</p> */}
          </FormGroup>
          <FormGroup>
            <Label
              className=" d-flex justify-content-between align-items-center"
              htmlFor="password">
              Enter OTP         
            </Label>
            <Input
              // control={control}
              onChange={(e) => setOtp(e.target.value)}
              name="otp"
              placeholder="Enter your  otp"></Input>
          </FormGroup>
          {loading ? (
          <p>Loading...</p>
        ) : (
          <>
            {error && <p className="text-danger">{error}</p>}
            <Button type="submit">Submit OTP</Button>
          </>
        )}
        </form>
        <p className="d-block text-center text-muted">
        You have not received the otp code ?{" "}
     
          <button className="bg-dark text-white border-0" onClick={handleSendOtp}>
          SEND TO 
          </button>
        </p>

      </div>
      {/* </div> */}
      {/* <!-- / Login Form--> */}

      {/* <!-- /Page Content --> */}
    </section>
  );
};

export default PageOTP;
