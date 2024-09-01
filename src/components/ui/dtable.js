import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// @ts-nocheck
import * as React from "react";
import { CaretSortIcon, ChevronDownIcon, DotsHorizontalIcon, } from "@radix-ui/react-icons";
import { flexRender, getCoreRowModel, getFilteredRowModel, getPaginationRowModel, getSortedRowModel, useReactTable, } from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger, } from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow, } from "@/components/ui/table";
const data = [
    {
        id: "12hjh23jh",
        name: "m5gr84i9",
        following: 316,
        isBlocked: false,
        email: "ken99@yahoo.com",
    },
];
export const columns = [
    {
        id: "select",
        header: ({ table }) => (_jsx(Checkbox, { className: "rounded ", checked: table.getIsAllPageRowsSelected() ||
                (table.getIsSomePageRowsSelected() && "indeterminate"), onCheckedChange: (value) => table.toggleAllPageRowsSelected(!!value), "aria-label": "Select all" })),
        cell: ({ row }) => (_jsx(Checkbox, { className: "rounded", checked: row.getIsSelected(), onCheckedChange: (value) => row.toggleSelected(!!value), "aria-label": "Select row" })),
        enableSorting: false,
        enableHiding: false,
    },
    {
        accessorKey: "name",
        header: "Name",
        cell: ({ row }) => (_jsx("div", { className: "capitalize", children: row.getValue("name") })),
    },
    {
        accessorKey: "email",
        header: ({ column }) => {
            return (_jsxs(Button, { variant: "ghost", onClick: () => column.toggleSorting(column.getIsSorted() === "desc" ? column.getIsSorted() === "asc" : column.getIsSorted() === "desc"), children: ["Email", _jsx(CaretSortIcon, { className: "ml-2 h-4 w-4" })] }));
        },
        cell: ({ row }) => _jsx("div", { className: "lowercase", children: row.getValue("email") }),
    },
    {
        accessorKey: "following",
        header: "Following",
        cell: ({ row }) => (_jsx("div", { className: "capitalize", children: row.getValue("following") })),
    },
    {
        accessorKey: "isBlocked",
        header: "IsBlocked",
        cell: ({ row }) => (_jsx("div", { className: "capitalize", children: row.getValue("isBlocked") == true ? "true" : "false" })),
    },
    {
        id: "actions",
        enableHiding: false,
        cell: ({ row }) => {
            const user = row.original;
            return (_jsxs(DropdownMenu, { children: [_jsx(DropdownMenuTrigger, { asChild: true, children: _jsxs(Button, { variant: "default", className: "h-8 w-8 p-0", children: [_jsx("span", { className: "sr-only", children: "Open menu" }), _jsx(DotsHorizontalIcon, { className: "h-4 w-4" })] }) }), _jsxs(DropdownMenuContent, { align: "end", children: [_jsx(DropdownMenuLabel, { children: "Actions" }), _jsx(DropdownMenuItem, { onClick: () => navigator.clipboard.writeText(user.id), children: "Copy user ID" }), _jsx(DropdownMenuSeparator, {}), _jsx(DropdownMenuItem, { children: "View customer" }), _jsx(DropdownMenuItem, { children: "View payment details" })] })] }));
        },
    },
];
const DemoPage = () => {
    const [sorting, setSorting] = React.useState([]);
    const [columnFilters, setColumnFilters] = React.useState([]);
    const [columnVisibility, setColumnVisibility] = React.useState({});
    const [rowSelection, setRowSelection] = React.useState({});
    const table = useReactTable({
        data,
        columns,
        onSortingChange: setSorting,
        onColumnFiltersChange: setColumnFilters,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        onColumnVisibilityChange: setColumnVisibility,
        onRowSelectionChange: setRowSelection,
        state: {
            sorting,
            columnFilters,
            columnVisibility,
            rowSelection,
        },
    });
    return (_jsxs("div", { className: "w-full", children: [_jsxs("div", { className: "flex items-center py-4", children: [_jsx(Input, { placeholder: "Filter emails...", value: table.getColumn("email")?.getFilterValue() ?? "", onChange: (event) => table.getColumn("email")?.setFilterValue(event.target.value), className: "max-w-sm rounded" }), _jsxs(DropdownMenu, { children: [_jsx(DropdownMenuTrigger, { asChild: true, children: _jsxs(Button, { variant: "outline", className: "ml-auto rounded", children: ["Columns ", _jsx(ChevronDownIcon, { className: "ml-2 h-4 w-4" })] }) }), _jsx(DropdownMenuContent, { align: "end", children: table
                                    .getAllColumns()
                                    .filter((column) => column.getCanHide())
                                    .map((column) => {
                                    return (_jsx(DropdownMenuCheckboxItem, { className: "capitalize ", checked: column.getIsVisible(), onCheckedChange: (value) => column.toggleVisibility(!!value), children: column.id }, column.id));
                                }) })] })] }), _jsx("div", { className: "rounded  border border-input", children: _jsxs(Table, { children: [_jsx(TableHeader, { className: "", children: table.getHeaderGroups().map((headerGroup) => (_jsx(TableRow, { className: "border-input", children: headerGroup.headers.map((header) => {
                                    return (_jsx(TableHead, { children: header.isPlaceholder
                                            ? null
                                            : flexRender(header.column.columnDef.header, header.getContext()) }, header.id));
                                }) }, headerGroup.id))) }), _jsx(TableBody, { className: "border-input", children: table.getRowModel().rows?.length ? (table.getRowModel().rows.map((row) => (_jsx(TableRow, { className: "border-input", "data-state": row.getIsSelected() && "selected", children: row.getVisibleCells().map((cell) => (_jsx(TableCell, { children: flexRender(cell.column.columnDef.cell, cell.getContext()) }, cell.id))) }, row.id)))) : (_jsx(TableRow, { children: _jsx(TableCell, { colSpan: columns.length, className: "h-24 text-center", children: "No results." }) })) })] }) }), _jsxs("div", { className: "flex items-center justify-end space-x-2 py-4", children: [_jsxs("div", { className: "flex-1 text-sm text-muted-foreground", children: [table.getFilteredSelectedRowModel().rows.length, " of", " ", table.getFilteredRowModel().rows.length, " row(s) selected."] }), _jsxs("div", { className: "space-x-2", children: [_jsx(Button, { variant: "outline", size: "sm", onClick: () => table.previousPage(), disabled: !table.getCanPreviousPage(), children: "Previous" }), _jsx(Button, { variant: "outline", size: "sm", onClick: () => table.nextPage(), disabled: !table.getCanNextPage(), children: "Next" })] })] })] }));
};
export default DemoPage;
