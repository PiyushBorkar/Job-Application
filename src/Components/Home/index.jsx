import React from "react";
import "./index.css";
import Headerss from "../Headerss/index.";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="mainCont">
      <Headerss />
      <div className="text-container">
        <h1>Find The Jobs That</h1>
        <h2>Fits Your Life</h2>
        <br />
        <br />
        <span>
          Millions of people are searching for jobs,salary information,company
          reviews.Find the job that fits your ability and potential
        </span>
        <br />
        <br />
        <Link to="/jobs">
          <button className="btn btn-primary">Find Jobs</button>
        </Link>
      </div>
      <img
        style={{ width: "100%", height: "90vh" }}
        src="https://assets.ccbp.in/frontend/react-js/home-lg-bg.png"
        alt=""
      />
    </div>
  );
};

export default Home;
