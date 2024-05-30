import { Outlet } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import { ThemeProvider } from "@/components/theme-provider.tsx";
import MovieDetailSkeleton from "./components/skeleton/MovieDetailSkeleton";

const App = () => {
    return (
        <div>
            <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
                {/* <Navbar />
                <Outlet /> */}
                <MovieDetailSkeleton />
            </ThemeProvider>
        </div>
    );
};

export default App;
