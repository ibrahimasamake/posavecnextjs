// @flow
import * as React from 'react';
import {Section} from "@/components/Section";
import {clsx} from "clsx";
import {Sectionmeduin} from "@/components/Sectionmeduin";
import {Specing} from "@/components/Specing";
import {buttonVariants} from "@/components/ui/button";
import {Car, Filter, TrendingUp} from "lucide-react";
import {cn} from "@/lib/utils";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import {Card} from "@/components/ui/card";
import Image from "next/image";
import {columns, StockZod} from "@/app/stock/tablestock/columns";
import {generateElectronicProducts} from "@/lib/stockdata";
import {DataTable} from "@/app/stock/tablestock/data-table";
import {el} from "@faker-js/faker";
import {Children} from "path-scurry";
import {PropsWithChildren} from "react";

type Props = {

};
async function getData(): Promise<StockZod[]> {
    // Fetch data from your API here.
    return generateElectronicProducts

    // ...

}

const TOpVendeurdata=[
    {
        image: `https://source.unsplash.com/3000x3000/?random=56`,
        nom:'Ibrahima Samake',
        vente:74656,
    },
    {
        image: `https://source.unsplash.com/3000x3000/?random=48`,
        nom:'Ibrahima Samake',
        vente:74656,
    },
    {
        image: `https://source.unsplash.com/3000x3000/?random=545`,
        nom:'Ibrahima Samake',
        vente:74656,
    },
    {
        image: `https://source.unsplash.com/3000x3000/?random=40`,
        nom:'Ibrahima Samake',
        vente:74656,
    }
]
export function Topvendeuritems( ){

    return(
        TOpVendeurdata.map((element,id)=>{
            return (
                <div key={id} className={'flex  flex-col gap-2'}>

                    <div className={'relative w-28 h-28 self-center  '}>
                        <Image width={400} height={400} className={'absolute rounded-full'} src={element.image}
                               alt={''}></Image>

                    </div>
                    <h2 className={'text-xs'}>{element.nom}</h2>
                    <div className={'text-xs text-center justify-center flex gap-2 '}>
                        <p className={'self-end'}>{element.vente}</p>
                        <TrendingUp size={20} className={' inline  self-start'}></TrendingUp>
                    </div>
                </div>
            )
        })
    )
}

export function Topvendeur(props: Props) {
    return (
        <Card className={'flex-1 flex flex-col gap-2 '}>

            <div className={'p-4 flex flex-col gap-2'}>

            <div className={'text-center md:text-sta'}>
                    <h2 className={clsx('text-2xl  font-bold')}>Top Vendeur</h2>
                    <p className={'text-xs p-2'}>Les vendeurs qui ont le plus vendue </p>
                </div>

                <div className={' flex flex-col  gap-3 flex-wrap overflow-y-auto'}>
                    <div className={'p-4 flex justify-center gap-4 '}>

                       <Topvendeuritems></Topvendeuritems>

                    </div>


                </div>
            </div>
        </Card>
    );
};

const DataTOpVendeur = [
    {
        image: "https://source.unsplash.com/100x100/?product&random=88",
        title: "samsung A22",
        prix: 74000,
    },
    {
        image: "https://source.unsplash.com/100x100/?product&random=8788",
        title: "samsung A22",
        prix: 74000,
    },
    {
        image: "https://source.unsplash.com/100x100/?product&random=878",
        title: "samsung A22",
        prix: 74000,
    },
    {
        image: "https://source.unsplash.com/100x100/?product&random=848",
        title: "samsung A22",
        prix: 74000,
    },
    {
        image: "https://source.unsplash.com/100x100/?product&random=788",
        title: "samsung A22",
        prix: 74000,
    }
]

export function  Itemtopvendeur(props:PropsWithChildren<{className?:string}>){
    return (
        DataTOpVendeur.map((element,id)=> {
            return (
                    <div key={id} className={clsx('  flex  flex-col gap-3  ',props.className)}>

                        <div className={'relative w-28 h-28 self-center  '}>
                            <Image width={400} height={400} className={'absolute rounded'} src={element.image} alt={''}></Image>

                        </div>
                        <h2 className={'self-center text-xs '}>{element.title} </h2>
                        <p className={'self-center  text-xs'}>{element.prix} fcfa</p>
                    </div>
            )
        })
    )
}

export function Topvente(props: {}) {

    return (

        <Card className={'flex-[2] p-4'}>

            <div className={'space-y-4'}>

                <div className={'text-center md:text-start'}>
                    <h2 className={clsx('text-2xl font-bold ')}>Top Produits Vendues</h2>
                    <p className={'p-2 text-md font-sans'}>Les produits les plus acheter et les populaires</p>
                </div>


                <div  className={'flex overflow-x-auto md:justify-center pb-2  gap-4 '}>
                    <Itemtopvendeur className={''} ></Itemtopvendeur>
                </div>
            </div>
        </Card>

    )


}

export default async function Page(props: Props) {
    const data = await getData()

    return (
        <Section className={clsx('flex flex-col   gap-2 my-2 justify-around mt-3 overflow-hidden')}>

            <div className=" flex-1 flex flex-col lg:flex-row   gap-4 p-4">

                <Topvente></Topvente>

                <Topvendeur></Topvendeur>


            </div>
            <div className="flex-[2] flex flex-col h-[32rem] gap-2 overflow-y-auto">
                <div className={'flex gap-1 flex-wrap'}>
                    <div className={clsx(buttonVariants({variant: "outline"}))}
                    >Cloture Vente
                    </div>
                    <div className={clsx(buttonVariants({variant: "outline"}))}>Aujourd'hui</div>
                    <div className={clsx(buttonVariants({variant: "outline"}))}>Hier</div>
                    <div className={clsx(buttonVariants({variant: "outline"}))}>cette Semaine</div>
                </div>
                <DataTable columns={columns} data={data}/>

            </div>


        </Section>
    );
};