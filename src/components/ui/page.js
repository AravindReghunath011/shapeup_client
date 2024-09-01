import { jsx as _jsx } from "react/jsx-runtime";
import { useEffect, useState } from 'react';
import { userColumn } from './column';
import { DataTable } from './dataTable';
async function getData() {
    // Fetch data from your API here.
    return [
        {
            id: "12hjh23jh",
            name: "m5gr84i9",
            following: 316,
            isBlocked: false,
            email: "ken99@yahoo.com",
        },
        {
            id: "12hjh23jh",
            name: "m5gr84i9",
            following: 316,
            isBlocked: false,
            email: "ken99@yahoo.com",
        },
        {
            id: "12hjh23jh",
            name: "m5gr84i9",
            following: 316,
            isBlocked: false,
            email: "ken99@yahoo.com",
        },
        // ...
    ];
}
const DemoPage = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await getData();
                setData(result);
            }
            catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []); // Empty dependency array means this effect runs once on mount
    return (_jsx("div", { className: "container mx-auto py-10", children: _jsx(DataTable, { columns: userColumn, data: data }) }));
};
export default DemoPage;
