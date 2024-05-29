import { MovieType, TvShowTypes } from "@/types/types";
import axios from "axios";

export const fetchMovie = async (): Promise<MovieType[]> => {
    try {
        const response = await axios.get(
            "https://api.themoviedb.org/3/movie/popular",
            {
                headers: {
                    Authorization: `Bearer ${
                        import.meta.env.VITE_Authorization
                    }`,
                },
            }
        );

        const movieData: MovieType[] = response.data.results;

        return movieData;
    } catch (error) {
        console.error("Error fetching rated tv show:", error);
        return []; // Return an empty array if an error occurs
    }
};
export const fetchMovieDetail = async (id: number): Promise<MovieType[]> => {
    try {
        const response = await axios.get(
            `https://api.themoviedb.org/3/movie/${id}`,
            {
                headers: {
                    Authorization: `Bearer ${
                        import.meta.env.VITE_Authorization
                    }`,
                },
            }
        );

        const movieDetailData: MovieType[] = response.data;
        return movieDetailData;
    } catch (error) {
        console.error("Error fetching rated tv show:", error);
        return []; // Return an empty array if an error occurs
    }
};
export const fetchShowDetail = async (id: number): Promise<MovieType[]> => {
    try {
        const response = await axios.get(
            `https://api.themoviedb.org/3/tv/${id}`,
            {
                headers: {
                    Authorization: `Bearer ${
                        import.meta.env.VITE_Authorization
                    }`,
                },
            }
        );

        const showDetailData: MovieType[] = response.data;
        return showDetailData;
    } catch (error) {
        console.error("Error fetching rated tv show:", error);
        return []; // Return an empty array if an error occurs
    }
};

export const fetchTvShows = async (): Promise<TvShowTypes[]> => {
    try {
        const response = await axios.get(
            "https://api.themoviedb.org/3/tv/popular",
            {
                headers: {
                    Authorization: `Bearer ${
                        import.meta.env.VITE_Authorization
                    }`,
                },
            }
        );

        const tvShowData: TvShowTypes[] = response.data.results;

        return tvShowData;
    } catch (error) {
        console.error("Error fetching rated tv show:", error);
        return []; // Return an empty array if an error occurs
    }
};

// rate movie

export const rateMovie = async (id: number, rating: number) => {
    await axios.post(
        `https://api.themoviedb.org/3/movie/${id}/rating?api_key=${
            import.meta.env.VITE_API_KEY
        }&guest_session_id=${localStorage.getItem("guest_session_id")}`,
        {
            value: rating,
        },
        {
            headers: {
                accept: "application/json",
                "Content-Type": "application/json;charset=utf-8",
            },
        }
    );
};
// rate tv show
export const rateTvShow = async (id: number, rating: number) => {
    await axios.post(
        `https://api.themoviedb.org/3/tv/${id}/rating?guest_session_id=${localStorage.getItem(
            "guest_session_id"
        )}&api_key=${import.meta.env.VITE_API_KEY}`,
        {
            value: rating,
        },
        {
            headers: {
                accept: "application/json",
                "Content-Type": "application/json;charset=utf-8",
            },
        }
    );
};

// fetch rate movie
export const fetchRatedMovie = async () => {
    try {
        const response = await axios.get(
            `https://api.themoviedb.org/3/guest_session/${localStorage.getItem(
                "guest_session_id"
            )}/rated/movies`,
            {
                params: {
                    language: "en-US",
                    page: 1,
                    sort_by: "created_at.asc",
                    api_key: import.meta.env.VITE_API_KEY,
                },
            }
        );
        return response.data.results;
    } catch (error) {
        console.error("Error fetching rated movies:", error);
        return []; // Return an empty array if an error occurs
    }
};

export const fetchRatedShow = async () => {
    try {
        const response = await axios.get(
            `https://api.themoviedb.org/3/guest_session/${localStorage.getItem(
                "guest_session_id"
            )}/rated/tv`,
            {
                params: {
                    language: "en-US",
                    page: 1,
                    sort_by: "created_at.asc",
                    api_key: import.meta.env.VITE_API_KEY,
                },
            }
        );
        return response.data.results;
    } catch (error) {
        console.error("Error fetching rated tv show:", error);
        return []; // Return an empty array if an error occurs
    }
};
