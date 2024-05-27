import App from "@/App";
import Auth from "@/pages/auth/Auth";
import Home from "@/pages/home/Home";
import Rated from "@/pages/rated/Rated";
import { createBrowserRouter } from "react-router-dom";
import AuthGuard from "../pages/auth/AuthGuard";
import CardDetail from "@/components/pages/CardDetail";

export const router = createBrowserRouter([
    {
        path: "",
        element: <App />,
        children: [
            {
                path: "/movie",
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
            {
                path: "/movie/:id",
                element: (
                    <AuthGuard>
                        <CardDetail />
                    </AuthGuard>
                ),
            },
        ],
    },
]);
