import { create } from "zustand";

type CathegorieState = {
  cathegorie: string;
  openCathegorieBar: boolean;
  loader: boolean;
  search: string;
  setloader: (newValue: boolean) => void;
  updateCathegorie: (newCathegorie: string) => void;
  closeCathegorieBar: (newValue: boolean) => void;
  setSearch: (search: string) => void;
};

const useCathegorieStore = create<CathegorieState>((set) => ({
  cathegorie: "",
  openCathegorieBar: false,
  loader: false,
  search: "",
  closeCathegorieBar: (newValue: boolean) =>
    set({ openCathegorieBar: newValue }),
  updateCathegorie: (newCathegorie) => set({ cathegorie: newCathegorie }),
  setloader: (newValue: boolean) => set({ loader: newValue }),
  setSearch: (search: string) => set({ search: search }),
}));

export default useCathegorieStore;

type posProduct = {
  search: string;
  setSearch: (value: string) => void;
};

export const useProductPosStore = create<posProduct>((set) => ({
  search: "",
  setSearch: (value: string) => set({ search: value }),
}));

type Product = {
  quantite: number;
  image: string;
  prix: number;
  name: string;
  id: number;
};

type State = {
  selectedProduct: (value: Product) => Product;
  selectedList: Product[];
  setSelectedList: (list: Product[]) => void;
};

export const useSelectProductClient = create<State>((set) => ({
  selectedProduct: (value: Product) => value,
  selectedList: [],
  setSelectedList: (list) => set({ selectedList: list }),
}));

export type ClientPos = {
  nom: string;
  prenom: string;
  numero: string;
};
type ClientStore = {
  nom: string;
  prenom: string;
  numero: string;
  setClient: (value: ClientPos) => void;
};

export const useClientStore = create<ClientStore>((set) => ({
  nom: "",
  prenom: "",
  numero: "",
  setClient: (value: ClientPos) =>
    set({ nom: value.nom, prenom: value.prenom, numero: value.numero }),
}));
