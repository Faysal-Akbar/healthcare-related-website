import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import img1 from '../../../images/departments/department-1.jpg';
import img2 from '../../../images/departments/department-2.jpg';
import img3 from '../../../images/departments/department-3.jpg';
import img4 from '../../../images/departments/department-4.jpg';

const Department = () => {
    return (
        <Container id="department">
            <h2>Our Hospital Departments</h2>
            <h6>We have many Departments. See the top level department</h6>
            <Row xs={1} md={2} lg={4} className="g-4 mt-5">
                <Col>
                <Card>
                    <Card.Img variant="top" src={img1}/>
                    <Card.Body>
                    <Card.Title>Traumatology</Card.Title>
                    <Card.Text>
                        This is a longer card with supporting text below as a natural
                        lead-in to additional content. This content is a little bit longer.
                    </Card.Text>
                    </Card.Body>
                </Card>
                </Col>
                <Col>
                <Card>
                    <Card.Img variant="top" src={img2}/>
                    <Card.Body>
                    <Card.Title>X-Ray</Card.Title>
                    <Card.Text>
                        This is a longer card with supporting text below as a natural
                        lead-in to additional content. This content is a little bit longer.
                    </Card.Text>
                    </Card.Body>
                </Card>
                </Col>
                <Col>
                <Card>
                    <Card.Img variant="top" src={img3}/>
                    <Card.Body>
                    <Card.Title>Cardiology</Card.Title>
                    <Card.Text>
                        This is a longer card with supporting text below as a natural
                        lead-in to additional content. This content is a little bit longer.
                    </Card.Text>
                    </Card.Body>
                </Card>
                </Col>
                <Col>
                <Card>
                    <Card.Img variant="top" src={img4}/>
                    <Card.Body>
                    <Card.Title>Dental</Card.Title>
                    <Card.Text>
                        This is a longer card with supporting text below as a natural
                        lead-in to additional content.
                    </Card.Text>
                    </Card.Body>
                </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default Department;