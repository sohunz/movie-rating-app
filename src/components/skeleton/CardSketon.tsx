import { Skeleton } from "@/components/ui/skeleton";

const CardSketon = () => {
    return (
        <div className="max-w-xs rounded-xl overflow-hidden  shadow">
            <div className="flex flex-col space-y-3">
                <Skeleton className="h-[250px] w-50 rounded-xl" />
                <div className="space-y-2">
                    <Skeleton className="h-4 w-[250px]" />
                    <Skeleton className="h-4 w-[200px]" />
                </div>
            </div>

            <div className="px-4 py-4">
                <div className="font-semibold text-md mb-2"></div>
                <div className="flex justify-between items-center mb-2 text-sm text-gray-500">
                    <div>
                        <p className="flex  items-center">
                            <span className="block"></span>

                            <span className="block"></span>
                        </p>
                    </div>
                    <div className="border px-3 py-1 rounded"></div>
                </div>
            </div>

            <div className="flex flex-row items-center gap-2 px-5 my-2">
                <input
                    type="number"
                    className="border w-[60px]"
                    min={0}
                    max={10}
                    step={0.5}
                />
                <button className="border rounded-md px-2 py-1"></button>
            </div>
        </div>
    );
};

export default CardSketon;
