import { HeaderGrid } from "./styles";

import chevronLeftImg from "../../assets/images/chevron-left.svg";
import { Link } from "react-router-dom";

function Header(title: string) {
  return (
    <header>
      <div className="container">
        <HeaderGrid>
          <Link to="/">
            <img src={chevronLeftImg} alt="Voltar" title="Voltar" />
          </Link>
          <h1>{title}</h1>
        </HeaderGrid>
      </div>
    </header>
  );
}

export default Header;
