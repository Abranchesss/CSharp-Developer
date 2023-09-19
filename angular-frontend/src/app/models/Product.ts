import { Entity } from "./Entity";

export class Product extends Entity{
    codigo!:string;
    nome!:string;
    precoUnitario!:number; //idealmente usar uma biblioteca, como a decimal.js, para cálculos mais precisos envolvendo dinheiro.
    imagemUrl?:string;
}