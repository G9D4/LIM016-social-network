import {
  enviarIngreso,
  loginGoogle,
  olvideContrasena,
} from "../firebase/firebase-auth.js";
import { Logo } from "./Logo.js";
import { Eslogan } from "./Eslogan.js";

export const Login = () => {
  const root = document.getElementById("root");
  root.classList.add("main-container");

  const $login = document.createElement("div");
  $login.classList.add("login");

  const $logoContainer = Logo();
  const $eslogan = Eslogan("¡Hola de nuevo!");

  const $inputsContainer = document.createElement("div");
  $inputsContainer.classList.add("inputs-container");

  const $form = document.createElement("form");
  $form.classList.add("form");
  $form.id = "form-register";

  const $formInputContainerFirst = document.createElement("div");
  $formInputContainerFirst.classList.add("form__input-container");
  const $iconMail = document.createElement("span");
  $iconMail.classList.add("icon-mail");
  $iconMail.classList.add("form__icon");
  $iconMail.classList.add("form__icon--black");
  const $formInputFirst = document.createElement("input");
  $formInputFirst.classList.add("form__input");
  $formInputFirst.type = "email";
  $formInputFirst.id = "lemail";
  $formInputFirst.name = "lemail";
  $formInputFirst.placeholder = "Correo electrónico";

  $formInputContainerFirst.append($iconMail);
  $formInputContainerFirst.append($formInputFirst);

  const $formInputContainerSecond = document.createElement("div");
  $formInputContainerSecond.classList.add("form__input-container");
  const $iconLock = document.createElement("span");
  $iconLock.classList.add("icon-lock");
  $iconLock.classList.add("form__icon");
  $iconLock.classList.add("form__icon--black");
  const $formInputSecond = document.createElement("input");
  $formInputSecond.classList.add("form__input");
  $formInputSecond.type = "password";
  $formInputSecond.id = "lpassword";
  $formInputSecond.name = "lpassword";
  $formInputSecond.placeholder = "Contraseña";

  $formInputContainerSecond.append($iconLock);
  $formInputContainerSecond.append($formInputSecond);

  $form.append($formInputContainerFirst);
  $form.append($formInputContainerSecond);

  const $errorContainer = document.createElement("div");
  $errorContainer.classList.add("err-container");

  const $msgError = document.createElement("small");
  $msgError.classList.add("error-msg");
  $msgError.id = "errorLogin";
  $msgError.textContent = "";

  $errorContainer.append($msgError);

  const $forgotPsw = document.createElement("span");
  $forgotPsw.classList.add("redirect-text__link");
  $forgotPsw.classList.add("redirect-text__link-small");
  $forgotPsw.textContent = `Olvidé mi contraseña`;

  $forgotPsw.addEventListener("click", olvideContrasena);

  const $btn = document.createElement("div");
  $btn.classList.add("btn");
  $btn.id = "submit-register";
  $btn.addEventListener("click", () => {
    enviarIngreso();
  });

  $btn.href = "/#timeline";
  const $ingresar = document.createElement("span");
  $ingresar.classList.add("btn__text");
  $ingresar.textContent = `Iniciar sesión`;

  $btn.append($ingresar);

  const $btnG = document.createElement("div");
  $btnG.classList.add("btn-g");
  // $btn.href = "/#nada";
  const $googleIcon = document.createElement("span");
  $googleIcon.classList.add("icon-google");
  $googleIcon.classList.add("form__icon");

  const $span1 = document.createElement("span");
  $span1.classList.add("path1");
  const $span2 = document.createElement("span");
  $span2.classList.add("path2");
  const $span3 = document.createElement("span");
  $span3.classList.add("path3");
  const $span4 = document.createElement("span");
  $span4.classList.add("path4");
  const $span5 = document.createElement("span");
  $span5.classList.add("path5");
  const $span6 = document.createElement("span");
  $span6.classList.add("path6");

  $googleIcon.append($span1);
  $googleIcon.append($span2);
  $googleIcon.append($span3);
  $googleIcon.append($span4);
  $googleIcon.append($span5);
  $googleIcon.append($span6);

  const $google = document.createElement("span");
  $google.textContent = `Continuar con Google`;
  $google.addEventListener("click", () => {
    loginGoogle();
  });

  $btnG.append($googleIcon);
  $btnG.append($google);

  const $linkRegister = document.createElement("div");
  $linkRegister.id = "linkLogin";
  $linkRegister.classList.add("redirect-text");

  const $spanAsk = document.createElement("span");
  $spanAsk.textContent = `¿No tienes una cuenta?`;
  $spanAsk.classList.add("redirect-text__left");
  const $link = document.createElement("span");
  $link.classList.add("redirect-text__link");
  $link.id = "register";

  $link.textContent = `Regístrate`;
  $link.addEventListener("click", () => {
    window.location.hash = "#/register";
  });

  $linkRegister.append($spanAsk);
  $linkRegister.append($link);

  $inputsContainer.append($form);
  $inputsContainer.append($forgotPsw);
  $inputsContainer.append($errorContainer);
  $inputsContainer.append($btn);
  $inputsContainer.append($btnG);
  $inputsContainer.append($linkRegister);

  $login.append($logoContainer);
  $login.append($eslogan);
  $login.append($inputsContainer);

  return $login;
};
