import { Product } from "./Product";

export class ProductOrder{

    constructor(product:Product){
        this.product = product;
    }

    product!:Product;
    qtde:number = 1;
}