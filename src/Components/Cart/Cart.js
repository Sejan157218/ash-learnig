import React, { useContext, useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { ServiceContext } from '../../App';
import { addToData, deleteData, getData, removeToData } from '../../LocalStorage';
import useServiceData from '../hook/useServiceData';
import './Cart.css'

const Cart = () => {
    const [services] = useServiceData();
    const [cartservice, setCartService] = useState(services);
    useEffect(() => {
        if (services.length) {
            const data = getData();
            const saveData = [];
            for (const serviceKey in data) {
                const serviceCart = services.find(service => service.key === serviceKey)
                const quantity = data[serviceKey];
                serviceCart.quantity = quantity;
                saveData.push(serviceCart);
            }
            setCartService(saveData)
        }
    }, [services])

    const handlerToCart = item => {
        if (cartservice.length) {
            const newService = [...cartservice];
            const newServiceCart = newService.find(product => product.key == item.key);
            newServiceCart.quantity += 1;
            setCartService(newService)
        }
        addToData(item.key);
    }
    const handlerToRemove = (item) => {
        if (cartservice.length) {
            const newService = [...cartservice];
            const newServiceCart = newService.find(product => product.key == item.key);
            if (newServiceCart.quantity > 0) {
                newServiceCart.quantity -= 1;
            }
            setCartService(newService)
        }
        removeToData(item.key)
    }


    const handlerToDelete = item => {
        if (cartservice.length) {
            const newService = [...cartservice];
            const newServiceCart = newService.filter(service => service.key !== item.key);
            setCartService(newServiceCart)
        }
        deleteData(item.key)
    }

    const totalQuantity = cartservice.reduce((previous, current) => previous + current.quantity, 0);
    const totalPrice = cartservice.reduce((previous, current) => previous + (current.price * current.quantity), 0);
    // const [SetcartQuantity] = useContext(ServiceContext);
    // SetcartQuantity(totalQuantity);
    // console.log(totalQuantity);
    return (
        <div>
            <Row xs={1} md={1} className="g-4">
                {cartservice.map(service => (
                    <Col>
                        <Card>
                            <div className="cart-card">
                                <Card.Img className="cart-img" src={service.img} />
                                <div>
                                    <p className="cart-title ms-3">{service.title}</p>
                                    <p className="cart-title ms-3">${service.price} x {service.quantity}</p>
                                    <button className="mx-2 cart-btn" onClick={() => handlerToRemove(service)}><i class="fas fa-minus"></i></button>
                                    {service.quantity}
                                    <button className="ms-2 cart-btn" onClick={() => handlerToCart(service)}><i class="fas fa-plus"></i></button>
                                    <button className="ms-2 cart-btn" onClick={() => handlerToDelete(service)}><i class="fas fa-trash"></i></button>
                                </div>
                            </div>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div >
    );
};

export default Cart;