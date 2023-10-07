import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import LoginPage from "../pages/auth/LoginPage";
import SignUpPage from "../pages/auth/SignUpPage";
import Profile from "../pages/Profile";
import PrivateRoute from "./PrivateRoute";
import Home from "../pages/Home";
import ErrorPage from "../pages/ErrorPage";
import ServiceDetails from "../pages/shared/ServiceDetails";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "/login",
                element: <LoginPage></LoginPage>,
            },
            {
                path: "/sign-up",
                element: <SignUpPage></SignUpPage>,
            },
            {
                path: "/profile",
                element: <PrivateRoute><Profile></Profile></PrivateRoute>,
            },
            {
                path: "/service/:id",
                element: <PrivateRoute><ServiceDetails></ServiceDetails></PrivateRoute>,
                loader: () => fetch("/services2.json"),
            },
        ]
    },
]);

export default router;

