/* DEPENDENCIES */
import { useState } from "react";
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../utils/mutations";
import { Link } from "react-router-dom";
import Auth from "../utils/auth";

/* LOGIN */
const Login = () => {
  const [formState, setFormState] = useState({
    login_email: "",
    login_password: "",
  });
  const [login, { error, data }] = useMutation(LOGIN_USER);

  // Update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // Submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();
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
      login_email: "",
      login_password: "",
    });
  };

  return (
    <div className="inter" id="login-section">
      <div id="login-section-div">
        <form onSubmit={handleFormSubmit}>
          <div className="borders" id="login-div">
            <p>Email:</p>
            <input
              type="text"
              className="borders"
              id="login-email"
              name="login_email"
              value={formState.login_email}
              onChange={handleChange}
            />
            <p>Password:</p>
            <input
              type="password"
              className="borders"
              id="login-password"
              name="login_password"
              value={formState.login_password}
              onChange={handleChange}
            />
            {error && (
              <p className="login-alert" id="login-alert">
                Sorry, the email or password you entered does not match any
                existing account. Please try again!
              </p>
            )}
            <button className="dark-button" id="login-button" type="submit">
              Log in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
