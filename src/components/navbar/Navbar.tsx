import { Link } from "react-router-dom";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
    const handleLogout = () => {
        localStorage.removeItem("guest_session_id");
        location.reload();
    };

    return (
        <div className="w-[90vw] border mb-5">
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
                    {localStorage.getItem("guest_session_id") ? (
                        <DropdownMenu>
                            <DropdownMenuTrigger>
                                {localStorage.getItem("guest_session_id")
                                    ? "Guest"
                                    : "Login"}
                            </DropdownMenuTrigger>
                            <DropdownMenuContent>
                                <DropdownMenuLabel>
                                    Account Setting
                                </DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem onClick={handleLogout}>
                                    Logout
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    ) : (
                        "Login"
                    )}
                </div>
            </div>
        </div>
    );
};

export default Navbar;
