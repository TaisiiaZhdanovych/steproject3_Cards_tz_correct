export const btnLogin = document.querySelector('.login');
export const cardsHolder = document.querySelector('.cards-holder');
export const pulseButton = document.querySelector('.pulse-button');
export const filterContainer = document.querySelector('.field-search');
import { NewModal } from "./visitClass.js";
import { Modal } from "./modal.js";
import { logVal } from "./checkLogin.js";

btnLogin.addEventListener('click', () => {
  const background = new Modal;
  background.loginForm();
  const log = new NewModal;
  log.loginForm();
  logVal();
  check();
  document.querySelector('.login-form-btn-cancel').addEventListener('click', ()=>{
    document.querySelector('.login-box').remove();
  })
});

//Функция проверки на логинизацию по кнопке
export function check() {
  if (btnLogin.value = 'Login') {
    document.querySelector('.vacuum').style.display = 'none';
    logout();
  } else if ((btnLogin.value = 'Logout')) {
    document.querySelector('.login-box').remove();
  }
}

//Функция скрытия блоков при открытии модального окна
export function hide() {
  btnLogin.value = 'Logout';
  cardsHolder.style.display = 'block';
  pulseButton.style.display = 'block';
  filterContainer.style.display = 'flex';
}

//Функция скрытия контента при входе в аккаунт
export function login() {
  hide();
  document.querySelector('.login-box').remove();
}

//Функция открытия контента при выходе из аккаунта
export function logout() {
  cardsHolder.style.display = 'none';
  pulseButton.style.display = 'none';
  filterContainer.style.display = 'none';
}
logout();