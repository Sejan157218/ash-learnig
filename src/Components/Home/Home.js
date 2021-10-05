import React from 'react';
import Banner from '../Banner/Banner';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Button from '@restart/ui/esm/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import useServiceData from '../hook/useServiceData';
import { useContext } from 'react';
import { ServiceContext } from '../../App';


const Home = () => {
    const [services, setService] = useServiceData();
    const [serviceDetails, setserviceDetails] = useContext(ServiceContext);
    setserviceDetails(services);
    return (
        <div>
            <Banner></Banner>
            <div className="ourserviceses-container mb-4">
                <p className="pt-5">THE BEST CHOISE</p>
                <h2>OUR POPULAR SERVICES</h2>
                <Link to={`/services/${1}`} >
                    <Button className="btn-service me-1">MORE INFO</Button>
                </Link>

                <Container>
                    <Row xs={1} md={4} className="g-4 mt-3">
                        {services?.slice(0, 4).map(service => (
                            <Col className="ourserviceses-card">
                                <Card className="h-100">
                                    <Card.Img variant="top" src={service?.img} />
                                    <Card.Body>
                                        <Card.Title>{service?.Course}</Card.Title>
                                        <Card.Text>
                                            {service?.title}
                                        </Card.Text>
                                    </Card.Body>
                                    <Card.Footer>
                                        <p className="d-flex justify-content-between"><small className="text-muted">started on 01.01.2022</small><small className=" price">$ {service?.price}</small> </p>
                                    </Card.Footer>
                                </Card>


                                <Card className="content h-100 ">
                                    <Card.Body className="hover-card">
                                        <Card.Header><h5>{service?.title}</h5></Card.Header>
                                        <Card.Text>
                                            <p>This is a longer card with supporting text below as a natural
                                                lead-in to additional content. This content is a little bit longer.</p>
                                        </Card.Text>
                                        <Link to={`/services/${service.key}`} >
                                            <Button className="btn-service me-1">MORE INFO</Button>
                                        </Link>
                                        <Link to="/#"><Button className="btn-service"><FontAwesomeIcon icon={faShoppingCart} /></Button></Link>
                                    </Card.Body>
                                </Card>

                            </Col>
                        ))}
                    </Row>
                </Container>
            </div >
        </div>
    );
};

export default Home;