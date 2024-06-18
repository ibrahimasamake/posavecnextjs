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
import { Input } from "@/components/ui/input";
import { formatPrice } from "@/lib/actionUtils";
import personnePhoto from "@/lib/image/3d/Personne.jpg";
import {
  eventSelectUseClient,
  eventSelectUserProductPos,
  eventSelectUserProductSelectPos,
} from "@/lib/rxjsEvent";
import jsPDF from "jspdf";
import "jspdf-autotable";
import { CircleX, Minus, Plus } from "lucide-react";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { Subscription } from "rxjs";
import { AllProduitsSelectValide } from "./vente";

type Product = {
  id: number;
  quantite: number;
  image: string;
  prix: number;
  name: string;
};
type ProductPosPropos = {
  setFinalProduits: (proudct: Product[]) => void;
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

  useEffect(() => {
    const Liste = () => {
      return listProduit;
    };
    const liste = Liste();
    eventSelectUserProductSelectPos.next(liste);
    setFinalProduits(liste); // Met à jour finalProduits ici
  }, [listProduit, setFinalProduits]);

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
      <div className="ms-auto">{formatPrice(prix)} </div>
    </div>
  );
}

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

  // Fonction pour créer une facture

  function createInvoice() {
    const doc = new jsPDF();

    // Définir les styles globaux
    doc.setFont("Helvetica", "bold");
    doc.setFontSize(16);
    doc.setTextColor(40, 40, 40);
    doc.text("SAM INFORMATIQUE MALI", 14, 20);

    // Ajouter le header avec les informations de l'entreprise
    doc.setFontSize(12);
    doc.setFont("Helvetica", "normal");
    doc.text("Sam Informatique Mali", 14, 30);
    doc.text("PDG: Ibrahima Samake", 14, 36);
    doc.text("Numéro: 74171794", 14, 42);

    // Générer la date et le numéro de la facture
    const date = new Date().toLocaleDateString();
    const invoiceNumber = Math.floor(Math.random() * 1000000).toString(); // Génère un numéro de facture unique

    // Ajouter les informations de la facture
    doc.setFontSize(12);
    doc.setFont("Helvetica", "normal");
    doc.text(`Date: ${date}`, 120, 20);
    doc.text(`Facture N°: ${invoiceNumber}`, 120, 26);

    // Ajouter les informations du client
    if (client) {
      doc.text(`Client: ${client.nom} ${client.prenom}`, 120, 36);
      doc.text(`Numéro: ${client.numero}`, 120, 42);
    } else {
      doc.text("Client: inconnu", 120, 36);
    }

    // Ajouter les produits dans un tableau
    const productsTable = finalProduits.map((product, index) => [
      index + 1,
      product.name,
      product.quantite,
      `${product.prix * product.quantite} `,
    ]);

    doc.autoTable({
      head: [["#", "Produit", "Quantité", "Prix Total (FCFA)"]],
      body: productsTable,
      startY: 50,
      theme: "grid",
      headStyles: { fillColor: [22, 160, 133] }, // Couleur de l'en-tête
      alternateRowStyles: { fillColor: [240, 240, 240] }, // Couleur des lignes alternées
      styles: {
        font: "Helvetica",
        fontSize: 10,
        textColor: [40, 40, 40],
      },
      margin: { top: 50 },
    });

    // Ajouter le total avec un fond moderne
    const finalY = doc.previousAutoTable.finalY || 50;
    doc.setFontSize(12);
    doc.setTextColor(255, 255, 255); // Couleur du texte en blanc
    doc.setFillColor(255, 98, 79); // Couleur de fond en rouge orangé
    doc.rect(14, finalY + 8, 182, 12, "F"); // Rectangle pour le fond
    doc.text(`Total = ${total} F CFA `, 120, finalY + 15); // Texte du total

    // Ajouter un pied de page
    doc.setFontSize(10);
    doc.setTextColor(150, 150, 150);
    doc.text("Merci pour votre achat!", 14, finalY + 25); // Texte du total

    // Sauvegarder le PDF
    doc.save("facture.pdf");
  }

  return (
    <div className="flex flex-col lg:flex-row h-screen overflow-hidden">
      <div className="flex-1 sticky top-0 py-3">
        <div className="flex flex-col p-2 gap-2 h-full">
          <div className="space-y-2">
            <div className="flex flex-col-reverse gap-2">
              <div className="flex gap-1">
                <DialogDemo />
                <Card className="flex-[2] self-center p-2 flex gap-2 rounded-none">
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
              <div className="flex gap-1">
                <TotalPrixProductComponent />
                <div className="bg-success-600 p-2 flex self-center">
                  <AlertDialog>
                    <AlertDialogTrigger asChild>
                      <p className="text-white w-full text-center cursor-pointer  rounded-md">
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
                                <Card className="flex  bg-success-300 gap-1 items-center  p-1">
                                  <Image
                                    className="rounded-full border-1 border-success-200"
                                    alt="user"
                                    src={personnePhoto}
                                    width={50}
                                    height={50}
                                  />
                                  <div className="flex flex-col text-center">
                                    <p className="text-nowrap">
                                      Ibrahima Samake
                                    </p>
                                    <p>74171794</p>
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
                                    Veuller a alumer l'inprimente afin que la
                                    facture de la vente soit bien imprimer.
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction onClick={createInvoice}>
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
