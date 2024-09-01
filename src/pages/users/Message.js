import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
const Message = () => {
    const [status, setStatus] = useState('down');
    const toggleHeight = (status) => {
        if (status == 'down') {
            setStatus("down");
            document.getElementById('message')?.classList.remove('h-96');
            document.getElementById('message')?.classList.add('h-20');
        }
        else {
            setStatus('up');
            document.getElementById('message')?.classList.remove('h-20');
            document.getElementById('message')?.classList.add('h-96');
        }
    };
    return (_jsxs("div", { id: "message", className: " rounded-t scroll-auto  w-72 bg-black z-10 text-center border-input border  absolute right-3 bottom-0", children: [_jsxs("div", { className: "flex justify-between px-5", children: [_jsx("p", { children: "message" }), status == 'up' ? _jsx("button", { onClick: () => toggleHeight('down'), children: "down" }) : _jsx("button", { onClick: () => toggleHeight('up'), children: "up" })] }), _jsxs("div", { className: "w-full  h-12 flex  justify-start  mt-5 hover:cursor-pointer", children: [_jsx("img", { src: "https://i.pinimg.com/736x/b3/8f/c6/b38fc63ba586ac8b38cb406ed612aa98.jpg", className: "h-10 w-10 mr-2 ml-2 rounded-full", alt: "" }), _jsx("div", { className: "border-b w-full text-start", children: "user 1" })] }), _jsxs("div", { className: "w-full  h-12 flex  justify-start  mt-5", children: [_jsx("img", { src: "https://i.pinimg.com/736x/b3/8f/c6/b38fc63ba586ac8b38cb406ed612aa98.jpg", className: "h-10 w-10 mr-2 ml-2 rounded-full", alt: "" }), _jsx("div", { className: "border-b w-full text-start", children: "user 1" })] }), _jsxs("div", { className: "w-full  h-12 flex  justify-start  mt-5", children: [_jsx("img", { src: "https://i.pinimg.com/736x/b3/8f/c6/b38fc63ba586ac8b38cb406ed612aa98.jpg", className: "h-10 w-10 mr-2 ml-2 rounded-full", alt: "" }), _jsx("div", { className: "border-b w-full text-start", children: "user 1" })] })] }));
};
export default Message;
