import React, { useEffect, useState } from 'react';
import { User, userColumn } from './column';
import { DataTable } from './dataTable';

async function getData(): Promise<User[]> {
  // Fetch data from your API here.
  return [
    {
      id:"12hjh23jh",
      name: "m5gr84i9",
      following: 316,
      isBlocked: false,
      email: "ken99@yahoo.com",
    },
    {
      id:"12hjh23jh",
      name: "m5gr84i9",
      following: 316,
      isBlocked: false,
      email: "ken99@yahoo.com",
    },
    {
      id:"12hjh23jh",
      name: "m5gr84i9",
      following: 316,
      isBlocked: false,
      email: "ken99@yahoo.com",
    },
    // ...
  ];
}

const DemoPage: React.FC = () => {
  const [data, setData] = useState<User[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getData();
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={userColumn} data={data} />
    </div>
  );
};

export default DemoPage;
