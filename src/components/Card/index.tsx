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

  const userImg = user?.avatar ? user.avatar : avatarImg;

  return (
    <>
      <Collapse className={task.completed ? "completed" : ""}>
        <TitleCollapse>
          <span>{task.title}</span>
          <img src={chesvronDownImg} alt="Ver detalhes" draggable="false" />
        </TitleCollapse>
        <MainCollapse>
          <div className="creator">
            <img src={userImg} draggable="false" alt={user.name} width="48" />
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
                title="Apagar"
                alt="Apagar task"
              />
            </div>

            <aside>
              {!task.completed ? (
                <>
                  <div className="icon-group">
                    <Link to={`/edit/${task.id}`}>
                      <img
                        src={editImg}
                        draggable="false"
                        title="Editar"
                        alt="Editar task"
                      />
                    </Link>
                  </div>
                  <div className="icon-group">
                    <img
                      src={completeImg}
                      onClick={() => modal("C", task.id)}
                      draggable="false"
                      title="Completar"
                      alt="Task completa"
                    />
                  </div>
                </>
              ) : (
                ""
              )}
            </aside>
          </section>
        </FooterCollapse>
      </Collapse>
    </>
  );
}

export default Card;
