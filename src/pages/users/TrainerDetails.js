import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// @ts-nocheck
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Navbar from "@/components/users/Navbar";
import { findByIdURL, trainerFollowURL, trainerUnfollowURL } from "@/utils/axios/apiUrls";
import { axiosPrivet } from "@/utils/axios/baseUrl";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "sonner";
const TrainerDetails = () => {
    const { id } = useParams();
    const user = useSelector((state) => state.persisted.user.user);
    const [trainerData, setTrainerData] = useState();
    const followTrainer = async () => {
        axiosPrivet
            .put(trainerFollowURL + `${trainerData?._id}`, {
            userId: user.id,
        })
            .then(({ data }) => {
            console.log(data, "follow data");
            if (data.message == "success") {
                toast.success("you started following");
            }
        });
    };
    const unFollowTrainer = async () => {
        axiosPrivet
            .put(trainerUnfollowURL + `${trainerData?._id}`, {
            userId: user.id,
        })
            .then(({ data }) => {
            console.log(data, "follow data");
            if (data.message == "success") {
                toast.success("you have unfollowed");
            }
        });
    };
    useEffect(() => {
        axiosPrivet
            .get(findByIdURL + `${id}`)
            .then(({ data }) => {
            console.log(data, "trainerdata");
            setTrainerData(data);
        });
    }, []);
    const navigate = useNavigate();
    return (_jsxs("div", { children: [_jsx(Navbar, {}), _jsxs("div", { className: "w-full lg:pb-5 lg:mt-28 flex justify-center", children: [_jsxs("div", { className: "w-6/12", children: [_jsxs(Card, { className: "   border-input", children: [_jsx("div", { className: "w-full  border-b h-40", children: _jsx("img", { src: "https://marketplace.canva.com/EAENvp21inc/1/0/1600w/canva-simple-work-linkedin-banner-qt_TMRJF4m0.jpg", alt: "banner img", className: "w-full h-full rounded-t-xl" }) }), _jsxs("div", { className: " lg:pl-5", children: [_jsx("div", { className: "w-32 h-32  rounded-full bg-black inset-10 lg:mt-[-6rem]  outline outline-1", children: _jsx("img", { src: "https://i.pinimg.com/originals/4d/56/c9/4d56c9bf4e37a5cd0607feb036886aa9.jpg", alt: "profile", className: "w-full h-full z-50 rounded-full" }) }), _jsxs("div", { className: "lg:w-8/12", children: [_jsx("h1", { className: "text-2xl font-semibold mt-3", children: trainerData?.name }), _jsx("h2", { className: "font-light text-xl", children: "Headline" }), _jsx("h2", { className: "font-light ", children: "# Bio about who you are and why should anyone subscribe to yo0u # Bio about who you are and why should anyone subscribe to you # Bio about who you are and why should anyone subscribe to you" }), _jsxs("div", { className: " w-72 flex gap-3", children: [trainerData?.followers.includes(user.id) ? (_jsxs(Button, { className: "rounded lg:mt-3 w-full", onClick: () => unFollowTrainer(), children: ["UNFOLLOW", " "] })) : (_jsxs(Button, { className: "rounded lg:mt-3 w-full mb-5", onClick: () => followTrainer(), children: ["FOLLOW", " "] })), _jsx(Button, { variant: "outline", className: "rounded mt-3 ", onClick: () => navigate('/message'), children: "Message" })] })] })] })] }), _jsx(Card, { className: " lg:mt-3 w-full border-input p-5", children: _jsxs("div", { children: [_jsx("h2", { className: "text-xl font-semibold lg:mb-3 ", children: "About" }), _jsx("pre", { className: "whitespace-pre-wrap", children: "helo hehe hey there why this is not working" }), _jsx("p", { children: "\uD83D\uDE80 Passionate and self-motivated MERN Stack Developer \uD83C\uDF10\uD83D\uDCBB \uD83D\uDC4B Hello, I'm Aravind Reghunath, a dynamic and results-driven MERN Stack Developer with a relentless commitment to continuous learning and professional growth. I thrive in challenging environments where I can leverage my skills to create robust and scalable web applications. Have hands on experience in developing mern applications . Have great communication skills that makes me work in a team \uD83C\uDF1F Skills Highlights: \uD83D\uDCA1 Frontend: React.js, HTML5, CSS3, JavaScript (ES6+) \uD83D\uDEE0 Backend: Node.js, Express.js \uD83D\uDDC3 Database: MongoDB, Mongoose \uD83D\uDD04 Version Control: Git, GitHub \uD83C\uDF10 RESTful API Development \uD83D\uDE80 Deployment: AWS" })] }) })] }), _jsx("div", { className: "lg:w-72 h-44 border-input border flex items-center lg:ml-5 rounded justify-center text-center   ", children: _jsxs("div", { children: [_jsxs("div", { className: "w-full flex items-center justify-center", children: [_jsx("img", { src: "https://i.pinimg.com/originals/4d/56/c9/4d56c9bf4e37a5cd0607feb036886aa9.jpg", className: "w-14 h-14 rounded-full", alt: "" }), " ", _jsx("br", {})] }), trainerData?.subscribers.includes(user.id) ?
                                    _jsxs("div", { children: [_jsx("p", { children: "Update your current subscription plan" }), _jsx(Button, { className: "rounded mt-3", onClick: () => navigate(`/subscriptionplan/${trainerData?._id}`), children: "update" })] }) :
                                    _jsxs("div", { className: "w-full", children: [_jsx("p", { children: "Subscribe to get premium content " }), _jsx(Button, { className: "rounded mt-3", onClick: () => navigate(`/subscriptionplan/${trainerData?._id}`), children: "subscribe" })] })] }) })] })] }));
};
export default TrainerDetails;
