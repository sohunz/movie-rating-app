import { useMovieDetail } from "@/hooks/useFetch";
import { fetchMovieDetail } from "@/utils/query";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

const MovieCardDetail = () => {
    const { id } = useParams();

    const movie = useMovieDetail(Number(id));

    const genre = movie?.genres;

    const production = movie?.production_companies;

    return (
        <div className=" bg-gray-100 flex items-center justify-center p-4">
            <div className="max-w-5xl rounded overflow-hidden shadow-lg bg-white flex flex-col md:flex-row">
                <img
                    className="w-full md:w-1/3 object-cover"
                    src={`https://image.tmdb.org/t/p/w500${movie?.backdrop_path}`}
                />
                <div className="p-6 flex flex-col justify-between">
                    <div className="text-left">
                        <div className="font-bold text-2xl mb-5">
                            {movie?.title}
                        </div>
                        <hr />
                        <p className="text-gray-700 text-base mb-4 mt-5">
                            {movie?.overview}
                        </p>
                        <ul className="text-gray-700 text-sm mb-4">
                            <li>
                                <strong>Year: </strong> {movie?.release_date}
                            </li>
                            <li>
                                <strong>Vote Average:</strong>{" "}
                                {movie?.vote_average}
                            </li>
                            <li>
                                <strong>Vote Count:</strong> {movie?.vote_count}
                            </li>
                            <li>
                                <strong>Popularity:</strong> 780
                            </li>
                            <li>
                                <strong>Original Language:</strong> English
                            </li>
                            <li>
                                <strong>Origin Country: </strong>{" "}
                                {movie?.origin_country[0]}
                            </li>
                            <li>
                                <p>Status : {movie?.status}</p>
                            </li>
                            <li>
                                <p>Runtime : {movie?.runtime}</p>
                            </li>
                            <li>
                                <p>
                                    Genre :{" "}
                                    {genre?.map((i) => (
                                        <span key={i.id}>{i.name}</span>
                                    ))}
                                </p>
                            </li>
                            <li>
                                <p>
                                    Genre :{" "}
                                    {production?.map((i) => (
                                        <span key={i.id}>{i.name}</span>
                                    ))}
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MovieCardDetail;
