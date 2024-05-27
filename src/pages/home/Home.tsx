import { useQuery } from "@tanstack/react-query";
import { fetchMovie, fetchTvShows } from "../../utils/query";
import { MovieType, TvShowTypes } from "@/types/types";
import MovieCard from "@/components/pages/MovieCard";
import TvShowData from "@/components/pages/TvShowCard";

const Home = () => {
    const { data: movieData } = useQuery({
        queryKey: ["movies"],
        queryFn: fetchMovie,
    });

    const { data: tvShowData } = useQuery({
        queryKey: ["tvshows"],
        queryFn: fetchTvShows,
    });

    console.log(movieData);
    console.log(tvShowData);

    return (
        <div>
            <div className="border">
                <p>Movie</p>
                {movieData &&
                    movieData.map((movie: MovieType) => (
                        <div key={movie.id}>
                            <MovieCard movie={movie} />
                        </div>
                    ))}
            </div>
            <div className="border">
                <p>TV Show</p>
                {tvShowData &&
                    tvShowData.map((tvshow: TvShowTypes) => (
                        <div key={tvshow.id}>
                            <TvShowData tvshow={tvshow} />
                        </div>
                    ))}
            </div>
        </div>
    );
};

export default Home;
