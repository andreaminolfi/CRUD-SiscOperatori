export interface Procedura {
  IDProcedura: number;
  ProceduraNome: string;
  Descrizione: string;
}

export interface SiscOperatore {
  IDSiscOperatore: number;
  Utente: string;
  NomeVisualizzato: string;
  Tipo: string;
  DataCessazione?: Date;
  DataUltimoCambioPassword: Date;
  Procedure: Procedura[];
}
