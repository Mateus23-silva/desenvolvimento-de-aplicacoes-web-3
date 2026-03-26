function Modal({ dados, fechar }) {

  return (

    <div className="modal">

      <div className="modal-content">

        <h3>Contato enviado</h3>

        <p><b>Aluno:</b> {dados.aluno}</p>
        <p><b>Assunto:</b> {dados.assunto}</p>
        <p><b>Mensagem:</b> {dados.mensagem}</p>

        <button onClick={fechar}>
          Fechar
        </button>

      </div>

    </div>

  )

}

export default Modal