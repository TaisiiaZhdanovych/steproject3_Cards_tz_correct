import { logout, hide} from "./login.js";
import { NewModal } from "./visitClass.js";
import { Modal } from "./modal.js";
import { get, writeInputToObject, clear, pushEdit, formSelect } from "./functions.js";

export function edit() {
    let editBtn = document.querySelectorAll('.btn-edit');
    editBtn.forEach(elem => {
        elem.addEventListener('click', () => {
            logout();
            let cardid = elem.parentNode.parentElement.id;
            const edit = new Modal;
            edit.formEdit();
            const editMain = new NewModal;
            editMain.formEdit();
            get(cardid);
            let createBox = document.querySelector('.create-box');
            let form = document.querySelector(".form-box");
            formSelect(form);
            document.querySelector('.form-btn-cancel').addEventListener('click', ()=> {
                clear(form);
                createBox.remove();
                hide();
            })
            form.querySelector('.clear').addEventListener('click', (event)=> {
                clear(form);
                event.preventDefault();
            })
            document.getElementById('push').addEventListener('click', (event)=> {
                event.preventDefault();
                let outputObj = {};
                writeInputToObject(outputObj);
                pushEdit(outputObj, outputObj.id);
                hide();
                createBox.remove();
            })
        })
    })
}
