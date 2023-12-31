import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

const Profile = () => {
    const { user } = useContext(AuthContext);
    const { displayName, email, photoURL, emailVerified } = user;
    console.log(user.emailVerified);


    return (
        <section className="max-w-7xl mx-4 lg:mx-auto mt-12">
            <h1 className="text-4xl font-bold text-center mt-16 mb-4">Profile Information</h1>
            <div className="">
                <img className="h-96 w-96 rounded-md object-cover mb-6" src={photoURL ? photoURL : "/user.jpg"} alt="" />
            </div>
            <div className="space-y-2">
                <div className="text-xl font-medium capitalize"><span className="text-rose-500 font-semibold">Name: </span>{displayName}</div>
                <div className="text-xl font-medium"><span className="text-rose-500 font-semibold">Email: </span>{email}</div>
                <div className="text-xl font-medium"><span className="text-rose-500 font-semibold align-middle">Email Verified: </span>
                    {emailVerified ? <div className="align-middle badge bg-blue-400 text-white">Verified</div> : <div className="align-middle badge text-orange-400 badge-outline">Not Verified</div>}
                </div>

            </div>
        </section>
    );
};

export default Profile;