"use client"

import {
    ColumnDef,
    flexRender,
    getCoreRowModel,
    useReactTable,
    getPaginationRowModel,
    SortingState,
    getSortedRowModel,
    ColumnFiltersState,
    getFilteredRowModel, VisibilityState, Updater, TableState,

} from "@tanstack/react-table"
import { Input } from "@/components/ui/input"

import {Button, buttonVariants} from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import * as React from "react"
import {undefined} from "zod";
import {columns} from "@/app/stock/tablestock/columns";
import Image from "next/image";
import {clsx} from "clsx";
import {tr} from "@faker-js/faker";

interface DataTableProps<TData, TValue> {
    columns: ColumnDef<TData, TValue>[]
    data: TData[]
}

export function DataTable<TData, TValue>({columns, data,}: DataTableProps<TData, TValue>) {
    const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
        []
    )
    const [columnVisibility, setColumnVisibility] =
        React.useState<VisibilityState>({
            'image':false,

        })
    const [sorting, setSorting] = React.useState<SortingState>([])
    const [rowSelection, setRowSelection] = React.useState({})

    const table = useReactTable({
        onStateChange(updater: Updater<TableState>): void {
        },
        renderFallbackValue: undefined,
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        onSortingChange: setSorting,
        getSortedRowModel: getSortedRowModel(),
        onColumnFiltersChange: setColumnFilters,
        getFilteredRowModel: getFilteredRowModel(),
        onColumnVisibilityChange: setColumnVisibility,
        onRowSelectionChange: setRowSelection,


        state: {
            sorting,
        columnFilters,
            columnVisibility,
            rowSelection

        },
    })


    return (
        <div className="rounded-md border  ">

               <div className={'flex gap-2 p-2'}>
                   <Input
                       placeholder="Filter nom..."
                       value={(table.getColumn("nom")?.getFilterValue() as string) ?? ""}
                       onChange={(event) =>
                           table.getColumn("nom")?.setFilterValue(event.target.value)
                       }
                       className="max-w-sm"
                   />
                   <div className={'ms-auto'}></div>
                   <DropdownMenu >
                       <DropdownMenuTrigger asChild>
                           <Button variant="outline" className="">
                               Columns
                           </Button>
                       </DropdownMenuTrigger>
                       <DropdownMenuContent align="end">
                           {table
                               .getAllColumns()
                               .filter(
                                   (column) => column.getCanHide()
                               )
                               .map((column) => {
                                   return (
                                       <DropdownMenuCheckboxItem
                                           key={column.id}
                                           className="capitalize"
                                           checked={column.getIsVisible()}
                                           onCheckedChange={(value) =>
                                               column.toggleVisibility(value)
                                           }
                                       >
                                           {column.id}
                                       </DropdownMenuCheckboxItem>
                                   )
                               })}
                       </DropdownMenuContent>
                   </DropdownMenu>


            </div>
            <Table className={''}>
                <TableHeader>
                    {table.getHeaderGroups().map((headerGroup) => (
                        <TableRow key={headerGroup.id}>
                            <TableHead>
                                Image
                            </TableHead>
                            {headerGroup.headers.map((header) => {
                                return (
                                    <TableHead key={header.id}>
                                        {flexRender(
                                                header.column.columnDef.header,
                                                header.getContext()
                                            )}
                                    </TableHead>
                                )
                            })}
                        </TableRow>
                    ))}
                </TableHeader>
                <TableBody>
                    {table.getRowModel().rows?.length ? (
                        table.getRowModel().rows.map((row) => (

                            <TableRow key={row.id} data-state={row.getIsSelected() && "selected"}>
                                <TableCell className={'relative '}>
                                    <Image width={100} height={100} className={'  '} src={row.getValue('image')} alt={'image'}/>
                                </TableCell>

                                {row.getVisibleCells().map((cell) => (

                                    <TableCell key={cell.id}>

                                        <div
                                            className={'text-center'}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</div>

                                    </TableCell>
                                ))}

                            </TableRow>
                        ))
                    ) : (
                        <TableRow>
                            <TableCell colSpan={columns.length} className="h-24 text-center">
                                No results.
                            </TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>
            <div className={'flex justify-between'}>
                <div className="flex-1 text-sm text-muted-foreground self-center">
                    {table.getFilteredSelectedRowModel().rows.length} of{" "}
                    {table.getFilteredRowModel().rows.length} row(s) selected.
                </div>
                <div className="flex items-center justify-end space-x-2 py-4">
                    <Button
                        variant="outline"
                        size="sm"
                        onClick={() => table.previousPage()}
                        disabled={!table.getCanPreviousPage()}
                    >
                        Previous
                    </Button>
                    <Button
                        variant="outline"
                        size="sm"
                        onClick={() => table.nextPage()}
                        disabled={!table.getCanNextPage()}
                    >
                        Next
                    </Button>

                </div>
            </div>


        </div>
    )
}
