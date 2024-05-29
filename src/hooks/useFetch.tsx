import {
    fetchMovie,
    fetchMovieDetail,
    fetchRatedMovie,
    fetchRatedShow,
    fetchShowDetail,
    fetchTvShows,
} from "@/utils/query";
import { useQuery } from "@tanstack/react-query";

// fetch all movie
export const useMovies = () => {
    const { data: fetchMovieData } = useQuery({
        queryKey: ["Movies"],
        queryFn: fetchMovie,
    });
    return fetchMovieData;
};

// fetch all tv show
export const useTvShows = () => {
    const { data: tvShowData } = useQuery({
        queryKey: ["TvShows"],
        queryFn: fetchTvShows,
    });
    return tvShowData;
};

// fetch rated movie
export const useRatedMovie = () => {
    const { data: ratedMovie } = useQuery({
        queryKey: ["RatedMovie"],
        queryFn: fetchRatedMovie,
    });
    return ratedMovie;
};

// fetch rated tv show
export const useRatedShow = () => {
    const { data: ratedShow } = useQuery({
        queryKey: ["RatedShow"],
        queryFn: fetchRatedShow,
    });
    return ratedShow;
};

// fetch movie detail
export const useMovieDetail = (id: number) => {
    const { data: movieDetailData } = useQuery({
        queryKey: ["movieDetail"],
        queryFn: () => fetchMovieDetail(id),
    });
    return movieDetailData;
};

// fetch tv show detail
export const useShowDetail = (id: number) => {
    const { data: showDetailData } = useQuery({
        queryKey: ["showDetail"],
        queryFn: () => fetchShowDetail(id),
    });
    return showDetailData;
};
