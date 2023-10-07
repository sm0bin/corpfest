import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { useContext } from "react";

const Header = () => {

    const { user, signOutUser } = useContext(AuthContext);

    const NavLinks = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/login">Login</NavLink></li>
        <li><NavLink to="/sign-up">Sign Up</NavLink></li>
        {
            user && <li><NavLink to="/profile">Profile</NavLink></li>
        }
    </>


    const handleLogout = () => {
        signOutUser()
            .then(result => {
                console.log(result);
            })
            .catch(error => {
                console.log(error);
            })
    }


    return (
        <div className="navbar bg-base-100/80">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {NavLinks}
                    </ul>
                </div>
                <Link to="/" className="text-2xl font-bold">Corp<span className="text-rose-500">Fest</span></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {NavLinks}
                </ul>
            </div>

            {
                user ?
                    <>
                        <div className="flex items-center navbar-end gap-5">
                            <Link to="/profile">
                                <img className="w-10 h-10 object-cover rounded-full" src={user.photoURL} alt="" />
                            </Link>
                            <Link to="/profile">
                                <h2 className="font-semibold capitalize">{user.displayName}</h2>
                            </Link>
                            <div className="">
                                <button onClick={handleLogout} className="btn normal-case font-medium text-lg bg-rose-500 hover:bg-rose-600 text-white px-10">Logout</button>
                            </div>
                        </div>
                    </> :
                    <div className="navbar-end">
                        <Link to="/login" className="btn normal-case font-medium text-lg bg-rose-500 hover:bg-rose-600 text-white px-10">Login</Link>
                    </div>
            }
        </div>
    );
};

export default Header;