import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// @ts-nocheck
import { useState } from 'react';
import { axiosPrivet } from '@/utils/axios/baseUrl';
import { toast } from 'sonner';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { setTrainer } from '@/redux/trainerSlice';
import { trainerLoginURL } from '@/utils/axios/apiUrls';
const Login = () => {
    const dispatch = useDispatch();
    const [subPlan, setSubPlan] = useState('');
    const { register, handleSubmit, formState: { errors }, } = useForm();
    const navigate = useNavigate();
    const onSubmit = async (data) => {
        const { email, password } = data;
        try {
            const response = await axiosPrivet.post(trainerLoginURL, { email, password });
            console.log(response.data);
            if (response.data.message === 'success') {
                toast.success('Login success');
                localStorage.setItem('accessToken', response.data.accessToken);
                dispatch(setTrainer(response.data.trainer));
                navigate('/trainer');
            }
            else {
                toast.error(response.data.message);
            }
        }
        catch (error) {
            console.error('Error during login:', error);
            toast.error('An error occurred during login');
        }
    };
    return (_jsx("div", { className: 'h-[100vh]', children: _jsx("div", { className: 'grid grid-cols-9 grid-rows-5 gap-4', children: _jsx("div", { className: 'col-span-3 row-span-4 col-start-4 row-start-2 ', children: _jsx("div", { className: 'w-11/12 h-[60vh] flex justify-center text-center outline rounded outline-1 outline-gray-500', children: _jsx("form", { onSubmit: handleSubmit(onSubmit), children: _jsxs("div", { className: 'mt-10 ', children: [_jsx("h1", { className: 'text-6xl font-bold', children: "Login" }), _jsx("p", { className: 'font-thin text-sm mt-4 ', children: "Enter you email and password below" }), _jsx("input", { ...register('email', {
                                        required: 'Email Required',
                                        pattern: {
                                            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                            message: 'Enter a valid email',
                                        },
                                    }), type: 'text', name: 'email', className: 'mt-5 bg-transparent outline outline-1 outline-gray-500 text-sm rounded p-2 w-72', placeholder: 'Enter your email' }), _jsx("input", { ...register('password', {
                                        required: 'Password Required',
                                        pattern: {
                                            value: /^.{6,}$/,
                                            message: 'At least 6 characters',
                                        },
                                    }), type: 'password', className: 'mt-5 bg-transparent outline outline-1 outline-gray-500 text-sm rounded p-2 w-72', placeholder: 'Enter your password' }), _jsx("button", { type: 'submit', className: 'w-72 rounded mt-10 bg-white p-2 text-black font-medium', children: "Login" }), " ", _jsx("br", {}), errors.email && (_jsx("small", { className: 'text-red-600', children: errors.email.message })), " ", _jsx("br", {}), errors.password && (_jsx("small", { className: 'text-red-600', children: errors.password.message }))] }) }) }) }) }) }));
};
export default Login;
