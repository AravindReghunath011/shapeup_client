import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import { motion, } from 'framer-motion';
import Marquee from 'react-fast-marquee';
const MarqueeComponent = ({ PropText, direction }) => {
    const zoomOutVariants = {
        hidden: {
            opacity: 0,
            y: 0,
        },
        visible: {
            opacity: 1,
            y: -80,
            transition: {
                duration: 0.8,
                when: 'afterChildren'
            }
        },
    };
    return (_jsx("div", { children: _jsx(motion.div, { initial: "hidden", animate: "visible", variants: zoomOutVariants, children: _jsxs(Marquee, { speed: 30, direction: direction, className: 'overflow-hidden', children: [_jsxs("h1", { className: 'font-black text-9xl font-jeju text-white', children: ["\u00A0", `${PropText}`, " "] }), _jsxs("p", { className: 'font-black  text-9xl  font-jeju font-outline-2 text-transparent  ', children: ["\u00A0", `${PropText}`] }), _jsxs("h1", { className: 'font-black text-9xl font-jeju text-white', children: ["\u00A0", `${PropText}`, "  "] }), _jsxs("h1", { className: 'font-black  text-9xl font-outline-2 text-transparent font-jeju ', children: ["\u00A0", `${PropText}`, "  "] })] }) }) }));
};
export default MarqueeComponent;
