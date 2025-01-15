import { Card } from "@/components/Card";
import { ResponsePropriedadesDTO } from "@/dto/propriedades";
import Link from "next/link";

export async function Page() {
  const res = await fetch("/api/propriedades");
  const propriedades: ResponsePropriedadesDTO[] = await res.json();
  return (
    <>
      <h1>Propriedades</h1>
      <div className="grid grid-cols-3 gap-2">
        {propriedades.map((e) => (
          <Card
            _id={e._id}
            morada={e.morada}
            localizacao={e.localizacao}
            quartos={e.quartos}
            mensalidade={e.mensalidade}
            valorEmprestimo={e.valorEmprestimo}
            rendimentos={e.rendimentos}
            ganhosMensais={e.ganhosMensais}
            mesesRestantes={e.mesesRestantes}
          />
        ))}
      </div>
      <Link href="/" className="text-2xl">+</Link>
    </>
  );
}
