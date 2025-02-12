import '../styles/Header-styles.css';
import React from 'react';
import Nav from './Nav';

function Header() {
    return (
        <header className="header">
            <h1>Chad Harris</h1>
            <Nav />
        </header>
    );
};

export default Header;