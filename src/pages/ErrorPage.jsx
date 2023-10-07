import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);

    return (
        <div id="error-page">
            <img className="w-2/5 mx-auto" src="/404-corp.svg" alt="" />
            <h2 className="font-semibold text-2xl text-center">Sorry, an unexpected error has occurred.</h2>
            <h4 className="font-medium text-lg text-center">
                <i>{error.statusText || error.message}</i>
            </h4>
        </div>
    );
}