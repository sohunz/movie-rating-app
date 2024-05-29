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
    const { data, isError, isLoading } = useQuery({
        queryKey: ["Movies"],
        queryFn: fetchMovie,
    });
    return { data, isError, isLoading };
};

// fetch all tv show
export const useTvShows = () => {
    const { data, isError, isLoading } = useQuery({
        queryKey: ["TvShows"],
        queryFn: fetchTvShows,
    });
    return { data, isError, isLoading };
};

// fetch rated movie
export const useRatedMovie = () => {
    const { data, isError, isLoading } = useQuery({
        queryKey: ["RatedMovie"],
        queryFn: fetchRatedMovie,
    });
    return { data, isError, isLoading };
};

// fetch rated tv show
export const useRatedShow = () => {
    const { data, isError, isLoading } = useQuery({
        queryKey: ["RatedShow"],
        queryFn: fetchRatedShow,
    });
    return { data, isError, isLoading };
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
