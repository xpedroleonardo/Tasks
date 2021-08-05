import Header from "../../components/Header";

import avatarImg from "../../assets/images/avatar.svg";
import fileImg from "../../assets/images/file.svg";

import { Main, Group } from "./styles";

function Profile() {
  function imagePreview(event: any) {
    const name = event.target.files[0].name;
    const img = document.querySelector(".avatar");
    const labelImg = document.querySelector("#image span");

    console.log(event);
    if (img) {
      let preview = URL.createObjectURL(event.target.files[0]);
      img.setAttribute("src", preview);
      if (labelImg) labelImg.innerHTML = name;
    }
  }

  return (
    <>
      <Header title="Perfil" />
      <Main>
        <div className="container">
          <form action="" autoComplete="off" encType="multipart/form-data">
            <section>
              <img
                src={avatarImg}
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
                  required
                  placeholder="Digite seu nome..."
                />
              </Group>
              <Group>
                <label htmlFor="image">Imagem</label>
                <label htmlFor="imageInput" id="image">
                  <img src={fileImg} className="icon" alt="" />
                  <span> Selecione uma imagem </span>
                </label>
                <input
                  onChange={imagePreview}
                  type="file"
                  name="image"
                  id="imageInput"
                  required
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
