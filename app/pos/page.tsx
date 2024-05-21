// @flow
import * as React from 'react';
import {CathegorieAndProduit} from "@/app/pos/CathegorieAndProduit";
import {Car} from "lucide-react";
import {Card} from "@/components/ui/card";
import {Input} from "@/components/ui/input";
import Image from "next/image";
import {Separator} from "@/components/ui/separator";

type Props = {

};

type PropsCalcul = {
    value:number
};
const CalculData=[
    1,2,3,4,5,6,7,8,9,0
]

export function CalculItems(props: PropsCalcul) {
    return (
        <div className={'bg-amber-50 size-20 text-black rounded hover:bg-amber-700   flex items-center justify-center text-xl '}>
            <p>{props.value}</p>
        </div>
    );
};
export function Calculatrice(){
    return (
        <div className={'flex flex-wrap justify-start last:ms-auto   p-1 gap-2 '}>
            {CalculData.map((item, index) => (
                <CalculItems key={index} value={item}></CalculItems>
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
        <div className={' flex flex-col lg:flex-row gap-2 relative '}>

            <div className={'flex-1 relative bg-card  rounded '}>

                <div className={' flex-1 flex flex-col   gap-2 p-4   sticky top-0 '}>

                    <div>
                        <Card className={'text-2xl p-4 text-end'}>TOTAL : 700000</Card>
                    </div>


                    <Card className={'h-[22rem] overflow-y-auto p-2'}>
                        <ListeSelect></ListeSelect>
                    </Card>

                    <div className={'p-2'}>
                        <Calculatrice></Calculatrice>
                    </div>
                </div>
            </div>


            <div className={'flex-[2] '}>

                <CathegorieAndProduit></CathegorieAndProduit>
            </div>
        </div>
    );
};