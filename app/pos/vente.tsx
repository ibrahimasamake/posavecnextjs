import { formatPrice } from "@/lib/actionUtils";
import { useEffect, useState } from "react";

type ProductProps = {
  quantite: number;
  prixTotal: number;
  name: string;
};

function ProductComponent({ quantite, prixTotal, name }: ProductProps) {
  return (
    <div className="flex justify-around  items-center  gap-2 p-4 border rounded-lg  shadow-sm bg-white hover:shadow-lg transition-shadow duration-200">
      <h2 className="flex-1 overflow-x-hidden font-medium">{name}</h2>
      <p className="text-gray-70 flex-1 ">
        <span className="font-semibold">{quantite}</span>
      </p>
      <p className="text-gray-70 flex-1">
        <span>{formatPrice(prixTotal / quantite)}</span>
      </p>
      <div>
        <p className="text-gray-700">
          <span className="font-semibold text-danger-700">
            {formatPrice(prixTotal)}
          </span>
        </p>
      </div>
    </div>
  );
}

type Product = {
  id: number;
  quantite: number;
  image: string;
  prix: number;
  name: string;
};

type AllProduitsSelectValideProps = {
  produits: Product[];
};

export function AllProduitsSelectValide({
  produits,
}: AllProduitsSelectValideProps) {
  const [listProduit, setListProduct] = useState<Product[]>(produits);

  useEffect(() => {
    setListProduct(produits);
  }, [produits]);

  return (
    <div className="flex flex-col gap-4 p-2 my-2 bg-gray-50 rounded-lg shadow-inner   max-h-96">
      <div>Liste des produits</div>
      {listProduit.length > 0 ? (
        listProduit.map((item) => (
          <ProductComponent
            key={item.id}
            name={item.name}
            quantite={item.quantite}
            prixTotal={item.quantite * item.prix}
          />
        ))
      ) : (
        <div className="text-center text-gray-500">
          Aucun produit sélectionné
        </div>
      )}
    </div>
  );
}
