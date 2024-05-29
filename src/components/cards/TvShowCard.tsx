import { TvShowTypes } from "@/types/types";
import { BsDot } from "react-icons/bs";
import { convertYear } from "@/utils/yearConvertor";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { rateTvShow } from "@/utils/query";
import toast from "react-hot-toast";

type TvShowCardProps = {
    tvshow: TvShowTypes;
};

const TvShowCard = ({ tvshow }: TvShowCardProps) => {
    const posterUrl = `https://image.tmdb.org/t/p/w500${tvshow.poster_path}`;

    const [rating, setRating] = useState<number>(0);

    const { mutate: rateTvShowData } = useMutation({
        mutationKey: ["rateTvShow"],
        mutationFn: ({ id, rating }: { id: number; rating: number }) =>
            rateTvShow(id, rating),
        onSuccess: () => {
            toast.success("You have rated successfully.");
        },
    });

    return (
        <div className="max-w-xs rounded-xl overflow-hidden shadow-lg bg-white">
            <Link className="relative" to={`/show/${tvshow?.id}`}>
                <img className="w-full" src={posterUrl} alt={tvshow?.name} />
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity">
                    <svg
                        className="w-12 h-12 text-white"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path d="M10 17l6-5-6-5v10z" />
                    </svg>
                </div>
            </Link>
            <div className="px-4 py-4">
                <div className="font-semibold text-md mb-2">{tvshow?.name}</div>
                <div className="flex justify-between items-center mb-2 text-sm text-gray-500">
                    <div>
                        <p className="flex  items-center">
                            <span className="block">
                                {convertYear(tvshow?.first_air_date)}
                            </span>
                            <BsDot />
                            <span className="block">120 mn</span>
                        </p>
                    </div>
                    <div className="border px-3 py-1 rounded">TV Show</div>
                </div>
            </div>

            <div className="flex flex-row items-center gap-2 px-5 my-2">
                <input
                    type="number"
                    className="border w-[60px]"
                    min={0}
                    max={10}
                    step={0.5}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setRating(Number(e.target.value))
                    }
                />
                <button
                    className="border bg-blue-500 text-white rounded-md px-2 py-1"
                    onClick={() => rateTvShowData({ id: tvshow?.id, rating })}
                >
                    Rate
                </button>
            </div>
        </div>
    );
};

export default TvShowCard;
