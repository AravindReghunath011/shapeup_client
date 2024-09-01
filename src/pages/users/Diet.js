import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Navbar from "@/components/users/Navbar";
import { axiosPrivet } from "@/utils/axios/baseUrl";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { dietListURL, searchTrainersURL } from "@/utils/axios/apiUrls";
const Diets = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user = useSelector((state) => state.persisted.user.user);
    const [value, setValue] = useState('');
    const [diets, setDiets] = useState([]);
    useEffect(() => {
        fetchdata();
    }, []);
    const fetchdata = async () => {
        axiosPrivet.get(dietListURL).then(({ data }) => {
            console.log(data.diets, 'dataaa okokoko');
            setDiets(data.diets);
        });
    };
    const searchFn = (value) => {
        console.log(value, 'vallllll');
        axiosPrivet.get(searchTrainersURL + value).then(({ data }) => {
            console.log(data, 'dataaaa jjj');
            setDiets(data.data);
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
    return (_jsxs(_Fragment, { children: [_jsx(Navbar, {}), _jsx(Input, { type: 'search', name: 'Search', onChange: handleChange, placeholder: 'Search...', className: 'rounded w-72 pl-2 py-2 ml-40 mt-32' }), _jsx("div", { className: "flex justify-center", children: _jsx("div", { className: "flex mt-10 w-10/12 flex-wrap gap-10 ml-20 mb-10", children: diets.map((diet) => {
                        return (_jsxs(Card, { className: "h-[17rem] w-52 hover:ring-2", children: [_jsx("div", { className: "h-40 ", children: _jsx("img", { className: "object-cover object-center rounded-t-xl h-full w-full ", src: diet.image, alt: "" }) }), _jsxs("div", { className: "text-center p-2", children: [_jsx("h1", { className: "text-lg", children: diet?.title }), _jsxs("p", { className: "mb-1 text-xs text-gray-400", children: [diet.description.slice(0, 8), "..."] }), _jsx(Button, { onClick: () => navigate(`/diet/${diet._id}`), className: "rounded", children: "view Details" })] })] }, diet._id));
                    }) }) })] }));
};
export default Diets;
