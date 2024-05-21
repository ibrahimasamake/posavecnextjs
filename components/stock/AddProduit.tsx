import React from 'react';
import {SelectForm} from "@/components/stock/Form";
import {Sectionmeduin} from "@/components/Sectionmeduin";


export function AddProduit() {



    return (
      <Sectionmeduin>
          <div className="container text-center text-3xl p-4 uppercase  bg-gradient-to-r font-extrabold from-cyan-900 to-indigo-950 text-transparent bg-clip-text ">Ajouter un nouveau produit</div>
          <SelectForm></SelectForm>
      </Sectionmeduin>
    );
}



// const [cathegorieProduit, setCathegorieProduit] = useState('');
// const [nomProduit, setNomProduit] = useState('');
// const [prixEngroProduit, setprixEngroProduit] = useState('');
// const [prixDetailProduit, setprixDetailProduit] = useState('');
// const [quantite, setQuantite] = useState('')

// <Sectionmeduin className="">
//     <div className={'text-2xl  text-center p-2'}>Add New Produits</div>
//     <form onSubmit={handleSubmit} className={'space-y-3'}>
//         <div>
//             <Label htmlFor="nomProduit">Cathegorie du Produits </Label>
//             <Input
//                 type="text"
//                 id="cathegorieProduit"
//                 value={cathegorieProduit}
//                 onChange={(e) => setCathegorieProduit(e.target.value)}
//             />
//         </div>
//         <div>
//             <Label htmlFor="nomProduit">Nom du produits</Label>
//             <Input
//                 type="text"
//                 id="nomProduit"
//                 value={nomProduit}
//                 onChange={(e) => setNomProduit(e.target.value)}
//             />
//         </div>
//         <div>
//             <Label htmlFor="prixEngroProduit">Prix Engro du Produit</Label>
//             <Input
//                 type="number"
//                 id="prixEngroProduit"
//                 value={prixEngroProduit}
//                 onChange={(e) => setprixEngroProduit(e.target.value)}
//             />
//         </div>
//         <div>
//             <Label htmlFor="prixDetailProduit">Prix detail du Produit</Label>
//             <Input
//                 type="number"
//                 id="prixDetailProduit"
//                 value={prixDetailProduit}
//                 onChange={(e) => setprixDetailProduit(e.target.value)}
//             />
//         </div>
//         <div>
//             <label htmlFor="message">Quantite:</label>
//             <Input
//                 id="quantite"
//                 value={quantite}
//                 type={'number'}
//                 onChange={(e) => setQuantite(e.target.value)}
//             ></Input>
//         </div>
//         <button className={cn(buttonVariants({variant: 'outline'}))} type="submit">Envoyer</button>
//     </form>
// </Sectionmeduin>