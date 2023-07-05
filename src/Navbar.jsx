import logo4 from './logo4podcast.png';

export default function Navbar() {
    return (
      <header>
          <nav className="Barramenu">
            <ul>
            <img src={logo4} className="App-logo1" alt="logo4"/>
            <h2>PODCASTING</h2>
              <li>
                <a href="/">Inicio</a>
              </li>
              <li>
                <a href="/Login">Entrar</a>
              </li> 
              <li>
                <a href="/Registro">Registrarse</a>
              </li>
              <li>
                <a href="/Modificar">Modificar cuenta</a>
              </li>
            </ul>
          </nav>
      </header>
    )
  }
  