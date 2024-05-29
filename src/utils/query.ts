import { MovieType, TvShowTypes } from "@/types/types";
import axios from "axios";

export const fetchMovie = async (): Promise<MovieType[]> => {
    const response = await axios.get(
        "https://api.themoviedb.org/3/movie/popular",
        {
            headers: {
                Authorization: `Bearer ${import.meta.env.VITE_Authorization}`,
            },
        }
    );

    const movieData: MovieType[] = response.data.results;

    return movieData;
};
export const fetchMovieDetail = async (id: number): Promise<MovieType[]> => {
    const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}`,
        {
            headers: {
                Authorization: `Bearer ${import.meta.env.VITE_Authorization}`,
            },
        }
    );

    const movieDetailData: MovieType[] = response.data;
    return movieDetailData;
};
export const fetchShowDetail = async (id: number): Promise<MovieType[]> => {
    const response = await axios.get(`https://api.themoviedb.org/3/tv/${id}`, {
        headers: {
            Authorization: `Bearer ${import.meta.env.VITE_Authorization}`,
        },
    });

    const showDetailData: MovieType[] = response.data;
    return showDetailData;
};

export const fetchTvShows = async (): Promise<TvShowTypes[]> => {
    const response = await axios.get(
        "https://api.themoviedb.org/3/tv/popular",
        {
            headers: {
                Authorization: `Bearer ${import.meta.env.VITE_Authorization}`,
            },
        }
    );

    const tvShowData: TvShowTypes[] = response.data.results;

    return tvShowData;
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
};

export const fetchRatedShow = async () => {
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
};
