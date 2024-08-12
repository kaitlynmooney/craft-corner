/* DEPENDENCIES */
import { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_USER } from "../utils/mutations";
import { Link } from "react-router-dom";

import Auth from "../utils/auth";

const Signup = () => {
  const [formState, setFormState] = useState({
    signup_username: "",
    signup_email: "",
    signup_password: "",
  });
  const [addUser, { error, data }] = useMutation(ADD_USER);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);

    try {
      const { data } = await addUser({
        variables: { ...formState },
      });

      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }
  };
  return (
    <div className="inter" id="signup-section">
      <div id="signup-section-div">
        {data ? (
          <Link to="/"></Link>
        ) : (
          <form onSubmit={handleFormSubmit}>
            <div className="borders" id="signup-div">
              <p>Username:</p>
              <p className="ogin-alert hidden" id="signup-username-alert">
                Please enter a username
              </p>
              <input
                type="text"
                className="borders"
                id="signup-username"
                name="signup_username"
                value={formState.signup_username}
                onChange={handleChange}
              />
              <p>Email:</p>
              <p className="login-alert hidden" id="signup-email-alert">
                Please enter a valid email
              </p>
              <input
                type="text"
                className="borders"
                id="signup-email"
                name="signup_email"
                value={formState.signup_email}
                onChange={handleChange}
              />
              <p>Password:</p>
              <p className="hidden login-alert" id="signup-password-alert">
                Please enter a password longer than 6 characters
              </p>
              <input
                type="password"
                className="borders"
                id="signup-password"
                name="signup_password"
                value={formState.signup_password}
                onChange={handleChange}
              />
              <button className="dark-button" id="signup-button" type="submit">
                Sign Up
              </button>
              <p className="hidden login-alert" id="signup-alert">
                Sorry, we were unable to create your account. Please try again.
              </p>
            </div>
          </form>
        )}
        {error && (
          <div className="my-3 p-3 bg-danger text-white">{error.message}</div>
        )}
      </div>
    </div>
  );
};

export default Signup;
