import * as React from 'react';
import { CathegorieAndProduit } from "@/app/pos/CathegorieAndProduit";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import { DialogDemo } from "@/app/pos/selectedClient";

type Props = {};

type PropsCalcul = {
    value: string
};

const CalculData: PropsCalcul[] = [
    { value: '1' }, { value: '2' }, { value: '3' },
    { value: '4' }, { value: '5' }, { value: '6' },
    { value: '7' }, { value: '8' }, { value: '9' },
    { value: '0' }, { value: '=' }, { value: '+' }
];

export function CalculItems(props: PropsCalcul) {
    return (
        <div className={'bg-amber-50 md:size-10 lg:size-20 text-black rounded hover:bg-amber-700 flex items-center justify-center text-xl'}>
            <p>{props.value}</p>
        </div>
    );
}

export function Calculatrice() {
    return (
        <div className={'flex flex-wrap justify-center last:ms-auto p-1 gap-2'}>
            {CalculData.map((item, index) => (
                <CalculItems key={index} value={item.value}></CalculItems>
            ))}
        </div>
    );
}

export function ListeSelect() {
    return (
        <div className={'flex flex-col gap-2 flex-grow overflow-y-auto'}>

        </div>
    );
}

type clients = {
    nom: string,
    prenom: string,
    id: number
}

export default function Page(props: Props) {
    let clients: clients[] = [
        { nom: 'James', prenom: 'siko', id: 1 },
        { nom: 'James', prenom: 'siko', id: 2 },
        { nom: 'James', prenom: 'siko', id: 3 }
    ];

    return (
        <div className={'flex flex-col lg:flex-row relative h-screen overflow-hidden'}>
            <Card className="flex-1 sticky top-0 rounded py-3">
                <div className="flex flex-col p-2 gap-2 h-full">
                    <div className="space-y-2 flex-grow">

                        <div className={'flex flex-col gap-2'}>
                            <div className={'flex gap-1 '}>
                                <DialogDemo></DialogDemo>
                                <Card className={'flex-[2] self-center p-2 flex gap-2 rounded-none'}>
                                    <p>Allassane wattara </p>
                                    <div className={' rounded-full ms-auto text-black font-mono px-2 py-0.1'}>74171794</div>
                                </Card>
                            </div>
                            <Card className={'bg-amber-700 text-secondary flex-[2] flex p-4 rounded-none'}>
                                <div>TOTAL A PAYER</div>
                                <div className="ms-auto ">700000 FCFA</div>
                            </Card>
                        </div>

                        <Card className="  p-2 flex  rounded-none ">
                            <div className={' flex gap-2 justify-center'}>
                                <div
                                    className={'flex-[2] text-secondary text-success-600 border-success-600 border font-bold justify-center rounded-full text-md py-2 px-4 flex gap-2'}>
                                    <p>Confirmer la vente</p>
                                </div>

                            </div>
                        </Card>
                    </div>

                    <div className={'overflow-y-auto '}>
                        <ListeSelect/>

                    </div>

                </div>
            </Card>
            <div className={'flex-[2] overflow-y-auto'}>
                <CathegorieAndProduit></CathegorieAndProduit>
            </div>
        </div>
    );
}
