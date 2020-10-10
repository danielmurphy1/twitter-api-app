import React from 'react';
import { Navbar, Nav } from "react-bootstrap";

function Header(){
    return(
        <Navbar className="App-header" collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav>
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/search">Search for Tweets</Nav.Link>
                    <Nav.Link href="/random">Random Tweets</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Navbar>
    )
}

export default Header; 