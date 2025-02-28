import { IPessoasCompleta } from "./pessoaCompleta";
import { IPessoas } from "./pessoas";

export interface IContatos {
  id: number | null,
  nome: string,
  tipoContato: string,
  contato: string,
  pessoa: { id: number | null };
}
