import { FormEvent } from "react";
import { useHistory } from "react-router-dom";

import Header from "../../components/Header";
import Task from "../../components/Task";
import api from "../../services/api";

function New() {
  const { push } = useHistory();

  async function handleFormSubmitNew(event: FormEvent) {
    event.preventDefault();

    const target = event.target as typeof event.target & {
      title: { value: string };
      description: { value: string };
    };

    const data = {
      title: target.title.value,
      description: target.description.value,
    };

    await api.post("/create/task", data).then(() => push("/"));
  }

  return (
    <>
      <Header title="Nova Task" />
      <Task handleSubmitForm={handleFormSubmitNew} />
    </>
  );
}

export default New;
