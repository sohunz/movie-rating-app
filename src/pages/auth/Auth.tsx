import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useMutation } from "@tanstack/react-query";
import { mutationLogin } from "./mutationLogin";
import { useNavigate } from "react-router-dom";

const Auth = () => {
    const navigate = useNavigate();

    const { mutate } = useMutation({
        mutationKey: ["Auth"],
        mutationFn: mutationLogin,
        onSuccess: (data) => {
            if (data && data.guest_session_id) {
                localStorage.setItem("guest_session_id", data.guest_session_id);
                navigate("/");
                location.reload();
            } else {
                console.error(
                    "guest_session_id is missing in the response data"
                );
            }
        },
        onError: (error) => {
            console.error("Login failed:", error);
        },
    });

    const handleLogin = () => {
        mutate();
    };

    return (
        <div className="w-full h-[85vh] flex items-center justify-center">
            <Button className="border" onClick={handleLogin}>
                <Mail className="mr-2 h-4 w-4" /> Login by registering as a
                Guest
            </Button>
        </div>
    );
};

export default Auth;
