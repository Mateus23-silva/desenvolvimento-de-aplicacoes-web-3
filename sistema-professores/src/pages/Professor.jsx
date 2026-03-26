import { useState } from "react"
import Modal from "../components/Modal"

function Professor({ nome, disciplinas }) {

  const [mostrarModal, setMostrarModal] = useState(false)
  const [dados, setDados] = useState({})

  function enviarFormulario(e) {
    e.preventDefault()

    const form = e.target

    const novoContato = {
      aluno: form.aluno.value,
      assunto: form.assunto.value,
      mensagem: form.mensagem.value
    }

    setDados(novoContato)
    setMostrarModal(true)
  }

  return (
    <div>

      <h2>{nome}</h2>

      <h3>Disciplinas</h3>

      <ul>
        {disciplinas.map((disciplina, index) => (
          <li key={index}>{disciplina}</li>
        ))}
      </ul>

      <h3>Contato</h3>

      <form onSubmit={enviarFormulario} className="form">

        <input
          type="text"
          name="aluno"
          placeholder="Nome do Aluno"
          required
        />

        <input
          type="text"
          name="assunto"
          placeholder="Assunto"
          required
        />

        <textarea
          name="mensagem"
          placeholder="Mensagem"
          required
        />

        <button type="submit">
          Enviar
        </button>

      </form>

      {mostrarModal && (
        <Modal
          dados={dados}
          fechar={() => setMostrarModal(false)}
        />
      )}

    </div>
  )

}

export default Professor