import { Cliente } from "./modelCliente";

export interface Maquina{
  id: number;
  marca: String
  modelo: String;
  numeroSerie: String
  valorMaquina: any;
  statusMaquina: String;
  cliente: Cliente;
}
