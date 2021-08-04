import { Link } from "react-router-dom";
import { New, SectionHeader, Main, Wrapper } from "./styles";

import avatarImg from "../../assets/images/avatar.svg";
import plusImg from "../../assets/images/plus.svg";
import Card from "../../components/Card";

function Home() {
  let test = [1, 2, 3, 4, 5];

  const descrip = `Lorem, ipsum dolor sit amet consectetur adipisicing elit.
  Accusantium voluptatibus odio natus numquam provident
  aLorem, ipsum dolor sit amet consectetur adipisicing elit.
  Accusantium voluptatibus odio natus numquam provident
  aliquam vel iste quasi repelle.`;

  return (
    <>
      <header>
        <div className="container">
          <SectionHeader>
            <h1>Tasks</h1>

            <aside>
              <Link to="/profile">
                <img
                  src={avatarImg}
                  alt="User avatar"
                  title="sdnas"
                  draggable="false"
                />
              </Link>
            </aside>
          </SectionHeader>
        </div>
      </header>
      <div className="container">
        <Main>
          <New>
            <Link to="/new" className="">
              <img src={plusImg} alt="Nova task" />
              Nova task
            </Link>
          </New>

          <Wrapper>
            {test.map((tes) => {
              return <Card key={tes} title="Título" description={descrip} />;
            })}
          </Wrapper>
        </Main>
      </div>
    </>
  );
}

export default Home;
