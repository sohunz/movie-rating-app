import { TvShowTypes } from "@/types/types";
import { fetchTvShows } from "@/utils/query";
import { useQuery } from "@tanstack/react-query";
import TvShowCard from "../../../components/cards/TvShowCard";

const ShowPage = () => {
    const { data: tvShowData } = useQuery({
        queryKey: ["tvshows"],
        queryFn: fetchTvShows,
    });
    return (
        <div className="mt-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {tvShowData &&
                    tvShowData.map((tvshow: TvShowTypes) => (
                        <TvShowCard key={tvshow.id} tvshow={tvshow} />
                    ))}
            </div>
        </div>
    );
};

export default ShowPage;
