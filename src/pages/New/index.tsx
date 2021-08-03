import { useState } from "react";
import Header from "../../components/Header";

import avatarImg from "../../assets/images/avatar.svg";
import chevronUpImg from "../../assets/images/chevron-up.svg";

import {
  Main,
  Group,
  Collapse,
  TitleCollapse,
  DescriptionCollapse,
} from "./styles";

function New() {
  const [description, setDescription] = useState("");

  function text(params: EventTarget & HTMLInputElement) {
    console.log(params.value);
  }

  return (
    <>
      <Header title="Nova Task" />
      <div className="container">
        <Main>
          <form action="" autoComplete="off">
            <fieldset>
              <legend>Dados da Tarefa</legend>

              <div className="separator"></div>

              <Group>
                <label htmlFor="title">Título</label>
                <input
                  onChange={(event) => text(event.target)}
                  placeholder="Digite o titúlo da tarefa..."
                  type="text"
                  name="title"
                  id="title"
                  maxLength={30}
                  required
                />
              </Group>
              <Group>
                <label htmlFor="description">Descrição</label>
                <textarea
                  required
                  placeholder="Digite a descrição da tarefa..."
                  maxLength={255}
                  name="description"
                  id="description"
                ></textarea>
              </Group>
              <div className="button">
                <button type="submit">Enviar</button>
              </div>
            </fieldset>
          </form>

          <aside>
            <h1>Como vai ficar:</h1>
            <div className="separator"></div>

            <Collapse>
              <TitleCollapse>
                <span>Título</span>
                <img src={chevronUpImg} draggable="false" />
              </TitleCollapse>
              <DescriptionCollapse>
                <div className="creator">
                  <img src={avatarImg} draggable="false" />
                  <span>Usuário</span>
                </div>

                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing
                  elit.Accusantium voluptatibus odio natus numquam provident
                  aLorem,ipsum dolor sit amet consectetur adipisicing elit.
                  Accusantiumvoluptatibus odio natus numquam provident aliquam
                  vel iste quasirepelle.
                </p>
              </DescriptionCollapse>
            </Collapse>
          </aside>
        </Main>
      </div>
    </>
  );
}

export default New;
