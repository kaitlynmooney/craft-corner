/* DEPENDENCIES */
import Login from '../components/login';

/* LOGIN PAGE */
const LoginPage = () => {
  
  return (
    <div className="inter" id="login-page">
      <div>
        <button className="no-borders" id="show-login-button">
          Log in
        </button>
        <button className="no-borders" id="show-signup-button">
          Sign up
        </button>
      </div>
      <div id="login-main-div">
        <Login />
      </div>
      <div id="google-oauth-div">
        <p className="borders" id="google-oauth">
          Log in with Google
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
