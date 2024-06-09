import {Observable, Subject} from 'rxjs';
import exp from "node:constants";
type Product={
    quantite:number;
    image:string;
    prix:number;
    name:string
    id:number
}

export const eventSelectUserProductPos = new Subject<Product>();
export const eventSelectUserProductQuantitePos=new Subject<number>();
export const eventSelectUserProductSelectPos=new Subject<Product[]>();

// Emit events from any part of your application
// eventSelectUserProductPos.next(updatedProductList);
