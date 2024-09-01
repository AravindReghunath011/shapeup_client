import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { axiosPrivet } from '@/utils/axios/baseUrl';
import { toast } from 'sonner';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { subscriptionPlan } from '@/utils/axios/apiUrls';
const CreateSubscriptionPlan = () => {
    const trainer = useSelector((state) => state.persisted.trainer.trainer);
    const { register, handleSubmit, formState: { errors }, } = useForm();
    const navigate = useNavigate();
    const onSubmit = async (data) => {
        let submitData = {
            ...data,
            trainerId: trainer._id
        };
        try {
            const response = await axiosPrivet.post(subscriptionPlan, submitData);
            console.log(response.data);
            if (response.data.message === 'success') {
                toast.success('Create subscription plan successfully!');
                navigate('/trainer');
            }
            else {
                toast.error(response.data.message);
            }
        }
        catch (error) {
            console.error('Error ', error);
            toast.error('An error occurred during creating subscription');
        }
    };
    return (_jsx("div", { className: 'h-[100vh]', children: _jsx("div", { className: 'grid grid-cols-9 grid-rows-5 gap-4', children: _jsx("div", { className: 'col-span-3 row-span-4 col-start-4 row-start-2 ', children: _jsx("div", { className: 'w-11/12 h-[60vh] flex justify-center text-center outline rounded outline-1 outline-gray-500', children: _jsx("form", { onSubmit: handleSubmit(onSubmit), children: _jsxs("div", { className: 'mt-10 ', children: [_jsx("h1", { className: 'text-4xl font-bold', children: "Subscription Plan " }), _jsx("p", { className: 'font-thin text-sm mt-4 ', children: "Enter price in rupees" }), _jsx("input", { ...register('weekly', {
                                        required: 'weekly price Required',
                                        pattern: {
                                            value: /^[0-9]+$/,
                                            message: 'Enter a valid price',
                                        },
                                    }), type: 'number', name: 'weekly', className: 'mt-5 bg-transparent outline remove-arrow outline-1 outline-gray-500 text-sm rounded p-2 w-72', placeholder: 'Weekly price' }), _jsx("br", {}), errors.weekly && (_jsx("small", { className: 'text-red-600 ', children: errors.weekly.message })), "  ", _jsx("br", {}), _jsx("input", { ...register('monthly', {
                                        required: 'monthly price is required',
                                        pattern: {
                                            value: /^[0-9]+$/,
                                            message: 'Enter a valid price',
                                        },
                                    }), type: 'number', className: 'mt-1 bg-transparent outline remove-arrow outline-1 outline-gray-500 text-sm rounded p-2 w-72', placeholder: 'Monthly price' }), _jsx("br", {}), errors.monthly && (_jsx("small", { className: 'text-red-600', children: errors.monthly.message })), _jsx("br", {}), _jsx("input", { ...register('yearly', {
                                        required: 'yearly price required',
                                        pattern: {
                                            value: /^[0-9]+$/,
                                            message: 'Enter a valid price',
                                        },
                                    }), type: 'number', className: 'mt-1 bg-transparent outline remove-arrow outline-1 outline-gray-500 text-sm rounded p-2 w-72', placeholder: 'Yearly price' }), _jsx("br", {}), errors.yearly && (_jsx("small", { className: 'text-red-600', children: errors.yearly.message })), " ", _jsx("br", {}), _jsx("button", { type: 'submit', className: 'w-72 rounded mt-10 bg-white p-2 text-black font-medium', children: "create" })] }) }) }) }) }) }));
};
export default CreateSubscriptionPlan;
