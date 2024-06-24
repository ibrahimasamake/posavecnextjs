import { Radio, RadioGroup } from "@nextui-org/radio";
import { Select, SelectItem } from "@nextui-org/select";
import { Plus } from "lucide-react";
import Image from "next/image";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";

export function AddProduit() {
  return (
    <form className="relative h-full overflow-auto flex gap-2 mt-2  ">
      <div className="flex flex-col gap-2  px-4  flex-[2]">
        <div className=" space-y-4">
          <div className="text-medium font-semibold flex  space-x-2">
            <Plus />
            <p>Ajout d&apos;un nouveau produit</p>
          </div>
          <Card className="bg-accent/80 p-4 border-none space-y-2">
            <h2 className="text-xs font-semibold py-2">
              Informations du produit
            </h2>

            <div className="flex flex-col gap-2">
              <div className="flex flex-col  gap-1">
                <Label id="">Nom du produit</Label>
                <Input className="bg-slate-600/20 "></Input>
              </div>

              <div className="flex flex-col  gap-1">
                <Label id="">Description du produit</Label>
                <Textarea
                  cols={10}
                  rows={5}
                  className="bg-slate-600/20 "
                ></Textarea>
              </div>
            </div>

            <div className="flex gap-2 ">
              <div className=" flex-1 flex flex-col space-y-2">
                <Label>Capacité</Label>
                <p>Capacité du produit</p>
                <div className="flex gap-1 ">
                  <Card className="w-14 h-14 flex flex-col items-center  justify-center">
                    <p>32</p>
                  </Card>
                  <Card className="w-14 h-14 flex flex-col items-center  justify-center">
                    <p>64</p>
                  </Card>
                  <Card className="w-14 h-14 flex flex-col items-center  justify-center">
                    <p>128</p>
                  </Card>
                  <Card className="w-14 h-14 flex flex-col items-center  justify-center">
                    <p>256</p>
                  </Card>
                  <Card className="w-14 h-14 flex flex-col items-center border-black border-1   justify-center">
                    <p className=" text-tiny">more</p>
                  </Card>
                </div>
              </div>

              {/* // */}
              <div className=" flex-1 flex flex-col space-y-2">
                <Label>Qualite</Label>
                <div className="flex gap-1">
                  <div className="flex gap-1 text-tiny ">
                    <RadioGroup
                      label="Qualite du produit"
                      orientation="horizontal"
                    >
                      <Radio value="local">Local</Radio>
                      <Radio value="original">Original</Radio>
                      <Radio value="preminuim">Preminuim</Radio>
                    </RadioGroup>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          <Card className="bg-accent p-4">
            <h2 className="text-medium font-bold">Prix & stock</h2>
            <div className="flex  gap-2">
              <div className=" flex-1 flex gap-2 flex-col ">
                <div>
                  <Label>Prix</Label>
                  <Input className="bg-slate-600/20"></Input>
                </div>

                <div>
                  <Label>Quantite</Label>
                  <Input className="bg-slate-600/20"></Input>
                </div>
              </div>

              <div className="flex-1 flex gap-2 flex-col">
                <div>
                  <Label>Prix</Label>
                  <Input className="bg-slate-600/20"></Input>
                </div>

                <div>
                  <Label>Quantite</Label>
                  <Input className="bg-slate-600/20"></Input>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>

      <div className="sticky top-0 overflow-hidden flex-1 flex flex-col gap-2 mr-4">
        <div className="text-xl font-semibold flex space-x-3 ">
          <div className="text-sm border-1 border-black px-4 py-2 rounded-full">
            Garde
          </div>
          <div className="text-sm border-1 bg-success-400  px-4 py-2 rounded-full">
            Ajoute le produit
          </div>
        </div>

        <div className=" flex  gap-2 flex-col  ">
          <Card className=" bg-accent/80 p-4 space-y-3">
            <Label className="font-bold text-medium">Image du product</Label>

            <div className="relative w-72 h-64 flex items-center justify-center mx-auto p-4 bg-slate-600/20 rounded-md">
              <Image
                width={200}
                height={200}
                src="/images/product/img-9.png"
                alt="produit"
                className="rounded-lg  object-cover"
              />
            </div>
            <div className="flex gap-2 justify-center">
              <Image
                width={100}
                height={100}
                className="w-16 h-16 border-1  bg-slate-600/20  border-slate-600 p-2 rounded-md"
                src="/images/product/img-9.png"
                alt="produit"
              ></Image>
              <Image
                width={100}
                height={100}
                className="w-16 h-16 border-1 bg-slate-600/20  p-2 rounded-md"
                src="/images/product/img-9.png"
                alt="produit"
              ></Image>
              <Image
                width={100}
                height={100}
                className="w-16 h-16 border-1 bg-slate-600/20   p-2 rounded-md"
                src="/images/product/img-9.png"
                alt="produit"
              ></Image>
              <div className="w-16 h-16 border-1 border-success-700 p-2 rounded-md flex flex-col items-center justify-center">
                <Plus color="green"></Plus>
              </div>
            </div>
          </Card>

          <Card className="p-2 flex flex-col gap-2 bg-accent">
            <Label>Cathegorie </Label>
            <p>Cathegorie du produit</p>
            <div>
              <Select
                label="Selectionner une cathegorie"
                className="max-w-xs bg-slate-600/20"
              >
                {["telephone", "tablette", "pc"].map((cath, id) => (
                  <SelectItem key={id}>{cath}</SelectItem>
                ))}
              </Select>
            </div>
            <Button className="text-medium max-w-fit px-4 border-1 bg-success-400 py-2 rounded-full">
              Nouveau
            </Button>
          </Card>
        </div>
      </div>
    </form>
  );
}
{
  /* <SelectForm></SelectForm> */
}
{
  /* <div className="container tex p-4 uppercase  bg-gradient-to-r font-extrabold from-cyan-900 to-indigo-950 text-transparent bg-clip-text "> */
}

