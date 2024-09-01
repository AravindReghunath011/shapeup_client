import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Card } from '@/components/ui/card';
import Navbar from '@/components/users/Navbar';
import { getVideosURL } from '@/utils/axios/apiUrls';
import axios from '@/utils/axios/baseUrl';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
const Video = () => {
    const [videos, setVideos] = useState([]);
    useEffect(() => {
        axios().get(getVideosURL).then(({ data }) => {
            console.log(data, 'data');
            setVideos(data.videos);
        });
    }, []);
    const getData = () => {
    };
    const navigate = useNavigate();
    return (_jsxs(_Fragment, { children: [_jsx(Navbar, {}), _jsx("div", { className: "flex justify-center mt-32 w-full ", children: _jsx("div", { className: "flex ml-10 mt-10 w-10/12 flex-wrap flex-grow   gap-10   mb-10", children: videos.map((video) => {
                        return _jsxs(Card, { className: "h-64 w-80 hover:ring-2 rounded border-none p-4 flex-col justify-center", children: [_jsx("div", { children: _jsx("video", { onClick: () => navigate(`/video/${video._id}`), className: "object-cover object-center rounded h-44 w-72 ", src: `${video.video}` }) }), _jsxs("div", { className: "text-start p-2 font-semibold", children: [_jsx("p", { children: video.title }), _jsxs("p", { children: [video.description.slice(0, 25), "..."] })] })] });
                    }) }) })] }));
};
export default Video;
