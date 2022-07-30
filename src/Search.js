import React from "react";
import './style/Navbar.css'

const Search = () => {
    return(
        <div className="col2">
            <form>
                <input type="text" className="searchbar"/>
            </form>
            <a onClick={() => alert('clicked')}><img style={{height: '20px', marginLeft: '5px'}} src={require('./images/searchicon.png')}/></a>
        </div>
    )
}

export default Search