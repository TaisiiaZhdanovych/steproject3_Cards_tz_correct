import { token } from "./fetchGet.js";
import { fetchData } from "./fetchGet.js";

//Функция удаления карточки
export async function del() {
    let del = document.querySelectorAll('.card-container-btn-cancel');
    del.forEach(elem => {
        elem.addEventListener('click', () => {
            let cardid = elem.parentNode.offsetParent.id;
            let card = elem.parentNode.offsetParent;
            fetch(`https://ajax.test-danit.com/api/v2/cards/${cardid}`, {
                method: 'DELETE',
                headers: {
                    'Authorization': `Bearer ${token()}`
                },
            })
            card.innerHTML = `<div class="card">Картка під номером: ${cardid} видалена</div>`;
            setTimeout(() => {
                 const parseCards = JSON.parse(
                   localStorage.getItem("cardsData")
                 ); //поправила, щоб не було нового фетчзапиту при видаленні стрічка 20-26
                 const filterCards = parseCards.filter((card) => {
                   return card.id !== +cardid;
                 });

                 localStorage.setItem("cardsData", JSON.stringify(filterCards));
                 card.remove();
            }, 2000);
            
        })
    })
// await fetchData();
}