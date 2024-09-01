import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// @ts-nocheck
import { useRef, useState } from 'react';
import axios from '../../utils/axios/baseUrl';
import { toast } from 'sonner';
import { useNavigate } from "react-router-dom";
import { resendOtpURL, verifyOtpURL } from '@/utils/axios/apiUrls';
const Otp = () => {
    const otpInputRefs = useRef([]);
    const navigate = useNavigate();
    const [otp, setOtp] = useState(['', '', '', '']);
    const handleBackspace = (index, e) => {
        if (e.key === 'Backspace') {
            const prevInput = otpInputRefs.current[index - 1];
            if (prevInput) {
                prevInput.focus();
            }
        }
    };
    const handleInputChange = (index, value, key) => {
        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);
        if (value.length === 1) {
            const nextInput = otpInputRefs.current[index + 1];
            if (nextInput) {
                nextInput.focus();
            }
        }
        else if (value.length === 0) {
            handleBackspace(index, e);
        }
        ;
    };
    const handleOtp = () => {
        if (otp.join('').length !== 4) {
            toast.error('Invalid OTP');
        }
        else {
            axios().post(verifyOtpURL, { otp: otp.join('') }, { withCredentials: true }).then(({ data }) => {
                if (data.message === 'success') {
                    toast.success('Register success');
                    setTimeout(() => {
                        navigate('/login');
                    }, 2000);
                }
                else {
                    toast.error('Wrong OTP');
                }
            });
        }
    };
    const resendOtp = async () => {
        axios().post(resendOtpURL).then(({ data }) => {
            if (data.message === 'resendotp') {
                toast.success('OTP sent to your mail');
            }
            else {
                toast.error(data.message);
            }
        });
    };
    return (_jsx("div", { children: _jsx("div", { className: "grid grid-cols-9 grid-rows-4 gap-4", children: _jsx("div", { className: "col-span-3 row-span-3 col-start-4 row-start-2 lg:mt-5  ", children: _jsxs("div", { className: 'w-10/12 h-96 outline outline-1 rounded outline-gray-500 text-center lg:pt-5', children: [_jsx("h1", { className: 'text-4xl font-bold font-roboto ', children: "Enter the OTP" }), _jsxs("div", { className: 'lg:mt-14 ', children: [otp.map((digit, index) => (_jsx("input", { value: digit, onKeyUp: (e) => {
                                        if (e.key === 'Backspace') {
                                            handleBackspace(index, e);
                                        }
                                    }, onChange: (e) => handleInputChange(index, e.target.value, e), className: 'bg-transparent outline outline-1 text-center outline-gray-300 w-14 rounded h-14 lg:mr-4 remove-arrow', max: 1, type: "number", ref: (ref) => (otpInputRefs.current[index] = ref) }, index))), _jsx("p", { onClick: () => resendOtp(), className: 'hover:cursor-pointer underline lg:mt-8 ', children: "resend otp" }), _jsx("button", { onClick: () => handleOtp(), className: 'w-72 rounded mt-10 bg-white p-2 text-black font-medium', children: "verify" })] })] }) }) }) }));
};
export default Otp;
