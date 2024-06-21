import { formatPrice } from "@/lib/actionUtils";
import {
  eventSelectUserProductPos,
  eventSelectUserProductSelectPos,
} from "@/lib/rxjsEvent";
import { useEffect, useState } from "react";
import { Subscription } from "rxjs";

type Product = {
  id: number;
  quantite: number;
  image: string;
  prix: number;
  name: string;
};

export function TotalPrixProductComponent() {
  const [prixTotalList, setPrixTotalList] = useState<Product[]>([]);
  const [prix, setPrix] = useState<number>(0);

  useEffect(() => {
    const handleProductUpdate = (updatedPrice: Product) => {
      setPrixTotalList((prevList) => {
        const existingProductIndex = prevList.findIndex(
          (product) => product.id === updatedPrice.id
        );
        if (existingProductIndex !== -1) {
          const updatedList = [...prevList];
          updatedList[existingProductIndex] = updatedPrice;
          return updatedList;
        } else {
          return [...prevList, updatedPrice];
        }
      });
    };

    const subscription: Subscription =
      eventSelectUserProductPos.subscribe(handleProductUpdate);
    return () => subscription.unsubscribe();
  }, []);

  useEffect(() => {
    const Liste = (liste: Product[]) => {
      setPrixTotalList(liste);
    };
    const subscription: Subscription =
      eventSelectUserProductSelectPos.subscribe(Liste);
    return () => subscription.unsubscribe();
  }, []);

  useEffect(() => {
    const newPrix = prixTotalList.reduce(
      (accumulator, currentValue) =>
        accumulator + currentValue.prix * currentValue.quantite,
      0
    );
    setPrix(newPrix);
  }, [prixTotalList]);

  return (
    <div className="flex-auto items-center px-4 bg-success-600/10 flex">
      <div>TOTAL A PAYER</div>
      <div className="ms-auto">{formatPrice(prix)} </div>
    </div>
  );
}
