'use client'
import * as React from 'react';
import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { clsx } from "clsx";
import { ChevronRight, CircleX, Layers } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { ScrollShadow } from "@nextui-org/scroll-shadow";
import useCathegorieStore from "@/lib/myStoreZustend";
import { Spinner } from "@nextui-org/spinner";
import { DataListeProducts } from "@/lib/posProduit";
import Link from "next/link";
import { ListeCathegorieStock } from "@/components/stock/ListeCathegorieStock";

type Props = {};

type PropsProduits = {
    image: string,
    nom: string,
    cathegorie: string,
    prix: number,
    quantiteActuel: number,
};

export const Produts = (props: PropsProduits) => {
    return (
        <Card className={'relative w-60 p-4'}>
            <div className={'flex border-accent/20 justify-start gap-2'}>
                <div className={'relative size-16'}>
                    <Image width={400} height={400} className={'absolute rounded-md'} src={props.image} alt={'image'} />
                </div>
                <div className={'flex flex-col justify-around gap-1 w-full'}>
                    <p className={'text-sm text-ellipsis'}>{props.nom}</p>
                    <p className={'text-xs text-accent/99 flex gap-1'}>{props.cathegorie}</p>
                    <p className={'text-xs text-accent/99 flex gap-1'}>
                        <span><Layers size={16} strokeWidth={0.75} /></span> {props.quantiteActuel}
                    </p>
                    <p className={'text-xs text-accent/98 self-end border rounded-full bg-amber-800/60 py-1 px-3'}>
                        <span>{props.prix}</span><span> F</span>
                    </p>
                </div>
            </div>
            <Card className={'absolute top-0 right-0 w-6 h-6 p-1 m-1 rounded-full flex opacity-40 justify-center'}>
                <small>i</small>
            </Card>
        </Card>
    );
};

const Rac: PropsRaccourcieCathrgorie[] = [
    { nom: "Tablets" },
    { nom: "ecran" },
    { nom: "batterie" },
    { nom: "ecouteur" },
];

type PropsRaccourcieCathrgorie = {
    nom: string
};

export const CathegorieRaccourcie = (props: PropsRaccourcieCathrgorie) => {
    const updateCathegorie = useCathegorieStore((state) => state.updateCathegorie);
    const setLoader = useCathegorieStore((state) => state.setloader);

    return (
        <Button onClick={() => {
            setLoader(true);
            setTimeout(() => setLoader(false), 300);
            updateCathegorie(props.nom);
        }} className={clsx('text-sm rounded-md px-5 self-center py-2 hover:bg-accent/50')}>
            {props.nom}
        </Button>
    );
};

type RaccourcieBarType = {
    loader: boolean
};

export const RaccourcieBar = (props: RaccourcieBarType) => {
    const [openCathegorieBar, setOpenCathegorieBar] = useState(false);
    const setLoader = useCathegorieStore((state) => state.setloader);
    const search = useCathegorieStore((state) => state.search);
    const setSearch = useCathegorieStore((state) => state.setSearch);

    return (
        <Card className={' rounded-none flex gap-2 justify-start flex-wrap p-2'}>
            {Rac.map((item, i) => (
                <CathegorieRaccourcie key={i} nom={item.nom} />
            ))}
            <div className={'ms-auto'}>
                <Sheet open={openCathegorieBar}>
                    <SheetTrigger>
                        <Button onClick={() => setOpenCathegorieBar(true)} className={clsx('')}>
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

export const CathegorieAndProduit = (props: Props) => {
    const [dataProduit, setDataProduct] = useState<PropsProduits[]>([]);
    const cathegorie = useCathegorieStore((state) => state.cathegorie);
    const loader = useCathegorieStore((state) => state.loader);

    useEffect(() => {
        async function getDataProduit() {
            const data = DataListeProducts(cathegorie);
            setDataProduct(data);
        }

        getDataProduit();
    }, [cathegorie]);

    return (
        <Card className={'flex-auto space-y-2 flex flex-col h-full relative px-2'}>
            <div className={'sticky top-0 z-10 bg-background space-y-1 py-4'}>
                <Card className={'p-2 rounded-none flex'}>
                    <Link href={'/'} className={"ms-auto"}>Quitter</Link>
                </Card>
                <RaccourcieBar loader={loader} />
                <div className={'flex gap-2'}>
                    <div>{cathegorie.toUpperCase()}</div>
                </div>
                <Input placeholder={'Recherche par nom du produit...'} />
            </div>
            {loader && (
                <div className={'flex justify-center items-center pt-20'}>
                    <Spinner />
                </div>
            )}
            {!loader && (
                <div className={'flex flex-wrap gap-1 justify-start pb-10 overflow-y-auto'}>
                    {dataProduit && dataProduit.map((item, id) => (
                        <Produts key={id} image={item.image} nom={item.nom} cathegorie={item.cathegorie} quantiteActuel={item.quantiteActuel} prix={item.prix} />
                    ))}
                </div>
            )}
        </Card>
    );
};
