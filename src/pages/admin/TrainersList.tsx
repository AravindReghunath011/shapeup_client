// @ts-nocheck
import Navbar from '@/components/admin/AdminNavbar'
import axios, { axiosPrivet } from '../../utils/axios/baseUrl'
import { useEffect, useState } from 'react'
import { DataTable } from '@/components/ui/dataTable'
import Sidebar from '@/components/ui/sidebar'
import { toast } from 'sonner'
import { Input } from '@/components/ui/input'
import DemoPage from '@/components/ui/page'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@radix-ui/react-dropdown-menu'
import { Button } from '@/components/ui/button'
import { DotsHorizontalIcon } from '@radix-ui/react-icons'
import { ColumnDef } from '@tanstack/react-table'
import { Checkbox } from '@radix-ui/react-checkbox'
import { blockTrainerURL, getTrainersUrl, unBlockTrainerURL } from '@/utils/axios/apiUrls'

export type Trainer ={
  _id:string,
  name:string,
  email?:string,
  followers:number,
  isBlocked:boolean
}

// Modify trainerColumn to accept blockTrainer as a prop
export const trainerColumn: (
  blockTrainer: (trainerId: string) => void,
  unblockTrainer: (trainerId: string) => void
) => ColumnDef<Trainer>[] = (blockTrainer, unBlockTrainer) => [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox className="rounded "
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox className="rounded"
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
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
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("followers") }</div>
    ),
  },
  {
    accessorKey: "isBlocked",
    header: "IsBlocked",
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const trainer = row.original

      return (
        <DropdownMenu>
          <DropdownMenuTrigger className="bg-transparent text-white hover:bg-zinc-800 rounded" asChild>
            <Button variant="default" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <DotsHorizontalIcon className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="bg-black gap-3 hover:cursor-pointer w-32 p-2 rounded border">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            {/* Call blockTrainer function when block action is triggered */}
            {
              row.original.isBlocked == false ?
            <DropdownMenuItem className="gap-3" onClick={() => blockTrainer(trainer._id)}>
              block
            </DropdownMenuItem> :
            <DropdownMenuItem className="gap-3" onClick={() => unBlockTrainer(trainer._id)}>
              unblock
            </DropdownMenuItem>
            }
            
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
]

const UserList = () => {
  const [blockTrigger, setBlockTrigger] = useState(false);
  const [user, setUsers] = useState([]);


  const blockTrainer = async (trainerId: string) => {
    axiosPrivet.post(blockTrainerURL, { trainerId })
      .then(({ data }) => {
        console.log(data, 'datatatatatatatata')
        setBlockTrigger(prev => !prev);
      })
      .catch(error => {
        console.error('Error blocking trainer:', error);
        toast.error('Error blocking trainer');
      });
  }

  const unBlockTrainer = async (trainerId: string) => {
    axiosPrivet.post(unBlockTrainerURL, { trainerId })
      .then(({ data }) => {
        console.log(data, 'datatatatatatatata')
        setBlockTrigger(prev => !prev);
      })
      .catch(error => {
        console.error('Error ublocking trainer:', error);
        toast.error('Error unblocking trainer');
      });
  }

  useEffect(() => {
    axios().get(getTrainersUrl)
      .then((response: any) => {
        console.log(response.data, 'nnnnnnn')
        if (response.data.message === 'success') {
          setUsers(response.data.trainers)
        } else {
          toast.error(response.data.message)
        }
      })
      .catch(error => {
        console.error('Error fetching trainers:', error);
        toast.error('Error fetching trainers');
      });
  }, [blockTrigger]);

  return (
    <>
      <Navbar/>
      <div className="flex flex-grow w-full lg:mt-20 ">
        <Sidebar select={'Trainers'} />
        <div className='flex justify-center w-full '>
          <div className='w-11/12 lg:mt-14' >
            <Input className='w-72 rounded lg:mb-5 me-auto' type='search' placeholder='Search...' />
            <DataTable columns={trainerColumn(blockTrainer,unBlockTrainer)} data={user} />
          </div>
        </div>
      </div>
    </>
  )
}

export default UserList
