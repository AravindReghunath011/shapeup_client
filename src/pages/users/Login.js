import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from 'react';
import Navbar from '../../components/users/Navbar';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
// import { googleLogout } from '@react-oauth/google';
import axios from '../../utils/axios/baseUrl';
import { Link } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';
import { toast } from 'sonner';
import Cookies from 'js-cookie';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setUser } from '@/redux/userSlice';
import { userGoogleLoginURL, userLoginURL } from '@/utils/axios/apiUrls';
const page = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user);
    console.log(user, 'from loginnnnn');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleSubmit = () => {
        console.log(email, password, 'body');
        axios().post(userLoginURL, {
            email: email,
            password: password
        })
            .then(function ({ data }) {
            if (data.message == 'success') {
                console.log(data);
                const { name, email, id } = data.user;
                dispatch(setUser({ name, email, id }));
                //Cookies.set('accessToken',data.accessToken,{path:'/',httpOnly:false})
                localStorage.setItem('accessToken', data.accessToken);
                toast.success('Login success');
                setTimeout(() => {
                    navigate('/');
                }, 2000);
            }
            else {
                toast.error(data.message);
            }
        })
            .catch(function (error) {
            console.log(error.message);
            toast.error(error.message);
        });
    };
    return (_jsxs(_Fragment, { children: [_jsx(Navbar, {}), _jsxs("div", { className: 'font-mono xl:mt-40 ', children: [_jsx("h1", { className: 'font-mono font-black text-5xl ml-8 mt-14 sm:text-8xl sm:mt-36 sm:ml-24  lg:mt-20 lg:ml-56 xl:mt-20', children: "Login" }), _jsxs("div", { className: 'ml-32 mt-64 sm:ml-80 sm:mt-96 lg:ml-[55vw] lg:mt-44 ', children: [_jsx("input", { onChange: (e) => setEmail(e.target.value), className: 'bg-transparent outline mb-3 h-8 sm:h-16 sm:w-96 pl-2 sm:text-2xl sm:pl-5 lg:h-10 lg:w-80 lg:text-base outline-gray-500 outline-1 ', placeholder: 'Enter your email', type: "text" }), _jsx("br", {}), _jsx("input", { onChange: (e) => setPassword(e.target.value), className: 'bg-transparent outline  h-8 pl-2 sm:h-16 sm:w-96 sm:text-2xl sm:pl-5 outline-gray-500 outline-1 lg:h-10 lg:w-80 lg:text-base  ', placeholder: 'Enter your password', type: "password" }), _jsx("p", { className: 'text-sm ml-28 mb-3 font-thin underline  sm:text-xl sm:ml-52 lg:ml-48 lg:text-sm', children: "forgot password?" }), _jsx("button", { onClick: () => handleSubmit(), className: 'bg-yellow-400 text-black outline font-bold h-8 pl-2 lg:h-10  lg:w-80 lg:text-base outline-gray-500 outline-1 w-56 sm:h-16 sm:w-96 sm:text-2xl ', type: "submit", children: " sign in" }), _jsxs("div", { className: 'flex', children: [_jsx("p", { className: 'text-sm ml-5 mb-3 font-thin   sm:text-xl sm:ml-12 lg:text-base lg:ml-10', children: "Don't have an account?" }), _jsx(Link, { to: "/register", children: _jsx("p", { className: 'lg:ml-2  text-sm font-thin sm:text-xl lg:text-base  underline', children: "signup" }) })] }), _jsx("div", { className: 'xl:w-80 flex justify-center ', children: _jsx(GoogleOAuthProvider, { clientId: "736922844173-0m0hsqrnpm1ou0jot4c9cpsqc3lm6jji.apps.googleusercontent.com", children: _jsx(GoogleLogin, { onSuccess: credentialResponse => {
                                            let decoded = jwtDecode(credentialResponse.credential);
                                            console.log(decoded);
                                            axios().post(userGoogleLoginURL, {
                                                user: decoded
                                            })
                                                .then(function ({ data }) {
                                                console.log(data, 'helo');
                                                if (data.message == 'success') {
                                                    const { name, email, id } = data.user;
                                                    dispatch(setUser({ name, email, id }));
                                                    Cookies.set('accessToken', data.accessToken, { path: '/', httpOnly: false });
                                                    toast.success('Login success');
                                                    setTimeout(() => {
                                                        navigate('/');
                                                    }, 2000);
                                                }
                                            })
                                                .catch(function (error) {
                                                console.log(error.message);
                                            });
                                        }, onError: () => {
                                            console.log('Login Failed');
                                        }, useOneTap: true }) }) })] })] })] }));
};
export default page;
