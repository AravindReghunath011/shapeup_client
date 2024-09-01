import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// @ts-nocheck
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Navbar from "@/components/trainer/TrainerNavbar";
import Sidebar from "@/components/trainer/trainerSideBar";
import { axiosPrivet } from "@/utils/axios/baseUrl";
import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { findByIdURL, profileUpdateURL } from "@/utils/axios/apiUrls";
const Profile = () => {
    const trainer = useSelector((state) => state.persisted.trainer.trainer);
    const [trainerData, setTrainerData] = useState();
    useEffect(() => {
        axiosPrivet
            .get(findByIdURL + `${trainer._id}`)
            .then(({ data }) => {
            console.log(data, "trainerdata");
            setTrainerData(data);
        });
    }, []);
    const navigate = useNavigate();
    const [isEditing, setIsEditing] = useState(false);
    const [headline, setHeadline] = useState(trainerData?.headline || "");
    const [about, setAbout] = useState(trainerData?.about || "");
    const textareaRef1 = useRef(null);
    const textareaRef2 = useRef(null);
    const handleEditClick = () => {
        setIsEditing(true);
    };
    const headlineHandleChange = (event) => {
        setHeadline(event.target.value);
    };
    const aboutHandleChange = (event) => {
        setAbout(event.target.value);
    };
    const saveChanges = () => {
        axiosPrivet.post(profileUpdateURL, { headline: headline, about: about, trainerId: trainer._id }).then((response) => {
            console.log(response, 'jjj');
        });
    };
    useEffect(() => {
        if (isEditing && textareaRef1.current) {
            adjustTextareaHeight();
        }
    }, [isEditing]);
    const adjustTextareaHeight = () => {
        if (textareaRef1.current) {
            textareaRef1.current.style.height = 'auto';
            textareaRef1.current.style.height = `${textareaRef1.current.scrollHeight}px`;
        }
    };
    return (_jsxs("div", { className: "flex", children: [_jsx(Navbar, {}), _jsx(Sidebar, {}), _jsx("div", { className: "w-full lg:pb-5 mt-32 flex justify-center", children: _jsxs("div", { className: "w-6/12", children: [_jsxs(Card, { className: "   border-input", children: [_jsx("div", { className: "w-full  border-b h-40", children: _jsx("img", { src: "https://marketplace.canva.com/EAENvp21inc/1/0/1600w/canva-simple-work-linkedin-banner-qt_TMRJF4m0.jpg", alt: "banner img", className: "w-full h-full rounded-t-xl" }) }), _jsxs("div", { className: " lg:pl-5", children: [_jsx("div", { className: "w-32 h-32  rounded-full bg-black inset-10 lg:mt-[-6rem]  outline outline-1", children: _jsx("img", { src: "https://i.pinimg.com/originals/4d/56/c9/4d56c9bf4e37a5cd0607feb036886aa9.jpg", alt: "profile", className: "w-full h-full z-50 rounded-full" }) }), _jsxs("div", { className: "lg:w-8/12", children: [_jsx("h1", { className: "text-2xl font-semibold mt-3", children: trainerData?.name }), _jsx("h2", { className: "font-light text-xl", children: "Headline" }), _jsx("textarea", { ref: textareaRef1, style: { resize: 'none', overflow: 'hidden' }, className: "bg-neutral-950 outline-none w-full", disabled: !isEditing, value: headline, onChange: headlineHandleChange }), isEditing ? _jsx(Button, { className: "rounded mb-2", onClick: () => saveChanges(), children: "save changes" }) :
                                                    _jsx(Button, { className: "rounded mb-2", onClick: handleEditClick, children: "Edit profile" }), _jsx("div", { className: " w-72" })] })] })] }), _jsx(Card, { className: " lg:mt-3 w-full border-input p-5", children: _jsxs("div", { children: [_jsx("h2", { className: "text-xl font-semibold lg:mb-3 ", children: "About" }), _jsx("textarea", { style: { resize: 'none', overflow: 'hidden', height: 'auto' }, ref: textareaRef2, className: "bg-neutral-950 outline-none w-full", disabled: !isEditing, value: about, onChange: aboutHandleChange })] }) })] }) })] }));
};
export default Profile;
