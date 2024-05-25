// @flow
import * as React from 'react';
import {CathegorieAndProduit} from "@/app/pos/CathegorieAndProduit";
import {Car, MoveRight} from "lucide-react";
import {Card} from "@/components/ui/card";
import {Input} from "@/components/ui/input";
import Image from "next/image";
import {Separator} from "@/components/ui/separator";
import Link from "next/link";
import {clsx} from "clsx";
import {Button, buttonVariants} from "@/components/ui/button";

type Props = {

};

type PropsCalcul = {
    value:string
};
const CalculData:PropsCalcul[]=[
    {
        value:'1'
    }, {
        value:'2'
    }, {
        value:'3'
    }, {
        value:'4'
    }, {
        value:'5'
    }, {
        value:'6'
    },
    {
        value:'7'
    }, {
        value:'8'
    }, {
        value:'9'
    }, {
        value:'0'
    }, {
        value:'='
    }, {
        value:'+'
    }
]

export function CalculItems(props: PropsCalcul) {
    return (
        <div className={'bg-amber-50 md:size-10 lg:size-20 text-black rounded hover:bg-amber-700   flex items-center justify-center text-xl '}>
            <p>{props.value}</p>
        </div>
    );
};
export function Calculatrice(){
    return (
        <div className={'flex flex-wrap justify-center last:ms-auto   p-1 gap-2 '}>
            {CalculData.map((item, index) => (
                <CalculItems key={index} value={item.value}></CalculItems>
            ))}
        </div>
    );
};

export function ListeSelect(){
    return (
        <div className={'flex flex-col gap-2'}>


            <Card className="flex gap-2 p-1 items-center">

                <div className={'relative size-8'}>
                    <Image width={400} height={400} className={'absolute rounded-md'}
                           src={'https://source.unsplash.com/100x100/?random=88'} alt={'image'}></Image>
                </div>

                <div >
                    <p className={'text-sm'}>Samsung A32</p>

                    <p className={'text-xs'}>Qte:1</p>
                </div>
                <div className={'flex-1'}></div>
                <div className={'text-white text-xs bg-amber-700 rounded-full p-1'}>4000 F</div>
            </Card>
            <Card className="flex gap-2 p-1 items-center">

                <div className={'relative size-8'}>
                    <Image width={400} height={400} className={'absolute rounded-md'}
                           src={'https://source.unsplash.com/100x100/?random=88'} alt={'image'}></Image>
                </div>

                <div >
                    <p className={'text-sm'}>Samsung A32</p>

                    <p className={'text-xs'}>Qte:1</p>
                </div>
                <div className={'flex-1'}></div>
                <div className={'text-white text-xs bg-amber-700 rounded-full p-1'}>4000 F</div>
            </Card>
            <Card className="flex gap-2 p-1 items-center">

                <div className={'relative size-8'}>
                    <Image width={400} height={400} className={'absolute rounded-md'}
                           src={'https://source.unsplash.com/100x100/?random=88'} alt={'image'}></Image>
                </div>

                <div >
                    <p className={'text-sm'}>Samsung A32</p>

                    <p className={'text-xs'}>Qte:1</p>
                </div>
                <div className={'flex-1'}></div>
                <div className={'text-white text-xs bg-amber-700 rounded-full p-1'}>30500 F</div>
            </Card>
            <Card className="flex gap-2 p-1 items-center">

                <div className={'relative size-8'}>
                    <Image width={400} height={400} className={'absolute rounded-md'}
                           src={'https://source.unsplash.com/100x100/?random=88'} alt={'image'}></Image>
                </div>

                <div >
                    <p className={'text-sm'}>Samsung A32</p>

                    <p className={'text-xs'}>Qte:1</p>
                </div>
                <div className={'flex-1'}></div>
                <div className={'text-white text-xs bg-amber-700 rounded-full p-1'}>30500 F</div>
            </Card>
            <Card className="flex gap-2 p-1 items-center">

                <div className={'relative size-8'}>
                    <Image width={400} height={400} className={'absolute rounded-md'}
                           src={'https://source.unsplash.com/100x100/?random=88'} alt={'image'}></Image>
                </div>

                <div >
                    <p className={'text-sm'}>Samsung A32</p>

                    <p className={'text-xs'}>Qte:1</p>
                </div>
                <div className={'flex-1'}></div>
                <div className={'text-white text-xs bg-amber-700 rounded-full p-1'}>30500 F</div>
            </Card>
            <Card className="flex gap-2 p-1 items-center">

                <div className={'relative size-8'}>
                    <Image width={400} height={400} className={'absolute rounded-md'}
                           src={'https://source.unsplash.com/100x100/?random=88'} alt={'image'}></Image>
                </div>

                <div >
                    <p className={'text-sm'}>Samsung A32</p>

                    <p className={'text-xs'}>Qte:1</p>
                </div>
                <div className={'flex-1'}></div>
                <div className={'text-white text-xs bg-amber-700 rounded-full p-1'}>30500 F</div>
            </Card>
            <Card className="flex gap-2 p-1 items-center">

                <div className={'relative size-8'}>
                    <Image width={400} height={400} className={'absolute rounded-md'}
                           src={'https://source.unsplash.com/100x100/?random=88'} alt={'image'}></Image>
                </div>

                <div >
                    <p className={'text-sm'}>Samsung A32</p>

                    <p className={'text-xs'}>Qte:1</p>
                </div>
                <div className={'flex-1'}></div>
                <div className={'text-white text-xs bg-amber-700 rounded-full p-1'}>30500 F</div>
            </Card>
            <Card className="flex gap-2 p-1 items-center">

                <div className={'relative size-8'}>
                    <Image width={400} height={400} className={'absolute rounded-md'}
                           src={'https://source.unsplash.com/100x100/?random=88'} alt={'image'}></Image>
                </div>

                <div >
                    <p className={'text-sm'}>Samsung A32</p>

                    <p className={'text-xs'}>Qte:1</p>
                </div>
                <div className={'flex-1'}></div>
                <div className={'text-white text-xs bg-amber-700 rounded-full p-1'}>30500 F</div>
            </Card>



        </div>
    );
};

