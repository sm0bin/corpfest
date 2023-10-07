import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

const Profile = () => {
    const { user } = useContext(AuthContext);
    const { displayName, email, photoURL, emailVerified } = user;
    console.log(user.emailVerified);


    return (
        <div>
            <div className="flex">
                <div className="flex-shrink-0">
                    <img className="h-24 w-24 rounded-md object-cover" src={photoURL ? photoURL : "/user.jpg"} alt="" />
                </div>
                <div className="ml-6 space-y-2">
                    <div className="text-xl font-medium capitalize"><span className="text-rose-500 font-semibold">Name: </span>{displayName}</div>
                    <div className="text-xl font-medium"><span className="text-rose-500 font-semibold">Email: </span>{email}</div>
                    <div className="text-xl font-medium"><span className="text-rose-500 font-semibold">Email Verified: </span>
                        {emailVerified ? <span className="bg-blue-400 text-white px-4 rounded-full text-base font-normal">Verified</span> : <span className="bg-orange-400 text-white px-4 rounded-full text-base font-normal">No</span>}
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Profile;