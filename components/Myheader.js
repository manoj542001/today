import React from "react";
import { Link } from "react-router-dom";
function Myheader() {
  return (
    <div>
      <nav class="navbar navbar-expand-sm navbar-light bg-dark ">
        <Link to="/home" className="text-decoration-none">
          <h1 class="navbar-brand text-white ps-3 ">Manoj</h1>
        </Link>
        <button
          class="navbar-toggler d-lg-none"
          type="button"
          data-toggle="collapse"
          data-target="#collapsibleNavId"
          aria-controls="collapsibleNavId"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="collapse navbar-collapse d-flex justify-content-end "
          id="collapsibleNavId"
        >
          <ul class="navbar-nav mr-auto mt-2 mt-lg-0  ">
            <li class="nav-item">
              <Link to="/register">
                <button className="btn btn-info me-2">Register</button>
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/login">
                <button className="btn btn-danger me-2">Login</button>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Myheader;
