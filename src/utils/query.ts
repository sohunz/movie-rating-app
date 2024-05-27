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
