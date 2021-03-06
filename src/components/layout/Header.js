import React from 'react';
import { Link } from 'react-router-dom';


function Header() {
    return(
        <header style={headerStyle}>
            <h1>ToDo</h1>
            <Link style={linkStyle} to="/"> Home </Link> | <Link style={linkStyle} to="/about"> About </Link>
        </header>
    )
}

const headerStyle = {
    background: '#333',
    color: '#f00',
    textAlign: 'center',
    padding: '10px'
}

const linkStyle = {
    color: '#f00',
    textDecoration: 'none'
}

export default Header;