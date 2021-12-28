import React from 'react';
import Navbar from './Navbar/Navbar';
import './Header.css'


const Header = () => {
    return (
        <section className="header-bg">
            <div>
                <Navbar></Navbar>
            </div>
            <div className="header-text">
                <p className="header-top-text">Computer Engineering</p>
                <p className="text-white">142,765 Computer Engineer follow this</p>
            </div>
        </section>
    );
};

export default Header;