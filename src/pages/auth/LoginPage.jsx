import React from 'react';
import { Link } from 'react-router-dom';

const LoginPage = () => {
    return (
        <div className='w-2/5 shadow-md mx-auto mt-16 p-16 rounded'>
            <form className="card-body p-0">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" placeholder="email" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" placeholder="password" className="input input-bordered" required />
                </div>
                <div className="form-control my-6">
                    <button className="btn btn-primary">Login</button>
                </div>
            </form>
            <h3>Don’t have an account? <Link className='font-medium' to="sign-up">Sign Up</Link></h3>
        </div>
    );
};

export default LoginPage;