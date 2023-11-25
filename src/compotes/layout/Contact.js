import React, { useState } from 'react';
import  "./contact.css";
import * as yup from 'yup';
import { toast } from 'react-toastify';
import "yup-phone";
const Contact = () => {
    const [useName, setUseName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState();
  const [message, setMessage] = useState("");
  const [formErrors, setFormErrors] = useState({});
  const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
    const schema = yup.object({
        useName: yup.string().required("UseName is required"),
        email: yup.string().required('Email is required').email('Email is not valid'),
        phone: yup.string().matches(phoneRegExp, 'Phone number is not valid').required("Phone number is not valid"),
       message: yup.string().required
       ('Message is required').email('Message is not valid'),
      });
     const handleContact = async (e) => {
        e.preventDefault();
        try{
            await schema.validate({ useName, email, phone, message }, { abortEarly: false });
            const newsUser = {
                useName,
                email,
                phone,
                message,
              };
              console.log(newsUser)
        }
        catch (error) {
            if (error instanceof yup.ValidationError) {
              // Handle Yup validation errors
              const validationErrors = {};
              error.inner.forEach(err => {
                validationErrors[err.path] = err.message;
              });
              setFormErrors(validationErrors);
            // } else if (error.response?.status === 400) {
            //   // Handle 400 Bad Request error (possibly due to empty fields)
            //   toast.error('Please fill in all required fields.');
            } else {
              // Handle other errors
              toast.error(`Error: ${error.message}`);
            }
        }
     } 
    return (
        <div class="container">
        <span class="big-circle"></span>
       
        <div class="form">
          <div class="contact-info">
            <h3 class="title-info">CONTACT US</h3>
            <p class="text">
                Our advisers will give you a personalised welcome and will be delighted to accompany you as you discover the House of Dior and its products.
            </p>
    
            <div class="info">
              <div class="information">
                <p>Address: So 8A , Ton That Thuyet , My Dinh Ha Noi</p>
              </div>
              <div class="information">
                <p>Email: Mandam@fpt.edu.vn</p>
              </div>
              <div class="information">
                <p>Phone: 123-456-789</p>
              </div>
            </div>
    
            <div class="social-media">
              <p>Connect with us :</p>
              <div class="social-icons">
                <a href="#">
                  <i class="fab fa-facebook-f"></i>
                </a>
                <a href="#">
                  <i class="fab fa-twitter"></i>
                </a>
                <a href="#">
                  <i class="fab fa-instagram"></i>
                </a>
                <a href="#">
                  <i class="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
          </div>
    
          <div class="contact-form">
    
            <form onSubmit={handleContact} autocomplete="off">
              <h3 class="title">CONTACT US BY E-MAIL</h3>
              <div class="input-container">
                <input type="useName" name="name" class="input" placeholder='Username' 
                 onChange={(e) => setUseName(e.target.value)}
                />
                  <p className='text-danger mt-3'>{formErrors.useName}</p>
                {/* <label htmlFor="">Username</label> */}
                {/* <span>Username</span> */}
              </div>
              <div class="input-container">
                <input type="email" name="email" class="input" placeholder='Email' 
                   onChange={(e) => setEmail(e.target.value)}/>
               
             
                <p className='text-danger mt-3'>{formErrors.email}</p>
              </div>
              <div class="input-container">
                <input type="number" name="phone" class="input" placeholder='Phone' 
                   onChange={(e) => setPhone(e.target.value)}/>
             <p className='text-danger mt-3'>{formErrors.phone}</p>
                {/* <label htmlFor="">Phone</label> */}
                {/* <span>Phone</span> */}
              </div>
              <div class="input-container textarea">
                <textarea name="message" class="input" placeholder='Message' 
                 onChange={(e) => setMessage(e.target.value)}
                ></textarea>
                 <p className='text-danger mt-3'>{formErrors.message}</p>
                {/* <label htmlFor="">Message</label> */}
                {/* <span>Message</span> */}
              </div>
              <input type="submit" value="Send" class="contact-btn" />
            </form>
          </div>
        </div>
      </div>
   
    );
};

export default Contact;