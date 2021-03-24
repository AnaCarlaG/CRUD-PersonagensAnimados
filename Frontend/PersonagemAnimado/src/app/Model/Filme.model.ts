import { Guid } from "guid-typescript";
import { Personagem } from "./Personagem.model";

export class Filme{
    id: Guid;
    nome: string;
    genero: string;
    descricao: string;
    ano: number;
    personagens: Personagem[];
}
