import { Link, useHistory } from "react-router-dom";
import { useEffect, useState } from "react";

import { New, SectionHeader, Main, Wrapper } from "./styles";
import Modal from "../../components/Modal";
import api from "../../services/api";

import avatarImg from "../../assets/images/avatar.svg";
import plusImg from "../../assets/images/plus.svg";
import Card from "../../components/Card";

type UserProps = {
  name: string;
  avatar: string;
};

type TaskProps = {
  id: number;
  title: string;
  description: string;
  completed: boolean;
};

function Home() {
  const { push } = useHistory();

  const [idModal, setIdModal] = useState(0);
  const [user, setUser] = useState<UserProps>();
  const [tasks, setTasks] = useState<TaskProps[]>();
  const [open, setOpen] = useState(false);
  const [modalShow, setModalShow] = useState(false);

  function modalOpen() {
    setOpen(!open);
    push("/");
  }

  function modalStatus(action: string, id: number) {
    if (action === "D") {
      setModalShow(true);
      modalOpen();
    } else {
      setModalShow(false);
      modalOpen();
    }

    setIdModal(id);
  }

  useEffect(() => {
    api.get("/").then((response) => {
      const { user, tasks } = response.data;
      setUser(user);
      setTasks(tasks);
    });
  }, [open]);

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
                  title="Perfil"
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
            {tasks?.map((task) => {
              return (
                <div className="tasks-key" key={task.id}>
                  <Card task={task} modal={modalStatus} user={{ ...user }} />
                  <Modal
                    id={idModal}
                    modalDelete={modalShow}
                    isOpen={modalOpen}
                    open={open}
                  />
                </div>
              );
            })}
          </Wrapper>
        </Main>
      </div>
    </>
  );
}

export default Home;
