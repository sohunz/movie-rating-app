import { Skeleton } from "@/components/ui/skeleton";

const CardSketon = () => {
    return (
        <div className="max-w-xs rounded-xl overflow-hidden">
            <div className="flex flex-col space-y-3">
                <Skeleton className="h-[400px] w-[320px] rounded-xl" />
                <div className="space-y-2">
                    <Skeleton className="h-8 w-[90%] mx-auto text-center" />
                </div>
            </div>
            <div className="flex flex-row items-center gap-2 px-5 my-5">
                <Skeleton className="h-14 w-[200px]" />
                <Skeleton className="h-14 w-[200px]" />
            </div>
        </div>
    );
};

export default CardSketon;
