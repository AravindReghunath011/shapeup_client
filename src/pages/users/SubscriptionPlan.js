import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// @ts-nocheck
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Navbar from '@/components/users/Navbar';
import { getPurchasedSubscriptionURL, getSubscriptionURL, subscribeURL } from '@/utils/axios/apiUrls';
import { axiosPrivet } from '@/utils/axios/baseUrl';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { toast } from 'sonner';
const loadScript = (src) => {
    return new Promise((resolve) => {
        const script = document.createElement('script');
        script.src = src;
        script.onload = () => {
            resolve(true);
        };
        script.onerror = () => {
            resolve(false);
        };
        document.body.appendChild(script);
    });
};
const SubscriptionPlan = () => {
    let { trainerId } = useParams();
    let user = useSelector((state) => state.persisted.user.user);
    const [purchasedSubscription, setPurchasedSubscription] = useState();
    useEffect(() => {
        axiosPrivet.get(getSubscriptionURL + `${trainerId}`).then(({ data }) => {
            console.log(data, 'data');
            setSubPlan(data.data);
        });
        axiosPrivet.post(getPurchasedSubscriptionURL, { userId: user.id, trainerId: trainerId }).then(({ data }) => {
            console.log('subscribed ', data.pruchasedSubscription);
            setPurchasedSubscription(data.pruchasedSubscriptions);
        });
    }, []);
    let User = useSelector((state) => state.persisted.user.user);
    console.log(User, 'user from subscription');
    const [subPlan, setSubPlan] = useState();
    const displayRazorpay = async (amount) => {
        return new Promise(async (resolve, reject) => {
            const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js');
            if (!res) {
                toast.error('Razorpay not working');
                reject(false);
                return;
            }
            const options = {
                key: 'rzp_test_GEbMbQd9xNslRS',
                currency: 'INR',
                amount: amount * 100,
                name: 'ShapeUp',
                description: 'Thanks',
                prefill: {
                    name: 'Shapeup',
                },
                handler: function (response) {
                    // Handle successful payment
                    resolve(true);
                },
            };
            const paymentObject = new window.Razorpay(options);
            paymentObject.on('payment.failed', function (response) {
                // Handle failure logic here
                reject(false);
            });
            paymentObject.open();
        });
    };
    const handleSub = async (amount, duration) => {
        let payment = await displayRazorpay(amount);
        console.log(payment, 'paymetn');
        if (payment) {
            let currentDate = new Date();
            var expire;
            if (duration == 'weekly') {
                expire = new Date(currentDate.getTime() + (7 * 24 * 60 * 60 * 1000));
            }
            if (duration == 'monthly') {
                expire = new Date(currentDate.getTime() + (30 * 24 * 60 * 60 * 1000));
            }
            if (duration == 'yearly') {
                expire = new Date(currentDate.getTime() + (365 * 24 * 60 * 60 * 1000));
            }
            let data = {
                userId: User.id,
                duration: duration,
                trainerId: trainerId,
                createdAt: currentDate,
                expiresAt: expire
            };
            axiosPrivet.post(subscribeURL, { data }).then((response) => {
                console.log(response.data);
            });
        }
    };
    return (_jsxs("div", { children: [_jsx(Navbar, {}), "return(", _jsxs("div", { className: 'flex flex-col items-center justify-center mt-20', children: [purchasedSubscription?.duration == 'weekly' ?
                        _jsxs(Card, { className: 'w-5/12 h-40 p-5 mt-10', children: [_jsx("h2", { className: 'text-2xl text-gray-400 ', children: "Weekly" }), _jsxs("div", { className: "flex items-center justify-between", children: [_jsxs("h1", { className: 'text-4xl font-semibold mt-3', children: ["\u20B9 ", subPlan?.weekly, _jsx("span", { className: 'font-light', children: "/week" })] }), "Active"] }), _jsxs("p", { className: 'text-gray-400 mt-2', children: [Math.ceil((new Date(purchasedSubscription?.expiresAt).getTime() - Date.now()) / (1000 * 60 * 60 * 24)), " days left "] })] }) :
                        _jsxs(Card, { className: 'w-5/12 h-40 p-5 mt-10', children: [_jsx("h2", { className: 'text-2xl text-gray-400 ', children: "Weekly" }), _jsxs("div", { className: "flex items-center justify-between", children: [_jsxs("h1", { className: 'text-4xl font-semibold mt-3', children: ["\u20B9 ", subPlan?.weekly, _jsx("span", { className: 'font-light', children: "/week" })] }), _jsx(Button, { variant: 'outline', className: 'w-20 rounded', onClick: () => handleSub(subPlan.weekly, 'weekly'), children: " Buy" })] }), _jsx("p", { className: 'text-gray-400 mt-2', children: "\u20B90.99 per day" })] }), purchasedSubscription?.duration == 'monthly' ?
                        _jsxs(Card, { className: 'w-5/12 h-40 p-5 mt-10', children: [_jsx("h2", { className: 'text-2xl text-gray-400 ', children: "Monthly" }), _jsxs("div", { className: "flex items-center justify-between", children: [_jsxs("h1", { className: 'text-4xl font-semibold mt-3', children: ["\u20B9 ", subPlan?.monthly, _jsx("span", { className: 'font-light', children: "/month" })] }), "Active"] }), _jsxs("p", { className: 'text-gray-400 mt-2', children: [Math.ceil((new Date(purchasedSubscription?.expiresAt).getTime() - Date.now()) / (1000 * 60 * 60 * 24)), " days left "] })] }) :
                        _jsxs(Card, { className: 'w-5/12 h-40 p-5 mt-10', children: [_jsx("h2", { className: 'text-2xl text-gray-400 ', children: "Monthly" }), _jsxs("div", { className: "flex items-center justify-between", children: [_jsxs("h1", { className: 'text-4xl font-semibold mt-3', children: ["\u20B9 ", subPlan?.monthly, _jsx("span", { className: 'font-light', children: "/month" })] }), _jsx(Button, { variant: 'outline', className: 'w-20 rounded', onClick: () => handleSub(subPlan.monthly, 'monthly'), children: " Buy" })] }), _jsx("p", { className: 'text-gray-400 mt-2', children: "\u20B90.99 per day" })] }), purchasedSubscription?.duration == 'yearly' ?
                        _jsxs(Card, { className: 'w-5/12 h-40 p-5 mt-10', children: [_jsx("h2", { className: 'text-2xl text-gray-400 ', children: "Yearly" }), _jsxs("div", { className: "flex items-center justify-between", children: [_jsxs("h1", { className: 'text-4xl font-semibold mt-3', children: ["\u20B9 ", subPlan?.yearly, _jsx("span", { className: 'font-light', children: "/year" })] }), "Active"] }), _jsxs("p", { className: 'text-gray-400 mt-2', children: [Math.ceil((new Date(purchasedSubscription?.expiresAt).getTime() - Date.now()) / (1000 * 60 * 60 * 24)), " days left"] })] }) :
                        _jsxs(Card, { className: 'w-5/12 h-40 p-5 mt-10', children: [_jsx("h2", { className: 'text-2xl text-gray-400 ', children: "Yearly" }), _jsxs("div", { className: "flex items-center justify-between", children: [_jsxs("h1", { className: 'text-4xl font-semibold mt-3', children: ["\u20B9 ", subPlan?.yearly, _jsx("span", { className: 'font-light', children: "/year" })] }), _jsx(Button, { variant: 'outline', className: 'w-20 rounded', onClick: () => handleSub(subPlan.yearly, 'yearly'), children: " Buy" })] }), _jsx("p", { className: 'text-gray-400 mt-2', children: "\u20B90.99 per day" })] })] }), ")"] }));
};
export default SubscriptionPlan;
