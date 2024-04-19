import React, { useState } from "react";
import user from "./../img/Login/person.png";
import email from "./../img/Login/email.png";
import password from "./../img/Login/password.png";
import { useNavigate } from "react-router-dom";

function Login() {
  const [userValue, setUserValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [action, setAction] = useState("Sign Up");
  const navigate = useNavigate();

  const handleSubmit = () => {
    localStorage.setItem("Username", userValue);
    localStorage.setItem("email", emailValue);
    const emailInput = document.querySelector('input[placeholder="Email"]');
    const passwordInput = document.querySelector(
      'input[placeholder="Password"]'
    );

    if (emailInput.value && passwordInput.value) {
      if (action === "Log in") {
        navigate("/home");
      } else if (action === "Sign Up") {
        navigate("/home");
      } else {
        navigate("/");
      }
    } else {
      alert("Please fill in all input fields.");
    }
  };
  return (
    <div className="login__page">
      <div className="login__container">
        <div className="login__header">
          <div className="login__header__text">{action}</div>
        </div>
        <div className="login__inputs">
          {action === "Log in" ? (
            <div></div>
          ) : (
            <div className="login__input">
              <img src={user} alt="user" />
              <input type="text" placeholder="Username" value={userValue} onChange={(e) => setUserValue(e.target.value)}/>
            </div>
          )}
          <div className="login__input">
            <img src={email} alt="email" />
            <input type="text" placeholder="Email" value={emailValue} onChange={(e) => setEmailValue(e.target.value)}/>
          </div>
          <div className="login__input">
            <img src={password} alt="password" />
            <input type="password" placeholder="Password" />
          </div>
        </div>
        {action === "Sign Up" ? (
          <div></div>
        ) : (
          <div className="forgot__password">
            Forget Password? <span>Click Here!</span>
          </div>
        )}
        <div className="submit__container">
          <button
            className={action === "Log in" ? "submit gray" : "submit"}
            onClick={() => {
              setAction("Sign Up");
            }}
          >
            Sign Up
          </button>
          <button
            className={action === "Sign Up" ? "submit gray" : "submit"}
            onClick={() => {
              setAction("Log in");
            }}
          >
            Log in
          </button>
        </div>
        <div className="submitted">
          <button
            onClick={() => {
              handleSubmit();
            }}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
