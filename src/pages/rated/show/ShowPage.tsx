import { TvShowTypes } from "@/types/types";
import RatedShowCard from "@/components/rated/RatedShowCard";
import { useRatedShow } from "@/hooks/useFetch";
import CardSketon from "@/components/skeleton/CardSketon";

const ShowPage = () => {
    const { data, isError, isLoading } = useRatedShow();
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
                <p>Failed to load movies.</p>
            </div>
        );
    }

    if (!data || data.length === 0) {
        return (
            <div className="w-full h-[85vh] flex items-center justify-center">
                <p>No TV Show have been rated yet.</p>
            </div>
        );
    }

    return (
        <div className="mt-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {data &&
                    data.map((tvshow: TvShowTypes) => (
                        <RatedShowCard key={tvshow.id} tvshow={tvshow} />
                    ))}
            </div>
        </div>
    );
};

export default ShowPage;
