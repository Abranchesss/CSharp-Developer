import { Entity } from "./Entity";

export class Client extends Entity{
    codigo!:string;
    nome!:string;

    public override toString = () : string => {
        return `${this.id} - ${this.nome}`;
    }
}