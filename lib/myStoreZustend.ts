import {create} from 'zustand'
import {number, object} from "zod";
import {th} from "@faker-js/faker";

type CathegorieState = {
    cathegorie: string;
    openCathegorieBar:boolean,
    loader:boolean,
    search:string,
    setloader:(newValue: boolean) => void,
    updateCathegorie: (newCathegorie: string) => void;
    closeCathegorieBar: (newValue: boolean) => void;
    setSearch: (search: string) => void;
};

const useCathegorieStore = create<CathegorieState>((set) => ({
    cathegorie: "",
    openCathegorieBar:false,
    loader:false,
    search:"",
    closeCathegorieBar: (newValue:boolean) => set({ openCathegorieBar:newValue  }),
    updateCathegorie: (newCathegorie) => set({ cathegorie: newCathegorie }),
    setloader:(newValue: boolean) => set({ loader:newValue }),
    setSearch:(search: string) => set({ search:search }),

}));

export default useCathegorieStore;


type posProduct={
    search: string,
    setSearch:(value: string) => void,
}

export const useProductPosStore= create<posProduct>((set)=>({
    search:"",
    setSearch:(value:string) => set({search:value}),
}));

type product={
    quantite:number;
    image:string;
    prix:number;
}


type SelectProductClient={
    image:string,
    prix:number,
    quantite:number,
    updateQuantite:(newQuantite: number) => void,
    setProduct:(objects:product)=>void
    getProduct:(image:string,prix:number,quantite:number)=>object;
}

//pos
export  const useSelectProductClient= create<SelectProductClient>((set)=>({
    image:"",
    prix:0,
    quantite:0,
    updateQuantite:(newQuantite)=>set({quantite:newQuantite}),
    setProduct:(object:product)=>set({image:object.image,prix:object.prix,quantite:object.quantite}),
    getProduct:(image:string,prix:number,quantite:number)=>{
        return{image,prix,quantite}
    }

}))