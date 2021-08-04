import { FormEvent, useState } from "react";
import Header from "../../components/Header";

import avatarImg from "../../assets/images/avatar.svg";
import chevronUpImg from "../../assets/images/chevron-up.svg";

import {
  Main,
  Group,
  Collapse,
  TitleCollapse,
  DescriptionCollapse,
  Button,
} from "./styles";

function New() {
  // const [title, setTitle] = useState("");
  // const [description, setDescription] = useState("");

  function formPrevent(event: FormEvent) {
    event.preventDefault();
  }

  function inputCollapseTextEffect({ value }: EventTarget & HTMLInputElement) {
    let text = document.getElementById("titleCollapse");
    if (text) text.textContent = value;

    if (text?.textContent === "") text.textContent = "Título";
  }

  function textAreaCollapseTextEffect({
    value,
  }: EventTarget & HTMLTextAreaElement) {
    let text = document.getElementById("descriptionCollapse");
    if (text) text.textContent = value;

    if (text?.textContent === "") {
      text.textContent = `Lorem, ipsum dolor sit amet consectetur adipisicing elit.
      Accusantium voluptatibus odio natus numquam provident
      aLorem, ipsum dolor sit amet consectetur adipisicing elit.
      Accusantium voluptatibus odio natus numquam provident
      aliquam vel iste quasi repelle.`;
    }
  }

  return (
    <>
      <Header title="Nova Task" />
      <div className="container">
        <Main>
          <form action="" onSubmit={formPrevent} autoComplete="off">
            <fieldset>
              <legend>Dados da Tarefa</legend>

              <div className="separator"></div>

              <Group>
                <label htmlFor="title">Título</label>
                <input
                  onChange={(event) => inputCollapseTextEffect(event.target)}
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
                  onChange={(event) => textAreaCollapseTextEffect(event.target)}
                  placeholder="Digite a descrição da tarefa..."
                  maxLength={255}
                  name="description"
                  id="description"
                ></textarea>
              </Group>
              <div className="button">
                <Button type="submit">Enviar</Button>
              </div>
            </fieldset>
          </form>

          <aside>
            <h1>Como vai ficar:</h1>
            <div className="separator"></div>

            <Collapse>
              <TitleCollapse>
                <span id="titleCollapse">Título</span>
                <img src={chevronUpImg} alt="" draggable="false" />
              </TitleCollapse>
              <DescriptionCollapse>
                <div className="creator">
                  <img src={avatarImg} alt="" draggable="false" />
                  <span>Usuário</span>
                </div>

                <p id="descriptionCollapse">
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
