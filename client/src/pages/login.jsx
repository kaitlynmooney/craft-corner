/* DEPENDENCIES */
import { useState } from "react";
import Login from "../components/Login";
import Signup from "../components/Signup";
import GoogleOAuth from "../components/GoogleOAuth";

/* LOGIN PAGE */
const LoginPage = () => {
  const [loginShow, setLoginShow] = useState(true);
  const [signupShow, setSignupShow] = useState(false);

  return (
    <div className="inter" id="login-page">
      <div id="show-login-buttons">
        <button
          className="no-borders"
          id="show-login-button"
          onClick={() => {
            setLoginShow(true);
            setSignupShow(false);
          }}
        >
          Log in
        </button>
        <button
          className="no-borders"
          id="show-signup-button"
          onClick={() => {
            setLoginShow(false);
            setSignupShow(true);
          }}
        >
          Sign up
        </button>
      </div>
      <div id="login-main-div">
        {loginShow && <Login />}
        {signupShow && <Signup />}
        <GoogleOAuth />
      </div>
    </div>
  );
};

export default LoginPage;
