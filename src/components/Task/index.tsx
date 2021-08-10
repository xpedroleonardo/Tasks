import { FormEvent } from "react";
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

type TaskProps = {
  task?: any;
  handleSubmitForm(event: FormEvent): void;
};

function Task(props: TaskProps) {
  const { handleSubmitForm, task } = props;

  const titleExample = "Título";
  const descriptionExample = `Lorem, ipsum dolor sit amet consectetur adipisicing elit.
  Accusantium voluptatibus odio natus numquam provident
  aLorem, ipsum dolor sit amet consectetur adipisicing elit.
  Accusantium voluptatibus odio natus numquam provident
  aliquam vel iste quasi repelle.`;

  function inputCollapseTextEffect({ value }: EventTarget & HTMLInputElement) {
    let text = document.getElementById("titleCollapse");
    if (text) text.textContent = value;

    if (text?.textContent === "" && !task) {
      text.textContent = titleExample;
    } else if (text?.textContent === "") {
      text.textContent = task.title;
    }
  }

  function textAreaCollapseTextEffect({
    value,
  }: EventTarget & HTMLTextAreaElement) {
    let text = document.getElementById("descriptionCollapse");
    if (text) {
      text.textContent = value;
    }

    if (text?.textContent === "" && !task) {
      text.textContent = descriptionExample;
    } else if (text?.textContent === "") {
      text.textContent = task.description;
    }
  }

  return (
    <div className="container animate-up">
      <Main>
        <form action="" onSubmit={handleSubmitForm} autoComplete="off">
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
                defaultValue={task?.title}
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
                defaultValue={task?.description}
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
              <span id="titleCollapse">
                {task?.title ? task.title : titleExample}
              </span>
              <img src={chevronUpImg} alt="" draggable="false" />
            </TitleCollapse>
            <DescriptionCollapse>
              <div className="creator">
                <img src={avatarImg} alt="" draggable="false" />
                <span>Usuário</span>
              </div>

              <p id="descriptionCollapse">
                {task?.description ? task.description : descriptionExample}
              </p>
            </DescriptionCollapse>
          </Collapse>
        </aside>
      </Main>
    </div>
  );
}

export default Task;
