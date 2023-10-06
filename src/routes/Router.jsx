import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import LoginPage from "../pages/auth/LoginPage";
import SignUpPage from "../pages/auth/SignUpPage";

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
        ]
    },
]);

export default router;

