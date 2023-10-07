import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import LoginPage from "../pages/auth/LoginPage";
import SignUpPage from "../pages/auth/SignUpPage";
import Profile from "../pages/Profile";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
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
        ]
    },
]);

export default router;

