'use client'
import * as React from 'react';
import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { clsx } from "clsx";
import {ChevronRight, CircleUser, CircleX, DoorClosed, FileLock2, FileSpreadsheet, Layers} from "lucide-react";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { ScrollShadow } from "@nextui-org/scroll-shadow";
import useCathegorieStore, {useProductPosStore, useSelectProductClient} from "@/lib/myStoreZustend";
import { Spinner } from "@nextui-org/spinner";
import {DataListeProducts} from "@/lib/posProduit";
import Link from "next/link";
import { ListeCathegorieStock } from "@/components/stock/ListeCathegorieStock";
import {HoverCard, HoverCardContent, HoverCardTrigger} from "@/components/ui/hover-card";

type Props = {};

type PropsProduits = {
    image: string,
    nom: string,
    cathegorie: string,
    prix: number,
    quantiteActuel: number,
};

export const Produts = (props: PropsProduits) => {

    const setProduct = useSelectProductClient(state => state.setProduct)
    const getProduct = useSelectProductClient(state => state.getProduct)
    const handleClick = () => {
        setProduct({
            image: props.image,
            prix: props.prix,
            quantite: 1
        });
        console.log('click ',getProduct(props.image,props.prix,1))
    };

    return (
        <Card className={'relative w-60 p-2'} onClick={handleClick}>

            <div className={'flex border-accent/20 justify-start gap-1'}>

                <div className={'relative'}>
                    <Image width={400} height={400} className={'size-20 rounded-md'} src={props.image} alt={'image'}/>
                </div>

                <div className={'flex flex-col justify-start gap-0  w-auto'}>
                    <p className={'text-sm '}>{props.nom}</p>

                    <div className={'flex gap-1 flex-col'}>
                        <p className={'text-xs text-accent/99 flex gap-1'}>{props.cathegorie}</p>

                        <p className={'text-xs text-accent/99 flex gap-1'}><span><Layers size={16} strokeWidth={0.75}/></span> {props.quantiteActuel}
                        </p>

                    </div>
                </div>

            </div>

            <div className={'flex  justify-around gap-1 mt-1'}>
                <p className={'text-xs flex-[2]   self-end bg-accent/30  rounded-full border   py-1 px-3'}>
                <span>{props.prix}</span><span> FCFA</span>
                </p>

                    <HoverCard >
                        <HoverCardTrigger className={' top-0 right-0 w-6 h-6 p-1 border border-b-orange-600 rounded-full flex justify-center'}> <small>i</small></HoverCardTrigger>
                        <HoverCardContent>
                            The React Framework – created and maintained by @vercel.
                        </HoverCardContent>
                    </HoverCard>

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

export const RaccourcieBar = (props: RaccourcieBarType) => {
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
                <div className={'flex flex-wrap gap-1 justify-start pb-10 overflow-y-auto'}>
                    {dataProduit && dataProduit.map((item, id) => (
                        <Produts key={id} image={item.image} nom={item.nom} cathegorie={item.cathegorie} quantiteActuel={item.quantiteActuel} prix={item.prix} />
                    ))}
                </div>
            )}
        </Card>
    );
};
