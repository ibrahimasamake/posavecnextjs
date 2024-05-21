// @flow
import * as React from 'react';
import {Section} from "@/components/Section";
import {cn} from "@/lib/utils";
import {Card} from "@/components/ui/card";
import posImage from "@/public/outils/3913745.jpg";
import Image from "next/image";
import {Sectionmeduin} from "@/components/Sectionmeduin";
type Props = {

};
const outilsData = [
    {
        image: "https://www.shutterstock.com/image-illustration/human-hand-working-3d-rendering-260nw-704493325.jpg",
        title: "Point de Vente",
        description: "Optimisez vos ventes en gérant votre point de vente de manière efficace. Avec notre système de point de vente intuitif, vendez des produits du magasin plus facilement en un temps record.",
    },
    {
        image: "https://odoo.consulting/illustrations/odoo_gestion_stocks.svg",
        title: "Gestion des stocks",
        description: "Suivez et gérez efficacement vos stocks pour éviter les ruptures et les surplus. Notre système de gestion des stocks vous permet de contrôler chaque aspect de votre inventaire, de la réception des produits à la gestion des niveaux de stock en temps réel.",
    },
    {
        image: "https://www.afex-experts-comptables.fr/static/uploads/2023/04/excedent-brut-exploitation-600x347.jpg",
        title: "Journal de vente",
        description: "Analysez vos ventes de manière approfondie grâce à notre journal de vente intégré. Suivez les performances de vos produits, identifiez les tendances de vente et prenez des décisions éclairées pour optimiser vos stratégies de marketing et de vente.",
    },

];





export const OSUtils=(props:Props) => {
    return (
        <Section className={'flex flex-col gap-2 flex-wrap md:flex-row ' }>

            {outilsData.map((outils,id)=>(
                <Card key={id} className={'flex flex-col p-2 flex-1  hover:bg-secondary/60 '}>
                    <div className={cn('relative')}>
                        <Image width={0} height={0} className={' size-14 rounded-md object-cover'}   src={outils.image} alt="Pos" />
                    </div>
                    <p className={'font-bold'}>{outils.title}</p>
                    <div className={'text-md '}>
                        {outils.description}
                    </div>
                </Card>
            ))
            }

        </Section>

    )
}

export const Outils = (props: {

}) => {
    return (
        <Sectionmeduin className={cn(' h-96 :')}>

            <Card className={'p-4 flex flex-col  gap-2 border-black/20'}>
                <div className={'text-3xl  '}>Outils</div>
                <OSUtils></OSUtils>
            </Card>

        </Sectionmeduin>
    );
};