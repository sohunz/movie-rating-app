import { useMovieDetail } from "@/hooks/useFetch";
import { useParams } from "react-router-dom";
import { getCountryName } from "@/utils/countryConvert";
import { numberConvert } from "@/utils/numberConvert";
import { getCountryLanguages } from "@/utils/languageConvert";
import MovieDetailSkeleton from "../skeleton/MovieDetailSkeleton";

const MovieCardDetail = () => {
    const { id } = useParams();

    const { data, isError, isLoading } = useMovieDetail(Number(id));

    const genre = data?.genres;

    const production = data?.production_companies;

    const voteAverage = data?.vote_average.toFixed(1);

    if (isLoading) {
        return <MovieDetailSkeleton />;
    }

    return (
        <div className="  flex items-center justify-center p-4 rounded-xl border shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] py-10 mb-5 lg:mx-0 md:mx-5 sm:mx-5 mx-5">
            <div className="max-w-5xl rounded overflow-hidden  flex flex-col md:flex-row gap-5">
                <img
                    className="w-full md:w-1/3 object-cover"
                    src={`https://image.tmdb.org/t/p/w500${data?.poster_path}`}
                />
                <div className="p-6 flex flex-col justify-between">
                    <div className="text-left">
                        <div className="font-bold text-2xl mb-5">
                            {data?.title}
                        </div>
                        <hr />
                        <p className="text-base mb-4 mt-5 leading-7 line-clamp-3">
                            {data?.overview}
                        </p>
                        <ul className=" text-md mb-4 leading-7">
                            <li className=" space-x-2">
                                <strong>Release Date: </strong>{" "}
                                <span className="text-blue-500 font-semibold">
                                    {data?.release_date}
                                </span>
                            </li>

                            <li className=" space-x-2">
                                <strong>TMDB:</strong>{" "}
                                <span className="text-blue-500 font-semibold">
                                    {voteAverage}
                                </span>
                            </li>
                            <li className=" space-x-2">
                                <strong>Total Votes:</strong>{" "}
                                <span className="text-blue-500 font-semibold">
                                    {numberConvert(data?.vote_count)}
                                </span>
                            </li>
                            <li className=" space-x-2">
                                <strong>Popularity:</strong>{" "}
                                <span className="text-blue-500 font-semibold">
                                    {numberConvert(data?.popularity)}
                                </span>
                            </li>
                            <li className=" space-x-2">
                                <strong>Languages:</strong>{" "}
                                <span className="text-blue-500 font-semibold">
                                    {getCountryLanguages(
                                        data?.original_language
                                    )}
                                </span>
                            </li>
                            <li className=" space-x-2">
                                <strong>Country: </strong>{" "}
                                <span className="text-blue-500 font-semibold">
                                    {getCountryName(data?.origin_country[0])}
                                </span>
                            </li>
                            <li className=" space-x-2">
                                <strong>Duration: </strong>{" "}
                                <span className="text-blue-500 font-semibold">
                                    {data?.runtime}mn
                                </span>
                            </li>
                            <li>
                                <p className=" space-x-2">
                                    <strong>Genres: </strong>
                                    {genre?.map((i, index) => (
                                        <span key={i.id}>
                                            <span className="text-blue-500 font-semibold">
                                                {i.name}
                                            </span>
                                            {index < production.length + 1 &&
                                                ", "}
                                        </span>
                                    ))}
                                </p>
                            </li>
                            <li>
                                <p className=" space-x-2">
                                    <strong>Productions: </strong>
                                    {production?.map((i) => (
                                        <span
                                            key={i.id}
                                            className="text-blue-500 font-semibold"
                                        >
                                            {i.name}
                                        </span>
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
