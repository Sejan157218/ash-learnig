import { faEnvelope, faAddressCard, faPhoneVolume } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Card, Col, Container, InputGroup, Nav, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Footer.css'

const Footer = () => {
    return (
        <div>
            <div className="footer-container">
                <Container className="footer-container">
                    <Row className="justify-content-md-center  pt-5">
                        <Col xs={12} md={4}>
                            <Card className="footer-Cart">
                                <Card.Body>
                                    <Card.Title>Have a Questions?</Card.Title>
                                    <Card.Text>
                                        This is a longer card with supporting text below as a natural
                                        lead-in to additional content. This content is a little bit longer.
                                        <p><span><FontAwesomeIcon icon={faAddressCard} className="me-1 mt-4 footer-icon" />	203 Fake St. Mountain View, San Francisco, California, USA</span></p>
                                        <p><span><FontAwesomeIcon icon={faEnvelope} className="me-1 footer-icon" />info@gmail.com</span></p>
                                        <p><span><FontAwesomeIcon icon={faPhoneVolume} className="me-1 footer-icon" />1 (888) 1970901365</span></p>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xs={12} md={4} className="footer-nav">
                            <h1>Link</h1>
                            <Nav className="flex-column">
                                <NavLink className="footer-navlink" to="/">Home</NavLink>
                                <NavLink className="footer-navlink" to="/about">About</NavLink>
                                <NavLink className="footer-navlink" to="/service">Service</NavLink>
                                <NavLink className="footer-navlink" to="/blog">Blog</NavLink>
                                <NavLink className="footer-navlink" to="/contact">Contact</NavLink>

                            </Nav>

                        </Col>
                        <Col xs={12} md={4} className="footer-nav ">
                            <h1>Newsletter</h1>

                            <InputGroup className="mt-3">
                                <input
                                    className="search-box "
                                    placeholder="Recipient's username"
                                    aria-label="Recipient's username"
                                    aria-describedby="basic-addon2"
                                />
                                <Button className="btn-color">
                                    SUBSCRIBE
                                </Button>
                            </InputGroup>
                        </Col>

                    </Row>
                </Container >


            </div>
            <div className="p-5 footer-last">
                <Container >
                    <Row className="">
                        <Col sm={8} className="footer-nav">ASH © 2021 All rights reserved. Terms of use and Privacy Policy</Col>
                        <Col sm={4} className="social-icon"><i class="fab fa-facebook-f me-3"></i><i class="fab fa-github me-3"></i><i class="fab fa-twitter me-3"></i><i class="fab fa-linkedin-in me-3"></i></Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default Footer;