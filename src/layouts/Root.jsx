import { Outlet } from "react-router-dom";
import Header from "../pages/shared/Header";
import Footer from "../pages/shared/Footer";

const Root = () => {
    return (
        <>
            <div className="max-w-7xl mx-auto min-h-[calc(100vh-4rem)] font-poppins">
                <Header></Header>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </>
    );
};

export default Root;