import { IPessoas } from "./pessoas";

export interface IContatos {
  id: string,
  name: string,
  type: string,
  contact: string,
  pessoas: IPessoas[]
}
