import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  const localData = JSON.parse(localStorage.getItem("logged"));
  console.log(localData);
  const handleLogout = () => {
    localStorage.removeItem("logged");
    window.location.reload();
  };

  return (
    <div>
      <div className="container hell">
        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-6">
            <div className="card h-100 hell m-auto my-5">
              <div className="card-body">
                <h5>Id :{localData.id}</h5>
                <h5>Name :{localData.firstName}</h5>
                <h5>Email :{localData.email}</h5>
                <h5>Password :{localData.password}</h5>
                <button
                  className="btn btn-danger m-2"
                  onClick={() => navigate("/add")}
                >
                  Add Products
                </button>
                <button
                  className="btn btn-warning m-2"
                  onClick={() => navigate("/view")}
                >
                  View Products
                </button>

                <div>
                  <button onClick={() => handleLogout()} type="button">
                    Logout
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3"></div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
