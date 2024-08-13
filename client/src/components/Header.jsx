// get loggedin and quiz values from...
import Auth from "../utils/auth";
import { QUERY_ME } from "../utils/queries";
import { useQuery } from "@apollo/client";

function HeaderContent({ user }) {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  // if logged in and completed survey show explore, dashboard and logout
  if (user?.surveyPricePoint > 0) {
    return (
      <header>
        <div className="px-3 py-2 text-white">
          <div className="bg--background-color">
            <div className="my-5 d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
              <div className="d-flex align-items-center my-2 my-lg-0 me-lg-auto text-white text-decoration-none">
                <a
                  className="display-4 mb-0 sofia text-decoration-none "
                  style={{
                    backgroundColor: "var(--background-color)",
                    color: "var(--text-color)",
                  }}
                  href="/"
                  role="button"
                  id="logo"
                >
                  Craft Corner
                </a>
              </div>

              <div className="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small d-flex align-items-center">
                <a
                  className="borders text-decoration-none"
                  href="/explore"
                  role="button"
                  id="exploreButton"
                >
                  Explore
                </a>
              </div>

              <div className="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small d-flex align-items-center">
                <a
                  className="borders text-decoration-none"
                  href="/dashboard"
                  role="button"
                  id="dashboardButton"
                >
                  Dashboard
                </a>
              </div>
              <div className="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small d-flex align-items-center">
                <a
                  className="borders text-decoration-none"
                  role="button"
                  id="logout"
                  onClick={logout}
                >
                  Logout
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  } else {
    // if user is logged in and has not completed the survey
    return (
      <header>
        <div className="px-3 py-2 text-white">
          <div className="bg--background-color">
            <div className="my-5 d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
              <div className="d-flex align-items-center my-2 my-lg-0 me-lg-auto text-white text-decoration-none">
                <a
                  className="display-4 mb-0 sofia text-decoration-none"
                  style={{
                    backgroundColor: "var(--background-color)",
                    color: "var(--text-color)",
                  }}
                  href="/"
                  role="button"
                  id="logo"
                >
                  Craft Corner
                </a>
              </div>

              <div className="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small d-flex align-items-center">
                {/* // logout button if user is logged in */}
                <a
                  className="borders text-decoration-none"
                  role="button"
                  id="logout"
                  onClick={logout}
                >
                  Logout
                </a>

                {/* // quiz if user is logged in and has not completed the quiz */}
                <a
                  className="borders text-decoration-none"
                  href="/survey"
                  role="button"
                  id="surveyButton"
                >
                  Survey
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default function Header() {
  const { loading: userLoading, data: userData } = useQuery(QUERY_ME);

  if (userLoading) {
    return <div className="loading-spinner"></div>;
  }

  const user = userData?.me;
  if (Auth.loggedIn()) {
    return <HeaderContent user={user} />;
  }

  return (
    <header>
      <div>
        <a className="sofia" href="/" role="button" id="logo">
          Craft Corner
        </a>
      </div>

      <div className="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small d-flex align-items-center">
        <a
          className="borders text-decoration-none"
          href="/login"
          role="button"
          id="login"
        >
          Login/Signup
        </a>
      </div>
    </header>
  );
}
