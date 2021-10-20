import React from 'react';
import { Container } from 'react-bootstrap';
import founder from '../../images/founder/founder.png';
import ambulance from '../../images/founder/ambulance.jpg';

const About = () => {
    return (
        <Container className="mt-5">
            <h2 className="text-primary mb-5">Story of Doctor's Hospital</h2>
            <p className="text-start fw-bold">Hospital, an institution that is built, staffed, and equipped for the diagnosis of disease; for the treatment, both medical and surgical, of the sick and the injured; and for their housing during this process. The modern hospital also often serves as a centre for investigation and for teaching.
            To better serve the wide-ranging needs of the community, the modern hospital has often developed outpatient facilities, as well as emergency, psychiatric, and rehabilitation services <a href="*">More Details</a> </p>

            <div>
                <h2 className="text-primary mt-5">Founder and his thinking</h2>
                <div className="d-flex align-items-center">
                    <div>
                        <img width="350px" className="rounded" src={founder} alt="" />
                    </div>
                    <div className="ms-5">
                        <h4 className="text-danger">Mohammed Faysal Akbar</h4>
                        <h5 className="text-danger">Founder & CEO</h5>
                        <p className="text-start fw-bold">I always think, our countries people will become good healthy. That why a good environmental hospital is required, so I one day I think that I will stand a very fantastic hospital. I always focus on my countries grow.</p>
                    </div>
                </div>
                <div>
                    <h2 className="text-primary mt-5 mb-5">About Our Ambulance Service</h2>
                    <div className="d-flex align-items-center">
                        <div className="">
                            <p className="text-start fw-bold me-5">Our Ambulance service is very faster for the patients. we highly try to understand there situation. If you need ambulance, please contact <a href="https://www.linkedin.com/in/mohammed-faysal-414b8b1a0/">contact for ambulance</a></p>
                        </div>
                        <div>
                            <img width="350px" className="rounded" src={ambulance} alt="" />
                        </div>
                    </div>
                </div>
            </div>
                <h4 className="text-primary mt-5 mb-5">Keep Eyes for Update Info :</h4>
                <div className="d-flex align-items-center justify-content-around bg-secondary p-3 text-start">
                    <div>
                        <h6>Mobile : 01787870723</h6>
                        <h6>Telephone : +5214520</h6>
                        <p>Every day will remain on this numbers</p>
                    </div>
                    <div>
                        <h6>Twitter <i className="fab fa-twitter"></i></h6>
                        <h6>Facebook <i className="fab fa-facebook"></i></h6>
                        <h6>Instagram <i className="fab fa-instagram-square"></i></h6>
                    </div>
                </div>
        </Container>
    );
};

export default About;