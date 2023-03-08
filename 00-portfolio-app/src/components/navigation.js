import React from 'react';
import './styling/Navbar.css';

const styles = {
    navbarStyle: {
        background: 'lightbblue',
        justifyContent: 'flex-end',
    },
};

function Navbar() {
    return (
        <nav style={styles.navbarStyle} className="Navbar">
          <a href="/"> About me</a>
            <a href="/"> Resume</a>
            <a href="/"> Contact</a>
            <a href="/"> Projects</a>
            </nav>
    );
}

export default Navbar;
