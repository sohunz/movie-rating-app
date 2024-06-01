import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Skeleton } from "../ui/skeleton";

const CardSketon = () => {
    return (
        <Card className="rounded-[12px] overflow-hidden shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px]">
            <CardHeader>
                <CardTitle>
                    <div className="relative">
                        <Skeleton className="w-full h-[270px] object-cover rounded-[7px]" />
                    </div>
                </CardTitle>
            </CardHeader>
            <div className="w-full h-[200px] flex flex-col justify-between">
                <CardContent className="w-full space-y-2">
                    <Skeleton className="w-full h-5" />
                    <Skeleton className="w-[85%] h-5" />
                </CardContent>
                <CardFooter className="w-full flex justify-between flex-col">
                    <div className="w-full flex flex-row items-center justify-between">
                        <Skeleton className="w-[70px] h-8" />
                        <Skeleton className="w-[70px] h-8" />
                    </div>
                    <div className="w-full flex flex-row items-center justify-between pt-2">
                        <div className="w-full flex flex-row items-center gap-2 my-2">
                            <Skeleton className="w-[100px] h-10" />
                        </div>
                        <div>
                            <Skeleton className="w-[100px] h-10" />
                        </div>
                    </div>
                </CardFooter>
            </div>
        </Card>
    );
};

export default CardSketon;
