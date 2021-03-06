import toast from "react-hot-toast";
import { useHistory } from "react-router-dom";
import { useState, useEffect, FormEvent } from "react";
import { Main, Group } from "./styles";

import Header from "../../components/Header";
import avatarImg from "../../assets/images/avatar.svg";
import fileImg from "../../assets/images/file.svg";
import api from "../../services/api";

type ProfileProps = {
  name: string;
  avatar: string;
};

function Profile() {
  const { push } = useHistory();
  const [image, setImage] = useState("");
  const [user, setUser] = useState<ProfileProps>();

  const ImageProfile = user?.avatar ? user.avatar : avatarImg;

  useEffect(() => {
    api.get("/user").then((res) => {
      const { name, avatar } = res.data;
      setUser({ name, avatar });
    });
  }, []);

  function imagePreview(event: any) {
    const name = event.target.files[0]?.name || "";
    const img = document.querySelector(".avatar");
    const labelImg = document.querySelector("#image span");
    setImage(event.target.files[0]);

    if (img && name !== "") {
      let preview = URL.createObjectURL(event.target.files[0]);

      img.setAttribute("src", preview);
      if (labelImg) labelImg.innerHTML = name;
    }
  }

  async function formSubmit(event: FormEvent) {
    event.preventDefault();

    const { name } = event.target as typeof event.target & {
      name: { value: string };
    };

    const data = new FormData();
    data.append("name", name.value);
    const imageForm = image ? image : String(user?.avatar);

    data.append("avatar", imageForm);

    await api.put("/update/user", data).then((res) => {
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
      <Header title="Perfil" />
      <Main>
        <div className="container animate-up">
          <form
            onSubmit={formSubmit}
            autoComplete="off"
            encType="multipart/form-data"
          >
            <section>
              <img
                src={ImageProfile}
                className="avatar"
                draggable="false"
                alt="Foto de Perfil"
              />

              <Group>
                <label htmlFor="name">Nome</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  maxLength={25}
                  required
                  placeholder="Digite seu nome..."
                  defaultValue={user?.name ? user.name : ""}
                />
              </Group>
              <Group>
                <label htmlFor="image">Imagem</label>
                <label htmlFor="imageInput" id="image">
                  <img src={fileImg} className="icon" alt="" />
                  <span>Selecione uma imagem</span>
                </label>
                <input
                  onChange={imagePreview}
                  type="file"
                  name="avatar"
                  id="imageInput"
                />
              </Group>
              <Group>
                <button type="submit">Enviar</button>
              </Group>
            </section>
          </form>
        </div>
      </Main>
    </>
  );
}

export default Profile;
