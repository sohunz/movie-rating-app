import { Link } from "react-router-dom";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { FaUserCircle } from "react-icons/fa";
import { ModeToggle } from "../mode-toggle";

const Navbar = () => {
    const handleLogout = () => {
        localStorage.removeItem("guest_session_id");
        location.reload();
    };

    return (
        <div className="w-[90vw] border mb-5">
            <div className="w-full flex items-center justify-between">
                <div className="w-full flex items-center justify-between">
                    <div>
                        <Link to="/" className="py-3 px-5 cursor-pointer">
                            Home
                        </Link>
                        <Link to="/rated" className="py-3 px-5 cursor-pointer ">
                            Rated
                        </Link>
                    </div>
                    <div className="flex items-center gap-4">
                        <div>
                            <ModeToggle />
                        </div>
                        <div className="flex item-center">
                            {localStorage.getItem("guest_session_id") ? (
                                <DropdownMenu>
                                    <DropdownMenuTrigger>
                                        {localStorage.getItem(
                                            "guest_session_id"
                                        ) ? (
                                            <FaUserCircle size={23} />
                                        ) : (
                                            "Login"
                                        )}
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent>
                                        <DropdownMenuLabel>
                                            Account Setting
                                        </DropdownMenuLabel>
                                        <DropdownMenuSeparator />

                                        <DropdownMenuItem
                                            className="cursor-pointer"
                                            onClick={handleLogout}
                                        >
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
            </div>
        </div>
    );
};

export default Navbar;
