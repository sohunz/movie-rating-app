import { Outlet } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import { ThemeProvider } from "@/components/theme-provider.tsx";
import { ModeToggle } from "./components/mode-toggle";

const App = () => {
    return (
        <div>
            <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
                <Navbar />
                <Outlet />
            </ThemeProvider>
        </div>
    );
};

export default App;
