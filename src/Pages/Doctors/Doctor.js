import React from 'react';

const Doctor = (props) => {
    const {name, specialist, image, salary} = props.doctor;
    return (
        <div className="col-lg-6 mb-5">
            <img width="300px" height="250px" src={image} alt="" />
            <h3 className="text-primary">{name}</h3>
            <h5>Specialist : {specialist}</h5>
            <h6>Salary: ${salary}</h6>
        </div>
    );
};

export default Doctor;