import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';
import { DropdownMenu, DropdownMenuItem, DropdownMenuContent, DropdownMenuTrigger } from '@radix-ui/react-dropdown-menu';
import { axiosPrivet } from '@/utils/axios/baseUrl';
import Sidebar from '@/components/ui/sidebar';
import AdminNavbar from '@/components/admin/AdminNavbar';
import { acceptRequestURL, getRequests, rejectRequestURL } from '@/utils/axios/apiUrls';
const TrainersRequests = () => {
    const [requests, setRequests] = useState();
    useEffect(() => {
        fetchRequests();
    }, []);
    const fetchRequests = () => {
        axiosPrivet.post(getRequests).then(({ data }) => {
            console.log(data, 'data');
            setRequests(data.data);
        });
    };
    const acceptRequest = async (id) => {
        axiosPrivet.put(acceptRequestURL, { requestId: id }).then((response) => {
            console.log(response.data);
        });
        fetchRequests();
    };
    const rejectRequest = async (id) => {
        axiosPrivet.put(rejectRequestURL, { requestId: id }).then((response) => {
            console.log(response.data);
        });
    };
    return (_jsxs(_Fragment, { children: [_jsx(AdminNavbar, {}), _jsxs("div", { className: 'flex mt-20 ', children: [_jsx(Sidebar, { select: 'trainersRequests' }), _jsx("div", { className: "flex justify-center w-full pb-10 ", children: _jsxs("table", { className: 'border border-input text-center mt-10 ml-10 ', children: [_jsx("thead", { className: 'border border-input ', children: _jsxs("tr", { children: [_jsx("th", { className: 'border border-input w-20 py-2 ', children: "#" }), _jsx("th", { className: 'border border-input w-20 py-2', children: "id" }), _jsx("th", { className: 'border border-input w-60 py-2', children: "email" }), _jsx("th", { className: 'border border-input w-60 py-2', children: "certificate" }), _jsx("th", { className: 'border border-input w-60 py-2', children: "actions" })] }) }), _jsx("tbody", { children: requests?.length == 0 ? _jsx("div", { children: " No Requests" }) :
                                        requests?.map((request, i) => {
                                            return _jsxs("tr", { children: [_jsx("td", { className: 'border border-input', children: i + 1 }), _jsx("td", { className: 'border border-input px-3', children: request._id }), _jsx("td", { className: 'border border-input', children: request?.email }), _jsx("td", { className: 'border border-input', children: _jsx(Button, { variant: 'link', children: "show certificate" }) }), _jsx("td", { className: 'border border-input', children: _jsxs(DropdownMenu, { children: [_jsx(DropdownMenuTrigger, { className: 'hover:bg-gray-700  rounded w-7 h-7 text-center ', children: "..." }), _jsxs(DropdownMenuContent, { className: 'bg-gray-900 hover:cursor-pointer', children: [_jsx(DropdownMenuItem, { className: 'border w-32 ', onClick: () => acceptRequest(request._id), children: "Accept" }), _jsx(DropdownMenuItem, { className: 'border px-3', onClick: () => rejectRequest(request._id), children: "Reject" })] })] }) })] }, request._id);
                                        }) })] }) })] })] }));
};
export default TrainersRequests;
