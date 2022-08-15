import React, { useEffect, useState } from "react";
import { NavLink } from 'react-router-dom'
import './style/Navbar.css'
import Search from "./Search";
import axios from "axios";
import api from "./apiKey";

const Navbar = () => {

    useEffect(() => {
        (async => {
            api.products.list()
                .then(res => console.log(res))
                .catch(err => console.log(err))
        })()
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