import { Link } from "react-router-dom";

import {
  New,
  SectionHeader,
  Main,
  Wrapper,
  Collapse,
  TitleCollapse,
  MainCollapse,
  FooterCollapse,
} from "./styles";

import avatarImg from "../../assets/images/avatar.svg";
import plusImg from "../../assets/images/plus.svg";
import chesvronDownImg from "../../assets/images/chevron-down.svg";
import editImg from "../../assets/images/edit.svg";
import trashImg from "../../assets/images/trash.svg";
import completeImg from "../../assets/images/circle-ok.svg";

function Home() {
  let test = [1, 2, 3, 4, 5];

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
              Nova tarefa
            </Link>
          </New>

          <Wrapper>
            {test.map((tes) => {
              return (
                <Collapse key={tes}>
                  <TitleCollapse>
                    <span>Título</span>
                    <img
                      src={chesvronDownImg}
                      alt="Ver detalhes"
                      title="Ver detalhes"
                      draggable="false"
                    />
                  </TitleCollapse>
                  <MainCollapse>
                    <div className="creator">
                      <img
                        src={avatarImg}
                        draggable="false"
                        alt="User avatar"
                        width="48"
                      />
                      <span>Usuário</span>
                    </div>
                    <p>
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Accusantium voluptatibus odio natus numquam provident
                      aLorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Accusantium voluptatibus odio natus numquam provident
                      aliquam vel iste quasi repelle.
                    </p>
                  </MainCollapse>
                  <FooterCollapse>
                    <div className="separator"></div>
                    <section>
                      <div className="icon">
                        <img
                          src={trashImg}
                          draggable="false"
                          alt="Excluir task"
                        />
                      </div>

                      <aside>
                        <div className="icon">
                          <Link to="/edit">
                            <img
                              src={editImg}
                              draggable="false"
                              alt="Editar task"
                            />
                          </Link>
                        </div>
                        <div className="icon">
                          <img
                            src={completeImg}
                            draggable="false"
                            alt="Task completa"
                          />
                        </div>
                      </aside>
                    </section>
                  </FooterCollapse>
                </Collapse>
              );
            })}
          </Wrapper>
        </Main>
      </div>
    </>
  );
}

export default Home;
