import ReactModal from "react-modal";
import { FormEvent } from "react";
import { useHistory } from "react-router-dom";

import deleteImg from "../../assets/images/cancel.svg";
import completeImg from "../../assets/images/circle-ok.svg";
import api from "../../services/api";

type ModalProps = {
  id: number;
  open: boolean;
  modalDelete: boolean;
  isOpen(): void;
};

function Modal(props: ModalProps) {
  const { id, open, modalDelete, isOpen } = props;

  function Completed(event: FormEvent, id: number) {
    event.preventDefault();
  }

  async function Delete(event: FormEvent, id: number) {
    event.preventDefault();

    await api.delete(`/delete/${id}`).then(() => isOpen());
  }

  return (
    <ReactModal ariaHideApp={false} isOpen={open} className="modal-wrapper">
      <div className="modal animate-pop">
        {modalDelete ? (
          <>
            <img
              src={deleteImg}
              draggable="false"
              alt="Excluir task"
              title="Excluir task"
            />

            <h3>Excluir Task</h3>

            <p>
              Quer mesmo excluir esse job? <br />
              Ele será apagado para sempre.
            </p>
          </>
        ) : (
          <>
            <img
              src={completeImg}
              draggable="false"
              alt="Task completa"
              title="Task completa"
            />
            <h3>Task Completa</h3>

            <p>
              Já completou essa task ? <br />
              Ela será removida da sua lista.
            </p>
          </>
        )}

        <footer>
          <button onClick={isOpen} className="button gray">
            Cancelar
          </button>
          {modalDelete ? (
            <>
              <button className="button red" type="submit" form="delete-task">
                Excluir Task
              </button>
              <form
                onSubmit={(event) => Delete(event, id)}
                id="delete-task"
              ></form>
            </>
          ) : (
            <>
              <button
                className="button grenn"
                type="submit"
                form="completed-task"
              >
                Task Completa
              </button>
              <form
                onSubmit={(event) => Completed(event, id)}
                id="completed-task"
              ></form>
            </>
          )}
        </footer>
      </div>
    </ReactModal>
  );
}

export default Modal;
