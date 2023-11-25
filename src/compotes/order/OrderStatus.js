// import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import {  orderStatus } from 'sever/service';

const OrderHistory = () => {
    const [data,setData] = useState([]);
       
    const fetchData = async () => {
            try {
                const email = JSON.parse(localStorage.getItem("dataUser")) ;
                const accessToken =  localStorage.getItem("currentUser");
                const response = await orderStatus(email.id,
               {
                headers: {
                  "Content-Type": "application/json",
                  Authorization: `Bearer ${accessToken}`,
                },
              });
              setData(response.data);
              console.log("order",response)
            } catch (error) {
              console.error('Error:', error);
              data([]);
            }
        }
     useEffect(() => {
        fetchData();
     },[]) ;

     if (!data || data.length === 0) {
      return (
        <div className="cart d-flex justify-content-center align-items-center">
          Order Is Empty
        </div>
      );
    }

    return (
      
        <div style={{height : "50vh"}}>
        <div className="container contact">
          {/* <div className="row">
            <div className="col">
              <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                  <li className="breadcrumb-item">
                    <NavLink to="/">Home</NavLink>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Order
                  </li>
                </ol>
              </nav>
            </div>
          </div>
          <div className="row text-start">
            <div className="col">
              <h3 className="fw-bold">Order Status</h3>
            </div>
          </div> */}
          <div className="row">
            <div className="col table-responsive">
              <table class="table table-striped table-borderless">
                <thead>
                  <tr>
                    <th scope="col">Order Date</th>
                    <th scope="col ">Order Number</th>
                    <th scope="col">Total</th>
                    <th scope="col">Status</th>
                    <th scope="col">Shipping</th>
                  </tr>
                </thead>
                <tbody>
                 { 
                 data.map((data,i) => {
                    return (
                      <tr key={i}>
                        <td>{data.created_at}</td>
                        <td>{data.id}</td>
                        <td>${data.grand_total}</td>
                        <td>{data.status.name}</td>
                        <td>{data.shipping.name}</td>
                      </tr>
                    )
                 }
                    
                  )}
                </tbody>
              </table>
            </div>
          </div>
          {/* <div className="row">
            {Orders.length > visibleOrders && (
              <div className="col-12">
                <button
                  type="button"
                  onClick={handleLoadMore}
                  className="btn btn-secondary"
                >
                  Load More
                </button>
              </div>
            )}
          </div> */}
        </div>
   
   
      <nav id="sidebarMenu" class="collapse d-lg-block sidebar collapse bg-white">
        <div class="position-sticky">
          <div class="list-group list-group-flush mx-3 mt-4">
            <a href="/orderhistory" class="list-group-item list-group-item-action py-2 ripple ">
              <i class="fas fa-chart-area fa-fw me-3"></i><span>Order History</span>
            </a>
          <a href="/order-status" class="list-group-item list-group-item-action py-2 ripple active" aria-current="true">
              <i class="fas fa-tachometer-alt fa-fw me-3 active "></i><span>Order Status</span>
            </a>
            <a href="#" class="list-group-item list-group-item-action py-2 ripple"><i
                class="fas fa-lock fa-fw me-3"></i><span>Password</span></a>
            <a href="#" class="list-group-item list-group-item-action py-2 ripple"><i
                class="fas fa-chart-line fa-fw me-3"></i><span>Analytics</span></a>
            <a href="#" class="list-group-item list-group-item-action py-2 ripple">
              <i class="fas fa-chart-pie fa-fw me-3"></i><span>SEO</span>
            </a>
           
          </div>
        </div>
      </nav>
   
      {/* <nav id="main-navbar" class="navbar navbar-expand-lg navbar-light bg-white fixed-top"> */}
       
     
      {/* </nav> */}
    

      </div>
    
   
    // <main style="margin-top: 58px;">
    //   <div class="container pt-4"></div>
    // </main>
    
    );
};

export default OrderHistory;