import App from "@/App";
import Home from "@/pages/home/Home";
import Rated from "@/pages/rated/Rated";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
    {
        path: "",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "rated",
                element: <Rated />,
            },
        ],
    },
]);
