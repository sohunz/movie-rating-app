import { Outlet } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";

const App = () => {
    return (
        <div className="bg-gray-100">
            <Navbar />
            <Outlet />
        </div>
    );
};

export default App;
