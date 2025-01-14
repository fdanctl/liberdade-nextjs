"use client";
import { useState } from "react";

export default function Page() {
  const [state, setState] = useState({
    morada: "",
    localização: "",
    quartos: "",
    valorEmprestimo: "",
    mensalidade: "",
    ganhosMensais: "",
  });

  return (
    <div className="flex flex-col space-y-1">
      <label htmlFor="morada">Morada</label>
      <input
        type="text"
        id="morada"
        value={state.morada}
        onChange={(e) => setState((ps) => ({ ...ps, morada: e.target.value }))}
        className="max-w-sm text-black"
      />
      <label htmlFor="localização">Localização</label>
      <input
        type="text"
        id="localização"
        value={state.localização}
        onChange={(e) =>
          setState((ps) => ({ ...ps, localização: e.target.value }))
        }
        className="max-w-sm text-black"
      />
      <label htmlFor="quartos">Quartos</label>
      <input
        type="text"
        id="quartos"
        value={state.quartos}
        onChange={(e) => setState((ps) => ({ ...ps, quartos: e.target.value }))}
        className="max-w-sm text-black"
      />
      <label htmlFor="valorEmprestimo">Valor do Empréstimo</label>
      <input
        type="number"
        id="valorEmprestimo"
        value={state.valorEmprestimo}
        onChange={(e) =>
          setState((ps) => ({ ...ps, valorEmprestimo: e.target.value }))
        }
        className="max-w-sm text-black"
      />
      <label htmlFor="mensalidade">Mensalidade</label>
      <input
        type="number"
        id="mensalidade"
        value={state.mensalidade}
        onChange={(e) =>
          setState((ps) => ({ ...ps, mensalidade: e.target.value }))
        }
        className="max-w-sm text-black"
      />
      <label htmlFor="ganhosMensais">Ganhos Mensais</label>
      <input
        type="number"
        id="ganhosMensais"
        value={state.ganhosMensais}
        onChange={(e) =>
          setState((ps) => ({ ...ps, ganhosMensais: e.target.value }))
        }
        className="max-w-sm text-black mb-10"
      />
      <button
        className="bg-blue-500 hover:bg-blue-500 text-white font-bold py-2 px-1 rounded max-w-sm"
        type="submit"
        style={{ marginTop: "3rem" }}
      >
        Submeter
      </button>
    </div>
  );
}
