import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import axios from 'axios';
import { toast } from 'sonner';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { trainerRegister } from '@/utils/axios/apiUrls';
const Register = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    let navigate = useNavigate();
    let [email, setEmail] = useState('');
    let [password, setPassword] = useState('');
    let [name, setName] = useState('');
    const onSubmit = async (data) => {
        console.log(data);
        const formData = new FormData();
        formData.append('file', data.file[0]);
        formData.append('name', data.name);
        formData.append('email', data.email);
        formData.append('password', data.password);
        axios.post(trainerRegister, formData, { withCredentials: true }).then((response) => {
            console.log(response.data);
            if (response.data.message == 'success') {
                toast.success('Otp is sent to the mail');
                navigate('/trainer/otp');
            }
            else {
                console.log(response.data.message);
                toast.error(response.data.message);
            }
        });
    };
    return (_jsx("div", { children: _jsx("div", { className: "grid grid-cols-9 grid-rows-3 gap-4  ", children: _jsx("div", { className: "col-span-3 row-span-4 col-start-4 row-start-1 mt-28", children: _jsx("div", { className: ' h-[75vh] w-11/12 flex justify-center outline outline-1 outline-gray-500 rounded text-center', children: _jsxs("div", { className: 'mt-10 ', children: [_jsx("h1", { className: 'text-6xl font-bold', children: "Register" }), _jsx("p", { className: 'font-thin text-sm mt-4 ', children: "Enter you name, email and password below" }), _jsxs("form", { action: "", onSubmit: handleSubmit(onSubmit), children: [_jsx("input", { type: "text", ...register("name", { required: true }), className: 'mt-5 bg-transparent outline outline-1 outline-gray-500 text-sm rounded p-2 w-72', placeholder: 'Enter your name' }), errors.name && _jsx("p", { className: 'font-extralight text-sm h-2 text-red-700', children: "This field is required" }), _jsx("input", { type: "text ", ...register("email", { required: true }), className: 'mt-5 bg-transparent outline outline-1 outline-gray-500 text-sm rounded p-2 w-72', placeholder: 'Enter your email' }), errors.email && _jsx("p", { className: 'font-extralight text-sm h-2 text-red-700', children: "This field is required" }), _jsx("input", { type: "password", ...register("password", { required: true }), className: 'mt-5 bg-transparent outline outline-1 outline-gray-500 text-sm rounded p-2 w-72', placeholder: 'Enter your password' }), errors.password && _jsx("p", { className: 'font-extralight text-sm h-2 text-red-700', children: "This field is required" }), _jsx("p", { className: 'font-extralight text-gray-500', children: "____________________________________________" }), _jsx("label", { className: 'font-light text-sm', children: " Upload certificate" }), " ", _jsx("br", {}), _jsx("input", { type: "file", ...register("file", { required: true }), className: 'mt-5 bg-transparent outline outline-1 outline-gray-500 text-sm rounded p-2 w-72' }), _jsx("button", { type: 'submit', name: 'submit', className: 'w-72 rounded bg-white text-black font-medium p-2 mt-5', children: "sign up" }), _jsx("div", { className: 'flex  justify-center  text-center  w-full ', children: _jsxs("div", { className: 'flex gap-2 mt-3', children: [_jsx("p", { className: 'text-sm', children: "Already have an account " }), _jsx(Link, { to: '/trainer/login', className: 'underline text-sm', children: " login " })] }) })] })] }) }) }) }) }));
};
export default Register;
