
// @flow
import { clsx } from "clsx";
import {Button, buttonVariants} from "@/components/ui/button";
import * as React from "react";
import Link from "next/link";
import { Bot, BrainCircuit, Combine, Layers, LayoutList, PackagePlus } from "lucide-react";
import {fa} from "@faker-js/faker";

type Props = {
    setShowAddProduit: (value: boolean) => void,
    setShowListStock: (value: boolean) => void,
    setShowListeCathegorie: (value: boolean) => void,
    setShowRuptureStock: (value: boolean) => void,
};

export const AppBar = ({setShowAddProduit,setShowListStock,setShowListeCathegorie,setShowRuptureStock}: Props) => {

    return (
        <div className="lg:fixed bg-background top-16 z-10 py-2">
            <h3 className="text-lg pb-4">Gestion du Stock</h3>

            <div className="ps-2 lg:flex lg:flex-col items-start flex-wrap gap-2 hidden ">
                <Link href={''}
                      onClick={() => {
                          setShowListStock(true)

                          {/*Update*/
                          }

                          setShowAddProduit(false)
                          setShowListeCathegorie(false)
                          setShowRuptureStock(false)

                      }}
                      className={'flex gap-2 items-center'}>
                    <LayoutList size={16}/>
                    <span className="hidden lg:block">Liste des stocks</span>
                </Link>
                <Link href={''}
                      onClick={() => {
                          setShowAddProduit(true)

                          {/*Update*/
                          }

                          setShowListStock(false)
                          setShowListeCathegorie(false)
                          setShowRuptureStock(false)

                      }}
                      className={'flex items-center gap-2'}
                >
                    <PackagePlus size={16}/>
                    <span className="hidden lg:block">Ajouter un produit</span>
                </Link>

                <Link href={''} onClick={() => {

                    setShowListeCathegorie(true)

                    {/*Update*/
                    }

                    setShowListStock(false)
                    setShowAddProduit(false)
                    setShowRuptureStock(false)

                }}
                      className={'flex items-center gap-2 '}>
                    <Combine size={16}/>
                    <span className="hidden lg:block">Liste catégories</span>
                </Link>
                <Link href={''}
                      onClick={() => {
                          setShowRuptureStock(true)

                          {/*Update*/
                          }

                          setShowListStock(false)
                          setShowListeCathegorie(false)
                          setShowAddProduit(false)
                      }}
                      className={'flex items-center gap-2'}>
                    <Layers size={16}/>
                    <span className="hidden lg:block">En rupture de stock</span>
                </Link>


                <Link href={''} className={'flex items-center gap-2'}>
                    <BrainCircuit size={16}/>
                    <span className="hidden lg:block">Généré avec IA</span>
                </Link>
            </div>

            {/**small device*/}

            <div className="ps-2 flex lg:hidden lg:flex-col items-start flex-wrap gap-2">
                <Link href={''}
                      onClick={() => {
                          setShowListStock(true)

                          {/*Update*/
                          }

                          setShowAddProduit(false)
                          setShowListeCathegorie(false)
                          setShowRuptureStock(false)

                      }}
                      className={clsx(buttonVariants({variant: "outline"}),'flex gap-2 items-center')}>
                    <LayoutList size={16}/>
                    <span className="">Toutes</span>
                </Link>
                <Link href={''}
                      onClick={() => {
                          setShowAddProduit(true)

                          {/*Update*/
                          }

                          setShowListStock(false)
                          setShowListeCathegorie(false)
                          setShowRuptureStock(false)

                      }}
                      className={clsx(buttonVariants({variant: "outline"}),'flex gap-2 items-center')}
                >
                    <PackagePlus size={16}/>
                    <span className="">Nouveau</span>
                </Link>

                <Link href={''} onClick={() => {

                    setShowListeCathegorie(true)

                    {/*Update*/
                    }

                    setShowListStock(false)
                    setShowAddProduit(false)
                    setShowRuptureStock(false)

                }}
                      className={clsx(buttonVariants({variant: "outline"}),'flex gap-2 items-center')}>
                    <Combine size={16}/>
                    <span className="">Catégories</span>
                </Link>
                <Link href={''}
                      onClick={() => {
                          setShowRuptureStock(true)

                          {/*Update*/
                          }

                          setShowListStock(false)
                          setShowListeCathegorie(false)
                          setShowAddProduit(false)
                      }}
                      className={clsx(buttonVariants({variant: "outline"}),'flex gap-2 items-center')}>
                    <Layers size={16}/>
                    <span className="">En rupture </span>
                </Link>



            </div>
        </div>
    );
};
