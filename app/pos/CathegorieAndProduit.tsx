// @flow
'use client'
import * as React from 'react';
import {Card} from "@/components/ui/card";
import {Input} from "@/components/ui/input";
import Image from "next/image";
import {DataListeProducts} from "@/lib/stockdata";
import {Cathegorie, ListeCathegorieStock} from "@/components/stock/ListeCathegorieStock";
import {Button, buttonVariants} from "@/components/ui/button";
import {clsx} from "clsx";
import {ChevronRight, Layers, ListCollapse} from "lucide-react";
import {Separator} from "@/components/ui/separator";
import {Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger} from "@/components/ui/sheet";
import {ScrollShadow} from "@nextui-org/scroll-shadow";
import {useEffect, useState} from "react";
import useCathegorieStore from "@/lib/myStoreZustend";
import {Spinnaker} from "next/dist/compiled/@next/font/dist/google";
import {Spinner} from "@nextui-org/spinner";

type Props = {

};


type PropsProduits = {
    image:string,
    nom: string,
    prix:number,
    quantiteActuel:number,
};
export const Produts = (props: PropsProduits) => {
    return (
        <Card className={' w-56 p-4 '}>
            <div className={'flex border-accent/20 justify-start  gap-2'}>
                <div className={'relative size-16'}>
                    <Image width={400} height={400} className={'absolute rounded-md'}
                           src={props.image} alt={'image'}></Image>
                </div>

                <div className={'flex flex-col justify-around gap-1 w-full'}>
                    <p className={'text-sm text-ellipsis'}> {props.nom}</p>
                    <p className={'text-xs text-accent/99 flex gap-1'}><span><Layers size={16} strokeWidth={0.75}/></span> {props.quantiteActuel}</p>
                    <p className={'text-xs  text-accent/98 self-end border rounded-full bg-amber-800/60 py-1 px-3'}><span>{props.prix}</span><span> F</span></p>
                </div>
            </div>

        </Card>
    );
};
export const CathegorieAndProduit = (props: Props) => {
    const [search,setSearch]= useState("")
    const [dataPoroduit,setDataProduct]= useState<PropsProduits[]>([])
    const cathegorie = useCathegorieStore((state) => state.cathegorie);
    const [openCathegorieBar,setOpenCathegorieBar]=useState(false)
    const [loader,setLoader]=useState(false)

    useEffect(() => {
       async function  getDataProduit(){
            const data =   DataListeProducts(cathegorie)
           setDataProduct(data)
        }

        getDataProduit()

    }, [cathegorie]);

    return (

        <div className={'flex-auto  space-y-2 flex flex-col  bg-background  relative '}>


            <div className={'sticky top-0 z-10 bg-background p-4 space-y-4'}>


                <div className={'text-start'}>Top recherche ....</div>
                <div className={'flex gap-2 justify-start flex-wrap'}>
                    <div className={clsx(buttonVariants({variant: "outline"}), 'text-white rounded-full')}>Telephone
                    </div>
                    <div className={clsx(buttonVariants({variant: "outline"}), 'text-white rounded-full')}>Chargeur
                    </div>
                    <div className={clsx(buttonVariants({variant: "outline"}), 'text-white rounded-full')}>Ecouteur
                    </div>
                    <div className={clsx(buttonVariants({variant: "outline"}),'text-white rounded-full')}>PowerBank</div>
                    <div className={clsx(buttonVariants({variant: "outline"}),'text-white rounded-full')}>Batterie</div>
                    <div className={clsx(buttonVariants({variant: "outline"}),'text-white rounded-full')}>Ecran</div>

                    <div className={'ms-auto'}>
                        <Sheet  open={openCathegorieBar} >
                            <SheetTrigger>
                                <div onClick={
                                    ()=>{
                                        setOpenCathegorieBar(true)
                                    }
                                } className={clsx(buttonVariants({variant: "outline"}),'text-white rounded-full bg-amber-700')}><span>Cathegories</span> <ChevronRight size={16} /> </div>
                            </SheetTrigger>
                            <SheetContent>
                                <SheetHeader>
                                    <SheetTitle>Liste Cathegorie ...</SheetTitle>
                                    <SheetDescription className={'relative h-[35rem]  space-y-2'}>
                                        <div className={'p-2'}>
                                            <Input onChange={(e)=>{
                                                setSearch(e.target.value)
                                            }}
                                                    placeholder={'Recherche par nom'}></Input>
                                        </div>
                                        <ScrollShadow onClick={
                                            ()=>{
                                                setOpenCathegorieBar(false)
                                            }
                                        } hideScrollBar className="w-[300px] h-full">
                                            <ListeCathegorieStock  search={search}></ListeCathegorieStock>
                                        </ScrollShadow>
                                    </SheetDescription>
                                </SheetHeader>
                            </SheetContent>
                        </Sheet>

                    </div>

                </div>
                <Separator className="my-4" />
                <div className={'flex gap-2'}>
                    <div>Cathegorie : </div>
                    <div>{cathegorie}</div>
                </div>
                <Input placeholder={'Recherche par nom du produit...'}></Input>
            </div>

            <div>
                <Spinner></Spinner>
            </div>
            <div className={'flex flex-wrap gap-1  justify-start    overflow-y-auto  '}>

                {dataPoroduit.map((item, id) => (
                    <Produts key={id} image={item.image} nom={item.nom} quantiteActuel={item.quantiteActuel}
                             prix={item.prix}/>
                ))}
            </div>


        </div>


    )
        ;
};