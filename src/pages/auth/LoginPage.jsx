import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import { useContext } from 'react';

const LoginPage = () => {
    const { signInUser } = useContext(AuthContext);

    const handleLogin = (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const email = formData.get('email');
        const password = formData.get('password');
        console.log(email, password);

        signInUser(email, password)
            .then(result => {
                console.log(result.user);
            })
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <div className='w-2/5 shadow-md mx-auto mt-16 p-16 rounded'>
            <form onSubmit={handleLogin} className="card-body p-0">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                </div>
                <div className="form-control my-6">
                    <button className="btn normal-case font-medium text-lg bg-rose-500 hover:bg-rose-600 text-white ">Login</button>
                </div>
            </form>
            <h3>Don’t have an account? <Link className='font-semibold text-rose-500' to="/sign-up">Sign Up</Link></h3>
        </div>
    );
};

export default LoginPage;