// const [cathegorieProduit, setCathegorieProduit] = useState('');
// const [nomProduit, setNomProduit] = useState('');
// const [prixEngroProduit, setprixEngroProduit] = useState('');
// const [prixDetailProduit, setprixDetailProduit] = useState('');
// const [quantite, setQuantite] = useState('')

// <Sectionmeduin className="">
//     <div className={'text-2xl  text-center p-2'}>Add New Produits</div>
//     <form onSubmit={handleSubmit} className={'space-y-3'}>
//         <div>
//             <Label htmlFor="nomProduit">Cathegorie du Produits </Label>
//             <Input
//                 type="text"
//                 id="cathegorieProduit"
//                 value={cathegorieProduit}
//                 onChange={(e) => setCathegorieProduit(e.target.value)}
//             />
//         </div>
//         <div>
//             <Label htmlFor="nomProduit">Nom du produits</Label>
//             <Input
//                 type="text"
//                 id="nomProduit"
//                 value={nomProduit}
//                 onChange={(e) => setNomProduit(e.target.value)}
//             />
//         </div>
//         <div>
//             <Label htmlFor="prixEngroProduit">Prix Engro du Produit</Label>
//             <Input
//                 type="number"
//                 id="prixEngroProduit"
//                 value={prixEngroProduit}
//                 onChange={(e) => setprixEngroProduit(e.target.value)}
//             />
//         </div>
//         <div>
//             <Label htmlFor="prixDetailProduit">Prix detail du Produit</Label>
//             <Input
//                 type="number"
//                 id="prixDetailProduit"
//                 value={prixDetailProduit}
//                 onChange={(e) => setprixDetailProduit(e.target.value)}
//             />
//         </div>
//         <div>
//             <label htmlFor="message">Quantite:</label>
//             <Input
//                 id="quantite"
//                 value={quantite}
//                 type={'number'}
//                 onChange={(e) => setQuantite(e.target.value)}
//             ></Input>
//         </div>
//         <button className={cn(buttonVariants({variant: 'outline'}))} type="submit">Envoyer</button>
//     </form>
// </Sectionmeduin>
