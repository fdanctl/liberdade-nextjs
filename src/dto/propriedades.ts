export interface ResponseMessageDTO {
  id: string;
  message: string;
}

export interface RequestPropriedadesDTO {
  morada: string;
  localizacao: string;
  quartos: number;
  valorEmprestimo: number;
  mensalidade: number;
  rendimentos: number;
  ganhosMensais: number;
}

export interface ResponsePropriedadesDTO {
  _id: string;
  morada: string;
  localizacao: string;
  quartos: number;
  valorEmprestimo: number;
  mensalidade: number;
  rendimentos: number;
  ganhosMensais: number;
  mesesRestantes: number;
}
