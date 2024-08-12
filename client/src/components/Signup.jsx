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
              <input
                type="text"
                className="borders"
                id="signup-username"
                name="signup_username"
                value={formState.signup_username}
                onChange={handleChange}
              />
              <p>Email:</p>
              <input
                type="text"
                className="borders"
                id="signup-email"
                name="signup_email"
                value={formState.signup_email}
                onChange={handleChange}
              />
              <p>Password:</p>
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
              {error && (
                <p className="login-alert" id="signup-alert">
                  Sorry, we were unable to create your account. Please add a
                  username, valid email, and password.
                </p>
              )}
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default Signup;
