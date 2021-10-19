import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../images/logo/logo.png';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../Hooks/useAuth';

const Header = () => {
    const {user, logOut} = useAuth();
    return (
        <>
        <Navbar bg="primary" variant="dark" sticky="top" collapseOnSelect expand="lg">
            <Container>
            <Navbar.Brand href="#home">
                <img
                alt=""
                src={logo}
                width="40"
                height="30"
                className="d-inline-block align-top"
                />{' '}
                Doctor's Hospital
            </Navbar.Brand>
                <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
                <Nav className="mx-auto">
                    <Nav.Link as={HashLink} to="/home#home">Home</Nav.Link>
                    <Nav.Link as={HashLink} to="/home#services">Services</Nav.Link>
                    <Nav.Link as={HashLink} to="/home#department">Departments</Nav.Link>
                    <Nav.Link as={Link} to="/doctor">Doctors</Nav.Link>
                    <Nav.Link as={Link} to="/about">About Us</Nav.Link>
                </Nav>
                {
                user.email || user.displayName ? <button onClick={logOut} className="btn btn-danger me-2">Logout</button> :
                <Link to="/register">
                    <button className="btn btn-success me-3">Login</button>
                </Link>
                }
                <Navbar.Text>
                    Signed in as: <a href="#login">{user?.displayName}</a>
                </Navbar.Text>
            </Navbar.Collapse>
            </Container>
        </Navbar>
        </>
    );
};

export default Header;