import { Skeleton } from "@/components/ui/skeleton";

const MovieDetailSkeleton = () => {
    return (
        <div className="flex items-center justify-center p-4 rounded-xl border shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] py-10 mb-5 lg:mx-0 md:mx-5 sm:mx-5 mx-5">
            <div className="max-w-5xl rounded overflow-hidden  flex flex-col md:flex-row gap-5">
                <Skeleton className="h-[480px] lg:w-[320px] md:w-[320px] sm:w-full w-full rounded-xl" />
                <div className="p-6 flex flex-col justify-between">
                    <div className=" space-y-4 flex flex-col justify-center lg:item-start md:items-start sm:items-start items-center">
                        <Skeleton className="w-[550px] h-7" />
                        <Skeleton className="w-[480px] h-7" />
                        <div className="pt-5 space-y-4">
                            <Skeleton className="w-[480px] h-5" />
                            <Skeleton className="w-[500px] h-5" />
                            <Skeleton className="w-[460px] h-5" />
                        </div>

                        <ul className=" space-y-4 pt-5">
                            <Skeleton className="w-[400px] h-5" />
                            <Skeleton className="w-[380px] h-5" />
                            <Skeleton className="w-[420px] h-5" />
                            <Skeleton className="w-[450px] h-5" />
                            <Skeleton className="w-[330px] h-5" />
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MovieDetailSkeleton;