export default function Page(props: Props) {
    return (
        <div className={' flex flex-col lg:flex-row relative h-screen overflow-hidden '}>


            <Card className="flex-1 sticky top-0  rounded py-3 ">

                <div className="flex flex-col p-2 gap-2 h-full ">
                    <div className="space-y-5 flex-grow">
                        <div>
                            <Link href={'/'} className={clsx(buttonVariants({variant: 'outline'}))}>Quitter</Link>
                        </div>
                        <Card className={' bg-accent/50 flex text-xl p-4  '}>
                            <div>
                                TOTAL A PAYER
                            </div>
                            <div className="ms-auto ">700000 FCFA</div>
                        </Card>

                        <div className={'max-h-[25rem] overflow-y-auto'}>
                            <ListeSelect/>
                        </div>
                        <div className={'p-4 flex gap-2 justify-center'}>
                            <div className={'  rounded-full bg-warning/1 px-8 py-2'}>Annuler</div>
                            <div
                                className={'flex-[2] bg-success-600/40  justify-center rounded-full text-md py-2 px-4 flex gap-2'}>
                                <p>Confirmer la vente maintenant</p>
                            </div>
                        </div>
                    </div>

                    <Card className="mt-auto min-h-4 p-2 flex gap-2 hidden ">
                        <Card className={'flex-1'}>
                        </Card>
                        <Card className={'flex-1'}>

                        </Card>
                    </Card>
                </div>
            </Card>


            <div className={'flex-[2]  overflow-y-auto'}>

                <CathegorieAndProduit></CathegorieAndProduit>


            </div>
        </div>
    );
};