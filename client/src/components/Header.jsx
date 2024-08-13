// get loggedin and quiz values from...
import Auth from "../utils/auth";

export default function Header() {
  // const [ loggedIn, setloggedIn ] = useState();
  // const [ quiz, setQuiz ] = useState();
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  return (
    <header>
      <div>
        <a className="sofia" href="/" role="button" id="logo">
          Craft Corner
        </a>
      </div>

      <div>
        {/* // login or signup button if user is not logged in */}
        {!Auth.loggedIn() && (
          <a
            className="borders text-decoration-none"
            href="/login"
            role="button"
            id="login"
          >
            Login
          </a>
        )}
        {/* // logout button if user is logged in */}
        {Auth.loggedIn() && (
          <a
            className="borders text-decoration-none"
            href="#"
            role="button"
            id="logout"
            onClick={logout}
          >
            Logout
          </a>
        )}{" "}
        {/* // dashboard if user is logged in and has completed the quiz*/}
        {/* {loggedIn && quiz && <a className="btn btn-primary" href="#" role="button">Dashboard</a>} */}
        {/* // explore if user is logged in and has completed the quiz */}
        {/* {loggedIn && quiz && <a className="btn btn-primary" href="#" role="button">Explore</a>} */}
        {/* // quiz if user is logged in and has not completed the quiz */}
        {/* {loggedIn && !quiz && <a className="btn btn-primary" href="#" role="button">Quiz</a>} */}
      </div>
    </header>
  );
}
