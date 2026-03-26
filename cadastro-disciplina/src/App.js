import React, { useState } from "react";
import "./App.css";

function App() {

  const [formData, setFormData] = useState({
    nome: "",
    descricao: "",
    curso: "",
    periodo: "",
    professor: "",
    alunos: ""
  });

  const [mostrarModal, setMostrarModal] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setMostrarModal(true);
  };

  return (
    <div className="container">

      <h1>Cadastro de Disciplina</h1>

      <form onSubmit={handleSubmit}>

        <label>Nome da Disciplina</label>
        <input
          type="text"
          name="nome"
          required
          onChange={handleChange}
        />

        <label>Descrição da Disciplina</label>
        <textarea
          name="descricao"
          required
          onChange={handleChange}
        />

        <label>Curso</label>
        <input
          type="text"
          name="curso"
          required
          onChange={handleChange}
        />

        <label>Período</label>
        <input
          type="text"
          name="periodo"
          required
          onChange={handleChange}
        />

        <label>Professor</label>
        <input
          type="text"
          name="professor"
          required
          onChange={handleChange}
        />

        <label>Quantidade de Alunos</label>
        <input
          type="number"
          name="alunos"
          required
          onChange={handleChange}
        />

        <button type="submit">Cadastrar</button>

      </form>

      {mostrarModal && (

        <div className="modal">

          <div className="modal-content">

            <h2>Disciplina Cadastrada</h2>

            <p><b>Nome:</b> {formData.nome}</p>
            <p><b>Descrição:</b> {formData.descricao}</p>
            <p><b>Curso:</b> {formData.curso}</p>
            <p><b>Período:</b> {formData.periodo}</p>
            <p><b>Professor:</b> {formData.professor}</p>
            <p><b>Quantidade de Alunos:</b> {formData.alunos}</p>

            <button onClick={() => setMostrarModal(false)}>
              Fechar
            </button>

          </div>

        </div>

      )}

    </div>
  );
}

export default App;