import React from "react";
import {Container, Nav, Navbar} from "react-bootstrap";
import './navbar.css'
import {LinkContainer} from 'react-router-bootstrap'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const Menu = () => {

    return (
        <>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="/">Udomo</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <LinkContainer to="/mangas">
                                <Nav.Link>Mangas</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/bookstores">
                                <Nav.Link>Librairies</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/cart">
                                <Nav.Link><FontAwesomeIcon icon={faCartShopping} /></Nav.Link>
                            </LinkContainer>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Menu
