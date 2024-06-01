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
import { Menubar, MenubarMenu, MenubarTrigger } from "@/components/ui/menubar";

const Navbar = () => {
    const handleLogout = () => {
        localStorage.removeItem("guest_session_id");
        location.reload();
    };

    return (
        <Menubar className="w-full flex justify-between max-w-screen-xl mx-auto px-5 sticky z-10 shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px]">
            <div className="flex items-center gap-5">
                <MenubarMenu>
                    <Link to="/">
                        <MenubarTrigger>Home</MenubarTrigger>
                    </Link>
                </MenubarMenu>
                <MenubarMenu>
                    <Link to="/rated">
                        <MenubarTrigger>Rated</MenubarTrigger>
                    </Link>
                </MenubarMenu>
            </div>
            <div className="flex items-center gap-10">
                <ModeToggle />
                <div>
                    <div className="flex items-center gap-10">
                        {localStorage.getItem("guest_session_id") ? (
                            <DropdownMenu>
                                <DropdownMenuTrigger>
                                    {localStorage.getItem(
                                        "guest_session_id"
                                    ) ? (
                                        <FaUserCircle size={30} />
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
        </Menubar>
    );
};

export default Navbar;
