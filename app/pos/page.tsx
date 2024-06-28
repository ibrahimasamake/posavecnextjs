"use client";
import { CathegorieAndProduit } from "@/app/pos/CathegorieAndProduit";
import { DialogDemo } from "@/app/pos/selectedClient";
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
import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { createInvoice, formatPrice } from "@/lib/actionUtils";
import personnePhoto from "@/lib/image/3d/Personne.jpg";
import { eventSelectUseClient } from "@/lib/rxjsEvent";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Subscription } from "rxjs";
import { ListeSelect } from "./ListeSelectProducts";
import { TotalPrixProductComponent } from "./TotalPriceProducts";
import { AllProduitsSelectValide } from "./vente";

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

type Client = {
  nom: string;
  prenom: string;
  id: number;
};

type prix = {
  value: number;
};

type ClientPos = {
  nom: string;
  prenom: string;
  numero: string;
};
export default function Page() {
  const [client, setClient] = useState<ClientPos | null>(null);
  const [finalProduits, setFinalProduits] = useState<Product[]>([]);
  const total = finalProduits.reduce(
    (total, item) => total + item.prix * item.quantite,
    0
  );

  useEffect(() => {
    const getClient = (client: ClientPos) => {
      setClient(client);
      console.log(client);
    };

    const subscription: Subscription =
      eventSelectUseClient.subscribe(getClient);

    return () => subscription.unsubscribe();
  }, []);

  return (
    <div className="flex flex-col lg:flex-row h-screen overflow-hidden">
      <div className="flex-1 sticky top-0 py-3">
        <div className="flex flex-col p-2 gap-2 h-full bg-white">
          <div className="space-y-2">
            <div className="flex flex-col-reverse gap-2">
              <div className="flex gap-1">
                <DialogDemo />
                <Card className="flex-[2] self-center p-2 flex gap-2  rounded-none">
                  {client ? (
                    <>
                      <p>
                        {client.nom} {client.prenom}
                      </p>
                      <div className="rounded-full ms-auto text-black font-mono px-2 py-0.1">
                        {client.numero}
                      </div>
                    </>
                  ) : (
                    <p className="text-center">Aucun client</p>
                  )}
                </Card>
              </div>
              <div className="flex gap-1 ">
                <TotalPrixProductComponent />
                <div className="bg-success-600 p-2 flex self-center">
                  <AlertDialog>
                    <AlertDialogTrigger asChild>
                      <p className="text-white w-full text-center cursor-pointer  p-0 rounded-md">
                        Vendre
                      </p>
                    </AlertDialogTrigger>
                    <AlertDialogContent className="max-w-4xl min-h-[400px]">
                      {" "}
                      {/* Ajout d'une classe CSS pour ajuster la largeur */}
                      <AlertDialogHeader>
                        <AlertDialogTitle>
                          Confirmation de la vente ?
                        </AlertDialogTitle>
                        <AlertDialogDescription>
                          <div className="flex flex-col gap-1">
                            <div className="flex flex-col-reverse gap-1">
                              <div className="flex-[2]">
                                <div className="max-h-[300px] border-1 overflow-y-scroll">
                                  <AllProduitsSelectValide
                                    produits={finalProduits}
                                  />
                                </div>
                                <div className="p-2 mt-2   border-1 border-b-green-700/50 text-lg flex justify-between">
                                  <div className="text-success-700">
                                    Total a payer
                                  </div>
                                  <div className="text-success-700">
                                    {formatPrice(total)}
                                  </div>
                                </div>
                              </div>
                              <div className="flex-1 gap-4 flex flex-col">
                                <Card className="flex   gap-1 items-center  p-1">
                                  <Image
                                    className="rounded-full border-1 border-success-200"
                                    alt="user"
                                    src={personnePhoto}
                                    width={50}
                                    height={50}
                                  />
                                  <div className="flex flex-col text-center">
                                    <p className="text-nowrap">
                                      {client?.prenom} {client?.nom}
                                    </p>
                                    <p>{client?.numero}</p>
                                  </div>
                                </Card>
                              </div>
                            </div>
                            <div>
                              <div className="items-top flex space-x-2">
                                <Checkbox id="terms1" />
                                <div className="grid gap-1.5 leading-none">
                                  <label
                                    htmlFor="terms1"
                                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                  >
                                    Genere la facture apres confirmation.
                                  </label>
                                  <p className="text-sm text-muted-foreground">
                                    Veuller a alumer l&aposinprimente afin que
                                    la facture de la vente soit bien imprimer.
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction
                          onClick={() =>
                            createInvoice(client, finalProduits, total)
                          }
                        >
                          Confirmer la vente
                        </AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                </div>
              </div>
            </div>
          </div>
          <div className="overflow-y-auto">
            <ListeSelect setFinalProduits={setFinalProduits} />
          </div>
        </div>
      </div>
      <div className="flex-[2] overflow-y-auto">
        <CathegorieAndProduit />
      </div>
    </div>
  );
}
