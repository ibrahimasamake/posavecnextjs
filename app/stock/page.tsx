"use client";
import { AppBar } from "@/app/stock/tablestock/appBar";
import { TableView } from "@/app/stock/tablestock/Table-view";
import { Header } from "@/components/Header";
import { AddProduit } from "@/components/stock/AddProduit";
import { ListeCathegorieStock } from "@/components/stock/ListeCathegorieStock";
import { RuptureStock } from "@/components/stock/RupetureStock";
import { useState } from "react";

export default function DemoPage() {
  const [showListStock, setShowListStock] = useState(true);
  const [showAddProduct, setShowAddProduct] = useState(false);
  const [showListeCathegorie, setShowListeCathegorie] = useState(false);
  const [showListeRuptureStock, setShowListeRuptureStock] = useState(false);

  return (
    <div className="h-screen overflow-hidden flex flex-col gap-0">
      <Header></Header>

      <div className="relative flex flex-nowrap flex-col  overflow-y-hidden   lg:flex-row flex-1">
        <div className="sticky top-0  overflow-y-auto shadow-md  bg-white ">
          <div className=" min-h-full lg:block lg:w-64  border-e">
            <AppBar
              setShowListStock={setShowListStock}
              setShowAddProduit={setShowAddProduct}
              setShowListeCathegorie={setShowListeCathegorie}
              setShowRuptureStock={setShowListeRuptureStock}
            />
          </div>
        </div>

        <div className="flex-[2] relative overflow-y-auto bg-white ">
          <div className="h-full">
            <div className="">{showListStock && <TableView />}</div>
            {showAddProduct && <AddProduit></AddProduit>}
            {showListeCathegorie && (
              <ListeCathegorieStock
                closeDialog={setShowListeCathegorie}
                search={""}
              ></ListeCathegorieStock>
            )}
            {showListeRuptureStock && <RuptureStock></RuptureStock>}
          </div>
        </div>
      </div>
    </div>
  );
}
