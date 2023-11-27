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
 

    return (
      
        <div>
        <div className="container contact">
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
          </div>
        </div>
      </nav>
   
    

      </div>
 
    );
};

export default OrderHistory;