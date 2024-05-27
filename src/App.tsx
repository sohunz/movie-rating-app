import { Outlet } from "react-router-dom";
import Navbar from "./components/pages/Navbar";

const App = () => {
    return (
        <div className="mx-5">
            <Navbar />
            <Outlet />
        </div>
    );
};

export default App;
