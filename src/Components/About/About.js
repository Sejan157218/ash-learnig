import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Card, CardGroup, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import about2 from '../../Image/about3.jpg';
import team1 from '../../Image/team1.png';
import team2 from '../../Image/team2.png';
import team3 from '../../Image/team3.jpg';
import "./About.css"

const About = () => {
    return (
        <div>
            <div className="about-container d-flex justify-content-center align-items-center">
                <Link to="/home" className="text-decoration-none">
                    <h1 className="about-h1">Home </h1>
                </Link>
                <h5 className="about-h5"> >About US> </h5>

            </div>
            <Container className="mt-5">
                <Row>
                    <Col xs={6} md={6} className="mt-5">
                        <h1>ASH University Stablished Since 2000</h1>
                        <p>On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word.

                            A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.

                            On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word "and" and the Little Blind Text should turn around and return to its own, safe country. But nothing the copy said could convince her and so it didn’t take long until a few insidious Copy Writers ambushed her, made her drunk with Longe and Parole and dragged her into their agency, where they abused her for their</p>

                    </Col>
                    <Col xs={6} md={4}><img src={about2} alt="" /></Col>
                </Row>



            </Container>
            <Container className="my-5 text-center">
                <h1>OUR TEAM</h1>
                <CardGroup className="mt-5">

                    <Card>
                        <Card.Img variant="top" src={team1} />
                        <Card.Body>
                            <Card.Title>Daniel Click</Card.Title>
                        </Card.Body>
                        <Card.Footer>
                            <small className="teacher-text">TEACHER</small>
                        </Card.Footer>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src={team2} />
                        <Card.Body>
                            <Card.Title>Mark Jones</Card.Title>
                        </Card.Body>
                        <Card.Footer>
                            <small className="teacher-text">TEACHER</small>
                        </Card.Footer>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src={team3} />
                        <Card.Body>
                            <Card.Title>Maleina Yeong</Card.Title>
                        </Card.Body>
                        <Card.Footer>
                            <small className="teacher-text">TEACHER</small>
                        </Card.Footer>
                    </Card>
                </CardGroup>
            </Container>


        </div>
    );
};

export default About;