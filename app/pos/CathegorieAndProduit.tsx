'use client'
import * as React from 'react';
import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { clsx } from "clsx";
import {ChevronRight, CircleX, DoorClosed, FileLock2, FileSpreadsheet, Layers, Plus} from "lucide-react";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { ScrollShadow } from "@nextui-org/scroll-shadow";
import useCathegorieStore, {
    useProductPosStore,
    useSelectProductClient
} from "@/lib/myStoreZustend";
import { Spinner } from "@nextui-org/spinner";
import {DataListeProducts} from "@/lib/posProduit";
import Link from "next/link";
import { ListeCathegorieStock } from "@/components/stock/ListeCathegorieStock";
import {HoverCard, HoverCardContent, HoverCardTrigger} from "@/components/ui/hover-card";
import {eventSelectUserProductPos, eventSelectUserProductQuantitePos} from "@/lib/rxjsEvent"
import {datasListeSelectProduct} from "@/app/stock/tablestock/ListeSelect";
import {useRouter} from "next/router";
import {capitalize} from "@nextui-org/shared-utils";

type Props={}

type PropsProduits = {
    image: string,
    nom: string,
    cathegorie: string,
    prix: number,
    quantiteActuel: number,
    id:number
};


export const Produts = (props: PropsProduits) => {
    const setProduct = useSelectProductClient(state => state.selectedProduct)
    const selectsProduct = useSelectProductClient(state => state.selectedList)
    const handleClick = () => {
       const data= setProduct({
            image: props.image,
            prix: props.prix,
            quantite: 1,
            name:props.nom,
           id:props.id
        });

        eventSelectUserProductPos.next(data)
        eventSelectUserProductQuantitePos.next(data.prix)

    };
    return (
        <Card
            className="relative w-60 pt-1 hover:bg-gray-100 border border-gray-300 hover:shadow-lg transition-all duration-300 ease-in-out">
            <p className="text-sm ps-2 text-center font-semibold text-gray-800 text-ellipsis text-nowrap w-full  overflow-hidden">{capitalize(props.nom)}</p>

            <div className="flex justify-start gap-2 p-2">

                <div className="flex-[1.5] w-24 h-24">
                    <Image width={500} height={500} className="rounded-md size-full object-cover hover:animate-pulse" src={props.image} alt="image"/>
                </div>


            </div>
            <div className=" flex-1 flex flex-col justify-start gap-1 w-auto">
                <div className="flex gap-1 justify-center ">
                    <p className="text-xs text-gray-500 text-ellipsis overflow-hidden">{props.cathegorie}</p>
                    <p className="text-xs text-gray-500 flex items-center gap-1">
                        <Layers size={16} strokeWidth={0.75}/> {props.quantiteActuel}
                    </p>
                </div>
            </div>

            <div className="flex justify-between flex-row-reverse  items-center rounded-b bg-gray-200/10 gap-2  p-1">
                <HoverCard>
                    <HoverCardTrigger
                        className="relative w-6 h-6 p-1 rounded-full flex justify-center items-center bg-orange-500 text-white hover:bg-orange-700 transition-all duration-300">
                        <small>i</small>
                    </HoverCardTrigger>
                    <HoverCardContent
                        className="p-2 text-sm text-gray-700 bg-white border border-gray-300 rounded shadow-lg">
                        The React Framework – created and maintained by @vercel.
                    </HoverCardContent>
                </HoverCard>

                <p className="text-xs text-orange-600 rounded-full border border-orange-600 py-1 px-3 ">
                    <span>{props.prix}</span> <span>FCFA</span>
                </p>


                <Button onClick={handleClick}
                        className="bg-green-500 text-white w-8 h-8 p-1 rounded-full hover:bg-green-700 transition-all duration-300">
                    <Plus size={14}/>
                </Button>
            </div>
        </Card>

    );
};

const Rac: PropsRaccourcieCathrgorie[] = [
    {nom: "Tablets"},
    {nom: "ecran"},
    {nom: "batterie"},
    {nom: "ecouteur"},
];

type PropsRaccourcieCathrgorie = {
    nom: string
};

export const CathegorieRaccourcie = (props: PropsRaccourcieCathrgorie) => {
    const updateCathegorie = useCathegorieStore((state) => state.updateCathegorie);
    const setSearch = useProductPosStore((state) => state.setSearch);
    const setLoader = useCathegorieStore((state) => state.setloader);

    return (
        <Button onClick={() => {
            setLoader(true);
            setTimeout(() => setLoader(false), 300);
            updateCathegorie(props.nom);
            setSearch("");
        }} className={clsx('text-xs rounded-md px-5 self-center py-2 hover:bg-accent/50')}>
            {props.nom}
        </Button>
    );
};

