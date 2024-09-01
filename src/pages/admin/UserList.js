import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import Navbar from '@/components/users/Navbar';
import axios from '../../utils/axios/baseUrl';
import { useEffect, useState } from 'react';
import { DataTable } from '@/components/ui/dataTable';
import { userColumn } from '@/components/ui/column';
import Sidebar from '@/components/ui/sidebar';
import { toast } from 'sonner';
import { usersListURL } from '@/utils/axios/apiUrls';
const UserList = () => {
    const [user, setUsers] = useState([]);
    useEffect(() => {
        axios().get(usersListURL).then((response) => {
            try {
                console.log(response.data, 'nnnnnnn');
                if (response.data.message == 'success') {
                    setUsers(response.data.users);
                }
                else {
                    console.log(response.data.message, 'jjj');
                    toast.error(response.data.message);
                }
            }
            catch (error) {
                toast.error(error.message);
            }
        });
    }, []);
    return (_jsxs(_Fragment, { children: [_jsx(Navbar, {}), _jsxs("div", { className: "flex flex-grow w-full lg:mt-24 ", children: [_jsx(Sidebar, { select: 'Users' }), _jsx("div", { className: 'flex justify-center w-full ', children: _jsx("div", { className: 'w-11/12 lg:mt-14', children: _jsx(DataTable, { columns: userColumn, data: user }) }) })] })] }));
};
export default UserList;
