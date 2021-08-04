import { Link } from "react-router-dom";
import { FiChevronLeft } from "react-icons/fi";
import { HeaderGrid } from "./styles";

type HeaderProps = {
  title: string;
};

function Header({ title }: HeaderProps) {
  return (
    <header>
      <div className="container">
        <HeaderGrid>
          <Link to="/">
            <FiChevronLeft height="24" width="24" color="#fff" />
          </Link>
          <h1>{title}</h1>
        </HeaderGrid>
      </div>
    </header>
  );
}

export default Header;
