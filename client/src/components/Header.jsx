export default function Header() {

    return (
        <header className="bg-white">
            <nav
                aria-label="Global"
                className=""
            >
                <div className="">
                    <p className="">Craft Corner</p>
                </div>

                <div className="">
                    {/* // login or signup button if user is not logged in */}
                    {!loggedIn && <a className="btn btn-primary" href="#" role="button">Login/Signup</a>}
                    {/* // logout button if user is logged in */}
                    {loggedIn && <a className="btn btn-primary" href="#" role="button">Logout</a>}
                    {/* // dashboard if user is logged in and has completed the quiz*/}
                    {loggedIn && quiz && <a className="btn btn-primary" href="#" role="button">Dashboard</a>}
                    {/* // explore if user is logged in and has completed the quiz */}
                    {loggedIn && quiz && <a className="btn btn-primary" href="#" role="button">Explore</a>}
                    {/* // quiz if user is logged in and has not completed the quiz */}
                    {loggedIn && !quiz && <a className="btn btn-primary" href="#" role="button">Quiz</a>}

                </div>
            </nav>
        </header>
    )
}