import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Navbar from "@/components/trainer/TrainerNavbar";
import Sidebar from "@/components/trainer/trainerSideBar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { getSubscribers, getsubscriptionplan } from "@/utils/axios/apiUrls";
import { axiosPrivet } from "@/utils/axios/baseUrl";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const Home = () => {
    const navigate = useNavigate();
    const [subscriptionPlan, setSubscriptionPlan] = useState('');
    const [subscription, setSubscription] = useState([]);
    const [weekly, setWeekly] = useState('');
    const [monthly, setMonthly] = useState('');
    const [yearly, setYearly] = useState('');
    let trainer = useSelector((state) => state.persisted.trainer.trainer);
    useEffect(() => {
        axiosPrivet.get(getSubscribers + trainer._id).then(({ data }) => {
            console.log(data, 'purchased subsssss');
            setSubscription(data.data);
            let weekly = data.data.filter((obj) => obj.duration == 'weekly');
            setWeekly(weekly.length);
            let monthly = data.data.filter((obj) => obj.duration == 'monthly');
            setMonthly(monthly.length);
            let yearly = data.data.filter((obj) => obj.duration == 'yearly');
            setYearly(yearly.length);
        });
        axiosPrivet.get(getsubscriptionplan + trainer._id).then(({ data }) => {
            console.log(data, 'subscription plan');
            setSubscriptionPlan(data.data);
        });
    }, []);
    return (_jsxs("div", { children: [_jsx(Navbar, {}), _jsxs("div", { className: " flex", children: [_jsx(Sidebar, {}), _jsxs("div", { className: "mt-20 ml-5", children: [subscriptionPlan == null ?
                                _jsxs(Card, { className: "w-96 border-input text-center  justify-between p-5  mt-10 flex", children: [_jsx("h1", { children: "Create subscriptionPlan" }), _jsx(Button, { className: "rounded ", onClick: () => navigate('/trainer/subscriptionplan/create'), children: "create" })] }) : '', !trainer._id ? _jsx("h1", { children: "Your request is sent to admin you will get notification when it is accepted. Thank you for your patience" }) :
                                _jsxs("div", { children: [_jsxs("div", { className: "flex gap-8", children: [_jsxs(Card, { className: "h-40 w-60 text-center mt-5 ", children: [_jsx("h2", { className: "text-lg  mt-3", children: "Total subscribers" }), _jsx("h2", { className: "text-5xl  mt-3", children: subscription.length })] }), _jsxs(Card, { className: "h-40 w-60 text-center mt-5 ", children: [_jsx("h2", { className: "text-lg  mt-3", children: "Weekly subscribers" }), _jsx("h2", { className: "text-5xl  mt-3", children: weekly })] }), _jsxs(Card, { className: "h-40 w-60 mt-5 ", children: [_jsx("h2", { className: "text-lg text-center mt-3", children: "Monthly subscribers" }), _jsx("h2", { className: "text-5xl text-center mt-3", children: monthly })] }), _jsxs(Card, { className: "h-40 w-60 mt-5 ", children: [_jsx("h2", { className: "text-lg text-center mt-3", children: "Yearly subscribers" }), _jsx("h2", { className: "text-5xl text-center mt-3", children: yearly })] })] }), _jsx("div", { children: _jsxs("table", { className: "border-input mt-10 w-full rounded", children: [_jsxs("tr", { className: "border ", children: [_jsx("th", { className: "border py-2", children: "#" }), _jsx("th", { className: "border py-2", children: "UserId" }), _jsx("th", { className: "border py-2", children: "Duration" }), _jsx("th", { className: "border py-2", children: "Created Date" })] }), subscription.map((data, index) => {
                                                        return _jsxs("tr", { className: "border text-center ", children: [_jsx("td", { className: "border py-2", children: index + 1 }), _jsx("td", { className: "border py-2", children: data.userId }), _jsx("td", { className: "border py-2", children: data.duration }), _jsx("td", { className: "border py-2", children: data.createdAt })] });
                                                    })] }) })] })] })] })] }));
};
export default Home;
