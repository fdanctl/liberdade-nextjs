export interface PropriedadeInterface {
  morada: string;
  localizacao: string;
  quartos: number;
  valorEmprestimo: number;
  mensalidade: number;
  rendimentos: number;
  ganhosMensais: number;
}

export interface PropriedadeInterfaceWithId {
  _id: string;
  morada: string;
  localizacao: string;
  quartos: number;
  valorEmprestimo: number;
  mensalidade: number;
  rendimentos: number;
  ganhosMensais: number;
}