import React from "react";
import "./App.css";
import Myheader from "./components/Myheader";
import Myfooter from "./components/Myfooter";
import { Route, Routes } from "react-router-dom";
import Mycard from "./components/Mycard";
import Home from "./components/Home";
import Mycomp from "./components/Mycomp";
import Myform from "./components/Myform";
import Details from "./components/Details";
import Register from "./components_2/Register";
import NotFound from "./components_2/NotFound";
import Login from "./components_2/Login";
import Dashboard from "./components_2/Dashboard";
// import Asix from './components_3/Asix';
import Apicard from "./components_3/Apicard";
import PrivateRoute from "./privateRoute/PrivateRoute";
import Addproducts from "./products/Addproducts";
import Viewproducts from "./products/Viewproducts";
import UpdateProduct from "./products/UpdateProduct";
import Otp from "./components_2/Otp";
import Table from "./reactTable/Table";
import EditProduct from "./products/EditProduct";
function App() {
  return (
    <div className="App">
      <Myheader />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cards" element={<Mycard />} />
        <Route path="/form" element={<Mycomp />} />
        <Route path="/home" element={<Home />} />
        <Route path="/card/:id" element={<Myform />} />
        <Route path="/formDetails" element={<Details />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/login" element={<Login />} />

        <Route path="/dashboard" element={<PrivateRoute />}>
          <Route index element={<Dashboard />} />
        </Route>

        <Route path="/view" element={<PrivateRoute />}>
          <Route index element={<Viewproducts />} />
        </Route>

        <Route path="/add" element={<PrivateRoute />}>
          <Route index element={<Addproducts />} />
        </Route>
        <Route path="/otp" element={<PrivateRoute />}>
          <Route index element={<Otp />} />
        </Route>

        <Route path="/view">
          <Route index element={<Viewproducts />} />
          <Route path="update/:id" element={<EditProduct />} />
        </Route>

        {/* <Route path="/axis" element={<Apicard />} />
        <Route path="/table" element={<Table />} /> */}
      </Routes>
      <Myfooter />
    </div>
  );
}

export default App;
