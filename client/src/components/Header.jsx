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
        <div>
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
        <div>
          <a
            className="borders text-decoration-none"
            href="/explore"
            role="button"
            id="exploreButton"
          >
            Explore
          </a>
          <a
            className="borders text-decoration-none"
            href="/dashboard"
            role="button"
            id="dashboardButton"
          >
            Dashboard
          </a>
          <a
            className="borders text-decoration-none"
            role="button"
            id="logout"
            onClick={logout}
          >
            Logout
          </a>
        </div>
      </header>
    );
  } else {
    // if user is logged in and has not completed the survey
    return (
      <header>
        <div>
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

        <div>
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

      <div>
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
