import React from 'react'

function About() {
    return (
        <React.Fragment>
            <h1 style={headerStyle}>About</h1>
            <p>This is the TodoList app, coded along by <span style={spanStyle}>Ali Sayar</span> with a react crash course of Brad Traversy.  </p>
        </React.Fragment>
    )
}

const headerStyle = {
    textAlign: 'center',
    fontSize: '20px',
    color: '#f00'
}

const spanStyle = {
    color: '#f00',
    textDecoration: 'italic'
}

export default About;