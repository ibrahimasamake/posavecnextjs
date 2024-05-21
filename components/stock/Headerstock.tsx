// @flow
'use client'
import * as React from 'react';
import Link from "next/link";
import {Sectionmeduin} from "@/components/Sectionmeduin";
import {cn} from "@/lib/utils";
import {Button, buttonVariants} from "@/components/ui/button";
import {useState} from "react";
import {Section} from "@/components/Section";
import {Eye, EyeOff} from "lucide-react";
import {Card} from "@/components/ui/card";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "@/components/ui/dialog";

type Props={
    setShowAddProduit:(show:boolean)=>void
    setShowList:(show:boolean)=>void
};

export const Headerstock= (props: Props)=>{
    return (
        <div className={' border-b border-cyan-950/20     '}>
            <div className={'flex gap-2 p-4  bg-background'} >
                <Button onClick={()=>{
                    props.setShowAddProduit(true)
                    props.setShowList(false)

                }} className={cn(buttonVariants({variant: "outline"}),' text-xs text-primary ')}>Nouveau</Button>

                <div className={'flex-1'}></div>

                <div className={'flex-[2] flex gap-2 '}>
                    <Button onClick={()=>{
                        props.setShowList(true)
                        props.setShowAddProduit(false)
                    }} className={cn(buttonVariants({variant: "outline"}),' text-xs text-primary')}>Liste</Button>

                    <Dialog>
                        <DialogTrigger><Button onClick={()=>{}} className={cn(buttonVariants({variant: "outline"}),' text-xs text-primary ')}><Eye className={'me-1'} size={18} /> Cathegorie</Button>
                        </DialogTrigger>
                        <DialogContent>
                            <DialogHeader>
                                <DialogTitle>Are you absolutely sure?</DialogTitle>
                                <DialogDescription>
                                    This action cannot be undone. This will permanently delete your account
                                    and remove your data from our servers.
                                </DialogDescription>
                            </DialogHeader>
                        </DialogContent>
                    </Dialog>


                </div>
            </div>
        </div>

    );
};