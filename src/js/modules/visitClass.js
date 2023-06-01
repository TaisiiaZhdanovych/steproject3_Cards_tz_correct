import { Modal } from "./modal.js";

export class Visit extends Modal {
    constructor(optional) {
        super(optional)      
        this.doctor = optional.doctor;
        this.name = optional.name;
        this.id = optional.id;
        this.title = optional.title;
        this.description = optional.description;
        this.urgency = optional.urgency;
    }

    printCard() {
        let container = document.createElement('div');
        container.classList.add("card-container")
        container.setAttribute('id', this.id);
        let textPart = ` 
        <div class="card-container-p">
        <p>${this.name}</p>
        <p>${this.doctor}</p>
        <button class="card-container-btn-cancel"><img src="./img/cancel (1).svg" alt=""></button>
        <p class="hidden"><img src="./img/Star 1.svg" alt="">${this.urgency}</p>
        <p class="hidden"><img src="./img/Star 1.svg" alt="">Мета візиту:${this.title}</p>
        <p class="hidden"><img src="./img/Star 1.svg" alt="">Опис візиту:${this.description}</p> 
        </div>
        `
        let btnsPart = `<div class="btns-card-container">
        <button class="btn-showMore">SHOW MORE...</button>
        <button class="btn-showLess hidden">HIDE</button>
        <button class="btn-edit hidden">EDIT</button>
    </div>`
        container.innerHTML = textPart + btnsPart;
        let cardHolder = document.querySelector(".cards-holder")
        cardHolder.appendChild(container);
        return container
    }
}

export class NewModal {
    constructor() {
}

//Отрисовать форму изменения карточки
formCreate() {
    let content = ` <form action="#" class="form-box">
    <div class="create-form-select-container">
        <select name="doctor" class="doctor user-box" required="required">
            <option value="Dentist">Стоматолог</option>
            <option value="Cardiologist">Кардіолог</option>
            <option value="Therapist">Терапевт</option>
        </select>
        <select name="urgency" class="urgency user-box" required="required">
            <option value="hight">High</option>
            <option value="normal">Normal</option>
            <option value="low">Low</option>
        </select>
        <select name="status" class="stat user-box" required="required">
            <option value="open">Open</option>
            <option value="done">Done</option>
        </select>
    </div>
    <div class="create-form-input-container">
        <input type="text" name="title" class="title user-box" placeholder="Мета візиту">
        <input type="text" name="description" class="description user-box" placeholder="Короткий опис візиту">
        <input type="text" name="name" class="name user-box" placeholder="ПІБ">
        <input type="date" name="date" class="date user-box" placeholder="Дата останнього відвідування">
        <input type="text" name="pressure" class="pressure user-box" placeholder="Звичайний тиск">
        <input type="number" name="index" class="index user-box" placeholder="Індекс маси тіла">
        <input type="text" name="disease" class="disease user-box" placeholder="Перенесені захворювання">
        <input type="number" name="age" class="age user-box" placeholder="Вік">
    </div>
    <div class="create-form-btn-container">
        <button class="add btn-add-form-create">
            Create
        </button>
        <button class="clear btn-clear-form-create">
            Clear</button>
    </div>
</form>`
    document.querySelector('.create-box').insertAdjacentHTML('beforeend', content);
}
    //Отрисовать форму создания карточки
    formEdit() {
    let cont = document.createElement('div');
    cont.classList.add("login-box");
    cont.classList.add("create-box");
    cont.classList.add("edit-box");
    let formm = ` <form action="#" class="form-box">
    <div class="create-form-select-container">
        <select name="doctor" class="doctor user-box" required="required">
            <option value="Dentist">Стоматолог</option>
            <option value="Cardiologist">Кардіолог</option>
            <option value="Therapist">Терапевт</option>
        </select>
        <select name="urgency" class="urgency user-box" required="required">
            <option value="hight">High</option>
            <option value="normal">Normal</option>
            <option value="low">Low</option>
        </select>
        <select name="status" class="stat user-box" required="required">
            <option value="open">Open</option>
            <option value="done">Done</option>
        </select>
    </div>
    <div class="create-form-input-container">
        <input type="text" name="title" class="title user-box" placeholder="Мета візиту">
        <input type="text" name="description" class="description user-box" placeholder="Короткий опис візиту">
        <input type="text" name="name" class="name user-box" placeholder="ПІБ">
        <input type="date" name="date" class="date user-box" placeholder="Дата останнього відвідування">
        <input type="text" name="pressure" class="pressure user-box" placeholder="Звичайний тиск">
        <input type="number" name="index" class="index user-box" placeholder="Індекс маси тіла">
        <input type="text" name="disease" class="disease user-box" placeholder="Перенесені захворювання">
        <input type="number" name="age" class="age user-box" placeholder="Вік">
        <input type="number" name="id" class="id user-box" style="display: none">
    </div>
    <div class="create-form-btn-container">
        <button id="push" class="btn-add-form-create">
            Edit
        </button>
        <button class="clear btn-clear-form-create">
            Clear</button>
    </div>
</form>`
        document.querySelector('.create-box').insertAdjacentHTML('beforeend', formm);
}

//Отрисовать форму логина
loginForm() {
    let content = `<form>
        <div class="user-box">
            <input type="text" name="username" id='username' required="" autocomplete="off">
            <label>Username</label>
        </div>
        <div class="user-box">
            <input type="password" name="password" id="password" required="">
            <label>Password</label>
        </div>
        <a href="#" class="sub">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Submit
        </a>
    </form>`
    document.querySelector('.login-box').insertAdjacentHTML('beforeend', content);
}
}
