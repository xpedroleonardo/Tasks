import { FormEvent } from "react";
import Header from "../../components/Header";
import Task from "../../components/Task";

function Edit() {
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
      <Task handleSubmitForm={handleFormSubmitEdit} />
    </>
  );
}

export default Edit;
