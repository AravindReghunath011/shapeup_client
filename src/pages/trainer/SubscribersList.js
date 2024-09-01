import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Navbar from '@/components/trainer/TrainerNavbar';
import Sidebar from '@/components/trainer/trainerSideBar';
import { useEffect, useState } from 'react';
import { axiosPrivet } from '@/utils/axios/baseUrl';
import { useParams } from 'react-router-dom';
import { getSubscribers } from '@/utils/axios/apiUrls';
const SubscribersList = () => {
    const [subscribers, setSubscribers] = useState([]);
    let { trainerId } = useParams();
    useEffect(() => {
        axiosPrivet.get(getSubscribers + `${trainerId}`).then(({ data }) => {
            console.log(data, 'dataaa');
            setSubscribers(data.subscribers);
        });
    });
    return (_jsxs("div", { children: [_jsx(Navbar, {}), _jsxs("div", { className: 'flex mt-20 ', children: [_jsx(Sidebar, {}), _jsx("div", { className: "flex justify-center w-full pb-10 ", children: _jsxs("table", { className: 'border border-input text-center mt-10 ml-10 ', children: [_jsx("thead", { className: 'border border-input ', children: _jsxs("tr", { children: [_jsx("th", { className: 'border border-input w-20 py-2 ', children: "#" }), _jsx("th", { className: 'border border-input w-60 py-2', children: "email" }), _jsx("th", { className: 'border border-input w-60 py-2', children: "amount" }), _jsx("th", { className: 'border border-input w-60 py-2', children: "duration" })] }) }), _jsx("tbody", { children: subscribers?.map((subscriber, i) => {
                                        return _jsxs("tr", { children: [_jsx("td", { className: 'border border-input', children: i + 1 }), _jsx("td", { className: 'border border-input px-3', children: subscriber.email }), _jsx("td", { className: 'border border-input px-3', children: subscriber.amount }), _jsx("td", { className: 'border border-input px-3', children: subscriber.duration })] }, subscriber._id);
                                    }) })] }) })] })] }));
};
export default SubscribersList;
