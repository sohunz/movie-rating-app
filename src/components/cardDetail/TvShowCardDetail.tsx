import { useParams } from "react-router-dom";
import { useShowDetail } from "@/hooks/useFetch";
import { getCountryName } from "@/utils/countryConvert";
import { getCountryLanguages } from "@/utils/languageConvert";
import { numberConvert } from "@/utils/numberConvert";
import MovieDetailSkeleton from "../skeleton/MovieDetailSkeleton";

const TvShowCardDetail = () => {
    const { id } = useParams();

    const { data, isError, isLoading } = useShowDetail(Number(id));

    const genre = data?.genres;

    const production = data?.production_companies;

    const voteAverage = data?.vote_average.toFixed(1);

    if (isLoading) {
        return <MovieDetailSkeleton />;
    }

    return (
        <div className=" flex items-center justify-center p-4">
            <div className=" flex items-center justify-center p-4">
                <div className="max-w-5xl rounded overflow-hidden shadow-lg  flex flex-col md:flex-row">
                    <img
                        className="w-full md:w-1/3 object-cover"
                        src={`https://image.tmdb.org/t/p/w500${data?.poster_path}`}
                    />
                    <div className="p-6 flex flex-col justify-between">
                        <div className="text-left">
                            <div className="font-bold text-2xl mb-5">
                                {data?.name}
                            </div>
                            <hr />
                            <p className="text-gray-700 text-base mb-4 mt-5">
                                {data?.overview}
                            </p>
                            <ul className=" text-sm mb-4">
                                <li>
                                    <strong>Release Date: </strong>{" "}
                                    {data?.first_air_date}
                                </li>
                                <li>
                                    <strong>Vote Average:</strong> {voteAverage}
                                </li>
                                <li>
                                    <strong>Total Votes:</strong>{" "}
                                    {numberConvert(data?.vote_count)}
                                </li>
                                <li>
                                    <strong>Popularity:</strong>{" "}
                                    {numberConvert(data?.popularity)}
                                </li>
                                <li>
                                    <strong>Languages:</strong>{" "}
                                    {getCountryLanguages(
                                        data?.original_language
                                    )}
                                </li>
                                <li>
                                    <strong>Country: </strong>{" "}
                                    {getCountryName(data?.origin_country[0])}
                                </li>

                                <li>
                                    <strong>Runtime: </strong> {data?.runtime}
                                    mn
                                </li>
                                <li>
                                    <p>
                                        <strong>Genres: </strong>
                                        {genre?.map((i, index) => (
                                            <span key={i.id}>
                                                {i.name}
                                                {index <
                                                    production.length + 1 &&
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
        </div>
    );
};

export default TvShowCardDetail;
