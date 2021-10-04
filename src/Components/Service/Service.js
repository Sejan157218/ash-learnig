import React from 'react';
import { Link } from 'react-router-dom';
import OurServiceses from '../OurServiceses/OurServiceses';
import "./Service.css"

const Service = () => {
    return (
        <div >
            <div className="service-container d-flex justify-content-center align-items-center">
                <Link to="/home" className="text-decoration-none">
                    <h1 className="about-h1">Home </h1>
                </Link>
                <h5 className="about-h5"> >About US> </h5>
            </div>
            <OurServiceses></OurServiceses>
        </div>
    );
};

export default Service;