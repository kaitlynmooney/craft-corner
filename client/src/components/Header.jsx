// get loggedin and quiz values from...
import Auth from "../utils/auth";
import { useState } from 'react';

export default function Header() {
  const [showDashButton, setShowDashButton] = useState(false);  
  // const [ quiz, setQuiz ] = useState();

  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  const setShowDashButton = (value) => {
    
  }



  return (
    <header>
      <div className="px-3 py-2 text-white" style={{ backgroundColor: 'var(--background-color)'}}>
        <div className="bg--background-color">
          <div className="my-5 d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
              <div className="d-flex align-items-center my-2 my-lg-0 me-lg-auto text-white text-decoration-none">
                <a className="display-4 mb-0 sofia text-decoration-none" style={{ backgroundColor: 'var(--background-color)', color: 'var(--text-color)'}} href="/" role="button" id="logo">Craft Corner</a>
              </div>

              <div className="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small d-flex align-items-center">
                {/* // login or signup button if user is not logged in */}
                {!Auth.loggedIn() && <a className="borders text-decoration-none" href="/login" role="button" id="login">
                  Login/Signup
                </a>}

                {/* // logout button if user is logged in */}
                {Auth.loggedIn() && <a className="borders text-decoration-none" href="#" role="button" id="logout" onClick={logout}>
                  Logout
                </a>}                 
                {/* // dashboard if user is logged in and has completed the quiz*/}
                {Auth.loggedIn() && showDashButton && <a className="borders text-decoration-none" href="#" role="button" id="logout" onClick={logout}>
                  Dashboard
                </a>}                  {/* // explore if user is logged in and has completed the quiz */}
                {/* {loggedIn && quiz && <a className="btn btn-primary" href="#" role="button">Explore</a>} */}
                {/* // quiz if user is logged in and has not completed the quiz */}
                {/* {loggedIn && !quiz && <a className="btn btn-primary" href="#" role="button">Quiz</a>} */}
              </div>
          </div>
        </div>
      </div>
    </header>
  );
}
