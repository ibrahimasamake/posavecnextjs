import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import personnePhoto from "@/lib/image/3d/Personne.jpg";
import { useClientStore } from "@/lib/myStoreZustend";
import { eventSelectUseClient } from "@/lib/rxjsEvent";
import { User } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

type UserProps = {
  image: string;
  nom: string;
  prenom: string;
  number: string;
};

const users: UserProps[] = [
  {
    image: "https://source.unsplash.com/500x500/?random=10",
    nom: "Samake",
    prenom: "Ibrahima",
    number: "+221 77 777 777",
  },
  {
    image: "https://source.unsplash.com/random=12",
    nom: "Traore",
    prenom: "Sekou",
    number: "+221 77 188 777",
  },
  {
    image: "https://source.unsplash.com/random=74",
    nom: "Kone",
    prenom: "Dramane",
    number: "+221 77 741 777",
  },
  {
    image: "https://source.unsplash.com/random=54",
    nom: "Couloubaly",
    prenom: "Ichiaka",
    number: "+221 77 777 55",
  },
  {
    image: "https://source.unsplash.com/random=54",
    nom: "Couloubaly",
    prenom: "Ichiaka",
    number: "+221 77 777 55",
  },
  {
    image: "https://source.unsplash.com/random=54",
    nom: "Couloubaly",
    prenom: "Ichiaka",
    number: "+221 77 777 55",
  },
  {
    image: "https://source.unsplash.com/random=54",
    nom: "Couloubaly",
    prenom: "Ichiaka",
    number: "+221 77 777 55",
  },
];

export function DialogDemo() {
  const setClient = useClientStore((state) => state.setClient);

  const [closeDialog, setCloseDialog] = useState<boolean>(false);

  return (
    <Dialog open={closeDialog}>
      <DialogTrigger asChild>
        <Button
          onClick={() => {
            setCloseDialog(true);
          }}
          className="p-5 flex gap-1"
          variant="outline"
        >
          <User size={16} />
          <p className="self-center">Choisir un client</p>
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Selection client</DialogTitle>
          <DialogDescription>
            Vous avez la possibilité de choisir le client.
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col">
          <div className="space-y-2">
            <div className="w-full flex gap-1">
              <Input
                id="search"
                placeholder="Recherche par numéro ou nom/prénom"
                className="col-span-3"
              />
              <Button>Ajouter</Button>
            </div>
            <Card className="p-2 max-h-[250px] overflow-y-auto">
              <div>
                {users.map((item, i) => (
                  <Card
                    key={i}
                    className="flex gap-2 mb-2 p-1 cursor-pointer hover:bg-primary/40 hover:text-white"
                    onClick={() => {
                      const client = {
                        nom: item.nom,
                        prenom: item.prenom,
                        numero: item.number,
                      };
                      setClient(client);
                      eventSelectUseClient.next(client);
                      setCloseDialog(false);
                    }}
                  >
                    <Image
                      src={personnePhoto}
                      alt={`${item.nom} ${item.prenom}`}
                      width={60}
                      height={60}
                      className="rounded-full "
                    />
                    <div className="self-center">
                      <div className="flex gap-2 justify-center ">
                        <p className="text-sm font-medium">{item.nom}</p>
                        <p className="text-sm">{item.prenom}</p>
                      </div>
                      <p className="text-sm">{item.number}</p>
                    </div>
                  </Card>
                ))}
              </div>
            </Card>
          </div>
        </div>
        {/*  <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter> */}
      </DialogContent>
    </Dialog>
  );
}
