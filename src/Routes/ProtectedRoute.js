import { jsx as _jsx } from "react/jsx-runtime";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { toast } from "sonner";
const ProtectedRoute = ({ children }) => {
    const user = useSelector((state) => state.persisted.user.user.name);
    if (!user) {
        toast.error('Login Required');
        return _jsx(Navigate, { to: "/login" });
    }
    return children;
};
export default ProtectedRoute;
