// @flow
import { Card } from "@/components/ui/card";
import useCathegorieStore, { useProductPosStore } from "@/lib/myStoreZustend";
import { DataListeCathegorie } from "@/lib/posProduit";
import Image from "next/image";
import * as React from "react";
import { useEffect, useState } from "react";

type CathegorieType = {
  image: string;
  nom: string;
  quantite: number;
};

export const Cathegorie = (props: {
  image: string;
  nom: string;
  quantite: number;
  closeDialog: (value: boolean) => void;
}) => {
  const updateCathegorie = useCathegorieStore(
    (state) => state.updateCathegorie
  );
  const setSearchParent = useProductPosStore((state) => state.setSearch);

  return (
    <Card
      onClick={() => {
        updateCathegorie(props.nom);
        setSearchParent("");
        console.log(props.nom);
        props.closeDialog(false);
      }}
      className={
        "flex-1 max-w-[200px] max-h-[200px]  hover:bg-accent p-2 relative "
      }
    >
      <div className={"relative w-32  h-32   mx-auto   "}>
        <Image
          width={200}
          height={200}
          className={"absolute object-contain  rounded-full"}
          src={props.image}
          alt={"image"}
        />
      </div>
      <div className={"flex gap-1 justify-center  p-1 text-xs "}>
        <p className={""}>{props.nom}</p>
      </div>
      <div
        className={
          "absolute  text-white top-0  bg-amber-700/90 rounded-b rounded-rb p-2"
        }
      >
        {" "}
        {props.quantite}
      </div>
    </Card>
  );
};

interface Props {
  search: string;
  closeDialog: (value: boolean) => void;
}

export const ListeCathegorieStock: React.FC<Props> = ({
  search,
  closeDialog,
}) => {
  const [listecathrgorie, setListeCathegorie] = useState<CathegorieType[]>([]);

  useEffect(() => {
    async function recupteData() {
      const data = DataListeCathegorie(search);

      setListeCathegorie(data);
    }
    recupteData();
  }, [search]);

  return (
    <div className={" flex flex-col gap-2"}>
      <div className={"flex  flex-row  flex-wrap  justify gap-4   "}>
        {listecathrgorie.map((item, i) => (
          <Cathegorie
            closeDialog={closeDialog}
            key={i}
            nom={item.nom}
            image={item.image}
            quantite={item.quantite}
          />
        ))}
      </div>
    </div>
  );
};
