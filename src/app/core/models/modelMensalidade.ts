import { Cliente } from "./modelCliente";

export interface Mensalidade{
  id: number;
  mes: number;
  ano: number;
  valorMensalidade: any;
  contadorImpressoes: number;
  valorExcedente: number
  valorTotal: any;
  dataVencimento: any;
  dataPagamento: any;
  statusPagamento: String;
  cliente: Cliente;
}
