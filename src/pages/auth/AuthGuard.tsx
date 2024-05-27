import { Navigate } from "react-router-dom";

const AuthGuard = ({ children }: any) => {
    const isAuthenticated = !!localStorage.getItem("guest_session_id");

    if (!isAuthenticated) {
        return <Navigate to="/auth" />;
    }

    return children;
};

export default AuthGuard;
