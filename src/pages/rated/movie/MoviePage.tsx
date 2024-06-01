import RatedMovieCard from "@/components/rated/RatedMovieCard";
import CardSketon from "@/components/skeleton/CardSketon";
import { useRatedMovie } from "@/hooks/useFetch";

const MoviePage = () => {
    const { data, isError, isLoading } = useRatedMovie();

    if (isLoading) {
        return (
            <div className="mb-8 mt-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {Array.from({ length: 4 }).map((_, index) => (
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

    if (!data || data.length === 0) {
        return (
            <div className="w-full h-[85vh] flex items-center justify-center">
                <p>No Movies have been rated yet.</p>
            </div>
        );
    }

    return (
        <div className="mt-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                {data.map((movie: any) => (
                    <RatedMovieCard key={movie.id} movie={movie} />
                ))}
            </div>
        </div>
    );
};

export default MoviePage;
