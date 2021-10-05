import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './OurServiceses.css'
import inade from "../../Image/carocel.jpg"
import { Link } from 'react-router-dom';
import Button from '@restart/ui/esm/Button';
import useServiceData from '../hook/useServiceData';
import { addToData } from '../../LocalStorage';

const OurServiceses = () => {
    const [services, setService] = useServiceData();
    const handlerToAdd = item => {
        item.quantity = 1
        addToData(item.key);
    }
    return (
        <div className="ourserviceses-container mb-4">
            <p className="pt-5">THE BEST CHOISE</p>
            <h2>OUR SERVISES</h2>

            <Container>
                <Row xs={1} md={4} className="g-4 mt-3">
                    {services.map(service => (
                        <Col className="ourserviceses-card">
                            <Card className="h-100">
                                <Card.Img variant="top" src={service.img} />
                                <Card.Body>
                                    <Card.Title>{service.Course}</Card.Title>
                                    <Card.Text>
                                        {service.title}
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                    <p className="d-flex justify-content-between"><small className="text-muted">started on 01.01.2022</small><small className=" price">$ {service.price}</small> </p>
                                </Card.Footer>
                            </Card>

                            <Card className="content h-100 ">
                                <Card.Body className="hover-card">
                                    <Card.Header><h5>{service.title}</h5></Card.Header>
                                    <Card.Text>
                                        <p>This is a longer card with supporting text below as a natural
                                            lead-in to additional content. This content is a little bit longer.</p>
                                    </Card.Text>
                                    <Link to={`/services/${service.key}`}><Button className="btn-service me-1">MORE INFO</Button></Link>
                                    <Button className="btn-service" onClick={() => handlerToAdd(service)}><FontAwesomeIcon icon={faShoppingCart} /></Button>
                                </Card.Body>
                            </Card>

                        </Col>
                    ))}
                </Row>
            </Container>
        </div >
    );
};

export default OurServiceses;