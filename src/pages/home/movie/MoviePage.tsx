// Assuming useMovies returns loading, data, and error
import { MovieType } from "@/types/types";
import MovieCard from "../../../components/cards/MovieCard";
import { useMovies } from "@/hooks/useFetch";
import Loading from "@/components/loader/Loading";

const MoviePage = () => {
    const { data, isLoading, isError } = useMovies();

    if (isLoading) {
        return (
            <div className="w-full h-[85vh] flex items-center justify-center">
                <Loading />
            </div>
        );
    }

    if (isError) {
        return (
            <div className="w-full h-[85vh] flex items-center justify-center">
                <p>Failed to load movies.</p>
            </div>
        );
    }

    return (
        <div className="mb-8 mt-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {data &&
                    data.map((movie: MovieType) => (
                        <MovieCard key={movie.id} movie={movie} />
                    ))}
            </div>
        </div>
    );
};

export default MoviePage;
