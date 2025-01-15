import {
  DeletePropriedade,
  EditPropriedade,
  ReadPropriedadeById,
} from "@/services/propriedades";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const id = (await params).id;

  const result = await ReadPropriedadeById(id);

  Response.json(result);
}

export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const id = (await params).id;

  await DeletePropriedade(id);

  Response.json({ message: "apagado com sucesso" });
}

export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const id = (await params).id;

  const body = await request.json();

  EditPropriedade(id, body);

  Response.json({ message: "atualizado com sucesso" });
}
