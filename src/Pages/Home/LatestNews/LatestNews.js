import React from 'react';
import { Container } from 'react-bootstrap';
import image from '../../../images/latest-news/news.jpg'

const LatestNews = () => {
    return (
        <Container className="mt-5">
            <h2>Latest News</h2>
            <h6>Our latest news about hospital and all departments.</h6>
            <div className="col d-flex mt-5">
                <div className="col-lg-6 row">
                <img style={{width:"350px"}} src={image} alt="" />
                </div>
                <div className=" row">
                    <div className="mt-5 pt-5"><h4>Departments facilities</h4>
                    <h6>Doctor's Hospital facility is aggressive to take care for the patients.There departments are very careful about the patients. They provide high facility and respects. Doctor's Hospital facility is aggressive to take care for the patients.There departments are very careful about the patients. They provide high facility and respects.</h6></div>
                </div>
            </div>
        </Container>
    );
};

export default LatestNews;