import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
  const privateDash = JSON.parse(localStorage.getItem("logged"));
  return privateDash ? <Outlet /> : <Navigate to={"/login"} />;
};

export default PrivateRoute;
