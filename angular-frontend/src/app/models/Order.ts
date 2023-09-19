import { Entity } from "./Entity";

export class Order extends Entity {
    // -------- API -----------
    // numero_ped_Rca!:number;
    // numero_ped_erp!:string;
    // codigoCliente!:string;
    // NOMECLIENTE!:string;
    // data!:Date;
    // status!:Order.Status;
    // critica?:Order.Critica;
    // tipo!:Order.Tipo;
    // legendas?:Order.Legenda[];

    // Figma
    valorTotal:number = 0;
    qtdeItens:number = 0;
    valorFrete:number = 0;
}

// export namespace Order {
//     export enum Status {
//         EmProcessamento = "Em Processamento",
//         Processando = "Processando"
//     }
//     export enum Critica {
//         SUCESSO,
//         FALHA_PARCIAL
//     }
//     export enum Tipo {
//         PEDIDO,
//         ORCAMENTO
//     }
//     export enum Legenda {
//         PEDIDO_SOFREU_CORTE,
//         PEDIDO_FEITO_TELEMARKETING,
//         PEDIDO_CANCELADO_ERP,
//     }
// }