import {
  ChangePropriedade,
  FindPropriedadeById,
  FindPropriedades,
  InsertPropriedade,
  RemovePropriedade,
} from "@/data/propriedades";
import { RequestPropriedadesDTO } from "@/dto/propriedades";
import { PropriedadeInterface } from "@/models/propriedades";

export async function CreatePropriedade(body: RequestPropriedadesDTO) {
  return InsertPropriedade(body);
}

export async function ReadPropriedadeById(id: string) {
  return await FindPropriedadeById(id);
}

export async function ReadPropriedades() {
  const props = await FindPropriedades();
  return props.map((e) => ({
    ...e,
    mesesRestantes: Math.ceil(e.valorEmprestimo / e.mensalidade),
  }));
}

export async function DeletePropriedade(id: string) {
  await RemovePropriedade(id);
}

export async function EditPropriedade(id: string, body: PropriedadeInterface) {
  await ChangePropriedade(id, body);
}
