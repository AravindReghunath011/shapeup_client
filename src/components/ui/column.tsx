
import { ColumnDef } from "@tanstack/react-table"
import { Checkbox } from "./checkbox"
import { DropdownMenu } from "./dropdown-menu"
import { DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu"
import { Button } from "./button"
import { DotsHorizontalIcon } from "@radix-ui/react-icons"
import { axiosPrivet } from "@/utils/axios/baseUrl"


// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
// export type Payment = {
//   id: string
//   amount: number
//   status: "pending" | "processing" | "success" | "failed"
//   email: string
// }


export type User ={
  id:string,
  name:string,
  email?:string,
  following:number,
  isBlocked:boolean
}

export const userColumn: ColumnDef<User>[] = [
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
    accessorKey: "following",
    header: "Following",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("following") }</div>
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
      const user = row.original

      return (
        <DropdownMenu  >
          <DropdownMenuTrigger className="bg-transparent text-white hover:bg-zinc-800 rounded" asChild >
            <Button variant="default" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <DotsHorizontalIcon className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="bg-black gap-3 hover:cursor-pointer w-32 p-2 rounded border">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem className="gap-3"
              onClick={() => navigator.clipboard.writeText(user.id)}
            >
              Copy user ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View customer</DropdownMenuItem>
            <DropdownMenuItem>View payment details</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
]


 
