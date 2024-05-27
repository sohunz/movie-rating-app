import { fetchMovie } from "@/utils/query";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { MovieType } from "@/types/types";

const CardDetail = () => {
    const { id } = useParams();

    console.log(id);

    const { data: movieData } = useQuery({
        queryKey: ["movie"],
        queryFn: fetchMovie,
    });

    const posterUrl = `https://image.tmdb.org/t/p/w500${movieData
        ?.filter((movie) => movie.id.toString() === id)
        .map((movie) => movie.poster_path)}`;

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {movieData &&
                movieData
                    .filter((movie) => movie.id.toString() === id)
                    .map((movie: MovieType) => (
                        <div className=" grid place-items-center font-mono ">
                            <div className="rounded-md bg-gray-800 shadow-lg">
                                <div className="md:flex px-4 leading-none max-w-4xl">
                                    <div className="flex-none">
                                        <img
                                            src={posterUrl}
                                            alt="pic"
                                            className="h-72 w-56 rounded-md  transform -translate-y-4 border-4 border-gray-300 shadow-lg"
                                        />
                                    </div>

                                    <div className="flex-col text-gray-300">
                                        <p className="pt-4 text-2xl font-bold">
                                            {movie.title} (2020)
                                        </p>
                                        <hr
                                            className="hr-text"
                                            data-content=""
                                        />
                                        <div className="text-md flex justify-between px-4 my-2">
                                            <span className="font-bold">
                                                2h 2min | Crime, Drama, Thriller
                                            </span>
                                            <span className="font-bold"></span>
                                        </div>
                                        <p className="hidden md:block px-4 my-4 text-sm text-left">
                                            {movie.overview}
                                        </p>

                                        <p className="flex text-md px-4 my-2">
                                            Rating: 9.0/10
                                            <span className="font-bold px-2">
                                                |
                                            </span>
                                            Mood: Dark
                                        </p>

                                        <div className="text-xs">
                                            <button
                                                type="button"
                                                className="border border-gray-400 text-gray-400 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-900 focus:outline-none focus:shadow-outline"
                                            >
                                                TRAILER
                                            </button>

                                            <button
                                                type="button"
                                                className="border border-gray-400 text-gray-400 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-900 focus:outline-none focus:shadow-outline"
                                            >
                                                IMDB
                                            </button>

                                            <button
                                                type="button"
                                                className="border border-gray-400 text-gray-400 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-900 focus:outline-none focus:shadow-outline"
                                            >
                                                AMAZON
                                            </button>
                                        </div>
                                        {/* <p>ICON BTNS</p> */}
                                    </div>
                                </div>
                                <div className="flex justify-between items-center px-4 mb-4 w-full">
                                    <div className="flex">
                                        <i className="material-icons mr-2 text-red-600">
                                            favorite_border
                                        </i>
                                        <i className="material-icons text-blue-600">
                                            remove_red_eye
                                        </i>
                                    </div>
                                    <div className="flex">
                                        <i className="material-icons ml-2 text-yellow-600">
                                            sentiment_very_satisfied
                                        </i>
                                        <i className="material-icons ml-2 text-yellow-600">
                                            sentiment_neutral
                                        </i>
                                        <i className="material-icons ml-2 text-yellow-600">
                                            sentiment_very_dissatisfied
                                        </i>
                                        <i className="material-icons ml-2 text-yellow-600">
                                            star_outline
                                        </i>
                                        <i className="material-icons ml-2 text-yellow-600">
                                            star_half
                                        </i>
                                        <i className="material-icons ml-2 text-yellow-600">
                                            star
                                        </i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
        </div>
    );
};

export default CardDetail;
