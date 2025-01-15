import { ResponsePropriedadesDTO } from "@/dto/propriedades";

export function Card(props: ResponsePropriedadesDTO){
    return (
        <div className="border-white rounded">
            <p>{props.morada}</p>
            <p>{props.localizacao}</p>
            <p>Lucro mensal: {props.rendimentos}</p>
            <p>Custo mensal: {props.mensalidade}</p>
            <p>{props.valorEmprestimo}</p>
            <p>falta {props.mesesRestantes} para estar pago</p>
        </div>
    )
}

