import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import { useContext } from 'react';

const SignUpPage = () => {
    const { signUpUser, updateUser, googleSignIn } = useContext(AuthContext);

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

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
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
            <div className='flex items-center my-4'>
                <hr className='w-full border' />
                <h3 className='mx-2'>Or</h3>
                <hr className='w-full border' />
            </div>
            <button onClick={handleGoogleSignIn} className="btn w-full normal-case">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-google" viewBox="0 0 16 16">
                    <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z" />
                </svg>
                Continue with Google
            </button>
        </div>
    );
};

export default SignUpPage;