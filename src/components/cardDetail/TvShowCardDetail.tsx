import { fetchTvShows } from "@/utils/query";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { TvShowTypes } from "@/types/types";
import { convertYear } from "@/utils/yearConvertor";

const TvShowCardDetail = () => {
    const { id } = useParams();

    const { data: movieData } = useQuery({
        queryKey: ["show"],
        queryFn: fetchTvShows,
    });

    return (
        <div className=" bg-gray-100 flex items-center justify-center p-4">
            {movieData &&
                movieData
                    .filter((show) => show.id.toString() === id)
                    .map((show: TvShowTypes) => (
                        <div
                            key={show.id}
                            className="max-w-5xl rounded overflow-hidden shadow-lg bg-white flex flex-col md:flex-row"
                        >
                            <img
                                className="w-full md:w-1/3 object-cover"
                                src={`https://image.tmdb.org/t/p/w500${show.backdrop_path}`}
                                alt={show.name}
                            />
                            <div className="p-6 flex flex-col justify-between">
                                <div className="text-left">
                                    <div className="font-bold text-2xl mb-5">
                                        {show.name}
                                    </div>
                                    <hr />
                                    <p className="text-gray-700 text-base mb-4 mt-5">
                                        {show.overview}
                                    </p>
                                    <ul className="text-gray-700 text-sm mb-4">
                                        <li>
                                            <strong>Year:</strong>{" "}
                                            {convertYear(show.release_date)}
                                        </li>
                                        <li>
                                            <strong>Vote Average:</strong>{" "}
                                            {show.vote_average}
                                        </li>
                                        <li>
                                            <strong>Vote Count:</strong>{" "}
                                            {show.vote_count}
                                        </li>
                                        <li>
                                            <strong>Popularity:</strong>{" "}
                                            {show.popularity}
                                        </li>
                                        <li>
                                            <strong>Original Language:</strong>{" "}
                                            {show.original_language}
                                        </li>
                                        <li>
                                            <strong>Origin Country:</strong>{" "}
                                            {show.origin_country}
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))}
        </div>
    );
};

export default TvShowCardDetail;
