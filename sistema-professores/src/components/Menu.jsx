function Menu({ setPagina }) {

  return (
    <nav className="menu">

      <button onClick={() => setPagina("home")}>
        Página Inicial
      </button>

      <button onClick={() => setPagina("prof1")}>
        Professor Álvaro
      </button>

      <button onClick={() => setPagina("prof2")}>
        Professora Renata
      </button>

      <button onClick={() => setPagina("prof3")}>
        Professor Rodolfo
      </button>

    </nav>
  )
}

export default Menu