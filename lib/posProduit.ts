
const categories = [
    "Mobile Devices", "Computers", "Tablets", "Wearables", "Audio",
    "Photography", "Drones", "Displays", "Peripherals", "Printing",
    "Storage", "Networking", "Gaming", "Home Entertainment", "Smart Home",
    "Fitness", "Power", "Transportation"
];
const productNames = [
    "Smartphone", "Laptop", "Tablet", "Smartwatch", "Headphones",
    "Bluetooth Speaker", "Camera", "Drone", "Monitor", "Keyboard",
    "Mouse", "Printer", "External Hard Drive", "USB Flash Drive", "Router",
    "Gaming Console", "Smart TV", "Projector", "VR Headset", "Fitness Tracker",
    "Digital Frame", "Smart Home Hub", "Wireless Charger", "Electric Toothbrush",
    "Portable Power Bank", "Car GPS", "E-Reader", "Action Camera", "Security Camera",
    "Smart Thermostat", "Smart Light Bulb", "Streaming Device", "Portable Speaker",
    "Smart Plug", "Smart Doorbell", "Robot Vacuum", "Electric Scooter", "Drone with Camera",
    "Gaming Headset", "Smart Scale"
];


//Pos ProductsData data
type typeProduitdData={
    image:string,
    nom: string,
    quantiteActuel:number,
    cathegorie:string,
    prix:number
    id:number
}
let productData: typeProduitdData[]=[]

for (let i = 0; i < 40; i++) {

    const product:typeProduitdData = {
        id:i,
        image: `https://source.unsplash.com/100x100/?random=${i}`,
        nom: productNames[i].toLowerCase(),
        cathegorie: categories[Math.floor(Math.random() * categories.length)],
        quantiteActuel: 500,
        prix: 5499,
    };
    productData.push(product)

}
export async function DataListeProducts(cathegorie: string, search: string) {
    return new Promise<typeProduitdData[]>((resolve) => {
        let result= productData;
        if (cathegorie) {
            const lowerCaseCathegorie = cathegorie.toLowerCase();
            result = result.filter((element) => element.cathegorie.toLowerCase() === lowerCaseCathegorie);
        }
        if (search) {
            const lowerCaseSearch = search.toLowerCase();
            result = result.filter((element) => element.nom.toLowerCase().includes(lowerCaseSearch));
        }
        resolve( result);
    });
}

// pos end Produits Operation



//liste Cathrgorie Pos //

type listeCathegorie={
    image: string;
    nom: string;
    quantite: number;}

const Liste_Cathegorie:listeCathegorie[] = [];

for (let i = 0; i < categories.length; i++) {
    const product = {
        image: `https://source.unsplash.com/100x100/?random=${i}`,
        nom: categories[i],
        quantite: 20,
    };

    Liste_Cathegorie.push(product);
}


export function DataListeCathegorie(search: string) {
    if (search) {
        const lowerCaseSearch = search.toLowerCase();
        return Liste_Cathegorie.filter((element) => element.nom.toLowerCase().includes(lowerCaseSearch));
    }
    return Liste_Cathegorie;
}
//liste cathegorie Pos //


type product={
    quantite:number;
    image:string;
    prix:number;
}

export const ListeProdutSelect:product[]=[]