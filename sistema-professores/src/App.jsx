import { useState } from "react"
import Menu from "./components/Menu"
import Home from "./pages/Home"
import Professor from "./pages/Professor"

function App() {

  const [pagina, setPagina] = useState("home")

  return (
    <div className="container">

      <h1>Sistema de Professores</h1>

      <Menu setPagina={setPagina} />

      {pagina === "home" && <Home />}

      {pagina === "prof1" &&
        <Professor
          nome="Professor Álvaro"
          disciplinas={[
            "Algoritmos | ADS | 1º semestre",
            "Padrões de Projetos | ADS | 3º semestre"
          ]}
        />
      }

      {pagina === "prof2" &&
        <Professor
          nome="Professora Renata"
          disciplinas={[
            "Redes de Computadores | ADS | 2º semestre",
            "Estrutura de Dados | ADS | 3º semestre"
          ]}
        />
      }

      {pagina === "prof3" &&
        <Professor
          nome="Professor Rodolfo"
          disciplinas={[
            "Desenvolvimento Aplicado à Web 3 | ADS | 5º semestre",
            "Inteligência Artificial | ADS | 5º semestre"
          ]}
        />
      }

    </div>
  )
}

export default App