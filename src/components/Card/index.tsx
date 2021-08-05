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
  title: string;
  description: string;
};

function Card({ title, description }: CardProps) {
  return (
    <Collapse>
      <TitleCollapse>
        <span>{title}</span>
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
          <span>Usuário</span>
        </div>
        <p>{description}</p>
      </MainCollapse>
      <FooterCollapse>
        <div className="separator"></div>
        <section>
          <div className="icon-group">
            <img src={cancelImg} draggable="false" alt="Task completa" />
          </div>

          <aside>
            <div className="icon-group">
              <Link to="/edit">
                <img src={editImg} draggable="false" alt="Editar task" />
              </Link>
            </div>
            <div className="icon-group">
              <img src={completeImg} draggable="false" alt="Task completa" />
            </div>
          </aside>
        </section>
      </FooterCollapse>
    </Collapse>
  );
}

export default Card;
