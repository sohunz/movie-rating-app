import { useState } from "react";
import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useMutation } from "@tanstack/react-query";
import { mutationLogin } from "./mutationLogin";
import { useNavigate } from "react-router-dom";
import Loading from "@/components/loader/Loading";

const Auth = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    const { mutate } = useMutation({
        mutationKey: ["Auth"],
        mutationFn: mutationLogin,
        onMutate: () => {
            setLoading(true);
        },
        onSuccess: (data) => {
            setLoading(false);
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
            setLoading(false);
            console.error("Login failed:", error);
        },
    });

    const handleLogin = () => {
        mutate();
    };

    return (
        <div className="w-full h-[85vh] flex items-center justify-center">
            {loading ? (
                <div className="flex items-center justify-center">
                    <Loading />
                </div>
            ) : (
                <Button className="border" onClick={handleLogin}>
                    <Mail className="mr-2 h-4 w-4" /> Login by registering as a
                    Guest
                </Button>
            )}
        </div>
    );
};

export default Auth;
