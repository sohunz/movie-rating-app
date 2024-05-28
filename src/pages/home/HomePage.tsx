import { useState } from "react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Movie from "./movie/MoviePage";
import Show from "./show/ShowPage";
import { Link } from "react-router-dom";

const HomePage = () => {
    const [activeTab, setActiveTab] = useState("movie");

    return (
        <div className="container mx-auto p-4">
            <Tabs defaultValue="movie" className="w-full">
                <TabsList>
                    <Link
                        to="/movie"
                        className={`border ${
                            activeTab === "movie"
                                ? "bg-blue-500 text-white"
                                : ""
                        }`}
                        onClick={() => setActiveTab("movie")}
                    >
                        <TabsTrigger value="movie">Movies</TabsTrigger>
                    </Link>

                    <Link
                        to="/show"
                        className={`border ${
                            activeTab === "show" ? "bg-blue-500 text-white" : ""
                        }`}
                        onClick={() => setActiveTab("show")}
                    >
                        <TabsTrigger value="show">TV Shows</TabsTrigger>
                    </Link>
                </TabsList>
                <TabsContent value="movie">
                    <Movie />
                </TabsContent>
                <TabsContent value="show">
                    <Show />
                </TabsContent>
            </Tabs>
        </div>
    );
};

export default HomePage;
