"use client";
import { MoreHorizontal } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Checkbox } from "@/components/ui/checkbox";

import { DataTableColumnHeader } from "@/app/stock/tablestock/entetetrieable";
import { cn } from "@/lib/utils";
import { ColumnDef } from "@tanstack/react-table";
// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
// export type Payment = {
//     id: string
//     image: number
//     nom: "pending" | "processing" | "success" | "failed"
//     email: string
// }
export type StockZod = {
  id: string;
  image: string;
  nom: string;
  cathegorie: string;
  prixEngro: number;
  prixVente: number;
  quantite: number;
};
export const Qte = (quantite: { value: number }) => {
  return (
    <div
      className={cn(`w-[${quantite.value}px]`, {
        "h-2 bg-red-600": quantite.value < 10,
        "h-2 bg-yellow-400": quantite.value >= 10,
        "h-2 bg-green-700": quantite.value >= 50,
      })}
    ></div>
  );
};

export const columns: ColumnDef<StockZod>[] = [
  {
    id: "select",
    header: ({ table }: any) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value: any) =>
          table.toggleAllPageRowsSelected(!!value)
        }
        aria-label="Select all"
      />
    ),
    cell: ({ row }: any) => (
      <Checkbox
        className={"flex justify-start"}
        checked={row.getIsSelected()}
        onCheckedChange={(value: any) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },

  {
    accessorKey: "nom",
    header: () => <div className="">Nom</div>,

    cell: ({ row }: any) => {
      const nom = String(row.getValue("nom"));

      return <div className="text-left font-medium">{nom}</div>;
    },
  },
  {
    accessorKey: "cathegorie",
    header: () => <div className="">Cathegorie</div>,

    cell: ({ row }: any) => {
      const cathegorie = String(row.getValue("cathegorie"));

      return <div className="text-left font-medium">{cathegorie}</div>;
    },
  },
  {
    accessorKey: "prixEngro",
    header: () => <div className="">Prix Engro</div>,

    cell: ({ row }: any) => {
      const amount = parseFloat(row.getValue("prixEngro"));

      const formatted = new Intl.NumberFormat("fr-FR", {
        style: "currency",
        currency: "XOF",
      }).format(amount);

      return <div className="text-left font-medium">{formatted}</div>;
    },
  },
  {
    accessorKey: "prixVente",
    header: () => <div className="">Prix Vente</div>,

    cell: ({ row }: any) => {
      const amount = parseFloat(row.getValue("prixVente"));

      const formatted = new Intl.NumberFormat("fr-FR", {
        style: "currency",
        currency: "XOF",
      }).format(amount);

      return <div className="text-left font-medium">{formatted}</div>;
    },
  },
  {
    accessorKey: "quantite",
    header: () => <div className=" text-left">Quantite</div>,
    cell: ({ row }: any) => {
      const amount = parseFloat(row.getValue("quantite"));

      const formatted = new Intl.NumberFormat().format(amount);

      return (
        <div className="text-left font-medium">
          <div>{formatted}</div>
          <Qte value={amount}></Qte>
        </div>
      );
    },
  },
  {
    accessorKey: "image",
    header: ({ column }: any) => (
      <DataTableColumnHeader
        className={"hidden"}
        column={column}
        title="image"
        hidden={true}
      />
    ),
  },

  {
    id: "actions",
    header: "Action",
    cell: ({ row }: any) => {
      const payment = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild className={"flex justify-center"}>
            <Button className={"h-8 w-8 p-0"}>
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className={"h-4 w-4"} />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(payment.id)}
            >
              Copy payment ID
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => payment.id}>
              Delete
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View customer</DropdownMenuItem>
            <DropdownMenuItem>View payment details</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
