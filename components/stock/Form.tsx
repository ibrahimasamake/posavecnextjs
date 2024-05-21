"use client"

import Link from "next/link"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage,} from "@/components/ui/form"
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue,} from "@/components/ui/select"
import {toast} from "@/components/ui/use-toast";
import {Input} from "@/components/ui/input";
import {Card} from "@/components/ui/card";
import {Sectionmeduin} from "@/components/Sectionmeduin";

const FormSchema = z.object({
    cathegorie: z.string({required_error: "S'il vous plait entre la cathegorie",}),
    title:z.string({required_error:"S'il vous plait entre le titre du produits"}),
    prixEngro:z.coerce.number({required_error:"S'il vous plait entre le prix engro du produits"}),
    prixVente:z.coerce.number({required_error:"S'il vous plait entre le prix de vente du produits"}).positive(),
    quantite:z.coerce.number({required_error:"S'il vous plait entre le prix de vente du produits"}).positive(),
    file:z.any({required_error:"S'il vous plait entre le prix de vente du produits"})
})

export function SelectForm() {
    const form = useForm<z.infer<typeof FormSchema>>({
        resolver:zodResolver(FormSchema),
    })

    function onSubmit(data: z.infer<typeof FormSchema>) {
        console.log({data})
    }

    return (
        <Sectionmeduin className="border  border-cyan-950/20  p-3 rounded">
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className=" space-y-4">
                    <FormField
                        control={form.control}
                        name="cathegorie"
                        render={({ field }) => (
                            <FormItem>

                                <FormLabel className={''}>Cathegorie du Produit</FormLabel>

                                <Select onValueChange={field.onChange} defaultValue={field.value}>

                                    <FormControl>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Entre la cathegorie du produits " />
                                        </SelectTrigger>
                                    </FormControl>

                                    <SelectContent>
                                        <SelectItem value="electronic">Electronic</SelectItem>
                                        <SelectItem value="patisserie">Patisserie</SelectItem>
                                        <SelectItem value="boisson">Boisson</SelectItem>
                                    </SelectContent>

                                </Select>

                                {/*<FormDescription>*/}
                                {/*    You can manage email addresses in your{" "}*/}
                                {/*    <Link href="/examples/forms">email settings</Link>.*/}
                                {/*</FormDescription>*/}

                                <FormMessage />
                            </FormItem>

                        )}
                    />

                    {/*champ 2*/}
                    <FormField
                        control={form.control}
                        name="title"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className={''}>Nom du produits </FormLabel>
                                <Input type="text" {...field} placeholder="Entre le nom du produit" />
                                <FormMessage />

                            </FormItem>

                        )}
                    />

                    {/*champ 2 end*/}

                    <Card className={'flex gap-4 p-4 flex-col md:flex-row'} >
                        <div className={'flex-1'}>
                            {/*champ 3*/}
                            <FormField
                                control={form.control}
                                name="prixEngro"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className={''}>Prix Engro</FormLabel>
                                        <div className={'flex items-center gap-2'}>
                                            <Input className={''} type="number" min={0} placeholder="" {...field} />
                                            <div className={'text-xs'}>FCFA</div>

                                        </div>
                                        <FormMessage  />

                                    </FormItem>

                                )}
                            />
                            {/*champ 3 end*/}

                            {/*champ 4*/}
                            <FormField
                                control={form.control}
                                name="prixVente"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className={''}>Prix de Vente</FormLabel>
                                        <div className={'flex items-center gap-2'}>
                                            <Input className={''} type="number" min={0}  {...field} />
                                            <div className={'text-xs'}>FCFA</div>

                                        </div>
                                        <FormMessage/>

                                    </FormItem>

                                )}
                            />
                            {/*champ 4 end*/}

                            {/*champ 5*/}
                            <FormField
                                control={form.control}
                                name="quantite"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className={''}>Quantite </FormLabel>
                                        <div className={'flex items-center gap-2'}>
                                            <Input className={''} type="number" min={1} {...field} />

                                        </div>
                                        <FormMessage/>

                                    </FormItem>

                                )}
                            />
                            {/*champ 5 end*/}
                        </div >

                        <div className={'md:self-end flex-1'}>
                            {/*champ 6*/}
                            <FormField
                                control={form.control}
                                name="file"
                                render={({ field }) => (
                                        <FormItem>
                                            <FormLabel className={''}>Image du Produits </FormLabel>
                                            <div className={'flex items-center gap-2'}>
                                                <Input className={''} type="file"  placeholder={'image du produit'} {...field} />
                                            </div>
                                            <FormMessage/>

                                        </FormItem>



                                )}
                            />
                        </div>
                    </Card>

                    <Button type="submit" className={'w-full block  text-sm text-center bg-gray-200 hover:bg-green-700'}>Enregistre le produit</Button>
                </form>
            </Form>

        </Sectionmeduin>

    )
}
