import { MovieType } from "@/types/types";
import MovieCard from "../../../components/cards/MovieCard";
import { useMovies } from "@/hooks/useFetch";
import CardSketon from "@/components/skeleton/CardSketon";

const MoviePage = () => {
    const { data, isLoading, isError } = useMovies();

    if (isLoading) {
        return (
            <div className="mb-8 mt-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                    {Array.from({ length: 12 }).map((_, index) => (
                        <CardSketon key={index} />
                    ))}
                </div>
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
        <div className="w-full mb-8 mt-10 mx-auto">
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mx-auto">
                {data &&
                    data.map((movie: MovieType) => (
                        <MovieCard key={movie.id} movie={movie} />
                    ))}
            </div>
        </div>
    );
};

export default MoviePage;
