import React from 'react';
import { Navbar, Nav } from "react-bootstrap";

function Header(){
    return(
        <Navbar className="App-header" collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="#home">{<img src={require("../images/bird.jpg")} style={{height: 60, width: 60}}></img>}</Navbar.Brand>
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