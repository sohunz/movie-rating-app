import { TvShowTypes } from "@/types/types";
import { fetchRatedShow } from "@/utils/query";
import { useQuery } from "@tanstack/react-query";
import RatedShowCard from "@/components/rated/RatedShowCard";

const ShowPage = () => {
    const { data: ratedTvShowData } = useQuery({
        queryKey: ["ratedShow"],
        queryFn: fetchRatedShow,
    });
    return (
        <div className="mt-10">
            <h2 className="text-3xl font-bold mb-4">TV Shows</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {ratedTvShowData &&
                    ratedTvShowData.map((tvshow: TvShowTypes) => (
                        <RatedShowCard key={tvshow.id} tvshow={tvshow} />
                    ))}
            </div>
        </div>
    );
};

export default ShowPage;
