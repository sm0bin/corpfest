import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import { useContext } from 'react';

const SignUpPage = () => {
    const { signUpUser, updateUser } = useContext(AuthContext);

    const handleRegister = (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);

        const name = formData.get('user-name');
        const imgUrl = formData.get('img-url');
        const email = formData.get('email');
        const password = formData.get('password');
        console.log(name, imgUrl, email, password);

        signUpUser(email, password)
            .then(result => {
                updateUser(name, imgUrl)
                    .then(result => {
                        console.log(result.user);
                    })
                    .catch(error => {
                        console.log(error);
                    })
                console.log(result.user);
            })
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <div className='w-2/5 shadow-md mx-auto mt-16 p-16 rounded'>
            <form onSubmit={handleRegister} className="card-body p-0">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text" name='user-name' placeholder="Name" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Image URL</span>
                    </label>
                    <input type="text" name='img-url' placeholder="Image URL" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" name='email' placeholder="Email" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" name='password' placeholder="Password" className="input input-bordered" required />
                </div>
                <div className="form-control my-6">
                    <button className="btn normal-case font-medium text-lg bg-rose-500 hover:bg-rose-600 text-white ">Sign Up</button>
                </div>
            </form>
            <h3>Already have an account? <Link className='font-semibold text-rose-500' to="/login">Login</Link></h3>
        </div>
    );
};

export default SignUpPage;