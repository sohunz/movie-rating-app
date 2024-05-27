import App from "@/App";
import Auth from "@/pages/auth/Auth";
import Home from "@/pages/home/Home";
import Rated from "@/pages/rated/Rated";
import { createBrowserRouter } from "react-router-dom";
import AuthGuard from "../pages/auth/AuthGuard";

export const router = createBrowserRouter([
    {
        path: "",
        element: <App />,
        children: [
            {
                path: "/",
                element: (
                    <AuthGuard>
                        <Home />
                    </AuthGuard>
                ),
            },
            {
                path: "rated",
                element: (
                    <AuthGuard>
                        <Rated />
                    </AuthGuard>
                ),
            },
            {
                path: "auth",
                element: <Auth />,
            },
        ],
    },
]);
