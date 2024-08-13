// AdminNavbar.jsx
import React from 'react';
import { Navbar, Nav, Container, Form, FormControl, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const AdminNavbar = () => {
    return (
        <>
            <Navbar style={{ backgroundColor: '#2C3E50' }} variant="dark" expand="lg">
                <Container fluid>
                    <Navbar.Brand as={Link} to="/">Admin Panel</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/home">Home</Nav.Link>
                        </Nav>
                        <Form className="d-flex me-2">
                            <FormControl
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button variant="outline-light">Search</Button>
                        </Form>
                        <Nav>
                            <Nav.Link as={Link} to="/login">
                                <Button variant="danger">Logout</Button>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <div style={{ paddingBottom: '20px' }}></div>
        </>
    );
};

export default AdminNavbar;
