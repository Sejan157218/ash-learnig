import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import blog1 from "../../Image/blog1.png"
import useBlogData from '../hook/useBlogData';
import './Blogs.css';

const Blogs = () => {
    const [blogs, setBlogs] = useBlogData();
    return (
        <div className=" text-center mb-5">

            <Container className=" text-center">
                <div className=" pt-5">
                    <h1 className="blogs-h1">Home </h1>
                    <h5 className="blogs-h5"> >OUR BLOG> </h5>
                </div>
                <Row
                    xs={1} md={3} className="g-4">
                    {blogs.map(blog => (

                        <Col>
                            <Card className="h-100">
                                <Card.Img variant="top" src={blog.img} />
                                <Card.Body>
                                    <Card.Title>{blog.title}</Card.Title>
                                    <Card.Text>
                                        {blog.desc.slice(0, 130)}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
};

export default Blogs;