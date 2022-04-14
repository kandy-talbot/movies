import React from "react";
import { Outlet, NavLink } from "react-router-dom";
import "./Navbar.scss";

const Navbar = () => {
    return (
        <div style={{ display: "flex" }}>
            <nav>
                <ul>
                    <li>
                        <NavLink to="/">Search Movie</NavLink>
                    </li>
                    <li>
                        <NavLink to="/my-favorites">Favorites</NavLink>
                    </li>
                </ul>
            </nav>
            <Outlet />
        </div>
    );
};

export default Navbar;
