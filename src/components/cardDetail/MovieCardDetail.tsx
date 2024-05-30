import { useMovieDetail } from "@/hooks/useFetch";
import { useParams } from "react-router-dom";
import { getCountryName } from "@/utils/countryConvert";
import { numberConvert } from "@/utils/numberConvert";
import { getCountryLanguages } from "@/utils/languageConvert";

const MovieCardDetail = () => {
    const { id } = useParams();

    const movie = useMovieDetail(Number(id));

    const genre = movie?.genres;

    const production = movie?.production_companies;

    console.log(movie);

    return (
        <div className="  flex items-center justify-center p-4">
            <div className="max-w-5xl rounded overflow-hidden shadow-lg  flex flex-col md:flex-row">
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
                        <p className="text-base mb-4 mt-5">{movie?.overview}</p>
                        <ul className=" text-sm mb-4">
                            <li>
                                <strong>Release Date: </strong>{" "}
                                {movie?.release_date}
                            </li>
                            <li>
                                <strong>Vote Average:</strong>{" "}
                                {(movie?.vote_average).toFixed(1)}
                            </li>
                            <li>
                                <strong>Total Votes:</strong>{" "}
                                {numberConvert(movie?.vote_count)}
                            </li>
                            <li>
                                <strong>Popularity:</strong>{" "}
                                {numberConvert(movie?.popularity)}
                            </li>
                            <li>
                                <strong>Languages:</strong>{" "}
                                {getCountryLanguages(movie?.original_language)}
                            </li>
                            <li>
                                <strong>Country: </strong>{" "}
                                {getCountryName(movie?.origin_country[0])}
                            </li>

                            <li>
                                <strong>Runtime: </strong> {movie?.runtime}mn
                            </li>
                            <li>
                                <p>
                                    <strong>Genres: </strong>
                                    {genre?.map((i, index) => (
                                        <span key={i.id}>
                                            {i.name}
                                            {index < production.length + 1 &&
                                                ", "}
                                        </span>
                                    ))}
                                </p>
                            </li>
                            <li>
                                <p>
                                    <strong>Productions: </strong>
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
