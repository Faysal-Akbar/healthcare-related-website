import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Service from './Service';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(()=> {
        fetch('./services.json')
        .then(res => res.json())
        .then(data => setServices(data))
    }, [])
    return (
        <Container id="services" className="d-flex mt-5 mb-5">
            <div className="row">
                <h2 className="mb-5">Hospital Services</h2>
                {
                    services.map(service => <Service
                        key={service.id}
                        service={service}
                    ></Service>)
                }
            </div>
        </Container>
    );
};

export default Services;