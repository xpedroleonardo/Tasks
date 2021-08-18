import { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { New, SectionHeader, Main, Wrapper, Empty } from "./styles";

import api from "../../services/api";
import Card from "../../components/Card";
import Modal from "../../components/Modal";
import plusImg from "../../assets/images/plus.svg";
import emptyImg from "../../assets/images/empty.svg";
import avatarImg from "../../assets/images/avatar.svg";

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

  const [open, setOpen] = useState(false);
  const [idModal, setIdModal] = useState(0);
  const [user, setUser] = useState<UserProps>();
  const [tasks, setTasks] = useState<TaskProps[]>();
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
    if (!user) {
      api.post("/create/user").then();
    }

    api.get("/").then((response) => {
      const { user, tasks } = response.data;
      setUser(user);
      setTasks(tasks);
    });
  }, [open, user]);

  const userImg = user?.avatar ? user.avatar : avatarImg;

  return (
    <>
      <header>
        <div className="container">
          <SectionHeader>
            <h1>Tasks</h1>

            <aside>
              <Link to="/profile">
                <img
                  src={userImg}
                  alt="Foto de perfil"
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
            <Link to="/new" title="Nova Task">
              <img src={plusImg} alt="Nova task" />
            </Link>
          </New>

          <Wrapper>
            {tasks?.length ? (
              tasks?.map((task) => {
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
              })
            ) : (
              <Empty className="animate-up">
                <img src={emptyImg} alt="Sem tasks" draggable="false" />
                <div className="empty-text">
                  <h2>Sem Tasks</h2>
                  <span>Quando criar uma task, ela irá aparecer aqui</span>
                </div>
              </Empty>
            )}
          </Wrapper>
        </Main>
      </div>
    </>
  );
}

export default Home;
