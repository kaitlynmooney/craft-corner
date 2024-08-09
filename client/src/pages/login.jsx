/* DEPENDENCIES */
import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';
import { Link } from 'react-router-dom';


import Auth from '../utils/auth';

/* LOGIN PAGE */
// export default function LoginPage() {
const LoginPage = () => {
  const [ formState, setFormState ] = useState({ 'login_email': '', 'login_password': '' });
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
        variables: { 
          'login_email': formState['login_email'],
          'login_password': formState['login_email']
        },
      });

      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }

    // clear form values
    setFormState({
      'login_email': '',
      'login_password': '',
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
      {data ? (
              <p>
                Success! You may now head{' '}
                <Link to="/">back to the homepage.</Link>
              </p>
            ) : (
        <form onSubmit={handleFormSubmit}>
          <div className="borders" id="login-div">
            <p>Email:</p>
            <p className="hidden login-alert" id="login-email-alert">
              Please enter your email
            </p>
            <input
              type="text"
              className="borders"
              id="login-email"
              name="login_email"
              value={formState.login_email}
              onChange={handleChange}
            />
            <p>Password:</p>
            <p className="hidden login-alert" id="login-password-alert">
              Please enter your password
            </p>
            <input
              type="password"
              className="borders"
              id="login-password"
              name="login_password"
              value={formState.login_password}
              onChange={handleChange}
            />
            <p className="hidden login-alert" id="login-alert">
              Sorry, the email or password you entered does not match any existing
              account. Please try again!
            </p>
            <button className="borders" id="login" type ="submit">
              Log in
            </button>
          </div>
        </form>
      )}

{error && (
  <div className="my-3 p-3 bg-danger text-white">
    {error.message}
  </div>
)}
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
