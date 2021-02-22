import React from 'react';
import {Link} from 'react-router-dom'

const NavBar = () => {
    return(
        <ul className="nav-list">
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/searches">All Articles</Link>
            </li>
        </ul>
    )
}

export default NavBar;