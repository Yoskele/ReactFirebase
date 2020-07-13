import React, { Component } from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import TradeCfdLogo from '../imagesFolder/TradeCfdLogo.png';
class NavbarPage extends Component {
    render(){
        return(
            <React.Fragment>
                <Navbar collapseOnSelect expand="lg" variant="dark" className="navbar">
                    <Navbar.Brand href="/"> <img src={TradeCfdLogo} alt="cfd handel" style={{width:"80px"}} /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="w-75 d-flex justify-content-around  mx-lg-auto">
                            <Nav.Link href="/cfd-handel/">CFD-Handel</Nav.Link>
                            <Nav.Link href="/cfd-maklare/">CFD-Mäklare</Nav.Link>
                            <Nav.Link href="/meta-trader-4/">Meta Trader 4</Nav.Link>
                            <Nav.Link href="/day-trading/">Day trading</Nav.Link>
                            <Nav.Link href="/kryptovaluta/">Kryptovaluta</Nav.Link>
                            <Nav.Link href="/guld/">Guld</Nav.Link>
                            <Nav.Link href="/olja/">Olja</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </React.Fragment>
        )
    }
}
export default NavbarPage;