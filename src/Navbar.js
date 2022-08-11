import React, { useEffect, useState } from "react";
import { NavLink } from 'react-router-dom'
import './style/Navbar.css'
import Search from "./Search";
import axios from "axios";

const Navbar = () => {

    useEffect(() => {
        (async () => {
            await axios
                .get('https://jsonplaceholder.typicode.com/posts')
                .then(res => console.log(res.data))
                .catch(err => console.log(err))
        })()

        return () => {

        }
    }, [])
    return(
        <div className="navbar">
            <nav className="col1">
                <ul>
                    <li>
                        <NavLink
                            to="/pages/Home"
                            className={"link"}
                            style={({isActive}) => 
                                isActive ? active : undefined
                            }
                        >
                            HOME
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/pages/Shop"
                            className={"link"}
                            style={({isActive}) => 
                                isActive ? active : undefined
                            }
                        >
                            SHOP
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/pages/About"
                            className={"link"}
                            style={({isActive}) => 
                                isActive ? active : undefined
                            }
                        >
                            ABOUT US
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/pages/Cart"
                            className={"link"}
                            style={({isActive}) => 
                                isActive ? active : undefined
                            }
                        >
                            CART
                        </NavLink>
                    </li>
                </ul>
            </nav>
            <Search />
        </div>
    )
}

const active = {
    color: "#E0E32C"
}

export default Navbar