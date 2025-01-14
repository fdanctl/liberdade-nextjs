export interface ResponsePropriedadesDTO {
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
