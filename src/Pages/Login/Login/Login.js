import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import img from '../../../images/register/register.png';
import useAuth from '../../../Hooks/useAuth';

const Login = () => {
    const {handleSignIn, handleEmailChange, handlePasswordChange, error} = useAuth();
    return (
        <Container className="mt-5">
            <div className="row d-flex align-items-center justify-content-around">
                <div className="registration col-lg-6">
                <h3 className="text-primary mb-4">Please Login</h3>
                    <form onSubmit={handleSignIn}>
                        <input onBlur={handleEmailChange} type="email" placeholder="Email" /><br />
                        <input onBlur={handlePasswordChange} className="mt-2" type="password" placeholder="Password" /><br />
                        <button className="btn btn-primary mt-3">Login</button>
                    </form>
                    <br />
                    <p className="text-danger">{error}</p>
                    <br />
                    <p>Are you new user? <Link to="/register">Create Account</Link></p>
                </div>
                <div className="col-lg-6">
                    <img width="400px" src={img} alt="" />
                </div>
            </div>
        </Container>
    );
};

export default Login;