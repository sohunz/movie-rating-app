import { MovieType } from "@/types/types";
import MovieCard from "../../../components/cards/MovieCard";
import { useMovies } from "@/hooks/useFetch";

const MoviePage = () => {
    const movieData = useMovies();

    return (
        <div className="mb-8 mt-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {movieData &&
                    movieData.map((movie: MovieType) => (
                        <MovieCard key={movie.id} movie={movie} />
                    ))}
            </div>
        </div>
    );
};

export default MoviePage;
