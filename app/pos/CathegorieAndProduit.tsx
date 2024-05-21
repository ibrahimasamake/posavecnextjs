// @flow
import * as React from 'react';
import {Card} from "@/components/ui/card";
import {Input} from "@/components/ui/input";
import Image from "next/image";
import {Data_Cathegorie, Data_Produitc} from "@/lib/stockdata";
import {Cathegorie, ListeCathegorieStock} from "@/components/stock/ListeCathegorieStock";
import {ResizableHandle, ResizablePanel, ResizablePanelGroup} from "@/components/ui/resizable";
import {Button, buttonVariants} from "@/components/ui/button";
import {clsx} from "clsx";
import {ChevronRight, Layers, ListCollapse} from "lucide-react";
import {Separator} from "@/components/ui/separator";
import {Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger} from "@/components/ui/sheet";
import {ScrollShadow} from "@nextui-org/scroll-shadow";

type Props = {

};


type PropsCathegorie = {
    image:string,
    nom: string,
    quantite:number,
};
export const Cathegories = (props: PropsCathegorie) => {
    return (
        <div className={'flex flex-col justify-center items-center gap-2'}>
            <div className={'relative size-16'}>
                <Image width={400} height={400} className={'absolute rounded-md'}
                       src={props.image} alt={'image'}></Image>
            </div>
            <p className={'text-xs'}> {props.nom}</p>
            <p className={'text-xs'}>{props.quantite}</p>
        </div>
    );
};
type PropsProduits = {
    image:string,
    nom: string,
    prix:number,
    quantiteActuel:number,
};
export const Produts = (props: PropsProduits) => {
    return (
        <Card className={'flex border-accent/20 justify-start  gap-2 w-56 p-4 '}>

            <div className={'relative size-16'}>
                <Image width={400} height={400} className={'absolute rounded-md'}
                       src={props.image} alt={'image'}></Image>
            </div>

            <div className={'flex flex-col justify-around gap-1 w-full'}>
                <p className={'text-md'}> {props.nom}</p>
                <p className={'text-xs text-accent/99 flex gap-1'}><span><Layers size={16} strokeWidth={0.75} /></span> {props.quantiteActuel}</p>

                <p className={'text-xs  self-end border rounded-full bg-amber-800 p-1'}>
                    <span>{props.prix}</span><span> F</span></p>

            </div>
        </Card>
    );
};
export const CathegorieAndProduit = (props: Props) => {
    return (

        <div className={'flex-auto  space-y-2 flex flex-col   relative '}>


            <div className={'sticky top-0 z-10 bg-background p-4 space-y-4'}>
                <div className={'text-start'}>Top recherche ....</div>
                <div className={'flex gap-2 justify-start flex-wrap'}>
                    <div className={clsx(buttonVariants({variant: "outline"}),'text-white rounded-full')}>Telephone</div>
                    <div className={clsx(buttonVariants({variant: "outline"}),'text-white rounded-full')}>Chargeur</div>
                    <div className={clsx(buttonVariants({variant: "outline"}),'text-white rounded-full')}>Ecouteur</div>
                    <div className={clsx(buttonVariants({variant: "outline"}),'text-white rounded-full')}>PowerBank</div>
                    <div className={clsx(buttonVariants({variant: "outline"}),'text-white rounded-full')}>Batterie</div>
                    <div className={clsx(buttonVariants({variant: "outline"}),'text-white rounded-full')}>Ecran</div>

                    <div className={'ms-auto'}>
                        <Sheet>
                            <SheetTrigger>
                                <div className={clsx(buttonVariants({variant: "outline"}),'text-white rounded-full bg-amber-700')}><span>Cathegories</span> <ChevronRight size={16} /> </div>
                            </SheetTrigger>
                            <SheetContent>
                                <SheetHeader>
                                    <SheetTitle>Liste Cathegorie ...</SheetTitle>
                                    <SheetDescription className={'relative h-[35rem] overflow-y-auto'}>

                                        <ScrollShadow hideScrollBar className="w-[300px] h-full">
                                            <ListeCathegorieStock></ListeCathegorieStock>
                                        </ScrollShadow>
                                    </SheetDescription>
                                </SheetHeader>
                            </SheetContent>
                        </Sheet>

                    </div>

                </div>
                <Separator className="my-4" />

                <Input placeholder={'Recherche par nom du produit...'}></Input>
            </div>


            <div className={'flex flex-wrap gap-1  justify-start    overflow-y-auto  '}>

                {Data_Produitc.map((item, id) => (
                    <Produts key={id} image={item.image} nom={item.nom} quantiteActuel={item.quantiteActuel}
                             prix={item.prix}/>
                ))}
            </div>


        </div>


    )
        ;
};