// @flow
import { buttonVariants } from "@/components/ui/button";
import { clsx } from "clsx";
import {
  AlertCircle,
  Box,
  Cpu,
  Database,
  List,
  PlusCircle,
} from "lucide-react"; // Import icons from Lucide
import Link from "next/link";

type Props = {
  setShowAddProduit: (value: boolean) => void;
  setShowListStock: (value: boolean) => void;
  setShowListeCathegorie: (value: boolean) => void;
  setShowRuptureStock: (value: boolean) => void;
};

export const AppBar = ({
  setShowAddProduit,
  setShowListStock,
  setShowListeCathegorie,
  setShowRuptureStock,
}: Props) => {
  return (
    <div className="z-10   text-sm ">
      <h3 className="text-sm font-semibold ps-2 py-2 bg-slate-100/40 ">
        Gestion du Stock
      </h3>

      <div className="hidden  lg:flex lg:flex-col ">
        <div
          onClick={() => {
            setShowAddProduit(true);
            setShowListStock(false);
            setShowListeCathegorie(false);
            setShowRuptureStock(false);
          }}
          className="flex items-center gap-2 cursor-pointer p-2 hover:bg-gray-100 hover:text-blue-600 transition-colors rounded-md"
        >
          <PlusCircle className="w-5 h-5" />
          <span>Ajouter un produit</span>
        </div>
        <div
          onClick={() => {
            setShowAddProduit(false);
            setShowListStock(true);
            setShowListeCathegorie(false);
            setShowRuptureStock(false);
          }}
          className="flex items-center gap-2 cursor-pointer p-2 hover:bg-gray-100 hover:text-blue-600 transition-colors rounded-md"
        >
          <Database className="w-5 h-5" />
          <span>Liste de Stock</span>
        </div>
        <Link
          href="#"
          onClick={() => {
            setShowListeCathegorie(true);
            setShowListStock(false);
            setShowAddProduit(false);
            setShowRuptureStock(false);
          }}
          className="flex items-center gap-2 cursor-pointer p-2 hover:bg-gray-100 hover:text-blue-600 transition-colors rounded-md"
        >
          <List className="w-5 h-5" />
          <span>Liste catégories</span>
        </Link>

        <Link
          href="#"
          onClick={() => {
            setShowRuptureStock(true);
            setShowListStock(false);
            setShowListeCathegorie(false);
            setShowAddProduit(false);
          }}
          className="flex items-center gap-2 cursor-pointer p-2 hover:bg-gray-100 hover:text-blue-600 transition-colors rounded-md"
        >
          <AlertCircle className="w-5 h-5" />
          <span>En rupture de stock</span>
        </Link>

        <Link
          href="#"
          className="flex items-center gap-2 cursor-pointer p-2 hover:bg-gray-100 hover:text-blue-600 transition-colors rounded-md"
        >
          <Cpu className="w-5 h-5" />
          <span>Généré avec IA</span>
        </Link>
      </div>

      {/** Small device */}
      <div className="lg:hidden flex flex-col gap-2">
        <Link
          href="#"
          onClick={() => {
            setShowListStock(true);
            setShowAddProduit(false);
            setShowListeCathegorie(false);
            setShowRuptureStock(false);
          }}
          className={clsx(
            buttonVariants({ variant: "outline" }),
            "flex gap-2 items-center justify-center py-2 px-4 rounded-lg shadow-md hover:bg-gray-100 transition"
          )}
        >
          <List className="w-5 h-5" />
          <span>Toutes</span>
        </Link>

        <Link
          href="#"
          onClick={() => {
            setShowAddProduit(true);
            setShowListStock(false);
            setShowListeCathegorie(false);
            setShowRuptureStock(false);
          }}
          className={clsx(
            buttonVariants({ variant: "outline" }),
            "flex gap-2 items-center justify-center py-2 px-4 rounded-lg shadow-md hover:bg-gray-100 transition"
          )}
        >
          <PlusCircle className="w-5 h-5" />
          <span>Nouveau</span>
        </Link>

        <Link
          href="#"
          onClick={() => {
            setShowListeCathegorie(true);
            setShowListStock(false);
            setShowAddProduit(false);
            setShowRuptureStock(false);
          }}
          className={clsx(
            buttonVariants({ variant: "outline" }),
            "flex gap-2 items-center justify-center py-2 px-4 rounded-lg shadow-md hover:bg-gray-100 transition"
          )}
        >
          <Box className="w-5 h-5" />
          <span>Catégories</span>
        </Link>

        <Link
          href="#"
          onClick={() => {
            setShowRuptureStock(true);
            setShowListStock(false);
            setShowListeCathegorie(false);
            setShowAddProduit(false);
          }}
          className={clsx(
            buttonVariants({ variant: "outline" }),
            "flex gap-2 items-center justify-center py-2 px-4 rounded-lg shadow-md hover:bg-gray-100 transition"
          )}
        >
          <AlertCircle className="w-5 h-5" />
          <span>En rupture</span>
        </Link>
      </div>
    </div>
  );
};
