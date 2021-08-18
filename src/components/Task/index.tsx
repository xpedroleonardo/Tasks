import { useState, useEffect, FormEvent } from "react";

import api from "../../services/api";
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

type UserProps = {
  name: string;
  avatar: string;
};

function Task(props: TaskProps) {
  const [user, setUser] = useState<UserProps>();
  const { handleSubmitForm, task } = props;

  useEffect(() => {
    api.get("/user").then((res) => {
      setUser(res.data);
    });
  }, []);

  const userImg = user?.avatar ? user.avatar : avatarImg;

  const titleExample = "Título";
  const descriptionExample = `Lorem, ipsum dolor sit amet consectetur adipisicing elit.
  Accusantium voluptatibus odio natus numquam provident
  aLorem, ipsum dolor sit amet consectetur adipisicing elit.
  Accusantium voluptatibus odio natus numquam provident
  aliquam vel iste quasi repelle.`;

  function titleTextInput(value: string) {
    let text = document.getElementById("titleCollapse");
    if (text) text.textContent = value;

    if (text?.textContent === "" && !task) {
      text.textContent = titleExample;
    } else if (text?.textContent === "") {
      text.textContent = task.title;
    }
  }

  function descriptionTextInput(value: string) {
    let text = document.getElementById("descriptionCollapse");
    if (text) text.textContent = value;

    if (text?.textContent === "" && !task) {
      text.textContent = descriptionExample;
    } else if (text?.textContent === "") {
      text.textContent = task.description;
    }
  }

  return (
    <div className="container animate-up">
      <Main>
        <form onSubmit={handleSubmitForm} autoComplete="off">
          <fieldset>
            <legend>Dados da Task</legend>

            <div className="separator"></div>

            <Group>
              <label htmlFor="title">Título</label>
              <input
                onChange={(e) => titleTextInput(e.target.value)}
                placeholder="Digite o titúlo da tarefa..."
                type="text"
                name="title"
                id="title"
                maxLength={30}
                defaultValue={task?.title ? task.title : null}
                required
              />
            </Group>
            <Group>
              <label htmlFor="description">Descrição</label>
              <textarea
                required
                onChange={(e) => descriptionTextInput(e.target.value)}
                placeholder="Digite a descrição da tarefa..."
                maxLength={255}
                name="description"
                id="description"
                defaultValue={task?.description ? task.description : null}
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
                <img src={userImg} alt={user?.name} draggable="false" />
                <span>{user?.name}</span>
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
