import React from 'react';
import { Link } from 'react-router-dom';

const Service = (props) => {
    const {id, name, review, description, image} = props.service;
    return (
        <div className="col-lg-4 mb-4">
            <div>
                <img style={{width:"300px"}} src={image} alt="" />
            </div>
            <div>
                <h3>{name}</h3>
                <h6>Patients Review : {review}</h6>
                <h6>{description}</h6>
                <Link to={`/service/${id}`}>
                    <button className="btn btn-outline-primary">Details</button>
                </Link>
            </div>
        </div>
    );
};

export default Service;