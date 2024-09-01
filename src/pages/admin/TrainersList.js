import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
// @ts-nocheck
import Navbar from '@/components/admin/AdminNavbar';
import axios, { axiosPrivet } from '../../utils/axios/baseUrl';
import { useEffect, useState } from 'react';
import { DataTable } from '@/components/ui/dataTable';
import Sidebar from '@/components/ui/sidebar';
import { toast } from 'sonner';
import { Input } from '@/components/ui/input';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from '@radix-ui/react-dropdown-menu';
import { Button } from '@/components/ui/button';
import { DotsHorizontalIcon } from '@radix-ui/react-icons';
import { Checkbox } from '@radix-ui/react-checkbox';
import { blockTrainerURL, getTrainersUrl, unBlockTrainerURL } from '@/utils/axios/apiUrls';
// Modify trainerColumn to accept blockTrainer as a prop
export const trainerColumn = (blockTrainer, unBlockTrainer) => [
    {
        id: "select",
        header: ({ table }) => (_jsx(Checkbox, { className: "rounded ", checked: table.getIsAllPageRowsSelected() ||
                (table.getIsSomePageRowsSelected() && "indeterminate"), onCheckedChange: (value) => table.toggleAllPageRowsSelected(!!value), "aria-label": "Select all" })),
        cell: ({ row }) => (_jsx(Checkbox, { className: "rounded", checked: row.getIsSelected(), onCheckedChange: (value) => row.toggleSelected(!!value), "aria-label": "Select row" })),
    },
    {
        accessorKey: "name",
        header: "Name",
    },
    {
        accessorKey: "email",
        header: "Email",
    },
    {
        accessorKey: "followers",
        header: "Followers",
        cell: ({ row }) => (_jsx("div", { className: "capitalize", children: row.getValue("followers") })),
    },
    {
        accessorKey: "isBlocked",
        header: "IsBlocked",
    },
    {
        id: "actions",
        enableHiding: false,
        cell: ({ row }) => {
            const trainer = row.original;
            return (_jsxs(DropdownMenu, { children: [_jsx(DropdownMenuTrigger, { className: "bg-transparent text-white hover:bg-zinc-800 rounded", asChild: true, children: _jsxs(Button, { variant: "default", className: "h-8 w-8 p-0", children: [_jsx("span", { className: "sr-only", children: "Open menu" }), _jsx(DotsHorizontalIcon, { className: "h-4 w-4" })] }) }), _jsxs(DropdownMenuContent, { align: "end", className: "bg-black gap-3 hover:cursor-pointer w-32 p-2 rounded border", children: [_jsx(DropdownMenuLabel, { children: "Actions" }), row.original.isBlocked == false ?
                                _jsx(DropdownMenuItem, { className: "gap-3", onClick: () => blockTrainer(trainer._id), children: "block" }) :
                                _jsx(DropdownMenuItem, { className: "gap-3", onClick: () => unBlockTrainer(trainer._id), children: "unblock" })] })] }));
        },
    },
];
const UserList = () => {
    const [blockTrigger, setBlockTrigger] = useState(false);
    const [user, setUsers] = useState([]);
    const blockTrainer = async (trainerId) => {
        axiosPrivet.post(blockTrainerURL, { trainerId })
            .then(({ data }) => {
            console.log(data, 'datatatatatatatata');
            setBlockTrigger(prev => !prev);
        })
            .catch(error => {
            console.error('Error blocking trainer:', error);
            toast.error('Error blocking trainer');
        });
    };
    const unBlockTrainer = async (trainerId) => {
        axiosPrivet.post(unBlockTrainerURL, { trainerId })
            .then(({ data }) => {
            console.log(data, 'datatatatatatatata');
            setBlockTrigger(prev => !prev);
        })
            .catch(error => {
            console.error('Error ublocking trainer:', error);
            toast.error('Error unblocking trainer');
        });
    };
    useEffect(() => {
        axios().get(getTrainersUrl)
            .then((response) => {
            console.log(response.data, 'nnnnnnn');
            if (response.data.message === 'success') {
                setUsers(response.data.trainers);
            }
            else {
                toast.error(response.data.message);
            }
        })
            .catch(error => {
            console.error('Error fetching trainers:', error);
            toast.error('Error fetching trainers');
        });
    }, [blockTrigger]);
    return (_jsxs(_Fragment, { children: [_jsx(Navbar, {}), _jsxs("div", { className: "flex flex-grow w-full lg:mt-20 ", children: [_jsx(Sidebar, { select: 'Trainers' }), _jsx("div", { className: 'flex justify-center w-full ', children: _jsxs("div", { className: 'w-11/12 lg:mt-14', children: [_jsx(Input, { className: 'w-72 rounded lg:mb-5 me-auto', type: 'search', placeholder: 'Search...' }), _jsx(DataTable, { columns: trainerColumn(blockTrainer, unBlockTrainer), data: user })] }) })] })] }));
};
export default UserList;
