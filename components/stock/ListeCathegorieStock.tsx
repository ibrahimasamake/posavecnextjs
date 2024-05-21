// @flow
import * as React from 'react';
import * as fs from "fs";
import {useState} from "react";
import {Section} from "@/components/Section";
import {faker} from "@faker-js/faker";
import {TableCell, TableRow} from "@/components/ui/table";
import Image from "next/image";
import {Car} from "lucide-react";
import {Card} from "@/components/ui/card";


type stock={image:string,nom:string}
const Stock:stock[] = [];

for (let i = 0; i < 40; i++) {

    const product = {
        image: `https://source.unsplash.com/3000x3000/?random=${i}`,
        nom: 'Electronic',
    };
    Stock.push(product);
}


export const Cathegorie = (props: {
    title: string;
    image: string;
}) => {
    return (
        <div className={'flex-1 w-32 h-36'}>
            <div className={'relative w-32 h-32  mx-auto '}>
                <img className={'absolute object-cover rounded-tl rounded-full'} src={props.image} alt={'image'}/>

            </div>
            <div className={'flex gap-1 justify-center  p-1 text-xs text-white'}>
                <p className={''}>{props.title}</p>
                <div> (40)</div>
            </div>
        </div>
    );
};

interface Props{

}

export const ListeCathegorieStock : React.FC<Props>=({}) => {

    return (
        <div className={' flex flex-col gap-2'}>
            <div className={'flex  flex-row  flex-wrap  justify-around gap-4   '}>

                {Stock.map((item, i) => (
                    <Cathegorie key={i} title={item.nom} image={item.image}></Cathegorie>
                ))}

            </div>
        </div>

    )
};


