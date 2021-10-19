import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import img from '../../../images/register/register.png';

const Register = () => {
    const {signInUsingGoogle, signInUsingGithub, handleEmailChange, handlePasswordChange, handleRegistration, error, handleNameChange } = useAuth();

    return (
        <Container className="mt-5">
        <div className="row d-flex align-items-center justify-content-around">
                <div className="registration col-lg-6">
                <h3 className="text-primary mb-4">Please Register</h3>
                    <form onSubmit={handleRegistration}>
                        <input onBlur={handleNameChange} type="name" placeholder="Name" /><br />
                        <input onBlur={handleEmailChange} className="mt-2" type="email" placeholder="Email" /><br />
                        <input onBlur={handlePasswordChange} className="mt-2" type="password" placeholder="Password" /><br />
                        <button className="btn btn-primary mt-3">Register</button>
                    </form><br />
                    <p className="text-danger">{error}</p>

                    <br />
                    <p>Already have an account? <Link to="/login">Login</Link></p>
                    <br />
                    <div>
                        <button onClick={signInUsingGoogle} className="btn btn-outline-primary">Google Sign In</button>
                        <span>
                        <button onClick={signInUsingGithub} className="btn btn-outline-primary ms-2">Github Sign In</button>
                        </span>
                    </div>
                </div>
                <div className="col-lg-6">
                    <img width="400px" src={img} alt="" />
                </div>
            </div>
        </Container>
    );
};

export default Register;