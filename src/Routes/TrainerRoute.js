import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Login from "@/pages/trainer/Login";
import Otp from "@/pages/trainer/Otp";
import Register from "@/pages/trainer/Register";
import CreateSubscriptionPlan from "@/pages/trainer/createSubscriptionPlan";
import Home from "@/pages/trainer/Home";
import SubscribersList from "@/pages/trainer/SubscribersList";
import VideoUpload from "@/pages/trainer/VideoUpload";
import { Route, Routes } from "react-router-dom";
import TrainerProtected from "./TrainerProtected";
import Chat from "@/pages/trainer/Chat";
import DietUpload from "@/pages/trainer/DietUpload";
import Profile from "@/pages/trainer/profile";
const UserRoutes = () => {
    return (_jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsx(Home, {}) }), _jsx(Route, { path: "/login", element: _jsx(Login, {}) }), _jsx(Route, { path: "/register", element: _jsx(Register, {}) }), _jsx(Route, { path: "/otp", element: _jsx(Otp, {}) }), _jsx(Route, { path: "/message", element: _jsx(Chat, {}) }), _jsx(Route, { path: "/profile", element: _jsx(Profile, {}) }), _jsx(Route, { path: "/diet/upload", element: _jsx(DietUpload, {}) }), _jsx(Route, { path: "/subscriptionplan/create", element: _jsx(TrainerProtected, { children: _jsx(CreateSubscriptionPlan, {}) }) }), _jsx(Route, { path: "/subscribers/:trainerId", element: _jsx(TrainerProtected, { children: _jsx(SubscribersList, {}) }) }), _jsx(Route, { path: "/video/upload", element: _jsx(TrainerProtected, { children: _jsx(VideoUpload, {}) }) })] }));
};
export default UserRoutes;
