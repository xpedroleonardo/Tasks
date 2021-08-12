import { useState, useEffect, FormEvent } from "react";
import { useHistory, useParams } from "react-router-dom";

import api from "../../services/api";
import Task from "../../components/Task";
import Header from "../../components/Header";

type Params = {
  id: string;
};

type TaskProps = {
  title: string;
  description: string;
  completed: boolean;
};

function Edit() {
  const { id } = useParams<Params>();
  const { push } = useHistory();
  const [task, setTask] = useState<TaskProps>();

  useEffect(() => {
    api.get(`/task/${id}`).then((res) => setTask(res.data));
  }, [id]);

  if (task?.completed) {
    push("/");
  }

  async function handleFormSubmitEdit(event: FormEvent) {
    event.preventDefault();

    const target = event.target as typeof event.target & {
      title: { value: string };
      description: { value: string };
    };

    const data = {
      title: target.title.value,
      description: target.description.value,
    };

    await api.put(`/update/task/${id}`, data).then(() => push("/"));
  }

  return (
    <>
      <Header title="Editar task" />
      <Task task={task} handleSubmitForm={handleFormSubmitEdit} />
    </>
  );
}

export default Edit;
