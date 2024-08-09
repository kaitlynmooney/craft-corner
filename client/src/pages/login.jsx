/* DEPENDENCIES */
import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';

import Auth from '../utils/auth';

/* LOGIN PAGE */
// export default function LoginPage() {
const LoginPage = () => {
  const [ formState, setFormState ] = useState({ email: '', password: '' });
  const [login, { error, data }] = useMutation(LOGIN_USER);

    // update state based on form input changes
    const handleChange = (event) => {
      const { name, value } = event.target;
  
      setFormState({
        ...formState,
        [name]: value,
      });
    };

      // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);
    try {
      const { data } = await login({
        variables: { ...formState },
      });

      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }

    // clear form values
    setFormState({
      email: '',
      password: '',
    });
  };
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
        <div className="borders" id="login-div">
          <p>Email:</p>
          <p className="hidden login-alert" id="login-email-alert">
            Please enter your email
          </p>
          <input
            type="text"
            className="borders"
            id="login-email"
            name="login-email"
          />
          <p>Password:</p>
          <p className="hidden login-alert" id="login-password-alert">
            Please enter your password
          </p>
          <input
            type="password"
            className="borders"
            id="login-password"
            name="login-password"
          />
          <p className="hidden login-alert" id="login-alert">
            Sorry, the email or password you entered does not match any existing
            account. Please try again!
          </p>
          <button className="borders" id="login">
            Log in
          </button>
        </div>
        <div className="hidden borders" id="signup-div">
          <p>Username:</p>
          <p className="hidden login-alert" id="signup-username-alert">
            Please enter a username
          </p>
          <input
            type="text"
            className="borders"
            id="signup-username"
            name="signup-username"
          />
          <p>Email:</p>
          <p className="hidden login-alert" id="signup-email-alert">
            Please enter a valid email
          </p>
          <input
            type="text"
            className="borders"
            id="signup-email"
            name="signup-email"
          />
          <p>Password:</p>
          <p className="hidden login-alert" id="signup-password-alert">
            Please enter a password longer than 6 characters
          </p>
          <input
            type="password"
            className="borders"
            id="signup-password"
            name="signup-password"
          />
          <button className="borders" id="signup">
            Sign Up
          </button>
          <p className="hidden login-alert" id="signup-alert">
            Sorry, we were unable to create your account. Please try again.
          </p>
        </div>
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
