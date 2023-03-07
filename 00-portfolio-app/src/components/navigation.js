import React from 'react';
import './styling/Navbar.css';

const styles = {
    card:{
        margin:20,
    },
    heading: {
        minHeight: 40,
        lineHeight: 3,
    },
};

function Navbar() {
    return (
        <nav style={styles.navbarStyle} className="Navbar">
           <ul>
            <li>
            <a href="/"> About me</a>
            </li>
            <li>
            <a href="/"> Resume</a>
            </li>
            <li>
            <a href="/"> Contact</a>
            </li>
            <li>
            <a href="/"> Projects</a>
            </li>      
            
            </ul>
            </nav>
    );
}

export default Navbar;
