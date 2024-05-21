"use client"
import { ArrowUpDown,MoreHorizontal } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import { Checkbox } from "@/components/ui/checkbox"

import { ColumnDef } from "@tanstack/react-table"
import {DataTableColumnHeader} from "@/app/stock/tablestock/entetetrieable";
import {cn} from "@/lib/utils";
import * as React from "react";
import {deleteItems} from "@/lib/stockdata";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
// export type Payment = {
//     id: string
//     image: number
//     nom: "pending" | "processing" | "success" | "failed"
//     email: string
// }
export type StockZod = {
    id: string
    image: string
    nom:string
    cathegorie: string
    prixEngro:number
    prixVente:number
    quantite:number
}
export const Qte = (quantite:{
    value:number
}) => {
    return (
        <div style={{width: `${quantite.value}px`}} className={cn({
            'h-2 bg-red-600': quantite.value < 10,
            'h-2 bg-yellow-400': quantite.value >= 10,
            'h-2 bg-green-700': quantite.value >= 50,
        })}></div>
    );
};

export const columns: ColumnDef<StockZod>[] = [

    {
        id: "select",
        header: ({ table }) => (
            <Checkbox
                checked={
                    table.getIsAllPageRowsSelected() ||
                    (table.getIsSomePageRowsSelected() && "indeterminate")
                }
                onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
                aria-label="Select all"
            />
        ),
        cell: ({ row }) => (
            <Checkbox className={'flex justify-start'}
                checked={row.getIsSelected()}
                onCheckedChange={(value) => row.toggleSelected(!!value)}
                aria-label="Select row"
            />
        ),
        enableSorting: false,
        enableHiding: false,
    },

    {
        accessorKey: "nom",
        header: () => <div className="">Nom</div>,

        cell: ({ row }) => {
            const nom = String(row.getValue("nom"))



            return <div className="text-left font-medium">{nom}</div>
        },
    },
    {
        accessorKey: "cathegorie",
        header: () => <div className="">Cathegorie</div>,

        cell: ({ row }) => {
            const cathegorie = String(row.getValue("cathegorie"))



            return <div className="text-left font-medium">{cathegorie}</div>
        },
    },
    {
        accessorKey: "prixEngro",
        header: () => <div className="">Prix Engro</div>,

        cell: ({ row }) => {
            const amount = parseFloat(row.getValue("prixEngro"))

            const formatted = new Intl.NumberFormat("fr-FR", {
                style: "currency",
                currency: "XOF",
            }).format(amount)

            return <div className="text-left font-medium">{formatted}</div>
        },
    },
    {
        accessorKey: "prixVente",
        header: () => <div className="">Prix Vente</div>,

        cell: ({ row }) => {
            const amount = parseFloat(row.getValue("prixVente"))

            const formatted = new Intl.NumberFormat("fr-FR", {
                style: "currency",
                currency: "XOF",
            }).format(amount)

            return <div className="text-left font-medium">{formatted}</div>
        },
    },
    {
        accessorKey: "quantite",
        header: () => <div className=" text-left">Quantite</div>,
        cell: ({ row }) => {
            const amount = parseFloat(row.getValue("quantite"))

            const formatted = new Intl.NumberFormat().format(amount)

            return <div className="text-left font-medium">
                <div>{formatted}</div>
                <Qte value={amount}></Qte>
            </div>
        },


    },
    {
        accessorKey: "image",
        header: (({column})=>(

                <DataTableColumnHeader className={'hidden'} column={column} title="image" hidden={true}  />
            )
        ),


    },

    {
        id: "actions",
        header:('Action'),
        cell: ({ row }) => {
            const payment = row.original

            return (
                <DropdownMenu >
                    <DropdownMenuTrigger asChild className={'flex justify-center'}>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                            <span className="sr-only">Open menu</span>
                            <MoreHorizontal className="h-4 w-4" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuItem onClick={() => navigator.clipboard.writeText(payment.id)}>Copy payment ID</DropdownMenuItem>
                        <DropdownMenuItem onClick={() =>deleteItems(payment.id)}>Delete</DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>View customer</DropdownMenuItem>
                        <DropdownMenuItem>View payment details</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            )
        },
    },
]
