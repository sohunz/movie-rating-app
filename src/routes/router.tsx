import App from "@/App";
import Auth from "@/pages/auth/Auth";
import Home from "@/pages/home/HomePage";
import Rated from "@/pages/rated/RatedPage";
import { createBrowserRouter } from "react-router-dom";
import AuthGuard from "../pages/auth/AuthGuard";
import MovieCardDetail from "@/components/cardDetail/MovieCardDetail";
import TvShowCardDetail from "@/components/cardDetail/TvShowCardDetail";
import Movie from "../pages/home/movie/MoviePage";
import Show from "../pages/home/show/ShowPage";

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
                children: [
                    {
                        path: "movie",
                        element: <Movie />,
                    },
                    {
                        path: "show",
                        element: <Show />,
                    },
                ],
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
                        <MovieCardDetail />
                    </AuthGuard>
                ),
            },
            {
                path: "/show/:id",
                element: (
                    <AuthGuard>
                        <TvShowCardDetail />
                    </AuthGuard>
                ),
            },
        ],
    },
]);
