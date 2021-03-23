import { Guid } from "guid-typescript";

export interface Personagem{
    id: string;
    nome:string;
    genero:string;
    descricao:string;
    poderes:string;
    filmeID: string;
}