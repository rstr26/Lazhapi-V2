import React from "react";
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return(
        <div>
            <nav>
                <ul>
                    <li>
                        <NavLink
                            to="/pages/Home"
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/pages/Shop"
                        >
                            Shop
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar