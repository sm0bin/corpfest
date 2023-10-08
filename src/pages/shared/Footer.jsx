import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="footer footer-center mt-12 p-4 bg-base-300 text-base-content">
            <aside>
                <p>Copyright © <Link to="/" className="font-bold">Corp<span className="text-rose-500">Fest</span></Link> 2023 - All right reserved by <Link to="/" className="font-bold">Corp<span className="text-rose-500">Fest</span></Link> Ltd</p>
            </aside>
        </footer>
    );
};

export default Footer;