import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Navbar from '@/components/trainer/TrainerNavbar';
import { axiosPrivet } from '@/utils/axios/baseUrl';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { dietDetailURL } from '@/utils/axios/apiUrls';
const dietDetail = () => {
    const [diet, setDiet] = useState(null);
    let { id } = useParams();
    useEffect(() => {
        axiosPrivet.get(dietDetailURL + `${id}`).then(({ data }) => {
            console.log(data);
            setDiet(data);
        });
    }, []);
    return (_jsxs("div", { className: '  flex justify-center  pt-32', children: [_jsx(Navbar, {}), _jsxs("div", { className: ' w-6/12', children: [_jsx("img", { src: diet?.image, alt: "" }), _jsxs("div", { children: [_jsxs("p", { className: ' text-2xl', children: [" ", diet?.title] }), _jsxs("p", { className: ' text-xl', children: [" ", diet?.description.slice(0, 20), "..."] })] })] })] }));
};
export default dietDetail;
