import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faEnvelope, faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Badge, Container, Form, Nav, Navbar } from 'react-bootstrap';
import "./MenuBar.css";
import { Link } from 'react-router-dom';

const MenuBar = () => {
    return (
        <div className="menubar">
            {/*  Navigation   */}
            <Navbar expand="lg" className="nav-container">
                <Container fluid>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-lg-0 d-flex align-items-center"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Link to="" className="ms-5  text-decoration-none nav-text"><FontAwesomeIcon icon={faMapMarkerAlt} className="me-1" />203 Fake St. Mountain View, San Francisco</Link>
                            <Link to="" className="ms-5  text-decoration-none nav-text"><FontAwesomeIcon icon={faEnvelope} className="me-1" />info@gmail.com</Link>

                        </Nav>
                        <Form className="d-flex w-50 justify-content-end ">
                            <input
                                type="search"
                                placeholder="Search"
                                className="w-50 p-50 border-0 search-box"
                            />
                            <Button className="btn-color pe-5 border-0">LINK/REGISTER</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>

                {/*  Navigation 2  */}
            </Navbar>
            <Navbar className="nav-2" expand="lg">
                <Container fluid>

                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Link to="/" className="nav-2-nav fw-bold fs-1"><li>Ash Learning</li></Link>

                        </Nav>
                        <Nav
                            className="justify-content-end mt-5 me-5"

                        >
                            <Link to="/home" className="nav-2-nav"><li>Home</li></Link>

                            <Link to="/about" className="nav-2-nav"><li>About</li></Link>
                            <Link to="/service" className="nav-2-nav">
                                <li>Service</li>
                            </Link>
                            <Link to="/blog" className="nav-2-nav">
                                <li>Blogs</li>
                            </Link>
                            <Link to="/contact" className="nav-2-nav">
                                <li>Contact</li>
                            </Link>
                            <Link to="/#" className="nav-2-nav">
                                <FontAwesomeIcon icon={faShoppingBag} className="me-1" />
                                <Badge className="badge">0</Badge>
                            </Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>

    );
};

export default MenuBar;