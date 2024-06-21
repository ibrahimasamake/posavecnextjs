"use client";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { formatPrice } from "@/lib/actionUtils";
import {
  eventSelectUserProductPos,
  eventSelectUserProductSelectPos,
} from "@/lib/rxjsEvent";
import "jspdf-autotable";
import { CircleX, Minus, Plus } from "lucide-react";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

type Product = {
  id: number;
  quantite: number;
  image: string;
  prix: number;
  name: string;
};

type ProductPosPropos = {
  setFinalProduits: (product: Product[]) => void;
};

export function ListeSelect({ setFinalProduits }: ProductPosPropos) {
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
    eventSelectUserProductSelectPos.next(listProduit);
    return () => subscription.unsubscribe();
  }, [listProduit]); // Add listProduit to the dependency array

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

  useEffect(() => {
    const Liste = () => {
      return listProduit;
    };
    const liste = Liste();
    eventSelectUserProductSelectPos.next(liste);
    setFinalProduits(liste); // Met à jour finalProduits ici
  }, [listProduit, setFinalProduits]); // Add listProduit to the dependency array

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
            <div className="text-xs text-white absolute bg-amber-600  rounded-t bottom-1 rounded-b right-1 px-2 py-1 ">
              {formatPrice(item.prix)}
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
