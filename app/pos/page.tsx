"use client";

import { CathegorieAndProduit } from "@/app/pos/CathegorieAndProduit";
import { DialogDemo } from "@/app/pos/selectedClient";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  eventSelectUserProductPos,
  eventSelectUserProductSelectPos,
} from "@/lib/rxjsEvent";
import { CircleX, Minus, Plus } from "lucide-react";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { Subscription } from "rxjs";

type Product = {
  id: number;
  quantite: number;
  image: string;
  prix: number;
  name: string;
};

export function ListeSelect() {
  const [listProduit, setListProduct] = useState<Product[]>([]);

  useEffect(() => {
    const handleProductUpdate = (updatedProduct: Product) => {
      setListProduct((prevList) => {
        const existingProductIndex = prevList.findIndex(
          (product) => product.id === updatedProduct.id
        );

        if (existingProductIndex !== -1) {
          const updatedList = [...prevList];
          updatedList[existingProductIndex] = {
            ...updatedList[existingProductIndex],
            quantite: updatedList[existingProductIndex].quantite + 1,
          };
          eventSelectUserProductSelectPos.next(updatedList);

          return updatedList;
        } else {
          return [...prevList, updatedProduct];
        }
      });
    };

    const subscription =
      eventSelectUserProductPos.subscribe(handleProductUpdate);

    return () => subscription.unsubscribe();
  }, []);

  const handleIncrement = useCallback((index: number) => {
    setListProduct((prevList) => {
      const updatedList = [...prevList];
      updatedList[index] = {
        ...updatedList[index],
        quantite: updatedList[index].quantite + 1,
      };
      eventSelectUserProductSelectPos.next(updatedList);
      return updatedList;
    });
  }, []);

  const handleDecrement = useCallback((index: number) => {
    setListProduct((prevList) => {
      const updatedList = [...prevList];
      if (updatedList[index].quantite > 1) {
        updatedList[index] = {
          ...updatedList[index],
          quantite: updatedList[index].quantite - 1,
        };
      }
      eventSelectUserProductSelectPos.next(updatedList);
      return updatedList;
    });
  }, []);

  const handleInputChange = useCallback((index: number, newValue: number) => {
    setListProduct((prevList) => {
      const updatedList = [...prevList];
      updatedList[index] = {
        ...updatedList[index],
        quantite: newValue,
      };
      eventSelectUserProductSelectPos.next(updatedList);
      return updatedList;
    });
  }, []);

  const deleteItem = useCallback((index: number) => {
    setListProduct((prevList) => {
      const updatedList = [...prevList];
      updatedList.splice(index, 1);
      eventSelectUserProductSelectPos.next(updatedList);
      return updatedList;
    });
  }, []);

  return (
    <div className="relative flex flex-col gap-1 self-end justify-end px-1">
      {listProduit.map((item, index) => (
        <Card
          key={index}
          className="p-1 relative border rounded-md border-success-600/20 flex gap-2 hover:bg-accent/50"
        >
          <div className="relative w-14 h-14">
            <Image
              src={item.image}
              width={100}
              height={100}
              alt={`Product ${index}`}
              className="absolute rounded size-14"
            />
          </div>
          <div className="space-y-0.5 flex flex-col justify-between">
            <p className="text-md ms-4 font-normal">
              {item.name.toLocaleLowerCase()}
            </p>
            <div className="flex ms-4 items-center gap-0">
              <div
                className="border p-2  rounded-none rounded-br rounded-tr"
                onClick={() => handleDecrement(index)}
              >
                <Minus size={12} />
              </div>

              <div className="w-12  bg-white">
                <Input
                  className="py-0 px-1 h-7 rounded-none"
                  type="number"
                  value={item.quantite}
                  min={1}
                  size={4}
                  onChange={(e) =>
                    handleInputChange(index, Number(e.target.value))
                  }
                />
              </div>

              <div
                className="p-2 border  rounded-none rounded-bl rounded-tl"
                onClick={() => handleIncrement(index)}
              >
                <Plus size={12} />
              </div>
              <div className="ms-4 text-tiny">Qte: {item.quantite}</div>
            </div>
            <div className="text-xs text-white absolute bg-amber-600 rounded-t bottom-0 right-0 px-2 py-1 ">
              {item.prix} FCFA
            </div>
          </div>
          <div className="absolute top-1 right-1 ">
            <CircleX
              className="hover:text-red-600 "
              strokeWidth={1}
              onClick={() => deleteItem(index)}
            />
          </div>
        </Card>
      ))}
    </div>
  );
}

type Client = {
  nom: string;
  prenom: string;
  id: number;
};

type prix = {
  value: number;
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
      <div className="ms-auto">{prix} FCFA</div>
    </div>
  );
}

export default function Page() {
  return (
    <div className="flex flex-col lg:flex-row relative h-screen overflow-hidden">
      <div className="flex-1 sticky top-0 py-3">
        <div className="flex flex-col p-2 gap-2 h-full">
          <div className="space-y-2">
            <div className="flex  flex-col-reverse gap-2">
              <div className="flex gap-1">
                <DialogDemo />
                <Card className="flex-[2] self-center p-2 flex gap-2 rounded-none">
                  <p>Allassane Wattara</p>
                  <div className="rounded-full ms-auto text-black font-mono px-2 py-0.1">
                    74171794
                  </div>
                </Card>
              </div>
              <div className="flex gap-1">
                <TotalPrixProductComponent />
                <div className="bg-success-600 p-2 flex self-center">
                  <p className={"text-white w-full text-center"}>Vendre</p>
                </div>
              </div>
            </div>
          </div>
          <div className="overflow-y-auto">
            <ListeSelect />
          </div>
        </div>
      </div>
      <div className="flex-[2] overflow-y-auto">
        <CathegorieAndProduit />
      </div>
    </div>
  );
}
