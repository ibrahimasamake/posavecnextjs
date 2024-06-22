export type StockProduitType = {
  id: string;
  image: string;
  nom: string;
  cathegorie: string;
  prixEngro: number;
  prixVente: number;
  quantite: number;
};

// Génère un tableau de 40 produits électroniques avec des noms et des catégories réalistes
export let generateElectronicProducts: StockProduitType[];

const productNames = [
  "Smartphone",
  "Laptop",
  "Tablet",
  "Smartwatch",
  "Headphones",
  "Bluetooth Speaker",
  "Camera",
  "Drone",
  "Monitor",
  "Keyboard",
  "Mouse",
  "Printer",
  "External Hard Drive",
  "USB Flash Drive",
  "Router",
  "Gaming Console",
  "Smart TV",
  "Projector",
  "VR Headset",
  "Fitness Tracker",
  "Digital Frame",
  "Smart Home Hub",
  "Wireless Charger",
  "Electric Toothbrush",
  "Portable Power Bank",
  "Car GPS",
  "E-Reader",
  "Action Camera",
  "Security Camera",
  "Smart Thermostat",
  "Smart Light Bulb",
  "Streaming Device",
  "Portable Speaker",
  "Smart Plug",
  "Smart Doorbell",
  "Robot Vacuum",
  "Electric Scooter",
  "Drone with Camera",
  "Gaming Headset",
  "Smart Scale",
];

const categories = [
  "Mobile Devices",
  "Computers",
  "Tablets",
  "Wearables",
  "Audio",
  "Photography",
  "Drones",
  "Displays",
  "Peripherals",
  "Printing",
  "Storage",
  "Networking",
  "Gaming",
  "Home Entertainment",
  "Smart Home",
  "Fitness",
  "Power",
  "Transportation",
];

const getRandomInt = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const electronicProducts: StockProduitType[] = [];
for (let i = 0; i < 40; i++) {
  const productName =
    productNames[Math.floor(Math.random() * productNames.length)];
  let prixEngro, prixVente;

  switch (productName) {
    case "Smartphone":
    case "Laptop":
      prixEngro = getRandomInt(300, 1000);
      prixVente = getRandomInt(600, 1500);
      break;
    case "Tablet":
    case "Smartwatch":
      prixEngro = getRandomInt(200, 500);
      prixVente = getRandomInt(400, 1000);
      break;
    case "Headphones":
    case "Bluetooth Speaker":
    case "Mouse":
    case "Keyboard":
    case "USB Flash Drive":
      prixEngro = getRandomInt(20, 100);
      prixVente = getRandomInt(50, 200);
      break;
    case "Camera":
    case "Drone":
    case "VR Headset":
    case "Projector":
    case "Gaming Console":
    case "Smart TV":
    case "Gaming Headset":
    case "Drone with Camera":
      prixEngro = getRandomInt(150, 800);
      prixVente = getRandomInt(300, 1200);
      break;
    case "Monitor":
    case "Printer":
    case "Router":
    case "External Hard Drive":
      prixEngro = getRandomInt(50, 300);
      prixVente = getRandomInt(100, 500);
      break;
    case "Portable Power Bank":
    case "Car GPS":
    case "E-Reader":
    case "Action Camera":
    case "Security Camera":
    case "Smart Thermostat":
    case "Smart Light Bulb":
    case "Streaming Device":
    case "Portable Speaker":
    case "Smart Plug":
    case "Smart Doorbell":
    case "Robot Vacuum":
    case "Electric Scooter":
    case "Smart Scale":
      prixEngro = getRandomInt(50, 200);
      prixVente = getRandomInt(100, 400);
      break;
    default:
      prixEngro = getRandomInt(50, 300);
      prixVente = getRandomInt(100, 600);
      break;
  }

  const product: StockProduitType = {
    id: `prod${i}`,
    image: `https://source.unsplash.com/100x100/?electronics,${i}`,
    nom: productName,
    cathegorie: categories[Math.floor(Math.random() * categories.length)],
    prixEngro: prixEngro,
    prixVente: prixVente,
    quantite: getRandomInt(1, 50),
  };
  electronicProducts.push(product);
}

generateElectronicProducts = electronicProducts;

// Filtrer les produits dont la quantité est inférieure à 20
export let generateElectronicProductsFilterByQuantite: StockProduitType[];
generateElectronicProductsFilterByQuantite = electronicProducts.filter(
  (product) => product.quantite < 20
);

// Supprimer des éléments par ID
export function deleteItems(id: string): StockProduitType[] {
  return (generateElectronicProducts = electronicProducts.filter(
    (product) => product.id !== id
  ));
}

// Catégories des produits en stock

// Type pour les données de catégorie
type CathegorieDataType = {
  image: string;
  nom: string;
  quantite: number;
};

let cathegorieData: CathegorieDataType[] = [];

for (let i = 0; i < categories.length; i++) {
  const data: CathegorieDataType = {
    image: `https://source.unsplash.com/100x100/?random=${i}`,
    nom: categories[i],
    quantite: Math.floor(Math.random() * (5000 - 500 + 1)) + 500,
  };
  cathegorieData.push(data);
}

export const Data_Cathegorie: CathegorieDataType[] = cathegorieData;
