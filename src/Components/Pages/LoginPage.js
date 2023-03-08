import React, { useContext, useRef } from "react";
import { useHistory } from "react-router-dom";
import CartContext from "../Context/cart-context";
import classes from "./LoginPage.module.css";

const LoginPage = () => {
  const emailInput = useRef("");
  const passwordInput = useRef("");
  const history = useHistory("");
  const useCtx = useContext(CartContext);
  const loginSubmitHandler = async (event) => {
    event.preventDefault();
    const response = await fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyA44FDI677A07gl8waK8TuqqkK1MhV7_cg",
      {
        method: "POST",
        body: JSON.stringify({
          email: emailInput.current.value,
          password: passwordInput.current.value,
          returnSecureToken: true
        }),
        headers: {
          "Content-Type": "application/json"
        }
      }
    );
    if (response.ok) {
      const data = await response.json();
      const regex = /[.@]/g;
      const mailId = data.email.replace(regex, "");
      useCtx.login(data.idToken, mailId);
      history.replace("/store");
    } else {
      const data = await response.json();
      alert(data.error.message);
    }
  };
  return (
    <section className={classes.login}>
      <h1>Login</h1>
      <form onSubmit={loginSubmitHandler}>
        <div className={classes.control}>
          <label htmlFor="email">Your Email</label>
          <input type="email" id="email" required ref={emailInput} />
        </div>
        <div className={classes.control}>
          <label htmlFor="password">Your Password</label>
          <input type="password" id="password" required ref={passwordInput} />
        </div>
        <div className={classes.actions}>
          <button>Login</button>
        </div>
      </form>
    </section>
  );
};

export default LoginPage;
