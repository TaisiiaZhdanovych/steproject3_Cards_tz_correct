import { Visit } from "./visitClass.js"

export class visitTherapist extends Visit {
    constructor(optional) {
        super(optional)
        this.age = optional.age
    }

    addTherapistCard() {
        let card = super.printCard()
        let age = document.createElement('p');
        const imgSrc = './img/Star 1.svg';
        age.innerHTML = `<img src="${imgSrc}" alt=""> Вік: ${this.age}`;
        age.classList.add("age", "hidden")
        card.children[0].append(age)
    }
}