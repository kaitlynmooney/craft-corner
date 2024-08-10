/* DEPENDENCIES */
import Login from '../components/login';
import { useState } from 'react';
import Signup from '../components/Signup';

/* LOGIN PAGE */
const LoginPage = () => {

  const [ loginShow, setLoginShow ] = useState(true);
  const [ signupShow, setSignupShow ] = useState(false);
  
  return (
    <div className="inter" id="login-page">
      <div>
        <button 
          className="no-borders" 
          id="show-login-button" 
          onClick={ () => {setLoginShow(true); setSignupShow(false)}}
          >
          Log in
        </button>
        <button 
          className="no-borders" 
          id="show-signup-button"
          onClick={ () => {setLoginShow(false); setSignupShow(true)}}
          >
          Sign up
        </button>
      </div>
      <div id="login-main-div">
        {loginShow && <Login />}
        {signupShow && <Signup />}
      </div>
    </div>
  );
};

export default LoginPage;
