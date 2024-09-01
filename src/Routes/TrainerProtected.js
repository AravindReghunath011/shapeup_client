import { jsx as _jsx } from "react/jsx-runtime";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { toast } from "sonner";
const TrainerProtected = ({ children }) => {
    const user = useSelector((state) => state.persisted.trainer.trainer.name);
    if (!user) {
        toast.error('Login Required');
        return _jsx(Navigate, { to: "/trainer/login" });
    }
    return children;
};
export default TrainerProtected;
