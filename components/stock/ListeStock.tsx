"use serve";

// @flow
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { AddProduit } from "@/components/stock/AddProduit";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { EllipsisVertical } from "lucide-react";
import { useState } from "react";

type stock = {
  image: string;
  nom: string;
  cathegorie: string;
  prixEngro: number;
  prixVente: number;
  quantite: number;
};
const Stock: stock[] = [];
let popup: boolean = false;
export function openPopup(item: stock) {
  console.log(item);
  popup = true;
  return (
    <div className={"absolute border-gray-400 size-32 top-0 right-0 "}></div>
  );
}
for (let i = 0; i < 20; i++) {
  const product = {
    image: `https://source.unsplash.com/3000x3000/?random=${i}`,
    nom: "sfsgsgbdgs", //faker.commerce.productName(),
    cathegorie: "electro", //faker.commerce.department(),
    prixEngro: 5059, // faker.number.int({ min: 500, max: 5000 }),
    prixVente: 42555, //faker.number.int({ min: 5000, max: 10000 }),
    quantite: i + 5, // faker.number.int({ min: 1, max: 100 }),
  };
  Stock.push(product);
}

export const Qte = (quantite: { value: number }) => {
  return (
    <div
      style={{ width: `${quantite.value}px` }}
      className={cn({
        "h-2 bg-red-600": quantite.value < 10,
        "h-2 bg-yellow-400": quantite.value >= 10,
        "h-2 bg-green-700": quantite.value >= 20,
      })}
    ></div>
  );
};
export const DataStock = (props: {
  image: string;
  nom: string;
  cathegorie: string;
  prixEngro: number;
  prixVente: number;
  quantite: number;
  items: stock;
}) => {
  return (
    <TableRow
      autoFocus={false}
      className={"relative"}
      onClick={() => openPopup}
    >
      <TableCell className="font-medium">
        <div className="relative size-14 rounded-xl">
          <img className={"rounded"} src={props.image} />
        </div>
      </TableCell>
      <TableCell className={"text-sm"}>{props.nom}</TableCell>
      <TableCell>{props.cathegorie}</TableCell>
      <TableCell>{props.prixVente} Fcfa</TableCell>
      <TableCell className={"flex flex-col  gap-2"}>
        <div className={""}>{props.quantite} pc</div>
        <div style={{ width: "50px" }} className={`border p-0.5 `}>
          <Qte value={props.quantite}></Qte>
        </div>
      </TableCell>
      <TableCell>
        <Dialog>
          <DialogTrigger>
            <EllipsisVertical size={16} />
          </DialogTrigger>
          <DialogContent className={""}>
            <DialogHeader>
              <DialogTitle className={"text-3xl text-center my-2"}>
                Information du Produits
              </DialogTitle>
              <DialogDescription className={"flex flex-col gap-2"}>
                <div className={"flex gap-5 relative "}>
                  <div className="relative flex-[2]  w-20 h-auto rounded-xl">
                    <img className={" rounded"} src={props.image} />
                  </div>

                  <div className={"flex-[2]  flex flex-col gap-2  "}>
                    <div className={"text-2xl text-start  font-bold  "}>
                      {props.nom}
                    </div>
                    <div className={"text-start"}>
                      <span>Cathegorie : </span>
                      {props.cathegorie}
                    </div>
                    <div className={"text-start"}>
                      <span>Prix Engro : </span>
                      {props.prixEngro} Fcfa
                    </div>
                    <div className={"text-start"}>
                      <span>Prix Vente : </span>
                      {props.prixVente} Fcfa
                    </div>
                    <div className={"text-start"}>
                      <span>Quantite : </span>
                      {props.quantite}
                    </div>
                    <div className={"border-2 p-0.3 w-[50px]"}>
                      <Qte value={props.quantite}></Qte>
                    </div>
                  </div>
                </div>
                <div
                  className={" w-full flex flex-col  max-md:flex-row   gap-2 "}
                >
                  <div
                    className={"bg-green-700   text-center text-white rounded"}
                  >
                    <Popover>
                      <PopoverTrigger className={"w-full h-full p-2"}>
                        {" "}
                        Renouvelement stock
                      </PopoverTrigger>
                      <PopoverContent>
                        <div>Renouvelement du stock</div>
                        <div className={"flex flex-col gap-2"}>
                          <div>Quantite</div>
                          <Input
                            type={"number"}
                            placeholder={"entre la quantite"}
                          ></Input>
                          <Button className={"bg-green-900"}>Save</Button>
                        </div>
                      </PopoverContent>
                    </Popover>
                  </div>

                  <div
                    className={"bg-yellow-400  text-center text-white rounded"}
                  >
                    <AlertDialog>
                      <AlertDialogTrigger className={"w-full h-full p-2"}>
                        Modifier
                      </AlertDialogTrigger>
                      <AlertDialogContent>
                        <AlertDialogHeader>
                          <AlertDialogTitle>
                            Etes vous sure de vouloir supprimer du stock?
                          </AlertDialogTitle>
                          <AlertDialogDescription>
                            <AddProduit></AddProduit>.
                          </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                          <AlertDialogCancel>Annuler</AlertDialogCancel>
                          <AlertDialogAction>Supprimer</AlertDialogAction>
                        </AlertDialogFooter>
                      </AlertDialogContent>
                    </AlertDialog>
                  </div>

                  <div className={"bg-red-600  text-center text-white rounded"}>
                    <AlertDialog>
                      <AlertDialogTrigger className={"w-full h-full p-2"}>
                        Supprimer du stock
                      </AlertDialogTrigger>
                      <AlertDialogContent>
                        <AlertDialogHeader>
                          <AlertDialogTitle>
                            Etes vous sure de vouloir supprimer du stock?
                          </AlertDialogTitle>
                          <AlertDialogDescription>
                            .
                            <div className={"flex gap-5 relative "}>
                              <div className="relative flex-[2]  w-20 h-auto rounded-xl">
                                <img className={" rounded"} src={props.image} />
                              </div>

                              <div
                                className={"flex-[2]  flex flex-col gap-2  "}
                              >
                                <div
                                  className={"text-2xl text-start  font-bold  "}
                                >
                                  {props.nom}
                                </div>
                                <div className={"text-start"}>
                                  <span>Cathegorie : </span>
                                  {props.cathegorie}
                                </div>
                                <div className={"text-start"}>
                                  <span>Prix Engro : </span>
                                  {props.prixEngro} Fcfa
                                </div>
                                <div className={"text-start"}>
                                  <span>Prix Vente : </span>
                                  {props.prixVente} Fcfa
                                </div>
                                <div className={"text-start"}>
                                  <span>Quantite : </span>
                                  {props.quantite}
                                </div>
                                <div className={"border-2 p-0.3 w-[50px]"}>
                                  <Qte value={props.quantite}></Qte>
                                </div>
                              </div>
                            </div>
                          </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                          <AlertDialogCancel>Annuler</AlertDialogCancel>
                          <AlertDialogAction>Supprimer</AlertDialogAction>
                        </AlertDialogFooter>
                      </AlertDialogContent>
                    </AlertDialog>
                  </div>
                </div>
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </TableCell>
    </TableRow>
  );
};

export const ListeStock = (props: {
  setCathegorie?: (show: boolean) => void;
}) => {
  const [showCathegorieListStock, setShowCathegorieListStock] = useState(false); // State to control the visibility of AddProduit

  return (
    <div className={""}>
      <div className={"relative"}>
        <Table className="border">
          <TableHeader className={""}>
            <TableRow className={""}>
              <TableHead className="">Image</TableHead>
              <TableHead className="">Nom</TableHead>
              <TableHead className="">Catg</TableHead>
              <TableHead className="">Prix vte</TableHead>
              <TableHead className="">Qte</TableHead>
              <TableHead className="">option</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody className={""}>
            {Stock.map((item, i) => (
              <DataStock
                items={item}
                key={i}
                image={item.image}
                nom={item.nom}
                cathegorie={item.cathegorie}
                prixEngro={item.prixEngro}
                prixVente={item.prixVente}
                quantite={item.quantite}
              />
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};
