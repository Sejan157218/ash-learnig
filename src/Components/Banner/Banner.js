import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import img from '../../Image/carocel.jpg'
import img1 from '../../Image/carosel1.jpg'
import "./Banner.css"

const Banner = () => {
    return (
        <Carousel >
            <Carousel.Item>
                <img
                    className="d-block w-100 img-height"
                    src={img1}
                    alt="Second slide"
                />
                <Carousel.Caption>
                    <p>ASH Innovative & Succesfull</p>
                    <h1 className="banner-title">ONLINE COURSES</h1>
                    <Link to="/#"><Button className="banner-btn">MORE COURSES</Button></Link>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 img-height"
                    src={img}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <p>ASH Innovative & Succesfull</p>
                    <h1 className="banner-title">ANY LEVEL OR DEGREE</h1>
                    <Link to="/#"><Button className="banner-btn">MORE COURSES</Button></Link>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;