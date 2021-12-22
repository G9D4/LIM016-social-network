// import { ModalEditProfile } from "../components/ModalEditProfile.js";

export const ModalEditProfile = () => {
  const $modalContenedor = document.createElement("div");
  $modalContenedor.classList.add("modal__contenedor");
  $modalContenedor.classList.add("modal-cerrar");

  const profileContainer = document.createElement("div");
  profileContainer.classList.add("modal-profile");
  $modalContenedor.append(profileContainer);

  // Cabecera del modal

  const headerModal = document.createElement("div");
  headerModal.classList.add("modal-profile__header");

  const titulo = document.createElement("h2");
  titulo.classList.add("modal-profile__title");
  titulo.textContent = "Edita tu perfil";

  const closeIcon = document.createElement("span");
  closeIcon.classList.add("icon-icon-close", "modal-profile__closeIcon");
  // profileContainer.append(headerModal)

  headerModal.append(titulo);
  headerModal.append(closeIcon);

  //   Contenedor Base de foto del usuario
  const photoContainer = document.createElement("div");
  photoContainer.classList.add("photo__container");

  //   Imagen del usuario Contenedor
  const imgAvatarContainer = document.createElement("div");
  imgAvatarContainer.classList.add("photo__avatar-container");

  const photoAvatar = document.createElement("img");
  photoAvatar.classList.add("photo__avatar-img");
  photoAvatar.alt = "imgAvatar";
  photoAvatar.src = "../src/app/assets/brooke-cagle-k9XZPpPHDho-unsplash.jpg";

  imgAvatarContainer.append(photoAvatar);

  // Icono para editar imagen del usuario
  const iconPhotoContainer = document.createElement("div");
  iconPhotoContainer.classList.add("photo__edit-img", "hidden");
  const iconPhoto = document.createElement("span");
  iconPhoto.classList.add("icon-pencil", "pencil");

  iconPhotoContainer.append(iconPhoto);
  imgAvatarContainer.append(iconPhotoContainer);

  photoContainer.append(imgAvatarContainer);

  // -------------
  // Datos del usuario Formulario

  // Contenedor Base del formulario
  const formContainer = document.createElement("div");
  // todo: cambiar clase de modal

  formContainer.classList.add("modal-profile__container");
  // formContainer.classList.add("formProfile__container");

  // * Grupo: Nombre del usuario
  const groupName = document.createElement("div");
  groupName.classList.add("formProfile__group");

  //   Input nombre
  const inputName = document.createElement("input");
  inputName.type = "text";
  inputName.id = "name";
  inputName.classList.add("modal-profile__input");
  inputName.placeholder = "Nombre";

  //  Nombre Obligatorio
  const requiredName = document.createElement("span");
  requiredName.classList.add("modal-profile__required");
  requiredName.textContent = "*";

  groupName.append(inputName);
  groupName.append(requiredName);

  // -----------------------------

  // * Grupo: Fecha de Nacimiento del usuario
  const groupDate = document.createElement("div");
  groupDate.classList.add("formProfile__group");

  //   Input Fecha

  const inputDate = document.createElement("input");

  inputDate.type = "date";
  inputDate.id = "date";
  inputDate.classList.add("modal-profile__input");

  groupDate.append(inputDate);

  // -----------------------------

  // * Grupo: Correo del usuario
  const groupEmail = document.createElement("div");
  groupEmail.classList.add("formProfile__group");

  //   Input email
  const inputEmail = document.createElement("input");
  inputEmail.type = "email";
  inputEmail.id = "email";
  inputEmail.placeholder = "Correo electrónico";
  inputEmail.classList.add("modal-profile__input");

  //  Email Obligatorio
  const requiredEmail = document.createElement("span");
  requiredEmail.classList.add("modal-profile__required");
  requiredEmail.textContent = "*";

  groupEmail.append(inputEmail);
  groupEmail.append(requiredEmail);

  // -----------------------------

  // * Grupo: Correo del usuario
  const groupPwd = document.createElement("div");
  groupPwd.classList.add("formProfile__group");

  //   Input email
  const inputPwd = document.createElement("input");
  inputPwd.type = "text";
  inputPwd.id = "password";
  inputPwd.placeholder = "Contraseña";
  inputPwd.classList.add("modal-profile__input");

  //   --------

  //  Email Obligatorio
  const requiredPwd = document.createElement("span");
  requiredPwd.classList.add("modal-profile__required");
  requiredPwd.textContent = "*";

  groupPwd.append(inputPwd);
  groupPwd.append(requiredPwd);
  // -----------------------------

  //   Contenedor de campos obligatorios
  const errContainer = document.createElement("div");
  errContainer.classList.add("errContainer");

  const msgErr = document.createElement("span");
  msgErr.classList.add("error-msg");
  //   msgErr.textContent = "Campos obligatorios *";

  errContainer.append(msgErr);
  // -----------------------------

  const btnsContainer = document.createElement("div");
  btnsContainer.classList.add("modal-profile__btns-container");

  const btnCancel = document.createElement("input");
  btnCancel.id = "cancelChanges";
  btnCancel.type = "submit";
  btnCancel.classList.add("modal-profile__btn");
  btnCancel.value = "Editar";

  const btnEdit = document.createElement("input");
  btnEdit.id = "saveChanges";
  btnEdit.type = "submit";
  btnEdit.classList.add("modal-profile__btn");
  btnEdit.value = "Guardar";

  btnsContainer.append(btnCancel);
  btnsContainer.append(btnEdit);

  // -----------------------------

  // Aquí apendizamos todos los datos del usuario
  formContainer.append(groupName);
  formContainer.append(groupDate);
  formContainer.append(groupEmail);
  formContainer.append(groupPwd);
  //   Apendizamos el mensaje de error
  formContainer.append(errContainer);
  //  El botón de Editar
  // formContainer.append(btnEdit);
  // todo: en realidad hay que apendizar el div que tiene a editar o cancelar
  formContainer.append(btnsContainer);

  // -----------------------------

  // const { $modalEditProfile, abrirModalEditProfile, cerrarModalEditProfile } =
  //   ModalEditProfile();

  btnEdit.addEventListener("click", () => {
    // abrirModalEditProfile();
    console.log("editemos el perfil ");
  });

  // $modalEditProfile: $modalContenedor,
  // abrirModalEditProfile: abrirModal,
  // cerrarModalEditProfile: cerrarModal,

  // profileComponent.append(headerBack);
  // profileComponent.append(mainContainer);
  // mainContainer.append(profileContainer);
  profileContainer.append(headerModal);
  profileContainer.append(photoContainer);
  profileContainer.append(formContainer);
  // profileComponent.append($modalEditProfile);

  //   --------------

  // getUserData(user.uid)
  //   .then((user) => {
  //     photoAvatar.src = user.user_photo;
  //     inputDate.type = "date";
  //     inputName.value = user.user_name;
  //     inputDate.value = user.user_birth;
  //     inputPwd.value = user.user_password;
  //     inputEmail.value = user.user_email;

  //     if (user.user_logedBy === "google") {
  //       msgErr.textContent = "Usted está logeado con Google";
  //       msgErr.style.color = "#0f0f0f";
  //       groupDate.classList.add("hidden");
  //       groupPwd.classList.add("hidden");
  //       iconPwd.classList.add("hidden");
  //       btnEdit.classList.add("hidden");
  //     }
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   });

  // user_id: user.uid,
  // user_name: nameN,
  // user_photo: photoUrlN,
  // user_createdAt: user.metadata.createdAt,
  // user_email: emailN,
  // user_password: passwordN,
  // user_logedBy: logedByN,

  //   --------------

  // $modalContenedor.append($formPost);
  //Modal oculto
  $modalContenedor.style.opacity = "0";
  $modalContenedor.style.visibility = "hidden";

  const abrirModal = () => {
    $modalContenedor.style.opacity = "1";
    $modalContenedor.style.visibility = "visible";
    $modalContenedor.classList.toggle("modal-cerrar");
  };
  const cerrarModal = () => {
    $modalContenedor.classList.toggle("modal-cerrar");
    $modalContenedor.style.opacity = "0";
    $modalContenedor.style.visibility = "hidden";
  };

  closeIcon.addEventListener("click", () => {
    cerrarModal();
  });

  return {
    $modalEditProfile: $modalContenedor,
    abrirModalEditProfile: abrirModal,
    cerrarModalEditProfile: cerrarModal,
  };
};
