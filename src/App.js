import React, { useState } from "react";
import "./styles.css";

const App = () => {
  const [ativo, setAtivo] = useState(false);
  const [dados, setDados] = useState({
    nome: "Gabriela",
    idade: 29,
    faculdade: "nao possui"
  });
  function handleClick() {
    setAtivo(!ativo);
    setDados({ ...dados, faculdade: "possui faculdade" });
  }
  return (
    <div className="App">
      <p> {dados.nome} </p>
      {dados.idade}
      <p>{dados.faculdade}</p>
      <h2>Aprendendo useState</h2>
      <button onClick={handleClick}> {ativo ? "ativo" : "inativo"} </button>
    </div>
  );
};
export default App;
