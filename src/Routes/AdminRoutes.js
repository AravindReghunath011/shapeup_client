import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Login from "@/pages/admin/Login";
import { Route, Routes } from "react-router-dom";
import UserList from '@/pages/admin/UserList';
import TrainersList from '@/pages/admin/TrainersList';
import TrainersRequests from "@/pages/admin/TrainersRequests";
const UserRoutes = () => {
    return (_jsxs(Routes, { children: [_jsx(Route, { path: "/login", element: _jsx(Login, {}) }), _jsx(Route, { path: "/users", element: _jsx(UserList, {}) }), _jsx(Route, { path: "/trainers", element: _jsx(TrainersList, {}) }), _jsx(Route, { path: "/trainersrequests", element: _jsx(TrainersRequests, {}) })] }));
};
export default UserRoutes;
