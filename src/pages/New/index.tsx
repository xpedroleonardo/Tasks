import { FormEvent } from "react";
import Header from "../../components/Header";
import Task from "../../components/Task";

function New() {
  function handleFormSubmitNew(event: FormEvent) {
    event.preventDefault();
  }

  return (
    <>
      <Header title="Nova Task" />
      <Task handleSubmitForm={handleFormSubmitNew} />
    </>
  );
}

export default New;
