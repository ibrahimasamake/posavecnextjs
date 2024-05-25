import {create} from 'zustand'

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