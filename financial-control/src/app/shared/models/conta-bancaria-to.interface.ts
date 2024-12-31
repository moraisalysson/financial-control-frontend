export interface ContaBancariaTO {
  id: number;
  nomeBanco: string;
  numeroConta: number;
  agencia: number;
  tipo: number;
  dataCriacao: Date;
  dataAtualizacao: Date;
  saldosBancarios: any[];
}
