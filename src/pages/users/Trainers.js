import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
// @ts-nocheck
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Navbar from "@/components/users/Navbar";
import { axiosPrivet } from "@/utils/axios/baseUrl";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { Input } from "@/components/ui/input";
import { getTrainersUrl, searchTrainersURL, trainerFollowURL, trainerUnfollowURL } from "@/utils/axios/apiUrls";
const Trainers = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user = useSelector((state) => state.persisted.user.user);
    const [value, setValue] = useState('');
    const [trainers, setTrainers] = useState([]);
    const fetchdata = async () => {
        axiosPrivet.get(getTrainersUrl).then(({ data }) => {
            console.log(data.trainers, 'dataaa okokoko');
            setTrainers(data.trainers);
        });
    };
    useEffect(() => {
        fetchdata();
    }, []);
    const handleUnfollow = async (trainerId) => {
        axiosPrivet.put(trainerUnfollowURL + `${trainerId}`, { userId: user.id }).then(({ data }) => {
            console.log(data, 'follow data');
            if (data.message === 'success') {
                toast.success('you have unfollowed');
                fetchdata();
            }
        });
    };
    const handleFollow = async (trainerId) => {
        axiosPrivet.put(trainerFollowURL + `${trainerId}`, { userId: user.id }).then(({ data }) => {
            console.log(data, 'follow data');
            if (data.message === 'success') {
                toast.success('you started following');
                fetchdata();
            }
        });
    };
    const searchFn = (value) => {
        console.log(value, 'vallllll');
        axiosPrivet.get(searchTrainersURL + value).then(({ data }) => {
            console.log(data, 'dataaaa jjj');
            setTrainers(data.data);
        });
    };
    const debounce = (fn, delay) => {
        let timer;
        return function (...args) {
            clearTimeout(timer);
            timer = setTimeout(() => {
                fn(...args);
            }, delay);
        };
    };
    const handleChange = (e) => {
        const newValue = e.target.value;
        setValue(newValue);
        getData(newValue);
    };
    const getData = debounce(searchFn, 500);
    return (_jsxs(_Fragment, { children: [_jsx(Navbar, {}), _jsx(Input, { type: 'search', name: 'Search', onChange: handleChange, placeholder: 'Search...', className: 'rounded w-72 pl-2 py-2 ml-40 mt-32' }), _jsx("div", { className: "flex justify-center", children: _jsx("div", { className: "flex mt-10 w-10/12 flex-wrap gap-10 ml-20 mb-10", children: trainers.map((trainer) => {
                        return (_jsxs(Card, { className: "h-[17rem] w-52 hover:ring-2", children: [_jsx("div", { className: "h-40 ", children: _jsx("img", { onClick: () => navigate(`/trainerdetails/${trainer._id}`), className: "object-cover object-center rounded-t-xl h-full w-full ", src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNbDddKg124nPwgxCjzujO_2VV0B6VCi08Hg&usqp=CAU", alt: "" }) }), _jsxs("div", { className: "text-center p-2", children: [_jsx("h1", { className: "mb-5", children: trainer?.name }), trainer.followers.includes(user.id) ? (_jsx(Button, { onClick: () => handleUnfollow(trainer._id), variant: "outline", className: "rounded", children: "Unfollow" })) : (_jsx(Button, { onClick: () => handleFollow(trainer._id), variant: "outline", className: "rounded", children: "Follow" }))] })] }, trainer._id));
                    }) }) })] }));
};
export default Trainers;
