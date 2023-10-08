import { Outlet } from "react-router-dom";
import Header from "../pages/shared/Header";
import Footer from "../pages/shared/Footer";
import { Toaster } from "react-hot-toast";

const Root = () => {
    return (
        <>
            <Toaster />
            <Header></Header>
            <div className="min-h-screen pt-16">
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </>
    );
};

export default Root;