import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchMovie, fetchTvShows } from "../../utils/query";
import { MovieType, TvShowTypes } from "@/types/types";
import MovieCard from "@/components/pages/MovieCard";
import TvShowCard from "@/components/pages/TvShowCard";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Home = () => {
    const [activeTab, setActiveTab] = useState("movie");

    const { data: movieData } = useQuery({
        queryKey: ["movies"],
        queryFn: fetchMovie,
    });

    const { data: tvShowData } = useQuery({
        queryKey: ["tvshows"],
        queryFn: fetchTvShows,
    });

    console.log(tvShowData);

    return (
        <div className="container mx-auto p-4">
            <Tabs defaultValue="movie" className="w-full">
                <TabsList>
                    <div
                        className={`border ${
                            activeTab === "movie"
                                ? "bg-blue-500 text-white"
                                : ""
                        }`}
                        onClick={() => setActiveTab("movie")}
                    >
                        <TabsTrigger value="movie">Movies</TabsTrigger>
                    </div>

                    <div
                        className={`border ${
                            activeTab === "show" ? "bg-blue-500 text-white" : ""
                        }`}
                        onClick={() => setActiveTab("show")}
                    >
                        <TabsTrigger value="show">TV Shows</TabsTrigger>
                    </div>
                </TabsList>
                <TabsContent value="movie">
                    <div className="mb-8 mt-10">
                        <h2 className="text-3xl font-bold mb-4">Movies</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                            {movieData &&
                                movieData.map((movie: MovieType) => (
                                    <MovieCard key={movie.id} movie={movie} />
                                ))}
                        </div>
                    </div>
                </TabsContent>
                <TabsContent value="show">
                    <div className="mt-10">
                        <h2 className="text-3xl font-bold mb-4">TV Shows</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                            {tvShowData &&
                                tvShowData.map((tvshow: TvShowTypes) => (
                                    <TvShowCard
                                        key={tvshow.id}
                                        tvshow={tvshow}
                                    />
                                ))}
                        </div>
                    </div>
                </TabsContent>
            </Tabs>
        </div>
    );
};

export default Home;
