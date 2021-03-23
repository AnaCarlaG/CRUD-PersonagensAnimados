import { Guid } from "guid-typescript";
import { Personagem } from "./Personagem.model";

export interface Filme{
    id: string;
    nome: string;
    genero: string;
    descricao: string;
    ano: number;
    personagens: Personagem[];
}