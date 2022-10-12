import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div>
            <nav >
                <Link to='/' >Home</Link>
                <Link to='/statics' >Statics</Link>
                <Link to='/blog' >Blog</Link>
            </nav>

        </div>
    );
};

export default Header;