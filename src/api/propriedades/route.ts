import { FindPropriedades } from "@/data/propriedades";
import {
  RequestPropriedadesDTO,
  ResponsePropriedadesDTO,
} from "@/dto/propriedades";
import { CreatePropriedade } from "@/services/propriedades";

export async function GET() {
  const result = await FindPropriedades();
  Response.json(result);
}

export async function POST(request: Request) {
  const body: RequestPropriedadesDTO = await request.json();
  const id = await CreatePropriedade(body);
  const response: ResponsePropriedadesDTO = {id: id, message: "adicionado com sucesso"}
  Response.json(response);
}
