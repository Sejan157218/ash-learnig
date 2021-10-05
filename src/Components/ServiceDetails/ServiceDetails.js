import Button from '@restart/ui/esm/Button';
import React from 'react';
import { useContext } from 'react';
import { Card, Carousel, Image } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { ServiceContext } from '../../App';
import "./ServiceDetails.css"



const ServiceDetails = () => {
    const [serviceDetails] = useContext(ServiceContext);
    const { serviceId } = useParams();
    const findService = serviceDetails.find(service => service.key === serviceId);
    console.log(findService);

    return (
        <div className="container">
            <Carousel>
                <Carousel.Item className="details-container mb-5">
                    <img
                        className="d-block w-100 img-height"
                        src={findService?.img}
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <div className="text-color">
                            <p>{findService?.Course}</p>
                            <h1 className="banner-title">{findService?.title}</h1>
                            <p>{findService.desc}</p>
                            <h1 className="banner-title">${findService?.price}</h1>
                            <Link to="/"><Button className="banner-btn text-color me-2">Back to Home</Button></Link>
                            <Link to="/service"><Button className="banner-btn text-color">Back to Services</Button></Link>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default ServiceDetails;