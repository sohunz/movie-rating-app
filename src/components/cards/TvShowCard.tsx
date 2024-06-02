import { TvShowTypes } from "@/types/types";
import { BsDot } from "react-icons/bs";
import { convertYear } from "@/utils/yearConvertor";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { rateTvShow } from "@/utils/query";
import { useToast } from "@/components/ui/use-toast";
import { Badge } from "@/components/ui/badge";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "../ui/button";

type TvShowCardProps = {
    tvshow: TvShowTypes;
};

queryKey: ["RatedShow"];

const TvShowCard = ({ tvshow }: TvShowCardProps) => {
    const posterUrl = `https://image.tmdb.org/t/p/w500${tvshow.poster_path}`;
    const { toast } = useToast();
    const [rating, setRating] = useState<number>(0);

    const queryClient = useQueryClient();

    const { mutate: rateTvShowData } = useMutation({
        mutationKey: ["rateTvShow"],
        mutationFn: ({ id, rating }: { id: number; rating: number }) =>
            rateTvShow(id, rating),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["RatedShow"] });
            toast({
                description: "You have rated the movie successfully",
            });
        },
    });

    return (
        <Card className="rounded-[12px] overflow-hidden shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px]">
            <CardHeader>
                <CardTitle>
                    <Link to={`/show/${tvshow?.id}`}>
                        <div className="relative">
                            <img
                                className="w-full h-[270px] object-cover rounded-[7px]"
                                src={posterUrl}
                                alt={tvshow?.name}
                            />
                            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity">
                                <svg
                                    className="w-12 h-12 text-white"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M10 17l6-5-6-5v10z" />
                                </svg>
                            </div>
                        </div>
                    </Link>
                </CardTitle>
            </CardHeader>
            <div className="w-full h-[200px] flex flex-col justify-between">
                <CardContent className="w-full">
                    <div className="font-semibold text-lg line-clamp-2">
                        {tvshow?.name}
                    </div>
                </CardContent>
                <CardFooter className="w-full flex justify-between flex-col">
                    <div className="w-full flex flex-row items-center justify-between">
                        <div>
                            <p className="flex  items-center">
                                <span className="block text-sm">
                                    {convertYear(tvshow?.first_air_date)}
                                </span>
                                <BsDot />
                                <span className="block text-sm">90mn</span>
                            </p>
                        </div>
                        <Badge
                            variant="outline"
                            className="py-2 px-2 rounded-md text-sm"
                        >
                            Movie
                        </Badge>
                    </div>
                    <div className="w-full flex flex-row items-center justify-between pt-2">
                        <div className="w-full">
                            <div className="w-full flex flex-row items-center gap-2 my-2">
                                <Input
                                    type="number"
                                    className="w-[60px]"
                                    placeholder="0"
                                    min={0}
                                    max={10}
                                    step={0.5}
                                    onChange={(
                                        e: React.ChangeEvent<HTMLInputElement>
                                    ) => setRating(Number(e.target.value))}
                                />
                                <Button
                                    onClick={() =>
                                        rateTvShowData({
                                            id: tvshow?.id,
                                            rating,
                                        })
                                    }
                                >
                                    Rate
                                </Button>
                            </div>
                        </div>
                        <div>
                            <Badge
                                variant="outline"
                                className="bg-blue-500 text-white py-2 text-md rounded-md px-3"
                            >
                                {tvshow.vote_average.toFixed(1)}
                            </Badge>
                        </div>
                    </div>
                </CardFooter>
            </div>
        </Card>
    );
};

export default TvShowCard;
