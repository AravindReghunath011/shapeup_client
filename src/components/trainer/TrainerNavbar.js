import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
const Navbar = () => {
    const navigate = useNavigate();
    const user = useSelector((state) => state.persisted.trainer.trainer);
    console.log(user.name);
    const dispatch = useDispatch();
    return (_jsxs(_Fragment, { children: [_jsx("div", { className: 'sm:hidden', children: "navbar" }), _jsxs("div", { className: 'h-14  hover:text-white   inset-0 bg-black bg-opacity-85 backdrop-blur-lg z-50 sm:h-14  border-gray-600 hidden sm:flex   xl:h-20 border-b fixed top-0  w-full justify-between xl:pr-8 items-center     ', children: [_jsx(Link, { to: "/", children: _jsx("img", { src: "/logo.png", className: 'h-14 xl:ml-5', alt: "" }) }), _jsx("div", { className: 'flex items-center gap-4' })] })] }));
};
export default Navbar;
