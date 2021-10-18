import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../../images/Banner/banner-1.jpg';
import banner2 from '../../../images/Banner/banner-2.jpg';
import banner3 from '../../../images/Banner/banner-3.jpg';

const Banner = () => {
    return (
        <Carousel fade>
            <Carousel.Item>
                <img height="500px"
                className="d-block w-100"
                src={banner1}
                alt="First slide"
                />
                <Carousel.Caption className="text-dark">
                <h3>Our Single Cabin</h3>
                <p>This cabin very comfortable for patients.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img height="500px"
                className="d-block w-100"
                src={banner2}
                alt="Second slide"
                />

                <Carousel.Caption className="text-dark">
                <h3>Our many baded cabin</h3>
                <p>If you thing it's not fine. You are wrong. This room and condition is worderful.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img height="500px"
                className="d-block w-100"
                src={banner3}
                alt="Third slide"
                />

                <Carousel.Caption className="text-dark">
                <h3>Front Side view</h3>
                <p>This is our hospital's front side.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;