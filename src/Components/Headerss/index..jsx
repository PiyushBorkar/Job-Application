import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./index.css";
import Cookies from "js-cookie";
const Headerss = () => {
  return (
    <div id="navBar">
      <Link to="/">
        <img src="https://assets.ccbp.in/frontend/react-js/logo-img.png" />
      </Link>
      <div className="headings">
        <ul>
          <li>
            <Link to="/"> Home</Link>
          </li>
          <li>
            <Link to="/jobs"> Jobs</Link>
          </li>
        </ul>
      </div>

      <Link to="/login">
        <button
          className="btn btn-primary"
          onClick={() => {
            Cookies.remove("jwtToken");
          }}
        >
          Logout
        </button>
      </Link>
    </div>
  );
};

export default Headerss;
