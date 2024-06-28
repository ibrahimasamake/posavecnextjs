import { zodResolver } from "@hookform/resolvers/zod";
import { Radio, RadioGroup } from "@nextui-org/radio";
import { Select, SelectItem } from "@nextui-org/select";
import { Plus } from "lucide-react";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";

const productSchema = z.object({
  productName: z.string().min(1, "Le nom du produit est requis"),
  productDescription: z
    .string()
    .min(1, "La description du produit est requise"),
  productCapacity: z.string(),
  productQuality: z.enum(["local", "original", "premium"]),
  productPrice: z.string().min(1, "Le prix du produit est requis"),
  productQuantity: z.string().min(1, "La quantité du produit est requise"),
  productCategory: z.string().min(1, "La catégorie du produit est requise"),
});

export function AddProduit() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(productSchema),
  });

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="relative h-full overflow-auto flex gap-2"
    >
      <div className="flex flex-col gap-2 px-4 mt-2 flex-[2]">
        <div className="space-y-4">
          <div className="text-medium font-semibold flex space-x-2">
            <Plus />
            <p>Ajout d&apos;un nouveau produit</p>
          </div>
          <Card className="bg-accent/80 p-4 border-none space-y-2">
            <h2 className="text-xs font-semibold py-2">
              Informations du produit
            </h2>
            <div className="flex flex-col gap-2">
              <Card className="p-2 flex flex-col gap-2 bg-accent">
                <Label>Cathegorie</Label>
                <p>Cathegorie du produit</p>
                <div>
                  <Select
                    {...register("productCategory")}
                    label="Selectionner une cathegorie"
                    className="border-1 border-black"
                  >
                    {["telephone", "tablette", "pc"].map((cath, id) => (
                      <SelectItem
                        value={cath}
                        key={id}
                        color="primary"
                        className=" bg-slate-600/20 p-2"
                      >
                        {cath}
                      </SelectItem>
                    ))}
                  </Select>
                  {errors.productCategory && (
                    <p>{errors.productCategory.message as string}</p>
                  )}
                </div>
                <Button className="text-medium max-w-fit px-4 border-1 bg-success-400 py-2 rounded-full">
                  Nouveau
                </Button>
              </Card>
              <div className="flex flex-col gap-1">
                <Label>Nom du produit</Label>
                <Input
                  {...register("productName")}
                  className="bg-slate-600/20"
                />
                {errors.productName && (
                  <p>{errors.productName.message as string}</p>
                )}
              </div>
              <div className="flex flex-col gap-1">
                <Label>Description du produit</Label>
                <Textarea
                  {...register("productDescription")}
                  cols={10}
                  rows={5}
                  className="bg-slate-600/20"
                />
                {errors.productDescription && (
                  <p>{errors.productDescription.message as string}</p>
                )}
              </div>
            </div>
            <div className="flex gap-2">
              <div className="flex-1 flex flex-col space-y-2">
                <Label>Capacité</Label>
                <Input
                  {...register("productCapacity")}
                  className="bg-slate-600/20"
                />
              </div>
              <div className="flex-1 flex flex-col space-y-2">
                <Label>Qualité</Label>
                <RadioGroup
                  {...register("productQuality")}
                  name="productQuality"
                  label="Qualité du produit"
                  orientation="horizontal"
                >
                  <Radio value="local">Local</Radio>
                  <Radio value="original">Original</Radio>
                  <Radio value="premium">Premium</Radio>
                </RadioGroup>
                {errors.productQuality && (
                  <p>{errors.productQuality.message as string}</p>
                )}
              </div>
            </div>
          </Card>
          <Card className="bg-accent p-4">
            <h2 className="text-xs font-semibold py-2">Prix et stock</h2>
            <div className="flex gap-2">
              <div className="flex-1 flex gap-2 flex-col">
                <div>
                  <Label>Prix</Label>
                  <Input
                    {...register("productPrice")}
                    className="bg-slate-600/20"
                    type="number"
                  />
                  {errors.productPrice && (
                    <p>{errors.productPrice.message as string}</p>
                  )}
                </div>
                <div>
                  <Label>Quantité</Label>
                  <Input
                    {...register("productQuantity")}
                    className="bg-slate-600/20"
                    type="number"
                  />
                  {errors.productQuantity && (
                    <p>{errors.productQuantity.message as string}</p>
                  )}
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
      <div className="sticky top-0 overflow-hidden flex-1 flex flex-col gap-2 mr-4">
        <div className="text-xl font-semibold flex justify-end space-x-3 mt-2">
          <Button
            type="submit"
            className="text-sm bg-success-400 text-black/50 px-4 py-2 rounded-full"
          >
            Ajouter le produit
          </Button>
        </div>
        <div className="flex gap-2 flex-col">
          <Card className="bg-accent/80 p-4 space-y-3">
            <Label className="font-bold text-medium">Image du produit</Label>
            <div className="relative w-72 h-64 flex items-center justify-center mx-auto p-4 bg-slate-600/20 rounded-md">
              <Image
                width={200}
                height={200}
                src="/images/product/img-9.png"
                alt="produit"
                className="rounded-lg object-cover"
              />
            </div>
          </Card>
        </div>
      </div>
    </form>
  );
}
