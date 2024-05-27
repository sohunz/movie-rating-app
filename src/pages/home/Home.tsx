// @/components/pages/Home.tsx
import { useQuery } from "@tanstack/react-query";
import { fetchMovie, fetchTvShows } from "../../utils/query";
import { MovieType, TvShowTypes } from "@/types/types";
import MovieCard from "@/components/pages/MovieCard";
import TvShowCard from "@/components/pages/TvShowCard";

const Home = () => {
    const { data: movieData } = useQuery({
        queryKey: ["movies"],
        queryFn: fetchMovie,
    });

    const { data: tvShowData } = useQuery({
        queryKey: ["tvshows"],
        queryFn: fetchTvShows,
    });

    console.log(tvShowData);

    return (
        <div className="container mx-auto p-4">
            <div className="mb-8">
                <h2 className="text-3xl font-bold mb-4">Movies</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {movieData &&
                        movieData.map((movie: MovieType) => (
                            <MovieCard key={movie.id} movie={movie} />
                        ))}
                </div>
            </div>
            <div>
                <h2 className="text-3xl font-bold mb-4">TV Shows</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {tvShowData &&
                        tvShowData.map((tvshow: TvShowTypes) => (
                            <TvShowCard key={tvshow.id} tvshow={tvshow} />
                        ))}
                </div>
            </div>
        </div>
    );
};

export default Home;
