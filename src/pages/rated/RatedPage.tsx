import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "react-router-dom";
import MoviePage from "../rated/movie/MoviePage";
import ShowPage from "../rated/show/ShowPage";

const RatedPage = () => {
    return (
        <div className="container mx-auto p-4">
            <Tabs defaultValue="movie" className="w-full">
                <TabsList>
                    <Link to="/rated/movie">
                        <TabsTrigger value="movie">Movies</TabsTrigger>
                    </Link>

                    <Link to="/rated/show">
                        <TabsTrigger value="show">TV Shows</TabsTrigger>
                    </Link>
                </TabsList>
                <TabsContent value="movie">
                    <MoviePage />
                </TabsContent>
                <TabsContent value="show">
                    <ShowPage />
                </TabsContent>
            </Tabs>
        </div>
    );
};

export default RatedPage;
