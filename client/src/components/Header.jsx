import { useState } from 'react';

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
                    {!loggedIn && <button type="button" className="btn btn-primary">Login/SignUp</button>}
                    {/* // logout button if user is logged in */}
                    {loggedIn && <button type="button" className="btn btn-primary">Logout</button>}
                    {/* // dashboard if user is logged in */}
                    {loggedIn && <button type="button" className="btn btn-primary">Dashboard</button>}
                    {/* // explore if user is logged in */}
                    {loggedIn && <button type="button" className="btn btn-primary">Explore</button>}

                </div>
            </nav>
        </header>
    )
}