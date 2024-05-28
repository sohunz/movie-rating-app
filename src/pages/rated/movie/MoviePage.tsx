import { fetchRatedMovie } from "@/utils/query";
import { useQuery } from "@tanstack/react-query";
import RatedMovieCard from "@/components/rated/RatedMovieCard";

const MoviePage = () => {
    const { data: ratedMovieData } = useQuery({
        queryKey: ["ratedMovie"],
        queryFn: fetchRatedMovie,
    });
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {ratedMovieData?.map((movie: any) => (
                <RatedMovieCard movie={movie} />
            ))}
        </div>
    );
};

export default MoviePage;
