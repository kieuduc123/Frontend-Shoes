import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Profile = () => {
const [data,setData] = useState([]);
const user = JSON.parse(localStorage.getItem("dataUser")) || {};
const accessToken = localStorage.getItem("currentUser");
const handleProfile =  async () => {
    try {

        const rs = await  axios.get(`https://semester3shoprunner.azurewebsites.net/api/Users/get-profile?userId=${user.id}`,
        {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${accessToken}`,
            },
          }
        )
        if(rs?.data){
            setData(rs.data);
            console.log(rs)
        }
    }
    catch(error){
        console.log("Profile",error)
    }
}
useEffect(() => {
  handleProfile();
},[])

    return (
        <div>
            <div class="container">
    <div class="main-body">
        
          <nav aria-label="breadcrumb" class="main-breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item"><a href="index.html">Home</a></li>
              <li class="breadcrumb-item active" aria-current="page">User Profile</li>
            </ol>
          </nav>
          { Array.isArray(data)  && data.length > 0 &&
           data.map((data, i)  => {
            return(
          <div key={i} class="row gutters-sm">
         
            <div class="col-md-4 mb-3">
              <div class="card">
                <div class="card-body">
                  <div class="d-flex flex-column align-items-center text-center">
                    <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Admin" class="rounded-circle" width="150"/>
                    <div class="mt-5">
                      <h4>{data.fullname}</h4>
                  
                      <p class="text-muted font-size-sm">Bay Area, San Francisco, CA</p>
                      {/* <button class="btn btn-primary">Follow</button>
                      <button class="btn btn-outline-primary">Message</button> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-8">
              <div class="card mb-3">
                <div class="card-body">
                  <div class="row">
                    <div class="col-sm-3 ">
                      <h6 class="mb-0">{data.fullname}</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                      Kenneth Valdez
                    </div>
                  </div>
                
                  <div class="row mt-5">
                    <div class="col-sm-3 ">
                      <h6 class="mb-0">Email</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                    {data.email}
                    </div>
                  </div>
               
                  <div class="row mt-5">
                    <div class="col-sm-3">
                      <h6 class="mb-0">Phone</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                     {data.tel}
                    </div>
                  </div>
              
                  <div class="row mt-5">
                    <div class="col-sm-3">
                      <h6 class="mb-0">City</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                    {data.city}
                    </div>
                  </div>
                 
                  <div class="row mt-5">
                    <div class="col-sm-3">
                      <h6 class="mb-0">Address</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                      {data.address}
                    </div>
                  </div>
               
                  <div class="row mt-5">
                    <div class="col-sm-12">
                      <a class="btn btn-info " >Edit</a>
                    </div>
                  </div>
                </div>
              </div>
      



            </div>
          </div>
             )
            })}

        </div>
    </div>
            






        </div>
    );
};

export default Profile;