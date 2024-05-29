import { TvShowTypes } from "@/types/types";
import TvShowCard from "../../../components/cards/TvShowCard";
import { useTvShows } from "@/hooks/useFetch";
import Loading from "@/components/loader/Loading";

const ShowPage = () => {
    const { data, isError, isLoading } = useTvShows();

    if (isLoading) {
        return (
            <div className="w-full h-[85vh] flex items-center justify-center">
                <Loading />
            </div>
        );
    }

    if (isError) {
        return (
            <div className="w-full h-[85vh] flex items-center justify-center">
                <p>Failed to load tv show.</p>
            </div>
        );
    }

    return (
        <div className="mt-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {data &&
                    data.map((tvshow: TvShowTypes) => (
                        <TvShowCard key={tvshow.id} tvshow={tvshow} />
                    ))}
            </div>
        </div>
    );
};

export default ShowPage;
