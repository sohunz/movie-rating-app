import { useParams } from "react-router-dom";
import { useShowDetail } from "@/hooks/useFetch";

const TvShowCardDetail = () => {
    const { id } = useParams();

    const show = useShowDetail(Number(id));

    const genre = show?.genres;

    const production = show?.production_companies;

    return (
        <div className=" flex items-center justify-center p-4">
            <div className=" flex items-center justify-center p-4">
                <div className="max-w-5xl rounded overflow-hidden shadow-lg  flex flex-col md:flex-row">
                    <img
                        className="w-full md:w-1/3 object-cover"
                        src={`https://image.tmdb.org/t/p/w500${show?.backdrop_path}`}
                    />
                    <div className="p-6 flex flex-col justify-between">
                        <div className="text-left">
                            <div className="font-bold text-2xl mb-5">
                                {show?.name}
                            </div>
                            <hr />
                            <p className="text-gray-700 text-base mb-4 mt-5">
                                {show?.overview}
                            </p>
                            <ul className="text-gray-700 text-sm mb-4">
                                <li>
                                    <strong>Year: </strong> {show?.release_date}
                                </li>
                                <li>
                                    <strong>Vote Average:</strong>{" "}
                                    {show?.vote_average}
                                </li>
                                <li>
                                    <strong>Vote Count:</strong>{" "}
                                    {show?.vote_count}
                                </li>
                                <li>
                                    <strong>Popularity:</strong> 780
                                </li>
                                <li>
                                    <strong>Original Language:</strong> English
                                </li>
                                <li>
                                    <strong>Origin Country: </strong>{" "}
                                    {show?.origin_country[0]}
                                </li>
                                <li>
                                    <p>Status : yoo</p>
                                </li>
                                <li>
                                    <p>Runtime : 12</p>
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
        </div>
    );
};

export default TvShowCardDetail;
