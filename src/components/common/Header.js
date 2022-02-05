import React from 'react';
import {NavLink} from 'react-router-dom';

const Header = () => {
    return(
        <div>
        <nav>
            <NavLink to="/" activeClassName="activeHeaderLink" className="inactiveHeaderLink" exact>Home</NavLink>
        </nav>
        </div>
    );
};

export default Header;