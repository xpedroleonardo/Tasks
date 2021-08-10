import { useState } from "react";
import { useEffect } from "react";
import { FormEvent } from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/Header";
import Task from "../../components/Task";
import api from "../../services/api";

type Params = {
  id: string;
};

type TaskProps = {
  id: number;
  title: string;
  description: string;
  completed: boolean;
  created_at: string;
  updated_at: string;
};

function Edit() {
  const { id } = useParams<Params>();
  const [task, setTask] = useState<TaskProps>();

  useEffect(() => {
    api.get(`/task/${id}`).then((res) => setTask(res.data));
  }, [id]);

  function handleFormSubmitEdit(event: FormEvent) {
    event.preventDefault();

    const target = event.target as typeof event.target & {
      title: { value: string };
      description: { value: string };
    };

    const title = target.title.value; // typechecks!
    const description = target.description.value;

    console.log("Title: ", title);
    console.log("Description: ", description);
  }

  return (
    <>
      <Header title="Editar task" />
      <Task task={task} handleSubmitForm={handleFormSubmitEdit} />
    </>
  );
}

export default Edit;
