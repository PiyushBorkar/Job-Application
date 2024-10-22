import React, { useState, useEffect } from "react";
import "./index.css";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const Login = () => {
  const [allValues, setValues] = useState({
    username: "",
    password: "",
    showMsg: "",
  });
  const token = Cookies.get("jwtToken");
  const navigate = useNavigate();

  const onSubmitUserDetails = async (e) => {
    e.preventDefault();
    const api = "https://apis.ccbp.in/login";
    const userDetails = {
      username: allValues.username,
      password: allValues.password,
    };
    const options = {
      method: "POST",
      body: JSON.stringify(userDetails),
    };
    try {
      const response = await fetch(api, options);
      const data = await response.json();
      console.log(response);
      console.log(data);
      if (response.ok === true) {
        setValues({ ...allValues, showMsg: "" });
        Cookies.set("jwtToken", data.jwt_token);
        navigate("/");
      } else {
        setValues({ ...allValues, showMsg: data.error_msg });
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (token !== undefined) {
      navigate("/");
    }
  }, []);

  return (
    <div
      style={{
        backgroundColor: "rgb(25, 35, 25)",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <form onSubmit={onSubmitUserDetails} className="login-form">
        <div className="input-group">
          <label htmlFor="usernameInput" className="input-label">
            Username
          </label>
          <input
            type="text"
            onChange={(e) => {
              setValues({ ...allValues, username: e.target.value });
            }}
            className="input-field"
            id="usernameInput"
          />
          <small className="input-helper-text">
            We'll never share your username with anyone else.
          </small>
        </div>
        <div className="input-group">
          <label htmlFor="passwordInput" className="input-label">
            Password
          </label>
          <input
            type="password"
            onChange={(e) => {
              setValues({ ...allValues, password: e.target.value });
            }}
            className="input-field"
            id="passwordInput"
            placeholder="Password"
          />
        </div>
        <h6 style={{ color: "red" }}>{allValues.showMsg}</h6>
        <button type="submit" className="submit-btn">
          Submit
        </button>
      </form>
    </div>
  );
};
export default Login;
