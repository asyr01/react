import React from 'react';

function Header() {
    return(
        <header style={headerStyle}>
            <h1>ToDo</h1>
        </header>
    )
}

const headerStyle = {
    background: '#333',
    color: '#f00',
    textAlign: 'center',
    padding: '10px'
}

export default Header;