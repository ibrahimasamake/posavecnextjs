"use client";
import { ListeCathegorieStock } from "@/components/stock/ListeCathegorieStock";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Input } from "@/components/ui/input";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Skeleton } from "@/components/ui/skeleton";
import { formatPrice } from "@/lib/actionUtils";
import useCathegorieStore, {
  useProductPosStore,
  useSelectProductClient,
} from "@/lib/myStoreZustend";
import { DataListeProducts } from "@/lib/posProduit";
import {
  eventSelectUserProductPos,
  eventSelectUserProductQuantitePos,
} from "@/lib/rxjsEvent";
import { cn } from "@/lib/utils";
import { ScrollShadow } from "@nextui-org/scroll-shadow";
import { capitalize } from "@nextui-org/shared-utils";
import { Angry, ChevronRight, CircleX, Layers, Plus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

type Props = {};

type PropsProduits = {
  image: string;
  nom: string;
  cathegorie: string;
  prix: number;
  quantiteActuel: number;
  id: number;
};

export const Produts = (props: PropsProduits) => {
  const setProduct = useSelectProductClient((state) => state.selectedProduct);
  const handleClick = () => {
    const data = setProduct({
      image: props.image,
      prix: props.prix,
      quantite: 1,
      name: props.nom,
      id: props.id,
    });

    eventSelectUserProductPos.next(data);
    eventSelectUserProductQuantitePos.next(data.prix);
  };

  return (
    <Card className="relative w-60 pt-1 hover:bg-gray-100 border border-gray-300 hover:shadow-lg transition-all duration-300 ease-in-out rounded-lg">
      <p className="text-xs px-2 text-center font-semibold text-gray-800 text-ellipsis text-nowrap w-full overflow-hidden">
        {capitalize(props.nom)}
      </p>

      <div className="flex justify-start gap-2 p-2">
        <Image
          width={500}
          height={500}
          className="w-48 h-28 mx-auto rounded-lg object-cover hover:animate-pulse"
          src={props.image}
          alt="image"
        />
      </div>
      <div className="flex-1 flex flex-col justify-start gap-1 w-auto">
        <div className="flex gap-1 justify-center">
          <p className="text-xs text-gray-500 text-ellipsis overflow-hidden">
            {props.cathegorie}
          </p>
          <p className="text-xs text-gray-500 flex items-center gap-1">
            <Layers size={16} strokeWidth={0.75} /> {props.quantiteActuel}
          </p>
        </div>
      </div>

      <div className="flex justify-between px-3 flex-row-reverse items-center rounded-b bg-gray-100 gap-2 p-1">
        <HoverCard>
          <HoverCardTrigger className="relative w-4 h-4 p-1 rounded-full flex justify-center items-center text-tiny border border-gray-300 hover:bg-orange-600 transition-all duration-300">
            <small>i</small>
          </HoverCardTrigger>
          <HoverCardContent className="p-2 text-sm text-gray-700 bg-white border border-gray-300 rounded shadow-lg">
            Information about the product.
          </HoverCardContent>
        </HoverCard>

        <p className="text-xs text-orange-600 rounded-full border border-orange-600 py-1 px-3">
          <span>{formatPrice(props.prix)}</span>
        </p>

        <Button
          onClick={handleClick}
          className="bg-green-500 text-sm text-white w-8 h-8 p-0 rounded-full hover:bg-green-600 transition-all duration-300"
        >
          <Plus size={14} />
        </Button>
      </div>
    </Card>
  );
};

const Rac = [
  { nom: "Tablets" },
  { nom: "Ecran" },
  { nom: "Batterie" },
  { nom: "Ecouteur" },
];

type PropsRaccourcieCathrgorie = {
  nom: string;
};

type RaccourcieBarType = {
  loader: boolean;
  search: string;
};

export const RaccourcieBar = (props: RaccourcieBarType) => {
  const [openCathegorieBar, setOpenCathegorieBar] = useState(false);
  const setLoader = useCathegorieStore((state) => state.setloader);
  const search = useCathegorieStore((state) => state.search);
  const setSearch = useCathegorieStore((state) => state.setSearch);
  const setSearchProduct = useProductPosStore((state) => state.setSearch);
  const SearchProductValue = useProductPosStore((state) => state.search);

  return (
    <Card className="rounded-lg shadow-md p-1 border border-gray-200 bg-white">
      <div className="flex items-center justify-start gap-2 ">
        <div className="flex gap-2">
          <Input
            value={SearchProductValue}
            className="border-gray-300 rounded-md focus:ring focus:ring-blue-300 max-w-lg"
            placeholder="Recherche par nom du produit..."
            onChange={(e) => setSearchProduct(e.target.value)}
          />
          <Link
            href="#"
            className={cn(
              "bg-success-700 text-white self-center p-2 rounded-sm  border-1"
            )}
          >
            GO
          </Link>
        </div>
        <Sheet open={openCathegorieBar} onOpenChange={setOpenCathegorieBar}>
          <SheetTrigger>
            <Link
              href="#"
              onClick={() => {
                setOpenCathegorieBar(true);
              }}
              className={cn(
                "bg-amber-600 text-white border-white self-center p-2 rounded-sm  flex border-1"
              )}
            >
              <span>Catégories </span>
              <ChevronRight size={16} />
            </Link>
          </SheetTrigger>
          <SheetContent className="bg-white p-6 rounded-lg shadow-lg">
            <SheetHeader>
              <SheetTitle>
                <div className="flex justify-between items-center">
                  <h2 className="text-lg font-semibold">Liste Catégorie</h2>
                  <CircleX
                    onClick={() => setOpenCathegorieBar(false)}
                    className="cursor-pointer text-gray-500 hover:text-gray-700"
                  />
                </div>
              </SheetTitle>
              <SheetDescription className="space-y-4  mt-4">
                <Input
                  className="border-gray-300 rounded-md focus:ring focus:ring-blue-300"
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Recherche par nom"
                />
                <ScrollShadow
                  className="w-full h-[500px] overflow-y-auto"
                  hideScrollBar
                >
                  <ListeCathegorieStock search={search} />
                </ScrollShadow>
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
        <div className="ms-auto">
          <div className="p-2 rounded-lg  flex gap-1 my-1">
            <Link
              title="Cloturation"
              href="/vente"
              className={cn(" self-center p-2 rounded-sm  border-1")}
            >
              Cloturation
            </Link>

            <Link
              title="Journal vente"
              href="/vente"
              className={cn(" self-center p-2 rounded-sm  border-1")}
            >
              Journal vente
            </Link>

            <Link
              href="/"
              title="Quitter"
              className={cn(
                " self-center  ms-auto  p-2 rounded-sm text-red-500 border-red-500 border-1"
              )}
            >
              Quitter
            </Link>
          </div>
        </div>
      </div>
      <div className="flex mt-1 flex-wrap gap-2">
        <div className="self-center">Top Recherche :</div>
        {Rac.map((item, i) => (
          <CathegorieRaccourcie key={i} nom={item.nom} />
        ))}
      </div>
    </Card>
  );
};

const CathegorieRaccourcie = ({ nom }: PropsRaccourcieCathrgorie) => {
  const updateCathegorie = useCathegorieStore(
    (state) => state.updateCathegorie
  );
  const setLoader = useCathegorieStore((state) => state.setloader);
  const setSearch = useProductPosStore((state) => state.setSearch);

  return (
    <button
      onClick={() => {
        setLoader(true);
        setTimeout(() => setLoader(false), 300);
        updateCathegorie(nom);
        setSearch("");
      }}
      className="px-4 py-2  font-medium text-slate-800/50 bg-amber-600/20 rounded-full hover:bg-amber-100 transition-colors duration-200"
    >
      {nom}
    </button>
  );
};

export function SkeletonCard() {
  const [reloadCounter, setReloadCounter] = useState(5);

  useEffect(() => {
    const timer = setTimeout(() => {
      setReloadCounter(0);
    }, 700);

    return () => clearTimeout(timer);
  }, []);

  if (reloadCounter > 0) {
    return (
      <div className="flex flex-wrap gap-2 justify-start">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
          <div
            key={i}
            className="flex flex-col space-y-3 relative w-60 hover:bg-gray-100 transition-all duration-300 ease-in-out rounded-lg"
          >
            <Skeleton className="h-[125px] w-full rounded-xl" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-[200px]" />
            </div>
          </div>
        ))}
      </div>
    );
  } else {
    return (
      <div className="flex flex-col  mt-52 items-center w-full min-h-max justify-center space-y-2 p-4 rounded-lg   bg-white">
        <Angry size={40} className="text-black-500" />
        <div className="text-gray-700 text-lg font-semibold">
          Aucun produit disponible.
        </div>
      </div>
    );
  }
}
export const CathegorieAndProduit = () => {
  const [dataProduit, setDataProduct] = useState<PropsProduits[]>([]);
  const cathegorie = useCathegorieStore((state) => state.cathegorie);
  const loader = useCathegorieStore((state) => state.loader);
  const searchProduct = useProductPosStore((state) => state.search);

  useEffect(() => {
    async function getDataProduitByCathegorie() {
      const data = await DataListeProducts(cathegorie, searchProduct);
      setDataProduct(data);
    }

    getDataProduitByCathegorie();
  }, [cathegorie, searchProduct]);

  return (
    <Card className="flex-auto space-y-2 flex pt-1 flex-col h-full relative px-2 rounded-none border-gray-200 bg-white">
      <div className="sticky top-0 z-10 space-y-1 py-0 bg-white border-b border-gray-200">
        <RaccourcieBar loader={loader} search="" />

        <div className="text-sm font-semibold text-gray-800">
          {cathegorie.toUpperCase()}
        </div>
      </div>
      {loader ? (
        <div className="flex justify-center items-center pt-20"></div>
      ) : (
        <div className="flex flex-wrap gap-2 justify-start pb-10 overflow-y-auto">
          {dataProduit && dataProduit.length > 0 ? (
            dataProduit.map((item, id) => (
              <Produts
                key={id}
                id={item.id}
                image={item.image}
                nom={item.nom}
                cathegorie={item.cathegorie}
                quantiteActuel={item.quantiteActuel}
                prix={item.prix}
              />
            ))
          ) : (
            <div className="flex flex-col items-center justify-center w-full min-h-max text-gray-500">
              <SkeletonCard />;
            </div>
          )}
        </div>
      )}
    </Card>
  );
};
