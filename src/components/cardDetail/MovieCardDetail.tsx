import { fetchMovie } from "@/utils/query";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { MovieType } from "@/types/types";
import { convertYear } from "@/utils/yearConvertor";

const MovieCardDetail = () => {
    const { id } = useParams();

    const { data: movieData } = useQuery({
        queryKey: ["movie"],
        queryFn: fetchMovie,
    });

    return (
        <div className=" bg-gray-100 flex items-center justify-center p-4">
            {movieData &&
                movieData
                    .filter((movie) => movie.id.toString() === id)
                    .map((movie: MovieType) => (
                        <div
                            key={movie.id}
                            className="max-w-5xl rounded overflow-hidden shadow-lg bg-white flex flex-col md:flex-row"
                        >
                            <img
                                className="w-full md:w-1/3 object-cover"
                                src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                                alt={movie.title}
                            />
                            <div className="p-6 flex flex-col justify-between">
                                <div className="text-left">
                                    <div className="font-bold text-2xl mb-5">
                                        {movie.title}
                                    </div>
                                    <hr />
                                    <p className="text-gray-700 text-base mb-4 mt-5">
                                        {movie.overview}
                                    </p>
                                    <ul className="text-gray-700 text-sm mb-4">
                                        <li>
                                            <strong>Year:</strong>{" "}
                                            {convertYear(movie.release_date)}
                                        </li>
                                        <li>
                                            <strong>Vote Average:</strong>{" "}
                                            {movie.vote_average}
                                        </li>
                                        <li>
                                            <strong>Vote Count:</strong>{" "}
                                            {movie.vote_count}
                                        </li>
                                        <li>
                                            <strong>Popularity:</strong>{" "}
                                            {movie.popularity}
                                        </li>
                                        <li>
                                            <strong>Original Language:</strong>{" "}
                                            {movie.original_language}
                                        </li>
                                        <li>
                                            <strong>Origin Country:</strong>{" "}
                                            {movie.origin_country}
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))}
        </div>
    );
};

export default MovieCardDetail;
