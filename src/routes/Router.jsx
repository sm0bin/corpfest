import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import LoginPage from "../pages/auth/LoginPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            {
                path: "/login",
                element: <LoginPage></LoginPage>,
            }
        ]
    },
]);

export default router;

