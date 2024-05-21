// @flow
import * as React from 'react';
import { useEffect, useState } from 'react';
import { DataTable } from "@/app/stock/tablestock/data-table";
import { columns, StockZod } from "@/app/stock/tablestock/columns";
import {generateElectronicProducts, StockType} from "@/lib/stockdata";


async  function getData(): Promise<StockType[]> {
    // Récupérez les données depuis votre API ici.
    // Pour le moment, cela retourne les données générées directement.
    return generateElectronicProducts;
}

type Props = {};

export const TableView = (props: Props) => {

    const [data, setData] = useState<StockZod[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
            const result:StockZod[] =await getData();
            setData(result);
            setLoading(false);
        }

        fetchData();

    }, []);

    if (loading) {
        return <div>Chargement...</div>; // Vous pouvez remplacer ceci par un composant de chargement si vous en avez un
    }

    return (
        <div>
            <h2 className={'text-5xl p-2'}>Liste des Produits en Stock </h2>

            <DataTable columns={columns} data={data}/>
        </div>
    );
};
