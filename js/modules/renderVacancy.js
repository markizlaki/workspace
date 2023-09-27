import { cardsList, observer, pagination } from "../script.js";
import { createCards } from "./createCards.js";

export const renderVacancies = (data) => {
    cardsList.textContent = "";
    const cards = createCards(data);
    cardsList.append(...cards);
    
    if (data.pagination) {
        Object.assign(pagination, data.pagination);
    }
    if (cardsList.lastElementChild === null) {
        cardsList.innerHTML = `<p>Вакансий не найдено. Измените фильтр поиска</p>`;
    };

    observer.observe(cardsList.lastElementChild);
};