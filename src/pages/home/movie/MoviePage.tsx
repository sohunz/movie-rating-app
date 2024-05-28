import { MovieType } from "@/types/types";
import { fetchMovie } from "@/utils/query";
import { useQuery } from "@tanstack/react-query";
import MovieCard from "../../../components/cards/MovieCard";

const MoviePage = () => {
    const { data: movieData } = useQuery({
        queryKey: ["movies"],
        queryFn: fetchMovie,
    });
    return (
        <div className="mb-8 mt-10">
            <h2 className="text-3xl font-bold mb-4">Movies</h2>
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
