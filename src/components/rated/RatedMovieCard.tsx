// @/components/pages/MovieCard.tsx
import { MovieType } from "@/types/types";
import { BsDot } from "react-icons/bs";
import { convertYear } from "@/utils/yearConvertor";
import { Link } from "react-router-dom";

type MovieCardProps = {
    movie: MovieType;
};

const RatedMovieCard = ({ movie }: MovieCardProps) => {
    const posterUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

    return (
        <div className="max-w-xs rounded-xl overflow-hidden shadow-lg bg-white">
            <Link to={`/movie/${movie.id}`}>
                <div className="relative">
                    <img className="w-full" src={posterUrl} alt={movie.title} />
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity">
                        <svg
                            className="w-12 h-12 text-white"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path d="M10 17l6-5-6-5v10z" />
                        </svg>
                    </div>
                </div>
            </Link>

            <div className="px-4 py-4">
                <div className="font-semibold text-md mb-2">{movie?.title}</div>
                <div className="flex justify-between items-center mb-2 text-sm text-gray-500">
                    <div>
                        <p className="flex  items-center">
                            <span className="block">
                                {convertYear(movie?.release_date)}
                            </span>
                            <BsDot />
                            <span className="block">120 mn</span>
                        </p>
                    </div>
                    <div className="border px-3 py-1 rounded">Movie</div>
                </div>
            </div>
            <div>
                <p>You Rated: {movie?.rating}</p>
            </div>
        </div>
    );
};

export default RatedMovieCard;
