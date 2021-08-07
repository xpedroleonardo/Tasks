import { Link } from "react-router-dom";
import { useState } from "react";

import { New, SectionHeader, Main, Wrapper } from "./styles";
import Modal from "../../components/Modal";

import avatarImg from "../../assets/images/avatar.svg";
import plusImg from "../../assets/images/plus.svg";
import Card from "../../components/Card";

function Home() {
  const [open, setOpen] = useState(false);
  const [modalShow, setModalShow] = useState(false);

  let test = [1, 2, 3, 4, 5];

  function modalOpen() {
    setOpen(!open);
  }

  function modalStatus(action: string) {
    if (action === "D") {
      setModalShow(true);
      modalOpen();
    } else {
      setModalShow(false);
      modalOpen();
    }
  }

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
                  title="Ver perfil"
                  draggable="false"
                />
              </Link>
            </aside>
          </SectionHeader>
        </div>
      </header>
      <div className="container animate-up">
        <Main>
          <New>
            <Link to="/new" className="">
              <img src={plusImg} alt="Nova task" />
              Nova task
            </Link>
          </New>

          <Wrapper>
            {test.map((tes) => {
              return (
                <Card
                  key={tes}
                  title="Título"
                  modal={modalStatus}
                  description={descrip}
                />
              );
            })}
          </Wrapper>
        </Main>
        <Modal modalDelete={modalShow} isOpen={modalOpen} open={open} />
      </div>
    </>
  );
}

export default Home;
