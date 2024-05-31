import { Outlet } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import { ThemeProvider } from "@/components/theme-provider.tsx";

const App = () => {
    return (
        <div>
            <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
                <div className="w-full flex justify-center ">
                    <Navbar />
                </div>
                <div className="mt-5 max-w-screen-xl mx-auto">
                    <Outlet />
                </div>
            </ThemeProvider>
        </div>
    );
};

export default App;
