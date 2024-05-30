import { Skeleton } from "@/components/ui/skeleton";

const MovieDetailSkeleton = () => {
    return (
        <div className="flex items-center justify-center p-4">
            <div className=" rounded overflow-hidden shadow-lg flex flex-col md:flex-row">
                <Skeleton className="h-[400px] w-[300px] rounded-xl" />
                <div className=" p-6 flex flex-col justify-between">
                    <div className="text-left">
                        <Skeleton className="h-10 w-[500px] " />

                        <Skeleton className="text-base mb-4 mt-5 w-full h-24" />

                        <ul className="text-sm mb-4">
                            <li>
                                <Skeleton className="w-3/4 h-10 mb-2" />
                            </li>
                            <li>
                                <Skeleton className="w-3/4 h-10 mb-2" />
                            </li>
                            <li>
                                <Skeleton className="w-3/4 h-10 mb-2" />
                            </li>
                            <li>
                                <Skeleton className="w-3/4 h-10 mb-2" />
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MovieDetailSkeleton;
