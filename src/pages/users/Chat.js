import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import io from "socket.io-client";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Navbar from "@/components/users/Navbar";
import { axiosPrivet } from "@/utils/axios/baseUrl";
import { getSubscribedTrainers } from "@/utils/axios/apiUrls";
const socket = io("https://aravindreghunath.online/chat");
const Chat = () => {
    const user = useSelector((state) => state.persisted.user.user);
    const [trainers, setTrainers] = useState([]);
    const [time, setTime] = useState("fetching");
    const [msg, setMsg] = useState("waiting");
    const [text, setText] = useState("");
    const [focusMessage, setFocusMessage] = useState(null);
    const [messageArray, setMessageArray] = useState([]);
    useEffect(() => {
        axiosPrivet
            .get(getSubscribedTrainers + `${user.id}`)
            .then(({ data }) => {
            console.log(data, "data from getsubscription");
            setTrainers(data.data);
        });
    }, []);
    useEffect(() => {
        socket.on("connect", () => console.log(socket.id));
        socket.on("connect_error", () => {
            setTimeout(() => socket.connect(), 5000);
        });
        joinRoom(user.id);
        socket.on("time", (data) => setTime(data));
        socket.on("message", (data) => {
            setMsg(data.message);
            setMessageArray(prevMessages => [
                ...prevMessages,
                { message: data.message, from: "trainer" },
            ]);
        });
        socket.on("disconnect", () => setTime("server disconnected"));
        return () => {
            socket.disconnect(); // Clean up socket connection on component unmount
        };
    }, []);
    const joinRoom = (room) => {
        socket.emit("joinRoom", room); // Emitting a socket event to join a room
    };
    const sentMsg = (roomName, msg) => {
        setMessageArray(prevMessages => [
            ...prevMessages,
            { message: msg, from: "user" },
        ]);
        console.log(messageArray, "arr");
        socket.emit("sentMsg", { roomName: roomName, message: msg }); // Emitting a socket event to send a message
    };
    const selectFocusMessage = (trainer) => {
        setFocusMessage(trainer);
    };
    return (_jsxs("div", { children: [_jsx(Navbar, {}), _jsx("div", { className: "flex justify-center mt-32", children: _jsxs(Card, { className: "h-[82vh] border-b-0 border-input rounded-b-none w-9/12 flex", children: [_jsxs("div", { className: "w-4/12 border-e-2 border-input", children: [_jsx("div", { className: "border-b border-input h-14 text-xl p-3", children: "Messaging" }), _jsx("div", { className: "overflow-y-auto max-h-[90%] scrollbar-hidden", children: _jsxs("div", { onClick: () => selectFocusMessage({ name: 'Aravind', _id: '1' }), className: "border border-input h-16 flex items-center gap-3 pl-3 hover:bg-neutral-900", children: [_jsx("img", { className: "h-10 w-10 rounded-full", src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGC0q2Fa-hKs3WnOvOO9R9LD_zyJ-ctZVV6tQhVx1JI31Q5Rz2Cfod6IKAp0LKtAnNhV96", alt: "" }), _jsx("h3", { children: "Aravind" })] }) })] }), _jsxs("div", { className: "w-10/12", children: [_jsx("div", { className: "border-b border-input h-14 w-full text-xl flex items-center pl-5", children: focusMessage?.name }), _jsxs("div", { className: "h-[88%] overflow-y-auto max-h-[90%] scrollbar-hidden  flex flex-col ", children: [!focusMessage ? _jsx("p", { className: "ml-5 mt-5 text-lg", children: "No conversation selected" }) :
                                            _jsx("div", { className: "flex-grow", children: messageArray.map(message => (_jsxs("div", { className: "flex items-center pl-3 my-4", children: [_jsx("img", { className: "h-10 w-10 rounded-full", src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGC0q2Fa-hKs3WnOvOO9R9LD_zyJ-ctZVV6tQhVx1JI31Q5Rz2Cfod6IKAp0LKtAnNhV96", alt: "" }), _jsxs("div", { className: " h-14 pl-3 w-8/12", children: [_jsx("p", { className: "font-semibold ", children: message.from === "user"
                                                                        ? user.name
                                                                        : focusMessage?.name }), _jsx("p", { className: "font-light mt-2", children: message.message })] })] }, messageArray.indexOf(message)))) }), _jsxs("div", { className: "flex justify-center border-input fixed bottom-5 bg-neutral-950 w-[53.5%] border-t h-20 items-center", children: [_jsx(Input, { onChange: e => setText(e.target.value), type: "text", className: "ml-2 w-9/12 rounded rounded-e-none " }), _jsx(Button, { onClick: () => sentMsg(focusMessage?._id || "", text), className: "w-2/12 rounded rounded-s-none", children: "send" })] })] })] })] }) })] }));
};
export default Chat;
