import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="w-full border mb-5">
            <div className="flex items-center justify-between">
                <div className="flex items-center">
                    <Link
                        to="/"
                        className="py-3 px-5 cursor-pointer hover:bg-gray-300"
                    >
                        Home
                    </Link>
                    <Link
                        to="/rated"
                        className="py-3 px-5 cursor-pointer hover:bg-gray-300"
                    >
                        Rated
                    </Link>
                </div>
                <div>
                    <Link
                        to="/auth"
                        className="py-3 px-5 cursor-pointer hover:bg-gray-300"
                    >
                        Auth
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
