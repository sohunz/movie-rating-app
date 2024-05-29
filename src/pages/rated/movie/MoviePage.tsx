import Loading from "@/components/loader/Loading";
import RatedMovieCard from "@/components/rated/RatedMovieCard";
import { useRatedMovie } from "@/hooks/useFetch";

const MoviePage = () => {
    const { data, isError, isLoading } = useRatedMovie();

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

    if (!data || data.length === 0) {
        return (
            <div className="w-full h-[85vh] flex items-center justify-center">
                <p>No Movies have been rated yet.</p>
            </div>
        );
    }

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {data.map((movie: any) => (
                <RatedMovieCard key={movie.id} movie={movie} />
            ))}
        </div>
    );
};

export default MoviePage;
