import { TvShowTypes } from "@/types/types";
import { BsDot } from "react-icons/bs";
import { convertYear } from "@/utils/yearConvertor";
import { Link } from "react-router-dom";

type TvShowCardProps = {
    tvshow: TvShowTypes;
};

const RatedShowCard = ({ tvshow }: TvShowCardProps) => {
    const posterUrl = `https://image.tmdb.org/t/p/w500${tvshow.poster_path}`;

    return (
        <Link
            to={`/show/${tvshow.id}`}
            className="max-w-xs rounded-xl overflow-hidden shadow-lg border"
        >
            <div className="relative">
                <img className="w-full" src={posterUrl} alt={tvshow.name} />
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
            <div className="px-4 py-4">
                <div className="font-semibold text-md mb-2">{tvshow.name}</div>
                <div className="flex justify-between items-center mb-2 text-sm text-gray-500">
                    <div>
                        <p className="flex  items-center">
                            <span className="block">
                                {convertYear(tvshow.first_air_date)}
                            </span>
                            <BsDot />
                            <span className="block">120 mn</span>
                        </p>
                    </div>
                    <div className="border px-3 py-1 rounded">TV Show</div>
                </div>
            </div>
            <div>
                <p>you rated: {tvshow.rating}</p>
            </div>
        </Link>
    );
};

export default RatedShowCard;
