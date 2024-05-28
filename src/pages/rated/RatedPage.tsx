import MovieCard from "@/components/cards/MovieCard";
import { fetchRatedMovie } from "@/utils/query";
import { useQuery } from "@tanstack/react-query";

const RatedPage = () => {
    const { data: ratedMovieData } = useQuery({
        queryKey: ["ratedMovie"],
        queryFn: fetchRatedMovie,
    });

    console.log(ratedMovieData);

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {ratedMovieData?.map((movie) => (
                <MovieCard movie={movie} />
            ))}
        </div>
    );
};

export default RatedPage;
