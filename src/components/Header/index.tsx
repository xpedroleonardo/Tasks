import { Link } from "react-router-dom";
import { HeaderGrid } from "./styles";

import chevronLeftImg from "../../assets/images/chevron-left.svg";

type HeaderProps = {
  title: string;
};

function Header({ title }: HeaderProps) {
  return (
    <header>
      <div className="container">
        <HeaderGrid>
          <Link to="/">
            <img src={chevronLeftImg} title="Voltar" alt="Voltar" />
          </Link>
          <h1>{title}</h1>
        </HeaderGrid>
      </div>
    </header>
  );
}

export default Header;
