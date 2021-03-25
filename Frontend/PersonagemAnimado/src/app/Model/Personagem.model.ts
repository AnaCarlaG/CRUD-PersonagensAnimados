import { Guid } from "guid-typescript";

export class Personagem{
    id: Guid;
    nome:string;
    genero:string;
    descricao:string;
    poderes:string;
    filmeID: Guid;
}
