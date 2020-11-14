import React from 'react';
import { Link } from 'react-router-dom';
import "./nav.css";

function Nav(props) {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <a className="navbar-brand" href="#">Navbar</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
                <ul className="navbar-nav ml-auto">
                    <li className={(props.loggedIn === "true") ? "" : "hiddenForNav"}>
                        <Link to="#">{`Welcome, ${localStorage.getItem('username')}!`}</Link>
                    </li>
                    <li onClick={props.manageLogin} style={{ cursor: "pointer" }}>
                        <Link to={(props.loggedIn === "true") ? "/" : "/loginpage"}>{(props.loggedIn === "true") ? "Log Out" : "Log In"}</Link>
                    </li>
                    <li className={(props.loggedIn === "true") ? "hiddenForNav" : ""}>
                        <Link to="/signup">Sign Up</Link>
                    </li>
                    <li className={(props.loggedIn === "true") ? "" : "hiddenForNav"}>
                        <Link to="/myevents">My Events</Link>
                    </li>
                    <li className={(props.loggedIn === "true") ? "" : "hiddenForNav"}>
                        <Link to="/myaccount">My Account</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Nav;


