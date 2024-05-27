import { Outlet } from "react-router-dom";
import Navbar from "./components/pages/Navbar";

const App = () => {
    return (
        <div className="bg-gray-100">
            <Navbar />
            <Outlet />
        </div>
    );
};

export default App;
