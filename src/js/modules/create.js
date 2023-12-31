import { pulseButton, logout, hide } from "./login.js";
import { fetchData } from "./fetchGet.js";
import { NewModal } from "./visitClass.js";
import { Modal } from "./modal.js";
import { clearInputs, filterSearch } from "./search.js";

import { formSelect, writeInputToObject, clear, pushChange, update } from "./functions.js";


export function foundBtn() {
    pulseButton.addEventListener("click", () => {
     pulseButton.style.display = "none"; 
    document.querySelector(".field-search").style.display = "none";// доб. чтоб поля поиска изчезали при открытии окна create
    document.querySelector(".create-form-background")?.remove();
    document.querySelector(".cards-holder").style.display = "none";
    // logout();
    const mod = new Modal();
    mod.formCreateEdit();
    const select = new NewModal();
    select.formCreate();
    let createFormInputsWrapper = document.querySelector(
      ".create-form-input-container"
    );
    let createFormInputs = Array.from(
      createFormInputsWrapper.querySelectorAll("input")
    );
    const excludedInputs = createFormInputs.slice(4);
    excludedInputs.forEach((e) => (e.style.display = "none"));
    const form = document.querySelector(".form-box");
    formSelect(form);
    const createBox = document.querySelector(".create-box");
    document.querySelector(".add").addEventListener("click", (event) => {
      event.preventDefault();
      let outputObj = {};
      writeInputToObject(outputObj);
    pushChange(outputObj);
        
      clearInputs();
      update();

      createBox.remove();
        
      hide();
    
    });
    document.querySelector(".clear").addEventListener("click", (event) => {
      event.preventDefault();
        clear(form);
    
    });
    document.querySelector(".form-btn-cancel").addEventListener("click", () => {
      clear(form);
      createBox.remove();
      document.querySelector(".field-search").style.display = "flex";
      hide();
      filterSearch(); // чтоб рендерелись карточки после создания
    });
  });
    
}
