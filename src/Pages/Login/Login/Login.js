import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import img from '../../../images/register/register.png';

const Login = () => {
    return (
        <Container className="mt-5">
            <div className="d-flex align-items-center justify-content-around">
                <div className="registration">
                <h3 className="text-primary mb-4">Please Registration</h3>
                    <form onSubmit="">
                        <input type="email" placeholder="Email" /><br />
                        <input className="mt-2" type="password" placeholder="Password" /><br />
                        <button className="btn btn-primary mt-3">Login</button>
                    </form>
                    <br />
                    <p>New User? <Link to="/login">register</Link></p>
                </div>
                <div>
                    <img width="400px" src={img} alt="" />
                </div>
            </div>
        </Container>
    );
};

export default Login;