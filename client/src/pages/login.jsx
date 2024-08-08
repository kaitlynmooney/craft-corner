/* DEPENDENCIES */

/* LOGIN PAGE */
export default function LoginPage() {
  return (
    <div className="inter">
      <div>
        <button id="show-login-button">Log in</button>
        <button id="show-signup-button">Sign up</button>
      </div>
      <div>
        <div className="hidden" id="signup-div">
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
          <button id="go-sign-up">Sign Up</button>
          <p className="hidden login-alert" id="signup-alert">
            Sorry, we were unable to create your account. Please try again.
          </p>
        </div>
        <div className="hidden" id="login-div">
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
          <button id="login">Log in</button>
        </div>
      </div>
    </div>
  );
}
