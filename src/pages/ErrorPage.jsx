import { useNavigate, useRouteError } from "react-router-dom";

export default function ErrorPage() {
    const error = useRouteError();
    const navigate = useNavigate();

    console.error(error);
    const handleGoHome = () => {
        navigate("/");
    }

    return (
        <div id="error-page" className="flex flex-col items-center justify-center h-screen w-11/12 mx-auto">
            <img className="lg:w-1/3 mx-auto" src="/404-corp.svg" alt="" />
            <h2 className="font-semibold text-2xl text-center">Sorry, an unexpected error has occurred.</h2>
            <h4 className="font-medium text-lg text-center">
                <i>{error.statusText || error.message}</i>
            </h4>
            <button onClick={handleGoHome} className="px-8 py-4 my-4 rounded-lg text-white bg-rose-500 hover:bg-rose-600 block mx-auto">Go Home</button>
        </div>
    );
}