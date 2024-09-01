import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { clearUser } from '@/redux/userSlice';
const Navbar = () => {
    const navigate = useNavigate();
    const user = useSelector((state) => state.persisted.user.user);
    console.log(user.name);
    const dispatch = useDispatch();
    return (_jsxs(_Fragment, { children: [_jsx("div", { className: 'sm:hidden', children: "navbar" }), _jsxs("div", { className: 'h-14  hover:text-white   inset-0 bg-black bg-opacity-85 backdrop-blur-lg z-50 sm:h-24  border-gray-600 hidden sm:flex   xl:h-24 border-b fixed top-0  w-full justify-between xl:pr-8 items-center     ', children: [_jsx(Link, { to: "/", children: _jsx("img", { src: "/logo.png", className: 'h-14 xl:ml-5', alt: "" }) }), _jsxs("ul", { className: 'font-sans  font-bold flex gap-28  ', children: [_jsx("li", { className: 'text-gray-300 hover:text-white hover:cursor-pointer ', children: _jsx(Link, { to: '/', children: "HOME " }) }), _jsx("li", { className: 'text-gray-300 hover:text-white hover:cursor-pointer ', children: _jsx(Link, { to: '/trainers', children: "TRAINERS" }) }), _jsx("li", { className: 'text-gray-300 hover:text-white hover:cursor-pointer ', children: _jsx(Link, { to: '/video', children: "  VIDEOS" }) })] }), _jsxs("div", { className: 'flex items-center gap-4', children: [_jsx(Link, { to: "/trainer/register", className: 'font-roboto text-gray-300 hover:text-white', children: "BECOME A TRAINER" }), user.name ? _jsx("button", { onClick: () => dispatch(clearUser()), className: 'border  xl:w-32 xl:h-12 hover:ring-1 transition-all duration-100  ring-white', children: "PROFILE" }) :
                                _jsx("button", { onClick: () => navigate('/login'), className: 'border  xl:w-32 xl:h-12 hover:ring-1 transition-all duration-100  ring-white', children: "SIGN IN" })] })] })] }));
};
export default Navbar;
