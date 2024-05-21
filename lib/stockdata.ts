export type StockType={
    id: string
    image: string,
        nom: string,
        cathegorie:string,
        prixEngro:number,
        prixVente: number,
        quantite:number
}
// Génère un tableau de 40 produits électroniques avec des noms et des catégories aléatoires
export let generateElectronicProducts:StockType[]

    const electronicProducts:StockType[]= [];
    for (let i = 0; i < 40; i++) {
        const product = {
            id:`bgn${i}`,
            image: `https://source.unsplash.com/100x100/?random=${i}`,
            nom: 'electronic',
            cathegorie: 'electronic',
            prixEngro: Math.floor(Math.random() * (5000 - 500 + 1)) + 500,
            prixVente: Math.floor(Math.random() * (10000 - 5000 + 1)) + 5000,
            quantite: Math.floor(Math.random() * 100) + 1,
        };
        electronicProducts.push(product);
    }

generateElectronicProducts=electronicProducts;

//filter produit quantite low
export let generateElectronicProductsFilterByQuantite:StockType[]
generateElectronicProductsFilterByQuantite=electronicProducts.filter((electronicProduct) =>electronicProduct.quantite < 20)


//delete Items
export  function deleteItems(id:any):StockType[]{

    return generateElectronicProducts = electronicProducts.filter((electronicProduct) => electronicProduct.id !== id);

}




//Pos cathegorie data
 type typeCathegorieData={
    image:string,
     nom: string,
     quantite:number,
}
let cathegorieData=[]

for (let i = 0; i < 40; i++) {
    const product:typeCathegorieData = {
        image: `https://source.unsplash.com/100x100/?random=${i}`,
        nom: `electronic +${i}`,
        quantite: Math.floor(Math.random() * (5000 - 500 + 1)) + 500,
    };
    cathegorieData.push(product)

}

export  const Data_Cathegorie:typeCathegorieData[]= cathegorieData

// Pos end Cathegorie Operation



//Pos ProductsData data
type typeProduitdData={
    image:string,
    nom: string,
    quantiteActuel:number,
    prix:number
}
let productData=[]

for (let i = 0; i < 40; i++) {
    const product:typeProduitdData = {
        image: `https://source.unsplash.com/100x100/?random=${i}`,
        nom: `electronic +${i}`,
        quantiteActuel: Math.floor(Math.random() * (5000 - 500 + 1)) + 500,
        prix: Math.floor(Math.random() * (120 - 500 + 1)) + 500,
    };
    productData.push(product)

}

export  const Data_Produitc:typeProduitdData[] = productData

// pos end Produits Operation