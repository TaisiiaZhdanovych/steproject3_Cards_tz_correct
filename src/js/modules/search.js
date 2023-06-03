
import { render } from "./script.js";
// import { fetchData } from "./fetchGet.js";



const clearBtn = document.querySelector(".clear__btn");
clearBtn.addEventListener("click", clearData);
function clearData(event) {
    event.preventDefault();
    let filterInputs = document.querySelectorAll(".inp-clear");
    filterInputs.forEach((el) => {
        el.value = "";
        document.querySelector(".cards-holder").innerHTML = "";
        cards.innerHTML = "";
        searchValue = "";
    });

}


export function clearInputs() 
{let filterInputs = document.querySelectorAll(".inp-clear");
  filterInputs.forEach((el) => {
    el.value = "";
    document.querySelector(".cards-holder").innerHTML = "";
    cards.innerHTML = "";
    searchValue = "";
  }) }
const cards = document.getElementById("cards");



// Зв'язані дропдауни 

document.querySelectorAll(".dropdown").forEach(function (dropdownWrapper) {
    const dpopList = dropdownWrapper.querySelector(".list");
    const dropItems = dpopList.querySelectorAll(".dpopdown-item");
    const dropInput = dropdownWrapper.querySelector(".select-inp");
    dropInput.addEventListener("click", showList);

    // клик по кнопке
    function showList() {
        dpopList.classList.add("list-visible");
        this.classList.toggle("select-inp:active");
    }

    // вибір елементу списку
    dropItems.forEach((item) => {
        item.addEventListener("click", function (e) {
            e.stopPropagation();
            dropInput.innerText = this.innerText;
            dropInput.focus();
            dropInput.value = this.dataset.value;
            filterSearch();
            dpopList.classList.remove("list-visible");
        });
    });

    // клік ззовні дропдауна
    document.addEventListener("click", function (e) {
        if (e.target !== dropInput) {

            dpopList.classList.remove("list-visible");
        }
    });

    // закриття списку табом чи ескейпом
    document.addEventListener("keydown", function (e) {
        if (e.key === "Tab" || e.key === "Escape") {

            dpopList.classList.remove("list-visible");
        }
    });
});

let searchInp = document.getElementById("search-input");

const inpUrgency = document.getElementById("urgency");
const inpStatus = document.getElementById("status");

let searchValue = "";
searchInp.oninput = (event) => {
    event.stopPropagation();
    searchValue = event.target.value;
    filterSearch();
};


// пошук  по дропдаунах та текстовому полю
export async function filterSearch() {
  
  let cardsData = JSON.parse(localStorage.getItem("cardsData"));
  let filterData = [];
  document.querySelector(".cards-holder").innerHTML = "";//div для карточек
  cards.innerHTML = ""; // div для no results
  let count = 0;
  const rgxSearch = new RegExp(searchValue.replace(/[,.\s]+/g, "\\W*"), "i");
  
  let rgxUrgency = new RegExp(inpUrgency.value, "i");
  if (inpUrgency.value === "All") {
    rgxUrgency = RegExp("", "i");
  }
    let rgxStatus = new RegExp(inpStatus.value, "i");
    if (inpStatus.value === "All") {
      rgxStatus = RegExp("", "i");
    }


    cardsData.forEach((card) => {
      if (
        (rgxSearch.test(card.title) || rgxSearch.test(card.name)) &&  //було card.description замість card.name
        rgxUrgency.test(card.urgency) &&
        rgxStatus.test(card.status)
      ) {
        filterData.push(card);
        count++;
      }
    });
    if (count === 0) {
      cards.insertAdjacentHTML(
        "afterbegin",
        '<h2 class="search-result">No results</h2>'
      );
    }
    render(filterData);
}
