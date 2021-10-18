import React from 'react';
import { Container } from 'react-bootstrap';
import './Footer.css';

const Footer = () => {
    return (
        <div id="footer" className="text-light bg-dark p-2">
            <Container className="d-flex justify-content-between">
                <div className="mt-4">
                    <h5>Contact Us</h5>
                    <ul>
                        <li>Facebook <i className="fab fa-facebook"></i></li>
                        <li>Instagram <i className="fab fa-instagram-square"></i></li>
                        <li>Twitter <i className="fab fa-twitter"></i></li>
                    </ul>
                </div>
                <div className="mt-4">
                    <h5>Our Location</h5>
                    <p>12 road, Mirpur-12, Dhaka, Bangladesh. <br /> Cell No: +95622112</p>
                </div>
            </Container>
            <p style={{textAlign:"center"}}><i className="far fa-copyright"></i> Copyright. All Rights Reserved.</p>
        </div>
    );
};

export default Footer;