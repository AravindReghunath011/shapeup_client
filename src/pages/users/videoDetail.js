import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Navbar from '@/components/trainer/TrainerNavbar';
import { axiosPrivet } from '@/utils/axios/baseUrl';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { videoDetailURL } from '@/utils/axios/apiUrls';
const videoDetail = () => {
    const [video, setVideo] = useState(null);
    let { id } = useParams();
    useEffect(() => {
        axiosPrivet.get(videoDetailURL + `${id}`).then(({ data }) => {
            console.log(data);
            setVideo(data);
        });
    }, []);
    return (_jsxs("div", { className: '  flex justify-center  pt-32', children: [_jsx(Navbar, {}), _jsxs("div", { className: ' w-6/12', children: [_jsx("video", { controls: true, src: video?.video, className: '  rounded' }), _jsxs("div", { children: [_jsxs("p", { className: ' text-2xl', children: [" ", video?.title] }), _jsxs("p", { className: ' text-xl', children: [" ", video?.description.slice(0, 20), "..."] })] })] })] }));
};
export default videoDetail;
