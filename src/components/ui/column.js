import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Checkbox } from "./checkbox";
import { DropdownMenu } from "./dropdown-menu";
import { DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
import { Button } from "./button";
import { DotsHorizontalIcon } from "@radix-ui/react-icons";
export const userColumn = [
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
        accessorKey: "following",
        header: "Following",
        cell: ({ row }) => (_jsx("div", { className: "capitalize", children: row.getValue("following") })),
    },
    {
        accessorKey: "isBlocked",
        header: "IsBlocked",
    },
    {
        id: "actions",
        enableHiding: false,
        cell: ({ row }) => {
            const user = row.original;
            return (_jsxs(DropdownMenu, { children: [_jsx(DropdownMenuTrigger, { className: "bg-transparent text-white hover:bg-zinc-800 rounded", asChild: true, children: _jsxs(Button, { variant: "default", className: "h-8 w-8 p-0", children: [_jsx("span", { className: "sr-only", children: "Open menu" }), _jsx(DotsHorizontalIcon, { className: "h-4 w-4" })] }) }), _jsxs(DropdownMenuContent, { align: "end", className: "bg-black gap-3 hover:cursor-pointer w-32 p-2 rounded border", children: [_jsx(DropdownMenuLabel, { children: "Actions" }), _jsx(DropdownMenuItem, { className: "gap-3", onClick: () => navigator.clipboard.writeText(user.id), children: "Copy user ID" }), _jsx(DropdownMenuSeparator, {}), _jsx(DropdownMenuItem, { children: "View customer" }), _jsx(DropdownMenuItem, { children: "View payment details" })] })] }));
        },
    },
];
