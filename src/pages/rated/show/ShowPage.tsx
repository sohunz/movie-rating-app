import { TvShowTypes } from "@/types/types";
import RatedShowCard from "@/components/rated/RatedShowCard";
import { useRatedShow } from "@/hooks/useFetch";

const ShowPage = () => {
    const ratedTvShowData = useRatedShow();
    return (
        <div className="mt-10">
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
