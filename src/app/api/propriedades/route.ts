import {
  RequestPropriedadesDTO,
  ResponseMessageDTO,
} from "@/dto/propriedades";
import { CreatePropriedade, ReadPropriedades } from "@/services/propriedades";

export async function GET() {
  const result = await ReadPropriedades();
  Response.json(result);
}

export async function POST(request: Request) {
  const body: RequestPropriedadesDTO = await request.json();
  const id = await CreatePropriedade(body);
  const response: ResponseMessageDTO = {id: id, message: "adicionado com sucesso"}
  Response.json(response);
}
