import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Doctor from './Doctor';

const Doctors = () => {
    const [doctors, setDoctors] = useState([]);
    useEffect(()=> {
        fetch('./doctors.json')
        .then(res => res.json())
        .then(data => setDoctors(data))
    },[])
    return (
        <Container>
            <div className="row mt-5">
                {
                    doctors.map(doctor => <Doctor
                        key={doctor.id}
                        doctor={doctor}
                    ></Doctor>)
                }
            </div>
        </Container>
    );
};

export default Doctors;