import React, { useEffect, useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

const ServiceDetail = () => {
    const {serviceId} = useParams();
    
    const [services, setServices] = useState([]);
    useEffect(()=> {
        fetch('/services.json')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
    const service = services.find(service => service.id == serviceId)

    return (
        <Container className="mt-5">
            <div>
                <img width="250px" src={service?.image} alt="" />
                <h3>{service?.name}</h3>
                <h6>{service?.description}</h6>
                <h6>Total cost for a check : $550</h6>
                <Link to="/home">
                    <Button variant="outline-primary">Go to Home</Button>
                </Link>
            </div>
        </Container>
    );
};

export default ServiceDetail;