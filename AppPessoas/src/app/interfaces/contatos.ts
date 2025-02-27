import { IPessoasCompleta } from "./pessoaCompleta";

export interface IContatos {
  id: number | null,
  nome: string,
  tipoContato: string,
  contato: string,
  pessoas: IPessoasCompleta[]
}
