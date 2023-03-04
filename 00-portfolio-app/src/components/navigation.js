import React from 'react';

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
        <div style={styles.card}>
            <div style={styles.heading}>Home</div>
        </div>
    );
}

export default Navbar;
