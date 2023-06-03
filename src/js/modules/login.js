export const btnLogin = document.querySelector('.login');
export const cardsHolder = document.querySelector('.cards-holder');
export const pulseButton = document.querySelector('.pulse-button');
export const filterContainer = document.querySelector('.field-search');
import { NewModal } from "./visitClass.js";
import { Modal } from "./modal.js";
import { logVal,refreshData } from "./checkLogin.js";
import { foundBtn } from "./create.js";
import { clearInputs, filterSearch} from "./search.js"  // добавила для рендеру карток при логіні

//document.querySelector(".vacuum");
btnLogin.onclick= () => {
  if (btnLogin.value ==='Logout') {

  localStorage.removeItem("token");

  }
  check();
   if (!localStorage.getItem("token") && !document.querySelector(".login-box")) {
     // добавила if
     console.log("test");
     const background = new Modal();
     background.loginForm();
     document.querySelector(".vacuum").style.display = "none"; // добавила для скриття No items have been added.
     const log = new NewModal(); //?

     log.loginForm();
     logVal();

     document
       .querySelector(".login-form-btn-cancel")
       .addEventListener("click", () => {
         document.querySelector(".login-box").remove();
       });
   }
};

//Функция проверки на логинизацию по кнопке
export async function check() {
  if (localStorage.getItem("token")) {
    login();
   await refreshData();
    
  } else {
    // пофіксила перезавантаження сторінки
    logout();

  }
  // if (btnLogin.value ==='Login') {
  //   // document.querySelector('.vacuum').style.display = 'none'; // було

  //   logout();

  // } else if (btnLogin.value ==='Logout') {

  //   document.querySelector('.login-box')?.remove();

  // }
}

//Функция скрытия блоков при открытии модального окна
export function hide() {
  btnLogin.value = "Logout";
  cardsHolder.style.display = "block";
  pulseButton.style.display = "block";
  filterContainer.style.display = "flex";

  document.querySelector(".vacuum").style.display = "none"; // добавила для скриття No items have been added.
 // filterSearch(); // добавила для рендеру карток при логіні
}

//Функция скрытия контента при входе в аккаунт
export function login() {
  foundBtn(); // поставила для того щоб з'являлася картка
  hide();
  document.querySelector(".login-box")?.remove();
  

}

//Функция открытия контента при выходе из аккаунта
export function logout() {
  btnLogin.value = "Login";
  cardsHolder.style.display = 'none';
  pulseButton.style.display = 'none';
  filterContainer.style.display = 'none';

  document.querySelector(".vacuum").style.display = "block";
  clearInputs()   //добавила щоб не виводило no rezults
  // document.querySelector(".login-box").remove();

  localStorage.removeItem("token");

}

check();
// filterSearch();
//console.log(check(), "hjgjhg")
// logout();


