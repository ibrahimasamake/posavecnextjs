// @flow
import * as React from 'react';
import {Section} from "@/components/Section";
import {BookOpenText, Code, LayoutDashboard, Package, Settings, ShoppingBagIcon, SwordsIcon} from "lucide-react";
import {cn} from "@/lib/utils";
import {buttonVariants} from "@/components/ui/button";
import {DashboardIcon} from "@radix-ui/react-icons";
import Link from "next/link";

type Props = {

};
export const Header = (props: Props) => {
    return (
        <Section className={'sticky top-0  shadow-md z-10  w-full p-4 flex gap-2  bg-background items-center '}>
            <Link href={'/'} className={'font-bold '}>SAM INFO POS </Link>
            <div className={'flex-1 s'}></div>

            <Link href={'/dashboard'} className={cn(buttonVariants({variant: "outline"}),'flex  gap-2   ')} ><span className={''}><DashboardIcon/></span><span className={' hidden md:block text-xs'}>Dashboard</span></Link>
            <Link href={'/pos'} className={cn(buttonVariants({variant: "outline"}),'flex  gap-2 ')} ><span className={''}><ShoppingBagIcon size={14}/></span><span className={' hidden md:block text-xs'}>Point de Vente</span></Link>
            <Link href={'/vente'}  className={cn(buttonVariants({variant: "outline"}),'flex  gap-2 ')}><span><BookOpenText size={14}/></span><span className={' hidden md:block text-xs'}>Vente</span></Link>
            <Link href={'/stock'} className={cn(buttonVariants({variant: "outline"}),'flex  gap-2 ')}><span><Package size={14}/></span><span className={' hidden md:block text-xs'}>Stock</span></Link>

            <div className={'flex-1'}></div>
            <div className={cn(buttonVariants({variant: "outline"}),'flex  gap-2 ')}><span><Settings size={14}/></span><span className={' hidden md:block text-xs'}>Reglage</span></div>

        </Section>
    );
};