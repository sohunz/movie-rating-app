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
        <div className="  flex items-center justify-center p-4">
            <div className="max-w-5xl rounded overflow-hidden shadow-lg  flex flex-col md:flex-row">
                <img
                    className="w-full md:w-1/3 object-cover"
                    src={`https://image.tmdb.org/t/p/w500${data?.backdrop_path}`}
                />
                <div className="p-6 flex flex-col justify-between">
                    <div className="text-left">
                        <div className="font-bold text-2xl mb-5">
                            {data?.title}
                        </div>
                        <hr />
                        <p className="text-base mb-4 mt-5">{data?.overview}</p>
                        <ul className=" text-sm mb-4">
                            <li>
                                <strong>Release Date: </strong>{" "}
                                {data?.release_date}
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
                                {getCountryLanguages(data?.original_language)}
                            </li>
                            <li>
                                <strong>Country: </strong>{" "}
                                {getCountryName(data?.origin_country[0])}
                            </li>

                            <li>
                                <strong>Runtime: </strong> {data?.runtime}mn
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
