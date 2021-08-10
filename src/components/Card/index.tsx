import { Link } from "react-router-dom";

import avatarImg from "../../assets/images/avatar.svg";
import chesvronDownImg from "../../assets/images/chevron-down.svg";
import editImg from "../../assets/images/edit.svg";
import cancelImg from "../../assets/images/cancel.svg";
import completeImg from "../../assets/images/circle-ok.svg";

import {
  Collapse,
  TitleCollapse,
  MainCollapse,
  FooterCollapse,
} from "./styles";

type CardProps = {
  task: {
    id: number;
    title: string;
    description: string;
    completed: boolean;
  };
  modal(action: string, id: number): void;
  user: {
    name?: string;
    avatar?: string;
  };
};

function Card(props: CardProps) {
  const { task, user, modal } = props;

  return (
    <Collapse className={task.completed ? "completed" : ""}>
      <TitleCollapse>
        <span>{task.title}</span>
        <img
          src={chesvronDownImg}
          alt="Ver detalhes"
          title="Ver detalhes"
          draggable="false"
        />
      </TitleCollapse>
      <MainCollapse>
        <div className="creator">
          <img src={avatarImg} draggable="false" alt="User avatar" width="48" />
          <span>{user.name}</span>
        </div>
        <p>{task.description}</p>
      </MainCollapse>
      <FooterCollapse>
        <div className="separator"></div>
        <section>
          <div className="icon-group">
            <img
              src={cancelImg}
              onClick={() => modal("D", task.id)}
              draggable="false"
              alt="Apagar task"
            />
          </div>

          <aside>
            <div className="icon-group">
              <Link to="/edit">
                <img src={editImg} draggable="false" alt="Editar task" />
              </Link>
            </div>
            <div className="icon-group">
              <img
                src={completeImg}
                onClick={() => modal("C", task.id)}
                draggable="false"
                alt="Task completa"
              />
            </div>
          </aside>
        </section>
      </FooterCollapse>
    </Collapse>
  );
}

export default Card;
