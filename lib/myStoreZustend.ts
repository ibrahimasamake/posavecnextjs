import create from 'zustand'
type CathegorieState = {
    cathegorie: string;
    openCathegorieBar:boolean,
    updateCathegorie: (newCathegorie: string) => void;
    closeCathegorieBar: (newValue: boolean) => void;
};

const useCathegorieStore = create<CathegorieState>((set) => ({
    cathegorie: "",
    openCathegorieBar:false,
    closeCathegorieBar: (newValue:boolean) => set({ openCathegorieBar:newValue  }),
    updateCathegorie: (newCathegorie) => set({ cathegorie: newCathegorie }),
}));

export default useCathegorieStore;