import { TvShowTypes } from "@/types/types";
import TvShowCard from "../../../components/cards/TvShowCard";
import { useTvShows } from "@/hooks/useFetch";
import CardSketon from "@/components/skeleton/CardSketon";

const ShowPage = () => {
    const { data, isError, isLoading } = useTvShows();

    console.log(data);

    if (isLoading) {
        return (
            <div className="mb-8 mt-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {Array.from({ length: 12 }).map((_, index) => (
                        <CardSketon key={index} />
                    ))}
                </div>
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
