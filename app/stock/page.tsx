'use client';
import { AppBar } from "@/app/stock/tablestock/appBar";
import { TableView } from "@/app/stock/tablestock/Table-view";
import { useState } from "react";
import {AddProduit} from "@/components/stock/AddProduit";
import {ListeCathegorieStock} from "@/components/stock/ListeCathegorieStock";
import {RuptureStock} from "@/components/stock/RupetureStock";

export default function DemoPage() {
    const [showListStock, setShowListStock] = useState(true);
    const [showAddProduct, setShowAddProduct] = useState(false);
    const [showListeCathegorie, setShowListeCathegorie] = useState(false);
    const [showListeRuptureStock, setShowListeRuptureStock] = useState(false);

    return (
        <div className="p-4 overflow-y-auto flex flex-col gap-2">
            <div className="flex gap-2 flex-nowrap flex-col lg:flex-row">
                <div className="relative lg:block lg:w-72 border-e">
                    <AppBar   setShowListStock={setShowListStock} setShowAddProduit={setShowAddProduct} setShowListeCathegorie={setShowListeCathegorie} setShowRuptureStock={setShowListeRuptureStock} />
                </div>
                <div className="flex-[2]">
                    {showListStock && <TableView />}
                    {showAddProduct && <AddProduit></AddProduit>}
                    {showListeCathegorie && <ListeCathegorieStock></ListeCathegorieStock>}
                    {showListeRuptureStock && <RuptureStock></RuptureStock>}

                </div>
            </div>
        </div>
    );
}