type RaccourcieBarType = {
    loader: boolean
};

export const RaccourcieBar = (props:RaccourcieBarType) => {
    const [openCathegorieBar, setOpenCathegorieBar] = useState(false);
    const setLoader = useCathegorieStore((state) => state.setloader);
    const search = useCathegorieStore((state) => state.search);
    const setSearch = useCathegorieStore((state) => state.setSearch);

    return (
        <Card className={' rounded-none flex gap-2 justify-start flex-wrap p-2 '}>
            {Rac.map((item, i) => (
                <CathegorieRaccourcie key={i} nom={item.nom} />
            ))}
            <div className={'ms-auto'}>
                <Sheet open={openCathegorieBar}>
                    <SheetTrigger>
                        <Button onClick={() => setOpenCathegorieBar(true)} className={clsx('text-xs')}>
                            <span>Cathegories</span> <ChevronRight size={16} />
                        </Button>
                    </SheetTrigger>
                    <SheetContent className={''}>
                        <SheetHeader className={''}>
                            <SheetTitle className={''}>
                                <div className={'p-4'}>
                                    <div className={''}>
                                        Liste Cathegorie
                                    </div>
                                    <div onClick={() => setOpenCathegorieBar(false)} className={'absolute top-0 right-0 bg-background p-4 z-10 hover:bg-accent/90'}>
                                        <CircleX />
                                    </div>
                                </div>
                            </SheetTitle>
                            <SheetDescription className={'relative h-[35rem] space-y-2'}>
                                <div className={''}>
                                    <Input onChange={(e) => setSearch(e.target.value)} placeholder={'Recherche par nom'} />
                                </div>
                                <ScrollShadow onClick={() => {
                                    setLoader(true);
                                    setTimeout(() => setLoader(false), 300);
                                    setOpenCathegorieBar(false);
                                }} hideScrollBar className="w-[300px] h-full">
                                    <ListeCathegorieStock search={search} />
                                </ScrollShadow>
                            </SheetDescription>
                        </SheetHeader>
                    </SheetContent>
                </Sheet>
            </div>
        </Card>
    );
};

export const CathegorieAndProduit = () => {
    const [dataProduit, setDataProduct] = useState<PropsProduits[]>([]);
    const cathegorie = useCathegorieStore((state) => state.cathegorie);
    const loader = useCathegorieStore((state) => state.loader);

    const search = useProductPosStore((state) => state.search);
    const setSearch = useProductPosStore((state) => state.setSearch);


    useEffect(() => {
        async function getDataProduitByCathegorie() {
            const data = await DataListeProducts(cathegorie, search);
            setDataProduct(data);
        }

        getDataProduitByCathegorie();
    }, [cathegorie, search]);


    return (
        <Card className={'flex-auto space-y-2 flex flex-col h-full relative px-2 rounded-none'}>
            <div className={'sticky top-0 z-10 bg-background space-y-1 py-4'}>

                <Card className={'p-2 rounded-none flex gap-2'}>
                    <Button  className={'text-xs'} ><FileLock2  size={16}  /> Cloturation</Button>
                   <Link href={'/vente'}><Button className={'text-xs'}><FileSpreadsheet size={16} /> Journal des ventes</Button></Link>
                    <Link href={'/'} className={"ms-auto "}><Button className={'bg-background text-xs '}><DoorClosed /> Quitter</Button></Link>
                </Card>

                <RaccourcieBar loader={loader} />
                <div className={'flex gap-2'}>
                    <div>{cathegorie.toUpperCase()}</div>
                </div>
                <Input placeholder={'Recherche par nom du produit...'} value={search} onChange={(e)=>{ setSearch(e.target.value)}} />
            </div>
            {loader && (
                <div className={'flex justify-center items-center pt-20'}>
                    <Spinner />
                </div>
            )}
            {!loader && (
                <div className={'flex flex-wrap gap-2 justify-start pb-10 overflow-y-auto'}>
                    {dataProduit && dataProduit.map((item, id) => (
                        <Produts key={id}  id={item.id} image={item.image} nom={item.nom} cathegorie={item.cathegorie} quantiteActuel={item.quantiteActuel} prix={item.prix} />
                    ))}
                </div>
            )}
        </Card>
    );
};
