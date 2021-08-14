import { useHistory } from "react-router-dom";

import logoH2 from "../assets/images/logoh2dark.png";
import logoEmpresa from "../assets/images/logos/territorio_pizza.png";

import { Button } from "../components/Button";

import "../styles/home.scss";

export function Home() {
  const history = useHistory();

  function navegateToMenu() {
    history.push("/menu/");
  }

  return (
    <div>
      <div id="home">
        <header>
          <img src={logoH2} alt="Logo Agência h2" />
        </header>
        <main>
          <img src={logoEmpresa} alt="Logo" />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis iusto est quibusdam voluptatibus consequatur.</p>
        </main>
        <footer>
          <Button onClick={navegateToMenu}>Ver cardápio</Button>
          <div className="status">● Estamos abertos</div>
        </footer>
      </div>
    </div>
  );
}