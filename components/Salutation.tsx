// @flow
import * as React from 'react';
import {Sectionmeduin} from "@/components/Sectionmeduin";
import {Card} from "@/components/ui/card";
import {Section} from "@/components/Section";
import {cn} from "@/lib/utils";
import {buttonVariants} from "@/components/ui/button";
import {PropsWithChildren} from "react";
import {CircleArrowRight} from "lucide-react";

type Props = {

};

export const Code = (props:PropsWithChildren<{className?:string}>) => {
    return (
        <span className={cn('bg-background/40 border p-1  text-foreground/40  ',props.className)}>
            {props.children}
        </span>
    );
};
export const Salutation = (props: Props) => {
    return (
        <Sectionmeduin>
            <Card className={'relative text-sm border-black/20  md:mx-auto ' +
                'flex flex-col gap-1  items-center md:max-w-4xl mt-2 '}>
                <div className={'font-extra ' +
                    ' bg-cyan-900 from-black to-purple-400 text-transparent' +
                    ' bg-clip-text text-start p-4 md:max-w-4xl  md:text-2xl'}>
                    Hey ! Prêt à lancer votre entreprise ?
                    Notre application de point de vente vous donne tous les outils
                    dont vous avez besoin pour créer votre propre boutique en ligne
                    et commencer à vendre dès maintenant!

                </div>
                <div className={cn(buttonVariants({variant: "outline"}),'bg-black/20  m-2 flex gap-1 ')}><span>Contunier</span> <CircleArrowRight size={16} /></div>


            </Card>

        </Sectionmeduin>
    );
};