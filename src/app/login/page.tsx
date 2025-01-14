"use client";
import { useState } from "react";

export default function Page() {
  const [state, setState] = useState({ username: "", password: "" });

  const handleChange = (event: string[]) => {
    setState((prevState) => ({ ...prevState, [event[0]]: event[1] }));
  };

  return (
    <div>
      <div className="flex flex-col space-y-1">
        <label htmlFor="username">Usuário:</label>
        <input
          type="username"
          id="username"
          name="username"
          value={state.username}
          onChange={(e) => handleChange(["username", e.target.value])}
          className="max-w-sm text-black"
        />
        <label htmlFor="password">Senha:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={state.password}
          onChange={(e) => handleChange(["password", e.target.value])}
          className="max-w-sm text-black"
        />
      </div>
      <button
        className="bg-blue-500 hover:bg-blue-500 text-white font-bold py-2 px-1 rounded max-w-sm"
        type="submit"
        style={{ marginTop: "3rem" }}
      >
        Entrar
      </button>
    </div>
  );
}
