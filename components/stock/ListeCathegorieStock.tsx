// @flow
import * as React from 'react';
import {useEffect, useState} from "react";
import useCathegorieStore from "@/lib/myStoreZustend";
import {Card} from "@/components/ui/card";
import {DataListeCathegorie} from "@/lib/posProduit";



type CathegorieType = {
    image: string;
    nom: string;
    quantite: number;
};

export const Cathegorie = (props:
           {
           image: string;
           nom: string;
           quantite: number;
           }) => {
    const updateCathegorie = useCathegorieStore((state) => state.updateCathegorie);

    return (
        <Card onClick={() => {
            updateCathegorie(props.nom)
            console.log(props.nom)

        }}
              className={'flex-1  hover:bg-emerald-800 p-2 relative '}>
            <div className={'relative w-24 h-24 mx-auto   '}>
                <img className={'absolute object-cover  rounded-full'} src={props.image} alt={'image'}/>
            </div>
            <div className={'flex gap-1 justify-center  p-1 text-xs text-white'}>
                <p className={''}>{props.nom}</p>
            </div>
            <div className={'absolute  top-0  bg-amber-700/90 rounded-b rounded-rb p-2'}> {props.quantite}</div>


        </Card>
    );
};

interface Props {
    search: string

}

export const ListeCathegorieStock : React.FC<Props>=({search}) => {
    const  [listecathrgorie,setListeCathegorie]=useState<CathegorieType[]>([]);

    useEffect(() => {
        async function  recupteData(){
            const data= DataListeCathegorie(search);

            setListeCathegorie(data)
        }
        recupteData()

    }, [search]);


    return (
        <div className={' flex flex-col gap-2'}>
            <div className={'flex  flex-row  flex-wrap  justify-around gap-4   '}>

                {listecathrgorie.map((item, i) => (

                    <Cathegorie    key={i} nom={item.nom} image={item.image} quantite={item.quantite}  />
                ))}

            </div>
        </div>

    )
};


