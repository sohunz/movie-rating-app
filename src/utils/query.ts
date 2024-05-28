import { MovieType, TvShowTypes } from "@/types/types";
import axios from "axios";

export const fetchMovie = async (): Promise<MovieType[]> => {
    const response = await axios.get(
        "https://api.themoviedb.org/3/movie/popular",
        {
            headers: {
                Authorization:
                    "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ODk2NTYxMzUzY2Y4Njc1YmVlODU5YzAzMjA5MGQ4MyIsInN1YiI6IjY2NTNlYjllNjZhM2M1ZjRiNzRjYjIwNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8hxuvIf88Uwf9bdxx8zoAK3ai0e7wv5jyG6nWie4EJg",
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
                Authorization:
                    "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ODk2NTYxMzUzY2Y4Njc1YmVlODU5YzAzMjA5MGQ4MyIsInN1YiI6IjY2NTNlYjllNjZhM2M1ZjRiNzRjYjIwNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8hxuvIf88Uwf9bdxx8zoAK3ai0e7wv5jyG6nWie4EJg",
            },
        }
    );

    const movieDetailData: MovieType[] = response.data;
    return movieDetailData;
};

export const fetchTvShows = async (): Promise<TvShowTypes[]> => {
    const response = await axios.get(
        "https://api.themoviedb.org/3/tv/popular",
        {
            headers: {
                Authorization:
                    "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ODk2NTYxMzUzY2Y4Njc1YmVlODU5YzAzMjA5MGQ4MyIsInN1YiI6IjY2NTNlYjllNjZhM2M1ZjRiNzRjYjIwNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8hxuvIf88Uwf9bdxx8zoAK3ai0e7wv5jyG6nWie4EJg",
            },
        }
    );

    const tvShowData: TvShowTypes[] = response.data.results;

    return tvShowData;
};

// rate movie
export const rateMovie = async (id: number, rating: number) => {
    await axios.post(
        `https://api.themoviedb.org/3/movie/${id}/rating?guest_session_id=${localStorage.getItem(
            "guest_session_id"
        )}&api_key=4896561353cf8675bee859c032090d83`,
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
        )}&api_key=4896561353cf8675bee859c032090d83`,
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
                api_key: "4896561353cf8675bee859c032090d83",
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
                api_key: "4896561353cf8675bee859c032090d83",
            },
        }
    );
    return response.data.results;
};
