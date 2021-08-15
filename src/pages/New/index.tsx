import { FormEvent } from "react";
import { useHistory } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

import api from "../../services/api";
import Task from "../../components/Task";
import Header from "../../components/Header";

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

    await api.post("/create/task", data).then((res) => {
      const { error } = res.data;

      if (error) {
        toast.error(error);
      } else {
        push("/");
      }
    });
  }

  return (
    <>
      <Header title="Nova Task" />
      <Toaster position="top-center" reverseOrder={false} />
      <Task handleSubmitForm={handleFormSubmitNew} />
    </>
  );
}

export default New;
